/* Scaffolds tools/content/<lang>/ for a new <lang>-en course by copying the Korean-speaker sources as the starting reference.
   usage: node tools/content/new_lang.js <lang> [--out <dir>] [--force]
   Writes: the ko source set (decks.js, extra.js, lessons.js, practice.js, meta.js, more/{a1,a2,b1}.js) each headed with a
   "TRANSLATE/ADAPT" banner, a profile.json stub (fill every field; see docs/PIPELINE.md) and an empty deviations.json.
   The copies still contain Korean on purpose: every Korean string is a placeholder to be rewritten for <lang> speakers. */
const fs = require('fs');
const path = require('path');
const LIB = require('./lib.js');
const argv = process.argv.slice(2);
const flag = n => { const i = argv.indexOf(n); if (i < 0) return null; const v = argv[i + 1]; argv.splice(i, 2); return v; };
const force = argv.includes('--force'); if (force) argv.splice(argv.indexOf('--force'), 1);
const out = flag('--out');
const LANG = LIB.checkLang(argv[0] || '');
if (LANG === 'ko') { console.error('ko is the reference language; refusing to scaffold over it'); process.exit(2); }
const DEST = out ? path.resolve(out) : LIB.langDir(LANG);
if (fs.existsSync(DEST) && fs.readdirSync(DEST).length && !force) { console.error(DEST + ' exists and is not empty (use --force to overwrite)'); process.exit(2); }
const SRC = LIB.langDir('ko');
const banner = f => '/* TRANSLATE/ADAPT (' + LANG + '): scaffolded from tools/content/ko/' + f + ' by new_lang.js.\n' +
  '   Translate/adapt everything that is Korean for ' + LANG + ' speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,\n' +
  '   explanations written from the ' + LANG + ' point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position\n' +
  '   identical to ko-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */\n';
for (const f of LIB.SOURCE_FILES) {
  const from = path.join(SRC, f), to = path.join(DEST, f);
  if (!fs.existsSync(from)) continue;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.writeFileSync(to, banner(f) + fs.readFileSync(from, 'utf8'));
}
const ko = LIB.loadProfile('ko');
const profile = {
  native: LANG,
  nativeNameEn: 'TODO English name of the language (used in the pack header comment)',
  name: { en: 'English', [LANG]: 'TODO the word for "English" in ' + LANG },
  ttsLang: 'en-US',
  nativeScript: null,
  pron: 'optional',
  standingRule: { kind: 'none', keywords: '' },
  labels: { mcBlankCue: '', typeHintCue: '', cueTest: null },
  _help: {
    nativeScript: 'regex source matching the learner\'s script (ja e.g. "[\\\\u3040-\\\\u30ff\\\\u4e00-\\\\u9fff]"); null when it is the Latin script (es): validators then require native strings to be non-empty and differ from the English',
    pron: 'required | optional | none — policy for the card / {{ex:}} pron field (from docs/profiles/' + LANG + '.md)',
    standingRule: 'kind "article-plural" (keywords = regex the why must contain, ko: ' + JSON.stringify(ko.standingRule.keywords) + '), "verb-core" (es) or "none"; optional "flags": "i"; new kinds: validate.js STANDING_RULES',
    pronPattern: 'optional regex every non-empty pron must fully match (e.g. katakana only for ja)',
    labels: 'mcBlankCue / typeHintCue are appended by more/_dsl.js to mc questions / type hints that contain no native text (cueTest regex, else nativeScript; null = never). ko: ' + JSON.stringify(ko.labels),
    lessonOrder: 'optional {"after": {"<extra lesson id>": "<id it follows>"}} — also list the id in deviations.json extraLessons',
    _help: 'delete this _help block when done'
  }
};
fs.writeFileSync(path.join(DEST, 'profile.json'), JSON.stringify(profile, null, 2) + '\n');
fs.writeFileSync(path.join(DEST, 'deviations.json'), JSON.stringify({ lessons: {}, items: {}, decks: {}, extraLessons: [], droppedLessons: [] }, null, 2) + '\n');
console.log('scaffolded ' + DEST + ' (' + LIB.SOURCE_FILES.length + ' sources from ko + profile.json + deviations.json)');
console.log('next: fill profile.json, translate/adapt every Korean string, then: node tools/content/gen.js ' + LANG + ' && node tools/content/validate.js ' + LANG + ' && node tools/content/parity.js ' + LANG);
