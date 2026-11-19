/* Indonesian spelling -> en-id pron respelling (profile docs/profiles/en-id.md §6). Deterministic and context-free per word,
   so every writer gets the same string for the same text.
   Usage: node respell.js "Selamat pagi!"   ->   Selamat pagi! -> suh-LAH-maht PAH-ghee
          require('./respell.js').respell(text) returns the string.
   Key (summary; the full key is in the profile):
     vowels      ah (a)  ee (i)  oo (u)  oh (o)  eh (é, the "strong" e)  uh (the "weak" e, schwa)
                 ai (final ai: pantai)  ow (final au: pulau)  oy (final oi)  ay (final ei: Mei)
     consonants  ch (c)  j (j)  g, written gh before ee / eh (pergi)  ng (ng, also at the start of a word)  ny (ny)  sh (sy)
                 kh (kh)  f (f, v)  q = the glottal catch of a final k (tidak -> tee-DAHQ)  h after a vowel = a final h (rumah -> ROO-mahh)
     CAPITALS    the syllable textbooks call stressed: the next-to-last, or the last when the next-to-last has the weak e (besar -> buh-SAHR).
                 One-syllable words are lowercase. Indonesian stress is light: CAPITALS mean a slight lift, never an English punch.
     a hyphenated word (anak-anak) is respelled as two words: AH-nahq AH-nahq
   What the spelling does NOT show, and so comes from LEX or a rule (with a warning on stderr when it is a guess):
     - which e is which. Rules: an e at the end of a word is é (sore, sate); an e in a last syllable closed by k or h is é (nenek, boleh, teh);
       every other e defaults to the weak e (uh). A default is silent only in a word-initial prefix syllable (be ber me mem men meng meny pe per
       pem pen peng peny te ter se ke) of a word of 3+ syllables, or in a word-initial ber / ter / per / ker (terbang, kerja, pergi),
       and never in a word that looks like a loan (v f z x, or eo io iu ea eu: teori, periode, serius); anywhere else it is reported ("check e").
       Known blind spot: a loan with the strong e in such a syllable and no loan letters (terapi, memori) comes out weak with no warning.
     - ai / au / oi / ei: one syllable at the end of a word (pantai, pulau); two syllables before a final consonant (baik, laut, main).
       Anywhere else (saudara, pakaian) the generator guesses one syllable and reports it ("check ai/au").
     - k at the end of a syllable before another consonant: released k (dokter, taksi), and a final k after a consonant (bank, reported);
       but a k before the endings -nya -ku -mu -lah -kah -pun
       (anaknya -> ah-NAHQ-nyah). Native words such as rakyat are listed in LEX with q.
   A word not in LEX that is a listed word plus -nya -ku -mu -lah -kah -pun takes the listed form (keretanya from keréta).
   LEX notation: é = strong e, ə = weak e (every e in a LEX word is marked), q = glottal k, ï / ü = an i / u that is its own syllable.
   EXC holds whole words whose pron is given as is.
   When the output is wrong, add the word to LEX (never hand-edit a pron) and re-run the rows: the lint shows every row that changed. */

const EXC = {
  'oke': 'OH-keh', 'ok': 'oh-KEH', 'online': 'ohn-LAIN',
  'gue': 'gweh',                                                    /* Jakarta "I": one syllable, /gwe/ */
};

