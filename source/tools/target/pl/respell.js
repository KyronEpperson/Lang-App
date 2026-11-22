/* Polish spelling -> en-pl pron respelling (profile en-pl §6).
   Standard Polish, Warsaw/northern final devoicing.
   Deterministic: writers never hand-write a pron.
   node respell.js "<text>"  prints "<text> -> <pron>"
   node respell.js --pattern prints the pronPattern source. */
'use strict';

const VOWELS = 'aąeęioóuy';
const isV = c => VOWELS.includes(c);

/* Careful (prescriptive) antepenultimate stress. Everything else is penultimate,
   which is also the casual pronunciation of these words. Instrumental plural
   (-ami) is left out on purpose: that form is regular. */
const ANTE = new Set([
  'muzyka', 'muzyki', 'muzykę', 'muzyce', 'muzyką', 'muzyko',
  'fizyka', 'fizyki', 'fizykę', 'fizyce', 'fizyką', 'fizyko',
  'matematyka', 'matematyki', 'matematykę', 'matematyce', 'matematyką', 'matematyko',
  'ameryka', 'ameryki', 'amerykę', 'ameryce', 'ameryką', 'ameryko',
  'polityka', 'polityki', 'politykę', 'polityce', 'polityką', 'polityko',
  'gramatyka', 'gramatyki', 'gramatykę', 'gramatyce', 'gramatyką', 'gramatyko',
  'republika', 'republiki', 'republikę', 'republice', 'republiką', 'republiko',
  'turystyka', 'turystyki', 'turystykę', 'turystyce', 'turystyką', 'turystyko',
  'ceramika', 'ceramiki', 'ceramikę', 'ceramice', 'ceramiką', 'ceramiko',
  'botanika', 'botaniki', 'botanikę', 'botanice', 'botaniką', 'botaniko',
  'uniwersytet',
  'czterysta', 'siedemset', 'osiemset', 'dziewięćset'
]);

/* Prepositions that stay voiced before a vowel or a sonorant. */
const PREPS = new Set('w z bez przez nad pod od przed we ze beze przeze nade pode ode przede'.split(' '));
/* One-syllable preposition + one-syllable pronoun: stress the preposition. */
const PREP1 = new Set('do na za od pod nad przed przez w z u o we ze dla bez przy po ode nade pode'.split(' '));
/* Mobile-e prepositions: stress the e (the last syllable) before a one-syllable pronoun. */
const PREP_E = new Set('beze przeze przede nade pode ode'.split(' '));
const PRON1 = new Set('mnie mnę mną cię ci go ją je nas was nim nią nich ni niej mu mi ich im wam nam'.split(' '));
/* nie + a one-syllable verb: stress nie. Unlisted verbs stay unmarked, not wrong. */
const NIE = new Set('mam masz ma dam dasz da daj wiem wiesz wie chcę chcesz chce jest był była byłam byłem byli były szedł szła szło pił piła jadł jadła dał dała wziął wzięła idź jedz pij żyj myj stój śpi jem jesz je weź bierz bądź'.split(' '));

const PAIRS = {
  p: ['p', 'b'], b: ['p', 'b'],
  t: ['t', 'd'], d: ['t', 'd'],
  k: ['k', 'g'], g: ['k', 'g'],
  f: ['f', 'v'], v: ['f', 'v'],
  s: ['s', 'z'], z: ['s', 'z'],
  sh: ['sh', 'zh'], zh: ['sh', 'zh'],
  ts: ['ts', 'dz'], dz: ['ts', 'dz'],
  ch: ['ch', 'j'], j: ['ch', 'j'],
  kh: ['kh', 'gh'], gh: ['kh', 'gh'],
  shy: ['shy', 'zhy'], zhy: ['shy', 'zhy'],
  "sh'": ["sh'", "zh'"], "zh'": ["sh'", "zh'"],
  chy: ['chy', 'jy'], jy: ['chy', 'jy'],
  "ch'": ["ch'", "j'"], "j'": ["ch'", "j'"],
  py: ['py', 'by'], by: ['py', 'by'],
  ty: ['ty', 'dy'], dy: ['ty', 'dy'],
  ky: ['ky', 'gy'], gy: ['ky', 'gy'],
  fy: ['fy', 'vy'], vy: ['fy', 'vy']
};

