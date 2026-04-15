const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const FB_URL = 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';

// GET - load all data
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

// POST - save all data (PATCH so it never wipes)
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

// GET deleted logbook
app.get('/api/deletedLogbook', async (req, res) => {
    try {
        const r = await fetch(FB_URL + '/deletedLogbook.json');
        const data = await r.json();
        res.json(data || []);
    } catch(e) {
        res.json([]);
    }
});

// POST deleted logbook
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

app.get('/', (req, res) => res.send('V3GAS B3TA Backend Running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
