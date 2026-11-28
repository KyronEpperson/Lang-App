#!/usr/bin/env node
/* Lang App · two halves: TARGET-TEXT TAGS in the course source (docs/briefs/target-text-tags.md).
   A tagged course writes every piece of target-language text that sits inside learner-language prose between ‹ and › (U+2039 / U+203A):
       A little more formal than ‹me llamo›.
   The pack keeps the delimiters; the app shows the run as highlighted, tappable target text; export_target.js records the runs as the marks of the
   native half, so nothing is guessed and no side list is kept by hand.

     node tools/halves/tags.js propose <t> <out.jsonl>   draft: wraps what the (untagged) classifier marks or reports; a judge then reads every line
     node tools/halves/tags.js sheet   <t> <out.jsonl>   every prose field of the English half as it stands now: {f, id, k, text}
     node tools/halves/tags.js apply   <t> <rows.jsonl>  rows {f, id, k, text}: writes them into tools/target/<t>/ and regenerates the pack. Refuses a
                                                         row that changes anything but tags (bold ↔ tag counts as a tag change), and any outcome in
                                                         which a target-side field moved. --edit lifts the first check for that run (real rewrites).
     node tools/halves/tags.js lint    <t>               0 unmarked words, 0 stray delimiters (the release test) */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const L = require('./lib.js');
const [cmd, TG, FILE] = process.argv.slice(2), EDIT = process.argv.includes('--edit');
if (!cmd || !TG) { console.error('usage: node tools/halves/tags.js propose|sheet|apply|lint <target> [file]'); process.exit(2); }
const SRC = path.join(L.ROOT, 'tools', 'target', TG);
const key = r => r.f + '\u0001' + r.id + '\u0001' + r.k;
const strip = s => String(s).replace(/[‹›]/g, '');
const norm = (kind, s) => kind === 'html' ? strip(s).replace(/<\/?(b|strong)>/g, '') : strip(s); /* bold ↔ tag ↔ strong is a change of marking, not of text */

/* the fields of the English half exactly as export_target.js scans them, from a scratch copy of the halves (the real ones are not touched) */
function dump() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'tags-')), out = path.join(tmp, 'dump.jsonl');
  cp.execSync('cp -a ' + JSON.stringify(L.HALVES + '/target') + ' ' + JSON.stringify(L.HALVES + '/native') + ' ' + JSON.stringify(tmp));
  const r = cp.spawnSync('node', [path.join(__dirname, 'export_target.js'), TG], { env: Object.assign({}, process.env, { HALVES_DIR: tmp, HALVES_MARKS_DUMP: out }), encoding: 'utf8' });
  if (r.status !== 0) { console.error(r.stdout + r.stderr); throw new Error('export_target.js ' + TG + ' failed'); }
  const rows = L.readJSONL(out), targetFiles = {};
  fs.readdirSync(path.join(tmp, 'target', TG)).filter(f => f !== 'marks.jsonl').forEach(f => { const p = path.join(tmp, 'target', TG, f); if (fs.statSync(p).isFile()) targetFiles[f] = fs.readFileSync(p, 'utf8').replace(/"sha256_16": "[0-9a-f]+"/, ''); /* course.json carries a hash of the whole pack */ });
  fs.rmSync(tmp, { recursive: true, force: true });
  return { rows, targetFiles, log: r.stdout };
}

function propose(r) {
  const s = r.text, ops = [];
  (r.ranges || []).forEach(([a, b, how]) => { if (how === 'b') ops.push([a, b, '‹' + s.slice(a + 3, b - 4) + '›', 'b']); else if (how === 'own' || how === 'prx' || how === 'extra') ops.push([a, b, null, 'w']); });
  (r.lint || []).forEach(([a, b, how]) => { if (how === 'lex') ops.push([a, b, null, 'w']); });
  ops.sort((x, y) => x[0] - y[0]);
  /* neighbouring words become one run: "‹me› ‹llamo›" → "‹me llamo›" (never across a former bold run: those are separate taught items) */
  const merged = [];
  ops.forEach(o => { const p = merged[merged.length - 1]; if (p && p[3] === 'w' && o[3] === 'w' && s.slice(p[1], o[0]) === ' ') p[1] = o[1]; else merged.push(o.slice()); });
  /* the opening ¿ ¡ and the closing ? ! of a quoted question belong to it */
  merged.forEach(o => { if (o[3] !== 'w') return; if (/[¿¡]/.test(s[o[0] - 1] || '')) o[0]--; const open = s[o[0]]; if ((open === '¿' && s[o[1]] === '?') || (open === '¡' && s[o[1]] === '!')) o[1]++; });
  let out = '', at = 0;
  merged.forEach(([a, b, rep]) => { if (a < at) return; out += s.slice(at, a) + (rep == null ? '‹' + s.slice(a, b) + '›' : rep); at = b; });
  return out + s.slice(at);
}

