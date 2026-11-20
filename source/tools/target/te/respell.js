/* Telugu (Telugu script) -> learner romanisation, the en-te pron line (profile docs/profiles/en-te.md §6).
   Deterministic: the same Telugu always gives the same romanisation, so writers never type a pron.
   Same learner key as en-hi and en-pa, so the courses agree: long vowels ā ī ū ē ō (Telugu, unlike Hindi, has short e o
   and long ē ō); ai au; retroflex ṭ ṭh ḍ ḍh ṇ ḷ (dot below); aspirates kh gh chh jh th dh ph bh; చ ch, ఛ chh (చ్చ cch);
   జ j; శ and ష both sh; క్ష ksh; ఋ / ృ ru; ఙ ṅ, ఞ ñ; nukta జ఼ z, ఫ఼ f.
   Telugu writes every vowel it says, so there is NO silent a: a consonant with no vowel sign is said with a, a consonant with
   the virama (్, pollu) is said with no vowel (డాక్టర్ ḍākṭar, బస్సు bassu).
   Sunna ం: before a stop, the nasal of that stop (n before k kh g gh ch chh j jh t th d dh n; ṇ before ṭ ṭh ḍ ḍh ṇ;
   m before p ph b bh m): అంత anta, పండు paṇḍu, మంచి manchi, అంబ amba; before y r l v sh s h ḷ and at the end of a word: m
   (సింహం simham, సంవత్సరం samvatsaram, పుస్తకం pustakam).
   Not shown (taught in the lessons instead, and listed in §11): చ / జ said ts / dz before a, ā, u, ū, o, ō in native words
   (చాలా chālā is said tsālā); e- and o- at the start of a word said ye-, wo- (ఎవరు evaru ≈ yevaru); the æ of English loans
   (బ్యాంకు byānku ≈ bænku); final -u said weakly.
   Warns «…» where it guesses (ఫ outside an FSTEM loan: ph or f?; ః visarga; ఋ / ృ; ళ్ల written for ళ్ళ; ఙ ఞ). Throws «…» on anything that is not
   modern Telugu text: Latin letters, any digit (write numbers as words), archaic letters ఱ ఁ ౘ ౙ ౚ ఴ ఌ ౡ ౠ, ఽ, a lone sign.
   FSTEM lists English-loan stems whose ఫ is f; EXC overrides whole words; VER lists words checked by hand (no warning).
   usage: node respell.js "మీరు ఎలా ఉన్నారు?"  ->  మీరు ఎలా ఉన్నారు? -> mīru elā unnāru?
          node respell.js --pattern   prints pronPattern
   An optional tools/target/te/lexicon.txt (one "తెలుగు roman" per line or ";"-separated) is read as more EXC entries. */
const fs = require('fs'), path = require('path');
let warned = [];

/* English loans said with f: a word that STARTS with one of these stems reads every ఫ as f, with no warning,
   so endings need no entry of their own (కాఫీ, కాఫీని, కాఫీనా; ఫోన్, ఫోన్లో). Add stems here, not whole words. */
const FSTEM = ['కాఫీ', 'ఫోన', 'ఫోను', 'ఫోటో', 'ఆఫీస', 'ఫ్రెండ', 'ఫ్యాన', 'ఫ్రిజ', 'ఫ్లైట', 'ఫ్యామిలీ', 'ఫిబ్రవరి', 'ఫుట్బాల్', 'కాలిఫోర్నియా', 'ఫైల', 'ఫీజు', 'ఫారం'];
/* whole-word overrides: anything else the rule gets wrong (empty for now; tools/target/te/lexicon.txt adds more) */
const EXC = {};
/* words checked by hand against the rule's output (no warning). Add here, not in EXC, when the rule is right. */
const VER = new Set(`
ఫ ఫలం ఫలాలు
`.split(/\s+/).filter(Boolean));
(function lexfile() { const f = path.join(__dirname, 'lexicon.txt'); if (!fs.existsSync(f)) return;
  fs.readFileSync(f, 'utf8').split(/[;\n]/).map(s => s.trim()).filter(Boolean).forEach(e => { const i = e.indexOf(' '); if (i < 1) throw new Error('bad lexicon entry «' + e + '»'); EXC[e.slice(0, i).normalize('NFC')] = e.slice(i + 1).trim().normalize('NFC'); }); })();
