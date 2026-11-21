/* Swedish spelling -> en-sv pron (docs/profiles/en-sv.md §6). Deterministic.
   Usage: node respell.js "Jag heter Anna."  ->  Jag heter Anna. -> jah HAY-tehr AHNN-ah
   The aid marks stress with CAPITALS, keeps the sj-sound (sj) distinct from the tj-sound (tj),
   and gives every vowel letter a fixed English-letter token. It does not mark pitch accent.
   When a word is wrong, add it to LEX. Never hand-edit a pron in a deck or a lesson. */
'use strict';

/* Spoken reductions and words the spelling rules get wrong. Values are the aid, lowercase,
   with the stressed syllable in CAPITALS when the word has more than one syllable. */
const LEX_SRC = `
och=aw jag=jah ja=jah det=deh mig=mey dig=dey sig=sey de=dawm dem=dawm vad=vah
idag=ih-DAHG igår=ih-GOHR imorgon=ih-MAWR-gawn
kanske=kahnn-sjeh människa=mehnn-ih-sjah människor=mehnn-ih-shur
choklad=sjuh-klahd person=pehr-shoohn semester=seh-MEHS-tehr finland=fihn-lahnd
student=stuh-DEHNT studenter=stuh-DEHN-tehr studenten=stuh-DEHN-tehn
sover=SOH-vehr sova=SOH-vah kall=kahll kallt=kahllt kiss=kihs
musik=muh-SEEK trevlig=TRAYV-lihg trevligt=TRAYV-lihgt
video=vee-deh-oh radio=rah-dee-oh telefon=teh-leh-FOHN problem=praw-BLAYM
kafé=kah-FAY café=kah-FAY
malmö=mahll-meuh umeå=ueh-meh-oh göteborg=jur-teh-BAWRJ
kanel=kah-NEHL också=awk-soh igen=ih-JAYN middag=mihd-dahg
paus=pows augusti=ow-GUHS-tih restaurang=rehs-tuh-RAHNG
sverige=svayr-jeh norge=nawr-jeh biljett=bihl-JEHT varsågod=vahsh-aw-GOOHD söndag=surn-dahg
alice=ah-LEES behå=beh-HOH gitarr=jih-TAHR familj=fah-MIHJ föräldrar=fur-EHL-drahr
ursäkta=uhr-SEHK-tah recept=reh-SEHPT minneapolis=mihn-eh-ah-POH-lihs
`;

/* First vowel short even though only one consonant follows (orthography leaves m, and some n, single). */
const SHORT = new Set('han hon kan man men den in igen mun ton vän än fem som om rum sen hade för kom fram vem'.split(' '));
/* A following rt/rd/rn/rl/rs counts as one consonant, so the default is a long vowel. These are short. */
const SHORT_RETRO = new Set('kort fort sport start bort port svart hjärta värt hört skjorta gjort första fjorton'.split(' '));
/* k/g/sk stays hard before the first front vowel (Svealand kex; kille "guy"). */
const HARD = new Set('kex kille killen killar killarna kiruna kiss'.split(' '));
/* för- / be- here is not the unstressed prefix. */
const NOPREFIX = new Set('för förra förre första förr före föra född födde följa följer följt fyra fyr fem förslag'.split(' '));
/* Whole words that only look like a compound. */
const NOCOMP = new Set('centrum porträtt pingvin'.split(' '));
/* Compound stress on the second part (place names). */
const STRESS_LAST = new Set('göteborg varför'.split(' '));
/* Three-syllable words whose first-syllable stress was checked, so the tool stays quiet. */
const NOWARN = new Set('uppsala åttio trettio fyrtio femtio sextio sjuttio nittio william köttbullar kiruna hundra morgonen arbetar jättegott huvudet huvud'.split(' '));

const HEADS = `middag förmiddag eftermiddag måltid framtid fritid alltid
dag tid natt vecka månad morgon kväll rum hus väg gata plats stad kort bil buss tåg plan
affär butik mat rätt bröd ost fisk kött bulle kaka vatten mjölk vin saft glass fika kaffe
bok film musik person barn vän familj jobb arbete nummer pris krona hand huvud öga öra ben arm
skola klass lärare station central hållplats flygplats hotell nyckel väska biljett
duk slag namn del sätt mål språk land ort gård trägård kök sovrum vardagsrum badrum bullar bullarna
kontor möte schema kalender väder karta riktning håll gås borg holm bullar bullarna lärare läkare för`.split(/\s+/).filter(s => s.length >= 3).sort((a, b) => b.length - a.length);

