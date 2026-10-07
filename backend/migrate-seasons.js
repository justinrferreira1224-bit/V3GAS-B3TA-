// Re-file every betLog day into the season its date belongs to (lib/seasons.js)
// and drop offseason days. Works from the data itself — no hardcoded years —
// so it can be re-run any time; a clean database produces an empty plan.
//
// Usage (credentials from the same env vars as the backend):
//   node backend/migrate-seasons.js                      practice run: prints the plan, writes nothing
//   node backend/migrate-seasons.js --copy --confirm     copy days into their new season folders
//   node backend/migrate-seasons.js --cleanup --confirm  remove the old copies and offseason days
//       --removed-out <file>   (cleanup) where to save everything removed, default ./removed-<time>.json
//
// Safety:
//   - copy never overwrites: if the destination already holds different data it stops
//   - cleanup only removes a moved day if its new copy is identical, and saves
//     everything it removes to a file first
//   - every write is one multi-path update per sport (all or nothing)

const fs = require('fs');
const { getFirebaseAuthParam, authMode } = require('./lib/firebaseAuth');
const { SEASON_WINDOWS, seasonForDate, isSeasonName } = require('./lib/seasons');

const FB_BASE = process.env.FB_BASE || 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';

async function fb(path, opts = {}) {
    const auth = await getFirebaseAuthParam();
    const url = `${FB_BASE}/${path}.json${auth ? '?' + auth : ''}`;
    const { default: nodeFetch } = await import('node-fetch');
    const r = await nodeFetch(url, opts);
    if (!r.ok) throw new Error(`Firebase ${opts.method || 'GET'} ${path} responded ${r.status}`);
    return r.json();
}

const canon = v => JSON.stringify(v, (k, x) =>
    x && typeof x === 'object' && !Array.isArray(x) ? Object.fromEntries(Object.keys(x).sort().map(key => [key, x[key]])) : x);

function realGames(day) {
    const g = day && day.games;
    if (Array.isArray(g)) return g.filter(x => x && typeof x === 'object').length;
    if (g && typeof g === 'object') return Object.keys(g).filter(k => k !== '_' && g[k] && typeof g[k] === 'object').length;
    return 0;
}

function describe(day) {
    const bits = [];
    const games = realGames(day);
    if (games) bits.push(`${games} game${games > 1 ? 's' : ''}`);
    if (day && day.unlocked) bits.push('unlocked');
    if (day && day.overall) bits.push(`record "${day.overall}"`);
    if (day && day.seasonType) bits.push(`label "${day.seasonType}"`);
    return bits.length ? bits.join(', ') : 'empty';
}

// "MM-DD-YY" -> { year, month, day }
function parseKey(key) {
    const m = /^(\d{2})-(\d{2})-(\d{2})$/.exec(key);
    if (!m) return null;
    return { year: 2000 + Number(m[3]), month: Number(m[1]), day: Number(m[2]) };
}

// Plan for one sport's betLog: what stays, moves, or is removed
function planSport(sport, betLog) {
    const plan = { stays: 0, moves: [], offseason: [], problems: [] };
    for (const [folder, days] of Object.entries(betLog || {})) {
        if (!isSeasonName(folder) || !days || typeof days !== 'object') {
            plan.problems.push(`folder "${folder}" isn't a season name — left untouched`);
            continue;
        }
        for (const [key, day] of Object.entries(days)) {
            const d = parseKey(key);
            if (!d) { plan.problems.push(`${folder}/${key}: not a date key — left untouched`); continue; }
            const season = seasonForDate(sport, d.year, d.month);
            if (season === folder) plan.stays++;
            else if (season === null) plan.offseason.push({ folder, key, day });
            else plan.moves.push({ folder, key, to: season, day });
        }
    }
    return plan;
}

function printPlan(sport, plan) {
    const sum = list => list.reduce((n, x) => n + realGames(x.day), 0);
    console.log(`\n${sport.toUpperCase()}: ${plan.stays} days stay where they are`);
    const groups = {};
    plan.moves.forEach(m => { (groups[`${m.folder} → ${m.to}`] = groups[`${m.folder} → ${m.to}`] || []).push(m); });
    for (const [route, list] of Object.entries(groups)) {
        const keys = list.map(x => x.key).sort((a, b) => sortKey(a) - sortKey(b));
        console.log(`  MOVE ${route}: ${list.length} days (${keys[0]} … ${keys[keys.length - 1]}), ${sum(list)} games`);
        list.filter(x => describe(x.day) !== 'empty').sort((a, b) => sortKey(a.key) - sortKey(b.key))
            .forEach(x => console.log(`      ${x.key}: ${describe(x.day)}`));
    }
    if (plan.offseason.length) {
        const keys = plan.offseason.map(x => x.key).sort((a, b) => sortKey(a) - sortKey(b));
        const notEmpty = plan.offseason.filter(x => describe(x.day) !== 'empty');
        console.log(`  REMOVE (offseason): ${plan.offseason.length} days (${keys[0]} … ${keys[keys.length - 1]}), ${sum(plan.offseason)} games`);
        const byWhat = {};
        notEmpty.forEach(x => { const k = `${x.folder}: ${describe(x.day)}`; byWhat[k] = (byWhat[k] || 0) + 1; });
        Object.entries(byWhat).forEach(([what, n]) => console.log(`      ${n} day${n > 1 ? 's' : ''} in ${what}`));
        if (notEmpty.length === 0) console.log('      all empty');
    }
    plan.problems.forEach(p => console.log(`  ⚠️  ${p}`));
}

