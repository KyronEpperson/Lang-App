/* Cebuano spelling -> en-ceb pron respelling (profile docs/profiles/en-ceb.md §6). Deterministic and context-free per word,
   so every writer gets the same string for the same text.
   Usage: node respell.js "Maayong buntag!"   ->   Maayong buntag! -> mah-AH-yohng BOON-tahg
          require('./respell.js').respell(text) returns the string.
   Key (summary; the full key is in the profile):
     vowels      ah (a)  ee (i, and native e)  eh (e in loans: kape)  oo (u)  oh (o)
                 ai (ay)  ow (aw)  ooy (uy)  eew (iw)  oy (oy)  ay (ey, loans only)
     consonants  ng (also at the start of a word: ngano)  g always hard (gh before ee / eh)  ch (ts: otso)  j (dy: dyip)
                 r = a tap. Everything else as written.
     the catch   a syllable that starts with a vowel inside a word starts with a catch (maayo -> mah-AH-yoh, kan-on -> kahn-OHN);
                 a catch at the END of a word is q (bata, "child" -> BAH-tahq). Neither is written in Cebuano spelling.
     CAPITALS    the stressed syllable. One-syllable words are lowercase. mga is said "manga" -> mah-NGAH.
     a hyphen    before a vowel is the catch inside one word (kanus-a, mag-ampo, Taga-Amerika); between two copies of a word
                 (hinay-hinay) it makes two words in the aid.
   What the spelling does NOT show, and so comes from LEX (with a warning on stderr when it is a guess):
     - which syllable is stressed: next-to-last unless LEX says otherwise (balay -> bah-LAI);
     - a final catch (bata -> BAH-tahq; dako -> dah-KOHQ).
   A word not in LEX gets next-to-last stress and no final catch, and the generator writes
   "respell: check stress / final catch in «word»" on stderr. A word with a known prefix (mo- mi- ni- mag- nag- gi- maka- naka-
   ma- na- ka- pa- pag- taga- i- ig-) whose root is in LEX takes the root's stress and catch, silently (§6: prefixes do not move stress
   [inference]). Suffixed forms (-on -an -a -i -ay) are never derived: list them.
   LEX notation (Wiktionary / KWF 2022 marks): no mark = stress on the next-to-last syllable; acute (á é í ó ú) = stress on that vowel;
   grave on the last vowel (à) = final catch, next-to-last stress; circumflex on the last vowel (â) = final catch AND final stress.
   Every LEX entry was checked in a source named in the profile (§6.4). Add a word ONLY after checking it (Wolff's dictionary,
   bohol.ph/wced.php, or a Wiktionary entry with IPA or a marked headword), never from memory.
   When the output is wrong, fix LEX (never hand-edit a pron) and run node tools/target/repron.js ceb. */

const EXC = {
  'mga': 'mah-NGAH',                                               /* written mga, said manga; KWF §13 */
};

/* checked forms; the source of each is in docs/profiles/en-ceb.md §6.4. (u) = shown unmarked in a Wiktionary list, which by
   Wiktionary's Cebuano convention means next-to-last stress and no final catch: weaker evidence than IPA or a marked headword. */
const LEX_WORDS = `
baláy maayo batà dakô gabii akó túbig ugmâ walâ
usá duhá tuló upát limá unóm pitó waló siyám napulò
bugás karón palít itlóg ulán pulá likód ubó kilát ikóg hagdán putî tungâ pilì yawà lungsód dinhî irô lumà matandâ sip-ón kolór lagós siyudád kamí buhì dagsà gamót
salamat buntag hapon udto kumusta dili ikaw kita kamo sila lami init kaon inom amahan inahan tawo dugo bulan payong asawa tuig gamit dagan bukid gikan diha didto usab sunod babaye imo inyo
`;
const MARK = { 'á': ['a', 's'], 'é': ['e', 's'], 'í': ['i', 's'], 'ó': ['o', 's'], 'ú': ['u', 's'],
  'à': ['a', 'g'], 'è': ['e', 'g'], 'ì': ['i', 'g'], 'ò': ['o', 'g'], 'ù': ['u', 'g'],
  'â': ['a', 'c'], 'ê': ['e', 'c'], 'î': ['i', 'c'], 'ô': ['o', 'c'], 'û': ['u', 'c'] };
