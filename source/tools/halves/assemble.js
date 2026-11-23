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
  ['decks', 'groups', 'cards', 'dialog', 'examples', 'patterns', 'sentences', 'lessons', 'checks', 'practice', 'labels'].forEach(f => n[f] = L.readJSONL(path.join(N, f + '.jsonl')));
  t.course = L.readJSON(path.join(T, 'course.json'));
  n.course = L.readJSON(path.join(N, 'course.json'));
  n.ui = fs.existsSync(path.join(N, 'ui.json')) ? L.readJSON(path.join(N, 'ui.json')) : {};
  n.bodies = {}; t.lessons.forEach(l => { const f = path.join(N, 'lessons', l.id + '.html'); n.bodies[l.id] = fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : null; });
  return { t, n, T, N };
}

/* lenient=false: any missing native row is an error (assembly refuses); validate.js reports them all instead */
function assemble(nat, tgt, opts) {
  opts = opts || {};
  const { t, n } = loadHalves(nat, tgt, opts.dir);
  const miss = [];
  const ix = {}; Object.keys(n).forEach(k => { if (Array.isArray(n[k])) ix[k] = L.byId(n[k]); });
  const get = (file, id) => { const r = ix[file].get(id); if (!r) miss.push(file + ':' + id); return r || {}; };
  const label = id => get('labels', id).text;
  const merge = (ko, nat) => (ko || []).map((v, i) => v != null ? v : (nat || [])[i]); /* Korean slots come from the target half, prose slots from the native half */

  const deckLabel = {}; t.decks.forEach(d => deckLabel[d.id] = get('decks', d.id).label);
  const DL = id => { if (!deckLabel[id]) miss.push('deck:' + id); return deckLabel[id]; };
  const cardKo = {}; t.cards.forEach(c => cardKo[c.id] = c.ko);

  const DECKS = {}; t.decks.forEach(d => DECKS[DL(d.id)] = []);
  t.cards.forEach(c => { const x = get('cards', c.id); DECKS[DL(c.deck)].push([c.ko, c.rom, x.meaning, x.note == null ? '' : x.note]); });
  const DESC = {}; t.decks.forEach(d => DESC[DL(d.id)] = get('decks', d.id).desc);
  if (ix.labels.has('ko.d.mydeck')) DESC['My phrases'] = label('ko.d.mydeck'); /* the runtime's MYDECK name is the English constant 'My phrases' */
  const GROUPS = t.course.groups.map(g => [get('groups', g.id).name, g.decks.map(DL)]);
  const TAGS = {}; Object.entries(t.course.tags || {}).forEach(([k, v]) => TAGS[k] = v.map(DL));
  const DIALOG = {}; t.dialog.forEach(r => DIALOG[cardKo[r.card]] = [r.a, r.b, get('dialog', r.id).tr]);
  const EXAMPLES = {}; t.examples.forEach(r => EXAMPLES[cardKo[r.card]] = [r.ko, get('examples', r.id).tr]);
  const PATTERNS = t.patterns.map(r => [r.ko, get('patterns', r.id).meaning, r.ex, r.lesson]);
  const sen = L.byId(t.sentences);
  const body = (lid, h) => String(h == null ? (miss.push('lesson body:' + lid), '') : h).replace(/\{\{ex:([^}|]*)\}\}/g, (m, id) => {
    const s = sen.get(id); if (!s) { miss.push('sentence:' + id + ' (in ' + lid + ')'); return m; }
    return '{{ex:' + s.ko + '|' + s.rom + '|' + get('sentences', id).gloss + '}}';
  });
  const LESSONS = t.lessons.map(l => { const x = get('lessons', l.id); return { id: l.id, title: x.title, blurb: x.blurb, deck: DL(l.deck), body: body(l.id, n.bodies[l.id]) }; });
  const CHECKS = {}; t.checks.forEach(c => { const x = get('checks', c.id); (CHECKS[c.lesson] = CHECKS[c.lesson] || []).push([x.q, merge(c.o, x.o), c.a, x.why]); });
  const PRACTICE = {}; t.practice.forEach(p => {
    const x = get('practice', p.id), o = { t: p.t };
    if (p.t === 'fill') o.q = p.q; else if (x.q != null) o.q = x.q;
    if (x.p != null) o.p = x.p;
    if (p.o) o.o = p.t === 'mc' ? merge(p.o, x.o) : p.o;
    if (p.a) o.a = p.a; if (p.x) o.x = p.x;
    if (p.hint) o.hint = p.hint.ko + (p.hint.sep ? p.hint.sep + (x.hint || '') : ''); else if (x.hint != null) o.hint = x.hint;
    if (x.why != null) o.why = x.why;
    if (p.strict) o.strict = true; if (p.xr) o.xr = p.xr;
    /* practice keys in the order the built-in data uses: t q o p a x hint why */
    const ord = {}; ['t', 'q', 'o', 'p', 'a', 'x', 'hint', 'why', 'strict', 'xr'].forEach(k => { if (o[k] !== undefined) ord[k] = o[k]; });
    (PRACTICE[p.lesson] = PRACTICE[p.lesson] || []).push(ord);
  });
  const TITLES = (t.course.titles || []).map(x => [x.level, x.ko, label(x.id)]);
  const GREET = (t.course.greet || []).map(x => [x.ko, x.rom + ' · ' + label(x.id)]);
  const GOALS = {}; (t.course.goals || []).forEach(g => GOALS[g.key] = { label: label(g.id), decks: g.decks.map(DL) });
  const PLAN_PRESETS = {}; (t.course.plans || []).forEach(g => { const o = { label: label(g.id) }; Object.keys(g).forEach(k => { if (k === 'id' || k === 'key') return; o[k] = k === 'decks' ? g.decks.map(DL) : g[k]; }); PLAN_PRESETS[g.key] = o; });
  const sets = {}; ((t.course.pause || {}).sets || []).forEach(s => sets[s.key] = [s.ko + s.sep + label(s.id), s.items.map(i => [i.ko, label(i.id)])]);
  const idioms = ((t.course.pause || {}).idioms || []).map(i => [i.ko, i.hanja, i.rom, label(i.id)]);

  if (miss.length && !opts.lenient) throw new Error(miss.length + ' native row(s) missing, first: ' + miss.slice(0, 5).join(', ') + ' — run validate.js');
  const pack = {
    id: nat + '-' + tgt, native: nat, target: tgt, ttsLang: t.course.ttsLang,
    name: { [nat]: n.course.name, [tgt]: t.course.self }, brand: n.course.brand || t.course.introWord, introWord: t.course.introWord,
    features: { script: false, pron: false, conj: false, register: false, numbers: false, sound: false, strokes: false },
    /* a course assembled from the two halves is a STANDARD course unless its native half says it was hand-tuned for this pair (course.json "tuned": true); the picker marks hand-tuned courses */
    ...(n.course.tuned ? {} : { standard: true }),
    GREET, TITLES, DECKS, GROUPS, TAGS, DESC, DIALOG, EXAMPLES, PATTERNS, LESSONS, CHECKS, PRACTICE, GOALS, PLAN_PRESETS,
    PAIRS: t.course.pairs || [], PAUSE: { sets, idioms }, UI: n.ui || {}
  };
  return { pack, missing: miss };
}