const sortKey = key => { const d = parseKey(key); return d ? Date.UTC(d.year, d.month - 1, d.day) : 0; };

async function main() {
    const args = process.argv.slice(2);
    const confirm = args.includes('--confirm');
    const mode = args.includes('--copy') ? 'copy' : args.includes('--cleanup') ? 'cleanup' : 'plan';
    const outIdx = args.indexOf('--removed-out');
    const removedOut = outIdx !== -1 ? args[outIdx + 1] : `removed-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    if (mode !== 'plan' && !confirm) throw new Error(`--${mode} needs --confirm`);

    console.log(`Mode: ${mode === 'plan' ? 'PRACTICE RUN (nothing is written)' : mode.toUpperCase()}   auth: ${authMode}`);
    const root = await fb('', {});
    const sports = Object.keys(root || {}).filter(s => root[s] && root[s].betLog);
    const unknown = sports.filter(s => !SEASON_WINDOWS[s]);
    if (unknown.length) throw new Error(`No season window for: ${unknown.join(', ')} — add them to lib/seasons.js first`);

    // Cleanup is all-or-nothing: every sport's moved days must already be
    // identical in their new folders before anything is removed anywhere
    if (mode === 'cleanup') {
        for (const sport of sports) {
            const betLog = root[sport].betLog;
            const notCopied = planSport(sport, betLog).moves.filter(m => canon(betLog[m.to] && betLog[m.to][m.key]) !== canon(m.day));
            if (notCopied.length) {
                throw new Error(`${sport}: ${notCopied.length} days aren't identical in their new folder ` +
                    `(e.g. ${notCopied[0].folder}/${notCopied[0].key}) — run --copy again first. Nothing removed in any sport.`);
            }
        }
    }

    const totals = { moves: 0, offseason: 0, gamesMoved: 0, gamesRemoved: 0 };
    const removed = {};
    for (const sport of sports.sort()) {
        const betLog = root[sport].betLog;
        const plan = planSport(sport, betLog);
        if (mode === 'plan') printPlan(sport, plan);
        totals.moves += plan.moves.length;
        totals.offseason += plan.offseason.length;
        totals.gamesMoved += plan.moves.reduce((n, x) => n + realGames(x.day), 0);
        totals.gamesRemoved += plan.offseason.reduce((n, x) => n + realGames(x.day), 0);

        if (mode === 'copy' && plan.moves.length) {
            const update = {};
            for (const m of plan.moves) {
                const existing = betLog[m.to] && betLog[m.to][m.key];
                if (existing !== undefined && canon(existing) !== canon(m.day)) {
                    throw new Error(`${sport}/${m.to}/${m.key} already has different data — stopping, nothing written for ${sport}`);
                }
                update[`${m.to}/${m.key}`] = m.day;
            }
            await fb(`${sport}/betLog`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(update) });
            const after = await fb(`${sport}/betLog`);
            const bad = plan.moves.filter(m => canon(after[m.to] && after[m.to][m.key]) !== canon(m.day));
            if (bad.length) throw new Error(`${sport}: ${bad.length} copied days don't match after writing`);
            console.log(`✅ ${sport}: copied ${plan.moves.length} days into their new season folders (verified)`);
        }

        if (mode === 'cleanup') {
            const toRemove = [...plan.moves, ...plan.offseason];
            if (toRemove.length) {
                removed[sport] = {};
                const update = {};
                toRemove.forEach(x => { removed[sport][`${x.folder}/${x.key}`] = x.day; update[`${x.folder}/${x.key}`] = null; });
                fs.writeFileSync(removedOut, JSON.stringify(removed, null, 1));
                await fb(`${sport}/betLog`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(update) });
                console.log(`✅ ${sport}: removed ${plan.moves.length} old copies + ${plan.offseason.length} offseason days`);
            }
        }
    }

    console.log(`\nTOTAL: ${totals.moves} days move (${totals.gamesMoved} games), ${totals.offseason} offseason days removed (${totals.gamesRemoved} games)`);
    if (mode === 'cleanup' && Object.keys(removed).length) console.log(`Everything removed was saved to ${removedOut}`);
    if (mode === 'plan') console.log('Practice run only — nothing was written.');
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