Object.keys(EXC).forEach(k => { const n = k.normalize('NFC').replace(/[\u200c\u200d]/g, ''); if (n !== k) { EXC[n] = EXC[k]; } });

const IND = { 'అ': 'a', 'ఆ': 'ā', 'ఇ': 'i', 'ఈ': 'ī', 'ఉ': 'u', 'ఊ': 'ū', 'ఋ': 'ru', 'ఎ': 'e', 'ఏ': 'ē', 'ఐ': 'ai', 'ఒ': 'o', 'ఓ': 'ō', 'ఔ': 'au' };
const MAT = { 'ా': 'ā', 'ి': 'i', 'ీ': 'ī', 'ు': 'u', 'ూ': 'ū', 'ృ': 'ru', 'ె': 'e', 'ే': 'ē', 'ై': 'ai', 'ొ': 'o', 'ో': 'ō', 'ౌ': 'au' };
const CON = { 'క': 'k', 'ఖ': 'kh', 'గ': 'g', 'ఘ': 'gh', 'ఙ': 'ṅ', 'చ': 'ch', 'ఛ': 'chh', 'జ': 'j', 'ఝ': 'jh', 'ఞ': 'ñ',
  'ట': 'ṭ', 'ఠ': 'ṭh', 'డ': 'ḍ', 'ఢ': 'ḍh', 'ణ': 'ṇ', 'త': 't', 'థ': 'th', 'ద': 'd', 'ధ': 'dh', 'న': 'n',
  'ప': 'p', 'ఫ': 'ph', 'బ': 'b', 'భ': 'bh', 'మ': 'm', 'య': 'y', 'ర': 'r', 'ల': 'l', 'వ': 'v', 'శ': 'sh', 'ష': 'sh', 'స': 's', 'హ': 'h', 'ళ': 'ḷ' };
const NUQ = { 'జ': 'z', 'ఫ': 'f' };
const ARCH = { 'ఱ': 'ఱ (old letter: write ర)', 'ఁ': 'ఁ (half sunna: leave it out, or write ం)', 'ౘ': 'ౘ (old letter: write చ)', 'ౙ': 'ౙ (old letter: write జ)',
  'ౚ': 'ౚ (old letter)', 'ఴ': 'ఴ (old letter)', 'ఌ': 'ఌ (Sanskrit only)', 'ౡ': 'ౡ (Sanskrit only)', 'ౠ': 'ౠ (Sanskrit only)', 'ౄ': 'ౄ (Sanskrit only)',
  'ౢ': 'ౢ (Sanskrit only)', 'ౣ': 'ౣ (Sanskrit only)', 'ఽ': 'ఽ (avagraha)', 'ఀ': 'U+0C00 (sunna above)', 'ఄ': 'U+0C04 (sunna above)', 'ౕ': 'U+0C55 (length mark: use the vowel sign ే or ో)', 'ౖ': 'U+0C56 (ai length mark: use ై)', 'ౝ': 'U+0C5D (nakaara pollu: write న్)' };
/* place of articulation, for sunna before a stop */
const PLACE = {}; 'k kh g gh ṅ ch chh j jh ñ t th d dh n z'.split(' ').forEach(c => PLACE[c] = 'n');
'ṭ ṭh ḍ ḍh ṇ'.split(' ').forEach(c => PLACE[c] = 'ṇ'); 'p ph b bh m f'.split(' ').forEach(c => PLACE[c] = 'm');
const VIRAMA = '్', NUKTA = '఼', ANU = 'ం', VIS = 'ః';
const isTel = c => /[ఀ-౿]/.test(c);

