/* Arabic (fully vowelled, pausal) -> en-ar pron romanisation (profile docs/profiles/en-ar.md §6).
   Deterministic: the pron is read from the vowel marks, so every writer gets the same string.
   It THROWS (message with «word») on anything that is not in the course's one canonical vowelling:
   an unmarked letter inside a word, a vowel mark on a final letter where none belongs (sukun on a final letter, tanwin -un / -in,
   tanwin -an without its extra ا),
   fatha missing before ا / ى / ة, a sun letter after ال without shadda, ٱ, Latin letters, digits (except a single digit 0-10 as a card),
   and text that is not in NFC mark order (it prints the NFC form to copy).
   usage: node tools/target/ar/respell.js "<text>" ...   prints  <text> -> <pron>
   module: const { respell } = require('./respell.js') */
'use strict';
const C = { 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'ḥ', 'خ': 'kh', 'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh', 'ص': 'ṣ', 'ض': 'ḍ', 'ط': 'ṭ', 'ظ': 'ẓ', 'ع': 'ʿ', 'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h', 'و': 'w', 'ي': 'y' };
const HAMZA = new Set(['ء', 'أ', 'إ', 'ؤ', 'ئ']);
const SUN = new Set(['ت', 'ث', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ل', 'ن']);
const NAME = { 'ا': 'alif', 'ب': 'bāʾ', 'ت': 'tāʾ', 'ث': 'thāʾ', 'ج': 'jīm', 'ح': 'ḥāʾ', 'خ': 'khāʾ', 'د': 'dāl', 'ذ': 'dhāl', 'ر': 'rāʾ', 'ز': 'zāy', 'س': 'sīn', 'ش': 'shīn', 'ص': 'ṣād', 'ض': 'ḍād', 'ط': 'ṭāʾ', 'ظ': 'ẓāʾ', 'ع': 'ʿayn', 'غ': 'ghayn', 'ف': 'fāʾ', 'ق': 'qāf', 'ك': 'kāf', 'ل': 'lām', 'م': 'mīm', 'ن': 'nūn', 'ه': 'hāʾ', 'و': 'wāw', 'ي': 'yāʾ', 'ة': 'tāʾ marbūṭa', 'ء': 'hamza', 'ى': 'alif maqṣūra', 'لا': 'lām alif' };
const DIGIT = { '٠': 'ṣifr', '١': 'wāḥid', '٢': 'ithnān', '٣': 'thalātha', '٤': 'arbaʿa', '٥': 'khamsa', '٦': 'sitta', '٧': 'sabʿa', '٨': 'thamāniya', '٩': 'tisʿa', '١٠': 'ʿashara' };
const FATHA = 'َ', DAMMA = 'ُ', KASRA = 'ِ', SHADDA = 'ّ', SUKUN = 'ْ', TAN_F = 'ً', TAN_D = 'ٌ', TAN_K = 'ٍ', DAGGER = 'ٰ', TATWEEL = 'ـ';
const MARK = /[ً-ْٰ]/;
const PUNCT = { '؟': '?', '،': ',', '؛': ';', '.': '.', '!': '!', '?': '?', ':': ':', ',': ',' };
/* words whose usual spelling hides a long ā: they must carry the dagger alif (canonical forms) */
const DAGGER_WORDS = { 'هذا': 'هٰذَا', 'هذه': 'هٰذِهِ', 'ذلك': 'ذٰلِكَ', 'لكن': 'لٰكِن', 'هؤلاء': 'هٰؤُلَاءِ' };
/* the name of God: fixed forms */
const ALLAH = { 'اللّٰه': 'allāh', 'لِلّٰه': 'lillāh', 'وَاللّٰه': 'wallāh', 'بِاللّٰه': 'billāh' };
/* fixed formulas that keep a traditional final vowel (السَّلَامُ عَلَيْكُم, الْحَمْدُ لِلّٰه) */
const FORMULA = new Set(['السَّلَامُ', 'الْحَمْدُ', 'شَاءَ']);
/* words with a final damma or kasra on a letter that is not a person ending (ت ك ه ن): probably a case ending (pausal rule), reported on stderr */
const warnings = [];
const skel = w => w.replace(/[ً-ْٰـ]/g, '');
const err = (w, why) => { throw new Error('«' + w + '»: ' + why); };

function units(w) { /* letters with their marks as a set */
  const u = [];
  for (const ch of w) {
    if (ch === TATWEEL) continue;
    if (MARK.test(ch)) { if (!u.length) err(w, 'a vowel mark with no letter'); const m = u[u.length - 1].m; if (m.has(ch)) err(w, 'the same mark twice'); m.add(ch); continue; }
    u.push({ c: ch, m: new Set() });
  }
  u.forEach(x => {
    const v = [FATHA, DAMMA, KASRA, SUKUN, TAN_F, TAN_D, TAN_K, DAGGER].filter(k => x.m.has(k));
    if (v.length > 1) err(w, 'two vowel marks on one letter (' + x.c + ')');
    if (x.m.has(SHADDA) && x.m.has(SUKUN)) err(w, 'shadda with sukun on ' + x.c);
    x.v = v[0] || ''; x.sh = x.m.has(SHADDA);
  });
  return u;
}

function word(w) {
  const sk = skel(w);
  if (ALLAH[w]) return { r: ALLAH[w], allah: true };
  if (/^[وبل]?ل?الله$|^لله$/.test(sk)) err(w, 'write the name of God as one of: ' + Object.keys(ALLAH).join(' '));
  for (const k in DAGGER_WORDS) if (sk === k || sk === 'و' + k) { if (!w.includes(DAGGER)) err(w, 'write it with the dagger alif: ' + DAGGER_WORDS[k]); }
  if (/[٠-٩]/.test(w)) err(w, 'write numbers as words (a digit is allowed only alone, 0-10, as a card)');
  if (/[A-Za-z0-9]/.test(w)) err(w, 'Latin letters or digits');
  if (w.includes('ٱ')) err(w, 'use plain ا, not ٱ');
  const u = units(w);
  u.forEach(x => { if (!C[x.c] && !HAMZA.has(x.c) && !'اىةآ'.includes(x.c)) err(w, 'unknown character ' + x.c); });
  u.forEach((x, k) => { if (x.c === 'ا' && x.v === TAN_F) err(w, 'put tanwin fath on the letter before ا, not on ا (شُكْرًا)'); if (x.c === 'ة' && k > 0 && u[k - 1].c === 'ا') err(w, 'ة after ا (حَيَاة) is not in the A1 word list: choose another word or ask the lead'); });
  { const e = u[u.length - 1]; if ((e.v === DAMMA || e.v === KASRA) && !'تكهن'.includes(e.c) && !FORMULA.has(w)) warnings.push(w); }
  let out = '', i = 0;
  const last = u.length - 1;
  /* prefix + article: وَال فَال بِال كَال  and لِل */
  const article = (j) => { /* u[j] = ا, u[j+1] = ل : returns [text, next index] */
    const lam = u[j + 1], nx = u[j + 2];
    if (u[j].v || u[j].sh) err(w, 'the alif of ال takes no mark');
    if (!nx) err(w, 'ال with nothing after it');
    if (SUN.has(nx.c)) { if (lam.v) err(w, 'before a sun letter the ل of ال stays bare (no sukun)'); if (!nx.sh) err(w, 'a sun letter after ال needs shadda: ' + nx.c + 'ّ'); return [C[nx.c] + '-', j + 2, true]; }
    if (lam.v === KASRA && nx.c === 'ا' && !nx.v && !nx.sh && u[j + 3] && u[j + 3].v === SUKUN) return ['l-i', j + 3, false]; /* الِاسْم al-ism, الِاثْنَيْن al-ithnayn */
    if (nx.c === 'ا') err(w, 'a wasla word after ال is written with kasra on the ل and a bare ا: الِاسْم');
    if (lam.v !== SUKUN || lam.sh) err(w, 'before a moon letter the ل of ال takes sukun: لْ');
    if (nx.sh) err(w, 'no shadda on a moon letter after ال');
    return ['l-', j + 2, false];
  };
  let sunSkip = false, start = 0;
  if (u.length > 2 && u[0].c === 'ا' && u[1].c === 'ل' && !u[0].v) { const [t, n, s] = article(0); out = 'a' + t; i = n; sunSkip = s; start = n; }
  else if (u.length > 3 && 'وفبك'.includes(u[0].c) && (u[0].v === FATHA || u[0].v === KASRA) && !u[0].sh && u[1].c === 'ا' && u[2].c === 'ل' && (u[2].v === SUKUN || (!u[2].v && u[3] && SUN.has(u[3].c) && u[3].sh))) {
    if ((u[0].c === 'ب') !== (u[0].v === KASRA)) err(w, 'prefix vowel: وَ فَ كَ with fatha, بِ with kasra');
    const [t, n, s] = article(1); out = C[u[0].c] + (u[0].v === FATHA ? 'a' : 'i') + t; i = n; sunSkip = s; start = n;
  } else if (u.length > 3 && u[0].c === 'ل' && u[0].v === KASRA && u[1].c === 'ل' && (u[1].v === SUKUN || (!u[1].v && SUN.has(u[2].c) && u[2].sh))) {
    if (SUN.has(u[2].c)) { out = 'li' + C[u[2].c] + '-'; sunSkip = true; } else { out = 'lil-'; }
    i = 2; start = 2;
  }
  for (; i <= last; i++) {
    const x = u[i], nx = u[i + 1], isLast = i === last, atStart = i === start;
    if (x.c === 'ا') {
      if (atStart && i === 0) { if (x.v === KASRA) { out += 'i'; continue; } if (x.v === DAMMA) { out += 'u'; continue; } err(w, 'a word-initial ا needs its vowel: اِ or اُ'); }
      err(w, 'ا must follow a letter with fatha (or tanwin fath at the end)');
    }
    if (x.c === 'ى' || (x.c === 'ة')) err(w, x.c + ' must follow a letter with fatha');
    let cons;
    if (x.c === 'آ') { out += (atStart ? '' : 'ʾ') + 'ā'; if (x.v || x.sh) err(w, 'آ takes no mark'); continue; }
    if (HAMZA.has(x.c)) cons = atStart ? '' : 'ʾ';
    else cons = C[x.c];
    if (cons && /[kgstd]$/.test(out) && cons === 'h') out += '·';
    let c2 = cons;
    if (x.sh) { if (sunSkip && atStart) c2 = cons; else c2 = cons + cons; }
    if (atStart && HAMZA.has(x.c) && x.sh) err(w, 'shadda on an initial hamza');
    const v = x.v;
    if ((v === FATHA || v === KASRA || v === DAMMA) && !x.sh && nx && nx.c === 'ا' && !nx.sh && u[i + 2] && u[i + 2].v === SUKUN && i + 2 !== last) {
      if (nx.v) err(w, 'after a prefix, write the wasla alif bare: وَاسْمِي');
      out += c2 + (v === FATHA ? 'a' : v === KASRA ? 'i' : 'u'); i++; continue; /* وَاسْمِي wasmī: the ا is not said */
    }
    if (v === DAMMA && nx && nx.c === 'و' && !nx.v && !nx.sh && u[i + 2] && u[i + 2].c === 'ا' && !u[i + 2].v && i + 2 === last) { out += c2 + 'ū'; i += 2; continue; } /* دَرَسُوا darasū */
    if (v === FATHA) {
      if (nx && (nx.c === 'ا') && !nx.v && !nx.sh) { out += c2 + 'ā'; i++; continue; }
      if (nx && nx.c === 'ى' && !nx.v && i + 1 === last) { out += c2 + 'ā'; i++; continue; }
      if (nx && nx.c === 'ة') {
        if (i + 1 !== last) err(w, 'ة only at the end of a word');
        const t = nx.v === SUKUN ? 't' : nx.v ? err(w, 'ة takes no mark except sukun (first word of an idafa, said -at); no tanwin: say it -a') : '';
        if (nx.sh) err(w, 'shadda on ة'); out += c2 + 'a' + t; i++; continue;
      }
      if (nx && (nx.c === 'و' || nx.c === 'ي') && !nx.sh && (nx.v === SUKUN)) { out += c2 + 'a' + C[nx.c]; i++; continue; }
      if (nx && (nx.c === 'و' || nx.c === 'ي') && !nx.v && !nx.sh) err(w, 'a diphthong takes sukun: ' + nx.c + 'ْ (aw / ay)');
      out += c2 + 'a'; continue;
    }
    if (v === KASRA) {
      if (nx && nx.c === 'ي' && !nx.v && !nx.sh) { out += c2 + 'ī'; i++; continue; }
      if (nx && nx.c === 'ي' && !nx.v && nx.sh && i + 1 === last) { out += c2 + 'ī'; i++; continue; } /* nisba in pause: عَرَبِيّ ʿarabī */
      if (nx && nx.c === 'ي' && nx.v === SUKUN) err(w, 'long ī is kasra + bare ي (no sukun)');
      out += c2 + 'i'; continue;
    }
    if (v === DAMMA) {
      if (nx && nx.c === 'و' && !nx.v && !nx.sh) { out += c2 + 'ū'; i++; continue; }
      if (nx && nx.c === 'و' && !nx.v && nx.sh && i + 1 === last) { out += c2 + 'ū'; i++; continue; }
      if (nx && nx.c === 'و' && nx.v === SUKUN) err(w, 'long ū is damma + bare و (no sukun)');
      out += c2 + 'u'; continue;
    }
    if (v === DAGGER) { out += c2 + 'ā'; continue; }
    if (v === TAN_F) {
      if (x.c === 'ا') err(w, 'put tanwin fath on the letter before ا, not on ا');
      if (nx && nx.c === 'ا' && !nx.v && i + 1 === last) { out += c2 + 'an'; i++; continue; }
      err(w, 'tanwin fath only where the spelling has the extra ا (شُكْرًا, شَايًا); after ة or ء write nothing (pausal: qahwa, masāʾ)');
    }
    if (v === TAN_D || v === TAN_K) err(w, 'no case endings: tanwin -un / -in is not written (pausal rule)');
    if (v === SUKUN) {
      if (isLast && !(x.c === 'و' || x.c === 'ي')) err(w, 'leave the last letter bare (no sukun)');
      if (isLast) err(w, 'a final diphthong is written on the letter before: ' + 'ـَوْ / ـَيْ needs a fatha before it');
      out += c2; continue;
    }
    /* no vowel mark */
    if (isLast) { out += c2; continue; }
    if (atStart && sunSkip) err(w, 'the sun letter after ال needs a vowel too');
    err(w, 'letter ' + x.c + ' has no vowel mark (every letter inside a word needs one, or sukun)');
  }
  return { r: out };
}

function respell(text) {
  warnings.length = 0;
  const t0 = String(text).trim();
  if (t0 !== t0.normalize('NFC')) throw new Error('«' + t0 + '»: not in NFC mark order; use: ' + t0.normalize('NFC'));
  const bare = t0.replace(/ـ/g, '');
  if (NAME[bare]) return NAME[bare];                     /* a letter card: its name */
  if (DIGIT[bare]) return DIGIT[bare];                   /* a digit card: its number word */
  const toks = t0.replace(/[«»"“”()]/g, ' ').split(/\s+/).filter(Boolean);
  const res = [];
  for (const tk of toks) {
    const m = tk.match(/^(.*?)([؟،؛.!?:,]*)$/);
    const w = m[1], p = [...m[2]].map(c => PUNCT[c]).join('');
    if (!w) { if (res.length) res[res.length - 1] += p; continue; }
    const r = word(w);
    let s = r.r;
    if (r.allah && w === 'اللّٰه' && res.length && /[aiuāīū][?.!,;:]*$/.test(res[res.length - 1]) && !/[?.!,;:]$/.test(res[res.length - 1])) s = 'llāh'; /* in shāʾa llāh */
    res.push(s + p);
  }
  if (!res.length) throw new Error('«' + t0 + '»: no Arabic text');
  while (warnings.length) process.stderr.write('«' + warnings.shift() + '»: final damma / kasra looks like a case ending (pausal rule: leave the last letter bare)\n');
  return res.join(' ');
}

/* pronPattern: the regex every pron must match (works with and without the u flag) */
const V = 'aiuāīū', CONS = 'bdfhjklmnqrstwyzḥṣḍṭẓʿʾ';
const SUNR = '(?:l|t|th|d|dh|r|z|s|sh|ṣ|ḍ|ṭ|ẓ|n)';
const WORD = '(?:(?:a|wa|fa|bi|ka|li)' + SUNR + '-)?(?:[' + V + CONS + ']|gh|·)+[?.!,;:]?';
const pattern = () => '^(?!.*(?:^|[ \\-])ʾ)(?!.*(?:aa|ii|uu|āā|īī|ūū|ʾʾ|ʿʿʿ))(?!.*·(?!h))(?!.*(?<![kgstd])·)(?!.*(?:^| )[^' + V + ' ]+(?= |$))(?!.*-(?= |$))(?!.*-[^ ]*-)' + WORD + '(?: ' + WORD + ')*$';

module.exports = { respell, pattern, NAME, DIGIT, SUN, FORMULA };
if (require.main === module) for (const a of process.argv.slice(2)) { try { console.log(a, '->', respell(a)); } catch (e) { process.stderr.write(e.message + '\n'); process.exitCode = 1; } }
