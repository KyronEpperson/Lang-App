/* Lang App · two halves: Bisaya (ceb), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-ceb, tools/target/ceb/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'ceb', field: 'ceb', name: 'Bisaya',
  letters: 'a b c d e g h i k l m n ng o p r s t u w y'.split(' '),
  pronParts: [],
  diacritic: /[éÉ]/,
  homographs: [],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* prose: an English word in an option: letter by letter / u and o / In a mall / the writer, nobody / the English-pattern distractor Kini is libro. */
    'sounds.k3': 'prose', 'sounds.02': 'prose', 'this-that.k2': 'prose', 'prices.k3': 'prose', 'an.03': 'prose'
  },
  respell: path.join(ROOT, 'tools', 'target', 'ceb', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'ceb', 'profile.json')
});
