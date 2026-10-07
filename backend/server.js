const express = require('express');
const cors = require('cors');
const nodeFetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs').promises;
const path = require('path');
const { SEASON_WINDOWS, seasonForDate, yearsOfSeason, isSeasonName } = require('./lib/seasons');
const { toStorageKey, parseStorageKey, todayPacific } = require('./lib/dateKey');
const { getFirebaseAuthParam, authMode } = require('./lib/firebaseAuth');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const FB_BASE = process.env.FB_BASE || 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';

// All Firebase calls go through here: the backend's credential is appended to
// every FB_BASE URL (see lib/firebaseAuth.js), so the database rules can deny
// all public access. Errors are re-thrown with the credential redacted so it
// never lands in the logs.
async function fetch(url, opts) {
    if (typeof url !== 'string' || !url.startsWith(FB_BASE)) return nodeFetch(url, opts);
    const auth = await getFirebaseAuthParam();
    const authedUrl = auth ? url + (url.includes('?') ? '&' : '?') + auth : url;
    try {
        return await nodeFetch(authedUrl, opts);
    } catch (e) {
        throw new Error(`Firebase request failed for ${url}: ${String(e.message).split(authedUrl).join(url)}`);
    }
}

console.log(`Firebase auth mode: ${authMode}`);

// Frontend sport names -> Firebase sport keys
const SPORT_ALIASES = {
    cbb: 'ncaab',
    cfb: 'ncaaf'
};

// Normalize :sport on every route that takes it, so Firebase paths always use
// the canonical key (e.g. /api/cbb/addGame writes under ncaab)
app.param('sport', (req, res, next, sport) => {
    req.params.sport = SPORT_ALIASES[sport] || sport;
    next();
});

// ── SPORT-SPECIFIC ROUTES (DYNAMIC) ──────────────────────────

// Helper: convert a day's games from the Firebase format to the app's format
function transformGames(gamesObj, sport) {
    gamesObj = gamesObj || {};
    if (Array.isArray(gamesObj)) {
        return gamesObj.filter(game => game && typeof game === 'object').map(game => ({
            t1: game.away?.team || '',
            t2: game.home?.team || '',
            o1: game.away?.odds || '',
            o2: game.home?.odds || '',
            s1: parseInt(game.away?.seed) || 0,
            s2: parseInt(game.home?.seed) || 0,
            i1: parseInt(game.away?.injuries) || 0,
            i2: parseInt(game.home?.injuries) || 0,
            wl1: game.away?.record || '',
            wl2: game.home?.record || '',
            l1: game.away?.last10 || '',
            l2: game.home?.last10 || '',
            pick: game.pick || '',
            res: game.res || null,
            edge: game.edge || '',
            _id: game._id || Date.now() + Math.random()
        }));
    }
    // Object - preserve Firebase keys as _id; skip "_" placeholders and empty games
    return Object.entries(gamesObj)
        .filter(([firebaseKey, game]) => {
            if (firebaseKey === '_') return false;
            if (typeof game !== 'object' || game === null) return false;
            if (!game.away?.team && !game.home?.team && !game.t1 && !game.t2) return false;
            return true;
        })
        .map(([firebaseKey, game]) => ({
            t1: game.away?.team || game.t1 || '',
            t2: game.home?.team || game.t2 || '',
            o1: game.away?.odds || game.o1 || '',
            o2: game.home?.odds || game.o2 || '',
            s1: parseInt(game.away?.seed || game.s1) || 0,
            s2: parseInt(game.home?.seed || game.s2) || 0,
            i1: parseInt(game.away?.injuries || game.i1) || 0,
            i2: parseInt(game.home?.injuries || game.i2) || 0,
            wl1: game.away?.record || game.wl1 || '',
            wl2: game.home?.record || game.wl2 || '',
            l1: game.away?.last10 || game.l1 || '',
            l2: game.home?.last10 || game.l2 || '',
            pick: game.pick || '',
            res: game.res || null,
            edge: game.edge || '',
            sport: sport,
            _id: firebaseKey
        }));
}

const DAY_MS = 1000 * 60 * 60 * 24;
const pad2 = n => String(n).padStart(2, '0');

