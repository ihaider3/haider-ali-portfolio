const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const frontendDir = path.join(rootDir, 'frontend');

console.log('[postbuild-sync] Starting postbuild sync for Vercel...');

// 1. Sync frontend/.next -> root .next
const frontendNext = path.join(frontendDir, '.next');
const rootNext = path.join(rootDir, '.next');

if (fs.existsSync(frontendNext)) {
  try {
    console.log('[postbuild-sync] Copying frontend/.next to root .next...');
    fs.cpSync(frontendNext, rootNext, { recursive: true });
    console.log('[postbuild-sync] Successfully synced .next to root.');
  } catch (err) {
    console.warn('[postbuild-sync] Warning syncing .next:', err.message);
  }
}

// 2. Sync frontend/public -> root public
const frontendPublic = path.join(frontendDir, 'public');
const rootPublic = path.join(rootDir, 'public');

if (fs.existsSync(frontendPublic)) {
  try {
    console.log('[postbuild-sync] Copying frontend/public to root public...');
    fs.cpSync(frontendPublic, rootPublic, { recursive: true });
    console.log('[postbuild-sync] Successfully synced public to root.');
  } catch (err) {
    console.warn('[postbuild-sync] Warning syncing public:', err.message);
  }
}

console.log('[postbuild-sync] Postbuild sync completed.');
