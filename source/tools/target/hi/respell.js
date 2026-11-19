/* Hindi (Devanagari) -> learner romanisation, the en-hi pron line (profile docs/profiles/en-hi.md §6).
   Deterministic: the same Hindi always gives the same romanisation, so writers never type a pron.
   Key: long vowels ā ī ū; e ai o au; ऑ ŏ; ऋ/ृ ri; retroflex ṭ ṭh ḍ ḍh ṇ, flap ड़ ṛ, ढ़ ṛh; aspirates kh gh chh jh th dh ph bh;
   च ch, छ chh (च्च cch, च्छ cchh); श and ष both sh; nuqta क़ q, ख़ ḵh, ग़ ġ, ज़ z, फ़ f; ज्ञ gy;
   chandrabindu ँ, and anusvara ं at the end of a word or before y r l v sh s h or a vowel: a tilde on the vowel (hā̃, maĩ, mẽ);
   anusvara before a stop: the nasal of that stop (n, ṇ before ṭ ṭh ḍ ḍh, m before p ph b bh), except over ी े ै ो ौ, where it stands
   for ँ (no room for the moon) and gives a nasal vowel (मैंने maĩne, क्योंकि kyõki, पैंतीस paĩtīs); English loans with a real n there
   (बैंक baink) are in EXC; । -> . ; all lowercase.
   Schwa (the unwritten a): deleted at the end of a word (कमल kamal) except in a one-vowel word (न na, क ka) or after a cluster ending
   in र or य (मित्र mitra); deleted inside a word in the context vowel + one consonant _ one consonant + vowel, scanning from the right
   (करना karnā, समझना samajhnā); never deleted when nasalised (पसंद pasand) or before य or ह (रुपये rupaye, दोपहर dopahar).
   EXC overrides whole words; VER lists words whose output was checked by hand. Words outside both get a warning «…» when the
   rule meets a known weak spot (two deletable schwas in a row, a schwa beside ह or before य, a final schwa after a cluster,
   anusvara on a long vowel). It throws «…» on anything that is not Devanagari text (Latin letters, digits, ऽ, ः, unknown signs).
   usage: node respell.js "आप कैसे हैं?"  ->  आप कैसे हैं? -> āp kaise haĩ?
   An optional tools/target/hi/lexicon.txt (one "हिंदी roman" per line or ";"-separated) is read as more EXC entries. */
const fs = require('fs'), path = require('path');
let warned = [];