// One calendar day in the app's format. `day` is the day of that year
// (Jan 1 = 1, leap years included); `season` is null in the offseason.
function buildDay(sport, d, season, dayData) {
    dayData = dayData || {};
    return {
        day: Math.round((Date.UTC(d.year, d.month - 1, d.day) - Date.UTC(d.year, 0, 1)) / DAY_MS) + 1,
        date: `${pad2(d.month)}-${pad2(d.day)}`,
        year: d.year,
        iso: `${d.year}-${pad2(d.month)}-${pad2(d.day)}`,
        season,
        type: dayData.type || 'REAL',
        overall: dayData.overall || '',
        unlocked: dayData.unlocked || false,
        games: transformGames(dayData.games, sport)
    };
}

// GET state for ANY sport: a normal Jan 1 – Dec 31 calendar for ?year=YYYY
// (default: this year, Pacific). Each date is pulled from the season it
// belongs to, so one year can span two seasons; offseason dates are empty.
// seasonDays holds the stored days of those seasons that fall outside the
// year, so the app can total records and graphs by season.
app.get('/api/state/:sport', async (req, res) => {
    try {
        const sport = req.params.sport;
        const r = await fetch(`${FB_BASE}/${sport}.json`);
        if (!r.ok) throw new Error(`Firebase responded ${r.status}`);
        const data = (await r.json()) || {};

        if (SEASON_WINDOWS[sport]) {
            const today = todayPacific();
            const year = /^\d{4}$/.test(String(req.query.year || '')) ? Number(req.query.year) : today.year;
            const stored = data.betLog || {};
            const seasons = Object.keys(stored).filter(isSeasonName).sort();

            const calendar = [];
            for (let t = Date.UTC(year, 0, 1); t < Date.UTC(year + 1, 0, 1); t += DAY_MS) {
                const dt = new Date(t);
                const d = { year, month: dt.getUTCMonth() + 1, day: dt.getUTCDate() };
                const season = seasonForDate(sport, d.year, d.month);
                const dayData = season ? (stored[season] || {})[toStorageKey(d.year, d.month, d.day)] : null;
                calendar.push(buildDay(sport, d, season, dayData));
            }

            const seasonDays = [];
            new Set(calendar.map(d => d.season).filter(Boolean)).forEach(season => {
                Object.entries(stored[season] || {}).forEach(([key, dayData]) => {
                    const d = parseStorageKey(key);
                    if (d && d.year !== year && seasonForDate(sport, d.year, d.month) === season) {
                        seasonDays.push(buildDay(sport, d, season, dayData));
                    }
                });
            });
            seasonDays.sort((a, b) => a.iso.localeCompare(b.iso));

            // Years with stored seasons, up to this year (no empty future years)
            const years = new Set([today.year]);
            seasons.forEach(se => yearsOfSeason(se).forEach(y => { if (y <= today.year) years.add(y); }));

            data.betLog = calendar;
            data.seasonDays = seasonDays;
            data.year = year;
            data.years = [...years].sort();
            data.seasons = seasons;
            data.currentSeason = seasonForDate(sport, today.year, today.month);
            data.season = data.currentSeason;
            data.seasonWindow = SEASON_WINDOWS[sport];
        }

        res.json(data);
    } catch(e) {
        console.error(`${req.params.sport.toUpperCase()} GET failed:`, e);
        res.status(500).json({ error: `Failed to load ${req.params.sport} data` });
    }
});

// "MM-DD" plus the year the app sends -> { year, month, day }. Older app
// versions don't send a year; then the year whose date is closest to today
// is used. Returns null for an invalid date.
function resolveDate(mmdd, year) {
    const [month, day] = String(mmdd || '').split('-').map(Number);
    let y = Number(year);
    if (!(Number.isInteger(y) && y >= 2000 && y < 3000)) {
        const t = todayPacific();
        const today = Date.UTC(t.year, t.month - 1, t.day);
        y = [t.year - 1, t.year, t.year + 1]
            .sort((a, b) => Math.abs(Date.UTC(a, month - 1, day) - today) - Math.abs(Date.UTC(b, month - 1, day) - today))[0];
    }
    const check = new Date(Date.UTC(y, month - 1, day));
    if (!month || !day || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) return null;
    return { year: y, month, day };
}

// Firebase location of a sport's day — the season comes from the date itself.
// null in that sport's offseason (offseason dates are never stored).
function dayPath(sport, d) {
    const season = seasonForDate(sport, d.year, d.month);
    return season ? `${FB_BASE}/${sport}/betLog/${season}/${toStorageKey(d.year, d.month, d.day)}` : null;
}

