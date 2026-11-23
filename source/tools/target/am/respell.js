/* Amharic (fidel) -> learner romanisation, the en-am pron line (profile docs/profiles/en-am.md §6).
   Lexicon-first, like tools/target/nan/respell.js: every word is looked up in tools/target/am/lexicon.txt, where each entry names the
   source it was checked against (or says unverified:model). There is NO rule fallback: the fidel does not write gemination and does
   not show whether a sixth-order vowel is said, so a word that is not in the lexicon throws instead of getting a guessed reading.
   Key (lexicon header): orders e u i a é i/nothing o; ሀ ሐ ኀ አ ዐ first order a; sh ch j zh ny y w v; ejectives t' k' p' ch' s';
   a long consonant is a doubled letter (bunna, abbat; ssh cch nny tt' kk' cch'); glottal stop inside a word is ' after the vowel.
   Words are separated by one space. Punctuation is kept and attached to the word before it: ? . , ! (Ethiopic ። ፣ ፧ ፤ become . , ? ,; the word space ፡ is dropped).
   It throws on: a word not in the lexicon; a Latin letter or a digit; a blank (___); an empty text.
   One fidel string has one reading (homographs: the lexicon line is the reading the course uses; the other goes in English notes).
   CLI: node respell.js "<text>"  prints  <text> -> <pron>  */
'use strict';
const fs = require('fs'), path = require('path');

/* one word of the pron line: starts with a letter, apostrophes only after a letter */
const WORD = "[abcdefghijklmnoprstuvwyzé][abcdefghijklmnoprstuvwyzé']*";

const LEX = new Map();
fs.readFileSync(path.join(__dirname, 'lexicon.txt'), 'utf8').split('\n').forEach((line, i) => {
  if (!line.trim() || line.startsWith('#')) return;
  const f = line.split('\t');
  if (f.length !== 3 || !f[0] || !f[1] || !f[2]) throw new Error('lexicon.txt line ' + (i + 1) + ': expected fidel<TAB>romanisation<TAB>source');
  if (LEX.has(f[0])) throw new Error('lexicon.txt line ' + (i + 1) + ': duplicate entry ' + f[0]);
  if (!new RegExp('^' + WORD + '$').test(f[1])) throw new Error('lexicon.txt line ' + (i + 1) + ': romanisation «' + f[1] + '» uses letters outside the key');
  LEX.set(f[0], f[1]);
});

const PUNCT = { '።': '.', '፣': ',', '፧': '?', '፤': ';', '?': '?', '.': '.', ',': ',', '!': '!', ';': ';', '፡': '' };

function word(tok, text) {
  let core = tok, tail = '';
  while (core && PUNCT[core[core.length - 1]] !== undefined) { tail = PUNCT[core[core.length - 1]] + tail; core = core.slice(0, -1); }
  if (!core) throw new Error('«' + text + '»: punctuation with no word');
  if (/[A-Za-z0-9_]/.test(core)) throw new Error('«' + text + '»: «' + core + '» is not fidel (Latin letters, digits and blanks have no reading)');
  if (!LEX.has(core)) throw new Error('«' + text + '»: «' + core + '» is not in tools/target/am/lexicon.txt (add it with a source; there is no rule fallback)');
  return LEX.get(core) + tail.replace(/;/g, ',');
}

function respell(text) {
  const s = String(text == null ? '' : text).normalize('NFC').trim();
  if (!s) throw new Error('empty text');
  return s.split(/\s+/).map(t => word(t, s)).join(' ');
}

/* the pron alphabet: letters of the key only (no c except in ch, no q, no x), é for the fifth order, ' for an ejective or a glottal stop */
function pronPattern() {
  return "^(?!.*c(?!c?h))" + WORD + "[.,?!]?(?: " + WORD + "[.,?!]?)*$";
}

module.exports = { respell, pronPattern };

if (require.main === module) {
  const text = process.argv.slice(2).join(' ');
  try { console.log(text + ' -> ' + respell(text)); }
  catch (e) { console.error(e.message); process.exit(1); }
}
