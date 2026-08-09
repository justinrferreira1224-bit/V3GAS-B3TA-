// ONE-TIME migration: renames each "M-D-YY" key inside betLog/{seasonYear}
// to a zero-padded "MM-DD-YY" key (e.g. "1-2-26" -> "01-02-26") so keys
// sort correctly in date order (including in the Firebase console).
//
// COPY + DELETE per key: writes the new padded key with the same value,
// then removes the old unpadded key. If a padded key already exists, that
// old key is skipped (never overwritten).
//
// Usage:
//   node backend/pad-datekeys.js              (dry run, no writes)
//   node backend/pad-datekeys.js --confirm      (performs the rename)

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

function isSeasonYearKey(key) { return /^\d{4}-\d{2}$/.test(key); }
// current date keys look like "1-2-26" or "10-15-26" (M-D-YY, unpadded)
function isDateKey(key) { return /^\d{1,2}-\d{1,2}-\d{2}$/.test(key); }
function isPadded(key) { return /^\d{2}-\d{2}-\d{2}$/.test(key); }

function padKey(key) {
    const [m, d, y] = key.split('-');
    return `${m.padStart(2, '0')}-${d.padStart(2, '0')}-${y}`;
}

async function padSportSeason(sport, seasonYear, dryRun) {
    const seasonNode = await request(`${FB_BASE}/${sport}/betLog/${seasonYear}.json`);
    if (!seasonNode || typeof seasonNode !== 'object') {
        console.log(`   ⚠️  No data at betLog/${seasonYear}, skipping`);
        return;
    }

    const allKeys = Object.keys(seasonNode);
    const unpaddedKeys = allKeys.filter(k => isDateKey(k) && !isPadded(k));

    if (unpaddedKeys.length === 0) {
        console.log(`   ✅ betLog/${seasonYear} already fully padded, nothing to do`);
        return;
    }

    const updates = {};
    const skipped = [];

    for (const oldKey of unpaddedKeys) {
        const newKey = padKey(oldKey);
        if (newKey in seasonNode) {
            skipped.push(oldKey); // padded version already exists, don't touch
            continue;
        }
        updates[newKey] = seasonNode[oldKey]; // write new padded key
        updates[oldKey] = null;                // delete old unpadded key
    }

    const renamedCount = Object.keys(updates).length / 2;
    console.log(`   📦 ${unpaddedKeys.length} unpadded keys -> ${renamedCount} to rename in betLog/${seasonYear}`);
    if (skipped.length > 0) {
        console.log(`   ⚠️  ${skipped.length} skipped (padded version already exists): ${skipped.join(', ')}`);
    }

    if (Object.keys(updates).length === 0) {
        console.log(`   ⚠️  Nothing to rename`);
        return;
    }

    if (dryRun) {
        const sample = Object.keys(updates).filter(k => updates[k] !== null).slice(0, 5);
        console.log(`   🔎 DRY RUN — would rename e.g. ${sample.join(', ')}${renamedCount > 5 ? ' ...' : ''}`);
        return;
    }

    await request(`${FB_BASE}/${sport}/betLog/${seasonYear}.json`, 'PATCH', updates);
    console.log(`   ✅ Renamed ${renamedCount} keys to padded format`);
}

async function run() {
    const dryRun = !process.argv.includes('--confirm');
    console.log(dryRun
        ? '🔎 DRY RUN MODE (no writes) — pass --confirm to actually rename keys\n'
        : '🚨 LIVE MODE — will rename keys in Firebase\n');

    for (const sport of SPORTS) {
        console.log(`\n📋 ${sport.toUpperCase()}`);

        const topLevel = await request(`${FB_BASE}/${sport}/betLog.json?shallow=true`);
        if (!topLevel) {
            console.log(`   ⚠️  No betLog data at all, skipping`);
            continue;
        }

        const seasonYears = Object.keys(topLevel).filter(isSeasonYearKey);
        if (seasonYears.length === 0) {
            console.log(`   ⚠️  No season-year folders found, skipping`);
            continue;
        }

        for (const seasonYear of seasonYears) {
            await padSportSeason(sport, seasonYear, dryRun);
        }
    }

    console.log('\n✅ Done.');
}

run().catch(err => {
    console.error('❌ Migration failed:', err);
    process.exit(1);
});
