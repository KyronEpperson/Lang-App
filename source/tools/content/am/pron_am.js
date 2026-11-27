/* am-en pronunciation aid: zh-format IPA -> English respelled in Ethiopic fidel (docs/profiles/am.md §6, PRON-RULES.md).
   usage: node tools/content/am/pron_am.js "<ipa>"        print the respelling
          node tools/content/am/pron_am.js --selftest     check every worked pair in SELFTEST and the bad inputs; exit 1 on a mismatch
          node tools/content/am/pron_am.js --pattern      print the pronPattern regex source that profile.json carries
          node tools/content/am/pron_am.js --lookup       rebuild pron_lookup.json: ipa_seed.json first, then (if present) every IPA pron of
                                                          tools/content/zh (deck cards, idioms, {{ex}} rows); a seed entry wins over zh
          node tools/content/am/pron_am.js --sample       print the 40 sample rows of profile §6.7
   Input: zh conventions (tools/content/zh/PRON-RULES.md): one or more /…/ groups, words split by spaces, ˈ ˌ, ‖ between sentences,
   American values, ASCII g. Output: Ethiopic letters of the basic block U+1200–U+137F only (no combining marks, no ፡ or ።),
   ˈ (U+02C8), single spaces between words, ". " between sentences, " / " between alternatives. Every output is tested against
   profile.json pronPattern (when the profile has one); an unknown symbol or a failing output throws.

   THE KEY (profile §6.2). A fidel letter is a consonant + one of seven vowel "orders":
     1st ä   ʌ ə ɜː         ከ   cup ከፕ, about ኧˈባውት, bird በርድ
     2nd u   ʊ u  (uː + ው)  ቡ   book ቡክ, food ፉውድ
     3rd i   ɪ i  (iː + ይ)  ሲ   sit ሲት, seat ሲይት
     4th a   æ ɑː (aɪ + ይ, aʊ + ው)  ካ   cat ካት, car ካር, time ታይም, now ናው
     5th e   e    (eɪ + ይ)  ቤ   bed ቤድ, cake ኬይክ
     6th     NO VOWEL, ever (this aid never uses the 6th order for ɨ): ስኩውል school, ትሪይ tree
     7th o   ɔː   (oʊ + ው, ɔɪ + ይ)  ቶ   talk ቶክ, go ጎው, boy ቦይ
   A long vowel or a diphthong is the order + a glide letter (ይ or ው). Before another vowel the glide carries it: going ˈጎዊን.
   Consonants: p ፐ b በ t ተ d ደ k ከ g ገ f ፈ v ቨ w ወ θ ሠ ð ዸ s ሰ z ዘ ʃ ሸ ʒ ዠ tʃ ቸ dʒ ጀ h ሀ (1st order ኸ) m መ n ነ
     ŋ ን (written as n, always 6th order; no g is added; a following vowel is written on its own) l ለ r ረ j የ. A vowel with no consonant before it: the አ series, with ኧ for the 1st order
     and አ for the 4th (English apple ˈአፕል, as Amharic spells the loan).
   Stress: ˈ before the stressed syllable on every word of 2+ syllables, none on a 1-syllable word; ˌ is dropped. A 2+ syllable word
   with no ˈ takes the stress from HAND_STRESS, else from a stressed zh occurrence of the same sounds, else the tool throws. */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');
let PROFILE = {};
try { PROFILE = JSON.parse(fs.readFileSync(path.join(__dirname, 'profile.json'), 'utf8')); } catch (e) { PROFILE = {}; }

