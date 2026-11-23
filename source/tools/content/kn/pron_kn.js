/* kn-en pronunciation aid: zh-format IPA -> Kannada-script respelling (docs/profiles/kn.md §6).
   usage: node tools/content/kn/pron_kn.js "<ipa>"     print the respelling
          node tools/content/kn/pron_kn.js --selftest  check every §6 example pair and the bad inputs; exit 1 on a mismatch
          node tools/content/kn/pron_kn.js --lookup    rebuild pron_lookup.json from tools/content/zh (decks, {{ex}} rows, idioms)
   Input: zh conventions (tools/content/zh/PRON-RULES.md): one or more /…/ groups, words split by spaces, ˈ ˌ, ‖ between sentences.
   Every output is NFC and is tested against profile.json pronPattern; an unknown symbol or a failing output throws.
   Readings chosen where §6 leaves a choice are listed in PRON-TOOL.md under "Decisions". */
'use strict';
const fs = require('fs'), path = require('path');
const PROFILE = JSON.parse(fs.readFileSync(path.join(__dirname, 'profile.json'), 'utf8'));
const PRON_RE = new RegExp(PROFILE.pronPattern, 'u');

/* combining marks by code point, so that no editor or shell can drop or reorder them */
const NUK = String.fromCodePoint(0x0CBC), VIR = String.fromCodePoint(0x0CCD), ANUS = String.fromCodePoint(0x0C82);
const AA = String.fromCodePoint(0x0CBE);                 /* ಾ */
/* consonants: IPA -> letter (dotted letters as base + U+0CBC). ŋ is ಂ before k / g (see convWord). */
const CONS = {
  p: 'ಪ', b: 'ಬ', t: 'ಟ', d: 'ಡ', k: 'ಕ', g: 'ಗ',
  f: 'ಫ' + NUK, v: 'ವ' + NUK, w: 'ವ', 'θ': 'ಥ' + NUK, 'ð': 'ದ' + NUK,
  s: 'ಸ', z: 'ಜ' + NUK, 'ʃ': 'ಶ', 'ʒ': 'ಶ' + NUK, 'tʃ': 'ಚ', 'dʒ': 'ಜ',
  h: 'ಹ', m: 'ಮ', n: 'ನ', 'ŋ': 'ಙ', l: 'ಲ', r: 'ರ', j: 'ಯ'
};
/* vowels: IPA -> [independent, sign]; '' sign = the bare consonant (rule 5).
   ɔː is ಆ / ಾ here and ಓ / ೋ before r (rule 7); ɔɪ is ɑː + ಯ (rule 7), expanded in convWord. */
const AE = VIR + 'ಯ' + AA;                               /* ್ಯಾ */
const VOW = {
  'iː': ['ಈ', 'ೀ'], 'ɪ': ['ಇ', 'ಿ'], i: ['ಇ', 'ಿ'],
  e: ['ಎ', 'ೆ'], 'eɪ': ['ಏ', 'ೇ'], 'æ': ['ಆ' + VIR + 'ಯ', AE],
  'ʌ': ['ಅ', ''], 'ə': ['ಅ', ''], 'ɜː': ['ಅ', ''],
  'ɑː': ['ಆ', AA], 'ɔː': ['ಆ', AA], 'ɔːr': ['ಓ', 'ೋ'],
  'oʊ': ['ಓ', 'ೋ'], 'uː': ['ಊ', 'ೂ'], u: ['ಉ', 'ು'], 'ʊ': ['ಉ', 'ು'],
  'aɪ': ['ಐ', 'ೈ'], 'aʊ': ['ಔ', 'ೌ'], 'ɔɪ': null
};
const SYMS = [...Object.keys(VOW).filter(k => k !== 'ɔːr'), ...Object.keys(CONS), 'ˈ', 'ˌ'].sort((a, b) => b.length - a.length);
const cp = c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');

function tokenize(word) {
  const out = [];
  for (let i = 0; i < word.length;) {
    const s = SYMS.find(x => word.startsWith(x, i));
    if (!s) {
      const c = String.fromCodePoint(word.codePointAt(i));
      throw new Error('ipaToKn: unknown symbol «' + c + '» (' + cp(c) + ') in /' + word + '/');
    }
    out.push(s in VOW ? { t: 'V', k: s } : s in CONS ? { t: 'C', k: s } : { t: 'S', primary: s === 'ˈ' });
    i += s.length;
  }
  return out;
}

function convWord(word) {
  const seg = tokenize(word);
  const bad = m => { throw new Error('ipaToKn: ' + m + ' in /' + word + '/'); };
  const ph = seg.filter(x => x.t !== 'S');
  if (!ph.length) bad('no sound');
  seg.forEach((x, i) => { if (x.t === 'S' && (i === seg.length - 1 || seg[i + 1].t === 'S')) bad('a stress mark with no sound after it'); });
  /* symbols that are not in the key: British diphthongs and NURSE without r (zh PRON-RULES A1) */
  ph.forEach((x, i) => {
    const n = ph[i + 1], n2 = ph[i + 2];
    if (x.k === 'ɜː' && !(n && n.k === 'r')) bad('ɜː without r (the key has only ɜːr)');
    if (x.k === 'ə' && n && n.k === 'ʊ') bad('əʊ (write oʊ)');
    /* as tools/content/zh/pron_check.js: eə and ʊə always, ɪə unless r follows */
    if ((x.k === 'ɪ' || x.k === 'e' || x.k === 'ʊ') && n && n.k === 'ə' && !(x.k === 'ɪ' && n2 && n2.k === 'r')) bad(x.k + 'ə (a British diphthong; write ' + x.k + 'r, or i / u + ə)');
    /* rule 7: ɔː before r is ಓ */
    if (x.k === 'ɔː' && n && n.k === 'r') x.k = 'ɔːr';
  });
  /* rule 6: syllabic l / n (zh PRON-RULES A4) = l or n after a consonant other than r, with only consonants up to the word end */
  ph.forEach((x, i) => {
    if (x.t === 'C' && (x.k === 'l' || x.k === 'n') && i > 0 && ph[i - 1].t === 'C' && ph[i - 1].k !== 'r' && !ph[i - 1].syl &&
        ph.slice(i + 1).every(y => y.t === 'C')) x.syl = true;
  });
  const syll = ph.filter(x => x.t === 'V' || x.syl).length;
  /* rule 2: ˈ only in words of 2+ syllables, every ˌ dropped. rule 7: ɔɪ = ɑː + ಯ */
  const s = [];
  for (const x of seg) {
    if (x.t === 'S') { if (x.primary && syll >= 2) s.push(x); continue; }
    if (x.k === 'ɔɪ') { s.push({ t: 'V', k: 'ɑː' }, { t: 'C', k: 'j' }); continue; }
    s.push(x);
  }
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const x = s[i], prev = s[i - 1], next = s[i + 1];
    if (x.t === 'S') { out += 'ˈ'; continue; }
    if (x.t === 'V') {
      /* consonant + ಯ + ಾ is how the key writes consonant + æ: a real consonant + j + ɑː / ɔː would read the same (§6, known collapses) */
      if ((x.k === 'ɑː' || x.k === 'ɔː') && prev && prev.t === 'C' && prev.k === 'j' && s[i - 2] && s[i - 2].t === 'C')
        bad('consonant + j + ' + x.k + ' would be read as consonant + æ (§6: write it in two words or move the example)');
      /* rule 3: sign after a consonant; independent letter at the word start, after a vowel, or after ˈ */
      out += prev && prev.t === 'C' ? VOW[x.k][1] : VOW[x.k][0];
      continue;
    }
    /* consonant */
    const n2 = s.slice(i + 1).find(y => y.t !== 'S');
    if (x.k === 'ŋ' && n2 && n2.t === 'C' && (n2.k === 'k' || n2.k === 'g')) {     /* ಂ before ಕ / ಗ, ಙ elsewhere */
      if (!prev || prev.t !== 'V') bad('ŋ before k / g needs a vowel before it (ಂ sits on a vowel)');
      out += ANUS; continue;
    }
    out += CONS[x.k];
    if (next && next.t === 'V') continue;               /* the sign follows */
    if (n2 && n2.t === 'C' && n2.syl) continue;         /* rule 6: bare before a syllabic l / n */
    /* rule 4: ್ on every consonant with no vowel after it: the last one, before a consonant, and before ˈ
       (kept visible where ˈ splits a cluster; a vowel after ˈ is then written independent) */
    out += VIR;
  }
  return out;
}

