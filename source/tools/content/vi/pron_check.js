/* vi-en IPA consistency checker (not part of the build). Rules: tools/content/vi/PRON-RULES.md (base: docs/profiles/vi.md §6).
   usage: node tools/content/vi/pron_check.js [summary|phrases|words|rules|all]
   Collects every English -> IPA pair from decks.js (field 2), extra.js IDIOMS (field 3) and the {{ex:English|pron|meaning}} rows of
   lessons.js and more/*.js, aligns them word by word (‿ counts as a word break; IPA quoted in notes, tables and prose is NOT scanned), and reports: phrases with more than one
   transcription, words with more than one transcription (the weak/strong function words in ALLOWED are skipped), and rule hits. */
const fs = require('fs');
const D = __dirname + '/';
const pairs = [];
const decks = require(D + 'decks.js');
for (const [name, txt] of Object.entries(decks)) txt.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && f[1].trim()) pairs.push({ en: f[0].trim(), ipa: f[1].trim(), src: 'decks:' + name }); });
const idi = fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '';
idi.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 3 && f[2].trim().startsWith('/')) pairs.push({ en: f[0].trim(), ipa: f[2].trim(), src: 'extra:IDIOMS' }); });
for (const fn of ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js']) {
  const t = fs.readFileSync(D + fn, 'utf8'); let m;
  const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; while ((m = ex.exec(t))) if (m[2].trim()) pairs.push({ en: m[1].trim(), ipa: m[2].trim(), src: fn });
}
const norm = s => s.toLowerCase().replace(/’/g, "'");
/* English words: split on spaces and on the " / " alternative separator; drop punctuation */
const words = s => norm(s).replace(/\s\/\s/g, ' ').replace(/[.,!?;:"“”()…]/g, ' ').replace(/(^|\s)-(?=\s|$)/g, ' ').split(/\s+/).filter(Boolean);
const itoks = ipa => ipa.replace(/\/ \/ \//g, ' ').replace(/\/ \//g, ' ').replace(/^\/|\/$/g, '').split(/[\s‿]+/).filter(Boolean);
/* weak / strong pairs that PRON-RULES §B allows (a word may have both forms) */
const ALLOWED = new Set(['i', 'a', 'an', 'the', 'to', 'for', 'from', 'at', 'of', 'and', 'or', 'but', 'can', 'do', 'does', 'did', 'have', 'has', 'had', 'you', 'me', 'he', 'she', 'we', 'him', 'her', 'them', 'us', 'was', 'were', 'are', 'that', 'there', 'some', 'than', 'as', 'just']);
/* PRON-RULES C2: no link across a comma. ws = the IPA words of one slash group, i = index of the word before the gap. */
const commaBefore = (en, ws, i) => { const raw = en.replace(/[.!?]/g, '').split(/\s+/), sub = ws.map(w => w.split('‿').length), n = sub.reduce((x, y) => x + y, 0); if (raw.length !== n) return false; const k = sub.slice(0, i + 1).reduce((x, y) => x + y, 0) - 1; return /,$/.test(raw[k]); };
const VOW = /^[ˈˌ]?[aeiouæɑɔəɚɝɪʊʌ]/;
const W = {}, P = {}, rules = [];
for (const p of pairs) {
  const k = norm(p.en).replace(/[.,!?]/g, '').trim(); (P[k] = P[k] || new Map()); P[k].set(p.ipa, (P[k].get(p.ipa) || []).concat(p.src));
  /* rule hits */
  if (/ɡ|ɛ|ɒ|əʊ|:|'/.test(p.ipa)) rules.push('symbol   ' + p.src + ' «' + p.en + '» ' + p.ipa);
  for (const grp of p.ipa.split(/\/ (?:\/ )?\//)) {
    const g = grp.replace(/^\/|\/$/g, '');
    const ws = g.split(' ');
    ws.forEach((w, i) => {
      const nx = ws[i + 1];
      /* §6.7 / PRON-RULES C: consonant + vowel across a space inside one group should be linked */
      const last = w.split('‿').pop();
      if (nx && VOW.test(nx) && /[bdfgkmnŋlpstvzθðʃʒ]$|tʃ$|dʒ$/.test(last.replace(/ː/g, '')) && !commaBefore(p.en, ws, i)) rules.push('nolink   ' + p.src + ' «' + p.en + '» … ' + w + ' ' + nx);
      /* r-linking and vowel-vowel links are not marked */
      w.split('‿').forEach((s, j, arr) => { if (j < arr.length - 1 && /[aeiouæɑɔəɚɝɪʊʌːr]$/.test(s)) rules.push('badlink  ' + p.src + ' «' + p.en + '» ' + s + '‿' + arr[j + 1]); });
      if (nx && w === 'ðə' && VOW.test(nx)) rules.push('ðə+V     ' + p.src + ' «' + p.en + '» ' + p.ipa);
      if (nx && w === 'ði' && !VOW.test(nx)) rules.push('ði+C     ' + p.src + ' «' + p.en + '» ' + p.ipa);
    });
    if (/ɑ(?!ː)|ɔ(?![ːɪ])|ɝ(?!ː)/.test(g)) rules.push('length   ' + p.src + ' «' + p.en + '» ' + p.ipa);
  }
  const ew = words(p.en), iw = itoks(p.ipa);
  if (ew.length !== iw.length) { rules.push('align    ' + p.src + ' «' + p.en + '» ' + ew.length + ' words / ' + iw.length + ' ipa tokens'); continue; }
  ew.forEach((w, i) => { const t = iw[i]; (W[w] = W[w] || {}); (W[w][t] = W[w][t] || []).push(p.src + ' «' + p.en + '»'); });
}
const mode = process.argv[2] || 'summary';
const phraseConf = Object.keys(P).filter(k => P[k].size > 1);
const wordConf = Object.keys(W).filter(w => Object.keys(W[w]).length > 1 && !ALLOWED.has(w));
if (mode === 'phrases' || mode === 'all') phraseConf.forEach(k => { console.log('PHRASE ' + k); for (const [ipa, srcs] of P[k]) console.log('    ' + ipa + '  ' + srcs.join(' ; ')); });
if (mode === 'words' || mode === 'all') wordConf.forEach(w => { console.log('WORD ' + w + ':'); for (const t in W[w]) console.log('    ' + t + '  x' + W[w][t].length + '  ' + W[w][t].slice(0, 3).join(' ; ')); });
if (mode === 'func' || mode === 'all') [...ALLOWED].forEach(w => { if (!W[w]) return; console.log('FUNC ' + w + ': ' + Object.entries(W[w]).map(([t, s]) => t + ' x' + s.length).join(', ')); });
if (mode === 'rules' || mode === 'all') rules.forEach(r => console.log('RULE ' + r));
console.log('pairs ' + pairs.length + ' · words ' + Object.keys(W).length + ' · phrase conflicts ' + phraseConf.length + ' · word conflicts ' + wordConf.length + ' · rule hits ' + rules.length);
