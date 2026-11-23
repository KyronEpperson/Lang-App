#!/usr/bin/env node
/* Lang App · two halves: validate a native half against its target half (and against the English native half as the reference).
   Usage: node tools/halves/validate.js <native> <target>        e.g. node tools/halves/validate.js es ko
          HALVES_DIR=<dir> validates another copy. Exit 1 on any error.
   Checks (docs/HALVES-SPEC.md §6): every target id has a native row and there are no orphans; native rows carry only native fields; no native field is
   empty where the English one is not; the set of Hangul runs in every native string equals the English reference's (Korean inside prose survives
   translation untouched); placeholders (__, ___, {{…}} tokens, " / " in dialog lines) intact; deck labels unique; lesson-body tokens all resolve and keep
   the English order; option slots line up with the target half; pack-path limits (cleanPractice lengths, unique options, cleanLessonHTML-safe bodies).
   Reports counts per file and the words still to translate. */
'use strict';
const fs = require('fs'), path = require('path');
const L = require('./lib.js');
const { loadHalves, assemble } = require('./assemble.js');

const [nat, tgt] = process.argv.slice(2);
if (!nat || !tgt) { console.error('usage: node tools/halves/validate.js <native> <target>'); process.exit(2); }
const DIR = process.env.HALVES_DIR || L.HALVES;
const H = loadHalves(nat, tgt, DIR), E = nat === 'en' ? H : loadHalves('en', tgt, DIR);
const t = H.t, n = H.n, en = E.n;
const errors = [], warns = [];
const err = (w, m) => errors.push(w + ': ' + m), warn = (w, m) => warns.push(w + ': ' + m);
const META = new Set(['id', '_note', '_waive']); /* translator comment / waiver: ignored by assembly */
const waived = (r, what) => Array.isArray(r && r._waive) && r._waive.includes(what);

/* ---------- expected ids per native file, from the target half ---------- */
const C = t.course;
const expect = {
  decks: t.decks.map(r => r.id), cards: t.cards.map(r => r.id), dialog: t.dialog.map(r => r.id), examples: t.examples.map(r => r.id), patterns: t.patterns.map(r => r.id),
  sentences: t.sentences.map(r => r.id), lessons: t.lessons.map(r => r.id), checks: t.checks.map(r => r.id), practice: t.practice.map(r => r.id),
  groups: (C.groups || []).map(g => g.id),
  labels: [].concat((C.titles || []).map(x => x.id), (C.greet || []).map(x => x.id), (C.goals || []).map(x => x.id), (C.plans || []).map(x => x.id),
    ...((C.pause || {}).sets || []).map(s => [s.id].concat(s.items.map(i => i.id))), ((C.pause || {}).idioms || []).map(x => x.id),
    en.labels.some(r => r.id === 'ko.d.mydeck') ? ['ko.d.mydeck'] : [])
};
const counts = {};
const enIx = {}; Object.keys(expect).forEach(f => enIx[f] = L.byId(en[f]));
const tIx = { checks: L.byId(t.checks), practice: L.byId(t.practice) };