const BIG = new Set('tjugo trettio fyrtio femtio sextio sjuttio åttio nittio hundra tusen'.split(' '));
const NUM = ['tjugo', 'trettio', 'fyrtio', 'femtio', 'sextio', 'sjuttio', 'åttio', 'nittio', 'hundra', 'tusen',
  'sjutton', 'sexton', 'femton', 'fjorton', 'tretton', 'arton', 'nitton', 'elva', 'tolv',
  'åtta', 'nio', 'tio', 'sju', 'sex', 'fem', 'fyra', 'tre', 'två', 'ett', 'en'].sort((a, b) => b.length - a.length);

const LETTER = { a: 'ah', b: 'bay', c: 'say', d: 'day', e: 'ay', f: 'ehf', g: 'gay', h: 'hoh', i: 'ee', j: 'jee',
  k: 'koh', l: 'ehl', m: 'ehm', n: 'ehn', o: 'ooh', p: 'pay', q: 'kueh', r: 'aehr', s: 'ehs', t: 'tay', u: 'ueh',
  v: 'vay', w: 'doohb-ehl-VAY', x: 'ehks', y: 'ew', z: 'SAY-tah', 'å': 'oh', 'ä': 'ae', 'ö': 'euh' };

const VOWEL = 'aeiouyåäöéàü';
const FRONT = 'eiyäöé';
const isV = c => !!c && VOWEL.includes(c);

function parseResp(s) {
  const syl = s.split('-');
  let st = syl.findIndex(x => /[A-ZÅÄÖ]/.test(x));
  return { syl: syl.map(x => x.toLowerCase()), st: st < 0 ? 0 : st };
}
const LEX = {};
LEX_SRC.trim().split(/\s+/).filter(Boolean).forEach(e => {
  const i = e.indexOf('=');
  if (i > 0) LEX[e.slice(0, i)] = parseResp(e.slice(i + 1));
});

function token(q, long) {
  const T = {
    a: ['ah', 'ah'], e: ['eh', 'ay'], i: ['ih', 'ee'], o: ['aw', 'ooh'], u: ['uh', 'ueh'], y: ['yw', 'ew'],
    'å': ['aw', 'oh'], 'ä': ['eh', 'ae'], 'ö': ['ur', 'euh'],
    ej: ['ey', 'ey'], aj: ['ai', 'ai'], oj: ['oy', 'oy'], au: ['ow', 'ow']
  };
  const row = T[q] || ['eh', 'eh'];
  return row[long ? 1 : 0];
}

