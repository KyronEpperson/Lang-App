/* Dutch spelling -> en-nl pron respelling (profile docs/profiles/en-nl.md §6).
   Deterministic, so every writer gets the same string.
   Usage: node respell.js "Goedemorgen."   ->  Goedemorgen. -> KHOO-duh-mawr-khuh
          node respell.js --pattern        ->  prints pronPattern
   require('./respell.js').respell(text)

   English-letter crutch for Standard Dutch of the Netherlands, not a phonetic
   transcription. Lesson 1 teaches every token. Unstressed -en loses its n, g and ch
   are kh, and exactly one syllable is in CAPITALS when a word has more than one.
   Whole-word fixes live in EXC. Profile §6 lists what the rules still get wrong. */
const EXC = {
  'restaurant': 'rehs-toh-RAHNT',
  'cadeau': 'kah-DOH',
  'telefoon': 'tay-luh-FOHN',
  'station': 'stah-SHAWN',
  'amsterdam': 'ahm-stuhr-DAHM',
  'rotterdam': 'roh-tuhr-DAHM',
  'garage': 'khah-RAH-zhuh',
  'chauffeur': 'shoh-FEUHR',
  'chef': 'shehf',
  'informatie': 'ihn-fawr-MAAH-tsee',
  'politie': 'poh-LEE-tsee',
  'museum': 'mue-ZAY-uhm',
  'centrum': 'SEHN-truhm',
  'universiteit': 'ue-nee-vehr-see-TAYT',
  'alstublieft': 'ahl-stue-BLEEFT',
  'nederland': 'NAY-duhr-lahnt',
  'kantoor': 'kahn-TOHR',
  'eventueel': 'ay-vehn-tue-AYL',
  'uiteindelijk': 'UYT-ighn-duh-luhk',
  'sochtends': 'SAWKH-tuhns',
  'sochtend': 'SAWKH-tuhnt',
  'ochtend': 'AWKH-tuhnt',
  'ochtends': 'AWKH-tuhns',
  'anna': 'AH-nah',
  'alsjeblieft': 'ahl-shuh-BLEEFT',
  'pardon': 'pahr-DAWN',
  'studeer': 'stuu-DAYR',
  'vandaag': 'vahn-DAAHKH',
  'vandaan': 'vahn-DAAHN',
  'omdat': 'awm-DAHT',
  'waarom': 'waah-RAWM',
  'wanneer': 'wah-NAYR',
  'misschien': 'mih-SKHEEN',
  'muziek': 'muu-ZEEK',
  'perron': 'peh-RAWN',
  'retour': 'ruh-TOOR',
  'plattegrond': 'plah-tuh-KHRAWNT',
  'rechtdoor': 'rehkht-DOHR',
  'rechtsaf': 'rehkhts-AHF',
  'linksaf': 'lihnks-AHF',
  'agenda': 'aah-KHEHN-daah',
  'collega': 'kaw-LAY-khaah',
  /* -eren here is not the stressed verb ending */
  'kinderen': 'KIHN-duh-ruh',
  'gisteren': 'KHIHS-tuh-ruh',
  /* the verb (it rains), not the noun regent */
  'regent': 'RAY-khuhnt',
  'honderd': 'HAWN-duhrt',
  /* a single vowel before ch is short; st does not open the syllable in kosten */
  'lachen': 'LAH-khuh',
  'kosten': 'KAWS-tuh',
  /* th is t; weekend keeps the English ee */
  'thee': 'tay',
  'thuis': 'tuys',
  'weekend': 'WEE-kehnt',
  'file': 'FEE-luh',
  /* A1 "dat komt voor" (to occur). To prevent is vohr-KOH-muhn; do not use this spelling for that meaning. */
  'voorkomen': 'VOOR-koh-muhn'
};
const NOT_PREFIX = new Set(['geven', 'beter', 'verder', 'heren', 'erger', 'geen', 'geel', 'veel', 'heel']);
const CLITIC = { 'de': 'duh', 'je': 'yuh', 'ze': 'zuh', 'we': 'wuh', 'me': 'muh', 'een': 'uhn', 'het': 'uht', 'te': 'tuh', 'er': 'uhr' };
const ONSET = new Set(['pr','br','tr','dr','kr','gr','fr','pl','bl','kl','gl','fl','kw','dw','tw','zw','wr','spr','str','spl','schr','sch','kn','sl','sm','sn','sp','st','vl','vr','sk']);
/* [regex, how many syllables back from the end the stress sits] */
const STRESS_SUFFIX = [[/teit$/,0],[/tie$/,1],[/eren$/,1],[/age$/,0],[/ade$/,0],[/ent$/,0],[/ant$/,0],[/ist$/,0],[/eur$/,0],[/aal$/,0],[/eel$/,0],[/ment$/,0],[/ij$/,0],[/in$/,0],[/es$/,0]];
const VTOK = ['aahy','ohy','ooy','ayw','eew','uuw','euh','igh','aah','ee','ay','ih','aw','oh','ue','uu','oo','uy','ow','uh','eh','ah'];
const CATOMS = ['skh','kh','ng','ny','ty','sh','zh'];