/* series: IPA consonant -> code point of its 1st order; orders are base+0 (1st) … base+6 (7th) */
const SERIES = {
  p: 0x1350, b: 0x1260, t: 0x1270, d: 0x12F0, k: 0x12A8, g: 0x1308, f: 0x1348, v: 0x1268, w: 0x12C8,
  'θ': 0x1220, 'ð': 0x12F8, s: 0x1230, z: 0x12D8, 'ʃ': 0x1238, 'ʒ': 0x12E0, 'tʃ': 0x1278, 'dʒ': 0x1300,
  h: 0x1200, m: 0x1218, n: 0x1290, 'ŋ': 0x1290, l: 0x1208, r: 0x1228, j: 0x12E8
};
const CARRIER = 0x12A0;                        /* አ series for a vowel with no consonant */
const EXCEPT = { h: { 1: 0x12B8 }, '': { 1: 0x12A7, 4: 0x12A0 } };   /* ሀ 1st order reads "ha" -> ኸ; አ 1st order reads "a" -> ኧ, 4th -> አ */
const letter = (cons, order) => {               /* order 1..7 */
  const ex = EXCEPT[cons] && EXCEPT[cons][order];
  if (ex) return String.fromCodePoint(ex);
  const base = cons === '' ? CARRIER : SERIES[cons];
  return String.fromCodePoint(base + order - 1);
};
/* vowel -> [order, glide] ; glide 'y' = የ series, 'w' = ወ series */
const VOW = {
  'ʌ': [1, ''], 'ə': [1, ''], 'ɜː': [1, ''],
  'ʊ': [2, ''], u: [2, ''], 'uː': [2, 'w'],
  'ɪ': [3, ''], i: [3, ''], 'iː': [3, 'y'],
  'æ': [4, ''], 'ɑː': [4, ''], 'aɪ': [4, 'y'], 'aʊ': [4, 'w'],
  e: [5, ''], 'eɪ': [5, 'y'],
  'ɔː': [7, ''], 'oʊ': [7, 'w'], 'ɔɪ': [7, 'y']
};
const GLIDE = { y: 'j', w: 'w' };
const SYMS = [...Object.keys(VOW), ...Object.keys(SERIES), 'ˈ', 'ˌ'].sort((a, b) => b.length - a.length);
const hex = c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');

/* every letter the aid can produce (for pronPattern and pron_check) */
function letters() {
  const set = new Set();
  for (const c of Object.keys(SERIES)) for (let o = 1; o <= 7; o++) set.add(letter(c, o));
  for (let o = 1; o <= 7; o++) set.add(letter('', o));
  return [...set].sort();
}
function patternSource() {
  const cls = '[' + letters().map(c => '\\u' + c.codePointAt(0).toString(16)).join('') + ']';
  const word = 'ˈ?' + cls + '+(?:ˈ' + cls + '+)*';
  return '^' + word + '(?:(?: |\\. | / )' + word + ')*$';
}
const PRON_RE = new RegExp(PROFILE.pronPattern || patternSource(), 'u');

function tokenize(word) {
  const out = [];
  for (let i = 0; i < word.length;) {
    const s = SYMS.find(x => word.startsWith(x, i));
    if (!s) { const c = String.fromCodePoint(word.codePointAt(i)); throw new Error('ipaToAm: unknown symbol «' + c + '» (' + hex(c) + ') in /' + word + '/'); }
    out.push(s in VOW ? { t: 'V', k: s } : s in SERIES ? { t: 'C', k: s } : { t: 'S', primary: s === 'ˈ' });
    i += s.length;
  }
  return out;
}

