/* European Portuguese (Lisbon) spelling -> en-ptpt pron respelling (profile docs/profiles/en-ptpt.md §6).
   Deterministic per word, so every writer gets the same string. Not Brazilian Portuguese.
   Usage: node respell.js "Bom dia!"   ->   Bom dia! -> bohng DEE-uh
          node respell.js --pattern     ->   the pronPattern source
   Key (summary; full key in the profile):
     vowels   ah (stressed a)  uh (unstressed a, and stressed a before a nasal or lh/nh; also [ɐ])
              ih (unstressed e, the short [ɨ], often nearly silent)  eh (open e)  ay (closed e, no English glide)
              ee  aw (open o)  oh (closed o, and ou)  oo (u, and unstressed o)
              ahy (ai, as in eye; not the English ai of rain)  uhy (Lisbon ei = [ɐj])  oy  ow (stressed au)  uhw (unstressed au)
              ayw (eu)  ehw (éu)  eew (iu)  ooy (ui)  awy (ói)
     nasal    -ng after the vowel: uhng (ã)  owng (ão, final -am)  uhyng (ãe, and final -em: same ending as mãe)
              oyng (õe)  eeng (-im)  ohng (-om)  oong (-um)
              before a stop the written m/n stays, and a stressed a in that spot is uh: kuhn-TAHR
     consonants  t and d stay t and d before i (not the Brazilian ch/j)
              sh (ch, x, and s/z at the end of a syllable before a pause or a voiceless consonant)
              zh (j, g before e/i, and syllable-final s/z before a voiced consonant)
              ly (lh: one palatal sound, written ly because English reads lh as l + h)  ny (nh: one palatal nasal, as in canyon)
              kh (Lisbon uvular r: word-initial r, rr, r after l/n/s)  r (tap: between vowels, in a cluster, and in the coda, including infinitives)
              z (s between vowels)  gh (hard g before eh/ee)  kw / gw
     CAPITALS = stressed syllable in words of 2+ syllables; one-syllable words are lowercase.
   Stress comes from the spelling (accent, then ã/õ, then the ending) and is reliable.
   The open or closed quality of a stressed e/o with no accent is not in the spelling: LEX, or closed by default, and a default is reported
   on stderr ("check vowel"). An x between vowels that no rule covers is reported ("check x").
   Do not copy Brazilian t/d palatalization, Brazilian final l as w, or Brazilian coda r as h / dropped.
   LEX notation: é ó = open, ê ô = closed. EXC holds a whole-word pron. */

