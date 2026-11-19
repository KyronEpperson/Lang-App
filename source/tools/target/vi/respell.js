/* Vietnamese spelling (Northern / Hanoi) -> en-vi pron respelling (profile docs/profiles/en-vi.md §6). Deterministic and context-free per
   syllable, so every writer gets the same string for the same text.
   Usage: node respell.js "Xin chào!"   ->   Xin chào! -> seen chahw_
   Format: one respelled chunk per Vietnamese syllable, separated by single spaces, all lowercase ASCII; a centring vowel (iê / ia,
   uô / ua, ươ / ưa) is written with one hyphen inside the chunk (vee-uht.). The tone is ONE symbol at the end of the chunk:
     level (ngang) = nothing   rising (sắc) = /   falling (huyền) = _   dipping (hỏi) = ?   broken (ngã) = ~   heavy (nặng) = .
   Key (summary; full key in the profile):
     initials  b  ch (ch, tr)  d (đ)  z (d, gi, r)  dt (t)  t (th)  f (ph)  g (g, gh)  h  k (c, k)  kh  kw (qu)  l  m  n  ng (ng, ngh)
               ny (nh)  p  s (s, x)  v
     vowels    ah (a)  a (ă)  uh (â)  eh (e)  ey (ê)  ee (i, y)  aw (o)  oh (ô)  er (ơ, no r sound)  oo (u)  uu (ư)
               ee-uh (iê, ia)  oo-uh (uô, ua)  uu-uh (ươ, ưa); w = the glide o / u in oa, oe, uê, uy, uâ, qu
     glides    ahy (ai)  ai (ay)  ahw (ao)  ow (au)  uhw (âu)  ay (ây)  ehw (eo)  eyw (êu)  eew (iu)  awy (oi)  ohy (ôi)  uhy (ơi)
               ooy (ui)  uuy (ưi)  uuw (ưu)  ee-uhw (iêu)  oo-uhy (uôi)  uu-uhy (ươi)  uu-uhw (ươu)
     finals    m n ng p t k (c);  -anh = aing  -ach = aik  -ênh = eyng  -êch = eyk  -inh = ing  -ich = ik
   Tone-mark placement does not matter (hòa = hoà, thủy = thuỷ), and NFC / NFD input give the same output.
   A syllable ending in p, t, c or ch can only carry the rising or the heavy tone: anything else throws (it is a typo).
   Words that are not Vietnamese syllables (loanwords, English names) throw unless they are in EXC. Never hand-edit a pron:
   add the word to EXC (value written with the same key) and re-run the rows. */

const EXC = {
  'ok': 'oh key', 'pizza': 'pee zah', 'taxi': 'dtak/ see', 'wifi': 'wai fai', 'emma': 'ehm mah', 'jack': 'chehk/',
};

const TONE = { '́': '/', '̀': '_', '̉': '?', '̃': '~', '̣': '.' };
const NAME = { '': 'level', '/': 'rising', '_': 'falling', '?': 'dipping', '~': 'broken', '.': 'heavy' };

const INIT = [['ngh', 'ng'], ['ng', 'ng'], ['nh', 'ny'], ['ch', 'ch'], ['gh', 'g'], ['gi', 'z'], ['kh', 'kh'], ['ph', 'f'], ['th', 't'], ['tr', 'ch'],
  ['qu', 'k'], ['b', 'b'], ['c', 'k'], ['d', 'z'], ['đ', 'd'], ['g', 'g'], ['h', 'h'], ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'], ['p', 'p'],
  ['r', 'z'], ['s', 's'], ['t', 'dt'], ['v', 'v'], ['x', 's']];
const VOW = 'aăâeêioôơuưy';

/* nucleus -> token (open or before m n ng p t c) */
const NUC = { 'a': 'ah', 'ă': 'a', 'â': 'uh', 'e': 'eh', 'ê': 'ey', 'i': 'ee', 'y': 'ee', 'o': 'aw', 'ô': 'oh', 'ơ': 'er', 'u': 'oo', 'ư': 'uu',
  'iê': 'ee-uh', 'yê': 'ee-uh', 'ia': 'ee-uh', 'ya': 'ee-uh', 'uô': 'oo-uh', 'ua': 'oo-uh', 'ươ': 'uu-uh', 'ưa': 'uu-uh' };
/* nucleus + glide final -> token */
const GLIDE = { 'ai': 'ahy', 'ay': 'ai', 'ao': 'ahw', 'au': 'ow', 'âu': 'uhw', 'ây': 'ay', 'eo': 'ehw', 'êu': 'eyw', 'iu': 'eew', 'oi': 'awy',
  'ôi': 'ohy', 'ơi': 'uhy', 'ui': 'ooy', 'ưi': 'uuy', 'ưu': 'uuw', 'iêu': 'ee-uhw', 'yêu': 'ee-uhw', 'uôi': 'oo-uhy', 'ươi': 'uu-uhy', 'ươu': 'uu-uhw',
  'uyu': 'eew' /* after the medial w: khuỷu */ };
/* -nh / -ch after a, ê, i (the vowel takes a y glide in Hanoi) */
const PAL = { 'a': ['aing', 'aik'], 'ê': ['eyng', 'eyk'], 'i': ['ing', 'ik'], 'y': ['ing', 'ik'] };
const CODA = ['ng', 'nh', 'ch', 'm', 'n', 'p', 't', 'c'];
const STOP = new Set(['p', 't', 'c', 'ch']);

