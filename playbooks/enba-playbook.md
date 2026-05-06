# 🎮 e-NBA Playbook

**Active Period:** Full e-NBA Season  
**Status:** ✅ Active  
**Last Updated:** May 5, 2026

---

## 🖥️ UI Note — H2H Input Box

In the e-NBA version of the game winner UI, **replace the Injuries box with a H2H box.**

- In NBA mode: the injuries box collects injury count per team
- In e-NBA mode: that same box should be repurposed to collect **H2H wins and losses** for Core 1
- This is a UI-only change scoped to `mode: 'e-nba'` — do NOT touch the injuries box in NBA mode
- Injuries in e-NBA are handled automatically via the Core 4 NBA Playbook backend — no manual input needed

---



**This is a completely separate logic from the NBA Regular Season Playbook.**

- This playbook lives in its own function: `calculateENBAGameWinnerEdge()`
- The NBA playbook lives in: `calculateGameWinnerEdge()`
- These must NEVER share state, overwrite each other, or be confused
- The only time NBA logic is touched is in Core 4, where `calculateGameWinnerEdge()` is **called and read** — never modified
- All e-NBA UI, inputs, and outputs must be scoped to the e-NBA section of the app
- Team selection in e-NBA mode must be flagged as `mode: 'e-nba'` so the app knows which logic to run
- **Do not let e-NBA changes bleed into NBA logic under any circumstances**

---



The e-NBA Playbook uses the **Core 4 methodology** to calculate win probability for NBA 2K esports (H2H league) matchups. Since these are real NBA teams played on 2K, the logic bridges real-world NBA data with game-specific ratings and esports matchup history.

**Key Principle:** Combine esports-specific H2H data, real NBA standings blended with 2K team overalls, betting market odds, and the full real NBA prediction engine as a sanity check.

---

## 🧮 The Core 4 Formula

```
Win % = (Core1 × 0.32) + (Core2 × 0.32) + (Core3 × 0.21) + (Core4 × 0.15)
```

Cores are weighted based on esports relevance:

| Core | Weight |
|---|---|
| Core 1 - H2H % | 32% |
| Core 2 - Team Ability | 32% |
| Core 3 - No-Vig Odds | 21% |
| Core 4 - Full NBA Playbook | 15% |

---

## 📊 Core 1: H2H % (Head-to-Head Record)

**What it measures:** Historical matchup record between these two specific e-NBA teams  
**Weight:** 32%  
**Input Method:** ⚠️ MANUAL — user inputs H2H wins and losses manually

### Calculation:
```javascript
h2hWinPct = (h2hWins / (h2hWins + h2hLosses)) × 100
```

### Why it matters:
- Some players/teams have stylistic advantages over specific opponents in 2K
- Real NBA H2H trends can carry over into esports
- Most direct signal of how these two teams match up

### Example:
- Team A: 7 wins, 3 losses vs Team B → 70%
- Team B: 3 wins, 7 losses vs Team A → 30%

---

## 📊 Core 2: Team Ability % (50/50 Real Standings + 2K Overall)

**What it measures:** Blend of real NBA team quality and 2K game rating  
**Weight:** 32%  
**Input Method:** ✅ AUTOMATIC — pulled from real NBA standings + hardcoded 2K OVR table

### Two Components (50/50 blend):

#### Part A: Real NBA Standings (Win-Loss %)
```javascript
realWLPct = (wins / (wins + losses)) × 100
```

#### Part B: 2K Overall Matchup %
Uses the team's NBA 2K26 overall rating to generate a head-to-head matchup percentage.

```javascript
// Normalize OVR to a score with a floor (range: 77-85)
teamScore = ((OVR - 77) / 8) × 100 + 50

// Head-to-head matchup %
away2KPct = (awayScore / (awayScore + homeScore)) × 100
home2KPct = (homeScore / (awayScore + homeScore)) × 100
```

#### Final Core 2:
```javascript
teamAbility = (realWLPct + team2KPct) / 2

// Normalize between both teams
total = awayAbility + homeAbility
awayCore2 = (awayAbility / total) × 100
homeCore2 = (homeAbility / total) × 100
```

