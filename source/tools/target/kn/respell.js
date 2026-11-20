/* Kannada (Kannada script) -> learner romanisation, the en-kn pron line (profile docs/profiles/en-kn.md §6).
   Deterministic: the same Kannada always gives the same romanisation, so writers never type a pron.
   Same learner key as en-hi, en-pa and en-te, so the courses agree: long vowels ā ī ū ē ō (Kannada has short e o and
   long ē ō); ai au; retroflex ṭ ṭh ḍ ḍh ṇ ḷ (dot below); aspirates kh gh chh jh ṭh ḍh th dh ph bh; ಚ ch, ಛ chh (ಚ್ಚ cch);
   ಜ j; ಶ and ಷ both sh; ಕ್ಷ ksh; ಋ / ೃ ru; ಙ ṅ, ಞ ñ; nukta ಜ಼ z, ಫ಼ f.
   Kannada writes every vowel it says, so there is NO silent a: a consonant with no vowel sign is said with a, a consonant
   with the virama (್) is said with no vowel. Spoken forms that drop a vowel are spelled with the virama (ಮಾಡ್ತೀನಿ māḍtīni),
   so the pron follows the spelling, and English loans written with a final virama end in a consonant (ಬಸ್ bas, ಬ್ಯಾಂಕ್ byānk).
   ರ್ before a consonant (the arkāvottu, drawn after the consonant: ಕರ್ನಾಟಕ) is stored in reading order ರ + ್ + ನ, so it reads r first.
   Anusvara ಂ: before a stop, the nasal of that stop (n before k kh g gh ch chh j jh t th d dh n; ṇ before ṭ ṭh ḍ ḍh ṇ;
   m before p ph b bh m): ಬೆಂಗಳೂರು bengaḷūru, ತುಂಬಾ tumbā, ಗಂಟೆ gaṇṭe; before y r l v sh s h ḷ and at the end of a word: m
   (ಸಂಸಾರ samsāra, ಸಂಯಮ samyama).
   Not shown (taught in the lessons instead, and listed in §11): e- and o- at the start of a word said ye-, wo- (ಎಲ್ಲಿ elli ≈ yelli,
   ಒಂದು ondu ≈ wondu); the æ of English loans (ಬ್ಯಾಂಕ್ byānk ≈ bænk); aspiration dropped in casual speech (ಮುಖ mukha ≈ muka);
   ಜ್ಞ said gny (warns).
   Warns «…» where it guesses (ಫ outside an FSTEM loan: ph or f?; ಃ visarga; ಋ / ೃ; ಜ್ಞ; ಙ ಞ). Throws «…» on anything that
   is not modern Kannada text: Latin letters, Telugu or other scripts, any digit (write numbers as words), archaic letters
   ೞ ಱ, Sanskrit-only signs ಌ ೡ ೠ ೄ ೢ ೣ ಽ ೱ ೲ ೳ, candrabindu ಁ, a lone sign.
   FSTEM lists English-loan stems whose ಫ is f; EXC overrides whole words; VER lists words checked by hand (no warning).
   usage: node respell.js "ನೀವು ಹೇಗಿದ್ದೀರಾ?"  ->  ನೀವು ಹೇಗಿದ್ದೀರಾ? -> nīvu hēgiddīrā?
          node respell.js --pattern   prints pronPattern
   An optional tools/target/kn/lexicon.txt (one "ಕನ್ನಡ roman" per line or ";"-separated) is read as more EXC entries. */
const fs = require('fs'), path = require('path');
let warned = [];

/* English loans said with f: a word that STARTS with one of these stems reads every ಫ as f, with no warning,
   so endings need no entry of their own (ಕಾಫಿ, ಕಾಫಿನಾ; ಫೋನ್, ಫೋನಿನಲ್ಲಿ; ಆಫೀಸ್, ಆಫೀಸಿಗೆ). Add stems here, not whole words. */