/* whole-word overrides: the rule gets these wrong (Sanskrit words, compounds, months) */
const EXC = {
  'मूँगफली': 'mū̃gphalī', 'उम्र': 'umr', 'स्टूडेंट': 'sṭūḍeṇṭ',
  'जनवरी': 'janvarī', 'फ़रवरी': 'farvarī', 'कृपया': 'kripayā', 'प्रिय': 'priya', 'नमस्कार': 'namaskār',
  'दिसंबर': 'disambar', 'नवंबर': 'navambar', 'सितंबर': 'sitambar', 'अक्टूबर': 'akṭūbar', 'अगस्त': 'agast',
  'जगह': 'jagah', 'जगहें': 'jagahẽ', 'जगहों': 'jagahõ', 'सुबह': 'subah', 'तरह': 'tarah', 'वजह': 'vajah',
  'उनहत्तर': 'unhattar', 'इकहत्तर': 'ikhattar', 'पचहत्तर': 'pachhattar', 'सतहत्तर': 'sathattar', 'अठहत्तर': 'aṭhattar',
  'बैंक': 'baink', 'थैंक': 'thaink', 'थैंक्स': 'thainks', 'पैंट': 'paiṇṭ', 'वाराणसी': 'vārāṇasī', 'अमरीका': 'amrīkā', 'अमेरिका': 'amerikā', 'उन्होंने': 'unhõne', 'हिंदुस्तान': 'hindustān',
};
/* words checked by hand against the rule's output (no warning). Add here, not in EXC, when the rule is right. */
const VER = new Set(`
कार्ड पासपोर्ट प्लेटफ़ॉर्म छात्र चाहना चाहता चाहती चाहते पार्क आंटी सिर्फ़ शांत पहनी
करना करता करती करते करो करिए कीजिए किया की किए कहना कहता कहती कहते कहा कहाँ कहिए रहना रहता रहती रहते रहा रही रहे रहिए
पहला पहली पहले पहचानना बहन बहनें बहुत शहर शहरों महँगा महँगी महँगे कहानी यह वह यहाँ वहाँ समझना समझता समझती समझते समझा
समझ निकलना बदलना उतरना चलना चलता चलती चलते मिलना मिलता मिलकर सुनना सुनता सुनती सुनते सकता सकती सकते रुपया रुपये
रुपयों दोस्त मित्र दोपहर फ़िल्म दर्द न्यूयॉर्क मिर्च क्योंकि तैंतीस चौंतीस पैंतीस सैंतीस तैंतालीस पैंतालीस सैंतालीस गेंद मंगलवार सोमवार बुधवार गुरुवार शुक्रवार शनिवार रविवार ग्यारह बारह तेरह चौदह पंद्रह सोलह सत्रह अठारह छह दस
केमिस्ट स्वादिष्ट लास्ट
`.split(/\s+/).filter(Boolean));
(function lexfile() { const f = path.join(__dirname, 'lexicon.txt'); if (!fs.existsSync(f)) return;
  fs.readFileSync(f, 'utf8').split(/[;\n]/).map(s => s.trim()).filter(Boolean).forEach(e => { const i = e.indexOf(' '); if (i < 1) throw new Error('bad lexicon entry «' + e + '»'); EXC[e.slice(0, i).normalize('NFC')] = e.slice(i + 1).trim().normalize('NFC'); }); })();

const IND = { 'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū', 'ऋ': 'ri', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au', 'ऑ': 'ŏ' };
const MAT = { 'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū', 'ृ': 'ri', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ॉ': 'ŏ' };
const CON = { 'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ṅ', 'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ञ': 'ñ',
  'ट': 'ṭ', 'ठ': 'ṭh', 'ड': 'ḍ', 'ढ': 'ḍh', 'ण': 'ṇ', 'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
  'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm', 'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v', 'श': 'sh', 'ष': 'sh', 'स': 's', 'ह': 'h' };
const NUQ = { 'क': 'q', 'ख': 'ḵh', 'ग': 'ġ', 'ज': 'z', 'फ': 'f', 'ड': 'ṛ', 'ढ': 'ṛh', 'झ': 'zh' };
/* place of articulation, for anusvara before a stop */
const PLACE = {}; 'k kh g gh q ḵh ġ'.split(' ').forEach(c => PLACE[c] = 'n'); 'ch chh j jh z'.split(' ').forEach(c => PLACE[c] = 'n');
'ṭ ṭh ḍ ḍh'.split(' ').forEach(c => PLACE[c] = 'ṇ'); 't th d dh n'.split(' ').forEach(c => PLACE[c] = 'n'); 'p ph b bh m f'.split(' ').forEach(c => PLACE[c] = 'm');
const VIRAMA = '्', NUKTA = '़', ANU = 'ं', CANDRA = 'ँ';
const isDeva = c => /[ऀ-ॿ]/.test(c);

/* one word (Devanagari only, already NFC) -> segments: {t:'C', r, dev} | {t:'V', r, inh, nas:'' | 'anu' | 'candra', mat} */
function parse(w) {
  const seg = []; const cs = [...w];
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i];
    if (IND[c]) { seg.push({ t: 'V', r: IND[c], inh: false, nas: '', mat: c }); continue; }
    if (CON[c]) {
      let r = CON[c], dev = c;
      if (cs[i + 1] === NUKTA) { if (!NUQ[c]) throw new Error('unknown nuqta letter «' + c + NUKTA + '» in «' + w + '»'); r = NUQ[c]; dev = c + NUKTA; i++; }
      seg.push({ t: 'C', r, dev });
      const n = cs[i + 1];
      if (n === VIRAMA) { i++; continue; }
      if (MAT[n]) { seg.push({ t: 'V', r: MAT[n], inh: false, nas: '', mat: n }); i++; continue; }
      seg.push({ t: 'V', r: 'a', inh: true, nas: '', mat: '' }); continue;
    }
    if (c === ANU || c === CANDRA) { const v = seg[seg.length - 1]; if (!v || v.t !== 'V') throw new Error('nasal sign with no vowel in «' + w + '»'); v.nas = c === ANU ? 'anu' : 'candra'; continue; }
    if (MAT[c]) throw new Error('vowel sign with no consonant in «' + w + '»');
    if (c === NUKTA) throw new Error('stray nuqta in «' + w + '»');
    if (c === 'ः') throw new Error('visarga ः in «' + w + '»: write the everyday spelling (दुख, not दुःख; छह, not छः)');
    throw new Error('not handled: «' + c + '» (U+' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') + ') in «' + w + '»');
  }
  return seg;
}

