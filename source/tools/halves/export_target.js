#!/usr/bin/env node
/* Lang App · two halves: export a target half (+ its English native half) MECHANICALLY from the course an English speaker already has.
     node tools/halves/export_target.js ko    → runs export_ko.js unchanged (the built-in en-ko course lives in src/app.html and is read in a real page)
     node tools/halves/export_target.js zh    → regenerates en-zh from tools/target/zh/ with tools/target/gen.js (into a temp file), loads that pack, and writes
                                               tools/halves/target/zh/      (the Chinese half: shared by every learner language)
                                               tools/halves/native/en/zh/   (the English half; assemble.js en zh must give back the en-zh pack: proof.js zh)
   Nothing is retyped. Ids are assigned once and reused on re-export (matched by content), exactly as export_ko.js does.
   The exporter refuses any pack field or practice field it does not map, so nothing can be dropped silently.
   Options: --accept-moved (see HALVES-SPEC §2), HALVES_DIR=<dir> writes elsewhere, HALVES_PACK=<file> exports from that en-<t> pack instead of regenerating.
   Format: docs/HALVES-SPEC.md; the non-Korean differences: docs/briefs/vi-zh-design.md */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process'), crypto = require('crypto'), vm = require('vm');
const L = require('./lib.js');

const TG = process.argv[2];
if (!TG || TG.startsWith('--')) { console.error('usage: node tools/halves/export_target.js <target> [--accept-moved]   (ko runs export_ko.js)'); process.exit(2); }
if (TG === 'ko') { const r = cp.spawnSync('node', [path.join(__dirname, 'export_ko.js')].concat(process.argv.slice(3)), { stdio: 'inherit' }); process.exit(r.status == null ? 1 : r.status); }

const TC = L.target(TG), K = TC.field;
const DIR = process.env.HALVES_DIR || L.HALVES;
const T = path.join(DIR, 'target', TG), N = path.join(DIR, 'native', 'en', TG);
const slug = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pad = (n, w) => String(n).padStart(w, '0');
/* id allocator that remembers ids from a previous export; a key that occurs twice (en-zh has one duplicated pattern row) gets its old ids in order */
function Alloc(prefix, width, file, keyOf) { /* file: a .jsonl path, or the previous rows themselves */
  const old = new Map(); let max = 0;
  (Array.isArray(file) ? file : L.readJSONL(file)).forEach(r => { const k = keyOf(r); if (k != null) { if (!old.has(k)) old.set(k, []); old.get(k).push(r.id); } const n = +String(r.id).slice(prefix.length); if (n > max) max = n; });
  const used = new Set();
  return k => { let id = (old.get(k) || []).find(x => !used.has(x)); if (!id) id = prefix + pad(++max, width); used.add(id); return id; };
}

/* ---------- source: the en-<t> pack, regenerated from tools/target/<t>/ (or HALVES_PACK) ---------- */
const shipped = path.join(L.ROOT, 'packs', 'course-en-' + TG + '.js');
let packFile = process.env.HALVES_PACK, fromSources = false;
if (!packFile) {
  packFile = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'halves-exp-')), 'course-en-' + TG + '.js');
  const g = cp.spawnSync('node', [path.join(L.ROOT, 'tools', 'target', 'gen.js'), TG, packFile], { encoding: 'utf8' });
  if (g.status) { console.error('export_target: tools/target/gen.js ' + TG + ' failed: ' + (g.stderr || g.stdout).slice(-400)); process.exit(1); }
  fromSources = true;
}
const srcText = fs.readFileSync(packFile, 'utf8');
if (fromSources && fs.existsSync(shipped) && fs.readFileSync(shipped, 'utf8') !== srcText) console.warn('export_target: WARNING packs/course-en-' + TG + '.js differs from what tools/target/gen.js ' + TG + ' builds now; the halves follow the sources.');
const ctx = { LANGAPP_PACKS: { course: {}, i18n: {} } }; vm.createContext(ctx); vm.runInContext(srcText, ctx);
const c = JSON.parse(JSON.stringify(ctx.LANGAPP_PACKS.course['en-' + TG] || null));
if (!c) { console.error('export_target: ' + packFile + ' defines no course en-' + TG); process.exit(1); }
const srcHash = crypto.createHash('sha256').update(srcText).digest('hex').slice(0, 16);