const FSTEM = ['ಕಾಫಿ', 'ಫೋನ', 'ಫೋಟೋ', 'ಆಫೀಸ', 'ಫ್ರೆಂಡ', 'ಫ್ಯಾನ', 'ಫ್ರಿಜ', 'ಫ್ಲೈಟ', 'ಫ್ಯಾಮಿಲಿ', 'ಫೆಬ್ರವರಿ', 'ಫುಟ್ಬಾಲ', 'ಕ್ಯಾಲಿಫೋರ್ನಿಯಾ', 'ಫೈಲ', 'ಫೀಸ', 'ಫಾರ್ಮ', 'ಫಿಲ್ಮ', 'ಫ್ರೀ', 'ಫಾಸ್ಟ', 'ಫಿಲ್ಟರ', 'ಟ್ರಾಫಿಕ'];
/* whole-word overrides: anything else the rule gets wrong (empty for now; tools/target/kn/lexicon.txt adds more) */
const EXC = {};
/* words checked by hand against the rule's output (no warning). Add here, not in EXC, when the rule is right. */
const VER = new Set(`
ಫ ಫಲ
`.split(/\s+/).filter(Boolean));
(function lexfile() { const f = path.join(__dirname, 'lexicon.txt'); if (!fs.existsSync(f)) return;
  fs.readFileSync(f, 'utf8').split(/[;\n]/).map(s => s.trim()).filter(Boolean).forEach(e => { const i = e.indexOf(' '); if (i < 1) throw new Error('bad lexicon entry «' + e + '»'); EXC[e.slice(0, i).normalize('NFC')] = e.slice(i + 1).trim().normalize('NFC'); }); })();
Object.keys(EXC).forEach(k => { const n = k.normalize('NFC').replace(/[\u200c\u200d]/g, ''); if (n !== k) { EXC[n] = EXC[k]; } });

const IND = { 'ಅ': 'a', 'ಆ': 'ā', 'ಇ': 'i', 'ಈ': 'ī', 'ಉ': 'u', 'ಊ': 'ū', 'ಋ': 'ru', 'ಎ': 'e', 'ಏ': 'ē', 'ಐ': 'ai', 'ಒ': 'o', 'ಓ': 'ō', 'ಔ': 'au' };
const MAT = { 'ಾ': 'ā', 'ಿ': 'i', 'ೀ': 'ī', 'ು': 'u', 'ೂ': 'ū', 'ೃ': 'ru', 'ೆ': 'e', 'ೇ': 'ē', 'ೈ': 'ai', 'ೊ': 'o', 'ೋ': 'ō', 'ೌ': 'au' };
const CON = { 'ಕ': 'k', 'ಖ': 'kh', 'ಗ': 'g', 'ಘ': 'gh', 'ಙ': 'ṅ', 'ಚ': 'ch', 'ಛ': 'chh', 'ಜ': 'j', 'ಝ': 'jh', 'ಞ': 'ñ',
  'ಟ': 'ṭ', 'ಠ': 'ṭh', 'ಡ': 'ḍ', 'ಢ': 'ḍh', 'ಣ': 'ṇ', 'ತ': 't', 'ಥ': 'th', 'ದ': 'd', 'ಧ': 'dh', 'ನ': 'n',
  'ಪ': 'p', 'ಫ': 'ph', 'ಬ': 'b', 'ಭ': 'bh', 'ಮ': 'm', 'ಯ': 'y', 'ರ': 'r', 'ಲ': 'l', 'ವ': 'v', 'ಶ': 'sh', 'ಷ': 'sh', 'ಸ': 's', 'ಹ': 'h', 'ಳ': 'ḷ' };
const NUQ = { 'ಜ': 'z', 'ಫ': 'f' };
const ARCH = { 'ೞ': 'ೞ U+0CDE (old letter: write ಳ)', 'ಱ': 'ಱ U+0CB1 (old letter: write ರ)', 'ಌ': 'ಌ (Sanskrit only)', 'ೡ': 'ೡ (Sanskrit only)', 'ೠ': 'ೠ (Sanskrit only)',
  'ೄ': 'ೄ (Sanskrit only)', 'ೢ': 'ೢ (Sanskrit only)', 'ೣ': 'ೣ (Sanskrit only)', 'ಽ': 'ಽ (avagraha)', 'ಀ': 'U+0C80 (spacing candrabindu)', 'ಁ': 'ಁ U+0C81 (candrabindu: leave it out, or write ಂ)',
  '಄': 'U+0C84 (siddham sign)', 'ೱ': 'ೱ U+0CF1 (Vedic sign)', 'ೲ': 'ೲ U+0CF2 (Vedic sign)', 'ೳ': 'U+0CF3 (combining anusvara above right: write ಂ)', 'ೝ': 'U+0CDD (nakaara pollu: write ನ್)',
  'ೕ': 'U+0CD5 (length mark: use the vowel sign ೀ ೇ ೋ)', 'ೖ': 'U+0CD6 (ai length mark: use ೈ)' };