/* ---------- field checks ---------- */
const strs = v => v == null ? [] : Array.isArray(v) ? v.filter(x => x != null).map(String) : [String(v)];
function checkText(where, f, v, ref, row) {
  if (typeof v !== 'string') return;
  const a = L.hangulSet(v), b = L.hangulSet(ref);
  const sa = [...new Set(a)].sort().join('\u0001'), sb = [...new Set(b)].sort().join('\u0001');
  if (sa !== sb) { const miss = [...new Set(b)].filter(x => !a.includes(x)), extra = [...new Set(a)].filter(x => !b.includes(x)); (waived(row, 'hangul') ? warn : err)(where + '.' + f, 'Hangul differs from the English' + (miss.length ? ' · missing ' + miss.join(' ') : '') + (extra.length ? ' · extra ' + extra.join(' ') : '')); }
  else if (a.length !== b.length) warn(where + '.' + f, 'Hangul run count ' + a.length + ' vs English ' + b.length);
  const us = s => (String(s).match(/_{2,}/g) || []).join(' ');
  if (us(v) !== us(ref)) err(where + '.' + f, 'blank placeholder (__ / ___) changed: "' + us(ref) + '" → "' + us(v) + '"');
  if (/\{\{|\}\}/.test(v) || /\{\{|\}\}/.test(ref) && f !== 'body') err(where + '.' + f, 'token braces {{ }} are not allowed in this field');
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(v)) err(where + '.' + f, 'control character');
  if (v !== v.trim()) warn(where + '.' + f, 'leading/trailing space');
}
Object.keys(expect).forEach(f => {
  const want = expect[f], have = n[f], set = new Set(want), seen = new Set();
  let ok = 0;
  have.forEach((r, i) => {
    const w = f + ':' + (r.id || '#' + (i + 1));
    if (!r.id) return err(w, 'row without id');
    if (seen.has(r.id)) err(w, 'duplicate id'); seen.add(r.id);
    if (!set.has(r.id)) return err(w, 'orphan: no such id in the target half');
    const ref = enIx[f].get(r.id) || {};
    Object.keys(r).forEach(k => { if (!META.has(k) && !(k in ref)) err(w, 'field "' + k + '" is not a native field here (allowed: ' + Object.keys(ref).filter(x => x !== 'id').join(', ') + ')'); });
    let good = true;
    Object.keys(ref).forEach(k => {
      if (k === 'id') return;
      const rv = ref[k], v = r[k];
      if (Array.isArray(rv)) { /* option slots: null where the target half holds a Korean option */
        if (!Array.isArray(v) || v.length !== rv.length) { err(w + '.' + k, 'must be an array of ' + rv.length + ' slots like the English'); good = false; return; }
        rv.forEach((x, j) => { if (x == null && v[j] != null) err(w + '.' + k + '[' + j + ']', 'slot holds a Korean option from the target half: leave it null'); if (x != null && !String(v[j] || '').trim()) { err(w + '.' + k + '[' + j + ']', 'empty'); good = false; } if (x != null && v[j] != null) checkText(w, k + '[' + j + ']', v[j], x, r); });
        return;
      }
      if (String(rv == null ? '' : rv).trim() && !String(v == null ? '' : v).trim()) { err(w + '.' + k, 'empty'); good = false; return; }
      checkText(w, k, v, rv, r);
    });
    if (good) ok++;
  });
  want.forEach(id => { if (!seen.has(id)) err(f + ':' + id, 'missing native row'); });
  counts[f] = { target: want.length, native: have.length, complete: ok };
});

/* ---------- target-side alignment and per-kind rules ---------- */
n.checks.forEach(r => { const tr = tIx.checks.get(r.id); if (!tr) return; if ((tr.o || []).some(x => x == null) && !Array.isArray(r.o)) err('checks:' + r.id + '.o', 'prose options missing'); });
n.practice.forEach(r => {
  const tr = tIx.practice.get(r.id); if (!tr) return; const w = 'practice:' + r.id;
  ['q', 'p', 'why', 'hint'].forEach(k => { if (typeof r[k] === 'string' && r[k].length + (k === 'hint' && tr.hint ? tr.hint.ko.length + (tr.hint.sep || '').length : 0) > 400) err(w + '.' + k, 'longer than 400 characters: the app truncates it'); });
  (r.o || []).forEach((o, j) => { if (o != null && String(o).length > 200) err(w + '.o[' + j + ']', 'option longer than 200 characters'); });
});
n.dialog.forEach(r => { const ref = enIx.dialog.get(r.id); if (ref && typeof r.tr === 'string' && (r.tr.split(' / ').length !== ref.tr.split(' / ').length)) err('dialog:' + r.id + '.tr', 'keep one " / " between the two lines (' + (ref.tr.split(' / ').length - 1) + ' in English)'); });
n.sentences.forEach(r => { if (/[{}]/.test(r.gloss || '')) err('sentences:' + r.id + '.gloss', 'braces are not allowed in an example gloss'); });

