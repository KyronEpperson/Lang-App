#!/usr/bin/env node
/* Lang App · two halves: draft tools/target/<t>/marks.extra.jsonl for a "by marks" target (docs/briefs/x-vi-design.md §5).
     node tools/halves/marks_propose.js vi            print what would be written and the lists a person must judge
     node tools/halves/marks_propose.js vi --write    write tools/target/vi/marks.extra.jsonl (then run export_target.js vi; unmarked.tsv must come out empty)
   It runs the exporter into a temp folder WITHOUT the extra file, takes every scanned English field with the ranges the rules already mark, and
   proposes the target text left over:
     strong word  a free word with a target diacritic that is a syllable of the language, or a word listed under "words" in the judgement file;
     run          neighbouring free syllables joined by single spaces, cut back at both ends to a strong word, a plain course word that is not an
                  everyday English spelling (anh, sao), or a word that stands beside its neighbour somewhere in the course's own target text;
     span         each run, exactly as written.
   Judgements a rule cannot make live in tools/target/<t>/marks.judged.json:
     not    words with a target diacritic that are not target text (café)           → the row's "not" list
     words  plain target words to mark wherever they stand free, exact case (anh, xe, ngon) → strong words
     skip   plain spellings never taken as target words
     runs   phrases taken as one span wherever they stand free: an everyday-English spelling inside has no backing pair (Tôi tin anh, cười to),
            or the phrase reaches over the row's own words (các em)
     cut    whole runs that must not be one span because an English word sits inside (the strong words of the run are marked one by one)
     names  people's and place names in translations (Minh, Hoan Kiem): left alone outside a run, and not listed for judging
     keep   whole rows {f, id, k, spans} added as they are (a deliberate non-word among quiz options)
   Vietnamese is the only marks target with this tool today (the syllable test and the diacritic test come from lib.js). */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const L = require('./lib.js');
