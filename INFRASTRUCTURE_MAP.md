# V3GAS B3TA - COMPLETE INFRASTRUCTURE MAP
*Last updated: May 24, 2026*

---

## 🎯 WHAT IS THIS APP?

**V3GAS B3TA** is a mobile sports betting tracker and edge calculator. Think of it like a smart notebook that helps you track your bets, calculate if a bet is "worth it" (the edge), and see all your game stats in one place.

It tracks:
- NBA (basketball)
- MLB (baseball)  
- NFL (football)
- And other sports

---

## 🏗️ THE 3 MAIN PIECES

Your app is split into 3 parts that all talk to each other:

### 1. **FRONTEND** (What you see on your phone)
- **What it is**: The actual app you see and tap on your phone
- **Where it lives**: Netlify (a hosting service)
- **URL**: https://cool-kringle-fc1bc0.netlify.app/
- **The files**:
  - `index.html` - The main page (all the buttons, screens, layouts)
  - `app.js` - The brain (handles taps, calculates edges, loads data)
  - `styles.css` - The look (colors, fonts, spacing)
- **How it works**: When you push to GitHub, Netlify automatically grabs the latest code and puts it online
- **Auto-deploy**: YES - every time you push to the `main` branch on GitHub

### 2. **BACKEND** (The middleman between your app and database)
- **What it is**: A server that handles requests from your phone app and talks to Firebase
- **Where it lives**: Render (a server hosting service)
- **URL**: https://v3gas-b3ta-backend.onrender.com
- **The files**:
  - `server.js` - The main server code (all the routes/endpoints)
  - `package.json` - Lists what tools the server needs
- **Why you need it**: Your phone app can't talk directly to Firebase for everything. The backend does the heavy lifting
- **How it works**: When you push to GitHub, Render automatically grabs the latest code and restarts the server
- **Auto-deploy**: YES - every time you push to the `main` branch on GitHub

### 3. **DATABASE** (Where all your data lives)
- **What it is**: Firebase Realtime Database - stores all your bet history, game stats, bankroll info
- **Where it lives**: Google Firebase
- **URL**: https://vegas-bet-default-rtdb.firebaseio.com
- **Project name**: `vegas-bet`
- **How it works**: Both your frontend and backend can read/write to this database
- **Auto-deploy**: N/A - it's just storage, always on

---

## 🗂️ FIREBASE DATABASE STRUCTURE

Your Firebase database is organized like folders on a computer. Here's what's inside:

```
vegasbeta/                          ← Root folder for your entire app
│
├── settings/                       ← App settings
│   ├── activeBetDay               ← Which day you're currently viewing
│   └── monthStartOverrides        ← Custom month start dates
│
├── userData/                       ← Your personal data
│   ├── bankroll                   ← How much money you have
│   ├── bankrollGoal               ← Your goal amount
│   ├── previousBankroll           ← Last bankroll amount
│   └── gwBankroll                 ← Game week bankroll
│
├── mlb/                            ← All MLB (baseball) data
│   ├── betLog/                    ← Your MLB bets
│   │   ├── 05-20/                 ← Bets for May 20th
│   │   │   ├── type               ← "REAL" or "PRACTICE"
│   │   │   ├── overall            ← Your record for the day
│   │   │   ├── unlocked           ← Can you edit this day?
│   │   │   └── games/             ← List of games
│   │   │       └── [gameId]/      ← Each individual game
│   │   │           ├── away/      ← Away team info
│   │   │           │   ├── team   ← Team name
│   │   │           │   ├── odds   ← Betting odds
│   │   │           │   ├── seed   ← Playoff seed
│   │   │           │   ├── injuries
│   │   │           │   ├── record ← W-L record
│   │   │           │   └── last10 ← Last 10 games
│   │   │           ├── home/      ← Home team info (same structure)
│   │   │           ├── pick       ← Who you picked to win
│   │   │           ├── res        ← Result (W/L)
│   │   │           └── edge       ← Calculated edge %
│   │   └── 05-21/                 ← Next day's bets...
│   │
│   └── scrapers/                  ← MLB stats scraped from websites
│       ├── starters/              ← Pitching stats by team
│       │   └── [teamName]/        ← Each team
│       ├── batting/               ← Batting stats by team
│       ├── injuries/              ← Injury reports by team
│       ├── standings/             ← League standings
│       ├── gameStats/             ← Snapshots of individual games
│       │   └── [gameId]/          ← Each game
│       └── series/                ← Series tracking (Game 1 of 3, etc)
│           └── [teamName]/
│
├── nba/                            ← All NBA (basketball) data
│   ├── betLog/                    ← Your NBA bets (same structure as MLB)
│   └── scrapers/                  ← NBA stats
│       ├── gameStats/             ← Game snapshots
│       └── playoffSeries/         ← Playoff series tracking (Lakers vs Celtics 2-1)
│
├── nfl/                            ← All NFL (football) data
│   └── betLog/                    ← Your NFL bets
│
└── [other sports]/                ← Same pattern for other sports
    └── betLog/
```