const offseasonError = (sport, d) =>
    `${d.year}-${pad2(d.month)}-${pad2(d.day)} is in the ${sport.toUpperCase()} offseason — nothing is stored on offseason days`;

// Helper: Reverse transform - convert array back to date-keyed object
function reverseBetLog(betLogArray) {
    if (!Array.isArray(betLogArray)) return betLogArray;

    const betLogObj = {};

    betLogArray.forEach(day => {
        if (!day.date) return; // Skip if no date

        // Convert games back to away/home format
        const reversedGames = (day.games || []).map(game => {
            return {
                away: {
                    team: game.t1 || '',
                    odds: game.o1 || '',
                    seed: game.s1 || 0,
                    injuries: game.i1 || 0,
                    record: game.wl1 || '',
                    last10: game.l1 || ''
                },
                home: {
                    team: game.t2 || '',
                    odds: game.o2 || '',
                    seed: game.s2 || 0,
                    injuries: game.i2 || 0,
                    record: game.wl2 || '',
                    last10: game.l2 || ''
                },
                pick: game.pick || '',
                res: game.res || null,
                edge: game.edge || '',
                _id: game._id || Date.now() + Math.random()
            };
        });

        betLogObj[day.date] = {
            type: day.type || 'REAL',
            overall: day.overall || '',
            unlocked: day.unlocked || false,
            games: reversedGames
        };
    });

    return betLogObj;
}

// POST state for ANY sport
app.post("/api/state/:sport", async (req, res) => {
    try {
        const sport = req.params.sport;
        const payload = req.body;

        // Remove fields that shouldn't be saved to Firebase
        delete payload.betLog;
        delete payload.activeBetDay;
        delete payload.bankroll;

        // Only save if there's something left to save
        if (Object.keys(payload).length === 0) {
            return res.json({ message: 'No data to save (betLog managed manually)' });
        }

        const r = await fetch(`${FB_BASE}/${sport}.json`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await r.json();
        console.log(`✅ ${sport.toUpperCase()} data saved to Firebase`);
        res.json(data);
    } catch(e) {
        console.error(`${req.params.sport.toUpperCase()} POST failed:`, e);
        res.status(500).json({ error: `Failed to save ${req.params.sport} data` });
    }
});

// ── DELETE game from bet log (legacy - uses day index) ──────────────────────────────────
app.delete('/api/state/:sport/:dayIndex/:gameIndex', async (req, res) => {
    try {
        const { sport, dayIndex, gameIndex } = req.params;
        const r = await fetch(`${FB_BASE}/${sport}/betLog/${dayIndex}/games/${gameIndex}.json`, {
            method: 'DELETE'
        });
        const data = await r.json();
        console.log(`✅ Deleted game ${gameIndex} from ${sport} day ${dayIndex}`);
        res.json(data);
    } catch(e) {
        console.error('DELETE failed:', e);
        res.status(500).json({ error: 'Failed to delete game' });
    }
});

// ── DELETE game by date and gameId ──────────────────────────────────
app.delete('/api/:sport/deleteGame', async (req, res) => {
    try {
        const sport = req.params.sport;
        const { date, year, gameId } = req.body;

        if (!date || !gameId) {
            return res.status(400).json({ error: 'Missing required fields: date, gameId' });
        }
        const d = resolveDate(date, year);
        if (!d) return res.status(400).json({ error: `Invalid date: ${date}` });
        const path = dayPath(sport, d);
        if (!path) return res.status(400).json({ error: offseasonError(sport, d) });

        await fetch(`${path}/games/${gameId}.json`, { method: 'DELETE' });
        console.log(`✅ Deleted game ${gameId} from ${sport} ${date}`);
        res.json({ success: true });
    } catch(e) {
        console.error('Delete game failed:', e);
        res.status(500).json({ error: 'Failed to delete game' });
    }
});

// ── SAVE game result (pick and res) ──────────────────────────────
app.post('/api/:sport/gameResult', async (req, res) => {
    try {
        const sport = req.params.sport;
        // Body field "res" is the bet result; renamed so it doesn't shadow the response
        const { date, year, gameId, pick, res: result } = req.body;

        if (!date || !gameId || !pick || !result) {
            return res.status(400).json({ error: 'Missing required fields: date, gameId, pick, res' });
        }
        const d = resolveDate(date, year);
        if (!d) return res.status(400).json({ error: `Invalid date: ${date}` });
        const path = dayPath(sport, d);
        if (!path) return res.status(400).json({ error: offseasonError(sport, d) });

        // Save pick and res to the specific game using Firebase key
        const r = await fetch(`${path}/games/${gameId}.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pick: pick, res: result })
        });

        const data = await r.json();
        console.log(`✅ Saved game result: ${sport} ${date} game ${gameId} - ${pick} ${result}`);
        res.json({ success: true, data });
    } catch(e) {
        console.error('Game result save failed:', e);
        res.status(500).json({ error: 'Failed to save game result' });
    }
});

// ── ADD new game to bet log ──────────────────────────────────
app.post('/api/:sport/addGame', async (req, res) => {
    try {
        const sport = req.params.sport;
        const { date, year, game } = req.body;

        if (!date || !game) {
            return res.status(400).json({ error: 'Missing required fields: date, game' });
        }

        // Bets can only be added on the present day (Pacific time). Results,
        // edits, and deletes on past days go through their own routes.
        const t = todayPacific();
        const d = resolveDate(date, year);
        if (!d || d.year !== t.year || d.month !== t.month || d.day !== t.day) {
            const asked = d ? `${d.year}-${pad2(d.month)}-${pad2(d.day)}` : date;
            return res.status(400).json({ error: `Games can only be added on today's date (${t.year}-${pad2(t.month)}-${pad2(t.day)} Pacific), not ${asked}` });
        }
        const path = dayPath(sport, d);
        if (!path) return res.status(400).json({ error: offseasonError(sport, d) });

        const r = await fetch(`${path}/games.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(game)
        });

        const data = await r.json();
        console.log(`✅ Added game to ${sport} ${date}`);
        res.json({ success: true, gameId: data.name });
    } catch(e) {
        console.error('Add game failed:', e);
        res.status(500).json({ error: 'Failed to add game' });
    }
});

// ── SAVE day unlocked state (SYNCS ACROSS ALL SPORTS IN SEASON) ──────────────────
app.post('/api/:sport/unlockDay', async (req, res) => {
    try {
        const { date, year, unlocked } = req.body;

        if (!date || unlocked === undefined) {
            return res.status(400).json({ error: 'Missing required fields: date, unlocked' });
        }
        const d = resolveDate(date, year);
        if (!d) return res.status(400).json({ error: `Invalid date: ${date}` });

        // Sync to every sport whose season includes this date; sports in their
        // offseason are skipped (offseason dates are never stored)
        const synced = Object.keys(SEASON_WINDOWS).filter(s => dayPath(s, d));
        await Promise.all(synced.map(s => fetch(`${dayPath(s, d)}/unlocked.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(unlocked)
        })));

        console.log(`✅ Set ${date} unlocked: ${unlocked} (synced: ${synced.join(', ')})`);
        res.json({ success: true, syncedSports: synced });
    } catch(e) {
        console.error('Unlock day failed:', e);
        res.status(500).json({ error: 'Failed to save unlock state' });
    }
});

