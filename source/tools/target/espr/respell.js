/* Spanish spelling -> en-es pron respelling (profile en-es §6). Deterministic, so every writer gets the same string. */
const EXC = { 'oaxaca': 'wah-HAH-kah', 'break': 'brehk' };          /* whole-word exceptions */
const XJ = /^(m[eé]xic|texa)/;                 /* x said as j: México, mexicano/a/os/as, Texas */
const V = 'aeiouáéíóúü';
const isV = c => V.includes(c);
const strong = c => 'aeoáéíóú'.includes(c); // accented i/u behave as strong (hiatus)
function graphemes(w) {
  const g = [];
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1], n2 = w[i + 2];
    if (c === 'c' && n === 'h') { g.push('ch'); i++; continue; }
    if (c === 'l' && n === 'l') { g.push('ll'); i++; continue; }
    if (c === 'r' && n === 'r') { g.push('rr'); i++; continue; }
    if (c === 'q' && n === 'u') { g.push('qu'); i++; continue; }
    if (c === 'g' && n === 'u' && n2 && 'eéií'.includes(n2)) { g.push('gu'); i++; continue; }
    if (c === 'g' && n === 'ü') { g.push('gw'); i++; continue; }
    if (c === 'y' && (i === w.length - 1 || !isV(n || ''))) { g.push('i'); continue; } // y not before a vowel acts as the vowel i (hoy, muy)
    g.push(c);
  }
  return g;
}
const gv = x => x.length === 1 && isV(x);
const INSEP = new Set(['pr', 'br', 'tr', 'dr', 'cr', 'kr', 'gr', 'fr', 'pl', 'bl', 'cl', 'kl', 'gl', 'fl']);
function syllabify(w) {
  const g = graphemes(w);
  // nuclei: split vowel runs into nuclei (hiatus between two strong vowels)
  const units = []; // {t:'V'|'C', s}
  for (const x of g) units.push({ t: gv(x) ? 'V' : 'C', s: x });
  // group vowels into nuclei
  const seq = [];
  for (let i = 0; i < units.length;) {
    if (units[i].t === 'C') { seq.push(units[i]); i++; continue; }
    let run = [];
    while (i < units.length && units[i].t === 'V') run.push(units[i++].s);
    let cur = [run[0]];
    for (let k = 1; k < run.length; k++) {
      const a = run[k - 1], b = run[k];
      const weakPair = 'iuíúü'.includes(a) && 'iuíúü'.includes(b); /* ui, iu (even cuídate) = one syllable */
      const hiatus = !weakPair && ((strong(a) && strong(b)) || 'íú'.includes(a) || 'íú'.includes(b));
      if (hiatus) { seq.push({ t: 'N', s: cur.join('') }); cur = [b]; } else cur.push(b);
    }
    seq.push({ t: 'N', s: cur.join('') });
  }
  // h between vowels does not block (treated as consonant onset; fine)
  const nIdx = seq.map((u, i) => u.t === 'N' ? i : -1).filter(i => i >= 0);
  if (!nIdx.length) throw new Error('no vowel in "' + w + '": write numbers and symbols as words');
  const sylls = [];
  let start = 0;
  for (let k = 0; k < nIdx.length; k++) {
    const ni = nIdx[k];
    if (k === nIdx.length - 1) { sylls.push(seq.slice(start)); break; }
    const next = nIdx[k + 1];
    const cons = seq.slice(ni + 1, next).map(u => u.s);
    let toPrev;
    if (cons.length <= 1) toPrev = 0;
    else if (cons.length === 2) toPrev = INSEP.has(cons.join('')) ? 0 : 1;
    else if (cons.length === 3) toPrev = INSEP.has(cons.slice(1).join('')) ? 1 : 2;
    else toPrev = 2;
    sylls.push(seq.slice(start, ni + 1 + toPrev));
    start = ni + 1 + toPrev;
  }
  return sylls;
}
function stressIndex(w, sylls) {
  const accented = sylls.findIndex(s => s.some(u => /[áéíóú]/.test(u.s)));
  if (accented >= 0) return accented;          /* written accent wins */
  if (sylls.length === 1) return 0;
  return /[aeiouns]$/.test(w) ? sylls.length - 2 : sylls.length - 1; /* vowel, n, s -> next to last; else last (final y counts as a consonant) */
}
const plain = c => ({ 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' }[c] || c);
const VOW = { a: 'ah', e: 'eh', i: 'ee', o: 'oh', u: 'oo' };
const OFF = { ai: 'ai', ei: 'ay', oi: 'oy', au: 'ow', eu: 'ehw', ou: 'ohw' };
function nucleus(n) {
  const p = [...n].map(plain).join('');
  if (p.length === 1) return VOW[p];
  if (p === 'ui') return 'wee';
  if (p === 'iu') return 'yoo';
  let on = '', core = p, off = '';
  if ('iu'.includes(core[0]) && core.length > 1) { on = core[0] === 'i' ? 'y' : 'w'; core = core.slice(1); }
  if (core.length > 1 && 'iu'.includes(core[core.length - 1])) { off = core[core.length - 1]; core = core.slice(0, -1); }
  if (core.length !== 1) throw new Error('nucleus ' + n);
  return on + (off ? OFF[core + off] : VOW[core]);
}
function cons(c, next, prev, wordStart) {
  const nv = next ? plain(next[0]) : '';
  switch (c) {
    case 'b': case 'v': return 'b';
    case 'c': return 'ei'.includes(nv) && next ? 's' : 'k';
    case 'ch': return 'ch';
    case 'g': return 'ei'.includes(nv) && next ? 'h' : 'g';
    case 'gu': return 'gh';
    case 'gw': return 'gw';
    case 'h': return '';
    case 'j': return next ? 'h' : '';  /* final j (reloj) is silent */
    case 'll': return 'y';
    case 'ñ': return 'ny';
    case 'qu': return 'k';
    case 'r': return (wordStart || ['n', 'l', 's'].includes(prev)) ? 'rr' : 'r';
    case 'rr': return 'rr';
    case 'x': return 'ks';
    case 'z': return 's';
    case 'y': return 'y';
    default: return c;
  }
}
function word(w) {
  let lw = w.toLowerCase();
  if (EXC[lw]) return EXC[lw];
  if (XJ.test(lw)) lw = lw.replace(/x/g, 'j');
  if (lw === 'y') return 'ee';
  const sylls = syllabify(lw);
  const st = stressIndex(lw, sylls);
  const flat = sylls.flat();
  let pos = 0;
  const out = sylls.map((s, si) => {
    let r = '';
    s.forEach((u) => {
      const next = flat[pos + 1] ? flat[pos + 1].s : '';
      const prev = pos > 0 ? flat[pos - 1].s : '';
      if (u.t === 'N') r += nucleus(u.s); else r += cons(u.s, next, prev, pos === 0);
      pos++;
    });
    return r;
  });
  // x between vowels: k ends previous syllable, s starts next (ta-xi -> tahk-see)
  for (let i = 1; i < out.length; i++) if (out[i].startsWith('ks')) { out[i - 1] += 'k'; out[i] = out[i].slice(1); }
  if (out.length === 1) return out[0];
  return out.map((s, i) => i === st ? s.toUpperCase() : s).join('-');
}
function respell(text) {
  return text.replace(/[¿¡?!.,;:"«»()…]/g, ' ').trim().split(/\s+/).filter(Boolean).map(word).join(' ');
}
module.exports = { respell, syllabify };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));
