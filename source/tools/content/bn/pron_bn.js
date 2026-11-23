/* bn-en pronunciation aid: zh-format IPA -> Bengali-script respelling (docs/profiles/bn.md §6).
   usage: node tools/content/bn/pron_bn.js "<ipa>"     print the respelling
          node tools/content/bn/pron_bn.js --selftest  check every §6 example pair; exit 1 on a mismatch
          node tools/content/bn/pron_bn.js --lookup    rebuild pron_lookup.json from tools/content/zh (decks, {{ex}} rows, idioms)
   Input: zh conventions (tools/content/zh/PRON-RULES.md): one or more /…/ groups, words split by spaces, ˈ ˌ, ‖ between sentences.
   Every output is NFC and is tested against profile.json pronPattern; an unknown symbol or a failing output throws.
   Decisions the profile leaves open are listed in PRON-TOOL.md under "Decisions". */
'use strict';
const fs = require('fs'), path = require('path');
const PROFILE = JSON.parse(fs.readFileSync(path.join(__dirname, 'profile.json'), 'utf8'));
const PRON_RE = new RegExp(PROFILE.pronPattern, 'u');

const NUK = '়', HAS = '্', ANUS = 'ং', ZWJ = '‍', ZWNJ = '‌';
const YY = 'য' + NUK;            /* য় as য + nukta (the NFC form, §2) */
const W = 'ও' + YY;              /* ওয় */
/* consonants: IPA -> letter (dotted letters as base + U+09BC). w, j and ŋ are handled in convWord. */
const CONS = {
  p: 'প', b: 'ব', t: 'ট', d: 'ড', k: 'ক', g: 'গ',
  f: 'ফ', v: 'ভ' + NUK, 'θ': 'থ' + NUK, 'ð': 'দ' + NUK,
  s: 'স', z: 'জ' + NUK, 'ʃ': 'শ', 'ʒ': 'ঝ' + NUK, 'tʃ': 'চ', 'dʒ': 'জ',
  h: 'হ', m: 'ম', n: 'ন', l: 'ল', r: 'র', 'ŋ': 'ঙ', w: W, j: YY
};
/* vowels: IPA -> [independent, sign]; '' sign = the inherent vowel (THOUGHT) */
const AE = HAS + 'যা';      /* ্যা */
const VOW = {
  'iː': ['ঈ', 'ী'], 'ɪ': ['ই', 'ি'], i: ['ই', 'ি'],
  'uː': ['ঊ', 'ূ'], 'ʊ': ['উ', 'ু'], u: ['উ', 'ু'],
  e: ['এ', 'ে'], 'eɪ': ['এই', 'েই'], 'æ': ['অ' + AE, AE],
  'ʌ': ['আ', 'া'], 'ə': ['আ', 'া'], 'ɜː': ['আ', 'া'],
  'ɑː': ['আː', 'াː'], 'ɔː': ['অ', ''], 'oʊ': ['ঔ', 'ৌ'],
  'aɪ': ['আই', 'াই'], 'aʊ': ['আউ', 'াউ'], 'ɔɪ': ['অই', 'ই']
};
const SYMS = [...Object.keys(VOW), ...Object.keys(CONS), 'ˈ', 'ˌ'].sort((a, b) => b.length - a.length);

function tokenize(word) {
  const out = [];
  for (let i = 0; i < word.length;) {
    const s = SYMS.find(x => word.startsWith(x, i));
    if (!s) throw new Error('ipaToBn: unknown symbol «' + word[i] + '» (U+' + word.codePointAt(i).toString(16).toUpperCase().padStart(4, '0') + ') in /' + word + '/');
    out.push(s in VOW ? { t: 'V', k: s } : s in CONS ? { t: 'C', k: s } : { t: 'S', primary: s === 'ˈ' });
    i += s.length;
  }
  return out;
}