/* Letters to phoneme units. Soft k/g/sk only in the onset before the first vowel, unless HARD. */
function units(w) {
  const u = [];
  const V = q => u.push({ k: 'V', q });
  const C = (s, o) => u.push(Object.assign({ k: 'C', s: s }, o || {}));
  const hard = HARD.has(w);
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1] || '', n2 = w[i + 2] || '';
    if (isV(c)) {
      const two = c + n;
      if (two === 'ej' || two === 'äj') { V('ej'); i++; continue; }
      if (two === 'aj') { V('aj'); i++; continue; }
      if (two === 'oj') { V('oj'); i++; continue; }
      V(c === 'é' || c === 'à' ? (c === 'é' ? 'e' : 'a') : (c === 'ü' ? 'y' : c));
      continue;
    }
    const beforeFirst = !w.slice(0, i).split('').some(isV);
    if (c === 's' && n === 'k' && n2 === 'j') { C('sj', { close: true }); i += 2; continue; }
    if (c === 's' && n === 't' && n2 === 'j') { C('sj', { close: true }); i += 2; continue; }
    if (c === 's' && n === 'j') { C('sj', { close: true }); i++; continue; }
    if (c === 's' && n === 'c' && n2 === 'h') { C('sj', { close: true }); i += 2; continue; }
    if (c === 'c' && n === 'h') { C('sj', { close: true }); i++; continue; }
    if (c === 't' && n === 'j') { C('tj', { close: true }); i++; continue; }
    if (c === 'k' && n === 'j') { C('tj', { close: true }); i++; continue; }
    if ('dhlg'.includes(c) && n === 'j') { C('j'); i++; continue; }
    if (c === 'c' && n === 'k') { C('k', { close: true }); i++; continue; }
    if (c === 'n' && n === 'g') { C('ng', { close: true }); i++; continue; }
    if (c === 'g' && n === 'n' && w.slice(0, i).split('').some(isV)) { C('ng'); C('n'); i++; continue; }
    if (c === 'r' && n && 'tdnls'.includes(n) && w[i - 1] !== 'r') {
      C({ t: 'rt', d: 'rd', n: 'rn', l: 'rl', s: 'rsh' }[n], { retro: true }); i++; continue;
    }
    if (c === 's' && n === 'k') {
      const soft = !hard && beforeFirst && FRONT.includes(w[i + 2] || '');
      C(soft ? 'sj' : 'sk', { close: !soft }); i++; continue;
    }
    if ((c === 'k' || c === 'g') && beforeFirst && !hard && FRONT.includes(n)) { C(c === 'k' ? 'tj' : 'j'); continue; }
    if (c === 'q' && n === 'u') { C('k'); C('v'); i++; continue; }
    if (c === n && 'bcdfgklmnprst'.includes(c)) { C(c, { close: true }); i++; continue; }
    if (c === 'x') { C('k'); C('s'); continue; }
    if (c === 'z' || c === 'c') { C(c === 'c' && n && !FRONT.includes(n) ? 'k' : 's'); continue; }
    if (c === 'w') { C('v'); continue; }
    if (/[a-zåäö]/.test(c)) { C(c); continue; }
    throw new Error('cannot respell "' + c + '" in "' + w + '": write numbers and symbols as words');
  }
  return u;
}

const ONSET2 = new Set('st sp sk sl sn sm sv pr tr kr br dr gr fr pl bl kl gl fl kn kv'.split(' '));
function onsetOk(cs) {
  if (!cs.length) return true;
  if (cs.length === 1 && !['rt', 'rd', 'rn', 'rl', 'rsh', 'ng'].includes(cs[0].s)) return true;
  if (cs.length === 2 && ONSET2.has(cs[0].s + cs[1].s)) return true;
  return false;
}

function markLength(w, u) {
  const vi = [];
  u.forEach((x, i) => { if (x.k === 'V') vi.push(i); });
  if (!vi.length) throw new Error('no vowel in "' + w + '": write numbers and symbols as words');
  vi.forEach((idx, k) => {
    const end = k + 1 < vi.length ? vi[k + 1] : u.length;
    const cs = u.slice(idx + 1, end);
    let n = 0, closing = false, retro = false;
    cs.forEach(c => { n += 1; if (c.close) closing = true; if (c.retro) retro = true; });
    u[idx].shortGuess = closing || n >= 2;
    u[idx].gem = closing;
    u[idx].retro = retro;
    u[idx].nC = n;
  });
  return vi;
}

function applyStressLength(w, u, vi, stV) {
  const v = u[vi[stV]];
  if (SHORT.has(w) && stV === 0) { v.long = false; v.forceC = true; }
  else if (v.retro && SHORT_RETRO.has(w) && stV === 0) v.long = false;
  else if (stV === 0 && v.shortGuess) v.long = false;
  else if (stV === 0 && v.nC <= 1 && !v.shortGuess) v.long = true;
  else v.long = !v.shortGuess;
  vi.forEach((idx, k) => {
    if (k !== stV) u[idx].long = false;
    u[idx].stress = k === stV;
  });
  /* -het keeps a long e (nyhet, lägenhet), even though that syllable is not the main stress. */
  if (/het$/.test(w) && vi.length >= 2) {
    const last = u[vi[vi.length - 1]];
    if (last.q === 'e') last.long = true;
  }
}

