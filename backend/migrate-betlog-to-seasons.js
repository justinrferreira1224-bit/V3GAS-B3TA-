// ONE-TIME migration: copies each sport's flat betLog/{MM-DD} data into
// betLog/{seasonYear}/{MM-DD}. COPY ONLY — never deletes or modifies the
// original flat data, which remains as a backup.
//
// Usage:
//   node migrate-betlog-to-seasons.js              (dry run, no writes)
//   node migrate-betlog-to-seasons.js --confirm     (performs the copy)

const https = require('https');
const { getSeasonYear } = require('./lib/seasonYear');

const FB_BASE = 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';
const SPORTS = ['nba', 'nhl', 'nfl', 'mlb', 'mls', 'ncaab', 'ncaaf'];

function request(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const options = {
            hostname: urlObj.hostname,
            path: urlObj.pathname + urlObj.search,
            method,
            headers: body ? { 'Content-Type': 'application/json' } : {}
        };
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try { resolve(JSON.parse(data)); }
                catch (e) { reject(e); }
            });
        });
        req.on('error', reject);
        if (body) req.write(JSON.stringify(body));
        req.end();
    });
}

async function migrateSport(sport, dryRun) {
    console.log(`\n📋 ${sport.toUpperCase()}`);

    // 1. Read the existing flat betLog — this is never written to or deleted.
    const flatBetLog = await request(`${FB_BASE}/${sport}/betLog.json`);
    if (!flatBetLog || typeof flatBetLog !== 'object') {
        console.log(`   ⚠️  No flat betLog data found, skipping`);
        return;
    }
    const entryCount = Object.keys(flatBetLog).length;

    const seasonYear = getSeasonYear(sport, new Date());
    console.log(`   📦 ${entryCount} date entries -> season "${seasonYear}"`);

    // 2. Safety check: never overwrite existing nested data.
    const existing = await request(`${FB_BASE}/${sport}/betLog/${seasonYear}.json?shallow=true`);
    if (existing) {
        console.log(`   ❌ ABORTING: betLog/${seasonYear} already has data for ${sport}. Refusing to overwrite. Investigate manually.`);
        return;
    }

    if (dryRun) {
        console.log(`   🔎 DRY RUN — would COPY betLog -> betLog/${seasonYear} (${entryCount} entries). Original left untouched.`);
        return;
    }

    // 3. Copy into the new nested path. Original flat path is untouched.
    await request(`${FB_BASE}/${sport}/betLog/${seasonYear}.json`, 'PUT', flatBetLog);
    console.log(`   ✅ Copied to betLog/${seasonYear} (original flat betLog left untouched)`);
}

async function run() {
    const dryRun = !process.argv.includes('--confirm');
    console.log(dryRun
        ? '🔎 DRY RUN MODE (no writes) — pass --confirm to actually copy data\n'
        : '🚨 LIVE MODE — will write copies to Firebase\n');

    for (const sport of SPORTS) {
        await migrateSport(sport, dryRun);
    }

    console.log('\n✅ Done. Original flat betLog paths were not modified.');
    console.log('   Verify the new nested paths in Firebase console before touching read/write code.');
}

run().catch(err => {
    console.error('❌ Migration failed:', err);
    process.exit(1);
});
