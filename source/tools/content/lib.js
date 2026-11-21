/* Shared helpers for the per-language course pipeline (gen.js, validate.js, parity.js, new_lang.js, e2e_en.js).
   Everything language-specific lives in tools/content/<lang>/ (sources, meta.js, profile.json, deviations.json). */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.env.LANGAPP_ROOT || require('path').join(__dirname, '..', '..');
const DIR = __dirname;
const LANG_RE = /^[a-z]{2,3}(-[A-Za-z0-9]{2,8})?$/;

/* Shared English side of every <lang>-en course. */
const ORDER = ['alphabet', 'pron', 'be', 'it-there', 'articles', 'plurals', 'present', 'questions', 'third-s', 'prep', 'countable', 'object-have', 'can-like', 'polite', 'continuous', 'past', 'irregular-past', 'the', 'adjectives', 'going-to', 'tense', 'joining', 'numbers', 'smalltalk',
  'past-continuous', 'will', 'perfect', 'modals', 'to-ing', 'articles-2', 'first-conditional', 'relative', 'phrasal',
  'perfect-2', 'narrative', 'conditionals', 'passive', 'reported', 'email', 'idioms'];
const TITLE_LEVELS = [[1, 'Beginner'], [3, 'Student'], [5, 'Talker'], [8, 'Traveler'], [12, 'Local'], [16, 'Pro'], [20, 'Master']];
const PAUSE_EN = { compliment: 'Compliment', expression: 'Everyday', polite: 'Polite', saying: 'Saying' };
const GOAL_KEYS = ['travel', 'work', 'social', 'media'];
const FEATURES = ['script', 'pron', 'conj', 'register', 'numbers', 'sound', 'strokes'];
const SOURCE_FILES = ['decks.js', 'extra.js', 'lessons.js', 'practice.js', 'meta.js', 'more/a1.js', 'more/a2.js', 'more/b1.js'];

function checkLang(lang) {
  if (!LANG_RE.test(lang || '')) throw new Error('bad language code: ' + JSON.stringify(lang));
  return lang;
}
const langDir = lang => path.join(DIR, checkLang(lang));
const packPath = lang => path.join(ROOT, 'packs', 'course-' + checkLang(lang) + '-en.js');
const courseId = lang => checkLang(lang) + '-en';

/* profile.json: spec fields (PILOT-SPEC §2) + optional extras. Validated here so every tool sees the same shape. */
function loadProfile(lang) {
  const f = path.join(langDir(lang), 'profile.json');
  if (!fs.existsSync(f)) throw new Error('missing ' + f + ' (scaffold with: node tools/content/new_lang.js ' + lang + ')');
  const p = JSON.parse(fs.readFileSync(f, 'utf8'));
  const bad = m => { throw new Error(f + ': ' + m); };
  if (p.native !== lang) bad('"native" must be "' + lang + '"');
  if (!p.name || p.name.en !== 'English' || typeof p.name[lang] !== 'string' || !p.name[lang].trim()) bad('"name" must be {"en": "English", "' + lang + '": "<English in ' + lang + '>"}');
  if (typeof p.ttsLang !== 'string' || !p.ttsLang) bad('"ttsLang" required (e.g. "en-US")');
  if (p.nativeScript !== null && typeof p.nativeScript !== 'string') bad('"nativeScript" must be a regex source string or null');
  if (p.nativeScript) new RegExp(p.nativeScript, 'u');
  if (!['required', 'optional', 'none'].includes(p.pron)) bad('"pron" must be required | optional | none');
  if (!p.standingRule || typeof p.standingRule.kind !== 'string') bad('"standingRule.kind" required ("article-plural" | "none" | ...)');
  if (p.standingRule.kind !== 'none' && !p.standingRule.keywords) bad('"standingRule.keywords" (regex source) required for kind ' + p.standingRule.kind);
  if (p.standingRule.keywords) new RegExp(p.standingRule.keywords, p.standingRule.flags || '');
  if (p.pronPattern) new RegExp(p.pronPattern, 'u');
  if (p.reference != null && !/^[a-z]{2}$/.test(p.reference)) bad('"reference" must be a 2-letter language code (the course whose English side this one is checked against; default ko)');
  if (p.pronScript != null) { if (typeof p.pronScript !== 'string') bad('"pronScript" must be a regex source string'); new RegExp(p.pronScript, 'u'); } /* optional: what a pron must contain when it is not written in the native script (zh: IPA) */
  p.labels = p.labels || {};
  if (p.labels.cueTest) new RegExp(p.labels.cueTest);
  p.nativeNameEn = p.nativeNameEn || lang;
  return p;
}