function syllabify(u) {
  const vi = [];
  u.forEach((x, i) => { if (x.k === 'V') vi.push(i); });
  const syl = vi.map(i => ({ on: [], v: u[i], co: [] }));
  for (let i = 0; i < vi[0]; i++) syl[0].on.push(u[i]);
  for (let k = 0; k < vi.length; k++) {
    const end = k + 1 < vi.length ? vi[k + 1] : u.length;
    const cs = u.slice(vi[k] + 1, end);
    if (k + 1 === vi.length) { syl[k].co = cs; break; }
    let toPrev;
    if (!cs.length) toPrev = 0;
    else     if (cs.length === 1 && cs[0].retro) toPrev = 1;
    else if ((!syl[k].v.long && syl[k].v.stress) || cs[0].close) toPrev = onsetOk(cs.slice(1)) ? 1 : Math.max(1, cs.length - 1);
    else if (onsetOk(cs)) toPrev = 0;
    else if (cs.length >= 2 && onsetOk(cs.slice(-2))) toPrev = cs.length - 2;
    else toPrev = cs.length - 1;
    syl[k].co = cs.slice(0, toPrev);
    syl[k + 1].on = cs.slice(toPrev);
  }
  return syl;
}

function renderSyl(s) {
  let co = s.co.map(c => c.s);
  const tok = token(s.v.q, !!s.v.long);
  /* short ö is written ur; a plain following r is already in that token. A geminate keeps one r (dörr). */
  /* short ö is already "ur"; drop one written r so dörr stays durr and första stays fursh */
  if (tok === 'ur' && co[0] && (co[0] === 'r' || co[0].charAt(0) === 'r')) {
    if (co[0] === 'r') { if (!s.co[0].close) co = co.slice(1); }
    else co[0] = co[0].slice(1);
  }
  let coda = co.join('');
  /* short a uses the same letters as long a: double a single coda consonant so mat and matt stay apart */
  /* Double a single coda only for a real geminate (tt, ck) or a SHORT-set word (han, fram). A cluster split must not invent rr. */
  if (s.v.q === 'a' && s.v.stress && !s.v.long && coda.length === 1 && (s.v.gem || s.v.forceC) && /[bdfghjklmnprstv]/.test(coda)) coda += coda;
  return s.on.map(c => c.s).join('') + tok + coda;
}

function simpleStressIndex(w, nSyl) {
  if (nSyl <= 1) return 0;
  if (/ell[aet]?$/.test(w)) return nSyl - 1;
  if (/sjonen$|sjoner$/.test(w) && nSyl >= 2) return nSyl - 2;
  if (/sjon/.test(w)) return nSyl - 1;
  if (/era(r|de|t)?$/.test(w) && nSyl >= 2) return nSyl - 2;
  return 0;
}

const warned = new Set();
function analyzeSimple(w) {
  const u = units(w);
  const vi = markLength(w, u);
  const st = Math.min(simpleStressIndex(w, vi.length), vi.length - 1);
  applyStressLength(w, u, vi, st);
  const syl = syllabify(u).map(renderSyl);
  const nativeEnd = /(ade|ande|arna|erna|orna|het|ling|ning|are|ska)$/.test(w);
  if ((arguments[1] || 0) === 0 && st === 0 && vi.length >= 3 && !nativeEnd && !NOWARN.has(w) && !warned.has(w)) {
    warned.add(w);
    process.stderr.write('respell: check stress of «' + w + '» (default rule: first syllable). If wrong, add it to LEX in respell.js.\n');
  }
  return { syl, st };
}

function hasV(w) { return w.split('').some(isV); }

function numSplit(w) {
  const parts = [];
  let i = 0;
  while (i < w.length) {
    const p = NUM.find(x => w.startsWith(x, i));
    if (!p) return null;
    parts.push(p);
    i += p.length;
  }
  if (parts.length < 2 || !parts.some(p => BIG.has(p))) return null;
  return parts;
}

function join(parts, stressPart) {
  const syl = [];
  let st = 0;
  parts.forEach((p, k) => {
    if (k === stressPart) st = syl.length + (p.st || 0);
    syl.push(...p.syl);
  });
  return { syl, st: Math.min(st, syl.length - 1) };
}

