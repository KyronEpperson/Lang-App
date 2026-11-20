/* generates tools/target/chr/profile.json and scratch md fragments (lessons.md, decks.md) from data.js; every pron from respell.js */
const fs = require('fs'); const R = require('/home/claude/tools/target/chr/respell.js'); const D = require('./data.js');
const PAT = new RegExp(R.pattern(), 'u');
const pron = (t, o) => { const p = o === 'sign' ? R.signValue(t) : R.respell(t); R.warnings(); if (!PAT.test(p)) throw new Error('pattern fails: ' + p); return p; };
/* every sample card */
let md = '';
D.decks.forEach(([name, group, desc, ls], i) => {
  const cs = D.cards[name]; if (!cs || cs.length !== 5) throw new Error('need 5 cards: ' + name);
  md += '**' + (i + 1) + '. ' + name + '** (' + group + '). ' + desc + ' Lessons: ' + ls.split(', ').map(x => '`' + x + '`').join(', ') + '.\n\n| Cherokee | `pron` (generated) | Meaning | Note | Origin |\n|---|---|---|---|---|\n';
  cs.forEach(([t, m, n, o]) => { md += '| ' + t + ' | ' + pron(t, o) + ' | ' + m + ' | ' + n + ' | ' + o + ' |\n'; });
  md += '\n';
});
fs.writeFileSync(__dirname + '/decks.md', md);
/* lessons table */
let lm = '| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |\n|---|---|---|---|---|---|\n';
const SN = { 1: 'Stage 1: Sounds, the syllabary and first words', 2: 'Stage 2: Set phrases and first sentences', 3: 'Stage 3: Verbs as whole words: Set A and Set B', 4: 'Stage 4: Animals, is and was' };
let st = 0; D.lessons.forEach(([id, ti, rm, dk, s, c], i) => { if (s !== st) { st = s; lm += '| | | **' + SN[s] + '** | | | |\n'; } lm += '| ' + (i + 1) + ' | `' + id + '` | ' + ti + ' | ' + rm + ' | ' + c + ' | ' + dk + ' |\n'; });
fs.writeFileSync(__dirname + '/lessons.md', lm);
/* profile.json */
const KW = '\\bprefix(?:es)?\\b|\\bSet [AB]\\b|\\b(?:solid|alive|animate|inanimate)\\b|\\bone sign\\b|\\bsign by sign\\b|\\bone syllable\\b';
const P = { target: 'chr', nameEn: 'Cherokee', self: 'ᏣᎳᎩ', ttsLang: 'chr-US', brand: 'ᏣᎳᎩ', accents: true, keys: '',
  greet: [['ᏛᎬᎪᎯ', 'I will see you again'], ['ᎣᏏᏲ', 'Hello'], ['ᏙᎯᏧ?', 'How are you? (Things are well, right?)'], ['ᏏᏲ', 'Hello']],
  pron: 'required', pronPattern: R.pattern(), targetScript: '[\\u13A0-\\u13F5\\u13F8-\\u13FD\\uAB70-\\uABBF]',
  standingRule: { keywords: KW, flags: 'i', minOrder: 2, minType: 2 },
  lessons: D.lessons.map(([id, title, roadmap, deck]) => ({ id, title, roadmap, deck })),
  decks: D.decks.map(([name, group, desc]) => ({ name, group, desc })),
  titles: ['Beginner', 'Learner', 'Reader', 'Speaker', 'Neighbor', 'Storyteller', 'Master'],
  tilesDefault: true, pronAnswers: true, pronAnswersScript: '[\\u13A0-\\u13F5\\u13F8-\\u13FD\\uAB70-\\uABBF]', pronAnswersKeepSpaces: true, romaAlmost: true,
  voiceMatch: '^chr(-|_|$)', orderPronOK: false, pronAnswersWarn: true };
/* checks: every Cherokee string in the profile is a lexicon word / phrase, a Joyner sentence, or one sign */
const SYL = /[Ꭰ-Ᏽ]/; const json = JSON.stringify(P);
P.greet.forEach(g => pron(g[0])); P.lessons.forEach(l => (l.title.match(/[Ꭰ-Ᏽ][Ꭰ-Ᏽ ]*/g) || []).forEach(t => t.trim().split(' ').forEach(w => { try { R.respell(w); } catch (e) { if ([...w].length !== 1 && !['Ꮝ', 'ᏍᎪ', 'Ꮚ', 'Ꮷ'].includes(w)) throw e; } })));
new RegExp(P.targetScript, 'u'); new RegExp(P.pronPattern); new RegExp(KW, 'i');
fs.writeFileSync('/home/claude/tools/target/chr/profile.json', JSON.stringify(P, null, 1) + '\n');
console.log('lessons ' + P.lessons.length + ', decks ' + P.decks.length + ', sample cards ' + Object.values(D.cards).flat().length + '; profile.json written');
