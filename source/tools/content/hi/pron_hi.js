/* hi-en pronunciation aid: zh-format IPA -> Devanagari respelling (docs/profiles/hi.md §6).
   usage: node tools/content/hi/pron_hi.js "<ipa>"     print the respelling
          node tools/content/hi/pron_hi.js --selftest  check every §6 example pair; exit 1 on a mismatch
   Input: zh conventions (tools/content/zh/PRON-RULES.md): one or more /…/ groups, words split by spaces, ˈ ˌ, ‖ between sentences.
   Every output is tested against profile.json pronPattern; an unknown symbol or a failing output throws. */
'use strict';
const fs = require('fs'), path = require('path');
const PROFILE = JSON.parse(fs.readFileSync(path.join(__dirname, 'profile.json'), 'utf8'));
const PRON_RE = new RegExp(PROFILE.pronPattern, 'u');

const NUK = '़', VIR = '्', ANUS = 'ं';
/* consonants: IPA -> letter (nukta letters as base + U+093C, never precomposed) */
const CONS = {
  p: 'प', b: 'ब', t: 'ट', d: 'ड', k: 'क', g: 'ग',
  f: 'फ' + NUK, v: 'व' + NUK, w: 'व', 'θ': 'थ' + NUK, 'ð': 'द' + NUK,
  s: 'स', z: 'ज' + NUK, 'ʃ': 'श', 'ʒ': 'झ' + NUK, 'tʃ': 'च', 'dʒ': 'ज',
  h: 'ह', m: 'म', n: 'न', 'ŋ': 'ङ', l: 'ल', r: 'र', j: 'य'
};
/* vowels: IPA -> [independent, sign]; '' sign = inherent अ */
const VOW = {
  'iː': ['ई', 'ी'], 'ɪ': ['इ', 'ि'], i: ['इ', 'ि'],
  e: ['ए', 'े'], 'eɪ': ['ए', 'े'], 'æ': ['ऐ', 'ै'],
  'ʌ': ['अ', ''], 'ə': ['अ', ''], 'ɜː': ['अ', ''],
  'ɑː': ['आ', 'ा'], 'ɑ': ['आ', 'ा'], 'ɔː': ['ऑ', 'ॉ'], 'ɔ': ['ऑ', 'ॉ'],
  'oʊ': ['ओ', 'ो'], 'uː': ['ऊ', 'ू'], u: ['उ', 'ु'], 'ʊ': ['उ', 'ु'],
  'aɪ': ['आइ', 'ाइ'], 'aʊ': ['आउ', 'ाउ'], 'ɔɪ': ['ऑइ', 'ॉइ']
};
const FINAL_SCHWA = ['आ', 'ा'];
const SYMS = [...Object.keys(VOW), ...Object.keys(CONS), 'ˈ', 'ˌ'].sort((a, b) => b.length - a.length);

function tokenize(word) {
  const out = [];
  for (let i = 0; i < word.length;) {
    const s = SYMS.find(x => word.startsWith(x, i));
    if (!s) throw new Error('ipaToHi: unknown symbol «' + word[i] + '» (U+' + word.codePointAt(i).toString(16).toUpperCase() + ') in /' + word + '/');
    out.push(s in VOW ? { t: 'V', k: s } : s in CONS ? { t: 'C', k: s } : { t: 'S', primary: s === 'ˈ' });
    i += s.length;
  }
  return out;
}

