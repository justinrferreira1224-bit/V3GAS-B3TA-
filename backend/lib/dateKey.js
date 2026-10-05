const { SEASON_START_MONTH } = require('./seasonYear');

// "MM-DD" + season-year -> Firebase storage key "MM-DD-YY" (zero-padded,
// matching the keys written by pad-datekeys.js)
// e.g. toStorageKey('nba', '10-01', '2025-26') -> "10-01-25"
function toStorageKey(sport, mmdd, seasonYear) {
    const [month, day] = mmdd.split('-').map(Number);
    const startYear = parseInt(seasonYear.split('-')[0], 10);
    const startMonth = SEASON_START_MONTH[sport];

    const year = month >= startMonth ? startYear : startYear + 1;
    const pad = n => String(n).padStart(2, '0');

    return `${pad(month)}-${pad(day)}-${pad(year % 100)}`;
}

// Firebase storage key "MM-DD-YY" -> "MM-DD" (what the frontend has
// always received — this keeps the UI byte-for-byte the same)
// e.g. fromStorageKey('10-01-25') -> "10-01"
function fromStorageKey(storageKey) {
    const [month, day] = storageKey.split('-').map(Number);
    return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

module.exports = { toStorageKey, fromStorageKey };
