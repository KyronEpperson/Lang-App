/* pa-en pronunciation aid: zh-format IPA -> Gurmukhi respelling (docs/profiles/pa.md §6).
   usage: node tools/content/pa/pron_pa.js "<ipa>"     print the respelling
          node tools/content/pa/pron_pa.js --selftest  check every §6 example pair and the bad inputs; exit 1 on a mismatch
          node tools/content/pa/pron_pa.js --lookup    rebuild pron_lookup.json from tools/content/zh (decks, {{ex}} rows, idioms)
   Input: zh conventions (tools/content/zh/PRON-RULES.md): one or more /…/ groups, words split by spaces, ˈ ˌ, ‖ between sentences.
   Every output is NFC and is tested against profile.json pronPattern; an unknown symbol or a failing output throws.
   Letters are built from code points (never typed), so the file cannot carry a precomposed or look-alike letter.
   Decisions the profile leaves open are listed in PRON-TOOL.md under "Decisions". */
'use strict';
const fs = require('fs'), path = require('path');
const PROFILE = JSON.parse(fs.readFileSync(path.join(__dirname, 'profile.json'), 'utf8'));
const PRON_RE = new RegExp(PROFILE.pronPattern, 'u');
const c = (...n) => String.fromCodePoint(...n);

const DOT = c(0x0A3C), HAL = c(0x0A4D), TIPPI = c(0x0A70), BINDI = c(0x0A02);
const KA = 0x0A15, GA = 0x0A17, NGA = 0x0A19, CA = 0x0A1A, JA = 0x0A1C, TTA = 0x0A1F, DDA = 0x0A21, THA = 0x0A25, DA = 0x0A26, NA = 0x0A28,
  PA = 0x0A2A, PHA = 0x0A2B, BA = 0x0A2C, MA = 0x0A2E, YA = 0x0A2F, RA = 0x0A30, LA = 0x0A32, VA = 0x0A35, SA = 0x0A38, HA = 0x0A39;
/* consonants: IPA -> letter (dotted letters as base + U+0A3C, never precomposed). z and ʒ share one spelling (§6 collapse 4). */
const CONS = {
  p: c(PA), b: c(BA), t: c(TTA), d: c(DDA), k: c(KA), g: c(GA),
  f: c(PHA) + DOT, v: c(VA) + DOT, w: c(VA), 'θ': c(THA) + DOT, 'ð': c(DA) + DOT,
  s: c(SA), z: c(JA) + DOT, 'ʃ': c(SA) + DOT, 'ʒ': c(JA) + DOT, 'tʃ': c(CA), 'dʒ': c(JA),
  h: c(HA), m: c(MA), n: c(NA), 'ŋ': c(NGA), l: c(LA), r: c(RA), j: c(YA)
};
/* vowel letters and signs */
const A = c(0x0A05), AA = c(0x0A06), I = c(0x0A07), II = c(0x0A08), U = c(0x0A09), UU = c(0x0A0A), EE = c(0x0A0F), AI = c(0x0A10), OO = c(0x0A13), AU = c(0x0A14);
const sAA = c(0x0A3E), sI = c(0x0A3F), sII = c(0x0A40), sU = c(0x0A41), sUU = c(0x0A42), sEE = c(0x0A47), sAI = c(0x0A48), sOO = c(0x0A4B), sAU = c(0x0A4C);
/* vowels: IPA -> [letter, sign]; '' sign = the inherent vowel. ɑ, ɔ and ɜ without ː are not in the table and are refused. */
const VOW = {
  'iː': [II, sII], i: [II, sII], 'ɪ': [I, sI],
  e: [EE, sEE], 'eɪ': [EE, sEE], 'æ': [AI, sAI],
  'ʌ': [A, ''], 'ə': [A, ''], 'ɜː': [A, ''],
  'ɑː': [AA, sAA], 'ɔː': [AU, sAU], 'oʊ': [OO, sOO],
  'uː': [UU, sUU], u: [UU, sUU], 'ʊ': [U, sU],
  'aɪ': [AA + II, sAA + II], 'aʊ': [AA + UU, sAA + UU], 'ɔɪ': [AU + II, sAU + II]
};
const FINAL_SCHWA = [AA, sAA];
/* rule 7: the nasal's own stops; tippi after the inherent vowel (a bare consonant or its dot), ਅ, ਇ and the signs of ɪ, ʊ, uː; bindi after everything else */
const OWN = { m: ['p', 'b'], n: ['t', 'd', 'tʃ', 'dʒ'], 'ŋ': ['k', 'g'] };
const TIPPI_AFTER = new Set([A, I, sI, sU, sUU, DOT, ...Object.values(CONS).map(x => x[0])]);
const SYMS = [...Object.keys(VOW), ...Object.keys(CONS), 'ˈ', 'ˌ'].sort((a, b) => b.length - a.length);
/* never in the aid (rule 12, rule 15): tone letters, addak, adak bindi, visarga, precomposed dotted letters, ZWNJ / ZWJ */
const BANNED = new RegExp('[' + c(0x0A18, 0x0A1D, 0x0A22, 0x0A27, 0x0A2D, 0x0A71, 0x0A01, 0x0A03, 0x0A33, 0x0A36) + c(0x0A59) + '-' + c(0x0A5E) + c(0x200C, 0x200D) + ']', 'u');

function tokenize(word) {
  const out = [];
  for (let i = 0; i < word.length;) {
    const s = SYMS.find(x => word.startsWith(x, i));
    if (!s) throw new Error('ipaToPa: unknown symbol «' + String.fromCodePoint(word.codePointAt(i)) + '» (U+' + word.codePointAt(i).toString(16).toUpperCase().padStart(4, '0') + ') in /' + word + '/');
    out.push(s in VOW ? { t: 'V', k: s } : s in CONS ? { t: 'C', k: s } : { t: 'S', primary: s === 'ˈ' });
    i += s.length;
  }
  return out;
}