// Legacy /api/state endpoint (no sport param) for backwards compatibility
app.get('/api/state', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}.json`);
        const data = await r.json();
        res.json(data || {});
    } catch(e) {
        res.status(500).json({ error: 'Failed to load data' });
    }
});

// GET bankroll fields (userData)
const USER_DATA_FIELDS = ['bankroll', 'bankrollGoal', 'previousBankroll', 'gwBankroll'];

app.get('/api/userData', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/userData.json`);
        if (!r.ok) throw new Error(`Firebase responded ${r.status}`);
        const data = await r.json();
        res.json(data || {});
    } catch(e) {
        console.error('userData GET failed:', e);
        res.status(500).json({ error: 'Failed to load user data' });
    }
});

app.post('/api/state', async (req, res) => {
    try {
        const payload = { ...req.body };

        // Extract settings fields
        const settingsFields = ['activeBetDay', 'monthStartOverrides'];
        const settings = {};
        settingsFields.forEach(field => {
            if (payload[field] !== undefined) {
                settings[field] = payload[field];
                delete payload[field];
            }
        });

        // Extract userData fields. Only accepted from clients that loaded them
        // from Firebase first (userDataLoaded) — otherwise a fresh device or a
        // stale tab would overwrite the real bankroll with its $25 default.
        const userDataAllowed = payload.userDataLoaded === true;
        delete payload.userDataLoaded;
        const userData = {};
        USER_DATA_FIELDS.forEach(field => {
            if (payload[field] !== undefined) {
                if (userDataAllowed) userData[field] = payload[field];
                delete payload[field];
            }
        });

        // Remove fields that shouldn't be saved at root
        delete payload.betLog;
        delete payload.logbookEntries;

        // Save to organized paths
        const promises = [];

        if (Object.keys(settings).length > 0) {
            promises.push(
                fetch(`${FB_BASE}/settings.json`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(settings)
                })
            );
        }

        if (Object.keys(userData).length > 0) {
            promises.push(
                fetch(`${FB_BASE}/userData.json`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                })
            );
        }

        if (Object.keys(payload).length > 0) {
            promises.push(
                fetch(`${FB_BASE}.json`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
            );
        }

        await Promise.all(promises);
        res.json({ success: true });
    } catch(e) {
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// ── GAME LOG ─────────────────────────────────────────────────
// The game log is built from the bet log. Swipe-delete hides a card (by
// "<sport>_<gameId>") without touching the bet log; the hidden list lives in
// Firebase so a hidden card stays hidden on every device.
// Old localStorage logbook snapshots are backed up add-only to legacyEntries.

const LOG_ID_RE = /^[A-Za-z0-9_-]{1,120}$/;

app.get('/api/logbook/hidden', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/logbook/hidden.json`);
        if (!r.ok) throw new Error(`Firebase responded ${r.status}`);
        res.json((await r.json()) || {});
    } catch(e) {
        console.error('Logbook hidden GET failed:', e);
        res.status(500).json({ error: 'Failed to load hidden game log cards' });
    }
});

app.post('/api/logbook/hidden/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!LOG_ID_RE.test(id)) return res.status(400).json({ error: 'Invalid card id' });
        const r = await fetch(`${FB_BASE}/logbook/hidden/${id}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: 'true'
        });
        if (!r.ok) throw new Error(`Firebase responded ${r.status}`);
        console.log(`✅ Hid game log card ${id}`);
        res.json({ success: true });
    } catch(e) {
        console.error('Logbook hide failed:', e);
        res.status(500).json({ error: 'Failed to hide game log card' });
    }
});

