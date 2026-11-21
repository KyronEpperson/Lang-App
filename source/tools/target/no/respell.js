/* Bokmål spelling -> en-no pron (East Norwegian). Profile: docs/profiles/en-no.md §6.
   Deterministic: every writer gets the same string. Never hand-write a pron; add the word to LEX.
   Usage: node respell.js "Jeg heter Anna."     ->  Jeg heter Anna. -> yai HEH:-tuhr AHN-ah
          node respell.js --pattern             prints pronPattern()
   Pitch accent is not marked. The letter o is oo when long and oh when short, unless LEX says otherwise.
   A word whose o or whose stress came from the default and looks unsafe is reported on stderr ("check"). */

const LEX_SRC = `
og=oh også=OH-soh de=dee: det=deh: hvor=voor hjem=yehm hvem=vehm hva=vah:
jeg=yai meg=mai deg=dai seg=sai
fordi=fohr-DEE: fortelle=fohr-TEHL-uh forstå=fohr-STOH: betale=buh-TAH:-luh bestemme=buh-STEHM-uh bekomme=buh-KOHM-uh
sove=SOH:-vuh love=LOH:-vuh lov=loh:v over=OH:-vuhr glad=glah:d
oslo=OOS-loo bergen=BAER-guhn trondheim=TROHN-haim stavanger=stah-VAHNG-uhr hvordan=VOOR-dahn
norge=NOHR-guh svensk=svehnsk
nummer=NOO-muhr bukse=BOOK-suh ung=oong
stort=stoo:rt svart=svah:rt sort=soo:rt
student=stue-DEHNT studere=stue-DEH:-ruh stasjon=stah-SHOO:N
universitet=ue-nee-vehr-see-TEH:T musikk=mue-SEEK butikk=bue-TEEK
kaffe=KAHF-uh
anna=AHN-ah kari=KAH-ree lars=lahrs ingrid=EENG-ree erik=EH-reek nora=NOO-rah ola=OO-lah
minneapolis=mee-nee-AH-poh-lees chicago=shee-KAH-goh seattle=see-AHT-uhl
nrk=ehn-aer-KOH: usa=ue:-ehs-AH:
semester=seh-MEHS-tuhr aktuell=ahk-tue-EHL eventuelt=eh-vehn-tue-EHLT
hotell=hoo-TEHL apotek=ah-poo-TEH:K telefon=teh-luh-FOON sjokolade=shoo-koo-LAH:-duh banan=bah-NAH:N
minutter=mee-NUET-uhr brunost=BRUE:-noost tirsdag=TEE:SH-dahg onsdag=OO:NS-dahg
billett=beel-EHT stasjonen=stah-SHOO:-nuhn studenten=stue-DEHNT-uhn studerer=stue-DEH:-ruhr
beklager=buh-KLAH:-guhr sover=SOH:-vuhr soverom=SOH:-vuh-room
osten=OOS-tuhn hvorfor=VOOR-fohr
bad=bah:d etasje=uh-TAH:-shuh etasjen=uh-TAH:-shuhn
apoteket=ah-poo-TEH:-kuh toalett=too-ah-LEHT toalettet=too-ah-LEHT-uh
gratulerer=grah-tue-LEH:-ruhr vakkert=VAHK-uhrt ambulanse=ahm-bue-LAHNG-suh ambulansen=ahm-bue-LAHNG-suhn
forkjølet=fohr-HYOE:-luh aktuelt=ahk-tue-EHLT torsdag=TOH:SH-dahg
`;

/* whole words whose single vowel is short even though only one consonant follows */
const SHORT = new Set('og til vil skal han hun men den en et at som for kan man nok vel kom'.split(' '));
/* e + r is æ in many words; these keep e */
const E_NOT_AE = new Set('dere deres flere fler mere periode serie se ser'.split(' '));
/* long letter o said with the å sound (oh), not oo */
const O_OH = new Set('sove sov love lover lov lovte over oven ovenpå'.split(' '));
/* short letter o said with the oo sound, not oh */
const O_OO = new Set('ost ostekake blomst loft kost rom'.split(' '));

