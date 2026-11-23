/* White Hmong (RPA) -> the en-hmn pron line: one tone word per syllable (profile docs/profiles/en-hmn.md §6.1, §6.2).
   Deterministic: the same RPA always gives the same line, so writers never type a pron.
   The tone is the syllable's last letter: -b high · -j falling · -v rising · (none) mid · -s low · -g falling-breathy · -m creaky · -d rising-final.
     nyob zoo -> high · mid        ua tsaug -> mid · falling-breathy        kuv hlub koj -> rising · high · falling
   Syllables are parsed with the parser of tools/hmong/rpa_check.js (required, not copied): onset (56 White spellings or none) + vowel (13) + one optional tone letter.
   Every word must be legal White Hmong RPA, or the call THROWS, so a typo never gets a pron:
     illegal spellings (kuvb, bus, wa, phô), Green-only spellings (dlev, plaab), marginal onsets (nloog: write mloog, g-, hnl-), a bare letter (ntxh),
     a digit glued to a word (kheej7), a capitalised word that is neither RPA nor in tools/hmong/ALLOW.txt.
   A run-together word (Askiv, Amelika, menyuam) gets one tone word per syllable only when it is a word of tools/hmong/GLOSSARY.tsv or tools/target/hmn/NEW-WORDS.tsv;
   any other run-together spelling throws (RPA.md §7 blind spot: wa = w + a).
   Not Hmong syllables, shown as — : English words kept in Hmong text that ALLOW.txt lists (hnub Monday -> high · —; Kuv nyob St. Paul -> rising · high · — · —),
   clan and place names in English spelling (Vang, Xiong, Fresno), and numerals (7 sawv ntxov -> — · rising · rising).
   A capitalised word that is both legal RPA and an ALLOW.txt name (Lee, Lo, Pha) is a name (—) inside a sentence and RPA at the start of a sentence (warns).
   -d outside the phrase-final set (ntawd nkawd tod nrad nraud ped saud tid thaud) warns. Punctuation is dropped.
   usage: node respell.js "Koj nyob li cas?"   ->  Koj nyob li cas? -> falling · high · mid · low
          node respell.js --aid "xav tsev"    ->  the profile §6.3 reading-guide rows that apply (x = English s …); lesson text only, never the pron
          node respell.js --pattern           prints pronPattern (equal to tools/target/hmn/profile.json pronPattern)
          node respell.js --selftest
   module: const { respell, aid, pattern, warnings, syllables } = require('./respell.js') */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..', '..');
const RC = require(path.join(ROOT, 'tools', 'hmong', 'rpa_check.js'));
const COV = require(path.join(ROOT, 'tools', 'hmong', 'coverage.js'));

const TONE = { b: 'high', j: 'falling', v: 'rising', '': 'mid', s: 'low', g: 'falling-breathy', m: 'creaky', d: 'rising-final' };
const NOT_HMONG = '—';
const D_WORDS = new Set('nrad nraud ped saud tid tod thaud ntawd nkawd'.split(' '));
let warned = [];

/* glossary words: every word of GLOSSARY.tsv and NEW-WORDS.tsv, and every headword with its spaces removed (menyuam = me nyuam) */
let LEX = null;
function lex() {
  if (LEX) return LEX;
  const g = COV.loadGlossary(path.join(ROOT, 'tools', 'hmong', 'GLOSSARY.tsv')); const words = new Set(g.words), folded = new Set(g.folded);
  const nw = path.join(__dirname, 'NEW-WORDS.tsv');
  if (fs.existsSync(nw)) { try { const n = COV.loadGlossary(nw); n.words.forEach(w => words.add(w)); n.folded.forEach(w => folded.add(w)); } catch (e) {} }
  return (LEX = { words, folded });
}