/* deck labels: become object keys in the pack */
const labels = new Map(); n.decks.forEach(r => { const l = String(r.label || '').trim(); if (!l) return; if (l === 'My phrases') err('decks:' + r.id + '.label', 'reserved: the runtime adds its own "My phrases" deck'); if (labels.has(l)) err('decks:' + r.id + '.label', 'duplicate deck label "' + l + '" (also ' + labels.get(l) + ')'); labels.set(l, r.id); if (/^Hangul|^Pronunciation/.test(l) && nat !== 'en') warn('decks:' + r.id + '.label', 'starts with Hangul/Pronunciation: the runtime treats such decks as letter decks when features.script is on'); });
const gnames = new Set(); n.groups.forEach(r => { if (gnames.has(r.name)) warn('groups:' + r.id, 'duplicate group name'); gnames.add(r.name); });

/* ---------- lesson bodies ---------- */
const senIds = new Set(t.sentences.map(r => r.id)), usedSen = new Set();
const CLEAN_TAGS = /<\/?(script|iframe|object|embed|style|link|meta|form|input|img|svg)\b[^>]*>/i, ON_ATTR = /\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/i;
const tagBag = h => { const m = {}; (String(h).match(/<\/?[a-z0-9]+/gi) || []).forEach(x => m[x.toLowerCase()] = (m[x.toLowerCase()] || 0) + 1); return m; };
let bodiesOk = 0;
const files = fs.existsSync(path.join(H.N, 'lessons')) ? fs.readdirSync(path.join(H.N, 'lessons')).filter(f => f.endsWith('.html')) : [];
files.forEach(f => { if (!t.lessons.some(l => l.id + '.html' === f)) err('lessons/' + f, 'orphan lesson body: no such lesson id in the target half'); });
t.lessons.forEach(l => {
  const w = 'lessons/' + l.id + '.html', h = n.bodies[l.id], ref = en.bodies[l.id];
  if (h == null) return err(w, 'missing lesson body file');
  if (!h.trim()) return err(w, 'empty lesson body');
  let good = true;
  const tk = L.tokens(h), tr = L.tokens(ref);
  tk.forEach(x => { const m = x.match(/^\{\{(ex|strokes):([^}]*)\}\}$/); if (!m) { err(w, 'unknown token ' + x); good = false; return; } if (m[1] === 'ex') { if (!senIds.has(m[2])) { err(w, 'token ' + x + ' does not resolve to a target sentence'); good = false; } usedSen.add(m[2]); } });
  if (tk.join('') !== tr.join('')) { err(w, 'tokens differ from the English body (same tokens, same order required): ' + tk.length + ' vs ' + tr.length); good = false; }
  if (/\{\{(?![a-z]+:[^}]*\}\})|(^|[^}])\}\}/.test(h.replace(L.TOKEN_RX, ''))) { err(w, 'broken token braces'); good = false; }
  const a = [...new Set(L.hangulSet(h.replace(L.TOKEN_RX, ' ')))].sort().join(' '), b = [...new Set(L.hangulSet(ref.replace(L.TOKEN_RX, ' ')))].sort().join(' ');
  const lw = waived(L.byId(n.lessons).get(l.id), 'hangul');
  if (a !== b) { const A = a.split(' '), B = b.split(' '); (lw ? warn : err)(w, 'Hangul differs from the English' + ' · missing ' + B.filter(x => x && !A.includes(x)).join(' ') + ' · extra ' + A.filter(x => x && !B.includes(x)).join(' ') + (lw ? ' (waived on lessons:' + l.id + ')' : '')); if (!lw) good = false; }
  if (CLEAN_TAGS.test(h)) { err(w, 'contains a tag the pack path strips: ' + h.match(CLEAN_TAGS)[0]); good = false; }
  if (ON_ATTR.test(h)) { err(w, 'contains text the pack path would cut as an event attribute: "' + h.match(ON_ATTR)[0].trim() + '" (e.g. " once = …"); rephrase'); good = false; }
  if (/javascript:/i.test(h)) { err(w, 'contains "javascript:"'); good = false; }
  const ta = tagBag(h), tb = tagBag(ref); const diffTags = Object.keys(Object.assign({}, ta, tb)).filter(k => ta[k] !== tb[k] && /^<\/?(h3|div|table|tr|td|th|ul|ol|li)$/.test(k));
  if (diffTags.length) warn(w, 'structure differs from the English: ' + diffTags.map(k => k + ' ' + (tb[k] || 0) + '→' + (ta[k] || 0)).join(', '));
  if (good) bodiesOk++;
});
t.sentences.forEach(s => { if (!usedSen.has(s.id)) warn('sentences:' + s.id, 'not used by any lesson body'); });
counts['lessons/*.html'] = { target: t.lessons.length, native: files.length, complete: bodiesOk };

