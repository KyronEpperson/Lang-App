#!/usr/bin/env node
/* Lang App · two halves: self-test. Proves the validator and the proof actually DETECT breakage (validating en against itself proves nothing).
   Copies the halves to a temp dir, builds a fake filled native half "es" through mk_native (+ --merge), checks it validates clean, then applies one
   mutation at a time and asserts the validator (or the proof, for target edits) reports it. Usage: node tools/halves/selftest.js */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const L = require('./lib.js');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'halves-selftest-'));
const run = (script, args, dir) => cp.spawnSync('node', [path.join(__dirname, script)].concat(args), { encoding: 'utf8', env: Object.assign({}, process.env, { HALVES_DIR: dir }) });
function fresh(name) {
  const d = path.join(tmp, name); fs.cpSync(path.join(L.HALVES, 'target'), path.join(d, 'target'), { recursive: true }); fs.mkdirSync(path.join(d, 'native'), { recursive: true });
  fs.cpSync(path.join(L.HALVES, 'native', 'en'), path.join(d, 'native', 'en'), { recursive: true }); return d;
}
/* base: a fake Spanish half where every prose field is "ES " + English */
const base = fresh('base');
let r = run('mk_native.js', ['es'], base); if (r.status) throw new Error(r.stderr);
const W = path.join(base, 'native', 'es', 'ko', 'work');
fs.readdirSync(W).forEach(f => {
  if (/^w\d+\.jsonl$/.test(f)) L.writeJSONL(path.join(W, f), L.readJSONL(path.join(W, f)).map(x => Object.assign(x, { tgt: x.pre ? x.tgt : x.f === 'course' ? 'coreano' : 'ES ' + x.src })));
  if (/^w\d+$/.test(f)) { const d = path.join(W, f, 'lessons'); fs.readdirSync(d).filter(x => x.endsWith('.src.html')).forEach(x => fs.writeFileSync(path.join(d, x.replace('.src', '')), fs.readFileSync(path.join(d, x), 'utf8').replace(/<p>/g, '<p>ES '))); }
});
r = run('mk_native.js', ['es', '--merge'], base); if (r.status) throw new Error(r.stderr);
const N = d => path.join(d, 'native', 'es', 'ko');
/* a fake Spanish trainer.json: every English string prefixed "ES " (Hangul and %n slots kept), no alternates */
{ const pre = v => typeof v === 'string' ? 'ES ' + v : Array.isArray(v) ? v : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).filter(([k]) => k[0] !== '_').map(([k, x]) => [k, pre(x)])) : v;
  const tr = pre(L.readJSON(path.join(base, 'native', 'en', 'ko', 'trainer.json'))); tr.hangul.alt = { V: { 'ㅘ': ['ua'] }, L: {}, T: {}, sh: ['sh'], input: { fold: true, map: [['ñ', 'ny']], rewrite: [['qu(?=[ei])', 'k']] } }; tr.sound.showGloss = true;
  L.writeJSON(path.join(N(base), 'trainer.json'), tr); }
