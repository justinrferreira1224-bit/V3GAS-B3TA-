# 🏀 NBA Regular Season Playbook

**Active Period:** Days 1-70, 134+ (Feb 1 - Apr 17, Jun 20+)  
**Status:** ✅ Active  
**Last Updated:** May 5, 2026

---

## 📋 Overview

The NBA Regular Season Playbook uses the **Core 4 methodology** to calculate win probability based on team quality, recent form, and market sentiment. This is the foundation logic that runs for 80% of the NBA season.

**Key Principle:** Combine multiple independent factors, normalize them, and let the data speak.

---

## 🧮 The Core 4 Formula

```
Team Total = Core 1 + Core 2 + Core 3 + Core 4
Win % = (Team Total / Both Teams Total) × 100
```

Then apply **seed gap multipliers** for large talent differentials.

---

## 📊 Core 1: Table % (Win-Loss Record)

**What it measures:** Current season performance  
**Source:** Team's actual wins and losses

### Calculation:
```javascript
tablePercent = (wins / (wins + losses)) × 100
```

### Why it matters:
- Direct measurement of team success
- Accounts for strength of schedule (better teams play each other)
- Most reliable single predictor over full season

### Example:
- Celtics: 57-27 = 67.86%
- 76ers: 46-40 = 53.49%

---

## 📊 Core 2: Team Strength % (Seed-Based)

**What it measures:** Relative conference standing  
**Source:** Team's playoff seed (1-15)

### Calculation:
```javascript
// Convert seed to strength score (inverse)
awayStrength = 16 - awaySeed  // Seed 1 = 15 points, Seed 15 = 1 point
homeStrength = 16 - homeSeed

// Normalize to percentage
total = awayStrength + homeStrength
awayTeamStrength = (awayStrength / total) × 100
homeTeamStrength = (homeStrength / total) × 100
```

### Why it matters:
- Seeds compress quality differences (1 seed vs 8 seed is massive)
- Captures playoff positioning value
- Seed gaps of 4+ are historically 68-77% win rates

### Example:
- Celtics Seed 2: 16 - 2 = 14 points
- 76ers Seed 8: 16 - 8 = 8 points
- Total: 22 points
- Celtics: (14/22) × 100 = 63.64%
- 76ers: (8/22) × 100 = 36.36%

---

## 📊 Core 3: No-Vig Odds % (Market Intelligence)

**What it measures:** What the betting market thinks  
**Source:** Moneyline odds (converted)

### Calculation:
```javascript
// Step 1: Convert American odds to implied probability
if (odds > 0) {
  implied = 100 / (odds + 100)
} else {
  implied = Math.abs(odds) / (Math.abs(odds) + 100)
}

// Step 2: Remove vig (bookmaker margin)
awayImplied = awayOdds converted
homeImplied = homeOdds converted
total = awayImplied + homeImplied  // Usually ~105-108% (vig)

awayNoVig = (awayImplied / total) × 100
homeNoVig = (homeImplied / total) × 100
```

### Why it matters:
- The market aggregates ALL information (injuries, trends, insider knowledge)
- Sharp money moves lines efficiently
- Complements statistical models with human insight

### Example:
- 76ers +220 = 31.25% implied
- Celtics -280 = 73.68% implied
- Total: 104.93% (vig removed)
- 76ers no-vig: 29.78%
- Celtics no-vig: 70.22%

---

## 📊 Core 4: Last 10 Win % (Recent Form)

**What it measures:** Momentum and current performance  
**Source:** Last 10 game results

### Calculation:
```javascript
wins = last10Results.filter(r => r === 'W').length
winPercent = (wins / 10) × 100
```

### Why it matters:
- Teams get hot/cold (streaks matter)
- Recent performance > early season performance
- Captures injuries, lineup changes, coaching adjustments

### Example:
- Celtics: 8-2 last 10 = 80%
- 76ers: 5-5 last 10 = 50%

---

## 🎯 Seed Gap Multipliers

After calculating Core 4 totals, apply amplifiers for large talent gaps:

### Large Gap (4+ seeds)
```javascript
if (seedGap >= 4) {
  talentDiff = homeTotalValue - awayTotalValue
  betterTeamTotal += talentDiff × 0.30  // 30% amplifier
}
```

**Example:** Seed 2 vs Seed 8 (gap of 6)
- Better team's edge gets boosted 30%
- Reflects historical 68-77% win rate for 4+ seed gaps

