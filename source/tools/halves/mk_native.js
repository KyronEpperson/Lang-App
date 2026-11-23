#!/usr/bin/env node
/* Lang App · two halves: start a new native half for the Korean course, split into 4 work files for parallel writers.
   Usage:
     node tools/halves/mk_native.js <native> [--writers 4] [--force]   create native/<n>/ko/work/ from native/en/ko (English = source column, target column empty)
     node tools/halves/mk_native.js <native> --merge                    fold the filled work files into native/<n>/ko/*.jsonl + lessons/*.html (then run validate.js)
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

const args = process.argv.slice(2), nat = args.find(a => !a.startsWith('--') && !/^\d+$/.test(a));
const flag = f => args.includes(f), opt = (f, d) => { const i = args.indexOf(f); return i >= 0 ? +args[i + 1] : d; };
if (!nat || nat === 'en') { console.error('usage: node tools/halves/mk_native.js <native> [--writers 4] [--force] | --merge   (native must not be en)'); process.exit(2); }
const DIR = process.env.HALVES_DIR || L.HALVES, TGT = 'ko';
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
  en.cards.forEach(r => units.push({ name: 'card ' + r.id, card: r.id, deck: deckOf[r.id], rows: rowsOf('cards', r), lessons: [] }));
  ['dialog', 'examples', 'patterns'].forEach(f => en[f].forEach(r => units.push({ name: f + ' ' + r.id, kind: f, rows: rowsOf(f, r), lessons: [] })));
  const senFirst = {}; t.lessons.forEach(l => (L.tokens(en.bodies[l.id]) || []).forEach(x => { const m = x.match(/^\{\{ex:(.*)\}\}$/); if (m && !senFirst[m[1]]) senFirst[m[1]] = l.id; }));
  t.lessons.forEach((l, li) => {
    const rows = [].concat(rowsOf('lessons', en.lessons.find(r => r.id === l.id)), en.sentences.filter(s => senFirst[s.id] === l.id).flatMap(s => rowsOf('sentences', s)),
      en.checks.filter(c => t.checks.find(x => x.id === c.id).lesson === l.id).flatMap(c => rowsOf('checks', c)), en.practice.filter(p => t.practice.find(x => x.id === p.id).lesson === l.id).flatMap(p => rowsOf('practice', p)));
    units.push({ name: 'lesson ' + (li + 1) + ' ' + l.id, lesson: l.id, n: li + 1, rows, lessons: [l.id], bodyWords: L.words(en.bodies[l.id]) });
  });
  en.sentences.filter(s => !senFirst[s.id]).forEach(s => units.push({ name: 'sentence ' + s.id, rows: rowsOf('sentences', s), lessons: [] }));
  units.forEach(u => u.words = wc(u.rows) + (u.bodyWords || 0));
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
    plan.push({ name, desc, rows: rows.length, pre: rows.filter(r => r.pre).length, rw: rows.filter(r => r.rw).length, words: us.reduce((x, u) => x + u.words, 0), bodyWords: us.reduce((x, u) => x + (u.bodyWords || 0), 0), lessons });
  });
  /* Korean trainers: native/en/ko/trainer.json flattened into its own work file (one writer); hangul.alt / defaultMode are authored, not translated, and booleans stay as in English */
  const trRows = trainerRows(); if (trRows.length) L.writeJSONL(path.join(WK, 'wT.jsonl'), trRows);
  /* skeleton native half: course.json + empty ui.json (rows arrive with --merge) */
  if (!fs.existsSync(path.join(N, 'course.json'))) L.writeJSON(path.join(N, 'course.json'), { native: nat, name: '', brand: en.course.brand });
  if (!fs.existsSync(path.join(N, 'ui.json'))) L.writeJSON(path.join(N, 'ui.json'), {});
  fs.writeFileSync(path.join(WK, 'README.md'), readme(plan) + trainerReadme(trRows));
  L.writeJSON(path.join(WK, 'plan.json'), plan);
  console.log('work files in ' + path.relative(L.ROOT, WK));
  plan.forEach(p => console.log('  ' + p.name + '  ' + String(p.words).padStart(5) + ' words (' + p.bodyWords + ' in lesson bodies)  ' + String(p.rows).padStart(4) + ' rows, ' + p.pre + ' prefilled, ' + p.rw + ' rewrite-flagged  · ' + p.desc));
  if (trRows.length) console.log('  wT  ' + String(trRows.reduce((a, r) => a + (r.pre ? 0 : L.words(r.src)), 0)).padStart(5) + ' words  ' + String(trRows.length).padStart(4) + ' rows, ' + trRows.filter(r => r.pre).length + ' prefilled  · Korean trainers (trainer.json)');
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
    const m = String(r.k).match(/^(\w+)(?:\[(\d+)\])?$/); if (!m || !(m[1] in ref)) { bad.push(wf + ': unknown field ' + r.k + ' for ' + r.id); return; }
    const o = out[r.f].get(r.id) || { id: r.id }; out[r.f].set(r.id, o);
    if (Array.isArray(r._waive)) o._waive = [...new Set((o._waive || []).concat(r._waive))]; if (r._note) o._note = (o._note ? o._note + ' | ' : '') + r._note; /* translator waiver / comment travel with the row */
    if (m[2] != null) { if (!Array.isArray(o[m[1]])) o[m[1]] = ref[m[1]].map(() => null); o[m[1]][+m[2]] = tgt; } else o[m[1]] = tgt;
  }));
  /* fields that are empty in English stay empty (e.g. a card with no note) */
  FILES.forEach(f => out[f].forEach((o, id) => { const ref = shape[f].get(id); Object.keys(ref).forEach(k => { if (k !== 'id' && !(k in o) && (ref[k] === '' || ref[k] == null)) o[k] = ref[k]; }); }));
  FILES.forEach(f => L.writeJSONL(path.join(N, f + '.jsonl'), en[f].filter(r => out[f].has(r.id)).map(r => { const o = out[f].get(r.id), s = { id: r.id }; Object.keys(r).forEach(k => { if (k !== 'id' && k in o) s[k] = o[k]; }); if (o._waive) s._waive = o._waive; if (o._note) s._note = o._note; return s; })));
  L.writeJSON(path.join(N, 'course.json'), course);
  fs.readdirSync(WK).filter(f => /^w\d+$/.test(f)).forEach(w => { const d = path.join(WK, w, 'lessons'); if (!fs.existsSync(d)) return; fs.readdirSync(d).filter(f => f.endsWith('.html') && !f.endsWith('.src.html')).forEach(f => { const h = fs.readFileSync(path.join(d, f), 'utf8'); if (!h.trim()) return; fs.mkdirSync(path.join(N, 'lessons'), { recursive: true }); fs.writeFileSync(path.join(N, 'lessons', f), h); bodies++; }); });
  console.log('merged into ' + path.relative(L.ROOT, N) + ': ' + filled + ' fields filled, ' + empty + ' still empty, ' + bodies + ' lesson bodies' + (bad.length ? '\n  ' + bad.join('\n  ') : ''));
  mergeTrainer();
  console.log('next: node tools/halves/validate.js ' + nat + ' ko');
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
