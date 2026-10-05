// Credentials for Firebase Realtime Database REST calls, so the database rules
// can deny all public access while the backend keeps working.
//
// Checked in this order:
//   1. Service account (recommended): Render Secret File at
//      /etc/secrets/firebase-service-account.json, or env FIREBASE_SERVICE_ACCOUNT
//      (raw JSON or base64). Exchanged for a 1-hour OAuth access token, cached
//      and refreshed 5 minutes before it expires. Appended as ?access_token=.
//   2. Legacy database secret: env FIREBASE_DB_SECRET, appended as ?auth=.
//   3. Nothing configured: requests go out unauthenticated (only works while the
//      rules are public, or against a local test FB_BASE).
//
// No dependencies: the service-account JWT is signed with Node's crypto.

const crypto = require('crypto');
const fs = require('fs');

const SECRET_FILE = process.env.FIREBASE_SERVICE_ACCOUNT_FILE || '/etc/secrets/firebase-service-account.json';
const SCOPES = 'https://www.googleapis.com/auth/firebase.database https://www.googleapis.com/auth/userinfo.email';

function loadServiceAccount() {
    let raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw && fs.existsSync(SECRET_FILE)) raw = fs.readFileSync(SECRET_FILE, 'utf8');
    if (!raw) return null;
    raw = raw.trim();
    if (!raw.startsWith('{')) raw = Buffer.from(raw, 'base64').toString('utf8');
    const sa = JSON.parse(raw);
    if (!sa.client_email || !sa.private_key) throw new Error('Service account is missing client_email/private_key');
    return sa;
}

const serviceAccount = loadServiceAccount();
const dbSecret = process.env.FIREBASE_DB_SECRET || null;

const authMode = serviceAccount ? 'service-account' : dbSecret ? 'database-secret' : 'none';

let cachedToken = null; // { token, expiresAt }
let pendingToken = null;

const b64url = buf => Buffer.from(buf).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

async function fetchAccessToken() {
    const tokenUrl = process.env.GOOGLE_TOKEN_URL || serviceAccount.token_uri || 'https://oauth2.googleapis.com/token';
    const now = Math.floor(Date.now() / 1000);
    const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const claims = b64url(JSON.stringify({
        iss: serviceAccount.client_email,
        scope: SCOPES,
        aud: tokenUrl,
        iat: now,
        exp: now + 3600
    }));
    const signature = b64url(crypto.sign('RSA-SHA256', Buffer.from(`${header}.${claims}`), serviceAccount.private_key));

    const { default: nodeFetch } = await import('node-fetch');
    const r = await nodeFetch(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: `${header}.${claims}.${signature}`
        }).toString()
    });
    const data = await r.json();
    if (!r.ok || !data.access_token) {
        throw new Error(`Google token exchange failed (${r.status}): ${data.error || 'no access_token'}`);
    }
    return { token: data.access_token, expiresAt: Date.now() + (data.expires_in || 3600) * 1000 };
}

// Query-string credential to append to a Firebase REST URL ('' if none)
async function getFirebaseAuthParam() {
    if (serviceAccount) {
        if (!cachedToken || Date.now() > cachedToken.expiresAt - 5 * 60 * 1000) {
            // One exchange at a time even if many requests arrive together
            pendingToken = pendingToken || fetchAccessToken().finally(() => { pendingToken = null; });
            cachedToken = await pendingToken;
        }
        return `access_token=${encodeURIComponent(cachedToken.token)}`;
    }
    if (dbSecret) return `auth=${encodeURIComponent(dbSecret)}`;
    return '';
}

module.exports = { getFirebaseAuthParam, authMode };
