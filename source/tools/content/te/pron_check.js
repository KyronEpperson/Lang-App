/* te-en pron consistency checker (not part of the build). Rules: docs/profiles/te.md §6, tools/content/te/PRON-TOOL.md.
   usage: node tools/content/te/pron_check.js [summary|all] [--strict]
   Collects every English -> pron pair from decks.js, extra.js (IDIOMS), lessons.js and more/*.js ({{ex:}} rows) and reports:
   - SCAFFOLD: a pron with no Telugu letter (the Korean scaffold text, IPA, Latin): not converted yet; no other check runs on it;
   - PATTERN: a pron that fails profile.json pronPattern;
   - ENCODING: a pron that is not NFC;
   - BANNED: a character §6 rule 14 bans (ZWNJ / ZWJ, short ఒ / ొ, aspirates other than థ ఝ, శ ళ ణ, visarga, digits, Latin, IPA other than ˈ),
     or a nukta after a letter other than జ వ థ ద ఝ;
   - DIFF: a string that is in pron_lookup.json but carries a different aid (the lookup wins);
   - CONFLICT: one English string with two aids;
   - WORD: a word in a new (non-lookup) row whose respelling differs from every form the lookup gives that word;
   - PROSE: a respelling quoted in a note or lesson body (a Telugu token with ˈ) that matches no form in any pron field.
   Exit code 0; with --strict, 1 when any line other than SCAFFOLD is reported. */
