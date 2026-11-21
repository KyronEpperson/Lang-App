/* Danish spelling -> en-da pron respelling (profile docs/profiles/en-da.md §6).
   Standard Danish, Copenhagen, careful citation form. Deterministic.
   Usage: node respell.js "Huset er rødt."  ->  Huset er rødt. -> HOO-suhdh eh roedh
          node respell.js --pattern         prints pronPattern
   The aid shows soft d (dh), silent d, and swallowed -e / -er / -et.
   It does NOT mark the stød. Vowels are a coarse cover, not a transcription.
   When a word is wrong, add it to LEX. Never hand-edit a pron in a deck or lesson. */
'use strict';

/* Whole-word overrides. Lowercase key, stressed syllable already in capitals.
   Inflected forms are NOT derived: Danish endings change the sound (soft d, swallowed -er). */
const LEX_SRC = `
og=aw det=deh jeg=yai mig=mai dig=dai sig=sai de=dee
vil=vehl til=tehl gik=gehk dag=da bog=baw tog=taw sprog=spraw også=AW-saw
meget=maidh havde=HA-dhuh hvor=vaw sagt=sagt
kom=kawm som=sawm om=awm
københavn=koe-buhn-HAWN aarhus=AW-hoos århus=AW-hoos aalborg=AWL-baw aabenraa=AW-buhn-raw
odense=OH-dhuhn-suh
halvtreds=hal-TREHS tres=trehs halvfjerds=hal-FYEHS firs=feers halvfems=hal-FEHMS
tredive=TREH-dhuh fyrre=FOE-uh tolv=tawl
hundrede=HOON-ruh-dhuh tusind=TOO-sehn
godmorgen=goh-MAW-uhn goddag=goh-DA godaften=goh-AF-uhn godnat=goh-NAT
farvel=fa-VEHL værsgo=VEHS-gaw
smørrebrød=SMOE-uh-broedh rugbrød=ROO-broedh kanelsnegl=ka-NUHL-snehl
bedstemor=BEH-dhuh-moh bedstefar=BEH-dhuh-fa
fordi=foh-DEE aldrig=AL-dree hvordan=vaw-DAN
station=sta-SHOHN stationen=sta-SHOH-nuhn
`;

const LEX = {};
LEX_SRC.trim().split(/\s+/).forEach(e => {
  const i = e.indexOf('=');
  if (i < 1) throw new Error('bad LEX entry ' + e);
  LEX[e.slice(0, i)] = e.slice(i + 1);
});

/* be- is unstressed only on these. Other be- words (bedre, bede, ben) stay whole. */
const BE = new Set(`betale betaler betalte bestille bestiller besøge besøger begynde begynder
behøve behøver beslutte beslutter betyde betyder besked`.split(/\s+/));

const VOWEL = 'aeiouyæøåé';
const isV = c => !!c && VOWEL.includes(c);

function scan(w) {
  const g = [];
  const V = (s, letters) => g.push({ t: 'V', s, letters: letters || s });
  const C = (out, o) => g.push(Object.assign({ t: 'C', out }, o || {}));
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1] || '', n2 = w[i + 2] || '';
    if (i === 0 && c === 'a' && n === 'a') { V('å', 'aa'); i++; continue; }
    if (isV(c)) {
      if ((c === 'e' || c === 'a') && n === 'j') { V(c === 'a' ? 'aj' : 'ej', c + 'j'); i++; continue; }
      if (c === 'ø' && n === 'j') { V('øj', 'øj'); i++; continue; }
      V(c === 'é' ? 'e' : c, c);
      continue;
    }
    if (c === 'h' && (n === 'j' || n === 'v') && (i === 0 || !isV(w[i - 1] || ''))) {
      C(n === 'j' ? 'y' : 'v', { letters: 'h' + n }); i++; continue;
    }
    if (c === 's' && n === 'j') { C('sh', { letters: 'sj' }); i++; continue; }
    if (c === 'n' && n === 'g') { C('ng', { letters: 'ng', close: true }); i++; continue; }
    if ((c === 'n' || c === 'l' || c === 'r') && n === 'd') {
      /* nd ld rd: d is silent. n and l still shorten the vowel; rd is just the coda r. */
      C(c === 'r' ? 'r' : c, { letters: c + 'd', silentD: true, close: false }); i++; continue;
    }
    if (c === 'd' && n === 'd') { C('dh', { letters: 'dd', soft: true, dbl: true }); i++; continue; }
    if (c === n && 'bcdfgklmnprstv'.includes(c)) {
      const lenis = { k: 'g', p: 'b', t: 'd' }[c];
      /* doubled k p t -> unaspirated g b d. The double starts the next syllable and keeps the vowel short. */
      C(lenis || c, { letters: c + c, dbl: true, close: false });
      i++; continue;
    }
    if (c === 'd' && (n === 't' || n === 's') && g.length && g[g.length - 1].t === 'V') continue; /* godt, plads: d is silent */
    if (c === 'g' && (n === 't' || n === 's') && g.length && g[g.length - 1].t === 'V') continue;
    if (c === 'd') {
      const prev = g[g.length - 1];
      if (prev && prev.t === 'V') C('dh', { letters: 'd', soft: true });
      else C('d', { letters: 'd' });
      continue;
    }
    if (c === 'j') { C('y', { letters: 'j' }); continue; }
    if (c === 'g') {
      const prev = g[g.length - 1];
      const tail = !n || isV(n);
      if (prev && prev.t === 'V' && tail) {
        const front = 'eiyæøé'.includes(prev.s) || prev.s === 'ej' || prev.s === 'aj';
        C(front ? 'y' : 'w', { letters: 'g', glide: true });
      } else C('g', { letters: 'g' });
      continue;
    }
    if (c === 'v') {
      const prev = g[g.length - 1];
      if (prev && prev.t === 'V') C('w', { letters: 'v', glide: true });
      else C('v', { letters: 'v' });
      continue;
    }
    if (c === 'c') { C('eiyæø'.includes(n) ? 's' : 'k', { letters: 'c' }); continue; }
    if (c === 'x') { C('k', { letters: 'x' }); C('s', { letters: '' }); continue; }
    if (c === 'z') { C('s', { letters: 'z' }); continue; }
    if (c === 'q') { C('k', { letters: 'q' }); continue; }
    if (c === 'w') { C('w', { letters: 'w' }); continue; }
    if (c === 'r') { C('r', { letters: 'r' }); continue; }
    if (/[a-z]/.test(c)) { C(c, { letters: c }); continue; }
    throw new Error('cannot respell "' + c + '" in "' + w + '": write numbers and symbols as words');
  }
  return g;
}

