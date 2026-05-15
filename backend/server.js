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

// GET state for ANY sport
app.get('/api/state/:sport', async (req, res) => {
    try {
        const sport = req.params.sport;
        const r = await fetch(`${FB_BASE}/${sport}/betLog.json`);
        const data = await r.json();
        res.json(data || {});
    } catch(e) {
        console.error(`${req.params.sport.toUpperCase()} GET failed:`, e);
        res.status(500).json({ error: `Failed to load ${req.params.sport} data` });
    }
});

// POST state for ANY sport
app.post("/api/state/:sport", async (req, res) => {
    try {
        const sport = req.params.sport;
        const payload = req.body;
        const r = await fetch(`${FB_BASE}/${sport}/betLog.json`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await r.json();
        console.log(`✅ ${sport.toUpperCase()} bet log saved to Firebase`);
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