const LETTER = {
  a: 'ah:', b: 'beh:', c: 'seh:', d: 'deh:', e: 'eh:', f: 'ehf', g: 'geh:', h: 'hoh:', i: 'ee:',
  j: 'yeh:', k: 'koh:', l: 'ehl', m: 'ehm', n: 'ehn', o: 'oo:', p: 'peh:', q: 'kue:', r: 'aer',
  s: 'ehs', t: 'teh:', u: 'ue:', v: 'veh:', w: 'DOHB-uhlt-veh:', x: 'ehks', y: 'ew:', z: 'seht',
  æ: 'ae:', ø: 'oe:', å: 'oh:'
};

const LEX = {};
LEX_SRC.trim().split(/\s+/).forEach(e => { const i = e.indexOf('='); if (i > 0) LEX[e.slice(0, i)] = e.slice(i + 1); });

const isV = c => !!c && 'aeiouyæøå'.includes(c);
const DIPH = { ei: 'ai', ai: 'ay', au: 'au', 'øy': 'øy', oy: 'oy', oi: 'oy' };

/* consonant letters after a vowel, before the next vowel: how many "length consonants" */
function lengthWeight(s) {
  let i = 0, w = 0;
  const one = ['skj', 'sj', 'kj', 'gj', 'tj', 'rs', 'rd', 'rn', 'rl'];
  while (i < s.length) {
    const rest = s.slice(i);
    if (rest.startsWith('ng')) { w += 2; i += 2; continue; } /* vowel before ng is short */
    const m = one.find(x => rest.startsWith(x));
    if (m) { w += 1; i += m.length; continue; }
    w += 1; i += 1;
  }
  return w;
}

/* walk the word into vowels (with orthographic length) and consonant sounds */
function tokens(raw) {
  const w = raw;
  const spans = [];
  for (let i = 0; i < w.length;) {
    const c = w[i], n = w[i + 1] || '', n2 = w[i + 2] || '';
    if (c === 'e' && n === 'g' && n2 !== 'g' && !isV(n2)) { spans.push({ i, end: i + 2, q: 'ai' }); i += 2; continue; }
    if (DIPH[c + n]) { spans.push({ i, end: i + 2, q: DIPH[c + n] }); i += 2; continue; }
    if (c === 'i' && n === 'g' && (i + 2 === w.length || (n2 === 'e' && i + 3 === w.length))) {
      spans.push({ i, end: i + 1, q: 'i', skipG: true }); i += 1; continue;
    }
    if (isV(c)) { spans.push({ i, end: i + 1, q: c }); i += 1; continue; }
    i += 1;
  }
  if (!spans.length) throw new Error('no vowel in "' + raw + '": write numbers and symbols as words');
  spans.forEach((sp, k) => {
    const next = k + 1 < spans.length ? spans[k + 1].i : w.length;
    const gap = w.slice(sp.end, next);
    sp.long = lengthWeight(gap) < 2;
    sp.gap = gap;
    /* e + r is æ in many stressed syllables (er, her, gjerne). A final -er ending (snakker, biler) is not. */
    const erEnding = spans.length > 1 && k === spans.length - 1 && /^re?$/.test(gap);
    if (sp.q === 'e' && gap.startsWith('r') && !erEnding && !E_NOT_AE.has(w)) sp.q = 'æ';
  });
  if (SHORT.has(w) && spans.length === 1) spans[0].long = false;
  if (O_OH.has(w)) { /* quality flag, length unchanged */ spans.forEach(sp => { if (sp.q === 'o') sp.oh = true; }); }
  if (O_OO.has(w)) spans.forEach(sp => { if (sp.q === 'o') sp.oo = true; });

  const out = [];
  let pos = 0;
  spans.forEach(sp => {
    const vletters = w.slice(sp.i, sp.end);
    if (pos < sp.i) out.push(...cons(w.slice(pos, sp.i), vletters, false));
    out.push({ k: 'V', q: sp.q, long: sp.long, oh: sp.oh, oo: sp.oo });
    pos = sp.skipG ? sp.end + 1 : sp.end;
  });
  if (pos < w.length) out.push(...cons(w.slice(pos), '', true));
  return out;
}

