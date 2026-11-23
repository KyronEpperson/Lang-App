/* te-en pronunciation aid: zh-format IPA -> Telugu-script respelling (docs/profiles/te.md §6).
   usage: node tools/content/te/pron_te.js "<ipa>"     print the respelling
          node tools/content/te/pron_te.js --selftest  check every §6 example pair and the bad inputs; exit 1 on a mismatch
          node tools/content/te/pron_te.js --lookup    rebuild pron_lookup.json from tools/content/zh (decks, {{ex}} rows, idioms)
   Input: zh conventions (tools/content/zh/PRON-RULES.md): one or more /…/ groups, words split by spaces, ˈ ˌ, ‖ between sentences.
   Every output is NFC and is tested against profile.json pronPattern; an unknown symbol or a failing output throws.
   Readings chosen where §6 leaves a choice are listed in PRON-TOOL.md under "Decisions". */
'use strict';
const fs = require('fs'), path = require('path');
const PROFILE = JSON.parse(fs.readFileSync(path.join(__dirname, 'profile.json'), 'utf8'));
const PRON_RE = new RegExp(PROFILE.pronPattern, 'u');

const NUK = String.fromCodePoint(0x0C3C), POLLU = String.fromCodePoint(0x0C4D), SUNNA = String.fromCodePoint(0x0C02), YA = String.fromCodePoint(0x0C2F), I_SIGN = String.fromCodePoint(0x0C3F);
const ZW_RE = new RegExp('[' + String.fromCodePoint(0x200C) + String.fromCodePoint(0x200D) + ']');
/* consonants: IPA -> letter (dotted letters as base + U+0C3C; the nukta comes before the pollu or the vowel sign) */
const CONS = {
  p: 'ప', b: 'బ', t: 'ట', d: 'డ', k: 'క', g: 'గ',
  'tʃ': 'చ', 'dʒ': 'జ', f: 'ఫ', v: 'వ' + NUK, w: 'వ', 'θ': 'థ' + NUK, 'ð': 'ద' + NUK,
  s: 'స', z: 'జ' + NUK, 'ʃ': 'ష', 'ʒ': 'ఝ' + NUK, h: 'హ',
  m: 'మ', n: 'న', 'ŋ': 'ఙ', l: 'ల', r: 'ర', j: 'య'
};
/* vowels: IPA -> [independent, sign]; '' sign = the inherent అ (STRUT, schwa, NURSE).
   Context rules (rule 8): ɔː is ఓ / ో before r; æ is యా / ్యా; ɔɪ is ఆ / ా + య, see convWord. */
const VOW = {
  'iː': ['ఈ', 'ీ'], 'ɪ': ['ఇ', 'ి'], i: ['ఇ', 'ి'],
  e: ['ఎ', 'ె'], 'eɪ': ['ఏ', 'ే'], 'æ': ['యా', POLLU + 'యా'],
  'ʌ': ['అ', ''], 'ə': ['అ', ''], 'ɜː': ['అ', ''],
  'ɑː': ['ఆ', 'ా'], 'ɔː': ['ఆ', 'ా'], 'oʊ': ['ఓ', 'ో'],
  'uː': ['ఊ', 'ూ'], 'ʊ': ['ఉ', 'ు'], u: ['ఉ', 'ు'],
  'aɪ': ['ఐ', 'ై'], 'aʊ': ['ఔ', 'ౌ'], 'ɔɪ': ['ఆ', 'ా']
};
const NORTH = ['ఓ', 'ో'];
/* rule 7: a nasal before its own stop */
const HOMORGANIC = { n: ['t', 'd', 'tʃ', 'dʒ'], m: ['p', 'b'], 'ŋ': ['k', 'g'] };
const SYMS = [...Object.keys(VOW), ...Object.keys(CONS), 'ˈ', 'ˌ'].sort((a, b) => b.length - a.length);
const hex = c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');

function tokenize(word) {
  const out = [];
  for (let i = 0; i < word.length;) {
    const s = SYMS.find(x => word.startsWith(x, i));
    if (!s) { const c = String.fromCodePoint(word.codePointAt(i)); throw new Error('ipaToTe: unknown symbol «' + c + '» (' + hex(c) + ') in /' + word + '/'); }
    out.push(s in VOW ? { t: 'V', k: s } : s in CONS ? { t: 'C', k: s } : { t: 'S', primary: s === 'ˈ' });
    i += s.length;
  }
  return out;
}

/* Stress for a 2+ syllable word that has no ˈ (rule 2 as amended). Order: (1) a ˌ in the word becomes ˈ; (2) the position zh uses
   for the same sounds in a stressed occurrence anywhere in tools/content/zh; (3) HAND_STRESS (citation stress, Merriam-Webster).
   A word none of these covers throws, so a new word is never left unmarked. */