function fail(w, why) { throw new Error('respell: cannot respell «' + w + '»: ' + why + '. Write numbers as words; add loanwords and names to EXC in respell.js.'); }

/* one syllable -> [onset, rime, tone] */
function parts(raw) {
  const w = raw.normalize('NFC').toLowerCase();
  const d = w.normalize('NFD');
  let tone = '', base = '';
  for (const ch of d) { if (TONE[ch] !== undefined) { if (tone) fail(raw, 'two tone marks'); tone = TONE[ch]; } else base += ch; }
  base = base.normalize('NFC');
  if (/[^a-zăâđêôơư]/.test(base)) fail(raw, 'letter not used in Vietnamese');
  let on = '', rest = base;
  for (const [g, r] of INIT) {
    if (!base.startsWith(g)) continue;
    let after = base.slice(g.length);
    if (g === 'gi') {                                   /* gi + consonant or nothing: the i is the vowel (gì, gìn); gi + ê: the i belongs to iê (giết) */
      if (!after || !VOW.includes(after[0]) || after[0] === 'ê') after = 'i' + after;
    }
    if (g === 'qu') { if (!after) fail(raw, 'qu with no vowel'); on = 'k'; rest = 'u' + after; break; }   /* the u of qu is the glide w */
    on = r; rest = after; break;
  }
  if (!rest || !VOW.includes(rest[0])) fail(raw, 'no vowel');
  return [on, rime(rest, raw, base.startsWith('qu')), tone, base];
}

function rime(r, raw, isQu) {
  let med = '', s = r;
  if (isQu) { med = 'w'; s = r.slice(1); if (!s) fail(raw, 'qu with no vowel'); }
  else if (s[0] === 'o' && s[1] && 'aăe'.includes(s[1])) { med = 'w'; s = s.slice(1); }
  else if (s[0] === 'u' && s[1] && 'âêơy'.includes(s[1])) { med = 'w'; s = s.slice(1); }
  /* glide endings first (whole rime) */
  const g = med === 'w' && s === 'yu' ? 'uyu' : s;
  if (GLIDE[g]) return med + GLIDE[g];
  /* nucleus + optional consonant final */
  let nuc = '', coda = '';
  for (const n of ['iê', 'yê', 'uô', 'ươ', 'ia', 'ya', 'ua', 'ưa']) if (s.startsWith(n)) { nuc = n; break; }
  if (nuc && ['ia', 'ya', 'ua', 'ưa'].includes(nuc) && s.length > 2) nuc = '';          /* ia / ua / ưa only stand at the end */
  if (nuc === 'ua' && med) nuc = '';
  if (!nuc) nuc = s[0];
  coda = s.slice(nuc.length);
  if (!NUC[nuc]) fail(raw, 'unknown vowel');
  if (coda && !CODA.includes(coda)) fail(raw, 'unknown ending «' + coda + '»');
  if (coda === 'nh' || coda === 'ch') {
    const p = PAL[nuc]; if (!p) fail(raw, '-' + coda + ' after ' + nuc);
    return med + p[coda === 'nh' ? 0 : 1];
  }
  return med + NUC[nuc] + (coda === 'c' ? 'k' : coda);
}

function syllable(raw) {
  const k = raw.normalize('NFC').toLowerCase();
  if (EXC[k] !== undefined) return EXC[k];
  if (/\d/.test(k)) fail(raw, 'digit');
  const [on, rm, tone, base] = parts(raw);
  const stop = /(p|t|c|ch)$/.test(base);
  if (stop && tone !== '/' && tone !== '.') fail(raw, 'a syllable ending in p, t, c or ch takes only the rising (á) or heavy (ạ) tone: check the tone mark');
  return on + rm + tone;
}

function respell(text) {
  return String(text).normalize('NFC').replace(/[¿¡?!.,;:"“”«»()…–—\/'’‘-]/g, ' ').trim().split(/\s+/).filter(Boolean).map(syllable).join(' ');
}

/* the pronPattern of the profile, built from the same tables, so every output (and nothing that is not a possible output) matches */
function pattern() {
  const ons = ['', 'b', 'ch', 'd', 'dt', 'f', 'g', 'h', 'k', 'kh', 'l', 'm', 'n', 'ng', 'ny', 'p', 's', 't', 'v', 'z'];
  const open = new Set(), stop = new Set();
  const meds = ['', 'w'];
  Object.entries(NUC).forEach(([k, n]) => meds.forEach(m => { if (k !== 'ă' && k !== 'â') open.add(m + n);   /* ă and â never end a syllable */
    ['m', 'n', 'ng'].forEach(c => open.add(m + n + c)); ['p', 't', 'k'].forEach(c => stop.add(m + n + c)); }));
  Object.values(GLIDE).forEach(x => meds.forEach(m => open.add(m + x)));
  Object.values(PAL).forEach(([a, b]) => meds.forEach(m => { open.add(m + a); stop.add(m + b); }));
  const alt = set => [...set].sort((a, b) => b.length - a.length).join('|');
  const O = '(?:' + ons.filter(Boolean).sort((a, b) => b.length - a.length).join('|') + ')?';
  const S = O + '(?:(?:' + alt(open) + ')[/_?~.]?|(?:' + alt(stop) + ')[/.])';
  return '^' + S + '(?: ' + S + ')*$';
}

module.exports = { respell, syllable, pattern, EXC, NAME };
if (require.main === module) for (const a of process.argv.slice(2)) { try { console.log(a, '->', respell(a)); } catch (e) { process.stderr.write(e.message + '\n'); process.exitCode = 1; } }