/* characters §6 rule 13 bans, by code point: ZWNJ, ZWJ, the length marks, Kannada digits, ಒ / ೊ, visarga */
const BANNED = [0x200C, 0x200D, 0x0CD5, 0x0CD6, 0x0C92, 0x0CCA, 0x0C83].concat(Array.from({ length: 10 }, (_, i) => 0x0CE6 + i));
const banned = str => [...str].filter(c => BANNED.includes(c.codePointAt(0)));

function ipaToKn(ipa) {
  if (typeof ipa !== 'string') throw new Error('ipaToKn: string expected');
  const src = ipa.normalize('NFC').trim();
  const groups = [];
  const rest = src.replace(/\/([^/]*)\//g, (m, g) => { groups.push(g); return ''; });
  if (!groups.length || rest.trim()) throw new Error('ipaToKn: expected /…/ groups, got «' + ipa + '»');
  const res = groups.map(g => {
    const sents = g.split('‖').map(t => t.trim());
    if (sents.some(t => !t)) throw new Error('ipaToKn: empty sentence in «' + ipa + '»');
    return sents.map(t => t.split(/\s+/).map(convWord).join(' ')).join('. ');
  }).join(' / ');
  if (res !== res.normalize('NFC')) throw new Error('ipaToKn: output is not NFC: «' + res + '»');
  if (!PRON_RE.test(res)) throw new Error('ipaToKn: output fails pronPattern: «' + res + '» from «' + ipa + '»');
  const b = banned(res); if (b.length) throw new Error('ipaToKn: banned character ' + cp(b[0]) + ' in «' + res + '»');
  return res;
}

/* zh rows: the same collection as hi/pron_check.js and bn/pron_bn.js (deck cards, {{ex}} rows, idioms) */
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
    let kn; try { kn = ipaToKn(p.ipa); } catch (x) { failed.push(p.src + ' «' + p.en + '» ' + p.ipa + ': ' + x.message); continue; }
    if (p.en in L && L[p.en] !== kn) { conflicts.push('«' + p.en + '» ' + L[p.en] + ' || ' + kn); continue; }
    L[p.en] = kn;
  }
  if (write) fs.writeFileSync(path.join(__dirname, 'pron_lookup.json'), JSON.stringify(L, null, 2) + '\n');
  failed.forEach(l => console.log('FAILED   ' + l));
  conflicts.forEach(l => console.log('CONFLICT ' + l));
  console.log('lookup entries ' + Object.keys(L).length + ' · failed ' + failed.length + ' · conflicts ' + conflicts.length);
  return !failed.length && !conflicts.length;
}

/* §6 example pairs. kn = the profile's bytes (taken from docs/profiles/kn.md by script, not retyped; the profile is NFC).
   table: "worked" = the 87 rows of the worked-examples table (IPA as printed there); "key" = the examples printed in the key tables and rules 1-12.
   src: "zh row" / "new" = the origin column of the worked table; "zh word" = every IPA word occurs in tools/content/zh; "own" = IPA written here in zh conventions. */