const HAND_STRESS = {
  /* key = the sounds without marks; value = the IPA with ˈ */
  'ɪntə': 'ˈɪntə', 'ɪntu': 'ˈɪntu', 'ʌndər': 'ˈʌndər', 'oʊvər': 'ˈoʊvər', 'æftər': 'ˈæftər', 'ənˈtɪl': 'ənˈtɪl', 'əntɪl': 'ənˈtɪl',
  'əbaʊt': 'əˈbaʊt', 'əkrɔːs': 'əˈkrɔːs', 'əraʊnd': 'əˈraʊnd', 'bɪfɔːr': 'bɪˈfɔːr', 'bɪkʌz': 'bɪˈkʌz', 'bɪkəz': 'bɪˈkəz',
  'bɪtwiːn': 'bɪˈtwiːn', 'wɪðaʊt': 'wɪˈðaʊt', 'wɪθaʊt': 'wɪˈθaʊt', 'əgen': 'əˈgen', 'əgenst': 'əˈgenst', 'əpɑːn': 'əˈpɑːn',
  'ʌntɪl': 'ʌnˈtɪl', 'dʊrɪŋ': 'ˈdʊrɪŋ', 'ɔːlsoʊ': 'ˈɔːlsoʊ', 'eni': 'ˈeni', 'ʌðər': 'ˈʌðər', 'əlɔːŋ': 'əˈlɔːŋ', 'əwer': 'əˈwer',
  'ɑːntu': 'ˈɑːntu', 'ɑːntə': 'ˈɑːntə', 'bɪsaɪd': 'bɪˈsaɪd', 'bɪhaɪnd': 'bɪˈhaɪnd', 'bɪloʊ': 'bɪˈloʊ', 'əbʌv': 'əˈbʌv',
  'wɪðɪn': 'wɪˈðɪn', 'ɔːlðoʊ': 'ɔːlˈðoʊ', 'aʊər': 'ˈaʊər', 'ɪtl': 'ˈɪtl'
};
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
  let pos = stressMap()[key];
  if (pos === undefined && HAND_STRESS[key]) { const h = tokenize(HAND_STRESS[key]); pos = h.findIndex(x => x.t === 'S'); }
  if (pos === undefined || pos < 0) throw new Error('ipaToTe: rule 2 needs ˈ on /' + word + '/ (2+ syllables, no stress in the IPA, none found in zh or HAND_STRESS)');
  /* insert before the pos-th sound */
  let n = 0;
  for (let i = 0; i < seg.length; i++) { if (seg[i].t === 'S') continue; if (n === pos) { seg.splice(i, 0, { t: 'S', primary: true }); return; } n++; }
}

function convWord(word) {
  const bad = m => { throw new Error('ipaToTe: ' + m + ' in /' + word + '/'); };
  const seg = tokenize(word);
  const ph = seg.filter(x => x.t !== 'S');
  if (!ph.length) bad('no sound');
  if (seg[seg.length - 1].t === 'S') bad('dangling stress mark');
  if (seg.some((x, i) => x.t === 'S' && seg[i + 1].t === 'S')) bad('two stress marks in a row');
  /* British diphthongs spelled with two symbols (zh PRON-RULES A1, zh pron_check "symbol" rule): əʊ, eə, ʊə, and ɪə unless r follows */
  seg.forEach((x, i) => {
    const y = seg[i + 1], z = seg[i + 2];
    if (!y || x.t !== 'V' || y.t !== 'V') return;
    const pair = x.k + y.k;
    if (pair === 'əʊ' || pair === 'eə' || pair === 'ʊə' || (pair === 'ɪə' && !(z && z.t === 'C' && z.k === 'r'))) bad('British diphthong ' + pair + ' (write the American value: oʊ, er, ʊr, ɪr)');
  });
  /* rule 6: syllabic l / n (zh PRON-RULES A4) = l or n after a consonant other than r, with only consonants up to the word end */
  ph.forEach((x, i) => {
    if (x.t === 'C' && (x.k === 'l' || x.k === 'n') && i > 0 && ph[i - 1].t === 'C' && ph[i - 1].k !== 'r' && !ph[i - 1].syl &&
        ph.slice(i + 1).every(y => y.t === 'C')) x.syl = true;
  });
  const syll = ph.filter(x => x.t === 'V' || x.syl).length;
  /* rule 2 (amended 2026-11-23, lead ruling after the pre-merge review): every word of 2+ syllables carries ˈ, even where the
     zh IPA leaves a function word unstressed (about, into, under …); one-syllable words carry none; every ˌ is dropped. */
  if (syll >= 2 && !seg.some(x => x.t === 'S' && x.primary)) supplyStress(seg, ph, word);
  const s = seg.filter(x => x.t !== 'S' || (x.primary && syll >= 2));
  let out = '';
  /* state: what the last written sound was. 'C' = a consonant letter that can take a sign; 'V' = a vowel (or sunna after one); '' = word start or ˈ */
  let last = '', vowelBefore = false;   /* vowelBefore: the last sound written is a vowel (rule 7 "after a vowel") */
  for (let i = 0; i < s.length; i++) {
    const x = s[i], next = s[i + 1];
    const n2 = s.slice(i + 1).find(y => y.t !== 'S');      /* next sound, looking through ˈ */
    if (x.t === 'S') { out += 'ˈ'; last = ''; continue; }
    if (x.t === 'V') {
      /* rule 3: sign directly after a consonant; independent letter at the word start, after a vowel, or after ˈ */
      const pair = x.k === 'ɔː' && n2 && n2.t === 'C' && n2.k === 'r' ? NORTH : VOW[x.k];
      out += last === 'C' ? pair[1] : pair[0];
      last = 'V'; vowelBefore = true;
      if (x.k === 'ɔɪ') {
        /* CHOICE: … + య, then: pollu at the word end; the next vowel's sign directly before a vowel; ి otherwise (before a consonant or ˈ) */
        out += YA;
        if (!next) out += POLLU;
        else if (next.t === 'V') last = 'C';
        else out += I_SIGN;
      }
      continue;
    }
    /* consonant */
    const afterVowel = vowelBefore || x.syl;               /* a syllabic n is schwa + n */
    vowelBefore = false;
    /* rule 7: sunna for a nasal before its own stop, after a vowel (also where ˈ stands between) */
    if (HOMORGANIC[x.k] && afterVowel && n2 && n2.t === 'C' && HOMORGANIC[x.k].includes(n2.k)) { out += SUNNA; last = 'V'; continue; }
    out += CONS[x.k];
    last = 'C';
    if (next && next.t === 'V') continue;                   /* the vowel sign follows */
    if (n2 && n2.t === 'C' && n2.syl) { continue; }         /* rule 6: bare before a syllabic l / n (the inherent అ is the schwa) */
    /* rule 4: pollu on every consonant with no vowel after it: before a consonant, at the word end, and before ˈ
       (before ˈ + vowel too: the vowel is then written as the independent letter) */
    out += POLLU;
  }
  return out;
}