/* every top-level field must be mapped: tables, or pack flags copied verbatim into target course.json "pack" */
const TABLES = ['id', 'native', 'target', 'ttsLang', 'name', 'brand', 'GREET', 'features', 'DECKS', 'GROUPS', 'TAGS', 'DESC', 'DIALOG', 'EXAMPLES', 'LESSONS', 'CHECKS', 'PRACTICE', 'PATTERNS', 'PAIRS', 'GOALS', 'PLAN_PRESETS', 'TITLES', 'PAUSE'];
const FLAGS = ['accents', 'keys', 'tilesDefault', 'romaAlmost', 'noAudio', 'voiceMatch'];
const unknown = Object.keys(c).filter(k => !TABLES.includes(k) && !FLAGS.includes(k));
if (unknown.length) { console.error('export_target: pack field(s) not mapped: ' + unknown.join(', ') + '. Map them in export_target.js and assemble.js first.'); process.exit(1); }
if (c.native !== 'en' || c.target !== TG) { console.error('export_target: expected an en-' + TG + ' pack'); process.exit(1); }
const pack = {}; Object.keys(c).forEach(k => { if (FLAGS.includes(k)) pack[k] = c[k]; });
if (TC.useCourse) TC.useCourse(c); /* inventory-based targets (lib.js TARGETS es; targets/_inventory.js) learn the course's own target text before anything is classified */

/* ---------- decks & cards ---------- */
const deckNames = Object.keys(c.DECKS);
const deckId = {}; deckNames.forEach(k => { const id = TG + '.d.' + slug(k); if (Object.values(deckId).includes(id)) throw new Error('deck slug clash: ' + k); deckId[k] = id; });
const cardA = Alloc(TG + '.c', 4, path.join(T, 'cards.jsonl'), r => r[K]);
const tCards = [], nCards = [], cardByText = {};
deckNames.forEach(k => c.DECKS[k].forEach(cd => {
  if (cd.length !== 4) throw new Error('card shape ' + JSON.stringify(cd));
  if (/@@/.test(cd[0] + cd[1])) throw new Error('learner-name token @@ in a card front: ' + cd[0]);
  if (cardByText[cd[0]]) throw new Error('duplicate card text ' + cd[0] + ' (card fronts are progress keys and DIALOG / EXAMPLES keys)');
  const id = cardA(cd[0]); cardByText[cd[0]] = id;
  tCards.push({ id, deck: deckId[k], [K]: cd[0], rom: cd[1] }); nCards.push({ id, meaning: cd[2], note: cd[3] });
}));
const tDecks = deckNames.map(k => ({ id: deckId[k] })), nDecks = deckNames.map(k => ({ id: deckId[k], label: k, desc: c.DESC[k] == null ? '' : c.DESC[k] }));
Object.keys(c.DESC).forEach(k => { if (!deckId[k]) throw new Error('DESC for unknown deck ' + k + ' (a "My phrases" description would need a label row like ko.d.mydeck)'); });

/* ---------- groups, tags ---------- */
const groups = c.GROUPS.map(g => ({ id: TG + '.grp.' + slug(g[0]), decks: g[1].map(x => { if (!deckId[x]) throw new Error('group deck ' + x); return deckId[x]; }) }));
const nGroups = c.GROUPS.map(g => ({ id: TG + '.grp.' + slug(g[0]), name: g[0] }));
const tags = {}; Object.keys(c.TAGS).forEach(t => tags[t] = c.TAGS[t].map(x => { if (!deckId[x]) throw new Error('tag deck ' + x); return deckId[x]; }));

/* ---------- dialog, examples, patterns ---------- */
const dlgA = Alloc(TG + '.g', 3, path.join(T, 'dialog.jsonl'), r => r.card), exA = Alloc(TG + '.e', 3, path.join(T, 'examples.jsonl'), r => r.card), patA = Alloc(TG + '.p', 3, path.join(T, 'patterns.jsonl'), r => r[K] + '\u0001' + r.ex);
const tDlg = [], nDlg = [], tEx = [], nEx = [], tPat = [], nPat = [];
Object.entries(c.DIALOG).forEach(([k, v]) => { const card = cardByText[k]; if (!card) throw new Error('DIALOG key not a card: ' + k); if (v.length !== 3) throw new Error('DIALOG shape ' + k); const id = dlgA(card); tDlg.push({ id, card, a: v[0], b: v[1] }); nDlg.push({ id, tr: v[2] }); });
Object.entries(c.EXAMPLES).forEach(([k, v]) => { const card = cardByText[k]; if (!card) throw new Error('EXAMPLES key not a card: ' + k); if (v.length !== 2) throw new Error('EXAMPLES shape ' + k); const id = exA(card); tEx.push({ id, card, [K]: v[0] }); nEx.push({ id, tr: v[1] }); });
const lessonIds = new Set(c.LESSONS.map(l => l.id));
/* PATTERNS[3] is a lesson id in en-ko (renderGrammar links it) but the example's translation in tools/target packs (HALVES-SPEC §8.3: search text only, no link).
   A lesson id stays target-side ("lesson"); a translation is native text ("tr"). */
