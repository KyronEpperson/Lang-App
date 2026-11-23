#!/usr/bin/env node
/* Lang App · two halves: export the built-in Korean course (en-ko) MECHANICALLY from the live app data into
     tools/halves/target/ko/      (the Korean half: shared by every learner language)
     tools/halves/native/en/ko/   (the English half)
   Nothing is retyped: every value comes from COURSES['en-ko'] / PRACTICE_BUILTIN / greet() evaluated in a real page.
   Ids are assigned once: when a target half already exists, its ids are reused (matched by content) and new items get the next free number.
   Usage: node tools/halves/export_ko.js            (HALVES_DIR=<dir> writes elsewhere; HALVES_SRC=<html> reads another build)
   Format: docs/HALVES-SPEC.md */
'use strict';
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const L = require('./lib.js');
const DIR = process.env.HALVES_DIR || L.HALVES;
const T = path.join(DIR, 'target', 'ko'), N = path.join(DIR, 'native', 'en', 'ko');

const slug = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pad = (n, w) => String(n).padStart(w, '0');
/* split "Korean part<sep>native note" (hint, pause-set label); null when there is no leading Korean part */
function splitKo(s) {
  s = String(s); if (L.isKoreanValue(s)) return { ko: s, sep: '', note: '' };
  const m = s.match(/^([^A-Za-z]*[㄰-㆏가-힯][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$/);
  return m && L.isKoreanValue(m[1]) ? { ko: m[1], sep: m[2], note: m[3] } : null;
}

/* id allocator that remembers ids from a previous export */
function Alloc(prefix, width, file, keyOf) {
  const old = new Map(); let max = 0;
  L.readJSONL(file).forEach(r => { const k = keyOf(r); if (k != null && !old.has(k)) old.set(k, r.id); const n = +String(r.id).slice(prefix.length); if (n > max) max = n; });
  const used = new Set();
  return k => { let id = old.get(k); if (!id || used.has(id)) id = prefix + pad(++max, width); used.add(id); return id; };
}

const EX_RX = /<div class="ex"><button class="sp" type="button" data-say="([^"]*)" aria-label="Play">🔊<\/button><span class="k">([\s\S]*?)<\/span><span class="r">([\s\S]*?)<\/span><span class="m">([\s\S]*?)<\/span><\/div>/g;
const STROKE_RX = /<div class="sgl" data-replay="1"><div class="k">([^<]+)<\/div><div class="stroke"><svg[\s\S]*?<\/svg><\/div><\/div>/g;