const FRONT = t => /^[iyæø]/.test(t) || t.startsWith('ei') || t.startsWith('øy');
/* d in ld, nd, rd is silent at the end of a word and before another consonant, not before a vowel (mandag, ferdig). */
function dSilent(s, i, final) {
  const after = s[i + 2] || '';
  if (after) return true;
  return final;
}
function cons(s, nextV, final) {
  const out = [];
  for (let i = 0; i < s.length;) {
    const c = s[i], n = s[i + 1] || '', n2 = s[i + 2] || '', rest = s.slice(i);
    const after = s.slice(i + 1) + (i + 1 >= s.length ? nextV : '');
    const after2 = s.slice(i + 2) + (i + 2 >= s.length ? nextV : '');
    if (rest.startsWith('skj')) { out.push({ k: 'C', s: 'sh' }); i += 3; continue; }
    if (rest.startsWith('sj')) { out.push({ k: 'C', s: 'sh' }); i += 2; continue; }
    if (c === 's' && n === 'k' && FRONT(after2)) { out.push({ k: 'C', s: 'sh' }); i += 2; continue; }
    if (rest.startsWith('kj')) { out.push({ k: 'C', s: 'hy' }); i += 2; continue; }
    if (rest.startsWith('tj')) { out.push({ k: 'C', s: 'hy' }); i += 2; continue; }
    if (c === 'k' && FRONT(after)) { out.push({ k: 'C', s: 'hy' }); i += 1; continue; }
    if (rest.startsWith('gj')) { out.push({ k: 'C', s: 'y' }); i += 2; continue; }
    if (c === 'g' && (after.startsWith('i') || after.startsWith('y') || after.startsWith('ei'))) {
      out.push({ k: 'C', s: 'y' }); i += 1; continue;
    }
    if (c === 'h' && n === 'v') { out.push({ k: 'C', s: 'v' }); i += 2; continue; }
    if (c === 'h' && n === 'j') { out.push({ k: 'C', s: 'y' }); i += 2; continue; }
    if (c === 'r' && n === 's') { out.push({ k: 'C', s: 'sh' }); i += 2; continue; }
    if (c === 'r' && n === 'd' && dSilent(s, i, final)) { out.push({ k: 'C', s: 'r' }); i += 2; continue; }
    if (c === 'r' && (n === 'n' || n === 't' || n === 'l')) { out.push({ k: 'C', s: 'r' + n }); i += 2; continue; }
    if (c === 'n' && n === 'g') { out.push({ k: 'C', s: 'ng' }); i += 2; continue; }
    if (c === 'n' && n === 'k') { out.push({ k: 'C', s: 'ng' }); i += 1; continue; }
    if (c === 'l' && n === 'd' && dSilent(s, i, final)) { out.push({ k: 'C', s: 'l' }); i += 2; continue; }
    if (c === 'n' && n === 'd' && n2 !== 'r' && dSilent(s, i, final)) { out.push({ k: 'C', s: 'n' }); i += 2; continue; }
    if (c === 'd' && n === 't') { out.push({ k: 'C', s: 't' }); i += 2; continue; }
    if (c === 'q' && n === 'u') { out.push({ k: 'C', s: 'k' }, { k: 'C', s: 'v' }); i += 2; continue; }
    if (c === 'c' && FRONT(after)) { out.push({ k: 'C', s: 's' }); i += 1; continue; }
    if (c === 'c' && n === 'h') { out.push({ k: 'C', s: 'sh' }); i += 2; continue; } /* chance, lunch: a loan crutch, not the Norwegian kj-sound */
    if (c === n && 'bcdfgklmnprstv'.includes(c)) { out.push({ k: 'C', s: map1(c) }); i += 2; continue; }
    if (c === 'd' && final && i === s.length - 1) { i += 1; continue; } /* word-final d after a vowel: silent */
    out.push({ k: 'C', s: map1(c) }); i += 1;
  }
  return out;
}
function map1(c) {
  if (c === 'j') return 'y';
  if (c === 'w') return 'v';
  if (c === 'z') return 's';
  if (c === 'x') return 'ks';
  if (c === 'c') return 'k';
  if (c === 'q') return 'k';
  return c;
}

