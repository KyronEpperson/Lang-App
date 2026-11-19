/* Tagalog spelling -> en-tl pron respelling (profile docs/profiles/en-tl.md §6). Deterministic, so every writer gets the same string
   for the same text.
   Usage: node respell.js "Magandang umaga po."   ->   Magandang umaga po. -> mah-gahn-DAHNG oo-MAH-gah pohq
          node respell.js --lex "báta"            ->   respells a LEX-style marked form (for English prose that names the other
                                                       reading of a homograph; never for a card or example row)
          require('./respell.js').respell(text) returns the string; annotated(form) respells a marked form.
          TL_CHECK=1 node respell.js "…"  also reports words whose LEX entry has not been checked against a dictionary.
   WHY A WORD LIST: Tagalog spelling does not show stress or the final glottal stop (bata: batà "child", báta "robe"), so they cannot
   be derived from the text. Every word must be in LEX (below) or be a listed word plus the linker -ng, 'y or 't. A word that is not
   listed gets a GUESS (stress on the next-to-last syllable, no final catch) and a warning on stderr with the word in « »:
   `repron.js` collects those. The lead checks each flagged word in a dictionary and adds it to LEX; nobody edits a pron by hand.
   Key (summary; the full key is in the profile):
     vowels      ah (a)  eh (e)  ee (i)  oh (o)  oo (u)      ai (ay)  ow (aw)  oy (oy)  ooy (uy)  eew (iw)  ay (ey)
     consonants  as written, plus: ng (also at the start of a word)  ny (ny, ñ)  ch (ts, and ty / ch in loans)  sh (sy)  j (dy, j)
                 g is always hard, written gh before ee / eh (gising -> ghee-SEENG)
     q           the final catch (glottal stop), shown only before a pause: at the end of the text or before , . ? ! ; :
                 (batà -> BAH-tahq; "Bata pa siya." -> BAH-tah pah SHAH). Mid-phrase the catch is usually dropped in Manila speech.
     CAPITALS    the stressed (and lengthened) syllable. One-syllable words are lowercase.
     ng -> nahng, mga -> mah-NGAH; a hyphen after a known prefix (mag-aral, taga-Maynila, alas-tres) joins one word; any other
     hyphenated word (araw-araw) is respelled as two words.
   LEX notation (dictionary style): acute ´ = the stressed vowel (anywhere); no acute = stress on the next-to-last syllable;
     grave ` on the last vowel = unstressed final catch (batà); circumflex ^ on the last vowel = stressed final + catch (hindî).
     A form may be given as  spelling=respelling-form  when the sound differs from the letters (siyá=syá, diyán=dyán, Jose=hosé).
     LEX_CHECKED holds forms checked against a named source (profile §6.5); LEX holds the author's forms (to be checked, §11). */

const SRC_CHECKED = `
batà áso sukà kain umaga bahay araw opò pô oo hindî ikáw akó siyá=syá kamí kayó silá itó iyán iyón dito diyán=dyán doón
anó síno saán kailán bákit ilán magkáno nasaán kumustá magandá isá tatló maliít masayá malungkót malakás damít walâ huwág namán
ngâ ba muna kasí palá inóm bilí sulát alís basa lupà sagót kauntî matabâ pinggán mabangó maligò niyá=nyá nilá iyó ninyó inyó
kanilá kaniyá=kanyá puntá tutubí pakpák baít pitó sala
salamat tsinélas masaráp gamót ngayón manggá kumáin bukas pagód gisíng kanin gustó kapé aral mag-áral trés
mabuti mabaít atin namin natin tayo ko mo ka akin amin niyo=nyo hô din rin daw raw yatà lamang lang na pa ang sa si ni kay
ng=nang yung kitá talagá grábe gabí waláng anumán edád hapon tanghalì martés lúnes alás sábado miyerkoles=myérkoles
huwebes=hwébes linggó limá siyam=syám anim waló sampû líbo kuwatro=kwátro ótso dóse béynte bénte nuwebe=nwébe
apat piso suklî kuya tito tita lola lolo anák uminóm kináin alám áyaw babáe lalaki áte tíyo kapatíd kakáin tatay
singkuwenta=singkwénta singkwénta dalawá pinsan pumuntá maglutò lutúin
paalam mamayâ biyernes=byérnes dos síngko saís taón minuto ónse diyes=dyés uno baryá anóng síge tará éwan íngat pangalan
kahapon oras`;
/* NOTE: one entry per spelling; a spelling listed twice with different forms is an error (the generator throws). */

