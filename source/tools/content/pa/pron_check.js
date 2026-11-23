/* pa-en pron consistency checker (not part of the build). Rules: docs/profiles/pa.md §6, tools/content/pa/PRON-TOOL.md.
   usage: node tools/content/pa/pron_check.js [summary|all] [strict]
   Collects every English -> pron pair from decks.js, extra.js (IDIOMS), lessons.js and more/*.js ({{ex:}} rows) and reports:
   - KOREAN: a row that still carries the scaffold's Hangul aid (not written yet; the checks below skip it);
   - PATTERN: an aid that fails profile.json pronPattern;
   - ENCODING: an aid that is not NFC or holds a banned character (§6 rules 12 and 15: tone letters, addak, adak bindi, visarga,
     precomposed dotted letters, ZWNJ / ZWJ): retyped, not copied;
   - DIFF: a string that is in pron_lookup.json but carries a different aid (the lookup wins);
   - CONFLICT: one English string with two aids;
   - WORD: a word in a new (non-lookup) row whose respelling differs from every form the lookup gives that word;
   - PROSE: a respelling quoted in a note or lesson body (a token with ˈ) that matches no form in any pron field.
   "all" lists every finding; "strict" exits 1 when there is any finding (KOREAN included). Regexes are built from code points. */
const fs = require('fs');
const D = __dirname + '/';
const c = (...n) => String.fromCodePoint(...n);
const L = JSON.parse(fs.readFileSync(D + 'pron_lookup.json', 'utf8'));
const PRON_RE = new RegExp(JSON.parse(fs.readFileSync(D + 'profile.json', 'utf8')).pronPattern, 'u');
const HANGUL = new RegExp('[' + c(0x1100) + '-' + c(0x11FF) + c(0x3130) + '-' + c(0x318F) + c(0xAC00) + '-' + c(0xD7A3) + ']', 'u');
const BANNED = [
  ['tone letter', new RegExp('[' + c(0x0A18, 0x0A1D, 0x0A22, 0x0A27, 0x0A2D) + ']', 'u')],
  ['addak', new RegExp(c(0x0A71), 'u')],
  ['adak bindi or visarga', new RegExp('[' + c(0x0A01, 0x0A03) + ']', 'u')],
  ['precomposed dotted letter', new RegExp('[' + c(0x0A33, 0x0A36) + c(0x0A59) + '-' + c(0x0A5E) + ']', 'u')],
  ['ZWNJ / ZWJ', new RegExp('[' + c(0x200C, 0x200D) + ']', 'u')]
];
const GUR = c(0x0A00) + '-' + c(0x0A7F);
const pairs = [];
const decks = require(D + 'decks.js');
for (const [n, t] of Object.entries(decks)) t.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && f[1].trim()) pairs.push({ en: f[0].trim(), p: f[1].trim(), src: 'decks:' + n }); });
(fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '').split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 3) pairs.push({ en: f[0].trim(), p: f[2].trim(), src: 'IDIOMS' }); });
const bodyFiles = ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js'].filter(fn => fs.existsSync(D + fn));
for (const fn of bodyFiles) { const t = fs.readFileSync(D + fn, 'utf8'); let m; const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; while ((m = ex.exec(t))) pairs.push({ en: m[1].trim(), p: m[2].trim(), src: fn }); }
const norm = s => s.toLowerCase().replace(/’/g, "'").replace(/[.,!?;:"()…]/g, ' ').split(/\s+/).filter(Boolean);
const toks = p => p.split(/। | \/ | /).filter(Boolean);
const W = {}, forms = new Set(), out = [];
/* prose-only respellings with no pron row, each checked with pron_pa.js: add them here as the lessons need them (none yet) */
[].forEach(t => forms.add(t));
for (const k in L) { toks(L[k]).forEach(t => forms.add(t)); const e = norm(k), t = toks(L[k]); if (e.length === t.length) e.forEach((w, i) => { (W[w] = W[w] || new Set()).add(t[i]); }); }
const P = {}; let nNew = 0, nDone = 0;
for (const x of pairs) {
  if (HANGUL.test(x.p)) { out.push('KOREAN   ' + x.src + ' «' + x.en + '» ' + x.p + (x.en in L ? '  lookup: ' + L[x.en] : '  (not in lookup: write IPA, run pron_pa.js)')); continue; }
  nDone++;
  (P[x.en] = P[x.en] || new Set()).add(x.p); toks(x.p).forEach(t => forms.add(t));
  if (!PRON_RE.test(x.p)) out.push('PATTERN  ' + x.src + ' «' + x.en + '» ' + x.p);
  const enc = BANNED.filter(b => b[1].test(x.p)).map(b => b[0]);
  if (x.p !== x.p.normalize('NFC')) enc.push('not NFC');
  if (enc.length) out.push('ENCODING ' + x.src + ' «' + x.en + '» ' + x.p + '  (' + enc.join(', ') + ': copy the tool output, do not retype)');
  if (x.en in L) { if (L[x.en] !== x.p) out.push('DIFF     ' + x.src + ' «' + x.en + '» ' + x.p + '  lookup: ' + L[x.en]); continue; }
  nNew++; const e = norm(x.en), t = toks(x.p);
  if (e.length === t.length) e.forEach((w, i) => { if (W[w] && !W[w].has(t[i])) out.push('WORD     ' + w + ' ' + t[i] + ' (lookup: ' + [...W[w]].join(', ') + ') in ' + x.src + ' «' + x.en + '»'); });
}
for (const k in P) if (P[k].size > 1) out.push('CONFLICT «' + k + '» ' + [...P[k]].join(' || '));
for (const fn of ['decks.js', 'extra.js', ...bodyFiles]) {
  let s = fs.readFileSync(D + fn, 'utf8').replace(/\{\{ex:[^|}]*\|[^|}]*\|/g, '');
  if (fn === 'decks.js') s = s.split('\n').map(l => { const p = l.split(' | '); return p.length >= 4 ? p.slice(2).join(' | ') : l; }).join('\n');
  if (fn === 'extra.js') { const a = s.split('exports.IDIOMS'); if (a[1]) s = a[0] + a[1].split('\n').map(l => { const p = l.split(' | '); return p.length >= 3 ? p[1] + ' | ' + p.slice(3).join(' | ') : l; }).join('\n'); }
  const re = new RegExp('[' + GUR + 'ˈ]*ˈ[' + GUR + ']+', 'gu'); let m;
  while ((m = re.exec(s))) if (!forms.has(m[0])) out.push('PROSE    ' + fn + ' ' + m[0]);
}
const args = process.argv.slice(2);
if (args.includes('all')) out.forEach(l => console.log(l));
const n = k => out.filter(l => l.startsWith(k)).length;
console.log('pairs ' + pairs.length + ' · still Korean ' + n('KOREAN') + ' · written ' + nDone + ' · not in lookup ' + nNew + ' · pattern ' + n('PATTERN') + ' · encoding ' + n('ENCODING') +
  ' · diff ' + n('DIFF') + ' · conflicts ' + n('CONFLICT') + ' · word mismatches ' + n('WORD') + ' · prose mismatches ' + n('PROSE'));
if (args.includes('strict') && out.length) process.exit(1);
