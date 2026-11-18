/* Brazilian Portuguese spelling -> en-pt pron respelling (profile docs/profiles/en-pt.md §6). Deterministic and context-free per word,
   so every writer gets the same string for the same text.
   Usage: node respell.js "Bom dia!"   ->   Bom dia! -> bohng JEE-uh
   Key (summary; full key in the profile):
     vowels   ah  eh (open e)  ay (closed e)  ee  aw (open o)  oh (closed o)  oo  uh (final unstressed a)
              ai  oy  ow (au, and al)  ayw (eu)  ehw (éu, el)  eew (iu, il)  ohw (ol)  oow (ul)  ooy (ui)
     nasal    final -ng after the vowel: ahng (ã)  owng (ão, final -am)  aing (ãe)  oyng (õe)  ayng (-em)  eeng (-im)  ohng (-om)  oong (-um)
              before a consonant the written m / n stays: kahn-TAHR, TAYM-poo
     consonants  ch (t before an i sound)  j (d before an i sound)  sh (ch, x)  zh (j, g before e/i)  ly (lh)  ny (nh)
              h (initial r, rr)  r (single r)  z (s between vowels)  gh (hard g before e/ee)  kw / gw (qu, gu before a/o)
     CAPITALS = stressed syllable in words of 2+ syllables; one-syllable words are lowercase.
   Stress comes from the spelling rules (accent marks, then the word ending) and is reliable. The quality of a stressed e / o that has no
   accent mark (open eh / aw or closed ay / oh) is not in the spelling: it comes from LEX below, from a few suffix rules, or from the default
   (closed), and a default is reported on stderr ("check vowel"). An x between vowels that no rule covers is also reported ("check x").
   LEX notation: é ó = open, ê ô = closed (this also marks the stressed syllable); ü = a sounded u after q / g (cinqüenta);
   cs / ss / ch / z in place of x (tácsi, próssimo, licho). EXC holds whole words whose pron is given as is.
   When the output is wrong, add the word to LEX or EXC (never hand-edit a pron) and re-run the rows: the lint shows every row that changed. */

const EXC = {
  'muito': 'MOOYN-too', 'muita': 'MOOYN-tuh', 'muitos': 'MOOYN-toos', 'muitas': 'MOOYN-tuhs',
  'ao': 'ow', 'aos': 'ows', 'joão': 'zhoo-OWNG', 'porque': 'pohr-KAY', 'reunião': 'heh-oo-nee-OWNG', 'reuniões': 'heh-oo-nee-OYNGS',
  'shopping': 'SHAW-peeng', 'internet': 'een-tehr-NEH-chee', 'ok': 'oh-KAY', 'show': 'shoh', 'site': 'SAI-chee', 'wifi': 'wai-FAI', 'wi-fi': 'wai-FAI',
  'miami': 'mee-AH-mee', 'york': 'YAWR-kee', 'boston': 'BAWS-tohng', 'orlando': 'ohr-LAHN-doo', 'texas': 'TEHK-sahs',
  'massachusetts': 'mah-sah-SHOO-sehts', 'jersey': 'ZHEHR-zee', 'emma': 'EH-muh', 'jack': 'JEH-kee', 'ryan': 'HAI-ahn', 'megan': 'MEH-gahn',
  'pizza': 'PEET-suh', 'pizzas': 'PEET-suhs', 'pizzaria': 'peet-sah-REE-uh',
  'email': 'ee-MAY-oo', 'e-mail': 'ee-MAY-oo', 'online': 'ohn-LAIN', 'delivery': 'deh-LEE-veh-ree', 'uber': 'OO-behr',
};