function syllables(toks) {
  const vIdx = [];
  toks.forEach((t, i) => { if (t.k === 'V') vIdx.push(i); });
  const syl = vIdx.map(i => ({ on: [], v: toks[i], co: [] }));
  for (let i = 0; i < vIdx[0]; i++) syl[0].on.push(toks[i]);
  for (let k = 0; k < vIdx.length; k++) {
    const end = k + 1 < vIdx.length ? vIdx[k + 1] : toks.length;
    const cs = toks.slice(vIdx[k] + 1, end);
    if (k + 1 === vIdx.length) { syl[k].co = cs; break; }
    const heavy = syl[k].v.long || syl[k].v.q === 'ai' || syl[k].v.q === 'ay' || syl[k].v.q === 'au' || syl[k].v.q === 'øy' || syl[k].v.q === 'oy';
    if (heavy || cs.length === 0) syl[k + 1].on = cs.slice();
    else { syl[k].co = [cs[0]]; syl[k + 1].on = cs.slice(1); }
  }
  return syl;
}

function stressOf(w, n) {
  if (n === 1) return 0;
  if (/ere$/.test(w) && n >= 3) return n - 2;
  if (/sjon$/.test(w) || /sion$/.test(w)) return n - 1;
  if (/ent$/.test(w) && n >= 2) return n - 1;
  if (/ikk$/.test(w) && n >= 2) return n - 1;
  if (/tet$/.test(w) && n >= 3) return n - 1;
  return 0;
}

function vow(v, stressed, w) {
  const L = !!(v.long && stressed);
  const q = v.q;
  if (!stressed && q === 'e') return 'uh';
  if (q === 'o') {
    /* quality follows orthographic length (long o = oo, short o = oh) even when an unstressed vowel drops the colon */
    let oh = !!v.oh;
    if (v.oo || O_OO.has(w)) oh = false;
    else if (!v.oh) oh = !v.long;
    const base = oh ? 'oh' : 'oo';
    return (v.long && stressed) ? base + ':' : base;
  }
  const map = { a: 'ah', e: 'eh', i: 'ee', u: 'ue', y: 'ew', 'æ': 'ae', 'ø': 'oe', 'å': 'oh', ai: 'ai', ay: 'ay', au: 'aeu', 'øy': 'oey', oy: 'oy' };
  const base = map[q] || q;
  if ('ai ay aeu oey oy uh'.split(' ').includes(base)) return base;
  return L ? base + ':' : base;
}

function renderSyl(s, stressed, w) {
  const v = vow(s.v, stressed, w);
  return s.on.map(c => c.s).join('') + v + s.co.map(c => c.s).join('');
}

