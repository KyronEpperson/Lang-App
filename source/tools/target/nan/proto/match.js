/* prototype of the nan matcher the profile asks for (§10.3): nanKey (exact) and nanSlip ("almost"). Not engine code; a spec with tests. */
const NAN_VAR = { '台': '臺', '裏': '裡', '個': '个', '册': '冊', '着': '著' };
const MK = { '́': 2, '̀': 3, '̂': 5, '̄': 7, '̍': 8, '̋': 9 };
const isHan = s => /[㐀-鿿豈-﫿]|[\ud840-\ud87f][\udc00-\udfff]/.test(s);
/* POJ spellings -> Tâi-lô (on lowercase, NFD text, marks still in place) */
function poj(s) {
  return s.replace(/o([\u0300-\u0357\u0359-\u036f]*)\u0358/g, 'o$1o').replace(/\u207f/g, 'nn').replace(/chh/g, 'tsh').replace(/ch/g, 'ts')
    .replace(/o([̀-ͯ]*)a/g, 'u$1a').replace(/o([̀-ͯ]*)e/g, 'u$1e') /* oa oe -> ua ue (mark travels with the vowel it was on) */
    .replace(/e([\u0300-\u036f]*)ng(?![a-z])/g, 'i$1ng').replace(/e([\u0300-\u036f]*)k(?![a-z])/g, 'i$1k');
}
/* one syllable -> {b: letters, t: tone number or 0 if none was given} */
function syl(x) {
  const m = x.match(/^([a-z̀-ͯ]+?)([1-9])?$/); if (!m) return null; let b = m[1], t = m[2] ? +m[2] : 0;
  const marks = [...b].filter(c => MK[c]); b = b.replace(/[̀-ͯ]/g, '');
  if (marks.length) t = MK[marks[0]];
  return { b, t };
}
const checked = b => /[ptkh]$/.test(b);
/* a Tâi-lô string -> array of syllables; '--' and '-' and spaces are only separators (hyphens optional) */
function sylls(s) { return poj(String(s).normalize('NFD').toLowerCase()).replace(/[.,!?;:'"]/g, ' ').split(/--|-|\s+/).filter(Boolean).map(syl); }
/* written answer: unmarked syllables are tone 1 (open) or 4 (checked) */
const full = a => a.map(x => ({ b: x.b, t: x.t || (checked(x.b) ? 4 : 1) }));
function nanKey(s) {
  if (isHan(s)) return [...String(s).normalize('NFC').replace(/[\s。，？！、：；.,?!]+/g, '')].map(c => NAN_VAR[c] || c).join('');
  const a = sylls(s); if (a.some(x => !x)) return '\u0000' + s; return full(a).map(x => x.b + x.t).join(' ');
}
const nanSame = (inp, ans) => nanKey(inp) === nanKey(ans);
/* "almost": letters right but NO tone information typed anywhere (no marks, no digits), and the answer has at least one marked tone */
function nanSlip(inp, ans) {
  if (isHan(inp) || isHan(ans)) return false; const a = sylls(inp), b = sylls(ans); if (a.some(x => !x) || b.some(x => !x) || a.length !== b.length) return false;
  if (a.some(x => x.t)) return false; /* the learner typed tones: a wrong one is wrong */
  return a.every((x, i) => x.b === b[i].b) && full(b).some(x => x.t !== 1 && x.t !== 4);
}
module.exports = { nanKey, nanSame, nanSlip };
if (require.main === module) {
  const T = [
    ['tsia̍h-pá--buē', 'Lí tsia̍h-pá--buē?', 'x', 'compare syllables only'],
  ];
  const cases = [
    // [typed, answer, expected: 'right' | 'almost' | 'wrong', what it shows]
    ['Lí tsia̍h-pá--buē?', 'Lí tsia̍h-pá--buē?', 'right', 'exact copy'],
    ['li2 tsiah8 pa2 bue7', 'Lí tsia̍h-pá--buē?', 'right', 'tone numbers, no hyphens, no --'],
    ['li2 tsiah8-pa2--bue7', 'Lí tsia̍h-pá--buē?', 'right', 'tone numbers with hyphens'],
    ['lí tsia̍h pá buē', 'Lí tsia̍h-pá--buē?', 'right', 'marks, hyphens left out'],
    ['li tsiah pa bue', 'Lí tsia̍h-pá--buē?', 'almost', 'no tones at all'],
    ['li2 tsiah8 pa2 bue3', 'Lí tsia̍h-pá--buē?', 'wrong', 'one wrong tone number'],
    ['lí tsia̍h pà buē', 'Lí tsia̍h-pá--buē?', 'wrong', 'one wrong mark'],
    ['lí tsiah pá buē', 'Lí tsia̍h-pá--buē?', 'wrong', 'tones typed, tone-8 mark missing on one syllable: read as tone 4, wrong'],
    ['li tsia pa bue', 'Lí tsia̍h-pá--buē?', 'wrong', 'final -h left out: a different syllable'],
    ['lang5', 'lâng', 'right', 'tone number for the circumflex'],
    ['lang', 'lâng', 'almost', 'toneless'],
    ['lang7', 'lâng', 'wrong', 'wrong tone'],
    ['sai', 'sai', 'right', 'tone 1 is unmarked: typed without a mark is exact'],
    ['sai1', 'sai', 'right', 'tone 1 typed as a number'],
    ['pih', 'pih', 'right', 'tone 4 is unmarked'],
    ['pih4', 'pih', 'right', 'tone 4 as a number'],
    ['pih8', 'pih', 'wrong', 'tone 8 for tone 4'],
    ['kau', 'kâu', 'almost', 'toneless monosyllable (could be tone 1 kau: still "almost")'],
    ['sai hoo pa pih', 'sai hóo pà pih', 'almost', 'toneless string whose answer has some marks'],
    ['sai hóo pa pih', 'sai hóo pà pih', 'wrong', 'tones typed on one syllable: pa read as tone 1, wrong'],
    ['tsi̍t', 'tsi̍t', 'right', 'exact'],
    ['tsit8', 'tsi̍t', 'right', 'tone 8 as a number'],
    ['chit8', 'tsi̍t', 'right', 'POJ ch for ts'],
    ['chi̍t', 'tsi̍t', 'right', 'POJ spelling with mark'],
    ['chhù', 'tshù', 'right', 'POJ chh for tsh'],
    ['hó͘', 'hóo', 'right', 'POJ o͘ for oo'],
    ['ho2', 'hóo', 'wrong', 'o for oo is another vowel (好 hó / 虎 hóo)'],
    ['saⁿ', 'sann', 'right', 'POJ ⁿ for nn'],
    ['sa', 'sann', 'wrong', 'nasal left out'],
    ['tsài-hoē', 'tsài-huē', 'right', 'POJ oe for ue'],
    ['chià\u207f-peng5', 'tsiànn-pîng', 'right', 'POJ ⁿ and eng with a tone number'],
    ['tek8-piat8', 'ti̍k-pia̍t', 'right', 'POJ ek with a tone number'],
    ['ke-nng7', 'ke-nn̄g', 'right', 'syllabic ng with a number'],
    ['ke nn̄g', 'ke-nn̄g', 'right', 'space for hyphen'],
    ['To-siā--lí', 'To-siā--lí!', 'right', 'neutral-tone -- kept'],
    ['to7-sia7-li2', 'To-siā--lí!', 'wrong', 'tone 7 typed on to (tone 1): wrong'],
    ['TO-SIĀ--LÍ', 'To-siā--lí!', 'right', 'capitals ignored'],
    ['khòng-kiú-pat-sam', 'Khòng-kiú-pat-sam, ngóo-ngóo-tshit-pat.', 'wrong', 'half an answer is wrong'],
    ['你食飽未', '你食飽未？', 'right', 'characters, punctuation left out'],
    ['我 是 學生', '我是學生。', 'right', 'spaces between characters ignored'],
    ['台北', '臺北', 'right', 'variant 台 = 臺'],
    ['一個人', '一个人', 'right', 'keyboard 個 = MOE 个'],
    ['厝裏', '厝裡', 'right', 'variant 裏 = 裡'],
    ['我不是學生', '我毋是學生', 'wrong', 'Mandarin 不 is never folded to 毋'],
    ['我在臺北', '我佇臺北', 'wrong', 'Mandarin 在 is never folded to 佇'],
    ['guá sī ha̍k-sing', '我是學生', 'wrong', 'Tâi-lô against a character answer: needs the generated pron in the answer list (pronAnswers), not the matcher'],
  ];
  let bad = 0; const rows = [];
  cases.forEach(([inp, ans, exp, why]) => { const got = nanSame(inp, ans) ? 'right' : nanSlip(inp, ans) ? 'almost' : 'wrong'; if (got !== exp) bad++; rows.push('| `' + inp + '` | `' + ans + '` | ' + got + (got !== exp ? ' (EXPECTED ' + exp + ')' : '') + ' | ' + why + ' |'); });
  if (process.argv[2] === 'md') { console.log('| Typed | Answer | Result | What it shows |\n|---|---|---|---|'); rows.forEach(r => console.log(r)); }
  console.log(bad ? bad + ' mismatches' : cases.length + ' of ' + cases.length + ' as expected');
}