const LEX_WORDS = `
escóvo escóva escóvam cebôla cebôlas atravésse atravéssa atravésso resérva resérvo resérvas préssa tóco tóca tócam chóve conhéce conhécem
éla élas êle êles déla délas dêle dêles néla nélas nêle nêles aquéla aquélas aquêle aquêles ésta éstas êste êstes éssa éssas êsse êsses
naquéla naquêle nésta nêste néssa nêsse désta dêste déssa dêsse
fésta pérto cérto cérta séte janéla quéro quér vélho vélha bélo béla amarélo amaréla chinélo panéla novéla
térra guérra férro pérna pédra fébre léve néto néta régra sêco sêca pêdro idéia éra éram coléga zéro cégo céga
têrça sêxta cervêja igrêja invéja cêdo mêdo dêdo vêrde parêde rêde sêde prêto prêta prêtos prêtas cabêlo cabêlos pêlo pêla pêlos pêlas
vermêlho vermêlha vermêlhos vermêlhas espêlho consêlho joêlho orêlha abêlha ovêlha coêlho mêsmo mêsma mêsmos mêsmas
chêgo chêga chêgam fêcha fêcho fêcham déve dêvo dévem bébe bêbo bébem escrêvo escréve escrévem péde pédem sérve sérvem
preféro prefére preférem repéte espéra espéro espéram coméça coméço coméçam péga pégo pégam léva lévo lévam sêja vêja sêjam vêjam
gêlo sêlo téla véla estrêla moléque chicléte sorvête bilhête tapête canêta camisêta bicicléta planêta tésta résto pêso
póde pósso pódem pórta pórtas hóra hóras agóra embóra fóra senhóra senhóras nóssa nósso nóssos nóssas lója lójas nóva nôvo nóvos nóvas nóve déz mulhér colhér espôsa espôso móro móra móram
ôvo óvos ôlho ólhos côrpo córpos pôrto fórte mórte sórte nórte móle móda bóta bótas bôca fóto fótos móto bôlo bôlos róda
lógo jóvem jóvens hôje dôze dôce dôces póbre óbra nóta nótas cópo cópos farófa mandióca tapióca pipóca bôa bôas vôo pessôa pessôas lagôa lisbôa
pôsto póstos tôdo tôda tôdos tôdas almôço almóça môço môça melhór piór maiór menór jôgo jógos jóga jógam
gósto gósta góstam gósto cômo cóme cómem dórme dórmem córre córrem
rósa bôlsa sôpa gôrdo gôrda gôrdos pôvo póvos fôgo fógos ôsso óssos
tácsi tócsico próssimo mássimo aussílio tróusse sécso fícso complécso licho lichos
moquéca néve primavéra passapórte cóstas chéfe próva respósta alégre acórdo invérno abacachi cochinha rôcho rôcha puchar púcha púcho socôrro adóro adóra adóram
professôra cachôrro arrôz prêço aeropôrto esquêrda cabêça trôco agôsto emprêgo vêjo têxto enxaquêca
bibliotéca trêze catôrze dezenóve dêsde dezesséte fizéram tivéram estivéram pudéram quiséram disséram soubéram trousséram viéram déram têve estêve fêz comêram bebêram vendêram escrevêram
conhêço enderêço vêzes
cinqüenta tranqüilo tranqüila freqüente lingüiça agüentar futibol
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

/* unstressed one-syllable words: their vowel is reduced (de = jee, o = oo, que = kee) */
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

/* 4. stressed e / o without an accent: open or closed */
function quality(word, syl, si, v) {
  const s = syl[si], next = syl[si + 1];
  if (!s.coda.length && next && next.onset.length && ['m', 'n', 'NY'].includes(next.onset[0].s)) return 'closed';     /* before a nasal consonant: pequeno, fome, tenho */
  if (v === 'o') {
    if (/oso$/.test(word)) return 'closed';
    if (/(osa|osos|osas)$/.test(word)) return 'open';
    if (/ola(s?)$/.test(word)) return 'open';
    if (/or(es)?$/.test(word)) return 'closed';
  } else {
    if (/(esa|esas|eza|ezas|ez|er|eres)$/.test(word) && si >= syl.length - 2) return 'closed';
  }
  warn(word, 'vowel (stressed ' + v + ': default closed ' + (v === 'e' ? 'ay' : 'oh') + ')');
  return 'closed';
}

/* 5. syllables -> respelling */
const NASAL_FINAL = { a: 'owng', e: 'ayng', i: 'eeng', o: 'ohng', u: 'oong' };
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
      else if (v0 === 'ã' && v1 === 'e') nucT = 'aing';
      else if (v0 === 'õ' && v1 === 'e') nucT = 'oyng';
      else if (v0 === 'ã') nucT = 'ahng';
      else nucT = 'ohng';
      if (coda.includes('s')) codaT = 's';                                                         /* alemães, irmãs */
      nasalDone = true;
    } else if (coda[0] === 'm' || coda[0] === 'n') {
      const b = base(v0);
      const finalNasal = last && coda.every(c => ['m', 'n', 's'].includes(c));
      if (finalNasal && !v1) {
        nucT = (b === 'a' && stressed) ? 'ahng' : NASAL_FINAL[b];
        codaT = coda.includes('s') ? 's' : '';
      } else {
        const t = { a: 'ah', e: 'ay', i: 'ee', o: 'oh', u: 'oo' }[b];
        nucT = (v1 ? diph(v0, v1, stressed) : t);
        codaT = coda.map(c => c === 'x' ? 's' : c === 'c' ? 'k' : c).join('');
      }
      nasalDone = true;
    } else if (v1) {
      nucT = diph(v0, v1, stressed);
    } else {
      const b = base(v0);
      if (stressed) {
        if (b === 'a') nucT = 'ah';
        else if (b === 'i' || b === 'u') nucT = b === 'i' ? 'ee' : 'oo';
        else {
          let q;
          if (v0 === 'é' || v0 === 'ó') q = 'open'; else if (v0 === 'ê' || v0 === 'ô') q = 'closed';
          else if (coda[0] === 'l') q = 'any';
          else q = quality(word, syl, k, b);
          nucT = b === 'e' ? (q === 'open' ? 'eh' : 'ay') : (q === 'open' ? 'aw' : 'oh');
        }
      } else if (clitic && (!coda.length || coda.every(c => c === 's'))) {
        nucT = { a: 'ah', e: 'ee', o: 'oo', i: 'ee', u: 'oo' }[b];
      } else if (last && post && coda.every(c => c === 's')) {
        nucT = { a: 'uh', e: 'ee', o: 'oo', i: 'ee', u: 'oo' }[b];
      } else {
        nucT = { a: 'ah', e: 'eh', o: 'oh', i: 'ee', u: 'oo' }[b];
        /* word-initial unstressed es- / des- / ex- before a consonant: ees-, jees- (estar, desculpa, explicar) */
        if (k === 0 && b === 'e' && (coda[0] === 's' || coda[0] === 'x') && (!s.onset.length || (s.onset.length === 1 && s.onset[0].s === 'd'))) nucT = 'ee';
      }
    }
    /* coda l -> w */
    if (!nasalDone && coda[0] === 'l') {
      const b = base(v0);
      const L = { a: 'ow', e: 'ehw', i: 'eew', o: 'ohw', u: 'oow' };
      nucT = v1 ? nucT + 'w' : L[b];
      if (v0 === 'ê') nucT = 'ayw';
      coda.shift();
    }
    if (!nasalDone) {
      codaT = coda.map((c, j) => {
        if (c === 's' || c === 'x' || c === 'z') {
          const nx = j + 1 < coda.length ? coda[j + 1] : (next && next.onset[0] ? next.onset[0].s : '');
          return nx && ['b', 'd', 'g', 'GU', 'l', 'm', 'n', 'r', 'v', 'zh', 'z'].includes(nx) ? 'z' : 's';
        }
        if (c === 'c' || c === 'k') return 'k';
        if (c === 'r' || c === 'RR') return 'r';
        if (['b', 'd', 'f', 'g', 'p', 't', 'v'].includes(c)) return c;
        if (c === 'm' || c === 'n') return c;
        return c.toLowerCase();
      }).join('');
    }
    /* onset */
    const iSound = /^(ee|y)/.test(nucT);
    let onT = '';
    s.onset.forEach((x, j) => {
      const c = x.s, first = j === 0;
      const nextIsLast = j === s.onset.length - 1;
      switch (c) {
        case 't': case 'd': {
          const glideI = s.onset[j + 1] && s.onset[j + 1].s === 'y' && s.onset[j + 1].glide;   /* rádio, pátio: d / t before a glide i */
          const pal = (nextIsLast && iSound) || glideI;
          onT += pal ? (c === 't' ? 'ch' : 'j') : c; break;
        }
        case 'c': onT += 'k'; break;
        case 'g': onT += 'g'; break;
        case 'GU': onT += /^e/.test(nucT) ? 'gh' : 'g'; break;
        case 'GW': onT += 'gw'; break;
        case 'KW': onT += 'kw'; break;
        case 'SH': onT += 'sh'; break;
        case 'TCH': onT += 'ch'; break;
        case 'LY': onT += 'ly'; break;
        case 'NY': onT += 'ny'; break;
        case 'RR': onT += 'h'; break;
        case 'SS': onT += 's'; break;
        case 'r': {
          const pc = prev && prev.coda.length ? prev.coda[prev.coda.length - 1].s : '';
          onT += (k === 0 && first) || (first && ['n', 'l', 's', 'm'].includes(pc)) ? 'h' : 'r'; break;
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
          warn(word, 'x (default sh)');
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
  if (b === 'i') return { a: 'ai', e: 'ay', o: 'oy', u: 'ooy' }[a] || 'ee';
  if (b === 'u') {
    if (a === 'e') return v0 === 'é' ? 'ehw' : 'ayw';
    return { a: 'ow', o: 'oh', i: 'eew' }[a] || 'oo';
  }
  return { a: 'ah', e: 'eh', o: 'oh', i: 'ee', u: 'oo' }[a];
}

/* post-tonic i / u before a vowel becomes a glide: família -> fah-MEE-lyuh, rádio -> HAH-jyoo, série -> SEH-ryee */
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

module.exports = { respell, syllables, LEX, EXC };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));
