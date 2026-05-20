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
                    json: () => Promise.resolve(JSON.parse(data))
                });
            });
        });
        req.on('error', reject);
        if (options.body) req.write(options.body);
        req.end();
    });
}

// Playoff logic - same as frontend
function calculateCore4Pick(game, dayNumber, betLog) {
    const awayTeam = game.t1;
    const homeTeam = game.t2;
    const awaySeed = game.s1 || 8;
    const homeSeed = game.s2 || 8;
    const awayInjuries = game.i1 || 0;
    const homeInjuries = game.i2 || 0;

    const isPlayoffs = dayNumber >= 71 && dayNumber <= 133;

    // Parse odds
    const awayOddsStr = game.o1 || '+100';
    const homeOddsStr = game.o2 || '-100';
    const awayOdds = Math.abs(parseInt(awayOddsStr));
    const homeOdds = Math.abs(parseInt(homeOddsStr));
    const awayIsNegative = awayOddsStr.startsWith('-');
    const homeIsNegative = homeOddsStr.startsWith('-');

    // Parse last 10
    const awayLast10Str = game.l1 || "5-5";
    const homeLast10Str = game.l2 || "5-5";
    const [awayWins, awayLosses] = awayLast10Str.split('-').map(Number);
    const [homeWins, homeLosses] = homeLast10Str.split('-').map(Number);

    // CORE 1: SEED TO TABLE %
    const awayBaseValue = 100 - ((awaySeed - 1) / 15) * 70;
    const homeBaseValue = 100 - ((homeSeed - 1) / 15) * 70;
    const totalBaseValue = awayBaseValue + homeBaseValue;
    let awayTablePercent = (awayBaseValue / totalBaseValue) * 100 - 2.5;
    let homeTablePercent = (homeBaseValue / totalBaseValue) * 100 + 3.0;

    // CORE 2: TEAM STRENGTH %
    let awayTeamStrength = awayTablePercent - (awayInjuries * 3.0);
    let homeTeamStrength = homeTablePercent - (homeInjuries * 4.0);

    // CORE 3: MARKET ODDS TO NO VIG %
    let awayImplied = awayIsNegative ? awayOdds / (awayOdds + 100) : 100 / (awayOdds + 100);
    let homeImplied = homeIsNegative ? homeOdds / (homeOdds + 100) : 100 / (homeOdds + 100);
    const totalImplied = awayImplied + homeImplied;
    let awayNoVigOddsPercent = (awayImplied / totalImplied) * 100;
    let homeNoVigOddsPercent = (homeImplied / totalImplied) * 100;

    // CORE 4: WIN % FROM LAST 10
    let awayWinPercent = (awayWins + awayLosses) > 0 ? (awayWins / (awayWins + awayLosses)) * 100 : 50;
    let homeWinPercent = (homeWins + homeLosses) > 0 ? (homeWins / (homeWins + homeLosses)) * 100 : 50;

    // Add up 4 cores
    let awayTotalValue = awayTablePercent + awayTeamStrength + awayNoVigOddsPercent + awayWinPercent;
    let homeTotalValue = homeTablePercent + homeTeamStrength + homeNoVigOddsPercent + homeWinPercent;

    // Seed gap multiplier
    const seedGap = Math.abs(awaySeed - homeSeed);
    if (seedGap >= 4) {
        const talentDiff = homeTotalValue - awayTotalValue;
        if (homeSeed < awaySeed) {
            homeTotalValue = homeTotalValue + (talentDiff * 0.3);
        } else {
            awayTotalValue = awayTotalValue + (Math.abs(talentDiff) * 0.3);
        }
    } else if (seedGap >= 2) {
        const talentDiff = homeTotalValue - awayTotalValue;
        if (homeSeed < awaySeed) {
            homeTotalValue = homeTotalValue + (talentDiff * 0.15);
        } else {
            awayTotalValue = awayTotalValue + (Math.abs(talentDiff) * 0.15);
        }
    }

    // Average
    let awayAverage = awayTotalValue / 4;
    let homeAverage = homeTotalValue / 4;

    if (homeAverage > 100 || awayAverage > 100) {
        return homeAverage > awayAverage ? homeTeam : awayTeam;
    }

    // Convert to percentages
    function percentToOdds(percent) {
        return percent >= 50 ? -(percent / (100 - percent)) * 100 : ((100 - percent) / percent) * 100;
    }
    function oddsToImplied(odds) {
        return odds < 0 ? Math.abs(odds) / (Math.abs(odds) + 100) : 100 / (odds + 100);
    }

    const awayOddsCalc = percentToOdds(awayAverage);
    const homeOddsCalc = percentToOdds(homeAverage);
    const awayImpliedFinal = oddsToImplied(awayOddsCalc);
    const homeImpliedFinal = oddsToImplied(homeOddsCalc);
    const totalImpliedFinal = awayImpliedFinal + homeImpliedFinal;
    let awayFinalPercent = (awayImpliedFinal / totalImpliedFinal) * 100;
    let homeFinalPercent = (homeImpliedFinal / totalImpliedFinal) * 100;

    // Apply playoff model if in playoff range
    if (isPlayoffs) {
        const seriesState = getSeriesState(awayTeam, homeTeam, dayNumber, betLog);
        if (seriesState) {
            const { awayWins: seriesAwayWins, homeWins: seriesHomeWins, gameNumber } = seriesState;
            const homeCourtTeam = awaySeed < homeSeed ? awayTeam : homeTeam;
            const homeGames = [1, 2, 5, 7];
            const isHomeCourtGame = homeGames.includes(gameNumber);
            const gameHomeTeam = isHomeCourtGame ? homeCourtTeam : (homeCourtTeam === awayTeam ? homeTeam : awayTeam);

            const playoffProb = getSeriesStateProbability(seriesAwayWins, seriesHomeWins, gameNumber, gameHomeTeam, awayTeam, homeTeam);

            const awayFinal = (playoffProb.awayPercent * 0.70) + (awayFinalPercent * 0.30);
            const homeFinal = (playoffProb.homePercent * 0.70) + (homeFinalPercent * 0.30);

            awayFinalPercent = awayFinal;
            homeFinalPercent = homeFinal;
        }
    }

    return awayFinalPercent > homeFinalPercent ? awayTeam : homeTeam;
}

