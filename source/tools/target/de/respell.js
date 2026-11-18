/* German spelling -> en-de pron respelling (profile docs/profiles/en-de.md §6). Deterministic: every writer gets the same string.
   Usage: node respell.js "Wie heißen Sie?"   ->   Wie heißen Sie? -> vee HAI-suhn zee
   Key (§6.1): vowels ah ay eh uh ee i ih oh aw oo ew ur ai oy ow; kh = throaty ch (right after a, o, u, au: Buch, Nacht); hh = soft ch (everywhere else: ich, Milch, -chen, -ig; after eh it is written ehh: sprechen SHPREHH-uhn); CAPITALS = stressed syllable.
   How it works: LEX (whole-word respellings) -> number words -> known compound heads -> separable and inseparable prefixes -> letter rules.
   Words whose stress came from the default rule and look like loanwords are reported on stderr ("check stress"); stdout keeps the
   `<text> -> <pron>` shape. When the output is wrong, add the word to LEX (never hand-edit a pron in a deck or lesson). */

/* ---- LEX: word=respelling. Inflected forms ending in -e, -en, -n, -s, -er, -es are derived automatically (Termin -> Termine). ---- */
const LEX_SRC = `
apotheke=ah-poh-TAY-kuh banane=bah-NAH-nuh tomate=toh-MAH-tuh kartoffel=kahr-TAWF-uhl salat=zah-LAHT spinat=shpee-NAHT
minute=mee-NOO-tuh sekunde=zay-KOON-duh familie=fah-MEE-lee-uh ferien=FAY-ree-uhn linie=LEE-nee-uh
toilette=twah-LEHT-uh museum=moo-ZAY-oom theater=tay-AH-tuh termin=tehr-MEEN problem=proh-BLAYM system=zews-TAYM
hotel=hoh-TEHL restaurant=rehs-toh-RAHNG cafe=kah-FAY café=kah-FAY kaffee=KAHF-ay büro=bew-ROH chef=shehf chefin=SHEHF-in
handy=HEHN-dee computer=kawm-PYOO-tuh laptop=LEHP-tawp internet=IN-tuh-neht e-mail=EE-mayl email=EE-mayl party=PAHR-tee
job=djawp team=teem baby=BAY-bee okay=oh-KAY ok=oh-KAY fan=fehn tablet=TEHB-luht online=AWN-lain
kredit=kray-DEET orange=oh-RAHN-zhuh orangen=oh-RAHN-zhuhn universität=oo-nee-vehr-zee-TEHT
video=VEE-day-oh vase=VAH-zuh klavier=klah-VEER verb=vehrp november=noh-VEHM-buh privat=pree-VAHT pullover=pool-OH-vuh
januar=YAH-noo-ahr februar=FAY-broo-ahr april=ah-PRIL august=ow-GOOST september=zehp-TEHM-buh oktober=awk-TOH-buh
dezember=day-TSEHM-buh
zusammen=tsoo-ZAHM-uhn zurück=tsoo-REWK zuerst=tsoo-AYRST zuhause=tsoo-HOW-zuh zufrieden=tsoo-FREE-duhn
vorbei=fohr-BAI herein=heh-RAIN heraus=heh-ROWS geradeaus=guh-rah-duh-OWS vielleicht=fee-LAIHHT warum=vah-ROOM
woher=voh-HAYR wohin=voh-HIN willkommen=vil-KAWM-uhn hallo=HAHL-oh benzin=behn-TSEEN dresden=DRAYS-duhn lebt=laypt lebst=laypst lebte=LAYP-tuh wagner=VAHG-nuh informatik=in-fawr-MAH-tik natürlich=nah-TEWR-lihh kollege=koh-LAY-guh kollegin=koh-LAY-gin
erst=ayrst erste=AYRS-tuh ersten=AYRS-tuhn erster=AYRS-tuh erstes=AYRS-tuhs erde=AYR-duh pferd=pfayrt werden=VAYR-duhn
werde=VAYR-duh wert=vayrt gibt=geept gibst=geepst hoch=hohkh mond=mohnt obst=ohpst ostern=OHS-tuhn viertel=FIR-tuhl
mittwoch=MIT-vawkh chor=kohr dankeschön=DAHN-kuh-shurn bitteschön=BIT-uh-shurn julia=YOO-lee-ah
ingenieur=in-zheh-NYUR ingenieurin=in-zheh-NYUR-in servus=ZEHR-voos
unterschreiben=oon-tuh-SHRAI-buhn unterschreibe=oon-tuh-SHRAI-buh unterschrieben=oon-tuh-SHREE-buhn wiederholen=vee-duh-HOH-luhn
wiederhole=vee-duh-HOH-luh wiederholt=vee-duh-HOHLT erdgeschoss=AYRT-guh-shaws unterricht=OON-tuh-rihht
andreas=ahn-DRAY-ahs abitur=ah-bee-TOOR europa=oy-ROH-pah französisch=frahn-TSUR-zish italienisch=ee-tah-lee-AY-nish
italien=ee-TAH-lee-uhn australien=ows-TRAH-lee-uhn spanien=SHPAH-nee-uhn amerikaner=ah-may-ree-KAH-nuh amerikanerin=ah-may-ree-KAH-nuh-rin
adresse=ah-DREHS-uh konzert=kawn-TSEHRT gitarre=gee-TAHR-uh friseur=free-ZUR friseurin=free-ZUR-in cousin=koo-ZAHNG
garage=gah-RAH-zhuh jeans=jeens steak=stayk t-shirt=TEE-shurt mitternacht=MIT-uh-nahkht hochzeit=HAWKH-tsait
leon=LAY-awn rhein=rain ostsee=AWST-zay häuschen=HOYS-hhuhn radieschen=rah-DEES-hhuhn übersetzen=ew-buh-ZEHTS-uhn übersetze=ew-buh-ZEHTS-uh übersetzt=ew-buh-ZEHTST
übernachten=ew-buh-NAHKH-tuhn übernachte=ew-buh-NAHKH-tuh übernachtet=ew-buh-NAHKH-tuht übermorgen=EW-buh-mawr-guhn appetit=ahp-ay-TEET interessant=in-tuh-reh-SAHNT
chicago=shih-KAH-goh berlin=behr-LEEN amerika=ah-MAY-ree-kah emily=EH-mih-lee ryan=RAI-uhn megan=MAY-guhn
new=nyoo york=yawrk boston=BAWS-tuhn
`;
/* words that only look prefixed or separable (be-, ge-, er-, an-, ab-, ein- ...): no prefix boundary */
const NOPREFIX = new Set(`gehen gehe gehst geht ging gingen geben gebe gibst gab gaben gegen gegend gestern gelten gerne
beste besten bester bestes becher besen beten beere beeren abend abende abenden abends einig einige einigen einiger einiges
ander andere anderen anderer anderes anders erste ersten erster erstes ernte mittel mitte mitten`.split(/\s+/));
/* one-syllable words with e, i or o before a single final consonant that are short (the default for such words is long) */
const SHORT = new Set('in im mit bin hin bis ob von vom es des weg top tim ben'.split(' '));
/* compound heads: a word ending in one of these, with at least three letters before it, is split there (stress on the first part) */
const HEADS = `heit keit strudel rad haus hof tag stadt straße bahn zimmer karte platz markt stück schuh zeug hafen saft wurst brot kuchen wasser
arbeit reise zeit wagen mann frau land schule amt stunde woche jahr ende essen geld tür stift spiel fahrt teller berg burg dorf
furt reich stelle laden zug bus fahrrad buch heft tisch stuhl bett geschäft tee milch flasche glas tasse kind vater mutter
garten park weg uhr licht schrank hose jacke schein ausweis nummer arzt ärztin plan aufgabe salat steig schmerz zahl name schwester eltern`.split(/\s+/).sort((a, b) => b.length - a.length);
const SEP = ['zurück', 'fern', 'nach', 'weg', 'mit', 'vor', 'auf', 'aus', 'ein', 'bei', 'los', 'ab', 'an', 'zu', 'um'];
const INSEP = ['ver', 'zer', 'ent', 'emp', 'be', 'ge', 'er'];
const INSEP_OUT = { ver: 'fehr', zer: 'tsehr', ent: 'ehnt', emp: 'ehmp', be: 'buh', ge: 'guh', er: 'ehr' };
const NUM = ['zwanzig', 'dreißig', 'hundert', 'tausend', 'sieben', 'zwölf', 'sechs', 'zehn', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'acht', 'neun',
  'elf', 'sech', 'sieb', 'ein', 'und', 'zig'];