const SRC = `
nila ninyo iyo nang=nang po=pô
kasi naman
umaga
kumusta
kanina
isa tatló pitó daan=dáan
siyete=syéte
trenta=trénta medya=médya
pesos=pésos magkano
nanay asawa pamilya=pamílya magulang
bata kaibigan=kaibígan tiya=tíya
ayoko=ayóko kailangan puwede=pwéde pwede=pwéde marunong
kumakain=kumákáin kainin=kaínin pagkain=pagkáin inom iinom=iinóm
pupunta=pupuntá punta=puntá
nagluto=naglutò nagluluto=naglulutò magluluto=maglulutò niluto=nilutò
maglaro=maglarô naglaro=naglarô laro=larô magtrabaho=magtrabáho nagtatrabaho=nagtatrabáho trabaho=trabáho
nag-aaral=nag-aáral
matulog natulog tulog=tulóg maligo=maligò naligo=naligò gumising=gumísing
tubig=túbig tinapay adobo=adóbo sinigang=sinígang lumpia=lumpyá pansit=pansít pancit=pansít
busog=busóg gutom=gutóm uhaw=uháw tsaa=tsa-á halo=hálo
palengke=paléngke kusina=kusína tindahan=tindáhan bili=bilí pabili=pabilí mura=mura ito iyan iyon
pambili mahal=mahál
masakit=masakít sakit=sakít ulo tiyan=tiyán botika=botíka tulong pakitulungan=pakitulúngan tulungan=tulúngan doktor=doktór ospital=ospitál
saan sino kailan bakit paano=paáno alin=alín nasaan
jeep=jip dyip=jip para=pára bayad sakayan=sakáyan kanan kaliwa=kaliwâ diretso=dirétso kanto=kánto simbahan=simbáhan malapit=malápit malayo=maláyò
dito diyan doon yan=yán di=dî wag=wag yun=yun to=to
opisina=opisína guro estudyante=estudyánte paaralan=paaralán eskuwelahan=eskwelahán
maganda malaki=malakí maliit matangkad=matangkád pangit=pangit bago=bágo luma=lumà
masaya malungkot galit=galít takot=takót
kumanta=kumantá sumayaw=sumayáw sayaw=sayáw
oo opo hindi wala huwag=huwág
ikaw ako siya kami kayo sila
kutsara=kutsára
Ana=ána Juan=hwán Jun=jun Maria=marí-ya Jose=hosé Liza=lísa Mark=mark Joy=joy Rey=rey Carlo=kárlo Bea=béya Ben=ben
Maynila=maynílà Makati=makáti Cebu=sebú Pilipinas=pilipínas Amerika=amérika Tagalog=tagálog Ingles=inglés Pilipino=pilipíno Amerikano=amerikáno
taga=tagá`;
/* NOTE: entries are a single space-separated list; a multi-word phrase is never a LEX entry. */

function parseList(src) {
  const out = {};
  src.trim().split(/\s+/).forEach(e => {
    if (!e) return;
    const i = e.indexOf('=');
    const spell = (i < 0 ? e : e.slice(0, i));
    const form = (i < 0 ? e : e.slice(i + 1));
    const key = plain(spell);
    if (Object.prototype.hasOwnProperty.call(out, key) && out[key] !== form) throw new Error('LEX lists «' + key + '» twice: ' + out[key] + ' / ' + form);
    out[key] = form;
  });
  return out;
}
function plain(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC').toLowerCase().replace(/['’]/g, ''); }

const LEX_CHECKED = parseList(SRC_CHECKED);
const LEX_AUTHOR = parseList(SRC);
/* the author's list wins only where the checked list has no entry */
const LEX = Object.assign({}, LEX_AUTHOR, LEX_CHECKED);
LEX['anong'] = 'anóng';                                             /* ano + linker, written as one word */

/* Homographs: a spelling has ONE reading in LEX (the one the course uses). If a Tagalog row really needs the other reading, add the
   whole row here, normalised (lowercase, punctuation removed, single spaces), with the word and its marked form. The rule matches the
   exact string only, so it survives repron.js (which respells the bare target) and keeps one pron per string for the validator. */