/* stress supply for a 2+ syllable word with no ˈ: ˌ -> ˈ; HAND_STRESS (citation stress); a stressed zh occurrence; else throw */
const HAND_STRESS = {
  'ɪntə': 'ˈɪntə', 'ɪntu': 'ˈɪntu', 'ʌndər': 'ˈʌndər', 'oʊvər': 'ˈoʊvər', 'æftər': 'ˈæftər', 'əntɪl': 'ənˈtɪl', 'ʌntɪl': 'ʌnˈtɪl',
  'əbaʊt': 'əˈbaʊt', 'əkrɔːs': 'əˈkrɔːs', 'əraʊnd': 'əˈraʊnd', 'bɪfɔːr': 'bɪˈfɔːr', 'bɪkʌz': 'bɪˈkʌz', 'bɪkəz': 'bɪˈkəz',
  'bɪtwiːn': 'bɪˈtwiːn', 'wɪðaʊt': 'wɪˈðaʊt', 'əgen': 'əˈgen', 'əgenst': 'əˈgenst', 'əpɑːn': 'əˈpɑːn', 'dʊrɪŋ': 'ˈdʊrɪŋ',
  'ɔːlsoʊ': 'ˈɔːlsoʊ', 'eni': 'ˈeni', 'ʌðər': 'ˈʌðər', 'əlɔːŋ': 'əˈlɔːŋ', 'əwer': 'əˈwer', 'bɪsaɪd': 'bɪˈsaɪd',
  'bɪhaɪnd': 'bɪˈhaɪnd', 'bɪloʊ': 'bɪˈloʊ', 'əbʌv': 'əˈbʌv', 'wɪðɪn': 'wɪˈðɪn', 'ɔːlðoʊ': 'ɔːlˈðoʊ', 'aʊər': 'ˈaʊər', 'ɪtl': 'ˈɪtl'
};
function zhPairs() {
  const D = path.join(ROOT, 'tools', 'content', 'zh') + path.sep, out = [];
  if (!fs.existsSync(D + 'decks.js')) return out;
  const isIpa = s => /^\/.+\/$/.test(s);
  const decks = require(D + 'decks.js');
  for (const t of Object.values(decks)) String(t).split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && isIpa(f[1].trim())) out.push({ en: f[0].trim(), ipa: f[1].trim() }); });
  if (fs.existsSync(D + 'extra.js')) (fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '').split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 3 && isIpa(f[2].trim())) out.push({ en: f[0].trim(), ipa: f[2].trim() }); });
  for (const fn of ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js']) {
    if (!fs.existsSync(D + fn)) continue;
    const t = fs.readFileSync(D + fn, 'utf8'); let m; const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g;
    while ((m = ex.exec(t))) if (isIpa(m[2].trim())) out.push({ en: m[1].trim(), ipa: m[2].trim() });
  }
  return out;
}
let STRESSED = null;
function stressMap() {
  if (STRESSED) return STRESSED;
  STRESSED = {};
  for (const p of zhPairs()) for (const g of p.ipa.replace(/[\/‖]/g, ' ').split(/\s+/)) {
    if (!g || (g.match(/ˈ/g) || []).length !== 1) continue;
    let seg; try { seg = tokenize(g); } catch (x) { continue; }
    const key = seg.filter(x => x.t !== 'S').map(x => x.k).join('');
    let n = 0, pos = -1; for (const x of seg) { if (x.t === 'S') { if (x.primary) pos = n; } else n++; }
    if (pos >= 0 && !(key in STRESSED)) STRESSED[key] = pos;
  }
  return STRESSED;
}
function supplyStress(seg, ph, word) {
  const sec = seg.findIndex(x => x.t === 'S' && !x.primary);
  if (sec >= 0) { seg[sec] = { t: 'S', primary: true }; return; }
  const key = ph.map(x => x.k).join('');
  let pos;
  if (HAND_STRESS[key]) { const h = tokenize(HAND_STRESS[key]); pos = h.findIndex(x => x.t === 'S'); }
  else pos = stressMap()[key];
  if (pos === undefined || pos < 0) throw new Error('ipaToAm: needs ˈ on /' + word + '/ (2+ syllables, no stress in the IPA, none found in HAND_STRESS or zh)');
  let n = 0;
  for (let i = 0; i < seg.length; i++) { if (seg[i].t === 'S') continue; if (n === pos) { seg.splice(i, 0, { t: 'S', primary: true }); return; } n++; }
}