const LETTER = { a: 'ah', b: 'bay', c: 'tsay', d: 'day', e: 'ay', f: 'ehf', g: 'gay', h: 'hah', i: 'ee', j: 'yawt', k: 'kah', l: 'ehl', m: 'ehm',
  n: 'ehn', o: 'oh', p: 'pay', q: 'koo', r: 'ehr', s: 'ehs', t: 'tay', u: 'oo', v: 'fow', w: 'vay', x: 'iks', y: 'EWP-sih-lawn', z: 'tseht' };

/* ---- respelling string <-> {syl, st} ---- */
function parseResp(s) { const syl = s.split('-'); let st = syl.findIndex(x => /[A-Z]/.test(x)); return { syl: syl.map(x => x.toLowerCase()), st: st < 0 ? 0 : st }; }
const LEX = {};
LEX_SRC.trim().split(/\s+/).forEach(e => { const [k, v] = e.split('='); LEX[k] = parseResp(v); });
function lexInflect(w) {
  for (const [suf, add] of [['en', 'uhn'], ['er', 'uh'], ['es', 'uhs'], ['e', 'uh'], ['n', 'n'], ['s', 's']]) {
    if (!w.endsWith(suf)) continue;
    const base = LEX[w.slice(0, -suf.length)]; if (!base) continue;
    const syl = base.syl.slice(); const last = syl[syl.length - 1];
    if (add === 'n' || add === 's') { if (add === 'n' && !/uh$|uhl$/.test(last)) continue; syl[syl.length - 1] = last + add; return { syl, st: base.st }; }
    if (/(ah|ay|eh|uh|ee|ih|oh|aw|oo|ew|ur|ai|oy|ow|i)$/.test(last)) { syl.push(add); return { syl, st: base.st }; }
    const m = last.match(/^(.*?(?:ah|ay|eh|uh|ee|ih|oh|aw|oo|ew|ur|ai|oy|ow|i))(.*)$/);
    const coda = m ? m[2] : '';
    if (coda.length >= 1) { const move = /(sh|ch|kh|ng)$/.test(coda) ? coda.slice(-2) : coda.slice(-1); syl[syl.length - 1] = last.slice(0, last.length - move.length); syl.push(move + add); }
    else syl.push(add);
    return { syl, st: base.st };
  }
  return null;
}

