/* Lang App · two halves: German (de), "inventory" marks mode like es (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-de, tools/target/de/. */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'de', tagged: true, /* docs/briefs/target-text-tags.md */ field: 'de', name: 'German',
  letters: ('a ä b c d e f g h i j k l m n o ö p q r s t u ü v w x y z ß ' +
    'ch sch sp st ei ie eu äu au ck ng pf qu tsch tz').split(' '),
  pronParts: [],
  diacritic: /[äöüß]/i,
  homographs: ['anna'],
  /* everyday English words, names and loan words that are also in the course word list: in prose they are English unless tagged. Every line was
     read by the Opus judges (2026-11-28, TL-2); this list only keeps the lint from reporting what they left bare. Not in homographs: that list
     also classifies quiz options. */
  proseOk: ["ah","also","am","an","auf","baby","bad","bahn","bald","bank","becker","berlin","bring","bus","café","chef","date","die","ee","eh","emily","euro","euros","fahr","fall","falls","fast","frankfurt","frau","gift","hamburg","hand","handy","her","hey","hotel","hunger","in","kind","lena","links","lukas","mail","man","minute","moment","nah","name","oh","oo","party","paul","pizza","post","problem","restaurant","rufen","ryan","single","so","sport","stehen","student","tennis","ticket","uh","warm","warmer","was","will","zoo"],
  /* explicit item classes (_inventory.js cfg.items; docs/briefs/x-es-design.md "Item classes reviewed"): every check and mc item was read;
     these are the ones whose automatic class (from the key answer) was wrong */
  items: {
    /* prose: English prose in an option: Only du and er, sie, es / die becomes den / The skirt / all three equally */
    'stem-change.k1': 'prose', 'accusative.k2': 'prose', 'accusative.k3': 'prose', 'separable.05': 'prose'
  },
  respell: path.join(ROOT, 'tools', 'target', 'de', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'de', 'profile.json')
});
