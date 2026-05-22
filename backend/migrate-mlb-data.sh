#!/bin/bash

# Firebase Migration Script: Move MLB data from root to vegasbeta/mlb/scrapers/

FB_ROOT="https://vegas-bet-default-rtdb.firebaseio.com"
FB_TARGET="$FB_ROOT/vegasbeta/mlb/scrapers"

echo "🚀 Starting MLB data migration..."
echo ""

# Function to migrate a path
migrate_path() {
    root_path=$1
    target_path=$2

    echo "📦 Migrating $root_path -> vegasbeta/mlb/scrapers/$target_path"

    # 1. Fetch data from root level
    data=$(curl -s "$FB_ROOT/$root_path.json")

    if [ "$data" == "null" ] || [ -z "$data" ]; then
        echo "   ⚠️  No data found at $root_path, skipping..."
        echo ""
        return
    fi

    # 2. Write data to new location
    response=$(curl -s -X PUT \
        -H "Content-Type: application/json" \
        -d "$data" \
        "$FB_TARGET/$target_path.json")

    if [ $? -eq 0 ]; then
        echo "   ✅ Successfully migrated $root_path"
    else
        echo "   ❌ Failed to migrate $root_path"
    fi

    echo ""
}

# Migrate each path
migrate_path "mlbBatting" "batting"
migrate_path "mlbStarters" "starters"
migrate_path "mlbInjuries" "injuries"
migrate_path "mlbStandings" "standings"
migrate_path "mlbSeries" "series"

echo "🎉 Migration complete!"
echo ""
echo "⚠️  WARNING: Old data still exists at root level."
echo "   Please verify the migration in Firebase console before deleting."
