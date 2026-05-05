# ⚾ MLB Regular Season Playbook

**Active Period:** Full MLB Season (April - October)  
**Status:** ✅ Active  
**Last Updated:** May 5, 2026

---

## 📋 Overview

The MLB Regular Season Playbook uses a specialized **Core 4 methodology** tailored for baseball. Unlike basketball, baseball has game-specific factors like pitcher matchups and park effects that heavily influence outcomes.

**Key Principle:** Pitching dominates baseball. A great pitcher can neutralize a great offense, so Core 1 (Pitching) carries the most weight.

---

## 🧮 The Core 4 Formula

```
Team Final % = (Core 1 + Core 2 + Core 3 + Core 4) / 4
Win % = (Team Final / Both Teams Final) × 100
```

All 4 cores are equally weighted at 25% each in the final average.

---

## 📊 Core 1: Pitching Stats

**What it measures:** Starting pitcher quality  
**Weight:** 25% (but most influential)

### Stats Used:
1. **ERA (Earned Run Average)** - Lower is better
2. **WHIP (Walks + Hits per Inning)** - Lower is better
3. **K/9 (Strikeouts per 9 innings)** - Higher is better
4. **Opponent BA (Batting Average Against)** - Lower is better

### Calculation:
```javascript
// Normalize each stat to 0-100 scale
// Lower ERA/WHIP/OppBA = higher score
// Higher K/9 = higher score

// Example scoring:
ERA: 100 - (ERA × 30)        // 2.00 ERA = 40 points, 5.00 ERA = -50 points (capped)
WHIP: 100 - (WHIP × 60)      // 1.00 WHIP = 40 points, 1.50 WHIP = 10 points
K/9: K/9 × 8                  // 9.0 K/9 = 72 points, 6.0 K/9 = 48 points
OppBA: 100 - (OppBA × 400)   // .200 = 20 points, .300 = -20 points

// Average all 4 stats
pitcherScore = (ERA + WHIP + K9 + OppBA) / 4

// Normalize between teams
total = awayPitcherScore + homePitcherScore
awayPitching% = (awayPitcherScore / total) × 100
homePitching% = (homePitcherScore / total) × 100
```

### Why it matters:
- **Ace vs Ace:** Elite pitching duel = low scoring, slight edges matter
- **Ace vs Scrub:** 70-30 split common
- **Park factors amplify:** Good pitcher in pitcher-friendly park = dominant

### Example:
**Away Pitcher:** 2.50 ERA, 1.10 WHIP, 10.0 K/9, .220 OppBA  
**Home Pitcher:** 4.20 ERA, 1.35 WHIP, 7.5 K/9, .275 OppBA

Away pitcher gets ~65%, Home pitcher gets ~35%

---

## 📊 Core 2: Batting Stats

**What it measures:** Team offensive capability  
**Weight:** 25%

### Stats Used:
1. **AVG (Batting Average)** - Team hitting quality
2. **OBP (On-Base Percentage)** - Getting on base frequency
3. **SLG (Slugging Percentage)** - Power/extra bases
4. **OPS (OBP + SLG)** - Overall offensive output

### Calculation:
```javascript
// Each stat normalized to 0-100 scale
AVG: AVG × 350              // .300 = 105 points, .250 = 87.5 points
OBP: OBP × 275              // .350 = 96.25, .320 = 88 points
SLG: SLG × 225              // .450 = 101.25, .400 = 90 points
OPS: OPS × 120              // .800 = 96, .750 = 90 points

// Average all 4 stats
battingScore = (AVG + OBP + SLG + OPS) / 4

// Normalize between teams
total = awayBattingScore + homeBattingScore
awayBatting% = (awayBattingScore / total) × 100
homeBatting% = (homeBattingScore / total) × 100
```

### Why it matters:
- **Good offense vs weak pitcher:** Massive edge
- **Slumping offense vs ace:** Pitching wins
- **OPS is king:** Measures complete offensive value

