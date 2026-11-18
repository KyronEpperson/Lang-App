/* Italian spelling -> en-it pron respelling (profile docs/profiles/en-it.md §6). Deterministic and context-free: every writer gets the same string.
   Usage: node respell.js "Dov'è il bagno?"   ->   Dov'è il bagno? -> doh-VEH eel BAH-nyoh
   Words whose stress came from the default rule and look risky are reported on stderr ("check stress"); stdout keeps the `<text> -> <pron>` shape.
   Key: vowels ah eh ee oh oo (one spelling each); CAPITALS = stressed syllable in words of 2+ syllables; double consonants are split across the
   hyphen (pizza -> PEET-tsah, anno -> AHN-noh). Italian spelling does not mark most stress, so LEX lists the words the rules get wrong.
   LEX notation: an accented vowel marks the stressed syllable (ì ù also force a full vowel, as in farmacìa, tùo); ï ü = full vowel, unstressed;
   ʣ = voiced z (dz). Add a word to LEX (never hand-edit a pron) when the generator is wrong or warns. */

const LEX_SRC = `
telèfono telèfoni telèfona telèfonano nùmero nùmeri màcchina màcchine càmera càmere tàvolo tàvoli tàvola sàbato pìccolo pìccola pìccoli pìccole
pòpolo ìsola règola scàtola fàvola fràgola fràgole nùvola pèntola gòndola pàgina pàgine òrdine giòvane giòvani àlbero àlberi lèttera
fàcile fàcili diffìcile diffìcili ùtile ùtili inùtile fràgile mòbile automòbile nòbile sìmile dèbole sèmplice chilòmetro chilòmetri
centìmetro sùbito ùltimo ùltima ùltimi ùltime pròssimo pròssima pròssimi pròssime òttimo òttima pèssimo màssimo mìnimo sècolo pòvero pòvera
pòveri lìbero lìbera lìberi lìbere tèssera àutobus spìrito ànima
nàpoli gènova bèrgamo mòdena pàdova ùdine rìmini tàranto brìndisi trïèste svìzzera stèfano àngelo àngela èlena dàvide pàolo pàola
sofìa marìa lucìa
àbito àbiti àbita àbitano òrdino òrdini òrdina òrdinano desìdero desìderi desìdera desìderano vìsito vìsiti vìsita vìsitano
càpito càpiti càpita càpitano dimèntichi dimènticano
pàrlano lavòrano màngiano stùdiano arrìvano èntrano tòrnano chiàmano cèrcano pàgano còmprano guàrdano ascòltano aspèttano comìnciano
cucìnano giòcano impàrano làsciano pènsano pòrtano rèstano suònano tròvano ùsano viàggiano àmano bàllano càntano còstano nuòtano
prenòtano pàssano àlzano làvano svègliano incòntrano invìtano ricòrdano spiègano
prèndono scrìvono lèggono vìvono vèdono mèttono chièdono crèdono rispòndono chiùdono pèrdono vèndono conòscono scèndono còrrono
ricèvono dèvono pòssono vògliono vèngono tèngono èscono dìcono bèvono rimàngono piàcciono dòrmono pàrtono àprono sèntono òffrono
sèguono sèrvono vèstono divèrtono sàlgono scèlgono rièscono èrano fùrono
scùsami scusàtemi aspèttami chiàmami guàrdami
ìo mìo mìa mìe tùo tùa tùe sùo sùa sùe dùe düemìla bùe zìo zìa zìi zìe vìa dìo addìo spìa
farmacìa pizzerìa gelaterìa trattorìa osterìa polizìa librerìa gallerìa panetterìa macellerìa pasticcerìa salumerìa tabaccherìa
lavanderìa cartolerìa profumerìa birrerìa segreterìa compagnìa bugìa energìa allergìa fotografìa geografìa filosofìa economìa
malattìa gelosìa nostalgìa magìa aèreo aèrei rïunione rïunioni còmodo còmoda còmodi còmode scòmodo scòmoda mètodo perìodo càvolo càvoli uòmini cìnema frigorìfero
scïare scïatore paùra ʣàïno
ʣero ʣona ʣebra ʣùcchero ʣucchina ʣucchine ʣucchini meʣʣo meʣʣogiorno meʣʣanotte pranʣo romanʣo aʣʣurro aʣʣurra aʣʣurri
aʣʣurre doʣʣina benʣina
`;
const plainOf = s => s.replace(/[àá]/g, 'a').replace(/[èé]/g, 'e').replace(/[ìíï]/g, 'i').replace(/[òó]/g, 'o').replace(/[ùúü]/g, 'u').replace(/ʣ/g, 'z');
const LEX = {};
LEX_SRC.trim().split(/\s+/).forEach(a => { LEX[plainOf(a)] = a; });