**🔑 KEY CONCEPT:**
- Each **sport** has its own folder (mlb, nba, nfl)
- Each sport has a **betLog** (your bets organized by date)
- Each sport has **scrapers** (stats pulled from the internet)
- Each **day** in betLog is keyed by date (MM-DD format like "05-20")
- Each **game** has away/home team data, your pick, the result, and the edge

---

## 🔌 BACKEND API ENDPOINTS

Your backend server (`server.js`) has these routes (think of them as different phone numbers you can call to do different things):

### **UNIVERSAL SPORT ROUTES**

| Endpoint | What It Does | Example |
|----------|--------------|---------|
| `GET /api/state/:sport` | Get all data for a sport | `GET /api/state/mlb` returns all MLB data |
| `POST /api/state/:sport` | Save data for a sport | `POST /api/state/nba` saves NBA data |
| `DELETE /api/state/:sport/:dayIndex/:gameIndex` | Delete a game | `DELETE /api/state/mlb/05-20/0` deletes first game on May 20 |
| `POST /api/:sport/gameResult` | Save a game result (pick + outcome) | `POST /api/mlb/gameResult` with date, gameId, pick, res |
| `POST /api/:sport/addGame` | Add a new game to a day | `POST /api/nba/addGame` with date and game data |
| `POST /api/:sport/unlockDay` | Lock/unlock a day for editing | `POST /api/mlb/unlockDay` with date and true/false |

### **MLB-SPECIFIC ROUTES**

| Endpoint | What It Does |
|----------|--------------|
| `GET /api/mlb/pitching/:team` | Get pitching stats for a team |
| `POST /api/mlb/pitching/:team` | Save pitching stats for a team |
| `GET /api/mlb/batting/:team` | Get batting stats for a team |
| `POST /api/mlb/batting/:team` | Save batting stats for a team |
| `GET /api/mlb/injuries/:team` | Get injury report for a team |
| `POST /api/mlb/injuries/:team` | Save injury report for a team |
| `GET /api/mlb/standings` | Get league standings |
| `POST /api/mlb/standings` | Save league standings |
| `GET /api/mlb/gameStats/:gameId` | Get stats for a specific game |
| `POST /api/mlb/gameStats` | Save stats for a game |
| `GET /api/mlb/series/:team` | Get series info (Game 2 of 3) |
| `POST /api/mlb/series/:team` | Save series info |

### **NBA-SPECIFIC ROUTES**

| Endpoint | What It Does |
|----------|--------------|
| `GET /api/nba/gameStats/:gameId` | Get stats for a specific game |
| `POST /api/nba/gameStats` | Save stats for a game |
| `GET /api/nba/playoffSeries/:seriesKey` | Get playoff series state (Lakers 3, Celtics 2) |
| `POST /api/nba/playoffSeries/:seriesKey` | Save playoff series state |

### **SCRAPER ENDPOINTS**

| Endpoint | What It Does |
|----------|--------------|
| `POST /api/scrapers/nba/standings` | Trigger NBA standings scraper script |

---

## 🔗 HOW IT ALL CONNECTS

```
[YOUR PHONE]
     ↓
[FRONTEND - Netlify]
     ↓ (sends requests)
[BACKEND - Render]
     ↓ (reads/writes)
[FIREBASE DATABASE]
```

**Step by step example (adding a bet):**

1. You open the app on your phone
2. The frontend (index.html) loads from Netlify
3. The app.js code runs and fetches today's games from the backend
4. Your phone sends a request to: `https://v3gas-b3ta-backend.onrender.com/api/state/mlb`
5. The backend server gets the request
6. It calls Firebase: `https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta/mlb.json`
7. Firebase sends back all MLB data
8. Backend transforms it (makes it easier for your app to read)
9. Backend sends it back to your phone
10. Your app displays the games

