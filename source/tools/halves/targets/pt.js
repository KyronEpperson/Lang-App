/* Lang App · two halves: Portuguese (pt), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-pt, tools/target/pt/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'pt', field: 'pt', name: 'Portuguese',
  letters: ('a á â ã à b c ç d e é ê f g h i í j k l m n o ó ô õ p q r s t u ú v w x y z ' +
    'ch lh nh rr ss sc xc qu gu ão õe ãe').split(' '),
  pronParts: [],
  diacritic: /[áâãàéêíóôõúç]/i,
  homographs: [],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* prose: English prose options that the homograph entries 'w', 'y', 'ajuda' used to hold on the prose side (removed: letter-guess / a Portuguese word) */
    'sounds.03': 'prose', 'object-pronouns.k1': 'prose',
    /* target: all options Portuguese (A sopa está fria.) */
    'ser-estar.05': 'target',
    /* prose: the English-pattern distractor Do você fala português? */
    'questions.k1': 'prose', 'questions.02': 'prose'
  },
  respell: path.join(ROOT, 'tools', 'target', 'pt', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'pt', 'profile.json')
});