/* stress rules for words not in LEX and without a written accent */
const ANTE = ['iscono', 'iscano', 'avano', 'evano', 'ivano', 'arono', 'erono', 'irono', 'ebbero', 'issimo', 'issima', 'issimi', 'issime',
  'abile', 'abili', 'ibile', 'ibili', 'esimo', 'esima', 'esimi', 'esime', 'evole', 'evoli'];
const IC_EXC = new Set('amico amica amici amiche nemico nemica nemici nemiche antico antica antichi antiche fatica fatiche formica formiche ombelico lombrico federico federica enrico rubrica ortica mollica vescica pudico'.split(' '));
const IDO_EXC = new Set('decido decidi uccido uccidi divido dividi condivido condividi sorrido sorridi affido affidi confido confidi cupido infido infida infidi'.split(' '));
const ERE_PEN = new Set(('avere vedere rivedere prevedere sapere potere dovere volere tenere ottenere mantenere sostenere contenere appartenere trattenere ' +
  'piacere dispiacere rimanere sedere possedere cadere accadere valere parere godere temere tacere giacere persuadere dolere ingegnere severe intere sincere austere').split(' '));
/* default-penultimate words that end like risky words: no warning */
const SAFE = new Set(('italiano italiana italiani italiane americano americana americani americane toscano toscana siciliano siciliana romano romana romani ' +
  'romane milano lontano lontana lontani lontane quotidiano luciano adriano bolzano parola parole spagnolo spagnola spagnoli spagnole fagiolo fagioli ' +
  'nicola figliolo aprile gentile gentili cortile civile maschile femminile sottile campanile sedile brasile primavera atmosfera intero intera interi ' +
  'sincero sincera severo severa bandiera buonasera stasera divano').split(' '));
const RISKY = /(ano|ono|olo|ola|oli|ole|ile|ili|[^i]ero|[^i]era|[^i]eri)$/;
const warned = new Set();

const VOWELS = 'aeiouàáèéìíòóùúïü';
const isVowelCh = c => !!c && VOWELS.includes(c);
const isSoft = c => !!c && 'eèéiìíï'.includes(c);           /* e or i after c / g / sc */
const isPlainI = c => c === 'i';
const ACC = 'àáèéìíòóùú', FULL = 'ìíùúïü';
const VOICED = 'bdglmnrv';

