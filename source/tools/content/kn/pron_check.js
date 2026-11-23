/* kn-en pron consistency checker (not part of the build). Rules: docs/profiles/kn.md §6, tools/content/kn/PRON-TOOL.md.
   usage: node tools/content/kn/pron_check.js [summary|all] [--strict]
   Collects every English -> pron pair from decks.js, extra.js (IDIOMS), lessons.js and more/*.js ({{ex:}} rows) and reports:
   - SCAFFOLD: a pron with no Kannada letter (the Korean scaffold text, IPA, Latin): not converted yet; no other check runs on it;
   - PATTERN: a pron that fails profile.json pronPattern;
   - ENCODING: a pron that is not NFC;
   - BANNED: a character §6 rule 13 bans (ZWNJ / ZWJ, the length marks U+0CD5 / U+0CD6, short ಒ / ೊ, ತ ಣ ಳ ಷ and every other letter
     outside the key, visarga, digits of both scripts, Latin, IPA other than ˈ), ಫ ಥ ದ without the dot, or a dot after a letter other than ಜ ವ ಶ ಫ ಥ ದ;
   - DOUBLED: one consonant written twice in a row (ಬಸ್ಸು, ಹ್ಯಾಪ್ಪಿ): §6 rule 12 forbids it and pronPattern cannot see it;
   - DIFF: a string that is in pron_lookup.json but carries a different aid (the lookup wins);
   - CONFLICT: one English string with two aids;
   - WORD: a word in a new (non-lookup) row whose respelling differs from every form the lookup gives that word;
   - PROSE: a respelling quoted in a note or lesson body (a Kannada token with ˈ) that matches no form in any pron field.
   Exit code 0; with --strict, 1 when any line other than SCAFFOLD is reported. */
