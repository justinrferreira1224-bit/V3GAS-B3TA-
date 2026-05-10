# V3GAS B3TA - Sports Betting Tracker

Mobile sports betting tracker and edge calculator with real-time game analysis.

## Project Structure

```
V3GAS-B3TA-/
├── frontend/           # Static frontend (Netlify)
│   ├── index.html     # Main HTML file
│   ├── app.js         # Application logic
│   └── styles.css     # Styling
├── backend/           # Node.js backend (Render)
│   ├── server.js      # Express server
│   └── package.json   # Backend dependencies
├── functions/         # Firebase Cloud Functions
├── playbooks/         # Betting strategy guides
├── nba_game_stats_backup.json  # NBA game backups
├── mlb_game_stats_backup.json  # MLB game backups
└── netlify.toml       # Netlify deployment config
```

## Deployment

### Frontend (Netlify)
- **URL**: https://cool-kringle-fc1bc0.netlify.app/
- **Deploy**: Automatically deploys from `main` branch
- **Build**: No build needed - serves `/frontend` directory
- **Config**: See `netlify.toml`

### Backend (Render)
- **URL**: https://v3gas-b3ta-backend.onrender.com
- **Deploy**: Automatically deploys from `main` branch `/backend` directory
- **Start command**: `npm start`
- **Port**: Uses `PORT` environment variable from Render

### Database
- **Firebase Realtime Database**: `vegas-bet-default-rtdb.firebaseio.com`
- Stores bet logs, game stats, and user data

## Local Development

### Frontend
```bash
cd frontend
python3 -m http.server 8000
# Open http://localhost:8000
```

### Backend
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:3000
```

## Features
- Real-time game tracking for NBA, MLB, NFL, etc.
- Edge calculation and betting recommendations
- Bankroll management
- Game winner predictions
- Player props analysis
- Historical performance tracking