function syllabify(gs) {
  const vIdx = [];
  gs.forEach((x, i) => { if (x.t === 'V') vIdx.push(i); });
  if (!vIdx.length) throw new Error('no vowel');
  const syl = vIdx.map(i => ({ v: gs[i], on: [], co: [] }));
  for (let i = 0; i < vIdx[0]; i++) syl[0].on.push(gs[i]);
  for (let k = 0; k < vIdx.length; k++) {
    const from = vIdx[k] + 1;
    const to = k + 1 < vIdx.length ? vIdx[k + 1] : gs.length;
    let cons = gs.slice(from, to);
    if (k === vIdx.length - 1) {
      syl[k].co = cons.filter(c => c.out !== 'r'); /* coda r is swallowed */
      break;
    }
    let toPrev;
    if (cons.length === 0) toPrev = 0;
    else if (cons.length === 1) toPrev = cons[0].close ? 1 : 0;
    else if (cons[0].soft && cons[1].out === 'r') toPrev = 0; /* bedre: dh+r start the next syllable */
    else if (cons[0].close) toPrev = 1;
    else toPrev = 1;
    syl[k].co = cons.slice(0, toPrev);
    syl[k + 1].on = cons.slice(toPrev);
  }
  return syl;
}

function closes(c) {
  if (!c) return false;
  if (c.dbl || c.close) return true;
  /* nd and ld shorten the vowel. rd does not: it is the same swallowed r as a plain r, and the stød is what separates mor/mord. */
  return !!(c.silentD && c.out !== 'r');
}
function isShort(syl, next) {
  if (syl.co.some(closes)) return true;
  if (syl.co.length >= 2) return true;
  if (next && next.on.some(closes)) return true;
  if (!next && syl.co.length === 1) {
    const o = syl.co[0].out;
    if (!syl.co[0].soft && !syl.co[0].glide && 'ptksf'.includes(o[0]) && o !== 'sh') return true;
  }
  return false;
}

function vSym(s, short) {
  if (s === 'ej' || s === 'aj') return 'ai';
  if (s === 'øj') return 'oy';
  if (s === 'æ') return 'ae';
  if (s === 'ø') return 'oe';
  if (s === 'å') return 'aw';
  if (s === 'y') return 'ew';
  if (s === 'u') return 'oo';
  if (s === 'a') return 'a';
  if (s === 'e') return 'eh';
  if (s === 'i') return short ? 'eh' : 'ee';
  if (s === 'o') return short ? 'aw' : 'oh';
  return 'eh';
}

function renderSyl(syl, short, asUh) {
  let on = syl.on.slice();
  let co = syl.co.slice();
  /* coda r is swallowed into the vowel. A lone r before an unstressed e is the same swallowed ending.
     r inside a cluster (venstre, bedre) stays, because it is still a consonant. */
  co = co.filter(c => c.out !== 'r');
  if (asUh && on.length === 1 && on[0].out === 'r') on = [];
  /* -et: the t of an unstressed e-syllable is the soft d, not a t */
  if (asUh && co.length === 1 && co[0].out === 't' && co[0].letters === 't') co = [{ out: 'dh' }];
  const sym = asUh ? 'uh' : vSym(syl.v.s, short);
  return on.map(c => c.out).join('') + sym + co.map(c => c.out).join('');
}

