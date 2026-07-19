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

module.exports = { getSeasonYear, SEASON_START_MONTH };