c.PATTERNS.forEach(p => { if (p.length !== 4) throw new Error('PATTERN shape'); const id = patA(p[0] + '\u0001' + p[2]); if (lessonIds.has(p[3])) { tPat.push({ id, [K]: p[0], ex: p[2], lesson: p[3] }); nPat.push({ id, meaning: p[1] }); } else { tPat.push({ id, [K]: p[0], ex: p[2] }); nPat.push({ id, meaning: p[1], tr: p[3] }); } });

/* ---------- lessons: pack tokens {{ex:text|pron|gloss}} → {{ex:<id>}} ---------- */
const oldGloss = L.byId(L.readJSONL(path.join(N, 'sentences.jsonl')));
const senPrev = L.readJSONL(path.join(T, 'sentences.jsonl'));
const sp = TG + '.s';
const senKey = new Map(senPrev.map(r => [r[K] + '\u0001' + r.rom + '\u0001' + ((oldGloss.get(r.id) || {}).gloss || ''), r.id]));
let senMax = Math.max(0, ...senPrev.map(r => +r.id.slice(sp.length)));
const tSen = [], nSen = [], senSeen = new Map(), lessonFiles = {}, tLessons = [], nLessons = [];
let exRows = 0;
/* in-lesson decks (lesson.sections, FND-1: tools/patches/foundations.py) and {{tiles:…}} sets (docs/briefs/x-yue-design.md §3).
   Target side: the section structure, deck references by deck id, slices n:[a,b], in-lesson card fronts + readings with ids <t>.lc0001 (key: front + reading),
   tile sets <t>.tl001 (key: the fronts) whose items keep their front and any reading the target classifier accepts (Jyutping, pinyin, Han).
   Native side: in-lesson deck names (label <t>.ld.<slug>), card meanings and notes (lessoncards.jsonl), and tile hints in the learner's language
   (label <tile set>.<nn>, "_" written as a space). Any other shape is refused. */