**When you make a pick:**
1. You tap a team to bet on
2. App.js calculates the edge
3. Your phone sends a POST request to the backend with the pick
4. Backend saves it to Firebase at `/vegasbeta/mlb/betLog/05-24/games/[gameId]`
5. Backend responds "saved!"
6. Your app updates the screen

---

## 📂 GITHUB REPOSITORY

- **URL**: https://github.com/justinrferreira1224-bit/V3GAS-B3TA-.git
- **Branch**: `main` (only one branch)
- **How it works**:
  - You push code to GitHub
  - Netlify watches for changes → auto-deploys frontend
  - Render watches for changes → auto-deploys backend

---

## 🚀 DEPLOYMENT SUMMARY

### **Netlify (Frontend)**
- **Triggers**: Automatically when you push to `main` on GitHub
- **What it does**: Copies files from `/frontend` folder to Netlify's servers
- **Build command**: None (it's just static HTML/CSS/JS files)
- **Publish directory**: `/frontend`
- **Config file**: `netlify.toml`
- **Deploy time**: 1-2 minutes

### **Render (Backend)**
- **Triggers**: Automatically when you push to `main` on GitHub
- **What it does**: Installs dependencies, starts the Node.js server
- **Build command**: `npm install`
- **Start command**: `npm start` (runs `node server.js`)
- **Root directory**: `/backend`
- **Deploy time**: 2-3 minutes
- **Port**: Set by Render (environment variable `PORT`)

### **Firebase**
- **Manual deployment**: Run `firebase deploy` from terminal
- **What it deploys**:
  - Database rules (`database.rules.json` + `firestore.rules`)
  - Firebase Functions (currently empty - `/functions/index.js`)
- **Note**: Database data doesn't "deploy" - it's just stored there all the time

---

## ⚠️ IMPORTANT NOTES

### **Security**
- Your Firebase rules currently allow **anyone** to read/write your database until **May 29, 2026**
- After that date, ALL access will be denied (app will break)
- You'll need to update the rules before then

### **No Environment Variables**
- Backend currently uses hardcoded URLs (Firebase URL is in the code)
- This is fine for now but not best practice for sensitive data

### **Auto-Backups**
- You have backup scripts in `/backend`:
  - `backup-betlogs.js` - Backs up bet data
  - `auto-archive.js` - Archives old data
  - `setup-backup-cron.sh` - Sets up automatic backups

### **Scrapers**
- You have Python scrapers in `/Users/justinferreira/Desktop/vegas-scrapers/`
- These pull stats from sports websites and save to Firebase
- Example: `nba_standings_scraper.py`

---

## 🛠️ LOCAL DEVELOPMENT

If you want to test changes on your computer before pushing to the internet:

### **Test Frontend Locally**
```bash
cd "/Users/justinferreira/Projects/Vegas Beta/V3GAS-B3TA-/frontend"
python3 -m http.server 8000
```
Then open: http://localhost:8000

### **Test Backend Locally**
```bash
cd "/Users/justinferreira/Projects/Vegas Beta/V3GAS-B3TA-/backend"
npm install
npm start
```
Server runs on: http://localhost:3000

---

## 📊 FILE SIZES

- **Frontend index.html**: 829 KB (pretty big!)
- **Frontend app.js**: 975 KB (all the logic)
- **Frontend styles.css**: 59 KB
- **Backend server.js**: 22 KB

---

## 🎓 SUMMARY IN SIMPLE TERMS

Think of your app like a restaurant:

- **Frontend (Netlify)** = The dining room where customers (you) interact
- **Backend (Render)** = The kitchen where orders are processed
- **Firebase Database** = The pantry where all the ingredients (data) are stored
- **GitHub** = The recipe book where all instructions are kept

When you want to add a new bet:
1. You tell the waiter (frontend) your order
2. Waiter takes it to the kitchen (backend)
3. Kitchen grabs ingredients from pantry (Firebase)
4. Kitchen prepares it and sends it back out
5. You see your bet on the screen

When you push code to GitHub:
- The dining room automatically redecorates (Netlify redeploys frontend)
- The kitchen automatically updates its equipment (Render redeploys backend)

---

*This map was created to help you understand your entire app infrastructure. Refer back to this anytime you're confused about where something lives or how it works!*