function convWord(word) {
  const bad = m => { throw new Error('ipaToAm: ' + m + ' in /' + word + '/'); };
  const seg = tokenize(word);
  const ph = seg.filter(x => x.t !== 'S');
  if (!ph.length) bad('no sound');
  if (seg[seg.length - 1].t === 'S') bad('dangling stress mark');
  if (seg.some((x, i) => x.t === 'S' && seg[i + 1].t === 'S')) bad('two stress marks in a row');
  if (seg.filter(x => x.t === 'S' && x.primary).length > 1) bad('two primary stress marks');
  seg.forEach((x, i) => {
    const y = seg[i + 1], z = seg[i + 2];
    if (!y || x.t !== 'V' || y.t !== 'V') return;
    const pair = x.k + y.k;
    if (pair === 'əʊ' || pair === 'eə' || pair === 'ʊə' || (pair === 'ɪə' && !(z && z.t === 'C' && z.k === 'r'))) bad('British diphthong ' + pair + ' (write the American value: oʊ, er, ʊr, ɪr)');
  });
  /* syllabic l / n (zh PRON-RULES A4): l or n after a consonant other than r, only consonants to the word end; counts as a syllable */
  ph.forEach((x, i) => {
    if (x.t === 'C' && (x.k === 'l' || x.k === 'n') && i > 0 && ph[i - 1].t === 'C' && ph[i - 1].k !== 'r' && !ph[i - 1].syl &&
        ph.slice(i + 1).every(y => y.t === 'C')) x.syl = true;
  });
  const syll = ph.filter(x => x.t === 'V' || x.syl).length;
  if (syll >= 2 && !seg.some(x => x.t === 'S' && x.primary)) supplyStress(seg, ph, word);
  const s = seg.filter(x => x.t !== 'S' || (x.primary && syll >= 2));
  let out = '', pendingGlide = '';            /* a glide written by the last vowel, not yet put on paper */
  const flushGlide = () => { if (pendingGlide) { out += letter(GLIDE[pendingGlide], 6); pendingGlide = ''; } };
  for (let i = 0; i < s.length; i++) {
    const x = s[i], next = s[i + 1];
    if (x.t === 'S') { flushGlide(); out += 'ˈ'; continue; }
    if (x.t === 'C') {
      flushGlide();
      /* ŋ never carries a vowel: ን, then the vowel is written on its own (singing ˈሲንኢን, not ˈሲኒን) */
      if (next && next.t === 'V' && x.k !== 'ŋ') { const [ord, gl] = VOW[next.k]; out += letter(x.k, ord); pendingGlide = gl; i++; }
      else out += letter(x.k, 6);              /* 6th order = no vowel */
      continue;
    }
    /* a vowel with no consonant letter before it: the pending glide carries it, else the አ series */
    const [ord, gl] = VOW[x.k];
    if (pendingGlide) { out += letter(GLIDE[pendingGlide], ord); pendingGlide = gl; }
    else { out += letter('', ord); pendingGlide = gl; }
  }
  flushGlide();
  return out;
}

