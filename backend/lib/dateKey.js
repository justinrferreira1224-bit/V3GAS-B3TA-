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

// Today's calendar date in Pacific time as { year, month, day }, so "today"
// doesn't roll over at 5pm the way UTC does.
// e.g. todayPacific(new Date('2026-10-06T00:30:00Z')) -> { year: 2026, month: 10, day: 5 }
function todayPacific(now = new Date()) {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(now);
    const get = type => Number(parts.find(p => p.type === type).value);
    return { year: get('year'), month: get('month'), day: get('day') };
}

// True if an "MM-DD" (or "M-D") date is today in Pacific time
function isTodayPacific(mmdd, now = new Date()) {
    const [month, day] = String(mmdd).split('-').map(Number);
    const today = todayPacific(now);
    return month === today.month && day === today.day;
}

module.exports = { toStorageKey, fromStorageKey, todayPacific, isTodayPacific };
