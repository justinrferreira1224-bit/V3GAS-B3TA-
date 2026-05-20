const https = require('https');

const FB_BASE = 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';

function fetch(url, options = {}) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const req = https.request({
            hostname: urlObj.hostname,
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: options.headers || {}
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({
                    json: () => Promise.resolve(data ? JSON.parse(data) : null),
                    ok: res.statusCode >= 200 && res.statusCode < 300
                });
            });
        });
        req.on('error', reject);
        if (options.body) req.write(options.body);
        req.end();
    });
}

async function main() {
    console.log('🔄 Fetching betLog from Firebase...');
    const response = await fetch(`${FB_BASE}/nba/betLog.json`);
    const betLogObj = await response.json();

    if (!betLogObj) {
        console.error('❌ No betLog data found');
        return;
    }

    console.log('🔍 Scanning for duplicate games in playoff days...\n');

    let totalDeleted = 0;

    for (const [dateKey, dayData] of Object.entries(betLogObj)) {
        const [month, day] = dateKey.split('-').map(Number);
        const date = new Date(2026, month - 1, day);
        const jan1 = new Date(2026, 0, 1);
        const dayOfYear = Math.floor((date - jan1) / (1000 * 60 * 60 * 24)) + 1;

        // Only check playoff days (71-133)
        if (dayOfYear < 71 || dayOfYear > 133) continue;

        const gamesObj = dayData.games || {};

        if (typeof gamesObj === 'object' && !Array.isArray(gamesObj)) {
            const gameEntries = Object.entries(gamesObj);

            for (const [gameKey, game] of gameEntries) {
                // Identify duplicates:
                // 1. Games with timestamp IDs (numeric keys)
                // 2. Games that only have pick/res but no team data
                // 3. Games without away/home structure

                const isTimestampId = !gameKey.startsWith('-');
                const hasNoTeamData = !game.away && !game.home && !game.t1 && !game.t2;
                const onlyHasResult = (game.pick || game.res) && hasNoTeamData;

                if (isTimestampId || onlyHasResult || hasNoTeamData) {
                    console.log(`🗑️  Deleting duplicate from ${dateKey} (Day ${dayOfYear})`);
                    console.log(`   Key: ${gameKey}`);
                    console.log(`   Data: ${JSON.stringify(game)}`);

                    // Delete the game
                    const deleteUrl = `${FB_BASE}/nba/betLog/${dateKey}/games/${gameKey}.json`;
                    await fetch(deleteUrl, { method: 'DELETE' });

                    totalDeleted++;
                    console.log(`   ✅ Deleted\n`);
                }
            }
        }
    }

    console.log(`\n🎉 Cleanup complete! Deleted ${totalDeleted} duplicate games`);
}

main().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