function packSource(pack, nat, tgt) {
  const js = JSON.stringify(pack, null, 1).split(String.fromCharCode(0x2028)).join('\\u2028').split(String.fromCharCode(0x2029)).join('\\u2029');
  return '/* Lang App course pack: ' + pack.name[nat] + ' course for ' + nat + ' speakers (' + pack.id + '). Pure data; assembled by tools/halves/assemble.js from target/' + tgt + ' + native/' + nat + '/' + tgt + '. Do not edit: edit the halves. */\n' +
    "LANGAPP_PACKS.course['" + pack.id + "'] = " + js + ';\n';
}

module.exports = { assemble, loadHalves, packSource };

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
    console.log(JSON.stringify({ out, id: c.id, decks: Object.keys(c.DECKS).length, cards: Object.values(c.DECKS).reduce((a, b) => a + b.length, 0), lessons: c.LESSONS.length, checks: Object.values(c.CHECKS).reduce((a, b) => a + b.length, 0), practice: Object.values(c.PRACTICE).reduce((a, b) => a + b.length, 0), dialog: Object.keys(c.DIALOG).length, examples: Object.keys(c.EXAMPLES).length, patterns: c.PATTERNS.length, ui: Object.keys(c.UI).length, bytes: src.length }));
  } catch (e) { console.error('assemble: ' + e.message); process.exit(1); }
}
