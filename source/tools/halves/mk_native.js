#!/usr/bin/env node
/* Lang App · two halves: start a new native half for a course (Korean by default), split into 4 work files for parallel writers.
   Usage:
     node tools/halves/mk_native.js <native> [--writers 4] [--force]   create native/<n>/ko/work/ from native/en/ko (English = source column, target column empty)
     node tools/halves/mk_native.js <native> --merge                    fold the filled work files into native/<n>/ko/*.jsonl + lessons/*.html (then run validate.js)
     node tools/halves/mk_native.js <native> --target zh [...]          the same for another target half (native/<n>/zh/ from native/en/zh). For vi + zh the
                                                                       Hán Việt reading rows (hv / hvUse / trad, card rows) are added and course.json gets
                                                                       "readings": "hanviet" (--readings none turns that off); wU.jsonl holds the ui.json strings.
   Work files (native/<n>/ko/work/):
     wN.jsonl       one row per translatable field: {"f":file,"id":id,"k":field,"src":English,"tgt":"",[ "rw":reason ],[ "pre":1 ]}
                    k "o[2]" = option slot 2; "pre":1 = no Latin letters in the source (Korean / symbols only): tgt is prefilled with it, keep it as is.
                    "rw" = written for an English reader (sound comparisons, English grammar contrasts): REWRITE for the new reader, do not translate.
     wN/lessons/<id>.src.html   the English lesson body to work from;   wN/lessons/<id>.html   your body (starts empty)
     README.md      what to rewrite rather than translate, the rules every writer keeps, and who has what (with word counts).
     wT.jsonl       the Korean trainers' text (native/en/ko/trainer.json flattened, one writer): {"f":"trainer","id":"gloss.CONN.그래서","src":English,"tgt":""}; --merge nests the
                    filled rows into native/<n>/ko/trainer.json (only when at least one row is filled; hangul.alt is authored there directly).
   HALVES_DIR=<dir> works on another copy. Format: docs/HALVES-SPEC.md */
'use strict';
const fs = require('fs'), path = require('path');
const L = require('./lib.js');
const { loadHalves } = require('./assemble.js');

const args = process.argv.slice(2), VALUED = ['--writers', '--target', '--readings'];
const nat = args.find((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));
const flag = f => args.includes(f), opt = (f, d) => { const i = args.indexOf(f); return i >= 0 ? +args[i + 1] : d; }, optS = (f, d) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] != null ? String(args[i + 1]) : d; };
if (!nat || nat === 'en') { console.error('usage: node tools/halves/mk_native.js <native> [--target ko|zh] [--writers 4] [--force] | --merge   (native must not be en)'); process.exit(2); }
const DIR = process.env.HALVES_DIR || L.HALVES, TGT = optS('--target', 'ko');
const TC = L.target(TGT), EXTRA = new Set(TC.cardExtras || []);
/* Hán Việt rows: a Vietnamese half of a Chinese course (docs/briefs/vi-zh-design.md §5) */
const READINGS = TGT === 'zh' && nat === 'vi' && optS('--readings', 'hanviet') !== 'none' ? 'hanviet' : null;
const HV_CARD = /^[㐀-䶿一-鿿豈-﫿]{1,4}$/; /* a card that is a word of 1-4 characters must get a Hán Việt decision (validate.js) */
const E = loadHalves('en', TGT, DIR), t = E.t, en = E.n;
const N = path.join(DIR, 'native', nat, TGT), WK = path.join(N, 'work');
const FILES = ['decks', 'groups', 'cards', 'dialog', 'examples', 'patterns', 'sentences', 'lessons', 'checks', 'practice', 'labels'];