/* Consonants that take the y of a following i into themselves. */
const ABSORB = new Set(['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ts', 'dz', 'n', 'm']);
const PAL = {
  p: ['py', 'by'], b: ['py', 'by'],
  t: ['ty', 'dy'], d: ['ty', 'dy'],
  k: ['ky', 'gy'], g: ['ky', 'gy'],
  f: ['fy', 'vy'], v: ['fy', 'vy'],
  s: ['shy', 'zhy'], z: ['shy', 'zhy'],
  ts: ['chy', 'jy'], dz: ['chy', 'jy']
};

function obs(kind, voiced, determines, noPal) {
  const forms = PAIRS[kind];
  if (!forms) throw new Error('no pair for ' + kind);
  return { type: 'C', kind, forms, voiced: !!voiced, determines: determines !== false, sonorant: false, noPal: !!noPal };
}
function son(kind, stick) {
  /* n and m soften before i (pani, mi). Other sonorants do not. */
  return { type: 'C', kind, out: kind, voiced: true, determines: false, sonorant: true, noPal: kind !== 'n' && kind !== 'm', stick: !!stick };
}
function vow(out, nasal) {
  return { type: 'V', out, nasal: nasal || null };
}

function palatalize(tok) {
  if (!tok || tok.type !== 'C' || tok.pal || tok.noPal) return;
  tok.pal = true;
  if (tok.kind === 'n') { tok.kind = 'ny'; tok.out = 'ny'; tok.sonorant = true; return; }
  if (tok.kind === 'm') { tok.kind = 'my'; tok.out = 'my'; tok.sonorant = true; return; }
  const f = PAL[tok.kind];
  if (!f) return;
  tok.forms = f;
  tok.kind = f[tok.voiced ? 1 : 0];
}

function onI(tokens, asVowel) {
  const prev = tokens[tokens.length - 1];
  if (prev && prev.type === 'C' && ABSORB.has(prev.kind)) palatalize(prev);
  else if (!asVowel) tokens.push(son('y'));
  if (asVowel) tokens.push(vow('ee'));
}

function diph(word, i) {
  if (word[i + 1] !== 'u') return false;
  if (word[i] === 'a' && /^(?:auto|autor|aula|audi)/.test(word)) return true;
  if (word[i] === 'e' && /^euro/.test(word)) return true;
  return false;
}

function readCons(s, i) {
  const c = s[i], n = s[i + 1] || '', n2 = s[i + 2] || '', n3 = s[i + 3] || '';
  const nextV = n && isV(n);
  if (c === 'd' && n === 'ż') return [obs('j', true, true, true), 2];
  if (c === 'd' && n === 'z' && n2 === 'i' && n3 && isV(n3)) return [obs('jy', true, true, true), 3];
  if (c === 'd' && n === 'ź') return [obs(s[i + 2] && isV(s[i + 2]) ? 'jy' : "j'", true, true, true), 2];
  if (c === 'd' && n === 'z') return [obs('dz', true, true, false), 2];
  if (c === 'c' && n === 'h') return [obs('kh', false, true, true), 2];
  if (c === 'c' && n === 'z') return [obs('ch', false, true, true), 2];
  if (c === 's' && n === 'z') return [obs('sh', false, true, true), 2];
  if (c === 'r' && n === 'z') return [obs('zh', true, false, true), 2];
  if (c === 'c' && n === 'i' && n2 && isV(n2)) return [obs('chy', false, true, true), 2];
  if (c === 's' && n === 'i' && n2 && isV(n2)) return [obs('shy', false, true, true), 2];
  if (c === 'z' && n === 'i' && n2 && isV(n2)) return [obs('zhy', true, true, true), 2];
  if (c === 'n' && n === 'i' && n2 && isV(n2)) return [son('ny'), 2];
  if (c === 'ś') return [obs(nextV ? 'shy' : "sh'", false, true, true), 1];
  if (c === 'ź') return [obs(nextV ? 'zhy' : "zh'", true, true, true), 1];
  if (c === 'ć') return [obs(nextV ? 'chy' : "ch'", false, true, true), 1];
  if (c === 'ń') return [son('ny'), 1];
  if (c === 'ł') { const t = son('ł'); t.out = 'w'; return [t, 1]; }
  if (c === 'ż') return [obs('zh', true, true, true), 1];
  if (c === 'h') return [obs('kh', false, true, true), 1];
  if (c === 'w') return [obs('v', true, false, false), 1];
  if (c === 'c') return [obs('ts', false, true, false), 1];
  if ('pbtkdgfsz'.includes(c)) {
    const voiced = 'bdgz'.includes(c);
    return [obs(c, voiced, true, false), 1];
  }
  if ('lrmnj'.includes(c)) return [son(c === 'j' ? 'y' : c), 1];
  throw new Error('bad letter "' + c + '" in "' + s + '"');
}