### Example:
**Away Team:** .265 AVG, .335 OBP, .430 SLG, .765 OPS  
**Home Team:** .280 AVG, .350 OBP, .460 SLG, .810 OPS

Home team gets ~55%, Away team gets ~45%

---

## 📊 Core 3: Team Ability %

**What it measures:** Overall team quality + market intelligence  
**Weight:** 25%

### Components:
1. **Win-Loss Percentage** (50% weight)
2. **No-Vig Odds** (50% weight)

### Calculation:
```javascript
// Part 1: Win-Loss %
teamWLPct = (wins / (wins + losses)) × 100

// Part 2: No-Vig Odds
awayImplied = convertOdds(awayOdds)
homeImplied = convertOdds(homeOdds)
total = awayImplied + homeImplied
awayNoVig = (awayImplied / total) × 100
homeNoVig = (homeImplied / total) × 100

// Combine both
awayAbility = (awayWLPct + awayNoVig) / 2
homeAbility = (homeWLPct + homeNoVig) / 2

// Normalize
total = awayAbility + homeAbility
awayAbility% = (awayAbility / total) × 100
homeAbility% = (homeAbility / total) × 100
```

### Why it matters:
- **Winning teams win more:** 90-win team beats 70-win team 65% of the time
- **Market is sharp:** Odds reflect injuries, weather, lineups before you do
- **Catches outliers:** Bad team with ace pitcher still gets credit

### Example:
**Away Team:** 55-45 record (.550) + odds imply 45% = 49.75% average  
**Home Team:** 65-35 record (.650) + odds imply 55% = 60.00% average

Home team gets ~55%, Away team gets ~45%

---

## 📊 Core 4: Game Factors

**What it measures:** Context-specific edges  
**Weight:** 25%

### Three Sub-Factors:

#### 4a. Park Factors (33%)
**Pitcher-friendly parks** (e.g., Oracle Park, T-Mobile Park):
- Help good pitchers dominate
- Suppress offense

**Hitter-friendly parks** (e.g., Coors Field, Great American Ball Park):
- Inflate run scoring
- Neutralize pitching advantages

**Calculation:**
```javascript
// Each park has pitcher/hitter split (e.g., Oracle: 82.6/17.4)
// Normalize between home park and away park
// Apply +5% home, -4.5% away adjustment
```

#### 4b. Series Count Momentum (33%)
**2-game series:**
- Team up 1-0 gets 70% for Game 2

**3-game series:**
- Team up 1-0 gets 60%
- Team up 2-0 gets 80%

**4-game series:**
- Team up 1-0 gets 58%
- Team up 2-0 gets 72%
- Team up 3-0 gets 90%
- Team up 2-1 gets 65%

#### 4c. Base Score + Home/Away (33%)
```javascript
// Combine no-vig odds + win-loss %
baseScore = (noVigOdds + wlPct) / 2

// Apply home field advantage
awayBase -= 2.5%
homeBase += 3.0%

// Factor in series count
finalBase = (baseScore + seriesCountPct) / 2
```

### Final Game Factors:
```javascript
gameFactor = (parkFactor + seriesCount + baseScore) / 3
```

### Why it matters:
- **Coors Field:** Even weak offenses score 6+ runs
- **Series sweeps:** Trailing team fights harder to avoid sweep
- **Home field:** Worth 3-4% consistently

---

## 📈 Full Example Calculation

**Matchup:** Dodgers @ Giants (3-game series, Game 2, Giants lead 1-0)  
**Pitchers:** Dodgers RHP 3.20 ERA vs Giants LHP 2.80 ERA  
**Teams:** Dodgers 65-50 (.565), Giants 60-55 (.522)  
**Odds:** Dodgers -135, Giants +115  
**Park:** Oracle Park (pitcher-friendly: 82.6/17.4)

### Step 1: Core 1 - Pitching
- Giants pitcher (2.80 ERA) > Dodgers pitcher (3.20 ERA)
- **Giants 55%, Dodgers 45%**

