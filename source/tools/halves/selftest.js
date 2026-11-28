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
  ['trainer: a numbers counter label dropped', d => editJ(d, 'trainer.json', o => { delete o.numbers.counter['잔']; }), /numbers\.counter\.잔: missing/],
  ['trainer: the %1 slot lost from a sound rule', d => editJ(d, 'trainer.json', o => { o.sound.rules['받침 → %1'] = o.sound.rules['받침 → %1'].replace('%1', 'x'); }), /slots none differ/],
  ['trainer: sound.showGloss not a boolean', d => editJ(d, 'trainer.json', o => { o.sound.showGloss = 'yes'; }), /must be true or false/],
  ['trainer: 요 dropped from a register prompt', d => editJ(d, 'trainer.json', o => { o.register.whyCasual = o.register.whyCasual.replace('요', ''); }), /register\.whyCasual: Hangul differs/],
  ['trainer: conjugator irregular tag altered', d => editJ(d, 'trainer.json', o => { o.conj.irregular['ㄷ→ㄹ'] = 'ㄷ→ㅅ'; }), /conj\.irregular\.ㄷ→ㄹ: Hangul differs/],
  ['trainer: gloss template with braces', d => editJ(d, 'trainer.json', o => { o.gloss.tpl.verb = 'ES verb · {%1}'; }), /braces are not allowed/],
  ['trainer: HTML in a conjugator label', d => editJ(d, 'trainer.json', o => { o.conj.labels.future = '<i>ES future</i>'; }), /HTML is not allowed/],
  ['trainer: Build gloss for a sentence the target does not have', d => editJ(d, 'trainer.json', o => { o.build.extra['없는 문장이에요'] = 'ES nope'; }), /not a target Build sentence/],
  ['trainer: a COUNT gloss emptied', d => editJ(d, 'trainer.json', o => { o.gloss.COUNT['권'] = ' '; }), /gloss\.COUNT\.권: empty/],
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
/* the trainer work file (wT.jsonl) round-trips through --merge into a trainer.json that validates; with no filled rows the merge leaves trainer.json alone */
{
  const d = path.join(tmp, 'trwork'); fs.cpSync(base, d, { recursive: true }); const wt = path.join(N(d), 'work', 'wT.jsonl'); const before = fs.readFileSync(path.join(N(d), 'trainer.json'), 'utf8');
  run('mk_native.js', ['es', '--merge'], d); const kept = fs.readFileSync(path.join(N(d), 'trainer.json'), 'utf8') === before;
  fs.rmSync(path.join(N(d), 'trainer.json')); L.writeJSONL(wt, L.readJSONL(wt).map(x => Object.assign(x, { tgt: x.pre ? x.tgt : 'ES ' + x.src })));
  const m = run('mk_native.js', ['es', '--merge'], d); const tj = L.readJSON(path.join(N(d), 'trainer.json')); tj.hangul.alt = { V: {}, L: {}, T: {}, sh: [] }; L.writeJSON(path.join(N(d), 'trainer.json'), tj);
  const v = run('validate.js', ['es', 'ko'], d);
  const ok = fs.existsSync(wt) && kept && m.status === 0 && v.status === 0 && tj.sound.showGloss === true && /^ES /.test(tj.gloss.CONN['그래서']) && /11 section\(s\), 11 complete/.test(v.stdout); if (!ok) fail++;
  console.log((ok ? 'ok   ' : 'FAIL ') + 'trainer work file round-trips through --merge (and an empty one leaves trainer.json alone)' + (ok ? '' : '\n' + [m.stdout, m.stderr, v.stdout.split('\n').filter(l => /ERROR|trainer/.test(l)).slice(0, 5).join('\n')].join('\n')));
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
/* ---------- a second target: Chinese (target/zh exported from tools/target/zh; docs/briefs/vi-zh-design.md) ----------
   A fake Vietnamese half of the Chinese course goes through mk_native --target zh (with the Hán Việt rows), --merge, validate and assemble; then one
   mutation at a time must be reported. Every Han-only card gets hvUse "skip" except zh.c0001 (八), which gets a "same" reading so the note checks run. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'zh'))) {
  const zb = fresh('zbase');
  const mk = run('mk_native.js', ['vi', '--target', 'zh'], zb); if (mk.status) throw new Error('mk_native vi --target zh: ' + mk.stderr);
  const ZW = path.join(zb, 'native', 'vi', 'zh', 'work');
  fs.readdirSync(ZW).forEach(f => {
    if (/^w(\d+|U)\.jsonl$/.test(f)) L.writeJSONL(path.join(ZW, f), L.readJSONL(path.join(ZW, f)).map(x => {
      if (x.k === 'hvUse') x.tgt = x.id === 'zh.c0001' ? 'same' : 'skip'; else if (x.k === 'hv') x.tgt = x.id === 'zh.c0001' ? 'bát' : ''; else if (x.k === 'trad') x.tgt = '';
      else if (x.f === 'cards' && x.k === 'note' && x.id === 'zh.c0001') x.tgt = 'VI bát ' + x.src; else if (x.src === '') x.tgt = ''; else x.tgt = x.pre ? x.tgt : x.f === 'course' ? 'Tiếng Trung' : 'VI ' + x.src; return x; }));
    if (/^w\d+$/.test(f)) { const d = path.join(ZW, f, 'lessons'); fs.readdirSync(d).filter(x => x.endsWith('.src.html')).forEach(x => fs.writeFileSync(path.join(d, x.replace('.src', '')), fs.readFileSync(path.join(d, x), 'utf8').replace(/<p>/g, '<p>VI '))); }
  });
  const mg = run('mk_native.js', ['vi', '--target', 'zh', '--merge'], zb); if (mg.status) throw new Error('merge vi zh: ' + mg.stderr);
  const ZN = d => path.join(d, 'native', 'vi', 'zh');
  const zedit = (d, f, fn) => { const p = path.join(ZN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const cardOf = (d, id) => L.readJSONL(path.join(d, 'target', 'zh', 'cards.jsonl')).find(r => r.id === id);
  const zcases = [
    ['zh: clean fake vi half validates', d => { }, null],
    ['zh: a Han run dropped from a card note', d => zedit(d, 'cards.jsonl', rows => { const x = rows.find(r => /[一-鿿]/.test(r.note) && r.id !== 'zh.c0001'); x.note = x.note.replace(/[一-鿿]+/, 'XX'); return rows; }), /Han differs from the English · missing/],
    ['zh: Chinese added to a dialogue translation', d => zedit(d, 'dialog.jsonl', rows => { rows[0].tr += ' 学生'; return rows; }), /dialog:zh\.g001\.tr: Han differs/],
    ['zh: Traditional form in a note without "trad"', d => zedit(d, 'cards.jsonl', rows => { rows[0].note += ' (學)'; return rows; }), /the Traditional form written in this row's "trad"/],
    ['zh: Traditional form in a note that matches "trad" passes', d => zedit(d, 'cards.jsonl', rows => { const id = L.readJSONL(path.join(d, 'target', 'zh', 'cards.jsonl')).find(c => c.zh === '谢').id; const x = rows.find(r => r.id === id); x.hvUse = 'none'; x.hv = 'tạ'; x.trad = '謝'; x.note += ' (謝)'; return rows; }), null],
    ['zh: a card with no English note gets a note row and can take "same"', d => { const W2 = path.join(ZN(d), 'work'); const t2 = L.byId(L.readJSONL(path.join(d, 'target', 'zh', 'cards.jsonl')));
      let id = null; fs.readdirSync(W2).filter(f => /^w\d+\.jsonl$/.test(f)).forEach(f => { const rows = L.readJSONL(path.join(W2, f)); const nr = rows.find(r => r.f === 'cards' && r.k === 'note' && r.src === '' && !id && t2.get(r.id).zh.length === 2); if (!nr) return; id = nr.id; const z = t2.get(id).zh;
        rows.forEach(r => { if (r.id !== id || r.f !== 'cards') return; if (r.k === 'note') r.tgt = 'VI ' + z[0] + ' ba, ' + z[1] + ' bô: ba bô'; if (r.k === 'hvUse') r.tgt = 'same'; if (r.k === 'hv') r.tgt = 'ba bô'; }); L.writeJSONL(path.join(W2, f), rows); });
      if (!id) throw new Error('no note-less two-character card'); const m = run('mk_native.js', ['vi', '--target', 'zh', '--merge'], d); if (m.status) throw new Error(m.stderr); }, null],
    ['zh: a note printing a character the card does not have', d => zedit(d, 'cards.jsonl', rows => { rows[0].note += ' 鬼'; return rows; }), /card's own characters and the Traditional form/],
    ['zh: hv with the wrong syllable count', d => zedit(d, 'cards.jsonl', rows => { rows[0].hv = 'bát tám'; return rows; }), /2 syllable\(s\) for 1 character/],
    ['zh: hvUse not one of the four values', d => zedit(d, 'cards.jsonl', rows => { rows[0].hvUse = 'yes'; return rows; }), /must be same, shifted, none or skip/],
    ['zh: hvUse same but the note lacks the reading', d => zedit(d, 'cards.jsonl', rows => { rows[0].note = rows[0].note.replace('bát ', ''); return rows; }), /does not show the reading "bát"/],
    ['zh: a required card left undecided', d => zedit(d, 'cards.jsonl', rows => { const x = rows.find(r => r.hvUse === 'skip'); delete x.hvUse; return rows; }), /hvUse: missing: decide/],
    ['zh: hv that is not a Vietnamese syllable', d => zedit(d, 'cards.jsonl', rows => { rows[0].hv = 'ba1'; rows[0].note = 'ba1 ' + rows[0].note; return rows; }), /is not one Vietnamese syllable/],
    ['zh: trad of the wrong length', d => zedit(d, 'cards.jsonl', rows => { rows[0].trad = '捌拾'; return rows; }), /trad: 2 character\(s\) for 1/],
    ['zh: a pinyin option slot overwritten', d => zedit(d, 'checks.jsonl', rows => { const x = rows.find(r => Array.isArray(r.o) && r.o.includes(null)); x.o[x.o.indexOf(null)] = 'hack'; return rows; }), /holds a Chinese option/],
    ['zh: "|" in an example gloss', d => zedit(d, 'sentences.jsonl', rows => { rows[0].gloss += ' | x'; return rows; }), /"\|" is not allowed in an example gloss/],
    ['zh: Chinese added to a lesson body only warns', d => { const p = path.join(ZN(d), 'lessons', 'greetings.html'); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('<p>', '<p>學生 ')); }, null],
    ['zh: Han dropped from a lesson body', d => { const p = path.join(ZN(d), 'lessons', 'shi.html'); const h = fs.readFileSync(p, 'utf8'), run1 = h.replace(L.TOKEN_RX, ' ').match(/[一-鿿]+/)[0]; fs.writeFileSync(p, h.split(run1).join('X')); }, /lessons\/shi\.html: Han differs/]
  ];
  zcases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 'z' + Math.random().toString(36).slice(2)); fs.cpSync(zb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['vi', 'zh'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  /* two cards that share a character, read two ways: a warning for the reviewer (polyphones are legitimate), never an error */
  { const d = path.join(tmp, 'zpoly'); fs.cpSync(zb, d, { recursive: true });
    const tc = L.readJSONL(path.join(d, 'target', 'zh', 'cards.jsonl')).filter(c => c.id !== 'zh.c0001' && /^[一-鿿]{1,4}$/.test(c.zh)), by = new Map();
    tc.forEach(c => [...new Set(c.zh)].forEach(ch => { if (!by.has(ch)) by.set(ch, []); by.get(ch).push(c); }));
    const [ch, pair] = [...by.entries()].find(([, l]) => l.length >= 2);
    zedit(d, 'cards.jsonl', rows => { pair.slice(0, 2).forEach((c, k) => { const r = rows.find(x => x.id === c.id); r.hvUse = 'none'; r.hv = [...c.zh].map(x => x === ch ? (k ? 'bô' : 'ba') : 'ba').join(' '); }); return rows; });
    const v = run('validate.js', ['vi', 'zh'], d); const ok = v.status === 0 && new RegExp('readings ' + ch + ': read two ways').test(v.stdout); if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + 'zh: one character read two ways across cards is a warning, never an error' + (ok ? '' : '\n' + v.stdout.split('\n').filter(l => /ERROR|readings/.test(l)).slice(0, 5).join('\n'))); }
  /* the filled half assembles into a pack with the en-zh pack flags and the Vietnamese title / greeting shapes */
  { const out = path.join(tmp, 'course-vi-zh.js'); const a = run('assemble.js', ['vi', 'zh', out], zb); let ok = a.status === 0;
    if (ok) { const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(out, 'utf8'))(P); const c = P.course['vi-zh'];
      ok = !!c && c.native === 'vi' && c.target === 'zh' && c.ttsLang === 'zh-CN' && c.accents === true && c.tilesDefault === true && typeof c.keys === 'string' && c.TITLES[0][2] === '' && /^VI /.test(c.TITLES[0][1]) && c.GREET[0].length === 2 && Object.values(c.features).every(x => x === false) && c.UI['Chinese (required)'] === 'VI Chinese (required)' && c.standard === true; }
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'zh: the filled vi half assembles (pack flags, titles, greetings, features off, UI from wU.jsonl)' + (ok ? '' : '\n' + a.stdout + a.stderr)); }
  /* a writer's dry run (dryrun.js) reports only that writer's problems, without touching the half */
  { const d = path.join(tmp, 'zdry'); fs.cpSync(zb, d, { recursive: true }); const ok1 = run('dryrun.js', ['vi', 'zh', 'w2'], d).status === 0;
    const wf = path.join(ZN(d), 'work', 'w2.jsonl'); L.writeJSONL(wf, L.readJSONL(wf).map(x => { if (x.f === 'dialog' && x.id === 'zh.g001') x.tgt = x.tgt.replace(' / ', ' '); return x; }));
    const before = fs.readFileSync(path.join(ZN(d), 'dialog.jsonl'), 'utf8'); const r2 = run('dryrun.js', ['vi', 'zh', 'w2'], d), r1 = run('dryrun.js', ['vi', 'zh', 'w1'], d);
    const ok = ok1 && r2.status === 1 && /dialog:zh\.g001\.tr/.test(r2.stdout) && r1.status === 0 && fs.readFileSync(path.join(ZN(d), 'dialog.jsonl'), 'utf8') === before; if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + 'zh: dryrun.js shows a writer only their own errors and leaves the half untouched'); }
  /* proof zh detects an altered Chinese card; export_target refuses moved positional ids */
  { const d = fresh('zproof'); const p = path.join(d, 'target', 'zh', 'cards.jsonl'); const rows = L.readJSONL(p); rows[7].zh += '!'; L.writeJSONL(p, rows);
    const v = run('proof.js', ['zh'], d); const ok = v.status === 1 && /differences: [1-9]/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof zh detects an altered target zh card'); }
  { const d = fresh('zclean'); const v = run('proof.js', ['zh'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof zh: target/zh + native/en/zh reassemble the en-zh pack exactly'); }
  { const d = fresh('zmoved'); const p = path.join(d, 'target', 'zh', 'practice.jsonl'); const rows = L.readJSONL(p); rows[3].t = rows[3].t === 'mc' ? 'order' : 'mc'; L.writeJSONL(p, rows);
    const v = run('export_target.js', ['zh'], d); const ok = v.status === 1 && /different Chinese content/.test(v.stderr); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'export_target zh refuses moved positional ids'); }
}
/* ---------- a "by marks" target: Vietnamese (target/vi, docs/briefs/x-vi-design.md) ----------
   A stand-in Spanish half (a copy of the English half: every marked span present) must validate; each mutation of a marked span must be reported. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'vi'))) {
  const vb = fresh('vbase'), VN = d => path.join(d, 'native', 'es', 'vi');
  fs.cpSync(path.join(vb, 'native', 'en', 'vi'), VN(vb), { recursive: true }); { const c = path.join(VN(vb), 'course.json'); const o = L.readJSON(c); o.native = 'es'; L.writeJSON(c, o); }
  const vedit = (d, f, fn) => { const p = path.join(VN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const vcases = [
    ['vi: stand-in es half (copy of the English) validates', d => { }, null],
    ['vi: a Vietnamese word changed inside a bold span of a body', d => { const p = path.join(VN(d), 'lessons', 'tones.html'); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('<b>bàn</b>,', '<b>ban</b>,')); }, /lessons\/tones\.html: marked Vietnamese text missing or altered: «<b>bàn<\/b>»/],
    ['vi: a card front quoted in its own note loses a tone mark', d => vedit(d, 'cards.jsonl', rows => { const x = rows.find(r => r.id === 'vi.c0065'); x.note = x.note.replace('gái', 'gai'); return rows; }), /cards:vi\.c0065\.note: marked Vietnamese text missing/],
    ['vi: an answer word in a practice hint loses its tone mark', d => vedit(d, 'practice.jsonl', rows => { const x = rows.find(r => r.id === 'tones.12'); x.hint = x.hint.replace('mẹ', 'me'); return rows; }), /practice:tones\.12\.hint: marked Vietnamese text missing or altered: «mẹ»/],
    ['vi: a practice answer smuggled into a native row', d => vedit(d, 'practice.jsonl', rows => { rows[0].a = ['x']; return rows; }), /field "a" is not a native field/]
  ];
  vcases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 'v' + Math.random().toString(36).slice(2)); fs.cpSync(vb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['es', 'vi'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  /* hand-set spans (tools/target/vi/marks.extra.jsonl): a word the rules cannot prove is protected too; the English half leaves no Vietnamese word
     with a diacritic unmarked; a stale row stops the export */
  { const x = L.readJSONL(path.join(L.ROOT, 'tools', 'target', 'vi', 'marks.extra.jsonl')).find(r => r.f === 'cards' && r.k === 'note' && (r.spans || []).some(sp => L.hasViDiacritic(sp) && !/ /.test(sp)));
    const sp = x.spans.find(q => L.hasViDiacritic(q) && !/ /.test(q)), plainSp = sp.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
    const d = path.join(tmp, 'vx'); fs.cpSync(vb, d, { recursive: true }); vedit(d, 'cards.jsonl', rows => { const r = rows.find(q => q.id === x.id); r.note = r.note.split(sp).join(plainSp); return rows; });
    const v = run('validate.js', ['es', 'vi'], d); const ok = v.status === 1 && new RegExp('cards:' + x.id.replace('.', '\\.') + '\\.note: marked Vietnamese text missing').test(v.stdout); if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + 'vi: a hand-set word in a card note (' + x.id + ' «' + sp + '») loses its tone mark'); }
  { const d = fresh('vunmarked'); const v = run('export_target.js', ['vi'], d); const left = fs.readFileSync(path.join(d, 'native', 'en', 'vi', 'unmarked.tsv'), 'utf8').split('\n').filter(l => l.trim() && !l.startsWith('#'));
    const ok = v.status === 0 && left.length === 0 && fs.readFileSync(path.join(d, 'target', 'vi', 'marks.jsonl'), 'utf8') === fs.readFileSync(path.join(L.HALVES, 'target', 'vi', 'marks.jsonl'), 'utf8'); if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + 'vi: the English half leaves no Vietnamese word with a diacritic unmarked, and a second export keeps marks.jsonl' + (ok ? '' : ' (' + left.length + ' unmarked field(s): mark them with marks_propose.js vi --write)\n' + v.stderr.slice(0, 300))); }
  { const d = fresh('vstale'), xf = path.join(tmp, 'stale.extra.jsonl'); L.writeJSONL(xf, [{ f: 'cards', id: 'vi.c0001', k: 'note', spans: ['khôngcótừnày'] }]);
    const v = cp.spawnSync('node', [path.join(__dirname, 'export_target.js'), 'vi'], { encoding: 'utf8', env: Object.assign({}, process.env, { HALVES_DIR: d, HALVES_MARKS_EXTRA: xf }) });
    const ok = v.status === 1 && /stale row\(s\) or span\(s\)/.test(v.stderr); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'export_target vi refuses a hand-set span that is not in its field'); }
  { const d = fresh('vclean'); const v = run('proof.js', ['vi'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof vi: target/vi + native/en/vi reassemble the en-vi pack exactly'); }
}
/* ---------- KEEP mode: a learner language written in Han characters on a Han-script target (lib.js hanNative; docs/briefs/x-yue-design.md §6) ----------
   A fake Mandarin half of the Cantonese course goes through mk_native --target yue, --merge, validate and assemble. Every prose field is Chinese text
   glued to the front, with each Cantonese run of the English set apart in 「 」. Added Han must pass; an altered, merged or dropped Cantonese run must not. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'yue'))) {
  const HAN = /[㐀-䶿一-鿿豈-﫿]+/g, fake = (pre, s2) => pre + String(s2).replace(HAN, r0 => '「' + r0 + '」');
  const build = (nat, pre, name) => { const d = fresh(nat + 'yue'); const mk = run('mk_native.js', [nat, '--target', 'yue'], d); if (mk.status) throw new Error('mk_native ' + nat + ' --target yue: ' + mk.stderr);
    const W2 = path.join(d, 'native', nat, 'yue', 'work');
    fs.readdirSync(W2).forEach(f => {
      if (/^w(\d+|U)\.jsonl$/.test(f)) L.writeJSONL(path.join(W2, f), L.readJSONL(path.join(W2, f)).map(x => { x.tgt = x.pre ? x.tgt : x.f === 'course' ? name : x.f === 'ui' ? pre + x.src : x.f === 'labels' && /\.tl\d+\.\d+$/.test(x.id) ? 'ZH ' + x.src : fake(pre, x.src); return x; }));
      if (/^w\d+$/.test(f)) { const ld = path.join(W2, f, 'lessons'); fs.readdirSync(ld).filter(x => x.endsWith('.src.html')).forEach(x => fs.writeFileSync(path.join(ld, x.replace('.src', '')), fs.readFileSync(path.join(ld, x), 'utf8').replace(/<p>/g, '<p>' + pre + ' '))); }
    });
    const mg = run('mk_native.js', [nat, '--target', 'yue', '--merge'], d); if (mg.status) throw new Error('merge ' + nat + ' yue: ' + mg.stderr); return d; };
  const yb = build('zh', '中文說明：', '粵語'), YN = d => path.join(d, 'native', 'zh', 'yue');
  const yedit = (d, f, fn) => { const p = path.join(YN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const noteRow = rows => rows.find(r => /「[一-鿿]{2,}」/.test(r.note || ''));
  const ycases = [
    ['yue: a fake Mandarin half full of its own Han validates (KEEP mode)', d => { }, null, /kept runs .* 0 field\(s\) with a run missing/],
    ['yue: a Cantonese run altered in a card note', d => yedit(d, 'cards.jsonl', rows => { const x = noteRow(rows); x.note = x.note.replace(/「([一-鿿])([一-鿿]+)」/, '「$1的$2」'); return rows; }), /cards:yue\.c\d+\.note: Cantonese text missing or altered/],
    ['yue: a Cantonese run written straight into the learner\'s Chinese (merged)', d => yedit(d, 'cards.jsonl', rows => { const x = noteRow(rows); x.note = x.note.replace(/「([一-鿿]+)」/, '這個$1的意思'); return rows; }), /Cantonese text missing or altered: «[一-鿿]+» \(keep each Cantonese run exactly and set it apart/],
    ['yue: a Cantonese run dropped from a dialogue translation or practice prompt', d => yedit(d, 'practice.jsonl', rows => { const x = rows.find(r => typeof r.q === 'string' && /「[一-鿿]+」/.test(r.q)); x.q = x.q.replace(/「[一-鿿]+」/, '……'); return rows; }), /practice:[\w-]+\.\d+\.q: Cantonese text missing or altered/],
    ['yue: a Cantonese run dropped from a lesson body', d => { const dd = path.join(YN(d), 'lessons'); const f = fs.readdirSync(dd).find(x => /<b>[一-鿿]+<\/b>/.test(fs.readFileSync(path.join(dd, x), 'utf8'))); const p = path.join(dd, f); const h = fs.readFileSync(p, 'utf8'), r1 = h.match(/<b>([一-鿿]+)<\/b>/)[1]; fs.writeFileSync(p, h.split(r1).join('X')); }, /lessons\/[\w-]+\.html: Cantonese text missing or altered/],
    ['yue: a waiver on the row downgrades a missing run to a warning', d => yedit(d, 'cards.jsonl', rows => { const x = noteRow(rows); x.note = x.note.replace(/「[一-鿿]+」/, '……'); x._waive = ['hangul']; return rows; }), null, /warn  cards:yue\.c\d+\.note: Cantonese text missing or altered/],
    ['yue: options written over an item whose options are all Cantonese', d => yedit(d, 'checks.jsonl', rows => { const tr = L.readJSONL(path.join(d, 'target', 'yue', 'checks.jsonl')).find(r => r.o.every(o => o != null)); const x = rows.find(r => r.id === tr.id); x.o = tr.o.map(() => '亂寫'); return rows; }), /field "o" is not a native field|holds a Cantonese option/],
    ['yue: a Cantonese field smuggled into a native row', d => yedit(d, 'cards.jsonl', rows => { rows[0].yue = '我'; return rows; }), /not a native field/]
  ];
  ycases.forEach(([name, mut, want, also]) => {
    const d = path.join(tmp, 'y' + Math.random().toString(36).slice(2)); fs.cpSync(yb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['zh', 'yue', '--all'], d), out = v.stdout + v.stderr;
    const ok = (want ? (v.status === 1 && want.test(out)) : v.status === 0) && (!also || also.test(out));
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error|kept runs/.test(l)).slice(0, 5).join('\n')));
  });
  { const out = path.join(tmp, 'course-zh-yue.js'); const a = run('assemble.js', ['zh', 'yue', out], yb); let ok = a.status === 0;
    if (ok) { const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(out, 'utf8'))(P); const c = P.course['zh-yue'], en = (() => { const Q = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(path.join(L.ROOT, 'packs', 'course-en-yue.js'), 'utf8'))(Q); return Q.course['en-yue']; })();
      const fronts = x => Object.values(x.DECKS).map(dk => dk.map(cd => cd[0] + '\u0001' + cd[1]).join('\u0002')).join('\u0003');
      ok = !!c && c.native === 'zh' && c.target === 'yue' && c.ttsLang === en.ttsLang && fronts(c) === fronts(en) && c.LESSONS.length === en.LESSONS.length && /^中文說明：/.test(Object.values(c.DECKS)[0][0][2]); }
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'yue: the fake Mandarin half assembles with every Cantonese card front and reading of en-yue' + (ok ? '' : '\n' + a.stdout + a.stderr)); }
  /* Japanese: kana on both sides sets a run apart, no brackets needed */
  { const jb = build('ja', 'これは ', '広東語'); const p = path.join(jb, 'native', 'ja', 'yue', 'cards.jsonl'); L.writeJSONL(p, L.readJSONL(p).map(r => { if (typeof r.note === 'string') r.note = r.note.replace(/「([一-鿿]+)」/g, 'の$1は'); return r; }));
    const v = run('validate.js', ['ja', 'yue'], jb); const ok = v.status === 0 && /kept runs/.test(v.stdout); if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + 'yue: a fake Japanese half with kana around each Cantonese run validates' + (ok ? '' : '\n' + v.stdout.split('\n').filter(l => /ERROR|errors:/.test(l)).slice(0, 5).join('\n'))); }
  /* a learner language NOT written in Han keeps the strict rule: Han added to a translation is an error */
  { const d = fresh('esyue'), EN2 = path.join(d, 'native', 'es', 'yue'); fs.cpSync(path.join(d, 'native', 'en', 'yue'), EN2, { recursive: true }); { const c = path.join(EN2, 'course.json'); const o = L.readJSON(c); o.native = 'es'; L.writeJSON(c, o); }
    const v0 = run('validate.js', ['es', 'yue'], d); const p = path.join(EN2, 'dialog.jsonl'); const rows = L.readJSONL(p); rows[0].tr += ' 學生'; L.writeJSONL(p, rows);
    const v = run('validate.js', ['es', 'yue'], d); const ok = v0.status === 0 && !/kept runs/.test(v0.stdout) && v.status === 1 && /dialog:yue\.g001\.tr: Han differs/.test(v.stdout); if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + 'yue: a learner language not written in Han (es) keeps the strict rule: added Han is an error'); }
}
/* ---------- an inventory "by marks" target: Spanish (target/es, docs/briefs/x-es-design.md) ----------
   The classifier (targets/_inventory.js) is unit-checked; a stand-in French half (a copy of the English half) must validate; each mutation of a marked span must be reported. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'es'))) {
  const eb = fresh('ebase'), EN = d => path.join(d, 'native', 'fr', 'es'), ES = L.target('es');
  { const ok1 = ES.isValue('Soy enfermero.') && ES.isValue('ñ') && ES.isValue('KAH-sah') && !ES.isValue('Short and pure, with no glide at the end') && !ES.isValue('the hotel') && ES.itemIsValue(['comes', 'come', 'como', 'comen'], 0);
    /* en-es is a TAGGED course (docs/briefs/target-text-tags.md): the spans are the ‹…› runs with their delimiters and nothing is guessed; a row's own
       word or a course word outside every tag is reported, never marked; a bold run in a body is a mark by position; a stray delimiter throws */
    const m = ES.marks('text', "You'll hear ‹la casa›; gente is singular, no.", ['la gente']), m2 = ES.marks('text', 'No ‹yo› needed: ‹me llamo›.', []), m3 = ES.marks('html', '<p><b>vosotros</b> and <strong>never</strong> ‹estar›</p>', []);
    let threw = 0; ['a ‹b', 'a ‹ b› c', '‹<b>x</b>›'].forEach(t => { try { ES.marks('text', t, []); } catch (e) { threw++; } });
    const ok2 = ES.tagged === true && m.spans.join('|') === '‹la casa›' && m.unmarked.join() === 'gente' && !m.unmarked.includes('ll') && m2.spans.join('|') === '‹yo›|‹me llamo›' && m2.unmarked.length === 0 && m3.spans.join('|') === '<b>vosotros</b>|‹estar›' && threw === 3;
    const hv = ES.inventory(); ES.reset(); const fromHalf = ES.inventory(); const ok3 = hv.lex.size === fromHalf.lex.size && hv.phrases.size === fromHalf.phrases.size;
    const ok = ok1 && ok2 && ok3; if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'es: inventory classifier (whole strings, per-item key, own-text spans, extra spans / not, contraction tails, half = pack inventory)' + (ok ? '' : ' ' + [ok1, ok2, ok3])); }
  fs.cpSync(path.join(eb, 'native', 'en', 'es'), EN(eb), { recursive: true }); { const c = path.join(EN(eb), 'course.json'); const o = L.readJSON(c); o.native = 'fr'; L.writeJSON(c, o); }
  const eedit = (d, f, fn) => { const p = path.join(EN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const ecases = [
    ['es: stand-in fr half (copy of the English) validates', d => { }, null],
    ['es: a Spanish phrase changed inside a bold span of a body', d => { const p = path.join(EN(d), 'lessons', 'gender.html'); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('<b>el perro</b>', '<b>le chien</b>')); }, /lessons\/gender\.html: marked Spanish text missing or altered: «<b>el perro<\/b>»/],
    ['es: a card front quoted in its own note is translated', d => eedit(d, 'cards.jsonl', rows => { const x = rows.find(r => r.id === 'es.c0003'); x.note = x.note.replace('gente', 'les gens'); return rows; }), /cards:es\.c0003\.note: marked Spanish text missing/],
    ['es: an answer word in a practice hint loses its ñ', d => eedit(d, 'practice.jsonl', rows => { const x = rows.find(r => r.id === 'sounds.14'); x.hint = x.hint.replace('niño', 'nino'); return rows; }), /practice:sounds\.14\.hint: marked Spanish text missing or altered: «‹niño›»/],
    ['es: a native half drops the tag delimiters around a kept word', d => eedit(d, 'cards.jsonl', rows => { const x = rows.find(r => r.id === 'es.c0003'); x.note = x.note.replace(/[‹›]/g, ''); return rows; }), /cards:es\.c0003\.note: marked Spanish text missing/],
    ['es: a practice answer smuggled into a native row', d => eedit(d, 'practice.jsonl', rows => { rows[0].a = ['x']; return rows; }), /field "a" is not a native field/]
  ];
  ecases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 'e' + Math.random().toString(36).slice(2)); fs.cpSync(eb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['fr', 'es'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  { const u = fs.readFileSync(path.join(L.HALVES, 'native', 'en', 'es', 'unmarked.tsv'), 'utf8').split('\n').filter(l => l.trim() && l[0] !== '#'), noX = !fs.existsSync(path.join(L.ROOT, 'tools', 'target', 'es', 'marks.extra.jsonl'));
    const ok = u.length === 0 && noX; if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'es: tagged course, no untagged Spanish in any prose field and no hand-kept side list' + (ok ? '' : ' ' + u.slice(0, 3).join(' | '))); }
  { const d = fresh('eclean'); const v = run('proof.js', ['es'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof es: target/es + native/en/es reassemble the en-es pack exactly'); }
}
/* ---------- a script target with two kana scripts and kanji: Japanese (target/ja, docs/briefs/x-ja-design.md) ----------
   The classifier (targets/ja.js) is unit-checked; a stand-in Spanish half (a copy of the English half) must validate; each mutation of a kana or kanji run must be reported. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'ja'))) {
  const JT = L.target('ja');
  { const ok = JT.isValue('すしを ください。') && JT.isValue('コーヒー') && JT.isValue('日本語') && JT.isValue('kyō') && JT.isValue('ji') && !JT.isValue('Four') && !JT.isValue('no') && !JT.isValue('sake') && !JT.isValue('あめ (rain) / あめ (candy)')
      && JT.runs('ES ねこ (gato), 日本 y コーヒー、ok').join('|') === 'ねこ|コーヒー|日本' && JT.kanaRuns('日本 ねこ 学生').join() === 'ねこ' && JSON.stringify(L.splitLead('ja', 'えき · いきます · わたし (I)')) === JSON.stringify({ lead: 'えき · いきます', sep: ' · ', note: 'わたし (I)' });
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'ja: classifier (kana + kanji runs, punctuation free, marked romaji only, split hints)'); }
  const jb = fresh('jbase'), JN = d => path.join(d, 'native', 'es', 'ja');
  fs.cpSync(path.join(jb, 'native', 'en', 'ja'), JN(jb), { recursive: true }); { const c = path.join(JN(jb), 'course.json'); const o = L.readJSON(c); o.native = 'es'; L.writeJSON(c, o); }
  const jedit = (d, f, fn) => { const p = path.join(JN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const jcases = [
    ['ja: stand-in es half (copy of the English) validates', d => { }, null],
    ['ja: a kana run changed in a card note', d => jedit(d, 'cards.jsonl', rows => { const x = rows.find(r => /[ぁ-ゖ]{2,}/.test(r.note)); x.note = x.note.replace(/[ぁ-ゖ]+/, 'XX'); return rows; }), /kana and kanji differs from the English · missing/],
    ['ja: katakana added to a dialogue translation', d => jedit(d, 'dialog.jsonl', rows => { rows[0].tr += ' コーヒー'; return rows; }), /dialog:ja\.g001\.tr: kana and kanji differs/],
    ['ja: a Japanese option slot overwritten', d => jedit(d, 'checks.jsonl', rows => { const x = rows.find(r => Array.isArray(r.o) && r.o.includes(null)); x.o[x.o.indexOf(null)] = 'hack'; return rows; }), /holds a Japanese option/],
    ['ja: kanji dropped from a lesson body', d => { const p = path.join(JN(d), 'lessons', 'kanji-first.html'); const h = fs.readFileSync(p, 'utf8'), run1 = h.replace(L.TOKEN_RX, ' ').match(/[一-鿿]+/)[0]; fs.writeFileSync(p, h.split(run1).join('X')); }, /lessons\/kanji-first\.html: kana and kanji differs/]
  ];
  jcases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 'j' + Math.random().toString(36).slice(2)); fs.cpSync(jb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['es', 'ja'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  { const d = fresh('jproof'); const p = path.join(d, 'target', 'ja', 'cards.jsonl'); const rows = L.readJSONL(p); rows[7].ja += 'ー'; L.writeJSONL(p, rows);
    const v = run('proof.js', ['ja'], d); const ok = v.status === 1 && /differences: [1-9]/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof ja detects an altered target ja card'); }
  { const d = fresh('jclean'); const v = run('proof.js', ['ja'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof ja: target/ja + native/en/ja reassemble the en-ja pack exactly'); }
}
/* ---------- a script-mode target with a romanised reading: Thai (target/th, docs/briefs/x-th-design.md) ----------
   The classifier is unit-checked; every classifier-decided slot of target/th holds Thai (no English); a fake Vietnamese half goes through
   mk_native --target th, --merge, validate and assemble; mutations of Thai runs and option slots are reported; the proof holds. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'th'))) {
  const TH = L.target('th');
  { const ok = TH.isValue('glai mâak') && TH.isValue('sà-wàt-dii') && TH.isValue('ไกล') && TH.isValue('t') && TH.isValue('khr') && !TH.isValue('noon') && !TH.isValue('mid') && !TH.isValue('Rising')
      && !TH.isValue('with a b') && !TH.isValue('ไกล (glai)') && TH.runs('ไก่ (gài) ข').join() === 'ข,ไก่' && L.splitLead('th', 'น้ำ · สอง · two bottles').note === 'two bottles';
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'th: classifier (Thai script, whole romanised readings, bare initials, "noon" and prose refused, lead · note split)'); }
  { const bad = [], T = path.join(L.HALVES, 'target', 'th'); /* the slots the classifier decides: check / mc options, hint leads, tile readings */
    L.readJSONL(path.join(T, 'checks.jsonl')).forEach(r => r.o.forEach(o => { if (o != null && !TH.isValue(o)) bad.push(r.id + ' ' + o); }));
    L.readJSONL(path.join(T, 'practice.jsonl')).forEach(r => { if (r.t === 'mc') (r.o || []).forEach(o => { if (o != null && !TH.isValue(o)) bad.push(r.id + ' ' + o); }); if (r.hint && !TH.isValue(r.hint.th)) bad.push(r.id + ' hint ' + r.hint.th); });
    L.readJSONL(path.join(T, 'lessons.jsonl')).forEach(l => (l.tiles || []).forEach(ts => ts.items.forEach(i => { if (i.r != null && !TH.isValue(i.r.replace(/_/g, ' '))) bad.push(ts.id + ' ' + i.r); })));
    const ok = !bad.length; if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'th: no English in target/th (every option, hint lead and tile reading is Thai or en-th romanization)' + (ok ? '' : ': ' + bad.slice(0, 5).join(' | '))); }
  const tb = fresh('tbase'), TN = d => path.join(d, 'native', 'vi', 'th');
  const mk = run('mk_native.js', ['vi', '--target', 'th'], tb); if (mk.status) throw new Error('mk_native vi --target th: ' + mk.stderr);
  const TW = path.join(TN(tb), 'work');
  fs.readdirSync(TW).forEach(f => {
    if (/^w(\d+|U)\.jsonl$/.test(f)) L.writeJSONL(path.join(TW, f), L.readJSONL(path.join(TW, f)).map(x => { x.tgt = x.src === '' ? '' : x.pre ? x.tgt : x.f === 'course' ? 'Tiếng Thái' : 'VI ' + x.src; return x; }));
    if (/^w\d+$/.test(f)) { const d = path.join(TW, f, 'lessons'); fs.readdirSync(d).filter(x => x.endsWith('.src.html')).forEach(x => fs.writeFileSync(path.join(d, x.replace('.src', '')), fs.readFileSync(path.join(d, x), 'utf8').replace(/<p>/g, '<p>VI '))); }
  });
  const mg = run('mk_native.js', ['vi', '--target', 'th', '--merge'], tb); if (mg.status) throw new Error('merge vi th: ' + mg.stderr);
  const tedit = (d, f, fn) => { const p = path.join(TN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const tcases = [
    ['th: clean fake vi half validates', d => { }, null],
    ['th: a Thai run dropped from a card note', d => tedit(d, 'cards.jsonl', rows => { const x = rows.find(r => /[฀-๿]/.test(r.note)); x.note = x.note.replace(/[฀-๿]+/, 'XX'); return rows; }), /Thai differs from the English · missing/],
    ['th: Thai added to a dialogue translation', d => tedit(d, 'dialog.jsonl', rows => { rows[0].tr += ' ครับ'; return rows; }), /dialog:th\.g001\.tr: Thai differs/],
    ['th: a romanised option slot overwritten', d => tedit(d, 'checks.jsonl', rows => { const x = rows.find(r => Array.isArray(r.o) && r.o.includes(null)); x.o[x.o.indexOf(null)] = 'hack'; return rows; }), /holds a Thai option/],
    ['th: Thai dropped from a lesson body', d => { const p = path.join(TN(d), 'lessons', 'tones.html'); const h = fs.readFileSync(p, 'utf8'), run1 = h.replace(L.TOKEN_RX, ' ').match(/[฀-๿]+/)[0]; fs.writeFileSync(p, h.split(run1).join('X')); }, /lessons\/tones\.html: Thai differs/]
  ];
  tcases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 't' + Math.random().toString(36).slice(2)); fs.cpSync(tb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['vi', 'th', '--all'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  { const out = path.join(tmp, 'course-vi-th.js'); const a = run('assemble.js', ['vi', 'th', out], tb); let ok = a.status === 0;
    if (ok) { const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(out, 'utf8'))(P); const c = P.course['vi-th'];
      ok = !!c && c.native === 'vi' && c.target === 'th' && c.ttsLang === 'th-TH' && c.accents === true && c.romaAlmost === true && c.tilesDefault === true && /ǎ/.test(c.keys) && /^VI /.test(c.TITLES[0][1]) && c.UI['Thai (required)'] === 'VI Thai (required)'; }
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'th: the filled vi half assembles (th-TH, accent keys, romaAlmost, titles, UI)' + (ok ? '' : '\n' + a.stdout + a.stderr)); }
  { const d = fresh('tproof'); const p = path.join(d, 'target', 'th', 'cards.jsonl'); const rows = L.readJSONL(p); rows[7].rom += 'x'; L.writeJSONL(p, rows);
    const v = run('proof.js', ['th'], d); const ok = v.status === 1 && /differences: [1-9]/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof th detects an altered romanization'); }
  { const d = fresh('tclean'); const v = run('proof.js', ['th'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof th: target/th + native/en/th reassemble the en-th pack exactly'); }
}
/* ---------- a script-mode target with harakat and a romanised reading: Arabic (target/ar, docs/briefs/x-ar-design.md) ----------
   Same shape as the Thai block. Extra: a dropped shadda / haraka inside a run is reported; Arabic punctuation (، ؟ ؛) is free. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'ar'))) {
  const AR = L.target('ar');
  { const ok = AR.isValue('hādhā kitāb') && AR.isValue('al-bayt') && AR.isValue('bint') && AR.isValue('بَيْت') && AR.isValue('ـبـ') && AR.isValue('٢٠') && !AR.isValue('always') && !AR.isValue('Right to left')
      && !AR.isValue('sometimes') && !AR.isValue('بَيْت (bayt)') && AR.runs('شُكْرًا، بَيْت (bayt)؟').join() === 'بَيْت,شُكْرًا' && AR.runs('سَيَّارَة').join() !== AR.runs('سَيَارَة').join() && L.splitLead('ar', 'بَيْت · house').note === 'house';
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'ar: classifier (Arabic script with harakat, tatweel and digits, whole romanised readings, "always" and prose refused, punctuation free, lead · note split)'); }
  { const bad = [], T = path.join(L.HALVES, 'target', 'ar');
    L.readJSONL(path.join(T, 'checks.jsonl')).forEach(r => r.o.forEach(o => { if (o != null && !AR.isValue(o)) bad.push(r.id + ' ' + o); }));
    L.readJSONL(path.join(T, 'practice.jsonl')).forEach(r => { if (r.t === 'mc') (r.o || []).forEach(o => { if (o != null && !AR.isValue(o)) bad.push(r.id + ' ' + o); }); if (r.hint && !AR.isValue(r.hint.ar)) bad.push(r.id + ' hint ' + r.hint.ar); });
    L.readJSONL(path.join(T, 'lessons.jsonl')).forEach(l => (l.tiles || []).forEach(ts => ts.items.forEach(i => { if (i.r != null && !AR.isValue(i.r.replace(/_/g, ' '))) bad.push(ts.id + ' ' + i.r); })));
    const ok = !bad.length; if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'ar: no English in target/ar (every option, hint lead and tile reading is Arabic or en-ar romanisation)' + (ok ? '' : ': ' + bad.slice(0, 5).join(' | '))); }
  const ab = fresh('abase'), AN = d => path.join(d, 'native', 'vi', 'ar');
  const mk = run('mk_native.js', ['vi', '--target', 'ar'], ab); if (mk.status) throw new Error('mk_native vi --target ar: ' + mk.stderr);
  const AW = path.join(AN(ab), 'work');
  fs.readdirSync(AW).forEach(f => {
    if (/^w(\d+|U)\.jsonl$/.test(f)) L.writeJSONL(path.join(AW, f), L.readJSONL(path.join(AW, f)).map(x => { x.tgt = x.src === '' ? '' : x.pre ? x.tgt : x.f === 'course' ? 'Tiếng Ả Rập' : 'VI ' + x.src; return x; }));
    if (/^w\d+$/.test(f)) { const d = path.join(AW, f, 'lessons'); fs.readdirSync(d).filter(x => x.endsWith('.src.html')).forEach(x => fs.writeFileSync(path.join(d, x.replace('.src', '')), fs.readFileSync(path.join(d, x), 'utf8').replace(/<p>/g, '<p>VI '))); }
  });
  const mg = run('mk_native.js', ['vi', '--target', 'ar', '--merge'], ab); if (mg.status) throw new Error('merge vi ar: ' + mg.stderr);
  const aedit = (d, f, fn) => { const p = path.join(AN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const ARX = /[ؠ-ي][ً-ْٰ]*/;
  const acases = [
    ['ar: clean fake vi half validates', d => { }, null],
    ['ar: Arabic punctuation added to a note is free', d => aedit(d, 'cards.jsonl', rows => { const x = rows.find(r => /[ؠ-ي]/.test(r.note)); x.note += ' ،؟'; return rows; }), null],
    ['ar: an Arabic run dropped from a card note', d => aedit(d, 'cards.jsonl', rows => { const x = rows.find(r => /[ؠ-ي]/.test(r.note)); x.note = x.note.replace(/[ؠ-ٰٟ]+/, 'XX'); return rows; }), /Arabic differs from the English · missing/],
    ['ar: a shadda dropped inside a note run', d => aedit(d, 'cards.jsonl', rows => { const x = rows.find(r => /ّ/.test(r.note || '')); x.note = x.note.replace('ّ', ''); return rows; }), /Arabic differs from the English/],
    ['ar: Arabic added to a dialogue translation', d => aedit(d, 'dialog.jsonl', rows => { rows[0].tr += ' شُكْرًا'; return rows; }), /dialog:ar\.g001\.tr: Arabic differs/],
    ['ar: an option slot overwritten', d => aedit(d, 'checks.jsonl', rows => { const x = rows.find(r => Array.isArray(r.o) && r.o.includes(null)); x.o[x.o.indexOf(null)] = 'hack'; return rows; }), /holds a Arabic option/],
    ['ar: Arabic dropped from a lesson body', d => { const p = path.join(AN(d), 'lessons', 'letters.html'); const h = fs.readFileSync(p, 'utf8'), run1 = h.replace(L.TOKEN_RX, ' ').match(ARX)[0]; fs.writeFileSync(p, h.split(run1).join('X')); }, /lessons\/letters\.html: Arabic differs/]
  ];
  acases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 'a' + Math.random().toString(36).slice(2)); fs.cpSync(ab, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['vi', 'ar', '--all'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  { const out = path.join(tmp, 'course-vi-ar.js'); const a = run('assemble.js', ['vi', 'ar', out], ab); let ok = a.status === 0;
    if (ok) { const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(out, 'utf8'))(P); const c = P.course['vi-ar'];
      ok = !!c && c.native === 'vi' && c.target === 'ar' && c.ttsLang === 'ar-SA' && c.accents === true && c.romaAlmost === true && c.tilesDefault === true && /ḥ/.test(c.keys) && /^VI /.test(c.TITLES[0][1]) && c.UI['Arabic (required)'] === 'VI Arabic (required)'; }
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'ar: the filled vi half assembles (ar-SA, accent keys, romaAlmost, titles, UI)' + (ok ? '' : '\n' + a.stdout + a.stderr)); }
  { const d = fresh('aproof'); const p = path.join(d, 'target', 'ar', 'cards.jsonl'); const rows = L.readJSONL(p); rows[7].rom += 'x'; L.writeJSONL(p, rows);
    const v = run('proof.js', ['ar'], d); const ok = v.status === 1 && /differences: [1-9]/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof ar detects an altered romanisation'); }
  { const d = fresh('aclean'); const v = run('proof.js', ['ar'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof ar: target/ar + native/en/ar reassemble the en-ar pack exactly'); }
}
/* ---------- a script-mode target in Ethiopic with a romanised reading: Amharic (target/am, docs/briefs/x-am-design.md) ----------
   Same shape as the Arabic block. Extra: one fidel swapped inside a run (ሀ / ሐ, same sound) is reported; Ethiopic punctuation (። ፣ ፧) is free;
   the en-am English options that pronPattern accepts ("tea", "he said") are prose. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'am'))) {
  const AM = L.target('am');
  { const ok = AM.isValue('dehna neh') && AM.isValue("t'ewat") && AM.isValue('bunna bét') && AM.isValue("yih mets'haf new.") && AM.isValue('ቤት') && AM.isValue('ይህ ቤቴ ነው።') && !AM.isValue('tea') && !AM.isValue('he said')
      && !AM.isValue('g') && !AM.isValue('A consonant plus a vowel') && !AM.isValue('ቤት (bét)') && AM.runs('ሰላም፣ ቤት (bét)።').join() === 'ሰላም,ቤት' && AM.runs('ሀሙስ').join() !== AM.runs('ሐሙስ').join() && L.splitLead('am', 'ደህና · ነህ · man form').note === 'man form';
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'am: classifier (Ethiopic runs, whole romanised readings, English homographs and prose refused, punctuation free, lead · note split)'); }
  { const bad = [], T = path.join(L.HALVES, 'target', 'am');
    L.readJSONL(path.join(T, 'checks.jsonl')).forEach(r => r.o.forEach(o => { if (o != null && !AM.isValue(o)) bad.push(r.id + ' ' + o); }));
    L.readJSONL(path.join(T, 'practice.jsonl')).forEach(r => { if (r.t === 'mc') (r.o || []).forEach(o => { if (o != null && !AM.isValue(o)) bad.push(r.id + ' ' + o); }); if (r.hint && !AM.isValue(r.hint.am)) bad.push(r.id + ' hint ' + r.hint.am); });
    L.readJSONL(path.join(T, 'lessons.jsonl')).forEach(l => (l.tiles || []).forEach(ts => ts.items.forEach(i => { if (i.r != null && !AM.isValue(i.r.replace(/_/g, ' '))) bad.push(ts.id + ' ' + i.r); })));
    const ok = !bad.length; if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'am: no English in target/am (every option, hint lead and tile reading is Ethiopic or en-am romanisation)' + (ok ? '' : ': ' + bad.slice(0, 5).join(' | '))); }
  const mb = fresh('mbase'), MN = d => path.join(d, 'native', 'vi', 'am');
  const mk = run('mk_native.js', ['vi', '--target', 'am'], mb); if (mk.status) throw new Error('mk_native vi --target am: ' + mk.stderr);
  const MW = path.join(MN(mb), 'work');
  fs.readdirSync(MW).forEach(f => {
    if (/^w(\d+|U)\.jsonl$/.test(f)) L.writeJSONL(path.join(MW, f), L.readJSONL(path.join(MW, f)).map(x => { x.tgt = x.src === '' ? '' : x.pre ? x.tgt : x.f === 'course' ? 'Tiếng Amhara' : 'VI ' + x.src; return x; }));
    if (/^w\d+$/.test(f)) { const d = path.join(MW, f, 'lessons'); fs.readdirSync(d).filter(x => x.endsWith('.src.html')).forEach(x => fs.writeFileSync(path.join(d, x.replace('.src', '')), fs.readFileSync(path.join(d, x), 'utf8').replace(/<p>/g, '<p>VI '))); }
  });
  const mg = run('mk_native.js', ['vi', '--target', 'am', '--merge'], mb); if (mg.status) throw new Error('merge vi am: ' + mg.stderr);
  const medit = (d, f, fn) => { const p = path.join(MN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const ETX = /[ሀ-ፚ]+/;
  const mcases = [
    ['am: clean fake vi half validates', d => { }, null],
    ['am: Ethiopic punctuation added to a note is free', d => medit(d, 'cards.jsonl', rows => { const x = rows.find(r => ETX.test(r.note)); x.note += ' ።፣፧'; return rows; }), null],
    ['am: an Ethiopic run dropped from a card note', d => medit(d, 'cards.jsonl', rows => { const x = rows.find(r => ETX.test(r.note)); x.note = x.note.replace(ETX, 'XX'); return rows; }), /Ethiopic differs from the English · missing/],
    ['am: one fidel swapped inside a note run (ሀ / ሐ)', d => medit(d, 'cards.jsonl', rows => { const x = rows.find(r => /ሀ/.test(r.note || '')); x.note = x.note.replace('ሀ', 'ሐ'); return rows; }), /Ethiopic differs from the English/],
    ['am: Amharic added to a dialogue translation', d => medit(d, 'dialog.jsonl', rows => { rows[0].tr += ' ሰላም'; return rows; }), /dialog:am\.g001\.tr: Ethiopic differs/],
    ['am: an option slot overwritten', d => medit(d, 'checks.jsonl', rows => { const x = rows.find(r => Array.isArray(r.o) && r.o.includes(null)); x.o[x.o.indexOf(null)] = 'hack'; return rows; }), /holds a Amharic option/],
    ['am: Amharic dropped from a lesson body', d => { const p = path.join(MN(d), 'lessons', 'orders.html'); const h = fs.readFileSync(p, 'utf8'), run1 = h.replace(L.TOKEN_RX, ' ').match(ETX)[0]; fs.writeFileSync(p, h.split(run1).join('X')); }, /lessons\/orders\.html: Ethiopic differs/]
  ];
  mcases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 'm' + Math.random().toString(36).slice(2)); fs.cpSync(mb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['vi', 'am', '--all'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  { const out = path.join(tmp, 'course-vi-am.js'); const a = run('assemble.js', ['vi', 'am', out], mb); let ok = a.status === 0;
    if (ok) { const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(out, 'utf8'))(P); const c = P.course['vi-am'];
      ok = !!c && c.native === 'vi' && c.target === 'am' && c.ttsLang === 'am-ET' && c.accents === true && c.romaAlmost === true && c.tilesDefault === true && c.keys === '' && /^VI /.test(c.TITLES[0][1]) && c.UI['Amharic (required)'] === 'VI Amharic (required)'; }
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'am: the filled vi half assembles (am-ET, romaAlmost, tilesDefault, titles, UI)' + (ok ? '' : '\n' + a.stdout + a.stderr)); }
  { const d = fresh('mproof'); const p = path.join(d, 'target', 'am', 'cards.jsonl'); const rows = L.readJSONL(p); rows[7].rom += 'x'; L.writeJSONL(p, rows);
    const v = run('proof.js', ['am'], d); const ok = v.status === 1 && /differences: [1-9]/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof am detects an altered romanisation'); }
  { const d = fresh('mclean'); const v = run('proof.js', ['am'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof am: target/am + native/en/am reassemble the en-am pack exactly'); }
}
/* ---------- a script target with a Latin reading taught in answer slots: Taiwanese Hokkien (target/nan, docs/briefs/x-nan-design.md) ----------
   The classifier (targets/nan.js) is unit-checked, including Han outside the BMP (𠢕, 𪜶) and the fill prompts that go native (fillSplit / qk);
   a fake Vietnamese half goes through mk_native → merge → validate → assemble; each mutation must be reported. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'nan'))) {
  const NT = L.target('nan');
  { const ok = NT.isValue('你好') && NT.isValue('𠢕早') && NT.isValue('tshù') && NT.isValue('bah') && NT.isValue('tsia̍h-pn̄g') && NT.isValue('m̄ sī') && NT.isValue('chhù') && NT.isValue('to')
      && !NT.isValue('spin') && !NT.isValue('pin') && !NT.isValue('too') && !NT.isValue('Two separate words') && !NT.isValue('g, as in gû (牛)') && !NT.isValue('é of café')
      && NT.runs('VI 阿伯𠢕早 (tsá), 𪜶').join('|') === '阿伯𠢕早|𪜶' && JSON.stringify(NT.fillSplit('火車 (train), as spelled: __-tshia')) === '["__-tshia"]' && NT.fillSplit('Tâi-lô for 厝: __').length === 0
      && NT.fillSplit('我 __ 學生。') === null && NT.fillSplit('Guá __ tsia̍h-pá.') === null && L.splitLead('nan', '厝 · house').note === 'house';
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'nan: classifier (Han incl. supplementary planes, whole Tâi-lô only, English homographs refused, fill prompts split)'); }
  { const bad = [], T = path.join(L.HALVES, 'target', 'nan');
    L.readJSONL(path.join(T, 'checks.jsonl')).forEach(r => r.o.forEach(o => { if (o != null && !NT.isValue(o)) bad.push(r.id + ' ' + o); }));
    L.readJSONL(path.join(T, 'practice.jsonl')).forEach(r => { if (r.t === 'mc') (r.o || []).forEach(o => { if (o != null && !NT.isValue(o)) bad.push(r.id + ' ' + o); }); if (r.hint && !NT.isValue(r.hint.nan)) bad.push(r.id + ' hint ' + r.hint.nan); if (r.t === 'fill' && r.q != null && NT.fillSplit(r.q)) bad.push(r.id + ' q ' + r.q); });
    const ok = !bad.length; if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'nan: no English in target/nan (options, hint leads, fill prompts)' + (ok ? '' : ': ' + bad.slice(0, 5).join(' | '))); }
  const nb = fresh('nbase'), NN = d => path.join(d, 'native', 'vi', 'nan');
  const mk = run('mk_native.js', ['vi', '--target', 'nan'], nb); if (mk.status) throw new Error('mk_native vi --target nan: ' + mk.stderr);
  const NW = path.join(NN(nb), 'work');
  fs.readdirSync(NW).forEach(f => {
    if (/^w(\d+|U)\.jsonl$/.test(f)) L.writeJSONL(path.join(NW, f), L.readJSONL(path.join(NW, f)).map(x => { x.tgt = x.src === '' ? '' : x.pre ? x.tgt : x.f === 'course' ? 'Tiếng Đài Loan' : 'VI ' + x.src; return x; }));
    if (/^w\d+$/.test(f)) { const d = path.join(NW, f, 'lessons'); fs.readdirSync(d).filter(x => x.endsWith('.src.html')).forEach(x => fs.writeFileSync(path.join(d, x.replace('.src', '')), fs.readFileSync(path.join(d, x), 'utf8').replace(/<p>/g, '<p>VI '))); }
  });
  const nm = run('mk_native.js', ['vi', '--target', 'nan', '--merge'], nb); if (nm.status) throw new Error('merge vi nan: ' + nm.stderr);
  const nedit = (d, f, fn) => { const p = path.join(NN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const ncases = [
    ['nan: clean fake vi half validates', d => { }, null],
    ['nan: a supplementary-plane character (𠢕) dropped from a card note', d => nedit(d, 'cards.jsonl', rows => { const x = rows.find(r => /𠢕/.test(r.note || '')); x.note = x.note.split('𠢕').join(''); return rows; }), /Han differs from the English · missing/],
    ['nan: Han added to a dialogue translation', d => nedit(d, 'dialog.jsonl', rows => { rows[0].tr += ' 多謝'; return rows; }), /dialog:nan\.g001\.tr: Han differs/],
    ['nan: a Taiwanese option slot overwritten', d => nedit(d, 'practice.jsonl', rows => { const x = rows.find(r => Array.isArray(r.o) && r.o.includes(null)); x.o[x.o.indexOf(null)] = 'hack'; return rows; }), /holds a Taiwanese option/],
    ['nan: the Tâi-lô around a blank altered in a native fill prompt', d => nedit(d, 'practice.jsonl', rows => { const x = rows.find(r => /__-tshia/.test(r.q || '')); x.q = x.q.replace('__-tshia', '__-tsia'); return rows; }), /text around the blank missing or altered: «__-tshia»/]
  ];
  ncases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 'n' + Math.random().toString(36).slice(2)); fs.cpSync(nb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['vi', 'nan', '--all'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  { const out = path.join(tmp, 'course-vi-nan.js'); const a = run('assemble.js', ['vi', 'nan', out], nb); let ok = a.status === 0;
    if (ok) { const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(out, 'utf8'))(P); const c = P.course['vi-nan'];
      const f = c && c.PRACTICE.initials.find(x => x.t === 'fill');
      ok = !!c && c.native === 'vi' && c.target === 'nan' && c.ttsLang === 'nan-TW' && c.accents === true && c.romaAlmost === true && c.tilesDefault === true && c.noAudio === true && /^VI /.test(c.TITLES[0][1]) && !!f && /^VI .*厝: __$/.test(f.q); }
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'nan: the filled vi half assembles (nan-TW, accents, romaAlmost, noAudio, titles, native fill prompt)' + (ok ? '' : '\n' + a.stdout + a.stderr)); }
  { const d = fresh('nproof'); const p = path.join(d, 'target', 'nan', 'cards.jsonl'); const rows = L.readJSONL(p); rows[7].rom += 'h'; L.writeJSONL(p, rows);
    const v = run('proof.js', ['nan'], d); const ok = v.status === 1 && /differences: [1-9]/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof nan detects an altered Tâi-lô reading'); }
  { const d = fresh('nclean'); const v = run('proof.js', ['nan'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof nan: target/nan + native/en/nan reassemble the en-nan pack exactly'); }
}
fs.rmSync(tmp, { recursive: true, force: true });
console.log(fail ? fail + ' FAILED' : 'all self-tests passed'); process.exit(fail ? 1 : 0);
