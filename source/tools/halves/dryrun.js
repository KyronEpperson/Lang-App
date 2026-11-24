#!/usr/bin/env node
/* Lang App · two halves: a writer's self-check. Copies the halves to a temp dir, runs mk_native --merge there (never on the real half), validates with
   --all, and prints only the errors and warnings that concern ONE writer's rows (and, for w1, course.json / ui.json). The real native half is not touched.
   Usage: node tools/halves/dryrun.js <native> <target> <wN>      e.g. node tools/halves/dryrun.js vi zh w2
   Exit 1 when that writer has an error or an empty row. */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const L = require('./lib.js');
const [nat, tgt, wn] = process.argv.slice(2);
if (!nat || !tgt || !/^w\d+$/.test(wn || '')) { console.error('usage: node tools/halves/dryrun.js <native> <target> <wN>'); process.exit(2); }
const SRC = process.env.HALVES_DIR || L.HALVES, WK = path.join(SRC, 'native', nat, tgt, 'work'), wf = path.join(WK, wn + '.jsonl');
if (!fs.existsSync(wf)) { console.error('dryrun: no work file ' + wf); process.exit(2); }
const D = fs.mkdtempSync(path.join(os.tmpdir(), 'halves-dry-'));
fs.cpSync(path.join(SRC, 'target'), path.join(D, 'target'), { recursive: true });
fs.mkdirSync(path.join(D, 'native', nat), { recursive: true });
fs.cpSync(path.join(SRC, 'native', 'en'), path.join(D, 'native', 'en'), { recursive: true });
fs.cpSync(path.join(SRC, 'native', nat, tgt), path.join(D, 'native', nat, tgt), { recursive: true });
if (fs.existsSync(path.join(SRC, 'native', nat, 'ko'))) fs.cpSync(path.join(SRC, 'native', nat, 'ko'), path.join(D, 'native', nat, 'ko'), { recursive: true });
const env = Object.assign({}, process.env, { HALVES_DIR: D });
const mArgs = [path.join(__dirname, 'mk_native.js'), nat, '--merge'].concat(tgt === 'ko' ? [] : ['--target', tgt]);
const m = cp.spawnSync('node', mArgs, { encoding: 'utf8', env });
if (m.status) { console.error('dryrun: merge failed\n' + m.stdout + m.stderr); process.exit(1); }
const v = cp.spawnSync('node', [path.join(__dirname, 'validate.js'), nat, tgt, '--all'], { encoding: 'utf8', env });
const rows = L.readJSONL(wf), keys = new Set(rows.map(r => r.f + ':' + r.id)), lessons = new Set(rows.filter(r => r.f === 'lessons').map(r => 'lessons/' + r.id + '.html'));
const mine = l => { const m2 = l.match(/^\s*(ERROR|warn)\s+(.*)$/); if (!m2) return false; const rest = m2[2];
  if ([...lessons].some(f => rest.startsWith(f + ':'))) return true;
  const where = rest.split(': ')[0];
  if (/^readings /.test(where)) return [...rest.matchAll(/[a-z]+\.c\d{4}/g)].some(x => keys.has('cards:' + x[0]));
  if (keys.has(where) || keys.has(where.replace(/\.[a-zA-Z_]+(\[\d+\])?$/, ''))) return true;
  return wn === 'w1' && /^(course\.json|ui\.json|pack)\b/.test(where); };
const lines = (v.stdout || '').split('\n'), out = lines.filter(l => /^\s*(ERROR|warn)\s/.test(l) && mine(l));
const errs = out.filter(l => /ERROR/.test(l)), warns = out.filter(l => /warn/.test(l));
const uRows = wn === 'w1' && fs.existsSync(path.join(WK, 'wU.jsonl')) ? L.readJSONL(path.join(WK, 'wU.jsonl')) : []; /* w1 also owns the interface strings */
const empty = rows.concat(uRows).filter(r => !r.pre && String(r.src || '').trim() && !String(r.tgt || '').trim() && r.k !== 'trad' && r.k !== 'hv'); /* hv may be empty for skip (validate.js checks); trad is optional */
console.log('== dry run ' + nat + '-' + tgt + ' · ' + wn + ' (' + rows.length + ' rows, merged in ' + D + ') ==');
console.log(lines.filter(l => /^(words remaining|  Hán Việt)/.test(l)).join('\n'));
console.log('empty rows in ' + wn + '.jsonl' + (uRows.length ? ' + wU.jsonl' : '') + ': ' + empty.length + (empty.length ? ' (first: ' + empty.slice(0, 5).map(r => r.f + ':' + r.id + ' ' + (r.k || '')).join(', ') + ')' : ''));
console.log('your errors: ' + errs.length); errs.forEach(l => console.log(l));
console.log('your warnings: ' + warns.length); warns.forEach(l => console.log(l));
fs.rmSync(D, { recursive: true, force: true });
process.exit(errs.length || empty.length ? 1 : 0);
