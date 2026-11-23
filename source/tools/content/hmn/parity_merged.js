/* parity.js with every deviation fragment merged, without touching the lead's deviations.json.
   usage: node tools/content/hmn/parity_merged.js <scratch pack.js> [fragment.json ...]
   Copies tools/content to a temp folder, merges tools/content/hmn/deviations.*.json (or only the fragments named) into the copy's
   hmn/deviations.json the way tools/content/merge_deviations.py does, and runs the copy's parity.js against /home/claude/packs/course-ko-en.js.
   Writers: run it with your own fragment so parity sees your declared changes; every FAIL line about your lessons or decks must disappear. */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const ROOT = path.join(__dirname, '..', '..', '..');
const a = process.argv.slice(2); const pack = a.find(x => !/deviations\..*\.json$/.test(x));
if (!pack) { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(2); }
const SRC = path.join(ROOT, 'tools', 'content');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'hmn-parity-'));
const TC = path.join(tmp, 'content');
fs.cpSync(SRC, TC, { recursive: true, filter: s => !/[\\/]more[\\/]node_modules/.test(s) });
const H = path.join(TC, 'hmn');
const d = JSON.parse(fs.readFileSync(path.join(H, 'deviations.json'), 'utf8'));
const named = a.filter(x => /deviations\..*\.json$/.test(x)).map(x => path.resolve(x));
const frags = named.length ? named : fs.readdirSync(path.join(SRC, 'hmn')).filter(f => /^deviations\..+\.json$/.test(f)).sort().map(f => path.join(SRC, 'hmn', f));
for (const f of frags) {
  const fr = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const k of ['lessons', 'items', 'decks']) for (const [x, y] of Object.entries(fr[k] || {})) { d[k] = d[k] || {}; d[k][x] = y; }
  for (const k of ['extraLessons', 'droppedLessons']) for (const x of fr[k] || []) { d[k] = d[k] || []; if (!d[k].includes(x)) d[k].push(x); }
  console.log('merged ' + path.basename(f));
}
fs.writeFileSync(path.join(H, 'deviations.json'), JSON.stringify(d, null, 2));
const r = cp.spawnSync('node', [path.join(TC, 'parity.js'), 'hmn', path.resolve(pack)], { env: Object.assign({}, process.env, { LANGAPP_ROOT: ROOT }), encoding: 'utf8' });
process.stdout.write(r.stdout || ''); process.stderr.write(r.stderr || '');
fs.rmSync(tmp, { recursive: true, force: true });
process.exitCode = r.status;
