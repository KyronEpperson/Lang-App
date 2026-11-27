/* Lang App · two halves: Japanese (ja), the sixth target half (docs/briefs/x-ja-design.md). Source course: en-ja, tools/target/ja/ (tools/target/gen.js ja).
   Script mode like zh and yue: the protected runs are Japanese script, i.e. kana plus kanji: hiragana (ぁ-ゖ, the voicing marks ゛゜ and the iteration
   marks ゝゞ), katakana (ァ-ヺ, the small ㇰ-ㇿ, the long-vowel mark ー and the iteration marks ヽヾ), Han (the same blocks as zh) and 々 〆.
   Japanese punctuation (、。・「」？！〜) is not part of a run: it is free, as ASCII punctuation is.
   The reading aid is modified Hepburn romaji with macrons (kyō, gakkō, hon'ya), whatever the en-ja profile's pronPattern accepts.
   Self-contained on purpose: lib.js requires this file while it is still loading, so nothing here may require lib.js.
   Open (design note §5): a learner whose own language is written in Han (zh, yue, nan) cannot be told apart from Japanese by Han runs; kana runs still can. */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

const JA = 'ぁ-ゖ゛-ゟァ-ヺー-ヿㇰ-ㇿ㐀-䶿一-鿿豈-﫿々〆';
const JA_RX = new RegExp('[' + JA + ']+', 'g');
const JA_ONE = new RegExp('[' + JA + ']');
const KANA_ONE = /[ぁ-ゖ゛-ゟァ-ヺー-ヿㇰ-ㇿ]/;
const hasJapanese = s => JA_ONE.test(String(s || ''));
const LATIN = /[A-Za-zÀ-ɏ]/;

/* romaji: a whole string the en-ja pronPattern accepts AND that carries a macron or an apostrophe-n, or is a bare kana reading (one kana's romaji:
   "ji", "zu", "kya") as tile readings and quiz options use them. Plain "kare", "sake", "no", "to" are also English (or English-looking), so a romaji
   string without those marks counts as target text only when it is one syllable of the kana table below. */
let PR = null;
function pronRx() { if (!PR) PR = new RegExp(JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'target', 'ja', 'profile.json'), 'utf8')).pronPattern); return PR; }
const KANA_SYL = new Set(('a i u e o ka ki ku ke ko sa shi su se so ta chi tsu te to na ni nu ne no ha hi fu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wo n ' +
  'ga gi gu ge go za ji zu ze zo da de do ba bi bu be bo pa pi pu pe po ' +
  'kya kyu kyo sha shu sho cha chu cho nya nyu nyo hya hyu hyo mya myu myo rya ryu ryo gya gyu gyo ja ju jo bya byu byo pya pyu pyo').split(' '));
const EN_WORDS = new Set('a i no to me he so do go be ma pa'.split(' ')); /* syllables that are also everyday English: never target on their own */
function isRomaji(s) {
  s = String(s == null ? '' : s).trim(); if (!s || !pronRx().test(s)) return false;
  if (/[āīūēō]|n'/.test(s)) return true;
  return KANA_SYL.has(s) && !EN_WORDS.has(s);
}
const isJapaneseValue = s => { s = String(s == null ? '' : s); return (hasJapanese(s) && !LATIN.test(s)) || isRomaji(s); };

module.exports = {
  code: 'ja', field: 'ja', name: 'Japanese', script: 'kana and kanji', by: 'script',
  runs: s => (String(s || '').match(JA_RX) || []).slice().sort(),
  has: hasJapanese, isValue: isJapaneseValue,
  leadRx: new RegExp('^([^A-Za-z]*[' + JA + '][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$'),
  /* for the open Han-native item (design note §5): the kana runs alone, which still tell Japanese from Chinese text */
  kanaRuns: s => (String(s || '').match(JA_RX) || []).filter(r => KANA_ONE.test(r)).sort(),
  isRomaji
};