const warned = new Set();
function analyze(w) {
  if (LEX[w]) return LEX[w];
  let src = w;
  if (src.endsWith('et') && src.length >= 4 && src !== 'det') src = src.slice(0, -1); /* neuter definite: huset -> huse, t silent */
  const syl = syllables(tokens(src));
  const st = stressOf(src, syl.length);
  const parts = syl.map((s, i) => renderSyl(s, i === st, w));
  if (syl.length >= 3 && st === 0 && /[cwzx]/.test(w) && !warned.has(w)) {
    warned.add(w);
    process.stderr.write('respell: check stress of «' + w + '» (default: first syllable). If wrong, add it to LEX in respell.js.\n');
  }
  if (parts.length === 1) return parts[0];
  return parts.map((p, i) => i === st ? p.replace(/[a-z]/g, ch => ch.toUpperCase()) : p).join('-');
}

function spellLetters(w) {
  const parts = [...w.toLowerCase()].map(c => LETTER[c] || c);
  if (parts.length === 1) return parts[0];
  return parts.map((p, i) => i === parts.length - 1 ? p.replace(/[a-z]/g, ch => ch.toUpperCase()) : p).join('-');
}

function word(raw) {
  let w = raw.normalize('NFC').replace(/[’‘ʼ`´']/g, '');
  if (!w) return '';
  if (/\d/.test(w)) throw new Error('digit in "' + raw + '": write numbers as words');
  if (/^[A-ZÆØÅ]{2,5}$/.test(w) && !LEX[w.toLowerCase()]) return spellLetters(w);
  if (LEX[w.toLowerCase()]) return LEX[w.toLowerCase()];
  if ([...w].length === 1) return LETTER[w.toLowerCase()] || analyze(w.toLowerCase());
  if (w.includes('-')) {
    const parts = w.split('-').filter(Boolean).map(p => {
      const lw = p.toLowerCase();
      if (LEX[lw]) return { s: LEX[lw], st: 0, n: LEX[lw].split('-').length };
      if ([...p].length === 1) return { s: LETTER[lw] || lw, st: 0, n: 1 };
      const r = analyze(lw);
      const bits = r.split('-');
      const st = Math.max(0, bits.findIndex(x => /[A-Z]/.test(x)));
      return { s: r, st, n: bits.length, bits };
    });
    /* stress the first part; lower-case the rest */
    const flat = [];
    parts.forEach((p, k) => {
      const bits = (p.bits || p.s.split('-')).map(x => x.toLowerCase());
      if (k === 0 && bits.length > 1) bits[p.st] = bits[p.st].replace(/[a-z]/g, ch => ch.toUpperCase());
      else if (k === 0 && bits.length === 1 && parts.length > 1) bits[0] = bits[0].replace(/[a-z]/g, ch => ch.toUpperCase());
      flat.push(...bits);
    });
    if (flat.length === 1) return flat[0];
    return flat.join('-');
  }
  return analyze(w.toLowerCase());
}

function respell(text) {
  return String(text).replace(/[?!.,;:"“”«»()…–—/]/g, ' ').trim().split(/\s+/).filter(Boolean).map(word).filter(Boolean).join(' ');
}

/* pronPattern, built from the same vowel and consonant spellings the renderer uses */
function pronPattern() {
  const CL = '(?:sh|hy|ng|ks|[bdfghklmnprstvy])';
  const CU = '(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])';
  const LONG = '(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh)';
  const LONGU = '(?:AEU|OEY|AH|EH|EE|OO|UE|EW|AE|OE|OH)';
  const DIP = '(?:ai|ay|oy|uh)';
  const DIPU = '(?:AI|AY|OY|UH)';
  const sylL = CL + '*(?:' + LONG + ':?|' + DIP + ')' + CL + '*';
  const sylU = CU + '*(?:' + LONGU + ':?|' + DIPU + ')' + CU + '*';
  const mono = sylL;
  const poly = '(?:' + sylL + '-)+' + sylU + '(?:-' + sylL + ')*|' + sylU + '(?:-' + sylL + ')+';
  return '^(?:' + mono + '|' + poly + ')(?: (?:' + mono + '|' + poly + '))*$';
}

module.exports = { respell, pronPattern, LEX };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') console.log(pronPattern());
  else for (const a of args) console.log(a, '->', respell(a));
}
