#!/usr/bin/env node
/* Lang App · two halves: join a target half and a native half into an ordinary course pack.
   Usage: node tools/halves/assemble.js <native> <target> [outfile]
     e.g. node tools/halves/assemble.js es ko   → <tmpdir>/course-es-ko.js containing LANGAPP_PACKS.course['es-ko'] = {...}
   The output is never written into packs/ unless you name that path yourself. HALVES_DIR=<dir> reads halves from elsewhere.
   Format: docs/HALVES-SPEC.md */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const L = require('./lib.js');

function loadHalves(nat, tgt, dir) {
  dir = dir || process.env.HALVES_DIR || L.HALVES;
  const T = path.join(dir, 'target', tgt), N = path.join(dir, 'native', nat, tgt);
  if (!fs.existsSync(T)) throw new Error('no target half at ' + T);
  if (!fs.existsSync(N)) throw new Error('no native half at ' + N);
  const t = {}, n = {};
  ['decks', 'cards', 'dialog', 'examples', 'patterns', 'sentences', 'lessons', 'checks', 'practice'].forEach(f => t[f] = L.readJSONL(path.join(T, f + '.jsonl')));
  ['decks', 'groups', 'cards', 'dialog', 'examples', 'patterns', 'sentences', 'lessons', 'checks', 'practice', 'labels', 'lessoncards'].forEach(f => n[f] = L.readJSONL(path.join(N, f + '.jsonl')));
  t.course = L.readJSON(path.join(T, 'course.json'));
  n.course = L.readJSON(path.join(N, 'course.json'));
  n.ui = fs.existsSync(path.join(N, 'ui.json')) ? L.readJSON(path.join(N, 'ui.json')) : {};
  /* Korean trainers (docs/TRAINERS-PLAN.md §5): target/<t>/trainer.json = read-only mirror of the engine's Korean keys; native/<n>/<t>/trainer.json = the learner-language trainer text */
  t.trainer = fs.existsSync(path.join(T, 'trainer.json')) ? L.readJSON(path.join(T, 'trainer.json')) : null;
  n.trainer = fs.existsSync(path.join(N, 'trainer.json')) ? L.readJSON(path.join(N, 'trainer.json')) : null;
  n.bodies = {}; t.lessons.forEach(l => { const f = path.join(N, 'lessons', l.id + '.html'); n.bodies[l.id] = fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : null; });
  return { t, n, T, N };
}

