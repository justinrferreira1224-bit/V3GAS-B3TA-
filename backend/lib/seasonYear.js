const SEASON_START_MONTH = {
    nba: 10,   // October
    nhl: 10,   // October
    nfl: 9,    // September
    mlb: 3,    // March
    mls: 2,    // February
    ncaab: 11, // November
    ncaaf: 8   // August
};

// Returns the "YYYY-YY" season-year string for a sport + date, e.g.
// getSeasonYear('nba', new Date('2025-11-15')) -> "2025-26"
// getSeasonYear('nba', new Date('2026-03-15')) -> "2025-26"
function getSeasonYear(sport, date) {
    const startMonth = SEASON_START_MONTH[sport];
    if (!startMonth) {
        throw new Error(`Unknown sport for season-year calculation: ${sport}`);
    }

    const d = date instanceof Date ? date : new Date(date);
    const month = d.getMonth() + 1; // JS getMonth() is 0-11, normalize to 1-12
    const year = d.getFullYear();

    const startYear = month >= startMonth ? year : year - 1;
    const endYearShort = String((startYear + 1) % 100).padStart(2, '0');

    return `${startYear}-${endYearShort}`;
}

// Given a sport and a "MM-DD" date (no year, as received from the frontend),
// resolves the correct season-year by testing which real calendar year for
// that month/day is closest to today, then running that through
// getSeasonYear. This is what lets saves near a season boundary (e.g.
// pre-loading next season's opener before the new season has "started"
// relative to today) land in the right season-year folder, instead of
// always inheriting whatever season today happens to fall in.
function resolveSeasonYear(sport, mmdd) {
    const [month, day] = mmdd.split('-').map(Number);
    const now = new Date();
    const thisYear = now.getFullYear();

    let closest = null;
    let closestDiff = Infinity;
    for (const year of [thisYear - 1, thisYear, thisYear + 1]) {
        const candidate = new Date(year, month - 1, day);
        const diff = Math.abs(candidate - now);
        if (diff < closestDiff) {
            closestDiff = diff;
            closest = candidate;
        }
    }

    return getSeasonYear(sport, closest);
}

module.exports = { getSeasonYear, resolveSeasonYear, SEASON_START_MONTH };