function tokenize(word) {
  const s = word;
  const t = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (diph(s, i)) {
      t.push(vow(c === 'a' ? 'ah' : 'eh'));
      t.push(son('dip', true));
      t[t.length - 1].out = 'w';
      i += 2;
      continue;
    }
    if (isV(c)) {
      if (c === 'i' && s[i + 1] && isV(s[i + 1])) { onI(t, false); i++; continue; }
      if (c === 'i') { onI(t, true); i++; continue; }
      const nasal = c === 'ą' ? 'ą' : c === 'ę' ? 'ę' : null;
      const base = { a: 'ah', e: 'eh', o: 'oh', ó: 'oo', u: 'oo', y: 'ih', ą: 'oh', ę: 'eh' }[c];
      t.push(vow(base, nasal));
      i++;
      continue;
    }
    const [tok, len] = readCons(s, i);
    t.push(tok);
    i += len;
  }
  /* w and z are real words with no vowel letter. Anything else is a typo. */
  if (!t.some(x => x.type === 'V') && s !== 'w' && s !== 'z') throw new Error('no vowel in "' + word + '": write numbers and symbols as words');
  assimilate(t);
  nasals(t);
  return t;
}

function assimilate(t) {
  for (let i = 0; i < t.length - 1; i++) {
    if (t[i].kind !== 'n') continue;
    const k = t[i + 1].kind;
    if (k === 'k' || k === 'g') { t[i].kind = 'ng'; t[i].out = 'ng'; }
    else if (['ky', 'gy', 'chy', 'jy', 'shy', 'zhy'].includes(k)) { t[i].kind = 'ny'; t[i].out = 'ny'; }
  }
}

function isFric(tok) {
  return ['s', 'z', 'sh', 'zh', 'shy', 'zhy', "sh'", "zh'", 'kh', 'gh', 'f', 'v', 'fy', 'vy'].includes(tok.kind);
}
function nasalCons(tok) {
  const k = tok.kind;
  if (['p', 'b', 'py', 'by'].includes(k)) return 'm';
  if (['k', 'g', 'ky', 'gy'].includes(k)) return 'ng';
  if (['chy', 'jy', "ch'", "j'"].includes(k)) return 'ny';
  return 'n';
}
function nasals(t) {
  for (let i = 0; i < t.length; i++) {
    const v = t[i];
    if (!v.nasal) continue;
    let j = i + 1;
    while (j < t.length && t[j].type !== 'C') j++;
    const next = t[j];
    const oral = v.nasal === 'ą' ? 'oh' : 'eh';
    if (!next || next.kind === 'ł' || next.kind === 'l' || next.kind === 'dip' || next.sonorant) {
      v.out = !next ? (v.nasal === 'ą' ? 'ohN' : 'eh') : oral;
      v.nasal = null;
      continue;
    }
    if (isFric(next)) { v.out = oral + 'N'; v.nasal = null; continue; }
    v.out = oral;
    v.nasal = null;
    t.splice(j, 0, son(nasalCons(next)));
  }
}

function isObs(tok) { return tok.type === 'C' && !tok.sonorant; }