/* ---- letters to units ---- */
const VOW = 'aeiouäöüy';
const BACK = ['a', 'o', 'u', 'ow'];   /* vowels after which ch is throaty (kh) */
const isV = c => !!c && VOW.includes(c);
function units(w) {
  const u = []; const V = (q, long) => u.push({ k: 'V', q, long: !!long }); const C = (s, o) => u.push(Object.assign({ k: 'C', s }, o || {}));
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1] || '', n2 = w[i + 2] || '', n3 = w[i + 3] || '';
    if (isV(c)) {
      const two = c + n;
      if (two === 'ie') { V('i', true); i++; if (w[i + 1] === 'h') i++; continue; }
      const dh = () => { if (w[i + 1] === 'h' && isV(w[i + 2])) i++; };    /* Reihe, rauhe: h after a diphthong before a vowel is silent */
      if (['ei', 'ai', 'ey', 'ay'].includes(two)) { V('ai', true); i++; dh(); continue; }
      if (two === 'eu' || two === 'äu') { V('oy', true); i++; dh(); continue; }
      if (two === 'au') { V('ow', true); i++; dh(); continue; }
      if (two === 'ou') { V('u', true); i++; continue; }
      if (two === 'aa' || two === 'ee' || two === 'oo') { V(c, true); i++; if (w[i + 1] === 'h') i++; continue; }
      if (n === 'h' && n2 !== 'h' && !(n2 === 'e' && n3 === 'i' && false)) { V(c === 'y' ? 'ü' : c, true); i++; continue; }   /* lengthening h: Uhr, gehen, Ihnen */
      V(c === 'y' ? 'ü' : c); continue;
    }
    if (c === 't' && n === 's' && n2 === 'c' && n3 === 'h') { C('ch', { close: true }); i += 3; continue; }
    if (c === 's' && n === 'c' && n2 === 'h') { C('sh', { close: true }); i += 2; continue; }
    if (c === 'c' && n === 'h') {
      if (n2 === 's' && w[i + 3] !== 't') { C('k', { close: true }); C('s'); i += 2; continue; }   /* sechs, wachsen; not nächste */
      C('X', { close: true }); i++; continue;
    }
    if (c === 'c' && n === 'k') { C('k', { close: true }); i++; continue; }
    if (c === 't' && n === 'z') { C('ts', { close: true }); i++; continue; }
    if (c === 'z' && n === 'z') { C('ts', { close: true }); i++; continue; }
    if (c === 'd' && n === 't') { C('t', { close: true }); i++; continue; }
    if (c === 'q' && n === 'u') { C('k'); C('v'); i++; continue; }
    if (c === 'p' && n === 'h') { C('f'); i++; continue; }
    if (c === 't' && n === 'h') { C('t'); i++; continue; }
    if (c === 'n' && n === 'g') { C('ng', { close: true }); i++; continue; }
    if (c === 's' && n === 's') { C('s', { close: true }); i++; continue; }
    if (c === 'ß') { C('s', { longMark: true }); continue; }
    if (c === n && 'bdfgklmnprt'.includes(c)) { C(c, { close: true, dbl: true }); i++; continue; }
    if (i === 0 && c === 's' && (n === 'p' || n === 't')) { C('sh'); C(n === 'p' ? 'p' : 't'); i++; continue; }  /* Sport, Straße */
    if (c === 'h') { C('h'); continue; }
    if (c === 'z') { C('ts'); continue; }
    if (c === 'x') { C('k'); C('s'); continue; }
    if (c === 'j') { C('y'); continue; }
    if (c === 'w') { C('v'); continue; }
    if (c === 'v') { C('f'); continue; }
    if (c === 'c') { C('äeiy'.includes(n) ? 'ts' : 'k'); continue; }
    if (/[a-zäöü]/.test(c)) { C(c); continue; }
    throw new Error('cannot respell "' + c + '" in "' + w + '": write numbers and symbols as words');
  }
  return u;
}
const ONSET2 = new Set(['pr', 'br', 'tr', 'dr', 'kr', 'gr', 'fr', 'pl', 'bl', 'kl', 'gl', 'fl', 'kn', 'shl', 'shr', 'shm', 'shn', 'shv', 'kv']);
function syllables(w) {
  const u = units(w);
  const lm = w.match(/(lich|lichen|liche|licher|liches|lichem|ling|linge|lingen)$/);   /* suffix boundary: mög-lich, Früh-ling */
  if (lm) for (let j = u.length - 1; j >= 0; j--) if (u[j].k === 'C' && u[j].s === 'l') { u[j].bound = true; break; }
  const nIdx = []; u.forEach((x, i) => { if (x.k === 'V') nIdx.push(i); });
  if (!nIdx.length) throw new Error('no vowel in "' + w + '": write numbers and symbols as words');
  const syl = nIdx.map(i => ({ on: [], v: u[i], co: [] }));
  for (let i = 0; i < nIdx[0]; i++) syl[0].on.push(u[i]);
  for (let k = 0; k < nIdx.length; k++) {
    const end = k + 1 < nIdx.length ? nIdx[k + 1] : u.length;
    const cs = u.slice(nIdx[k] + 1, end);
    if (k + 1 === nIdx.length) { syl[k].co = cs; break; }
    let toPrev;
    if (cs.length === 0) toPrev = 0;
    else if (cs.length === 1) toPrev = cs[0].close ? 1 : 0;
    else if (cs[cs.length - 1].bound) toPrev = cs.length - 1;
    else if (cs[0].close) toPrev = (cs.length === 2 && ONSET2.has(cs[1].s + '')) ? 1 : Math.max(1, cs.length - 1);
    else if (ONSET2.has(cs.slice(-2).map(x => x.s).join(''))) toPrev = cs.length - 2;
    else toPrev = cs.length - 1;
    syl[k].co = cs.slice(0, toPrev); syl[k + 1].on = cs.slice(toPrev);
  }
  return syl;
}