### Medium Gap (2-3 seeds)
```javascript
if (seedGap >= 2) {
  talentDiff = homeTotalValue - awayTotalValue
  betterTeamTotal += talentDiff × 0.15  // 15% amplifier
}
```

**Example:** Seed 3 vs Seed 5 (gap of 2)
- Better team's edge gets boosted 15%
- Reflects 91.1% win rate for 2-3 seed gaps

### Small Gap (0-1 seeds)
```javascript
// No amplifier - let Core 4 speak for itself
```

---

## 🏥 Injury Adjustments

Injuries are factored separately from Core 4:

```javascript
injuryDiff = awayInjuries - homeInjuries

// Each injury = ~2% shift
if (injuryDiff > 0) {
  awayPercent -= injuryDiff × 2
  homePercent += injuryDiff × 2
}
```

**Why separate?**
- Injuries are temporary, not reflective of true team quality
- Allows for manual override if injury data is outdated
- Can be dialed up/down based on injury severity

---

## 📈 Full Example Calculation

**Matchup:** Celtics (Seed 2, 57-27, 8-2 L10) vs 76ers (Seed 8, 46-40, 5-5 L10)  
**Odds:** Celtics -280, 76ers +220  
**Injuries:** Celtics 0, 76ers 1

### Step 1: Calculate Core 4

**Core 1 (Table %):**
- Celtics: 67.86%
- 76ers: 53.49%

**Core 2 (Team Strength %):**
- Celtics: 63.64%
- 76ers: 36.36%

**Core 3 (No-Vig Odds %):**
- Celtics: 70.22%
- 76ers: 29.78%

**Core 4 (Last 10 Win %):**
- Celtics: 80.00%
- 76ers: 50.00%

### Step 2: Sum Core 4
- Celtics Total: 67.86 + 63.64 + 70.22 + 80.00 = 281.72
- 76ers Total: 53.49 + 36.36 + 29.78 + 50.00 = 169.63

### Step 3: Apply Seed Gap Multiplier (6-seed gap)
```
talentDiff = 281.72 - 169.63 = 112.09
boost = 112.09 × 0.30 = 33.63
Celtics Total = 281.72 + 33.63 = 315.35
```

### Step 4: Normalize
```
total = 315.35 + 169.63 = 484.98
Celtics % = (315.35 / 484.98) × 100 = 65.02%
76ers % = (169.63 / 484.98) × 100 = 34.98%
```

### Step 5: Apply Injuries
```
injuryDiff = 1 - 0 = 1
Celtics % = 65.02 + (1 × 2) = 67.02%
76ers % = 34.98 - (1 × 2) = 32.98%
```

### Final Edge:
**Celtics 67%, 76ers 33%** → Celtics by 34% edge

---

## 💡 When to Trust This Playbook Most

✅ **High Confidence Scenarios:**
- Seed gap 4+ (amplifier kicks in)
- Strong last 10 form (7+ wins)
- Market and Core 4 agree (odds align with stats)
- Low injury differential (0-2 difference)

⚠️ **Lower Confidence Scenarios:**
- Even matchups (seed gap 0-1, similar records)
- Conflicting signals (hot team vs good team)
- High injury counts (5+ combined)
- Rest disadvantage (back-to-back games)

---

## 🔧 Technical Implementation

### Code Location:
- **Core 4 Calculation:** `calculateGameWinnerEdge()` (app.js:735-950)
- **Seed Gap Multipliers:** (app.js:876-896)
- **No-Vig Conversion:** (app.js:775-850)
- **Injury Adjustments:** Inline during edge calculation

---

## 📊 Performance Tracking

### Key Metrics:
- **Overall W-L record** (baseline)
- **Win % by edge confidence**:
  - 10-20% edge
  - 20-30% edge
  - 30%+ edge
- **Win % by seed gap**:
  - 0-1 seed gap
  - 2-3 seed gap
  - 4+ seed gap

---

## 🎓 Lessons Learned

1. **No single factor is enough** - Core 4 averaging smooths variance
2. **Seed gaps are the strongest signal** - 4+ gap = money
3. **Market is smart** - when Core 4 disagrees with odds, investigate why
4. **Last 10 matters** - hot teams beat better teams
5. **Injuries need manual review** - auto-count isn't always accurate

---

## 🔄 Version History

- **v2.0** (May 5, 2026) - Documented for playbook system
- **v1.5** (Mar 1, 2026) - Added seed gap multipliers
- **v1.0** (Feb 1, 2026) - Initial Core 4 implementation