const LEX = {};
LEX_WORDS.trim().split(/\s+/).forEach(a => {
  let plain = '', stressAt = -1, catchEnd = false, finalStress = false, vi = 0;
  for (const ch of a) {
    if (MARK[ch]) {
      const [v, k] = MARK[ch];
      if (k === 's') stressAt = vi;
      if (k === 'g' || k === 'c') catchEnd = true;
      if (k === 'c') finalStress = true;
      plain += v; vi++; continue;
    }
    if ('aeiou'.includes(ch)) vi++;
    plain += ch;
  }
  LEX[plain] = { stressAt, catchEnd, finalStress };                /* stressAt counts vowel letters from 0 */
});

const PREFIXES = ['maka', 'naka', 'taga', 'mag', 'nag', 'pag', 'mo', 'mi', 'ni', 'gi', 'ma', 'na', 'ka', 'pa', 'ig', 'i'];
const warned = new Set();
const warn = (w, msg) => { const k = w + msg; if (warned.has(k)) return; warned.add(k); process.stderr.write('respell: check ' + msg + ' in «' + w + '». If wrong, add the checked form to LEX in respell.js.\n'); };

const isV = c => !!c && 'aeiou'.includes(c);
/* 1. letters -> units */
function units(w) {
  const u = [];
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1];
    if (isV(c)) { u.push({ k: 'V', v: c, i }); continue; }
    if (c === '-') { u.push({ k: 'H' }); continue; }
    if (c === 'n' && n === 'g') { u.push({ k: 'C', s: 'ng' }); i++; continue; }
    if (c === 't' && n === 's' && isV(w[i + 2])) { u.push({ k: 'C', s: 'ch' }); i++; continue; }
    if (c === 'd' && n === 'y' && isV(w[i + 2])) { u.push({ k: 'C', s: 'j' }); i++; continue; }
    if (/[bdghklmnprstwy]/.test(c)) { u.push({ k: 'C', s: c }); continue; }
    if (c === 'j') { u.push({ k: 'C', s: 'j' }); continue; }             /* names only */
    throw new Error('cannot respell "' + c + '" in "' + w + '": use the Cebuano spelling (c q f v x z only in foreign names), and write numbers as words');
  }
  return u;
}
const INSEP = new Set(['pr', 'br', 'tr', 'dr', 'kr', 'gr', 'pl', 'bl', 'kl', 'gl', 'ky', 'gw', 'kw', 'sw', 'by', 'py', 'dw', 'tw']);
/* 2. syllables: every vowel letter is its own nucleus (Cebuano writes glides as y / w); a final y / w joins the vowel before it */
function syllables(w) {
  const u = units(w);
  const nuc = [];
  u.forEach((x, i) => { if (x.k === 'V') nuc.push(i); });
  if (!nuc.length) throw new Error('no vowel in "' + w + '": write numbers and symbols as words');
  const syl = nuc.map(i => ({ v: u[i].v, onset: [], coda: [], vowelOnset: false }));
  for (let i = 0; i < nuc[0]; i++) if (u[i].k === 'C') syl[0].onset.push(u[i].s);
  for (let k = 0; k < nuc.length; k++) {
    const end = k + 1 < nuc.length ? nuc[k + 1] : u.length;
    const mid = u.slice(nuc[k] + 1, end);
    const hy = mid.findIndex(x => x.k === 'H');
    const cons = mid.filter(x => x.k === 'C').map(x => x.s);
    if (k + 1 === nuc.length) { syl[k].coda = cons; break; }
    let toPrev;
    if (hy >= 0) toPrev = mid.slice(0, hy).filter(x => x.k === 'C').length;   /* a spelling hyphen marks the break */
    else if (cons.length <= 1) toPrev = 0;
    else if (cons.length === 2) toPrev = INSEP.has(cons[0] + cons[1]) ? 0 : 1;
    else toPrev = INSEP.has(cons[cons.length - 2] + cons[cons.length - 1]) ? cons.length - 2 : cons.length - 1;
    syl[k].coda = cons.slice(0, toPrev); syl[k + 1].onset = cons.slice(toPrev);
    if (!syl[k + 1].onset.length) syl[k + 1].vowelOnset = true;
  }
  return syl;
}
/* 3. one syllable -> aid text */
const VOW = { a: 'ah', i: 'ee', e: 'eh', u: 'oo', o: 'oh' };
const GLIDE = { 'a+y': 'ai', 'a+w': 'ow', 'u+y': 'ooy', 'o+y': 'oy', 'i+w': 'eew', 'e+y': 'ay', 'i+y': 'ee', 'u+w': 'oo', 'o+w': 'ow', 'e+w': 'ehw' };
function text(s, catchHere) {
  let onset = s.onset.join('');
  let coda = s.coda.slice();
  let nucleus = VOW[s.v];
  if (coda.length && (coda[0] === 'y' || coda[0] === 'w')) { nucleus = GLIDE[s.v + '+' + coda[0]]; coda = coda.slice(1); }
  if (/g$/.test(onset) && (nucleus === 'ee' || nucleus === 'eh' || nucleus === 'eew')) onset += 'h';
  return onset + nucleus + coda.join('') + (catchHere ? 'q' : '');
}
function lookup0(w) {
  if (LEX[w]) return { e: LEX[w], rootStart: 0 };
  for (const p of PREFIXES) {
    if (w.length > p.length + 2 && w.startsWith(p)) {
      const rest = w.slice(p.length).replace(/^-/, '');
      if (LEX[rest]) return { e: LEX[rest], rootStart: (p.match(/[aeiou]/g) || []).length };
    }
  }
  return null;
}
/* the linker -ng, and the short forms -y (= ay / ang / ug) and -g (= og), join a word that ends in a vowel (maayong, unsay, dakog):
   same syllables and stress as the word itself, and the final catch is lost (walâ -> waláy, as Wiktionary lists it) */