/* ---- stress for a simple word (index of syllable) ---- */
function simpleStress(w, syl) {
  const n = syl.length; if (n === 1) return { st: 0, how: 'mono' };
  const last = n - 1;
  if (/ier(en|e|st|t|te|ten|tet)?$/.test(w) && syl.some(s => s.v.q === 'i' && s.v.long)) {
    for (let i = n - 1; i >= 0; i--) if (syl[i].v.q === 'i' && syl[i].v.long) return { st: i, how: 'rule' };
  }
  const LASTRX = /(ei|ie|ee|ität|ur|ent|enz|ant|anz|ist|al|ell|ett|on|ös|ik|iv|ion)$/, PENRX = /(ette|ade|ine|age)$/;
  if (LASTRX.test(w) && !/(uhr)$/.test(w)) return { st: last, how: 'rule' };
  if (PENRX.test(w) && n >= 3) return { st: last - 1, how: 'rule' };
  if (/ismus$/.test(w)) return { st: n - 2, how: 'rule' };
  /* the same suffixes before an ending: Studenten, Polizistin, Personen, Ideen */
  for (const e of ['innen', 'in', 'en', 'es', 'e', 'n', 's']) {
    if (!w.endsWith(e)) continue; const stem = w.slice(0, -e.length);
    if (stem.length < 4 || !hasV(stem) || !LASTRX.test(stem) || /(uhr)$/.test(stem)) continue;
    const k = syllables(stem).length; if (k >= 2) return { st: Math.min(k - 1, last), how: 'rule' };
  }
  return { st: 0, how: 'default' };
}

