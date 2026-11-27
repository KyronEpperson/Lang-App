/* Lang App · two halves: Hmong (hmn), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-hmn, tools/target/hmn/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'hmn', field: 'hmn', name: 'Hmong',
  letters: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' '),
  pronParts: [],
  diacritic: /[éÉ]/,
  homographs: [],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* prose: an English word in an option: nobody, (you) glosses / a fever / a celebration or ceremony */
    'serial-verbs.k2': 'prose', 'health.05': 'prose', 'family-events.01': 'prose'
  },
  respell: path.join(ROOT, 'tools', 'target', 'hmn', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'hmn', 'profile.json')
});