const LEX_WORDS = `
dosén alérgi
énak soré mérah méja désa ékor nénék bébék témpé boléh oléh és sén métər ménu pésta péndék séndok pénsil émbər hotél modél ponsél
télépon télévisi réstoran résép bésok bécak kécap léhér jəlék kərén bərés héran bénsin apoték désémbər séptémbər novémbər fébruari oktobər marət
ékonomi səpéda kəméja məréka gəréja kəréta mərdéka médan dénpasar dépok céwék monyét lélé kafé kué idé tantə jahé déwasa déwi éko kətut
rəndang pəcəl goréng goréngan pədas səgar ləzat gəlas ləmari təmpat jəndéla términal pərəmpatan bélok dəkat dəpan səbəlah səbərang təngah kə
pərgi bəli bəlas səbəlas ənam əmpat dəlapan səmbilan sətəngah mənit dətik sədang bəlum pərnah sənin təman pərəmpuan doktər nəlayan
bəsar kəcil gantəng gəmuk sənang sədih ləlah səhat cəpat pəlan pənting bənar bətul səpi bərsih tərang gəlap kəras ləmbut lébar səmpit kəring bərat
cokəlat əmas bəkərja məndəngar bərənang bərtəmu məngərti kənal pərlu kəmbali sələsai pəsan məməsan mənyéwa séwa jəmput bərhənti léwat
dəngan karəna ləbih ənggak indonésia amérika sərikat jəpang koréa éropa sulawési ləstari héndra təlur jəruk pəpaya kéju məntéga dompét
pərut dəmam kəmbalian kəlas kəmarin kəpala kəluarga kəlapa kərupuk səkolah səlamat sərahkan pəsawat pəlajar pəlayan pərawat pətani
kətan tərima tətapi səmua səkali sədikit səlasa səmarang səpuluh səratus səribu səjuta səmangka səmoga səlamanya
bəlakang bəlanda bəlajar bəlanja bərapa bərangkat bərjalan bərbicara bərtanya bərdiri bərmain bərnama bərasal bəkal
məmbaca mənulis məlihat mənonton məmasak məncuci mənyanyi mənari mənjawab mənunggu mənginap məngapa kənapa pərmisi
mərica sənyum səndiri sənang səbuah səorang sətiap səbəntar
béda daérah hémat héwan kaméra karét péna pérak péta mənélépon pərsén résépsionis téknologi bébas éléktronik
bəkas bənang bəntuk bəras bəsi cəlana cərita cərmin dəngar əlang əngkau jəlas jəmbatan kəbun kərtas ləmpar mənang nəgara pətang rəkan rəmpah rənang
səbəlum səjuk səmut sənja təbal təbu təkan tənang təpi wortəl pəkərjaan kəsəhatan kəbərsihan məmbəli məngənal kətərangan
bərani bərita bərsama bətina cərmin dəlapan désa gəréja jəndéla kəluar kəpala kərtas ləmari mənit pəlan pərahu pəsawat sérius səlalu səlatan səpatu
təlinga təman tərang sədih səgar səhat bəli bəlum pərgi sədang
jakét témbok mésin intərnét muséum bərsəpéda répot méwah béngkél pasién tikét émma ojék minimarkét téori métodé vérsi
raqyat maqna
saudara pakaian
bangət bərkənalan səpərəmpat tərsəsat dipəsan dibəli məngərjakan mənyələsaikan bagaimana tərus səring bəbərapa
`;
const LEX = {};
LEX_WORDS.trim().split(/\s+/).forEach(a => {
  if (/[^a-zéəqïü]/.test(a)) return;                                /* skip anything with stray characters */
  const plain = a.replace(/[éə]/g, 'e').replace(/ï/g, 'i').replace(/ü/g, 'u');
  const real = plain.replace(/q/g, 'k');
  if (/e/.test(a.replace(/[éə]/g, ''))) return;                     /* every e in a LEX word must be marked */
  LEX[real] = a;
});

const VOW = 'aiueoéəïü';
const isV = c => !!c && VOW.includes(c);
const warned = new Set();
const warn = (w, msg) => { const k = w + msg; if (warned.has(k)) return; warned.add(k); process.stderr.write('respell: check ' + msg + ' in «' + w + '». If wrong, add it to LEX in respell.js.\n'); };

/* 1. letters -> units. V units: {k:'V', v}. C units: {k:'C', s} with s one of the codes below. */
function units(w) {
  const u = [];
  const C = (s, x) => u.push(Object.assign({ k: 'C', s }, x || {}));
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1];
    if (isV(c)) { u.push({ k: 'V', v: c }); continue; }
    switch (c) {
      case 'n':
        if (n === 'g') { C('NG'); i++; continue; }
        if (n === 'y') { C('NY'); i++; continue; }
        C('n'); continue;
      case 's': if (n === 'y') { C('SY'); i++; continue; } C('s'); continue;
      case 'k': if (n === 'h') { C('KH'); i++; continue; } C('k'); continue;
      case 'q': C('Q'); continue;                                     /* LEX only: glottal k */
      case 'c': C('c'); continue;
      case 'v': C('f'); continue;
      case 'x': C('k'); C('s'); continue;
      case 'y': C('y'); continue;
      default:
        if (/[bdfghjlmprtwz]/.test(c)) { C(c); continue; }
        throw new Error('cannot respell "' + c + '" in "' + w + '": write numbers and symbols as words');
    }
  }
  return u;
}

