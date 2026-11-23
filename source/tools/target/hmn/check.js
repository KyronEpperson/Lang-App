/* en-hmn writer check: what gen/validate/rpa_check/coverage do NOT catch.
   usage: node tools/target/hmn/check.js [file ...]      (default: every decks*.js, extra*.js, lessons*.js in tools/target/hmn/)
   1. Deck rows: the pron must equal respell(target) exactly (validate.js only checks the pattern and that equal strings agree).
   2. {{ex:target|pron|English}} rows in lesson bodies: pron must equal respell(target).
   3. Lesson prose: every <b>…</b> holds Hmong only (or a bare letter being taught: <b>x</b>, <b>-b</b>, <b>ntxh</b>) (respell must accept it: a typo throws), and each of its words must be in
      tools/hmong/GLOSSARY.tsv or tools/target/hmn/NEW-WORDS.tsv. rpa_check.js and coverage.js do not read lesson prose, only {{ex:}} rows and <td class="k"> cells.
      A <b>Hmong</b> followed by <i>a tone line</i> must have the tone line respell gives.
   4. DIALOG / EXAMPLES / PATTERNS Hmong fields and practice answers (order tiles and alternatives, fill answers and options, type answers and fallback words):
      respell must accept them (a typo or an English word there is an error; English belongs in prompts, hints, why and mc options).
   Green Hmong forms (dlev, moog) and placeholders (X loj tshaj Y) stay OUT of <b> and <td class="k">: write them as plain text in a note.
   Multi-word ALLOW.txt entries (St. Paul) match as a phrase.  node check.js --selftest  tests the coverage matcher.
   Exit 1 on any error. Warnings (-d outside the set, a name at the start of a sentence) are printed, not counted. */