function analyze(w, depth) {
  depth = depth || 0;
  if (LEX[w]) return LEX[w];
  const tion = w.match(/^(.*)tion(en|er|s)?$/);
  if (tion && tion[1] && hasV(tion[1])) {
    const bits = [analyze(tion[1], depth + 1), { syl: ['sjoohn'], st: 0 }];
    if (tion[2] === 'en') bits.push({ syl: ['ehn'], st: 0 });
    else if (tion[2] === 'er') bits.push({ syl: ['ehr'], st: 0 });
    const r = join(bits, 1);
    if (tion[2] === 's') r.syl[r.syl.length - 1] += 's';
    return r;
  }
  const ns = numSplit(w);
  if (ns) return join(ns.map(p => analyze(p, depth + 1)), 0);
  if (!NOCOMP.has(w) && depth < 4) {
    for (const h of HEADS) {
      if (w.length <= h.length || !w.endsWith(h)) continue;
      const left = w.slice(0, -h.length);
      if (left.length < 3 || !hasV(left)) continue;
      const stressPart = STRESS_LAST.has(w) ? 1 : 0;
      return join([analyze(left, depth + 1), analyze(h, depth + 1)], stressPart);
    }
  }
  if (!NOPREFIX.has(w) && depth < 4) {
    for (const pre of ['för', 'be']) {
      if (!w.startsWith(pre) || w.length < pre.length + 3) continue;
      const rest = w.slice(pre.length);
      if (!hasV(rest) || isV(rest[0])) continue;
      const a = analyze(rest, depth + 1);
      return { syl: [pre === 'för' ? 'fur' : 'beh'].concat(a.syl), st: 1 + (a.st || 0) };
    }
  }
  return analyzeSimple(w, depth);
}

function out(r) {
  if (!r.syl.length) return '';
  if (r.syl.length === 1) return r.syl[0];
  return r.syl.map((s, i) => (i === r.st ? s.toUpperCase() : s)).join('-');
}

function word(raw) {
  let w = raw.normalize('NFC').replace(/[’‘ʼ`´']/g, '');
  if (!w) return '';
  if (/\d/.test(w)) throw new Error('digit in "' + raw + '": write numbers as words');
  const low = w.toLowerCase();
  if (LEX[low]) return out(LEX[low]);
  if (low.length === 1 && LETTER[low]) return LETTER[low];
  if (/^[A-ZÅÄÖ]{2,5}$/.test(w)) {
    const l = [...low].map(c => LETTER[c] || c);
    l[l.length - 1] = l[l.length - 1].toUpperCase();
    return l.join('-');
  }
  if (low.includes('-')) {
    const parts = low.split('-').filter(Boolean).map(p => (p.length === 1 && LETTER[p] ? parseResp(LETTER[p]) : analyze(p)));
    return out(join(parts, 0));
  }
  return out(analyze(low));
}

function respell(text) {
  return String(text).replace(/[¿¡?!.,;:"“”„«»()…–—/]/g, ' ').trim().split(/\s+/).filter(Boolean).map(word).filter(Boolean).join(' ');
}

/* Legal aid strings. Letters a–z except c, q, x, z.
   Vowel tokens: ah ay ae aw ai, eh ee ew euh ey, oh oo ow oy, uh ue ur, ih yw.
   a only before h y e w i. e (unless after e or a) only before h e w u y.
   o (unless after o) only before h e o w y. u only before h e r.
   i only before h or e, unless it is the aj diphthong (i after a). y only before w, unless it is ay/ey/oy.
   Long u is ueh and long ö is euh, so the marker h keeps a following consonant legal. */
function pronPattern() {
  const letters = 'abdefghijklmnoprstuvwy';
  const L = '[' + letters + ']+';
  const U = '[' + letters.toUpperCase() + ']+';
  const word = '(?:' + L + '|(?:' + L + '-)+' + U + '(?:-' + L + ')*|(?:' + L + '-)*' + U + '(?:-' + L + ')+)';
  const bans = [
    '(?!.*[cCqQxXzZ])',
    '(?!.*[aA](?![hHyYeEwWiI]))',
    '(?!.*(?<![eEaA])[eE](?![hHeEwWuUyY]))',
    '(?!.*(?<![oO])[oO](?![hHeEoOwWyY]))',
    '(?!.*[uU](?![hHeErR]))',
    '(?!.*(?<![aA])[iI](?![hHeE]))',
    '(?!.*(?<![aAeEoO])[yY](?![wW]))'
  ];
  return '^' + bans.join('') + word + '(?: ' + word + ')*$';
}

module.exports = { respell, pronPattern };
if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--pattern') console.log(pronPattern());
  else for (const x of a) console.log(x, '->', respell(x));
}
