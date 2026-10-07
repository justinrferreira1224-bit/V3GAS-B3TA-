// Season windows per sport. A season runs from the 1st of its start month to
// the last day of its end month (whole months, so Feb 29 is handled
// automatically). The season is always picked from the game's full date —
// there are no hardcoded years, so every sport rolls over on its own each year.
//
// Seasons that cross New Year are named "2025-26"; seasons inside one calendar
// year are named "2026". Dates outside the window are offseason: never stored.

const SEASON_WINDOWS = {
    nba:    { start: 10, end: 6 },   // Oct 1 – Jun 30
    nhl:    { start: 10, end: 6 },   // Oct 1 – Jun 30
    mlb:    { start: 3,  end: 11 },  // Mar 1 – Nov 30   → "2026"
    nfl:    { start: 9,  end: 2 },   // Sep 1 – end of Feb
    ncaab:  { start: 11, end: 4 },   // Nov 1 – Apr 30
    ncaaf:  { start: 8,  end: 1 },   // Aug 1 – Jan 31
    mls:    { start: 2,  end: 12 },  // Feb 1 – Dec 31   → "2026"
    soccer: { start: 8,  end: 6 },   // Aug 1 – Jun 30
    enba:   { start: 1,  end: 12 }   // all year         → "2026"
};

function windowFor(sport) {
    const w = SEASON_WINDOWS[sport];
    if (!w) throw new Error(`Unknown sport for seasons: ${sport}`);
    return w;
}

// Season name for a calendar date, or null in the offseason.
// month is 1-12. e.g. seasonForDate('nba', 2026, 10, 1) -> "2026-27"
//                     seasonForDate('nba', 2026, 6, 30) -> "2025-26"
//                     seasonForDate('nba', 2026, 7, 15) -> null
//                     seasonForDate('mlb', 2026, 5, 24) -> "2026"
function seasonForDate(sport, year, month) {
    const { start, end } = windowFor(sport);
    if (start <= end) {
        // One-year season
        return month >= start && month <= end ? String(year) : null;
    }
    // Two-year season: starts in `start` month, ends in `end` month next year
    let startYear;
    if (month >= start) startYear = year;
    else if (month <= end) startYear = year - 1;
    else return null;
    return `${startYear}-${String((startYear + 1) % 100).padStart(2, '0')}`;
}

// Calendar years a season covers, e.g. "2025-26" -> [2025, 2026], "2026" -> [2026]
function yearsOfSeason(season) {
    const m = /^(\d{4})(?:-(\d{2}))?$/.exec(season);
    if (!m) return [];
    const startYear = Number(m[1]);
    return m[2] ? [startYear, startYear + 1] : [startYear];
}

// First and last calendar date (UTC ms) of a season
function seasonRange(sport, season) {
    const { start, end } = windowFor(sport);
    const years = yearsOfSeason(season);
    if (years.length === 0) return null;
    const first = Date.UTC(years[0], start - 1, 1);
    const last = Date.UTC(years[years.length - 1], end, 0); // day 0 of next month = last day of `end`
    return { first, last };
}

const isSeasonName = s => /^\d{4}(-\d{2})?$/.test(s);

module.exports = { SEASON_WINDOWS, seasonForDate, yearsOfSeason, seasonRange, isSeasonName };
