// ONE-TIME cleanup: deletes the OLD FLAT top-level betLog/MM-DD keys
// (the original backup, sitting as siblings next to the season-year
// folders) -- but ONLY for entries where a verified, value-identical
// copy already exists somewhere inside a betLog/{seasonYear} folder.
// Season-year folders themselves are never touched. Any flat key
// without a verified copy is left alone and reported, never deleted.
//
// Usage:
//   node backend/delete-old-flat-betlog.js              (dry run, no writes)
//   node backend/delete-old-flat-betlog.js --confirm      (performs the deletion)

const https = require('https');

const FB_BASE = 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';
const SPORTS = ['nba', 'nhl', 'nfl', 'mlb', 'mls', 'ncaab', 'ncaaf'];

function request(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const options = {
            hostname: urlObj.hostname,
            path: urlObj.pathname + urlObj.search,
            method,
            headers: body !== null ? { 'Content-Type': 'application/json' } : {}
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
        if (body !== null) req.write(JSON.stringify(body));
        req.end();
    });
}

// season-year folder keys look like "2025-26" (4 digits, dash, 2 digits)
function isSeasonYearKey(key) { return /^\d{4}-\d{2}$/.test(key); }
// old flat date keys look like "10-15" (1-2 digits, dash, 1-2 digits)
function isOldFlatDateKey(key) { return /^\d{1,2}-\d{1,2}$/.test(key) && !isSeasonYearKey(key); }

async function cleanupSport(sport, dryRun) {
    console.log(`\n📋 ${sport.toUpperCase()}`);

    const betLog = await request(`${FB_BASE}/${sport}/betLog.json`);
    if (!betLog || typeof betLog !== 'object') {
        console.log(`   ⚠️  No betLog data, skipping`);
        return;
    }

    const allKeys = Object.keys(betLog);
    const seasonYears = allKeys.filter(isSeasonYearKey);
    const oldFlatKeys = allKeys.filter(isOldFlatDateKey);

    if (oldFlatKeys.length === 0) {
        console.log(`   ✅ No old flat date keys found, nothing to do`);
        return;
    }

    const toDelete = {};
    const unsafe = [];

    for (const oldKey of oldFlatKeys) {
        const oldValue = JSON.stringify(betLog[oldKey]);
        let matchFound = false;

        for (const seasonYear of seasonYears) {
            const seasonNode = betLog[seasonYear] || {};
            for (const newKey of Object.keys(seasonNode)) {
                if (JSON.stringify(seasonNode[newKey]) === oldValue) {
                    matchFound = true;
                    break;
                }
            }
            if (matchFound) break;
        }

        if (matchFound) {
            toDelete[oldKey] = null;
        } else {
            unsafe.push(oldKey);
        }
    }

    console.log(`   📦 ${oldFlatKeys.length} old flat keys found -> ${Object.keys(toDelete).length} verified safe to delete`);
    if (unsafe.length > 0) {
        console.log(`   ⚠️  ${unsafe.length} key(s) have NO verified copy in any season folder -- will be LEFT ALONE:`);
        unsafe.forEach(k => console.log(`      - ${k}`));
    }

    if (Object.keys(toDelete).length === 0) {
        console.log(`   ⚠️  Nothing verified safe to delete`);
        return;
    }

    if (dryRun) {
        console.log(`   🔎 DRY RUN — would PATCH ${sport}/betLog setting ${Object.keys(toDelete).length} old flat keys to null (season folders untouched).`);
        return;
    }

    await request(`${FB_BASE}/${sport}/betLog.json`, 'PATCH', toDelete);
    console.log(`   ✅ Deleted ${Object.keys(toDelete).length} old flat keys from ${sport}/betLog`);
}

async function run() {
    const dryRun = !process.argv.includes('--confirm');
    console.log(dryRun
        ? '🔎 DRY RUN MODE (no writes) — pass --confirm to actually delete old flat keys\n'
        : '🚨 LIVE MODE — will delete old flat keys from Firebase\n');

    for (const sport of SPORTS) {
        await cleanupSport(sport, dryRun);
    }

    console.log('\n✅ Done.');
}

run().catch(err => {
    console.error('❌ Cleanup failed:', err);
    process.exit(1);
});
