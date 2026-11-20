/* fails if a Cherokee token in en-chr.md / profile.json is not a lexicon word or phrase, a listed suffix, a single sign, or a prefix a
   source names; and if an italic romanisation right after a Cherokee string (ᏩᏙ *wado*) differs from the generator's output */
const fs = require('fs'); const R = require('/home/claude/tools/target/chr/respell.js');
const files = ['/home/claude/docs/profiles/en-chr.md', '/home/claude/tools/target/chr/profile.json'];
/* prefixes named in Joyner's notes (Ꭴ- Set B he; ᎠᏂ- they-animate; Ꮧ- they-inanimate; Ꭰ- it-animate; Ᏹ- with Ꮭ; Ꮿ- and Ᏻ- its merges),
   plus Ꮵ- and Ꭿ-, the course's reading of Joyner's I / you forms (profile §11) */
const PREF = new Set(['Ꭴ', 'ᎠᏂ', 'Ꮧ', 'Ꭰ', 'Ᏹ', 'Ꮿ', 'Ᏻ', 'Ꮵ', 'Ꭿ']);
/* syllabary strings quoted from a source but deliberately not in the lexicon (no usable romanisation or rejected), with the reason */
const ALLOW = new Map([['ᏘᎪᎵᏯ', 'Joyner\'s heading "ᏘᎪᎵᏯ (Read them)", no pronunciation printed'], ['ᏌᎪᏂᎨ', 'in the Joyner line the table check rejected (§6.3)'],
  ['ᎬᎾ', 'cherokeedictionary.net home page sample, no romanisation'], ['ᏎᎷ', 'idem'], ['ᎦᏚ', 'idem'], ['ᎠᏑᏍᏗ', 'idem'], ['ᎧᏁᎢᏍᏗ', 'Cherokee Nation word-list page title, no romanisation'], ['ᏕᎦᏅᏛᎢ', 'idem'],
  ['ᎤᎾᏙᏓᏉᏅᎯ', 'CLDR day name, no romanisation'], ['ᏔᎵᏁᎢᎦ', 'idem'], ['ᏦᎢᏁᎢᎦ', 'idem'], ['ᏅᎩᏁᎢᎦ', 'idem'], ['ᏧᎾᎩᎶᏍᏗ', 'idem'], ['ᎤᎾᏙᏓᏈᏕᎾ', 'idem'], ['ᎤᎾᏙᏓᏆᏍᎬ', 'idem'],
  ['ᏙᎯᏋᏨ', 'DAILP, romanised dohiquvjv there, not used'], ['ᏗᏓᏲᎵᏍᏗ', 'DAILP heading, not used'], ['ᏔᎵᏍᎪ', 'Joyner L11 sentence, no printed reading (NOSUF)'], ['ᎠᎪᏘᎭ', 'as the fetch returned a Joyner L11 sentence; probably an error'], ['ᏗᎩᎦᎨ', 'Joyner L16 sentence, short form with no printed reading'], ['ᎤᏲ', 'idem'], ['ᎠᎨᏳᏣᏅᏯᎠᎪᏩᏘᎭ', 'matcher test input (a Joyner sentence typed without spaces)'], ['ᎣᏏᏳ', 'matcher test input (a wrong answer, built to test)']]);
/* the four endings, named after a hyphen (-Ꮝ), with their derived readings (§2.5) */
const SUFX = new Map([['Ꮝ', 's'], ['ᏍᎪ', 'sgo'], ['Ꮚ', 'gwu'], ['Ꮷ', 'tsu']]);
let bad = 0, toks = 0, pairs = 0;
const TOK = /[Ꭰ-Ᏽꭰ-ꮿᏸ-ᏽ̣]+(-?)/g;
const PAIR = /([Ꭰ-Ᏽ][Ꭰ-Ᏽ ]*[Ꭰ-Ᏽ]|[Ꭰ-Ᏽ])[?!.,]? \*([A-Za-z][A-Za-z ]*[a-z]|[a-z])[?!.,]?\*/g;
for (const f of files) { const s = fs.readFileSync(f, 'utf8'); const fn = f.split('/').pop();
  for (const m of s.matchAll(TOK)) { toks++; const w = R.fold(m[0].replace(/-$/, '')); const before = s[m.index - 1];
    if (m[1] && before !== '-') { if (!PREF.has(w)) { bad++; console.log(fn + ': prefix not named by a source: ' + m[0]); } continue; }
    if (before === '-' && SUFX.has(w)) continue;
    if ([...w].length === 1 || R.W.has(w) || ALLOW.has(w)) continue;
    try { R.respell(w); R.warnings(); } catch (e) { bad++; console.log(fn + ': not in lexicon: ' + m[0]); } }
  for (const m of s.matchAll(PAIR)) { const syl = m[1], rom = m[2].toLowerCase(); let gen;
    try { gen = s[m.index - 1] === '-' && SUFX.has(R.fold(syl)) ? SUFX.get(R.fold(syl)) : R.respell(syl); R.warnings(); } catch (e) { gen = [...syl].length === 1 ? R.signValue(syl) : null; }
    if (gen === null) { bad++; console.log(fn + ': cannot generate ' + syl); continue; }
    gen = gen.toLowerCase().replace(/[.,?!]/g, '');
    if (rom === gen) { pairs++; continue; }
    bad++; console.log(fn + ': romanisation «' + m[2] + '» after ' + syl + ' but the generator gives «' + gen + '»'); } }
console.log(toks + ' Cherokee tokens, ' + pairs + ' italic romanisations checked; ' + (bad ? bad + ' problem(s)' : 'all OK')); process.exit(bad ? 1 : 0);