'use strict';
const fs = require('fs');
const D = __dirname + '/';
const U = n => String.fromCodePoint(n);
const PROFILE = JSON.parse(fs.readFileSync(D + 'profile.json', 'utf8'));
const PRON_RE = new RegExp(PROFILE.pronPattern, 'u');
const KANNADA = new RegExp(PROFILE.nativeScript, 'u');
/* the key: 11 independent vowels, 21 consonant letters, 10 vowel signs, anusvara, ್, nukta; plus ˈ, space, period and slash as separators */
const OK_CHARS = new Set([...'ಅಆಇಈಉಊಎಏಐಓಔಕಗಙಚಜಟಡಥದನಪಫಬಮಯರಲವಶಸಹ', ...[0x0CBE, 0x0CBF, 0x0CC0, 0x0CC1, 0x0CC2, 0x0CC6, 0x0CC7, 0x0CC8, 0x0CCB, 0x0CCC, 0x0C82, 0x0CCD, 0x0CBC].map(U), 'ˈ', ' ', '.', '/']);
const NUK = U(0x0CBC), VIR = U(0x0CCD), NUK_BASE = new Set([...'ಜವಶಫಥದ']), NUK_ALWAYS = new Set([...'ಫಥದ']);
const CONS_RE = new RegExp('^[' + U(0x0C95) + '-' + U(0x0CB9) + ']$', 'u');
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
    else if (c === NUK && !NUK_BASE.has(cs[i - 1])) out.add('dot after ' + (cs[i - 1] ? cpName(cs[i - 1]) : 'nothing'));
    else if (NUK_ALWAYS.has(c) && cs[i + 1] !== NUK) out.add(c + ' without the dot');
  });
  return [...out];
}
/* consonant (+ dot) + ್ + the same consonant (+ the same dot) */
function doubled(p) {
  const cs = [...p], out = new Set();
  for (let i = 0; i < cs.length; i++) {
    if (!CONS_RE.test(cs[i])) continue;
    const a = cs[i + 1] === NUK ? cs[i] + NUK : cs[i], j = i + [...a].length;
    if (cs[j] !== VIR) continue;
    const b = cs[j + 2] === NUK ? cs[j + 1] + NUK : cs[j + 1];
    if (a === b) out.add(a + VIR + b);
  }
  return [...out];
}
const W = {}, forms = new Set(), out = [];
/* prose-only respellings with no pron row, each checked with pron_kn.js: add them here as the lessons need them (none yet) */
[].forEach(t => forms.add(t));
for (const k in L) { toks(L[k]).forEach(t => forms.add(t)); const e = norm(k), t = toks(L[k]); if (e.length === t.length) e.forEach((w, i) => { (W[w] = W[w] || new Set()).add(t[i]); }); }
const P = {}; let nNew = 0, nScaf = 0, nScafInLookup = 0;
for (const x of pairs) {
  (P[x.en] = P[x.en] || new Set()).add(x.p);
  if (!KANNADA.test(x.p)) { nScaf++; if (x.en in L) nScafInLookup++; out.push('SCAFFOLD ' + x.src + ' «' + x.en + '» ' + x.p + (x.en in L ? '  lookup: ' + L[x.en] : '  (not in the lookup)')); continue; }
  toks(x.p).forEach(t => forms.add(t));
  if (!PRON_RE.test(x.p)) out.push('PATTERN  ' + x.src + ' «' + x.en + '» ' + x.p);
  if (x.p !== x.p.normalize('NFC')) out.push('ENCODING ' + x.src + ' «' + x.en + '» ' + x.p + '  (not NFC: copy the tool output, do not retype)');
  const b = banned(x.p); if (b.length) out.push('BANNED   ' + x.src + ' «' + x.en + '» ' + x.p + '  ' + b.join(', '));
  const d = doubled(x.p); if (d.length) out.push('DOUBLED  ' + x.src + ' «' + x.en + '» ' + x.p + '  ' + d.join(', ') + '  (rule 12: one consonant, unless the IPA really has two)');
  if (x.en in L) { if (L[x.en] !== x.p) out.push('DIFF     ' + x.src + ' «' + x.en + '» ' + x.p + '  lookup: ' + L[x.en]); continue; }
  nNew++; const e = norm(x.en), t = toks(x.p);
  if (e.length === t.length) e.forEach((w, i) => { if (W[w] && !W[w].has(t[i])) out.push('WORD     ' + w + ' ' + t[i] + ' (lookup: ' + [...W[w]].join(', ') + ') in ' + x.src + ' «' + x.en + '»'); });
}
for (const k in P) if (P[k].size > 1) out.push('CONFLICT «' + k + '» ' + [...P[k]].join(' || '));
const KN = U(0x0C80) + '-' + U(0x0CE3);
for (const fn of ['decks.js', 'extra.js', ...bodyFiles]) {
  let s = fs.readFileSync(D + fn, 'utf8').replace(/\{\{ex:[^|}]*\|[^|}]*\|/g, '');
  if (fn === 'decks.js') s = s.split('\n').map(l => { const p = l.split(' | '); return p.length >= 4 ? p.slice(2).join(' | ') : l; }).join('\n');
  const re = new RegExp('[' + KN + 'ˈ]*ˈ[' + KN + ']+', 'gu'); let m;
  while ((m = re.exec(s))) if (!forms.has(m[0])) out.push('PROSE    ' + fn + ' ' + m[0]);
}
const args = process.argv.slice(2), strict = args.includes('--strict'), mode = args.find(a => !a.startsWith('--')) || 'summary';
if (mode === 'all') out.forEach(l => console.log(l));
const c = k => out.filter(l => l.startsWith(k)).length;
console.log('pairs ' + pairs.length + ' · scaffold (no Kannada yet) ' + nScaf + ' (' + nScafInLookup + ' in lookup, ' + (nScaf - nScafInLookup) + ' need new IPA) · new (not in lookup) ' + nNew +
  ' · pattern ' + c('PATTERN') + ' · encoding ' + c('ENCODING') + ' · banned ' + c('BANNED') + ' · doubled ' + c('DOUBLED') + ' · diff ' + c('DIFF') + ' · conflicts ' + c('CONFLICT') + ' · word mismatches ' + c('WORD') + ' · prose mismatches ' + c('PROSE'));
if (strict && out.some(l => !l.startsWith('SCAFFOLD'))) process.exit(1);