// Add-only: entries whose id already exists in Firebase are never overwritten
app.post('/api/logbook/legacy', async (req, res) => {
    try {
        const entries = (req.body && req.body.entries) || {};
        const existingRes = await fetch(`${FB_BASE}/logbook/legacyEntries.json?shallow=true`);
        if (!existingRes.ok) throw new Error(`Firebase responded ${existingRes.status}`);
        const existing = (await existingRes.json()) || {};

        const toAdd = {};
        Object.entries(entries).forEach(([id, e]) => {
            if (!LOG_ID_RE.test(id) || existing[id] || !e || typeof e !== 'object') return;
            toAdd[id] = {
                teamName: String(e.teamName || ''),
                odds: String(e.odds || ''),
                betType: String(e.betType || ''),
                confidence: String(e.confidence || ''),
                betAmount: String(e.betAmount || '')
            };
        });

        if (Object.keys(toAdd).length > 0) {
            const r = await fetch(`${FB_BASE}/logbook/legacyEntries.json`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(toAdd)
            });
            if (!r.ok) throw new Error(`Firebase responded ${r.status}`);
        }
        console.log(`✅ Legacy logbook backup: ${Object.keys(toAdd).length} added`);
        res.json({ success: true, added: Object.keys(toAdd).length, skipped: Object.keys(entries).length - Object.keys(toAdd).length });
    } catch(e) {
        console.error('Legacy logbook backup failed:', e);
        res.status(500).json({ error: 'Failed to back up logbook entries' });
    }
});

// ── MLB ROUTES ───────────────────────────────────────────────

app.get('/api/mlb/pitching/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_BASE}/mlb/scrapers/starters/${encodeURIComponent(team)}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No pitching data for ' + team });
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to load pitching data' });
    }
});

app.post('/api/mlb/pitching/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_BASE}/mlb/scrapers/starters/${encodeURIComponent(team)}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save pitching data' });
    }
});

app.get('/api/mlb/batting/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_BASE}/mlb/scrapers/batting/${encodeURIComponent(team)}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No batting data for ' + team });
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to load batting data' });
    }
});

app.post('/api/mlb/batting/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_BASE}/mlb/scrapers/batting/${encodeURIComponent(team)}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save batting data' });
    }
});

app.get('/api/mlb/injuries/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_BASE}/mlb/scrapers/injuries/${encodeURIComponent(team)}.json`);
        const data = await r.json();
        if (!data) return res.json({ count: 0 });
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to load injury data' });
    }
});