function convWord(word) {
  const seg = tokenize(word);
  const ph = seg.filter(x => x.t !== 'S');
  if (!ph.length) throw new Error('ipaToBn: empty word /' + word + '/');
  const bad = m => { throw new Error('ipaToBn: ' + m + ' in /' + word + '/'); };
  /* rule 5: syllabic l / n (zh PRON-RULES A4) = l or n after a consonant other than r (and other than w / j), not followed by a vowel -> া + ল / ন */
  ph.forEach((x, i) => {
    const p = ph[i - 1], n = ph[i + 1];
    if (x.t === 'C' && (x.k === 'l' || x.k === 'n') && p && p.t === 'C' && !'rwj'.includes(p.k) && !p.syl && !(n && n.t === 'V')) x.syl = true;
  });
  /* rule 2: every ˈ copied, every ˌ dropped */
  const s = seg.filter(x => x.t !== 'S' || x.primary);
  const nVow = ph.filter(x => x.t === 'V' || x.syl).length;
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const x = s[i], prev = s[i - 1], next = s[i + 1];
    if (x.t === 'S') {
      if (!next) bad('dangling ˈ');
      if (next.t === 'S') bad('double ˈ');
      out += 'ˈ'; continue;
    }
    const afterC = !!prev && prev.t === 'C';           /* directly after a consonant letter (no ˈ between) */
    if (x.t === 'V') {
      /* rule 4: a word-final THOUGHT vowel after a consonant would leave a bare last consonant, which is read with no vowel.
         Only a word with no other vowel may end that way (saw ˈস). */
      if (x.k === 'ɔː' && afterC && !next && nVow > 1) bad('word-final ɔː after a consonant in a word with another vowel cannot be written (rule 4)');
      if (x.k === 'æ' && afterC && prev.k === 'r') out += ZWJ;      /* rule 9: র + ZWJ + ্যা */
      /* rule 3: sign after a consonant; independent letter at the word start, after a vowel, or after ˈ */
      out += afterC ? VOW[x.k][1] : VOW[x.k][0];
      continue;
    }
    /* consonant */
    if (x.syl) out += 'া';                              /* rule 5 */
    if (x.k === 'j') {
      /* ইয় + sign; ইউ / ইঊ with the u-vowels; ি instead of ই directly after a consonant */
      if (!next || next.t !== 'V') bad('j with no vowel after it');
      out += afterC ? 'ি' : 'ই';
      if (next.k === 'uː' || next.k === 'ʊ' || next.k === 'u') { out += VOW[next.k][0]; i++; }
      else out += YY;
      continue;
    }
    if (x.k === 'w' && (!next || next.t !== 'V')) bad('w with no vowel after it');
    if (x.k === 'ŋ') {
      const n2 = s.slice(i + 1).find(y => y.t !== 'S');
      if (!n2 || (n2.t === 'C' && n2.k !== 'j')) {     /* ং before a consonant or at the end; ঙ before a vowel */
        if (!prev || prev.t === 'S') bad('ŋ at the start of a word or after ˈ');
        out += ANUS; continue;
      }
    }
    out += CONS[x.k];
    if (!next || next.t === 'V') continue;              /* last consonant: bare; before a vowel: the sign follows */
    if (next.t === 'C' && next.syl) continue;           /* rule 5: া follows */
    if (next.t === 'C' && next.k === 'j') continue;     /* ি follows */
    /* rule 4: hasanta before another consonant, kept where ˈ splits a cluster, and before ˈ + vowel (the vowel is then independent) */
    out += HAS;
    /* rule 9: hasanta + ব takes ZWNJ, except after ম and ল */
    if (next.t === 'C' && next.k === 'b' && x.k !== 'm' && x.k !== 'l') out += ZWNJ;
  }
  return out;
}

/* convert without the pronPattern test (a weak form alone has no ˈ and cannot be a row) */
function convert(ipa) {
  if (typeof ipa !== 'string') throw new Error('ipaToBn: string expected');
  const src = ipa.normalize('NFC').trim();
  const groups = [];
  const rest = src.replace(/\/([^/]*)\//g, (m, g) => { groups.push(g); return ''; });
  if (!groups.length || rest.trim()) throw new Error('ipaToBn: expected /…/ groups, got «' + ipa + '»');
  const res = groups.map(g => {
    const sents = g.split('‖').map(t => t.trim());
    if (sents.some(t => !t)) throw new Error('ipaToBn: empty sentence in «' + ipa + '»');
    return sents.map(t => t.split(/\s+/).map(convWord).join(' ')).join('। ');
  }).join(' / ').normalize('NFC');
  if (/[\u09DC\u09DD\u09DF]/.test(res)) throw new Error('ipaToBn: precomposed nukta letter in «' + res + '»');
  return res;
}

function ipaToBn(ipa) {
  const res = convert(ipa);
  if (!PRON_RE.test(res)) throw new Error('ipaToBn: output fails pronPattern: «' + res + '» from «' + ipa + '»' + (res.includes('ˈ') ? '' : ' (no ˈ: every row needs one)'));
  return res;
}

/* zh rows: the same collection as hi/pron_check.js (deck cards, {{ex}} rows, idioms) */
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
    let bn; try { bn = ipaToBn(p.ipa); } catch (x) { failed.push(p.src + ' «' + p.en + '» ' + p.ipa + ': ' + x.message); continue; }
    if (p.en in L && L[p.en] !== bn) { conflicts.push('«' + p.en + '» ' + L[p.en] + ' || ' + bn); continue; }
    L[p.en] = bn;
  }
  if (write) fs.writeFileSync(path.join(__dirname, 'pron_lookup.json'), JSON.stringify(L, null, 2) + '\n');
  failed.forEach(l => console.log('FAILED   ' + l));
  conflicts.forEach(l => console.log('CONFLICT ' + l));
  console.log('lookup entries ' + Object.keys(L).length + ' · failed ' + failed.length + ' · conflicts ' + conflicts.length);
  return !failed.length && !conflicts.length;
}