const STRING_CTX = {
  'bukas na ang tindahan': { bukas: 'bukás' },                       /* "The shop is open now" (bukas = tomorrow elsewhere) */
};
const normRow = t => String(t).normalize('NFC').toLowerCase().replace(/[.,!?;:"“”«»()…–—\/¿¡]/g, ' ').replace(/\s+/g, ' ').trim();

/* whole words whose pron is fixed as is */
const EXC = { 'ng': 'nahng', 'nang': 'nahng', 'mga': 'mah-NGAH', 'cr': 'see-AHR' };

/* prefixes that are written with a hyphen before a vowel-initial root or a name, and form ONE word with it */
const PREFIX = new Set(['mag', 'nag', 'pag', 'mang', 'nang', 'pang', 'taga', 'alas', 'ika', 'ma', 'na', 'maka', 'naka', 'pinaka', 'ka', 'tag', 'pa']);

const warned = new Set();
const warn = (w, msg) => { const k = w + '|' + msg; if (warned.has(k)) return; warned.add(k); process.stderr.write('respell: check ' + msg + ' in «' + w + '». If wrong, add it to LEX in respell.js.\n'); };

/* ---- marked form -> syllables with stress index and final catch ---- */
const ACUTE = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
const GRAVE = { 'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u' };
const CIRC = { 'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u' };
const isV = c => 'aeiou'.includes(c);

/* returns { syl: [{on:[], v:'a', co:[]}], stress: index or -1 (default), catch: bool } ; parts = segments split by hyphen inside one word */
function parseForm(form) {
  const f = form.normalize('NFC').toLowerCase();
  let letters = []; let stressPos = -1; let catchFinal = false; let finalStress = false;
  for (const ch of f) {
    if (ACUTE[ch]) { stressPos = letters.length; letters.push(ACUTE[ch]); continue; }
    if (GRAVE[ch]) { catchFinal = true; letters.push(GRAVE[ch]); continue; }
    if (CIRC[ch]) { catchFinal = true; finalStress = true; stressPos = letters.length; letters.push(CIRC[ch]); continue; }
    if (ch === 'ñ') { letters.push('ñ'); continue; }
    letters.push(ch);
  }
  return { letters, stressPos, catchFinal };
}

function units(letters, word) {
  const u = [];
  for (let i = 0; i < letters.length; i++) {
    const c = letters[i], n = letters[i + 1];
    if (c === '-') { u.push({ k: 'B' }); continue; }                       /* hyphen: a forced syllable break (glottal onset) */
    if (isV(c)) { u.push({ k: 'V', v: c, at: i }); continue; }
    if (c === 'n' && n === 'g') { u.push({ k: 'C', s: 'ng' }); i++; continue; }
    if (c === 'n' && n === 'y') { u.push({ k: 'C', s: 'ny' }); i++; continue; }
    if (c === 'ñ') { u.push({ k: 'C', s: 'ny' }); continue; }
    if (c === 't' && n === 's') { u.push({ k: 'C', s: 'ch' }); i++; continue; }
    if (c === 'c' && n === 'h') { u.push({ k: 'C', s: 'ch' }); i++; continue; }
    if (c === 's' && n === 'y' && isV(letters[i + 2])) { u.push({ k: 'C', s: 'sh' }); i++; continue; }
    if (c === 'd' && n === 'y' && isV(letters[i + 2])) { u.push({ k: 'C', s: 'j' }); i++; continue; }
    if (c === 't' && n === 'y' && isV(letters[i + 2])) { u.push({ k: 'C', s: 'ch' }); i++; continue; }
    if (c === 'c') { u.push({ k: 'C', s: /[ei]/.test(n || '') ? 's' : 'k' }); continue; }
    if (c === 'q') { u.push({ k: 'C', s: 'k' }); continue; }
    if (c === 'x') { u.push({ k: 'C', s: 'k' }); u.push({ k: 'C', s: 's' }); continue; }
    if (/[bdfghjklmnprstvwyz]/.test(c)) { u.push({ k: 'C', s: c }); continue; }
    throw new Error('cannot respell "' + c + '" in "' + word + '": write numbers and symbols as words');
  }
  return u;
}

/* two consonants inside a word split (mag-lu-to, as-wang), except these loan clusters, which start the next syllable (li-bro, tra-ba-ho).
   No g- clusters: mag-, nag-, pag- + l / r / w / y is a prefix boundary (magluto, magrenta). Clusters at the start of a word always stay. */
const ONSET2 = new Set(['pr', 'br', 'tr', 'dr', 'kr', 'fr', 'pl', 'bl', 'kl', 'fl', 'kw', 'py', 'by', 'ky', 'my']);
function syllabify(u, word) {
  const nuc = []; u.forEach((x, i) => { if (x.k === 'V') nuc.push(i); });
  if (!nuc.length) throw new Error('no vowel in "' + word + '": write numbers and symbols as words');
  const syl = nuc.map(i => ({ on: [], v: u[i].v, at: u[i].at, co: [] }));
  for (let i = 0; i < nuc[0]; i++) if (u[i].k === 'C') syl[0].on.push(u[i].s);
  for (let k = 0; k < nuc.length; k++) {
    const end = k + 1 < nuc.length ? nuc[k + 1] : u.length;
    const mid = u.slice(nuc[k] + 1, end);
    if (k + 1 === nuc.length) { syl[k].co = mid.filter(x => x.k === 'C').map(x => x.s); break; }
    const bi = mid.findIndex(x => x.k === 'B');
    let cons = mid.filter(x => x.k === 'C').map(x => x.s);
    if (bi >= 0) { syl[k].co = mid.slice(0, bi).filter(x => x.k === 'C').map(x => x.s); syl[k + 1].on = mid.slice(bi + 1).filter(x => x.k === 'C').map(x => x.s); continue; }
    let toPrev;
    if (cons.length <= 1) toPrev = 0;
    else if (cons.length === 2) toPrev = ONSET2.has(cons[0] + cons[1]) ? 0 : 1;
    else toPrev = ONSET2.has(cons[cons.length - 2] + cons[cons.length - 1]) ? cons.length - 2 : cons.length - 1;
    syl[k].co = cons.slice(0, toPrev); syl[k + 1].on = cons.slice(toPrev);
  }
  return syl;
}

const VOW = { a: 'ah', e: 'eh', i: 'ee', o: 'oh', u: 'oo' };
const GLIDE_Y = { a: 'ai', o: 'oy', u: 'ooy', e: 'ay', i: 'ee' };
const GLIDE_W = { a: 'ow', i: 'eew', e: 'ehw', o: 'ohw', u: 'oow' };
function sylText(s) {
  let on = s.on.map((c, j) => (c === 'g' && j === s.on.length - 1 && /[ei]/.test(s.v)) ? 'gh' : c).join('');
  let co = s.co.slice(); let nucT;
  if (co[0] === 'y') { nucT = GLIDE_Y[s.v]; co.shift(); }
  else if (co[0] === 'w') { nucT = GLIDE_W[s.v]; co.shift(); }
  else nucT = VOW[s.v];
  return on + nucT + co.join('');
}

/* respell one marked form as one word; pauseAfter -> show final catch; tail = extra coda letters ('ng' linker, 'y', 't') */
function wordFromForm(form, pauseAfter, tail, listedName) {
  const { letters, stressPos, catchFinal } = parseForm(form);
  const u = units(letters, listedName || form);
  const syl = syllabify(u, listedName || form);
  const n = syl.length;
  let si;
  if (stressPos >= 0) { si = syl.findIndex(s => s.at === stressPos); if (si < 0) si = n > 1 ? n - 2 : 0; }
  else si = n > 1 ? n - 2 : 0;
  if (tail) {
    const last = syl[n - 1];
    if (tail === 'y') last.co = last.co.concat(['y']);
    else if (tail === 'ng') { if (last.co.length && last.co[last.co.length - 1] === 'n') last.co[last.co.length - 1] = 'ng'; else last.co = last.co.concat(['ng']); }
    else last.co = last.co.concat([tail]);
  }
  const texts = syl.map(sylText);
  if (catchFinal && pauseAfter && !tail) texts[n - 1] += 'q';
  if (n === 1) return texts[0].toLowerCase();
  return texts.map((t, i) => i === si ? t.toUpperCase() : t.toLowerCase()).join('-');
}

const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const CHECK = !!process.env.TL_CHECK;
function lookup(w) {
  if (has(LEX, w)) { if (CHECK && !has(LEX_CHECKED, w)) warn(w, 'stress (author entry, not yet checked in a dictionary)'); return LEX[w]; }
  return null;
}

/* one written word (may contain internal hyphens / apostrophes) */
function word(raw, pauseAfter) {
  let w = plain(raw.normalize('NFC')).replace(/^['’]+/, '');
  if (!w) return '';
  if (/\d/.test(w)) throw new Error('digit in "' + raw + '": write numbers as words');
  if (has(EXC, w)) return EXC[w];
  /* contractions: ano'ng / anong, ako'y, isa't */
  const rawL = raw.normalize('NFC').toLowerCase().replace(/’/g, "'").replace(/^'+/, '');
  if (/'y$/.test(rawL) || /'t$/.test(rawL)) {
    const base = plain(rawL.slice(0, -2)); const tail = rawL.slice(-1);
    const f = lookup(base); if (!f) warn(base, 'stress and final catch (word not listed)');
    return wordFromForm(f || base, pauseAfter, tail, base);
  }
  let f = lookup(w);
  if (f) return wordFromForm(f, pauseAfter, null, w);
  if (w.includes('-')) {
    const parts = w.split('-').filter(Boolean);
    if (parts.length === 2 && PREFIX.has(parts[0])) {                         /* mag-aral, taga-Maynila, alas-tres: one word */
      const rf = lookup(parts[1]); if (!rf) warn(parts[1], 'stress and final catch (word not listed)');
      const pf = has(LEX, parts[0]) && parts[0] !== 'taga' ? plain(LEX[parts[0]]) : parts[0];
      return wordFromForm(pf + '-' + unstressPrefix(rf || parts[1]), pauseAfter, null, w);
    }
    return parts.map((p, i) => word(p, pauseAfter && i === parts.length - 1)).join(' ');   /* araw-araw: two words */
  }
  /* linker -ng on a listed word: maganda -> magandang; kaibigan -> kaibigang; ano'ng written anong */
  if (/ng$/.test(w) && w.length > 3) {
    const b1 = w.slice(0, -2);                                                     /* vowel-final base */
    if (/[aeiou]$/.test(b1) && lookup(b1)) return wordFromForm(lookup(b1), pauseAfter, 'ng', w);
    const b2 = w.slice(0, -1);                                                     /* n-final base: kaibigan + g */
    if (/n$/.test(b2) && lookup(b2)) return wordFromForm(lookup(b2), pauseAfter, 'ng', w);
  }
  warn(w, 'stress and final catch (word not listed)');
  return wordFromForm(w, pauseAfter, null, w);
}
/* inside prefix + hyphen + root, only the root's marks count */
function unstressPrefix(f) { return f; }

function respell(text) {
  const t = String(text).normalize('NFC').replace(/[“”«»()"…–—\/]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!t) return '';
  const toks = t.split(' ');
  const ctx = STRING_CTX[normRow(t)] || {};
  const out = [];
  toks.forEach((tok, i) => {
    const pause = /[.,!?;:]$/.test(tok) || i === toks.length - 1;
    const core = tok.replace(/[.,!?;:¿¡]+/g, '').replace(/^'+|'+$/g, m => m);
    if (!core.replace(/['’]/g, '')) return;
    const k = plain(core);
    const r = has(ctx, k) ? wordFromForm(ctx[k], pause, null, k) : word(core, pause);
    if (r) out.push(r);
  });
  return out.join(' ');
}
function annotated(form) { return wordFromForm(form, true, null, form); }

/* pronPattern (profile.json) is built here, so the lead can rebuild it: syllable = consonants, one vowel spelling of the key,
   consonants, optional final q; a word = one lowercase syllable, or hyphenated syllables with exactly one CAPITAL syllable. */
function pronPattern() {
  const C = '(?:ch|[bdfghjklmnprstvwyz])', CU = '(?:CH|[BDFGHJKLMNPRSTVWYZ])';
  const V = '(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)', VU = V.replace(/[a-z]+/g, m => m.toUpperCase());
  const sl = C + '*' + V + C + '*q?', su = CU + '*' + VU + CU + '*Q?';
  const w = '(?:' + sl + '|(?:' + sl + '-)*' + su + '(?:-' + sl + ')+|(?:' + sl + '-)+' + su + ')';
  return '^(?!.*[qQ]-)' + w + '(?: ' + w + ')*$';
}

module.exports = { respell, annotated, pronPattern, LEX, LEX_CHECKED, LEX_AUTHOR, EXC, STRING_CTX };
if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--lex') a.slice(1).forEach(x => console.log(x, '->', annotated(x)));
  else if (a[0] === '--pattern') console.log(pronPattern());
  else a.forEach(x => console.log(x, '->', respell(x)));
}