const prevLessons = L.readJSONL(path.join(T, 'lessons.jsonl'));
const lcA = Alloc(TG + '.lc', 4, prevLessons.flatMap(r => { const o = []; const walk = x => { if (Array.isArray(x)) x.forEach(walk); else if (x && x.cards) o.push(...x.cards); }; walk(r.sections || []); return o; }), r => r[K] + '\u0001' + r.rom);
const tlA = Alloc(TG + '.tl', 3, prevLessons.flatMap(r => r.tiles || []), r => r.items.map(i => i.f).join(' '));
const ldSeen = new Set(), nLc = [], lessonLabels = [];
let ldCards = 0, tileSets = 0, tileHints = 0;
function mapSection(s, lid, top) {
  const bad = () => { throw new Error('lesson ' + lid + ': section entry not mapped ' + JSON.stringify(s).slice(0, 120)); };
  if (s === null) { if (!top) bad(); return null; }
  if (typeof s === 'string') { if (!deckId[s]) throw new Error('lesson ' + lid + ': section names unknown deck ' + s); return deckId[s]; }
  if (Array.isArray(s)) { if (!top || !s.length) bad(); return s.map(x => mapSection(x, lid, false)); }
  if (typeof s !== 'object') bad();
  const ks = Object.keys(s).join(',');
  if (ks === 'deck' || ks === 'deck,n') {
    if (!deckId[s.deck]) throw new Error('lesson ' + lid + ': section names unknown deck ' + s.deck);
    if (ks === 'deck') return { deck: deckId[s.deck] };
    const n = s.n, len = c.DECKS[s.deck].length;
    if (!Array.isArray(n) || n.length !== 2 || !n.every(Number.isInteger) || n[0] < 0 || n[0] >= n[1] || n[1] > len) throw new Error('lesson ' + lid + ': bad slice ' + JSON.stringify(n) + ' of ' + s.deck + ' (' + len + ' cards)');
    return { deck: deckId[s.deck], n: [n[0], n[1]] };
  }
  if (ks === 'name,cards') {
    const id = TG + '.ld.' + slug(s.name);
    if (typeof s.name !== 'string' || !s.name || ldSeen.has(id) || Object.values(deckId).includes(id)) throw new Error('lesson ' + lid + ': in-lesson deck name empty or clashes: ' + s.name);
    if (!Array.isArray(s.cards) || !s.cards.length) bad();
    ldSeen.add(id); lessonLabels.push({ id, text: s.name });
    return { ld: id, cards: s.cards.map(cd => {
      if (!Array.isArray(cd) || cd.length !== 4 || !cd.every(x => typeof x === 'string')) throw new Error('lesson ' + lid + ': in-lesson card shape ' + JSON.stringify(cd));
      if (/@@/.test(cd[0] + cd[1])) throw new Error('learner-name token @@ in an in-lesson card front: ' + cd[0]);
      if (!TC.has(cd[0]) && !TC.isValue(cd[0])) throw new Error('lesson ' + lid + ': in-lesson card front is not ' + TC.name + ' text: ' + cd[0]);
      const cid = lcA(cd[0] + '\u0001' + cd[1]); ldCards++; nLc.push({ id: cid, meaning: cd[2], note: cd[3] }); return { id: cid, [K]: cd[0], rom: cd[1] };
    }) };
  }
  return bad();
}
function mapTiles(inner, lid, sets) {
  if (!/^\S+( \S+)*$/.test(inner)) throw new Error('lesson ' + lid + ': tiles token spacing not mapped {{tiles:' + inner + '}}');
  const parts = inner.split(' '), id = tlA(parts.map(x => x.split('=')[0]).join(' '));
  const items = parts.map((x, i) => {
    const e = x.indexOf('='); if (e < 0) return { f: x };
    const f = x.slice(0, e), r = x.slice(e + 1); if (!f || !r) throw new Error('lesson ' + lid + ': tile item not mapped ' + x);
    if (TC.isValue(r.replace(/_/g, ' '))) return { f, r };                  /* a target reading (Jyutping, pinyin, Han): target side, kept raw */
    const nid = id + '.' + pad(i + 1, 2); tileHints++; lessonLabels.push({ id: nid, text: r.replace(/_/g, ' ') }); return { f, n: nid }; /* a hint in the learner's language */
  });
  tileSets++; sets.push({ id, items }); return id;
}
c.LESSONS.forEach(l => {
  if (!deckId[l.deck]) throw new Error('lesson deck ' + l.deck);
  Object.keys(l).forEach(k => { if (!['id', 'title', 'blurb', 'deck', 'body', 'sections'].includes(k)) throw new Error('lesson field ' + k + ' not mapped (' + l.id + ')'); });
  if (l.sections !== undefined && !Array.isArray(l.sections)) throw new Error('lesson ' + l.id + ': sections must be an array');
  const sections = l.sections === undefined ? undefined : l.sections.map(s => mapSection(s, l.id, true)), tiles = [];
  const body = String(l.body).replace(L.TOKEN_RX, tok => {
    const tm = tok.match(/^\{\{tiles:([^}]*)\}\}$/); if (tm) return '{{tiles:' + mapTiles(tm[1], l.id, tiles) + '}}';
    const m = tok.match(/^\{\{ex:([^|}]*)\|([^|}]*)\|([^|}]*)\}\}$/); if (!m) throw new Error('lesson ' + l.id + ': token not mapped ' + tok);
    exRows++;
    const key = m[1] + '\u0001' + m[2] + '\u0001' + m[3];
    let id = senSeen.get(key);
    if (!id) { id = senKey.get(key); if (!id || tSen.some(x => x.id === id)) id = sp + pad(++senMax, 4); senSeen.set(key, id); tSen.push({ id, [K]: m[1], rom: m[2] }); nSen.push({ id, gloss: m[3] }); }
    return '{{ex:' + id + '}}';
  });
  const left = body.match(/class="ex"|data-say|<svg|<button|<script|\son[a-z]+\s*=\s*"|\{\{(?!ex:[a-z]+\.s\d+\}\}|tiles:[a-z]+\.tl\d+\}\})/);
  if (left) throw new Error('lesson ' + l.id + ' still contains ' + left[0] + ' after tokenising');
  const tl = { id: l.id, deck: deckId[l.deck] }; if (sections !== undefined) tl.sections = sections; if (tiles.length) tl.tiles = tiles;
  lessonFiles[l.id] = body; tLessons.push(tl); nLessons.push({ id: l.id, title: l.title, blurb: l.blurb });
});

/* ---------- checks & practice: options and hints split with the shared classifier (lib.js TARGETS[t].isValue / splitLead) ---------- */
/* "by marks" targets (lib.js TARGETS[t].by, docs/briefs/x-vi-design.md): Latin script gives no per-option signal, so an mc / check item is decided ONCE,
   from its key answer (check: the option at a; mc: o[0], the correct one in tools/target packs): all its options are target-side or all are prose, never
   split. Items whose distractors look different from their key are listed for review (optReview). Hints are never split (a hint is a mixed native field). */
