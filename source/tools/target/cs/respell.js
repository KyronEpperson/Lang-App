/* Czech spelling -> en-cs pron respelling (profile en-cs §6).
   Standard Czech, cs-CZ. Deterministic: the same spelling always gives the same string.
   Rules worth knowing before you "fix" a line by hand:
   - The capital syllable is the beat. It is the first syllable, except a one-syllable
     preposition with a vowel (na, do, ve…) takes the beat and the next word loses it.
   - v, k, s, z have no vowel. They join the next word (v Praze -> FPRAH-zeh).
   - á/é/í/ó/ú/ů/ý are the long vowels (aah, ehh, ee, ohh, ooh). Short vowels are ah, eh, ih, oh, oo.
   - i and y are the same vowel. být and bít are both beet. The aid cannot show that spelling.
   - ř is rzh (voiced) or rsh (voiceless), never plain r.
   - c is ts, č is ch, ch is kh. Czech j is y. dž is j.
   - A word with di, dí, ti, tí, ni, ní that is not listed below THROWS. Add it to
     NATIVE or LOAN. Do not guess: native di/ti/ni is soft (tyih), most loans are hard (tih).
   - dě/tě/ně/mě/bě/pě/vě/fě are spelled, so they do not need the list.
*/
'use strict';

const CONS = ['rzh', 'rsh', 'ts', 'dz', 'ch', 'sh', 'zh', 'kh', 'dy', 'ty', 'ny', 'j', 'b', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'y', 'z'];
const VOWS = ['aah', 'ehh', 'ohh', 'ooh', 'ohw', 'ehw', 'ow', 'ah', 'eh', 'ee', 'ih', 'oh', 'oo', 'rr', 'll'];

/* One-syllable prepositions that take the beat. Not "se": that spelling is also the reflexive. */
const VOWEL_PREP = new Set(['ve', 'ke', 'ku', 'ze', 'do', 'na', 'po', 'pro', 'za', 'od', 'pod', 'nad', 'před', 'přes', 'bez', 'při', 'o', 'u', 'ob', 'skrz']);
const BARE_PREP = new Set(['v', 'k', 's', 'z']);

/* Hard di/ti/ni. politika, titul, univerzita, diktát, tip, nikl: Internetová jazyková příručka.
   komunikace, diskuse, statistika: Tahal. Stems must not eat a native word (divadlo stays out). */
const LOAN = ['politi', 'univerzit', 'statistik', 'komunik', 'želatin', 'vanilk', 'disku', 'dikt', 'panik', 'titul', 'titu', 'nikl', 'tip'];
/* Native stems. A verbal prefix (ne, za, vy, pře, od…) may sit in front. */
const NATIVE_STEM = ['angličtin', 'francouzštin', 'španělštin', 'slovenštin', 'italštin', 'němčin', 'polštin', 'ruštin', 'češtin', 'čínštin', 'japonštin', 'nemocnic', 'náměst', 'snídan', 'divad', 'ložnic', 'radnic', 'rodič', 'rodin', 'hodin', 'stanic', 'peníz', 'číšní', 'třet', 'tisíc', 'tisk', 'tich', 'dět', 'dít', 'dív', 'dík', 'knih', 'kniž', 'sníh', 'svít', 'řidi', 'nič'];
const NATIVE_WORD = new Set(['ti', 'tím', 'tí', 'ní', 'ni', 'dí', 'nic', 'oni', 'ony', 'nimi', 'nich', 'ním', 'níž', 'studenti', 'chtít', 'není', 'paní', 'paním']);
const VERB_PREFIX = ['nejne', 'ne', 'pře', 'při', 'vy', 'za', 'od', 'pod', 'nad', 'roz', 'pro', 'na', 'po', 'do'];
const IT_REST = /^(?:it|ím|íš|í|íme|íte|il|ila|ilo|ili|ily)$/;