const editJ = (d, f, fn) => { const p = path.join(N(d), f); const o = L.readJSON(p); fn(o); L.writeJSON(p, o); };
const edit = (d, f, fn) => { const p = path.join(N(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
const cases = [
  ['clean fake es half validates', d => { }, null],
  ['Hangul run changed in a card note', d => edit(d, 'cards.jsonl', rows => { const x = rows.find(r => /[가-힣]/.test(r.note)); x.note = x.note.replace(/[가-힣]+/, 'XX'); return rows; }), /Hangul differs/],
  ['native row deleted', d => edit(d, 'dialog.jsonl', rows => rows.slice(1)), /missing native row/],
  ['orphan native row', d => edit(d, 'examples.jsonl', rows => rows.concat([{ id: 'ko.e999', tr: 'x' }])), /orphan/],
  ['duplicate deck label', d => edit(d, 'decks.jsonl', rows => { rows[1].label = rows[0].label; return rows; }), /duplicate deck label/],
  ['broken lesson token', d => { const p = path.join(N(d), 'lessons', 'polite.html'); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace(/\{\{ex:(ko\.s\d+)\}\}/, '{{ex:$1}')); }, /tokens differ|broken token/],
  ['token pointing nowhere', d => { const p = path.join(N(d), 'lessons', 'meet.html'); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace(/\{\{ex:ko\.s\d+\}\}/, '{{ex:ko.s9999}}')); }, /does not resolve/],
  ['Korean field smuggled into a native row', d => edit(d, 'cards.jsonl', rows => { rows[0].ko = '아'; return rows; }), /not a native field/],
  ['Korean option slot overwritten', d => edit(d, 'checks.jsonl', rows => { const x = rows.find(r => Array.isArray(r.o) && r.o.includes(null)); x.o[x.o.indexOf(null)] = 'hack'; return rows; }), /leave it null/],
  ['empty field', d => edit(d, 'practice.jsonl', rows => { rows[0].why = ''; return rows; }), /empty/],
  ['dialog " / " lost', d => edit(d, 'dialog.jsonl', rows => { rows[0].tr = rows[0].tr.replace(' / ', ' '); return rows; }), /" \/ "/],
  ['event-attribute trap in body', d => { const p = path.join(N(d), 'lessons', 'numbers.html'); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('<p>', '<p>ES once = 11. ')); }, /event attribute/],
  ['options made identical', d => edit(d, 'checks.jsonl', rows => { const x = rows.find(r => Array.isArray(r.o) && r.o.filter(v => v != null).length >= 2); const ix = x.o.map((v, i) => v != null ? i : -1).filter(i => i >= 0); x.o[ix[1]] = x.o[ix[0]]; return rows; }), /identical/],
  ['trainer: a Hangul drill meaning dropped', d => editJ(d, 'trainer.json', o => { delete o.hangul.mean['서울']; }), /missing meaning for a Hangul drill word/],
  ['trainer: a %1 slot changed', d => editJ(d, 'trainer.json', o => { o.onboard.started = o.onboard.started.replace('%1', '%2'); }), /slots %2 differ/],
  ['trainer: alternate "o" for ㅓ (merges with ㅗ)', d => editJ(d, 'trainer.json', o => { o.hangul.alt.V['ㅓ'] = ['o']; }), /canonical spelling of ㅗ/],
  ['trainer: alternate "y" for ㅈ (ㅈ+ㅏ = 야)', d => editJ(d, 'trainer.json', o => { o.hangul.alt.L['ㅈ'] = ['y']; }), /merge two syllables/],
  ['trainer: orphan PART key', d => editJ(d, 'trainer.json', o => { o.gloss.PART['께서'] = 'ES honorific subject'; }), /orphan key/],
  ['trainer: Hangul changed in a gloss', d => editJ(d, 'trainer.json', o => { o.register.toPolite = o.register.toPolite.replace('요', '죠'); }), /Hangul differs/],
  ['trainer: rewrite regex that does not compile', d => editJ(d, 'trainer.json', o => { o.hangul.alt.input.rewrite.push(['qu(', 'k']); }), /does not compile/],
  ['trainer.json absent still validates (trainers off)', d => fs.rmSync(path.join(N(d), 'trainer.json')), null],
  ['blank placeholder removed', d => edit(d, 'patterns.jsonl', rows => { const x = rows.find(r => /__/.test(r.meaning)) || rows[0]; x.meaning = x.meaning.replace(/_{2,}/, '…') + (/__/.test(x.meaning) ? '' : ' ___'); return rows; }), /placeholder/]
];
let fail = 0;
cases.forEach(([name, mut, want]) => {
  const d = path.join(tmp, 'c' + Math.random().toString(36).slice(2)); fs.cpSync(base, d, { recursive: true }); mut(d);
  const v = run('validate.js', ['es', 'ko'], d), out = v.stdout + v.stderr;
  const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
  if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:/.test(l)).slice(0, 5).join('\n')));
});
/* a waiver written on a work row survives --merge and turns the Hangul error into a warning */
{
  const d = path.join(tmp, 'waive'); fs.cpSync(base, d, { recursive: true }); const wd = path.join(N(d), 'work');
  const wf = fs.readdirSync(wd).filter(f => /^w\d+\.jsonl$/.test(f)).sort()[0], rows = L.readJSONL(path.join(wd, wf));
  const x = rows.find(r => r.f === 'cards' && r.k === 'note' && /[가-힣]/.test(r.src) && !r.pre); x.tgt = x.tgt.replace(/[가-힣]+/, '추가'); x._waive = ['hangul']; x._note = 'test'; L.writeJSONL(path.join(wd, wf), rows);
  run('mk_native.js', ['es', '--merge'], d); const v = run('validate.js', ['es', 'ko'], d);
  const ok = v.status === 0 && /warn .*Hangul differs/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'work-row _waive survives merge and downgrades to a warning');
}
/* export refuses when a positional check/practice id would now hold different Korean */
{
  const d = fresh('moved'); const p = path.join(d, 'target', 'ko', 'practice.jsonl'); const rows = L.readJSONL(p); rows[3].a = ['다른']; L.writeJSONL(p, rows);
  const v = run('export_ko.js', [], d); const ok = v.status === 1 && /different Korean content/.test(v.stderr); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'export refuses moved positional ids');
}
/* proof must catch a changed English trainer text and a changed role */
{
  const d = fresh('prooftr'); const p = path.join(d, 'native', 'en', 'ko', 'trainer.json'); const o = L.readJSON(p); o.hangul.mean['나무'] = 'wood'; L.writeJSON(p, o);
  const c = path.join(d, 'target', 'ko', 'course.json'); const k = L.readJSON(c); k.roles.survival = 'ko.d.survival-phrases-2'; L.writeJSON(c, k);
  const v = run('proof.js', [], d); const ok = v.status === 1 && /raw\.trainer\."TRAINER"\."hangul"\."mean"\."나무"/.test(v.stdout) && /raw\.trainer\."ROLES"\."survival"/.test(v.stdout); if (!ok) fail++;
  console.log((ok ? 'ok   ' : 'FAIL ') + 'proof detects an altered English trainer text and role');
}
/* proof must catch a changed Korean string in the target half */
{
  const d = fresh('proof'); const p = path.join(d, 'target', 'ko', 'cards.jsonl'); const rows = L.readJSONL(p); rows[5].ko += '!'; L.writeJSONL(p, rows);
  const v = run('proof.js', [], d); const ok = v.status === 1 && /differences: [1-9]/.test(v.stdout); if (!ok) fail++;
  console.log((ok ? 'ok   ' : 'FAIL ') + 'proof detects an altered target ko (' + (v.stdout.match(/A\. raw data differences: \d+/) || [''])[0] + ')');
}
fs.rmSync(tmp, { recursive: true, force: true });
console.log(fail ? fail + ' FAILED' : 'all self-tests passed'); process.exit(fail ? 1 : 0);