const BYMARKS = TC.by === 'marks', optReview = [];
const itemIsT = (opts, key, id) => { const k = TC.itemIsValue ? TC.itemIsValue(opts, key) : TC.isValue(opts[key]); /* itemIsValue: inventory targets (targets/_inventory.js) */ const odd = opts.filter((o, j) => j !== key && TC.isValue(o) !== k); if (odd.length) optReview.push(id + ' (' + (k ? 'target' : 'prose') + ' by its key «' + opts[key] + '»; ' + odd.map(o => '«' + o + '»').join(' ') + ' would classify the other way)'); return k; };
const isT = TC.isValue;
const tChk = [], nChk = [];
Object.entries(c.CHECKS).forEach(([lid, list]) => list.forEach((ch, i) => {
  const id = lid + '.k' + (i + 1); if (ch.length !== 4) throw new Error('check shape ' + id);
  if (BYMARKS) { const it = itemIsT(ch[1], ch[2], id); tChk.push({ id, lesson: lid, o: ch[1].map(o => it ? o : null), a: ch[2] }); const n = { id, q: ch[0] }; if (!it) n.o = ch[1].slice(); n.why = ch[3]; nChk.push(n); return; }
  tChk.push({ id, lesson: lid, o: ch[1].map(o => isT(o) ? o : null), a: ch[2] });
  const n = { id, q: ch[0] }; if (ch[1].some(o => !isT(o))) n.o = ch[1].map(o => isT(o) ? null : o); n.why = ch[3]; nChk.push(n);
}));
const tPr = [], nPr = [], KNOWN = new Set(['t', 'q', 'p', 'o', 'a', 'x', 'alt', 'why', 'hint', 'strict', 'xr']);
Object.entries(c.PRACTICE).forEach(([lid, list]) => list.forEach((it, i) => {
  Object.keys(it).forEach(k => { if (!KNOWN.has(k)) throw new Error('practice field ' + k + ' not mapped (' + lid + ')'); });
  const id = lid + '.' + pad(i + 1, 2), t = { id, lesson: lid, t: it.t }, n = { id };
  if (it.t === 'fill') t.q = it.q; else if (it.q != null) n.q = it.q;
  if (it.p != null) n.p = it.p;
  if (it.o) { if (it.t === 'mc' && BYMARKS) { const ti = itemIsT(it.o, 0, id); t.o = it.o.map(o => ti ? o : null); if (!ti) n.o = it.o.slice(); }
    else if (it.t === 'mc') { t.o = it.o.map(o => isT(o) ? o : null); if (it.o.some(o => !isT(o))) n.o = it.o.map(o => isT(o) ? null : o); } else t.o = it.o; }
  if (it.a) t.a = it.a; if (it.x) t.x = it.x; if (it.alt) t.alt = it.alt;
  if (it.hint != null && BYMARKS) n.hint = it.hint;
  else if (it.hint != null) { const s = L.splitLead(TG, it.hint); if (s && !s.note) t.hint = { [K]: s.lead }; else if (s) { t.hint = { [K]: s.lead, sep: s.sep }; n.hint = s.note; } else n.hint = it.hint; }
  if (it.why != null) n.why = it.why;
  if (it.strict != null) { if (it.strict !== true) throw new Error('practice strict must be true (' + id + ')'); t.strict = true; } /* typed answer must match exactly (no "almost") */
  if (it.xr) t.xr = it.xr;                                                                                                       /* romanised wrong options (gen.js pronAnswers) */
  tPr.push(t); nPr.push(n);
}));