const VOICE = { p: 'b', t: 'd', ť: 'ď', k: 'g', f: 'v', s: 'z', š: 'ž', ch: 'h', c: 'dz', č: 'dž', b: 'b', d: 'd', ď: 'ď', g: 'g', v: 'v', z: 'z', ž: 'ž', h: 'h', dz: 'dz', dž: 'dž' };
const DEVOICE = { b: 'p', d: 't', ď: 'ť', g: 'k', v: 'f', z: 's', ž: 'š', h: 'ch', dz: 'c', dž: 'č', p: 'p', t: 't', ť: 'ť', k: 'k', f: 'f', s: 's', š: 'š', ch: 'ch', c: 'c', č: 'č' };
const OBSTRUENT = new Set(Object.keys(VOICE).concat(Object.keys(DEVOICE)));
const SONORANT = new Set(['m', 'n', 'ň', 'l', 'r', 'j']);
const VOWEL_K = new Set(['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'u', 'ú', 'ou', 'au', 'eu']);
const VOICED_K = new Set(['b', 'd', 'ď', 'g', 'v', 'z', 'ž', 'h', 'dz', 'dž']);
const RENDER = {
  a: 'ah', á: 'aah', e: 'eh', é: 'ehh', i: 'ih', í: 'ee', o: 'oh', ó: 'ohh', u: 'oo', ú: 'ooh',
  ou: 'ohw', au: 'ow', eu: 'ehw',
  p: 'p', b: 'b', t: 't', d: 'd', ť: 'ty', ď: 'dy', k: 'k', g: 'g', f: 'f', v: 'v',
  s: 's', z: 'z', š: 'sh', ž: 'zh', ch: 'kh', h: 'h', c: 'ts', dz: 'dz', č: 'ch', dž: 'j',
  l: 'l', r: 'r', m: 'm', n: 'n', ň: 'ny', j: 'y'
};

function pronPattern() {
  const c = CONS.join('|'), v = VOWS.join('|');
  const cu = CONS.map(x => x.toUpperCase()).join('|'), vu = VOWS.map(x => x.toUpperCase()).join('|');
  const low = '(?:(?:' + c + ')*(?:' + v + ')(?:' + c + ')*)';
  const up = '(?:(?:' + cu + ')*(?:' + vu + ')(?:' + cu + ')*)';
  const word = '(?:' + up + '(?:-' + low + ')*|' + low + '(?:-' + low + ')*)';
  return '^(?:' + word + ')(?: ' + word + ')*$';
}

function isVowelPh(p) { return !!p && VOWEL_K.has(p.k); }
function isObstr(k) { return OBSTRUENT.has(k); }
function isVoiced(k) { return VOICED_K.has(k); }

function classify(word) {
  if (!/[dtn][ií]/.test(word)) return 'none';
  const seqs = [];
  for (const m of word.matchAll(/[dtn][ií]/g)) seqs.push(m.index);
  const hardAt = loanAt(word);
  if (hardAt) {
    const outside = seqs.some(i => i < hardAt.start || i >= hardAt.end);
    if (outside) throw unclassified(word, 'it mixes a hard loan stem with another di/ti/ni');
    return 'hard';
  }
  if (nativeAt(word) || suffixSoft(word)) return 'soft';
  throw unclassified(word, 'not listed as native or a loan');
}

function unclassified(word, why) {
  return new Error('"' + word + '" has di/dí/ti/tí/ni/ní and is ' + why + '. Add it to NATIVE or LOAN in respell.js. Do not guess.');
}

function loanAt(word) {
  let best = null;
  function consider(w, offset) {
    for (const stem of LOAN) {
      if (w.startsWith(stem) && (!best || stem.length > best.end - best.start)) best = { start: offset, end: offset + stem.length };
    }
  }
  consider(word, 0);
  for (const p of VERB_PREFIX) {
    if (word.startsWith(p) && word.length > p.length) consider(word.slice(p.length), p.length);
  }
  return best;
}

function nativeAt(word) {
  function stem(w) {
    if (NATIVE_WORD.has(w)) return true;
    for (const s of NATIVE_STEM) if (w.startsWith(s)) return true;
    if (/čtin/.test(w)) return true;
    for (const s of ['plat', 'vrát', 'chyt', 'pust', 'vrac', 'ztrat', 'splat']) {
      if (w.startsWith(s) && IT_REST.test(w.slice(s.length))) return true;
    }
    return false;
  }
  if (stem(word)) return true;
  for (const p of VERB_PREFIX) if (word.startsWith(p) && stem(word.slice(p.length))) return true;
  return false;
}

/* první, paní, oni, nimi: the only di/ti/ni is a final n + i/í ending. aktivní still throws (it also has ti). */
function suffixSoft(word) {
  const seqs = [...word.matchAll(/[dtn][ií]/g)];
  return seqs.length > 0 && seqs.every(m => m[0][0] === 'n' && /^n[ií](?:ho|mu|ch|mi|m)?$/.test(word.slice(m.index)));
}

function rewrite(word) {
  return word.replace(/^sedm(?![aáeéěiíouúůyý])/, 'sedum').replace(/^osm(?![aáeéěiíouúůyý])/, 'osum').replace(/^dc/, 'c');
}

function parseWord(raw) {
  const word = rewrite(raw);
  const mode = classify(raw);
  const ph = [];
  const push = k => ph.push({ k });
  for (let i = 0; i < word.length; i++) {
    const c = word[i], n = word[i + 1] || '';
    if (c === 'c' && n === 'h') { push('ch'); i++; continue; }
    if (c === 'd' && n === 'ž') { push('dž'); i++; continue; }
    if ((c === 'o' || c === 'a' || c === 'e') && n === 'u') { push(c === 'o' ? 'ou' : c === 'a' ? 'au' : 'eu'); i++; continue; }
    if (c === 'ě') { applyE(ph, raw); continue; }
    if (c === 'x') {
      const ex = i === 1 && word[0] === 'e';
      const voicedNext = !!n && 'aáeéěiíouúůyýbdďghvzž'.includes(n);
      if (ex && voicedNext) { push('g'); push('z'); } else { push('k'); push('s'); }
      continue;
    }
    if (c === 'q') { push('k'); push('v'); continue; }
    if (c === 'w') { push('v'); continue; }
    if ((c === 'd' || c === 't' || c === 'n') && (n === 'i' || n === 'í')) {
      push(mode === 'soft' ? { d: 'ď', t: 'ť', n: 'ň' }[c] : c);
      continue;
    }
    const v = { a: 'a', á: 'á', e: 'e', é: 'é', i: 'i', í: 'í', y: 'i', ý: 'í', o: 'o', ó: 'ó', u: 'u', ú: 'ú', ů: 'ú' }[c];
    if (v) {
      push(v);
      if (n && 'iíyý'.includes(c) && 'aáeéiíoóuúů'.includes(n)) push('j');
      continue;
    }
    const cons = { b: 'b', c: 'c', č: 'č', d: 'd', ď: 'ď', f: 'f', g: 'g', h: 'h', j: 'j', k: 'k', l: 'l', m: 'm', n: 'n', ň: 'ň', p: 'p', r: 'r', ř: 'ř', s: 's', š: 'š', t: 't', ť: 'ť', v: 'v', z: 'z', ž: 'ž' }[c];
    if (!cons) throw new Error('respell: unknown letter "' + c + '" in "' + raw + '"');
    push(cons);
  }
  for (let i = 0; i < ph.length - 1; i++) {
    if (ph[i].k === ph[i + 1].k && ph[i].k !== 'j' && !VOWEL_K.has(ph[i].k)) ph.splice(i + 1, 1), i--;
  }
  return ph;
}

function applyE(ph, raw) {
  const prev = ph[ph.length - 1];
  if (!prev) throw new Error('respell: ě cannot start "' + raw + '"');
  if (prev.k === 'd') prev.k = 'ď';
  else if (prev.k === 't') prev.k = 'ť';
  else if (prev.k === 'n' || prev.k === 'm') { if (prev.k === 'm') ph.push({ k: 'ň' }); else prev.k = 'ň'; }
  else if (prev.k === 'b' || prev.k === 'p' || prev.k === 'v' || prev.k === 'f') ph.push({ k: 'j' });
  else throw new Error('respell: ě after "' + prev.k + '" in "' + raw + '"');
  ph.push({ k: 'e' });
}

function rightOf(next) {
  if (!next || !next.length) return 'devoice';
  const k = next[0].k;
  if (k === 'v' || k === 'ř' || isVowelPh(next[0]) || SONORANT.has(k)) return 'devoice';
  if (isVoiced(k)) return 'voice';
  return 'devoice';
}

function assimilate(ph, right) {
  for (let i = 1; i < ph.length; i++) {
    if (ph[i].k === 'h' && isObstr(ph[i - 1].k) && !isVoiced(ph[i - 1].k)) ph[i].k = 'ch';
  }
  let i = 0;
  while (i < ph.length) {
    if (!isObstr(ph[i].k)) { i++; continue; }
    let j = i;
    while (j < ph.length && isObstr(ph[j].k)) j++;
    const atEnd = j === ph.length;
    const last = ph[j - 1].k;
    if (!atEnd && last === 'v') {
      /* v takes voicing from what follows, but it does not change the consonant before it (svět, dvě, tvůj). */
      if (j - i > 1) {
        const sub = ph[j - 2].k;
        const voiced = isVoiced(sub);
        for (let k = i; k < j - 1; k++) ph[k].k = (voiced ? VOICE : DEVOICE)[ph[k].k] || ph[k].k;
      }
      ph[j - 1].k = 'v';
    } else {
      const voiced = atEnd ? right === 'voice' : isVoiced(last);
      for (let k = i; k < j; k++) ph[k].k = (voiced ? VOICE : DEVOICE)[ph[k].k] || ph[k].k;
    }
    i = j;
  }
  for (let n = 0; n < ph.length; n++) {
    if (ph[n].k !== 'ř') continue;
    const L = neighborObstr(ph, n, -1), R = neighborObstr(ph, n, 1);
    const final = !ph.slice(n + 1).some(p => isVowelPh(p) || p.k === 'ř');
    ph[n].rsh = (!!L && !isVoiced(L.k)) || (!!R && !isVoiced(R.k)) || (final && right !== 'voice' && !R);
  }
}

function neighborObstr(ph, i, dir) {
  const j = i + dir;
  if (j < 0 || j >= ph.length) return null;
  const p = ph[j];
  if (isVowelPh(p) || SONORANT.has(p.k) || p.k === 'ř') return null;
  return isObstr(p.k) ? p : null;
}

function markSyllabic(ph) {
  for (let i = 0; i < ph.length; i++) {
    if (ph[i].k !== 'r' && ph[i].k !== 'l') continue;
    if (!isVowelPh(ph[i - 1]) && !isVowelPh(ph[i + 1])) ph[i].syll = true;
  }
}

function rising(a, b) {
  return isObstr(a.k) && (b.k === 'r' || b.k === 'l' || b.k === 'ř' || b.k === 'j') && !b.syll;
}

function renderSyllables(ph) {
  markSyllabic(ph);
  const nuc = [];
  ph.forEach((p, i) => { if (isVowelPh(p) || p.syll) nuc.push(i); });
  if (!nuc.length) return null;
  const start = [0];
  for (let n = 0; n < nuc.length - 1; n++) {
    const cons = ph.slice(nuc[n] + 1, nuc[n + 1]);
    const on = cons.length >= 2 && rising(cons[cons.length - 2], cons[cons.length - 1]) ? 2 : (cons.length ? 1 : 0);
    start.push(nuc[n + 1] - on);
  }
  const syl = [];
  for (let n = 0; n < nuc.length; n++) {
    const a = start[n], b = n + 1 < nuc.length ? start[n + 1] : ph.length;
    syl.push(ph.slice(a, b).map(piece).join(''));
  }
  return syl;
}

function piece(p) {
  if (p.k === 'ř') return p.rsh ? 'rsh' : 'rzh';
  if (p.syll && p.k === 'r') return 'rr';
  if (p.syll && p.k === 'l') return 'll';
  const s = RENDER[p.k];
  if (!s) throw new Error('respell: cannot write sound "' + p.k + '"');
  return s;
}

function capSyl(s) { return s.toUpperCase(); }

function respell(text) {
  const t = String(text).normalize('NFC').toLowerCase().replace(/[.,!?;:…"“”„«»()[\]{}<>/\\~`´ʼ’'"—–\-‐‑]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (!t) return '';
  if (/\d/.test(t)) throw new Error('respell: write numbers as words');
  if (/[^aábcčdďeéěfghiíjklmnňoópqrřsštťuúůvwxyýzž ]/.test(t)) throw new Error('respell: unsupported letter in "' + text + '"');
  const words = t.split(' ').filter(Boolean);
  const items = words.map(w => ({ w, ph: parseWord(w), kind: BARE_PREP.has(w) ? 'bare' : VOWEL_PREP.has(w) ? 'vowel' : 'word' }));
  const seq = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    if (it.kind === 'bare') {
      const nxt = items[i + 1];
      if (!nxt) throw new Error('respell: "' + it.w + '" has no vowel. Put the next word after it (v Praze), or use the form with -e (ve, ke, ze).');
      if (isVowelPh(nxt.ph[0])) it.ph.forEach(p => { if (DEVOICE[p.k]) p.k = DEVOICE[p.k]; });
      nxt.ph = it.ph.concat(nxt.ph);
      nxt.merged = true;
      continue;
    }
    seq.push(it);
  }
  for (let i = 0; i < seq.length; i++) assimilate(seq[i].ph, rightOf(seq[i + 1] && seq[i + 1].ph));
  for (let i = 0; i < seq.length; i++) {
    if (seq[i].kind === 'vowel' && seq[i + 1] && !seq[i].unstressed) seq[i + 1].unstressed = true;
  }
  const out = [];
  for (const it of seq) {
    const syl = renderSyllables(it.ph);
    if (!syl) throw new Error('respell: no vowel in "' + it.w + '"');
    const stress = !it.unstressed && (syl.length >= 2 || it.kind === 'vowel' || it.merged);
    if (stress) syl[0] = capSyl(syl[0]);
    out.push(syl.join('-'));
  }
  return out.join(' ');
}

function runTests() {
  const RE = new RegExp(pronPattern());
  const eq = [
    ['byt', 'biht'], ['být', 'beet'], ['bít', 'beet'], ['řeka', 'RZHEH-kah'], ['tři', 'trshih'],
    ['dobře', 'DOH-brzheh'], ['dobrý', 'DOH-bree'], ['chléb', 'khlehhp'], ['cena', 'TSEH-nah'],
    ['led', 'leht'], ['let', 'leht'], ['vlk', 'vllk'], ['krk', 'krrk'], ['Petr', 'PEH-trr'],
    ['Brno', 'BRR-noh'], ['čtvrtek', 'CHTVRR-tehk'], ['Vltava', 'VLL-tah-vah'], ['sedm', 'SEH-doom'],
    ['osm', 'OH-soom'], ['dcera', 'TSEH-rah'], ['na shledanou', 'NAH skhleh-dah-nohw'],
    ['do Prahy', 'DOH prah-hih'], ['v Praze', 'FPRAH-zeh'], ['Dobrý den', 'DOH-bree dehn'],
    ['město', 'MNYEHS-toh'], ['děkuji', 'DYEH-koo-yih'], ['čeština', 'CHEHSH-tyih-nah'],
    ['kávu', 'KAAH-voo'], ['dlouhý', 'DLOHW-hee'], ['domů', 'DOH-mooh'], ['stůl', 'stoohl'],
    ['auto', 'OW-toh'], ['euro', 'EHW-roh'], ['politika', 'POH-lih-tih-kah'], ['titul', 'TIH-tool'],
    ['univerzita', 'OO-nih-vehr-zih-tah'], ['ty', 'tih'], ['ti', 'tyih'], ['kdo', 'gdoh'],
    ['včera', 'FCHEH-rah'], ['obchod', 'OHP-khoht'], ['shoda', 'SKHOH-dah'], ['bůh', 'boohkh'],
    ['Praha', 'PRAH-hah'], ['ahoj', 'AH-hohy'], ['prosím', 'PROH-seem'], ['jmenuji se', 'YMEH-noo-yih seh'],
    ['nejsem', 'NEHY-sehm'], ['mluvím', 'MLOO-veem'], ['studovat', 'STOO-doh-vaht'], ['pět', 'pyeht'],
    ['dvě', 'dvyeh'], ['jedna', 'YEHD-nah'], ['koruna', 'KOH-roo-nah'], ['měkký', 'MNYEH-kee'],
    ['Plzeň', 'PLL-zehny'], ['zpěvák', 'SPYEH-vaahk'], ['Jsem z Prahy', 'ysehm SPRAH-hih'],
    ['ve škole', 'VEH shkoh-leh'], ['na poště', 'NAH pohsh-tyeh'], ['s mlékem', 'SMLEHH-kehm'],
    ['k doktorovi', 'GDOHK-toh-roh-vih'], ['angličtina', 'AHN-glihch-tyih-nah'], ['hodina', 'HOH-dyih-nah'],
    ['kniha', 'KNYIH-hah'], ['rodiče', 'ROH-dyih-cheh'], ['děti', 'DYEH-tyih'], ['nic', 'nyihts'],
    ['oni', 'OH-nyih'], ['paní', 'PAH-nyee'], ['chtít', 'khtyeet'], ['týden', 'TEE-dehn'],
    ['byla jsem', 'BIH-lah ysehm'], ['rád', 'raaht'], ['ráda', 'RAAH-dah'], ['byli', 'BIH-lih'],
    ['byly', 'BIH-lih'],     ['moře', 'MOH-rzheh'], ['tvář', 'tvaahrsh'], ['sedmnáct', 'SEH-doom-naahtst'],
    ['osmdesát', 'OH-soom-deh-saaht'], ['dvě', 'dvyeh'], ['svůj', 'svoohy'], ['tvůj', 'tvoohy']
  ];
  let bad = 0;
  for (const [w, want] of eq) {
    let got;
    try { got = respell(w); } catch (e) { got = 'THROW ' + e.message; }
    const ok = got === want && RE.test(got);
    if (!ok) { bad++; console.log('FAIL', w, '->', got, 'want', want, 'pattern', RE.test(String(got))); }
  }
  const rejects = ['byt', 'řeka', 'DOH-BREE', 'doh-BREE', 'beet-', 'áh', 'BEET '];
  for (const r of rejects) if (RE.test(r)) { bad++; console.log('pattern should reject', r); }
  for (const w of ['tenis', 'aktivní', 'kredit', 'univerzitní']) {
    try { respell(w); bad++; console.log('should throw', w, respell(w)); } catch (e) { /* expected */ }
  }
  try { respell('v'); bad++; console.log('lone v should throw'); } catch (e) { /* expected */ }
  console.log(bad ? bad + ' failed' : 'ok ' + eq.length);
  if (bad) process.exit(1);
}

module.exports = { respell, pronPattern };
if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--pattern') console.log(pronPattern());
  else if (a[0] === '--test') runTests();
  else {
    let fail = 0;
    for (const x of a) {
      try { console.log(x, '->', respell(x)); }
      catch (e) { console.error('ERROR:', e.message); fail++; }
    }
    if (fail) process.exit(1);
  }
}