/* §6 example pairs. bn = the profile's bytes (extracted from docs/profiles/bn.md by script, not retyped; the profile is NFC).
   table: "worked" = the 35 rows of the worked-examples table (IPA as printed there); "key" = examples in the key tables and rules 1-11;
   "collapses" = the 13 minimal pairs of the "Checked" line.
   src: "zh row" / "bn.md" = IPA printed in the worked table; "zh word" = every IPA word occurs in tools/content/zh; "own" = IPA written here in zh conventions. */
const EXAMPLES = [
  {"en":"Hello.","ipa":"/həˈloʊ/","bn":"হাˈলৌ","src":"zh row","table":"worked"},
  {"en":"How are you?","ipa":"/ˈhaʊ ər ju/","bn":"ˈহাউ আর ইউ","src":"zh row","table":"worked"},
  {"en":"Thank you.","ipa":"/ˈθæŋk ju/","bn":"ˈথ়্যাংক ইউ","src":"zh row","table":"worked"},
  {"en":"Nice to meet you.","ipa":"/ˈnaɪs tə ˈmiːt ju/","bn":"ˈনাইস টা ˈমীট ইউ","src":"zh row","table":"worked"},
  {"en":"Excuse me.","ipa":"/ɪkˈskjuːz mi/","bn":"ইক্ˈস্কিঊজ় মি","src":"zh row","table":"worked"},
  {"en":"It's cold today.","ipa":"/ɪts ˈkoʊld təˈdeɪ/","bn":"ইট্স ˈকৌল্ড টাˈডেই","src":"zh row","table":"worked"},
  {"en":"There's a cafe near here.","ipa":"/ðerz ə kæˈfeɪ nɪr ˈhɪr/","bn":"দ়ের্জ় আ ক্যাˈফেই নির ˈহির","src":"zh row","table":"worked"},
  {"en":"Can you close the door?","ipa":"/kən ju ˈkloʊz ðə ˈdɔːr/","bn":"কান ইউ ˈক্লৌজ় দ়া ˈডর","src":"zh row","table":"worked"},
  {"en":"I have two brothers.","ipa":"/aɪ ˈhæv ˈtuː ˈbrʌðərz/","bn":"আই ˈহ্যাভ় ˈটূ ˈব্রাদ়ার্জ়","src":"zh row","table":"worked"},
  {"en":"We watched a movie.","ipa":"/wi ˈwɑːtʃt ə ˈmuːvi/","bn":"ওয়ি ˈওয়াːচ্ট আ ˈমূভ়ি","src":"zh row","table":"worked"},
  {"en":"I have a dog. The dog is so cute.","ipa":"/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/","bn":"আই ˈহ্যাভ় আ ˈডগ। দ়া ˈডগ ইজ় ˈসৌ ˈকিঊট","src":"zh row","table":"worked"},
  {"en":"Could we get some water?","ipa":"/kəd wi ˈget ˈsʌm ˈwɔːtər/","bn":"কাড ওয়ি ˈগেট ˈসাম ˈওয়টার","src":"zh row","table":"worked"},
  {"en":"I'm a student.","ipa":"/aɪm ə ˈstuːdnt/","bn":"আইম আ ˈস্টূডান্ট","src":"zh row","table":"worked"},
  {"en":"Have you eaten yet?","ipa":"/həv ju ˈiːtn ˈjet/","bn":"হাভ় ইউ ˈঈটান ˈইয়েট","src":"zh row","table":"worked"},
  {"en":"How long have you been here?","ipa":"/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/","bn":"ˈহাউ ˈলং হাভ় ইউ বিন ˈহির","src":"zh row","table":"worked"},
  {"en":"We ran out of milk.","ipa":"/wi ˈræn ˈaʊt əv ˈmɪlk/","bn":"ওয়ি ˈর‍্যান ˈআউট আভ় ˈমিল্ক","src":"zh row","table":"worked"},
  {"en":"This is Mary and her husband.","ipa":"/ˈðɪs ɪz ˈmeri ənd hər ˈhʌzbənd/","bn":"ˈদ়িস ইজ় ˈমেরি আন্ড হার ˈহাজ়্‌বান্ড","src":"zh row","table":"worked"},
  {"en":"think / sink","ipa":"/ˈθɪŋk/ /ˈsɪŋk/","bn":"ˈথ়িংক / ˈসিংক","src":"zh row","table":"worked"},
  {"en":"three / tree","ipa":"/ˈθriː/ /ˈtriː/","bn":"ˈথ়্রী / ˈট্রী","src":"zh row","table":"worked"},
  {"en":"very / wary","ipa":"/ˈveri/ /ˈweri/","bn":"ˈভ়েরি / ˈওয়েরি","src":"zh row","table":"worked"},
  {"en":"vote / boat","ipa":"/ˈvoʊt/ /ˈboʊt/","bn":"ˈভ়ৌট / ˈবৌট","src":"zh row","table":"worked"},
  {"en":"bad / bed","ipa":"/ˈbæd/ /ˈbed/","bn":"ˈব্যাড / ˈবেড","src":"zh row","table":"worked"},
  {"en":"coffee / copy","ipa":"/ˈkɔːfi/ /ˈkɑːpi/","bn":"ˈকফি / ˈকাːপি","src":"zh row","table":"worked"},
  {"en":"leave / live","ipa":"/ˈliːv/ /ˈlɪv/","bn":"ˈলীভ় / ˈলিভ়","src":"zh row","table":"worked"},
  {"en":"fifteen / fifty","ipa":"/ˌfɪfˈtiːn/ /ˈfɪfti/","bn":"ফিফ্ˈটীন / ˈফিফ্টি","src":"zh row","table":"worked"},
  {"en":"months","ipa":"/ˈmʌnθs/","bn":"ˈমান্থ়্স","src":"zh row","table":"worked"},
  {"en":"zoo / Jew","ipa":"/ˈzuː/ /ˈdʒuː/","bn":"ˈজ়ূ / ˈজূ","src":"bn.md","table":"worked"},
  {"en":"vine / wine","ipa":"/ˈvaɪn/ /ˈwaɪn/","bn":"ˈভ়াইন / ˈওয়াইন","src":"bn.md","table":"worked"},
  {"en":"ship / sheep","ipa":"/ˈʃɪp/ /ˈʃiːp/","bn":"ˈশিপ / ˈশীপ","src":"bn.md","table":"worked"},
  {"en":"heart / hurt","ipa":"/ˈhɑːrt/ /ˈhɜːrt/","bn":"ˈহাːর্ট / ˈহার্ট","src":"bn.md","table":"worked"},
  {"en":"school","ipa":"/ˈskuːl/","bn":"ˈস্কূল","src":"bn.md","table":"worked"},
  {"en":"football","ipa":"/ˈfʊtbɔːl/","bn":"ˈফুট্‌বল","src":"bn.md","table":"worked"},
  {"en":"My name is Rafi.","ipa":"/maɪ ˈneɪm ɪz ˈrɑːfi/","bn":"মাই ˈনেইম ইজ় ˈরাːফি","src":"bn.md","table":"worked"},
  {"en":"I live in Dhaka.","ipa":"/aɪ ˈlɪv ɪn ˈdɑːkə/","bn":"আই ˈলিভ় ইন ˈডাːকা","src":"bn.md","table":"worked"},
  {"en":"Five hundred taka.","ipa":"/ˈfaɪv ˈhʌndrəd ˈtɑːkə/","bn":"ˈফাইভ় ˈহান্ড্রাড ˈটাːকা","src":"bn.md","table":"worked"},
  {"en":"see","ipa":"/ˈsiː/","bn":"ˈসী","src":"zh word","table":"key"},
  {"en":"leave","ipa":"/ˈliːv/","bn":"ˈলীভ়","src":"zh word","table":"key"},
  {"en":"live","ipa":"/ˈlɪv/","bn":"ˈলিভ়","src":"zh word","table":"key"},
  {"en":"very","ipa":"/ˈveri/","bn":"ˈভ়েরি","src":"zh word","table":"key"},
  {"en":"food","ipa":"/ˈfuːd/","bn":"ˈফূড","src":"own","table":"key"},
  {"en":"two","ipa":"/ˈtuː/","bn":"ˈটূ","src":"zh word","table":"key"},
  {"en":"book","ipa":"/ˈbʊk/","bn":"ˈবুক","src":"zh word","table":"key"},
  {"en":"good","ipa":"/ˈgʊd/","bn":"ˈগুড","src":"zh word","table":"key"},
  {"en":"bed","ipa":"/ˈbed/","bn":"ˈবেড","src":"zh word","table":"key"},
  {"en":"yes","ipa":"/ˈjes/","bn":"ˈইয়েস","src":"zh word","table":"key"},
  {"en":"name","ipa":"/ˈneɪm/","bn":"ˈনেইম","src":"zh word","table":"key"},
  {"en":"today","ipa":"/təˈdeɪ/","bn":"টাˈডেই","src":"zh word","table":"key"},
  {"en":"bad","ipa":"/ˈbæd/","bn":"ˈব্যাড","src":"zh word","table":"key"},
  {"en":"apple","ipa":"/ˈæpl/","bn":"ˈঅ্যাপাল","src":"zh word","table":"key"},
  {"en":"cup","ipa":"/ˈkʌp/","bn":"ˈকাপ","src":"zh word","table":"key"},
  {"en":"about","ipa":"/əˈbaʊt/","bn":"আˈবাউট","src":"zh word","table":"key"},
  {"en":"work","ipa":"/ˈwɜːrk/","bn":"ˈওয়ার্ক","src":"zh word","table":"key"},
  {"en":"hot","ipa":"/ˈhɑːt/","bn":"ˈহাːট","src":"zh word","table":"key"},
  {"en":"copy","ipa":"/ˈkɑːpi/","bn":"ˈকাːপি","src":"zh word","table":"key"},
  {"en":"car","ipa":"/ˈkɑːr/","bn":"ˈকাːর","src":"zh word","table":"key"},
  {"en":"talk","ipa":"/ˈtɔːk/","bn":"ˈটক","src":"own","table":"key"},
  {"en":"dog","ipa":"/ˈdɔːg/","bn":"ˈডগ","src":"zh word","table":"key"},
  {"en":"coffee","ipa":"/ˈkɔːfi/","bn":"ˈকফি","src":"zh word","table":"key"},
  {"en":"all","ipa":"/ˈɔːl/","bn":"ˈঅল","src":"zh word","table":"key"},
  {"en":"go","ipa":"/ˈgoʊ/","bn":"ˈগৌ","src":"zh word","table":"key"},
  {"en":"hotel","ipa":"/hoʊˈtel/","bn":"হৌˈটেল","src":"zh word","table":"key"},
  {"en":"OK","ipa":"/oʊˈkeɪ/","bn":"ঔˈকেই","src":"zh word","table":"key"},
  {"en":"I","ipa":"/aɪ/","bn":"আই","src":"zh word","table":"key"},
  {"en":"time","ipa":"/ˈtaɪm/","bn":"ˈটাইম","src":"zh word","table":"key"},
  {"en":"house","ipa":"/ˈhaʊs/","bn":"ˈহাউস","src":"own","table":"key"},
  {"en":"now","ipa":"/ˈnaʊ/","bn":"ˈনাউ","src":"zh word","table":"key"},
  {"en":"boy","ipa":"/ˈbɔɪ/","bn":"ˈবই","src":"zh word","table":"key"},
  {"en":"point","ipa":"/ˈpɔɪnt/","bn":"ˈপইন্ট","src":"own","table":"key"},
  {"en":"here","ipa":"/ˈhɪr/","bn":"ˈহির","src":"zh word","table":"key"},
  {"en":"there","ipa":"/ðer/","bn":"দ়ের","src":"zh word","table":"key"},
  {"en":"sure","ipa":"/ˈʃʊr/","bn":"ˈশুর","src":"zh word","table":"key"},
  {"en":"four","ipa":"/ˈfɔːr/","bn":"ˈফর","src":"zh word","table":"key"},
  {"en":"bird","ipa":"/ˈbɜːrd/","bn":"ˈবার্ড","src":"zh word","table":"key"},
  {"en":"water","ipa":"/ˈwɔːtər/","bn":"ˈওয়টার","src":"zh word","table":"key"},
  {"en":"pen","ipa":"/ˈpen/","bn":"ˈপেন","src":"zh word","table":"key"},
  {"en":"bag","ipa":"/ˈbæg/","bn":"ˈব্যাগ","src":"zh word","table":"key"},
  {"en":"day","ipa":"/ˈdeɪ/","bn":"ˈডেই","src":"zh word","table":"key"},
  {"en":"fan","ipa":"/ˈfæn/","bn":"ˈফ্যান","src":"zh word","table":"key"},
  {"en":"have","ipa":"/ˈhæv/","bn":"ˈহ্যাভ়","src":"zh word","table":"key"},
  {"en":"vote","ipa":"/ˈvoʊt/","bn":"ˈভ়ৌট","src":"zh word","table":"key"},
  {"en":"west","ipa":"/ˈwest/","bn":"ˈওয়েস্ট","src":"zh word","table":"key"},
  {"en":"we","ipa":"/wi/","bn":"ওয়ি","src":"zh word","table":"key"},
  {"en":"walk","ipa":"/ˈwɔːk/","bn":"ˈওয়ক","src":"zh word","table":"key"},
  {"en":"twenty","ipa":"/ˈtwenti/","bn":"ˈট্ওয়েন্টি","src":"zh word","table":"key"},
  {"en":"quick","ipa":"/ˈkwɪk/","bn":"ˈক্ওয়িক","src":"zh word","table":"key"},
  {"en":"think","ipa":"/ˈθɪŋk/","bn":"ˈথ়িংক","src":"zh word","table":"key"},
  {"en":"three","ipa":"/ˈθriː/","bn":"ˈথ়্রী","src":"zh word","table":"key"},
  {"en":"this","ipa":"/ˈðɪs/","bn":"ˈদ়িস","src":"zh word","table":"key"},
  {"en":"bus","ipa":"/ˈbʌs/","bn":"ˈবাস","src":"zh word","table":"key"},
  {"en":"zoo","ipa":"/ˈzuː/","bn":"ˈজ়ূ","src":"own","table":"key"},
  {"en":"dogs","ipa":"/ˈdɔːgz/","bn":"ˈডগ্জ়","src":"zh word","table":"key"},
  {"en":"she","ipa":"/ʃi/","bn":"শি","src":"zh word","table":"key"},
  {"en":"measure","ipa":"/ˈmeʒər/","bn":"ˈমেঝ়ার","src":"own","table":"key"},
  {"en":"check","ipa":"/ˈtʃek/","bn":"ˈচেক","src":"zh word","table":"key"},
  {"en":"job","ipa":"/ˈdʒɑːb/","bn":"ˈজাːব","src":"zh word","table":"key"},
  {"en":"rice","ipa":"/ˈraɪs/","bn":"ˈরাইস","src":"zh word","table":"key"},
  {"en":"long","ipa":"/ˈlɔːŋ/","bn":"ˈলং","src":"zh word","table":"key"},
  {"en":"English","ipa":"/ˈɪŋglɪʃ/","bn":"ˈইংগ্লিশ","src":"zh word","table":"key"},
  {"en":"singing","ipa":"/ˈsɪŋɪŋ/","bn":"ˈসিঙিং","src":"own","table":"key"},
  {"en":"year","ipa":"/ˈjɪr/","bn":"ˈইয়ির","src":"zh word","table":"key"},
  {"en":"cute","ipa":"/ˈkjuːt/","bn":"ˈকিঊট","src":"zh word","table":"key"},
  {"en":"menu","ipa":"/ˈmenjuː/","bn":"ˈমেনিঊ","src":"zh word","table":"key"},
  {"en":"million","ipa":"/ˈmɪljən/","bn":"ˈমিলিয়ান","src":"zh word","table":"key"},
  {"en":"New York","ipa":"/nuː ˈjɔːrk/","bn":"নূ ˈইয়র্ক","src":"own","table":"key"},
  {"en":"can","ipa":"/kən/","bn":"কান","src":"zh word","table":"key"},
  {"en":"but","ipa":"/bət/","bn":"বাট","src":"zh word","table":"key"},
  {"en":"street","ipa":"/ˈstriːt/","bn":"ˈস্ট্রীট","src":"zh word","table":"key"},
  {"en":"asked","ipa":"/ˈæskt/","bn":"ˈঅ্যাস্ক্ট","src":"zh word","table":"key"},
  {"en":"Excuse","ipa":"/ɪkˈskjuːz/","bn":"ইক্ˈস্কিঊজ়","src":"zh word","table":"key"},
  {"en":"saw","ipa":"/ˈsɔː/","bn":"ˈস","src":"zh word","table":"key"},
  {"en":"law","ipa":"/ˈlɔː/","bn":"ˈল","src":"own","table":"key"},
  {"en":"draw","ipa":"/ˈdrɔː/","bn":"ˈড্র","src":"own","table":"key"},
  {"en":"banana","ipa":"/bəˈnænə/","bn":"বাˈন্যানা","src":"zh word","table":"key"},
  {"en":"people","ipa":"/ˈpiːpl/","bn":"ˈপীপাল","src":"zh word","table":"key"},
  {"en":"seven","ipa":"/ˈsevn/","bn":"ˈসেভ়ান","src":"zh word","table":"key"},
  {"en":"station","ipa":"/ˈsteɪʃn/","bn":"ˈস্টেইশান","src":"zh word","table":"key"},
  {"en":"student","ipa":"/ˈstuːdnt/","bn":"ˈস্টূডান্ট","src":"zh word","table":"key"},
  {"en":"isn't","ipa":"/ˈɪznt/","bn":"ˈইজ়ান্ট","src":"zh word","table":"key"},
  {"en":"canceled","ipa":"/ˈkænsld/","bn":"ˈক্যান্সাল্ড","src":"zh word","table":"key"},
  {"en":"a","ipa":"/ə/","bn":"আ","src":"zh word","table":"key"},
  {"en":"an","ipa":"/ən/","bn":"আন","src":"zh word","table":"key"},
  {"en":"to","ipa":"/tə/","bn":"টা","src":"zh word","table":"key"},
  {"en":"for","ipa":"/fər/ /fɔːr/","bn":"ফার / ফর","src":"zh word","table":"key"},
  {"en":"from","ipa":"/frəm/","bn":"ফ্রাম","src":"zh word","table":"key"},
  {"en":"at","ipa":"/ət/ /æt/","bn":"আট / অ্যাট","src":"zh word","table":"key"},
  {"en":"could","ipa":"/kəd/","bn":"কাড","src":"zh word","table":"key"},
  {"en":"do","ipa":"/də/ /duː/","bn":"ডা / ডূ","src":"own","table":"key"},
  {"en":"does","ipa":"/dəz/","bn":"ডাজ়","src":"zh word","table":"key"},
  {"en":"have","ipa":"/həv/ /ˈhæv/","bn":"হাভ় / ˈহ্যাভ়","src":"zh word","table":"key"},
  {"en":"your","ipa":"/jʊr/","bn":"ইউর","src":"zh word","table":"key"},
  {"en":"he","ipa":"/hi/","bn":"হি","src":"zh word","table":"key"},
  {"en":"me","ipa":"/mi/ /ˈmiː/","bn":"মি / ˈমী","src":"zh word","table":"key"},
  {"en":"that","ipa":"/ðət/ /ˈðæt/","bn":"দ়াট / ˈদ়্যাট","src":"zh word","table":"key"},
  {"en":"was","ipa":"/wəz/","bn":"ওয়াজ়","src":"zh word","table":"key"},
  {"en":"were","ipa":"/wər/","bn":"ওয়ার","src":"zh word","table":"key"},
  {"en":"I'm","ipa":"/aɪm/","bn":"আইম","src":"zh word","table":"key"},
  {"en":"it's","ipa":"/ɪts/","bn":"ইট্স","src":"zh word","table":"key"},
  {"en":"I've","ipa":"/aɪv/","bn":"আইভ়","src":"zh word","table":"key"},
  {"en":"I'll","ipa":"/aɪl/","bn":"আইল","src":"zh word","table":"key"},
  {"en":"don't","ipa":"/ˈdoʊnt/","bn":"ˈডৌন্ট","src":"zh word","table":"key"},
  {"en":"can't","ipa":"/ˈkænt/","bn":"ˈক্যান্ট","src":"zh word","table":"key"},
  {"en":"that's","ipa":"/ˈðæts/","bn":"ˈদ়্যাট্স","src":"zh word","table":"key"},
  {"en":"there's","ipa":"/ðerz/","bn":"দ়ের্জ়","src":"zh word","table":"key"},
  {"en":"what's","ipa":"/ˈwʌts/","bn":"ˈওয়াট্স","src":"zh word","table":"key"},
  {"en":"TV","ipa":"/ˌtiː ˈviː/","bn":"টী ˈভ়ী","src":"zh word","table":"key"},
  {"en":"LOL","ipa":"/ˌel oʊ ˈel/","bn":"এল ঔ ˈএল","src":"zh word","table":"key"},
  {"en":"BTW","ipa":"/ˌbiː tiː ˈdʌbəljuː/","bn":"বী টী ˈডাবালিঊ","src":"zh word","table":"key"},
  {"en":"husband","ipa":"/ˈhʌzbənd/","bn":"ˈহাজ়্‌বান্ড","src":"zh word","table":"key"},
  {"en":"cats","ipa":"/ˈkæts/","bn":"ˈক্যাট্স","src":"zh word","table":"key"},
  {"en":"boxes","ipa":"/ˈbɑːksɪz/","bn":"ˈবাːক্সিজ়","src":"zh word","table":"key"},
  {"en":"watched","ipa":"/ˈwɑːtʃt/","bn":"ˈওয়াːচ্ট","src":"zh word","table":"key"},
  {"en":"lived","ipa":"/ˈlɪvd/","bn":"ˈলিভ়্ড","src":"zh word","table":"key"},
  {"en":"wanted","ipa":"/ˈwɑːntɪd/","bn":"ˈওয়াːন্টিড","src":"own","table":"key"},
  {"en":"the","ipa":"/ðə/","bn":"দ়া","src":"zh word","table":"key"},
  {"en":"is","ipa":"/ɪz/","bn":"ইজ়","src":"zh word","table":"key"},
  {"en":"you","ipa":"/ju/","bn":"ইউ","src":"zh word","table":"key"},
  {"en":"you","ipa":"/ju/ /ˈjuː/","bn":"ইউ / ˈইঊ","src":"zh word","table":"key"},
  {"en":"of","ipa":"/əv/","bn":"আভ়","src":"zh word","table":"key"},
  {"en":"and","ipa":"/ənd/","bn":"আন্ড","src":"zh word","table":"key"},
  {"en":"to (before a vowel)","ipa":"/tu/","bn":"টু","src":"zh word","table":"key"},
  {"en":"to (strong)","ipa":"/tuː/","bn":"টূ","src":"zh word","table":"key"},
  {"en":"the (before a vowel)","ipa":"/ði/","bn":"দ়ি","src":"zh word","table":"key"},
  {"en":"fifteen","ipa":"/ˌfɪfˈtiːn/","bn":"ফিফ্ˈটীন","src":"zh word","table":"key"},
  {"en":"idea","ipa":"/aɪˈdiːə/","bn":"আইˈডীআ","src":"own","table":"key"},
  {"en":"ran","ipa":"/ˈræn/","bn":"ˈর‍্যান","src":"zh word","table":"key"},
  {"en":"Rafi","ipa":"/ˈrɑːfi/","bn":"ˈরাːফি","src":"own","table":"key"},
  {"en":"Dhaka","ipa":"/ˈdɑːkə/","bn":"ˈডাːকা","src":"own","table":"key"},
  {"en":"Dhaka (æ reading)","ipa":"/ˈdækə/","bn":"ˈড্যাকা","src":"own","table":"key"},
  {"en":"morning","ipa":"/ˈmɔːrnɪŋ/","bn":"ˈমর্নিং","src":"zh word","table":"key"},
  {"en":"desk","ipa":"/ˈdesk/","bn":"ˈডেস্ক","src":"own","table":"key"},
  {"en":"full / fool","ipa":"/ˈfʊl/ /ˈfuːl/","bn":"ˈফুল / ˈফূল","src":"own","table":"key"},
  {"en":"rice / lice","ipa":"/ˈraɪs/ /ˈlaɪs/","bn":"ˈরাইস / ˈলাইস","src":"zh word","table":"collapses"},
  {"en":"fan / pan","ipa":"/ˈfæn/ /ˈpæn/","bn":"ˈফ্যান / ˈপ্যান","src":"zh word","table":"collapses"},
  {"en":"walk / work","ipa":"/ˈwɔːk/ /ˈwɜːrk/","bn":"ˈওয়ক / ˈওয়ার্ক","src":"zh word","table":"collapses"},
  {"en":"card / car","ipa":"/ˈkɑːrd/ /ˈkɑːr/","bn":"ˈকাːর্ড / ˈকাːর","src":"zh word","table":"collapses"},
  {"en":"mouth / mouse","ipa":"/ˈmaʊθ/ /ˈmaʊs/","bn":"ˈমাউথ় / ˈমাউস","src":"zh word","table":"collapses"},
  {"en":"vest / west","ipa":"/ˈvest/ /ˈwest/","bn":"ˈভ়েস্ট / ˈওয়েস্ট","src":"zh word","table":"collapses"}
];