function applyVoicing(words) {
  const flat = [];
  words.forEach((w, wi) => w.tokens.forEach(tok => flat.push({ tok, wi })));
  let i = 0;
  while (i < flat.length) {
    if (!isObs(flat[i].tok)) { i++; continue; }
    let j = i;
    while (j < flat.length && isObs(flat[j].tok)) j++;
    const run = flat.slice(i, j);
    const next = flat[j] || null;
    let det = null;
    for (const x of run) if (x.tok.determines) det = x.tok.voiced;
    let voice;
    const last = run[run.length - 1];
    const atEnd = !next || next.wi !== last.wi;
    if (det == null) {
      voice = !atEnd || (next && !isObs(next.tok));
      if (atEnd && !(PREPS.has(words[last.wi].raw) && next)) voice = false;
      if (!atEnd) voice = true;
    } else {
      voice = det;
      if (atEnd && !(PREPS.has(words[last.wi].raw) && next)) voice = false;
    }
    for (const x of run) x.tok.say = x.tok.forms[voice ? 1 : 0];
    i = j;
  }
  for (const x of flat) if (x.tok.say == null) x.tok.say = x.tok.out;
}

function isSib(tok) {
  return ['s', 'z', 'sh', 'zh', 'shy', 'zhy', "sh'", "zh'", 'kh', 'gh', 'f', 'v', 'fy', 'vy'].includes(tok.kind);
}
function isPlosive(tok) {
  return ['p', 'b', 't', 'd', 'k', 'g', 'py', 'by', 'ty', 'dy', 'ky', 'gy'].includes(tok.kind);
}
function isLiq(tok) {
  return ['r', 'l', 'ł', 'y', 'dip', 'v', 'vy', 'fy'].includes(tok.kind);
}
function isOnset(toks) {
  if (toks.length === 1) return true;
  if (toks.length === 2) {
    if (isSib(toks[0])) return true;
    if (isPlosive(toks[0]) && isLiq(toks[1])) return true;
    return false;
  }
  if (toks.length === 3) {
    if (isSib(toks[0]) && isPlosive(toks[1]) && isLiq(toks[2])) return true;
    if (isPlosive(toks[0]) && isLiq(toks[1]) && toks[2].kind === 'y') return true;
    return false;
  }
  return false;
}

function syllabify(tokens) {
  if (!tokens.some(tok => tok.type === 'V')) return [tokens];
  const vIdx = [];
  tokens.forEach((tok, i) => { if (tok.type === 'V') vIdx.push(i); });
  const sylls = [];
  let start = 0;
  for (let k = 0; k < vIdx.length; k++) {
    const vi = vIdx[k];
    if (k === vIdx.length - 1) { sylls.push(tokens.slice(start)); break; }
    const next = vIdx[k + 1];
    const between = tokens.slice(vi + 1, next);
    let c = 0;
    const coda = [];
    while (c < between.length && between[c].stick) coda.push(between[c++]);
    const rest = between.slice(c);
    let cut = rest.length ? rest.length - 1 : 0;
    for (let p = 0; p < rest.length; p++) {
      if (isOnset(rest.slice(p))) { cut = p; break; }
    }
    const left = tokens.slice(start, vi + 1).concat(coda, rest.slice(0, cut));
    sylls.push(left);
    start = vi + 1 + c + cut;
  }
  return sylls;
}

function participleHost(host) {
  if (/(?:szli|szły|szedł|szła|szło)$/.test(host)) return true;
  return /(?:[aąeęioóuy]li|[aąeęioóuy]ły|[aąeęioóuy]ł|ła|ło)$/.test(host);
}

function stressOf(raw, n) {
  const ends = [['byśmy', 2], ['byście', 2], ['bym', 1], ['byś', 1], ['by', 1], ['śmy', 1], ['ście', 1]];
  for (const [end, extra] of ends) {
    if (!raw.endsWith(end) || raw.length <= end.length) continue;
    const host = raw.slice(0, -end.length);
    if (!participleHost(host)) continue;
    const hostN = n - extra;
    if (hostN < 1) break;
    return hostN === 1 ? 0 : hostN - 2;
  }
  if (ANTE.has(raw)) return Math.max(0, n - 3);
  return n === 1 ? 0 : n - 2;
}

function renderWord(w) {
  const parts = w.sylls.map(sy => sy.map(tok => tok.say).join(''));
  if (w.stress < 0) return parts.join('-');
  if (parts.length === 1 && !w.caps) return parts[0];
  return parts.map((p, i) => i === w.stress ? p.toUpperCase() : p).join('-');
}