function convWord(word, warn) {
  const seg = tokenize(word);
  const ph = seg.filter(x => x.t !== 'S');
  const bad = m => { throw new Error('ipaToPa: ' + m + ' in /' + word + '/'); };
  if (!ph.length) bad('no sound');
  /* syllabic l / n (zh PRON-RULES A4, rule 6): after a consonant other than r, with only consonants up to the word end */
  ph.forEach((x, i) => {
    if (x.t === 'C' && (x.k === 'l' || x.k === 'n') && i > 0 && ph[i - 1].t === 'C' && ph[i - 1].k !== 'r' && !ph[i - 1].syl &&
        ph.slice(i + 1).every(y => y.t === 'C')) x.syl = true;
  });
  const syll = ph.filter(x => x.t === 'V' || x.syl).length;
  seg.forEach((x, i) => {
    if (x.t !== 'S') return;
    if (!seg[i + 1]) bad('dangling stress mark');
    if (seg[i + 1].t === 'S') bad('two stress marks in a row');
  });
  /* rule 2: ˈ only in words of 2+ syllables, every ˌ dropped */
  const s = seg.filter(x => x.t !== 'S' || (x.primary && syll >= 2));
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const x = s[i], prev = s[i - 1], next = s[i + 1];
    if (x.t === 'S') { out += 'ˈ'; continue; }
    const afterC = !!prev && prev.t === 'C';      /* directly after a consonant, no ˈ between */
    const n2 = s.slice(i + 1).find(y => y.t !== 'S');  /* the next sound, across ˈ */
    if (x.t === 'V') {
      /* rule 5: final ə -> ਾ in a word of 2+ syllables; one-syllable weak forms keep the inherent vowel */
      const pair = x.k === 'ə' && i === s.length - 1 && syll >= 2 ? FINAL_SCHWA : VOW[x.k];
      /* rule 3: sign after a consonant; vowel letter at the word start, after a vowel, or after ˈ */
      out += afterC ? pair[1] : pair[0];
      continue;
    }
    /* consonant */
    if (x.k === 'j' || x.k === 'w') { if (!next || next.t !== 'V') bad(x.k + ' with no vowel after it'); }
    if (x.k === 'j' && afterC && (next.k === 'uː' || next.k === 'u' || next.k === 'ʊ')) {
      /* rule J: consonant + j + uː / u -> ਿਊ, consonant + j + ʊ -> ਿਉ */
      out += sI + (next.k === 'ʊ' ? U : UU); i++; continue;
    }
    if (x.k in OWN) {
      /* rule N: m n ŋ straight after a vowel (or a syllabic n) + its own stop, also across ˈ -> tippi / bindi, no letter */
      const afterV = (!!prev && prev.t === 'V') || (x.syl && x.k === 'n');
      if (afterV && n2 && n2.t === 'C' && OWN[x.k].includes(n2.k)) { out += TIPPI_AFTER.has(out[out.length - 1]) ? TIPPI : BINDI; continue; }
      if (x.k === 'ŋ' && !(prev && prev.t === 'V')) bad('ŋ with no vowel straight before it');
    }
    if (x.k === 'h' && afterC) warn('consonant + h with no ˈ between in /' + word + '/ writes the subjoined ha, which Punjabi reads as a tone mark (§6 rule 4 hand case): check the row by hand');
    /* review 2026-11-23: a ਹ straight after a vowel (no ˈ between) is read by Punjabi readers as a tone on that vowel, with the h
       dropped (ਕਹਿ, ਪਹਿਲਾਂ): /ˈælkəhɔːl/ -> ˈਐਲ੍ਕਹੌਲ. Warn so the row is checked by hand (a card note, or a ˈ the IPA justifies). */
    if (x.k === 'h' && prev && prev.t === 'V') warn('vowel + h with no ˈ between in /' + word + '/: Punjabi reads a ਹ after a vowel as a tone and drops the h; check the row by hand (note, or stress mark)');
    out += CONS[x.k];
    /* rule 4: halant on a consonant with no vowel after it inside the word, kept where ˈ splits a cluster and before ˈ + vowel
       (the vowel is then a vowel letter). None on the last consonant; none before a syllabic l / n (rule 6: this consonant carries the
       inherent vowel); none before j + uː / u / ʊ (rule J: the sign ਿ follows). */
    if (!next || next.t === 'V') continue;
    if (next.t === 'C' && next.syl) continue;
    if (next.t === 'C' && next.k === 'j' && s[i + 2] && ['uː', 'u', 'ʊ'].includes(s[i + 2].k)) continue;
    out += HAL;
  }
  return out;
}

/* returns { pa, warnings }; throws on an unknown symbol, a malformed row or an output that fails pronPattern */
function convert(ipa) {
  if (typeof ipa !== 'string') throw new Error('ipaToPa: string expected');
  const src = ipa.normalize('NFC').trim();
  const groups = [], warnings = [];
  const rest = src.replace(/\/([^/]*)\//g, (m, g) => { groups.push(g); return ''; });
  if (!groups.length || rest.trim()) throw new Error('ipaToPa: expected /…/ groups, got «' + ipa + '»');
  const pa = groups.map(g => {
    const sents = g.split('‖').map(t => t.trim());
    if (sents.some(t => !t)) throw new Error('ipaToPa: empty sentence in «' + ipa + '»');
    return sents.map(t => t.split(/\s+/).map(w => convWord(w, m => warnings.push(m))).join(' ')).join('। ');
  }).join(' / ').normalize('NFC');
  if (!PRON_RE.test(pa)) throw new Error('ipaToPa: output fails pronPattern: «' + pa + '» from «' + ipa + '»');
  if (BANNED.test(pa)) throw new Error('ipaToPa: banned character (tone letter, addak, precomposed dotted letter or ZWJ / ZWNJ) in «' + pa + '»');
  return { pa, warnings };
}

function ipaToPa(ipa) { return convert(ipa).pa; }

/* zh rows: the same collection as hi/pron_check.js and bn/pron_bn.js (deck cards, {{ex}} rows, idioms).
   zh practice.js, meta.js and the other extra.js blocks carry no IPA. */
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
  const L = {}, failed = [], conflicts = [], warned = [];
  for (const p of zhPairs()) {
    let r; try { r = convert(p.ipa); } catch (x) { failed.push(p.src + ' «' + p.en + '» ' + p.ipa + ': ' + x.message); continue; }
    r.warnings.forEach(w => warned.push(p.src + ' «' + p.en + '» ' + r.pa + ': ' + w));
    if (p.en in L && L[p.en] !== r.pa) { conflicts.push('«' + p.en + '» ' + L[p.en] + ' || ' + r.pa); continue; }
    L[p.en] = r.pa;
  }
  if (write) fs.writeFileSync(path.join(__dirname, 'pron_lookup.json'), JSON.stringify(L, null, 2) + '\n');
  failed.forEach(l => console.log('FAILED   ' + l));
  conflicts.forEach(l => console.log('CONFLICT ' + l));
  warned.forEach(l => console.log('WARNING  ' + l));
  console.log('lookup entries ' + Object.keys(L).length + ' · failed ' + failed.length + ' · conflicts ' + conflicts.length + ' · warnings ' + warned.length);
  return !failed.length && !conflicts.length;
}