/* English-reader content: flagged "rw" (rewrite) */
const RW = [
  [/\bas in\b/i, 'English sound comparison ("as in …")'],
  [/\bNo English\b|\bnot in English\b|\bEnglish has no\b/i, 'says English lacks the sound/feature'],
  [/\bfrom English\b|\bEnglish loan|\bKonglish\b/i, 'English loanword explanation'],
  [/\bEnglish\b/, 'mentions English'],
  [/\brhymes?\b/i, 'English rhyme'],
  [/\blike (the )?['"‘“]?[a-z]+['"’”]? in ['"‘“]?[a-z]/i, 'English sound comparison ("like the x in …")'],
  [/\b(sounds?|said|pronounced) like ['"‘“]?[a-z]+['"’”]?(\W|$)/i, 'English sound comparison ("sounds like …")'],
  [/\((uh|oo|ee|ah|eh|ay|aw)\)/, 'English-spelling sound hint in brackets'],
  [/\b(drill|trainer|conjugator|stroke order|Tap a letter|replay)\b/i, 'points at an app trainer or drill: these exist only once the trainer text (wT.jsonl) is written; check the feature is on before keeping the mention'],
  [/\b(a|an|the)\b.{0,20}\bno (articles|a\/the)|\bno a\/the\b/i, 'English article contrast']
];
const REWRITE_LESSONS = { hangul: 'vowel/consonant table glossed with English sounds (eo (uh), u (oo), i (ee))', 'sound-changes': 'explains spelling vs sound with English respellings', nouns: 'built on "no a/the, no plural -s"', isseoyo: 'the "is" table contrasts English be with 이에요/있어요', verbbasics: 'English infinitive "to …" framing of the dictionary form', sov: '"English is SVO" contrast throughout', particles: 'particles explained against English prepositions/word order', numbers: 'English counting comparisons', 'pronouns-questions': 'English pronoun/question-word contrasts' };
const rwOf = s => { for (const [rx, why] of RW) if (rx.test(String(s))) return why; return null; };

const GENERIC_UI = ['Report a problem on this page', 'Count my visits anonymously', 'Play']; /* shown in every course; missing from some interface dictionaries (uiRows) */
if (flag('--merge')) merge(); else make();

function make() {
  if (fs.existsSync(WK) && !flag('--force')) { console.error('mk_native: ' + path.relative(L.ROOT, WK) + ' exists (writers may have work in it). Use --merge, or --force to recreate it.'); process.exit(1); }
  fs.rmSync(WK, { recursive: true, force: true });
  /* rows per field */
  const row = (f, id, k, src) => { const r = { f, id, k, src, tgt: '' }; if (!/[A-Za-z]/.test(src)) { r.tgt = src; r.pre = 1; } const why = rwOf(src); if (why && !r.pre) r.rw = why; return r; };
  const rowsOf = (f, rec) => { const out = []; Object.keys(rec).forEach(k => { if (k === 'id') return; const v = rec[k]; if (Array.isArray(v)) v.forEach((x, j) => { if (x != null) out.push(row(f, rec.id, k + '[' + j + ']', String(x))); }); else if (v != null && String(v) !== '') out.push(row(f, rec.id, k, String(v))); }); return out; };
  const wc = rows => rows.reduce((a, r) => a + (r.pre ? 0 : L.words(r.src)), 0);
  /* units, in course order: meta, cards one by one, dialog/examples/patterns, then whole lessons (meta + body + its example glosses + checks + practice) */
  const units = [];
  const meta = [row('course', 'course', 'name', en.course.name || '')].concat(en.groups.flatMap(r => rowsOf('groups', r)), en.labels.flatMap(r => rowsOf('labels', r)), en.decks.flatMap(r => rowsOf('decks', r)));
  units.push({ name: 'course name, groups, labels (titles, greetings, goals, plans, pause sets, idioms), deck labels + descriptions', rows: meta, lessons: [] });
  const deckOf = {}; t.cards.forEach(c => deckOf[c.id] = c.deck);
  /* Hán Việt rows (READINGS): hvUse / hv / trad right after the card's own rows, never prefilled; each decision weighs like 6 words in the split (it needs a lookup) */
  const tcard = L.byId(t.cards);
  const hvRows = id => { const c = tcard.get(id); if (!READINGS || !c || !HV_CARD.test(c[TC.field])) return []; const z = c[TC.field];
    const enNote = (en.cards.find(r => r.id === id) || {}).note; /* a card with no English note still needs a note row: same / shifted readings must appear in the note */
    return (String(enNote || '').trim() ? [] : [{ f: 'cards', id, k: 'note', src: '', tgt: '', why: 'no English note: write one if hvUse is same or shifted (it must show the reading), otherwise leave it empty' }])
      .concat([{ f: 'cards', id, k: 'hvUse', src: z + ' · ' + c.rom, tgt: '', opts: 'same | shifted | none | skip' }, { f: 'cards', id, k: 'hv', src: z, tgt: '' }, { f: 'cards', id, k: 'trad', src: z, tgt: '' }]); };
  en.cards.forEach(r => { const hv = hvRows(r.id); units.push({ name: 'card ' + r.id, card: r.id, deck: deckOf[r.id], rows: rowsOf('cards', r).concat(hv), lessons: [], extraWords: hv.length ? 6 : 0 }); });
  ['dialog', 'examples', 'patterns'].forEach(f => en[f].forEach(r => units.push({ name: f + ' ' + r.id, kind: f, rows: rowsOf(f, r), lessons: [] })));
  const senFirst = {}; t.lessons.forEach(l => (L.tokens(en.bodies[l.id]) || []).forEach(x => { const m = x.match(/^\{\{ex:(.*)\}\}$/); if (m && !senFirst[m[1]]) senFirst[m[1]] = l.id; }));
  t.lessons.forEach((l, li) => {
    const rows = [].concat(rowsOf('lessons', en.lessons.find(r => r.id === l.id)), en.sentences.filter(s => senFirst[s.id] === l.id).flatMap(s => rowsOf('sentences', s)),
      en.checks.filter(c => t.checks.find(x => x.id === c.id).lesson === l.id).flatMap(c => rowsOf('checks', c)), en.practice.filter(p => t.practice.find(x => x.id === p.id).lesson === l.id).flatMap(p => rowsOf('practice', p)));
    units.push({ name: 'lesson ' + (li + 1) + ' ' + l.id, lesson: l.id, n: li + 1, rows, lessons: [l.id], bodyWords: L.words(en.bodies[l.id]) });
  });
  en.sentences.filter(s => !senFirst[s.id]).forEach(s => units.push({ name: 'sentence ' + s.id, rows: rowsOf('sentences', s), lessons: [] }));
  units.forEach(u => u.words = wc(u.rows) + (u.bodyWords || 0) + (u.extraWords || 0));
  /* contiguous split into W parts minimising the largest part (linear partition) */
  const W = opt('--writers', 4), w = units.map(u => u.words), n = w.length, pre = [0]; w.forEach(x => pre.push(pre[pre.length - 1] + x));
  const best = Array.from({ length: W + 1 }, () => new Array(n + 1).fill(Infinity)), cut = Array.from({ length: W + 1 }, () => new Array(n + 1).fill(0)); best[0][0] = 0;
  for (let k = 1; k <= W; k++) for (let i = 1; i <= n; i++) for (let j = k - 1; j < i; j++) { const v = Math.max(best[k - 1][j], pre[i] - pre[j]); if (v < best[k][i]) { best[k][i] = v; cut[k][i] = j; } }
  const bounds = []; for (let k = W, i = n; k > 0; k--) { const j = cut[k][i]; bounds.unshift([j, i]); i = j; }
  const plan = [];
  bounds.forEach(([a, b], k) => {
    const name = 'w' + (k + 1), us = units.slice(a, b), rows = us.flatMap(u => u.rows), lessons = us.flatMap(u => u.lessons);
    L.writeJSONL(path.join(WK, name + '.jsonl'), rows);
    lessons.forEach(id => { const d = path.join(WK, name, 'lessons'); fs.mkdirSync(d, { recursive: true }); fs.writeFileSync(path.join(d, id + '.src.html'), en.bodies[id]); fs.writeFileSync(path.join(d, id + '.html'), ''); });
    const cards = us.filter(u => u.card), kinds = [...new Set(us.filter(u => u.kind).map(u => u.kind))], ls = us.filter(u => u.lesson);
    const desc = [us[0].name.startsWith('course') ? 'course/groups/labels/decks' : null, cards.length ? 'cards ' + cards[0].card + '–' + cards[cards.length - 1].card + ' (' + cards.length + ')' : null, kinds.length ? kinds.join('/') : null,
      ls.length ? 'lessons ' + ls[0].n + '–' + ls[ls.length - 1].n + ' (' + ls[0].lesson + ' … ' + ls[ls.length - 1].lesson + '): bodies + titles + example glosses + checks + practice' : null, us.some(u => u.name.startsWith('sentence ')) ? 'unused example glosses' : null].filter(Boolean).join('; ');
    plan.push({ name, desc, rows: rows.length, pre: rows.filter(r => r.pre).length, rw: rows.filter(r => r.rw).length, words: us.reduce((x, u) => x + u.words, 0), bodyWords: us.reduce((x, u) => x + (u.bodyWords || 0), 0), lessons, ...(READINGS ? { hvCards: rows.filter(r => r.k === 'hv').length } : {}) });
  });
  /* Korean trainers: native/en/ko/trainer.json flattened into its own work file (one writer); hangul.alt / defaultMode are authored, not translated, and booleans stay as in English */
  const trRows = trainerRows(); if (trRows.length) L.writeJSONL(path.join(WK, 'wT.jsonl'), trRows);
  /* one gloss per sentence across writers (non-Korean targets): every target sentence that occurs in more than one place, with the writer who glosses each */
  if (TGT !== 'ko') {
    const K = TC.field, who = {}; plan.forEach(p => L.readJSONL(path.join(WK, p.name + '.jsonl')).forEach(r => { who[r.f + ':' + r.id] = who[r.f + ':' + r.id] || p.name; }));
    const occ = new Map(), add = (txt, where, wr) => { const k = String(txt).replace(/[。！？，、\s]+$/u, '').trim(); if (!L.target(TGT).has(k)) return; if (!occ.has(k)) occ.set(k, []); occ.get(k).push(where + ' (' + (wr || '?') + ')'); };
    t.cards.forEach(c => add(c[K], 'cards:' + c.id + ' meaning', who['cards:' + c.id]));
    t.examples.forEach(e => add(e[K], 'examples:' + e.id, who['examples:' + e.id]));
    t.dialog.forEach(g => { add(g.a, 'dialog:' + g.id + ' line A', who['dialog:' + g.id]); add(g.b, 'dialog:' + g.id + ' line B', who['dialog:' + g.id]); });
    t.sentences.forEach(x => add(x[K], 'sentences:' + x.id, who['sentences:' + x.id]));
    const rep = [...occ.entries()].filter(([, l]) => l.length > 1).sort((a, b) => b[1].length - a[1].length);
    fs.writeFileSync(path.join(WK, 'REPEATS.md'), '# The same Chinese in several places: one Vietnamese gloss each\n\nGenerated by mk_native.js. Each line: the Chinese (end punctuation ignored), then every row that glosses it and the writer who owns that row. The FIRST writer listed sets the gloss in their own `NOTES-wN.md` (one line: Chinese → gloss); the others read every `NOTES-w*.md` and copy it. Each writer writes only their own NOTES file (four writers work at once). A dialogue line is glossed inside the dialogue\'s " / " translation.\n\n' + rep.map(([k, l]) => '- ' + k + ': ' + l.join(' · ')).join('\n') + '\n');
    plan.forEach(p => { const f = path.join(WK, 'NOTES-' + p.name + '.md'); if (!fs.existsSync(f)) fs.writeFileSync(f, '# ' + p.name + ': glosses and decisions other writers must reuse (only ' + p.name + ' writes this file)\n\nFormat: `Chinese → Vietnamese gloss · note`. Before glossing a repeated sentence (REPEATS.md) or a recurring phrase, read every NOTES-w*.md.\n\n'); });
    console.log('  REPEATS.md: ' + rep.length + ' Chinese sentences or words occur in more than one place');
  }
  /* interface overrides for a non-Korean target (wU.jsonl → ui.json at --merge) */
  const uRows = TGT === 'ko' ? [] : uiRows(); if (uRows.length) L.writeJSONL(path.join(WK, 'wU.jsonl'), uRows);
  /* skeleton native half: course.json + empty ui.json (rows arrive with --merge) */
  if (!fs.existsSync(path.join(N, 'course.json'))) L.writeJSON(path.join(N, 'course.json'), Object.assign({ native: nat, name: '', brand: en.course.brand }, READINGS ? { readings: READINGS } : {}));
  if (!fs.existsSync(path.join(N, 'ui.json'))) L.writeJSON(path.join(N, 'ui.json'), {});
  fs.writeFileSync(path.join(WK, 'README.md'), TGT === 'ko' ? readme(plan) + trainerReadme(trRows) : readmeTarget(plan, uRows));
  L.writeJSON(path.join(WK, 'plan.json'), plan);
  console.log('work files in ' + path.relative(L.ROOT, WK));
  plan.forEach(p => console.log('  ' + p.name + '  ' + String(p.words).padStart(5) + ' words (' + p.bodyWords + ' in lesson bodies)  ' + String(p.rows).padStart(4) + ' rows, ' + p.pre + ' prefilled, ' + p.rw + ' rewrite-flagged  · ' + p.desc));
  if (trRows.length) console.log('  wT  ' + String(trRows.reduce((a, r) => a + (r.pre ? 0 : L.words(r.src)), 0)).padStart(5) + ' words  ' + String(trRows.length).padStart(4) + ' rows, ' + trRows.filter(r => r.pre).length + ' prefilled  · Korean trainers (trainer.json)');
  if (uRows.length) console.log('  wU  ' + String(uRows.length).padStart(5) + ' interface strings (ui.json)');
  if (READINGS) console.log('  Hán Việt rows (hvUse / hv / trad) on ' + plan.reduce((a, p) => a + p.hvCards, 0) + ' cards');
}

function merge() {
  if (!fs.existsSync(WK)) { console.error('mk_native: no work files at ' + WK); process.exit(1); }
  const shape = {}; FILES.forEach(f => shape[f] = L.byId(en[f]));
  const out = {}; FILES.forEach(f => out[f] = new Map());
  const course = fs.existsSync(path.join(N, 'course.json')) ? L.readJSON(path.join(N, 'course.json')) : { native: nat, brand: en.course.brand };
  let filled = 0, empty = 0, bodies = 0; const bad = [];
  fs.readdirSync(WK).filter(f => /^w\d+\.jsonl$/.test(f)).sort().forEach(wf => L.readJSONL(path.join(WK, wf)).forEach(r => {
    const tgt = r.tgt == null ? '' : String(r.tgt);
    if (!tgt.trim()) { empty++; return; } filled++;
    if (r.f === 'course') { course[r.k] = tgt; return; }
    const ref = shape[r.f] && shape[r.f].get(r.id); if (!ref) { bad.push(wf + ': unknown ' + r.f + ':' + r.id); return; }
    const m = String(r.k).match(/^(\w+)(?:\[(\d+)\])?$/); if (!m || (!(m[1] in ref) && !(r.f === 'cards' && EXTRA.has(m[1]) && m[2] == null))) { bad.push(wf + ': unknown field ' + r.k + ' for ' + r.id); return; }
    const o = out[r.f].get(r.id) || { id: r.id }; out[r.f].set(r.id, o);
    if (Array.isArray(r._waive)) o._waive = [...new Set((o._waive || []).concat(r._waive))]; if (r._note) o._note = (o._note ? o._note + ' | ' : '') + r._note; /* translator waiver / comment travel with the row */
    if (m[2] != null) { if (!Array.isArray(o[m[1]])) o[m[1]] = ref[m[1]].map(() => null); o[m[1]][+m[2]] = tgt; } else o[m[1]] = tgt;
  }));
  /* fields that are empty in English stay empty (e.g. a card with no note) */
  FILES.forEach(f => out[f].forEach((o, id) => { const ref = shape[f].get(id); Object.keys(ref).forEach(k => { if (k !== 'id' && !(k in o) && (ref[k] === '' || ref[k] == null)) o[k] = ref[k]; }); }));
  FILES.forEach(f => L.writeJSONL(path.join(N, f + '.jsonl'), en[f].filter(r => out[f].has(r.id)).map(r => { const o = out[f].get(r.id), s = { id: r.id }; Object.keys(r).forEach(k => { if (k !== 'id' && k in o) s[k] = o[k]; }); if (f === 'cards') EXTRA.forEach(k => { if (k in o) s[k] = o[k]; }); if (o._waive) s._waive = o._waive; if (o._note) s._note = o._note; return s; })));
  L.writeJSON(path.join(N, 'course.json'), course);
  mergeUi();
  fs.readdirSync(WK).filter(f => /^w\d+$/.test(f)).forEach(w => { const d = path.join(WK, w, 'lessons'); if (!fs.existsSync(d)) return; fs.readdirSync(d).filter(f => f.endsWith('.html') && !f.endsWith('.src.html')).forEach(f => { const h = fs.readFileSync(path.join(d, f), 'utf8'); if (!h.trim()) return; fs.mkdirSync(path.join(N, 'lessons'), { recursive: true }); fs.writeFileSync(path.join(N, 'lessons', f), h); bodies++; }); });
  console.log('merged into ' + path.relative(L.ROOT, N) + ': ' + filled + ' fields filled, ' + empty + ' still empty, ' + bodies + ' lesson bodies' + (bad.length ? '\n  ' + bad.join('\n  ') : ''));
  mergeTrainer();
  console.log('next: node tools/halves/validate.js ' + nat + ' ' + TGT);
}

/* ---------- interface overrides (non-Korean targets): work/wU.jsonl <-> native/<n>/<t>/ui.json ----------
   Rows: the target's uiKeys (target course.json: strings the engine builds from the target's English name, the static grammar-search example, the "#tag"
   chips) plus strings every course shows that the learner's interface dictionary lacks. "dict" = what the interface dictionary says today (written for the
   <n>-en course), "ref" = the Korean course's override in native/<n>/ko/ui.json (the established wording to follow). */
function uiRows() {
  const keys = (t.course.uiKeys || []).slice(), dictF = path.join(L.ROOT, 'tools', 'i18n', nat, 'ui.json'), koF = path.join(DIR, 'native', nat, 'ko', 'ui.json');
  const dict = fs.existsSync(dictF) ? (L.readJSON(dictF).exact || {}) : {}, ko = fs.existsSync(koF) ? L.readJSON(koF) : {}, val = v => v == null ? null : typeof v === 'object' ? v.t : v;
  GENERIC_UI.forEach(k => { if (val(dict[k]) == null && !keys.includes(k)) keys.push(k); });
  const tn = (keys[0] || '').replace(/ \(required\)$/, '');
  return keys.map(k => { const r = { f: 'ui', id: k, src: k, tgt: '' }; const d = val(dict[k]); if (d != null) r.dict = d; const kk = tn ? k.split(tn + ' (').join('Korean (').split(tn + ', ').join('Korean, ') : k; if (ko[kk] != null) r.ref = ko[kk]; else if (ko[k] != null) r.ref = ko[k]; return r; });
}
function mergeUi() {
  const f = path.join(WK, 'wU.jsonl'); if (!fs.existsSync(f)) return;
  const rows = L.readJSONL(f).filter(r => r.f === 'ui' && r.tgt != null && String(r.tgt).trim()); if (!rows.length) { console.log('ui: wU.jsonl has no filled rows; ui.json left as it is'); return; }
  const F = path.join(N, 'ui.json'), U = fs.existsSync(F) ? L.readJSON(F) : {}; rows.forEach(r => { U[r.id] = String(r.tgt); }); L.writeJSON(F, U);
  console.log('ui: ' + rows.length + ' interface string(s) merged into ' + path.relative(L.ROOT, F));
}
/* README for a non-Korean target (written for zh; the Hán Việt section only when READINGS) */
function readmeTarget(plan, uRows) {
  const lang = ({ vi: 'Vietnamese', es: 'Spanish', ja: 'Japanese', ko: 'Korean', th: 'Thai', id: 'Indonesian', tl: 'Tagalog' })[nat] || nat;
  const tname = TC.name === 'Chinese' ? 'Mandarin Chinese' : TC.name;
  return `# ${tname} course for ${lang} speakers (${nat}-${TGT}) — work files (generated by tools/halves/mk_native.js ${nat} --target ${TGT})

You write the **native half**: everything the learner reads in ${lang}. The ${TC.name} half (characters, pinyin, sentences, answers, quiz options in Chinese or pinyin) is fixed in \`tools/halves/target/${TGT}/\` (read-only) and is not in your files.
Authorities: the pair profile \`docs/profiles/${nat}-${TGT}.md\` and the writer brief \`docs/briefs/${nat}-${TGT}-writer.md\`. This file is the format.

## Who has what
| Writer | Words | Rows | Prefilled | Rewrite-flagged |${READINGS ? ' Hán Việt cards |' : ''} Scope |
|---|---|---|---|---|${READINGS ? '---|' : ''}---|
${plan.map(p => `| ${p.name} | ${p.words} | ${p.rows} | ${p.pre} | ${p.rw} |${READINGS ? ' ' + p.hvCards + ' |' : ''} ${p.desc} |`).join('\n')}
${uRows.length ? `| wU | — | ${uRows.length} | 0 | 0 |${READINGS ? ' — |' : ''} interface strings → \`ui.json\` (w1) |
` : ''}
## Row format (\`wN.jsonl\`)
* One row per field: \`{"f":file,"id":id,"k":field,"src":English,"tgt":""}\`. Fill \`tgt\`. Never edit \`f\`, \`id\`, \`k\`, \`src\`.
* \`"pre":1\`: the source has no Latin letters (Chinese, digits or symbols only); \`tgt\` is prefilled. Leave it, except punctuation or number format (\`1,005\` → \`1.005\` in Vietnamese).
* \`"rw":"…"\`: written for an English reader. **Rewrite** it for a ${lang} reader; do not translate it word for word.
* \`k\` = \`o[2]\`: quiz option 2. Only prose options are listed; Chinese and pinyin options are fixed in the target half.
* Lesson bodies: \`wN/lessons/<id>.src.html\` is the English; write \`wN/lessons/<id>.html\` (starts empty). Keep the HTML structure (\`<h3>\`, \`<div class="tip">\`, \`<div class="tbl"><table>\`, \`<b>\`, \`<i>\`) and every \`{{ex:${TGT}.s0123}}\` token exactly, in the same order: it is a Chinese example row (characters + pinyin are injected; its gloss is a \`sentences\` row in a work file).
${READINGS ? `
## Hán Việt rows (cards that are words of 1–4 characters)
Each such card has three extra rows after its \`meaning\` / \`note\` rows:
* \`k:"hvUse"\` (\`src\` = characters · pinyin): exactly one of **same** (modern Vietnamese uses this Sino-Vietnamese word with the same meaning: 学生 → học sinh), **shifted** (Vietnamese uses it with another meaning: a false friend), **none** (Vietnamese does not use the word; the reading is only a memory aid), **skip** (no reading worth showing: particles, interjections, sound loans such as 咖啡).
* \`k:"hv"\`: the reading, **one syllable per character, in order**, NFC, separated by spaces, lowercase except names (\`học sinh\`, \`Bắc Kinh\`). It is the **Hán Việt** reading (恩 = \`ân\`), never a later vernacular form (\`ơn\` of cảm ơn): mention such a form in the note instead. Empty when hvUse is skip. Every syllable must come from a dictionary page you opened (web search); **never guess**. A wrong reading is the worst error in this course.
* \`k:"trad"\`: the whole word in Traditional characters, only when it differs from the Simplified **and** your note prints it (學生). Otherwise leave it empty.
* For **same** and **shifted** the card \`note\` must contain the \`hv\` text exactly (the validator checks it). If the card has no English note, its \`note\` row has an empty \`src\`: write the note there.\n* Chinese the note may add: the characters of the card itself (one by one, to pair each with its syllable: 学 *học*, 生 *sinh*) and the row's \`trad\`. Nothing else.
` : ''}
## Rules the validator enforces (\`node tools/halves/validate.js ${nat} ${TGT}\`)
1. **Every Chinese character run in the English stays, unchanged.** Your text must contain the same set of Han runs as \`src\` (\`谢谢\`, \`不\`, \`个\`). Do not drop any. Adding Chinese is an error in prompts, options, glosses and translations (it would change the task). It is allowed only in card notes (the card's own characters and the row's \`trad\`), and, as a warning the reviewer checks, in lesson bodies, deck descriptions, pattern meanings and \`why\` explanations. If a sentence truly must drop or add a run elsewhere, add \`"_waive":["hangul"]\` (the waiver name is historical; it covers ${TC.script} runs) and explain it in \`"_note"\`.
2. **Pinyin stays exactly as written** (\`Měiguórén\`, \`nǐ hǎo\`): the validator warns when a pinyin word with ¯ or ˇ from the English is missing.
3. Keep blanks (\`__\`, \`___\`), the single \`" / "\` in dialogue translations, and no \`{\` \`}\` or \`|\` in example glosses.
4. Nothing empty where the English has text. Deck labels unique and never "My phrases".
5. Lengths: prompts, explanations and hints ≤ 400 characters; options ≤ 200; two options of one question never identical.
6. In lesson bodies never write a space + \`on\` + letters + \`=\` (the app strips it as an event attribute: write \`ông: …\`, not \`ông = …\`), and never \`javascript:\`, \`<img>\`, \`<svg>\`, \`<script>\`, \`<style>\`.
${uRows.length ? `
## Interface strings (\`wU.jsonl\`, w1)
These go into \`ui.json\` and override the ${lang} interface dictionary inside this course only. \`dict\` = what the dictionary shows today (written for the course that teaches English), \`ref\` = the wording the Korean course for ${lang} speakers chose for the matching Korean string: follow its terms. Fill \`tgt\` for every row.
` : ''}
**Self-check:** \`node tools/halves/dryrun.js ${nat} ${TGT} wN\` merges a copy of the half in a temp folder, validates it, and lists only your rows' errors, warnings and empty rows. It never touches the real half.\n\nWhen all writers are done, the lead runs \`node tools/halves/mk_native.js ${nat} --target ${TGT} --merge\`, then the validator.
`;
}