### 2K26 Team Overall Ratings (Launch Ratings — update as season progresses):

| Team | OVR |
|---|---|
| Oklahoma City Thunder | 85 |
| New York Knicks | 84 |
| Los Angeles Clippers | 83 |
| Los Angeles Lakers | 83 |
| Cleveland Cavaliers | 83 |
| Denver Nuggets | 83 |
| Dallas Mavericks | 83 |
| Houston Rockets | 83 |
| Indiana Pacers | 82 |
| Minnesota Timberwolves | 82 |
| Boston Celtics | 82 |
| Atlanta Hawks | 82 |
| San Antonio Spurs | 82 |
| Golden State Warriors | 81 |
| Orlando Magic | 81 |
| Philadelphia 76ers | 81 |
| Portland Trail Blazers | 81 |
| Memphis Grizzlies | 81 |
| New Orleans Pelicans | 81 |
| Sacramento Kings | 81 |
| Miami Heat | 81 |
| Milwaukee Bucks | 80 |
| Detroit Pistons | 80 |
| Toronto Raptors | 80 |
| Phoenix Suns | 79 |
| Charlotte Hornets | 79 |
| Utah Jazz | 79 |
| Chicago Bulls | 79 |
| Washington Wizards | 78 |
| Brooklyn Nets | 77 |

### Why it matters:
- Real standings reflect actual team quality and momentum
- 2K overalls reflect in-game talent gaps that directly affect esports outcomes
- Blending both gives a balanced picture of real + virtual team strength

### Example:
- OKC (85 OVR): score = ((85-77)/8) × 100 + 50 = 150
- Brooklyn (77 OVR): score = ((77-77)/8) × 100 + 50 = 50
- OKC 2K%: 150/200 = 75%, Brooklyn 2K%: 25%
- OKC real WL: 60% | Brooklyn real WL: 35%
- OKC Core 2: (75 + 60) / 2 = 67.5% → normalized
- Brooklyn Core 2: (25 + 35) / 2 = 30% → normalized

---

## 📊 Core 3: No-Vig Odds % (Market Intelligence)

**What it measures:** What the betting market thinks about this e-NBA matchup  
**Weight:** 21%  
**Input Method:** ⚠️ MANUAL — user inputs raw moneyline odds, app converts to no-vig automatically

### Calculation:
```javascript
// Convert American odds to implied probability
if (odds > 0) {
  implied = 100 / (odds + 100)
} else {
  implied = Math.abs(odds) / (Math.abs(odds) + 100)
}

// Remove vig
total = awayImplied + homeImplied
awayNoVig = (awayImplied / total) × 100
homeNoVig = (homeImplied / total) × 100
```

### Why it matters:
- Market odds aggregate all available information
- Sharp money accounts for player skill, recent form, meta matchups
- Complements raw stats with real-money intelligence

---

## 📊 Core 4: Full NBA Playbook Output

**What it measures:** What the real NBA prediction engine says about this matchup using real NBA data  
**Weight:** 15%  
**Input Method:** ✅ AUTOMATIC — runs existing NBA Regular Season Playbook logic and uses final output

### How it works:
Run the **complete NBA Regular Season Playbook** on this matchup using real NBA data for both teams. The final win % output from that calculation becomes Core 4.

The NBA Playbook includes:
1. **Table %** — Real NBA win-loss record
2. **Team Strength %** — Seed-based strength (16 - seed, normalized)
3. **No-Vig Odds %** — Market implied probability
4. **Last 10 Win %** — Recent form
5. **Seed Gap Multiplier** — 30% amplifier for 4+ seed gaps, 15% for 2-3 seed gaps
6. **Injury Adjustments** — ~2% per injury differential

The NBA Playbook final % becomes Core 4 directly.

### Why it matters:
- Acts as a sanity check against esports-specific data
- Real NBA team quality is directly reflected in 2K rosters
- Anchors the prediction in proven real-world logic

---

## 📈 Full Example Calculation

