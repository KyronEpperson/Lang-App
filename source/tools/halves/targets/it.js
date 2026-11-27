/* Lang App · two halves: Italian (it), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-it, tools/target/it/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'it', field: 'it', name: 'Italian',
  letters: ('a à b c d e è é f g h i ì l m n o ò p q r s t u ù v z ' +
    'ch gh ci ce gi ge gl gn sc sci sce qu cc gg zz').split(' '),
  pronParts: [],
  diacritic: /[àèéìíòóùú]/i,
  homographs: ['a', 'bar'],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* prose: English prose options that the homograph entries 's', 'it' used to hold on the prose side (removed: English contraction tail (It's)) */
    'ce.k3': 'prose',
    /* target: all options Italian (Scrivono., Guarda!, Luisa sa suonare il piano.) */
    'modals.k3': 'target', 'modals.04': 'target', 'present.04': 'target', 'imperative.02': 'target', 'sapere-conoscere.03': 'target'
  },
  respell: path.join(ROOT, 'tools', 'target', 'it', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'it', 'profile.json')
});