/* place of articulation, for anusvara before a stop */
const PLACE = {}; 'k kh g gh ṅ ch chh j jh ñ t th d dh n z'.split(' ').forEach(c => PLACE[c] = 'n');
'ṭ ṭh ḍ ḍh ṇ'.split(' ').forEach(c => PLACE[c] = 'ṇ'); 'p ph b bh m f'.split(' ').forEach(c => PLACE[c] = 'm');
const VIRAMA = '್', NUKTA = '಼', ANU = 'ಂ', VIS = 'ಃ';
const isKn = c => /[ಀ-೿]/.test(c);
const isKnDigit = c => /[೦-೯]/.test(c);

/* one word (Kannada only, NFC, no ZWJ / ZWNJ) -> segments {t:'C', r, dev} | {t:'V', r, src} | {t:'N'} (anusvara) | {t:'H'} (visarga) */
function parse(w) {
  const seg = []; const cs = [...w]; const notes = []; const fword = FSTEM.some(st => w.startsWith(st));
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i];
    if (ARCH[c]) throw new Error('not modern Kannada: ' + ARCH[c] + ' in «' + w + '»');
    if (IND[c]) { seg.push({ t: 'V', r: IND[c], src: c }); if (c === 'ಋ') notes.push('ಋ read ru (some speakers say ri)'); continue; }
    if (CON[c]) {
      let r = CON[c], dev = c;
      if (cs[i + 1] === NUKTA) { if (!NUQ[c]) throw new Error('unknown nukta letter «' + c + NUKTA + '» in «' + w + '»'); r = NUQ[c]; dev = c + NUKTA; i++; }
      if (c === 'ಫ' && r === 'ph') { if (fword) r = 'f'; else notes.push('ಫ read ph (an English loan is said f: add its stem to FSTEM)'); }
      if (c === 'ಙ' || c === 'ಞ') notes.push(c + ' is rare: check the word');
      seg.push({ t: 'C', r, dev });
      const n = cs[i + 1];
      if (n === VIRAMA) { i++; continue; }
      if (MAT[n]) { seg.push({ t: 'V', r: MAT[n], src: n }); if (n === 'ೃ') notes.push('ೃ read ru (some speakers say ri)'); i++; continue; }
      if (n && ARCH[n]) throw new Error('not modern Kannada: ' + ARCH[n] + ' in «' + w + '»');
      seg.push({ t: 'V', r: 'a', src: '' }); continue;
    }
    if (c === ANU) { if (!seg.length || seg[seg.length - 1].t !== 'V') throw new Error('anusvara ಂ with no vowel before it in «' + w + '»'); seg.push({ t: 'N' }); continue; }
    if (c === VIS) { if (!seg.length || seg[seg.length - 1].t !== 'V') throw new Error('visarga ಃ with no vowel before it in «' + w + '»'); seg.push({ t: 'H' }); notes.push('visarga ಃ read h (Sanskrit word: check it)'); continue; }
    if (MAT[c]) throw new Error('vowel sign «' + c + '» with no consonant in «' + w + '» (a vowel at the start of a syllable is a vowel letter: ಆ, not ಅ + ಾ)');
    if (c === VIRAMA) throw new Error('virama ್ with no consonant in «' + w + '»');
    if (c === NUKTA) throw new Error('stray nukta in «' + w + '»');
    if (isKnDigit(c)) throw new Error('Kannada digit «' + c + '» in «' + w + '»: write numbers as words');
    throw new Error('not handled: «' + c + '» (U+' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') + ') in «' + w + '»');
  }
  return { seg, notes };
}