/* convert without the pronPattern test */
function convert(ipa) {
  if (typeof ipa !== 'string') throw new Error('ipaToTe: string expected');
  const src = ipa.normalize('NFC').trim();
  const groups = [];
  const rest = src.replace(/\/([^/]*)\//g, (m, g) => { groups.push(g); return ''; });
  if (!groups.length || rest.trim()) throw new Error('ipaToTe: expected /…/ groups, got «' + ipa + '»');
  return groups.map(g => {
    const sents = g.split('‖').map(t => t.trim());
    if (sents.some(t => !t)) throw new Error('ipaToTe: empty sentence in «' + ipa + '»');
    return sents.map(t => t.split(/\s+/).map(convWord).join(' ')).join('. ');
  }).join(' / ').normalize('NFC');
}

function ipaToTe(ipa) {
  const res = convert(ipa);
  if (!PRON_RE.test(res)) throw new Error('ipaToTe: output fails pronPattern: «' + res + '» from «' + ipa + '»');
  if (ZW_RE.test(res)) throw new Error('ipaToTe: ZWNJ / ZWJ in «' + res + '»');
  return res;
}

/* zh rows: the same collection as hi/pron_check.js and bn/pron_bn.js (deck cards, {{ex}} rows, idioms).
   zh practice.js and meta.js carry no IPA. */
function zhPairs() {
  const D = path.join(__dirname, '..', 'zh') + '/', pairs = [];
  const decks = require(D + 'decks.js');
  for (const [n, t] of Object.entries(decks)) t.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && f[1].trim()) pairs.push({ en: f[0].trim(), ipa: f[1].trim(), src: 'decks:' + n }); });
  (fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '').split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 3 && f[2].trim().startsWith('/')) pairs.push({ en: f[0].trim(), ipa: f[2].trim(), src: 'IDIOMS' }); });
  for (const fn of ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js']) {
    const t = fs.readFileSync(D + fn, 'utf8'); let m; const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g;
    while ((m = ex.exec(t))) if (m[2].trim()) pairs.push({ en: m[1].trim(), ipa: m[2].trim(), src: fn });
  }
  return pairs;
}

function buildLookup(write) {
  const L = {}, failed = [], conflicts = [];
  for (const p of zhPairs()) {
    let te; try { te = ipaToTe(p.ipa); } catch (x) { failed.push(p.src + ' «' + p.en + '» ' + p.ipa + ': ' + x.message); continue; }
    if (p.en in L && L[p.en] !== te) { conflicts.push('«' + p.en + '» ' + L[p.en] + ' || ' + te); continue; }
    L[p.en] = te;
  }
  if (write) fs.writeFileSync(path.join(__dirname, 'pron_lookup.json'), JSON.stringify(L, null, 2) + '\n');
  failed.forEach(l => console.log('FAILED   ' + l));
  conflicts.forEach(l => console.log('CONFLICT ' + l));
  console.log('lookup entries ' + Object.keys(L).length + ' · failed ' + failed.length + ' · conflicts ' + conflicts.length);
  return !failed.length && !conflicts.length;
}

/* §6 example pairs. te = the profile's bytes (extracted from docs/profiles/te.md by script, not retyped; the profile is NFC).
   table: "worked" = the 58 rows of the worked-examples table (IPA as printed there); "key" = examples in the key tables, rules 2-13 and the collapses list.
   src: "zh row" / "new" = as the worked table says; "zh word" = every IPA word occurs in tools/content/zh; "own" = IPA written here in zh conventions. */