function phraseStress(words) {
  for (let i = 0; i < words.length - 1; i++) {
    const w = words[i], n = words[i + 1];
    if (w.raw === 'nie' && NIE.has(n.raw) && n.sylls.length === 1) {
      w.stress = 0; w.caps = true; n.stress = -1; continue;
    }
    if (PREP_E.has(w.raw) && PRON1.has(n.raw) && n.sylls.length === 1) {
      w.stress = w.sylls.length - 1; n.stress = -1; continue;
    }
    if (PREP1.has(w.raw) && PRON1.has(n.raw) && w.sylls.length === 1 && n.sylls.length === 1) {
      w.stress = 0; w.caps = true; n.stress = -1;
    }
  }
}

function respell(text) {
  if (text == null) throw new Error('empty');
  const clean = String(text).replace(/[¿¡?!.,;:“”«»()…\-–—]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!clean) throw new Error('empty');
  if (/[0-9]/.test(clean)) throw new Error('write numbers as words, not digits');
  if (/['’]/.test(clean)) throw new Error('Polish spelling has no apostrophe here');
  if (/[qvx]/i.test(clean)) throw new Error('use a Polish spelling (no q, v or x): wideo, okej');
  if (/[^a-ząćęłńóśźż\s]/i.test(clean)) throw new Error('letter not in Polish spelling: ' + clean);
  const words = clean.toLowerCase().split(' ').filter(Boolean).map(raw => ({ raw, tokens: tokenize(raw) }));
  applyVoicing(words);
  words.forEach(w => {
    w.sylls = syllabify(w.tokens);
    w.stress = stressOf(w.raw, w.sylls.length);
    w.caps = false;
  });
  phraseStress(words);
  const out = words.map(renderWord).join(' ');
  if (!patternRe().test(out)) throw new Error('respell produced a pron the pattern rejects for "' + text + '": ' + out);
  return out;
}

let _pat;
function patternRe() {
  if (!_pat) _pat = new RegExp(pronPattern(), 'u');
  return _pat;
}

/* The pattern is built from the same pieces the generator writes, so the two cannot drift. */
const CONS = ["shy", "zhy", "chy", "jy", "sh'", "zh'", "ch'", "j'", "py", "by", "ty", "dy", "ky", "gy", "fy", "vy", "my", "ny", "ng", "ts", "dz", "kh", "gh", "sh", "zh", "ch", "j", "b", "d", "f", "g", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z"];
const VOW = ["ohN", "ehN", "ah", "eh", "ee", "oh", "oo", "ih"];

function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function alt(list) {
  return [...list].sort((a, b) => b.length - a.length || (a < b ? -1 : 1)).map(esc).join('|');
}

function pronPattern() {
  const cL = '(?:' + alt(CONS) + ')';
  const cU = '(?:' + alt(CONS.map(x => x.toUpperCase())) + ')';
  const vL = '(?:' + VOW.map(v => v === 'ohN' ? 'ohN(?!g)' : v === 'ehN' ? 'ehN(?!g)' : esc(v)).sort((a, b) => b.length - a.length).join('|') + ')';
  const vU = '(?:' + VOW.map(v => v.toUpperCase()).map(v => v === 'OHN' ? 'OHN(?!G)' : v === 'EHN' ? 'EHN(?!G)' : esc(v)).sort((a, b) => b.length - a.length).join('|') + ')';
  const low = cL + '*' + vL + cL + '*';
  const up = cU + '*' + vU + cU + '*';
  /* w and z have no vowel. A capital consonant word is the same clitic under phrase stress. */
  const bareL = '(?:' + alt(CONS) + ')+';
  const bareU = '(?:' + alt(CONS.map(x => x.toUpperCase())) + ')+';
  const word = '(?:(?:' + low + '-)*' + up + '(?:-' + low + ')*|' + low + '|' + bareU + '|' + bareL + ')';
  return '^' + word + '(?: ' + word + ')*$';
}

module.exports = { respell, pronPattern };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') console.log(pronPattern());
  else for (const a of args) console.log(a + ' -> ' + respell(a));
}