function ipaToAm(ipa) {
  const src = String(ipa).trim();
  if (!src) throw new Error('ipaToAm: empty input');
  const groups = []; let rest = src.replace(/\/([^/]*)\//g, (m, g) => { groups.push(g); return ''; });
  if (rest.trim()) throw new Error('ipaToAm: text outside the slashes: «' + rest.trim() + '» in ' + src);
  if (!groups.length) throw new Error('ipaToAm: no /…/ group in ' + src);
  const out = groups.map(g => {
    const sentences = g.split('‖').map(x => x.trim());
    if (sentences.some(x => !x)) throw new Error('ipaToAm: empty sentence in /' + g + '/');
    return sentences.map(snt => snt.split(/\s+/).map(convWord).join(' ')).join('. ');
  }).join(' / ');
  if (!PRON_RE.test(out)) throw new Error('ipaToAm: output fails pronPattern: ' + out + '  (from ' + src + ')');
  const bad = [...out].find(c => /\p{Script=Ethiopic}/u.test(c) && (c.codePointAt(0) < 0x1200 || c.codePointAt(0) > 0x137F));
  if (bad) throw new Error('ipaToAm: letter outside U+1200–137F: ' + hex(bad));
  return out.normalize('NFC');
}

/* worked pairs (profile §6.2 key rows, §6.7 sample). The selftest also asserts that every row is reproduced byte for byte. */
const SELFTEST = [
  ['/kʌp/', 'ከፕ'], ['/əˈbaʊt/', 'ኧˈባውት'], ['/bɜːrd/', 'በርድ'], ['/bʊk/', 'ቡክ'], ['/fuːd/', 'ፉውድ'], ['/sɪt/', 'ሲት'], ['/siːt/', 'ሲይት'],
  ['/kæt/', 'ካት'], ['/kɑːr/', 'ካር'], ['/taɪm/', 'ታይም'], ['/naʊ/', 'ናው'], ['/bed/', 'ቤድ'], ['/keɪk/', 'ኬይክ'], ['/skuːl/', 'ስኩውል'],
  ['/triː/', 'ትሪይ'], ['/tɔːk/', 'ቶክ'], ['/goʊ/', 'ጎው'], ['/bɔɪ/', 'ቦይ'], ['/ˈgoʊɪŋ/', 'ˈጎዊን'], ['/ˈæpl/', 'ˈአፕል'], ['/ˈsɪŋɪŋ/', 'ˈሲንኢን'], ['/ˈfɪŋgər/', 'ˈፊንገር'],
  ['/θɪŋk/', 'ሢንክ'], ['/ðɪs/', 'ዺስ'], ['/ˈveri/', 'ˈቬሪ'], ['/ˈweri/', 'ˈዌሪ'], ['/hʌt/', 'ኸት'], ['/hæt/', 'ሃት'], ['/ʌp/', 'ኧፕ'],
  ['/aɪˈdiːə/', 'አይˈዲየ'], ['/ˈmjuːzɪk/', 'ˈምዩውዚክ'], ['/wɪðˈɪn/', 'ዊዽˈኢን'], ['/ˈlɪtl/', 'ˈሊትል'], ['/ðə/', 'ዸ'],
  ['/hɪr ju ɑːr ‖ θæŋks/', 'ሂር ዩ አር. ሣንክስ'], ['/ˈwɜːrk/ /ˈwɔːk/', 'ወርክ / ዎክ'],
];
const BAD = ['', 'kæt', '/kæt', '/kɒt/', '/bɜd/', '/ɡoʊ/', '/gəʊ/', '/ˈ/', '/kæˈ/', '/ˈˈkæt/', '/KAT/', '/kæt2/', '/a b/ x'];

const SAMPLE = [
  ['think', '/θɪŋk/'], ['this', '/ðɪs/'], ['three', '/θriː/'], ['mother', '/ˈmʌðər/'], ['with', '/wɪð/'], ['very', '/ˈveri/'],
  ['wine', '/waɪn/'], ['vine', '/vaɪn/'], ['ship', '/ʃɪp/'], ['sheep', '/ʃiːp/'], ['full', '/fʊl/'], ['fool', '/fuːl/'],
  ['cat', '/kæt/'], ['cut', '/kʌt/'], ['hot', '/hɑːt/'], ['boat', '/boʊt/'], ['bought', '/bɔːt/'], ['school', '/skuːl/'],
  ['street', '/striːt/'], ['texts', '/teksts/'], ['asked', '/æskt/'], ['students', '/ˈstuːdnts/'], ['singing', '/ˈsɪŋɪŋ/'],
  ['photograph', '/ˈfoʊtəgræf/'], ['photography', '/fəˈtɑːgrəfi/'], ['usually', '/ˈjuːʒuəli/'], ['television', '/ˈteləvɪʒn/'],
  ['Hello.', '/həˈloʊ/'], ['How are you?', '/haʊ ər ju/'], ["I'm a student.", '/aɪm ə ˈstuːdnt/'],
  ['Thank you very much.', '/ˈθæŋk ju ˈveri ˈmʌtʃ/'], ['Where are you from?', '/wer ər ju frʌm/'],
  ['I live in Addis Ababa.', '/aɪ ˈlɪv ɪn ˈædɪs ˈæbəbə/'], ['My name is Selam.', '/maɪ ˈneɪm ɪz ˈselɑːm/'],
  ["I'd like a cup of coffee.", '/aɪd ˈlaɪk ə ˈkʌp əv ˈkɔːfi/'], ['Have you ever eaten injera?', '/həv ju ˈevər ˈiːtn ɪnˈdʒerə/'],
  ['It costs fifty birr.', '/ɪt ˈkɔːsts ˈfɪfti ˈbɪr/'], ["What's the weather like?", '/wʌts ðə ˈweðər laɪk/'],
  ['They threw it away.', '/ðeɪ ˈθruː ɪt əˈweɪ/'], ['See you tomorrow. Take care.', '/ˈsiː ju təˈmɑːroʊ ‖ teɪk ˈker/']
];

if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--pattern') { console.log(patternSource()); }
  else if (a[0] === '--selftest') {
    let bad = 0;
    for (const [i, o] of SELFTEST) { let r; try { r = ipaToAm(i); } catch (e) { r = 'THROW ' + e.message; } if (r !== o) { bad++; console.log('MISMATCH ' + i + ' -> ' + r + '  expected ' + o); } }
    for (const i of BAD) { try { const r = ipaToAm(i); bad++; console.log('ACCEPTED bad input «' + i + '» -> ' + r); } catch (e) { /* refused, good */ } }
    for (const [, i] of SAMPLE) { try { ipaToAm(i); } catch (e) { bad++; console.log('SAMPLE THROWS ' + i + ': ' + e.message); } }
    console.log('selftest: ' + SELFTEST.length + ' pairs, ' + BAD.length + ' bad inputs, ' + SAMPLE.length + ' sample rows · ' + (bad ? bad + ' FAIL' : 'all OK'));
    process.exit(bad ? 1 : 0);
  }
  else if (a[0] === '--sample') { for (const [en, i] of SAMPLE) console.log('| ' + en + ' | `' + i + '` | ' + ipaToAm(i) + ' |'); }
  else if (a[0] === '--lookup') {
    const L = {}, src = {}; let nz = 0, ns = 0, fail = [];
    const seedF = path.join(__dirname, 'ipa_seed.json');
    const seed = fs.existsSync(seedF) ? JSON.parse(fs.readFileSync(seedF, 'utf8')) : {};
    for (const [en, ipa] of Object.entries(seed)) { if (en.startsWith('_')) continue; try { L[en] = ipaToAm(ipa); src[en] = 'seed'; ns++; } catch (e) { fail.push(en + ': ' + e.message); } }
    if (!a.includes('--seed-only')) for (const p of zhPairs()) { if (p.en in L) continue; try { L[p.en] = ipaToAm(p.ipa); nz++; } catch (e) { fail.push(p.en + ': ' + e.message); } }
    fs.writeFileSync(path.join(__dirname, 'pron_lookup.json'), JSON.stringify(L, null, 1) + '\n');
    console.log('pron_lookup.json: ' + Object.keys(L).length + ' strings (' + ns + ' from ipa_seed.json, ' + nz + ' from zh) · ' + fail.length + ' refused');
    fail.slice(0, 40).forEach(f => console.log('  REFUSED ' + f));
  }
  else if (a.length) { for (const x of a) console.log(ipaToAm(x)); }
  else { console.log('usage: node tools/content/am/pron_am.js "/ipa/" | --selftest | --pattern | --lookup [--seed-only] | --sample'); }
}
module.exports = { ipaToAm, patternSource, letters, SAMPLE };