/* schwa deletion on the segment list (in place: deleted vowels get del = true). Returns the weak-spot notes for the warning. */
function schwa(seg) {
  const notes = []; const V = seg.map((s, i) => s.t === 'V' ? i : -1).filter(i => i >= 0);
  const live = i => seg[i] && seg[i].t === 'V' && !seg[i].del;
  const isC = i => seg[i] && seg[i].t === 'C';
  if (V.length === 0) return notes;
  const last = V[V.length - 1];
  /* final schwa */
  if (seg[last].inh && !seg[last].nas && last === seg.length - 1 && V.length > 1) {
    const cluster = isC(last - 1) && isC(last - 2);
    if (cluster) { notes.push('final a after a cluster'); if (!['र', 'य'].includes(seg[last - 1].dev)) seg[last].del = true; }
    else seg[last].del = true;
  }
  /* medial schwas, right to left; never the first vowel of the word */
  const cand = V.filter(i => seg[i].inh && !seg[i].nas && i !== V[0] && i !== last);
  for (let k = cand.length - 1; k >= 0; k--) {
    const i = cand[k];
    const ok = isC(i - 1) && live(i - 2) && isC(i + 1) && live(i + 2);
    if (!ok) continue;
    if (seg[i + 1].dev === 'य') { notes.push('a before य kept'); continue; }
    if (seg[i + 1].dev === 'ह') { notes.push('a before ह kept'); continue; }
    if (seg[i - 1].dev === 'ह' || seg[i + 1].dev === 'ह') notes.push('a beside ह');
    /* weak spot: another deletable schwa two places to the left (CaCaCaV: the scan direction decides) */
    const j = i - 2; if (seg[j] && seg[j].inh && !seg[j].nas && j !== V[0] && isC(j - 1) && live(j - 2)) notes.push('two deletable a in a row');
    seg[i].del = true;
  }
  return notes;
}