const INSEP = new Set(['pr', 'br', 'tr', 'dr', 'kr', 'gr', 'fr', 'pl', 'bl', 'kl', 'gl', 'fl']);
const DIPH = { ai: 'ai', au: 'ow', oi: 'oy', ei: 'ay' };

/* 2. vowel runs -> nuclei; consonants -> onsets and codas */
function syllables(w, listed) {
  const u = units(w);
  const nuc = [];
  for (let i = 0; i < u.length;) {
    if (u[i].k !== 'V') { i++; continue; }
    const start = i; const run = [];
    while (i < u.length && u[i].k === 'V') run.push(u[i++].v);
    const after = u.slice(i);
    let k = 0;
    while (k < run.length) {
      const pair = run[k] + (run[k + 1] || '');
      if (DIPH[pair]) {
        const atEnd = k + 2 === run.length && after.length === 0;
        const beforeCV = k + 2 === run.length && after.length >= 2 && after[0].k === 'C' && after[1].k === 'V';
        const beforeV = k + 2 < run.length;
        if (atEnd || beforeCV || beforeV) {
          if (!atEnd && !listed) warn(w, pair + ' (read as one syllable)');
          nuc.push({ a: start + k, b: start + k + 1, v: [run[k], run[k + 1]] }); k += 2; continue;
        }
      }
      nuc.push({ a: start + k, b: start + k, v: [run[k]] }); k++;
    }
  }
  if (!nuc.length) throw new Error('no vowel in "' + w + '": write numbers and symbols as words');
  const syl = nuc.map(n => ({ nuc: n.v, onset: [], coda: [] }));
  for (let i = 0; i < nuc[0].a; i++) syl[0].onset.push(u[i]);
  for (let k = 0; k < nuc.length; k++) {
    const end = k + 1 < nuc.length ? nuc[k + 1].a : u.length;
    const cons = u.slice(nuc[k].b + 1, end);
    if (k + 1 === nuc.length) { syl[k].coda = cons; break; }
    let toPrev;
    if (cons.length <= 1) toPrev = 0;
    else if (cons.length === 2) toPrev = INSEP.has(cons[0].s + cons[1].s) ? 0 : 1;
    else toPrev = INSEP.has(cons[cons.length - 2].s + cons[cons.length - 1].s) ? cons.length - 2 : cons.length - 1;
    syl[k].coda = cons.slice(0, toPrev); syl[k + 1].onset = cons.slice(toPrev);
  }
  return syl;
}

/* 3. the plain e: strong (é) or weak (ə) */
const PREFIX_SYL = new Set(['be', 'ber', 'me', 'mem', 'men', 'meng', 'meny', 'pe', 'per', 'pem', 'pen', 'peng', 'peny', 'te', 'ter', 'se', 'ke']);
const sylText = s => s.onset.map(x => x.s.toLowerCase()).join('') + s.nuc.join('') + s.coda.map(x => x.s.toLowerCase()).join('');
function resolveE(w, syl, listed) {
  const n = syl.length;
  syl.forEach((s, k) => {
    if (s.nuc.length !== 1 || s.nuc[0] !== 'e') return;
    const last = k === n - 1;
    if (last && !s.coda.length) { s.nuc = ['é']; return; }                                   /* sore, sate, kue */
    if (last && s.coda.length === 1 && (s.coda[0].s === 'k' || s.coda[0].s === 'h')) { s.nuc = ['é']; return; }   /* nenek, boleh, teh */
    s.nuc = ['ə'];
    const txt = sylText(Object.assign({}, s, { nuc: ['e'] }));
    const loanish = /[vfzx]|eo|io|iu|ea|eu/.test(w);                 /* teori, periode, serius, versi: loans often have the strong e */
    const prefixLike = k === 0 && !loanish && ((n >= 3 && PREFIX_SYL.has(txt)) || /^[btpk]er$/.test(txt));   /* ber- ter- per- ker-: closed by r */
    if (!prefixLike && !listed) warn(w, 'e (read as the weak e, uh)');
  });
}