/* ---------- small pack-level tables ---------- */
if (/@@/.test(JSON.stringify([c.PAIRS, c.PAUSE, c.TITLES, c.GREET]))) throw new Error('learner-name token @@ in pairs / pause / titles / greetings');
const labels = [];
/* TITLES: en-ko is [level, Korean, native]; en-<t> packs are [level, native, ""] (no target-language titles). The target row keeps the target text only when there is one. */
const titles = c.TITLES.map(x => { const id = TG + '.t' + pad(x[0], 2); if (x.length !== 3) throw new Error('title shape'); if (TC.has(x[1])) { labels.push({ id, text: x[2] }); return { id, level: x[0], [K]: x[1] }; } if (x[2] !== '') throw new Error('title with native text in both slots: ' + JSON.stringify(x)); labels.push({ id, text: x[1] }); return { id, level: x[0] }; });
/* GREET: en-ko is [Korean, "rom · gloss"]; en-<t> packs are [target, gloss] with no pronunciation. */
const GREET_IDS = ['night', 'morning', 'afternoon', 'evening'].map(h => TG + '.h.' + h);
if (c.GREET.length !== 4) throw new Error('GREET must have 4 rows');
const greet = c.GREET.map((g, i) => { if (g.length !== 2) throw new Error('greet shape'); labels.push({ id: GREET_IDS[i], text: g[1] }); return { id: GREET_IDS[i], [K]: g[0] }; });
const goals = Object.entries(c.GOALS).map(([k, g]) => { const id = 'goal.' + k; labels.push({ id, text: g.label }); return { id, key: k, decks: g.decks.map(x => deckId[x]) }; });
const plans = Object.entries(c.PLAN_PRESETS).map(([k, g]) => { const id = 'plan.' + k; labels.push({ id, text: g.label }); const o = { id, key: k }; Object.keys(g).forEach(f => { if (f !== 'label') o[f] = f === 'decks' ? g.decks.map(x => deckId[x]) : g[f]; }); return o; });
const pauseSets = Object.entries((c.PAUSE || {}).sets || {}).map(([k, s]) => { const id = TG + '.z.' + k, sp2 = L.splitLead(TG, s[0]); if (!sp2 || !sp2.note) throw new Error('pause label ' + s[0]); labels.push({ id, text: sp2.note }); return { id, key: k, [K]: sp2.lead, sep: sp2.sep, items: s[1].map((it, i) => { const iid = id + '.' + pad(i + 1, 2); labels.push({ id: iid, text: it[1] }); return { id: iid, [K]: it[0] }; }) }; });
const idioms = ((c.PAUSE || {}).idioms || []).map((x, i) => { const id = TG + '.i' + pad(i + 1, 2); labels.push({ id, text: x[3] }); return { id, [K]: x[0], hanja: x[1], rom: x[2] }; });
labels.push(...lessonLabels); /* in-lesson deck names and tile hints, after the pack-level labels */

/* ---------- interface strings a non-English half overrides for this target (ui.json; validate.js counts the missing ones) ----------
   The engine builds these from the target's English name (applyCourseUi: tn+' (required)' and the bulk-add placeholder), the grammar-search placeholder is
   static (its example 에서 is Korean in every course), and tag chips are looked up as "#<tag>" (tagL). */
const app = fs.readFileSync(L.SRC, 'utf8'), lm = app.match(new RegExp('[{,]' + TG + ":\\{name:'([^']+)'"));
if (!lm) throw new Error('LANGS has no entry ' + TG + ' in ' + path.relative(L.ROOT, L.SRC));
const tn = lm[1];
const uiKeys = [tn + ' (required)', tn + ', pronunciation, meaning, note — one per line (pronunciation/note optional)', "Search a pattern, e.g. 에서 or 'want'"].concat(Object.keys(tags).map(t => '#' + t));

const tCourse = { target: TG, ttsLang: c.ttsLang, self: c.name[TG], pack, features: c.features, groups, tags, goals, plans, titles, greet, pairs: c.PAIRS || [], pause: { sets: pauseSets, idioms }, uiKeys,
  exportedFrom: { file: fromSources ? 'tools/target/' + TG + '/ (tools/target/gen.js ' + TG + ')' : path.relative(L.ROOT, packFile), sha256_16: srcHash } };
const nCourse = { native: 'en', name: c.name.en, brand: c.brand };

/* ---------- marks (by-marks targets only): the target spans inside every mixed native field of the English half → target/<t>/marks.jsonl ----------
   One row per native field that holds at least one span: {f, id, k, spans}; k "o[2]" = option slot 2; f "body" = the lesson body (id = lesson id).
   "own" = the row's own target-side text (lib.js viMarks). Target-looking words outside every span (a Vietnamese diacritic, no mark) are REPORTED in
   native/en/<t>/unmarked.tsv, never guessed into a span: fix the source (mark them) and re-export. */
/* Hand-set spans: tools/target/<t>/marks.extra.jsonl, one row per native field {f, id, k, spans, not}. "spans" = target text of that field that no
   rule can prove (the other example words of a card note, a title that names its pattern); "not" = words with a target diacritic that are not target
   text (café). The file is a source file kept by hand next to the course; the pack does not change. A row that names no field of the English half, or
   a span that occurs nowhere in its field, stops the export (the source text moved: fix the row). tools/halves/marks_propose.js drafts rows. */