/* ---- render a simple word (no prefix, no compound) ---- */
function simple(w) {
  /* -tion / -sion endings: Information -> in-fawr-mah-TSYOHN, Diskussion -> dis-koo-SYOHN */
  const tm = w.match(/^(.+?)([st])ion(en)?$/);
  if (tm && tm[1].length >= 2 && hasV(tm[1])) {
    const ss = tm[2] === 's' && /s$/.test(tm[1]);
    const head = render(ss ? tm[1].slice(0, -1) : tm[1], -1, true);
    const tail = tm[2] === 't' ? 'tsyoh' : (ss ? 'syoh' : 'zyoh');
    const syl = head.syl.concat(tm[3] ? [tail, 'nuhn'] : [tail + 'n']);
    return { syl, st: head.syl.length, how: 'rule' };
  }
  const syl = syllables(w);
  const s = simpleStress(w, syl);
  const r = render(w, s.st, false, syl);
  return { syl: r.syl, st: s.st, how: s.how, n: syl.length };
}
/* st = stressed syllable index (-1 = all unstressed, pre-stress) */
function render(w, st, pre, sylIn) {
  const syl = sylIn || syllables(w);
  const n = syl.length;
  const out = syl.map((s, i) => {
    const v = s.v;
    const nOn = i + 1 < n && syl[i + 1].on.length ? syl[i + 1].on[0].s : '';
    const closed = s.co.length > 0 && !(s.co.length === 1 && 'bdg'.includes(s.co[0].s) && /^[nr]$/.test(nOn) && !(s.co[0].s === 'g' && v.q === 'i'));   /* re-gnen: open */
    const post = !pre && st >= 0 && i > st, stressed = i === st;
    const finalSingle = closed && s.co.length === 1 && !s.co[0].close && !s.co[0].longMark && i === n - 1;
    const prevV = i > 0 ? syl[i - 1].v.q : '';
    let vt;
    switch (v.q) {
      case 'a': vt = 'ah'; break;
      case 'u': vt = 'oo'; break;
      case 'ü': vt = 'ew'; break;
      case 'ö': vt = 'ur'; break;
      case 'ä': vt = 'eh'; break;
      case 'ai': vt = 'ai'; break;
      case 'oy': vt = 'oy'; break;
      case 'ow': vt = 'ow'; break;
      case 'e':
        if (post && !v.long) vt = 'uh';
        else if (!post && !stressed && !v.long && /er(ei|eien)$/.test(w) && i === n - 2) vt = 'uh';
        else if (v.long) vt = 'ay';
        else if (!closed) vt = 'ay';
        else if (finalSingle && n === 1 && !SHORT.has(w)) vt = 'ay';
        else if (finalSingle && stressed && n > 1) vt = 'ay';
        else if (s.co.length === 1 && s.co[0].longMark) vt = 'ay';
        else vt = 'eh';
        break;
      case 'i':
        if (v.long) vt = 'ee';
        else if (s.co.length === 1 && s.co[0].longMark) vt = 'ee';
        else if (!closed) vt = (post && i < n - 1) ? 'ih' : 'ee';   /* einige: ih; Juli, Taxi: final ee */
        else if (finalSingle && n === 1 && !SHORT.has(w)) vt = 'ee';
        else if (finalSingle && stressed && n > 1) vt = 'ee';
        else vt = 'i';
        break;
      case 'o':
        if (v.long) vt = 'oh';
        else if (s.co.length === 1 && s.co[0].longMark) vt = 'oh';
        else if (!closed) vt = 'oh';
        else if (finalSingle && n === 1 && !SHORT.has(w)) vt = 'oh';
        else if (finalSingle && stressed && n > 1) vt = 'oh';
        else if (post && i === n - 1 && s.co.length === 1 && s.co[0].s === 'r') vt = 'oh';  /* Doktor, Motor */
        else vt = 'aw';
        break;
      default: vt = v.q;
    }
    /* onset */
    let on = '';
    s.on.forEach((c, j) => {
      let x = c.s;
      if (x === 'X') {
        if (i === 0 && j === 0) x = /^ch[eiäy]/.test(w) ? 'hh' : 'k';             /* China, Chemie: soft; Chor, Christ: k */
        else { const p = syl[i - 1]; x = (j === 0 && p && !p.co.length && BACK.includes(p.v.q)) ? 'kh' : 'hh'; }   /* Sprache: kh; Küche, Mädchen: hh */
      }
      if (x === 's' && j === s.on.length - 1 && s.on.length === 1 && !c.close && !c.longMark) {
        const p = i > 0 ? syl[i - 1] : null; const pc = p && p.co.length ? p.co[p.co.length - 1].s : '';
        if (!p || !pc || 'lmnr'.includes(pc)) x = 'z';
      }
      on += x;
    });
    /* coda */
    let co = '';
    const cos = s.co.map(c => c.s);
    cos.forEach((x, j) => {
      const c = s.co[j];
      if (x === 'X') x = (j === 0 && BACK.includes(v.q)) ? 'kh' : 'hh';    /* Buch, Nacht: kh; ich, Milch, durch: hh */
      const nextOn = j === cos.length - 1 && i + 1 < n && syl[i + 1].on.length ? syl[i + 1].on[0].s : '';
      const keepVoiced = /^[nr]$/.test(nextOn) && 'bdg'.includes(x) && !(x === 'g' && v.q === 'i');   /* regnet, Wagner, Ordnung: voiced before n, r */
      if (!c.dbl && !keepVoiced) { if (x === 'b') x = 'p'; else if (x === 'd') x = 't'; else if (x === 'g') x = (v.q === 'i' && j === 0) ? 'hh' : 'k';   /* -ig: zwanzig, König */ }
      co += x;
    });
    if (vt === 'uh' && /^r/.test(co)) co = co.slice(1);    /* unstressed -er: Lehrer, Eltern */
    if (vt === 'ur' && /^r/.test(co)) co = co.slice(1);    /* ö before r: Wörter VUR-tuh, not VURR-tuh */
    if (vt === 'ih' || vt === 'ee') { /* nothing */ }
    if (v.q === 'i' && s.co.length && s.co[0].s === 'g' && !s.co[0].dbl) vt = 'i';   /* -ig is short: tsikh */
    return (on + vt + co).replace(/ehhh/, 'ehh');   /* eh + soft ch: sprechen SHPREHH-uhn, not SHPREHHH-uhn */
  });
  return { syl: out };
}