/* lenient=false: any missing native row is an error (assembly refuses); validate.js reports them all instead */
function assemble(nat, tgt, opts) {
  opts = opts || {};
  const { t, n } = loadHalves(nat, tgt, opts.dir);
  const K = L.target(tgt).field; /* the field holding target text in the target half: "ko" for Korean, "zh" for Chinese (lib.js TARGETS) */
  const miss = [];
  const ix = {}; Object.keys(n).forEach(k => { if (Array.isArray(n[k])) ix[k] = L.byId(n[k]); });
  const get = (file, id) => { const r = ix[file].get(id); if (!r) miss.push(file + ':' + id); return r || {}; };
  const label = id => get('labels', id).text;
  const merge = (ko, nat) => (ko || []).map((v, i) => v != null ? v : (nat || [])[i]); /* Korean slots come from the target half, prose slots from the native half */

  const deckLabel = {}; t.decks.forEach(d => deckLabel[d.id] = get('decks', d.id).label);
  const DL = id => { if (!deckLabel[id]) miss.push('deck:' + id); return deckLabel[id]; };
  const cardKo = {}; t.cards.forEach(c => cardKo[c.id] = c[K]);

  const DECKS = {}; t.decks.forEach(d => DECKS[DL(d.id)] = []);
  t.cards.forEach(c => { const x = get('cards', c.id); DECKS[DL(c.deck)].push([c[K], c.rom, x.meaning, x.note == null ? '' : x.note]); });
  const DESC = {}; t.decks.forEach(d => DESC[DL(d.id)] = get('decks', d.id).desc);
  if (ix.labels.has('ko.d.mydeck')) DESC['My phrases'] = label('ko.d.mydeck'); /* the runtime's MYDECK name is the English constant 'My phrases' */
  const GROUPS = t.course.groups.map(g => [get('groups', g.id).name, g.decks.map(DL)]);
  const TAGS = {}; Object.entries(t.course.tags || {}).forEach(([k, v]) => TAGS[k] = v.map(DL));
  const DIALOG = {}; t.dialog.forEach(r => DIALOG[cardKo[r.card]] = [r.a, r.b, get('dialog', r.id).tr]);
  const EXAMPLES = {}; t.examples.forEach(r => EXAMPLES[cardKo[r.card]] = [r[K], get('examples', r.id).tr]);
  /* PATTERNS[3]: a lesson id (target-side, en-ko) or the example's translation (native "tr", packs from tools/target; HALVES-SPEC §8.3) */
  const PATTERNS = t.patterns.map(r => { const x = get('patterns', r.id); return [r[K], x.meaning, r.ex, r.lesson != null ? r.lesson : x.tr]; });
  const sen = L.byId(t.sentences);
  const body = (lid, h) => String(h == null ? (miss.push('lesson body:' + lid), '') : h).replace(/\{\{ex:([^}|]*)\}\}/g, (m, id) => {
    const s = sen.get(id); if (!s) { miss.push('sentence:' + id + ' (in ' + lid + ')'); return m; }
    return '{{ex:' + s[K] + '|' + s.rom + '|' + get('sentences', id).gloss + '}}';
  });
  /* {{tiles:<t>.tlNNN}}: the tile set from the target lesson row; a learner-language hint comes from its label, spaces written back as "_" (x-yue-design §3) */
  const tileSet = new Map(); t.lessons.forEach(l => (l.tiles || []).forEach(s => tileSet.set(s.id, s)));
  const tiles = (lid, h) => tileSet.size ? h.replace(/\{\{tiles:([a-z]+\.tl\d+)\}\}/g, (m, id) => {
    const s = tileSet.get(id); if (!s) { miss.push('tiles:' + id + ' (in ' + lid + ')'); return m; }
    return '{{tiles:' + s.items.map(i => i.r != null ? i.f + '=' + i.r : i.n != null ? i.f + '=' + String(label(i.n) == null ? '' : label(i.n)).replace(/ /g, '_') : i.f).join(' ') + '}}';
  }) : h;
  /* lesson.sections (FND-1): deck ids → deck labels, in-lesson decks → {name, cards} with the native meaning and note */
  const sec = s => s === null ? null : typeof s === 'string' ? DL(s) : Array.isArray(s) ? s.map(sec) : s.ld != null
    ? { name: label(s.ld), cards: s.cards.map(cd => { const x = get('lessoncards', cd.id); return [cd[K], cd.rom, x.meaning, x.note == null ? '' : x.note]; }) }
    : (s.n ? { deck: DL(s.deck), n: s.n.slice() } : { deck: DL(s.deck) });
  /* a native body written before its lesson got tile sets lacks their tokens: the tiles would silently vanish from the pack, so count it as missing */
  t.lessons.forEach(l => (l.tiles || []).forEach(s => { const h = n.bodies[l.id]; if (h != null && h.indexOf('{{tiles:' + s.id + '}}') < 0) miss.push('lesson body:' + l.id + ' (no {{tiles:' + s.id + '}} token)'); }));
  const LESSONS = t.lessons.map(l => { const x = get('lessons', l.id); const o = { id: l.id, title: x.title, blurb: x.blurb, deck: DL(l.deck), body: tiles(l.id, body(l.id, n.bodies[l.id])) }; if (l.sections) o.sections = l.sections.map(sec); return o; });
  const CHECKS = {}; t.checks.forEach(c => { const x = get('checks', c.id); (CHECKS[c.lesson] = CHECKS[c.lesson] || []).push([x.q, merge(c.o, x.o), c.a, x.why]); });
  const PRACTICE = {}; t.practice.forEach(p => {
    const x = get('practice', p.id), o = { t: p.t };
    if (p.t === 'fill' && p.q != null) o.q = p.q; else if (x.q != null) o.q = x.q;
    if (x.p != null) o.p = x.p;
    if (p.o) o.o = p.t === 'mc' ? merge(p.o, x.o) : p.o;
    if (p.a) o.a = p.a; if (p.x) o.x = p.x; if (p.alt) o.alt = p.alt;
    if (p.hint) o.hint = p.hint[K] + (p.hint.sep ? p.hint.sep + (x.hint || '') : ''); else if (x.hint != null) o.hint = x.hint;
    if (x.why != null) o.why = x.why;
    if (p.strict) o.strict = true; if (p.xr) o.xr = p.xr;
    /* practice keys in the order the built-in data uses: t q o p a x alt hint why */
    const ord = {}; ['t', 'q', 'o', 'p', 'a', 'x', 'alt', 'hint', 'why', 'strict', 'xr'].forEach(k => { if (o[k] !== undefined) ord[k] = o[k]; });
    (PRACTICE[p.lesson] = PRACTICE[p.lesson] || []).push(ord);
  });
  /* a title row without target text is [level, native, ''] (the en-<t> shape); a greeting without pronunciation is [target, gloss] */
  const TITLES = (t.course.titles || []).map(x => x[K] != null ? [x.level, x[K], label(x.id)] : [x.level, label(x.id), '']);
  const GREET = (t.course.greet || []).map(x => x.rom != null ? [x[K], x.rom + ' · ' + label(x.id)] : [x[K], label(x.id)]);
  const GOALS = {}; (t.course.goals || []).forEach(g => GOALS[g.key] = { label: label(g.id), decks: g.decks.map(DL) });
  const PLAN_PRESETS = {}; (t.course.plans || []).forEach(g => { const o = { label: label(g.id) }; Object.keys(g).forEach(k => { if (k === 'id' || k === 'key') return; o[k] = k === 'decks' ? g.decks.map(DL) : g[k]; }); PLAN_PRESETS[g.key] = o; });
  const sets = {}; ((t.course.pause || {}).sets || []).forEach(s => sets[s.key] = [s[K] + s.sep + label(s.id), s.items.map(i => [i[K], label(i.id)])]);
  const idioms = ((t.course.pause || {}).idioms || []).map(i => [i[K], i.hanja, i.rom, label(i.id)]);

  /* ---------- trainers: ROLES / KINDS (always, when the target half defines them), TRAINER (when the native half has trainer.json), features from readiness ---------- */
  const groupName = {}; t.course.groups.forEach(g => groupName[g.id] = get('groups', g.id).name);
  const tc = t.course, ROLES = {}, KINDS = {};
  Object.entries(tc.roles || {}).forEach(([k, v]) => ROLES[k] = Array.isArray(v) ? v.map(id => { if (!groupName[id]) miss.push('role group:' + id); return groupName[id]; }) : DL(v));
  Object.entries(tc.kinds || {}).forEach(([k, v]) => KINDS[k] = v.map(DL));
  const TRAINER = n.trainer ? trainerOf(n.trainer, tc) : null;
  const features = { script: false, pron: false, conj: false, register: false, numbers: false, sound: false, strokes: false };
  if (tgt === 'ko') { const rd = readiness(TRAINER, t.trainer, PAIRS_LEN(tc)); Object.keys(features).forEach(f => features[f] = !!(rd[f] && WIRED[f])); }
  else if (tc.features) Object.keys(features).forEach(f => features[f] = !!tc.features[f]); /* other targets: the flags of the en-<t> pack, copied at export (CF() is features[f] for a non-Korean target) */

  if (miss.length && !opts.lenient) throw new Error(miss.length + ' native row(s) missing, first: ' + miss.slice(0, 5).join(', ') + ' — run validate.js');
  const pack = {
    id: nat + '-' + tgt, native: nat, target: tgt, ttsLang: t.course.ttsLang,
    name: { [nat]: n.course.name, [tgt]: t.course.self }, brand: n.course.brand || t.course.introWord, introWord: t.course.introWord,
    ...(tc.pack || {}), /* pack flags of the en-<t> pack (accents, keys, tilesDefault …), copied verbatim at export; Korean has none */
    features,
    /* a course assembled from the two halves is a STANDARD course unless its native half says it was hand-tuned for this pair (course.json "tuned": true); the picker marks hand-tuned courses */
    ...(n.course.tuned ? {} : { standard: true }),
    GREET, TITLES, DECKS, GROUPS, TAGS, DESC, DIALOG, EXAMPLES, PATTERNS, LESSONS, CHECKS, PRACTICE, GOALS, PLAN_PRESETS,
    PAIRS: t.course.pairs || [], PAUSE: { sets, idioms }, UI: n.ui || {},
    ...(tc.roles ? { ROLES } : {}), ...(tc.kinds ? { KINDS } : {}), ...(TRAINER ? { TRAINER } : {})
  };
  return { pack, missing: miss };
}

