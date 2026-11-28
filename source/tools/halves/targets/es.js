/* Lang App · two halves: Spanish (es), the fifth target half and the first whose "is this target text?" test is the course's own inventory
   (targets/_inventory.js; docs/briefs/x-es-design.md). Source course: en-es, tools/target/es/ (tools/target/gen.js es).
   Everything Spanish-specific lives here: the letters and letter groups taught as material, the bare pieces of the pronunciation line, the Spanish
   diacritics, and the English homographs (words of the en-es inventory that are also everyday English, names or borrowed food words, so an English
   note's "no", "come", "hotel" or "tacos" is neither protected as the row's own Spanish nor reported as unmarked Spanish). */
'use strict';
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');

module.exports = require('./_inventory.js').inventoryTarget({
  code: 'es', field: 'es', name: 'Spanish', tagged: true, /* target text inside prose is written ‹…› in the source: docs/briefs/target-text-tags.md */
  /* letters and letter groups that lessons, tiles and quizzes treat as Spanish material ("Which letter is always silent?" h / j / ll / ñ) */
  letters: ('a á b c ch d e é f g h i í j k l ll m n ñ o ó p q r rr s t u ú ü v w x y z ' +
    'gu gü gue gui güe güi qu que qui ce ci ge gi ca co cu ga go').split(' '),
  /* bare pieces of the en-es pronunciation line (tile readings, quiz options) that cannot be told from English by pronPattern alone */
  pronParts: 'ah eh ee oh oo ay oy ow aw ks gw gh ny rr heh hee seh see ghee'.split(' '),
  diacritic: /[ñáéíóúü]/i,
  homographs: (
    /* everyday English words that are also Spanish words of the course */
    'a i e o u y he me no son sea once come dice sale pie van chin hay tan con fin mar pan sin solo lo mayo media gusto pronto mesa dos don ' +
    'final normal terrible animal hotel hospital doctor color idea taxi taxis favor bravo humor error metro ' +
    /* interjections */
    'ah oh eh bah ay uf ups uy ' +
    /* food words English glosses keep as they are */
    'pizza taco tacos tamales tortillas quesadilla quesadillas mole pesos ' +
    /* names of people and places (any language keeps them) */
    'alejandro ana antonio carlos diego guadalajara isabel jamaica javier lupita mariana mateo max miami monterrey oaxaca puebla ruiz san santiago texas valeria wilson yanelis chicago'
  ).split(' '),
  /* names and loan words that an English sentence keeps as they are ("My name is Sofía.", "at a taquería"): in prose they are neither reported as
     untagged Spanish nor taken as the row's own Spanish. Unlike the homographs they play no part in classifying quiz options. Quoted as Spanish in
     a note, the same word is tagged like any other. */
  proseOk: 'lucía sofía cancún bogotá café taquería'.split(' '),
  /* names of more than one word that hold a course word ("Los Angeles"): never target text in prose */
  names: ['Los Angeles', 'Puerto Rico', 'Santo Domingo'],
  respell: path.join(ROOT, 'tools', 'target', 'es', 'respell.js'),
  profile: path.join(ROOT, 'tools', 'target', 'es', 'profile.json')
});
