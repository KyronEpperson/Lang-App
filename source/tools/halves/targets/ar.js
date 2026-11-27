/* Lang App · two halves: Arabic (ar), a script-mode target half like zh, yue and th (docs/briefs/x-ar-design.md). Source course: en-ar, tools/target/ar/
   (tools/target/gen.js ar). Protected runs are runs of Arabic script: letters (all hamza forms ء آ أ ؤ إ ئ, ة, ى, ٱ), harakat and tanwin, shadda,
   sukun, dagger alif (U+0670), tatweel (U+0640, used in the letter-shape tiles: ـبـ) and the Arabic-Indic digits ٠–٩ (used in the numbers lessons).
   Arabic punctuation (، ؛ ؟ and ٪ ٫ ٬ ٭ ۔) is NOT part of a run: it is free, like Latin punctuation, because a native language written in Arabic
   script uses the same marks in its own sentences, and a note may quote a word right before its own comma. Spaces end a run, so runs are words.
   The reading aid is en-ar's own romanisation (tools/target/ar/respell.js, checked by the profile's pronPattern): lowercase, long vowels ā ī ū,
   dotted heavy consonants ḥ ṣ ḍ ṭ ẓ, ʿ (ʿayn) and ʾ (hamza), a hyphen only after the article or a one-letter prefix (al-, wa-, bi-, ash-shams),
   "·" between two letters that would read as a digraph (as·hal).
   A whole string counts as a target value when it is Arabic script with no Latin letters, or when it passes pronPattern exactly and is not one of
   the English words the pattern also accepts (HOMOGRAPHS). The pattern refuses capitals and the letters c e o p v x, and every word needs a vowel
   letter, so nearly all prose fails it; but plain English like "this", "is", "him" passes. HOMOGRAPHS lists only what en-ar actually uses as a
   whole prose option (see below). No bare-initial rule: en-ar quizzes and tiles never offer a bare consonant reading as an option. */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

/* Arabic block minus its signs and punctuation (U+0600–060F, 061B–061F, 066A–066D, 06D4), plus Arabic Supplement */
const AR_CLASS = '\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06FF\\u0750-\\u077F';
const AR_RX = new RegExp('[' + AR_CLASS + ']+', 'g');
const AR_ONE = new RegExp('[' + AR_CLASS + ']');
const hasArabic = s => AR_ONE.test(String(s || ''));
const LATIN = /[A-Za-zÀ-ɏḀ-ỿʿʾ]/;
/* English words that pronPattern also accepts and that en-ar uses as a whole prose option (lowercase, whole string only). Filled from the data:
   when a new English option passes the pattern, the export puts it in target/ar and the selftest case "ar: no English in target/ar" fails: add it. */
const HOMOGRAPHS = new Set(['always']); /* adverbs.03 "What does أَحْيَانًا mean?", wrong option beside "sometimes" */
let PRON = null;
function pronRx() { if (!PRON) PRON = new RegExp(JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'target', 'ar', 'profile.json'), 'utf8')).pronPattern); return PRON; }
/* a whole string of en-ar romanisation (see above) */
function isArabicRoman(s) { s = String(s == null ? '' : s).trim(); if (!s) return false; return pronRx().test(s) && !HOMOGRAPHS.has(s); }
const isArabicValue = s => { s = String(s == null ? '' : s); return (hasArabic(s) && !LATIN.test(s)) || isArabicRoman(s); };

module.exports = {
  code: 'ar', field: 'ar', name: 'Arabic', script: 'Arabic', by: 'script',
  runs: s => (String(s || '').match(AR_RX) || []).slice().sort(), has: hasArabic, isValue: isArabicValue,
  leadRx: new RegExp('^([^A-Za-z]*[' + AR_CLASS + '][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$'),
  /* exposed for the selftest and the design note */
  isArabicRoman, HOMOGRAPHS
};