/* 4. stress: the next-to-last syllable, or the last when the next-to-last has the weak e */
function stressIndex(syl) {
  const n = syl.length;
  if (n === 1) return 0;
  const p = n - 2;
  const weak = s => s.nuc.length === 1 && s.nuc[0] === 'ə';
  return weak(syl[p]) && !weak(syl[n - 1]) ? n - 1 : p;
}

/* 5. syllables -> respelling */
const NUC = { a: 'ah', i: 'ee', 'ï': 'ee', u: 'oo', 'ü': 'oo', o: 'oh', 'é': 'eh', 'ə': 'uh' };
const ON = { c: 'ch', NG: 'ng', NY: 'ny', SY: 'sh', KH: 'kh', Q: 'k' };
let wordNow = '';
function realize(syl, glottalBeforeSuffix) {
  const n = syl.length;
  return syl.map((s, k) => {
    const nucT = s.nuc.length === 2 ? DIPH[s.nuc.join('')] : NUC[s.nuc[0]];
    let onT = '';
    s.onset.forEach((x, j) => {
      if (x.s === 'g') onT += /^e/.test(nucT) && j === s.onset.length - 1 ? 'gh' : 'g';
      else onT += ON[x.s] || x.s;
    });
    const last = k === n - 1;
    const codaT = s.coda.map((x, j) => {
      const lastUnit = last && j === s.coda.length - 1;
      if (x.s === 'Q') return 'q';
      if (x.s === 'k') {
        if (lastUnit && j > 0) { warn(wordNow, 'k (after a consonant, read as a released k)'); return 'k'; }   /* bank */
        return (lastUnit || (glottalBeforeSuffix === k && j === s.coda.length - 1)) ? 'q' : 'k';
      }
      if (x.s === 'g') return 'g';
      return ON[x.s] || x.s;
    }).join('');
    return onT + nucT + codaT;
  });
}

const SUFFIX = /^(.*[aiueoéə])k(nya|ku|mu|lah|kah|pun)$/;
/* annotated(a): respell a LEX-style annotated form (é ə q ï ü) directly; used by the test list in the profile */
function annotated(a) { return word(a, true); }
function word(raw, forced) {
  let w = raw.normalize('NFC').toLowerCase().replace(/[’‘ʼ`´']/g, '');
  if (!w) return '';
  if (/\d/.test(w)) throw new Error('digit in "' + raw + '": write numbers as words');
  if (EXC[w]) return EXC[w];
  if (w.includes('-')) return w.split('-').filter(Boolean).map(x => word(x, forced)).join(' ');                  /* anak-anak -> two words */
  const has = x => Object.prototype.hasOwnProperty.call(LEX, x);
  let listed = forced || has(w);
  let annot = forced ? w : (listed ? LEX[w] : w);
  if (!listed) {                                                                                   /* keretanya, mejaku: a listed word + an ending */
    const e = w.match(/^(.+?)(nya|ku|mu|lah|kah|pun)$/);
    if (e && has(e[1])) { listed = true; annot = LEX[e[1]] + e[2]; }
  }
  let syl = syllables(annot, listed);
  resolveE(w, syl, listed);
  /* k closing the syllable before -nya -ku -mu -lah -kah -pun is glottal: find that syllable */
  let gk = -1;
  const m = annot.match(SUFFIX);
  if (m) { const stemSyl = syllables(m[1] + 'k', true).length; gk = stemSyl - 1; }
  const si = stressIndex(syl);
  wordNow = w;
  const texts = realize(syl, gk);
  if (texts.length === 1) return texts[0];
  return texts.map((t, i) => i === si ? t.toUpperCase() : t).join('-');
}

function respell(text) {
  return String(text).replace(/[?!.,;:"“”«»()…–—\/]/g, ' ').trim().split(/\s+/).filter(Boolean).map(x => word(x)).filter(Boolean).join(' ');
}

module.exports = { respell, annotated, syllables, LEX, EXC };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));