const EXAMPLES = [
  {"en":"Hello.","ipa":"/həˈloʊ/","kn":"ಹˈಲೋ","src":"zh row","table":"worked"},
  {"en":"Thank you.","ipa":"/ˈθæŋk ju/","kn":"ಥ಼್ಯಾಂಕ್ ಯು","src":"zh row","table":"worked"},
  {"en":"Excuse me.","ipa":"/ɪkˈskjuːz mi/","kn":"ಇಕ್ˈಸ್ಕ್ಯೂಜ಼್ ಮಿ","src":"zh row","table":"worked"},
  {"en":"It's cold today.","ipa":"/ɪts ˈkoʊld təˈdeɪ/","kn":"ಇಟ್ಸ್ ಕೋಲ್ಡ್ ಟˈಡೇ","src":"zh row","table":"worked"},
  {"en":"Nice to meet you.","ipa":"/ˈnaɪs tə ˈmiːt ju/","kn":"ನೈಸ್ ಟ ಮೀಟ್ ಯು","src":"zh row","table":"worked"},
  {"en":"See you later.","ipa":"/ˈsiː ju ˈleɪtər/","kn":"ಸೀ ಯು ˈಲೇಟರ್","src":"zh row","table":"worked"},
  {"en":"Where do you live?","ipa":"/ˈwer də ju ˈlɪv/","kn":"ವೆರ್ ಡ ಯು ಲಿವ಼್","src":"zh row","table":"worked"},
  {"en":"Can you close the door?","ipa":"/kən ju ˈkloʊz ðə ˈdɔːr/","kn":"ಕನ್ ಯು ಕ್ಲೋಜ಼್ ದ಼ ಡೋರ್","src":"zh row","table":"worked"},
  {"en":"I have two brothers.","ipa":"/aɪ ˈhæv ˈtuː ˈbrʌðərz/","kn":"ಐ ಹ್ಯಾವ಼್ ಟೂ ˈಬ್ರದ಼ರ್ಜ಼್","src":"zh row","table":"worked"},
  {"en":"We watched a movie.","ipa":"/wi ˈwɑːtʃt ə ˈmuːvi/","kn":"ವಿ ವಾಚ್ಟ್ ಅ ˈಮೂವ಼ಿ","src":"zh row","table":"worked"},
  {"en":"There's a cafe near here.","ipa":"/ðerz ə kæˈfeɪ nɪr ˈhɪr/","kn":"ದ಼ೆರ್ಜ಼್ ಅ ಕ್ಯಾˈಫ಼ೇ ನಿರ್ ಹಿರ್","src":"zh row","table":"worked"},
  {"en":"Have you eaten yet?","ipa":"/həv ju ˈiːtn ˈjet/","kn":"ಹವ಼್ ಯು ˈಈಟನ್ ಯೆಟ್","src":"zh row","table":"worked"},
  {"en":"How long have you been here?","ipa":"/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/","kn":"ಹೌ ಲಾಙ್ ಹವ಼್ ಯು ಬಿನ್ ಹಿರ್","src":"zh row","table":"worked"},
  {"en":"I'm a student.","ipa":"/aɪm ə ˈstuːdnt/","kn":"ಐಮ್ ಅ ˈಸ್ಟೂಡನ್ಟ್","src":"zh row","table":"worked"},
  {"en":"How much is this?","ipa":"/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/","kn":"ಹೌ ಮಚ್ ಇಜ಼್ ದ಼ಿಸ್","src":"zh row","table":"worked"},
  {"en":"think","ipa":"/ˈθɪŋk/","kn":"ಥ಼ಿಂಕ್","src":"zh row","table":"worked"},
  {"en":"sink","ipa":"/ˈsɪŋk/","kn":"ಸಿಂಕ್","src":"zh row","table":"worked"},
  {"en":"three","ipa":"/ˈθriː/","kn":"ಥ಼್ರೀ","src":"zh row","table":"worked"},
  {"en":"tree","ipa":"/ˈtriː/","kn":"ಟ್ರೀ","src":"zh row","table":"worked"},
  {"en":"very","ipa":"/ˈveri/","kn":"ˈವ಼ೆರಿ","src":"zh row","table":"worked"},
  {"en":"wary","ipa":"/ˈweri/","kn":"ˈವೆರಿ","src":"zh row","table":"worked"},
  {"en":"vest","ipa":"/ˈvest/","kn":"ವ಼ೆಸ್ಟ್","src":"zh row","table":"worked"},
  {"en":"west","ipa":"/ˈwest/","kn":"ವೆಸ್ಟ್","src":"zh row","table":"worked"},
  {"en":"bad","ipa":"/ˈbæd/","kn":"ಬ್ಯಾಡ್","src":"zh row","table":"worked"},
  {"en":"bed","ipa":"/ˈbed/","kn":"ಬೆಡ್","src":"zh row","table":"worked"},
  {"en":"coffee","ipa":"/ˈkɔːfi/","kn":"ˈಕಾಫ಼ಿ","src":"zh row","table":"worked"},
  {"en":"copy","ipa":"/ˈkɑːpi/","kn":"ˈಕಾಪಿ","src":"zh row","table":"worked"},
  {"en":"banana","ipa":"/bəˈnænə/","kn":"ಬˈನ್ಯಾನ","src":"zh row","table":"worked"},
  {"en":"rice","ipa":"/ˈraɪs/","kn":"ರೈಸ್","src":"zh row","table":"worked"},
  {"en":"lice","ipa":"/ˈlaɪs/","kn":"ಲೈಸ್","src":"zh row","table":"worked"},
  {"en":"walk","ipa":"/ˈwɔːk/","kn":"ವಾಕ್","src":"zh row","table":"worked"},
  {"en":"work","ipa":"/ˈwɜːrk/","kn":"ವರ್ಕ್","src":"zh row","table":"worked"},
  {"en":"leave","ipa":"/ˈliːv/","kn":"ಲೀವ಼್","src":"zh row","table":"worked"},
  {"en":"live","ipa":"/ˈlɪv/","kn":"ಲಿವ಼್","src":"zh row","table":"worked"},
  {"en":"fan","ipa":"/ˈfæn/","kn":"ಫ಼್ಯಾನ್","src":"zh row","table":"worked"},
  {"en":"pan","ipa":"/ˈpæn/","kn":"ಪ್ಯಾನ್","src":"zh row","table":"worked"},
  {"en":"vote","ipa":"/ˈvoʊt/","kn":"ವ಼ೋಟ್","src":"zh row","table":"worked"},
  {"en":"boat","ipa":"/ˈboʊt/","kn":"ಬೋಟ್","src":"zh row","table":"worked"},
  {"en":"mouth","ipa":"/ˈmaʊθ/","kn":"ಮೌಥ಼್","src":"zh row","table":"worked"},
  {"en":"mouse","ipa":"/ˈmaʊs/","kn":"ಮೌಸ್","src":"zh row","table":"worked"},
  {"en":"asked","ipa":"/ˈæskt/","kn":"ಆ್ಯಸ್ಕ್ಟ್","src":"zh row","table":"worked"},
  {"en":"months","ipa":"/ˈmʌnθs/","kn":"ಮನ್ಥ಼್ಸ್","src":"zh row","table":"worked"},
  {"en":"friends","ipa":"/ˈfrendz/","kn":"ಫ಼್ರೆನ್ಡ್ಜ಼್","src":"zh row","table":"worked"},
  {"en":"hotel","ipa":"/hoʊˈtel/","kn":"ಹೋˈಟೆಲ್","src":"zh row","table":"worked"},
  {"en":"bus","ipa":"/ˈbʌs/","kn":"ಬಸ್","src":"new","table":"worked"},
  {"en":"bus stop","ipa":"/ˈbʌs ˈstɑːp/","kn":"ಬಸ್ ಸ್ಟಾಪ್","src":"new","table":"worked"},
  {"en":"car","ipa":"/ˈkɑːr/","kn":"ಕಾರ್","src":"zh row","table":"worked"},
  {"en":"school","ipa":"/ˈskuːl/","kn":"ಸ್ಕೂಲ್","src":"new","table":"worked"},
  {"en":"film","ipa":"/ˈfɪlm/","kn":"ಫ಼ಿಲ್ಮ್","src":"new","table":"worked"},
  {"en":"zoo","ipa":"/ˈzuː/","kn":"ಜ಼ೂ","src":"new","table":"worked"},
  {"en":"Jew","ipa":"/ˈdʒuː/","kn":"ಜೂ","src":"new","table":"worked"},
  {"en":"vine","ipa":"/ˈvaɪn/","kn":"ವ಼ೈನ್","src":"new","table":"worked"},
  {"en":"wine","ipa":"/ˈwaɪn/","kn":"ವೈನ್","src":"new","table":"worked"},
  {"en":"zero","ipa":"/ˈzɪroʊ/","kn":"ˈಜ಼ಿರೋ","src":"new","table":"worked"},
  {"en":"photography","ipa":"/fəˈtɑːgrəfi/","kn":"ಫ಼ˈಟಾಗ್ರಫ಼ಿ","src":"new","table":"worked"},
  {"en":"about","ipa":"/əˈbaʊt/","kn":"ಅˈಬೌಟ್","src":"new","table":"worked"},
  {"en":"measure","ipa":"/ˈmeʒər/","kn":"ˈಮೆಶ಼ರ್","src":"new","table":"worked"},
  {"en":"apple","ipa":"/ˈæpl/","kn":"ˈಆ್ಯಪಲ್","src":"new","table":"worked"},
  {"en":"English","ipa":"/ˈɪŋglɪʃ/","kn":"ˈಇಂಗ್ಲಿಶ್","src":"new","table":"worked"},
  {"en":"singing","ipa":"/ˈsɪŋɪŋ/","kn":"ˈಸಿಙಿಙ್","src":"new","table":"worked"},
  {"en":"sheep","ipa":"/ˈʃiːp/","kn":"ಶೀಪ್","src":"new","table":"worked"},
  {"en":"ship","ipa":"/ˈʃɪp/","kn":"ಶಿಪ್","src":"new","table":"worked"},
  {"en":"get","ipa":"/ˈget/","kn":"ಗೆಟ್","src":"new","table":"worked"},
  {"en":"gate","ipa":"/ˈgeɪt/","kn":"ಗೇಟ್","src":"new","table":"worked"},
  {"en":"door","ipa":"/ˈdɔːr/","kn":"ಡೋರ್","src":"new","table":"worked"},
  {"en":"talk","ipa":"/ˈtɔːk/","kn":"ಟಾಕ್","src":"new","table":"worked"},
  {"en":"boy","ipa":"/ˈbɔɪ/","kn":"ಬಾಯ್","src":"new","table":"worked"},
  {"en":"people","ipa":"/ˈpiːpl/","kn":"ˈಪೀಪಲ್","src":"new","table":"worked"},
  {"en":"isn't","ipa":"/ˈɪznt/","kn":"ˈಇಜ಼ನ್ಟ್","src":"new","table":"worked"},
  {"en":"important","ipa":"/ɪmˈpɔːrtnt/","kn":"ಇಮ್ˈಪೋರ್ಟನ್ಟ್","src":"new","table":"worked"},
  {"en":"My name is Divya.","ipa":"/maɪ ˈneɪm ɪz ˈdɪvjə/","kn":"ಮೈ ನೇಮ್ ಇಜ಼್ ˈಡಿವ಼್ಯ","src":"new","table":"worked"},
  {"en":"I live in Bengaluru.","ipa":"/aɪ ˈlɪv ɪn ˌbeŋgəˈlʊruː/","kn":"ಐ ಲಿವ಼್ ಇನ್ ಬೆಂಗˈಲುರೂ","src":"new","table":"worked"},
  {"en":"I've lived here since 2015.","ipa":"/aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd fɪfˈtiːn/","kn":"ಐವ಼್ ಲಿವ಼್ಡ್ ಹಿರ್ ಸಿನ್ಸ್ ಟೂ ˈಥ಼ೌಜ಼ನ್ಡ್ ಫ಼ಿಫ಼್ˈಟೀನ್","src":"new","table":"worked"},
  {"en":"Five hundred rupees.","ipa":"/ˈfaɪv ˈhʌndrəd ruːˈpiːz/","kn":"ಫ಼ೈವ಼್ ˈಹನ್ಡ್ರಡ್ ರೂˈಪೀಜ಼್","src":"new","table":"worked"},
  {"en":"She's a doctor, isn't she?","ipa":"/ʃiz ə ˈdɑːktər ˈɪznt ʃi/","kn":"ಶಿಜ಼್ ಅ ˈಡಾಕ್ಟರ್ ˈಇಜ಼ನ್ಟ್ ಶಿ","src":"new","table":"worked"},
  {"en":"fifteen / fifty","ipa":"/ˌfɪfˈtiːn/ /ˈfɪfti/","kn":"ಫ಼ಿಫ಼್ˈಟೀನ್ / ˈಫ಼ಿಫ಼್ಟಿ","src":"zh row","table":"worked"},
  {"en":"the (weak)","ipa":"/ðə/","kn":"ದ಼","src":"new","table":"worked"},
  {"en":"a (weak)","ipa":"/ə/","kn":"ಅ","src":"new","table":"worked"},
  {"en":"to (weak)","ipa":"/tə/","kn":"ಟ","src":"new","table":"worked"},
  {"en":"of (weak)","ipa":"/əv/","kn":"ಅವ಼್","src":"new","table":"worked"},
  {"en":"have to","ipa":"/ˈhæf tə/","kn":"ಹ್ಯಾಫ಼್ ಟ","src":"new","table":"worked"},
  {"en":"W","ipa":"/ˈdʌbəljuː/","kn":"ˈಡಬಲ್ಯೂ","src":"zh row","table":"worked"},
  {"en":"Z","ipa":"/ˈziː/","kn":"ಜ಼ೀ","src":"zh row","table":"worked"},
  {"en":"idea","ipa":"/aɪˈdiːə/","kn":"ಐˈಡೀಅ","src":"new","table":"worked"},
  {"en":"Canada","ipa":"/ˈkænədə/","kn":"ˈಕ್ಯಾನಡ","src":"new","table":"worked"},
  {"en":"within","ipa":"/wɪðˈɪn/","kn":"ವಿದ಼್ˈಇನ್","src":"new","table":"worked"},
  {"en":"I have a dog. The dog is so cute.","ipa":"/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/","kn":"ಐ ಹ್ಯಾವ಼್ ಅ ಡಾಗ್. ದ಼ ಡಾಗ್ ಇಜ಼್ ಸೋ ಕ್ಯೂಟ್","src":"zh row","table":"worked"},
  {"en":"see","ipa":"/ˈsiː/","kn":"ಸೀ","src":"zh word","table":"key"},
  {"en":"leave","ipa":"/ˈliːv/","kn":"ಲೀವ಼್","src":"zh word","table":"key"},
  {"en":"live","ipa":"/ˈlɪv/","kn":"ಲಿವ಼್","src":"zh word","table":"key"},
  {"en":"very","ipa":"/ˈveri/","kn":"ˈವ಼ೆರಿ","src":"zh word","table":"key"},
  {"en":"bed","ipa":"/ˈbed/","kn":"ಬೆಡ್","src":"zh word","table":"key"},
  {"en":"get","ipa":"/ˈget/","kn":"ಗೆಟ್","src":"zh word","table":"key"},
  {"en":"name","ipa":"/ˈneɪm/","kn":"ನೇಮ್","src":"zh word","table":"key"},
  {"en":"gate","ipa":"/ˈgeɪt/","kn":"ಗೇಟ್","src":"zh word","table":"key"},
  {"en":"today","ipa":"/təˈdeɪ/","kn":"ಟˈಡೇ","src":"zh word","table":"key"},
  {"en":"bad","ipa":"/ˈbæd/","kn":"ಬ್ಯಾಡ್","src":"zh word","table":"key"},
  {"en":"apple","ipa":"/ˈæpl/","kn":"ˈಆ್ಯಪಲ್","src":"zh word","table":"key"},
  {"en":"thank","ipa":"/ˈθæŋk/","kn":"ಥ಼್ಯಾಂಕ್","src":"zh word","table":"key"},
  {"en":"cup","ipa":"/ˈkʌp/","kn":"ಕಪ್","src":"zh word","table":"key"},
  {"en":"about","ipa":"/əˈbaʊt/","kn":"ಅˈಬೌಟ್","src":"zh word","table":"key"},
  {"en":"banana","ipa":"/bəˈnænə/","kn":"ಬˈನ್ಯಾನ","src":"zh word","table":"key"},
  {"en":"sofa","ipa":"/ˈsoʊfə/","kn":"ˈಸೋಫ಼","src":"own","table":"key"},
  {"en":"hot","ipa":"/ˈhɑːt/","kn":"ಹಾಟ್","src":"zh word","table":"key"},
  {"en":"copy","ipa":"/ˈkɑːpi/","kn":"ˈಕಾಪಿ","src":"zh word","table":"key"},
  {"en":"father","ipa":"/ˈfɑːðər/","kn":"ˈಫ಼ಾದ಼ರ್","src":"own","table":"key"},
  {"en":"talk","ipa":"/ˈtɔːk/","kn":"ಟಾಕ್","src":"own","table":"key"},
  {"en":"dog","ipa":"/ˈdɔːg/","kn":"ಡಾಗ್","src":"zh word","table":"key"},
  {"en":"coffee","ipa":"/ˈkɔːfi/","kn":"ˈಕಾಫ಼ಿ","src":"zh word","table":"key"},
  {"en":"go","ipa":"/ˈgoʊ/","kn":"ಗೋ","src":"zh word","table":"key"},
  {"en":"hotel","ipa":"/hoʊˈtel/","kn":"ಹೋˈಟೆಲ್","src":"zh word","table":"key"},
  {"en":"food","ipa":"/ˈfuːd/","kn":"ಫ಼ೂಡ್","src":"own","table":"key"},
  {"en":"two","ipa":"/ˈtuː/","kn":"ಟೂ","src":"zh word","table":"key"},
  {"en":"book","ipa":"/ˈbʊk/","kn":"ಬುಕ್","src":"zh word","table":"key"},
  {"en":"good","ipa":"/ˈgʊd/","kn":"ಗುಡ್","src":"zh word","table":"key"},
  {"en":"I","ipa":"/ˈaɪ/","kn":"ಐ","src":"zh word","table":"key"},
  {"en":"time","ipa":"/ˈtaɪm/","kn":"ಟೈಮ್","src":"zh word","table":"key"},
  {"en":"house","ipa":"/ˈhaʊs/","kn":"ಹೌಸ್","src":"own","table":"key"},
  {"en":"now","ipa":"/ˈnaʊ/","kn":"ನೌ","src":"zh word","table":"key"},
  {"en":"boy","ipa":"/ˈbɔɪ/","kn":"ಬಾಯ್","src":"zh word","table":"key"},
  {"en":"noise","ipa":"/ˈnɔɪz/","kn":"ನಾಯ್ಜ಼್","src":"own","table":"key"},
  {"en":"work","ipa":"/ˈwɜːrk/","kn":"ವರ್ಕ್","src":"zh word","table":"key"},
  {"en":"bird","ipa":"/ˈbɜːrd/","kn":"ಬರ್ಡ್","src":"zh word","table":"key"},
  {"en":"water","ipa":"/ˈwɔːtər/","kn":"ˈವಾಟರ್","src":"zh word","table":"key"},
  {"en":"here","ipa":"/ˈhɪr/","kn":"ಹಿರ್","src":"zh word","table":"key"},
  {"en":"there","ipa":"/ˈðer/","kn":"ದ಼ೆರ್","src":"zh word","table":"key"},
  {"en":"sure","ipa":"/ˈʃʊr/","kn":"ಶುರ್","src":"zh word","table":"key"},
  {"en":"car","ipa":"/ˈkɑːr/","kn":"ಕಾರ್","src":"zh word","table":"key"},
  {"en":"door","ipa":"/ˈdɔːr/","kn":"ಡೋರ್","src":"zh word","table":"key"},
  {"en":"four","ipa":"/ˈfɔːr/","kn":"ಫ಼ೋರ್","src":"zh word","table":"key"},
  {"en":"important","ipa":"/ɪmˈpɔːrtnt/","kn":"ಇಮ್ˈಪೋರ್ಟನ್ಟ್","src":"zh word","table":"key"},
  {"en":"pen","ipa":"/ˈpen/","kn":"ಪೆನ್","src":"zh word","table":"key"},
  {"en":"bag","ipa":"/ˈbæg/","kn":"ಬ್ಯಾಗ್","src":"zh word","table":"key"},
  {"en":"day","ipa":"/ˈdeɪ/","kn":"ಡೇ","src":"zh word","table":"key"},
  {"en":"fan","ipa":"/ˈfæn/","kn":"ಫ಼್ಯಾನ್","src":"zh word","table":"key"},
  {"en":"vine","ipa":"/ˈvaɪn/","kn":"ವ಼ೈನ್","src":"own","table":"key"},
  {"en":"have","ipa":"/ˈhæv/","kn":"ಹ್ಯಾವ಼್","src":"zh word","table":"key"},
  {"en":"wine","ipa":"/ˈwaɪn/","kn":"ವೈನ್","src":"own","table":"key"},
  {"en":"twenty","ipa":"/ˈtwenti/","kn":"ˈಟ್ವೆನ್ಟಿ","src":"zh word","table":"key"},
  {"en":"think","ipa":"/ˈθɪŋk/","kn":"ಥ಼ಿಂಕ್","src":"zh word","table":"key"},
  {"en":"three","ipa":"/ˈθriː/","kn":"ಥ಼್ರೀ","src":"zh word","table":"key"},
  {"en":"mouth","ipa":"/ˈmaʊθ/","kn":"ಮೌಥ಼್","src":"zh word","table":"key"},
  {"en":"this","ipa":"/ˈðɪs/","kn":"ದ಼ಿಸ್","src":"zh word","table":"key"},
  {"en":"the","ipa":"/ðə/","kn":"ದ಼","src":"zh word","table":"key"},
  {"en":"brother","ipa":"/ˈbrʌðər/","kn":"ˈಬ್ರದ಼ರ್","src":"zh word","table":"key"},
  {"en":"bus","ipa":"/ˈbʌs/","kn":"ಬಸ್","src":"zh word","table":"key"},
  {"en":"is","ipa":"/ɪz/","kn":"ಇಜ಼್","src":"zh word","table":"key"},
  {"en":"zoo","ipa":"/ˈzuː/","kn":"ಜ಼ೂ","src":"own","table":"key"},
  {"en":"zoo / Jew / Sue","ipa":"/ˈzuː/ /ˈdʒuː/ /ˈsuː/","kn":"ಜ಼ೂ / ಜೂ / ಸೂ","src":"own","table":"key"},
  {"en":"ship / sheep","ipa":"/ˈʃɪp/ /ˈʃiːp/","kn":"ಶಿಪ್ / ಶೀಪ್","src":"own","table":"key"},
  {"en":"she","ipa":"/ˈʃiː/","kn":"ಶೀ","src":"own","table":"key"},
  {"en":"measure","ipa":"/ˈmeʒər/","kn":"ˈಮೆಶ಼ರ್","src":"own","table":"key"},
  {"en":"check","ipa":"/ˈtʃek/","kn":"ಚೆಕ್","src":"zh word","table":"key"},
  {"en":"job","ipa":"/ˈdʒɑːb/","kn":"ಜಾಬ್","src":"zh word","table":"key"},
  {"en":"since","ipa":"/sɪns/","kn":"ಸಿನ್ಸ್","src":"zh word","table":"key"},
  {"en":"lamp","ipa":"/ˈlæmp/","kn":"ಲ್ಯಾಮ್ಪ್","src":"own","table":"key"},
  {"en":"friends","ipa":"/ˈfrendz/","kn":"ಫ಼್ರೆನ್ಡ್ಜ಼್","src":"zh word","table":"key"},
  {"en":"English","ipa":"/ˈɪŋglɪʃ/","kn":"ˈಇಂಗ್ಲಿಶ್","src":"zh word","table":"key"},
  {"en":"long","ipa":"/ˈlɔːŋ/","kn":"ಲಾಙ್","src":"zh word","table":"key"},
  {"en":"singing","ipa":"/ˈsɪŋɪŋ/","kn":"ˈಸಿಙಿಙ್","src":"own","table":"key"},
  {"en":"rice","ipa":"/ˈraɪs/","kn":"ರೈಸ್","src":"zh word","table":"key"},
  {"en":"light","ipa":"/ˈlaɪt/","kn":"ಲೈಟ್","src":"zh word","table":"key"},
  {"en":"yes","ipa":"/ˈjes/","kn":"ಯೆಸ್","src":"zh word","table":"key"},
  {"en":"cute","ipa":"/ˈkjuːt/","kn":"ಕ್ಯೂಟ್","src":"zh word","table":"key"},
  {"en":"fifteen","ipa":"/ˌfɪfˈtiːn/","kn":"ಫ಼ಿಫ಼್ˈಟೀನ್","src":"zh word","table":"key"},
  {"en":"idea","ipa":"/aɪˈdiːə/","kn":"ಐˈಡೀಅ","src":"own","table":"key"},
  {"en":"within","ipa":"/wɪðˈɪn/","kn":"ವಿದ಼್ˈಇನ್","src":"own","table":"key"},
  {"en":"hundred","ipa":"/ˈhʌndrəd/","kn":"ˈಹನ್ಡ್ರಡ್","src":"zh word","table":"key"},
  {"en":"Canada","ipa":"/ˈkænədə/","kn":"ˈಕ್ಯಾನಡ","src":"own","table":"key"},
  {"en":"people","ipa":"/ˈpiːpl/","kn":"ˈಪೀಪಲ್","src":"zh word","table":"key"},
  {"en":"seven","ipa":"/ˈsevn/","kn":"ˈಸೆವ಼ನ್","src":"zh word","table":"key"},
  {"en":"station","ipa":"/ˈsteɪʃn/","kn":"ˈಸ್ಟೇಶನ್","src":"zh word","table":"key"},
  {"en":"isn't","ipa":"/ˈɪznt/","kn":"ˈಇಜ಼ನ್ಟ್","src":"zh word","table":"key"},
  {"en":"didn't","ipa":"/ˈdɪdnt/","kn":"ˈಡಿಡನ್ಟ್","src":"zh word","table":"key"},
  {"en":"I'm","ipa":"/aɪm/","kn":"ಐಮ್","src":"zh word","table":"key"},
  {"en":"it's","ipa":"/ɪts/","kn":"ಇಟ್ಸ್","src":"zh word","table":"key"},
  {"en":"I've","ipa":"/aɪv/","kn":"ಐವ಼್","src":"zh word","table":"key"},
  {"en":"I'll","ipa":"/aɪl/","kn":"ಐಲ್","src":"zh word","table":"key"},
  {"en":"don't","ipa":"/ˈdoʊnt/","kn":"ಡೋನ್ಟ್","src":"zh word","table":"key"},
  {"en":"can't","ipa":"/ˈkænt/","kn":"ಕ್ಯಾನ್ಟ್","src":"zh word","table":"key"},
  {"en":"that's","ipa":"/ˈðæts/","kn":"ದ಼್ಯಾಟ್ಸ್","src":"zh word","table":"key"},
  {"en":"cats","ipa":"/ˈkæts/","kn":"ಕ್ಯಾಟ್ಸ್","src":"zh word","table":"key"},
  {"en":"dogs","ipa":"/ˈdɔːgz/","kn":"ಡಾಗ್ಜ಼್","src":"zh word","table":"key"},
  {"en":"buses","ipa":"/ˈbʌsɪz/","kn":"ˈಬಸಿಜ಼್","src":"own","table":"key"},
  {"en":"watched","ipa":"/ˈwɑːtʃt/","kn":"ವಾಚ್ಟ್","src":"zh word","table":"key"},
  {"en":"played","ipa":"/ˈpleɪd/","kn":"ಪ್ಲೇಡ್","src":"own","table":"key"},
  {"en":"wanted","ipa":"/ˈwɑːntɪd/","kn":"ˈವಾನ್ಟಿಡ್","src":"own","table":"key"},
  {"en":"Divya","ipa":"/ˈdɪvjə/","kn":"ˈಡಿವ಼್ಯ","src":"own","table":"key"},
  {"en":"a / an / the (weak)","ipa":"/ə/ /ən/ /ðə/","kn":"ಅ / ಅನ್ / ದ಼","src":"zh word","table":"key"},
  {"en":"the (before a vowel)","ipa":"/ði/","kn":"ದ಼ಿ","src":"zh word","table":"key"},
  {"en":"to (weak)","ipa":"/tə/","kn":"ಟ","src":"zh word","table":"key"},
  {"en":"to (before a vowel)","ipa":"/tu/","kn":"ಟು","src":"zh word","table":"key"},
  {"en":"to (strong)","ipa":"/tuː/","kn":"ಟೂ","src":"zh word","table":"key"},
  {"en":"for / from / at / of (weak)","ipa":"/fər/ /frəm/ /ət/ /əv/","kn":"ಫ಼ರ್ / ಫ಼್ರಮ್ / ಅಟ್ / ಅವ಼್","src":"zh word","table":"key"},
  {"en":"for / from / at (strong)","ipa":"/fɔːr/ /frʌm/ /æt/","kn":"ಫ಼ೋರ್ / ಫ಼್ರಮ್ / ಆ್ಯಟ್","src":"zh word","table":"key"},
  {"en":"and / or / but (weak)","ipa":"/ənd/ /ər/ /bət/","kn":"ಅನ್ಡ್ / ಅರ್ / ಬಟ್","src":"zh word","table":"key"},
  {"en":"can / could / should / would (weak)","ipa":"/kən/ /kəd/ /ʃəd/ /wəd/","kn":"ಕನ್ / ಕಡ್ / ಶಡ್ / ವಡ್","src":"zh word","table":"key"},
  {"en":"do / does / did / have / has / had (auxiliary)","ipa":"/də/ /dəz/ /dɪd/ /həv/ /həz/ /həd/","kn":"ಡ / ಡಜ಼್ / ಡಿಡ್ / ಹವ಼್ / ಹಜ಼್ / ಹಡ್","src":"zh word","table":"key"},
  {"en":"do (main verb)","ipa":"/ˈduː/","kn":"ಡೂ","src":"zh word","table":"key"},
  {"en":"have to / has to","ipa":"/ˈhæf tə/ /ˈhæs tə/","kn":"ಹ್ಯಾಫ಼್ ಟ / ಹ್ಯಾಸ್ ಟ","src":"zh word","table":"key"},
  {"en":"you / your / you're (weak)","ipa":"/ju/ /jʊr/ /jʊr/","kn":"ಯು / ಯುರ್ / ಯುರ್","src":"zh word","table":"key"},
  {"en":"you (strong)","ipa":"/ˈjuː/","kn":"ಯೂ","src":"zh word","table":"key"},
  {"en":"me / he / she / we (weak)","ipa":"/mi/ /hi/ /ʃi/ /wi/","kn":"ಮಿ / ಹಿ / ಶಿ / ವಿ","src":"zh word","table":"key"},
  {"en":"me / he / she / we (strong)","ipa":"/ˈmiː/ /ˈhiː/ /ˈʃiː/ /ˈwiː/","kn":"ಮೀ / ಹೀ / ಶೀ / ವೀ","src":"own","table":"key"},
  {"en":"that (relative)","ipa":"/ðət/","kn":"ದ಼ಟ್","src":"zh word","table":"key"},
  {"en":"that (demonstrative)","ipa":"/ˈðæt/","kn":"ದ಼್ಯಾಟ್","src":"zh word","table":"key"},
  {"en":"there","ipa":"/ðer/","kn":"ದ಼ೆರ್","src":"zh word","table":"key"},
  {"en":"A","ipa":"/ˈeɪ/","kn":"ಏ","src":"zh word","table":"key"},
  {"en":"B","ipa":"/ˈbiː/","kn":"ಬೀ","src":"zh word","table":"key"},
  {"en":"C","ipa":"/ˈsiː/","kn":"ಸೀ","src":"zh word","table":"key"},
  {"en":"D","ipa":"/ˈdiː/","kn":"ಡೀ","src":"zh word","table":"key"},
  {"en":"E","ipa":"/ˈiː/","kn":"ಈ","src":"zh word","table":"key"},
  {"en":"F","ipa":"/ˈef/","kn":"ಎಫ಼್","src":"zh word","table":"key"},
  {"en":"G","ipa":"/ˈdʒiː/","kn":"ಜೀ","src":"zh word","table":"key"},
  {"en":"H","ipa":"/ˈeɪtʃ/","kn":"ಏಚ್","src":"zh word","table":"key"},
  {"en":"I (letter)","ipa":"/ˈaɪ/","kn":"ಐ","src":"zh word","table":"key"},
  {"en":"J","ipa":"/ˈdʒeɪ/","kn":"ಜೇ","src":"zh word","table":"key"},
  {"en":"K","ipa":"/ˈkeɪ/","kn":"ಕೇ","src":"zh word","table":"key"},
  {"en":"L","ipa":"/ˈel/","kn":"ಎಲ್","src":"zh word","table":"key"},
  {"en":"M","ipa":"/ˈem/","kn":"ಎಮ್","src":"zh word","table":"key"},
  {"en":"N","ipa":"/ˈen/","kn":"ಎನ್","src":"zh word","table":"key"},
  {"en":"O","ipa":"/ˈoʊ/","kn":"ಓ","src":"zh word","table":"key"},
  {"en":"P","ipa":"/ˈpiː/","kn":"ಪೀ","src":"zh word","table":"key"},
  {"en":"Q","ipa":"/ˈkjuː/","kn":"ಕ್ಯೂ","src":"zh word","table":"key"},
  {"en":"R","ipa":"/ˈɑːr/","kn":"ಆರ್","src":"zh word","table":"key"},
  {"en":"S","ipa":"/ˈes/","kn":"ಎಸ್","src":"zh word","table":"key"},
  {"en":"T","ipa":"/ˈtiː/","kn":"ಟೀ","src":"zh word","table":"key"},
  {"en":"U","ipa":"/ˈjuː/","kn":"ಯೂ","src":"zh word","table":"key"},
  {"en":"V","ipa":"/ˈviː/","kn":"ವ಼ೀ","src":"zh word","table":"key"},
  {"en":"W","ipa":"/ˈdʌbəljuː/","kn":"ˈಡಬಲ್ಯೂ","src":"zh word","table":"key"},
  {"en":"X","ipa":"/ˈeks/","kn":"ಎಕ್ಸ್","src":"zh word","table":"key"},
  {"en":"Y","ipa":"/ˈwaɪ/","kn":"ವೈ","src":"zh word","table":"key"},
  {"en":"Z","ipa":"/ˈziː/","kn":"ಜ಼ೀ","src":"zh word","table":"key"},
  {"en":"cot","ipa":"/ˈkɑːt/","kn":"ಕಾಟ್","src":"own","table":"key"},
  {"en":"caught","ipa":"/ˈkɔːt/","kn":"ಕಾಟ್","src":"own","table":"key"},
  {"en":"street","ipa":"/ˈstriːt/","kn":"ಸ್ಟ್ರೀಟ್","src":"own","table":"key"},
  {"en":"happy","ipa":"/ˈhæpi/","kn":"ˈಹ್ಯಾಪಿ","src":"own","table":"key"}
];

