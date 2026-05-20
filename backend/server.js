const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const FB_BASE = 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';

// ── SPORT-SPECIFIC ROUTES (DYNAMIC) ──────────────────────────

// Helper: Transform new Firebase structure to old frontend format
function transformBetLog(betLogObj) {
    if (!betLogObj) return [];

    const betLogArray = [];

    // Convert date-keyed object to array with day numbers
    Object.entries(betLogObj).forEach(([dateKey, dayData]) => {
        // Parse date (MM-DD format) to calculate day of year
        const [month, day] = dateKey.split('-').map(Number);
        const date = new Date(2026, month - 1, day);
        const jan1 = new Date(2026, 0, 1);
        const dayOfYear = Math.floor((date - jan1) / (1000 * 60 * 60 * 24)) + 1;

        // Transform games from new format to old format
        // Convert games object to array (Firebase stores arrays as objects)
        const gamesObj = dayData.games || {};

        let transformedGames = [];
        if (Array.isArray(gamesObj)) {
            // Already an array
            transformedGames = gamesObj.map(game => ({
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
        } else {
            // Object - convert to array and preserve Firebase keys as _id
            transformedGames = Object.entries(gamesObj).map(([firebaseKey, game]) => ({
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
                _id: firebaseKey
            }));
        }

        betLogArray.push({
            day: dayOfYear,
            date: dateKey,
            type: dayData.type || 'REAL',
            overall: dayData.overall || '',
            unlocked: dayData.unlocked || false,
            games: transformedGames
        });
    });

    // Sort by day number
    betLogArray.sort((a, b) => a.day - b.day);

    return betLogArray;
}

// GET state for ANY sport
app.get('/api/state/:sport', async (req, res) => {
    try {
        const sport = req.params.sport;
        const r = await fetch(`${FB_BASE}/${sport}.json`);
        const data = await r.json();

        // Transform betLog if it exists
        if (data && data.betLog) {
            data.betLog = transformBetLog(data.betLog);
        }

        res.json(data || {});
    } catch(e) {
        console.error(`${req.params.sport.toUpperCase()} GET failed:`, e);
        res.status(500).json({ error: `Failed to load ${req.params.sport} data` });
    }
});

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

// ── DELETE game from bet log ──────────────────────────────────
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

// ── SAVE app picks for all days ──────────────────────────────────
app.post('/api/:sport/appPicks', async (req, res) => {
    try {
        const sport = req.params.sport;
        const appPicksData = req.body; // { "02-01": ["Celtics", "Spurs", ...], "02-02": [...], ... }

        // Save appPicks for each day
        const promises = Object.entries(appPicksData).map(([dateKey, picks]) => {
            return fetch(`${FB_BASE}/${sport}/betLog/${dateKey}/appPicks.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(picks)
            });
        });

        await Promise.all(promises);
        console.log(`✅ Saved app picks for ${Object.keys(appPicksData).length} days in ${sport}`);
        res.json({ success: true, daysUpdated: Object.keys(appPicksData).length });
    } catch(e) {
        console.error('App picks save failed:', e);
        res.status(500).json({ error: 'Failed to save app picks' });
    }
});

// ── SAVE game result (pick and res) ──────────────────────────────
app.post('/api/:sport/gameResult', async (req, res) => {
    try {
        const sport = req.params.sport;
        const { date, gameId, pick, res } = req.body;

        if (!date || !gameId || !pick || !res) {
            return res.status(400).json({ error: 'Missing required fields: date, gameId, pick, res' });
        }

        // Save pick and res to the specific game using Firebase key
        const updates = {
            pick: pick,
            res: res
        };

        const r = await fetch(`${FB_BASE}/${sport}/betLog/${date}/games/${gameId}.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates)
        });

        const data = await r.json();
        console.log(`✅ Saved game result: ${sport} ${date} game ${gameIndex} - ${pick} ${res}`);
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
        const { date, game } = req.body;

        if (!date || !game) {
            return res.status(400).json({ error: 'Missing required fields: date, game' });
        }

        // Add game to the games array for this date
        const r = await fetch(`${FB_BASE}/${sport}/betLog/${date}/games.json`, {
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

// ── SAVE day unlocked state ──────────────────────────────────
app.post('/api/:sport/unlockDay', async (req, res) => {
    try {
        const sport = req.params.sport;
        const { date, unlocked } = req.body;

        if (!date || unlocked === undefined) {
            return res.status(400).json({ error: 'Missing required fields: date, unlocked' });
        }

        const r = await fetch(`${FB_BASE}/${sport}/betLog/${date}/unlocked.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(unlocked)
        });

        const data = await r.json();
        console.log(`✅ Set ${sport} ${date} unlocked: ${unlocked}`);
        res.json({ success: true });
    } catch(e) {
        console.error('Unlock day failed:', e);
        res.status(500).json({ error: 'Failed to save unlock state' });
    }
});

// Legacy /api/state endpoint (no sport param) for backwards compatibility
app.get('/api/state', async (req, res) => {
    try {
        const r = await fetch('https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta.json');
        const data = await r.json();
        res.json(data || {});
    } catch(e) {
        res.status(500).json({ error: 'Failed to load data' });
    }
});

app.post('/api/state', async (req, res) => {
    try {
        const r = await fetch('https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta.json', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save data' });
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

app.get('/', (req, res) => res.send('V3GAS B3TA Backend Running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