const EXAMPLES = [
  {"en":"It's cold today.","ipa":"/ɪts ˈkoʊld təˈdeɪ/","te":"ఇట్స్ కోల్డ్ టˈడే","src":"zh row","table":"worked"},
  {"en":"There's a cafe near here.","ipa":"/ðerz ə kæˈfeɪ nɪr ˈhɪr/","te":"ద఼ెర్జ఼్ అ క్యాˈఫే నిర్ హిర్","src":"zh row","table":"worked"},
  {"en":"Can you close the door?","ipa":"/kən ju ˈkloʊz ðə ˈdɔːr/","te":"కన్ యు క్లోజ఼్ ద఼ డోర్","src":"zh row","table":"worked"},
  {"en":"I have two brothers.","ipa":"/aɪ ˈhæv ˈtuː ˈbrʌðərz/","te":"ఐ హ్యావ఼్ టూ ˈబ్రద఼ర్జ఼్","src":"zh row","table":"worked"},
  {"en":"We watched a movie.","ipa":"/wi ˈwɑːtʃt ə ˈmuːvi/","te":"వి వాచ్ట్ అ ˈమూవ఼ి","src":"zh row","table":"worked"},
  {"en":"I have a dog. The dog is so cute.","ipa":"/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/","te":"ఐ హ్యావ఼్ అ డాగ్. ద఼ డాగ్ ఇజ఼్ సో క్యూట్","src":"zh row","table":"worked"},
  {"en":"Where do you live?","ipa":"/ˈwer də ju ˈlɪv/","te":"వెర్ డ యు లివ఼్","src":"zh row","table":"worked"},
  {"en":"Nice to meet you.","ipa":"/ˈnaɪs tə ˈmiːt ju/","te":"నైస్ ట మీట్ యు","src":"zh row","table":"worked"},
  {"en":"Thank you.","ipa":"/ˈθæŋk ju/","te":"థ఼్యాంక్ యు","src":"zh row","table":"worked"},
  {"en":"Hello.","ipa":"/həˈloʊ/","te":"హˈలో","src":"zh row","table":"worked"},
  {"en":"See you later.","ipa":"/ˈsiː ju ˈleɪtər/","te":"సీ యు ˈలేటర్","src":"zh row","table":"worked"},
  {"en":"Excuse me.","ipa":"/ɪkˈskjuːz mi/","te":"ఇక్ˈస్క్యూజ఼్ మి","src":"zh row","table":"worked"},
  {"en":"Have you eaten yet?","ipa":"/həv ju ˈiːtn ˈjet/","te":"హవ఼్ యు ˈఈటన్ యెట్","src":"zh row","table":"worked"},
  {"en":"How long have you been here?","ipa":"/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/","te":"హౌ లాఙ్ హవ఼్ యు బిన్ హిర్","src":"zh row","table":"worked"},
  {"en":"Good morning.","ipa":"/ˈgʊd ˈmɔːrnɪŋ/","te":"గుడ్ ˈమోర్నిఙ్","src":"zh row","table":"worked"},
  {"en":"I work at a bank.","ipa":"/aɪ ˈwɜːrk ət ə ˈbæŋk/","te":"ఐ వర్క్ అట్ అ బ్యాంక్","src":"zh row","table":"worked"},
  {"en":"It's three thirty.","ipa":"/ɪts ˈθriː ˈθɜːrti/","te":"ఇట్స్ థ఼్రీ ˈథ఼ర్టి","src":"zh row","table":"worked"},
  {"en":"think","ipa":"/ˈθɪŋk/","te":"థ఼ింక్","src":"zh row","table":"worked"},
  {"en":"sink","ipa":"/ˈsɪŋk/","te":"సింక్","src":"zh row","table":"worked"},
  {"en":"three","ipa":"/ˈθriː/","te":"థ఼్రీ","src":"zh row","table":"worked"},
  {"en":"tree","ipa":"/ˈtriː/","te":"ట్రీ","src":"zh row","table":"worked"},
  {"en":"very","ipa":"/ˈveri/","te":"ˈవ఼ెరి","src":"zh row","table":"worked"},
  {"en":"wary","ipa":"/ˈweri/","te":"ˈవెరి","src":"zh row","table":"worked"},
  {"en":"vest","ipa":"/ˈvest/","te":"వ఼ెస్ట్","src":"zh row","table":"worked"},
  {"en":"west","ipa":"/ˈwest/","te":"వెస్ట్","src":"zh row","table":"worked"},
  {"en":"bad","ipa":"/ˈbæd/","te":"బ్యాడ్","src":"zh row","table":"worked"},
  {"en":"bed","ipa":"/ˈbed/","te":"బెడ్","src":"zh row","table":"worked"},
  {"en":"coffee","ipa":"/ˈkɔːfi/","te":"ˈకాఫి","src":"zh row","table":"worked"},
  {"en":"copy","ipa":"/ˈkɑːpi/","te":"ˈకాపి","src":"zh row","table":"worked"},
  {"en":"walk","ipa":"/ˈwɔːk/","te":"వాక్","src":"zh row","table":"worked"},
  {"en":"work","ipa":"/ˈwɜːrk/","te":"వర్క్","src":"zh row","table":"worked"},
  {"en":"leave","ipa":"/ˈliːv/","te":"లీవ఼్","src":"zh row","table":"worked"},
  {"en":"live","ipa":"/ˈlɪv/","te":"లివ఼్","src":"zh row","table":"worked"},
  {"en":"mouth","ipa":"/ˈmaʊθ/","te":"మౌథ఼్","src":"zh row","table":"worked"},
  {"en":"mouse","ipa":"/ˈmaʊs/","te":"మౌస్","src":"zh row","table":"worked"},
  {"en":"banana","ipa":"/bəˈnænə/","te":"బˈన్యాన","src":"zh row","table":"worked"},
  {"en":"friends","ipa":"/ˈfrendz/","te":"ఫ్రెండ్జ఼్","src":"zh row","table":"worked"},
  {"en":"asked","ipa":"/ˈæskt/","te":"యాస్క్ట్","src":"zh row","table":"worked"},
  {"en":"months","ipa":"/ˈmʌnθs/","te":"మన్థ఼్స్","src":"zh row","table":"worked"},
  {"en":"fifteen / fifty","ipa":"/ˌfɪfˈtiːn/ /ˈfɪfti/","te":"ఫిఫ్ˈటీన్ / ˈఫిఫ్టి","src":"zh row","table":"worked"},
  {"en":"bus","ipa":"/ˈbʌs/","te":"బస్","src":"new","table":"worked"},
  {"en":"school","ipa":"/ˈskuːl/","te":"స్కూల్","src":"new","table":"worked"},
  {"en":"zoo","ipa":"/ˈzuː/","te":"జ఼ూ","src":"new","table":"worked"},
  {"en":"Jew","ipa":"/ˈdʒuː/","te":"జూ","src":"new","table":"worked"},
  {"en":"vine","ipa":"/ˈvaɪn/","te":"వ఼ైన్","src":"new","table":"worked"},
  {"en":"wine","ipa":"/ˈwaɪn/","te":"వైన్","src":"new","table":"worked"},
  {"en":"ship","ipa":"/ˈʃɪp/","te":"షిప్","src":"new","table":"worked"},
  {"en":"sheep","ipa":"/ˈʃiːp/","te":"షీప్","src":"new","table":"worked"},
  {"en":"caught","ipa":"/ˈkɔːt/","te":"కాట్","src":"new","table":"worked"},
  {"en":"coat","ipa":"/ˈkoʊt/","te":"కోట్","src":"new","table":"worked"},
  {"en":"measure","ipa":"/ˈmeʒər/","te":"ˈమెఝ఼ర్","src":"new","table":"worked"},
  {"en":"photography","ipa":"/fəˈtɑːgrəfi/","te":"ఫˈటాగ్రఫి","src":"new","table":"worked"},
  {"en":"boy","ipa":"/ˈbɔɪ/","te":"బాయ్","src":"new","table":"worked"},
  {"en":"point","ipa":"/ˈpɔɪnt/","te":"పాయింట్","src":"new","table":"worked"},
  {"en":"My name is Ravi.","ipa":"/maɪ ˈneɪm ɪz ˈrɑːvi/","te":"మై నేమ్ ఇజ఼్ ˈరావ఼ి","src":"new","table":"worked"},
  {"en":"Five hundred rupees.","ipa":"/ˈfaɪv ˈhʌndrəd ruːˈpiːz/","te":"ఫైవ఼్ ˈహండ్రడ్ రూˈపీజ఼్","src":"new","table":"worked"},
  {"en":"It's a nice day, isn't it?","ipa":"/ɪts ə ˈnaɪs ˈdeɪ ˈɪznt ɪt/","te":"ఇట్స్ అ నైస్ డే ˈఇజ఼ంట్ ఇట్","src":"new","table":"worked"},
  {"en":"I've lived here since 2015.","ipa":"/aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd ˌfɪfˈtiːn/","te":"ఐవ఼్ లివ఼్డ్ హిర్ సిన్స్ టూ ˈథ఼ౌజ఼ండ్ ఫిఫ్ˈటీన్","src":"new","table":"worked"},
  {"en":"see","ipa":"/ˈsiː/","te":"సీ","src":"zh word","table":"key"},
  {"en":"yes","ipa":"/ˈjes/","te":"యెస్","src":"zh word","table":"key"},
  {"en":"name","ipa":"/ˈneɪm/","te":"నేమ్","src":"zh word","table":"key"},
  {"en":"today","ipa":"/təˈdeɪ/","te":"టˈడే","src":"zh word","table":"key"},
  {"en":"bank","ipa":"/ˈbæŋk/","te":"బ్యాంక్","src":"zh word","table":"key"},
  {"en":"cup","ipa":"/ˈkʌp/","te":"కప్","src":"zh word","table":"key"},
  {"en":"about","ipa":"/əˈbaʊt/","te":"అˈబౌట్","src":"zh word","table":"key"},
  {"en":"sofa","ipa":"/ˈsoʊfə/","te":"ˈసోఫ","src":"own","table":"key"},
  {"en":"hot","ipa":"/ˈhɑːt/","te":"హాట్","src":"zh word","table":"key"},
  {"en":"father","ipa":"/ˈfɑːðər/","te":"ˈఫాద఼ర్","src":"own","table":"key"},
  {"en":"talk","ipa":"/ˈtɔːk/","te":"టాక్","src":"own","table":"key"},
  {"en":"dog","ipa":"/ˈdɔːg/","te":"డాగ్","src":"zh word","table":"key"},
  {"en":"door","ipa":"/ˈdɔːr/","te":"డోర్","src":"zh word","table":"key"},
  {"en":"four","ipa":"/ˈfɔːr/","te":"ఫోర్","src":"zh word","table":"key"},
  {"en":"morning","ipa":"/ˈmɔːrnɪŋ/","te":"ˈమోర్నిఙ్","src":"zh word","table":"key"},
  {"en":"go","ipa":"/ˈgoʊ/","te":"గో","src":"zh word","table":"key"},
  {"en":"hotel","ipa":"/hoʊˈtel/","te":"హోˈటెల్","src":"zh word","table":"key"},
  {"en":"food","ipa":"/ˈfuːd/","te":"ఫూడ్","src":"own","table":"key"},
  {"en":"two","ipa":"/ˈtuː/","te":"టూ","src":"zh word","table":"key"},
  {"en":"book","ipa":"/ˈbʊk/","te":"బుక్","src":"zh word","table":"key"},
  {"en":"good","ipa":"/ˈgʊd/","te":"గుడ్","src":"zh word","table":"key"},
  {"en":"I","ipa":"/ˈaɪ/","te":"ఐ","src":"zh word","table":"key"},
  {"en":"time","ipa":"/ˈtaɪm/","te":"టైమ్","src":"zh word","table":"key"},
  {"en":"house","ipa":"/ˈhaʊs/","te":"హౌస్","src":"own","table":"key"},
  {"en":"now","ipa":"/ˈnaʊ/","te":"నౌ","src":"zh word","table":"key"},
  {"en":"noise","ipa":"/ˈnɔɪz/","te":"నాయిజ఼్","src":"own","table":"key"},
  {"en":"enjoying","ipa":"/ɪnˈdʒɔɪɪŋ/","te":"ఇంˈజాయిఙ్","src":"own","table":"key"},
  {"en":"here","ipa":"/ˈhɪr/","te":"హిర్","src":"zh word","table":"key"},
  {"en":"there","ipa":"/ˈðer/","te":"ద఼ెర్","src":"zh word","table":"key"},
  {"en":"sure","ipa":"/ˈʃʊr/","te":"షుర్","src":"zh word","table":"key"},
  {"en":"car","ipa":"/ˈkɑːr/","te":"కార్","src":"zh word","table":"key"},
  {"en":"card","ipa":"/ˈkɑːrd/","te":"కార్డ్","src":"zh word","table":"key"},
  {"en":"water","ipa":"/ˈwɔːtər/","te":"ˈవాటర్","src":"zh word","table":"key"},
  {"en":"later","ipa":"/ˈleɪtər/","te":"ˈలేటర్","src":"zh word","table":"key"},
  {"en":"pen","ipa":"/ˈpen/","te":"పెన్","src":"zh word","table":"key"},
  {"en":"bag","ipa":"/ˈbæg/","te":"బ్యాగ్","src":"zh word","table":"key"},
  {"en":"day","ipa":"/ˈdeɪ/","te":"డే","src":"zh word","table":"key"},
  {"en":"check","ipa":"/ˈtʃek/","te":"చెక్","src":"zh word","table":"key"},
  {"en":"job","ipa":"/ˈdʒɑːb/","te":"జాబ్","src":"zh word","table":"key"},
  {"en":"fan","ipa":"/ˈfæn/","te":"ఫ్యాన్","src":"zh word","table":"key"},
  {"en":"have","ipa":"/ˈhæv/","te":"హ్యావ఼్","src":"zh word","table":"key"},
  {"en":"twenty","ipa":"/ˈtwenti/","te":"ˈట్వెంటి","src":"zh word","table":"key"},
  {"en":"this","ipa":"/ˈðɪs/","te":"ద఼ిస్","src":"zh word","table":"key"},
  {"en":"the","ipa":"/ðə/","te":"ద఼","src":"zh word","table":"key"},
  {"en":"brother","ipa":"/ˈbrʌðər/","te":"ˈబ్రద఼ర్","src":"zh word","table":"key"},
  {"en":"is","ipa":"/ɪz/","te":"ఇజ఼్","src":"zh word","table":"key"},
  {"en":"she","ipa":"/ʃi/","te":"షి","src":"zh word","table":"key"},
  {"en":"shop","ipa":"/ˈʃɑːp/","te":"షాప్","src":"own","table":"key"},
  {"en":"since","ipa":"/sɪns/","te":"సిన్స్","src":"zh word","table":"key"},
  {"en":"English","ipa":"/ˈɪŋglɪʃ/","te":"ˈఇంగ్లిష్","src":"zh word","table":"key"},
  {"en":"long","ipa":"/ˈlɔːŋ/","te":"లాఙ్","src":"zh word","table":"key"},
  {"en":"singing","ipa":"/ˈsɪŋɪŋ/","te":"ˈసిఙిఙ్","src":"own","table":"key"},
  {"en":"rice","ipa":"/ˈraɪs/","te":"రైస్","src":"zh word","table":"key"},
  {"en":"light","ipa":"/ˈlaɪt/","te":"లైట్","src":"zh word","table":"key"},
  {"en":"cute","ipa":"/ˈkjuːt/","te":"క్యూట్","src":"zh word","table":"key"},
  {"en":"lived","ipa":"/ˈlɪvd/","te":"లివ఼్డ్","src":"zh word","table":"key"},
  {"en":"Excuse","ipa":"/ɪkˈskjuːz/","te":"ఇక్ˈస్క్యూజ఼్","src":"zh word","table":"key"},
  {"en":"idea","ipa":"/aɪˈdiːə/","te":"ఐˈడీఅ","src":"own","table":"key"},
  {"en":"people","ipa":"/ˈpiːpl/","te":"ˈపీపల్","src":"zh word","table":"key"},
  {"en":"table","ipa":"/ˈteɪbl/","te":"ˈటేబల్","src":"zh word","table":"key"},
  {"en":"seven","ipa":"/ˈsevn/","te":"ˈసెవ఼న్","src":"zh word","table":"key"},
  {"en":"station","ipa":"/ˈsteɪʃn/","te":"ˈస్టేషన్","src":"zh word","table":"key"},
  {"en":"isn't","ipa":"/ˈɪznt/","te":"ˈఇజ఼ంట్","src":"zh word","table":"key"},
  {"en":"didn't","ipa":"/ˈdɪdnt/","te":"ˈడిడంట్","src":"zh word","table":"key"},
  {"en":"student","ipa":"/ˈstuːdnt/","te":"ˈస్టూడంట్","src":"zh word","table":"key"},
  {"en":"important","ipa":"/ɪmˈpɔːrtnt/","te":"ఇంˈపోర్టంట్","src":"zh word","table":"key"},
  {"en":"friend","ipa":"/ˈfrend/","te":"ఫ్రెండ్","src":"zh word","table":"key"},
  {"en":"don't","ipa":"/ˈdoʊnt/","te":"డోంట్","src":"zh word","table":"key"},
  {"en":"lunch","ipa":"/ˈlʌntʃ/","te":"లంచ్","src":"zh word","table":"key"},
  {"en":"number","ipa":"/ˈnʌmbər/","te":"ˈనంబర్","src":"own","table":"key"},
  {"en":"enjoy","ipa":"/ɪnˈdʒɔɪ/","te":"ఇంˈజాయ్","src":"zh word","table":"key"},
  {"en":"sometimes","ipa":"/ˈsʌmtaɪmz/","te":"ˈసమ్టైమ్జ఼్","src":"own","table":"key"},
  {"en":"I'm","ipa":"/aɪm/","te":"ఐమ్","src":"zh word","table":"key"},
  {"en":"it's","ipa":"/ɪts/","te":"ఇట్స్","src":"zh word","table":"key"},
  {"en":"I've","ipa":"/aɪv/","te":"ఐవ఼్","src":"zh word","table":"key"},
  {"en":"I'll","ipa":"/aɪl/","te":"ఐల్","src":"zh word","table":"key"},
  {"en":"can't","ipa":"/ˈkænt/","te":"క్యాంట్","src":"zh word","table":"key"},
  {"en":"that's","ipa":"/ˈðæts/","te":"ద఼్యాట్స్","src":"zh word","table":"key"},
  {"en":"there's","ipa":"/ðerz/","te":"ద఼ెర్జ఼్","src":"zh word","table":"key"},
  {"en":"what's","ipa":"/ˈwʌts/","te":"వట్స్","src":"zh word","table":"key"},
  {"en":"A","ipa":"/ˈeɪ/","te":"ఏ","src":"zh word","table":"key"},
  {"en":"B","ipa":"/ˈbiː/","te":"బీ","src":"zh word","table":"key"},
  {"en":"C","ipa":"/ˈsiː/","te":"సీ","src":"zh word","table":"key"},
  {"en":"D","ipa":"/ˈdiː/","te":"డీ","src":"zh word","table":"key"},
  {"en":"E","ipa":"/ˈiː/","te":"ఈ","src":"zh word","table":"key"},
  {"en":"F","ipa":"/ˈef/","te":"ఎఫ్","src":"zh word","table":"key"},
  {"en":"G","ipa":"/ˈdʒiː/","te":"జీ","src":"zh word","table":"key"},
  {"en":"H","ipa":"/ˈeɪtʃ/","te":"ఏచ్","src":"zh word","table":"key"},
  {"en":"J","ipa":"/ˈdʒeɪ/","te":"జే","src":"zh word","table":"key"},
  {"en":"K","ipa":"/ˈkeɪ/","te":"కే","src":"zh word","table":"key"},
  {"en":"L","ipa":"/ˈel/","te":"ఎల్","src":"zh word","table":"key"},
  {"en":"M","ipa":"/ˈem/","te":"ఎమ్","src":"zh word","table":"key"},
  {"en":"N","ipa":"/ˈen/","te":"ఎన్","src":"zh word","table":"key"},
  {"en":"O","ipa":"/ˈoʊ/","te":"ఓ","src":"zh word","table":"key"},
  {"en":"P","ipa":"/ˈpiː/","te":"పీ","src":"zh word","table":"key"},
  {"en":"Q","ipa":"/ˈkjuː/","te":"క్యూ","src":"zh word","table":"key"},
  {"en":"R","ipa":"/ˈɑːr/","te":"ఆర్","src":"zh word","table":"key"},
  {"en":"S","ipa":"/ˈes/","te":"ఎస్","src":"zh word","table":"key"},
  {"en":"T","ipa":"/ˈtiː/","te":"టీ","src":"zh word","table":"key"},
  {"en":"U","ipa":"/ˈjuː/","te":"యూ","src":"zh word","table":"key"},
  {"en":"V","ipa":"/ˈviː/","te":"వ఼ీ","src":"zh word","table":"key"},
  {"en":"W","ipa":"/ˈdʌbəljuː/","te":"ˈడబల్యూ","src":"zh word","table":"key"},
  {"en":"X","ipa":"/ˈeks/","te":"ఎక్స్","src":"zh word","table":"key"},
  {"en":"Y","ipa":"/ˈwaɪ/","te":"వై","src":"zh word","table":"key"},
  {"en":"Z","ipa":"/ˈziː/","te":"జ఼ీ","src":"zh word","table":"key"},
  {"en":"TV","ipa":"/ˌtiː ˈviː/","te":"టీ వ఼ీ","src":"zh word","table":"key"},
  {"en":"cats","ipa":"/ˈkæts/","te":"క్యాట్స్","src":"zh word","table":"key"},
  {"en":"dogs","ipa":"/ˈdɔːgz/","te":"డాగ్జ఼్","src":"zh word","table":"key"},
  {"en":"buses","ipa":"/ˈbʌsɪz/","te":"ˈబసిజ఼్","src":"own","table":"key"},
  {"en":"watched","ipa":"/ˈwɑːtʃt/","te":"వాచ్ట్","src":"zh word","table":"key"},
  {"en":"played","ipa":"/ˈpleɪd/","te":"ప్లేడ్","src":"own","table":"key"},
  {"en":"wanted","ipa":"/ˈwɑːntɪd/","te":"ˈవాంటిడ్","src":"own","table":"key"},
  {"en":"to","ipa":"/tə/","te":"ట","src":"zh word","table":"key"},
  {"en":"a (weak)","ipa":"/ə/","te":"అ","src":"zh word","table":"key"},
  {"en":"an (weak)","ipa":"/ən/","te":"అన్","src":"zh word","table":"key"},
  {"en":"the (weak)","ipa":"/ðə/","te":"ద఼","src":"zh word","table":"key"},
  {"en":"the (before a vowel)","ipa":"/ði/","te":"ద఼ి","src":"zh word","table":"key"},
  {"en":"to (weak)","ipa":"/tə/","te":"ట","src":"zh word","table":"key"},
  {"en":"to (before a vowel)","ipa":"/tu/","te":"టు","src":"zh word","table":"key"},
  {"en":"to (strong)","ipa":"/tuː/","te":"టూ","src":"zh word","table":"key"},
  {"en":"for (weak)","ipa":"/fər/","te":"ఫర్","src":"zh word","table":"key"},
  {"en":"from (weak)","ipa":"/frəm/","te":"ఫ్రమ్","src":"zh word","table":"key"},
  {"en":"at (weak)","ipa":"/ət/","te":"అట్","src":"zh word","table":"key"},
  {"en":"of (weak)","ipa":"/əv/","te":"అవ఼్","src":"zh word","table":"key"},
  {"en":"for (strong)","ipa":"/fɔːr/","te":"ఫోర్","src":"zh word","table":"key"},
  {"en":"from (strong)","ipa":"/frʌm/","te":"ఫ్రమ్","src":"zh word","table":"key"},
  {"en":"at (strong)","ipa":"/æt/","te":"యాట్","src":"zh word","table":"key"},
  {"en":"and (weak)","ipa":"/ənd/","te":"అండ్","src":"zh word","table":"key"},
  {"en":"or (weak)","ipa":"/ər/","te":"అర్","src":"zh word","table":"key"},
  {"en":"but (weak)","ipa":"/bət/","te":"బట్","src":"zh word","table":"key"},
  {"en":"can (weak)","ipa":"/kən/","te":"కన్","src":"zh word","table":"key"},
  {"en":"could (weak)","ipa":"/kəd/","te":"కడ్","src":"zh word","table":"key"},
  {"en":"should (weak)","ipa":"/ʃəd/","te":"షడ్","src":"zh word","table":"key"},
  {"en":"would (weak)","ipa":"/wəd/","te":"వడ్","src":"zh word","table":"key"},
  {"en":"do (aux)","ipa":"/də/","te":"డ","src":"zh word","table":"key"},
  {"en":"does (aux)","ipa":"/dəz/","te":"డజ఼్","src":"zh word","table":"key"},
  {"en":"did (aux)","ipa":"/dɪd/","te":"డిడ్","src":"zh word","table":"key"},
  {"en":"have (aux)","ipa":"/həv/","te":"హవ఼్","src":"zh word","table":"key"},
  {"en":"has (aux)","ipa":"/həz/","te":"హజ఼్","src":"zh word","table":"key"},
  {"en":"had (aux)","ipa":"/həd/","te":"హడ్","src":"zh word","table":"key"},
  {"en":"do (main)","ipa":"/ˈduː/","te":"డూ","src":"zh word","table":"key"},
  {"en":"have (main)","ipa":"/ˈhæv/","te":"హ్యావ఼్","src":"zh word","table":"key"},
  {"en":"have to","ipa":"/ˈhæf tə/","te":"హ్యాఫ్ ట","src":"zh word","table":"key"},
  {"en":"has to","ipa":"/ˈhæs tə/","te":"హ్యాస్ ట","src":"zh word","table":"key"},
  {"en":"you (weak)","ipa":"/ju/","te":"యు","src":"zh word","table":"key"},
  {"en":"your","ipa":"/jʊr/","te":"యుర్","src":"zh word","table":"key"},
  {"en":"you're","ipa":"/jʊr/","te":"యుర్","src":"zh word","table":"key"},
  {"en":"you (strong)","ipa":"/ˈjuː/","te":"యూ","src":"zh word","table":"key"},
  {"en":"me (weak)","ipa":"/mi/","te":"మి","src":"zh word","table":"key"},
  {"en":"he (weak)","ipa":"/hi/","te":"హి","src":"zh word","table":"key"},
  {"en":"she (weak)","ipa":"/ʃi/","te":"షి","src":"zh word","table":"key"},
  {"en":"we (weak)","ipa":"/wi/","te":"వి","src":"zh word","table":"key"},
  {"en":"me (strong)","ipa":"/ˈmiː/","te":"మీ","src":"zh word","table":"key"},
  {"en":"he (strong)","ipa":"/ˈhiː/","te":"హీ","src":"own","table":"key"},
  {"en":"she (strong)","ipa":"/ˈʃiː/","te":"షీ","src":"own","table":"key"},
  {"en":"we (strong)","ipa":"/ˈwiː/","te":"వీ","src":"own","table":"key"},
  {"en":"that (relative)","ipa":"/ðət/","te":"ద఼ట్","src":"zh word","table":"key"},
  {"en":"that (demonstrative)","ipa":"/ˈðæt/","te":"ద఼్యాట్","src":"zh word","table":"key"},
  {"en":"there (existential)","ipa":"/ðer/","te":"ద఼ెర్","src":"zh word","table":"key"},
  {"en":"there (adverb)","ipa":"/ˈðer/","te":"ద఼ెర్","src":"zh word","table":"key"},
  {"en":"fifteen","ipa":"/ˌfɪfˈtiːn/","te":"ఫిఫ్ˈటీన్","src":"zh word","table":"key"},
  {"en":"full","ipa":"/ˈfʊl/","te":"ఫుల్","src":"own","table":"key"},
  {"en":"fool","ipa":"/ˈfuːl/","te":"ఫూల్","src":"own","table":"key"},
  {"en":"cot","ipa":"/ˈkɑːt/","te":"కాట్","src":"own","table":"key"},
  {"en":"finger","ipa":"/ˈfɪŋgər/","te":"ˈఫింగర్","src":"own","table":"key"},
  {"en":"singer","ipa":"/ˈsɪŋər/","te":"ˈసిఙర్","src":"own","table":"key"},
  {"en":"Ravi","ipa":"/ˈrɑːvi/","te":"ˈరావ఼ి","src":"own","table":"key"}
];