/* inputs the converter must refuse */
const REFUSE = [
  ['/ˈ' + String.fromCodePoint(0x0261) + 'oʊ/', 'script ɡ (U+0261) instead of ASCII g'], ['/ˈhɒt/', 'British ɒ'], ['/ˈgəʊ/', 'British əʊ'], ['/ˈhɪə/', 'British ɪə'], ['/ˈheə/', 'British eə'], ['/ˈtʊər/', 'British ʊə'],
  ['/ˈwɔtər/', 'ɔ without ː'], ['/ˈhɑt/', 'ɑ without ː'], ['/ˈbɜrd/', 'ɜ without ː'], ['/ˈbɜːd/', 'ɜː without r'],
  ['/ˈbʌɾər/', 'flap symbol'], ['/ˈwɔːtɚ/', 'ɚ'], ['/ˈrɛd/', 'ɛ'], ['/ˈkat/', 'a outside aɪ / aʊ'], ['/ˈgo/', 'o outside oʊ'],
  ['hello', 'no slashes'], ['/ˈjes/ yes', 'text outside the slashes'], ['/Hello/', 'capital letter'], ['/ˈtuː 2/', 'digit'], ['/ˈjes?/', 'punctuation'], ['/ˈjes, ˈnoʊ/', 'comma'],
  ['/ˈ/', 'dangling ˈ'], ['/ˈbʌsˈ/', 'ˈ at the end of a word'], ['/ˈˈbʌtər/', 'double ˈ'], ['/ˈhaʊ ‖ /', 'empty sentence'], ['//', 'empty group'],
  ['/ˈkjɑːr/', 'consonant + j + ɑː reads as consonant + æ'], ['/ŋgoʊ/', 'ŋ before g with no vowel before it'], ['/ˈsiːː/', 'stray ː'], ['/ˈಬಸ್/', 'Kannada letters in the IPA']
];

