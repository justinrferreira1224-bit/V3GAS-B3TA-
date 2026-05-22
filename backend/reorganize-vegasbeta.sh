#!/bin/bash

# Firebase Reorganization: Clean up vegasbeta root structure

FB_ROOT="https://vegas-bet-default-rtdb.firebaseio.com"
FB_BASE="$FB_ROOT/vegasbeta"

echo "🔄 Starting vegasbeta reorganization..."
echo ""

# ── Step 1: Create settings/ path ──────────────────────────────
echo "📁 Creating settings/ path..."

# Move activeBetDay
activeBetDay=$(curl -s "$FB_BASE/activeBetDay.json")
curl -s -X PUT -H "Content-Type: application/json" -d "$activeBetDay" "$FB_BASE/settings/activeBetDay.json" > /dev/null
echo "   ✅ Moved activeBetDay to settings/"

# Move monthStartOverrides
monthStartOverrides=$(curl -s "$FB_BASE/monthStartOverrides.json")
curl -s -X PUT -H "Content-Type: application/json" -d "$monthStartOverrides" "$FB_BASE/settings/monthStartOverrides.json" > /dev/null
echo "   ✅ Moved monthStartOverrides to settings/"

echo ""

# ── Step 2: Create userData/ path ──────────────────────────────
echo "📁 Creating userData/ path..."

# Move bankroll
bankroll=$(curl -s "$FB_BASE/bankroll.json")
curl -s -X PUT -H "Content-Type: application/json" -d "$bankroll" "$FB_BASE/userData/bankroll.json" > /dev/null
echo "   ✅ Moved bankroll to userData/"

# Move bankrollGoal
bankrollGoal=$(curl -s "$FB_BASE/bankrollGoal.json")
curl -s -X PUT -H "Content-Type: application/json" -d "$bankrollGoal" "$FB_BASE/userData/bankrollGoal.json" > /dev/null
echo "   ✅ Moved bankrollGoal to userData/"

# Move previousBankroll
previousBankroll=$(curl -s "$FB_BASE/previousBankroll.json")
curl -s -X PUT -H "Content-Type: application/json" -d "$previousBankroll" "$FB_BASE/userData/previousBankroll.json" > /dev/null
echo "   ✅ Moved previousBankroll to userData/"

# Move gwBankroll
gwBankroll=$(curl -s "$FB_BASE/gwBankroll.json")
curl -s -X PUT -H "Content-Type: application/json" -d "$gwBankroll" "$FB_BASE/userData/gwBankroll.json" > /dev/null
echo "   ✅ Moved gwBankroll to userData/"

echo ""

# ── Step 3: Delete old paths ───────────────────────────────────
echo "🗑️  Cleaning up old paths..."

paths_to_delete=(
    "activeBetDay"
    "monthStartOverrides"
    "bankroll"
    "bankrollGoal"
    "previousBankroll"
    "gwBankroll"
    "betLog"
    "logbookEntries"
)

for path in "${paths_to_delete[@]}"; do
    curl -s -X DELETE "$FB_BASE/$path.json" > /dev/null
    echo "   ✅ Deleted $path"
done

echo ""
echo "🎉 Reorganization complete!"
echo ""
echo "New structure:"
echo "vegasbeta/"
echo "├── settings/ (activeBetDay, monthStartOverrides)"
echo "├── userData/ (bankroll, bankrollGoal, previousBankroll, gwBankroll)"
echo "└── sports/ (nba, mlb, nhl, nfl, mls, ncaab, ncaaf)"