function graphemes(w) {
  const g = [];
  for (let i = 0; i < w.length; i++) {
    const two = w.slice(i, i + 2), three = w.slice(i, i + 3), four = w.slice(i, i + 4);
    if (three === 'sch') { g.push({ k: 'C', s: 'sch' }); i += 2; continue; }
    if (four === 'eeuw' || four === 'ieuw') { g.push({ k: 'V', s: four }); i += 3; continue; }
    if (three === 'aai' || three === 'ooi' || three === 'oei') { g.push({ k: 'V', s: three }); i += 2; continue; }
    if ('aa ee oo uu ie oe eu ui ij ei au ou'.split(' ').includes(two)) { g.push({ k: 'V', s: two }); i++; continue; }
    if (two === 'ch' || two === 'ng' || two === 'nj' || two === 'tj' || two === 'sj') { g.push({ k: 'C', s: two }); i++; continue; }
    const c = w[i];
    g.push('aeiouy'.includes(c) ? { k: 'V', s: c } : { k: 'C', s: c });
  }
  return g;
}
function syllabify(units) {
  const nIdx = units.map((u, i) => u.k === 'V' ? i : -1).filter(i => i >= 0);
  if (!nIdx.length) throw new Error('no vowel in "' + units.map(u => u.s).join('') + '": write numbers and symbols as words');
  const sylls = [];
  let start = 0;
  for (let k = 0; k < nIdx.length; k++) {
    const ni = nIdx[k];
    if (k === nIdx.length - 1) { sylls.push(units.slice(start)); break; }
    const cons = units.slice(ni + 1, nIdx[k + 1]);
    const sig = cons.map(u => u.s).join('');
    let toPrev = 0;
    if (sig === 'ng') toPrev = 1; /* ng closes the vowel: hon-ger, not ho-nger */
    else if (cons.length <= 1 || ONSET.has(sig)) toPrev = 0;
    else if (cons.length === 2) toPrev = 1;
    else if (ONSET.has(cons.slice(1).map(u => u.s).join(''))) toPrev = cons.length - 2;
    else toPrev = cons.length - 1;
    sylls.push(units.slice(start, ni + 1 + toPrev));
    start = ni + 1 + toPrev;
  }
  return sylls;
}
function stressOf(word, n, accent) {
  if (accent) return n - 1;
  if (n === 1) return 0;
  for (const [re, back] of STRESS_SUFFIX) {
    if (re.test(word) && !(re.source === 'ij$' && word.endsWith('lijk'))) {
      const i = n - 1 - back;
      if (i >= 0) return i;
    }
  }
  /* be- in bellen is not a prefix: the prefix is only the whole first syllable */
  return 0;
}
function barePrefix(word, sylls) {
  if (NOT_PREFIX.has(word) || sylls.length < 2) return false;
  const first = sylls[0].map(u => u.s).join('');
  return ['ver', 'ont', 'her', 'be', 'ge', 'er'].includes(first);
}
function vowelToken(v, open, schwa) {
  if (schwa) return 'uh';
  switch (v) {
    case 'aai': return 'aahy';
    case 'ooi': return 'ohy';
    case 'oei': return 'ooy';
    case 'eeuw': return 'ayw';
    case 'ieuw': return 'eew';
    case 'ie': return 'ee';
    case 'oe': return 'oo';
    case 'eu': return 'euh';
    case 'ui': return 'uy';
    case 'ij': case 'ei': return 'igh';
    case 'au': case 'ou': return 'ow';
    case 'aa': return 'aah';
    case 'ee': return 'ay';
    case 'oo': return 'oh';
    case 'uu': return 'uu';
    case 'a': return open ? 'aah' : 'ah';
    case 'e': return open ? 'ay' : 'eh';
    case 'i': case 'y': return 'ih';
    case 'o': return open ? 'oh' : 'aw';
    case 'u': return open ? 'uu' : 'ue';
    default: throw new Error('vowel ' + v);
  }
}
function consBit(s, devoice) {
  if (s === 'sch') return 'skh';
  if (s === 'ch' || s === 'g') return 'kh';
  if (s === 'c' || s === 'q') return 'k';
  if (s === 'j') return 'y';
  if (s === 'sj') return 'sh';
  if (s === 'nj') return 'ny';
  if (s === 'tj') return 'ty';
  if (s === 'ng') return 'ng';
  if (devoice && s === 'b') return 'p';
  if (devoice && s === 'd') return 't';
  return s;
}
const VOICELESS_NEXT = new Set(['p','t','k','f','s','ch','sch','sj']);
function renderSyl(syl, si, sylls, word, stress) {
  const vi = syl.findIndex(u => u.k === 'V');
  const v = syl[vi];
  const coda = syl.slice(vi + 1);
  const onset = syl.slice(0, vi);
  const open = coda.length === 0;
  const nextOnset = sylls[si + 1] ? sylls[si + 1].slice(0, sylls[si + 1].findIndex(u => u.k === 'V')) : [];
  const doubled = coda.length === 1 && nextOnset[0] && coda[0].s === nextOnset[0].s;
  const prefixSyl = si === 0 && barePrefix(word, sylls);
  const weakE = v.s === 'e' && si !== stress && !doubled && (open || coda.every(u => 'nlrms'.includes(u.s)));
  const lijk = word.endsWith('lijk') && si === sylls.length - 1 && v.s === 'ij';
  const ig = /ig$/.test(word) && !word.endsWith('lijk') && si === sylls.length - 1 && v.s === 'i';
  const schwa = prefixSyl || weakE || lijk || ig;
  let pre = onset.map(u => {
    if (u.s === 'c') return ('ei'.includes(v.s[0]) || v.s === 'ie' || v.s === 'ee') ? 's' : 'k';
    return consBit(u.s, false);
  }).join('');
  let post = '';
  coda.forEach((u, ci) => {
    const last = ci === coda.length - 1;
    const nextVoiceless = last && nextOnset[0] && VOICELESS_NEXT.has(nextOnset[0].s);
    const wordFinal = last && si === sylls.length - 1;
    const beforeT = u.s === 'd' && coda[ci + 1] && coda[ci + 1].s === 't';
    post += consBit(u.s, (u.s === 'b' || u.s === 'd') && (wordFinal || nextVoiceless || beforeT));
  });
  /* a doubled consonant is a spelling mark (man-nen): say it once */
  if (doubled) post = post.slice(0, -1);
  post = post.replace(/tt$/, 't'); /* wordt: the d and the t are one t */
  /* -isch: the ch is silent (logisch, praktisch) */
  if (word.endsWith('isch') && si === sylls.length - 1 && post.endsWith('skh')) post = post.slice(0, -2);
  let tok = vowelToken(v.s, open, schwa);
  /* Netherlands -tie is tsee, not tee */
  if (word.endsWith('tie') && si === sylls.length - 1 && v.s === 'ie') tok = 'see';
  if (schwa && v.s === 'e' && (post === 'n' || post.startsWith('n'))) {
    /* lopen -> loh-puh; morgens -> the n of -en drops, a plural -s stays */
    post = post.replace(/^n/, '');
  }
  let bit = pre + tok + post;
  /* blauw: au already ends in the w of ow */
  if (bit.endsWith('oww')) bit = bit.slice(0, -1);
  return bit;
}
function oneWord(w, accent) {
  if (!w) return '';
  if (w === 'een' && !accent) return CLITIC.een;
  if (CLITIC[w] && !accent) return CLITIC[w];
  if (EXC[w]) return EXC[w];
  const sylls = w.split('§').flatMap(part => part ? syllabify(graphemes(part)) : []);
  const st = barePrefix(w, sylls) ? 1 : stressOf(w, sylls.length, accent);
  const out = sylls.map((s, i) => renderSyl(s, i, sylls, w, st));
  if (out.length === 1) return out[0];
  return out.map((s, i) => i === st ? s.toUpperCase() : s).join('-');
}
function prepWord(raw) {
  let w = raw.normalize('NFC').toLowerCase().replace(/[’‘`´]/g, "'");
  const accent = /[éèê]/.test(w);
  /* coördinatie: the diaeresis starts a new syllable, but stress stays on the whole word, so keep it one word and insert a break the syllabifier already makes between vowels */
  w = w.replace(/([ëïö])/g, m => '§' + m.normalize('NFD').replace(/[̀-ͯ]/g, ''));
  w = w.replace(/[éèê]/g, 'e').replace(/[óòô]/g, 'o').replace(/[áàâ]/g, 'a').replace(/ú/g, 'u');
  let extra = '';
  if (/'n$/.test(w)) { w = w.replace(/'n$/, ''); extra = '-uhn'; }
  else if (/([aeiou])'s$/.test(w)) {
    /* auto's, foto's: the apostrophe keeps the vowel long. Double a single letter so the syllable stays open, then add s. */
    w = w.replace(/([aeiou])'s$/, (m, v) => (v === 'i' ? v + 'es' : v + v + 's'));
  } else w = w.replace(/'/g, '');
  return { w, accent, extra };
}
function word(raw) {
  const { w, accent, extra } = prepWord(raw);
  if (!w && extra) return extra.slice(1);
  const base = oneWord(w, accent);
  if (!extra) return base;
  /* zo'n: the full word is stressed, the reduced een is not */
  if (!base.includes('-')) return base.toUpperCase() + extra;
  return base + extra;
}
function respell(text) {
  let t = String(text).normalize('NFC').replace(/[’‘`´]/g, "'");
  t = t.replace(/(^|\s)'s\s+/g, '$1s');
  t = t.replace(/[?!.,;:"“”«»()…]/g, ' ');
  return t.trim().split(/\s+/).filter(Boolean).map(tok => {
    const core = tok.replace(/^[^a-zëéèêïíóöúù']+|[^a-zëéèêïíóöúù']+$/gi, '');
    return word(core);
  }).filter(Boolean).join(' ');
}
function pronPattern() {
  const vow = VTOK.join('|');
  const VOW = VTOK.map(v => v.toUpperCase()).join('|');
  const c = '(?:' + CATOMS.join('|') + '|[bdfhklmnprstvwyz])';
  const C = '(?:' + CATOMS.map(x => x.toUpperCase()).join('|') + '|[BDFHKLMNPRSTVWYZ])';
  const lo = c + '*(?:' + vow + ')' + c + '*';
  const up = C + '*(?:' + VOW + ')' + C + '*';
  const wordRe = '(?:' + lo + '(?:-' + lo + ')*-' + up + '(?:-' + lo + ')*|' + up + '(?:-' + lo + ')+|' + lo + ')';
  return '^(?:' + wordRe + ')(?: ' + wordRe + ')*$';
}
module.exports = { respell, pronPattern, EXC };
if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--pattern') console.log(pronPattern());
  else a.forEach(x => console.log(x + ' -> ' + respell(x)));
}
