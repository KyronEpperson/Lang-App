/* prototype of the en-chr answer matcher (profile §10.3): chrKey (exact) and chrSlip ("almost"); run: node match.js */
const SYL = /[Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ]/;
const PUN = /[\s\-‐‑–—.,?!:;"“”'’()«»…]/g;
function chrKey(x) {
  x = String(x).normalize('NFD');
  if (SYL.test(x)) return 'S:' + x.replace(/̣/g, '').normalize('NFC').replace(/[ꭰ-ꮿᏸ-ᏽ]/g, c => c.toUpperCase()).replace(PUN, '');
  return 'R:' + x.replace(/[̀-ͯ]/g, '').replace(/[0-9¹²³⁰-⁹ɂʔ]/g, '').toLowerCase()
    .replace(PUN, '').replace(/j/g, 'ts').replace(/qu|kw/g, 'gw').replace(/dl|tl/g, 'hl'); /* tl = dl = hl, written hl in the key */
}
function loose(k) { /* k is an R: key */
  return k.replace(/ch/g, 'ts').replace(/ts/g, 'J').replace(/k/g, 'g').replace(/t/g, 'd').replace(/([a-z])h(?=[^aeiouv]|$)/g, '$1'); /* an h before a consonant or at the end, except at the start of the word (hl = tl) */
}
function chrSlip(typed, ans) { const a = chrKey(typed), b = chrKey(ans); if (a === b || a[0] !== 'R' || b[0] !== 'R') return false; return loose(a) === loose(b); }
function judge(t, a) { return chrKey(t) === chrKey(a) ? 'right' : chrSlip(t, a) ? 'almost' : 'wrong'; }
const T = [
  ['ᎣᏏᏲ', 'ᎣᏏᏲ', 'right', 'exact'],
  ['ꭳꮟᏺ', 'ᎣᏏᏲ', 'right', 'lowercase syllabary folds to uppercase'],
  ['Ꭳ Ꮟ Ᏺ', 'ᎣᏏᏲ', 'right', 'spaces inside a word ignored'],
  ['ᎠᎨᏳᏣᏅᏯᎠᎪᏩᏘᎭ', 'ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ.', 'right', 'spaces between words and punctuation ignored'],
  ['Ꮵ̣ᎪᏩᏘᎭ', 'ᏥᎪᏩᏘᎭ', 'right', "Joyner's dot under a sign ignored"],
  ['ᎣᏏᏳ', 'ᎣᏏᏲ', 'wrong', 'one wrong sign'],
  ['ᏓᏆᏙᎠ', 'ᏕᏣᏙᎠ', 'wrong', 'other person (I vs you)'],
  ['osiyo', 'osiyo', 'right', 'exact romanisation'],
  ['Osiyo!', 'osiyo', 'right', 'case and punctuation'],
  ['o-si-yo', 'osiyo', 'right', 'hyphens inside a word'],
  ['o si yo', 'osiyo', 'right', 'spaces inside a word'],
  ['o²sị³yo', 'osiyo', 'right', "Joyner's tone digits and underdot typed"],
  ['o2si3yo', 'osiyo', 'right', 'ASCII tone digits'],
  ['jalagi', 'tsalagi', 'right', 'j = ts (Joyner / Feeling spelling)'],
  ['tsalagi', 'tsalagi', 'right', 'exact'],
  ['chalagi', 'tsalagi', 'almost', 'ch for ts'],
  ['dohitsu', 'tohitsu', 'almost', 'd for t (the d-row sign Ꮩ)'],
  ['tohiju', 'tohitsu', 'right', 'j for ts'],
  ['tohigwu', 'tohigwu', 'right', 'exact'],
  ['tohiquu', 'tohigwu', 'right', 'qu = gw: DAILP writes tohiquu (the Unicode name of Ꮚ is QUU)'],
  ['tohiqu', 'tohigwu', 'wrong', 'qu = gw, vowel u missing'],
  ['tohikwu', 'tohigwu', 'right', 'kw = gw'],
  ['kago', 'gago', 'almost', 'k for g'],
  ['gado', 'gado', 'right', 'exact'],
  ['gato', 'gado', 'almost', 't for d'],
  ['agowtiha', 'agowhtiha', 'almost', 'the unwritten h left out'],
  ['agowatiha', 'agowhtiha', 'wrong', 'letter-by-letter reading of Ꮹ (vowel a) is another word shape'],
  ['nvgi', 'nvhgi', 'almost', 'h left out'],
  ['nagi', 'nvhgi', 'wrong', 'a for the nasal v'],
  ['tla', 'tla', 'right', 'exact'],
  ['hla', 'tla', 'right', 'hl = tl (Joyner prints both)'],
  ['dla', 'tla', 'right', 'dl = tl'],
  ['gitli', 'gihli', 'right', 'tl = hl'],
  ['galgwogi', 'gahlgwogi', 'almost', 'unwritten h before l left out'],
  ['la', 'tla', 'wrong', 'la is the sign Ꮃ, not Ꮭ'],
  ['vv', 'vv', 'right', 'exact'],
  ['uhuh', 'vv', 'wrong', 'v must be typed as v'],
  ['wado', 'wado', 'right', 'exact'],
  ['wato', 'wado', 'almost', 't for d'],
  ['wada', 'wado', 'wrong', 'wrong vowel'],
  ['sgohi', 'sgohi', 'right', 'exact'],
  ['skohi', 'sgohi', 'almost', 'k for g'],
  ['sgoi', 'sgohi', 'wrong', 'h before a vowel is a real syllable (Ꭿ hi): not almost'],
  ['tsigowhtiha', 'tsigowhtiha', 'right', 'exact'],
  ['higowhtiha', 'tsigowhtiha', 'wrong', 'other person prefix: wrong'],
  ['ᏣᎳᎩ', 'tsalagi', 'wrong', 'syllabary against a romanised answer: needs the pron in the answer list (pronAnswers)'],
];
let bad = 0; T.forEach(([t, a, want, why]) => { const got = judge(t, a); if (got !== want) bad++; console.log((got === want ? 'ok  ' : 'BAD ') + '| `' + t + '` | `' + a + '` | ' + got + ' | ' + why + ' |'); });
console.log(bad ? bad + ' failed' : T.length + ' of ' + T.length + ' as expected'); process.exit(bad ? 1 : 0);