function tokens(w) {
  const t = [];
  const C = s => t.push({ k: 'C', s });
  const V = c => t.push({ k: 'V', v: plainOf(c), acc: ACC.includes(c), full: FULL.includes(c) });
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1], n2 = w[i + 2], n3 = w[i + 3];
    if (isVowelCh(c)) { V(c); continue; }
    switch (c) {
      case 'c':
        if (n === 'c') { C(isSoft(n2) ? 't' : 'k'); continue; }                 /* first c of cc: faccia -> faht-chah, ecco -> ehk-koh */
        if (n === 'h') { C('k'); i++; continue; }
        if (isSoft(n)) { C('ch'); if (isPlainI(n) && isVowelCh(n2)) i++; continue; }  /* ciao: i silent */
        C('k'); continue;
      case 'g':
        if (n === 'g') { C(isSoft(n2) ? 'd' : 'g'); continue; }
        if (n === 'h') { C('g'); i++; continue; }
        if (n === 'n') { C('ny'); i++; continue; }
        if (n === 'l' && n2 && 'iìï'.includes(n2)) {                              /* gli */
          C('ly'); if (isPlainI(n2) && isVowelCh(n3)) i += 2; else i++; continue;
        }
        if (isSoft(n)) { C('j'); if (isPlainI(n) && isVowelCh(n2)) i++; continue; }
        if (n === 'u' && isVowelCh(n2) && plainOf(n2) !== 'u') { C('gw'); i++; continue; }
        C('g'); continue;
      case 's':
        if (n === 'c' && isSoft(n2)) { C('sh'); i++; if (isPlainI(n2) && isVowelCh(n3)) i++; continue; }  /* pesce, lasciare */
        C(n && VOICED.includes(n) ? 'z' : 's'); continue;                        /* sbagliato -> zbah-LYAH-toh */
      case 'z': C(n === 'z' ? 't' : 'ts'); continue;                              /* pizza -> PEET-tsah */
      case 'ʣ': C(n === 'ʣ' ? 'd' : 'dz'); continue;                              /* mezzo -> MEHD-dzoh */
      case 'q': if (n === 'u') { C('kw'); i++; } else C('k'); continue;
      case 'h': continue;                                                          /* always silent */
      case 'j': C('y'); continue;
      case 'x': C('k'); C('s'); continue;
      case 'y': V('i'); continue;
      default:
        if (/[a-z]/.test(c)) { C(c); continue; }
        throw new Error('cannot respell "' + c + '" in "' + w + '": write numbers and symbols as words');
    }
  }
  /* glides, pass 1: plain i between vowels or before a vowel at the start of a word is the consonant y (gennaio, aiuto, buio, ieri) */
  for (let i = 0; i < t.length; i++) {
    const x = t[i]; if (x.k !== 'V' || x.acc || x.full || x.v !== 'i') continue;
    const p = t[i - 1], nx = t[i + 1];
    if (nx && nx.k === 'V' && (!p || p.k === 'V')) t[i] = { k: 'C', s: 'y' };
  }
  /* glides, pass 2: other unstressed plain i / u next to a vowel */
  for (let i = 0; i < t.length; i++) {
    const x = t[i]; if (x.k !== 'V' || x.acc || x.full || !'iu'.includes(x.v)) continue;
    const p = t[i - 1], nx = t[i + 1];
    const pV = p && p.k === 'V', nV = nx && nx.k === 'V';
    if (x.v === 'i') {
      if (nV) x.role = 'on';                                                   /* Italia, piano */
      else if (pV && !p.role && 'aeo'.includes(p.v)) x.role = 'off';                /* mai, sei, poi */
    } else {
      if (nV && nx.v === 'i' && !nx.acc && !(t[i + 2] && t[i + 2].k === 'V')) { x.full = true; nx.full = true; }  /* lui, cui, fui: two syllables (buio is boo-yoh) */
      else if (nV && (!p || p.k === 'C')) { if (!p) t[i] = { k: 'C', s: 'w' }; else x.role = 'on'; }  /* uomo, buono */
      else if (pV && !nV && !p.role && 'aeo'.includes(p.v)) x.role = 'off';         /* auto, euro */
    }
  }
  return t;
}

const INSEP = new Set(['pr', 'br', 'tr', 'dr', 'kr', 'gr', 'fr', 'vr', 'pl', 'bl', 'kl', 'gl', 'fl']);
function syllables(w) {
  const t = tokens(w);
  /* nuclei: core vowel + optional onglide before it + optional offglide after it */
  const nuc = [];
  for (let i = 0; i < t.length; i++) {
    const x = t[i]; if (x.k !== 'V' || x.role) continue;
    const on = t[i - 1] && t[i - 1].k === 'V' && t[i - 1].role === 'on' ? i - 1 : i;
    const off = t[i + 1] && t[i + 1].k === 'V' && t[i + 1].role === 'off' ? i + 1 : i;
    nuc.push({ a: on, b: off, core: x, on: on < i ? t[on].v : '', off: off > i ? t[off].v : '' });
  }
  if (!nuc.length) throw new Error('no vowel in "' + w + '": write numbers and symbols as words');
  const syl = nuc.map(n => ({ n, onset: [], coda: [] }));
  for (let i = 0; i < nuc[0].a; i++) syl[0].onset.push(t[i].s);
  for (let k = 0; k < nuc.length; k++) {
    const end = k + 1 < nuc.length ? nuc[k + 1].a : t.length;
    const cons = t.slice(nuc[k].b + 1, end).map(x => x.s);
    if (k + 1 === nuc.length) { syl[k].coda = cons; break; }
    let toPrev;
    if (cons.length <= 1) toPrev = 0;
    else if (cons.length === 2) toPrev = INSEP.has(cons.join('')) ? 0 : 1;
    else toPrev = INSEP.has(cons.slice(-2).join('')) ? cons.length - 2 : cons.length - 1;
    syl[k].coda = cons.slice(0, toPrev); syl[k + 1].onset = cons.slice(toPrev);
  }
  return syl;
}