function convWord(word) {
  const seg = tokenize(word);
  const ph = seg.filter(x => x.t !== 'S');
  if (!ph.length) throw new Error('ipaToHi: empty word /' + word + '/');
  /* syllabic l / n (zh PRON-RULES A4, hi rule 6): after a consonant other than r, with only consonants up to the word end */
  ph.forEach((x, i) => {
    if (x.t === 'C' && (x.k === 'l' || x.k === 'n') && i > 0 && ph[i - 1].t === 'C' && ph[i - 1].k !== 'r' && !ph[i - 1].syl &&
        ph.slice(i + 1).every(y => y.t === 'C')) x.syl = true;
  });
  const syll = ph.filter(x => x.t === 'V' || x.syl).length;
  /* rule 2: ˈ only in words of 2+ syllables, every ˌ dropped */
  const s = seg.filter(x => x.t !== 'S' || (x.primary && syll >= 2));
  let lastV = -1; s.forEach((x, i) => { if (x.t === 'V') lastV = i; });
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const x = s[i];
    if (x.t === 'S') { out += 'ˈ'; continue; }
    const prev = s[i - 1], next = s[i + 1];
    if (x.t === 'V') {
      /* rule 5: final ə -> ा in a word of 2+ syllables; one-syllable weak forms (ə ðə tə də) keep the inherent vowel */
      const pair = x.k === 'ə' && i === s.length - 1 && syll >= 2 ? FINAL_SCHWA : VOW[x.k];
      /* rule 3: sign after a consonant; independent letter at word start, after a vowel, or after ˈ */
      out += prev && prev.t === 'C' ? pair[1] : pair[0];
      continue;
    }
    /* consonant */
    if (x.k === 'ŋ') {
      const n2 = s.slice(i + 1).find(y => y.t !== 'S');
      if (n2 && n2.t === 'C' && (n2.k === 'k' || n2.k === 'g')) { out += ANUS; continue; } /* ं before क / ग */
    }
    out += CONS[x.k];
    /* rule 4: virama on a consonant with no vowel after it inside the word (kept visible across ˈ); none on the last consonant;
       none before a syllabic l / n (rule 6: that consonant carries the inherent vowel) */
    if (!next) continue;
    if (next.t === 'V') continue;
    const n2 = s.slice(i + 1).find(y => y.t !== 'S');
    if (n2.t === 'C' && n2.syl) continue;
    out += VIR; /* next is a consonant, or ˈ followed by a consonant or a vowel (vowel then written independent) */
  }
  return out;
}