/* ---- prefixes, compounds, numbers ---- */
const VALID_ON = /^(?:[bcdfghjklmnpqrstvwxyz]|ch|sch|sp|st|schl|schr|schm|schn|schw|spr|str|pf|pfl|pfr|kn|gn|zw|qu|tsch|[bdfgkpt][rl]|sl|sm|sn|sk|ph|th|ts)(?=[aeiouäöüy])/;
function hasV(s) { return /[aeiouäöüy]/.test(s); }
function insepSplit(w) {
  if (NOPREFIX.has(w)) return null;
  for (const p of INSEP) {
    if (!w.startsWith(p)) continue; const rest = w.slice(p.length);
    if (rest.length < 3 || !hasV(rest)) continue;
    if (p.endsWith('e') && /^[eiu]/.test(rest)) continue;          /* bei-, geu-, beere */
    if (!(VALID_ON.test(rest) || /^[aeiouäöü]/.test(rest))) continue;
    return { p, rest };
  }
  return null;
}
function sepSplit(w) {
  if (NOPREFIX.has(w)) return null;
  for (const p of SEP) {
    if (!w.startsWith(p)) continue; const rest = w.slice(p.length);
    if (rest.length < 3 || !hasV(rest)) continue;
    if (!(VALID_ON.test(rest) || /^[aeiouäöü]/.test(rest))) continue;
    if (p === 'ein' && /^[s]$/.test(rest)) continue;
    return { p, rest };
  }
  return null;
}
function numSplit(w) {
  const parts = [];
  let i = 0;
  while (i < w.length) { const p = NUM.find(x => w.startsWith(x, i)); if (!p) return null; parts.push(p); i += p.length; }
  return parts.length >= 2 ? parts : null;
}
function join(parts, stressPart) {
  const syl = []; let st = 0;
  parts.forEach((p, k) => { if (k === stressPart) st = syl.length + p.st; syl.push(...p.syl); });
  return { syl, st };
}
const warned = new Set();
function analyze(w, depth) {
  depth = depth || 0;
  if (LEX[w]) return LEX[w];
  const li = lexInflect(w); if (li) return li;
  const ns = numSplit(w);
  if (ns) return join(ns.map(p => analyze(p, depth + 1)), 0);
  if (depth < 4) for (const h of HEADS) for (const suf of ['', 'n', 'en', 'e', 's', 'es', 'er']) {
    const hh = h + suf;
    if (!w.endsWith(hh) || w === hh) continue; const left = w.slice(0, -hh.length);
    if (left.length < 3 || !hasV(left)) continue;
    const lp = INSEP.find(p => left.startsWith(p)); if (lp && !hasV(left.slice(lp.length))) continue;   /* gegessen, vergessen: not ge+g + essen */
    return join([analyze(left, depth + 1), analyze(hh, depth + 1)], 0);
  }
  const sp = depth < 4 && sepSplit(w);
  if (sp) {
    const pre = LEX[sp.p] || analyze(sp.p, 9);
    return join([pre, analyze(sp.rest, depth + 1)], 0);
  }
  const ip = insepSplit(w);
  if (ip) {
    const rest = analyze(ip.rest, depth + 1);
    return join([{ syl: [INSEP_OUT[ip.p]], st: 0 }, rest], 1);
  }
  const r = simple(w);
  if (r.how === 'default' && r.n >= 3 && (/[aiou]$/.test(w) || /(?<![aeu])[aeiou][bdfgklmnprstvz]e$/.test(w)) && !warned.has(w)) {
    warned.add(w);
    process.stderr.write('respell: check stress of «' + w + '» (default rule: first syllable). If wrong, add it to LEX in respell.js.\n');
  }
  return r;
}
function word(raw) {
  let w = raw.normalize('NFC').replace(/[’‘ʼ`´']/g, '');
  if (!w) return '';
  if (/\d/.test(w)) throw new Error('digit in "' + raw + '": write numbers as words');
  if (LEX[w.toLowerCase()]) return out(LEX[w.toLowerCase()]);
  if (/^[A-ZÄÖÜ]{2,5}$/.test(w)) { const l = [...w.toLowerCase()].map(c => LETTER[c] || c); l[l.length - 1] = l[l.length - 1].toUpperCase(); return l.join('-'); }
  if (w.includes('-') && !LEX[w.toLowerCase()]) {
    const parts = w.split('-').filter(Boolean).map(p => /^[A-ZÄÖÜa-z]$/.test(p) ? parseResp(LETTER[p.toLowerCase()].toUpperCase()) : analyze(p.toLowerCase()));
    return out(join(parts, 0));
  }
  const lw = w.toLowerCase();
  if (w === 'Weg') return 'vayk';                     /* the noun (long e); lowercase weg "away" is short: case-only homograph */
  return out(analyze(lw));
}
function out(r) {
  if (r.syl.length === 1) return r.syl[0];
  return r.syl.map((s, i) => i === r.st ? s.toUpperCase() : s).join('-');
}
function respell(text) {
  return String(text).replace(/[¿¡?!.,;:"“”„«»()…–—\/]/g, ' ').trim().split(/\s+/).filter(Boolean).map(word).filter(Boolean).join(' ');
}
module.exports = { respell, syllables, LEX };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));