/* ---------- assembled pack: shape, merged options, pack-level fields ---------- */
const nc = n.course;
if (!nc.name || !String(nc.name).trim()) err('course.json', 'name (the course name in the learner language) is empty');
if (nc.native && nc.native !== nat) err('course.json', 'native is "' + nc.native + '", expected "' + nat + '"');
Object.keys(nc).forEach(k => { if (!['native', 'name', 'brand', '_note'].includes(k)) err('course.json', 'unknown field ' + k); });
if (n.ui && (typeof n.ui !== 'object' || Array.isArray(n.ui))) err('ui.json', 'must be an object {"English UI string": "translation"}');
else Object.entries(n.ui || {}).forEach(([k, v]) => { if (typeof v !== 'string' || !v.trim()) err('ui.json', 'empty value for "' + k + '"'); });
let pack = null;
try { pack = assemble(nat, tgt, { dir: DIR, lenient: true }).pack; } catch (e) { err('assemble', e.message); }
if (pack) {
  const src = fs.readFileSync(L.SRC, 'utf8');
  if (!/^[a-z]{2,3}-[a-z]{2,4}$/.test(pack.id)) err('pack', 'id ' + pack.id + ' fails the runtime id pattern');
  [nat, tgt].forEach(c => { if (!new RegExp('[{,]' + c + ':\\{name:').test(src)) err('pack', 'LANGS has no entry "' + c + '": validCourse() would reject the pack'); });
  Object.entries(pack.PRACTICE).forEach(([lid, list]) => { if (list.length > 60) err('practice:' + lid, 'more than 60 items: the app drops the rest'); list.forEach((it, i) => { if (it.o && new Set(it.o).size !== it.o.length) err('practice:' + lid + '.' + String(i + 1).padStart(2, '0'), 'two options are identical after translation: the app drops one'); }); });
  Object.entries(pack.CHECKS).forEach(([lid, list]) => list.forEach((c, i) => { if (new Set(c[1]).size !== c[1].length) err('checks:' + lid + '.k' + (i + 1), 'two options are identical after translation'); }));
  const dl = Object.keys(pack.DECKS); if (dl.length !== t.decks.length) err('pack', 'deck labels collide: ' + t.decks.length + ' decks became ' + dl.length + ' keys');
}

