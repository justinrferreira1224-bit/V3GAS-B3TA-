#!/bin/bash

# Firebase Cleanup Script: Delete old root-level MLB paths

FB_ROOT="https://vegas-bet-default-rtdb.firebaseio.com"

echo "🧹 Starting cleanup of old MLB paths..."
echo ""

paths=(
    "mlbBatting"
    "mlbStarters"
    "mlbInjuries"
    "mlbStandings"
    "mlbSeries"
)

for path in "${paths[@]}"; do
    echo "🗑️  Deleting $path..."

    response=$(curl -s -X DELETE "$FB_ROOT/$path.json")

    if [ $? -eq 0 ]; then
        echo "   ✅ Successfully deleted $path"
    else
        echo "   ❌ Failed to delete $path"
    fi

    echo ""
done

echo "🎉 Cleanup complete!"
echo "   All MLB data is now under vegasbeta/mlb/scrapers/"
