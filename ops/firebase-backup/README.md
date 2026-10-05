# V3GAS B3TA — Firebase backups (private)

**Keep this repo private.** Every file in `backups/` is a full copy of the app's data.

A GitHub Action (`.github/workflows/backup.yml`) runs daily at about 3:17am Pacific. It saves the
whole `vegasbeta` node to `backups/<year>/vegasbeta-<date>.json.gz`. The backup script lives in the
app repo (`backend/backup-firebase.js`), and the Action checks that repo out on each run.

To back up right now, go to **Actions → Daily Firebase backup → Run workflow**.

## Restore

From the app repo (`V3GAS-B3TA-`), with the service account available as
`FIREBASE_SERVICE_ACCOUNT_FILE=/path/to/service-account.json`:

```bash
cd backend && npm install

# Dry run: shows what would change, writes nothing
FIREBASE_SERVICE_ACCOUNT_FILE=~/secrets/firebase-sa.json \
  node restore-firebase-backup.js ~/V3GAS-B3TA-backups/backups/2026/vegasbeta-2026-10-05.json.gz --path userData

# Do it (the current data is saved next to the backup first, so this can be undone)
FIREBASE_SERVICE_ACCOUNT_FILE=~/secrets/firebase-sa.json \
  node restore-firebase-backup.js ~/V3GAS-B3TA-backups/backups/2026/vegasbeta-2026-10-05.json.gz --path userData --confirm
```

Leave out `--path` to restore all of `vegasbeta`. Use `--path nba/betLog/2025-26` for one season.