const marks = [], unmarkedRows = [];
const XFILE = process.env.HALVES_MARKS_EXTRA || path.join(L.ROOT, 'tools', 'target', TG, 'marks.extra.jsonl'), /* the env override is for selftest.js */ xKey = (f, id, k) => f + '\u0001' + id + '\u0001' + k;
const extraIx = new Map(), xUsed = new Set(), xStale = [], xDump = []; /* HALVES_MARKS_DUMP=<file>: every scanned field with its marked ranges, for marks_propose.js */
if (BYMARKS) L.readJSONL(XFILE).forEach(r => { const k = xKey(r.f, r.id, r.k); if (extraIx.has(k)) throw new Error('marks.extra.jsonl: two rows for ' + r.f + ':' + r.id + '.' + r.k); extraIx.set(k, r); });
const markField = (kind, f, id, k, v, own) => { const key = xKey(f, id, k), x = extraIx.get(key); if (x) xUsed.add(key);
  const m = TC.marks(kind, v, own, x); (m.extraMissing || []).forEach(sp => xStale.push(f + ':' + id + '.' + k + ' «' + sp + '» not found'));
  const lost = m.spans.length ? L.missingSpans(v, m.spans) : []; if (lost.length) throw new Error('marks: the English field ' + f + ':' + id + '.' + k + ' does not hold its own spans ' + lost.map(z => '«' + z + '»').join(' '));
  if (process.env.HALVES_MARKS_DUMP) xDump.push({ f, id, k, kind, text: v, taken: m.taken || [], unmarked: m.unmarked });
  return m; };
if (BYMARKS) {
  const own = { cards: new Map(tCards.map(r => [r.id, [r[K]]])), patterns: new Map(tPat.map(r => [r.id, [r[K], r.ex]])), checks: new Map(tChk.map(r => [r.id, r.o.filter(x => x != null)])),
    practice: new Map(tPr.map(r => [r.id, [].concat(r.a || [], (r.o || []).filter(x => x != null), r.x || [], r.t === 'fill' && r.q != null ? [r.q] : [])])), lessoncards: new Map(), labels: new Map(greet.map(g => [g.id, [g[K]]])) };
  tLessons.forEach(l => { const walk = s => { if (Array.isArray(s)) s.forEach(walk); else if (s && s.cards) s.cards.forEach(cd => own.lessoncards.set(cd.id, [cd[K]])); }; walk(l.sections || []); });
  const scan = (f, rows) => rows.forEach(r => Object.keys(r).forEach(k => { if (k === 'id') return; const vals = Array.isArray(r[k]) ? r[k] : [r[k]];
    vals.forEach((v, j) => { if (v == null || typeof v !== 'string') return; const kk = Array.isArray(r[k]) ? k + '[' + j + ']' : k; const m = markField('text', f, r.id, kk, v, (own[f] && own[f].get(r.id)) || []);
      if (m.spans.length) marks.push({ f, id: r.id, k: kk, spans: m.spans }); if (m.unmarked.length) unmarkedRows.push([f, r.id, kk, [...new Set(m.unmarked)].join(' '), v]); }); }));
  scan('decks', nDecks); scan('groups', nGroups); scan('cards', nCards); scan('dialog', nDlg); scan('examples', nEx); scan('patterns', nPat); scan('sentences', nSen); scan('lessons', nLessons);
  Object.entries(lessonFiles).forEach(([id, h]) => { const m = markField('html', 'body', id, 'body', h, []); if (m.spans.length) marks.push({ f: 'body', id, k: 'body', spans: m.spans }); if (m.unmarked.length) unmarkedRows.push(['body', id, 'body', [...new Set(m.unmarked)].join(' '), '']); });
  scan('checks', nChk); scan('practice', nPr); scan('labels', labels); scan('lessoncards', nLc);
  extraIx.forEach((r, key) => { if (!xUsed.has(key)) xStale.push(r.f + ':' + r.id + '.' + r.k + ' is not a field of the English half'); });
  if (xStale.length) { console.error('export_target: ' + xStale.length + ' stale row(s) or span(s) in ' + path.relative(L.ROOT, XFILE) + ': ' + xStale.slice(0, 12).join(' | ') + (xStale.length > 12 ? ' …' : '')); process.exit(1); }
}

/* ---------- guard: positional check / practice ids (HALVES-SPEC §2) ---------- */
const moved = [];
[['checks.jsonl', tChk], ['practice.jsonl', tPr]].forEach(([f, rows]) => { const old = L.byId(L.readJSONL(path.join(T, f))); if (!old.size) return; rows.forEach(r => { const o = old.get(r.id); if (o && JSON.stringify(o) !== JSON.stringify(r)) moved.push(f.replace('.jsonl', '') + ':' + r.id); }); old.forEach((o, id) => { if (!rows.some(r => r.id === id)) moved.push(f.replace('.jsonl', '') + ':' + id + ' (gone)'); }); });
if (moved.length && !process.argv.includes('--accept-moved')) { console.error('export_target: ' + moved.length + ' check/practice id(s) now hold different ' + TC.name + ' content: ' + moved.slice(0, 8).join(', ') + (moved.length > 8 ? ' …' : '') + '. Re-run with --accept-moved, then review those rows in every native half.'); process.exit(1); }
if (moved.length) console.warn('accepted ' + moved.length + ' moved check/practice id(s): review them in every native half: ' + moved.join(', '));

