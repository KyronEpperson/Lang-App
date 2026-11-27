/* Lang App · two halves: Taiwanese Hokkien (nan), Taigi (docs/briefs/x-nan-design.md). Source course: en-nan, tools/target/nan/ (tools/target/gen.js nan).
   Script mode like yue and ja. The taught text is Han (MOE recommended characters, card front) with Tâi-lô as the reading (`rom`); Tâi-lô is also taught
   on its own in answer slots (quiz options, typed and built answers, tile readings), exactly as Jyutping is for yue.
   Protected runs: Han, the zh blocks PLUS the supplementary planes (en-nan writes 𠢕 and 𪜶, which lib.js HAN_RX does not cover).
   isValue: Han with no Latin letters, or a whole Tâi-lô string (isTailo below).
   Self-contained on purpose: lib.js requires this file while it is still loading, so nothing here may require lib.js.
   Open (design note §5): a learner whose own language is written in Han (zh, yue, ja) cannot be told apart from Taigi by Han runs. */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

const HAN = '\\u3400-\\u4dbf\\u4e00-\\u9fff\\uf900-\\ufaff\\u{20000}-\\u{2ffff}';
const HAN_RX = new RegExp('[' + HAN + ']+', 'gu');
const HAN_ONE = new RegExp('[' + HAN + ']', 'u');
const hasHan = s => HAN_ONE.test(String(s || ''));
const LATIN = /[A-Za-zÀ-ɏḀ-ỿ]/;

/* Tâi-lô: (1) the whole string passes the en-nan profile's pronPattern (syllables with tone diacritics, hyphens, -- for the neutral tone, optional
   punctuation); (2) every syllable, tone marks removed, is a Tâi-lô syllable by shape: an initial (or POJ ch / chh, which the course teaches and accepts)
   and a final made of vowels a e i o u, optional nasal nn, optional coda m n ng p t k h; or a syllabic m / ng. "spin", "fin", "law", "Two" fail here;
   (3) a string with no tone mark that is one of EN_HOMOGRAPHS is English, not Taigi. That list holds only words the en-nan data uses as English
   answer options next to Tâi-lô-shaped words (see the design note). A bare final or initial (tile fronts "-m", "ann") needs no test: tile fronts are
   target by position. */
let PR = null;
function pronRx() { if (!PR) PR = new RegExp(JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'target', 'nan', 'profile.json'), 'utf8')).pronPattern); return PR; }
const SYL = /^(?:tsh|ts|chh|ch|ph|th|kh|ng|p|b|m|t|n|l|k|g|h|s|j)?(?:[aeiou]{1,3}(?:nn)?(?:ng|m|n|p|t|k|h)?|(?:m|ng)h?)$/;
const TONE = /[\u0300\u0301\u0302\u0304\u030d]/;
const EN_HOMOGRAPHS = new Set(['pin', 'bin', 'too', 'not']); /* initials.02 (the p of spin / pin / bin / fin), describing.k3 (more / most / too / not) */
function isTailo(s) {
  s = String(s == null ? '' : s).trim(); if (!s || !pronRx().test(s)) return false;
  const d = s.normalize('NFD'), bare = d.replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const syl = bare.replace(/[,.?!:;]/g, '').split(/ |--|-/).filter(Boolean);
  if (!syl.length || !syl.every(x => SYL.test(x))) return false;
  if (!TONE.test(d) && EN_HOMOGRAPHS.has(bare.replace(/[,.?!:;]/g, ''))) return false;
  return true;
}
/* fill prompts (export_target.js, optional hook): en-nan writes some as an English frame around the Han ("Tâi-lô for 厝: __", "火車 (train), as spelled:
   __-tshia"). Such a prompt is learner-language text, so it goes to the native half. Returns null for a prompt that is target text alone (Han, Tâi-lô,
   the blank), else the list of its blank tokens that carry Tâi-lô ("__-tshia", "Tsia̍h-pá--__."), which every native half must keep exactly (validate.js). */
function fillSplit(q) {
  const toks = String(q == null ? '' : q).split(/\s+/).filter(Boolean);
  const words = toks.filter(x => !/__/.test(x)).join(' ').replace(new RegExp('[' + HAN + ']', 'gu'), ' ').match(/[A-Za-zÀ-ɏḀ-ỿ\u0300-\u036f'-]+/g) || [];
  if (!words.some(w => !isTailo(w.replace(/^-+|-+$/g, '')))) return null;
  return toks.filter(x => /__/.test(x) && LATIN.test(x));
}
const isTaigiValue = s => { s = String(s == null ? '' : s); return (hasHan(s) && !LATIN.test(s)) || isTailo(s); };

module.exports = {
  code: 'nan', field: 'nan', name: 'Taiwanese', script: 'Han', by: 'script',
  runs: s => (String(s || '').match(HAN_RX) || []).slice().sort(),
  has: hasHan, isValue: isTaigiValue,
  leadRx: new RegExp('^([^A-Za-z]*[' + HAN + '][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$', 'u'),
  fillSplit, isTailo, EN_HOMOGRAPHS
};