function getSeriesState(team1, team2, currentDay, betLog) {
    let team1Wins = 0;
    let team2Wins = 0;

    for (const day of betLog) {
        if (day.day >= 71 && day.day < currentDay) {
            for (const game of (day.games || [])) {
                const isMatch = (game.t1 === team1 && game.t2 === team2) ||
                               (game.t1 === team2 && game.t2 === team1);
                if (isMatch && game.res) {
                    const winner = game.pick;
                    if (winner === team1) team1Wins++;
                    else if (winner === team2) team2Wins++;
                }
            }
        }
    }

    const totalGames = team1Wins + team2Wins;
    if (totalGames === 0) return null;

    return {
        awayWins: team1Wins,
        homeWins: team2Wins,
        gameNumber: totalGames + 1
    };
}

function getSeriesStateProbability(awayWins, homeWins, gameNumber, gameHomeTeam, awayTeam, homeTeam) {
    const seriesLeader = awayWins > homeWins ? awayTeam : (homeWins > awayWins ? homeTeam : null);
    const leaderWins = Math.max(awayWins, homeWins);
    const trailerWins = Math.min(awayWins, homeWins);

    let leaderProb = 50;

    if (leaderWins === 3 && trailerWins === 0) {
        leaderProb = 5;
    } else if (awayWins === homeWins) {
        if (gameNumber === 1) leaderProb = 60;
        else if (gameNumber === 3) leaderProb = 73;
        else if (gameNumber === 5) leaderProb = 83;
        else if (gameNumber === 7) leaderProb = 74;
    } else if (leaderWins === 1 && trailerWins === 0) {
        leaderProb = 76;
    } else if (leaderWins === 2 && trailerWins === 0) {
        leaderProb = 93;
    } else if (leaderWins === 2 && trailerWins === 1) {
        leaderProb = 68;
    } else if (leaderWins === 3 && trailerWins === 1) {
        leaderProb = 92;
    } else if (leaderWins === 3 && trailerWins === 2) {
        leaderProb = 68;
    }

    let awayProb, homeProb;
    if (seriesLeader) {
        if (seriesLeader === awayTeam) {
            awayProb = leaderProb;
            homeProb = 100 - leaderProb;
        } else {
            homeProb = leaderProb;
            awayProb = 100 - leaderProb;
        }
    } else {
        if (gameHomeTeam === awayTeam) {
            awayProb = leaderProb;
            homeProb = 100 - leaderProb;
        } else {
            homeProb = leaderProb;
            awayProb = 100 - leaderProb;
        }
    }

    return { awayPercent: awayProb, homePercent: homeProb };
}

async function main() {
    console.log('🔄 Fetching betLog from Firebase...');
    const response = await fetch(`${FB_BASE}/nba/betLog.json`);
    const betLogObj = await response.json();

    if (!betLogObj) {
        console.error('❌ No betLog data found');
        return;
    }

    // Convert to array format
    const betLog = [];
    for (const [dateKey, dayData] of Object.entries(betLogObj)) {
        const [month, day] = dateKey.split('-').map(Number);
        const date = new Date(2026, month - 1, day);
        const jan1 = new Date(2026, 0, 1);
        const dayOfYear = Math.floor((date - jan1) / (1000 * 60 * 60 * 24)) + 1;

        const gamesArray = dayData.games ? (Array.isArray(dayData.games) ? dayData.games : Object.values(dayData.games)) : [];

        const transformedGames = gamesArray.map(game => ({
            t1: game.away?.team || game.t1 || '',
            t2: game.home?.team || game.t2 || '',
            o1: game.away?.odds || game.o1 || '',
            o2: game.home?.odds || game.o2 || '',
            s1: parseInt(game.away?.seed || game.s1) || 0,
            s2: parseInt(game.home?.seed || game.s2) || 0,
            i1: parseInt(game.away?.injuries || game.i1) || 0,
            i2: parseInt(game.home?.injuries || game.i2) || 0,
            wl1: game.away?.record || game.wl1 || '',
            wl2: game.home?.record || game.wl2 || '',
            l1: game.away?.last10 || game.l1 || '',
            l2: game.home?.last10 || game.l2 || '',
            pick: game.pick || '',
            res: game.res || null
        }));

        betLog.push({
            day: dayOfYear,
            date: dateKey,
            games: transformedGames
        });
    }

    betLog.sort((a, b) => a.day - b.day);

    console.log(`✅ Loaded ${betLog.length} days`);
    console.log('🔄 Recalculating app picks for playoff days (71-133)...');

    let updatedCount = 0;
    for (const day of betLog) {
        if (day.day >= 71 && day.day <= 133 && day.games.length > 0) {
            const newAppPicks = day.games.map(game => calculateCore4Pick(game, day.day, betLog));

            // Save to Firebase
            await fetch(`${FB_BASE}/nba/betLog/${day.date}/appPicks.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newAppPicks)
            });

            console.log(`✅ Updated day ${day.day} (${day.date}): ${newAppPicks.length} picks`);
            updatedCount++;
        }
    }

    console.log(`\n🎉 Done! Updated ${updatedCount} playoff days`);
}

main().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