const TG = process.argv[2]; if (TG !== 'vi') { console.error('usage: node tools/halves/marks_propose.js vi [--write]'); process.exit(2); }
const SRC = path.join(L.ROOT, 'tools', 'target', TG), OUT = path.join(SRC, 'marks.extra.jsonl'), JF = path.join(SRC, 'marks.judged.json');
const J = Object.assign({ not: [], words: [], skip: [], names: [], keep: [] }, fs.existsSync(JF) ? L.readJSON(JF) : {});
const NOT = new Set(J.not), WORDS = new Set(J.words), SKIP = new Set(J.skip), NAMES = new Set(J.names), CUT = new Set(J.cut || []), RUNS_OK = new Set(J.runs || []);
/* everyday English: every word of the English halves of the script-mode courses (their target text is not Latin), plus lib.js EN_HOMOGRAPHS */
const EN = new Set(L.EN_HOMOGRAPHS);
['ko', 'zh', 'yue'].forEach(t => { const d = path.join(L.HALVES, 'native', 'en', t); if (!fs.existsSync(d)) return;
  fs.readdirSync(d).filter(f => f.endsWith('.jsonl')).forEach(f => (fs.readFileSync(path.join(d, f), 'utf8').match(/[A-Za-z']+/g) || []).forEach(w => EN.add(w.toLowerCase())));
  fs.readdirSync(path.join(d, 'lessons')).forEach(f => (fs.readFileSync(path.join(d, 'lessons', f), 'utf8').replace(/<[^>]+>/g, ' ').match(/[A-Za-z']+/g) || []).forEach(w => EN.add(w.toLowerCase()))); });
/* a scratch copy of the halves, exported with no extra file */
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'marks-propose-')), dump = path.join(tmp, 'dump.jsonl');
fs.cpSync(path.join(L.HALVES, 'target', TG), path.join(tmp, 'target', TG), { recursive: true }); fs.cpSync(path.join(L.HALVES, 'native', 'en', TG), path.join(tmp, 'native', 'en', TG), { recursive: true });
const hold = fs.existsSync(OUT) ? fs.readFileSync(OUT) : null; if (hold) fs.rmSync(OUT);
let r; try { r = cp.spawnSync('node', [path.join(__dirname, 'export_target.js'), TG], { encoding: 'utf8', env: Object.assign({}, process.env, { HALVES_DIR: tmp, HALVES_MARKS_DUMP: dump }) }); } finally { if (hold) fs.writeFileSync(OUT, hold); }
if (r.status) { console.error(r.stderr); process.exit(1); }
const rows = L.readJSONL(dump), T = path.join(tmp, 'target', TG);
/* side-by-side pairs in the course's own target text */
const pairs = new Set(), vocab = new Set();
const addT = s => { String(s == null ? '' : s).normalize('NFC').split(/[^A-Za-zÀ-ÖØ-öø-ɏḀ-ỿ ]+/).forEach(seg => { const w = seg.trim().toLowerCase().split(/ +/).filter(Boolean); w.forEach((x, i) => { vocab.add(x); if (i) pairs.add(w[i - 1] + ' ' + x); }); }); };
L.readJSONL(path.join(T, 'cards.jsonl')).forEach(x => addT(x[TG])); L.readJSONL(path.join(T, 'examples.jsonl')).forEach(x => addT(x[TG])); L.readJSONL(path.join(T, 'dialog.jsonl')).forEach(x => { addT(x.a); addT(x.b); });
L.readJSONL(path.join(T, 'sentences.jsonl')).forEach(x => addT(x[TG])); L.readJSONL(path.join(T, 'patterns.jsonl')).forEach(x => { addT(x[TG]); addT(x.ex); });
const strong = w => !NOT.has(w) && ((L.hasViDiacritic(w) && (L.isViSyllable(w) || [...w].length <= 2)) || WORDS.has(w));
const plain = w => !L.hasViDiacritic(w) && w.length >= 2 && L.isViSyllable(w);
const out = [], lone = new Map(), cuts = new Map(), loose = new Map(), weak = new Map(), spanCount = new Map(), notSeen = new Map(), oddDia = new Map();
rows.forEach(row => {
  const s = row.text, free = (a, b) => row.taken.every(([x, y]) => b <= x || a >= y), ownAt = (a, b) => row.taken.some(([x, y, h]) => h === 'o' && a >= x && b <= y);
  const ws = []; const W = new RegExp(L.LAT_WORD.source, 'g'); let m;
  while ((m = W.exec(s))) ws.push({ a: m.index, b: m.index + m[0].length, w: m[0], free: free(m.index, m.index + m[0].length), own: ownAt(m.index, m.index + m[0].length) });
  const nots = new Set(), spans = [];
  ws.forEach(x => { if (x.free && L.hasViDiacritic(x.w) && !strong(x.w)) { if (NOT.has(x.w)) nots.add(x.w); else if (!(J.keep || []).some(k => k.f === row.f && k.id === row.id && k.k === row.k && k.spans.includes(x.w))) oddDia.set(x.w, (oddDia.get(x.w) || 0) + 1); } });
  const glued = (x, y) => s.slice(x.b, y.a) === ' ';
  const anchor = x => bridge(x) || strong(x.w) || (plain(x.w) && !SKIP.has(x.w) && !EN.has(x.w.toLowerCase()) && vocab.has(x.w.toLowerCase()));
  /* a word the rules already mark (a card's own word, a bold span) is proven target text: it carries a run across, so that a plain neighbour
     ("các em" with các marked) is seen in its phrase. Only the free words of a run become spans. */
  const bridge = x => !x.free && !x.used && (L.hasViDiacritic(x.w) ? L.isViSyllable(x.w) : plain(x.w) && vocab.has(x.w.toLowerCase()));
  const strongB = x => bridge(x) || strong(x.w);
  const member = x => bridge(x) || (x.free && (strong(x.w) || (plain(x.w) && !SKIP.has(x.w))));
  const pairOK = (x, y) => pairs.has(x.w.toLowerCase() + ' ' + y.w.toLowerCase());
  const take = sp => { spans.push(sp); spanCount.set(sp, (spanCount.get(sp) || 0) + 1); };
  /* judged phrases first ("runs"): every free whole-word occurrence is one span */
  RUNS_OK.forEach(ph => { let i = -1; while ((i = s.indexOf(ph, i + 1)) >= 0) { const j = i + ph.length, inside = ws.filter(x => x.a >= i && x.b <= j);
    if (!inside.length || inside[0].a !== i || inside[inside.length - 1].b !== j || inside.some(x => !x.free && !x.own) || inside.every(x => !x.free)) continue; inside.forEach(x => { x.free = false; x.used = true; }); take(ph); } });
  let i = 0;
  while (i < ws.length) {
    if (!member(ws[i])) { i++; continue; }
    let j = i; while (ws[j + 1] && member(ws[j + 1]) && glued(ws[j], ws[j + 1])) j++;
    /* a run of syllables joined by single spaces. An everyday-English spelling that no neighbour backs splits it ("What does mời do in Mời anh
       ngồi?"); each piece is cut back to its first and last anchor and needs one strong word. */
    const whole = s.slice(ws[i].a, ws[j].b), hasStrong = ws.slice(i, j + 1).some(x => x.free && strong(x.w)); let split = false;
    const pieces = [[]]; for (let k = i; k <= j; k++) { const x = ws[k];
      if (!strongB(x) && EN.has(x.w.toLowerCase()) && !(k > i && pairOK(ws[k - 1], x)) && !(k < j && pairOK(x, ws[k + 1]))) { pieces.push([]); split = true; } else pieces[pieces.length - 1].push(k); }
    const got = [];
    pieces.forEach(pc => { if (!pc.length) return; let lo = pc[0], hi = pc[pc.length - 1];
      while (lo <= hi && !anchor(ws[lo]) && !(lo < hi && pairOK(ws[lo], ws[lo + 1]))) lo++;
      while (hi >= lo && !anchor(ws[hi]) && !(hi > lo && pairOK(ws[hi - 1], ws[hi]))) hi--;
      if (lo > hi || !ws.slice(lo, hi + 1).some(strongB)) return;
      /* the free stretches of the piece, each one span */
      let k = lo; while (k <= hi) { if (!ws[k].free) { k++; continue; } let e = k; while (e < hi && ws[e + 1].free) e++;
        /* a stretch of everyday-English spellings only (em, hai, to) would be marked wherever that spelling stands in the field, an English "to"
           included. It is recorded together with the neighbouring own words of the row (hand-set spans are applied before own words), so the
           span is the phrase: "to hơn", "các em". With no such neighbour it is listed for judging. */
        let k0 = k, e0 = e; const dull = ws.slice(k, e + 1).every(x => !strong(x.w) && EN.has(x.w.toLowerCase()));
        if (dull) { while (k0 > lo && ws[k0 - 1].own && !ws[k0 - 1].free) k0--; while (e0 < hi && ws[e0 + 1].own && !ws[e0 + 1].free) e0++;
          if (k0 === k && e0 === e) { const n = (s.match(new RegExp('(^|[^A-Za-zÀ-ỿ])' + s.slice(ws[k].a, ws[e].b) + '(?![A-Za-zÀ-ỿ])', 'g')) || []).length; const key = '«' + s.slice(ws[k].a, ws[e].b) + '» in ' + row.f + ':' + row.id + '.' + row.k + ' (' + n + '× in the field)'; lone.set(key, 1); } }
        const sp = s.slice(ws[k0].a, ws[e0].b);
        if (CUT.has(sp)) ws.slice(k, e + 1).filter(x => strong(x.w)).forEach(x => { take(x.w); got.push(x.w); });
        else { take(sp); got.push(sp); for (let q = k; q <= e; q++) { const x = ws[q]; if (!strong(x.w) && EN.has(x.w.toLowerCase())) { const key = x.w + ' in «' + s.slice(ws[lo].a, ws[hi].b) + '»'; weak.set(key, (weak.get(key) || 0) + 1); } } }
        k = e + 1; } });
    if (hasStrong && got.join(' ') !== whole && ws.slice(i, j + 1).every(x => x.free)) { const key = '«' + whole + '» → ' + got.map(x => '«' + x + '»').join(' '); cuts.set(key, (cuts.get(key) || 0) + 1); }
    i = j + 1;
  }
  ws.forEach(x => { if (x.free && plain(x.w) && vocab.has(x.w.toLowerCase()) && !EN.has(x.w.toLowerCase()) && !NAMES.has(x.w) && !spans.some(sp => sp.split(' ').includes(x.w))) loose.set(x.w, (loose.get(x.w) || 0) + 1); });
  const uniq = [...new Set(spans)];
  if (uniq.length || nots.size) { const o = { f: row.f, id: row.id, k: row.k }; if (uniq.length) o.spans = uniq; if (nots.size) o.not = [...nots]; out.push(o); }
});
(J.keep || []).forEach(k => { const o = out.find(x => x.f === k.f && x.id === k.id && x.k === k.k); if (o) o.spans = [...new Set((o.spans || []).concat(k.spans))]; else out.push({ f: k.f, id: k.id, k: k.k, spans: k.spans }); });
const top = m => [...m.entries()].sort((a, b) => b[1] - a[1]).map(e => e[0] + (e[1] > 1 ? '×' + e[1] : '')).join(' · ');
console.log('fields with hand-set spans: ' + out.length + ' · spans: ' + out.reduce((a, o) => a + (o.spans || []).length, 0) + ' · distinct: ' + spanCount.size);
console.log('everyday-English spellings inside a span (judge each; put the whole run under "cut" when the word is English there): ' + (top(weak) || 'none'));
console.log('runs of syllables only partly taken (judge; put a phrase under "runs" when more of it is target text): ' + (top(cuts) || 'none'));
console.log('everyday-English spellings marked on their own (judge: every whole-word occurrence in that field gets marked): ' + (top(lone) || 'none'));
console.log('plain course words left unmarked (judge; add to "words" when they are always the target word in the English half): ' + (top(loose) || 'none'));
console.log('words with a target diacritic that are not a syllable and not judged (add to "not" or fix the source): ' + (top(oddDia) || 'none'));
if (process.argv.includes('--spans')) console.log('distinct spans: ' + top(spanCount));
if (process.argv.includes('--write')) { L.writeJSONL(OUT, out); console.log('wrote ' + path.relative(L.ROOT, OUT)); }
fs.rmSync(tmp, { recursive: true, force: true });