/* respellings §6 lists as rejected by pronPattern (the profile's bytes; ZWNJ written as an escape) */
const PATTERN_REJECTS = ["/ˈjes/", "yes", "బస్?", "ఇట్స్  కోల్డ్", "కోల్డ్ ˈ", "ఇట్స్,కోల్డ్", "౨౦౧౦", "2010", "్క", "పాస్\u200cవర్డ్", "క఼", "ఒన్", "థాంక్స్ః"];

/* inputs the converter must refuse */
const REFUSE = [
  ['/ˈɡoʊ/', 'script ɡ (U+0261) instead of ASCII g'], ['/ˈhɒt/', 'British ɒ'], ['/ˈwɔtər/', 'ɔ without ː'], ['/ˈbɜrd/', 'ɜ without ː'],
  ['/ˈhɑt/', 'ɑ without ː'], ['/ˈgəʊ/', 'British əʊ'], ['/ˈheə/', 'British eə'], ['/ˈbʌɾər/', 'flap symbol'], ['/ˈbɜːɹd/', 'ɹ'],
  ['hello', 'no slashes'], ['/həˈloʊ/ hello', 'text outside the slashes'], ['/Hello/', 'Latin capitals'], ['/ˈtuː 2/', 'digit'],
  ['/ˈjes?/', 'punctuation'], ['/ˈ/', 'stress mark alone'], ['/ˈkætˈ/', 'dangling stress mark'], ['/ˈˈkæt/', 'two stress marks'],
  ['/ˈhaʊ ‖ /', 'empty sentence'], ['//', 'empty group'], ['/ˈkaːr/', 'a outside aɪ / aʊ'], ['/ˈtiːː/', 'stray length mark']
];