/* one word (Telugu only, NFC, no ZWJ / ZWNJ) -> segments {t:'C', r, dev} | {t:'V', r, src} | {t:'N'} (sunna) | {t:'H'} (visarga) */
function parse(w) {
  const seg = []; const cs = [...w]; const notes = []; const fword = FSTEM.some(st => w.startsWith(st));
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i];
    if (ARCH[c]) throw new Error('not modern Telugu: ' + ARCH[c] + ' in «' + w + '»');
    if (IND[c]) { seg.push({ t: 'V', r: IND[c], src: c }); if (c === 'ఋ') notes.push('ఋ read ru (some speakers say ri)'); continue; }
    if (CON[c]) {
      let r = CON[c], dev = c;
      if (cs[i + 1] === NUKTA) { if (!NUQ[c]) throw new Error('unknown nukta letter «' + c + NUKTA + '» in «' + w + '»'); r = NUQ[c]; dev = c + NUKTA; i++; }
      if (c === 'ఫ' && r === 'ph') { if (fword) r = 'f'; else notes.push('ఫ read ph (an English loan is said f: add its stem to FSTEM)'); }
      if (c === 'ఙ' || c === 'ఞ') notes.push(c + ' is rare: check the word');
      seg.push({ t: 'C', r, dev });
      const n = cs[i + 1];
      if (n === VIRAMA) { i++; continue; }
      if (MAT[n]) { seg.push({ t: 'V', r: MAT[n], src: n }); if (n === 'ృ') notes.push('ృ read ru (some speakers say ri)'); i++; continue; }
      if (n && (ARCH[n])) throw new Error('not modern Telugu: ' + ARCH[n] + ' in «' + w + '»');
      seg.push({ t: 'V', r: 'a', src: '' }); continue;
    }
    if (c === ANU) { if (!seg.length || seg[seg.length - 1].t !== 'V') throw new Error('sunna ం with no vowel before it in «' + w + '»'); seg.push({ t: 'N' }); continue; }
    if (c === VIS) { if (!seg.length || seg[seg.length - 1].t !== 'V') throw new Error('visarga ః with no vowel before it in «' + w + '»'); seg.push({ t: 'H' }); notes.push('visarga ః read h (Sanskrit word: check it)'); continue; }
    if (MAT[c]) throw new Error('vowel sign «' + c + '» with no consonant in «' + w + '» (a vowel at the start of a syllable is a vowel letter: ఆ, not అ + ా)');
    if (c === VIRAMA) throw new Error('pollu ్ with no consonant in «' + w + '»');
    if (c === NUKTA) throw new Error('stray nukta in «' + w + '»');
    if (/[౦-౯౸-౿]/.test(c)) throw new Error('Telugu digit «' + c + '» in «' + w + '»: write numbers as words');
    throw new Error('not handled: «' + c + '» (U+' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') + ') in «' + w + '»');
  }
  return { seg, notes };
}

function render(seg, w) {
  let out = ''; const notes = [];
  for (let i = 0; i < seg.length; i++) {
    const s = seg[i];
    if (s.t === 'C') {
      /* ళ్ల: print and many keyboards write ల under ళ for the doubled ḷḷ (వెళ్లాను); it is said ḷḷ. Course spelling: ళ్ళ */
      if (s.dev === 'ల' && i > 0 && seg[i - 1].t === 'C' && seg[i - 1].dev === 'ళ') { out += 'ḷ'; notes.push('ళ్ల read ḷḷ: the course spells it ళ్ళ'); continue; }
      /* చ before చ or ఛ is written c: వచ్చాను vacchānu (en-hi convention) */
      if (s.dev === 'చ' && seg[i + 1] && seg[i + 1].t === 'C' && (seg[i + 1].dev === 'చ' || seg[i + 1].dev === 'ఛ')) { out += 'c'; continue; }
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
  const p = parse(w); const { r, notes } = render(p.seg, w);
  const all = p.notes.concat(notes);
  if (all.length && !VER.has(w)) warned.push('check «' + w + '» -> ' + r + ' (' + [...new Set(all)].join('; ') + ')');
  return r;
}

const PUNCT = { '।': '.', '॥': '.', '.': '.', '?': '?', '!': '!', ',': ',', ':': ':', ';': ';' };
function respell(text) {
  const src = String(text).normalize('NFC').replace(/[\u200c\u200d]/g, '');
  let out = ''; let buf = '';
  const flush = () => { if (buf) { out += word(buf); buf = ''; } };
  for (const c of src) {
    if (isTel(c) && !/[౦-౯]/.test(c)) { buf += c; continue; }
    flush();
    if (PUNCT[c]) { out = out.replace(/ +$/, '') + PUNCT[c]; continue; }
    if (c === '-' || c === '‐') { out = out.replace(/ +$/, '') + '-'; continue; }
    if (/\s/.test(c)) { if (out && !/[ -]$/.test(out)) out += ' '; continue; }
    if (/["“”‘’'«»()]/.test(c)) continue;
    throw new Error('not Telugu text: «' + c + '» in «' + text + '» (write numbers as words, no Latin letters, no digits)');
  }
  flush();
  if (!/[a-zāīūēō]/.test(out)) throw new Error('no Telugu word in «' + text + '»');
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
