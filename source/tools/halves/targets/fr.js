/* Lang App · two halves: French (fr), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-fr, tools/target/fr/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'fr', field: 'fr', name: 'French',
  letters: ('a à â b c ç d e é è ê ë f g h i î ï j k l m n o ô œ p q r s t u ù û ü v w x y z ' +
    'ch ou oi eau ai ei au eu gn qu ill an on in un en').split(' '),
  pronParts: [],
  diacritic: /[àâçéèêëîïôœùûüÿ]/i,
  homographs: ['a', 'boston'],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* prose: English prose options that the homograph entries 'z' used to hold on the prose side (removed: letter guess) */
    'sounds.04': 'prose',
    /* target: all options are French endings or stems (-ait, ser-) */
    'imparfait.k1': 'target', 'futur.k3': 'target',
    /* prose: English prose in an option: chaise and chaises / madame or monsieur / It stays du / I'm going to Boston. / Around vais: … */
    'articles.05': 'prose', 'polite.k2': 'prose', 'partitive.k3': 'prose', 'irregular.k3': 'prose', 'futur-proche.k2': 'prose'
  },
  respell: path.join(ROOT, 'tools', 'target', 'fr', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'fr', 'profile.json')
});
