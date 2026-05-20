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

    console.log('🔍 Checking appPicks arrays...\n');

    let totalFixed = 0;

    for (const [dateKey, dayData] of Object.entries(betLogObj)) {
        const gamesObj = dayData.games || {};
        const appPicks = dayData.appPicks || [];

        // Count actual games
        const gameCount = Array.isArray(gamesObj) ? gamesObj.length : Object.keys(gamesObj).length;

        // Check if appPicks has extra entries
        if (Array.isArray(appPicks) && appPicks.length > gameCount) {
            console.log(`📝 Fixing ${dateKey}:`);
            console.log(`   Games: ${gameCount}, appPicks: ${appPicks.length}`);
            console.log(`   Old appPicks: ${JSON.stringify(appPicks)}`);

            // Trim appPicks to match game count
            const fixedAppPicks = appPicks.slice(0, gameCount);
            console.log(`   New appPicks: ${JSON.stringify(fixedAppPicks)}`);

            // Save fixed appPicks
            await fetch(`${FB_BASE}/nba/betLog/${dateKey}/appPicks.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fixedAppPicks)
            });

            totalFixed++;
            console.log(`   ✅ Fixed\n`);
        }
    }

    console.log(`\n🎉 Fixed ${totalFixed} days with mismatched appPicks arrays`);
}

main().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