function render(seg) {
  let out = ''; const notes = [];
  for (let i = 0; i < seg.length; i++) {
    const s = seg[i];
    if (s.t === 'C') {
      /* ಚ before ಚ or ಛ is written c: ಹುಚ್ಚ huccha (en-hi convention) */
      if (s.dev === 'ಚ' && seg[i + 1] && seg[i + 1].t === 'C' && (seg[i + 1].dev === 'ಚ' || seg[i + 1].dev === 'ಛ')) { out += 'c'; continue; }
      if (s.dev === 'ಜ' && seg[i + 1] && seg[i + 1].t === 'C' && seg[i + 1].dev === 'ಞ') notes.push('ಜ್ಞ read jñ (Kannada speakers usually say gny)');
      out += s.r; continue;
    }
    if (s.t === 'V') { out += s.r; continue; }
    if (s.t === 'N') {
      const nx = seg[i + 1] && seg[i + 1].t === 'C' ? seg[i + 1].r : null;
      out += (nx && PLACE[nx]) ? PLACE[nx] : 'm'; continue;
    }
    if (s.t === 'H') { out += 'h'; continue; }
  }
  return { r: out.normalize('NFC'), notes };
}

function word(w) {
  w = w.normalize('NFC');
  if (EXC[w]) return EXC[w];
  const p = parse(w); const { r, notes } = render(p.seg);
  const all = p.notes.concat(notes);
  if (all.length && !VER.has(w)) warned.push('check «' + w + '» -> ' + r + ' (' + [...new Set(all)].join('; ') + ')');
  return r;
}

const PUNCT = { '।': '.', '॥': '.', '.': '.', '?': '?', '!': '!', ',': ',', ':': ':', ';': ';' };
function respell(text) {
  const src = String(text).normalize('NFC').replace(/[\u200c\u200d]/g, '');
  let out = ''; let buf = '';
  /* a one-syllable fragment ending in the anusvara, then one space and a consonant (a syllable-spaced answer such as ಗಂ ಟೆ):
     the nasal is resolved by the next letter, as inside the word (gaṇ ṭe). A real word ending in ಂ (ಮೇಡಂ) keeps m. */
  const cs = [...src]; let ci = 0;
  const flush = () => { if (!buf) return;
    const nx = cs[ci + 1];
    if (/^[\u0C95-\u0CB9][\u0CBE-\u0CCC]?\u0C82$/.test(buf) && cs[ci] === ' ' && nx && CON[nx]) { const r = word(buf.slice(0, -1)); const pl = PLACE[CON[nx]]; out += r + (pl || 'm'); }
    else out += word(buf);
    buf = ''; };
  for (; ci < cs.length; ci++) { const c = cs[ci];
    if (isKn(c) && !isKnDigit(c)) { buf += c; continue; }
    flush();
    if (PUNCT[c]) { out = out.replace(/ +$/, '') + PUNCT[c]; continue; }
    if (c === '-' || c === '‐') { out = out.replace(/ +$/, '') + '-'; continue; }
    if (/\s/.test(c)) { if (out && !/[ -]$/.test(out)) out += ' '; continue; }
    if (/["“”‘’'«»()]/.test(c)) continue;
    throw new Error('not Kannada text: «' + c + '» in «' + text + '» (write numbers as words; no Latin letters, digits or other scripts)');
  }
  flush();
  if (!/[a-zāīūēō]/.test(out)) throw new Error('no Kannada word in «' + text + '»');
  return out.replace(/ +([.,?!:;])/g, '$1').replace(/\s+/g, ' ').trim();
}

/* pronPattern: lowercase learner romanisation, words of the key's letters, single spaces, hyphen inside a word,
   punctuation right after a word; no doubled vowels (aa ii uu ee oo: length is a macron), no c without h (except cch). */
function pattern() {
  const L = '[abcdefghijklmnoprstuvyzāīūēōṭḍṇḷṅñ]';
  const W = L + '+(?:-' + L + '+)*[.,?!:;]?';
  return '^(?!.*(?:aa|ii|uu|ee|oo|c(?!c?h)))' + W + '(?: ' + W + ')*$';
}
function warnings() { const w = warned; warned = []; return w; }
module.exports = { respell, pattern, warnings, EXC, VER, FSTEM };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); warnings().forEach(m => process.stderr.write('warning: ' + m + '\n')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } });
  process.exit(bad ? 1 : 0);
}
