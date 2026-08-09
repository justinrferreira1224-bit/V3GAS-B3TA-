// ONE-TIME migration: within each sport's existing betLog/{seasonYear} node,
// COPIES each "MM-DD" keyed entry into a new "M-D-YY" keyed entry alongside
// it. COPY ONLY — never deletes or modifies the original "MM-DD" entries.
//
// IMPORTANT: after this runs, each betLog/{seasonYear} node contains BOTH
// old "MM-DD" keys and new "M-D-YY" keys. Do not deploy the updated
// server.js until the old "MM-DD" keys are removed in a separate cleanup
// step — otherwise reads will show duplicate calendar entries.
//
// Usage:
//   node migrate-datekeys-to-mdyy.js              (dry run, no writes)
//   node migrate-datekeys-to-mdyy.js --confirm      (performs the copy)

const https = require('https');
const { toStorageKey } = require('./lib/dateKey');

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

// Old keys have exactly one dash ("MM-DD"); new keys have exactly two ("M-D-YY").
function isOldFormat(key) { return key.split('-').length === 2; }
function isNewFormat(key) { return key.split('-').length === 3; }

async function migrateSportSeason(sport, seasonYear, dryRun) {
    const seasonNode = await request(`${FB_BASE}/${sport}/betLog/${seasonYear}.json`);
    if (!seasonNode || typeof seasonNode !== 'object') {
        console.log(`   ⚠️  No data at betLog/${seasonYear}, skipping`);
        return;
    }

    const allKeys = Object.keys(seasonNode);
    const oldKeys = allKeys.filter(isOldFormat);
    const alreadyNewKeys = allKeys.filter(isNewFormat);

    if (alreadyNewKeys.length > 0) {
        console.log(`   ❌ ABORTING ${sport}/${seasonYear}: found ${alreadyNewKeys.length} keys already in new format. Refusing to re-run / overwrite.`);
        return;
    }

    if (oldKeys.length === 0) {
        console.log(`   ⚠️  No old-format keys found at betLog/${seasonYear}, nothing to migrate`);
        return;
    }

    const updates = {};
    for (const oldKey of oldKeys) {
        const newKey = toStorageKey(sport, oldKey, seasonYear);
        updates[newKey] = seasonNode[oldKey];
    }

    console.log(`   📦 ${oldKeys.length} old-format entries -> ${Object.keys(updates).length} new-format entries in betLog/${seasonYear}`);

    if (dryRun) {
        console.log(`   🔎 DRY RUN — would PATCH betLog/${seasonYear} adding new keys. Old keys left untouched.`);
        return;
    }

    // PATCH merges these new keys into the existing node without touching
    // or removing the old "MM-DD" keys already there.
    await request(`${FB_BASE}/${sport}/betLog/${seasonYear}.json`, 'PATCH', updates);
    console.log(`   ✅ Copied into new-format keys (old "MM-DD" keys left untouched as backup)`);
}

async function run() {
    const dryRun = !process.argv.includes('--confirm');
    console.log(dryRun
        ? '🔎 DRY RUN MODE (no writes) — pass --confirm to actually copy data\n'
        : '🚨 LIVE MODE — will write copies to Firebase\n');

    for (const sport of SPORTS) {
        console.log(`\n📋 ${sport.toUpperCase()}`);

        // Discover which season-year folders actually exist for this sport
        const topLevel = await request(`${FB_BASE}/${sport}/betLog.json?shallow=true`);
        if (!topLevel) {
            console.log(`   ⚠️  No betLog data at all, skipping`);
            continue;
        }

        const seasonYears = Object.keys(topLevel).filter(k => /^\d{4}-\d{2}$/.test(k));
        if (seasonYears.length === 0) {
            console.log(`   ⚠️  No season-year folders found, skipping`);
            continue;
        }

        for (const seasonYear of seasonYears) {
            await migrateSportSeason(sport, seasonYear, dryRun);
        }
    }

    console.log('\n✅ Done. Old "MM-DD" keys were not modified.');
    console.log('⚠️  Do not deploy the updated server.js until old "MM-DD" keys are removed in a separate cleanup step.');
}

run().catch(err => {
    console.error('❌ Migration failed:', err);
    process.exit(1);
});
