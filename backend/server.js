const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const FB_URL = 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';
const FB_BASE = 'https://vegas-bet-default-rtdb.firebaseio.com';

// ── SPORT-SPECIFIC ROUTES (DYNAMIC) ──────────────────────────

// GET state for ANY sport
app.get('/api/state/:sport', async (req, res) => {
    try {
        const sport = req.params.sport;
        const sportPath = `${FB_BASE}/${sport}Betlog`;
        const r = await fetch(sportPath + '.json');
        const data = await r.json();
        res.json(data || {});
    } catch(e) {
        console.error(`${req.params.sport.toUpperCase()} GET failed:`, e);
        res.status(500).json({ error: `Failed to load ${req.params.sport} data` });
    }
});

// POST state for ANY sport
app.post('/api/state/:sport', async (req, res) => {
    try {
        const sport = req.params.sport;
        const sportPath = `${FB_BASE}/${sport}Betlog`;
        const payload = req.body;
        const r = await fetch(sportPath + '.json', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
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

// Legacy endpoint (keep for backwards compatibility)
app.get('/api/state', async (req, res) => {
    try {
        const r = await fetch(FB_URL + '.json');
        const data = await r.json();
        res.json(data || {});
    } catch(e) {
        console.error('GET failed:', e);
        res.status(500).json({ error: 'Failed to load data' });
    }
});

app.post('/api/state', async (req, res) => {
    try {
        const payload = req.body;
        const r = await fetch(FB_URL + '.json', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await r.json();
        res.json(data);
    } catch(e) {
        console.error('POST failed:', e);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

app.get('/api/deletedLogbook', async (req, res) => {
    try {
        const r = await fetch(FB_URL + '/deletedLogbook.json');
        const data = await r.json();
        res.json(data || []);
    } catch(e) {
        res.json([]);
    }
});

app.post('/api/deletedLogbook', async (req, res) => {
    try {
        const r = await fetch(FB_URL + '/deletedLogbook.json', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Failed to save' });
    }
});

// ── MLB ROUTES ───────────────────────────────────────────────

// GET MLB pitching stats for a team
app.get('/api/mlb/pitching/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_MLB}/mlbStarters/${encodeURIComponent(team)}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No pitching data for ' + team });
        res.json(data);
    } catch(e) {
        console.error('MLB pitching GET failed:', e);
        res.status(500).json({ error: 'Failed to load pitching data' });
    }
});

// POST MLB pitching stats for a team (for your scraper to update)
app.post('/api/mlb/pitching/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_MLB}/mlbStarters/${encodeURIComponent(team)}.json`, {
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

// GET MLB batting stats for a team
app.get('/api/mlb/batting/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_MLB}/mlbBatting/${encodeURIComponent(team)}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No batting data for ' + team });
        res.json(data);
    } catch(e) {
        console.error('MLB batting GET failed:', e);
        res.status(500).json({ error: 'Failed to load batting data' });
    }
});

// POST MLB batting stats for a team
app.post('/api/mlb/batting/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_MLB}/mlbBatting/${encodeURIComponent(team)}.json`, {
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

// GET MLB injuries for a team
app.get('/api/mlb/injuries/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_MLB}/mlbInjuries/${encodeURIComponent(team)}.json`);
        const data = await r.json();
        if (!data) return res.json({ count: 0 });
        res.json(data);
    } catch(e) {
        console.error('MLB injuries GET failed:', e);
        res.status(500).json({ error: 'Failed to load injury data' });
    }
});

// POST MLB injuries for a team
app.post('/api/mlb/injuries/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const r = await fetch(`${FB_MLB}/mlbInjuries/${encodeURIComponent(team)}.json`, {
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

// GET MLB standings
app.get('/api/mlb/standings', async (req, res) => {
    try {
        const r = await fetch(`${FB_MLB}/mlbStandings.json`);
        const data = await r.json();
        res.json(data || {});
    } catch(e) {
        console.error('MLB standings GET failed:', e);
        res.status(500).json({ error: 'Failed to load standings' });
    }
});

// POST MLB standings
app.post('/api/mlb/standings', async (req, res) => {
    try {
        const r = await fetch(`${FB_MLB}/mlbStandings.json`, {
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

// POST MLB game stats snapshot (saves stats for a specific game by ID)
app.post('/api/mlb/gameStats', async (req, res) => {
    try {
        const { gameId, stats } = req.body;
        if (!gameId || !stats) {
            return res.status(400).json({ error: 'gameId and stats required' });
        }

        // Save to Firebase
        const r = await fetch(`${FB_MLB}/mlbGameStats/${gameId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stats)
        });
        const data = await r.json();

        // Backup to local JSON file
        try {
            const backupPath = path.join(__dirname, '..', 'backups', 'mlb_game_stats_backup.json');
            let backup = {};
            try {
                const backupData = await fs.readFile(backupPath, 'utf8');
                backup = JSON.parse(backupData);
            } catch(readErr) {
                // File doesn't exist or is invalid, start fresh
                backup = {};
            }

            // Organize by date (YYYY-MM-DD) then gameId
            const dateKey = stats.savedAt ? stats.savedAt.split('T')[0] : new Date().toISOString().split('T')[0];
            if (!backup[dateKey]) backup[dateKey] = {};
            backup[dateKey][gameId] = stats;

            await fs.writeFile(backupPath, JSON.stringify(backup, null, 2));
            console.log('✅ MLB game stats backed up to JSON:', dateKey, gameId);

            // ALSO append to human-readable TXT file
            const txtPath = path.join(__dirname, '..', 'backups', 'mlb_game_stats_backup.txt');
            const txtEntry = `
================================================================================
DATE: ${dateKey} | GAME ID: ${gameId}
${stats.awayTeam} @ ${stats.homeTeam}
================================================================================

PITCHING:
  Away: ${stats.pitching?.awayStarter || 'TBD'} - ${stats.pitching?.awayERA || 0} ERA, ${stats.pitching?.awayIP || 0} IP (Bull: ${stats.pitching?.awayBullERA || 0})
  Home: ${stats.pitching?.homeStarter || 'TBD'} - ${stats.pitching?.homeERA || 0} ERA, ${stats.pitching?.homeIP || 0} IP (Bull: ${stats.pitching?.homeBullERA || 0})

BATTING:
  Away: AVG ${stats.batting?.awayAvg || 0} | OBP ${stats.batting?.awayOBP || 0} | SLG ${stats.batting?.awaySLG || 0}
  Home: AVG ${stats.batting?.homeAvg || 0} | OBP ${stats.batting?.homeOBP || 0} | SLG ${stats.batting?.homeSLG || 0}

STANDINGS:
  Away: Seed #${stats.standings?.awaySeed || 0} - ${stats.standings?.awayWins || 0}-${stats.standings?.awayLosses || 0}
  Home: Seed #${stats.standings?.homeSeed || 0} - ${stats.standings?.homeWins || 0}-${stats.standings?.homeLosses || 0}

INJURIES: Away ${stats.injuries?.awayCount || 0} | Home ${stats.injuries?.homeCount || 0}
ODDS: Away ${stats.odds?.away || 'N/A'} | Home ${stats.odds?.home || 'N/A'}
PARK: ${stats.park?.home || 'N/A'}
SERIES: ${stats.series?.count || '0-0'} (${stats.series?.games || 0} game series)

`;
            await fs.appendFile(txtPath, txtEntry);
            console.log('✅ MLB game stats backed up to TXT:', dateKey, gameId);

        } catch(backupErr) {
            console.error('⚠️ Failed to backup locally (Firebase save succeeded):', backupErr);
        }

        res.json(data);
    } catch(e) {
        console.error('Failed to save game stats:', e);
        res.status(500).json({ error: 'Failed to save game stats' });
    }
});

// GET MLB game stats by game ID
app.get('/api/mlb/gameStats/:gameId', async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const r = await fetch(`${FB_MLB}/mlbGameStats/${gameId}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No stats for game ' + gameId });
        res.json(data);
    } catch(e) {
        console.error('Failed to load game stats:', e);
        res.status(500).json({ error: 'Failed to load game stats' });
    }
});

// ── NBA ROUTES ───────────────────────────────────────────────

// POST NBA game stats snapshot (saves stats for a specific game by ID)
app.post('/api/nba/gameStats', async (req, res) => {
    try {
        const { gameId, stats } = req.body;
        if (!gameId || !stats) {
            return res.status(400).json({ error: 'gameId and stats required' });
        }

        // Save to Firebase
        const r = await fetch(`${FB_MLB}/nbaGameStats/${gameId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stats)
        });
        const data = await r.json();

        // Backup to local JSON file
        try {
            const backupPath = path.join(__dirname, '..', 'backups', 'nba_game_stats_backup.json');
            let backup = {};
            try {
                const backupData = await fs.readFile(backupPath, 'utf8');
                backup = JSON.parse(backupData);
            } catch(readErr) {
                // File doesn't exist or is invalid, start fresh
                backup = {};
            }

            // Organize by date (YYYY-MM-DD) then gameId
            const dateKey = stats.savedAt ? stats.savedAt.split('T')[0] : new Date().toISOString().split('T')[0];
            if (!backup[dateKey]) backup[dateKey] = {};
            backup[dateKey][gameId] = stats;

            await fs.writeFile(backupPath, JSON.stringify(backup, null, 2));
            console.log('✅ NBA game stats backed up to JSON:', dateKey, gameId);

            // ALSO append to human-readable TXT file
            const txtPath = path.join(__dirname, '..', 'backups', 'nba_game_stats_backup.txt');
            const txtEntry = `
================================================================================
DATE: ${dateKey} | GAME ID: ${gameId}
${stats.awayTeam} @ ${stats.homeTeam}
================================================================================

SEEDS: Away #${stats.seeds?.away || 0} | Home #${stats.seeds?.home || 0}
INJURIES: Away ${stats.injuries?.awayCount || 0} | Home ${stats.injuries?.homeCount || 0}
ODDS: Away ${stats.odds?.away || 'N/A'} | Home ${stats.odds?.home || 'N/A'}

RECORDS:
  Away: ${stats.records?.awayWins || 0}-${stats.records?.awayLosses || 0} | Last 10: ${stats.last10?.away || 'N/A'}
  Home: ${stats.records?.homeWins || 0}-${stats.records?.homeLosses || 0} | Last 10: ${stats.last10?.home || 'N/A'}

EDGE: ${stats.edge || 'N/A'}

`;
            await fs.appendFile(txtPath, txtEntry);
            console.log('✅ NBA game stats backed up to TXT:', dateKey, gameId);

        } catch(backupErr) {
            console.error('⚠️ Failed to backup locally (Firebase save succeeded):', backupErr);
        }

        res.json(data);
    } catch(e) {
        console.error('Failed to save NBA game stats:', e);
        res.status(500).json({ error: 'Failed to save NBA game stats' });
    }
});

// GET NBA game stats by game ID
app.get('/api/nba/gameStats/:gameId', async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const r = await fetch(`${FB_MLB}/nbaGameStats/${gameId}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No stats for game ' + gameId });
        res.json(data);
    } catch(e) {
        console.error('Failed to load NBA game stats:', e);
        res.status(500).json({ error: 'Failed to load NBA game stats' });
    }
});

// NBA Playoff Series State
app.get('/api/nba/playoffSeries/:seriesKey', async (req, res) => {
    try {
        const seriesKey = req.params.seriesKey;
        const r = await fetch(`${FB_MLB}/nbaPlayoffSeries/${encodeURIComponent(seriesKey)}.json`);
        const data = await r.json();
        if (!data) return res.status(404).json({ error: 'No series data for ' + seriesKey });
        res.json(data);
    } catch(e) {
        console.error('Failed to load playoff series state:', e);
        res.status(500).json({ error: 'Failed to load playoff series state' });
    }
});

app.post('/api/nba/playoffSeries/:seriesKey', async (req, res) => {
    try {
        const seriesKey = req.params.seriesKey;
        const r = await fetch(`${FB_MLB}/nbaPlayoffSeries/${encodeURIComponent(seriesKey)}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await r.json();
        console.log('✅ Saved playoff series state:', seriesKey);
        res.json(data);
    } catch(e) {
        console.error('Failed to save playoff series state:', e);
        res.status(500).json({ error: 'Failed to save playoff series state' });
    }
});

app.get('/', (req, res) => res.send('V3GAS B3TA Backend Running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