const EXC = {
  /* ao is one syllable; the syllabifier would split the two strong vowels. Final s is sh. */
  'ao': 'ow', 'aos': 'owsh',
  /* muito: ui is a nasal diphthong [ũj̃]. Wiktionary Portugal /ˈmũj̃.tu/ (some speakers /ˈmũ.tu/). */
  'muito': 'MOOYNG-too', 'muita': 'MOOYNG-tuh', 'muitos': 'MOOYNG-toosh', 'muitas': 'MOOYNG-tuhsh',
  /* Unstressed o that is open /ɔ/ and does not reduce to [u]. */
  'obrigado': 'aw-bree-GAH-doo', 'obrigada': 'aw-bree-GAH-duh',
  'obrigados': 'aw-bree-GAH-doosh', 'obrigadas': 'aw-bree-GAH-duhsh',
  'você': 'vaw-SAY', 'vocês': 'vaw-SAYSH', 'olá': 'aw-LAH',
  /* euro: Wiktionary lists /ˈew.ɾɔ/ first, and also /ˈew.ɾu/. The tool uses the first. */
  'euro': 'AYW-raw', 'euros': 'AYW-rawsh',
  /* These words keep vowels the general rule would reduce, or the stress/glide is not in the spelling. */
  'telemóvel': 'teh-leh-MAW-vehl',
  'autocarro': 'ow-taw-KAH-khoo', 'autocarros': 'ow-taw-KAH-khoosh',
  'beatriz': 'byuh-TREESH',
  'coimbra': 'KWEEN-bruh',
  'mariana': 'muh-RYUH-nuh',
  'têm': 'TUHYNG-uhyng', 'vêm': 'VUHYNG-uhyng',
  /* preposition para is /pɐ.ɾɐ/; the verb form para (from parar) has a fuller a. One pron per string: the preposition. */
  'para': 'PUH-ruh',
  /* porque /ˈpuɾ.kɨ/: the stressed o is [u]. porquê is a different spelling. */
  'porque': 'POOR-kih',
  /* Lisbon i in Lisboa is [ɨ] between l and zh, not [i]. o is closed. */
  'lisboa': 'lihzh-BOH-uh',
  /* Portugal entry /ˈtɐ(j).ɲu/; the tool does not otherwise centralize e before nh. */
  'tenho': 'TUH-nyoo',
  /* Wiktionary keeps a full /a/ in the first syllable. */
  'amanhã': 'ah-muh-NYUHNG', 'aveiro': 'ah-VUHY-roo', 'além': 'ah-LUHYNG',
  /* Portugal IPA is one syllable /ˈʒwɐ̃w̃/, not the Brazilian hiatus. */
  'joão': 'zhwowng',
  /* Portugal /ˈtja.ɡu/, not a hiatus with stress on a. */
  'tiago': 'TYAH-goo',
  /* Portugal /alˈmo.su/: the first a stays /a/, and l is not a w. */
  'almoço': 'ahl-MOH-soo',
  /* plural is metaphonic: Portugal /alˈmɔ.suʃ/, open o, still with a full a and an l. */
  'almoços': 'ahl-MAW-soosh',
  /* fixo is [ks], not the default sh. fixe is sh and is handled below without a warning. */
  'fixo': 'FEEK-soo', 'fixos': 'FEEK-soosh',
  /* Checked on Wiktionary's Portugal line (read through kaikki.org, 2026-11-22):
     cinquenta /sĩˈkwẽ.tɐ/: the u is sounded; the general rule would make qu before e a plain k.
     açúcar /ɐˈsu.kaɾ/ (listed first; also /ɐˈsu.kɐɾ/): the unstressed final -ar keeps a full a.
     hospital /ɔʃ.piˈtal/: the first o is open and does not reduce.
     igualmente /iˌɡwalˈmẽ.tɨ/: the a before coda l stays a full a. */
  'cinquenta': 'seen-KWAYN-tuh',
  'açúcar': 'uh-SOO-kahr',
  'hospital': 'awsh-pee-TAHL',
  'igualmente': 'ee-gwahl-MAYN-tih',
};
const X_SH_OK = new Set(['fixe']);

/* Stressed e/o with no written accent, Lisbon quality only. Empty until a page confirms the vowel.
   Add a form only after checking it (é/ó open, ê/ô closed). Do not paste the Brazilian list:
   Portugal and Brazil disagree on many of these (António / Antônio, telefone, porta / Porto). */
const LEX_WORDS = `
pórta pórtas combóios pôrto sól hómem miguél pérto lógo quéro pósso fóme hóra agóra
éla élas métro pastél dezanóve dezasséte ésta póde déz séte nóve
telefóne combóio
senhôr senhôra senhôres gôsto bôa bôas hôje esquêrda prazêr comêr fazêr sêr têr
catôrze sômos têmos pêdro êle êles favôr jôgo mêsmo dêsde vêem pequêno pequêna cômo ôlho
`;
const plainOf = s => s.replace(/[éê]/g, 'e').replace(/[óô]/g, 'o').replace(/ü/g, 'u');
const LEX = {};
const XREAL = { 'tácsi': 'táxi', 'tócsico': 'tóxico', 'próssimo': 'próximo', 'mássimo': 'máximo', 'aussílio': 'auxílio', 'tróusse': 'trouxe', 'trousséram': 'trouxeram',
  'sécso': 'sexo', 'fícso': 'fixo', 'complécso': 'complexo', 'licho': 'lixo', 'lichos': 'lixos', 'futibol': 'futebol',
  'abacachi': 'abacaxi', 'cochinha': 'coxinha', 'puchar': 'puxar', 'púcha': 'puxa', 'púcho': 'puxo', 'rôcho': 'roxo', 'rôcha': 'roxa' };   /* annotated form -> real spelling */