/* §6 example pairs. pa = the profile's bytes (extracted from docs/profiles/pa.md by script, not retyped; the profile is NFC).
   table: "worked" = the rows of the worked-examples table (IPA as printed there); "key" = examples in the key tables and rules 1-14.
   src: "zh" = the English string has this IPA in tools/content/zh; "pa.md" = IPA printed in §6; "own" = IPA written here in zh conventions (§6 gives none).
   erratum: §6 prints a form its own rules do not give from the IPA; "want" is the value the rules give (see PRON-TOOL.md, Decisions). */
const EXAMPLES = [
  {"en":"Hello.","ipa":"/həˈloʊ/","pa":"ਹˈਲੋ","table":"worked","src":"zh"},
  {"en":"Thank you.","ipa":"/ˈθæŋk ju/","pa":"ਥ਼ੈਂਕ ਯੂ","table":"worked","src":"zh"},
  {"en":"Nice to meet you.","ipa":"/ˈnaɪs tə ˈmiːt ju/","pa":"ਨਾਈਸ ਟ ਮੀਟ ਯੂ","table":"worked","src":"zh"},
  {"en":"See you later.","ipa":"/ˈsiː ju ˈleɪtər/","pa":"ਸੀ ਯੂ ˈਲੇਟਰ","table":"worked","src":"zh"},
  {"en":"Excuse me.","ipa":"/ɪkˈskjuːz mi/","pa":"ਇਕ੍ˈਸ੍ਕਿਊਜ਼ ਮੀ","table":"worked","src":"zh"},
  {"en":"I'm a student.","ipa":"/aɪm ə ˈstuːdnt/","pa":"ਆਈਮ ਅ ˈਸ੍ਟੂਡੰਟ","table":"worked","src":"zh"},
  {"en":"What do you do?","ipa":"/ˈwʌt də ju ˈduː/","pa":"ਵਟ ਡ ਯੂ ਡੂ","table":"worked","src":"zh"},
  {"en":"I work at a bank.","ipa":"/aɪ ˈwɜːrk ət ə ˈbæŋk/","pa":"ਆਈ ਵਰ੍ਕ ਅਟ ਅ ਬੈਂਕ","table":"worked","src":"zh"},
  {"en":"How much is this?","ipa":"/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/","pa":"ਹਾਊ ਮਚ ਇਜ਼ ਦ਼ਿਸ","table":"worked","src":"zh"},
  {"en":"I don't understand.","ipa":"/aɪ ˈdoʊnt ˌʌndərˈstænd/","pa":"ਆਈ ਡੋਂਟ ਅੰਡਰ੍ˈਸ੍ਟੈਂਡ","table":"worked","src":"zh"},
  {"en":"I have a dog. The dog is so cute.","ipa":"/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/","pa":"ਆਈ ਹੈਵ਼ ਅ ਡੌਗ। ਦ਼ ਡੌਗ ਇਜ਼ ਸੋ ਕਿਊਟ","table":"worked","src":"zh"},
  {"en":"I learned a lot at school.","ipa":"/aɪ ˈlɜːrnd ə ˈlɑːt ət ˈskuːl/","pa":"ਆਈ ਲਰ੍ਨ੍ਡ ਅ ਲਾਟ ਅਟ ਸ੍ਕੂਲ","table":"worked","src":"zh"},
  {"en":"I've worked here since 2020.","ipa":"/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/","pa":"ਆਈਵ਼ ਵਰ੍ਕ੍ਟ ਹਿਰ ਸਿਨ੍ਸ ˈਟ੍ਵੇਂਟੀ ˈਟ੍ਵੇਂਟੀ","table":"worked","src":"zh"},
  {"en":"think","ipa":"/ˈθɪŋk/","pa":"ਥ਼ਿੰਕ","table":"worked","src":"zh"},
  {"en":"sink","ipa":"/ˈsɪŋk/","pa":"ਸਿੰਕ","table":"worked","src":"zh"},
  {"en":"three","ipa":"/ˈθriː/","pa":"ਥ਼੍ਰੀ","table":"worked","src":"zh"},
  {"en":"tree","ipa":"/ˈtriː/","pa":"ਟ੍ਰੀ","table":"worked","src":"zh"},
  {"en":"this","ipa":"/ˈðɪs/","pa":"ਦ਼ਿਸ","table":"worked","src":"zh"},
  {"en":"very","ipa":"/ˈveri/","pa":"ˈਵ਼ੇਰੀ","table":"worked","src":"zh"},
  {"en":"wary","ipa":"/ˈweri/","pa":"ˈਵੇਰੀ","table":"worked","src":"zh"},
  {"en":"berry","ipa":"/ˈberi/","pa":"ˈਬੇਰੀ","table":"worked","src":"zh"},
  {"en":"vest","ipa":"/ˈvest/","pa":"ਵ਼ੇਸ੍ਟ","table":"worked","src":"zh"},
  {"en":"west","ipa":"/ˈwest/","pa":"ਵੇਸ੍ਟ","table":"worked","src":"zh"},
  {"en":"vote","ipa":"/ˈvoʊt/","pa":"ਵ਼ੋਟ","table":"worked","src":"zh"},
  {"en":"boat","ipa":"/ˈboʊt/","pa":"ਬੋਟ","table":"worked","src":"zh"},
  {"en":"bad","ipa":"/ˈbæd/","pa":"ਬੈਡ","table":"worked","src":"zh"},
  {"en":"bed","ipa":"/ˈbed/","pa":"ਬੇਡ","table":"worked","src":"zh"},
  {"en":"coffee","ipa":"/ˈkɔːfi/","pa":"ˈਕੌਫ਼ੀ","table":"worked","src":"zh"},
  {"en":"copy","ipa":"/ˈkɑːpi/","pa":"ˈਕਾਪੀ","table":"worked","src":"zh"},
  {"en":"walk","ipa":"/ˈwɔːk/","pa":"ਵੌਕ","table":"worked","src":"zh"},
  {"en":"work","ipa":"/ˈwɜːrk/","pa":"ਵਰ੍ਕ","table":"worked","src":"zh"},
  {"en":"leave","ipa":"/ˈliːv/","pa":"ਲੀਵ਼","table":"worked","src":"zh"},
  {"en":"live","ipa":"/ˈlɪv/","pa":"ਲਿਵ਼","table":"worked","src":"zh"},
  {"en":"rice","ipa":"/ˈraɪs/","pa":"ਰਾਈਸ","table":"worked","src":"zh"},
  {"en":"lice","ipa":"/ˈlaɪs/","pa":"ਲਾਈਸ","table":"worked","src":"zh"},
  {"en":"right","ipa":"/ˈraɪt/","pa":"ਰਾਈਟ","table":"worked","src":"zh"},
  {"en":"light","ipa":"/ˈlaɪt/","pa":"ਲਾਈਟ","table":"worked","src":"zh"},
  {"en":"fan","ipa":"/ˈfæn/","pa":"ਫ਼ੈਨ","table":"worked","src":"zh"},
  {"en":"pan","ipa":"/ˈpæn/","pa":"ਪੈਨ","table":"worked","src":"zh"},
  {"en":"beach","ipa":"/ˈbiːtʃ/","pa":"ਬੀਚ","table":"worked","src":"zh"},
  {"en":"banana","ipa":"/bəˈnænə/","pa":"ਬˈਨੈਨਾ","table":"worked","src":"zh"},
  {"en":"hotel","ipa":"/hoʊˈtel/","pa":"ਹੋˈਟੇਲ","table":"worked","src":"zh"},
  {"en":"milk","ipa":"/ˈmɪlk/","pa":"ਮਿਲ੍ਕ","table":"worked","src":"zh"},
  {"en":"McDonald's","ipa":"/məkˈdɑːnldz/","pa":"ਮਕ੍ˈਡਾਨਲ੍ਡ੍ਜ਼","table":"worked","src":"zh"},
  {"en":"friends","ipa":"/ˈfrendz/","pa":"ਫ਼੍ਰੇਂਡ੍ਜ਼","table":"worked","src":"zh"},
  {"en":"asked","ipa":"/ˈæskt/","pa":"ਐਸ੍ਕ੍ਟ","table":"worked","src":"zh"},
  {"en":"months","ipa":"/ˈmʌnθs/","pa":"ਮਨ੍ਥ਼੍ਸ","table":"worked","src":"zh"},
  {"en":"vine","ipa":"/ˈvaɪn/","pa":"ਵ਼ਾਈਨ","table":"worked","src":"pa.md"},
  {"en":"wine","ipa":"/ˈwaɪn/","pa":"ਵਾਈਨ","table":"worked","src":"pa.md"},
  {"en":"zoo","ipa":"/ˈzuː/","pa":"ਜ਼ੂ","table":"worked","src":"pa.md"},
  {"en":"Jew","ipa":"/ˈdʒuː/","pa":"ਜੂ","table":"worked","src":"pa.md"},
  {"en":"zero","ipa":"/ˈzɪroʊ/","pa":"ˈਜ਼ਿਰੋ","table":"worked","src":"pa.md"},
  {"en":"school","ipa":"/ˈskuːl/","pa":"ਸ੍ਕੂਲ","table":"worked","src":"pa.md"},
  {"en":"station","ipa":"/ˈsteɪʃn/","pa":"ˈਸ੍ਟੇਸ਼ਨ","table":"worked","src":"pa.md"},
  {"en":"street","ipa":"/ˈstriːt/","pa":"ਸ੍ਟ੍ਰੀਟ","table":"worked","src":"pa.md"},
  {"en":"film","ipa":"/ˈfɪlm/","pa":"ਫ਼ਿਲ੍ਮ","table":"worked","src":"pa.md"},
  {"en":"sport","ipa":"/ˈspɔːrt/","pa":"ਸ੍ਪੌਰ੍ਟ","table":"worked","src":"pa.md"},
  {"en":"pleasure","ipa":"/ˈpleʒər/","pa":"ˈਪ੍ਲੇਜ਼ਰ","table":"worked","src":"pa.md"},
  {"en":"about","ipa":"/əˈbaʊt/","pa":"ਅˈਬਾਊਟ","table":"worked","src":"pa.md"},
  {"en":"photography","ipa":"/fəˈtɑːgrəfi/","pa":"ਫ਼ˈਟਾਗ੍ਰਫ਼ੀ","table":"worked","src":"pa.md"},
  {"en":"computer","ipa":"/kəmˈpjuːtər/","pa":"ਕੰˈਪਿਊਟਰ","table":"worked","src":"pa.md"},
  {"en":"ship / sheep","ipa":"/ˈʃɪp/ /ˈʃiːp/","pa":"ਸ਼ਿਪ / ਸ਼ੀਪ","table":"worked","src":"pa.md"},
  {"en":"full / fool","ipa":"/ˈfʊl/ /ˈfuːl/","pa":"ਫ਼ੁਲ / ਫ਼ੂਲ","table":"worked","src":"pa.md"},
  {"en":"My name is Simran.","ipa":"/maɪ ˈneɪm ɪz ˈsɪmrən/","pa":"ਮਾਈ ਨੇਮ ਇਜ਼ ˈਸਿਮ੍ਰਨ","table":"worked","src":"pa.md"},
  {"en":"I live in Ludhiana.","ipa":"/aɪ ˈlɪv ɪn ˌluːdiˈɑːnə/","pa":"ਆਈ ਲਿਵ਼ ਇਨ ਲੂਡੀˈਆਨਾ","table":"worked","src":"pa.md"},
  {"en":"Five hundred rupees.","ipa":"/ˈfaɪv ˈhʌndrəd ruːˈpiːz/","pa":"ਫ਼ਾਈਵ਼ ˈਹੰਡ੍ਰਡ ਰੂˈਪੀਜ਼","table":"worked","src":"pa.md"},
  {"en":"I've lived here since 2015.","ipa":"/aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd ˌfɪfˈtiːn/","pa":"ਆਈਵ਼ ਲਿਵ਼੍ਡ ਹਿਰ ਸਿਨ੍ਸ ਟੂ ˈਥ਼ਾਊਜ਼ੰਡ ਫ਼ਿਫ਼੍ˈਟੀਨ","table":"worked","src":"pa.md"},
  {"en":"How long have you been waiting?","ipa":"/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈweɪtɪŋ/","pa":"ਹਾਊ ਲੌਙ ਹਵ਼ ਯੂ ਬਿਨ ˈਵੇਟਿਙ","table":"worked","src":"pa.md"},
  {"en":"She is my sister.","ipa":"/ʃi ɪz maɪ ˈsɪstər/","pa":"ਸ਼ੀ ਇਜ਼ ਮਾਈ ˈਸਿਸ੍ਟਰ","table":"worked","src":"pa.md"},
  {"en":"fifteen / fifty","ipa":"/ˌfɪfˈtiːn/ /ˈfɪfti/","pa":"ਫ਼ਿਫ਼੍ˈਟੀਨ / ˈਫ਼ਿਫ਼੍ਟੀ","table":"worked","src":"pa.md"},
  {"en":"see","ipa":"/ˈsiː/","pa":"ਸੀ","table":"key","src":"own"},
  {"en":"me (weak)","ipa":"/mi/","pa":"ਮੀ","table":"key","src":"own"},
  {"en":"ship","ipa":"/ˈʃɪp/","pa":"ਸ਼ਿਪ","table":"key","src":"own"},
  {"en":"name","ipa":"/ˈneɪm/","pa":"ਨੇਮ","table":"key","src":"own"},
  {"en":"today","ipa":"/təˈdeɪ/","pa":"ਟˈਡੇ","table":"key","src":"own"},
  {"en":"apple","ipa":"/ˈæpl/","pa":"ˈਐਪਲ","table":"key","src":"own"},
  {"en":"cup","ipa":"/ˈkʌp/","pa":"ਕਪ","table":"key","src":"own"},
  {"en":"sofa","ipa":"/ˈsoʊfə/","pa":"ˈਸੋਫ਼ਾ","table":"key","src":"own"},
  {"en":"India","ipa":"/ˈɪndiə/","pa":"ˈਇੰਡੀਆ","table":"key","src":"own"},
  {"en":"hot","ipa":"/ˈhɑːt/","pa":"ਹਾਟ","table":"key","src":"own"},
  {"en":"father","ipa":"/ˈfɑːðər/","pa":"ˈਫ਼ਾਦ਼ਰ","table":"key","src":"own"},
  {"en":"talk","ipa":"/ˈtɔːk/","pa":"ਟੌਕ","table":"key","src":"own"},
  {"en":"dog","ipa":"/ˈdɔːg/","pa":"ਡੌਗ","table":"key","src":"own"},
  {"en":"go","ipa":"/ˈgoʊ/","pa":"ਗੋ","table":"key","src":"own"},
  {"en":"food","ipa":"/ˈfuːd/","pa":"ਫ਼ੂਡ","table":"key","src":"own"},
  {"en":"two","ipa":"/ˈtuː/","pa":"ਟੂ","table":"key","src":"own"},
  {"en":"you (weak)","ipa":"/ju/","pa":"ਯੂ","table":"key","src":"own"},
  {"en":"book","ipa":"/ˈbʊk/","pa":"ਬੁਕ","table":"key","src":"own"},
  {"en":"good","ipa":"/ˈgʊd/","pa":"ਗੁਡ","table":"key","src":"own"},
  {"en":"I","ipa":"/ˈaɪ/","pa":"ਆਈ","table":"key","src":"zh"},
  {"en":"time","ipa":"/ˈtaɪm/","pa":"ਟਾਈਮ","table":"key","src":"own"},
  {"en":"house","ipa":"/ˈhaʊs/","pa":"ਹਾਊਸ","table":"key","src":"own"},
  {"en":"now","ipa":"/ˈnaʊ/","pa":"ਨਾਊ","table":"key","src":"own"},
  {"en":"boy","ipa":"/ˈbɔɪ/","pa":"ਬੌਈ","table":"key","src":"own"},
  {"en":"noise","ipa":"/ˈnɔɪz/","pa":"ਨੌਈਜ਼","table":"key","src":"own"},
  {"en":"bird","ipa":"/ˈbɜːrd/","pa":"ਬਰ੍ਡ","table":"key","src":"own"},
  {"en":"water","ipa":"/ˈwɔːtər/","pa":"ˈਵੌਟਰ","table":"key","src":"own"},
  {"en":"here","ipa":"/ˈhɪr/","pa":"ਹਿਰ","table":"key","src":"own"},
  {"en":"there","ipa":"/ˈðer/","pa":"ਦ਼ੇਰ","table":"key","src":"own"},
  {"en":"sure","ipa":"/ˈʃʊr/","pa":"ਸ਼ੁਰ","table":"key","src":"own"},
  {"en":"car","ipa":"/ˈkɑːr/","pa":"ਕਾਰ","table":"key","src":"zh"},
  {"en":"door","ipa":"/ˈdɔːr/","pa":"ਡੌਰ","table":"key","src":"own"},
  {"en":"four","ipa":"/ˈfɔːr/","pa":"ਫ਼ੌਰ","table":"key","src":"own"},
  {"en":"pen","ipa":"/ˈpen/","pa":"ਪੇਨ","table":"key","src":"own"},
  {"en":"bag","ipa":"/ˈbæg/","pa":"ਬੈਗ","table":"key","src":"zh"},
  {"en":"day","ipa":"/ˈdeɪ/","pa":"ਡੇ","table":"key","src":"own"},
  {"en":"have","ipa":"/ˈhæv/","pa":"ਹੈਵ਼","table":"key","src":"own"},
  {"en":"twenty","ipa":"/ˈtwenti/","pa":"ˈਟ੍ਵੇਂਟੀ","table":"key","src":"own"},
  {"en":"the","ipa":"/ðə/","pa":"ਦ਼","table":"key","src":"own"},
  {"en":"bus","ipa":"/ˈbʌs/","pa":"ਬਸ","table":"key","src":"own"},
  {"en":"is","ipa":"/ɪz/","pa":"ਇਜ਼","table":"key","src":"own"},
  {"en":"she","ipa":"/ˈʃiː/","pa":"ਸ਼ੀ","table":"key","src":"own"},
  {"en":"measure","ipa":"/ˈmeʒər/","pa":"ˈਮੇਜ਼ਰ","table":"key","src":"own"},
  {"en":"usually","ipa":"/ˈjuːʒuəli/","pa":"ˈਯੂਜ਼ੂਅਲੀ","table":"key","src":"own"},
  {"en":"check","ipa":"/ˈtʃek/","pa":"ਚੇਕ","table":"key","src":"own"},
  {"en":"job","ipa":"/ˈdʒɑːb/","pa":"ਜਾਬ","table":"key","src":"own"},
  {"en":"behind","ipa":"/bɪˈhaɪnd/","pa":"ਬਿˈਹਾਈਂਡ","table":"key","src":"own"},
  {"en":"number","ipa":"/ˈnʌmbər/","pa":"ˈਨੰਬਰ","table":"key","src":"own"},
  {"en":"want","ipa":"/ˈwɑːnt/","pa":"ਵਾਂਟ","table":"key","src":"own"},
  {"en":"friend","ipa":"/ˈfrend/","pa":"ਫ਼੍ਰੇਂਡ","table":"key","src":"own"},
  {"en":"since","ipa":"/sɪns/","pa":"ਸਿਨ੍ਸ","table":"key","src":"own"},
  {"en":"English","ipa":"/ˈɪŋglɪʃ/","pa":"ˈਇੰਗ੍ਲਿਸ਼","table":"key","src":"own"},
  {"en":"sing","ipa":"/ˈsɪŋ/","pa":"ਸਿਙ","table":"key","src":"own"},
  {"en":"singing","ipa":"/ˈsɪŋɪŋ/","pa":"ˈਸਿਙਿਙ","table":"key","src":"own"},
  {"en":"yes","ipa":"/ˈjes/","pa":"ਯੇਸ","table":"key","src":"own"},
  {"en":"cute","ipa":"/ˈkjuːt/","pa":"ਕਿਊਟ","table":"key","src":"own"},
  {"en":"music","ipa":"/ˈmjuːzɪk/","pa":"ˈਮਿਊਜ਼ਿਕ","table":"key","src":"own"},
  {"en":"fifteen","ipa":"/ˌfɪfˈtiːn/","pa":"ਫ਼ਿਫ਼੍ˈਟੀਨ","table":"key","src":"own"},
  {"en":"idea","ipa":"/aɪˈdiːə/","pa":"ਆਈˈਡੀਆ","table":"key","src":"own"},
  {"en":"lived","ipa":"/ˈlɪvd/","pa":"ਲਿਵ਼੍ਡ","table":"key","src":"own"},
  {"en":"Excuse","ipa":"/ɪkˈskjuːz/","pa":"ਇਕ੍ˈਸ੍ਕਿਊਜ਼","table":"key","src":"own"},
  {"en":"hundred","ipa":"/ˈhʌndrəd/","pa":"ˈਹੰਡ੍ਰਡ","table":"key","src":"own"},
  {"en":"Canada","ipa":"/ˈkænədə/","pa":"ˈਕੈਨਡਾ","table":"key","src":"own"},
  {"en":"to (weak)","ipa":"/tə/","pa":"ਟ","table":"key","src":"own"},
  {"en":"a (weak)","ipa":"/ə/","pa":"ਅ","table":"key","src":"own"},
  {"en":"people","ipa":"/ˈpiːpl/","pa":"ˈਪੀਪਲ","table":"key","src":"own"},
  {"en":"seven","ipa":"/ˈsevn/","pa":"ˈਸੇਵ਼ਨ","table":"key","src":"own"},
  {"en":"eaten","ipa":"/ˈiːtn/","pa":"ˈਈਟਨ","table":"key","src":"own"},
  {"en":"table","ipa":"/ˈteɪbl/","pa":"ˈਟੇਬਲ","table":"key","src":"own"},
  {"en":"isn't","ipa":"/ˈɪznt/","pa":"ˈਇਜ਼ੰਟ","table":"key","src":"own"},
  {"en":"didn't","ipa":"/ˈdɪdnt/","pa":"ˈਡਿਡੰਟ","table":"key","src":"own"},
  {"en":"thousand","ipa":"/ˈθaʊznd/","pa":"ˈਥ਼ਾਊਜ਼ੰਡ","table":"key","src":"own"},
  {"en":"important","ipa":"/ɪmˈpɔːrtnt/","pa":"ਇੰˈਪੌਰ੍ਟੰਟ","table":"key","src":"own"},
  {"en":"student","ipa":"/ˈstuːdnt/","pa":"ˈਸ੍ਟੂਡੰਟ","table":"key","src":"own"},
  {"en":"lamp","ipa":"/ˈlæmp/","pa":"ਲੈਂਪ","table":"key","src":"own"},
  {"en":"change","ipa":"/ˈtʃeɪndʒ/","pa":"ਚੇਂਜ","table":"key","src":"own"},
  {"en":"lunch","ipa":"/ˈlʌntʃ/","pa":"ਲੰਚ","table":"key","src":"own"},
  {"en":"Punjab","ipa":"/pʌnˈdʒɑːb/","pa":"ਪੰˈਜਾਬ","table":"key","src":"own"},
  {"en":"find","ipa":"/ˈfaɪnd/","pa":"ਫ਼ਾਈਂਡ","table":"key","src":"own"},
  {"en":"don't","ipa":"/ˈdoʊnt/","pa":"ਡੋਂਟ","table":"key","src":"own"},
  {"en":"bank","ipa":"/ˈbæŋk/","pa":"ਬੈਂਕ","table":"key","src":"own"},
  {"en":"learned","ipa":"/ˈlɜːrnd/","pa":"ਲਰ੍ਨ੍ਡ","table":"key","src":"own"},
  {"en":"few","ipa":"/ˈfjuː/","pa":"ਫ਼ਿਊ","table":"key","src":"own"},
  {"en":"million","ipa":"/ˈmɪljən/","pa":"ˈਮਿਲ੍ਯਨ","table":"key","src":"own"},
  {"en":"I'm","ipa":"/aɪm/","pa":"ਆਈਮ","table":"key","src":"own"},
  {"en":"it's","ipa":"/ɪts/","pa":"ਇਟ੍ਸ","table":"key","src":"own"},
  {"en":"I've","ipa":"/aɪv/","pa":"ਆਈਵ਼","table":"key","src":"own"},
  {"en":"I'll","ipa":"/aɪl/","pa":"ਆਈਲ","table":"key","src":"own"},
  {"en":"can't","ipa":"/ˈkænt/","pa":"ਕੈਂਟ","table":"key","src":"own"},
  {"en":"that's","ipa":"/ˈðæts/","pa":"ਦ਼ੈਟ੍ਸ","table":"key","src":"own"},
  {"en":"there's","ipa":"/ðerz/","pa":"ਦ਼ੇਰ੍ਜ਼","table":"key","src":"own"},
  {"en":"what's","ipa":"/ˈwʌts/","pa":"ਵਟ੍ਸ","table":"key","src":"own"},
  {"en":"happy","ipa":"/ˈhæpi/","pa":"ˈਹੈਪੀ","table":"key","src":"own"},
  {"en":"Simran","ipa":"/ˈsɪmrən/","pa":"ˈਸਿਮ੍ਰਨ","table":"key","src":"own"},
  {"en":"cats","ipa":"/ˈkæts/","pa":"ਕੈਟ੍ਸ","table":"key","src":"own"},
  {"en":"dogs","ipa":"/ˈdɔːgz/","pa":"ਡੌਗ੍ਜ਼","table":"key","src":"own"},
  {"en":"buses","ipa":"/ˈbʌsɪz/","pa":"ˈਬਸਿਜ਼","table":"key","src":"own"},
  {"en":"watched","ipa":"/ˈwɑːtʃt/","pa":"ਵਾਚ੍ਟ","table":"key","src":"own"},
  {"en":"played","ipa":"/ˈpleɪd/","pa":"ਪ੍ਲੇਡ","table":"key","src":"own"},
  {"en":"wanted","ipa":"/ˈwɑːntɪd/","pa":"ˈਵਾਂਟਿਡ","table":"key","src":"own"},
  {"en":"family","ipa":"/ˈfæməli/","pa":"ˈਫ਼ੈਮਲੀ","table":"key","src":"own"},
  {"en":"get","ipa":"/ˈget/","pa":"ਗੇਟ","table":"key","src":"own"},
  {"en":"gate","ipa":"/ˈgeɪt/","pa":"ਗੇਟ","table":"key","src":"own"},
  {"en":"A","ipa":"/ˈeɪ/","pa":"ਏ","table":"key","src":"zh"},
  {"en":"B","ipa":"/ˈbiː/","pa":"ਬੀ","table":"key","src":"zh"},
  {"en":"C","ipa":"/ˈsiː/","pa":"ਸੀ","table":"key","src":"zh"},
  {"en":"D","ipa":"/ˈdiː/","pa":"ਡੀ","table":"key","src":"zh"},
  {"en":"E","ipa":"/ˈiː/","pa":"ਈ","table":"key","src":"zh"},
  {"en":"F","ipa":"/ˈef/","pa":"ਏਫ਼","table":"key","src":"zh"},
  {"en":"G","ipa":"/ˈdʒiː/","pa":"ਜੀ","table":"key","src":"zh"},
  {"en":"H","ipa":"/ˈeɪtʃ/","pa":"ਏਚ","table":"key","src":"zh"},
  {"en":"J","ipa":"/ˈdʒeɪ/","pa":"ਜੇ","table":"key","src":"zh"},
  {"en":"K","ipa":"/ˈkeɪ/","pa":"ਕੇ","table":"key","src":"zh"},
  {"en":"L","ipa":"/ˈel/","pa":"ਏਲ","table":"key","src":"zh"},
  {"en":"M","ipa":"/ˈem/","pa":"ਏਮ","table":"key","src":"zh"},
  {"en":"N","ipa":"/ˈen/","pa":"ਏਨ","table":"key","src":"zh"},
  {"en":"O","ipa":"/ˈoʊ/","pa":"ਓ","table":"key","src":"zh"},
  {"en":"P","ipa":"/ˈpiː/","pa":"ਪੀ","table":"key","src":"zh"},
  {"en":"Q","ipa":"/ˈkjuː/","pa":"ਕਿਊ","table":"key","src":"zh"},
  {"en":"R","ipa":"/ˈɑːr/","pa":"ਆਰ","table":"key","src":"zh"},
  {"en":"S","ipa":"/ˈes/","pa":"ਏਸ","table":"key","src":"zh"},
  {"en":"T","ipa":"/ˈtiː/","pa":"ਟੀ","table":"key","src":"zh"},
  {"en":"U","ipa":"/ˈjuː/","pa":"ਯੂ","table":"key","src":"zh"},
  {"en":"V","ipa":"/ˈviː/","pa":"ਵ਼ੀ","table":"key","src":"zh"},
  {"en":"W","ipa":"/ˈdʌbəljuː/","pa":"ˈਡਬ੍ਲਿਊ","table":"key","src":"zh","erratum":"zh writes W with ə (/ˈdʌbəljuː/); rule 5 makes ə after a consonant the bare letter, so no halant on the b. §6 rules 8 and 11 print the form /ˈdʌbljuː/ would give","want":"ˈਡਬਲਿਊ"},
  {"en":"X","ipa":"/ˈeks/","pa":"ਏਕ੍ਸ","table":"key","src":"zh"},
  {"en":"Y","ipa":"/ˈwaɪ/","pa":"ਵਾਈ","table":"key","src":"zh"},
  {"en":"Z","ipa":"/ˈziː/","pa":"ਜ਼ੀ","table":"key","src":"zh"},
  {"en":"an (weak)","ipa":"/ən/","pa":"ਅਨ","table":"key","src":"own"},
  {"en":"the (weak)","ipa":"/ðə/","pa":"ਦ਼","table":"key","src":"own"},
  {"en":"the (before a vowel)","ipa":"/ði/","pa":"ਦ਼ੀ","table":"key","src":"own"},
  {"en":"to (before a vowel)","ipa":"/tu/","pa":"ਟੂ","table":"key","src":"own"},
  {"en":"to (strong)","ipa":"/tuː/","pa":"ਟੂ","table":"key","src":"own"},
  {"en":"for (weak)","ipa":"/fər/","pa":"ਫ਼ਰ","table":"key","src":"own"},
  {"en":"from (weak)","ipa":"/frəm/","pa":"ਫ਼੍ਰਮ","table":"key","src":"own"},
  {"en":"at (weak)","ipa":"/ət/","pa":"ਅਟ","table":"key","src":"own"},
  {"en":"of (weak)","ipa":"/əv/","pa":"ਅਵ਼","table":"key","src":"own"},
  {"en":"for (strong)","ipa":"/fɔːr/","pa":"ਫ਼ੌਰ","table":"key","src":"own"},
  {"en":"from (strong)","ipa":"/frʌm/","pa":"ਫ਼੍ਰਮ","table":"key","src":"own"},
  {"en":"at (strong)","ipa":"/æt/","pa":"ਐਟ","table":"key","src":"own"},
  {"en":"and (weak)","ipa":"/ənd/","pa":"ਅੰਡ","table":"key","src":"own"},
  {"en":"or (weak)","ipa":"/ər/","pa":"ਅਰ","table":"key","src":"own"},
  {"en":"but (weak)","ipa":"/bət/","pa":"ਬਟ","table":"key","src":"own"},
  {"en":"can (weak)","ipa":"/kən/","pa":"ਕਨ","table":"key","src":"own"},
  {"en":"could (weak)","ipa":"/kəd/","pa":"ਕਡ","table":"key","src":"own"},
  {"en":"should (weak)","ipa":"/ʃəd/","pa":"ਸ਼ਡ","table":"key","src":"own"},
  {"en":"would (weak)","ipa":"/wəd/","pa":"ਵਡ","table":"key","src":"own"},
  {"en":"do (aux)","ipa":"/də/","pa":"ਡ","table":"key","src":"own"},
  {"en":"does (aux)","ipa":"/dəz/","pa":"ਡਜ਼","table":"key","src":"own"},
  {"en":"did (aux)","ipa":"/dɪd/","pa":"ਡਿਡ","table":"key","src":"own"},
  {"en":"have (aux)","ipa":"/həv/","pa":"ਹਵ਼","table":"key","src":"own"},
  {"en":"has (aux)","ipa":"/həz/","pa":"ਹਜ਼","table":"key","src":"own"},
  {"en":"had (aux)","ipa":"/həd/","pa":"ਹਡ","table":"key","src":"own"},
  {"en":"do (main)","ipa":"/ˈduː/","pa":"ਡੂ","table":"key","src":"own"},
  {"en":"have (main)","ipa":"/ˈhæv/","pa":"ਹੈਵ਼","table":"key","src":"own"},
  {"en":"have to","ipa":"/ˈhæf tə/","pa":"ਹੈਫ਼ ਟ","table":"key","src":"own"},
  {"en":"has to","ipa":"/ˈhæs tə/","pa":"ਹੈਸ ਟ","table":"key","src":"own"},
  {"en":"your","ipa":"/jʊr/","pa":"ਯੁਰ","table":"key","src":"own"},
  {"en":"you're","ipa":"/jʊr/","pa":"ਯੁਰ","table":"key","src":"own"},
  {"en":"you (strong)","ipa":"/ˈjuː/","pa":"ਯੂ","table":"key","src":"own"},
  {"en":"he (weak)","ipa":"/hi/","pa":"ਹੀ","table":"key","src":"own"},
  {"en":"she (weak)","ipa":"/ʃi/","pa":"ਸ਼ੀ","table":"key","src":"own"},
  {"en":"we (weak)","ipa":"/wi/","pa":"ਵੀ","table":"key","src":"own"},
  {"en":"that (relative)","ipa":"/ðət/","pa":"ਦ਼ਟ","table":"key","src":"own"},
  {"en":"that (demonstrative)","ipa":"/ˈðæt/","pa":"ਦ਼ੈਟ","table":"key","src":"own"},
  {"en":"there (existential)","ipa":"/ðer/","pa":"ਦ਼ੇਰ","table":"key","src":"own"},
  {"en":"there (adverb)","ipa":"/ˈðer/","pa":"ਦ਼ੇਰ","table":"key","src":"own"},
  {"en":"full","ipa":"/ˈfʊl/","pa":"ਫ਼ੁਲ","table":"key","src":"own"},
  {"en":"fool","ipa":"/ˈfuːl/","pa":"ਫ਼ੂਲ","table":"key","src":"own"},
  {"en":"sheep","ipa":"/ˈʃiːp/","pa":"ਸ਼ੀਪ","table":"key","src":"own"}
];

