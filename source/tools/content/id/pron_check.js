/* id-en respelling ("cara baca") consistency checker (not part of the build). Rules: tools/content/id/PRON-RULES.md (base: docs/profiles/id.md §6).
   usage: node tools/content/id/pron_check.js [summary|phrases|words|func|rules|all]
   Collects every English -> pron pair from decks.js (field 2), extra.js IDIOMS (field 3) and the {{ex:English|pron|meaning}} rows of
   lessons.js and more/*.js, aligns them word by word, and reports: phrases with more than one pron, words with more than one pron
   (the weak/strong function words in ALLOWED are listed separately by "func"), and rule hits. Respellings quoted in notes and lesson
   prose are NOT scanned. */
const fs = require('fs');
const D = __dirname + '/';
const pairs = [];
const decks = require(D + 'decks.js');
for (const [name, txt] of Object.entries(decks)) txt.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && f[1].trim()) pairs.push({ en: f[0].trim(), pr: f[1].trim(), src: 'decks:' + name }); });
const idi = fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '';
idi.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 4) pairs.push({ en: f[0].trim(), pr: f[2].trim(), src: 'extra:IDIOMS' }); });
for (const fn of ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js']) {
  const t = fs.readFileSync(D + fn, 'utf8'); let m;
  const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; while ((m = ex.exec(t))) if (m[2].trim()) pairs.push({ en: m[1].trim(), pr: m[2].trim(), src: fn });
}
const norm = s => s.toLowerCase().replace(/’/g, "'");
/* English words: split on spaces and on " / "; drop punctuation; digits stay as one token (they are read as several words, see "align") */
const words = s => norm(s).replace(/\s\/\s/g, ' ').replace(/[.,!?;:"“”()…]/g, ' ').split(/\s+/).filter(Boolean);
const ptoks = p => p.replace(/ \((i pendek|u pendek|dengar audio)\)$/, '').replace(/\s\/\s/g, ' ').replace(/[.,!?]/g, ' ').split(/\s+/).filter(Boolean);
/* weak / strong pairs that PRON-RULES §B allows */
const ALLOWED = new Set(['i', 'a', 'an', 'the', 'to', 'for', 'from', 'of', 'at', 'and', 'or', 'but', 'can', 'do', 'does', 'have', 'has', 'had', 'are', 'was', 'you', 'your', 'me', 'that', 'some', 'than']);
const W = {}, P = {}, rules = [];
const pat = /^[abcdefghijklmnoprstuvwyzéèABCDEFGHIJKLMNOPRSTUVWYZÉÈ ?!.,/-]+( \((i pendek|u pendek|dengar audio)\))?$/u;
for (const p of pairs) {
  const k = norm(p.en).replace(/[.,!?]/g, '').trim(); (P[k] = P[k] || new Map()); P[k].set(p.pr, (P[k].get(p.pr) || []).concat(p.src));
  if (!pat.test(p.pr)) rules.push('pattern  ' + p.src + ' «' + p.en + '» ' + p.pr);
  const ew = words(p.en), pw = ptoks(p.pr);
  pw.forEach((w, i) => {
    const syl = w.split('-');
    if (syl.length > 1 && !syl.some(s => s === s.toUpperCase() && /[A-ZÉÈ]/.test(s))) rules.push('nostress ' + p.src + ' «' + p.en + '» ' + w);
    if (syl.length === 1 && /[A-ZÉÈ]/.test(w)) rules.push('caps1syl ' + p.src + ' «' + p.en + '» ' + w);
    if (w === 'dhe' && pw[i + 1] && /^[aeiouèéAEIOUÈÉ]/.test(pw[i + 1])) rules.push('dhe+V    ' + p.src + ' «' + p.en + '» ' + p.pr);
    if (w === 'dhi' && pw[i + 1] && !/^[aeiouèéAEIOUÈÉ]/.test(pw[i + 1])) rules.push('dhi+C    ' + p.src + ' «' + p.en + '» ' + p.pr);
  });
  if (ew.length !== pw.length) { rules.push('align    ' + p.src + ' «' + p.en + '» ' + ew.length + ' words / ' + pw.length + ' tokens'); continue; }
  ew.forEach((w, i) => { const t = pw[i]; (W[w] = W[w] || {}); (W[w][t] = W[w][t] || []).push(p.src + ' «' + p.en + '»'); });
}
const mode = process.argv[2] || 'summary';
const phraseConf = Object.keys(P).filter(k => P[k].size > 1);
const wordConf = Object.keys(W).filter(w => Object.keys(W[w]).length > 1 && !ALLOWED.has(w));
if (mode === 'phrases' || mode === 'all') phraseConf.forEach(k => { console.log('PHRASE ' + k); for (const [pr, srcs] of P[k]) console.log('    ' + pr + '  ' + srcs.join(' ; ')); });
if (mode === 'words' || mode === 'all') wordConf.forEach(w => { console.log('WORD ' + w + ':'); for (const t in W[w]) console.log('    ' + t + '  x' + W[w][t].length + '  ' + W[w][t].slice(0, 3).join(' ; ')); });
if (mode === 'func' || mode === 'all') [...ALLOWED].forEach(w => { if (!W[w]) return; console.log('FUNC ' + w + ': ' + Object.entries(W[w]).map(([t, s]) => t + ' x' + s.length).join(', ')); });
if (mode === 'rules' || mode === 'all') rules.forEach(r => console.log('RULE ' + r));
console.log('pairs ' + pairs.length + ' · words ' + Object.keys(W).length + ' · phrase conflicts ' + phraseConf.length + ' · word conflicts ' + wordConf.length + ' · rule hits ' + rules.length);