/* one word (letters only) -> array of { text, onset, vowel, tone } or a NOT_HMONG marker; throws on anything that is not legal White RPA */
function word(tok, sentenceStart, allow) {
  const t = tok.replace(/^['’](?=[a-z])/i, ''); const low = t.toLowerCase(); const cap = /^[A-Z]/.test(t);
  if (/\d/.test(t)) { if (/^[\d.,:%/]+$/.test(t)) return NOT_HMONG; throw new Error('digit inside a word «' + tok + '» (reduplication sign? write the word twice: RPA.md §5 rule 6)'); }
  const p = RC.syllable(low);
  const listed = allow.words.has(low);
  if (p.length) {
    if (cap && listed && !sentenceStart) return NOT_HMONG;
    if (cap && listed && sentenceStart) warned.push('«' + t + '» at the start of a sentence read as RPA (' + TONE[p[0].tone] + '); if it is the name ' + t + ', move it or expect —');
    if (p[0].tone === 'd' && !D_WORDS.has(low)) warned.push('-d outside the phrase-final set: «' + t + '» (list it in NEW-WORDS.tsv with a source)');
    return [Object.assign({ text: low }, p[0])];
  }
  if (listed) return NOT_HMONG;
  const ck = RC.checkToken(t, { allow: new Set(), english: null, sentenceStart: false, strictNames: true });
  if (ck.kind === 'green') throw new Error('Green Mong spelling «' + tok + '» (' + ck.reason + '): White Hmong only (RPA.md §5 rule 5)');
  if (ck.kind === 'marginal') throw new Error('marginal onset in «' + tok + '» (' + ck.reason + '): not a White Hmong spelling in this course (nloog -> mloog)');
  if (ck.kind === 'letter') throw new Error('«' + tok + '» is a letter, not a syllable: a pron is for words');
  if (ck.kind === 'joined') {
    const seg = RC.segment(low);
    if (seg && (lex().words.has(low) || lex().folded.has(low))) return seg.map(s => ({ text: s.text, onset: s.onset, vowel: s.vowel, tone: s.tone }));
    throw new Error('run-together spelling «' + tok + '» (' + (seg ? seg.map(s => s.text).join(' ') : '?') + ') is not a glossary word: write the syllables apart, or add the word to NEW-WORDS.tsv with a source');
  }
  if (ck.kind === 'acronym' && /^(HIV|AIDS|TB|OK)$/.test(t)) return NOT_HMONG;
  throw new Error('not White Hmong RPA: «' + tok + '»' + (ck.reason ? ' (' + ck.reason + ')' : '') + (cap ? ' — a name or English word must be listed in tools/hmong/ALLOW.txt' : ''));
}

/* text -> [{ token, syl: [...] | '—' }] */
function syllables(text) {
  const allow = RC.loadAllow(); let s = String(text == null ? '' : text).normalize('NFC');
  if (/[^\x00-\x7F—–’‘“”«»…]/.test(s)) { const bad = [...new Set([...s].filter(c => /[^\x00-\x7F—–’‘“”«»…]/.test(c)))].join(' '); throw new Error('non-ASCII letter in «' + text + '»: ' + bad + ' (RPA uses no diacritics: RPA.md §5 rule 4)'); }
  /* multi-word ALLOW entries (St. Paul) count as one English word per space-separated part */
  const out = []; const marks = [];
  for (const ph of allow.phrases) { const re = new RegExp('(^|[^A-Za-z])(' + ph.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?=$|[^A-Za-z])', 'gi'); s = s.replace(re, (m, a, b) => { marks.push(b); return a + ' \u0001' + (marks.length - 1) + '\u0001 '; }); }
  const re = /\u0001(\d+)\u0001|[A-Za-z0-9'’]+(?:[-‐‑][A-Za-z0-9'’]+)*|[.!?:;]/g; let m, start = true;
  while ((m = re.exec(s))) {
    if (m[1] !== undefined) { marks[+m[1]].split(/\s+/).filter(Boolean).forEach(w => out.push({ token: w, syl: NOT_HMONG })); start = false; continue; }
    if (/^[.!?:;]$/.test(m[0])) { start = true; continue; }
    m[0].split(/[-‐‑]/).forEach(part => { const tok = part.replace(/['’]$/, ''); if (!tok) return; out.push({ token: tok, syl: word(tok, start, allow) }); start = false; });
  }
  return out;
}

function respell(text) {
  const ws = syllables(text); const line = [];
  ws.forEach(w => { if (w.syl === NOT_HMONG) line.push(NOT_HMONG); else w.syl.forEach(x => line.push(TONE[x.tone])); });
  if (!ws.some(w => w.syl !== NOT_HMONG)) throw new Error('no Hmong syllable in «' + text + '»');
  return line.join(' · ');
}

/* the profile §6.3 reading guide, row by row: which rows apply to a text (for lesson prose; never part of the pron) */
const AID = [
  [s => s.tone && s.tone !== '', 'the last letter (b j v s g m d) is the tone, not a sound'],
  [s => s.vowel === 'ee', 'ee = a nasal vowel, about "eng"'], [s => s.vowel === 'oo', 'oo = a nasal vowel, about "ong"'],
  [s => s.vowel === 'w', 'w is a vowel, like the i in "roses" with spread lips'],
  [s => s.vowel === 'ia', 'ia ≈ "ee-uh"'], [s => s.vowel === 'ua', 'ua ≈ "oo-uh"'], [s => s.vowel === 'ai', 'ai ≈ "eye"'], [s => s.vowel === 'au', 'au ≈ "ow"'], [s => s.vowel === 'aw', 'aw = a + the vowel w'],
  [s => s.onset === 'x', 'x = English s'], [s => s.onset === 's', 's ≈ sh'], [s => s.onset === 'z', 'z ≈ the s in "measure"'], [s => /^(r|rh|nr|nrh)$/.test(s.onset), 'r = a t with the tongue curled back'],
  [s => /^(c|ch|nc|nch)$/.test(s.onset), 'c ≈ the ty in "got you"'], [s => s.onset === 'xy', 'xy ≈ the h in "huge"'], [s => /^(q|qh|nq|nqh)$/.test(s.onset), 'q = a k made far back in the throat'],
  [s => /^(tx|txh|ntx|ntxh)$/.test(s.onset), 'tx = ts as in "cats"'], [s => /^(ts|tsh|nts|ntsh)$/.test(s.onset), 'ts ≈ ch with the tongue curled back'], [s => s.onset === 'hl', 'hl = a breathy l (Welsh ll)'],
  [s => s.onset === 'd' || s.onset === 'dh', 'd = English d'],
  [s => /^(ph|th|kh|qh|txh|tsh|ch|rh|dh|plh)$/.test(s.onset), 'h after a consonant = a puff of air'],
  [s => /^(hm|hn|hny|hml)$/.test(s.onset), 'h before a nasal = a breathy nasal'],
  [s => /^n(p|t|k|q|tx|ts|c|r|pl)h?$/.test(s.onset), 'n before a consonant = a nasal start (np ≈ mb, nt ≈ nd, nk ≈ ngg)'],
  [s => /^n(ph|th|kh|qh|txh|tsh|ch|rh|plh)$/.test(s.onset), 'n + consonant + h = a nasal start and a puff'],
];
function aid(text) { const rows = []; syllables(text).forEach(w => { if (w.syl === NOT_HMONG) return; w.syl.forEach(s => AID.forEach(([f, msg]) => { if (f(s) && !rows.includes(msg)) rows.push(msg); })); }); return rows; }

const WORDS = Object.values(TONE);
function pattern() { const W = '(?:' + WORDS.join('|') + '|' + NOT_HMONG + ')'; return '^' + W + '(?: · ' + W + ')*$'; }
function warnings() { const w = warned; warned = []; return w; }
module.exports = { respell, aid, pattern, warnings, syllables, TONE };

/* ---- self-test ---- */
function selftest() {
  let n = 0, fail = 0; const t = (c, m) => { n++; if (!c) { fail++; console.log('FAIL ' + m); } };
  const eq = (src, want) => { let got; try { got = respell(src); } catch (e) { got = 'THROW ' + e.message; } t(got === want, src + ' -> ' + got + ' (want ' + want + ')'); };
  const throws = (src, why) => { let ok = false; try { respell(src); } catch (e) { ok = true; } t(ok, 'must throw (' + why + '): ' + src); };
  /* the minimal set and every tone letter (profile §6.2) */
  eq('pob', 'high'); eq('poj', 'falling'); eq('pov', 'rising'); eq('po', 'mid'); eq('pos', 'low'); eq('pog', 'falling-breathy'); eq('pom', 'creaky'); eq('tod', 'rising-final');
  eq('Hmoob', 'high'); eq('dej', 'falling'); eq('kuv', 'rising'); eq('mus', 'low'); eq('neeg', 'falling-breathy'); eq('niam', 'creaky'); eq('ntawd', 'rising-final');
  /* the profile's examples */
  eq('nyob zoo', 'high · mid'); eq('ua tsaug', 'mid · falling-breathy'); eq('kuv hlub koj', 'rising · high · falling'); eq('Nyob zoo!', 'high · mid');
  eq('Koj nyob li cas?', 'falling · high · mid · low'); eq('Kuv lub npe hu ua Paj.', 'rising · high · mid · mid · mid · falling');
  eq('Sib ntsib dua', 'high · high · mid'); eq('Thov txim', 'rising · creaky'); eq('Kuv tsis to taub.', 'rising · low · mid · high');
  /* RPA.md §8: 40 glossary words covering every White onset, vowel and tone (expected lines written by hand) */
  const SPEC = [['ib tag hmo', 'high · falling-breathy · mid'], ['nees nkaum cuaj', 'low · creaky · falling'], ['mus kav khw', 'low · rising · mid'], ['tsev hais plaub', 'rising · low · high'], ['siab zoo', 'high · mid'],
    ['ntawd', 'rising-final'], ['qaug dab peg', 'falling-breathy · high · falling-breathy'], ['hnub dhau los', 'high · mid · low'], ['hli nra', 'mid · mid'], ['raug nqi', 'falling-breathy · mid'],
    ['xas npus', 'low · low'], ['chaw nyob', 'mid · high'], ['pheej yig', 'falling · falling-breathy'], ['qhov ntxa', 'rising · mid'], ['thov txim', 'rising · creaky'],
    ['viv ncaus', 'rising · low'], ['xyoo tshiab', 'mid · high'], ['nyob zoo', 'high · mid'], ['dej', 'falling'], ['niam txiv', 'creaky · rising'],
    ['nplooj ntsws', 'falling · low'], ['fab', 'high'], ['rho', 'mid'], ['ncho', 'mid'], ['nrho', 'mid'], ['plhu', 'mid'], ['txha', 'mid'], ['hmlos', 'low'], ['hnyav', 'rising'], ['mloog', 'falling-breathy'],
    ['nphau', 'mid'], ['ntxhw', 'mid'], ['nkhaus', 'low'], ['nplhos', 'low'], ['nthuav', 'rising'], ['ntshai', 'mid'], ['nqhuab', 'high'], ['pog', 'falling-breathy'], ['pov', 'rising'], ['kuv nco koj', 'rising · mid · falling']];
  SPEC.forEach(([s, w]) => eq(s, w));
  /* every White onset of RPA.md §2 is parsed, as the onset rpa_check.js knows */
  const seen = new Set(); SPEC.forEach(([s]) => syllables(s).forEach(w => w.syl.forEach(x => seen.add(x.onset))));
  ['xyoo tshiab', 'qaug', 'zoo', 'lub', 'yog', 'vaj', 'fab', 'hlub', 'muaj', 'av'].forEach(s => syllables(s).forEach(w => w.syl.forEach(x => seen.add(x.onset))));
  const missing = RC.ONSETS.filter(o => !seen.has(o)); t(!missing.length && seen.has(''), 'every White onset and the zero onset covered by the self-test: missing ' + missing.join(' '));
  /* aspirates, pre-nasalised, voiceless nasals, w vowel, nasal vowels */
  eq('phooj ywg', 'falling · falling-breathy'); eq('npua', 'mid'); eq('hmo', 'mid'); eq('tw', 'mid'); eq('pw zoo os', 'mid · mid · low'); eq('ntxhais', 'low'); eq('qaib', 'high'); eq('xav', 'rising'); eq('riam', 'creaky');
  /* spacing, hyphens, apostrophe, joined glossary words */
  eq('menyuam', 'mid · creaky'); eq('me nyuam', 'mid · creaky'); eq('pob-zeb', 'high · high'); eq("'os", 'low'); eq('lus Askiv', 'low · low · rising'); eq('Amelika', 'mid · mid · mid · mid');
  /* English kept in Hmong text, names, numerals */
  eq('hnub Monday', 'high · —'); eq('hnub Monday txog hnub Friday', 'high · — · falling-breathy · high · —'); eq('Kuv nyob St. Paul.', 'rising · high · — · —');
  eq('Kuv yog Vang.', 'rising · falling-breathy · —'); eq('Kuv nyob Fresno', 'rising · high · —'); eq('7 sawv ntxov', '— · rising · rising'); eq('mob cancer', 'high · —');
  eq('Nws yog Lee', 'low · falling-breathy · —'); eq('lo lus', 'mid · low');
  /* must throw */
  throws('dlev', 'Green onset dl'); throws('plaab', 'Green vowel aa'); throws('nloog', 'marginal onset'); throws('gab', 'marginal g'); throws('kuvb', 'two tone letters');
  throws('bus', 'b is not an onset'); throws('phô', 'diacritic'); throws('kheej7', 'digit reduplication'); throws('wa', 'w + a run together, not a glossary word');
  throws('hello nyob', 'English word not in ALLOW.txt'); throws('Pizzeria', 'capitalised word not in ALLOW'); throws('kung', 'coda ng'); throws('ntxh', 'bare onset'); throws('Monday', 'no Hmong syllable at all');
  throws('kuv hlubb koj', 'typo inside a phrase'); throws('nyob zoox', 'typo: x after vowel');
  /* warnings */
  respell('kud'); t(warnings().some(w => /-d outside/.test(w)), '-d outside the phrase-final set warns'); respell('Lee nyob'); t(warnings().some(w => /start of a sentence/.test(w)), 'Lee at sentence start warns');
  /* pattern and profile agree */
  const re = new RegExp(pattern()); t(['high · mid', 'rising-final', 'high · —', 'falling-breathy · creaky'].every(x => re.test(x)) && !re.test('high mid') && !re.test('') && !re.test('high ·'), 'pattern');
  try { const P = JSON.parse(fs.readFileSync(path.join(__dirname, 'profile.json'), 'utf8')); t(P.pronPattern === pattern(), 'profile.json pronPattern equals pattern()'); } catch (e) { t(false, 'profile.json readable: ' + e.message); }
  t(aid('xav').includes('x = English s') && aid('npua').some(r => /nasal start/.test(r)) && aid('tw').some(r => /w is a vowel/.test(r)), 'reading aid rows');
  console.log('respell selftest: ' + n + ' checks · ' + (fail ? 'FAIL ' + fail : 'OK'));
  return fail ? 1 : 0;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  if (args[0] === '--selftest') { process.exit(selftest()); }
  if (args[0] === '--aid') { let bad = 0; args.slice(1).forEach(a => { try { console.log(a + ':\n  ' + aid(a).join('\n  ')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } }); process.exit(bad ? 1 : 0); }
  if (!args.length) { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(2); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); warnings().forEach(m => process.stderr.write('warning: ' + m + '\n')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } });
  process.exit(bad ? 1 : 0);
}