(async () => {
  const srcHash = crypto.createHash('sha256').update(fs.readFileSync(L.SRC)).digest('hex').slice(0, 16);
  const { browser, page, errs } = await L.openApp();
  const d = await L.liveBuiltin(page);
  /* greet(): the built-in Korean course greets from code, not data: evaluate it at four hours */
  d.GREET = await page.evaluate(() => { const real = Date.prototype.getHours, out = []; try { for (const h of [2, 9, 14, 20]) { Date.prototype.getHours = () => h; out.push(greet()); } } finally { Date.prototype.getHours = real; } return out; });
  await browser.close();
  if (errs.length) console.warn('page errors:', errs.slice(0, 3));
  const MY = d.MYDECK;

  /* ---------- decks & cards ---------- */
  const deckNames = Object.keys(d.DECKS).filter(k => k !== MY);
  const deckId = {}; deckNames.forEach(k => { const id = 'ko.d.' + slug(k); if (Object.values(deckId).includes(id)) throw new Error('deck slug clash: ' + k); deckId[k] = id; });
  const cardA = Alloc('ko.c', 4, path.join(T, 'cards.jsonl'), r => r.ko);
  const tCards = [], nCards = [], cardByKo = {};
  deckNames.forEach(k => d.DECKS[k].forEach(c => { const id = cardA(c[0]); if (cardByKo[c[0]]) throw new Error('duplicate card text ' + c[0]); cardByKo[c[0]] = id; tCards.push({ id, deck: deckId[k], ko: c[0], rom: c[1] }); nCards.push({ id, meaning: c[2], note: c[3] }); }));
  const tDecks = deckNames.map(k => ({ id: deckId[k] })), nDecks = deckNames.map(k => ({ id: deckId[k], label: k, desc: d.DESC[k] == null ? '' : d.DESC[k] }));
  Object.keys(d.DESC).forEach(k => { if (!deckId[k] && k !== MY) throw new Error('DESC for unknown deck ' + k); });

  /* ---------- groups, tags ---------- */
  const groups = d.GROUPS.map(g => ({ id: 'ko.grp.' + slug(g[0]), decks: g[1].filter(x => x !== MY).map(x => { if (!deckId[x]) throw new Error('group deck ' + x); return deckId[x]; }) }));
  const nGroups = d.GROUPS.map(g => ({ id: 'ko.grp.' + slug(g[0]), name: g[0] }));
  const tags = {}; Object.keys(d.TAGS).forEach(t => tags[t] = d.TAGS[t].map(x => { if (!deckId[x]) throw new Error('tag deck ' + x); return deckId[x]; }));

  /* ---------- dialog, examples, patterns ---------- */
  const dlgA = Alloc('ko.g', 3, path.join(T, 'dialog.jsonl'), r => r.card), exA = Alloc('ko.e', 3, path.join(T, 'examples.jsonl'), r => r.card), patA = Alloc('ko.p', 3, path.join(T, 'patterns.jsonl'), r => r.ko + '\u0001' + r.ex);
  const tDlg = [], nDlg = [], tEx = [], nEx = [], tPat = [], nPat = [];
  Object.entries(d.DIALOG).forEach(([k, v]) => { const card = cardByKo[k]; if (!card) throw new Error('DIALOG key not a card: ' + k); if (v.length !== 3) throw new Error('DIALOG shape ' + k); const id = dlgA(card); tDlg.push({ id, card, a: v[0], b: v[1] }); nDlg.push({ id, tr: v[2] }); });
  Object.entries(d.EXAMPLES).forEach(([k, v]) => { const card = cardByKo[k]; if (!card) throw new Error('EXAMPLES key not a card: ' + k); if (v.length !== 2) throw new Error('EXAMPLES shape ' + k); const id = exA(card); tEx.push({ id, card, ko: v[0] }); nEx.push({ id, tr: v[1] }); });
  d.PATTERNS.forEach(p => { if (p.length !== 4) throw new Error('PATTERN shape'); const id = patA(p[0] + '\u0001' + p[2]); tPat.push({ id, ko: p[0], ex: p[2], lesson: p[3] }); nPat.push({ id, meaning: p[1] }); });

  /* ---------- lessons: bodies → native HTML with {{ex:id}} / {{strokes:X}} tokens ---------- */
  /* a sentence id is keyed by Korean + romanisation + English gloss (one id never carries two glosses);
     the gloss lives in the native half, so a previous export's key joins the English gloss back in */
  const oldGloss = L.byId(L.readJSONL(path.join(N, 'sentences.jsonl')));
  const senPrev = L.readJSONL(path.join(T, 'sentences.jsonl'));
  const senKey = new Map(senPrev.map(r => [r.ko + '\u0001' + r.rom + '\u0001' + ((oldGloss.get(r.id) || {}).gloss || ''), r.id]));
  let senMax = Math.max(0, ...senPrev.map(r => +r.id.slice(4)));
  const tSen = [], nSen = [], senSeen = new Map(), lessonFiles = {}, tLessons = [], nLessons = [];
  let exRows = 0, strokeCells = 0;
  d.LESSONS.forEach(l => {
    if (!deckId[l.deck]) throw new Error('lesson deck ' + l.deck);
    let body = l.body.replace(EX_RX, (m, say, k, r, g) => {
      exRows++;
      if (say !== k.replace(/"/g, '&quot;')) throw new Error('ex data-say differs from its text in ' + l.id);
      if (/[|{}]/.test(k + r) || /\}/.test(g)) throw new Error('ex row has | { } in ' + l.id + ': ' + k);
      const key = k + '\u0001' + r + '\u0001' + g;
      let id = senSeen.get(key);
      if (!id) { id = senKey.get(key); if (!id || tSen.some(x => x.id === id)) id = 'ko.s' + pad(++senMax, 4); senSeen.set(key, id); tSen.push({ id, ko: k, rom: r }); nSen.push({ id, gloss: g, _lesson: l.id }); }
      return '{{ex:' + id + '}}';
    });
    body = body.replace(STROKE_RX, (m, ch) => { strokeCells++; return '{{strokes:' + ch + '}}'; });
    const left = body.match(/class="ex"|data-say|<svg|<button|<script|\son[a-z]+\s*=\s*"/);
    if (left) throw new Error('lesson ' + l.id + ' still contains ' + left[0] + ' after tokenising');
    lessonFiles[l.id] = body;
    tLessons.push({ id: l.id, deck: deckId[l.deck] });
    nLessons.push({ id: l.id, title: l.title, blurb: l.blurb });
  });
  const exTotal = d.LESSONS.reduce((n, l) => n + (l.body.match(/<div class="ex">/g) || []).length, 0);
  if (exRows !== exTotal) throw new Error('tokenised ' + exRows + ' of ' + exTotal + ' example rows');
  nSen.forEach(r => delete r._lesson);

  /* ---------- checks & practice ---------- */
  const tChk = [], nChk = [];
  Object.entries(d.CHECKS).forEach(([lid, list]) => list.forEach((c, i) => {
    const id = lid + '.k' + (i + 1); if (c.length !== 4) throw new Error('check shape ' + id);
    const ko = c[1].map(o => L.isKoreanValue(o) ? o : null), nat = c[1].map(o => L.isKoreanValue(o) ? null : o);
    tChk.push({ id, lesson: lid, o: ko, a: c[2] });
    const n = { id, q: c[0] }; if (nat.some(x => x != null)) n.o = nat; n.why = c[3]; nChk.push(n);
  }));
  const tPr = [], nPr = [], KNOWN = new Set(['t', 'q', 'p', 'o', 'a', 'x', 'why', 'hint']);
  Object.entries(d.PRACTICE).forEach(([lid, list]) => list.forEach((it, i) => {
    Object.keys(it).forEach(k => { if (!KNOWN.has(k)) throw new Error('practice field ' + k + ' not mapped (' + lid + ')'); });
    const id = lid + '.' + pad(i + 1, 2), t = { id, lesson: lid, t: it.t }, n = { id };
    if (it.t === 'fill') { t.q = it.q; } else if (it.q != null) n.q = it.q;           /* fill.q is the Korean sentence with the gap; other q are prompts */
    if (it.p != null) n.p = it.p;
    if (it.o) { if (it.t === 'mc') { t.o = it.o.map(o => L.isKoreanValue(o) ? o : null); if (it.o.some(o => !L.isKoreanValue(o))) n.o = it.o.map(o => L.isKoreanValue(o) ? null : o); } else t.o = it.o; }
    if (it.a) t.a = it.a; if (it.x) t.x = it.x;
    if (it.hint != null) { const s = splitKo(it.hint); if (s && !s.note) t.hint = { ko: s.ko }; else if (s) { t.hint = { ko: s.ko, sep: s.sep }; n.hint = s.note; } else n.hint = it.hint; }
    if (it.why != null) n.why = it.why;
    tPr.push(t); nPr.push(n);
  }));

  /* ---------- small pack-level tables ---------- */
  const labels = [];
  const titles = d.TITLES.map(t => { const id = 'ko.t' + pad(t[0], 2); labels.push({ id, text: t[2] }); return { id, level: t[0], ko: t[1] }; });
  const GREET_IDS = ['ko.h.night', 'ko.h.morning', 'ko.h.afternoon', 'ko.h.evening'];
  const greet = d.GREET.map((g, i) => { const j = g[1].indexOf(' · '); if (j < 0) throw new Error('greet gloss without " · "'); labels.push({ id: GREET_IDS[i], text: g[1].slice(j + 3) }); return { id: GREET_IDS[i], ko: g[0], rom: g[1].slice(0, j) }; });
  const goals = Object.entries(d.GOALS).map(([k, g]) => { const id = 'goal.' + k; labels.push({ id, text: g.label }); return { id, key: k, decks: g.decks.map(x => deckId[x]) }; });
  const plans = Object.entries(d.PLAN_PRESETS).map(([k, g]) => { const id = 'plan.' + k; labels.push({ id, text: g.label }); const o = { id, key: k }; Object.keys(g).forEach(f => { if (f === 'label') return; o[f] = f === 'decks' ? g.decks.map(x => deckId[x]) : g[f]; }); return o; });
  const pauseSets = Object.entries(d.PAUSE.sets).map(([k, s]) => { const id = 'ko.z.' + k, sp = splitKo(s[0]); if (!sp || !sp.note) throw new Error('pause label ' + s[0]); labels.push({ id, text: sp.note }); return { id, key: k, ko: sp.ko, sep: sp.sep, items: s[1].map((it, i) => { const iid = id + '.' + pad(i + 1, 2); labels.push({ id: iid, text: it[1] }); return { id: iid, ko: it[0] }; }) }; });
  const idioms = d.PAUSE.idioms.map((x, i) => { const id = 'ko.i' + pad(i + 1, 2); labels.push({ id, text: x[3] }); return { id, ko: x[0], hanja: x[1], rom: x[2] }; });
  if (d.DESC[MY] != null) labels.push({ id: 'ko.d.mydeck', text: d.DESC[MY] }); /* description of the runtime's own "My phrases" deck */
  const tCourse = { target: 'ko', ttsLang: 'ko-KR', self: d.name.ko, introWord: d.introWord, groups, tags, goals, plans, titles, greet, pairs: d.PAIRS, pause: { sets: pauseSets, idioms }, exportedFrom: { file: path.relative(L.ROOT, L.SRC), sha256_16: srcHash } };
  const nCourse = { native: 'en', name: d.name.en, brand: d.brand };

  /* ---------- guard: check and practice ids are positional within a lesson (<lessonId>.k<n>, <lessonId>.<nn>).
     If the built-in course inserted, removed or changed an item, an existing id would now point at different Korean and silently
     re-attach every native half's translation to it. Refuse unless --accept-moved (then re-check every native half's rows for those ids). */
  const moved = [];
  [['checks.jsonl', tChk], ['practice.jsonl', tPr]].forEach(([f, rows]) => { const old = L.byId(L.readJSONL(path.join(T, f))); if (!old.size) return; rows.forEach(r => { const o = old.get(r.id); if (o && JSON.stringify(o) !== JSON.stringify(r)) moved.push(f.replace('.jsonl', '') + ':' + r.id); }); old.forEach((o, id) => { if (!rows.some(r => r.id === id)) moved.push(f.replace('.jsonl', '') + ':' + id + ' (gone)'); }); });
  if (moved.length && !process.argv.includes('--accept-moved')) throw new Error(moved.length + ' check/practice id(s) now hold different Korean content: ' + moved.slice(0, 8).join(', ') + (moved.length > 8 ? ' …' : '') + '. Re-run with --accept-moved, then review those rows in every native half.');
  if (moved.length) console.warn('accepted ' + moved.length + ' moved check/practice id(s): review them in every native half: ' + moved.join(', '));

  /* ---------- write ---------- */
  fs.rmSync(path.join(N, 'lessons'), { recursive: true, force: true });
  L.writeJSON(path.join(T, 'course.json'), tCourse);
  const W = (dir, f, rows) => L.writeJSONL(path.join(dir, f + '.jsonl'), rows);
  W(T, 'decks', tDecks); W(T, 'cards', tCards); W(T, 'dialog', tDlg); W(T, 'examples', tEx); W(T, 'patterns', tPat); W(T, 'sentences', tSen); W(T, 'lessons', tLessons); W(T, 'checks', tChk); W(T, 'practice', tPr);
  L.writeJSON(path.join(N, 'course.json'), nCourse);
  W(N, 'decks', nDecks); W(N, 'groups', nGroups); W(N, 'cards', nCards); W(N, 'dialog', nDlg); W(N, 'examples', nEx); W(N, 'patterns', nPat); W(N, 'sentences', nSen); W(N, 'lessons', nLessons); W(N, 'checks', nChk); W(N, 'practice', nPr); W(N, 'labels', labels);
  Object.entries(lessonFiles).forEach(([id, h]) => { fs.mkdirSync(path.join(N, 'lessons'), { recursive: true }); fs.writeFileSync(path.join(N, 'lessons', id + '.html'), h); });
  if (!fs.existsSync(path.join(N, 'ui.json'))) L.writeJSON(path.join(N, 'ui.json'), {});
  console.log(JSON.stringify({ source: path.relative(L.ROOT, L.SRC), sha256_16: srcHash, decks: tDecks.length, cards: tCards.length, notes: nCards.filter(c => c.note).length, groups: groups.length, dialog: tDlg.length, examples: tEx.length, patterns: tPat.length, lessons: tLessons.length, exampleRows: exRows, sentences: tSen.length, strokeCells, checks: tChk.length, practice: tPr.length, labels: labels.length, out: path.relative(L.ROOT, DIR) }));
})().catch(e => { console.error('export_ko: ' + e.message); process.exit(1); });
