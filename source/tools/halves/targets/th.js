/* Lang App · two halves: Thai (th), a script-mode target half like zh and yue (docs/briefs/x-th-design.md). Source course: en-th, tools/target/th/
   (tools/target/gen.js th). Protected runs are runs of Thai script (U+0E00–U+0E7F: consonants, vowel signs, tone marks, digits). The reading aid is
   en-th's own romanization (tools/target/th/respell.js, checked by the profile's pronPattern): lowercase syllables, tone marks on the vowel
   (à low, â falling, á high, ǎ rising, no mark for mid), hyphens inside a word, single spaces between words.
   A whole string counts as a target value when it is Thai script with no Latin letters, or when it is a whole romanised reading:
     - it passes pronPattern exactly (so "mid", "low", "with a b", "Rising" are prose), and it is not one of the English words that the pattern also
       accepts (HOMOGRAPHS: the mid tone has no mark, so unmarked English like "noon" is a well-formed romanization too);
     - or it is a bare romanization initial ("t", "th", "bp", "khr"), as a quiz option or tile reading: language-neutral material, as pinyin and
       Jyutping initials are for zh and yue. */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

const TH_RX = /[\u0E00-\u0E7F]+/g;
const hasThai = s => /[\u0E00-\u0E7F]/.test(String(s || ''));
const LATIN = /[A-Za-zÀ-ɏ]/;
/* initials of the en-th romanization (the first group of pronPattern) */
const TH_INITIAL = /^(khr|dtr|bpr|phr|khl|bpl|phl|khw|gr|br|dr|fr|gl|bl|fl|gw|kh|ch|th|ph|ng|bp|dt|g|j|s|y|d|n|b|f|m|r|l|w|h|k|t|p)$/;
/* English words that pronPattern also accepts (the mid tone carries no mark) and that en-th uses as a whole prose option: "noon" (time.02,
   "What time is หนึ่งทุ่ม?"). Lowercase, whole string only. Words like "man", "no", "see" are left out on purpose: they are also syllables of
   en-th readings, so listing them could push a real reading out of the target half. When a new English option passes the
   pattern, the export puts it in target/th and the selftest case "th: no English in target/th" fails: add the word here. */
const HOMOGRAPHS = new Set(['noon']);
let PRON = null;
function pronRx() { if (!PRON) PRON = new RegExp(JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'target', 'th', 'profile.json'), 'utf8')).pronPattern); return PRON; }
/* a whole string of en-th romanization (see above) */
function isThaiRoman(s) { s = String(s == null ? '' : s).trim(); if (!s) return false; if (TH_INITIAL.test(s)) return true; return pronRx().test(s) && !HOMOGRAPHS.has(s); }
const isThaiValue = s => { s = String(s == null ? '' : s); return (hasThai(s) && !LATIN.test(s)) || isThaiRoman(s); };

module.exports = {
  code: 'th', field: 'th', name: 'Thai', script: 'Thai', by: 'script',
  runs: s => (String(s || '').match(TH_RX) || []).slice().sort(), has: hasThai, isValue: isThaiValue,
  leadRx: /^([^A-Za-z]*[\u0E01-\u0E4E][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$/,
  /* exposed for the selftest and the design note */
  isThaiRoman, HOMOGRAPHS
};