/* ---------- Korean trainers: trainer.json + roles/kinds (docs/TRAINERS-PLAN.md §5.4) ---------- */
const isObj = x => x && typeof x === 'object' && !Array.isArray(x);
const TM = t.trainer, ET = en.trainer, NT = n.trainer;
const trainerCounts = { sections: 0, complete: 0 };
const C2 = t.course;
if (tgt === 'ko') {
  const deckIds = new Set(t.decks.map(d => d.id)), grpIds = new Set((C2.groups || []).map(g => g.id));
  Object.entries(C2.roles || {}).forEach(([k, v]) => (Array.isArray(v) ? v : [v]).forEach(id => { if (!(Array.isArray(v) ? grpIds : deckIds).has(id)) err('course.json roles.' + k, 'id ' + id + ' is not a target ' + (Array.isArray(v) ? 'group' : 'deck')); }));
  Object.entries(C2.kinds || {}).forEach(([k, v]) => (v || []).forEach(id => { if (!deckIds.has(id)) err('course.json kinds.' + k, 'id ' + id + ' is not a target deck'); }));
  if (!TM) warn('target trainer.json', 'missing: run export_ko.js (trainer keys cannot be checked)');
  if (!ET) err('native/en trainer.json', 'missing: the English trainer text is the reference (run export_ko.js)');
}
/* key paths of a trainer object, minus _notes; hangul.alt is authored per language (rules below, never key parity); defaultMode is optional */
const tPaths = (o, p, out) => { Object.keys(o).forEach(k => { if (k[0] === '_') return; const q = p ? p + '.' + k : k; if (q === 'hangul.alt' || q === 'hangul.defaultMode') return; const v = o[k]; if (isObj(v)) tPaths(v, q, out); else out.push(q); }); return out; };
const getP = (o, q) => q.split('.').reduce((a, k) => (a && typeof a === 'object' && Object.prototype.hasOwnProperty.call(a, k)) ? a[k] : undefined, o);
const slots = s => [...new Set((String(s).match(/%[1-9]/g) || []))].sort().join(',');
const trWaived = (q) => { const parts = q.split('.'); for (let i = parts.length - 1; i >= 0; i--) { const o = getP(NT, parts.slice(0, i).join('.')) || (i === 0 ? NT : null); if (o && Array.isArray(o._waive) && o._waive.includes('hangul')) return true; } return false; };
if (tgt === 'ko' && ET && NT) {
  const W = 'trainer.json';
  if (!isObj(NT)) err(W, 'must be an object shaped like native/en/' + tgt + '/trainer.json');
  else {
    const enPaths = tPaths(ET, '', []), sections = [...new Set(enPaths.map(q => q.split('.')[0]))];
    Object.keys(NT).forEach(k => { if (k[0] !== '_' && !sections.includes(k)) err(W + ' ' + k, 'orphan section (not in the English trainer.json)'); });
    sections.forEach(sec => {
      if (!(sec in NT)) { warn(W + ' ' + sec, 'section absent: that trainer stays off for this course'); return; }
      trainerCounts.sections++; let good = true;
      enPaths.filter(q => q.split('.')[0] === sec).forEach(q => {
        const rv = getP(ET, q), v = getP(NT, q), w = W + ' ' + q;
        if (v === undefined) { err(w, 'missing (the English has it)'); good = false; return; }
        if (typeof rv === 'boolean') { if (typeof v !== 'boolean') { err(w, 'must be true or false'); good = false; } return; }
        if (typeof v !== 'string' || !v.trim()) { err(w, 'empty or not a string'); good = false; return; }
        if (slots(v) !== slots(rv)) { err(w, 'slots ' + (slots(v) || 'none') + ' differ from the English ' + (slots(rv) || 'none')); good = false; }
        const a = [...new Set(L.hangulSet(v))].sort().join(' '), b = [...new Set(L.hangulSet(rv))].sort().join(' ');
        if (a !== b) { (trWaived(q) ? warn : err)(w, 'Hangul differs from the English · English: ' + (b || 'none') + ' · here: ' + (a || 'none')); if (!trWaived(q)) good = false; }
        if (/[{}]/.test(v)) { err(w, 'braces are not allowed in trainer text (slots are %1..%9)'); good = false; }
        if (v.length > 200) { err(w, 'longer than 200 characters'); good = false; }
        if (/</.test(v) && (q !== 'hangul.ui.empty' || /<(?!\/?b>)/.test(v))) { err(w, 'HTML is not allowed here' + (q === 'hangul.ui.empty' ? ' (only <b>…</b>)' : '')); good = false; }
      });
      /* orphans inside a section */
      tPaths({ [sec]: NT[sec] }, '', []).forEach(q => { if (getP(ET, q) === undefined) err(W + ' ' + q, 'orphan key (not in the English trainer.json)'); });
      if (good) trainerCounts.complete++;
    });
    /* Korean keys against the target mirror */
    if (TM) {
      const words = TM.words.cv.concat(TM.words.f), m = getP(NT, 'hangul.mean');
      if (isObj(m)) words.forEach(wd => { if (typeof m[wd] !== 'string' || !m[wd].trim()) err(W + ' hangul.mean.' + wd, 'missing meaning for a Hangul drill word'); });
      const keySets = { 'gloss.PART': TM.part, 'gloss.ENDS': TM.ends, 'gloss.QW': TM.qw, 'gloss.CONN': TM.conn, 'gloss.COUNT': TM.count, koui: TM.koui, 'sound.rules': TM.soundRules, 'conj.labels': TM.conjFields, 'conj.irregular': TM.conjIrregular, 'numbers.hint': TM.numKinds, 'numbers.counter': TM.counters };
      if (nat === 'en') Object.entries(keySets).forEach(([q, ks]) => { const o = getP(NT, q); if (!isObj(o)) return; const have = Object.keys(o).filter(k => k[0] !== '_'); ks.forEach(k => { if (!have.includes(k)) err(W + ' ' + q + '.' + k, 'engine key missing from the English trainer.json'); }); have.forEach(k => { if (!ks.includes(k)) err(W + ' ' + q + '.' + k, 'not an engine key (target/ko/trainer.json)'); }); });
      const bx = getP(NT, 'build.extra'); if (isObj(bx)) { const ko = new Set((C2.build || []).map(b => b.ko)); Object.keys(bx).forEach(k => { if (k[0] !== '_' && !ko.has(k)) err(W + ' build.extra.' + k, 'not a target Build sentence'); }); }
    }
    /* typed-answer alternates (TRAINERS-PLAN §3.3): authored per language, not translated */
    const A = getP(NT, 'hangul.alt'), dm = getP(NT, 'hangul.defaultMode');
    if (dm !== undefined && dm !== 'type' && dm !== 'pick') err(W + ' hangul.defaultMode', 'must be "type" or "pick"');
    if (A !== undefined && TM) {
      const J = TM.jamo, canon = { L: {}, V: {}, T: {} }; ['L', 'V', 'T'].forEach(k => J[k].forEach(r => canon[k][r[0]] = r[2][0]));
      const EN_OK = { V: { 'ㅓ': ['u'] } }; /* the en exception kept for en-ko (B9): ㅓ "u" equals ㅜ's canonical "u" */
      const allowed = (k, j, v) => nat === 'en' && EN_OK[k] && (EN_OK[k][j] || []).includes(v);
      const sylCanon = new Map(); J.L.forEach(l => J.V.forEach(v => sylCanon.set(l[2][0] + v[2][0], l[0] + v[0])));
      if (!isObj(A)) err(W + ' hangul.alt', 'must be an object {V, L, T, sh, input}');
      else {
        Object.keys(A).forEach(k => { if (k[0] !== '_' && !['V', 'L', 'T', 'sh', 'input'].includes(k)) err(W + ' hangul.alt.' + k, 'unknown field (allowed: V, L, T, sh, input)'); });
        ['L', 'V', 'T'].forEach(k => { const M = A[k]; if (M === undefined) return; if (!isObj(M)) { err(W + ' hangul.alt.' + k, 'must be an object {jamo: [spellings]}'); return; }
          Object.entries(M).forEach(([j, list]) => { if (j[0] === '_') return; const w = W + ' hangul.alt.' + k + '.' + j;
            if (!(j in canon[k])) { err(w, 'not a ' + k + ' jamo of the engine table'); return; }
            if (!Array.isArray(list)) { err(w, 'must be a list of spellings'); return; }
            list.forEach(v => {
              if (typeof v !== 'string' || !/^[a-z]+$/.test(v)) { err(w, 'spelling "' + v + '" must be [a-z]+'); return; }
              const other = Object.keys(canon[k]).find(x => x !== j && canon[k][x] === v);
              if (other && !allowed(k, j, v)) err(w, '"' + v + '" is the canonical spelling of ' + other + ': it would merge ' + j + ' and ' + other + ', which the course teaches apart');
              if (k === 'L') J.V.forEach(vr => { const hit = sylCanon.get(v + vr[2][0]); if (hit && hit[0] !== j && !allowed(k, j, v)) err(w, '"' + v + '" + ' + vr[0] + ' reads "' + v + vr[2][0] + '" = canonical ' + hit + ': it would merge two syllables'); });
              if (k === 'V') J.L.forEach(lr => { const hit = sylCanon.get(lr[2][0] + v); if (hit && hit[1] !== j && !allowed(k, j, v)) err(w, lr[0] + ' + "' + v + '" reads "' + lr[2][0] + v + '" = canonical ' + hit + ': it would merge two syllables'); });
            }); }); });
        if (A.sh !== undefined && (!Array.isArray(A.sh) || A.sh.some(v => typeof v !== 'string' || !/^[a-z]+$/.test(v)))) err(W + ' hangul.alt.sh', 'must be a list of [a-z]+ spellings');
        const I = A.input;
        if (I !== undefined) { if (!isObj(I)) err(W + ' hangul.alt.input', 'must be an object {fold, map, rewrite}');
          else { Object.keys(I).forEach(k => { if (k[0] !== '_' && !['fold', 'map', 'rewrite'].includes(k)) err(W + ' hangul.alt.input.' + k, 'unknown field'); });
            if (I.fold !== undefined && typeof I.fold !== 'boolean') err(W + ' hangul.alt.input.fold', 'must be true or false');
            (I.map || []).forEach((p, i) => { if (!Array.isArray(p) || typeof p[0] !== 'string' || !p[0] || typeof p[1] !== 'string') err(W + ' hangul.alt.input.map[' + i + ']', 'must be ["from", "to"] with a non-empty "from"'); else if (!/^[a-z]*$/.test(p[1])) err(W + ' hangul.alt.input.map[' + i + ']', 'the replacement must be [a-z]*'); });
            (I.rewrite || []).forEach((p, i) => { if (!Array.isArray(p) || typeof p[0] !== 'string' || typeof p[1] !== 'string') { err(W + ' hangul.alt.input.rewrite[' + i + ']', 'must be ["regex", "replacement"]'); return; } try { new RegExp(p[0], 'g'); } catch (e) { err(W + ' hangul.alt.input.rewrite[' + i + ']', 'regex does not compile: ' + e.message); } if (!/^[a-z]*$/.test(p[1])) err(W + ' hangul.alt.input.rewrite[' + i + ']', 'the replacement must be [a-z]*'); }); } }
        /* answersFor with this table applied: the combination count must stay under the engine cap (400) */
        const row = (k, r) => { const add = (isObj(A[k]) && Array.isArray(A[k][r[0]])) ? A[k][r[0]].filter((v, i, a) => typeof v === 'string' && /^[a-z]+$/.test(v) && !r[2].includes(v) && a.indexOf(v) === i) : []; return r[2].concat(add); };
        const tab = { L: J.L.map(r => row('L', r)), V: J.V.map(r => row('V', r)), T: J.T.map(r => row('T', r)) }, sh = Array.isArray(A.sh) ? A.sh.length : 0;
        let worst = [0, ''];
        TM.words.cv.concat(TM.words.f).forEach(wd => { let n2 = 1; for (const ch of wd) { const c = ch.charCodeAt(0) - 0xAC00; if (c < 0 || c > 11171) { n2 = 0; break; } const li = Math.floor(c / 588), vi = Math.floor(c % 588 / 28), ti = c % 28; let ls = tab.L[li].length; if (J.L[li][0] === 'ㅅ' && (J.V[vi][0] === 'ㅣ' || J.V[vi][2][0].startsWith('y'))) ls += sh; n2 *= ls * tab.V[vi].length * tab.T[ti].length; } if (n2 > worst[0]) worst = [n2, wd]; });
        if (worst[0] >= 400) err(W + ' hangul.alt', 'with these alternates ' + worst[1] + ' has ' + worst[0] + ' accepted spellings: the engine stops at 400, so later ones would be dropped');
        trainerCounts.maxSpellings = worst;
      }
    }
  }
} else if (tgt === 'ko' && ET && !NT) warn('trainer.json', 'absent: every Korean trainer stays off for this course');

