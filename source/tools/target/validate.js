/* usage: node tools/target/validate.js <t> [pack]  — checks an en-<t> course pack against tools/target/<t>/profile.json and docs/PRACTICE-SPEC.md.
   Flags: --partial  lessons and decks named in the profile may still be missing (while writers are working). Exit 1 on any FAIL. */
const fs = require('fs'), vm = require('vm'); const LIB = require('./lib.js');
const args = process.argv.slice(2); const PARTIAL = args.includes('--partial'); const a2 = args.filter(a => a !== '--partial');
const T = LIB.check(a2[0]); const FILE = a2[1] || LIB.packPath(T); const P = LIB.profile(T);
const ctx = { LANGAPP_PACKS: { course: {}, i18n: {} } }; ctx.window = ctx; vm.createContext(ctx); vm.runInContext(fs.readFileSync(FILE, 'utf8'), ctx); const C = ctx.LANGAPP_PACKS.course['en-' + T];
const bad = [], warn = []; const ok = (c, m) => { if (!c) bad.push(m); };
if (!C) { console.log('FAIL: no en-' + T + ' course in ' + FILE); process.exit(1); }
const TS = new RegExp(P.targetScript, 'u'); const PRON = P.pronPattern ? new RegExp(P.pronPattern, 'u') : null; const KW = new RegExp(P.standingRule.keywords, P.standingRule.flags || 'i');
const pn = s => String(s).normalize('NFC').toLowerCase().replace(/[’‘`´ʼ]/g, "'").replace(/[.,!?~…。、！？，．～¿¡]/g, '').replace(/["“”«»「」『』]/g, '').replace(/\s+/g, ' ').trim();
const fold = s => String(s).normalize('NFC').replace(/ñ/g, '\u0001').replace(/й/g, '\u0002').replace(/ё/g, '\u0003').replace(/Й/g, '\u0004').replace(/Ё/g, '\u0005').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u0001/g, 'ñ').replace(/\u0002/g, 'й').replace(/\u0003/g, 'ё').replace(/\u0004/g, 'Й').replace(/\u0005/g, 'Ё').replace(/[đĐ]/g, 'd').normalize('NFC'); /* ñ is its own letter */
const invisible = /[​-‏‪-‮⁦-⁩﻿]/;
/* decks */
const deckNames = Object.keys(C.DECKS); const want = P.decks.map(d => d.name);
if (!PARTIAL) want.forEach(n => ok(C.DECKS[n], 'deck missing: ' + n));
const targets = new Map(); let cards = 0;
deckNames.forEach(n => { const d = C.DECKS[n]; const ms = d.map(c => c[2]); ms.forEach((m, i) => { if (ms.indexOf(m) !== i) bad.push('deck «' + n + '»: two cards share the meaning «' + m + '» (' + d[ms.indexOf(m)][0] + ' / ' + d[i][0] + ') — quizzes show the meaning, so make them differ'); }); ok(d.length >= 12 && d.length <= 30, 'deck «' + n + '» has ' + d.length + ' cards (12–30)'); const seen = new Set();
  d.forEach((c, i) => { cards++; const w = 'deck «' + n + '» card ' + (i + 1) + ' (' + c[0] + ')';
    ok(c.length === 4 && c[0] && c[2], w + ': target and meaning are required'); ok(TS.test(c[0]), w + ': target has no ' + P.nameEn + ' text'); ok(!invisible.test(c.join('')), w + ': invisible character');
    if (P.pron === 'required') ok(c[1], w + ': pron missing'); if (c[1] && PRON) ok(PRON.test(c[1]), w + ': pron «' + c[1] + '» does not match pronPattern'); if (P.pron === 'none') ok(!c[1], w + ': pron must be empty');
    ok(!seen.has(c[0]), w + ': duplicate in deck'); seen.add(c[0]); if (targets.has(c[0]) && targets.get(c[0]) !== n) warn.push('card «' + c[0] + '» is in two decks: ' + targets.get(c[0]) + ', ' + n); targets.set(c[0], n); }); });
Object.keys(C.DIALOG).forEach(k => ok(targets.has(k), 'DIALOG key is not a card: ' + k)); Object.keys(C.EXAMPLES).forEach(k => ok(targets.has(k), 'EXAMPLES key is not a card: ' + k));
/* lessons */
const ids = C.LESSONS.map(l => l.id); const order = P.lessons.map(l => l.id);
if (!PARTIAL) order.forEach(id => ok(ids.includes(id), 'lesson missing: ' + id));
ok(JSON.stringify(ids) === JSON.stringify(order.filter(id => ids.includes(id))), 'lesson order differs from profile.json');
const allowedTag = /^<\/?(p|h3|ul|li|b|i|table|tr|th)>$|^<table dir="(ltr|rtl)">$|^<td( class="k")?>$|^<\/td>$|^<div class="(tip|tbl)">$|^<\/div>$/;
const prons = new Map(); const notePron = (t, p, where) => { if (!p) return; if (prons.has(t) && prons.get(t).p !== p) bad.push('pron differs for «' + t + '»: ' + prons.get(t).p + ' (' + prons.get(t).where + ') vs ' + p + ' (' + where + ')'); else prons.set(t, { p, where }); };
deckNames.forEach(n => C.DECKS[n].forEach(c => notePron(c[0], c[1], 'deck ' + n)));
let items = 0; const stat = [];
C.LESSONS.forEach(L => { const w = 'lesson ' + L.id; const pl = P.lessons.find(x => x.id === L.id) || {};
  ok(L.title && L.blurb && L.body, w + ': title, blurb and body are required'); ok(C.DECKS[L.deck] || PARTIAL, w + ': deck «' + L.deck + '» does not exist'); if (pl.deck) ok(L.deck === pl.deck, w + ': deck «' + L.deck + '» but the profile says «' + pl.deck + '»');
  const body = L.body.replace(/\{\{ex:[^}]*\}\}/g, ''); (body.match(/<[^>]*>/g) || []).forEach(t => ok(allowedTag.test(t), w + ': disallowed tag ' + t)); ok(!invisible.test(L.body), w + ': invisible character'); ok(!/\/\//.test(L.body.replace(/https?:\/\//g, '')), w + ': // in body');
  const ex = [...L.body.matchAll(/\{\{ex:([^|}]*)\|([^|}]*)\|([^|}]*)\}\}/g)]; ok(ex.length >= 3, w + ': needs at least 3 example rows, has ' + ex.length); ok((L.body.match(/\{\{ex:/g) || []).length === ex.length, w + ': malformed example row');
  ex.forEach(m => { ok(TS.test(m[1]), w + ': example «' + m[1] + '» has no ' + P.nameEn + ' text'); ok(m[3].trim(), w + ': example «' + m[1] + '» has no meaning'); if (P.pron === 'required') ok(m[2].trim(), w + ': example «' + m[1] + '» has no pron'); if (m[2].trim() && PRON) ok(PRON.test(m[2].trim()), w + ': example pron «' + m[2] + '» does not match pronPattern'); notePron(m[1].trim(), m[2].trim(), w); });
  const ck = C.CHECKS[L.id] || []; ok(ck.length === 3, w + ': needs 3 check questions, has ' + ck.length); ck.forEach((q, i) => { ok(Array.isArray(q) && q.length === 4 && q[0] && Array.isArray(q[1]) && q[1].length === 4 && Number.isInteger(q[2]) && q[2] >= 0 && q[2] < 4 && q[3], w + ' check ' + (i + 1) + ': shape [question, 4 options, answer index, why]'); if (Array.isArray(q[1])) ok(new Set(q[1]).size === 4, w + ' check ' + (i + 1) + ': duplicate options'); });
  ok(new Set(ck.map(q => q[2])).size > 1 || ck.length < 3, w + ': all three check answers sit at the same position');
  const pr = C.PRACTICE[L.id] || []; const n = k => pr.filter(x => x.t === k).length; ok(pr.length >= 12 && pr.length <= 16, w + ': practice has ' + pr.length + ' items (12–16)'); ok(n('mc') >= 4 && n('order') >= 3 && n('fill') >= 3 && n('type') >= 3, w + ': practice mix mc ' + n('mc') + ' order ' + n('order') + ' fill ' + n('fill') + ' type ' + n('type') + ' (need ≥4/3/3/3)');
  ok(JSON.stringify(pr.map(x => x.t)) === JSON.stringify(pr.map(x => x.t).slice().sort((a, b) => ['mc', 'order', 'fill', 'type'].indexOf(a) - ['mc', 'order', 'fill', 'type'].indexOf(b))), w + ': practice order must be mc, order, fill, type');
  let hitO = 0, hitT = 0;
  pr.forEach((x, i) => { items++; const v = w + '#' + (i + 1) + ' (' + x.t + ')'; ok(x.why && x.why.length >= 12, v + ': why missing or too short'); ok(!invisible.test(JSON.stringify(x)), v + ': invisible character');
    if (x.t === 'mc') { ok(x.q && x.o && x.o.length === 4 && new Set(x.o.map(pn)).size === 4, v + ': needs a question and 4 distinct options'); }
    if (x.t === 'order') { ok(x.p && x.a && x.a.length >= 2 && x.a.length <= 9, v + ': 2–9 tiles'); ok(x.x && x.x.length >= 1 && x.x.length <= 3, v + ': 1–3 distractor tiles'); ok(TS.test(x.a.join(' ')), v + ': answer has no ' + P.nameEn + ' text'); (x.x || []).forEach(d => ok(!x.a.some(t => pn(t) === pn(d)), v + ': distractor «' + d + '» is also an answer tile')); if (KW.test(x.why)) hitO++; }
    if (x.t === 'fill') { ok(x.q && (x.q.match(/__/g) || []).length === 1, v + ': sentence needs exactly one __'); ok(x.p, v + ': meaning line missing'); ok(x.a && x.a.length >= 1 && x.o && x.o.length === 3, v + ': needs answers and 3 distractors'); (x.o || []).forEach(d => { ok(!(x.a || []).some(a => pn(a) === pn(d)), v + ': distractor «' + d + '» equals an answer'); if ((x.a || []).some(a => fold(pn(a)) === fold(pn(d)))) ok(x.strict, v + ': distractor «' + d + '» differs from the answer only by an accent — mark the item !strict'); }); }
    if (x.t === 'type') { ok(x.p && x.a && x.a.length >= 1 && x.hint, v + ': needs prompt, answers and hint'); (x.a || []).forEach(a => { ok(TS.test(a) || (P.pronAnswers && PRON && PRON.test(a)), v + ': answer «' + a + '» has no ' + P.nameEn + ' text'); ok(a.split(' ').length <= 9, v + ': answer too long (max 9 words)'); }); ok(x.x && x.x.length >= 1, v + ': needs fallback words'); const tl = (x.a || [''])[0].split(' '); (x.x || []).forEach(d => tl.forEach((_, j) => { const alt = tl.slice(); alt[j] = d; if ((x.a || []).some(a => pn(a) === pn(alt.join(' ')))) bad.push(v + ': fallback word «' + d + '» can rebuild an accepted answer'); })); if (KW.test(x.why)) hitT++; } });
  ok(hitO >= (P.standingRule.minOrder || 2), w + ': only ' + hitO + ' order items test the standing rule (why must use: ' + P.standingRule.keywords + ')'); ok(hitT >= (P.standingRule.minType || 2), w + ': only ' + hitT + ' type items test the standing rule');
  stat.push(L.id + ' ' + pr.length + ' [' + hitO + '/' + hitT + ']'); });
if (!PARTIAL) { ok(deckNames.length >= 14, 'only ' + deckNames.length + ' decks'); ok(cards >= 230, 'only ' + cards + ' cards'); ok(Object.keys(C.DIALOG).length >= 40, 'only ' + Object.keys(C.DIALOG).length + ' dialogues (40+)'); ok(Object.keys(C.EXAMPLES).length >= 30, 'only ' + Object.keys(C.EXAMPLES).length + ' examples (30+)'); ok(C.PATTERNS.length >= 15, 'only ' + C.PATTERNS.length + ' patterns (15+)'); }
ok(Array.isArray(C.GREET) && C.GREET.length === 4, 'GREET needs 4 entries');
console.log('en-' + T + ': decks ' + deckNames.length + ' · cards ' + cards + ' · lessons ' + ids.length + '/' + order.length + ' · practice items ' + items + ' · dialogues ' + Object.keys(C.DIALOG).length + ' · examples ' + Object.keys(C.EXAMPLES).length + ' · patterns ' + C.PATTERNS.length);
console.log('practice [order/type standing-rule hits]: ' + stat.join(' | '));
if (warn.length) console.log('WARN\n - ' + warn.slice(0, 20).join('\n - '));
console.log(bad.length ? 'FAIL: ' + bad.length + ' problem(s)\n - ' + bad.join('\n - ') : 'PASS: all checks OK' + (PARTIAL ? ' (partial)' : ''));
process.exit(bad.length ? 1 : 0);
