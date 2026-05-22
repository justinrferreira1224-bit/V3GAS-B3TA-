const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const FB_ROOT = 'https://vegas-bet-default-rtdb.firebaseio.com';

async function checkMLBData() {
    console.log('🔍 Checking root-level MLB data...\n');

    const paths = [
        'mlbBatting',
        'mlbInjuries',
        'mlbSeries',
        'mlbStandings',
        'mlbStarters'
    ];

    for (const path of paths) {
        try {
            const r = await fetch(`${FB_ROOT}/${path}.json`);
            const data = await r.json();

            if (data) {
                const keys = Object.keys(data);
                console.log(`✅ ${path}: ${keys.length} items`);
                console.log(`   Teams/Keys: ${keys.slice(0, 5).join(', ')}${keys.length > 5 ? '...' : ''}\n`);
            } else {
                console.log(`❌ ${path}: EMPTY\n`);
            }
        } catch (e) {
            console.error(`❌ ${path}: ERROR - ${e.message}\n`);
        }
    }
}

checkMLBData();
