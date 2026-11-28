/* Lang App · two halves: Italian (it), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-it, tools/target/it/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'it', tagged: true, /* docs/briefs/target-text-tags.md */ field: 'it', name: 'Italian',
  letters: ('a à b c d e è é f g h i ì l m n o ò p q r s t u ù v z ' +
    'ch gh ci ce gi ge gl gn sc sci sce qu cc gg zz').split(' '),
  pronParts: [],
  diacritic: /[àèéìíòóùú]/i,
  homographs: ['a', 'bar'],
  /* everyday English words, names and loan words that are also in the course word list: in prose they are English unless tagged. Every line was
     read by the Opus judges (2026-11-28, TL-2); this list only keeps the lint from reporting what they left bare. Not in homographs: that list
     also classifies quiz options. */
  proseOk: ["ah","all","anna","bruschetta","café","cafés","camera","cappuccino","ch","chiara","come","eh","elena","emma","euros","fine","focaccia","giulia","gnocchi","go","idea","in","jack","latte","luca","luisa","ma","male","marco","me","megan","no","oh","pasta","piano","pizza","prosciutto","serve","single","so","spaghetti","tennis","window","zero"],
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
