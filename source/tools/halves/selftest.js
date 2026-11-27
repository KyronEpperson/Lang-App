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
  { const d = fresh('vclean'); const v = run('proof.js', ['vi'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof vi: target/vi + native/en/vi reassemble the en-vi pack exactly'); }
}
/* ---------- an inventory "by marks" target: Spanish (target/es, docs/briefs/x-es-design.md) ----------
   The classifier (targets/_inventory.js) is unit-checked; a stand-in French half (a copy of the English half) must validate; each mutation of a marked span must be reported. */
if (fs.existsSync(path.join(L.HALVES, 'target', 'es'))) {
  const eb = fresh('ebase'), EN = d => path.join(d, 'native', 'fr', 'es'), ES = L.target('es');
  { const ok1 = ES.isValue('Soy enfermero.') && ES.isValue('ñ') && ES.isValue('KAH-sah') && !ES.isValue('Short and pure, with no glide at the end') && !ES.isValue('the hotel') && ES.itemIsValue(['comes', 'come', 'como', 'comen'], 0);
    const m = ES.marks('text', "You'll hear la casa; gente is singular, no.", ['la gente'], { spans: ['la casa'], not: [] }), m2 = ES.marks('text', 'gente', ['la gente'], { not: ['gente'] });
    const ok2 = m.spans.join('|') === 'la casa|gente' && !m.unmarked.includes('ll') && m2.spans.length === 0 && m2.unmarked.join() === 'gente';
    const hv = ES.inventory(); ES.reset(); const fromHalf = ES.inventory(); const ok3 = hv.lex.size === fromHalf.lex.size && hv.phrases.size === fromHalf.phrases.size;
    const ok = ok1 && ok2 && ok3; if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'es: inventory classifier (whole strings, per-item key, own-text spans, extra spans / not, contraction tails, half = pack inventory)' + (ok ? '' : ' ' + [ok1, ok2, ok3])); }
  fs.cpSync(path.join(eb, 'native', 'en', 'es'), EN(eb), { recursive: true }); { const c = path.join(EN(eb), 'course.json'); const o = L.readJSON(c); o.native = 'fr'; L.writeJSON(c, o); }
  const eedit = (d, f, fn) => { const p = path.join(EN(d), f); L.writeJSONL(p, fn(L.readJSONL(p))); };
  const ecases = [
    ['es: stand-in fr half (copy of the English) validates', d => { }, null],
    ['es: a Spanish phrase changed inside a bold span of a body', d => { const p = path.join(EN(d), 'lessons', 'gender.html'); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('<b>el perro</b>', '<b>le chien</b>')); }, /lessons\/gender\.html: marked Spanish text missing or altered: «<b>el perro<\/b>»/],
    ['es: a card front quoted in its own note is translated', d => eedit(d, 'cards.jsonl', rows => { const x = rows.find(r => r.id === 'es.c0003'); x.note = x.note.replace('gente', 'les gens'); return rows; }), /cards:es\.c0003\.note: marked Spanish text missing/],
    ['es: an answer word in a practice hint loses its ñ', d => eedit(d, 'practice.jsonl', rows => { const x = rows.find(r => r.id === 'sounds.14'); x.hint = x.hint.replace('niño', 'nino'); return rows; }), /practice:sounds\.14\.hint: marked Spanish text missing or altered: «niño»/],
    ['es: a practice answer smuggled into a native row', d => eedit(d, 'practice.jsonl', rows => { rows[0].a = ['x']; return rows; }), /field "a" is not a native field/]
  ];
  ecases.forEach(([name, mut, want]) => {
    const d = path.join(tmp, 'e' + Math.random().toString(36).slice(2)); fs.cpSync(eb, d, { recursive: true }); mut(d);
    const v = run('validate.js', ['fr', 'es'], d), out = v.stdout + v.stderr;
    const ok = want ? (v.status === 1 && want.test(out)) : v.status === 0;
    if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '\n' + out.split('\n').filter(l => /ERROR|errors:|Error/.test(l)).slice(0, 5).join('\n')));
  });
  { const d = fresh('eclean'); const v = run('proof.js', ['es'], d); const ok = v.status === 0 && /differences: 0/.test(v.stdout); if (!ok) fail++; console.log((ok ? 'ok   ' : 'FAIL ') + 'proof es: target/es + native/en/es reassemble the en-es pack exactly'); }
}
fs.rmSync(tmp, { recursive: true, force: true });
console.log(fail ? fail + ' FAILED' : 'all self-tests passed'); process.exit(fail ? 1 : 0);