function featureRefs() { const out = []; t.lessons.forEach(l => { const m = String(en.bodies[l.id]).replace(/<[^>]+>/g, ' ').match(/[^.]*\b(drill|trainer|conjugator|Tap a letter|replay)\b[^.]*/gi); if (m) m.forEach(x => out.push(l.id + ': ' + x.trim().replace(/\s+/g, ' ').slice(0, 90))); }); return out; }
function readme(plan) {
  const lang = ({ es: 'Spanish', ceb: 'Cebuano', tl: 'Tagalog', zh: 'Chinese', ja: 'Japanese', vi: 'Vietnamese', th: 'Thai', id: 'Indonesian', fr: 'French', de: 'German', pt: 'Portuguese', ru: 'Russian', hi: 'Hindi', ar: 'Arabic' })[nat] || nat;
  return `# Korean course for ${lang} speakers (${nat}-ko) — writer brief (generated by tools/halves/mk_native.js)

You write the **native half** of the Korean course: everything the learner reads in their own language.
The Korean half (cards, romanisation, sentences, answers) is fixed and is not in your files. You cannot change a Korean answer, and you must not try to.

## Your files
| Writer | Words | Rows | Prefilled | Rewrite-flagged | Scope |
|---|---|---|---|---|---|
${plan.map(p => `| ${p.name} | ${p.words} | ${p.rows} | ${p.pre} | ${p.rw} | ${p.desc} |`).join('\n')}

* \`wN.jsonl\`: one row per field. Fill \`"tgt"\`. Never edit \`f\`, \`id\`, \`k\` or \`src\`.
  * \`"pre":1\`: the source has no Latin letters (Korean or symbols only). \`tgt\` is already filled. Leave it unless the punctuation must change.
  * \`"rw":"…"\`: this text was written for an English speaker. **Rewrite it** for a ${lang} reader (see below). Do not translate it word for word.
  * \`k\` = \`o[2]\`: answer option 2 of a quiz. Only the prose options are listed; Korean options are fixed in the Korean half.
* \`wN/lessons/<id>.src.html\`: the English lesson. Write yours to \`wN/lessons/<id>.html\` (it starts empty).
  Keep the HTML structure (\`<h3>\`, \`<div class="tip">\`, \`<div class="tbl"><table>\`, \`<b>\`, \`<i>\`) and every token **exactly**, in the same order:
  \`{{ex:ko.s0123}}\` is a Korean example row (Korean + romanisation are injected; its gloss is a \`sentences\` row in a work file), \`{{strokes:ㄱ}}\` is a stroke-order diagram.
* When you are done, the lead runs \`node tools/halves/mk_native.js ${nat} --merge\`, then \`node tools/halves/validate.js ${nat} ko\`.

## Rules the validator enforces
1. **Every Korean string inside your text stays exactly as it is.** The set of Hangul pieces in your text must equal the English source's. If a note says *Polite form of 고마워*, your note contains 고마워, unchanged. Do not add new Korean words either. If a sentence truly needs one, add \`"_waive":["hangul"]\` to that work row and explain it in \`"_note"\` (both travel through the merge). For a lesson body, put the waiver on that lesson's \`lessons\` title row.
2. Keep blanks (\`__\`, \`___\`) and the single \`" / "\` that separates the two lines of a dialogue translation.
3. Nothing may be left empty if the English has text. No \`{\` or \`}\` in example glosses.
4. Deck labels must be unique and must not be "My phrases" (the app adds its own deck under that name). Avoid starting a label with "Hangul" or "Pronunciation" in English.
5. Length: quiz prompts, explanations and hints of at most 400 characters; options of at most 200. Two options of one question must never become identical in translation.
6. In lesson bodies, never write a space followed by \`on\` + letters + \`=\` (for example \`once = …\` or \`one = 하나\`). The app removes that as an HTML event attribute. Write \`once: …\` instead. Also never use \`javascript:\`, \`<img>\`, \`<svg>\`, \`<script>\` or \`<style>\`.

## Rewrite, do not translate
These were built on English. A ${lang} reader needs the point made from **their** language, or without any language comparison.
* **Sound comparisons on cards** (Hangul vowels and consonants, pronunciation tips): meanings like "a as in father", "uh as in up", "ee as in see", "ng as in 'sing'". Notes like "No English match", "softer than English p", "from English …". Use a ${lang} word with the same sound when one exists. Otherwise describe the mouth position. Never compare with English.
* **Loanwords "from English"** (컴퓨터, 커피, 아이스 아메리카노 …): say what the word comes from in terms a ${lang} reader knows. "Konglish" jokes need a new angle.
* **Lesson passages built on English contrasts:**
${Object.entries(REWRITE_LESSONS).map(([id, why]) => `  * \`${id}\`: ${why}.`).join('\n')}
  * Mentions of app trainers (Hangul, number and conjugation trainers, sound-change, polite ↔ casual and Build drills): ${featureRefs().map(x => '`' + x + '`').join(', ') || 'none found'}. They exist only when the trainer text (\`wT.jsonl\`, below) is written for this course; until then drop them or point to Lessons / Practice / Review instead. Name app tabs with the words the ${lang} interface uses.
  * Also: any \`<td>\` that glosses a vowel with an English spelling (\`eo (uh)\`, \`u (oo)\`, \`i (ee)\`), and the rows flagged \`rw\` in your file.
* **Grammar contrasts:** "English is SVO", "Korean has no a/the and no plural -s", "English uses 'is' for both" (이에요 vs 있어요), "to + verb" for the dictionary form, and English prepositions as the model for particles. Restate each against ${lang} grammar. Where ${lang} works like Korean (for example verb-final order, no articles, or topic marking), say so: that helps the learner.
* **Romanisation caveat (Revised Romanization).** The romanisation under every Korean line is the official Revised Romanization, written for English-style reading. It is shared by every course and you cannot change it. Readers of other languages misread some letters, so the first lessons must say how to read them **in ${lang}**:
  * For Spanish readers: **j** is like the English *j* (or the *y* of Rioplatense *yo*), never the Spanish *jota*. **h** is a light breath, never silent. **eo** is one open vowel (close to the *o* of Spanish *por*, said with relaxed lips). **eu** is one vowel, said like *u* with the lips spread. **ae** and **e** both sound like the Spanish *e*. **ch** is like Spanish *ch*. Doubled letters (**kk, tt, pp, ss, jj**) are tense sounds, not long ones.
  * Put this in the \`hangul\` and \`sound-changes\` bodies, and in the Hangul deck descriptions.
* **Culture and examples:** names and places (Kii, 미국 "the US", 미국에서 왔어요 "I'm from the US") stay in the Korean half. Your gloss may say "I'm from the US" exactly. If a lesson tells the learner to substitute their own country, name a country that fits a ${lang} reader in the prose only.
`;
}

