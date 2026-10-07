const pad = n => String(n).padStart(2, '0');

// Full date -> Firebase storage key "MM-DD-YY"
// e.g. toStorageKey(2026, 10, 1) -> "10-01-26"
function toStorageKey(year, month, day) {
    return `${pad(month)}-${pad(day)}-${pad(year % 100)}`;
}

// Firebase storage key "MM-DD-YY" -> { year, month, day }, or null if it isn't one
// e.g. parseStorageKey('10-01-25') -> { year: 2025, month: 10, day: 1 }
function parseStorageKey(key) {
    const m = /^(\d{2})-(\d{2})-(\d{2})$/.exec(key);
    return m ? { year: 2000 + Number(m[3]), month: Number(m[1]), day: Number(m[2]) } : null;
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

module.exports = { toStorageKey, parseStorageKey, todayPacific };
