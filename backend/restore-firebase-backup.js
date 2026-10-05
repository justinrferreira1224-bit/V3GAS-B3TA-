// Restore all or part of the vegasbeta node from a backup made by backup-firebase.js.
//
// Usage:
//   node backend/restore-firebase-backup.js <backup.json.gz> [--path <subpath>] [--confirm]
//
//   --path    Part of vegasbeta to restore, e.g. "userData" or "nba/betLog/2025-26".
//             Omit to restore the whole vegasbeta node.
//   --confirm Actually write. Without it this is a dry run that only reports
//             what would change.
//
// Before writing, the current data at that path is saved next to the backup as
// <backup>.before-restore-<path>-<timestamp>.json, so a restore can be undone.
// Credentials come from the same env vars as the backend (lib/firebaseAuth.js).

const fs = require('fs');
const zlib = require('zlib');
const { getFirebaseAuthParam, authMode } = require('./lib/firebaseAuth');

const FB_BASE = process.env.FB_BASE || 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';

const summarize = v => v === null || v === undefined ? 'nothing'
    : typeof v === 'object' ? `${Object.keys(v).length} keys (${JSON.stringify(v).length} bytes)`
    : JSON.stringify(v);

async function main() {
    const args = process.argv.slice(2);
    const file = args.find(a => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--path');
    const pathIdx = args.indexOf('--path');
    const subPath = pathIdx !== -1 ? args[pathIdx + 1].replace(/^\/+|\/+$/g, '') : '';
    const confirm = args.includes('--confirm');
    if (!file) throw new Error('Usage: node backend/restore-firebase-backup.js <backup.json.gz> [--path <subpath>] [--confirm]');
    if (subPath && !/^[A-Za-z0-9_\-/]+$/.test(subPath)) throw new Error(`Invalid --path: ${subPath}`);

    const raw = fs.readFileSync(file);
    const backup = JSON.parse((file.endsWith('.gz') ? zlib.gunzipSync(raw) : raw).toString('utf8'));
    const fromBackup = subPath ? subPath.split('/').reduce((o, k) => (o == null ? undefined : o[k]), backup) : backup;
    if (fromBackup === undefined || fromBackup === null) throw new Error(`Backup has nothing at "${subPath || '(root)'}"`);

    const auth = await getFirebaseAuthParam();
    const url = `${FB_BASE}${subPath ? '/' + subPath : ''}.json`;
    const withAuth = auth ? `${url}?${auth}` : url;
    const { default: nodeFetch } = await import('node-fetch');

    const currentRes = await nodeFetch(withAuth);
    if (!currentRes.ok) throw new Error(`Reading current data failed: Firebase responded ${currentRes.status}`);
    const current = await currentRes.json();

    console.log(`Target:  vegasbeta${subPath ? '/' + subPath : ''}   (auth: ${authMode})`);
    console.log(`Current: ${summarize(current)}`);
    console.log(`Backup:  ${summarize(fromBackup)}`);

    if (!confirm) {
        console.log('\nDry run — nothing written. Re-run with --confirm to restore.');
        return;
    }

    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const safety = `${file}.before-restore-${(subPath || 'root').replace(/\//g, '_')}-${stamp}.json`;
    fs.writeFileSync(safety, JSON.stringify(current));
    console.log(`\nSaved current data to ${safety}`);

    const putRes = await nodeFetch(withAuth, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fromBackup)
    });
    if (!putRes.ok) throw new Error(`Restore write failed: Firebase responded ${putRes.status}`);
    console.log('✅ Restored.');
}

main().catch(e => {
    console.error('❌ Restore failed:', e.message);
    process.exit(1);
});