const xPlain = a => XREAL[a] || plainOf(a);
LEX_WORDS.trim().split(/\s+/).forEach(a => {
  if (/[^a-zà-ÿü]/.test(a)) return;                      /* skip anything with stray characters */
  const p = xPlain(a);
  LEX[p] = a;
});

/* unstressed one-syllable words: a → uh, e → ih, o → oo. de = dih, que = kih, o = oo. Not the Brazilian jee / kee. */
const CLITIC = new Set('o os a as à às e de do dos da das no nos na nas em me te se lhe lhes que com sem por pra pro pros pras mas nem ou num lo la los las'.split(' '));

const VOW = 'aeiouáàâãéêíóôõúüy';
const isV = c => !!c && VOW.includes(c);
const ACUTE = 'áéíóú', CIRC = 'âêô';
const base = c => ({ 'á': 'a', 'à': 'a', 'â': 'a', 'ã': 'a', 'é': 'e', 'ê': 'e', 'í': 'i', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ú': 'u', 'ü': 'u', 'y': 'i' }[c] || c);
const warned = new Set();
const warn = (w, msg) => { const k = w + msg; if (warned.has(k)) return; warned.add(k); process.stderr.write('respell: check ' + msg + ' of «' + w + '». If wrong, add it to LEX in respell.js.\n'); };

/* 1. letters -> units. V units keep the letter; C units carry a code. */
function units(w) {
  const u = [];
  const C = (s, x) => u.push(Object.assign({ k: 'C', s }, x || {}));
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1], n2 = w[i + 2];
    if (isV(c) && c !== 'y') { u.push({ k: 'V', v: c }); continue; }
    if (c === 'y') { if (isV(n) && (i === 0 || !isV(w[i - 1]))) C('y'); else u.push({ k: 'V', v: 'i' }); continue; }
    switch (c) {
      case 't':
        if (n === 'c' && n2 === 'h') { C('TCH'); i += 2; continue; }
        if (n === 'h') { C('t'); i++; continue; }
        C('t'); continue;
      case 'c':
        if (n === 'h') { C('SH'); i++; continue; }
        if (n === 'ç' || (n === 'c' && 'eéêií'.includes(n2 || ''))) { C('k', { coda: true }); continue; }
        if ('eéêiíy'.includes(n || '')) { C('SS'); continue; }                                  /* c before e / i is always s, never z */
        C('c'); continue;
      case 'ç': C('SS'); continue;
      case 'l': if (n === 'h') { C('LY'); i++; continue; } C('l'); continue;
      case 'n': if (n === 'h') { C('NY'); i++; continue; } C('n'); continue;
      case 'r': if (n === 'r') { C('RR'); i++; continue; } C('r'); continue;
      case 's':
        if (n === 's') { C('SS'); i++; continue; }
        if (n === 'h') { C('SH'); i++; continue; }
        if ((n === 'c' && 'eéêií'.includes(n2 || '')) || n === 'ç') { C('SS'); i++; continue; }   /* nascer, desça */
        C('s'); continue;
      case 'x':
        if (n === 'c' && 'eéêií'.includes(n2 || '')) { C('SS'); i++; continue; }                 /* exceto */
        C('x'); continue;
      case 'q':
        if (n === 'ü' || (n === 'u' && 'aáâãoóôõ'.includes(n2 || ''))) { C('KW'); i++; continue; }
        if (n === 'u') { C('k'); i++; continue; }                                               /* que, quilo: u silent */
        C('k'); continue;
      case 'g':
        if ('eéêiíy'.includes(n || '')) { C('zh'); continue; }
        if (n === 'ü' || (n === 'u' && 'aáâãoóôõ'.includes(n2 || ''))) { C('GW'); i++; continue; }
        if (n === 'u' && 'eéêiíy'.includes(n2 || '')) { C('GU'); i++; continue; }              /* guerra, guitarra: u silent */
        C('g'); continue;
      case 'p': if (n === 'h') { C('f'); i++; continue; } C('p'); continue;
      case 'h': if (i > 0 && isV(w[i - 1]) && isV(n)) C('');  /* silent, but it keeps two vowels apart: Bahia = bah-EE-uh */
        continue;
      case 'j': C('zh'); continue;
      default:
        if (/[bdfkmvwz]/.test(c)) { C(c); continue; }
        throw new Error('cannot respell "' + c + '" in "' + w + '": write numbers and symbols as words');
    }
  }
  return u;
}

