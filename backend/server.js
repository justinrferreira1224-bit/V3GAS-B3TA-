const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const FB_URL = 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';
const FB_MLB  = 'https://vegas-bet-default-rtdb.firebaseio.com';

// ── EXISTING ROUTES ──────────────────────────────────────────

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
        const r = await fetch(`${FB_MLB}/mlbGameStats/${gameId}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stats)
        });
        const data = await r.json();
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

app.get('/', (req, res) => res.send('V3GAS B3TA Backend Running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