/* ---------- Korean trainers: native/en/ko/trainer.json <-> work/wT.jsonl (docs/TRAINERS-PLAN.md §5.4, HALVES-SPEC §10.2) ---------- */
/* one row per English trainer string; the id is the dotted key path (the validator addresses trainer keys the same way). Skipped: _notes, hangul.alt and hangul.defaultMode (authored per language), booleans (sound.showGloss: merge sets it true) */
function trainerRows() {
  const ET = en.trainer; if (!ET || typeof ET !== 'object') return [];
  const out = [];
  const walk = (o, p) => Object.keys(o).forEach(k => { if (k[0] === '_') return; const q = p ? p + '.' + k : k; if (q === 'hangul.alt' || q === 'hangul.defaultMode') return; const v = o[k];
    if (v && typeof v === 'object' && !Array.isArray(v)) return walk(v, q);
    if (typeof v !== 'string') return;
    if (k.includes('.')) throw new Error('mk_native: trainer key with a dot cannot be addressed: ' + q);
    const r = { f: 'trainer', id: q, src: v, tgt: '' }; if (!/[A-Za-z]/.test(v)) { r.tgt = v; r.pre = 1; } out.push(r); });
  walk(ET, ''); return out;
}
/* fold filled wT rows into native/<n>/ko/trainer.json: nothing is written when no row is filled (an existing trainer.json stays as it is) */
function mergeTrainer() {
  const f = path.join(WK, 'wT.jsonl'); if (!fs.existsSync(f)) return;
  const rows = L.readJSONL(f).filter(r => r.f === 'trainer' && r.tgt != null && String(r.tgt).trim());
  if (!rows.some(r => !r.pre)) { console.log('trainer: wT.jsonl has no filled rows; ' + path.relative(L.ROOT, path.join(N, 'trainer.json')) + ' left as it is'); return; }
  const F = path.join(N, 'trainer.json'), T = fs.existsSync(F) ? L.readJSON(F) : {}; let n = 0; const bad = [];
  rows.forEach(r => { const ks = String(r.id).split('.'); let ref = en.trainer; for (const k of ks) ref = ref && typeof ref === 'object' ? ref[k] : undefined; if (typeof ref !== 'string') { bad.push('unknown trainer key ' + r.id); return; }
    let o = T; ks.slice(0, -1).forEach(k => { if (!o[k] || typeof o[k] !== 'object') o[k] = {}; o = o[k]; }); o[ks[ks.length - 1]] = String(r.tgt); n++;
    if (Array.isArray(r._waive)) o._waive = [...new Set((o._waive || []).concat(r._waive))]; if (r._note) o._note = r._note; });
  if (T.sound && typeof T.sound === 'object' && typeof T.sound.showGloss !== 'boolean') T.sound.showGloss = true; /* packs show the rule glosses (en-ko keeps the Korean names only) */
  L.writeJSON(F, T);
  console.log('trainer: ' + n + ' strings merged into ' + path.relative(L.ROOT, F) + (bad.length ? '\n  ' + bad.join('\n  ') : '') + ' (author hangul.alt there directly; a section with any key missing fails validate.js)');
}
function trainerReadme(rows) {
  if (!rows.length) return '';
  return `
## Trainer text (\`wT.jsonl\`, one writer, ${rows.reduce((a, r) => a + (r.pre ? 0 : L.words(r.src)), 0)} words)
The Korean trainers (Hangul drill, onboarding, numbers, sound changes, polite ↔ casual, conjugator, sentence breakdown, Build drill) show these strings. \`id\` is the key path in \`native/en/ko/trainer.json\`; fill \`tgt\` like the other work files.
* \`%1\`…\`%9\` are slots the app fills (a word, a gloss, a number). Keep every slot; you may move it. Never use braces.
* Keep every Korean piece exactly (\`요\`, \`반말\`, \`-아/어도 돼요\`, rule names such as \`연음\`).
* \`hangul.mean.*\` is the meaning of each Hangul drill word; \`gloss.*\` are the short labels of the 🔍 sentence breakdown; \`build.extra.*\` glosses one Build-drill sentence each.
* Each section switches its trainer on only when **every** string in it is filled; a half-filled section fails \`validate.js\`.
* Not in this file: \`hangul.alt\` (the spellings your learners type for Korean sounds, authored by the lead in \`trainer.json\`; see HALVES-SPEC §10.2) and \`sound.showGloss\` (set to true by the merge).
`;
}