function render(seg, w) {
  let out = ''; const notes = [];
  for (let i = 0; i < seg.length; i++) {
    const s = seg[i];
    if (s.t === 'C') {
      /* च before च or छ is written c: अच्छा acchhā, बच्चा bacchā */
      if (s.dev === 'च' && seg[i + 1] && seg[i + 1].t === 'C' && (seg[i + 1].dev === 'च' || seg[i + 1].dev === 'छ')) { out += 'c'; continue; }
      /* ज्ञ is said gy in Hindi */
      if (s.dev === 'ज' && seg[i + 1] && seg[i + 1].t === 'C' && seg[i + 1].dev === 'ञ') { out += 'gy'; i++; continue; }
      out += s.r; continue;
    }
    if (s.del) continue;
    let v = s.r;
    if (s.nas) {
      const nx = seg[i + 1] && seg[i + 1].t === 'C' ? seg[i + 1].r : null;
      const stop = nx && PLACE[nx];
      /* anusvara over a vowel sign that rises above the line (ी े ै ो ौ) stands for ँ, which has no room there: a nasal vowel (मैंने, क्योंकि, गेंद) */
      const upper = ['ī', 'e', 'ai', 'o', 'au'].includes(v);
      const futureEnding = nx === 'g' && seg[i + 2] && seg[i + 2].t === 'V' && ['ā', 'e', 'ī'].includes(seg[i + 2].r) && i + 2 === seg.length - 1; /* करेंगे, मिलेंगी */
      if (s.nas === 'anu' && stop && upper && nx !== 'n' && nx !== 'm' && !futureEnding) notes.push('nasal dot over a raised vowel sign read as a nasal vowel (an English loan with a real n, like बैंक, goes in EXC)');
      if (s.nas === 'anu' && stop && !upper) {
        if (['ā', 'ū'].includes(v)) notes.push('anusvara on ā or ū before a stop (if the vowel is nasal, spell it with ँ)');
        v += PLACE[nx];
      } else {
        if (s.nas === 'anu' && ['a', 'ā', 'u', 'ū'].includes(v) && !nx) notes.push('anusvara where ँ fits (हाँ, not हां)');
        v = v.slice(0, -1) + v.slice(-1) + '̃';
      }
    }
    out += v;
  }
  return { r: out.normalize('NFC'), notes };
}

function word(w) {
  w = w.normalize('NFC');
  if (EXC[w]) return EXC[w];
  const seg = parse(w); const n1 = schwa(seg); const { r, notes } = render(seg, w);
  const all = n1.concat(notes);
  if (all.length && !VER.has(w)) warned.push('check «' + w + '» -> ' + r + ' (' + [...new Set(all)].join('; ') + ')');
  return r;
}

const PUNCT = { '।': '.', '॥': '.', '.': '.', '?': '?', '!': '!', ',': ',', ':': ':', ';': ';' };
function respell(text) {
  const src = String(text).normalize('NFC').replace(/[‌‍]/g, '');
  let out = ''; let buf = '';
  const flush = () => { if (buf) { out += word(buf); buf = ''; } };
  for (const c of src) {
    if (isDeva(c) && !PUNCT[c] && !/[०-९]/.test(c) && c !== 'ऽ') { buf += c; continue; }
    flush();
    if (PUNCT[c]) { out = out.replace(/ +$/, '') + PUNCT[c]; continue; }
    if (c === '-' || c === '‐') { out = out.replace(/ +$/, '') + '-'; continue; }
    if (/\s/.test(c)) { if (out && !/[ -]$/.test(out)) out += ' '; continue; }
    if (/["“”‘’'«»()]/.test(c)) continue;
    throw new Error('not Hindi text: «' + c + '» in «' + text + '» (write numbers as words, no Latin letters, no Devanagari digits, no ऽ)');
  }
  flush();
  return out.replace(/ +([.,?!:;])/g, '$1').replace(/\s+/g, ' ').trim();
}

/* pronPattern: lowercase learner romanisation, words of the key's letters, single spaces, hyphen inside a word,
   punctuation right after a word; the combining tilde only after ā ī ū; no doubled vowels (aa ii uu ee), no c without h. */
function pattern() {
  const L = "[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵŏãĩũẽõ\\u0303]";
  const W = L + '+(?:-' + L + '+)*[.,?!:;]?';
  return '^(?!.*(?:aa|ii|uu|ee|c(?!c?h)|[^āīū]\\u0303|^\\u0303))' + W + '(?: ' + W + ')*$';
}
function warnings() { const w = warned; warned = []; return w; }
module.exports = { respell, pattern, warnings, EXC, VER };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); warnings().forEach(m => process.stderr.write('warning: ' + m + '\n')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } });
  process.exit(bad ? 1 : 0);
}