function loadDeviations(lang) {
  const f = path.join(langDir(lang), 'deviations.json');
  const d = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {};
  const out = { lessons: d.lessons || {}, items: d.items || {}, decks: d.decks || {}, extraLessons: d.extraLessons || [], droppedLessons: d.droppedLessons || [], file: f };
  for (const k of ['lessons', 'items', 'decks']) for (const [id, why] of Object.entries(out[k])) if (typeof why !== 'string' || !why.trim()) throw new Error(f + ': ' + k + '["' + id + '"] needs a non-empty reason');
  return out;
}

/* Native-text test used by the validators.
   With a script regex: the string must contain native script.
   Without one (same script as English): non-empty and different from the English counterpart (when one is given). */
function nativeTester(profile) {
  const re = profile.nativeScript ? new RegExp(profile.nativeScript, 'u') : null;
  const norm = s => String(s).toLowerCase().replace(/[’]/g, "'").replace(/[\s.!?,…。~"“”]+/g, ' ').trim();
  const has = s => !!re && typeof s === 'string' && re.test(s);
  const native = (s, english) => {
    if (typeof s !== 'string' || !s.trim()) return false;
    if (re) return re.test(s);
    return english === undefined || english === null ? true : norm(s) !== norm(english);
  };
  return { re, has, native, script: !!re };
}

/* Load a generated course pack in a sandbox; returns { C, ctx, src }. */
function loadPack(file, lang) {
  const src = fs.readFileSync(file, 'utf8');
  const ctx = { LANGAPP_PACKS: { course: {}, i18n: {} } };
  vm.createContext(ctx);
  vm.runInContext('(function(){' + src + '\n})();', ctx, { filename: file });
  return { C: ctx.LANGAPP_PACKS.course[courseId(lang)], ctx, src };
}

/* Course order for a language: shared ORDER, with optional profile.lessonOrder.after = {"<extra id>": "<id it follows>"}. */
function orderFor(profile) {
  const order = ORDER.slice();
  const after = (profile.lessonOrder && profile.lessonOrder.after) || {};
  for (const [id, prev] of Object.entries(after)) {
    if (order.includes(id)) throw new Error('lessonOrder.after: ' + id + ' already in the shared order');
    const i = order.indexOf(prev);
    if (i < 0) throw new Error('lessonOrder.after: unknown lesson ' + prev);
    order.splice(i + 1, 0, id);
  }
  return order;
}

/* "--lang xx" style helpers: first positional arg is the language, unless it looks like a pack path (back-compat). */
function langFromArgs(argv, dflt) {
  const a = argv[0];
  if (a && /\.js$/.test(a)) { const m = path.basename(a).match(/^course-(.+)-en\.js$/); return { lang: m ? m[1] : dflt, rest: argv }; }
  return { lang: a || dflt, rest: argv.slice(1) };
}

module.exports = { ROOT, DIR, ORDER, TITLE_LEVELS, PAUSE_EN, GOAL_KEYS, FEATURES, SOURCE_FILES, checkLang, langDir, packPath, courseId, loadProfile, loadDeviations, nativeTester, loadPack, orderFor, langFromArgs };
