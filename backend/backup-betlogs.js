const fs = require('fs').promises;
const path = require('path');
const https = require('https');

// Simple fetch replacement using built-in https
function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                resolve({
                    json: () => Promise.resolve(JSON.parse(data))
                });
            });
        }).on('error', reject);
    });
}

const FB_BASE = 'https://vegas-bet-default-rtdb.firebaseio.com';
const BACKUP_DIR = path.join(__dirname, '../backups');

// All sports to backup
const SPORTS = ['nba', 'mlb', 'nfl', 'cbb', 'cfb', 'nhl', 'soccer', 'enba'];

// Format a single day's data into readable text format
function formatDay(day, sport) {
    if (!day.games || day.games.length === 0) return '';

    const dayType = day.type === 'REAL' ? 'REAL MONEY 💰' : 'PAPER TRADING';
    const dateStr = day.date || 'TBD';
    const sportDayStr = day.sportDay ? ` | Sport Day ${day.sportDay}` : '';

    let output = `DAY ${day.day}${sportDayStr} (${dateStr}) - ${dayType}\n\n`;

    day.games.forEach(game => {
        output += `${game.t1.padEnd(10)}| ${game.o1.padEnd(6)}| ${String(game.s1).padEnd(2)} | ${String(game.i1).padEnd(2)} | ${game.wl1.padEnd(6)} | ${game.l1}\n`;
        output += `${game.t2.padEnd(10)}| ${game.o2.padEnd(6)}| ${String(game.s2).padEnd(2)} | ${String(game.i2).padEnd(2)} | ${game.wl2.padEnd(6)} | ${game.l2}\n`;
        output += `---\n`;
    });

    output += `\nAPP PICKS:\n`;
    day.games.forEach(game => {
        const result = game.res === 'W' ? '✅' : game.res === 'L' ? '❌' : '⏳';
        output += `${game.pick} ${result}\n`;
    });

    output += `\n${day.overall}\n`;
    output += `================================================================================\n\n`;

    return output;
}

// Get existing days from backup file
async function getExistingDays(backupFile) {
    try {
        const content = await fs.readFile(backupFile, 'utf8');
        const dayMatches = content.match(/DAY (\d+)/g);
        if (!dayMatches) return [];
        return dayMatches.map(m => parseInt(m.match(/\d+/)[0]));
    } catch(e) {
        // File doesn't exist yet
        return [];
    }
}

// Backup a single sport
async function backupSport(sport) {
    console.log(`\n🔄 Backing up ${sport.toUpperCase()}...`);

    try {
        // Fetch from Firebase
        const url = `${FB_BASE}/${sport}Betlog.json`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data || !data.betLog) {
            console.log(`   No data for ${sport.toUpperCase()}`);
            return;
        }

        const betLog = data.betLog;
        const backupFile = path.join(BACKUP_DIR, `betlog_${sport}_backup.txt`);

        // Get existing days
        const existingDays = await getExistingDays(backupFile);
        console.log(`   Existing days: ${existingDays.length}`);

        // Find new days
        const newDays = betLog.filter(day => !existingDays.includes(day.day));

        if (newDays.length === 0) {
            console.log(`   ✅ No new days to append`);
            return;
        }

        console.log(`   📝 Appending ${newDays.length} new days...`);

        // If file doesn't exist, create with header
        let needsHeader = false;
        try {
            await fs.access(backupFile);
        } catch(e) {
            needsHeader = true;
        }

        // Format new days
        let appendContent = '';

        if (needsHeader) {
            appendContent = `================================================================================
BET LOG - ${sport.toUpperCase()} APP PICKS TRACKER
================================================================================
FORMAT: TEAM | ODDS | SEED | INJ | W-L | L10
================================================================================

`;
        }

        // Sort new days and format them
        newDays.sort((a, b) => a.day - b.day);
        newDays.forEach(day => {
            appendContent += formatDay(day, sport);
        });

        // Append to file (NEVER DELETE OR MODIFY EXISTING)
        await fs.appendFile(backupFile, appendContent);

        console.log(`   ✅ ${sport.toUpperCase()} backup updated! (Days ${newDays.map(d => d.day).join(', ')})`);

    } catch(e) {
        console.error(`   ❌ Failed to backup ${sport.toUpperCase()}:`, e.message);
    }
}

// Main backup function
async function backupAllSports() {
    console.log('🚀 Starting nightly betlog backup...');
    console.log(`📅 ${new Date().toISOString()}`);

    // Ensure backup directory exists
    try {
        await fs.mkdir(BACKUP_DIR, { recursive: true });
    } catch(e) {
        // Directory exists
    }

    // Backup each sport
    for (const sport of SPORTS) {
        await backupSport(sport);
    }

    console.log('\n✅ Backup complete!\n');
}

// Run if called directly
if (require.main === module) {
    backupAllSports()
        .then(() => process.exit(0))
        .catch(err => {
            console.error('❌ Backup failed:', err);
            process.exit(1);
        });
}

module.exports = { backupAllSports };