const INSEP = new Set(['pr', 'br', 'tr', 'dr', 'cr', 'kr', 'gr', 'fr', 'vr', 'pl', 'bl', 'cl', 'kl', 'gl', 'fl', 'tl']);
const STRONG = 'aáàâãeéêoóôõ';
const ISWEAK = v => 'iuü'.includes(v);           /* unaccented i / u: can be a glide */

/* 2. vowel runs -> nuclei; consonants -> onsets and codas */
function syllables(w) {
  const u = units(w);
  /* mark hiatus-forcing contexts: i / u after a vowel, followed by nh, or by l m n r z that closes the syllable (sair, ainda, juiz, ruim, rainha) */
  const nuc = [];
  for (let i = 0; i < u.length;) {
    if (u[i].k !== 'V') { i++; continue; }
    const start = i; let run = [];
    while (i < u.length && u[i].k === 'V') run.push(u[i++].v);
    const after = u.slice(i);                                       /* units after the run */
    const closes = () => {                                          /* does the run's last vowel get a closing l m n r z (not followed by a vowel)? */
      const a = after[0], b = after[1];
      if (!a) return false;
      if (a.s === 'NY') return true;
      if (['l', 'm', 'n', 'r', 'z'].includes(a.s) && (!b || b.k === 'C')) return true;
      return false;
    };
    /* split the run into nuclei */
    const groups = [];
    let cur = [run[0]];
    for (let k = 1; k < run.length; k++) {
      const a = run[k - 1], b = run[k], last = k === run.length - 1;
      const prevGroup = cur.join('');
      let join = false;
      if ((a === 'ã' && (b === 'o' || b === 'e')) || (a === 'õ' && b === 'e')) join = true;     /* ão, ãe, õe */
      else if (ISWEAK(b) && cur.length === 1 && !(last && closes()) && !(k + 1 < run.length && ISWEAK(run[k + 1]))) {   /* caiu = cah-EEW: i goes with the u */
        /* falling diphthong: a/e/o/i/u + unaccented i/u (pai, meu, ou, partiu, fui) */
        if (STRONG.includes(a) || (a === 'u' && b === 'i') || (a === 'i' && b === 'u') || (a === 'ú' && b === 'i')) join = true;
      }
      if (prevGroup.length >= 2) join = false;                                                    /* a nucleus holds at most two vowels */
      if (join) cur.push(b); else { groups.push(cur); cur = [b]; }
    }
    groups.push(cur);
    let pos = start;
    groups.forEach(g => { nuc.push({ a: pos, b: pos + g.length - 1, v: g }); pos += g.length; });
  }
  if (!nuc.length) throw new Error('no vowel in "' + w + '": write numbers and symbols as words');
  const syl = nuc.map(n => ({ nuc: n.v, onset: [], coda: [] }));
  for (let i = 0; i < nuc[0].a; i++) syl[0].onset.push(u[i]);
  for (let k = 0; k < nuc.length; k++) {
    const end = k + 1 < nuc.length ? nuc[k + 1].a : u.length;
    const cons = u.slice(nuc[k].b + 1, end);
    if (k + 1 === nuc.length) { syl[k].coda = cons; break; }
    let toPrev;
    const code = x => (x.s === 'c' ? 'c' : x.s);
    if (cons.length <= 1) toPrev = (cons.length === 1 && cons[0].coda) ? 1 : 0;
    else if (cons.length === 2) toPrev = INSEP.has(code(cons[0]) + code(cons[1])) ? 0 : 1;
    else toPrev = INSEP.has(code(cons[cons.length - 2]) + code(cons[cons.length - 1])) ? cons.length - 2 : cons.length - 1;
    syl[k].coda = cons.slice(0, toPrev); syl[k + 1].onset = cons.slice(toPrev);
  }
  return syl;
}

