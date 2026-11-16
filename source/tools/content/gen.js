/* Generates packs/course-<lang>-en.js from tools/content/<lang>/ (decks.js, extra.js, lessons.js, practice.js, more/{a1,a2,b1}.js,
   meta.js, profile.json). usage: node tools/content/gen.js [<lang>=ko] [<out path>]
   Language-neutral here: lesson ORDER (lib.js), the practice DSL (more/_dsl.js), level titles / pause labels in English, pack assembly. */
const fs = require('fs');
const path = require('path');
const LIB = require('./lib.js');
const LANG = LIB.checkLang(process.argv[2] || 'ko');
const OUT = process.argv[3] || LIB.packPath(LANG);
const ID = LIB.courseId(LANG);
const SRC = LIB.langDir(LANG);
const PROFILE = LIB.loadProfile(LANG);
const META = require(path.join(SRC, 'meta.js'));
const decksSrc = require(path.join(SRC, 'decks.js'));
const X = require(path.join(SRC, 'extra.js'));
const L = require(path.join(SRC, 'lessons.js'));
const PRACTICE = { ...require(path.join(SRC, 'practice.js')) };

function rows(text, n, label) {
  return text.split('\n').map(s => s.trim()).filter(Boolean).map((line, i) => {
    /* empty fields: "a | | b | c" and a trailing "a | b | c |" are read as empty strings (pron "none"/"optional", empty note) */
    let l = line; while (l.includes(' | | ')) l = l.replace(' | | ', ' |  | '); if (/ \|$/.test(l)) l += ' ';
    const f = l.split(' | ').map(s => s.trim());
    if (f.length !== n) throw new Error(label + ' line ' + (i + 1) + ': expected ' + n + ' fields, got ' + f.length + ': ' + line);
    return f;
  });
}

const DECKS = {};
for (const [name, txt] of Object.entries(decksSrc)) DECKS[name] = rows(txt, 4, name);

const DIALOG = {};
for (const [k, a, b, t] of rows(X.DIALOG, 4, 'DIALOG')) { if (DIALOG[k]) throw new Error('dup dialog ' + k); DIALOG[k] = [a, b, t]; }
const EXAMPLES = {};
for (const [k, s, t] of rows(X.EXAMPLES, 3, 'EXAMPLES')) { if (EXAMPLES[k]) throw new Error('dup example ' + k); EXAMPLES[k] = [s, t]; }
const PATTERNS = rows(X.PATTERNS, 4, 'PATTERNS');
const IDIOMS = rows(X.IDIOMS, 4, 'IDIOMS');
if (!META.PAUSE_LABELS) throw new Error('meta.js PAUSE_LABELS missing');
const PSET = key => [LIB.PAUSE_EN[key] + ' · ' + META.PAUSE_LABELS[key], rows(X.PAUSE[key], 2, 'PAUSE.' + key)];
const PAUSE = {
  sets: { compliment: PSET('compliment'), expression: PSET('expression'), polite: PSET('polite'), saying: PSET('saying') },
  idioms: IDIOMS
};

/* Lessons: the original 11 (lessons.js / practice.js) plus stage files in more/ (a1.js, a2.js, b1.js), in the shared course ORDER (lib.js; a language adds lessons via profile.lessonOrder.after).
   Titles are numbered here; source titles carry no number (an old "N · " prefix is stripped). */
const DSL = require(path.join(__dirname, 'more', '_dsl.js'))(PROFILE);
const MORE = ['a1.js', 'a2.js', 'b1.js'].filter(f => fs.existsSync(path.join(SRC, 'more', f))).flatMap(f => require(path.join(SRC, 'more', f)).map(DSL.lesson));
const ORDER = LIB.orderFor(PROFILE);
const byId = {};
L.LESSONS.forEach(l => { byId[l.id] = { ...l, title: l.title.replace(/^\d+ · /, '') }; });
MORE.forEach(l => { if (byId[l.id]) throw new Error('duplicate lesson id ' + l.id); byId[l.id] = { id: l.id, title: l.title, blurb: l.blurb, deck: l.deck, body: l.body }; L.CHECKS[l.id] = l.check; PRACTICE[l.id] = l.practice; });
const have = ORDER.filter(id => byId[id]);
Object.keys(byId).forEach(id => { if (!ORDER.includes(id)) throw new Error('lesson not in ORDER: ' + id + ' (add it to profile.json lessonOrder.after and deviations.json extraLessons)'); });
const LESSONS = have.map((id, i) => ({ ...byId[id], title: (i + 1) + ' · ' + byId[id].title, body: byId[id].body.replace(/^\s+|\s+$/g, '').replace(/\n/g, '') }));
const ordObj = o => Object.fromEntries(have.map(id => [id, o[id]]));
L.CHECKS = ordObj(L.CHECKS);
const PRACTICE_ORDERED = ordObj(PRACTICE);