function ipaToHi(ipa) {
  if (typeof ipa !== 'string') throw new Error('ipaToHi: string expected');
  const src = ipa.normalize('NFC').trim();
  const groups = [];
  const rest = src.replace(/\/([^/]*)\//g, (m, g) => { groups.push(g); return ''; });
  if (!groups.length || rest.trim()) throw new Error('ipaToHi: expected /…/ groups, got «' + ipa + '»');
  const res = groups.map(g => {
    const sents = g.split('‖').map(t => t.trim());
    if (sents.some(t => !t)) throw new Error('ipaToHi: empty sentence in «' + ipa + '»');
    return sents.map(t => t.split(/\s+/).map(convWord).join(' ')).join('। ');
  }).join(' / ').normalize('NFC');
  if (!PRON_RE.test(res)) throw new Error('ipaToHi: output fails pronPattern: «' + res + '» from «' + ipa + '»');
  if (/[\u0958-\u095F\u200C\u200D]/.test(res)) throw new Error('ipaToHi: precomposed nukta or ZWJ/ZWNJ in «' + res + '»');
  return res;
}

/* §6 example pairs. hi = the profile's bytes (extracted from docs/profiles/hi.md, not retyped).
   src: "zh" = IPA from packs/course-zh-en.js, "hi.md" = IPA printed in §6, "own" = IPA written here in zh conventions (§6 gives none).
   erratum: §6 is self-contradictory; "want" is the rule-consistent value the converter gives (see PRON-TOOL.md). */
const EXAMPLES = [
  {"en":"It's cold today.","ipa":"/ɪts ˈkoʊld təˈdeɪ/","hi":"इट्स कोल्ड टˈडे","src":"zh"},
  {"en":"There's a cafe near here.","ipa":"/ðerz ə kæˈfeɪ nɪr ˈhɪr/","hi":"द़ेर्ज़ अ कैˈफ़े निर हिर","src":"zh"},
  {"en":"Can you close the door?","ipa":"/kən ju ˈkloʊz ðə ˈdɔːr/","hi":"कन यु क्लोज़ द़ डॉर","src":"zh"},
  {"en":"I have two brothers.","ipa":"/aɪ ˈhæv ˈtuː ˈbrʌðərz/","hi":"आइ हैव़ टू ˈब्रद़र्ज़","src":"zh"},
  {"en":"We watched a movie.","ipa":"/wi ˈwɑːtʃt ə ˈmuːvi/","hi":"वि वाच्ट अ ˈमूव़ि","src":"zh"},
  {"en":"I have a dog. The dog is so cute.","ipa":"/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/","hi":"आइ हैव़ अ डॉग। द़ डॉग इज़ सो क्यूट","src":"zh"},
  {"en":"Where do you live?","ipa":"/ˈwer də ju ˈlɪv/","hi":"वेर ड यु लिव़","src":"zh"},
  {"en":"Nice to meet you.","ipa":"/ˈnaɪs tə ˈmiːt ju/","hi":"नाइस ट मीट यु","src":"zh"},
  {"en":"Thank you.","ipa":"/ˈθæŋk ju/","hi":"थ़ैंक यु","src":"zh"},
  {"en":"Hello.","ipa":"/həˈloʊ/","hi":"हˈलो","src":"zh"},
  {"en":"See you later.","ipa":"/ˈsiː ju ˈleɪtər/","hi":"सी यु ˈलेटर","src":"zh"},
  {"en":"Excuse me.","ipa":"/ɪkˈskjuːz mi/","hi":"इक्ˈस्क्यूज़ मि","src":"zh"},
  {"en":"Have you eaten yet?","ipa":"/həv ju ˈiːtn ˈjet/","hi":"हव़ यु ˈईटन येट","src":"zh"},
  {"en":"How long have you been here?","ipa":"/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/","hi":"हाउ लॉङ हव़ यु बिन हिर","src":"zh"},
  {"en":"think","ipa":"/ˈθɪŋk/","hi":"थ़िंक","src":"zh"},
  {"en":"sink","ipa":"/ˈsɪŋk/","hi":"सिंक","src":"zh"},
  {"en":"three","ipa":"/ˈθriː/","hi":"थ़्री","src":"zh"},
  {"en":"tree","ipa":"/ˈtriː/","hi":"ट्री","src":"zh"},
  {"en":"very","ipa":"/ˈveri/","hi":"ˈव़ेरि","src":"zh"},
  {"en":"wary","ipa":"/ˈweri/","hi":"ˈवेरि","src":"zh"},
  {"en":"vest","ipa":"/ˈvest/","hi":"व़ेस्ट","src":"zh"},
  {"en":"west","ipa":"/ˈwest/","hi":"वेस्ट","src":"zh"},
  {"en":"bad","ipa":"/ˈbæd/","hi":"बैड","src":"zh"},
  {"en":"bed","ipa":"/ˈbed/","hi":"बेड","src":"zh"},
  {"en":"coffee","ipa":"/ˈkɔːfi/","hi":"ˈकॉफ़ि","src":"zh"},
  {"en":"copy","ipa":"/ˈkɑːpi/","hi":"ˈकापि","src":"zh"},
  {"en":"banana","ipa":"/bəˈnænə/","hi":"बˈनैना","src":"zh"},
  {"en":"vine","ipa":"/ˈvaɪn/","hi":"व़ाइन","src":"own"},
  {"en":"wine","ipa":"/ˈwaɪn/","hi":"वाइन","src":"own"},
  {"en":"zoo","ipa":"/ˈzuː/","hi":"ज़ू","src":"own"},
  {"en":"Jew","ipa":"/ˈdʒuː/","hi":"जू","src":"own"},
  {"en":"school","ipa":"/ˈskuːl/","hi":"स्कूल","src":"hi.md"},
  {"en":"photography","ipa":"/fəˈtɑːgrəfi/","hi":"फ़ˈटाग्रफ़ि","src":"hi.md"},
  {"en":"My name is Priya.","ipa":"/maɪ ˈneɪm ɪz ˈpriːjə/","hi":"माइ नेम इज़ ˈप्रीया","src":"hi.md"},
  {"en":"I've lived here since 2015.","ipa":"/aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd fɪfˈtiːn/","hi":"आइव़ लिव़्ड हिर सिन्स टू ˈथ़ाउज़न्ड फ़िफ़ˈटीन","src":"hi.md","erratum":"rule 4 keeps the virama where ˈ splits a cluster (इक्ˈस्क्यूज़, इम्ˈपॉर्टन्ट); rule 2 and this row print it without one","want":"आइव़ लिव़्ड हिर सिन्स टू ˈथ़ाउज़न्ड फ़िफ़्ˈटीन"},
  {"en":"Five hundred rupees.","ipa":"/ˈfaɪv ˈhʌndrəd ruːˈpiːz/","hi":"फ़ाइव़ ˈहन्ड्रड रूˈपीज़","src":"hi.md"},
  {"en":"see","ipa":"/ˈsiː/","hi":"सी","src":"own"},
  {"en":"leave","ipa":"/ˈliːv/","hi":"लीव़","src":"zh"},
  {"en":"live","ipa":"/ˈlɪv/","hi":"लिव़","src":"zh"},
  {"en":"ship","ipa":"/ˈʃɪp/","hi":"शिप","src":"own"},
  {"en":"sheep","ipa":"/ˈʃiːp/","hi":"शीप","src":"own"},
  {"en":"name","ipa":"/ˈneɪm/","hi":"नेम","src":"own"},
  {"en":"today","ipa":"/təˈdeɪ/","hi":"टˈडे","src":"own"},
  {"en":"apple","ipa":"/ˈæpl/","hi":"ˈऐपल","src":"own"},
  {"en":"cup","ipa":"/ˈkʌp/","hi":"कप","src":"own"},
  {"en":"about","ipa":"/əˈbaʊt/","hi":"अˈबाउट","src":"own"},
  {"en":"sofa","ipa":"/ˈsoʊfə/","hi":"ˈसोफ़ा","src":"own"},
  {"en":"hot","ipa":"/ˈhɑːt/","hi":"हाट","src":"own"},
  {"en":"father","ipa":"/ˈfɑːðər/","hi":"ˈफ़ाद़र","src":"own"},
  {"en":"talk","ipa":"/ˈtɔːk/","hi":"टॉक","src":"own"},
  {"en":"dog","ipa":"/ˈdɔːg/","hi":"डॉग","src":"own"},
  {"en":"go","ipa":"/ˈgoʊ/","hi":"गो","src":"own"},
  {"en":"hotel","ipa":"/hoʊˈtel/","hi":"होˈटेल","src":"zh"},
  {"en":"food","ipa":"/ˈfuːd/","hi":"फ़ूड","src":"own"},
  {"en":"two","ipa":"/ˈtuː/","hi":"टू","src":"own"},
  {"en":"book","ipa":"/ˈbʊk/","hi":"बुक","src":"own"},
  {"en":"good","ipa":"/ˈgʊd/","hi":"गुड","src":"own"},
  {"en":"I","ipa":"/ˈaɪ/","hi":"आइ","src":"own"},
  {"en":"time","ipa":"/ˈtaɪm/","hi":"टाइम","src":"own"},
  {"en":"house","ipa":"/ˈhaʊs/","hi":"हाउस","src":"own"},
  {"en":"now","ipa":"/ˈnaʊ/","hi":"नाउ","src":"own"},
  {"en":"boy","ipa":"/ˈbɔɪ/","hi":"बॉइ","src":"own"},
  {"en":"noise","ipa":"/ˈnɔɪz/","hi":"नॉइज़","src":"own"},
  {"en":"work","ipa":"/ˈwɜːrk/","hi":"वर्क","src":"zh"},
  {"en":"bird","ipa":"/ˈbɜːrd/","hi":"बर्ड","src":"own"},
  {"en":"water","ipa":"/ˈwɔːtər/","hi":"ˈवॉटर","src":"own"},
  {"en":"here","ipa":"/ˈhɪr/","hi":"हिर","src":"own"},
  {"en":"there","ipa":"/ˈðer/","hi":"द़ेर","src":"own"},
  {"en":"sure","ipa":"/ˈʃʊr/","hi":"शुर","src":"own"},
  {"en":"car","ipa":"/ˈkɑːr/","hi":"कार","src":"zh"},
  {"en":"door","ipa":"/ˈdɔːr/","hi":"डॉर","src":"own"},
  {"en":"four","ipa":"/ˈfɔːr/","hi":"फ़ॉर","src":"own"},
  {"en":"pen","ipa":"/ˈpen/","hi":"पेन","src":"own"},
  {"en":"bag","ipa":"/ˈbæg/","hi":"बैग","src":"zh"},
  {"en":"day","ipa":"/ˈdeɪ/","hi":"डे","src":"own"},
  {"en":"fan","ipa":"/ˈfæn/","hi":"फ़ैन","src":"zh"},
  {"en":"have","ipa":"/ˈhæv/","hi":"हैव़","src":"own"},
  {"en":"twenty","ipa":"/ˈtwenti/","hi":"ˈट्वेन्टि","src":"own"},
  {"en":"this","ipa":"/ˈðɪs/","hi":"द़िस","src":"zh"},
  {"en":"the","ipa":"/ðə/","hi":"द़","src":"own"},
  {"en":"bus","ipa":"/ˈbʌs/","hi":"बस","src":"own"},
  {"en":"is","ipa":"/ɪz/","hi":"इज़","src":"own"},
  {"en":"she","ipa":"/ˈʃiː/","hi":"शी","src":"own"},
  {"en":"measure","ipa":"/ˈmeʒər/","hi":"ˈमेझ़र","src":"own"},
  {"en":"check","ipa":"/ˈtʃek/","hi":"चेक","src":"own"},
  {"en":"job","ipa":"/ˈdʒɑːb/","hi":"जाब","src":"own"},
  {"en":"since","ipa":"/sɪns/","hi":"सिन्स","src":"own"},
  {"en":"lamp","ipa":"/ˈlæmp/","hi":"लैम्प","src":"own"},
  {"en":"English","ipa":"/ˈɪŋglɪʃ/","hi":"ˈइंग्लिश","src":"own"},
  {"en":"sing","ipa":"/ˈsɪŋ/","hi":"सिङ","src":"own"},
  {"en":"singing","ipa":"/ˈsɪŋɪŋ/","hi":"ˈसिङिङ","src":"own"},
  {"en":"rice","ipa":"/ˈraɪs/","hi":"राइस","src":"zh"},
  {"en":"light","ipa":"/ˈlaɪt/","hi":"लाइट","src":"zh"},
  {"en":"yes","ipa":"/ˈjes/","hi":"येस","src":"own"},
  {"en":"cute","ipa":"/ˈkjuːt/","hi":"क्यूट","src":"own"},
  {"en":"fifteen","ipa":"/ˌfɪfˈtiːn/","hi":"फ़िफ़ˈटीन","src":"hi.md","erratum":"rule 4 keeps the virama where ˈ splits a cluster (इक्ˈस्क्यूज़, इम्ˈपॉर्टन्ट); rule 2 and this row print it without one","want":"फ़िफ़्ˈटीन"},
  {"en":"idea","ipa":"/aɪˈdiːə/","hi":"आइˈडीआ","src":"hi.md"},
  {"en":"street","ipa":"/ˈstriːt/","hi":"स्ट्रीट","src":"own"},
  {"en":"lived","ipa":"/ˈlɪvd/","hi":"लिव़्ड","src":"own"},
  {"en":"asked","ipa":"/ˈæskt/","hi":"ऐस्क्ट","src":"zh"},
  {"en":"Excuse","ipa":"/ɪkˈskjuːz/","hi":"इक्ˈस्क्यूज़","src":"own"},
  {"en":"months","ipa":"/ˈmʌnθs/","hi":"मन्थ़्स","src":"zh"},
  {"en":"hundred","ipa":"/ˈhʌndrəd/","hi":"ˈहन्ड्रड","src":"own"},
  {"en":"Canada","ipa":"/ˈkænədə/","hi":"ˈकैनडा","src":"own"},
  {"en":"people","ipa":"/ˈpiːpl/","hi":"ˈपीपल","src":"own"},
  {"en":"seven","ipa":"/ˈsevn/","hi":"ˈसेव़न","src":"own"},
  {"en":"station","ipa":"/ˈsteɪʃn/","hi":"ˈस्टेशन","src":"own"},
  {"en":"eaten","ipa":"/ˈiːtn/","hi":"ˈईटन","src":"own"},
  {"en":"table","ipa":"/ˈteɪbl/","hi":"ˈटेबल","src":"own"},
  {"en":"isn't","ipa":"/ˈɪznt/","hi":"ˈइज़न्ट","src":"own"},
  {"en":"didn't","ipa":"/ˈdɪdnt/","hi":"ˈडिडन्ट","src":"own"},
  {"en":"thousand","ipa":"/ˈθaʊznd/","hi":"ˈथ़ाउज़न्ड","src":"own"},
  {"en":"important","ipa":"/ɪmˈpɔːrtnt/","hi":"इम्ˈपॉर्टन्ट","src":"own"},
  {"en":"family","ipa":"/ˈfæməli/","hi":"ˈफ़ैमलि","src":"own"},
  {"en":"holiday","ipa":"/ˈhɑːlədeɪ/","hi":"ˈहालडे","src":"own"},
  {"en":"cats","ipa":"/ˈkæts/","hi":"कैट्स","src":"own"},
  {"en":"dogs","ipa":"/ˈdɔːgz/","hi":"डॉग्ज़","src":"own"},
  {"en":"buses","ipa":"/ˈbʌsɪz/","hi":"ˈबसिज़","src":"own"},
  {"en":"watched","ipa":"/ˈwɑːtʃt/","hi":"वाच्ट","src":"own"},
  {"en":"played","ipa":"/ˈpleɪd/","hi":"प्लेड","src":"own"},
  {"en":"wanted","ipa":"/ˈwɑːntɪd/","hi":"ˈवान्टिड","src":"own"},
  {"en":"Priya","ipa":"/ˈpriːjə/","hi":"ˈप्रीया","src":"hi.md"},
  {"en":"spa","ipa":"/ˈspɑː/","hi":"स्पा","src":"own"},
  {"en":"get","ipa":"/ˈget/","hi":"गेट","src":"own"},
  {"en":"gate","ipa":"/ˈgeɪt/","hi":"गेट","src":"own"},
  {"en":"a (weak)","ipa":"/ə/","hi":"अ","src":"own"},
  {"en":"an (weak)","ipa":"/ən/","hi":"अन","src":"own"},
  {"en":"the (before a vowel)","ipa":"/ði/","hi":"द़ि","src":"own"},
  {"en":"to (weak)","ipa":"/tə/","hi":"ट","src":"own"},
  {"en":"to (before a vowel)","ipa":"/tu/","hi":"टु","src":"own"},
  {"en":"to (strong)","ipa":"/tuː/","hi":"टू","src":"own"},
  {"en":"for (weak)","ipa":"/fər/","hi":"फ़र","src":"own"},
  {"en":"from (weak)","ipa":"/frəm/","hi":"फ़्रम","src":"own"},
  {"en":"at (weak)","ipa":"/ət/","hi":"अट","src":"own"},
  {"en":"of (weak)","ipa":"/əv/","hi":"अव़","src":"own"},
  {"en":"for (strong)","ipa":"/fɔːr/","hi":"फ़ॉर","src":"own"},
  {"en":"from (strong)","ipa":"/frʌm/","hi":"फ़्रम","src":"own"},
  {"en":"at (strong)","ipa":"/æt/","hi":"ऐट","src":"own"},
  {"en":"and (weak)","ipa":"/ənd/","hi":"अन्ड","src":"own"},
  {"en":"or (weak)","ipa":"/ər/","hi":"अर","src":"own"},
  {"en":"but (weak)","ipa":"/bət/","hi":"बट","src":"own"},
  {"en":"can (weak)","ipa":"/kən/","hi":"कन","src":"own"},
  {"en":"could (weak)","ipa":"/kəd/","hi":"कड","src":"own"},
  {"en":"should (weak)","ipa":"/ʃəd/","hi":"शड","src":"own"},
  {"en":"would (weak)","ipa":"/wəd/","hi":"वड","src":"own"},
  {"en":"do (aux)","ipa":"/də/","hi":"ड","src":"own"},
  {"en":"does (aux)","ipa":"/dəz/","hi":"डज़","src":"own"},
  {"en":"did (aux)","ipa":"/dɪd/","hi":"डिड","src":"own"},
  {"en":"have (aux)","ipa":"/həv/","hi":"हव़","src":"own"},
  {"en":"has (aux)","ipa":"/həz/","hi":"हज़","src":"own"},
  {"en":"had (aux)","ipa":"/həd/","hi":"हड","src":"own"},
  {"en":"do (main)","ipa":"/ˈduː/","hi":"डू","src":"own"},
  {"en":"have to","ipa":"/ˈhæf tə/","hi":"हैफ़ ट","src":"hi.md"},
  {"en":"has to","ipa":"/ˈhæs tə/","hi":"हैस ट","src":"hi.md"},
  {"en":"you (weak)","ipa":"/ju/","hi":"यु","src":"own"},
  {"en":"your","ipa":"/jʊr/","hi":"युर","src":"own"},
  {"en":"you (strong)","ipa":"/ˈjuː/","hi":"यू","src":"own"},
  {"en":"me (weak)","ipa":"/mi/","hi":"मि","src":"own"},
  {"en":"he (weak)","ipa":"/hi/","hi":"हि","src":"own"},
  {"en":"she (weak)","ipa":"/ʃi/","hi":"शि","src":"own"},
  {"en":"we (weak)","ipa":"/wi/","hi":"वि","src":"own"},
  {"en":"me (strong)","ipa":"/ˈmiː/","hi":"मी","src":"own"},
  {"en":"he (strong)","ipa":"/ˈhiː/","hi":"ही","src":"own"},
  {"en":"we (strong)","ipa":"/ˈwiː/","hi":"वी","src":"own"},
  {"en":"that (relative)","ipa":"/ðət/","hi":"द़ट","src":"own"},
  {"en":"that (demonstrative)","ipa":"/ˈðæt/","hi":"द़ैट","src":"own"},
  {"en":"there (existential)","ipa":"/ðer/","hi":"द़ेर","src":"own"},
  {"en":"I'm","ipa":"/aɪm/","hi":"आइम","src":"own"},
  {"en":"it's","ipa":"/ɪts/","hi":"इट्स","src":"own"},
  {"en":"I've","ipa":"/aɪv/","hi":"आइव़","src":"own"},
  {"en":"I'll","ipa":"/aɪl/","hi":"आइल","src":"own"},
  {"en":"don't","ipa":"/ˈdoʊnt/","hi":"डोन्ट","src":"own"},
  {"en":"can't","ipa":"/ˈkænt/","hi":"कैन्ट","src":"own"},
  {"en":"that's","ipa":"/ˈðæts/","hi":"द़ैट्स","src":"own"},
  {"en":"there's","ipa":"/ðerz/","hi":"द़ेर्ज़","src":"own"},
  {"en":"what's","ipa":"/ˈwʌts/","hi":"वट्स","src":"own"},
  {"en":"A","ipa":"/ˈeɪ/","hi":"ए","src":"own"},
  {"en":"B","ipa":"/ˈbiː/","hi":"बी","src":"own"},
  {"en":"C","ipa":"/ˈsiː/","hi":"सी","src":"own"},
  {"en":"D","ipa":"/ˈdiː/","hi":"डी","src":"own"},
  {"en":"E","ipa":"/ˈiː/","hi":"ई","src":"own"},
  {"en":"F","ipa":"/ˈef/","hi":"एफ़","src":"own"},
  {"en":"G","ipa":"/ˈdʒiː/","hi":"जी","src":"own"},
  {"en":"H","ipa":"/ˈeɪtʃ/","hi":"एच","src":"own"},
  {"en":"I (letter)","ipa":"/ˈaɪ/","hi":"आइ","src":"own"},
  {"en":"J","ipa":"/ˈdʒeɪ/","hi":"जे","src":"own"},
  {"en":"K","ipa":"/ˈkeɪ/","hi":"के","src":"own"},
  {"en":"L","ipa":"/ˈel/","hi":"एल","src":"own"},
  {"en":"M","ipa":"/ˈem/","hi":"एम","src":"own"},
  {"en":"N","ipa":"/ˈen/","hi":"एन","src":"own"},
  {"en":"O","ipa":"/ˈoʊ/","hi":"ओ","src":"own"},
  {"en":"P","ipa":"/ˈpiː/","hi":"पी","src":"own"},
  {"en":"Q","ipa":"/ˈkjuː/","hi":"क्यू","src":"own"},
  {"en":"R","ipa":"/ˈɑːr/","hi":"आर","src":"own"},
  {"en":"S","ipa":"/ˈes/","hi":"एस","src":"own"},
  {"en":"T","ipa":"/ˈtiː/","hi":"टी","src":"own"},
  {"en":"U","ipa":"/ˈjuː/","hi":"यू","src":"own"},
  {"en":"V","ipa":"/ˈviː/","hi":"व़ी","src":"own"},
  {"en":"W","ipa":"/ˈdʌbəljuː/","hi":"ˈडबल्यू","src":"hi.md"},
  {"en":"X","ipa":"/ˈeks/","hi":"एक्स","src":"own"},
  {"en":"Y","ipa":"/ˈwaɪ/","hi":"वाइ","src":"own"},
  {"en":"Z","ipa":"/ˈziː/","hi":"ज़ी","src":"own"},
  {"en":"TV","ipa":"/ˌtiː ˈviː/","hi":"टी व़ी","src":"own"},
  {"en":"BTW","ipa":"/ˌbiː tiː ˈdʌbəljuː/","hi":"बी टी ˈडबल्यू","src":"zh"},
  {"en":"Hi!","ipa":"/ˈhaɪ/","hi":"हाइ","src":"own"}
];

function selftest() {
  let bad = 0, err = 0;
  for (const e of EXAMPLES) {
    let got; try { got = ipaToHi(e.ipa); } catch (x) { got = 'ERROR ' + x.message; }
    const want = e.erratum ? e.want : e.hi;
    if (got !== want) { bad++; console.log('FAIL  ' + e.en + '  ' + e.ipa + '\n      want ' + want + '\n      got  ' + got); }
    else if (e.erratum) { err++; console.log('ERRATUM  ' + e.en + '  ' + e.ipa + ': §6 prints «' + e.hi + '», rule 4 gives «' + got + '» (' + e.erratum + ')'); }
  }
  console.log((bad ? 'FAILED: ' + bad + ' mismatches; ' : 'ok: ') + (EXAMPLES.length - err - bad) + '/' + EXAMPLES.length + ' §6 example pairs match §6 as printed' + (err ? '; ' + err + ' differ from §6 as printed (rule 2 / 2015 row vs rule 4 contradiction, rule 4 applied and its value checked)' : ''));
  return bad === 0;
}

module.exports = { ipaToHi };

if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--selftest') process.exit(selftest() ? 0 : 1);
  if (!a.length) { console.error('usage: node tools/content/hi/pron_hi.js "<ipa>" | --selftest'); process.exit(2); }
  try { console.log(ipaToHi(a.join(' '))); } catch (x) { console.error(x.message); process.exit(1); }
}