/* ---------- words remaining ---------- */
let words = 0, wordsTotal = 0; const wordsBy = {};
const fieldWords = (f, r, ref) => { Object.keys(ref).forEach(k => { if (META.has(k)) return; const R = Array.isArray(ref[k]) ? ref[k] : [ref[k]], V = Array.isArray(ref[k]) ? (r && Array.isArray(r[k]) ? r[k] : []) : [r ? r[k] : null];
  R.forEach((s, j) => { if (s == null) return; const wc = L.words(s); if (!wc) return; wordsTotal += wc; const v = V[j]; if (v == null || !String(v).trim() || (nat !== 'en' && String(v) === String(s))) { words += wc; wordsBy[f] = (wordsBy[f] || 0) + wc; } }); }); };
Object.keys(expect).forEach(f => { const ix = L.byId(n[f]); en[f].forEach(ref => fieldWords(f, ix.get(ref.id), ref)); });
if (ET) tPaths(ET, '', []).forEach(q => { const s = getP(ET, q); if (typeof s !== 'string') return; const wc = L.words(s); if (!wc) return; wordsTotal += wc; const v = NT ? getP(NT, q) : undefined; if (typeof v !== 'string' || !v.trim() || (nat !== 'en' && v === s)) { words += wc; wordsBy['trainer.json'] = (wordsBy['trainer.json'] || 0) + wc; } });
if (TM && nat !== 'en') (TM.uiKeys || []).forEach(k => { const wc = L.words(k); wordsTotal += wc; const v = (n.ui || {})[k]; if (typeof v !== 'string' || !v.trim() || v === k) { words += wc; wordsBy['ui.json'] = (wordsBy['ui.json'] || 0) + wc; } });
t.lessons.forEach(l => { const ref = en.bodies[l.id] || '', h = n.bodies[l.id], wc = L.words(ref); wordsTotal += wc; if (h == null || !h.trim() || (nat !== 'en' && h === ref)) { words += wc; wordsBy['lessons/*.html'] = (wordsBy['lessons/*.html'] || 0) + wc; } });