/* 3. stress: written accent, then ã / õ, then the ending rule */
function stressIndex(plainWord, syl) {
  const n = syl.length;
  if (n === 1) return 0;
  const ac = syl.findIndex(s => s.nuc.some(v => ACUTE.includes(v) || CIRC.includes(v)));
  if (ac >= 0) return ac;
  const til = syl.findIndex(s => s.nuc.some(v => v === 'ã' || v === 'õ'));
  if (til >= 0) return til;
  return /(a|e|o|as|es|os|am|em|ens)$/.test(plainWord) ? n - 2 : n - 1;
}

/* 4. stressed oral e / o with no accent: the spelling does not say open or closed.
   Nasal e/o are close-mid and never reach this function. No Brazilian suffix guesses. */
function quality(word, syl, si, v) {
  warn(word, 'vowel (stressed ' + v + ': default closed ' + (v === 'e' ? 'ay' : 'oh') + ')');
  return 'closed';
}

/* Stressed oral a is [ɐ] before a nasal or a palatal lh/nh (cama, banho, trabalho). */
function raisedA(syl, k) {
  const s = syl[k], next = syl[k + 1];
  const c0 = s.coda[0] && s.coda[0].s;
  /* lh does not raise a: trabalho is /tɾɐˈba.ʎu/. nh does: banho /ˈbɐ.ɲu/. */
  if (c0 === 'm' || c0 === 'n' || c0 === 'NY') return true;
  if (s.coda.length) return false;                     /* carne, alma: a closed syllable with a non-nasal coda keeps ah */
  const o = next && next.onset[0] && next.onset[0].s;
  return o === 'm' || o === 'n' || o === 'NY';
}
const VOICED = new Set(['b', 'd', 'g', 'GU', 'GW', 'l', 'm', 'n', 'r', 'v', 'zh', 'z', 'LY', 'NY']);
function codaPlain(coda, next) {
  return coda.map((c, j) => {
    if (c === 's' || c === 'x' || c === 'z') {
      const nx = j + 1 < coda.length ? coda[j + 1] : (next && next.onset[0] ? next.onset[0].s : '');
      return nx && VOICED.has(nx) ? 'zh' : 'sh';
    }
    if (c === 'c' || c === 'k') return 'k';
    if (c === 'r' || c === 'RR') return 'r';   /* coda r is the tap, including infinitives; not dropped, not kh */
    if (c === 'LY') return 'ly';
    if (c === 'NY') return 'ny';
    return String(c).toLowerCase();
  }).join('');
}

