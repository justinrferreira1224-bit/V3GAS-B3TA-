#!/bin/bash

# Setup script for nightly betlog backups
# This runs the backup script every night at 2 AM

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BACKUP_SCRIPT="$SCRIPT_DIR/backup-betlogs.js"

# Create cron job entry
CRON_JOB="0 2 * * * cd $SCRIPT_DIR && /usr/bin/node $BACKUP_SCRIPT >> $SCRIPT_DIR/backup.log 2>&1"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "backup-betlogs.js"; then
    echo "✅ Backup cron job already exists"
else
    # Add to crontab
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo "✅ Nightly backup cron job installed!"
    echo "   Runs every night at 2:00 AM"
    echo "   Logs to: $SCRIPT_DIR/backup.log"
fi

echo ""
echo "To manually run backup now:"
echo "  npm run backup"
echo ""
echo "To view backup logs:"
echo "  tail -f $SCRIPT_DIR/backup.log"
