// ONE-TIME cleanup: within each sport's betLog/{seasonYear} node, DELETES
// only the old "MM-DD" formatted keys -- but ONLY for entries where a
// verified, value-identical "M-D-YY" copy already exists. New-format keys
// are never touched. Any old key without a verified copy is left alone
// and reported, never deleted.
//
// Usage:
//   node cleanup-old-datekeys.js              (dry run, no writes)
//   node cleanup-old-datekeys.js --confirm     (performs the deletion)

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

function isOldFormat(key) { return key.split('-').length === 2; }

async function cleanupSportSeason(sport, seasonYear, dryRun) {
    const seasonNode = await request(`${FB_BASE}/${sport}/betLog/${seasonYear}.json`);
    if (!seasonNode || typeof seasonNode !== 'object') {
        console.log(`   ⚠️  No data at betLog/${seasonYear}, skipping`);
        return;
    }

    const allKeys = Object.keys(seasonNode);
    const oldKeys = allKeys.filter(isOldFormat);

    if (oldKeys.length === 0) {
        console.log(`   ✅ No old-format keys remain at betLog/${seasonYear}, nothing to do`);
        return;
    }

    // Only delete an old key if its new-format copy exists AND matches
    // exactly. Anything that doesn't verify is left alone, never deleted.
    const toDelete = {};
    const unsafe = [];

    for (const oldKey of oldKeys) {
        const expectedNewKey = toStorageKey(sport, oldKey, seasonYear);
        const hasMatch = expectedNewKey in seasonNode &&
            JSON.stringify(seasonNode[oldKey]) === JSON.stringify(seasonNode[expectedNewKey]);

        if (hasMatch) {
            toDelete[oldKey] = null; // Firebase PATCH: null deletes just this key
        } else {
            unsafe.push({ oldKey, expectedNewKey });
        }
    }

    console.log(`   📦 ${oldKeys.length} old-format keys found -> ${Object.keys(toDelete).length} verified safe to delete`);
    if (unsafe.length > 0) {
        console.log(`   ⚠️  ${unsafe.length} old-format key(s) have NO verified copy -- will be LEFT ALONE, not deleted:`);
        unsafe.forEach(({ oldKey, expectedNewKey }) => console.log(`      - ${oldKey} (expected copy at ${expectedNewKey})`));
    }

    if (Object.keys(toDelete).length === 0) {
        console.log(`   ⚠️  Nothing verified safe to delete for betLog/${seasonYear}`);
        return;
    }

    if (dryRun) {
        console.log(`   🔎 DRY RUN — would PATCH betLog/${seasonYear} setting ${Object.keys(toDelete).length} old keys to null (new-format keys untouched).`);
        return;
    }

    // PATCH with explicit nulls deletes only these keys; every other key
    // in the node (all new-format keys, and any unsafe old keys) is left
    // completely untouched.
    await request(`${FB_BASE}/${sport}/betLog/${seasonYear}.json`, 'PATCH', toDelete);
    console.log(`   ✅ Deleted ${Object.keys(toDelete).length} old-format keys from betLog/${seasonYear}`);
}

async function run() {
    const dryRun = !process.argv.includes('--confirm');
    console.log(dryRun
        ? '🔎 DRY RUN MODE (no writes) — pass --confirm to actually delete old keys\n'
        : '🚨 LIVE MODE — will delete old-format keys from Firebase\n');

    for (const sport of SPORTS) {
        console.log(`\n📋 ${sport.toUpperCase()}`);

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
            await cleanupSportSeason(sport, seasonYear, dryRun);
        }
    }

    console.log('\n✅ Done.');
}

run().catch(err => {
    console.error('❌ Cleanup failed:', err);
    process.exit(1);
});
