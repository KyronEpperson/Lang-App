/* Cherokee (syllabary) -> the plain romanised line, the en-chr pron (profile docs/profiles/en-chr.md §6).
   Deterministic and lexicon-only: every word must be listed in tools/target/chr/lexicon.txt, which holds the pronunciation string
   AS PRINTED in an opened source (Joyner, Cherokee Language Lessons 1, with tone digits and underdots; DAILP), with its source id.
   It throws on any word that is not listed. Nothing is ever read letter by letter: the spoken word differs from a sign-by-sign reading
   (ᏙᎯᏧ is tohitsu although Ꮩ is in the d-row; ᎠᎪᏩᏘᎭ is agowhtiha, not agowatiha), so the syllabary alone cannot give the pron.

   The plain line (one convention, profile §6.2): the source string with the tone digits ¹ ² ³ ⁴, the underdots (ạ ẹ ị ọ ụ ṿ = short vowels)
   and the glottal stop ɂ removed; Joyner's j written ts (ᏣᎳᎩ jạ²lạ²gi -> tsalagi); everything else as printed: v (the nasal vowel), ch,
   gw, tl or hl, k / g and t / d, and the h's the syllabary does not write (agowhtiha, nvhgi). Words are separated by one space; ASCII
   punctuation is attached to the word before it; a text ending in . ? ! starts with a capital letter. Lowercase otherwise.

   The table check (on load, for every lexicon line): the plain reading of each word must align with its syllabary sign by sign, using the
   Unicode names of the signs (U+13A0-U+13F5, "CHEROKEE LETTER GA" ...). Per sign the reading may only be: one of that sign's onsets
   (g-row and Ꭷ: g or k; d-row and Ꮤ Ꮦ Ꮨ: d or t; dl / tl row: tl, dl or hl; ts-row: ts or ch; qu-row: gw, kw or qu; Ꮏ hna: hn or n;
   others: their own consonant, Ᏽ m), then the sign's vowel OR NOTHING (a vowel dropped in speech, as the source prints it: ᏔᎵᏚ taldu),
   then an optional h (the unwritten h: ᏅᎩ nvhgi, ᎠᎨᏯ agehya). A vowel sign (Ꭰ-Ꭵ) must keep its vowel; Ꮝ is s alone.
   A line that does not align is REJECTED (the tool will not load). Lines that needed a dropped vowel are listed by --check, because
   for those signs the romanisation does not confirm the sign (profile §11).
   One spelling with two different plain readings throws. Lowercase syllabary (U+AB70-U+ABBF, U+13F8-U+13FD) is folded to uppercase;
   U+0323 (Joyner's dot under a sign) is removed.
   Suffixes (lexicon keys starting with -): a word not in the lexicon is read as a listed word + one listed suffix (-Ꮝ, -ᏍᎪ, -Ꮚ, -Ꮷ),
   with a warning, since those readings are derived (lexicon source SUF).
   usage: node respell.js "ᎣᏏᏲ"          ->  ᎣᏏᏲ -> osiyo
          node respell.js --pattern       prints pronPattern
          node respell.js --sign ᏆᏚ        prints each sign's value (sign cards only): Ꮖ -> gwa, Ꮪ -> du
          node respell.js --check         loads and checks the lexicon; prints counts by source and every dropped-vowel line
          node respell.js --test          runs the built-in negative tests (lines that must be rejected) */