/* 5. syllables -> respelling */
/* final -am = [ɐ̃w̃]; final -em = the ending of mãe, [ɐ̃j̃], not the Brazilian [ẽj̃] */
const NASAL_FINAL = { a: 'owng', e: 'uhyng', i: 'eeng', o: 'ohng', u: 'oong' };
function realize(word, annotated, syl, si, clitic) {
  const n = syl.length;
  const out = [];
  for (let k = 0; k < n; k++) {
    const s = syl[k], stressed = k === si && !clitic, post = k > si, last = k === n - 1;
    const prev = syl[k - 1], next = syl[k + 1];
    const v0 = s.nuc[0], v1 = s.nuc[1];
    const coda = s.coda.map(x => x.s);
    let nucT = '', codaT = '', nasalDone = false;
    /* nucleus */
    if (v0 === 'ã' || v0 === 'õ' || v1 === 'o' && v0 === 'ã') {
      if (v0 === 'ã' && v1 === 'o') nucT = 'owng';
      else if (v0 === 'ã' && v1 === 'e') nucT = 'uhyng';                                          /* mãe: same ending as final -em */
      else if (v0 === 'õ' && v1 === 'e') nucT = 'oyng';
      else if (v0 === 'ã') nucT = 'uhng';
      else nucT = 'ohng';
      if (coda.includes('s')) codaT = 'sh';
      nasalDone = true;
    } else if (coda[0] === 'm' || coda[0] === 'n') {
      const b = base(v0);
      const finalNasal = last && coda.every(c => ['m', 'n', 's'].includes(c));
      if (finalNasal && !v1) {
        nucT = NASAL_FINAL[b];
        codaT = coda.includes('s') ? 'sh' : '';
      } else {
        /* m/n stays before a stop; the vowel is nasal and, for e/o, close-mid. a is [ɐ]. */
        const t = { a: 'uh', e: 'ay', i: 'ee', o: 'oh', u: 'oo' }[b];
        nucT = (v1 ? diph(v0, v1, stressed) : t);
        codaT = codaPlain(coda, next);
      }
      nasalDone = true;
    } else if (v1) {
      nucT = diph(v0, v1, stressed);
    } else {
      const b = base(v0);
      if (stressed) {
        if (b === 'a') nucT = (v0 === 'á' || v0 === 'à') ? 'ah' : (raisedA(syl, k) ? 'uh' : 'ah');
        else if (v0 === 'â') nucT = 'uh';
        else if (b === 'i' || b === 'u') nucT = b === 'i' ? 'ee' : 'oo';
        else {
          let q;
          if (v0 === 'é' || v0 === 'ó') q = 'open'; else if (v0 === 'ê' || v0 === 'ô') q = 'closed';
          else q = quality(word, syl, k, b);
          nucT = b === 'e' ? (q === 'open' ? 'eh' : 'ay') : (q === 'open' ? 'aw' : 'oh');
        }
      } else if (v0 === 'à' || v0 === 'á') {
        nucT = 'ah';
      } else if (word === 'e' && b === 'e') {
        nucT = 'ee';                                                                               /* conjunction e, unstressed, is /i/ */
      } else {
        /* unstressed a [ɐ], e [ɨ], o [u], in every position, not only at the end */
        nucT = { a: 'uh', e: 'ih', o: 'oo', i: 'ee', u: 'oo' }[b];
      }
    }
    /* coda l stays l (dark l). It does not become w. */
    if (!nasalDone) codaT = codaPlain(coda, next);
    /* onset. t and d are never ch/j. */
    let onT = '';
    s.onset.forEach((x, j) => {
      const c = x.s, first = j === 0;
      switch (c) {
        case 't': case 'd': onT += c; break;
        case 'c': onT += 'k'; break;
        case 'g': onT += 'g'; break;
        case 'GU': onT += /^(eh|ee|ehw|eew|ay)/.test(nucT) ? 'gh' : 'g'; break;
        case 'GW': onT += 'gw'; break;
        case 'KW': onT += 'kw'; break;
        case 'SH': onT += 'sh'; break;
        case 'TCH': onT += 'ch'; break;
        case 'LY': onT += 'ly'; break;                                              /* lh: an English reader says ly (million), not l + h */
        case 'NY': onT += 'ny'; break;                                              /* nh: ny as in canyon, not n + h */
        case 'RR': onT += 'kh'; break;
        case 'SS': onT += 's'; break;
        case 'r': {
          const pc = prev && prev.coda.length ? prev.coda[prev.coda.length - 1].s : '';
          onT += (k === 0 && first) || (first && ['n', 'l', 's'].includes(pc)) ? 'kh' : 'r'; break;
        }
        case 's': {
          const pc = prev && prev.coda.length;
          onT += (k === 0 || pc || !first) ? 's' : 'z'; break;
        }
        case 'x': {
          if (k === 0) { onT += 'sh'; break; }
          const pc = prev.coda.length ? prev.coda[prev.coda.length - 1].s : '';
          const pn = prev.nuc;
          if (pc === 'n' || (pn.length === 2 && ISWEAK(pn[1]))) { onT += 'sh'; break; }      /* enxame, caixa, peixe, frouxo */
          if (k === 1 && pn.length === 1 && base(pn[0]) === 'e' && !prev.onset.length) { onT += 'z'; break; }  /* exame, exemplo */
          if (!X_SH_OK.has(word)) warn(word, 'x (default sh)');
          onT += 'sh'; break;
        }
        case 'y': onT += 'y'; break;
        default: onT += c;
      }
    });
    out.push(onT + nucT + codaT);
  }
  return out;
}
function diph(v0, v1, stressed) {
  const a = base(v0), b = base(v1);
  if (b === 'i') {
    if (a === 'e') return 'uhy';                                                                   /* ei / éi / êi: Greater Lisbon [ɐj], not the Brazilian [ej] */
    if (a === 'o' && (v0 === 'ó' || v0 === 'ò')) return 'awy';
    return { a: 'ahy', o: 'oy', u: 'ooy' }[a] || 'ee';   /* ai is written ahy: an English reader says the letters ai as in rain */
  }
  if (b === 'u') {
    if (a === 'e') return v0 === 'é' ? 'ehw' : 'ayw';
    if (a === 'o') return 'oh';                                                                    /* ou is closed o in the Lisbon standard */
    if (a === 'a') return stressed ? 'ow' : 'uhw';
    return a === 'i' ? 'eew' : 'oo';
  }
  return { a: 'ah', e: 'ay', o: 'oh', i: 'ee', u: 'oo' }[a];
}

