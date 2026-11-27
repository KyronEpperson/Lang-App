/* am-en pron consistency checker (not part of the build). Rules: docs/profiles/am.md §6, tools/content/am/PRON-RULES.md.
   usage: node tools/content/am/pron_check.js [summary|all] [--strict]
   Collects every English -> pron pair from decks.js, extra.js (IDIOMS), lessons.js and more/*.js ({{ex:}} rows) and reports:
   - SCAFFOLD: a pron with no Ethiopic letter (the Korean scaffold text, IPA, Latin): not converted yet; no other check runs on it;
   - PATTERN:  a pron that fails profile.json pronPattern;
   - BANNED:   a character the aid never uses (anything outside the letters pron_am.js can produce, ˈ, space, ". ", " / "):
               ፡ ። ፣, combining marks U+135D–135F, letters outside U+1200–137F, Latin, digits, IPA other than ˈ;
   - DIFF:     a string that is in pron_lookup.json but carries a different aid (the lookup wins);
   - CONFLICT: one English string with two aids;
   - WORD:     a word in a new (non-lookup) row whose respelling differs from every form the lookup gives that word;
   - PROSE:    a respelling quoted in a note or lesson body (an Ethiopic token with ˈ) that matches no form in any pron field.
   Exit code 0; with --strict, 1 when any line other than SCAFFOLD is reported. */
'use strict';
const fs = require('fs');
const D = __dirname + '/';
const { letters } = require(D + 'pron_am.js');
const PROFILE = JSON.parse(fs.readFileSync(D + 'profile.json', 'utf8'));
const PRON_RE = new RegExp(PROFILE.pronPattern, 'u');
const ETH = /[ሀ-፿]/u;
const OK_CHARS = new Set([...letters(), 'ˈ', ' ', '.', '/']);
const L = fs.existsSync(D + 'pron_lookup.json') ? JSON.parse(fs.readFileSync(D + 'pron_lookup.json', 'utf8')) : {};
const pairs = [];
const decks = require(D + 'decks.js');
for (const [n, t] of Object.entries(decks)) String(t).split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && f[1].trim()) pairs.push({ en: f[0].trim(), p: f[1].trim(), src: 'decks:' + n }); });
(fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '').split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 3 && f[2].trim()) pairs.push({ en: f[0].trim(), p: f[2].trim(), src: 'IDIOMS' }); });
const bodyFiles = ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js'].filter(fn => fs.existsSync(D + fn));
for (const fn of bodyFiles) { const t = fs.readFileSync(D + fn, 'utf8'); let m; const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; while ((m = ex.exec(t))) if (m[2].trim()) pairs.push({ en: m[1].trim(), p: m[2].trim(), src: fn }); }
const norm = s => s.toLowerCase().replace(/’/g, "'").replace(/[.,!?;:"()…]/g, ' ').split(/\s+/).filter(Boolean);
const toks = p => p.split(/\. | \/ | /).filter(Boolean);
const cpName = c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
const banned = p => [...new Set([...p].filter(c => !OK_CHARS.has(c)).map(cpName))];
const W = {}, forms = new Set(), out = [];
/* prose-only respellings with no pron row, each made with pron_am.js: add them here as the lessons need them */
[].forEach(t => forms.add(t));
for (const k in L) { toks(L[k]).forEach(t => forms.add(t)); const e = norm(k), t = toks(L[k]); if (e.length === t.length) e.forEach((w, i) => { (W[w] = W[w] || new Set()).add(t[i]); }); }
const P = {}; let nNew = 0, nScaf = 0, nScafInLookup = 0;
for (const x of pairs) {
  (P[x.en] = P[x.en] || new Set()).add(x.p);
  if (!ETH.test(x.p)) { nScaf++; if (x.en in L) nScafInLookup++; out.push('SCAFFOLD ' + x.src + ' «' + x.en + '» ' + x.p + (x.en in L ? '  lookup: ' + L[x.en] : '  (not in the lookup)')); continue; }
  toks(x.p).forEach(t => forms.add(t));
  if (!PRON_RE.test(x.p)) out.push('PATTERN  ' + x.src + ' «' + x.en + '» ' + x.p);
  const b = banned(x.p); if (b.length) out.push('BANNED   ' + x.src + ' «' + x.en + '» ' + x.p + '  ' + b.join(', '));
  if (x.en in L) { if (L[x.en] !== x.p) out.push('DIFF     ' + x.src + ' «' + x.en + '» ' + x.p + '  lookup: ' + L[x.en]); continue; }
  nNew++; const e = norm(x.en), t = toks(x.p);
  if (e.length === t.length) e.forEach((w, i) => { if (W[w] && !W[w].has(t[i])) out.push('WORD     ' + w + ' ' + t[i] + ' (lookup: ' + [...W[w]].join(', ') + ') in ' + x.src + ' «' + x.en + '»'); });
}
for (const k in P) if (P[k].size > 1) out.push('CONFLICT «' + k + '» ' + [...P[k]].join(' || '));
for (const fn of ['decks.js', 'extra.js', ...bodyFiles]) {
  let s = fs.readFileSync(D + fn, 'utf8').replace(/\{\{ex:[^|}]*\|[^|}]*\|/g, '');
  if (fn === 'decks.js') s = s.split('\n').map(l => { const p = l.split(' | '); return p.length >= 4 ? p.slice(2).join(' | ') : l; }).join('\n');
  const re = /[ሀ-፿ˈ]*ˈ[ሀ-፿]+/gu; let m;
  while ((m = re.exec(s))) if (!forms.has(m[0])) out.push('PROSE    ' + fn + ' ' + m[0]);
}
const args = process.argv.slice(2), strict = args.includes('--strict'), mode = args.find(a => !a.startsWith('--')) || 'summary';
if (mode === 'all') out.forEach(l => console.log(l));
const c = k => out.filter(l => l.startsWith(k)).length;
console.log('pairs ' + pairs.length + ' · scaffold (no fidel yet) ' + nScaf + ' (' + nScafInLookup + ' in lookup, ' + (nScaf - nScafInLookup) + ' need new IPA) · new (not in lookup) ' + nNew +
  ' · pattern ' + c('PATTERN') + ' · banned ' + c('BANNED') + ' · diff ' + c('DIFF') + ' · conflicts ' + c('CONFLICT') + ' · word mismatches ' + c('WORD') + ' · prose mismatches ' + c('PROSE'));
if (strict && out.some(l => !l.startsWith('SCAFFOLD'))) process.exit(1);
