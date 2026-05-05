# 🏀 NBA Playoff Playbook

**Active Period:** Days 71-133 (April 18 - June 19)  
**Status:** ✅ Automated  
**Last Updated:** May 5, 2026

---

## 📋 Overview

The NBA Playoff Playbook overrides regular season Core 4 logic with series-based probability calculations. It factors in series score, game number, home court advantage, and special playoff scenarios.

**Key Principle:** Playoff basketball is fundamentally different than regular season. Series context matters MORE than individual team stats.

---

## 🧮 The Math

### Base Calculation: 70/30 Split
```
Final % = (70% × Playoff Model) + (30% × Regular Season Core 4)
```

This hybrid approach:
- Prioritizes series context (70%)
- Keeps team quality in the mix (30%)
- Prevents over-fitting to small sample playoff data

---

## 🎯 Playoff Model Components

### 1. Series State Tracking (Automated)
- **Scans bet log** for all completed games between two teams
- **Auto-counts wins** for each team (0-4)
- **Displays current series score** (e.g., "2-1")
- **Calculates game number** (Game 1-7)

### 2. Home Court Advantage
- Team with better regular season record gets home court for the SERIES
- **Format: 2-2-1-1-1**
  - Games 1, 2, 5, 7: Home court team's arena
  - Games 3, 4, 6: Other team's arena

### 3. Series State Probabilities

#### Tied Series States
| Score | Game | Favored Team | Probability |
|-------|------|--------------|-------------|
| 0-0 | Game 1 | Home court team | 60% |
| 1-1 | Game 3 | Game home team | 73% |
| 2-2 | Game 5 | Game home team | 83% |
| 3-3 | Game 7 | Game home team | 74% |

#### Leader Advantage States
| Score | Leading Team Probability |
|-------|-------------------------|
| 1-0 | 76% |
| 2-0 | 93% |
| 2-1 | 68% |
| 3-0 | Special (sweep protection) |
| 3-1 | 92% |
| 3-2 | 68% |

---

## 🛡️ Special Logic

### Sweep Protection (3-0)
```
If series is 3-0:
  Trailing team gets 95% probability
  Reason: Sweeps are extremely rare in NBA playoffs
```

### Snap-Back Logic (Game 2)
```
If home court team lost Game 1 at home:
  Home court team gets 75% in Game 2 (60% base + 15% boost)
  Reason: Teams historically respond strong after dropping home game
```

### Flip Logic (0-2 Deficit)
```
If home court team lost BOTH Game 1 AND Game 2 at home:
  Model FLIPS to favor the other team
  Reason: Losing both home games signals series control has shifted
```

---

## 📊 Example Calculation

**Scenario:** Celtics (home court) vs 76ers, Series 2-1 Celtics, Game 4

**Step 1: Get Series Probability**
- Series leader (Celtics) is up 2-1
- Base probability: 68% for Celtics

**Step 2: Determine Game Home Team**
- Game 4 = away arena (not in [1,2,5,7])
- 76ers are the game home team

**Step 3: Adjust for Game Home**
- Celtics favored at 68%
- But 76ers are home for this game
- 76ers probability = 100% - 68% = 32%

**Step 4: Get Regular Season Core 4**
- Calculate normal Core 4 percentages
- Example: Celtics 62%, 76ers 38%

**Step 5: Combine (70/30 Split)**
```
Celtics Final = (32% × 0.70) + (62% × 0.30) = 22.4% + 18.6% = 41.0%
76ers Final = (68% × 0.70) + (38% × 0.30) = 47.6% + 11.4% = 59.0%
```

**Result:** 76ers 59%, Celtics 41% (76ers favored despite being down in series because they're home in Game 4)

---

## 🔧 Technical Implementation

### Auto-Updates Triggered By:
1. **Team Selection** - Scans bet log when teams are selected
2. **Game Result Marked** - Updates series when W/L clicked in bet log
3. **Team Name Matching** - Case-insensitive, handles variations

### Code Location:
- **Playoff Model Logic:** `applyPlayoffModel()` (app.js:571-632)
- **Series State Calculation:** `getSeriesStateProbability()` (app.js:506-569)
- **Auto-Update on Result:** `setBetResult()` (app.js:9796-9876)
- **Auto-Load from Bet Log:** `loadSeriesState()` (app.js:673-733)

---

## 📈 Performance Tracking

### How to Evaluate:
1. Filter bet log for days 71-133
2. Track W-L record
3. Compare vs regular season Core 4 performance
4. Identify patterns in high-confidence picks

### Key Metrics to Watch:
- **Win % on series leaders** (should be high due to 68-93% probabilities)
- **Sweep protection success rate** (trailing 3-0 teams)
- **Snap-back accuracy** (Game 2 after Game 1 loss)
- **Game 7 performance** (home team should dominate at 74%)

---

## 💡 When to Trust This Playbook Most

✅ **High Confidence Scenarios:**
- 2-0 or 3-1 series leads (92-93% probabilities)
- Game 7 with home court team
- Snap-back Game 2 situations
- Trailing team in 3-0 series (sweep protection)

⚠️ **Lower Confidence Scenarios:**
- Even series (1-1, 2-2, 3-3) with weak regular season edge
- Large injury differentials (regular season factors weigh more)
- Teams with extreme talent gaps (seed diff 8+)

---

## 🎓 Lessons Learned

1. **Series context >>> Individual game stats** in playoffs
2. **Home court in specific games** matters more than overall record
3. **Sweeps are rare** - always bet against the sweep
4. **Teams respond to adversity** - snap-back logic is real
5. **Game 7s are coin flips** unless clear home court edge

---

## 🔄 Version History

- **v1.0** (May 5, 2026) - Automated series tracking, display-only interface
- **v0.9** (May 4, 2026) - Manual series input with playoff model
- **v0.5** (Apr 18, 2026) - Initial playoff logic implementation