function lookup(w) {
  const r = lookup0(w); if (r) return r;
  const m = w.match(/^(.*[aeiou])(ng|y|g)$/);
  if (m) { const b = lookup0(m[1]); if (b) return { e: Object.assign({}, b.e, { catchEnd: false, finalStress: b.e.finalStress }), rootStart: b.rootStart }; }
  return null;
}
function word(w0) {
  const w = w0.toLowerCase().replace(/[’']/g, '');
  if (!w) return '';
  if (EXC[w]) return EXC[w];
  /* reduplication and compounds: a hyphen not followed by a vowel and not after a prefix -> separate words */
  const parts = w.split('-');
  if (parts.length > 1) {
    const joined = [];
    parts.forEach((p, i) => {
      if (i > 0 && (isV(p[0]) || PREFIXES.includes(parts[i - 1]) && joined.length && joined[joined.length - 1] === parts[i - 1])) joined[joined.length - 1] += '-' + p;
      else joined.push(p);
    });
    if (joined.length > 1) return joined.map(word).join(' ');
  }
  const syl = syllables(w);
  const n = syl.length;
  const L = lookup(w.replace(/-/g, '') === w ? w : w) || lookup(w.replace(/-/g, ''));
  let si = n >= 2 ? n - 2 : 0, catchEnd = false;
  if (L) {
    const e = L.e;
    if (e.finalStress) si = n - 1;
    else if (e.stressAt >= 0) si = L.rootStart + e.stressAt;
    else si = n >= 2 ? n - 2 : 0;
    catchEnd = e.catchEnd;
    if (si >= n) si = n - 1;
  } else if (n >= 2) warn(w, 'stress / final catch');
  const out = syl.map((s, k) => text(s, catchEnd && k === n - 1));
  if (n === 1) return out[0];
  return out.map((t, k) => k === si ? t.toUpperCase() : t).join('-');
}
function respell(text) {
  return String(text).replace(/[?!.,;:"“”«»()…–—\/]/g, ' ').trim().split(/\s+/).filter(Boolean).map(x => word(x)).filter(Boolean).join(' ');
}
module.exports = { respell, syllables, LEX, EXC };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));