function selftest() {
  let bad = 0; const n = { worked: 0, key: 0 };
  for (const e of EXAMPLES) {
    let got; try { got = ipaToTe(e.ipa); } catch (x) { got = 'ERROR ' + x.message; }
    if (got !== e.te) { bad++; console.log('FAIL  ' + e.en + '  ' + e.ipa + '\n      want ' + e.te + '\n      got  ' + got); } else n[e.table]++;
  }
  let rbad = 0;
  for (const [ipa, why] of REFUSE) { let ok = false; try { ipaToTe(ipa); } catch (x) { ok = true; } if (!ok) { rbad++; console.log('FAIL  not refused: ' + ipa + ' (' + why + ')'); } }
  let pbad = 0;
  for (const p of PATTERN_REJECTS) if (PRON_RE.test(p)) { pbad++; console.log('FAIL  pronPattern accepts «' + p + '»'); }
  const tot = t => EXAMPLES.filter(e => e.table === t).length;
  console.log((bad || rbad || pbad ? 'FAILED: ' + (bad + rbad + pbad) + ' mismatches; ' : 'ok: ') + (EXAMPLES.length - bad) + '/' + EXAMPLES.length + ' §6 example pairs match §6 as printed (worked examples ' +
    n.worked + '/' + tot('worked') + ', key and rules ' + n.key + '/' + tot('key') + '); ' + (REFUSE.length - rbad) + '/' + REFUSE.length + ' bad inputs refused; ' +
    (PATTERN_REJECTS.length - pbad) + '/' + PATTERN_REJECTS.length + ' §6 bad respellings rejected by pronPattern');
  return bad === 0 && rbad === 0 && pbad === 0;
}

module.exports = { ipaToTe, convert, zhPairs };

if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--selftest') process.exit(selftest() ? 0 : 1);
  if (a[0] === '--lookup') process.exit(buildLookup(true) ? 0 : 1);
  if (!a.length) { console.error('usage: node tools/content/te/pron_te.js "<ipa>" | --selftest | --lookup'); process.exit(2); }
  try { console.log(ipaToTe(a.join(' '))); } catch (x) { console.error(x.message); process.exit(1); }
}