'use strict';
const fs = require('fs'), path = require('path');
const DIR = __dirname, ROOT = path.join(DIR, '..', '..', '..');
const R = require(path.join(DIR, 'respell.js')); const LIB = require(path.join(ROOT, 'tools', 'target', 'lib.js')); const COV = require(path.join(ROOT, 'tools', 'hmong', 'coverage.js'));
const G = COV.loadGlossary(path.join(ROOT, 'tools', 'hmong', 'GLOSSARY.tsv')); const words = new Set(G.words), folded = new Set(G.folded);
const NW = path.join(DIR, 'NEW-WORDS.tsv'); if (fs.existsSync(NW)) { try { const n = COV.loadGlossary(NW); n.words.forEach(w => words.add(w)); n.folded.forEach(w => folded.add(w)); } catch (e) {} }
const RCK = require(path.join(ROOT, 'tools', 'hmong', 'rpa_check.js')); const allow = RCK.loadAllow();
const errs = [], warns = [];
const E = (where, msg) => errs.push(where + ': ' + msg);
const tryR = (s, where, soft) => { try { const r = R.respell(s); R.warnings().forEach(w => warns.push(where + ': ' + w)); return r; } catch (e) { if (soft) warns.push(where + ': ' + e.message + ' (wrong option)'); else E(where, e.message); return null; } };
const clean = s => String(s).replace(/_{2,}/g, ' ').replace(/\([^()]*\)/g, ' ').trim();
/* a letter or onset being taught (x, -b, ntxh, "j, v"): not a word, so neither respell nor the glossary applies */
const isLetters = x => { const ys = String(x).trim().split(/[\s,/]+/).filter(Boolean); return ys.length > 0 && ys.every(y => /^-?[a-z]{1,4}-?$/i.test(y) && RCK.checkToken(y.replace(/-/g, ''), { allow: new Set() }).kind === 'letter'); };
/* every word in the glossary, NEW-WORDS or ALLOW.txt; neighbours that join into a run-together headword count too (daus las = dauslas), as in coverage.js */
/* multi-word ALLOW entries (St. Paul, Medical Assistance) are masked as whole phrases first, as rpa_check.js tokens() does; their words alone are not in allow.words */
const escRe = x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const maskPhrases = s => { let t = String(s); for (const ph of allow.phrases) t = t.replace(new RegExp('(^|[^A-Za-z])' + escRe(ph) + '(?=$|[^A-Za-z])', 'gi'), (m, a) => a + ' '.repeat(m.length - a.length)); return t; };
const uncovered = s => {
  const toks = []; maskPhrases(String(s).replace(/<[^>]*>/g, ' ')).split(/[^A-Za-z'’-]+/).forEach(tok => tok.split('-').forEach(w => { w = w.replace(/^['’]|['’]$/g, ''); if (w) toks.push(w); }));
  const ok = toks.map(w => { const low = w.toLowerCase(); return allow.words.has(low) || words.has(low) || folded.has(low); });
  toks.forEach((_, i) => { if (ok[i]) return; for (let a = Math.max(0, i - 3); a <= i; a++) for (let z = Math.max(i, a + 1); z < Math.min(toks.length, a + 4); z++) { if (folded.has(toks.slice(a, z + 1).join('').toLowerCase())) for (let k = a; k <= z; k++) ok[k] = true; } });
  return toks.filter((_, i) => !ok[i]);
};
const covered = (s, where, soft) => {
  uncovered(s).forEach(w => (soft ? m => warns.push(where + ': ' + m) : m => E(where, m))('«' + w + '» is not in GLOSSARY.tsv or NEW-WORDS.tsv' + (soft ? ' (a wrong option: prefer a real word, never an invented syllable)' : '')));
};

if (process.argv[2] === '--selftest') {
  let n = 0, fail = 0; const t = (s, want) => { n++; const got = uncovered(s).join(' '); if (got !== want) { fail++; console.log('FAIL «' + s + '» uncovered «' + got + '», want «' + want + '»'); } };
  t('Kuv nyob St. Paul.', ''); t('Kuv nyob Saint Paul', ''); t('Kuv nyob hauv North Carolina', ''); t('Medical Assistance', '');
  t('Kuv nyob Paul', 'Paul'); t('Kuv nyob St.', 'St'); t('daus las', ''); t('kuv xyzzyq', 'xyzzyq');
  console.log('hmn check selftest: ' + n + ' checks · ' + (fail ? 'FAIL ' + fail : 'OK')); process.exit(fail ? 1 : 0);
}
const files = process.argv.slice(2).length ? process.argv.slice(2).map(f => path.resolve(f)) : fs.readdirSync(DIR).filter(f => /^(decks|extra|lessons).*\.js$/.test(f)).sort().map(f => path.join(DIR, f));
for (const f of files) {
  const b = path.basename(f); let mod; try { mod = require(f); } catch (e) { E(b, 'cannot load: ' + e.message); continue; }
  if (/^decks/.test(b)) for (const [deck, txt] of Object.entries(mod)) { let rows; try { rows = LIB.rows(txt, 4, deck); } catch (e) { E(b, e.message); continue; }
    rows.forEach((r, i) => { const w = b + ' «' + deck + '» card ' + (i + 1) + ' (' + r[0] + ')'; const p = tryR(r[0], w); if (p !== null && p !== r[1]) E(w, 'pron «' + r[1] + '» should be «' + p + '»'); }); }
  if (/^extra/.test(b)) {
    const take = (txt, n, label, cols) => { let rows; try { rows = LIB.rows(txt, n, b + ' ' + label); } catch (e) { E(b, e.message); return; } rows.forEach((r, i) => cols.forEach(c => { const w = b + ' ' + label + ' ' + (i + 1) + ' col ' + (c + 1); if (tryR(clean(r[c]), w) !== null) covered(clean(r[c]), w); })); };
    take(mod.DIALOG, 4, 'DIALOG', [0, 1, 2]); take(mod.EXAMPLES, 3, 'EXAMPLES', [0, 1]); take(mod.PATTERNS, 4, 'PATTERNS', [0, 2]);
  }
  if (/^lessons/.test(b)) (Array.isArray(mod) ? mod : []).forEach(L => { const w0 = b + ' lesson ' + L.id; const body = String(L.body || '');
    [...body.matchAll(/\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g)].forEach(m => { const w = w0 + ' {{ex:' + m[1].trim() + '}}'; const p = tryR(m[1].trim(), w); if (p !== null && p !== m[2].trim()) E(w, 'pron «' + m[2].trim() + '» should be «' + p + '»'); if (p !== null) covered(m[1], w); });
    const prose = body.replace(/\{\{ex:[^}]*\}\}/g, ' ');
    [...prose.matchAll(/<b>([\s\S]*?)<\/b>(\s*<i>([\s\S]*?)<\/i>)?/g)].forEach(m => { const x = m[1].replace(/<[^>]*>/g, ' ').trim(); if (!x || isLetters(x)) return; const w = w0 + ' <b>' + x + '</b>'; const p = tryR(x.replace(/…|\.\.\./g, ' '), w); if (p === null) return; covered(x, w);
      if (m[3] !== undefined && new RegExp(R.pattern()).test(m[3].trim()) && m[3].trim() !== p) E(w, 'tone line <i>' + m[3].trim() + '</i> should be <i>' + p + '</i>'); });
    [...prose.matchAll(/<td class="k">([\s\S]*?)<\/td>/g)].forEach(m => { const x = m[1].replace(/<[^>]*>/g, ' ').trim(); if (!x || isLetters(x)) return; const w = w0 + ' <td class="k">' + x + '</td>'; if (tryR(x, w) !== null) covered(x, w); });
    (L.practice || []).forEach((r0, i) => { const r = r0.filter(x => x !== '!strict'); const k = r[0]; const w = w0 + ' practice ' + (i + 1) + ' (' + k + ')'; const hm = [], d = [];
      const fill = x => String(r[1]).replace(/_{2,}/, x); /* a fill answer is checked inside its sentence, so a blank inside a word (po__ -> b) checks the word pob */
      if (k === 'or') { hm.push(r[2].replace(/ \| /g, ' ')); LIB.tiles(r[3]).forEach(x => d.push(x)); }
      if (k === 'fi') { r[3].split('|').forEach(x => hm.push(fill(x))); r[4].split('|').forEach(x => d.push(fill(x))); }
      if (k === 'ty') { r[2].split('|').forEach(x => hm.push(x)); if (r[4]) LIB.tiles(r[4]).forEach(x => d.push(x)); }
      hm.filter(x => x && x.trim() && !isLetters(x)).forEach(x => { const c = x.replace(/\([^()]*\)/g, ' '); if (tryR(c, w + ' «' + x + '»') !== null) covered(c, w); });
      d.filter(x => x && x.trim() && !isLetters(x)).forEach(x => { const c = x.replace(/\([^()]*\)/g, ' '); if (tryR(c, w + ' wrong option «' + x + '»', true) !== null) covered(c, w, true); }); });
  });
}
if (warns.length) console.log('WARN\n - ' + warns.join('\n - '));
console.log(errs.length ? 'hmn check: FAIL ' + errs.length + '\n - ' + errs.join('\n - ') : 'hmn check: OK (' + files.length + ' file(s))');
process.exit(errs.length ? 1 : 0);