/* features whose engine renderers read COURSE.TRAINER (src/app.html TRAINER_WIRED; all since WP2–WP6). The Build drill / breakdown is a mode, not a flag: the app enables it when gloss + build are complete */
const WIRED = { script: true, pron: true, strokes: true, numbers: true, sound: true, register: true, conj: true };
const PAIRS_LEN = tc => (tc.pairs || []).length;
const isObj = x => x && typeof x === 'object' && !Array.isArray(x);
/* the native trainer.json without its _notes; build.extra keyed by the Korean of target build[] (only those sentences, in target order) */
function trainerOf(nt, tc) {
  const strip = v => { if (Array.isArray(v)) return v.map(strip); if (!isObj(v)) return v; const o = {}; Object.keys(v).forEach(k => { if (k[0] !== '_') o[k] = strip(v[k]); }); return o; };
  const T = strip(nt); delete T.ui;
  if (isObj(T.build) && isObj(T.build.extra) && Array.isArray(tc.build)) { const ex = {}; tc.build.forEach(b => { if (typeof T.build.extra[b.ko] === 'string') ex[b.ko] = T.build.extra[b.ko]; }); T.build.extra = ex; }
  return T;
}
/* mirrors READY in src/app.html: a flag is on only when its section is complete */
function readiness(T, mirror, pairs) {
  const has = (o, keys) => isObj(o) && keys.every(k => typeof o[k] === 'string' && o[k].trim());
  const words = mirror ? mirror.words.cv.concat(mirror.words.f) : null;
  const h = T && T.hangul;
  return {
    script: !!(T && words && isObj(h) && has(h.mean, words) && has(h.ui, ['placeholder', 'ariaLabel', 'levelSyllable', 'levelWord', 'empty', 'pickPrompt']) && has(T.onboard, ['title', 'read', 'readNo', 'readSlow', 'readYes', 'goal', 'time', 'started'])),
    numbers: !!(T && mirror && isObj(T.numbers) && has(T.numbers.hint, mirror.numKinds) && has(T.numbers.counter, mirror.counters) && has(T.numbers.ui, ['prompt', 'placeholder'])),
    sound: !!(T && mirror && isObj(T.sound) && has(T.sound.ui, ['prompt']) && has(T.sound.rules, mirror.soundRules)),
    register: !!(T && has(T.register, ['toPolite', 'toCasual', 'whyPolite', 'whyCasual']) && pairs >= 4),
    conj: !!(T && mirror && isObj(T.conj) && has(T.conj.labels, mirror.conjFields) && has(T.conj.irregular, mirror.conjIrregular) && has(T.conj.ui, ['empty', 'irregular', 'title', 'placeholder', 'button', 'tryLine'])),
    pron: true, strokes: true
  };
}