### Step 2: Core 2 - Batting
- Dodgers offense (.810 OPS) > Giants offense (.760 OPS)
- **Dodgers 54%, Giants 46%**

### Step 3: Core 3 - Team Ability
- Dodgers record: .565 = 56.5%
- Dodgers no-vig odds: 58%
- Average: 57.25%
- Giants record: .522 = 52.2%
- Giants no-vig odds: 42%
- Average: 47.1%
- Normalized: **Dodgers 55%, Giants 45%**

### Step 4: Core 4 - Game Factors
**Park Factor:**
- Oracle Park helps pitchers
- Giants pitcher (home) benefits more
- **Giants 53%, Dodgers 47%**

**Series Count:**
- Giants lead 1-0 in 3-game series
- Giants get 60% momentum boost
- **Giants 60%, Dodgers 40%**

**Base Score:**
- Home field +3%, Away -2.5%
- **Giants 52%, Dodgers 48%**

**Combined Game Factors:** (53 + 60 + 52) / 3 = **Giants 55%, Dodgers 45%**

### Step 5: Average All 4 Cores
```
Dodgers: (45 + 54 + 55 + 45) / 4 = 49.75%
Giants:  (55 + 46 + 45 + 55) / 4 = 50.25%
```

### Final Result:
**Giants 50.25%, Dodgers 49.75%** → Essentially a **coin flip**, slight Giants edge

**Analysis:** Elite pitching matchup in pitcher-friendly park with series momentum for Giants barely overcomes Dodgers' superior offense and team quality.

---

## 💡 When to Trust This Playbook Most

✅ **High Confidence Scenarios:**
- **Ace vs weak pitcher** (ERA gap 2.0+)
- **Extreme park factors** (Coors, Oracle)
- **Series momentum** (up 2-0 or 3-0)
- **Clear team quality gap** (90-win team vs 70-win team)

⚠️ **Lower Confidence Scenarios:**
- **Bullpen games** (no clear starter)
- **Rookie pitcher debuts** (no stats)
- **Weather delays** (affects pitcher routine)
- **Trade deadline chaos** (roster uncertainty)

---

## 🔧 Technical Implementation

### Code Location:
- **Pitching Stats Calculation:** `calculateMLBGameWinnerEdge()` (app.js:1200-1350)
- **Batting Stats Calculation:** (app.js:1350-1450)
- **Park Factors Data:** (app.js:1487-1518)
- **Series Count Logic:** (app.js:1548-1568)
- **Final Averaging:** (app.js:1591-1596)

### Data Sources:
- **Pitcher stats:** Fetched from `/api/mlb/pitching/:team`
- **Batting stats:** Fetched from `/api/mlb/batting/:team`
- **Park factors:** Hardcoded lookup table
- **Team records:** Tracked in standings

---

## 📊 Performance Tracking

### Key Metrics to Watch:
- **Win % when betting on aces** (ERA < 3.00)
- **Win % in Coors Field games** (run total variance)
- **Series sweep prevention rate** (0-2 → 0-3 conversion)
- **Home underdog performance** (home park + momentum)

### Adjustment Signals:
- If **pitcher ERA doesn't predict wins**, reduce pitching weight
- If **park factors overperform**, increase Game Factors weight
- If **series sweeps happen often**, reduce sweep protection

---

## 🎓 Lessons Learned

1. **Pitching > Hitting** in baseball (unlike basketball where talent dominates)
2. **Park factors are real** - Coors games score 2-3 more runs than average
3. **Series momentum matters** - teams fight harder to avoid sweeps
4. **Ace pitchers are bankable** - sub-3.00 ERA starters win 65%+ consistently
5. **Weather impacts more than injuries** - rain = advantage pitchers

---

## 🔄 Version History

- **v2.0** (May 5, 2026) - Documented for playbook system
- **v1.5** (May 1, 2026) - Added series count momentum logic
- **v1.0** (April 1, 2026) - Initial MLB Core 4 implementation
