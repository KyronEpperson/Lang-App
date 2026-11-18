/* hi-en pron consistency checker (not part of the build). Rules: tools/content/hi/PRON-RULES.md.
   usage: node tools/content/hi/pron_check.js [summary|all]
   Collects every English -> pron pair from decks.js, extra.js (IDIOMS), lessons.js and more/*.js ({{ex:}} rows) and reports:
   - DIFF: a string that is in pron_lookup.json but carries a different aid (the lookup wins);
   - CONFLICT: one English string with two aids;
   - WORD: a word in a new (non-lookup) row whose respelling differs from every form the lookup gives that word;
   - PROSE: a respelling quoted in a note or lesson body (a token with ˈ) that matches no form in any pron field. */
const fs = require('fs');
const D = __dirname + '/';
const L = JSON.parse(fs.readFileSync(D + 'pron_lookup.json', 'utf8'));
const pairs = [];
const decks = require(D + 'decks.js');
for (const [n, t] of Object.entries(decks)) t.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && f[1].trim()) pairs.push({ en: f[0].trim(), p: f[1].trim(), src: 'decks:' + n }); });
(fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '').split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 3) pairs.push({ en: f[0].trim(), p: f[2].trim(), src: 'IDIOMS' }); });
const bodyFiles = ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js'];
for (const fn of bodyFiles) { const t = fs.readFileSync(D + fn, 'utf8'); let m; const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; while ((m = ex.exec(t))) pairs.push({ en: m[1].trim(), p: m[2].trim(), src: fn }); }
const norm = s => s.toLowerCase().replace(/’/g, "'").replace(/[.,!?;:"()…]/g, ' ').split(/\s+/).filter(Boolean);
const toks = p => p.split(/। | \/ | /).filter(Boolean);
const W = {}, forms = new Set(), out = [];
/* prose-only respellings with no pron row, each checked with pron_hi.js: allergy /ˈælərdʒi/, photo /ˈfoʊtoʊ/ */
['ˈऐलर्जि', 'ˈफ़ोटो'].forEach(t => forms.add(t));
for (const k in L) { toks(L[k]).forEach(t => forms.add(t)); const e = norm(k), t = toks(L[k]); if (e.length === t.length) e.forEach((w, i) => { (W[w] = W[w] || new Set()).add(t[i]); }); }
const P = {}; let nNew = 0;
for (const x of pairs) {
  (P[x.en] = P[x.en] || new Set()).add(x.p); toks(x.p).forEach(t => forms.add(t));
  if (x.en in L) { if (L[x.en] !== x.p) out.push('DIFF     ' + x.src + ' «' + x.en + '» ' + x.p + '  lookup: ' + L[x.en]); continue; }
  nNew++; const e = norm(x.en), t = toks(x.p);
  if (e.length === t.length) e.forEach((w, i) => { if (W[w] && !W[w].has(t[i])) out.push('WORD     ' + w + ' ' + t[i] + ' (lookup: ' + [...W[w]].join(', ') + ') in ' + x.src + ' «' + x.en + '»'); });
}
for (const k in P) if (P[k].size > 1) out.push('CONFLICT «' + k + '» ' + [...P[k]].join(' || '));
for (const fn of ['decks.js', 'extra.js', ...bodyFiles]) {
  let s = fs.readFileSync(D + fn, 'utf8').replace(/\{\{ex:[^|}]*\|[^|}]*\|/g, '');
  if (fn === 'decks.js') s = s.split('\n').map(l => { const p = l.split(' | '); return p.length >= 4 ? p.slice(2).join(' | ') : l; }).join('\n');
  const re = /[ऀ-ॣॱ-ॿˈ]*ˈ[ऀ-ॣॱ-ॿ]+/g; let m;
  while ((m = re.exec(s))) if (!forms.has(m[0])) out.push('PROSE    ' + fn + ' ' + m[0]);
}
if ((process.argv[2] || 'summary') === 'all') out.forEach(l => console.log(l));
const c = k => out.filter(l => l.startsWith(k)).length;
console.log('pairs ' + pairs.length + ' · not in lookup ' + nNew + ' · diff ' + c('DIFF') + ' · conflicts ' + c('CONFLICT') + ' · word mismatches ' + c('WORD') + ' · prose mismatches ' + c('PROSE'));