function coreWord(w) {
  let prefix = '';
  let tail = '';
  let core = w;
  if (BE.has(w)) { prefix = 'buh'; core = w.slice(2); }
  else if (/tion$/.test(w) && w.length > 4) {
    /* station, nation: the -tion syllable takes the stress */
    tail = 'shohn';
    core = w.slice(0, -4);
  }
  const gs = scan(core);
  const syl = syllabify(gs);
  const parts = syl.map((s, i) => {
    const next = syl[i + 1];
    const short = isShort(s, next);
    /* a lone stressed e is eh; any later e, and every e when -tion takes the stress, is uh */
    const uh = s.v.s === 'e' && (tail || i !== 0);
    return renderSyl(s, short, uh);
  });
  if (prefix) parts.unshift(prefix);
  if (tail) parts.push(tail);
  const stressAt = tail ? parts.length - 1 : (prefix ? 1 : 0);
  if (parts.length >= 4 && !tail && !prefix) {
    console.error('stress unchecked (default first syllable): ' + w);
  }
  if (parts.length === 1) return parts[0];
  return parts.map((p, i) => i === stressAt ? p.toUpperCase() : p).join('-');
}

/* femogtyve, toogtyve = a small number + the word og [ʌ] + a ten.
   Only those pairs. sprog, toget and også are not split. */
const NUM_L = new Set('en to tre fire fem seks syv otte ni ti elleve tolv tretten fjorten femten seksten sytten atten nitten'.split(' '));
const NUM_R = new Set('tyve tredive fyrre halvtreds tres halvfjerds firs halvfems hundrede'.split(' '));
function splitOg(w) {
  for (let i = 0; i <= w.length - 2; i++) {
    if (w.slice(i, i + 2) !== 'og') continue;
    const left = w.slice(0, i), right = w.slice(i + 2);
    if (NUM_L.has(left) && NUM_R.has(right)) return oneWord(left).toLowerCase() + '-aw-' + oneWord(right);
  }
  return null;
}

function oneWord(raw) {
  let w = raw.normalize('NFC').replace(/[’‘ʼ`´']/g, '');
  if (!w) return '';
  if (/\d/.test(w)) throw new Error('digit in "' + raw + '": write numbers as words');
  const key = w.toLowerCase();
  if (LEX[key]) return LEX[key];
  const og = splitOg(key);
  if (og) return og;
  if (key.includes('-')) {
    const bits = key.split('-').filter(Boolean).map(oneWord);
    const flat = bits.join('-').split('-');
    /* one stress: keep the first capital syllable, lowercase the rest */
    let seen = false;
    const out = flat.map(s => {
      if (!seen && /[A-Z]/.test(s)) { seen = true; return s; }
      return s.toLowerCase();
    });
    if (!seen && out.length > 1) out[0] = out[0].toUpperCase();
    if (out.length === 1) return out[0].toLowerCase();
    return out.join('-');
  }
  return coreWord(key);
}

/* "at" is two words. Infinitive at (at spise) is [ʌ], homophone of og.
   Conjunction at (at du…) is [æ] or [æd̥]. Pronouns after at select the conjunction. */
const AT_CONJ = new Set('du dig jeg mig han ham hun hende vi os de dem i jer man den det der en et som hvis når fordi'.split(' '));

function respell(text) {
  const raw = String(text).replace(/[?!.,;:"“”„«»()…–—/]/g, ' ').trim().split(/\s+/).filter(Boolean);
  const out = raw.map((tok, i) => {
    const key = tok.normalize('NFC').replace(/[’‘ʼ`´']/g, '').toLowerCase();
    if (key === 'at') {
      const nxt = raw[i + 1] ? raw[i + 1].normalize('NFC').replace(/[’‘ʼ`´']/g, '').toLowerCase() : '';
      return AT_CONJ.has(nxt) ? 'a' : 'aw';
    }
    return oneWord(tok);
  }).filter(Boolean);
  return out.join(' ');
}

function pronPattern() {
  const V = '(?:ee|ew|eh|oh|oo|aw|ae|oe|uh|ai|oy|a|i)';
  const Vu = '(?:EE|EW|EH|OH|OO|AW|AE|OE|UH|AI|OY|A|I)';
  const C = '(?:dh|ng|sh|[bdfghklmnprstvwyz])';
  const Cu = '(?:DH|NG|SH|[BDFGHKLMNPRSTVWYZ])';
  const sl = C + '*' + V + C + '*';
  const su = Cu + '*' + Vu + Cu + '*';
  const w = '(?:' + sl + '|(?:' + sl + '-)*' + su + '(?:-' + sl + ')+|(?:' + sl + '-)+' + su + ')';
  return '^' + w + '(?: ' + w + ')*$';
}

module.exports = { respell, pronPattern, LEX };
if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--pattern') console.log(pronPattern());
  else if (a[0] === '--lex') {
    for (const k of Object.keys(LEX)) {
      const p = LEX[k];
      if (!new RegExp(pronPattern(), 'u').test(p)) console.error('LEX FAIL', k, p);
    }
    console.log('lex', Object.keys(LEX).length);
  } else for (const x of a) console.log(x, '->', respell(x));
}
