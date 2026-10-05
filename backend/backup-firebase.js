// Full backup of the vegasbeta node to a gzipped JSON file.
// Run daily by the private backups repo's GitHub Action (see ops/firebase-backup/).
//
// Usage:
//   node backend/backup-firebase.js --out <dir>
// Writes <dir>/<YYYY>/vegasbeta-<YYYY-MM-DD>.json.gz (UTC date). Credentials come
// from the same env vars as the backend (lib/firebaseAuth.js). Never prints data.

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { getFirebaseAuthParam, authMode } = require('./lib/firebaseAuth');

const FB_BASE = process.env.FB_BASE || 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';

async function main() {
    const outIdx = process.argv.indexOf('--out');
    const outDir = outIdx !== -1 ? process.argv[outIdx + 1] : null;
    if (!outDir) throw new Error('Usage: node backend/backup-firebase.js --out <dir>');

    const auth = await getFirebaseAuthParam();
    const { default: nodeFetch } = await import('node-fetch');
    const r = await nodeFetch(`${FB_BASE}.json${auth ? '?' + auth : ''}`);
    const text = await r.text();
    if (!r.ok) throw new Error(`Firebase responded ${r.status}`);

    const data = JSON.parse(text);
    // Refuse to save an empty or error response as a "backup"
    if (!data || typeof data !== 'object' || data.error || Object.keys(data).length === 0) {
        throw new Error('Firebase returned no data — not writing a backup');
    }

    const date = new Date().toISOString().slice(0, 10);
    const dir = path.join(outDir, date.slice(0, 4));
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `vegasbeta-${date}.json.gz`);
    fs.writeFileSync(file, zlib.gzipSync(text, { level: 9 }));

    console.log(`✅ Backup written: ${file}`);
    console.log(`   auth: ${authMode}, raw ${text.length} bytes, gzipped ${fs.statSync(file).size} bytes`);
    console.log(`   top-level keys: ${Object.keys(data).sort().join(', ')}`);
}

main().catch(e => {
    console.error('❌ Backup failed:', e.message);
    process.exit(1);
});