/* ---- writing a new field text into the hand-written source files ---- */
const files = () => fs.readdirSync(SRC).filter(f => /^(decks|extra|lessons)[-\w]*\.js$/.test(f) || f === 'profile.json').map(f => path.join(SRC, f));
const encs = v => [...new Set([v, JSON.stringify(v).slice(1, -1), v.replace(/\\/g, '\\\\').replace(/'/g, "\\'"), v.replace(/\\/g, '\\\\').replace(/`/g, '\\`')])];
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/* a value stands between string quotes, or is one field of a " | " row inside a template literal */
function replaceValue(text, oldV, newV, ctx) {
  let n = 0; const eo = encs(oldV), en = encs(newV);
  /* ctx 'row': a field of a " | " row; 'str': a quoted string; 'ex': the meaning of an {{ex:text|line|meaning}} row */
  const pre = ctx === 'row' ? '(\\| )' : ctx === 'ex' ? '(\\|)' : '(["\'`])', post = ctx === 'row' ? '(?= \\||[ \\t]*\\n)' : ctx === 'ex' ? '(?=\\}\\})' : '(?=["\'`])';
  eo.forEach((o, i) => { if (i && ctx !== 'str') return; const rx = new RegExp(pre + esc(o) + post, 'g'); text = text.replace(rx, (m, p1) => { n++; return p1 + en[i]; }); });
  return { text, n };
}
/* where a field of the English half is written in tools/target/<t>/: [file name test, context] */
const HOME = { cards: [/^decks/, 'row'], dialog: [/^extra/, 'row'], examples: [/^extra/, 'row'], patterns: [/^extra/, 'row'], decks: [/^profile/, 'str'], groups: [/^profile/, 'str'], labels: [/^profile/, 'str'],
  sentences: [/^lessons/, 'ex'], lessons: [/^lessons/, 'str'], checks: [/^lessons/, 'str'], practice: [/^lessons/, 'str'], lessoncards: [/^lessons/, 'str'] };
/* a lesson body: the pack holds the source body trimmed, with its line breaks removed. The new text is cut at the same places (measured on the text
   without tags or bold); a closing mark stays on the line it closes. */
function replaceBody(text, oldV, newV) {
  /* the halves write an example row as {{ex:<id>}} where the source has {{ex:text|line|meaning}}: any {{…}} token matches any other, and the source's
     own token is written back */
  const first = oldV.slice(0, Math.min(60, (oldV + '{{').indexOf('{{'))); let from = -1, n = 0, hit = null;
  if (first.length < 12) throw new Error('body starts with a token; cannot anchor it');
  while ((from = text.indexOf(first, from + 1)) >= 0) { let i = from, j = 0; const breaks = [], toks = [];
    while (j < oldV.length && i < text.length) { if (text[i] === '\n') { breaks.push(j); i++; continue; }
      if (oldV.startsWith('{{', j) && text.startsWith('{{', i)) { const e1 = oldV.indexOf('}}', j), e2 = text.indexOf('}}', i); if (e1 < 0 || e2 < 0) break; toks.push(text.slice(i, e2 + 2)); j = e1 + 2; i = e2 + 2; continue; }
      if (text[i] !== oldV[j]) break; i++; j++; }
    if (j === oldV.length) { n++; hit = { from, to: i, breaks, toks }; } }
  if (n !== 1) return { text, n };
  const TOKS = /\{\{[^}]*\}\}/g, N = s => norm('html', s), cuts = hit.breaks.map(b => N(oldV.slice(0, b)).length);
  if ((newV.match(TOKS) || []).join('') !== (oldV.match(TOKS) || []).join('')) throw new Error('body rewrite: the {{…}} tokens changed');
  let out = '', k = 0, nl = 0, i = 0, tk = 0; const tokAt = p => { const m = newV.slice(p).match(/^(‹|›|<\/?(?:b|strong)>)/); return m ? m[0] : null; };
  while (i <= newV.length) { while (k < cuts.length && nl === cuts[k]) { let t; while ((t = tokAt(i)) && (t === '›' || t === '</b>' || t === '</strong>')) { out += t; i += t.length; } out += '\n'; k++; }
    if (i >= newV.length) break; const t = tokAt(i); if (t) { out += t; i += t.length; continue; }
    if (newV.startsWith('{{', i)) { const e = newV.indexOf('}}', i) + 2; out += hit.toks[tk++]; nl += e - i; i = e; continue; }
    out += newV[i++]; nl++; }
  if (k !== cuts.length || tk !== hit.toks.length) throw new Error('body rewrite lost text');
  return { text: text.slice(0, hit.from) + out + text.slice(hit.to), n: 1 };
}

if (cmd === 'propose') {
  if (L.target(TG).tagged) throw new Error(TG + ' is already tagged: propose is the one-time draft for an untagged course');
  const d = dump(), out = []; d.rows.forEach(r => { const t = propose(r); if (t !== r.text) out.push({ f: r.f, id: r.id, k: r.k, text: t }); });
  L.writeJSONL(FILE, out); console.log('proposed tags for ' + out.length + ' of ' + d.rows.length + ' fields → ' + FILE);
} else if (cmd === 'sheet') {
  const d = dump(); L.writeJSONL(FILE, d.rows.map(r => ({ f: r.f, id: r.id, k: r.k, text: r.text }))); console.log(d.rows.length + ' fields → ' + FILE);
} else if (cmd === 'lint') {
  const d = dump(); const bad = d.rows.filter(r => (r.lint || []).length);
  bad.slice(0, 40).forEach(r => console.log('  ' + r.f + ':' + r.id + '.' + r.k + '  ' + r.lint.map(x => x[2] + ' «' + x[3] + '»').join(' ')));
  const tags = d.rows.reduce((a, r) => a + (r.text.match(/‹/g) || []).length, 0);
  console.log(TG + ': ' + tags + ' tagged runs in ' + d.rows.filter(r => r.text.includes('‹')).length + ' fields; ' + bad.length + ' field(s) with untagged target text');
  process.exit(bad.length ? 1 : 0);
} else if (cmd === 'apply') {
  const before = dump(), cur = new Map(before.rows.map(r => [key(r), r])), want = L.readJSONL(FILE), errs = [];
  const todo = [];
  want.forEach(w => { if (w.f === 'body' && !w.k) w.k = 'body'; const c = cur.get(key(w)); if (!c) { errs.push('no field ' + w.f + ':' + w.id + '.' + w.k); return; }
    /* a long field may come as edits [[old snippet, new snippet], …]; each old snippet must stand exactly once in the text as it is then */
    if (w.text == null && Array.isArray(w.edits)) { let t = c.text; w.edits.forEach(([o, n]) => { const i = t.indexOf(o); if (i < 0 || t.indexOf(o, i + 1) >= 0) { errs.push('edit: «' + String(o).slice(0, 80) + '» stands ' + (i < 0 ? 'nowhere' : 'more than once') + ' in ' + w.f + ':' + w.id + '.' + w.k); return; } t = t.slice(0, i) + n + t.slice(i + o.length); }); w.text = t; }
    if (c.text === w.text) return;
    if (!EDIT && norm(c.kind, c.text) !== norm(c.kind, w.text)) { errs.push('not a tag-only change: ' + w.f + ':' + w.id + '.' + w.k + '\n     was  ' + c.text.slice(0, 200) + '\n     new  ' + w.text.slice(0, 200)); return; }
    if ((w.text.match(/‹/g) || []).length !== (w.text.match(/‹[^‹›<>{}|]*[^‹›<>{}|\s]›/g) || []).length || (w.text.match(/›/g) || []).length !== (w.text.match(/‹/g) || []).length) { errs.push('bad delimiters: ' + w.f + ':' + w.id + '.' + w.k + '  ' + w.text.slice(0, 200)); return; }
    todo.push({ c, w }); });
  if (errs.length) { console.error(errs.join('\n')); console.error(errs.length + ' row(s) refused; nothing written'); process.exit(1); }
  if (process.argv.includes('--dry')) { console.log('ok: ' + todo.length + ' row(s) would change, all tag-only and well formed (nothing written)'); process.exit(0); }
  /* identical old text must get identical new text (one replacement serves every place it stands) */
  const map = new Map(); todo.forEach(({ c, w }) => { const hm = HOME[w.f] || [/./, 'str'], k = c.kind + '\u0001' + hm[0].source + hm[1] + '\u0001' + c.text; if (map.has(k) && map.get(k).text !== w.text) errs.push('same text, two taggings: «' + c.text.slice(0, 120) + '»  →  «' + map.get(k).text.slice(0, 120) + '»  |  «' + w.text.slice(0, 120) + '»'); map.set(k, { kind: c.kind, old: c.text, text: w.text, id: w.f + ':' + w.id + '.' + w.k }); });
  if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
  const texts = new Map(files().map(f => [f, fs.readFileSync(f, 'utf8')])), saved = new Map(texts);
  /* longest first, so a short value is never replaced inside a longer one that also changes */
  [...map.values()].sort((a, b) => b.old.length - a.old.length).forEach(m => { let n = 0;
    /* gen.js numbers the lesson titles ("8 · ser vs estar"); the source holds them without the number */
    const NUM = /^\d+ · /, o2 = m.id.startsWith('lessons:') && NUM.test(m.old) ? m.old.replace(NUM, '') : m.old, t2 = o2 === m.old ? m.text : m.text.replace(NUM, '');
    const home = HOME[m.id.split(':')[0]] || [/./, 'str'];
    texts.forEach((t, f) => { if (m.kind !== 'html' && !home[0].test(path.basename(f))) return; const r = m.kind === 'html' ? replaceBody(t, m.old, m.text) : replaceValue(t, o2, t2, home[1]); if (r.n) { texts.set(f, r.text); n += r.n; } });
    if (!n) errs.push('not found in tools/target/' + TG + '/: ' + m.id + ' «' + m.old.slice(0, 100) + '»'); });
  if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
  texts.forEach((t, f) => { if (t !== saved.get(f)) fs.writeFileSync(f, t); });
  const undo = why => { saved.forEach((t, f) => fs.writeFileSync(f, t)); console.error(why); console.error('sources restored; nothing changed'); process.exit(1); };
  let after; try { after = dump(); } catch (e) { undo(String(e.message)); }
  /* 1. every field reads as intended and no other field changed; 2. the target half did not move */
  const wantBy = new Map(want.map(w => [key(w), w.text])), aft = new Map(after.rows.map(r => [key(r), r.text])), diffs = [];
  if (aft.size !== cur.size) diffs.push('field count ' + cur.size + ' → ' + aft.size);
  cur.forEach((c, k) => { const exp = wantBy.has(k) ? wantBy.get(k) : c.text, got = aft.get(k); if (got !== exp) diffs.push(k.replace(/\u0001/g, ' ') + '\n     want ' + String(exp).slice(0, 160) + '\n     got  ' + String(got).slice(0, 160)); });
  Object.keys(before.targetFiles).forEach(f => { if (before.targetFiles[f] !== after.targetFiles[f]) diffs.push('TARGET HALF MOVED: target/' + TG + '/' + f); });
  if (diffs.length && !process.argv.includes('--keep')) undo(diffs.slice(0, 30).join('\n') + '\n' + diffs.length + ' difference(s)');
  if (diffs.length) console.error(diffs.slice(0, 60).join('\n') + '\n' + diffs.length + ' difference(s) KEPT (--keep)');
  console.log('applied ' + todo.length + ' field(s) (' + map.size + ' distinct texts) to tools/target/' + TG + '/; target half unchanged. Now: node tools/target/gen.js ' + TG + ', the apply.js steps, export_target.js ' + TG);
} else { console.error('unknown command ' + cmd); process.exit(2); }
