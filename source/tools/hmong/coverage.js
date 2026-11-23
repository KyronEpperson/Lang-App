/* Glossary coverage: every Hmong word of a course pack (or source folder, interface pack, text file) that is NOT in tools/hmong/GLOSSARY.tsv.
   usage:  node tools/hmong/coverage.js <file-or-pack-or-folder>... [--glossary FILE] [--field NAME]... [--pron] [--distractors] [--places N] [--json]
   A word counts as covered when it is a glossary headword or one syllable of a multi-word headword (niam txiv covers niam and txiv).
   Which strings are Hmong comes from rpa_check.js (hmn-en: the learner side; en-hmn: the target side). Skipped: names, ALLOW.txt entries, numerals,
   acronyms, intentional distractors (unless --distractors). In hmn-en prose, a word that is also an English word of the same pack and is not in the
   glossary is listed apart as "maybe English" (to, me, no, is… are legal RPA syllables). Illegal spellings are listed apart: fix them with rpa_check first.
   Exit code: 0 always for a report (it is a to-do list), 2 on bad input. */
'use strict';
const fs = require('fs'), path = require('path');
const RC = require('./rpa_check.js');

function loadGlossary(f) {
  if (!fs.existsSync(f)) throw new Error('no glossary at ' + f);
  const rows = fs.readFileSync(f, 'utf8').split('\n').filter(l => l.trim() && !/^#/.test(l)).map(l => l.split('\t'));
  const head = rows[0].map(h => h.trim().toLowerCase());
  let col = head.findIndex(h => /^(hmn|hmong|rpa|word|headword|hmoob|hmong \(rpa\)|white hmong)$/.test(h)); const hasHead = col >= 0 || head.some(h => /^(en|english|gloss|meaning|pos|source|notes?)$/.test(h)); if (col < 0) col = 0;
  const words = new Set(), entries = new Set();
  rows.slice(hasHead ? 1 : 0).forEach(r => { const e = String(r[col] || '').trim(); if (!e) return;
    e.split(/\s*(?:[\/;|]|,\s)\s*/).forEach(alt => { alt = alt.replace(/\([^)]*\)/g, ' ').replace(/[~…]/g, ' ').trim().toLowerCase(); if (!alt) return; entries.add(alt);
      alt.split(/[^\p{L}\p{M}'’]+/u).filter(Boolean).forEach(w => words.add(w)); }); });
  const folded = new Set([...entries].map(e => e.replace(/[\s\-‐‑]+/g, ''))); /* joined headwords (menyuam) cover spaced text (me nyuam): RPA.md §6 */
  return { words, entries, folded, column: hasHead ? head[col] : 'column 1', rows: rows.length - (hasHead ? 1 : 0) };
}

function coverage(target, opts) {
  const G = opts.glossary; const { tokens, unmapped, info, english } = RC.hmongTokens(target, opts);
  const miss = new Map(), maybeEn = new Map(), bad = new Map(); let seen = 0, covered = 0; const uniq = new Set();
  const add = (m, w, t) => { const e = m.get(w) || { n: 0, at: [], kind: t.kind, reason: t.reason }; e.n++; if (e.at.length < opts.places) e.at.push(t.path + '  «' + snippet(t.text, t.start) + '»'); m.set(w, e); };
  const joinCovered = new Set(); /* tokens covered as part of a joined glossary headword written spaced */
  tokens.forEach((t, i) => { if (G.words.has(t.token.toLowerCase())) return; for (let a = Math.max(0, i - 3); a <= i; a++) for (let z = i; z < Math.min(tokens.length, a + 4); z++) { if (z === a) continue; const run = tokens.slice(a, z + 1); if (run.some(x => x.seq !== t.seq)) continue; if (G.folded.has(run.map(x => x.token.toLowerCase()).join(''))) run.forEach(x => joinCovered.add(x)); } });
  for (const t of tokens) {
    if (t.distractor && !opts.distractors) continue;
    if (['name', 'allow', 'number', 'acronym', 'english', 'fragment', 'letter'].includes(t.kind)) continue;
    const w = t.token.toLowerCase(); seen++; uniq.add(w);
    if (!t.ok) { add(bad, w, t); continue; }
    const parts = t.kind === 'joined' && Array.isArray(t.parse) ? t.parse.map(p => p.text) : [w];
    if (G.words.has(w) || parts.every(p => G.words.has(p)) || joinCovered.has(t)) { covered++; continue; }
    if ((info.target === 'en' || /^O/.test(t.role || '')) && english.has(w)) /* Hmong learner prose quotes English: a legal-RPA English word (to, me, no) is not a missing Hmong word */ { add(maybeEn, w, t); continue; }
    add(miss, w, t);
  }
  return { info, unmapped, seen, covered, uniq: uniq.size, miss, maybeEn, bad };
}
function snippet(text, start) { const s = String(text || '').replace(/<[^>]*>/g, m => ' '.repeat(m.length)); const a = Math.max(0, (start || 0) - 25), z = Math.min(s.length, (start || 0) + 35); return (a ? '…' : '') + s.slice(a, z).replace(/\s+/g, ' ').trim() + (z < s.length ? '…' : ''); }

if (require.main === module) {
  const a = process.argv.slice(2); if (!a.length || a.includes('-h') || a.includes('--help')) { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(a.length ? 0 : 2); }
  if (a.includes('--selftest')) { /* fixtures: one pack per direction + a small glossary */
    const F = f => path.join(__dirname, 'fixtures', f); const o = { fields: [], places: 3, glossary: loadGlossary(F('GLOSSARY.sample.tsv')) }; let fail = 0; const t = (c, m) => { if (!c) { fail++; console.log('FAIL ' + m); } };
    const A = coverage(F('course-en-hmn.sample.js'), o), B = coverage(F('course-hmn-en.sample.js'), o);
    t(o.glossary.words.has('kawm') && o.glossary.words.has('ntawv') && o.glossary.entries.has('tub kawm ntawv'), 'multi-word glossary entry split into words');
    t(A.miss.has('nyiam') && A.miss.has('haus') && !A.miss.has('kuv') && !A.miss.has('nyob') && A.bad.has('kun') && A.bad.has('dlej'), 'en-hmn: missing / covered / illegal');
    t(!A.miss.has('nyop') && !A.miss.has('vang') && !A.miss.has('ball'), 'en-hmn: distractors, names, glosses not counted');
    t(B.miss.has('muaj') && B.miss.has('txais') && !B.miss.has('askiv') && !B.miss.has('tub') && B.bad.has('kung'), 'hmn-en: missing / covered / illegal');
    t(B.maybeEn.has('am') && B.maybeEn.has('is') && !B.miss.has('am') && !B.miss.has('teacher'), 'hmn-en: legal-RPA English words apart, other English skipped');
    t(!A.miss.has('me') && !A.miss.has('nyuam'), 'spaced text covered by a joined headword (me nyuam = menyuam)');
    t(!A.miss.has('the') && !A.miss.has('like') && !A.miss.has('ntxh') && !A.miss.has('ph') && !A.bad.has('ntxh'), 'en-hmn: English options and bare letters not counted');
    t(B.miss.get('muaj').n === 3 && B.miss.get('muaj').at.length === 3 && /blurb/.test(B.miss.get('muaj').at[0]), 'counts and places');
    console.log('coverage selftest: ' + (fail ? 'FAIL ' + fail : 'OK')); process.exitCode = fail ? 1 : 0; return; }
  const opts = { fields: [], places: 5, pron: a.includes('--pron'), distractors: a.includes('--distractors'), json: a.includes('--json') }; const files = [];
  let gl = path.join(__dirname, 'GLOSSARY.tsv');
  for (let i = 0; i < a.length; i++) { if (a[i] === '--glossary') gl = a[++i]; else if (a[i] === '--field') (a[++i] || '').split(',').filter(Boolean).forEach(f => opts.fields.push(f)); else if (a[i] === '--places') { const v = +a[++i]; opts.places = Number.isFinite(v) && v >= 0 ? v : 5; } else if (a[i] === '--allow') opts.allowFile = a[++i]; else if (!/^--/.test(a[i])) files.push(a[i]); }
  const li = a.indexOf('--lang'); if (li >= 0) { RC.setLang(a[li + 1]); files.splice(files.indexOf(a[li + 1]), 1); } /* smoke tests on other languages' packs */
  try { opts.glossary = loadGlossary(gl); } catch (e) { console.log('coverage: ' + e.message); process.exitCode = 2; return; }
  const out = [];
  for (const f of files) {
    let r; try { r = coverage(f, opts); } catch (e) { console.log('coverage: ' + f + ': ' + e.message); process.exitCode = 2; continue; }
    const list = m => [...m.entries()].sort((x, y) => y[1].n - x[1].n || x[0].localeCompare(y[0]));
    if (opts.json) { out.push({ input: f, kind: r.info.kind, glossary: gl, tokens: r.seen, covered: r.covered, distinct: r.uniq, missing: list(r.miss).map(([w, e]) => ({ word: w, count: e.n, places: e.at })), maybeEnglish: list(r.maybeEn).map(([w, e]) => ({ word: w, count: e.n, places: e.at })), illegal: list(r.bad).map(([w, e]) => ({ word: w, count: e.n, reason: e.reason, places: e.at })), unmapped: r.unmapped.map(u => u.path) }); continue; }
    const pct = r.seen ? (100 * r.covered / r.seen).toFixed(1) : '100.0';
    console.log('coverage · ' + f + ' · ' + r.info.kind + '\n  glossary ' + path.relative(process.cwd(), gl) + ' (' + opts.glossary.rows + ' rows, ' + opts.glossary.words.size + ' words, column ' + opts.glossary.column + ')' +
      '\n  ' + r.seen + ' Hmong tokens, ' + r.uniq + ' distinct · ' + r.covered + ' covered (' + pct + '%) · ' + r.miss.size + ' words missing · ' + r.maybeEn.size + ' maybe English · ' + r.bad.size + ' illegal');
    if (r.unmapped.length) console.log('  ' + r.unmapped.length + ' unmapped pack path(s): run rpa_check for the list');
    const show = (title, m) => { if (!m.size) return; console.log('\n' + title + ' (' + m.size + ' words, ' + [...m.values()].reduce((s, e) => s + e.n, 0) + ' tokens):'); list(m).forEach(([w, e]) => { console.log('  ' + w.padEnd(14) + ' ×' + String(e.n).padEnd(4) + (e.reason ? ' ' + e.reason : '')); e.at.forEach(p => console.log('        ' + p)); }); };
    show('NOT IN GLOSSARY', r.miss); show('maybe English (legal RPA, also an English word of this pack; not in glossary)', r.maybeEn); show('illegal spellings (see rpa_check)', r.bad);
    console.log('');
  }
  if (opts.json) console.log(JSON.stringify(out.length === 1 ? out[0] : out, null, 1));
}
module.exports = { loadGlossary, coverage };