/* post-tonic i / u before a vowel becomes a glide: família -> fuh-MEE-yuh, rádio -> KHAH-dyoo */
function glides(syl, si) {
  for (let k = si + 1; k < syl.length - 1; k++) {
    const s = syl[k], t = syl[k + 1];
    if (s.nuc.length === 1 && ISWEAK(s.nuc[0]) && !s.coda.length && !t.onset.length) {
      t.onset = s.onset.concat([{ k: 'C', s: s.nuc[0] === 'i' ? 'y' : 'w', glide: true }]);
      syl.splice(k, 1); k--;
    }
  }
  return syl;
}

function word(raw) {
  let w = raw.normalize('NFC').toLowerCase().replace(/[’‘ʼ`´']/g, '');
  if (!w) return '';
  if (/\d/.test(w)) throw new Error('digit in "' + raw + '": write numbers as words');
  if (EXC[w]) return EXC[w];
  if (w.includes('-')) return w.split('-').filter(Boolean).map(word).join(' ');                   /* segunda-feira -> two words */
  const annotated = LEX[w] || w;
  const clitic = CLITIC.has(w);
  let syl = syllables(annotated);
  const plainW = plainOf(annotated).replace(/[áàâ]/g, 'a').replace(/í/g, 'i').replace(/ú/g, 'u');
  const si = stressIndex(plainW, syl);
  syl = glides(syl, si);
  const texts = realize(w, annotated, syl, si, clitic);
  if (texts.length === 1) return texts[0];
  return texts.map((t, i) => i === si ? t.toUpperCase() : t).join('-');
}

function respell(text) {
  return String(text).replace(/[¿¡?!.,;:"“”«»()…–—\/]/g, ' ').trim().split(/\s+/).filter(Boolean).map(word).filter(Boolean).join(' ');
}

/* The pattern the validator compiles with the u flag. pronPattern() is the source of profile.json. */
function pronPattern() {
  const C = '(?:gh|kh|lh|nh|sh|zh|ch|[bdfgjklmnprstvwyz])';
  const CU = '(?:GH|KH|LH|NH|SH|ZH|CH|[BDFGJKLMNPRSTVWYZ])';
  const V = '(?:uhy|uhw|ayw|ehw|eew|ooy|awy|ah|uh|ih|eh|ay|ee|aw|oh|oo|ai|oy|ow)';
  const VU = '(?:UHY|UHW|AYW|EHW|EEW|OOY|AWY|AH|UH|IH|EH|AY|EE|AW|OH|OO|AI|OY|OW)';
  const sl = C + '*' + V + C + '*';
  const su = CU + '*' + VU + CU + '*';
  const w = '(?:' + sl + '|(?:' + sl + '-)*' + su + '(?:-' + sl + ')+|(?:' + sl + '-)+' + su + ')';
  return '^' + w + '(?: ' + w + ')*$';
}

module.exports = { respell, pronPattern, syllables, LEX, EXC };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pronPattern()); process.exit(0); }
  for (const a of args) console.log(a, '->', respell(a));
}
