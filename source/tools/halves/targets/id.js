/* Lang App · two halves: Indonesian (id), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-id, tools/target/id/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'id', field: 'ind', name: 'Indonesian',
  letters: 'a b c d e f g h i j k l m n ng ny o p q r s sy kh t u v w x y z'.split(' '),
  pronParts: [],
  diacritic: /[éÉ]/,
  homographs: [],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* target: all options Indonesian (tasmu / suaminya forms) */
    'possession.04': 'target', 'family.05': 'target',
    /* prose: English options (I'm American., a T-junction), English glosses in (mango), or an English-pattern distractor (Budi's rumah) */
    'possession.k1': 'prose', 'sounds.05': 'prose', 'intro.05': 'prose', 'no-be.05': 'prose', 'directions.04': 'prose'
  },
  respell: path.join(ROOT, 'tools', 'target', 'id', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'id', 'profile.json')
});
