/* Lang App · two halves: German (de), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-de, tools/target/de/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'de', field: 'de', name: 'German',
  letters: ('a ä b c d e f g h i j k l m n o ö p q r s t u ü v w x y z ß ' +
    'ch sch sp st ei ie eu äu au ck ng pf qu tsch tz').split(' '),
  pronParts: [],
  diacritic: /[äöüß]/i,
  homographs: ['anna'],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* prose: English prose in an option: Only du and er, sie, es / die becomes den / The skirt / all three equally */
    'stem-change.k1': 'prose', 'accusative.k2': 'prose', 'accusative.k3': 'prose', 'separable.05': 'prose'
  },
  respell: path.join(ROOT, 'tools', 'target', 'de', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'de', 'profile.json')
});