function packSource(pack, nat, tgt) {
  const js = JSON.stringify(pack, null, 1).split(String.fromCharCode(0x2028)).join('\\u2028').split(String.fromCharCode(0x2029)).join('\\u2029');
  return '/* Lang App course pack: ' + pack.name[nat] + ' course for ' + nat + ' speakers (' + pack.id + '). Pure data; assembled by tools/halves/assemble.js from target/' + tgt + ' + native/' + nat + '/' + tgt + '. Do not edit: edit the halves. */\n' +
    "LANGAPP_PACKS.course['" + pack.id + "'] = " + js + ';\n';
}

module.exports = { assemble, loadHalves, packSource, readiness, WIRED };

if (require.main === module) {
  const [nat, tgt, outArg] = process.argv.slice(2);
  if (!nat || !tgt) { console.error('usage: node tools/halves/assemble.js <native> <target> [outfile]'); process.exit(2); }
  try {
    const { pack } = assemble(nat, tgt);
    const src = packSource(pack, nat, tgt);
    if (/<\/script/i.test(src)) throw new Error('pack contains </script');
    const out = outArg || path.join(os.tmpdir(), 'course-' + nat + '-' + tgt + '.js');
    fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true }); fs.writeFileSync(out, src);
    const chk = cp.spawnSync('node', ['--check', out], { encoding: 'utf8' }); if (chk.status) throw new Error('node --check failed: ' + chk.stderr.slice(-300));
    /* the same probe build.sh runs: exactly one course, with id/native/target */
    const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', src)(P);
    if (Object.keys(P.course).length !== 1 || Object.keys(P.i18n).length) throw new Error('pack must define exactly one course');
    const c = P.course[pack.id];
    console.log(JSON.stringify({ out, id: c.id, decks: Object.keys(c.DECKS).length, cards: Object.values(c.DECKS).reduce((a, b) => a + b.length, 0), lessons: c.LESSONS.length, checks: Object.values(c.CHECKS).reduce((a, b) => a + b.length, 0), practice: Object.values(c.PRACTICE).reduce((a, b) => a + b.length, 0), dialog: Object.keys(c.DIALOG).length, examples: Object.keys(c.EXAMPLES).length, patterns: c.PATTERNS.length, ui: Object.keys(c.UI).length, features: Object.keys(c.features).filter(f => c.features[f]).join(',') || 'none', trainer: c.TRAINER ? Object.keys(c.TRAINER).join(',') : 'none', bytes: src.length }));
  } catch (e) { console.error('assemble: ' + e.message); process.exit(1); }
}