app.post('/api/mlb/injuries/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_BASE}/mlb/scrapers/injuries/${encodeURIComponent(team)}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save injury data' });
    }
});

app.get('/api/mlb/standings', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/mlb/scrapers/standings.json`);
        const data = await r.json();
        res.json(data || {});
    } catch(e) {
        res.status(500).json({ error: 'Failed to load standings' });
    }
});

app.post('/api/mlb/standings', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/mlb/scrapers/standings.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save standings' });
    }
});

app.post('/api/mlb/gameStats', async (req, res) => {
    try {
        const { gameId, stats } = req.body;
        if (!gameId || !stats) return res.status(400).json({ error: 'gameId and stats required' });

        const r = await fetch(`${FB_BASE}/mlb/scrapers/gameStats/${gameId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stats)
        });
        const data = await r.json();
        console.log('✅ MLB game stats saved:', gameId);
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save game stats' });
    }
});

app.get('/api/mlb/gameStats/:gameId', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/mlb/scrapers/gameStats/${req.params.gameId}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No stats for game ' + req.params.gameId });
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to load game stats' });
    }
});

app.get('/api/mlb/series/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_BASE}/mlb/scrapers/series/${encodeURIComponent(team)}.json`);
        const data = await r.json();
        if (!data) return res.json({ gamesInSeries: 0, seriesGameNumber: 0 });
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to load series data' });
    }
});

app.post('/api/mlb/series/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_BASE}/mlb/scrapers/series/${encodeURIComponent(team)}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save series data' });
    }
});

// ── NBA ROUTES ───────────────────────────────────────────────

app.post('/api/nba/gameStats', async (req, res) => {
    try {
        const { gameId, stats } = req.body;
        if (!gameId || !stats) return res.status(400).json({ error: 'gameId and stats required' });

        const r = await fetch(`${FB_BASE}/nba/scrapers/gameStats/${gameId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stats)
        });
        const data = await r.json();
        console.log('✅ NBA game stats saved:', gameId);
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save NBA game stats' });
    }
});

// Scraped by vegas-scrapers/nba_standings_scraper.py: regular-season W-L and
// last 10 per team, plus the season and its phase
app.get('/api/nba/standings', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/nba/scrapers/standings.json`);
        if (!r.ok) throw new Error(`Firebase responded ${r.status}`);
        res.json((await r.json()) || {});
    } catch(e) {
        console.error('NBA standings GET failed:', e);
        res.status(500).json({ error: 'Failed to load NBA standings' });
    }
});

app.get('/api/nba/injuries/teams', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/nba/scrapers/injuries/teams.json`);
        if (!r.ok) throw new Error(`Firebase responded ${r.status}`);
        res.json((await r.json()) || {});
    } catch(e) {
        console.error('NBA injuries GET failed:', e);
        res.status(500).json({ error: 'Failed to load NBA injuries' });
    }
});

app.get('/api/nba/gameStats/:gameId', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/nba/scrapers/gameStats/${req.params.gameId}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No stats for game ' + req.params.gameId });
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to load NBA game stats' });
    }
});

app.get('/api/nba/playoffSeries/:seriesKey', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/nba/scrapers/playoffSeries/${encodeURIComponent(req.params.seriesKey)}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No series data for ' + req.params.seriesKey });
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to load playoff series state' });
    }
});

app.post('/api/nba/playoffSeries/:seriesKey', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/nba/scrapers/playoffSeries/${encodeURIComponent(req.params.seriesKey)}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        console.log('✅ Saved playoff series state:', req.params.seriesKey);
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save playoff series state' });
    }
});

// ── HEALTH ───────────────────────────────────────────────────
// Confirms the backend can read Firebase with its credential. With a service
// account or secret configured, a bad credential fails here even while the
// rules are still public, so this must say ok before the rules are locked.
app.get('/api/health/firebase', async (req, res) => {
    try {
        const r = await fetch(`${FB_BASE}/settings.json?shallow=true`);
        const body = await r.json().catch(() => null);
        const ok = r.ok && !(body && body.error);
        res.status(ok ? 200 : 502).json({
            ok,
            authMode,
            firebaseStatus: r.status,
            error: ok ? undefined : (body && body.error) || `HTTP ${r.status}`
        });
    } catch (e) {
        res.status(502).json({ ok: false, authMode, error: e.message });
    }
});

app.get('/', (req, res) => res.send('V3GAS B3TA Backend Running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
