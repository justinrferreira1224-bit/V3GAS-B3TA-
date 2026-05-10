# Deployment Guide

## Overview
This app has a split architecture:
- **Frontend**: Static HTML/CSS/JS served by Netlify
- **Backend**: Node.js Express server on Render
- **Database**: Firebase Realtime Database

## Netlify Setup (Frontend)

### Current Deployment
- Site: https://cool-kringle-fc1bc0.netlify.app/
- Branch: `main`
- Build directory: `frontend`
- Build command: None (static site)

### Configuration
The `netlify.toml` file handles:
- Publishing from `/frontend` directory
- SPA routing redirects

### To Redeploy Frontend
1. Push changes to `main` branch
2. Netlify auto-deploys within 1-2 minutes
3. Check deployment status at: https://app.netlify.com/

## Render Setup (Backend)

### Current Deployment
- Service: https://v3gas-b3ta-backend.onrender.com
- Branch: `main`
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`

### Environment Variables Needed
None currently - uses hardcoded Firebase URL

### To Redeploy Backend
1. Push changes to `main` branch
2. Render auto-deploys within 2-3 minutes
3. Check deployment logs at: https://dashboard.render.com/

## Firebase Configuration

### Realtime Database
- URL: `https://vegas-bet-default-rtdb.firebaseio.com`
- Paths:
  - `/vegasbeta` - Main app state
  - `/mlbStarters` - MLB pitching stats
  - `/mlbBatting` - MLB batting stats
  - `/mlbInjuries` - MLB injury data
  - `/mlbStandings` - MLB standings
  - `/mlbGameStats` - MLB game snapshots
  - `/nbaGameStats` - NBA game snapshots
  - `/nbaPlayoffSeries` - NBA playoff series data

### Security Rules
See `database.rules.json` for current rules (read/write allowed)

## Testing Deployments

### Frontend Test
```bash
# Test locally
cd frontend
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Backend Test
```bash
# Test locally
cd backend
npm install
npm start
# Server runs on http://localhost:3000
# Test: curl http://localhost:3000/
```

### Integration Test
1. Open frontend in browser
2. Open browser console (F12)
3. Check for errors
4. Try creating a bet
5. Verify data saves to Firebase

## Common Issues

### Frontend Not Loading
- Check Netlify deployment status
- Verify `netlify.toml` exists
- Check browser console for errors
- Verify backend URL in `app.js` line 21566

### Backend API Errors
- Check Render deployment logs
- Verify environment variables
- Test endpoint: `curl https://v3gas-b3ta-backend.onrender.com/`
- Check Firebase URL is correct

### Data Not Saving
- Verify Firebase rules allow write
- Check network tab in browser console
- Confirm backend is running
- Check backend logs for errors

## Cleanup Notes

The following temporary files were archived (not in production):
- `fix-*.js` - Database fix scripts
- `fix-*.html` - Fix utilities
- `clear-*.html` - Data cleanup tools

These are in `.archived_temp_files/` (gitignored).