const fs = require('fs'), path = require('path');
/* the syllabary table: every sign with its Unicode name (UCD 15.1, Python unicodedata), "CHEROKEE LETTER X" -> x */
const NAME = {'Ꭰ':'a', 'Ꭱ':'e', 'Ꭲ':'i', 'Ꭳ':'o', 'Ꭴ':'u', 'Ꭵ':'v', 'Ꭶ':'ga', 'Ꭷ':'ka', 'Ꭸ':'ge', 'Ꭹ':'gi', 'Ꭺ':'go', 'Ꭻ':'gu', 'Ꭼ':'gv', 'Ꭽ':'ha', 'Ꭾ':'he', 'Ꭿ':'hi', 'Ꮀ':'ho', 'Ꮁ':'hu', 'Ꮂ':'hv', 'Ꮃ':'la', 'Ꮄ':'le', 'Ꮅ':'li', 'Ꮆ':'lo', 'Ꮇ':'lu', 'Ꮈ':'lv', 'Ꮉ':'ma', 'Ꮊ':'me', 'Ꮋ':'mi', 'Ꮌ':'mo', 'Ꮍ':'mu', 'Ꮎ':'na', 'Ꮏ':'hna', 'Ꮐ':'nah', 'Ꮑ':'ne', 'Ꮒ':'ni', 'Ꮓ':'no', 'Ꮔ':'nu', 'Ꮕ':'nv', 'Ꮖ':'qua', 'Ꮗ':'que', 'Ꮘ':'qui', 'Ꮙ':'quo', 'Ꮚ':'quu', 'Ꮛ':'quv', 'Ꮜ':'sa', 'Ꮝ':'s', 'Ꮞ':'se', 'Ꮟ':'si', 'Ꮠ':'so', 'Ꮡ':'su', 'Ꮢ':'sv', 'Ꮣ':'da', 'Ꮤ':'ta', 'Ꮥ':'de', 'Ꮦ':'te', 'Ꮧ':'di', 'Ꮨ':'ti', 'Ꮩ':'do', 'Ꮪ':'du', 'Ꮫ':'dv', 'Ꮬ':'dla', 'Ꮭ':'tla', 'Ꮮ':'tle', 'Ꮯ':'tli', 'Ꮰ':'tlo', 'Ꮱ':'tlu', 'Ꮲ':'tlv', 'Ꮳ':'tsa', 'Ꮴ':'tse', 'Ꮵ':'tsi', 'Ꮶ':'tso', 'Ꮷ':'tsu', 'Ꮸ':'tsv', 'Ꮹ':'wa', 'Ꮺ':'we', 'Ꮻ':'wi', 'Ꮼ':'wo', 'Ꮽ':'wu', 'Ꮾ':'wv', 'Ꮿ':'ya', 'Ᏸ':'ye', 'Ᏹ':'yi', 'Ᏺ':'yo', 'Ᏻ':'yu', 'Ᏼ':'yv', 'Ᏽ':'mv'};
/* onsets the plain line may write for each Unicode onset (the alternations the sources show: Joyner p5 g = "either the 'g' in 'gaff'
   or the 'k' in 'kite'"; p6 tl / hl; his j / ch, written ts / ch here; DAILP and Joyner both write ᏙᎯᏧ with t) */
const ONS = { '': [''], g: ['g', 'k'], k: ['k', 'g'], h: ['h'], l: ['l'], m: ['m'], n: ['n'], hn: ['hn', 'n'], qu: ['gw', 'kw', 'qu'], s: ['s'],
  d: ['d', 't'], t: ['t', 'd'], dl: ['tl', 'dl', 'hl'], tl: ['tl', 'dl', 'hl'], ts: ['ts', 'ch'], w: ['w'], y: ['y'] };
const SIGN = {}; /* sign -> { ons: [...], v: 'a' | '' } */
for (const [c, n] of Object.entries(NAME)) { let on, v;
  if (n === 's') { on = 's'; v = ''; } else if (n === 'nah') { on = 'n'; v = 'a'; } else if (n === 'mv') { on = 'm'; v = 'v'; } else { v = n.slice(-1); on = n.slice(0, -1); }
  SIGN[c] = { ons: ONS[on], v }; }