/* respellings pronPattern must reject: the list printed at the end of §6 (profile bytes), then the two it describes without printing */
const PATTERN_REJECTS = [
  ["/ˈjes/", '§6 list'],
  ["ಇಟ್ಸ್?", '§6 list'],
  ["yes", '§6 list'],
  ["ಇಟ್ಸ್  ಕೋಲ್ಡ್", '§6 list'],
  ["ಕೋಲ್ಡ್ ˈ", '§6 list'],
  ["ಇಟ್ಸ್,ಕೋಲ್ಡ್", '§6 list'],
  ["೨೦೧೦", '§6 list'],
  ["್ಕ", '§6 list'],
  ["ಫೋನ್", '§6 list'],
  ["ಜೂ಼", '§6 list'],
  ["ಹಾಟೊ", '§6 list'],
  ["ತ್ರೀ", '§6 list'],
  ["ಒನ್", '§6 list'],
  ['ಕೋ' + String.fromCodePoint(0x200C) + 'ಲ್ಡ್', 'ZWNJ inside a word'],
  ['ಕೆ' + String.fromCodePoint(0x0CD5), 'ಕೇ typed as ಕೆ + U+0CD5'],
  ['ಕೋ' + String.fromCodePoint(0x200D) + 'ಲ್ಡ್', 'ZWJ inside a word']
];

