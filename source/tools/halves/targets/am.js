/* Lang App · two halves: Amharic (am), a script-mode target half like zh, yue, th and ar (docs/briefs/x-am-design.md). Source course: en-am,
   tools/target/am/ (tools/target/gen.js am). Protected runs are runs of Ethiopic letters: the syllables U+1200–U+135A, the combining marks
   U+135D–U+135F and the Ethiopic digits U+1369–U+137C. en-am uses only U+1200–U+135A; the digits, the Ethiopic Supplement (U+1380–U+139F) and
   the Extended blocks (U+2D80–U+2DDF, U+AB00–U+AB2F) are unused, so the extended blocks stay outside the class until a course needs them.
   Ethiopic punctuation (፠ ፡ ። ፣ ፤ ፥ ፦ ፧ ፨, U+1360–U+1368) is NOT part of a run: it is free, like Latin punctuation and like Arabic ، ؛ ؟ in ar.
   en-am writes only ። (sentence end, glued to the last word: ነው።); ፡ ፣ ፤ ፧ occur only in respell.js. Tigrinya writes the same marks in its own
   sentences (open item). The price: a dropped ። at the end of a quoted sentence in a native note is not caught.
   The reading aid is en-am's own romanisation (tools/target/am/respell.js, checked by the profile's pronPattern): lowercase, é for the fifth order,
   a doubled letter for a long consonant, ' for an ejective (t' k' p' ch' ts') or a glottal catch (se'at), "c" only in ch, and no q or x. Each word
   may end in one of . , ? ! (the respelled ። ፣ ፧).
   A whole string counts as a target value when it is Ethiopic with no Latin letters, or when it passes pronPattern exactly and is not one of the
   English words the pattern also accepts (HOMOGRAPHS). The pattern refuses capitals, q, x and a bare c, so most prose fails it; but plain lowercase
   English ("house", "is this") passes. HOMOGRAPHS lists only what en-am actually uses as a whole prose option (see below). No bare-initial rule:
   en-am quizzes and tiles never offer a bare consonant as an option. */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

/* Ethiopic syllables and combining marks, Ethiopic digits; NOT the punctuation U+1360–U+1368 */
const ET_CLASS = '\\u1200-\\u135F\\u1369-\\u137C';
const ET_RX = new RegExp('[' + ET_CLASS + ']+', 'g');
const ET_ONE = new RegExp('[' + ET_CLASS + ']');
const hasEthiopic = s => ET_ONE.test(String(s || ''));
const LATIN = /[A-Za-zÀ-ɏḀ-ỿ]/;
/* English words that pronPattern also accepts and that en-am uses as a whole prose option (lowercase, whole string only). Filled from the data:
   when a new English option passes the pattern, the export puts it in target/am and the selftest case "am: no English in target/am" fails: add it. */
const HOMOGRAPHS = new Set([
  'g', 'b', /* reading.k2 "ኳ is the -wa form on…": English consonant letters as options */
  'only still', /* fidel-3.04 */ 'he said, or there is', 'only he said', 'only there is', /* reading.04 */
  'a man only', 'a woman only', 'a stranger only', /* greetings.k3 */
  'he said', 'there is', 'he went', 'a house', 'not', /* have.k3, have.05 */
  'one man', 'one woman', 'more than one person', /* commands.k3 */
  'noon', 'midnight', /* time.k2 */
  'four birr in that book', 'one hundred birr', 'what time it is', 'where the shop is', 'how much the bill is', /* prices.k2, prices.k3 */
  'tea', 'a dish of torn injera', 'the bill' /* restaurant.k3 */
]);
let PRON = null;
function pronRx() { if (!PRON) PRON = new RegExp(JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'target', 'am', 'profile.json'), 'utf8')).pronPattern); return PRON; }
/* a whole string of en-am romanisation (see above) */
function isAmharicRoman(s) { s = String(s == null ? '' : s).trim(); if (!s) return false; return pronRx().test(s) && !HOMOGRAPHS.has(s); }
const isAmharicValue = s => { s = String(s == null ? '' : s); return (hasEthiopic(s) && !LATIN.test(s)) || isAmharicRoman(s); };

module.exports = {
  code: 'am', field: 'am', name: 'Amharic', script: 'Ethiopic', by: 'script',
  runs: s => (String(s || '').match(ET_RX) || []).slice().sort(), has: hasEthiopic, isValue: isAmharicValue,
  leadRx: new RegExp('^([^A-Za-z]*[' + ET_CLASS + '][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$'),
  /* ids: en-am deck names hold fidel ("Fidel rows: ሀ to ቸ" / "Fidel rows: ኀ to ዠ"), which the exporter's ASCII slug would drop into one id.
     Each Ethiopic letter becomes its code point in hex before slugging: am.d.fidel-rows-1200-to-1278. Read only by export_target.js. */
  slugText: s => String(s).replace(new RegExp('[' + ET_CLASS + ']', 'g'), ch => ' ' + ch.codePointAt(0).toString(16) + ' '),
  /* exposed for the selftest and the design note */
  isAmharicRoman, HOMOGRAPHS
};