const CORE = { a: 'ah', e: 'eh', i: 'ee', o: 'oh', u: 'oo' };
const OFF = { ai: 'ai', ei: 'ay', oi: 'oy', au: 'ow', eu: 'ehw', ou: 'ohw' };
const ON = { i: 'y', u: 'w' };
function nucleusText(n) {
  const v = n.core.v;
  let s = n.off ? OFF[v + n.off] : CORE[v];
  if (!s) s = CORE[v] + CORE[n.off];
  if (n.on) s = ON[n.on] + (n.on === 'u' && v === 'i' ? 'ee' : s);
  return s;
}
function sylText(s) {
  let out = '';
  const parts = [...s.onset];
  const nt = nucleusText(s.n);
  parts.forEach((c, i) => { out += (c === 'g' && i === parts.length - 1 && nt[0] === 'e') ? 'gh' : c; });  /* spaghetti -> spah-GHEHT-tee */
  return out + nt + s.coda.join('');
}

function stressFromEnd(base, syl) {        /* 1 = last syllable, 2 = next to last, 3 = antepenultimate ... */
  const ai = syl.findIndex(s => s.n.core.acc);
  if (ai >= 0) return { pos: syl.length - ai, how: 'mark' };
  const n = syl.length;
  if (n === 1) return { pos: 1, how: 'mono' };
  if (syl[n - 1].n.off === 'i') return { pos: 1, how: 'rule' };                  /* final falling diphthong: vorrei, farai, ormai, eroi */
  if (n >= 3) {
    if (ANTE.some(x => base.endsWith(x)) && base !== 'divano') return { pos: 3, how: 'rule' };
    if (/(ico|ica|ici|iche)$/.test(base) && !IC_EXC.has(base)) return { pos: 3, how: 'rule' };
    if (/(ido|ida|idi)$/.test(base) && !IDO_EXC.has(base)) return { pos: 3, how: 'rule' };   /* rapido, timido, morbido */
    if (/ere$/.test(base) && !/iere$/.test(base) && !ERE_PEN.has(base)) return { pos: 3, how: 'rule' };
  }
  return { pos: 2, how: 'default' };
}

function word(raw) {
  let w = raw.normalize('NFC').toLowerCase().replace(/[’‘ʼ`´]/g, "'").replace(/^'+|'+$/g, '');   /* po' -> po */
  if (!w) return '';
  let prefix = '', base = w;
  const ap = w.lastIndexOf("'");
  if (ap > 0) { prefix = w.slice(0, ap).replace(/'/g, ''); base = w.slice(ap + 1); }                  /* l'acqua, dov'è, un'amica */
  const ann = LEX[base] || base;
  const bsyl = syllables(ann);
  const st = stressFromEnd(base, bsyl);
  if (st.how === 'default' && bsyl.length >= 3 && RISKY.test(base) && !SAFE.has(base) && !warned.has(base)) {
    warned.add(base);
    process.stderr.write('respell: check stress of «' + base + '» (default rule: next to last syllable). If wrong, add it to LEX in respell.js.\n');
  }
  const syl = prefix ? syllables(prefix + ann) : bsyl;
  const texts = syl.map(sylText);
  if (texts.length === 1) return texts[0];
  const si = texts.length - st.pos;
  return texts.map((s, i) => i === si ? s.toUpperCase() : s).join('-');
}

function respell(text) {
  return String(text).replace(/[¿¡?!.,;:"“”«»()…\-–—\/]/g, ' ').trim().split(/\s+/).filter(Boolean).map(word).filter(Boolean).join(' ');
}

module.exports = { respell, syllables, LEX };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));
