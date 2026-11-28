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
  const r = cp.spawnSync('node', [path.join(__dirname, 'export_target.js'), TG], { env: Object.assign({}, process.env, { HALVES_DIR: tmp, HALVES_MARKS_DUMP: out }), encoding: 'utf8', maxBuffer: 1 << 28 });
  if (r.status !== 0) { console.error(String(r.stdout).slice(-3000) + String(r.stderr).slice(-3000) + (r.error ? ' ' + r.error : '')); throw new Error('export_target.js ' + TG + ' failed'); }
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
  const first = oldV.slice(0, 4); let from = -1, n = 0, hit = null; /* the walk below is the real test; the source may break the line anywhere */
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
  /* translations of target lines are left to the judge (names and loan words there are the learner's language); the untagged dump is kept beside
     the draft: bodyfix needs the original bold runs */
  const TRF = { 'dialog.tr': 1, 'examples.tr': 1, 'sentences.gloss': 1, 'patterns.tr': 1, 'decks.label': 1, 'groups.name': 1, 'labels.text': 1 }; /* deck and group names are keys of saved progress: never tagged */
  const d = dump(), out = []; d.rows.forEach(r => { if (TRF[r.f + '.' + r.k]) return; const t = propose(r); if (t !== r.text) out.push({ f: r.f, id: r.id, k: r.k, text: t }); });
  L.writeJSONL(FILE.replace(/\.jsonl$/, '') + '.orig.jsonl', d.rows.filter(r => r.f === 'body').map(r => ({ id: r.id, text: r.text })));
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
  const map = new Map(); todo.forEach(({ c, w }) => { const hm = HOME[w.f] || [/./, 'str'], k = c.kind + '\u0001' + hm[0].source + hm[1] + (w.f === 'checks' || w.f === 'practice' ? 'rows' : '') + '\u0001' + c.text; if (map.has(k) && map.get(k).text !== w.text) errs.push('same text, two taggings: «' + c.text.slice(0, 120) + '»  →  «' + map.get(k).text.slice(0, 120) + '»  |  «' + w.text.slice(0, 120) + '»'); map.set(k, { kind: c.kind, old: c.text, text: w.text, id: w.f + ':' + w.id + '.' + w.k, home: (w.f === 'checks' || w.f === 'practice' ? 'lessons-rows:' : '') + w.f }); });
  if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
  const texts = new Map(files().map(f => [f, fs.readFileSync(f, 'utf8')])), saved = new Map(texts);
  /* quick-check and practice rows are written by POSITION (lesson, row, element): their prose can equal an answer or an option of another row, which a
     replacement by value would also change. Each row is one line of the lesson's check: [ … ] or practice: [ … ] list; a changed row is rewritten as JSON. */
  const rowEdits = todo.filter(({ w }) => w.f === 'checks' || w.f === 'practice');
  rowEdits.forEach(({ c, w }) => { const m = w.id.match(/^(.*)\.(k?)(\d+)$/); if (!m) { errs.push('row id ' + w.id); return; } const lesson = m[1], n = +m[3], list = w.f === 'checks' ? 'check' : 'practice'; let done = false;
    texts.forEach((t, f) => { if (done || !/^lessons/.test(path.basename(f))) return; const lines = t.split('\n'); let i = lines.findIndex(l => new RegExp('^\\s*id:\\s*["\']' + lesson.replace(/[-]/g, '\\-') + '["\'],?\\s*$').test(l)); if (i < 0) return;
      while (i < lines.length && !new RegExp('^\\s*' + list + ':\\s*\\[\\s*$').test(lines[i])) i++; let k = 0, j = i + 1; for (; j < lines.length; j++) { if (/^\s*\[/.test(lines[j])) { if (++k === n) break; } else if (/^\s*\]/.test(lines[j])) break; }
      if (k !== n) { errs.push('row ' + w.id + ' not found in ' + path.basename(f)); done = true; return; }
      const line = lines[j], comma = /,\s*$/.test(line); let arr; try { arr = (0, eval)('(' + line.trim().replace(/,\s*$/, '') + ')'); } catch (e) { errs.push('row ' + w.id + ': not one row per line'); done = true; return; }
      const om = w.k.match(/^o\[(\d+)\]$/); let ref = null;
      if (w.f === 'checks') ref = w.k === 'q' ? [arr, 0] : w.k === 'why' ? [arr, 3] : om ? [arr[1], +om[1]] : null;
      else { const kind = arr[0], ix = { mc: { q: 1, why: 6 }, or: { p: 1, why: 4 }, fi: { q: 1, p: 2, why: 5 }, ty: { p: 1, hint: 3, why: 5 } }[kind] || {}; ref = om && kind === 'mc' ? [arr, 2 + (+om[1])] : ix[w.k] != null ? [arr, ix[w.k]] : null; }
      if (!ref || ref[0][ref[1]] !== c.text) { errs.push('row ' + w.id + '.' + w.k + ': the source row does not hold the field text (' + JSON.stringify(ref && ref[0][ref[1]]).slice(0, 80) + ')'); done = true; return; }
      ref[0][ref[1]] = w.text; lines[j] = line.match(/^\s*/)[0] + JSON.stringify(arr) + (comma ? ',' : ''); texts.set(f, lines.join('\n')); done = true; });
    if (!done) errs.push('lesson of ' + w.id + ' not found'); });
  if (errs.length) { console.error(errs.slice(0, 30).join('\n')); process.exit(1); }
  [...map.keys()].forEach(k => { if (/^lessons-rows:/.test(map.get(k).home)) map.delete(k); });
  /* longest first, so a short value is never replaced inside a longer one that also changes */
  [...map.values()].sort((a, b) => b.old.length - a.old.length).forEach(m => { let n = 0;
    /* gen.js numbers the lesson titles ("8 · ser vs estar"); the source holds them without the number */
    const NUM = /^\d+ · /, o2 = m.id.startsWith('lessons:') && NUM.test(m.old) ? m.old.replace(NUM, '') : m.old, t2 = o2 === m.old ? m.text : m.text.replace(NUM, '');
    const home = HOME[m.id.split(':')[0]] || [/./, 'str'];
    texts.forEach((t, f) => { if (m.kind !== 'html' && !home[0].test(path.basename(f))) return; const r = m.kind === 'html' ? replaceBody(t, m.old, m.text) : replaceValue(t, o2, t2, home[1]); if (r.n) { texts.set(f, r.text); n += r.n; } });
    if (!n) errs.push('not found in tools/target/' + TG + '/: ' + m.id + ' «' + m.old.slice(0, 100) + '»'); });
  if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
  texts.forEach((t, f) => { if (t !== saved.get(f)) fs.writeFileSync(f, t); });
  const undo = why => { if (process.env.TAGS_NOUNDO) { console.error(why); process.exit(1); } saved.forEach((t, f) => fs.writeFileSync(f, t)); console.error(why); console.error('sources restored; nothing changed'); process.exit(1); };
  let after; try { after = dump(); } catch (e) { undo(String(e.message)); }
  /* 1. every field reads as intended and no other field changed; 2. the target half did not move */
  const wantBy = new Map(want.map(w => [key(w), w.text])), aft = new Map(after.rows.map(r => [key(r), r.text])), diffs = [];
  if (aft.size !== cur.size) diffs.push('field count ' + cur.size + ' → ' + aft.size);
  cur.forEach((c, k) => { const exp = wantBy.has(k) ? wantBy.get(k) : c.text, got = aft.get(k); if (got !== exp) diffs.push(k.replace(/\u0001/g, ' ') + '\n     want ' + String(exp).slice(0, 160) + '\n     got  ' + String(got).slice(0, 160)); });
  Object.keys(before.targetFiles).forEach(f => { if (before.targetFiles[f] !== after.targetFiles[f]) diffs.push('TARGET HALF MOVED: target/' + TG + '/' + f); });
  if (diffs.length && !process.argv.includes('--keep')) undo(diffs.slice(0, 30).join('\n') + '\n' + diffs.length + ' difference(s)');
  if (diffs.length) console.error(diffs.slice(0, 60).join('\n') + '\n' + diffs.length + ' difference(s) KEPT (--keep)');
  console.log('applied ' + todo.length + ' field(s) (' + map.size + ' distinct texts) to tools/target/' + TG + '/; target half unchanged. Now: node tools/target/gen.js ' + TG + ', the apply.js steps, export_target.js ' + TG);
} else if (cmd === 'bodyfix') {
  /* after the judges: in lesson bodies a tag that stands where the untagged course had a bold run goes back to <b> (bold = a taught term, what the
     section decks read); any other <b> left is emphasis in the learner's language and becomes <strong>.
     usage: tags.js bodyfix <t> <draft.orig.jsonl> <out rows.jsonl> */
  const orig = new Map(L.readJSONL(FILE).map(r => [r.id, r.text])), OUTF = process.argv[5], TOK = /‹|›|<\/?b>|<\/?strong>/g, out = [], rep = [];
  const nr = t => { const R = []; let n = 0, i = 0, open = null, m; TOK.lastIndex = 0; while ((m = TOK.exec(t))) { n += m.index - i; i = m.index + m[0].length;
    if (m[0] === '‹' || m[0] === '<b>') open = [m[0], n, m.index]; else if ((m[0] === '›' || m[0] === '</b>') && open) { R.push({ k: open[0] === '‹' ? 't' : 'b', a: open[1], b: n, s: open[2], e: i }); open = null; } } return R; };
  dump().rows.filter(r => r.f === 'body').forEach(r => { const O = orig.get(r.id), F = r.text; if (O == null) throw new Error('no original body for ' + r.id);
    const ob = nr(O).filter(x => x.k === 'b'); let t = '', at = 0;
    nr(F).forEach(x => { const inner = F.slice(x.s, x.e).replace(/^(‹|<b>)|(›|<\/b>)$/g, ''); let nw;
      if (x.k === 't') { const hit = ob.some(o => o.a < x.b && x.a < o.b); nw = hit ? '<b>' + inner + '</b>' : '‹' + inner + '›'; if (hit && !ob.some(o => o.a === x.a && o.b === x.b)) rep.push(r.id + ' bold run changed: ' + inner); }
      else { nw = '<strong>' + inner + '</strong>'; rep.push(r.id + ' strong: ' + inner); }
      t += F.slice(at, x.s) + nw; at = x.e; });
    t += F.slice(at); if (t !== F) out.push({ f: 'body', id: r.id, k: 'body', text: t }); });
  L.writeJSONL(OUTF, out); console.log(rep.join('\n')); console.log(out.length + ' bodies → ' + OUTF);
} else { console.error('unknown command ' + cmd); process.exit(2); }
