const P = require('/home/claude/tools/target/chr/profile.json'); const re = new RegExp(P.standingRule.keywords, P.standingRule.flags);
const yes = ['Ꮵ- is the Set A prefix for I: ᏥᎪᏩᏘᎭ.', 'The prefix ᎠᏂ- makes it they: ᎠᏂᎪᏩᏘᎭ.', 'Set B verbs take Ꭴ- for he: ᎤᏚᎵᎭ.', 'People take the plural prefix ᎠᏂ-: ᎠᏂᎨᏯ.',
 'Things take the prefix Ꮧ-: ᏗᎪᏪᎵ.', 'A dog is alive: ᎠᎩᎧᎭ.', 'A rock is solid: ᎠᎩᎭ.', 'ᎢᏯᏂ counts animate things.', 'ᎢᎦ counts inanimate things.',
 'One sign is one syllable: Ꭳ Ꮟ Ᏺ.', 'Read it sign by sign, then say the word.', 'Ꮝ is the one sign with no vowel.', 'Each sign is one syllable: ᏣᎳᎩ has three.',
 'With Ꮭ the verb takes the prefix Ᏹ-: ᏱᎩ.', 'Prefixes show who: Ꮵ- I, Ꭿ- you.', 'ᎤᏚᎵᎭ is Set B: Ꭴ- for he.'];
const no = ['ᏩᏙ means thanks.', 'Use ᏙᎯᏧ? to ask how someone is.', 'The question ending -ᏍᎪ goes on the word.', 'Nouns come before the verb.', 'ᎤᏁᎦ is white.',
 'ᏛᎬᎪᎯ is said when you leave.', 'v is the nasal vowel.', 'Say the h: nvhgi.', 'ᎨᏒᎩ is was, when you saw it yourself.', 'Twenty is ᏔᎵᏍᎪᎯ.',
 'The signs look like Latin letters but are not.', 'Cherokee has no word for please here.', 'Prefixing is not used for questions.', 'This is the setting.', 'Animated films are fun.', 'Ꮭ means no.'];
let bad = 0; yes.forEach(s => { if (!re.test(s)) { bad++; console.log('MISS ' + s); } }); no.forEach(s => { if (re.test(s)) { bad++; console.log('FALSE ' + s); } });
console.log((32 - bad) + ' of 32 as expected');