/* the worked-examples table as docs/profiles/kn.md prints it now (null when the profile is not in this checkout) */
function profileRows() {
  const f = path.join(__dirname, '..', '..', '..', 'docs', 'profiles', 'kn.md');
  if (!fs.existsSync(f)) return null;
  const t = fs.readFileSync(f, 'utf8'), s6 = t.slice(t.indexOf('## 6. '), t.indexOf('## 7. '));
  return s6.split('\n').filter(l => /^\| .* \| \/.*\/ \| .* \| (zh row|new) \|$/.test(l)).map(l => { const c = l.split(' | '); return { en: c[0].slice(2), ipa: c[1], kn: c[2] }; });
}

function selftest() {
  let bad = 0; const n = {};
  /* the embedded worked rows must be the profile's rows, byte for byte and in order */
  const rows = profileRows(), worked = EXAMPLES.filter(e => e.table === 'worked');
  if (rows) {
    if (rows.length !== worked.length) { bad++; console.log('FAIL  profile §6 has ' + rows.length + ' worked rows, the tool has ' + worked.length); }
    rows.forEach((r, i) => { const w = worked[i]; if (w && (w.en !== r.en || w.ipa !== r.ipa || w.kn !== r.kn)) { bad++; console.log('FAIL  worked row ' + (i + 1) + ' differs from the profile: ' + r.en + ' ' + r.ipa + ' ' + r.kn); } });
  }
  for (const e of EXAMPLES) {
    let got; try { got = ipaToKn(e.ipa); } catch (x) { got = 'ERROR ' + x.message; }
    if (got !== e.kn) { bad++; console.log('FAIL  ' + e.en + '  ' + e.ipa + '\n      want ' + e.kn + '\n      got  ' + got); } else n[e.table] = (n[e.table] || 0) + 1;
  }
  let rbad = 0;
  for (const [ipa, why] of REFUSE) { let ok = false; try { ipaToKn(ipa); } catch (x) { ok = true; } if (!ok) { rbad++; console.log('FAIL  not refused: ' + ipa + ' (' + why + ')'); } }
  let pbad = 0;
  for (const [str, why] of PATTERN_REJECTS) if (PRON_RE.test(str)) { pbad++; console.log('FAIL  pronPattern accepts «' + str + '» (' + why + ')'); }
  const tot = t => EXAMPLES.filter(e => e.table === t).length;
  console.log((bad || rbad || pbad ? 'FAILED: ' + (bad + rbad + pbad) + ' mismatches; ' : 'ok: ') + (EXAMPLES.length - bad) + '/' + EXAMPLES.length + ' §6 example pairs match §6 as printed (worked examples ' +
    (n.worked || 0) + '/' + tot('worked') + ', key and rules ' + (n.key || 0) + '/' + tot('key') + '); ' + (REFUSE.length - rbad) + '/' + REFUSE.length + ' bad inputs refused; ' +
    (PATTERN_REJECTS.length - pbad) + '/' + PATTERN_REJECTS.length + ' bad respellings rejected by pronPattern' + (rows ? '; worked rows identical to the profile table' : '; profile not found, worked rows not compared'));
  return bad === 0 && rbad === 0 && pbad === 0;
}

module.exports = { ipaToKn, zhPairs, banned };

if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--selftest') process.exit(selftest() ? 0 : 1);
  if (a[0] === '--lookup') process.exit(buildLookup(true) ? 0 : 1);
  if (!a.length) { console.error('usage: node tools/content/kn/pron_kn.js "<ipa>" | --selftest | --lookup'); process.exit(2); }
  try { console.log(ipaToKn(a.join(' '))); } catch (x) { console.error(x.message); process.exit(1); }
}
