#!/usr/bin/env node
// Copies the built website (repo root) into native/www for Capacitor to bundle.
// The site itself is not changed. Three small edits are made to the bundled copy only:
//   1. the Vercel Analytics script tag is removed (it only exists on lang-app.io)
//   2. recorded audio clips are allowed to load under the app's capacitor:// address
//   3. native/web/native.js is added (study reminders; never loaded by the website)
// No dependencies: plain Node 22.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, statSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..', '..');
const out = resolve(here, '..', 'www');

// Everything the app loads at runtime. sw.js is left out on purpose: service
// workers do not run under capacitor://, and the app already skips registering one there.
const FILES = ['index.html', 'offline.html', 'manifest.json', 'three.min.js',
  'icon.png', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon-32.png'];
const DIRS = ['packs', 'audio'];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const f of FILES) {
  if (!existsSync(join(root, f))) { console.error('missing ' + f); process.exit(1); }
  cpSync(join(root, f), join(out, f));
}
for (const d of DIRS) {
  if (!existsSync(join(root, d))) { console.error('missing ' + d + '/'); process.exit(1); }
  cpSync(join(root, d), join(out, d), { recursive: true });
}

let html = readFileSync(join(out, 'index.html'), 'utf8');
const problems = [];
function patch(label, from, to) {
  const n = html.split(from).length - 1;
  if (n !== 1) { problems.push(`${label}: expected 1 match, found ${n}`); return; }
  html = html.replace(from, to);
}
patch('analytics tag', '<script defer src="/_vercel/insights/script.js"></script>\n', '');
patch('audio clip address check', "CLIPS_FOR===t||!/^https?:$/.test(location.protocol)", "CLIPS_FOR===t||!/^(https?|capacitor):$/.test(location.protocol)");
// Native-only script (study reminders). It runs after the app's own script, so the app's functions exist.
cpSync(resolve(here, '..', 'web', 'native.js'), join(out, 'native.js'));
patch('native script tag', '\n</body>\n</html>', '\n<script src="native.js"></script>\n</body>\n</html>');
writeFileSync(join(out, 'index.html'), html);

// Every pack the page can ask for must be in the bundle, or a course would fail offline.
const wanted = [...new Set(html.match(/packs\/[a-z0-9-]+\.[0-9a-f]{8}\.js/g) || [])];
const missing = wanted.filter(p => !existsSync(join(out, p)));
if (!wanted.length) problems.push('no course packs referenced in index.html');
if (missing.length) problems.push('packs referenced but not in the repo: ' + missing.join(', '));

const version = (html.match(/APP_VERSION='([0-9]+(?:\.[0-9]+){1,2})/) || [])[1] || '';
if (!version) problems.push('could not read APP_VERSION from index.html');
writeFileSync(join(out, 'native-build.json'), JSON.stringify({ version, builtAt: new Date().toISOString() }) + '\n');

let bytes = 0;
(function walk(d) { for (const e of readdirSync(d, { withFileTypes: true })) { const p = join(d, e.name); e.isDirectory() ? walk(p) : bytes += statSync(p).size; } })(out);
console.log(`www ready: version ${version || '?'}, ${wanted.length} packs, ${(bytes / 1048576).toFixed(1)} MB`);
if (problems.length) { console.error('PROBLEMS:\n - ' + problems.join('\n - ')); process.exit(1); }
