const { SEASON_START_MONTH } = require('./seasonYear');

// "MM-DD" + season-year -> new Firebase storage key "M-D-YY"
// e.g. toStorageKey('nba', '10-01', '2025-26') -> "10-1-25"
function toStorageKey(sport, mmdd, seasonYear) {
    const [month, day] = mmdd.split('-').map(Number);
    const startYear = parseInt(seasonYear.split('-')[0], 10);
    const startMonth = SEASON_START_MONTH[sport];

    const year = month >= startMonth ? startYear : startYear + 1;
    const yy = String(year % 100).padStart(2, '0');

    return `${month}-${day}-${yy}`;
}

// New Firebase storage key "M-D-YY" -> "MM-DD" (what the frontend has
// always received — this keeps the UI byte-for-byte the same)
// e.g. fromStorageKey('10-1-25') -> "10-01"
function fromStorageKey(storageKey) {
    const [month, day] = storageKey.split('-').map(Number);
    return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

module.exports = { toStorageKey, fromStorageKey };