/* lowercase syllabary folds to uppercase (Unicode case mapping, as r12a notes: "Cherokee case folds to the previously encoded uppercase letters") */
const fold = s => String(s).normalize('NFD').replace(/̣/g, '').normalize('NFC').replace(/[ꭰ-ꮿᏸ-ᏽ]/g, c => c.toUpperCase());
const isSyl = c => Object.prototype.hasOwnProperty.call(SIGN, c);
/* source string -> plain line: tone digits, underdots and glottal stops removed; j -> ts; lowercase */
function plain(src) {
  return String(src).normalize('NFD').replace(/[¹²³⁴⁵̣]/g, '').replace(/[ɂʔ]/g, '').normalize('NFC')
    .toLowerCase().replace(/j/g, 'ts').trim();
}
/* align one syllabary word with one plain word: returns the per-sign readings (and which signs lost their vowel) or null */
function alignWord(sw, pw) {
  const cs = [...sw]; const memo = new Map();
  function go(i, j) { const k = i + ',' + j; if (memo.has(k)) return memo.get(k); let res = null;
    if (i === cs.length) res = j === pw.length ? [] : null;
    else { const sg = SIGN[cs[i]]; if (!sg) return null;
      outer: for (const on of sg.ons) { if (!pw.startsWith(on, j)) continue; const j1 = j + on.length;
        const vs = sg.v ? (on === '' ? [sg.v] : [sg.v, '']) : [''];
        for (const v of vs) { if (v && pw[j1] !== v) continue; const j2 = j1 + v.length;
          for (const h of ['', 'h']) { if (h && pw[j2] !== 'h') continue; if (!on && !v) continue;
            const rest = go(i + 1, j2 + h.length); if (rest) { res = [{ c: cs[i], r: pw.slice(j, j2 + h.length), drop: !!sg.v && !v }].concat(rest); break outer; } } } } }
    memo.set(k, res); return res; }
  return go(0, 0);
}
function align(syl, pl) {
  const sw = syl.split(' '), pw = pl.split(' '); if (sw.length !== pw.length) return null; const out = [];
  for (let i = 0; i < sw.length; i++) { const a = alignWord(sw[i], pw[i]); if (!a) return null; out.push(...a); } return out;
}
/* ---------- lexicon ---------- */
const W = new Map(), SRC = new Map(), GLOSS = new Map(), SUF = new Map(), DROPS = [], RAW = new Map();
function addLine(line, n, file) {
  if (!line.trim() || line.startsWith('#')) return;
  const f = line.split('\t'); if (f.length < 3) throw new Error(file + ':' + n + ': need «syllabary<TAB>source string<TAB>source id[<TAB>gloss]»: «' + line + '»');
  let key = fold(f[0].trim()); const suf = key.startsWith('-'); if (suf) key = key.slice(1);
  if (![...key].every(c => isSyl(c) || c === ' ')) throw new Error(file + ':' + n + ': «' + key + '» has a character that is not a Cherokee syllabary sign');
  const pl = plain(f[1]); if (!/^[a-z]+(?: [a-z]+)*$/.test(pl)) throw new Error(file + ':' + n + ': «' + f[1] + '» gives «' + pl + '», not plain letters');
  const a = align(key, pl); if (!a) throw new Error(file + ':' + n + ': «' + key + '» and «' + pl + '» (from «' + f[1] + '») do not match sign by sign (syllabary table)');
  if (a.some(x => x.drop)) DROPS.push(key + ' ' + pl + ' (' + f[2].trim() + '): no vowel for ' + a.filter(x => x.drop).map(x => x.c + '=' + x.r).join(', '));
  const M = suf ? SUF : W;
  if (M.has(key) && M.get(key) !== pl) throw new Error(file + ':' + n + ': «' + key + '» has two readings: ' + M.get(key) + ' / ' + pl);
  if (!M.has(key)) { M.set(key, pl); SRC.set((suf ? '-' : '') + key, f[2].trim()); GLOSS.set((suf ? '-' : '') + key, (f[3] || '').trim()); RAW.set((suf ? '-' : '') + key, f[1].trim()); }
}
const LEXF = path.join(__dirname, 'lexicon.txt');
fs.readFileSync(LEXF, 'utf8').split('\n').forEach((l, i) => addLine(l, i + 1, 'lexicon.txt'));
/* writers' proposals: lexicon-add-<id>.txt next to this file, same format, each line with the URL it was copied from; the lead merges them */
fs.readdirSync(__dirname).filter(f => /^lexicon-add-[\w-]+\.txt$/.test(f)).sort().forEach(f => fs.readFileSync(path.join(__dirname, f), 'utf8').split('\n').forEach((l, i) => addLine(l, i + 1, f)));
let MAXW = 1; for (const k of W.keys()) MAXW = Math.max(MAXW, k.split(' ').length);
const SUFS = [...SUF.keys()].sort((a, b) => b.length - a.length);
let warned = [];
function readWord(w, src) {
  if (W.has(w)) return W.get(w);
  for (const s of SUFS) if (w.length > s.length && w.endsWith(s) && W.has(w.slice(0, -s.length))) { warned.push('«' + w + '» in «' + src + '» read as ' + w.slice(0, -s.length) + ' + -' + s + ' (derived suffix reading)'); return W.get(w.slice(0, -s.length)) + SUF.get(s); }
  throw new Error('unknown: «' + w + '» in «' + src + '» (not in lexicon.txt: report it; the lead adds it only from an opened source, with its URL)');
}
const PUNCT = { '.': '.', ',': ',', '?': '?', '!': '!', ':': ':', ';': ';' };
function respell(text) {
  const src = fold(String(text)).trim(); if (!src) return '';
  const toks = []; let cur = '';
  const flush = () => { if (cur) toks.push({ w: cur }); cur = ''; };
  for (const c of src) {
    if (isSyl(c)) { cur += c; continue; }
    if (/\s/.test(c)) { flush(); continue; }
    if (PUNCT[c]) { flush(); toks.push({ p: PUNCT[c] }); continue; }
    if (/["“”‘’'()«»…\-–—]/.test(c)) { flush(); continue; }
    throw new Error('not a Cherokee syllabary sign: «' + c + '» in «' + src + '» (no Latin letters or digits in Cherokee strings)');
  }
  flush();
  /* longest match over word sequences (a few lexicon keys are phrases), then single words with an optional suffix */
  const out = [];
  for (let i = 0; i < toks.length;) {
    if (toks[i].p) { out.push(toks[i]); i++; continue; }
    let hit = 0;
    for (let L = MAXW; L >= 2; L--) { const ws = toks.slice(i, i + L); if (ws.length === L && ws.every(t => t.w) && W.has(ws.map(t => t.w).join(' '))) { hit = L; break; } }
    if (hit) { out.push({ r: W.get(toks.slice(i, i + hit).map(t => t.w).join(' ')) }); i += hit; }
    else { out.push({ r: readWord(toks[i].w, src) }); i++; }
  }
  let s = ''; out.forEach(t => { if (t.p) s += t.p; else s += (s ? ' ' : '') + t.r; });
  s = s.replace(/^[,.?!:;]+/, '').trim();
  if (/[.?!]$/.test(src)) s = s.replace(/^([a-z])/, c => c.toUpperCase()).replace(/([.?!] )([a-z])/g, (m, a, c) => a + c.toUpperCase());
  return s;
}
/* the value of ONE sign, for the sign cards of the four syllabary decks only (profile §9): its Unicode name in the plain-line letters
   (qu- written gw-, as Joyner and the plain line write it; Ꮐ nah; Ꮝ s). Never used to read a word. */
function signValue(c) { const k = fold(c); if (!isSyl(k) || [...k].length !== 1) throw new Error('signValue: «' + c + '» is not one syllabary sign'); return NAME[k].replace(/^qu/, 'gw'); }
/* pronPattern: ASCII letters, words separated by single spaces, one ASCII punctuation mark after a word. BMP-only, works with and without u. */
function pattern() { return '^[A-Za-z]+[,.?!:;]?(?: [A-Za-z]+[,.?!:;]?)*$'; }
function warnings() { const w = warned; warned = []; return w; }
module.exports = { respell, signValue, plain, align, alignWord, fold, pattern, warnings, W, SUF, SRC, GLOSS, RAW, DROPS, SIGN, NAME };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  if (args[0] === '--sign') { let bad = 0; args.slice(1).forEach(a => [...fold(a)].forEach(c => { try { console.log(c + ' -> ' + signValue(c)); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } })); process.exit(bad ? 1 : 0); }
  if (args[0] === '--check') { const by = {}; SRC.forEach(s => { const k = s.replace(/\d+$/, 'n'); by[k] = (by[k] || 0) + 1; });
    console.log(W.size + ' words and phrases, ' + SUF.size + ' suffixes'); Object.keys(by).sort().forEach(k => console.log('  ' + k + ': ' + by[k]));
    const used = new Set(); W.forEach((v, k) => [...k].forEach(c => used.add(c))); const unused = Object.keys(NAME).filter(c => !used.has(c));
    console.log('signs never used in a lexicon word (' + unused.length + '): ' + unused.map(c => c + ' ' + NAME[c]).join(', '));
    console.log('dropped-vowel lines (' + DROPS.length + '):'); DROPS.forEach(d => console.log('  ' + d)); process.exit(0); }
  if (args[0] === '--test') { const neg = [['ᏌᎪᏂᎨ ᎤᏍᎪᎸᎢ', 'sạ²ko²³nị³ge⁴ɂi u¹sgo²³lv⁴ɂi'], ['ᎣᏏᏲ', 'osiya'], ['ᎣᏏᏲ', 'oyosi'], ['ᏩᏙ', 'wa'], ['ᏩᏙ', 'wado do'], ['ᎤᏁᎦ', 'unega a'],
      ['ᏣᎳᎩ', 'salagi'], ['ᎠᏴ', 'ayu'], ['ᎦᎪ', 'gago go'], ['ᏙᎯᏧ', 'tohisu'], ['ᎢᎦ', 'ga'], ['ᎥᎥ', 'v'], ['ᏅᏯ', 'naya'], ['ᎩᏟ', 'gili'], ['ᏍᎪᎯ', 'sagohi']];
    let bad = 0; neg.forEach(([s, p]) => { const ok = !align(fold(s), plain(p)); if (!ok) bad++; console.log((ok ? 'rejected (good): ' : 'ACCEPTED (bad): ') + s + ' / ' + p); });
    const pos = [['ᏙᎯᏧ', 'to¹hi⁴ju'], ['ᎠᎪᏩᏘᎭ', 'a¹gowh²tị³ha'], ['ᏅᎩ', 'nvh²gi'], ['ᏔᎵᏚ', 'tạ²ɂldu'], ['ᏡᎬᎢ', 'hlgv⁴ɂi'], ['ᎦᎵᏉᎩ', 'gahl²gwo²³gi'], ['ꮩꭿꮷ', 'tohitsu']];
    pos.forEach(([s, p]) => { const ok = !!align(fold(s), plain(p)); if (!ok) bad++; console.log((ok ? 'accepted (good): ' : 'REJECTED (bad): ') + s + ' / ' + p); });
    process.exit(bad ? 1 : 0); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); warnings().forEach(m => process.stderr.write('warning: ' + m + '\n')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } }); process.exit(bad ? 1 : 0);
}