/* ---------- report ---------- */
console.log('== validate ' + nat + '-' + tgt + ' (' + path.relative(L.ROOT, H.N) + ' against ' + path.relative(L.ROOT, H.T) + (nat === 'en' ? '' : ', reference native/en/' + tgt) + ') ==');
Object.entries(counts).forEach(([f, c]) => console.log('  ' + f.padEnd(16) + ' target ' + String(c.target).padStart(4) + '  native ' + String(c.native).padStart(4) + '  complete ' + String(c.complete).padStart(4)));
console.log('  ui.json          ' + Object.keys(n.ui || {}).length + ' override(s)');
if (tgt === 'ko') console.log('  trainer.json     ' + (NT ? trainerCounts.sections + ' section(s), ' + trainerCounts.complete + ' complete' + (trainerCounts.maxSpellings ? ' · most accepted spellings: ' + trainerCounts.maxSpellings[1] + ' ' + trainerCounts.maxSpellings[0] : '') : 'absent (trainers off)') + (pack ? ' · features on: ' + (Object.keys(pack.features).filter(f => pack.features[f]).join(', ') || 'none') : ''));
console.log('words remaining: ' + words + ' of ' + wordsTotal + (Object.keys(wordsBy).length ? '  (' + Object.entries(wordsBy).map(([k, v]) => k + ' ' + v).join(', ') + ')' : ''));
console.log('errors: ' + errors.length); errors.slice(0, 200).forEach(x => console.log('  ERROR ' + x)); if (errors.length > 200) console.log('  … ' + (errors.length - 200) + ' more');
console.log('warnings: ' + warns.length); warns.slice(0, 60).forEach(x => console.log('  warn  ' + x)); if (warns.length > 60) console.log('  … ' + (warns.length - 60) + ' more');
process.exit(errors.length ? 1 : 0);