const { GROUPS, TAGS, DESC, GOALS } = META;
const PATH_ORDER = GROUPS.flatMap(g => g[1]);
const PLAN_PRESETS = {};
for (const [k, P] of Object.entries(META.PLAN_PRESETS)) PLAN_PRESETS[k] = { ...P, decks: P.decks === '@path' ? PATH_ORDER : P.decks, lessons: P.lessons === '@all' ? LESSONS.map(l => l.id) : P.lessons };
if (META.TITLES.length !== LIB.TITLE_LEVELS.length) throw new Error('meta.js TITLES needs ' + LIB.TITLE_LEVELS.length + ' names');
const TITLES = LIB.TITLE_LEVELS.map(([lv, en], i) => [lv, en, META.TITLES[i]]);

const J = v => JSON.stringify(v);
const objLines = (o, fmt) => '{\n' + Object.entries(o).map(([k, v]) => '    ' + J(k) + ': ' + fmt(v)).join(',\n') + '\n  }';

let out = '';
const K = k => /^[A-Za-z_$][\w$]*$/.test(k) ? k : J(k);
out += '/* Lang App course pack: English for ' + PROFILE.nativeNameEn + ' speakers (' + ID + '). Pure data; generated content. */\n';
out += "LANGAPP_PACKS.course['" + ID + "'] = {\n";
out += '  id: ' + J(ID) + ', native: ' + J(LANG) + ', target: "en", ttsLang: ' + J(PROFILE.ttsLang) + ', name: {en: "English", ' + K(LANG) + ': ' + J(PROFILE.name[LANG]) + '}, brand: "English",\n';
out += '  features: {' + LIB.FEATURES.map(f => f + ': false').join(', ') + '},\n';
out += '  DECKS: {\n' + Object.entries(DECKS).map(([k, cards]) => '    ' + J(k) + ': [\n' + cards.map(c => '      ' + J(c)).join(',\n') + '\n    ]').join(',\n') + '\n  },\n';
out += '  GROUPS: ' + J(GROUPS) + ',\n';
out += '  TAGS: ' + objLines(TAGS, J) + ',\n';
out += '  DESC: ' + objLines(DESC, J) + ',\n';
out += '  DIALOG: ' + objLines(DIALOG, J) + ',\n';
out += '  EXAMPLES: ' + objLines(EXAMPLES, J) + ',\n';
out += '  LESSONS: [\n' + LESSONS.map(l => '    ' + J(l)).join(',\n') + '\n  ],\n';
out += '  CHECKS: ' + objLines(L.CHECKS, v => '[\n' + v.map(c => '      ' + J(c)).join(',\n') + '\n    ]') + ',\n';
out += '  PRACTICE: ' + objLines(PRACTICE_ORDERED, v => '[\n' + v.map(c => '      ' + J(c)).join(',\n') + '\n    ]') + ',\n';
out += '  PATTERNS: [\n' + PATTERNS.map(p => '    ' + J(p)).join(',\n') + '\n  ],\n';
out += '  PAIRS: [],\n';
out += '  GOALS: ' + objLines(GOALS, J) + ',\n';
out += '  PLAN_PRESETS: ' + objLines(PLAN_PRESETS, J) + ',\n';
out += '  TITLES: ' + J(TITLES) + ',\n';
out += '  PAUSE: {\n    sets: ' + objLines(PAUSE.sets, v => '[' + J(v[0]) + ', [\n' + v[1].map(x => '      ' + J(x)).join(',\n') + '\n    ]]').replace(/\n/g, '\n  ') + ',\n';
out += '    idioms: [\n' + IDIOMS.map(x => '      ' + J(x)).join(',\n') + '\n    ]\n  }\n';
out += '};\n';
fs.writeFileSync(OUT, out);
console.log('wrote', OUT, out.length, 'bytes');