**Matchup:** OKC Thunder (Away) vs Brooklyn Nets (Home)  
**2K OVR:** OKC 85, Brooklyn 77  
**Real Records:** OKC 58-24, Brooklyn 20-62  
**Seeds:** OKC #1, Brooklyn #15  
**Odds:** OKC -350, Brooklyn +280  
**H2H:** OKC 8-2 vs Brooklyn  
**Last 10:** OKC 8-2, Brooklyn 3-7

### Core 1 — H2H %
- OKC: 8/10 = **80%**
- Brooklyn: 2/10 = **20%**

### Core 2 — Team Ability %
**2K OVR:**
- OKC score: ((85-77)/8) × 100 + 50 = 150 → 75%
- Brooklyn score: ((77-77)/8) × 100 + 50 = 50 → 25%

**Real WL:**
- OKC: 58/82 = 70.73%
- Brooklyn: 20/82 = 24.39%

**Blend:**
- OKC: (75 + 70.73) / 2 = 72.87
- Brooklyn: (25 + 24.39) / 2 = 24.70
- Normalized → **OKC 74.69%, Brooklyn 25.31%**

### Core 3 — No-Vig Odds %
- OKC -350 → 77.78% implied
- Brooklyn +280 → 26.32% implied
- Total: 104.1% (remove vig)
- **OKC 74.72%, Brooklyn 25.28%**

### Core 4 — Full NBA Playbook Output
Run NBA Regular Season Playbook:
- Table %: OKC 70.73%, Brooklyn 24.39%
- Team Strength: OKC seed 1 (15pts) vs Brooklyn seed 15 (1pt) → OKC 93.75%
- No-Vig: OKC 74.72%
- Last 10: OKC 80%, Brooklyn 30%
- Seed gap = 14 → 30% amplifier applied
- **NBA Playbook Final: OKC ~85%, Brooklyn ~15%**

### Step 5 — Average All 4 Cores
```
OKC:      (80 + 74.69 + 74.72 + 85) / 4 = 78.60%
Brooklyn: (20 + 25.31 + 25.28 + 15) / 4 = 21.40%
```

### ✅ Final Result:
**OKC 78.60%, Brooklyn 21.40%** → Heavy OKC favorite

---

## 💡 When to Trust This Playbook Most

✅ **High Confidence Scenarios:**
- Large 2K OVR gap (4+ points)
- Dominant H2H record (7-3 or better)
- Market and Core 4 agree
- Strong real NBA seed gap (4+)

⚠️ **Lower Confidence Scenarios:**
- Similar 2K OVR ratings (within 1-2 points)
- Small H2H sample (fewer than 5 games)
- Market disagrees with Core 4
- Mid-tier teams with similar records

---

## 🔧 Technical Implementation

### Data Needed Per Game:
- H2H win/loss record between the two e-NBA teams
- Real NBA standings (wins/losses + seed)
- 2K team overall rating (from table above)
- Moneyline odds for the matchup
- Last 10 game results (real NBA)
- Injury count per team (real NBA)

### Code Location:
- **e-NBA Core 4 Function:** `calculateENBAGameWinnerEdge()` (app.js)
- **2K OVR Lookup Table:** `NBA_2K26_OVERALLS` constant (app.js)
- **Core 1 H2H Logic:** Core 1 block in `calculateENBAGameWinnerEdge()`
- **Core 2 2K OVR Normalization:** Core 2 block
- **Core 3 No-Vig:** Reuse existing `convertOdds()` function
- **Core 4 NBA Playbook:** Call existing `calculateGameWinnerEdge()` and use final output

---

## 🎓 Key Principles

1. **2K OVR matters** — talent gaps in the game translate directly to win probability
2. **H2H is king** — esports matchups have stylistic tendencies just like real sports
3. **Real NBA quality carries over** — better real teams = better 2K rosters
4. **Market knows** — e-NBA odds reflect player skill and meta matchups
5. **NBA Playbook as anchor** — real-world logic keeps predictions grounded

---

## 🔄 Version History

- **v1.0** (May 5, 2026) - Initial e-NBA Core 4 implementation