/* inputs the converter must refuse */
const REFUSE = [
  ['/ˈɡoʊ/', 'script ɡ (U+0261) instead of ASCII g'], ['/ˈhɒt/', 'British ɒ'], ['/ˈwɔtər/', 'ɔ without ː'], ['/ˈfɑðər/', 'ɑ without ː'],
  ['/ˈbɜrd/', 'ɜ without ː'], ['/ˈbʌɾər/', 'flap symbol'], ['/ˈwɔːtɚ/', 'ɚ'], ['/ˈhot/', 'o without ʊ'], ['/ˈkat/', 'a outside aɪ / aʊ'],
  ['/ˈwɔ:tər/', 'ASCII colon instead of ː'], ["/'wɔːtər/", 'apostrophe instead of ˈ'], ['hello', 'no slashes'], ['ˈwɔːtər', 'IPA without slashes'],
  ['/ˈwɔːtər/ extra', 'text outside the slashes'], ['/ˈHaɪ/', 'capital letter'], ['/ˈtuː 2/', 'digit'], ['/ˈhaɪ, ˈðer/', 'punctuation'],
  ['/ˈ/', 'dangling ˈ'], ['/ˈhaɪˈ/', 'ˈ at the end of a word'], ['/ˈˈhaɪ/', 'double ˈ'], ['/ˈhaʊ ‖ /', 'empty sentence'], ['//', 'empty group'],
  ['/ˈŋɑː/', 'ŋ at the start of a word'], ['/ˈnjuːw/', 'w with no vowel after it'], ['/ˈbɔɪj/', 'j with no vowel after it'],
  ['/' + c(0x0A38, 0x0A40) + '/', 'Gurmukhi in the input'], ['/ˈwɔː' + c(0x200D) + 'tər/', 'ZWJ in the input'], ['/ˈkæfe' + c(0x0301) + '/', 'combining accent']
];