'use strict';
const fs = require('fs');
const D = __dirname + '/';
const U = n => String.fromCodePoint(n);
const PROFILE = JSON.parse(fs.readFileSync(D + 'profile.json', 'utf8'));
const PRON_RE = new RegExp(PROFILE.pronPattern, 'u');
const TELUGU = new RegExp(PROFILE.nativeScript, 'u');
/* rule 14: the 33 letters, 10 vowel signs, sunna, pollu, nukta; plus ˈ, space, period and slash as separators */
const OK_CHARS = new Set([...'అఆఇఈఉఊఎఏఐఓఔకగఙచజఝటడథదనపఫబమయరలవషసహ', ...[0x0C3E, 0x0C3F, 0x0C40, 0x0C41, 0x0C42, 0x0C46, 0x0C47, 0x0C48, 0x0C4B, 0x0C4C, 0x0C02, 0x0C4D, 0x0C3C].map(U), 'ˈ', ' ', '.', '/']);
const NUK = U(0x0C3C), NUK_BASE = new Set([...'జవథదఝ']);
const L = JSON.parse(fs.readFileSync(D + 'pron_lookup.json', 'utf8'));
const pairs = [];
const decks = require(D + 'decks.js');
for (const [n, t] of Object.entries(decks)) t.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && f[1].trim()) pairs.push({ en: f[0].trim(), p: f[1].trim(), src: 'decks:' + n }); });
(fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '').split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 3) pairs.push({ en: f[0].trim(), p: f[2].trim(), src: 'IDIOMS' }); });
const bodyFiles = ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js'].filter(fn => fs.existsSync(D + fn));
for (const fn of bodyFiles) { const t = fs.readFileSync(D + fn, 'utf8'); let m; const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; while ((m = ex.exec(t))) if (m[2].trim()) pairs.push({ en: m[1].trim(), p: m[2].trim(), src: fn }); }
const norm = s => s.toLowerCase().replace(/’/g, "'").replace(/[.,!?;:"()…]/g, ' ').split(/\s+/).filter(Boolean);
const toks = p => p.split(/\. | \/ | /).filter(Boolean);
const cpName = c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
function banned(p) {
  const cs = [...p], out = new Set();
  cs.forEach((c, i) => {
    if (!OK_CHARS.has(c)) out.add(cpName(c));
    else if (c === NUK && !NUK_BASE.has(cs[i - 1])) out.add('nukta after ' + (cs[i - 1] ? cpName(cs[i - 1]) : 'nothing'));
  });
  return [...out];
}
const W = {}, forms = new Set(), out = [];
/* prose-only respellings with no pron row, each checked with pron_te.js: add them here as the lessons need them (none yet) */
[].forEach(t => forms.add(t));
for (const k in L) { toks(L[k]).forEach(t => forms.add(t)); const e = norm(k), t = toks(L[k]); if (e.length === t.length) e.forEach((w, i) => { (W[w] = W[w] || new Set()).add(t[i]); }); }
const P = {}; let nNew = 0, nScaf = 0, nScafInLookup = 0;
for (const x of pairs) {
  (P[x.en] = P[x.en] || new Set()).add(x.p);
  if (!TELUGU.test(x.p)) { nScaf++; if (x.en in L) nScafInLookup++; out.push('SCAFFOLD ' + x.src + ' «' + x.en + '» ' + x.p + (x.en in L ? '  lookup: ' + L[x.en] : '  (not in the lookup)')); continue; }
  toks(x.p).forEach(t => forms.add(t));
  if (!PRON_RE.test(x.p)) out.push('PATTERN  ' + x.src + ' «' + x.en + '» ' + x.p);
  if (x.p !== x.p.normalize('NFC')) out.push('ENCODING ' + x.src + ' «' + x.en + '» ' + x.p + '  (not NFC: copy the tool output, do not retype)');
  const b = banned(x.p); if (b.length) out.push('BANNED   ' + x.src + ' «' + x.en + '» ' + x.p + '  ' + b.join(', '));
  if (x.en in L) { if (L[x.en] !== x.p) out.push('DIFF     ' + x.src + ' «' + x.en + '» ' + x.p + '  lookup: ' + L[x.en]); continue; }
  nNew++; const e = norm(x.en), t = toks(x.p);
  if (e.length === t.length) e.forEach((w, i) => { if (W[w] && !W[w].has(t[i])) out.push('WORD     ' + w + ' ' + t[i] + ' (lookup: ' + [...W[w]].join(', ') + ') in ' + x.src + ' «' + x.en + '»'); });
}
for (const k in P) if (P[k].size > 1) out.push('CONFLICT «' + k + '» ' + [...P[k]].join(' || '));
const TE = U(0x0C00) + '-' + U(0x0C63);
for (const fn of ['decks.js', 'extra.js', ...bodyFiles]) {
  let s = fs.readFileSync(D + fn, 'utf8').replace(/\{\{ex:[^|}]*\|[^|}]*\|/g, '');
  if (fn === 'decks.js') s = s.split('\n').map(l => { const p = l.split(' | '); return p.length >= 4 ? p.slice(2).join(' | ') : l; }).join('\n');
  const re = new RegExp('[' + TE + 'ˈ]*ˈ[' + TE + ']+', 'gu'); let m;
  while ((m = re.exec(s))) if (!forms.has(m[0])) out.push('PROSE    ' + fn + ' ' + m[0]);
}
const args = process.argv.slice(2), strict = args.includes('--strict'), mode = args.find(a => !a.startsWith('--')) || 'summary';
if (mode === 'all') out.forEach(l => console.log(l));
const c = k => out.filter(l => l.startsWith(k)).length;
console.log('pairs ' + pairs.length + ' · scaffold (no Telugu yet) ' + nScaf + ' (' + nScafInLookup + ' in lookup, ' + (nScaf - nScafInLookup) + ' need new IPA) · new (not in lookup) ' + nNew +
  ' · pattern ' + c('PATTERN') + ' · encoding ' + c('ENCODING') + ' · banned ' + c('BANNED') + ' · diff ' + c('DIFF') + ' · conflicts ' + c('CONFLICT') + ' · word mismatches ' + c('WORD') + ' · prose mismatches ' + c('PROSE'));
if (strict && out.some(l => !l.startsWith('SCAFFOLD'))) process.exit(1);