/* inputs the converter must refuse */
const REFUSE = [
  ['/ˈɡoʊ/', 'script ɡ (U+0261) instead of ASCII g'], ['/ˈhɒt/', 'British ɒ'], ['/ˈwɔtər/', 'ɔ without ː'], ['/ˈbɜrd/', 'ɜ without ː'],
  ['/ˈbʌɾər/', 'flap symbol'], ['hello', 'no slashes'], ['/ðə/', 'no ˈ in the row'], ['/ˈjuːtɔː/', 'word-final ɔː in a word with another vowel'],
  ['/ˈ/', 'dangling ˈ'], ['/ˈhaʊ  ‖ /', 'empty sentence'], ['/ˈnjuːw/', 'w with no vowel after it']
];

function selftest() {
  let bad = 0; const n = { worked: 0, key: 0, collapses: 0 };
  for (const e of EXAMPLES) {
    let got;
    /* a weak form quoted alone has no ˈ: it is checked against pronPattern with a stressed word appended */
    try { got = e.ipa.includes('ˈ') ? ipaToBn(e.ipa) : convert(e.ipa); if (!PRON_RE.test(got.includes('ˈ') ? got : got + ' ˈস')) got = 'ERROR fails pronPattern: ' + got; }
    catch (x) { got = 'ERROR ' + x.message; }
    if (got !== e.bn) { bad++; console.log('FAIL  ' + e.en + '  ' + e.ipa + '\n      want ' + e.bn + '\n      got  ' + got); } else n[e.table]++;
  }
  let rbad = 0;
  for (const [ipa, why] of REFUSE) { let ok = false; try { ipaToBn(ipa); } catch (x) { ok = true; } if (!ok) { rbad++; console.log('FAIL  not refused: ' + ipa + ' (' + why + ')'); } }
  const tot = t => EXAMPLES.filter(e => e.table === t).length;
  console.log((bad || rbad ? 'FAILED: ' + (bad + rbad) + ' mismatches; ' : 'ok: ') + (EXAMPLES.length - bad) + '/' + EXAMPLES.length + ' §6 example pairs match §6 as printed (worked examples ' +
    n.worked + '/' + tot('worked') + ', key and rules ' + n.key + '/' + tot('key') + ', checked minimal pairs ' + n.collapses + '/' + tot('collapses') + '); ' + (REFUSE.length - rbad) + '/' + REFUSE.length + ' bad inputs refused');
  return bad === 0 && rbad === 0;
}

module.exports = { ipaToBn, convert };

if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--selftest') process.exit(selftest() ? 0 : 1);
  if (a[0] === '--lookup') process.exit(buildLookup(true) ? 0 : 1);
  if (!a.length) { console.error('usage: node tools/content/bn/pron_bn.js "<ipa>" | --selftest | --lookup'); process.exit(2); }
  try { console.log(ipaToBn(a.join(' '))); } catch (x) { console.error(x.message); process.exit(1); }
}