function selftest() {
  let bad = 0, err = 0; const n = { worked: 0, key: 0 };
  for (const e of EXAMPLES) {
    let got; try { got = ipaToPa(e.ipa); } catch (x) { got = 'ERROR ' + x.message; }
    const want = e.erratum ? e.want : e.pa;
    if (got !== want) { bad++; console.log('FAIL  ' + e.en + '  ' + e.ipa + '\n      want ' + want + '\n      got  ' + got); }
    else if (e.erratum) { err++; console.log('ERRATUM  ' + e.en + '  ' + e.ipa + ': §6 prints «' + e.pa + '», the rules give «' + got + '» (' + e.erratum + ')'); }
    else n[e.table]++;
  }
  let rbad = 0;
  for (const [ipa, why] of REFUSE) { let ok = false; try { ipaToPa(ipa); } catch (x) { ok = true; } if (!ok) { rbad++; console.log('FAIL  not refused: ' + ipa + ' (' + why + ')'); } }
  const tot = t => EXAMPLES.filter(e => e.table === t).length;
  console.log((bad || rbad ? 'FAILED: ' + (bad + rbad) + ' mismatches; ' : 'ok: ') + (EXAMPLES.length - err - bad) + '/' + EXAMPLES.length + ' §6 example pairs match §6 as printed (worked examples ' +
    n.worked + '/' + tot('worked') + ', key and rules ' + n.key + '/' + tot('key') + ')' + (err ? '; ' + err + ' differ from §6 as printed (erratum, rule value checked)' : '') + '; ' + (REFUSE.length - rbad) + '/' + REFUSE.length + ' bad inputs refused');
  return bad === 0 && rbad === 0;
}

module.exports = { ipaToPa, convert, zhPairs };

if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--selftest') process.exit(selftest() ? 0 : 1);
  if (a[0] === '--lookup') process.exit(buildLookup(true) ? 0 : 1);
  if (!a.length) { console.error('usage: node tools/content/pa/pron_pa.js "<ipa>" | --selftest | --lookup'); process.exit(2); }
  try { const r = convert(a.join(' ')); r.warnings.forEach(w => console.error('WARNING: ' + w)); console.log(r.pa); } catch (x) { console.error(x.message); process.exit(1); }
}