/* ---------- write ---------- */
fs.rmSync(path.join(N, 'lessons'), { recursive: true, force: true });
L.writeJSON(path.join(T, 'course.json'), tCourse);
const W = (dir, f, rows) => L.writeJSONL(path.join(dir, f + '.jsonl'), rows);
W(T, 'decks', tDecks); W(T, 'cards', tCards); W(T, 'dialog', tDlg); W(T, 'examples', tEx); W(T, 'patterns', tPat); W(T, 'sentences', tSen); W(T, 'lessons', tLessons); W(T, 'checks', tChk); W(T, 'practice', tPr);
L.writeJSON(path.join(N, 'course.json'), nCourse);
W(N, 'decks', nDecks); W(N, 'groups', nGroups); W(N, 'cards', nCards); W(N, 'dialog', nDlg); W(N, 'examples', nEx); W(N, 'patterns', nPat); W(N, 'sentences', nSen); W(N, 'lessons', nLessons); W(N, 'checks', nChk); W(N, 'practice', nPr); W(N, 'labels', labels);
if (nLc.length || fs.existsSync(path.join(N, 'lessoncards.jsonl'))) W(N, 'lessoncards', nLc);
Object.entries(lessonFiles).forEach(([id, h]) => { fs.mkdirSync(path.join(N, 'lessons'), { recursive: true }); fs.writeFileSync(path.join(N, 'lessons', id + '.html'), h); });
if (!fs.existsSync(path.join(N, 'ui.json'))) L.writeJSON(path.join(N, 'ui.json'), {});
if (BYMARKS) {
  W(T, 'marks', marks);
  const tsv = x => String(x).replace(/[\t\n]/g, ' ');
  fs.writeFileSync(path.join(N, 'unmarked.tsv'), '# ' + (TC.unmarkedNote || TC.name + ' words with a diacritic outside every mark') + ' (export_target.js ' + TG + '; not protected by validate.js until the source marks them). Columns: file, id, field, words, text\n' +
    unmarkedRows.map(r => r.map(tsv).join('\t')).join('\n') + (unmarkedRows.length ? '\n' : '') + optReview.map(x => '# option classes to review: ' + tsv(x)).join('\n') + (optReview.length ? '\n' : ''));
}
if (BYMARKS && process.env.HALVES_MARKS_DUMP) L.writeJSONL(process.env.HALVES_MARKS_DUMP, xDump);
const optCount = rows => rows.reduce((a, r) => { (r.o || []).forEach(o => { a[o == null ? 'prose' : 'target']++; }); return a; }, { target: 0, prose: 0 });
if (BYMARKS) { const by = {}; unmarkedRows.forEach(r => { const k = r[0] === 'body' ? 'body' : r[0] + '.' + r[2].replace(/\[\d+\]$/, ''); by[k] = (by[k] || 0) + 1; });
  console.log('marks: ' + marks.length + ' native fields hold ' + marks.reduce((a, r) => a + r.spans.length, 0) + ' target spans (target/' + TG + '/marks.jsonl)');
  console.log('unmarked: ' + unmarkedRows.length + ' native fields hold ' + unmarkedRows.reduce((a, r) => a + r[3].split(' ').length, 0) + ' distinct-per-field target-looking words outside any mark (native/en/' + TG + '/unmarked.tsv): ' + Object.entries(by).map(([k, v]) => k + ' ' + v).join(', '));
  if (optReview.length) console.log('option classes to review (' + optReview.length + '): ' + optReview.join(' | ')); }
console.log(JSON.stringify({ target: TG, source: tCourse.exportedFrom.file, sha256_16: srcHash, decks: tDecks.length, cards: tCards.length, notes: nCards.filter(x => x.note).length, groups: groups.length, dialog: tDlg.length, examples: tEx.length, patterns: tPat.length, lessons: tLessons.length, exampleRows: exRows, sentences: tSen.length, checks: tChk.length, practice: tPr.length, labels: labels.length, lessonDecks: ldSeen.size, lessonCards: ldCards, tileSets, tileHints, checkOptions: optCount(tChk), mcOptions: optCount(tPr.filter(p => p.t === 'mc')), hints: { target: tPr.filter(p => p.hint && !nPr.find(n => n.id === p.id).hint).length, split: tPr.filter(p => p.hint && p.hint.sep).length, native: nPr.filter(n => n.hint && !tPr.find(p => p.id === n.id).hint).length }, uiKeys: uiKeys.length, out: path.relative(L.ROOT, DIR) }));
