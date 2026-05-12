const https = require('https');

// Simple fetch replacement using built-in https
function fetch(url, options = {}) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const reqOptions = {
            hostname: urlObj.hostname,
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: options.headers || {}
        };

        const req = https.request(reqOptions, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                resolve({
                    json: () => Promise.resolve(JSON.parse(data))
                });
            });
        }).on('error', reject);

        if (options.body) {
            req.write(options.body);
        }

        req.end();
    });
}
const fs = require('fs').promises;
const path = require('path');

const FB_BASE = 'https://vegas-bet-default-rtdb.firebaseio.com';
const BACKUP_DIR = path.join(__dirname, '../backups');

// Sport configurations: when to archive (month after season ends)
const SPORTS = {
    nba: { archiveMonth: 7, seasonFormat: '2025-26' },   // Season ends June, archive July
    mlb: { archiveMonth: 11, seasonFormat: '2026' },     // Season ends Oct, archive Nov
    nfl: { archiveMonth: 3, seasonFormat: '2025-26' },   // Season ends Feb, archive March
    nhl: { archiveMonth: 7, seasonFormat: '2025-26' },   // Season ends June, archive July
    cbb: { archiveMonth: 5, seasonFormat: '2025-26' },   // Season ends April, archive May
    cfb: { archiveMonth: 2, seasonFormat: '2025' }       // Season ends Jan, archive Feb
};

async function checkAndArchive(sport, config) {
    const currentMonth = new Date().getMonth() + 1; // 1-12
    const currentDate = new Date().toISOString().split('T')[0];

    console.log(`\n📋 Checking ${sport.toUpperCase()}...`);

    try {
        // Load sport data from Firebase
        const res = await fetch(`${FB_BASE}/${sport}Betlog.json`);
        const data = await res.json();

        if (!data || !data.betLog) {
            console.log(`   ⚠️  No data for ${sport.toUpperCase()}`);
            return;
        }

        const { currentSeason, archiveMonth, betLog } = data;

        console.log(`   📦 Current season: ${currentSeason}`);
        console.log(`   🗓️  Archive month: ${archiveMonth} (current: ${currentMonth})`);

        // Check if it's time to archive
        if (currentMonth === archiveMonth) {
            console.log(`   🚨 ARCHIVE TIME! Creating archive for ${currentSeason}...`);

            // 1. Archive Firebase data
            const archiveData = {
                season: currentSeason,
                archivedOn: currentDate,
                betLog: betLog
            };

            await fetch(`${FB_BASE}/${sport}Archives/${currentSeason}.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(archiveData)
            });
            console.log(`   ✅ Archived to Firebase: /${sport}Archives/${currentSeason}`);

            // 2. Archive backup txt file
            const backupFile = path.join(BACKUP_DIR, `betlog_${sport}_backup.txt`);
            const archiveFile = path.join(BACKUP_DIR, `betlog_${sport}_${currentSeason}_archive.txt`);

            try {
                await fs.copyFile(backupFile, archiveFile);
                console.log(`   ✅ Archived backup file: betlog_${sport}_${currentSeason}_archive.txt`);
            } catch (err) {
                console.log(`   ⚠️  Could not archive backup file: ${err.message}`);
            }

            // 3. Clear current season data (reset for new season)
            const nextSeason = getNextSeason(currentSeason, config.seasonFormat);
            const resetData = {
                currentSeason: nextSeason,
                archiveMonth: archiveMonth,
                betLog: []
            };

            await fetch(`${FB_BASE}/${sport}Betlog.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resetData)
            });
            console.log(`   ✅ Reset for new season: ${nextSeason}`);

            // 4. Clear backup txt file
            const header = `================================================================================
BET LOG - ${sport.toUpperCase()} APP PICKS TRACKER
================================================================================
FORMAT: TEAM | ODDS | SEED | INJ | W-L | L10
================================================================================

`;
            await fs.writeFile(backupFile, header);
            console.log(`   ✅ Cleared backup file for new season`);

            console.log(`   🎉 ${sport.toUpperCase()} archived and reset successfully!`);

        } else {
            console.log(`   ✅ Not archive month yet (archive in month ${archiveMonth})`);
        }

    } catch (err) {
        console.error(`   ❌ Error archiving ${sport.toUpperCase()}:`, err.message);
    }
}

// Calculate next season based on format
function getNextSeason(currentSeason, format) {
    if (format.includes('-')) {
        // Format like "2025-26" or "2025-2026"
        const [year1, year2] = currentSeason.split('-').map(y => parseInt(y));
        const nextYear1 = year1 + 1;
        const nextYear2 = year2 + 1;
        return year2 < 100 ? `${nextYear1}-${nextYear2}` : `${nextYear1}-${nextYear2}`;
    } else {
        // Format like "2026"
        return String(parseInt(currentSeason) + 1);
    }
}

async function runAutoArchive() {
    console.log('🤖 AUTO-ARCHIVE CHECK');
    console.log(`📅 ${new Date().toISOString()}\n`);

    for (const [sport, config] of Object.entries(SPORTS)) {
        await checkAndArchive(sport, config);
    }

    console.log('\n✅ Auto-archive check complete!\n');
}

// Run if called directly
if (require.main === module) {
    runAutoArchive()
        .then(() => process.exit(0))
        .catch(err => {
            console.error('❌ Auto-archive failed:', err);
            process.exit(1);
        });
}

module.exports = { runAutoArchive };
