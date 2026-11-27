/* Lang App · two halves: Tagalog (tl), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-tl, tools/target/tl/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'tl', field: 'tl', name: 'Tagalog',
  letters: 'a b c d e f g h i j k l m n ng o p q r s t u v w x y z'.split(' '),
  pronParts: [],
  diacritic: /[éÉ]/,
  homographs: ['i', 'a', 'tagalog'],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* prose: English prose options that the homograph entries 'm', 'nang' used to hold on the prose side (removed: English contraction tail (I'm) / a Tagalog word) */
    'intro.05': 'prose', 'sounds.k2': 'prose',
    /* prose: an English word in an option: none: / neither, both / the adobo, We can't tell */
    'linker.k1': 'prose', 'mag.k3': 'prose', 'in.03': 'prose'
  },
  respell: path.join(ROOT, 'tools', 'target', 'tl', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'tl', 'profile.json')
});
