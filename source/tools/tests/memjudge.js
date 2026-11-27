/* The card memory judge (iterations.md, entry MEM-1; summary in docs/HANDOFF.md): node tools/tests/memjudge.js [src/app.html] [--table]
   Runs the judge exactly as it stands in the app: the block between MEM-JUDGE-START and MEM-JUDGE-END is cut out of src/app.html and run with nothing else around it.
   1. Rules. A wrong answer never lengthens a memory and always leaves the card in "needs practice"; a right answer lengthens it at most 4 times; a repeat in the same
      sitting adds next to nothing; two right answers are not enough for "memorized"; one lapse a day at most; the three reasons for "needs practice"; the question types.
   2. Saved progress. A card saved before the judge reads as 1, 3, 7, 14 or 30 days by its box and is not changed by being read; no card is lost; what the judge writes
      reads back the same; a card that an older version of the app answered afterwards reads sanely; damaged values do no harm.
   3. Simulation with pass marks. Simulated learners whose true memory is known (a different forgetting curve from the judge's, on purpose) study for 60 days and then
      stay away. The words the judge puts on their cards are compared with the truth. --table prints every number.
   4. Risk (MEM-2, release B). The number that orders what comes back (Review, the quiz after each new five, the needs-practice list): the chance that a card is
      forgotten by this time tomorrow. It lies between 0 and 1, rises the longer a card goes unseen, falls as the memory gets longer, and a wrong answer never lowers it.
   5. Sharper evidence (MEM-3, release C). Answer speed: a slow right answer counts for less, never for more, and never turns into a loss. The recall mark: no card is
      called memorized on picks or "Got it" alone; the judge asks for a recall question exactly when a right pick would otherwise make the card memorized; a miss takes
      the mark away; cards saved before MEM-3 keep their judgement. The simulation is run again without the recall question and without the speed rule, to show what each
      changes. The simulated learners' answer times are an assumption (slower when the memory is weaker), not measurements.
   The pinned numbers (section 1, "the usual path") and the pass marks (section 3) are meant to fail when somebody retunes the judge: look at the table, then move them on purpose. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const args = process.argv.slice(2), TABLE = args.includes('--table');
const FILE = path.resolve(args.find(a => !a.startsWith('--')) || path.join(__dirname, '../../src/app.html'));
const src = fs.readFileSync(FILE, 'utf8'), A = src.indexOf('/* MEM-JUDGE-START'), Z = src.indexOf('/* MEM-JUDGE-END */');
let pass = 0, fail = 0;
const ok = (name, cond, detail) => { if (cond) { pass++; console.log('PASS ' + name); } else { fail++; console.log('FAIL ' + name + (detail === undefined ? '' : '  ' + JSON.stringify(detail).slice(0, 400))); } };
if (A < 0 || Z < A) { console.log('FAIL the judge block (MEM-JUDGE-START … MEM-JUDGE-END) is not in ' + FILE); process.exit(1); }
const block = src.slice(A, Z);
const NAMES = ['MJ_W', 'MJ_F', 'MJ_C', 'MJ_TYPES', 'MJ', 'MJ_CAL0', 'MJ_BOXDAYS', 'MJ_TCODE', 'MJ_STATES', 'mjClamp', 'mjRecall', 'mjLen', 'mjD0', 'mjDNext', 'mjForecast', 'mjCalStep', 'mjSpeed', 'mjRc', 'mjUpdate', 'mjOpen', 'mjWrongDays', 'mjWhy', 'mjStatus', 'mjAsk', 'mjDueIn', 'mjRisk', 'mjBox', 'mjFromBox', 'mjSync', 'mjRead', 'mjWrite'];
let J;
try { J = vm.runInNewContext('"use strict";' + block + '\n({' + NAMES.join(',') + '})', {}); } catch (e) { console.log('FAIL the judge block does not run on its own: ' + e.message); process.exit(1); }
ok('the judge is self-contained: no clock, no page, no saved state, no chance', !/\b(Date|document|window|localStorage|Math\.random|dayNum|memo)\b|\bS\.|\$\(/.test(block.replace(/\/\*[\s\S]*?\*\//g, '')));

/* ---------- helpers ---------- */
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const gauss = r => { let u = 0, v = 0; while (u === 0) u = r(); v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
const TYPES = ['pick', 'type', 'self', 'rec'], near = (a, b, e) => Math.abs(a - b) <= (e || 1e-9), f1 = x => +x.toFixed(1);
const sane = m => m && isFinite(m.st) && m.st >= J.MJ.minSt && m.st <= J.MJ.maxSt && isFinite(m.df) && m.df >= 1 && m.df <= 10 && Number.isInteger(m.rr) && m.rr >= 0 && m.rr <= 15 && Number.isInteger(m.nd) && m.nd >= 1 && m.nd <= 4 && (m.lw === 0 || m.lw === 1) && (m.rc === undefined || m.rc === 0 || m.rc === 1 || m.rc === 2);
/* what judge() in the app does with the pure functions, with days in place of milliseconds. s is a saved card, mem the saved personal numbers ({q,g,n}); returns what the app would save.
   MEM-3: a question that would be a pick becomes the recall question when the judge asks for one (mjAsk), as in Review and the quizzes; o.plain keeps the pick (the exam, the blitz, an older version). o.sp is the weight by speed */
function grade(s, okAns, now, type, mem, noCal, o) { o = o || {}; s = s || { box: 0, due: Math.floor(now), seen: 0, lapses: 0, last: 0 };
  const today = Math.floor(now), m = J.mjRead(s), t = m ? Math.max(0, now - s.last) : 0, same = !!m && Math.floor(s.last) === today, own = !!m && s.st > 0 && s.mb === s.box; let cal = mem && mem.q > 0 && mem.g > 0 ? mem : J.MJ_CAL0;
  if (type === 'pick' && !o.plain && J.mjAsk(m, t, same, cal)) type = 'rec';
  const before = { m, t, forecast: m ? J.mjForecast(m, t, type, cal) : -1, status: J.mjStatus(m, t, cal) };
  if (own && t >= J.MJ.minGap && !noCal) { const c2 = J.mjCalStep(m, okAns, t, type, cal); cal = mem = { q: +c2.q.toFixed(4), g: +c2.g.toFixed(4), n: ((mem && +mem.n) || 0) + 1 }; }
  const n = J.mjUpdate(m, okAns, t, same, type, cal, o.sp); s.seen = (+s.seen || 0) + 1; s.last = now; if (n.lapse) s.lapses = (+s.lapses || 0) + 1; J.mjWrite(s, n); s.due = okAns ? today + J.mjDueIn(n, cal) : today;
  return { s, mem, before, m: n, type }; }
const statusOf = (s, now, mem) => { const m = J.mjRead(s); return J.mjStatus(m, m ? Math.max(0, now - s.last) : 0, mem || J.MJ_CAL0); };
const whyOf = (s, now, mem) => { const m = J.mjRead(s); return J.mjWhy(m, m ? Math.max(0, now - s.last) : 0, mem || J.MJ_CAL0); };
/* a scripted path: steps are [time in days, right?, type]; returns the saved card after each step */
function walk(steps, mem) { let s = null; return steps.map(([t, o, ty]) => { const g = grade(s, o, t, ty || 'pick', mem, true); s = g.s; return { st: s.st, box: s.box, due: s.due, lapses: s.lapses, status: statusOf(s, t + 0.0005, mem), why: whyOf(s, t + 0.0005, mem) }; }); }

/* ---------- 1. rules ---------- */
(function rules() {
  ok('the memory length is the gap after which recall falls to 9 in 10', [0.1, 1, 7, 30, 365].every(L => near(J.mjRecall(L, L), 0.9, 1e-12)) && J.mjRecall(0, 5) === 1 && J.mjRecall(10, 5) < J.mjRecall(5, 5));
  const r = rng(20261124); const bad = { up: 0, notPractice: 0, notDue: 0, over4: 0, shrink: 0, sitting: 0, range: 0, forecast: 0, order: 0 }; let n = 0, firstBad = null; const note = (k, d) => { bad[k]++; if (!firstBad) firstBad = [k, d]; };
  for (let i = 0; i < 200000; i++) {
    const c = { st: Math.exp(r() * 8 - 2), df: 1 + r() * 9, rr: Math.floor(r() * 16), nd: 1 + Math.floor(r() * 4), lw: 0 }; c.lw = c.rr & 1 ? 0 : (r() < 0.5 ? 1 : 0);
    const gap = Math.exp(r() * 12 - 8), same = gap < 1 && r() < 0.6, type = TYPES[Math.floor(r() * 4)], T = J.MJ_TYPES[type], cal = r() < 0.3 ? J.MJ_CAL0 : { q: Math.exp(r() * 4.1 - 3), g: 0.5 + r() * 0.8 }; n++;
    const w = J.mjUpdate(c, false, gap, same, type, cal), k = J.mjUpdate(c, true, gap, same, type, cal), lift = same && c.nd === 1 && (c.rr & 1);
    if (w.st > c.st + 1e-12) note('up', { c, gap, type, w });
    if (J.mjStatus(w, 0, cal) !== 'practice' || J.mjWhy(w, 0, cal) !== 'miss' || J.mjStatus(w, 400, cal) !== 'practice') note('notPractice', { c, gap, type, w });
    if (J.mjDueIn(w, cal) !== 1 || w.lw !== 1) note('notDue', { c, w });
    if (k.st > Math.max(c.st * J.MJ.maxGain, lift ? T.s0 : 0) + 1e-9) note('over4', { c, gap, type, k });
    if (k.st < Math.min(c.st, J.MJ.maxSt) - 1e-12 || k.lw !== 0) note('shrink', { c, gap, type, k });
    if (c.st >= 1 && cal === J.MJ_CAL0 && gap <= 0.0007 && !lift && k.st > c.st * 1.01) note('sitting', { c, gap, type, k });
    if (!sane(w) || !sane(k)) note('range', { c, gap, w, k });
    const fc = J.mjForecast(c, gap, type, cal); if (!(fc >= T.g - 1e-12 && fc <= 1 + 1e-12)) note('forecast', { c, gap, type, fc });
    const due = J.mjDueIn(k, cal); if (!(Number.isInteger(due) && due >= 1 && due <= J.MJ.maxIvl)) note('order', { k, due });
  }
  ok('a wrong answer never lengthens a memory (' + n + ' random cards)', !bad.up, firstBad);
  ok('after a wrong answer the card needs practice, whatever came before and whatever the personal numbers', !bad.notPractice, firstBad);
  ok('after a wrong answer the card comes back the next day', !bad.notDue, firstBad);
  ok('a right answer lengthens a memory at most ' + J.MJ.maxGain + ' times', !bad.over4, firstBad);
  ok('a right answer never shortens a memory', !bad.shrink, firstBad);
  ok('a right answer one minute after the last adds under 1% to a memory of a day or more', !bad.sitting, firstBad);
  ok('every result stays in range (length ' + J.MJ.minSt + ' to ' + J.MJ.maxSt + ' days, difficulty 1 to 10, next review 1 to ' + J.MJ.maxIvl + ' days ahead)', !bad.range && !bad.order && !bad.forecast, firstBad);

  const PIN_UP = [[0, 1, 'learning'], [1, 3.2, 'learning'], [4, 10.1, 'memorized'], [14, 27.2, 'memorized']];
  /* the usual path, pinned: always right on the day the card falls due */
  const usual = type => { let s = null, t = 0.4; const out = []; for (let i = 0; i < 6; i++) { const g = grade(s, true, t, type, null, true); s = g.s; out.push([Math.floor(t), f1(s.st), statusOf(s, t + 0.0005)]); t = s.due + 0.4; } return out; };
  const up = usual('pick'), ut = usual('type'), us = usual('self');
  ok('picked right on every due day, the third question being the recall question: 1 day, then about 3, memorized on the third answer (day 4)', JSON.stringify(up.slice(0, 4)) === JSON.stringify(PIN_UP), up);
  const plainUp = (() => { let s = null, t = 0.4; const out = []; for (let i = 0; i < 6; i++) { s = grade(s, true, t, 'pick', null, true, { plain: true }).s; out.push([Math.floor(t), f1(s.st), statusOf(s, t + 0.0005)]); t = s.due + 0.4; } return out; })();
  ok('picked right six times with no recall question (the exam, the blitz): the memory grows as before, to ' + plainUp[5][1] + ' days, and the card is still learning', plainUp.every(x => x[2] === 'learning') && plainUp[2][1] === 9.2 && plainUp[5][1] >= 100, plainUp);
  ok('typed right on every due day: 1.5 days, then 6, memorized on the third answer (day 8)', JSON.stringify(ut.slice(0, 3)) === JSON.stringify([[0, 1.5, 'learning'], [2, 6, 'learning'], [8, 20, 'memorized']]), ut);
  ok('"Got it" alone counts least: half a day to start, and it never makes a card memorized', us[0][1] === 0.5 && us.every(x => x[2] === 'learning') && us[1][1] < up[1][1] && us[2][1] < up[2][1], us);
  ok('the question types rank typed, then recalled, then picked, then "Got it" for the same card and gap', (() => { const c = { st: 3, df: 5, rr: 3, nd: 2, lw: 0 }; const [p, t, s, rc] = TYPES.map(ty => J.mjUpdate(c, true, 3, false, ty, J.MJ_CAL0).st); return t > rc && rc > p && p > s && s > c.st; })());
  ok('a right pick counts for less the less likely it was that the card was known (a lucky guess)', (() => { const c = { st: 100, df: 10, rr: 15, nd: 4, lw: 0 }, part = t => (J.mjUpdate(c, true, t, false, 'pick', J.MJ_CAL0).st - c.st) / (J.mjUpdate(c, true, t, false, 'type', J.MJ_CAL0).st - c.st); /* share of a typed answer's gain that a pick earns: 0.8 when the card was surely known, less as that gets less likely */
    return part(30) < 0.8 && part(30) > 0.78 && part(300) < part(30) - 0.03 && near(J.mjForecast(c, 1e9, 'pick', J.MJ_CAL0), 0.25, 0.01) && J.mjForecast(c, 1e9, 'type', J.MJ_CAL0) < 0.01; })());

  /* two right answers are not enough */
  const late = TYPES.map(ty => { const p = walk([[0.4, true, ty], [400.4, true, ty]]); return p[1]; });
  ok('a new card and one more right answer, however late, is never memorized (pick, type, "Got it", recall)', late.every(x => x.status === 'learning' && x.st < J.MJ.tMem), late);
  ok('learned once, ignored for 30 days, then picked right: 4 days and still learning', (() => { const p = walk([[0.4, true], [30.4, true]]); return p[1].st === 4 && p[1].status === 'learning' && p[1].due === 34; })());

  /* one sitting */
  const sit = walk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => [0.4 + i * 0.0007, true]));
  ok('ten right answers in one sitting leave a new card where the first one put it', sit[9].st <= sit[0].st * 1.05 && sit[9].status === 'learning' && sit[9].due === 1, sit[9]);
  const sitMiss = walk([[0.4, false]].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => [0.4 + i * 0.0007, true])));
  ok('a card missed and then answered right ten times in the same sitting gains under a tenth, still needs practice and comes back tomorrow', sitMiss[10].st <= sitMiss[0].st * 1.1 && sitMiss[10].st >= sitMiss[0].st && sitMiss[10].status === 'practice' && sitMiss[10].why === 'miss' && sitMiss[10].due === 1 && sitMiss[10].lapses === 1, sitMiss[10]);
  const d3h = walk([[0.4, true], [0.525, true], [1.4, true]]);
  ok('right, right again three hours later, right the next day: 1, 1.3 and 3.3 days', d3h[0].st === 1 && f1(d3h[1].st) === 1.3 && f1(d3h[2].st) === 3.3 && d3h[2].status === 'learning', d3h);
  const got = walk([[0.4, true, 'self'], [0.402, true, 'pick'], [1.4, true, 'pick']]), plain = walk([[0.4, true, 'pick'], [1.4, true, 'pick']]);
  ok('"Got it" and then a right pick on the first day starts where a first right pick does', got[0].st === 0.5 && got[1].st === 1 && near(got[2].st, plain[1].st, 0.05), [got, plain]);

  /* misses */
  const miss = walk([[0.4, false], [0.401, false], [0.402, true], [1.4, true], [2.4, true], [5.4, true], [12.4, true]]);
  ok('missed twice on its first day, right in the same sitting: still needs practice, one lapse, back tomorrow', miss[0].status === 'practice' && miss[0].due === 0 && miss[2].status === 'practice' && miss[2].why === 'miss' && miss[2].lapses === 1 && miss[2].due === 1 && miss[2].st <= 0.3, miss.slice(0, 3));
  ok('only a right answer on a later day clears a miss; the card is then learning again', miss[3].status === 'learning' && miss[3].why === '' && miss[3].lapses === 1, miss[3]);
  ok('a card that started with a miss can still be memorized: here on its fifth day of answers', miss[5].status === 'learning' && miss[6].status === 'memorized' && miss[6].st >= J.MJ.tMem, miss.slice(4));
  const big = (() => { let s = J.mjWrite({ box: 6, due: 172, seen: 9, lapses: 0, last: 100.4 }, { st: 72, df: 5, rr: 15, nd: 4, lw: 0, rc: 1 }); const out = [];
    for (const [t, o] of [[172.4, false], [172.401, true], [173.4, true]]) { s = grade(s, o, t, 'pick', null, true).s; out.push({ st: s.st, status: statusOf(s, t + 0.0005), box: s.box, due: s.due, lapses: s.lapses }); } return out; })();
  ok('a 72-day memory missed once falls to 4 days at most, needs practice, and is learning again the next day', big[0].st <= 4 && big[0].st >= 2 && big[0].status === 'practice' && big[0].box === 1 && big[1].status === 'practice' && big[1].st <= 4.04 && big[2].status === 'learning' && big[2].lapses === 1, big);
  const lap = walk([[0.4, true], [1.4, false], [1.401, false], [1.402, true], [1.9, false], [2.4, false], [3.4, true], [3.5, false]]);
  ok('lapses count once a day: wrong three times on one day is one lapse, wrong on three days is three', lap[1].lapses === 1 && lap[2].lapses === 1 && lap[4].lapses === 1 && lap[5].lapses === 2 && lap[6].lapses === 2 && lap[7].lapses === 3, lap.map(x => x.lapses));
  const firstWrong = walk([[0.4, false]]);
  ok('a first answer that is wrong counts as a missed day', firstWrong[0].lapses === 1 && firstWrong[0].status === 'practice' && firstWrong[0].box === 1, firstWrong);
  const two = walk([[0.4, true], [1.4, false], [2.4, true], [3.4, false], [4.4, true], [5.4, true], [6.4, true]]), run2 = walk([[0.4, true], [1.4, false], [2.4, false], [3.4, true], [4.4, true], [5.4, true]]);
  ok('missed on 2 of its last 4 days: needs practice even after a right answer, until one of those days is no longer among the last four', two[2].why === '' && two[4].status === 'practice' && two[4].why === 'days' && two[5].why === '' && two[5].status !== 'practice' && two[6].status !== 'practice'
    && run2[3].why === 'days' && run2[4].why === 'days' && run2[5].why === '' && run2[5].status !== 'practice', [two.map(x => x.why || x.status), run2.map(x => x.why || x.status)]);

  /* unseen for too long */
  const c10 = J.mjWrite({ box: 4, due: 10, seen: 5, lapses: 0, last: 0.4 }, { st: 10, df: 5, rr: 15, nd: 4, lw: 0, rc: 1 });
  ok('a 10-day memory left alone is memorized for 20 days and needs practice after that (not seen for too long)', [5, 10, 15, 20].every(d => statusOf(c10, 0.4 + d) === 'memorized') && [20.01, 21, 30, 45].every(d => statusOf(c10, 0.4 + d) === 'practice' && whyOf(c10, 0.4 + d) === 'old'));
  ok('answered right after 30 days it is memorized again with a longer memory; answered wrong it needs practice with a short one', (() => { const a = grade(Object.assign({}, c10), true, 30.4, 'pick', null, true).s, b = grade(Object.assign({}, c10), false, 30.4, 'pick', null, true).s; return a.st === 40 && statusOf(a, 30.401) === 'memorized' && b.st < 4 && statusOf(b, 30.401) === 'practice' && b.due === 30; })());
  ok('the judgement uses the personal numbers: the same card is memorized for one learner and learning for another', J.mjStatus({ st: 10, df: 5, rr: 15, nd: 4, lw: 0, rc: 1 }, 1, { q: 1, g: 1 }) === 'memorized' && J.mjStatus({ st: 10, df: 5, rr: 15, nd: 4, lw: 0, rc: 1 }, 1, { q: 0.5, g: 1 }) === 'learning' && J.mjDueIn({ st: 10, df: 5, rr: 15, nd: 4, lw: 0 }, { q: 0.5, g: 1 }) === 5);
  ok('a card never answered is new', J.mjStatus(null, 0, J.MJ_CAL0) === 'new' && J.mjWhy(null, 0, J.MJ_CAL0) === '');

  /* the two personal numbers */
  const m5 = { st: 5, df: 5, rr: 15, nd: 4, lw: 0 }; let cal = { q: 1, g: 1 };
  ok('the personal numbers do not move on a repeat inside half a day', J.mjCalStep(m5, false, 0.2, 'pick', cal) === cal);
  ok('a miss that was not expected shortens the personal memory length, a right answer after a long gap lengthens it', J.mjCalStep(m5, false, 2, 'type', cal).q < 1 && J.mjCalStep(m5, true, 20, 'type', cal).q > 1);
  ok('one answer moves the first personal number by at most 16%', (() => { for (let i = 0; i < 2000; i++) { const rr = rng(i), c = { st: Math.exp(rr() * 8 - 2), df: 5, rr: 15, nd: 4, lw: 0 }, k0 = { q: Math.exp(rr() * 4.1 - 3), g: 0.5 + rr() * 0.8 }, k1 = J.mjCalStep(c, rr() < 0.5, Math.exp(rr() * 8 - 1), TYPES[i % 4], k0); if (!(k1.q <= k0.q * 1.1619 && k1.q >= Math.min(k0.q, J.MJ.qMax) / 1.1619 && k1.q >= J.MJ.qMin && k1.q <= J.MJ.qMax && k1.g >= J.MJ.gMin && k1.g <= J.MJ.gMax && Math.abs(k1.g - k0.g) <= 0.0801)) return false; } return true; })());
  ok('a learner who always misses cannot push the personal numbers below their floor, nor one who is always right above the ceiling', (() => { let lo = { q: 1, g: 1 }, hi = { q: 1, g: 1 }; for (let i = 0; i < 400; i++) { lo = J.mjCalStep(m5, false, 1, 'type', lo); hi = J.mjCalStep(m5, true, 60, 'type', hi); } return near(lo.q, J.MJ.qMin) && lo.g >= J.MJ.gMin && near(hi.q, J.MJ.qMax) && hi.g <= J.MJ.gMax; })());
})();

/* ---------- 2. saved progress ---------- */
(function saved() {
  const old = (box, extra) => Object.assign({ box, due: 20000, seen: box ? 3 : 0, lapses: 0, last: 1.7e12 }, extra || {});
  ok('a card saved before the judge reads as 1, 3, 7, 14 or 30 days by its box', [2, 3, 4, 5, 6].every((b, i) => { const m = J.mjRead(old(b)); return m.st === [1, 3, 7, 14, 30][i] && m.lw === 0 && sane(m) && J.mjBox(m) === b; }));
  ok('by box: 2 and 3 are learning, 4 to 6 are memorized while seen recently, and a card in box 1 after an answer needs practice', ['practice', 'learning', 'learning', 'memorized', 'memorized', 'memorized'].every((w, i) => J.mjStatus(J.mjRead(old(i + 1)), 0.5, J.MJ_CAL0) === w));
  ok('a memorized card from before the judge needs practice once it has gone unseen for more than twice its length', [[4, 14], [5, 28], [6, 60]].every(([b, d]) => J.mjStatus(J.mjRead(old(b)), d, J.MJ_CAL0) === 'memorized' && J.mjStatus(J.mjRead(old(b)), d + 0.1, J.MJ_CAL0) === 'practice' && J.mjWhy(J.mjRead(old(b)), d + 0.1, J.MJ_CAL0) === 'old'));
  ok('cards never answered are new: no saved card, box 0, or box 1 with nothing seen (buried, suspended, just added)', [null, undefined, {}, old(0), { box: 1, due: 5, seen: 0 }, { box: 0, seen: 0, susp: 1 }].every(s => J.mjRead(s) === null));
  ok('past lapses make an old card harder, up to three of them', (() => { const d = [0, 1, 2, 3, 9].map(l => J.mjRead(old(4, { lapses: l })).df); return d[0] < d[1] && d[1] < d[2] && d[2] < d[3] && d[3] === d[4] && d[4] <= 10; })());

  /* a whole saved course from before the judge: reading changes nothing and loses nothing */
  const r = rng(92), cards = {}, counts = { new: 0, learning: 0, memorized: 0, practice: 0 }; let seen = 0;
  for (let i = 0; i < 3000; i++) { const box = Math.floor(r() * 7), s = { box, due: 20000 + Math.floor(r() * 80) - 40, seen: box >= 2 || r() < 0.6 ? 1 + Math.floor(r() * 30) : 0, lapses: Math.floor(r() * 6), last: 1.7e12 - Math.floor(r() * 9e9) }; if (r() < 0.1) s.leech = 1; if (r() < 0.1) s.note = 'x'; if (r() < 0.05) s.susp = 1; cards['d|' + i] = s; }
  const frozen = JSON.stringify(cards); Object.values(cards).forEach(Object.freeze); let threw = null;
  try { Object.values(cards).forEach(s => { const m = J.mjRead(s); if (m) seen++; const st = J.mjStatus(m, r() * 90, J.MJ_CAL0); counts[st]++; if (m && !sane(m)) throw new Error('out of range'); }); } catch (e) { threw = e.message; }
  ok('reading 3,000 cards saved before the judge changes none of them (box, due date, lapses, notes all as they were)', !threw && JSON.stringify(cards) === frozen, threw);
  ok('no card is lost: every one gets exactly one judgement, and only never-answered cards are new', counts.new + counts.learning + counts.memorized + counts.practice === 3000 && counts.new === 3000 - seen && counts.learning > 0 && counts.memorized > 0 && counts.practice > 0, counts);

  /* what the judge writes */
  const rr = rng(7); let back = 0, boxes = 0, n = 0;
  for (let i = 0; i < 20000; i++) { const m = { st: Math.exp(rr() * 10.2 - 2.3), df: 1 + rr() * 9, rr: Math.floor(rr() * 16), nd: 1 + Math.floor(rr() * 4), lw: rr() < 0.3 ? 1 : 0, rc: Math.floor(rr() * 3) }, s = J.mjWrite({ box: 3, due: 9, seen: 4, lapses: 1, last: 5 }, m), m2 = J.mjRead(s); n++;
    if (!(m2 && Math.abs(m2.st - m.st) <= m.st * 0.006 && Math.abs(m2.df - m.df) <= 0.0051 && m2.rr === m.rr && m2.nd === m.nd && m2.lw === m.lw && m2.rc === m.rc && (m.rc === 2 ? !('rc' in s) : s.rc === m.rc) && s.mb === s.box)) back++;
    if (!(Number.isInteger(s.box) && s.box >= 1 && s.box <= 6 && (m.lw ? s.box === 1 : s.box >= 2) && Number.isInteger(s.h) && s.h >= 0 && s.h < 256 && s.due === 9 && s.seen === 4 && s.lapses === 1 && s.last === 5)) boxes++; }
  ok('what the judge saves reads back the same (' + n + ' random memories, length kept to 3 figures)', !back);
  ok('the judge always leaves a box an older version understands: 1 after a miss, else 2 to 6 by memory length; it touches nothing else on the card', !boxes && [1, 3, 7, 14, 30].every((d, i) => J.mjBox({ st: d, lw: 0 }) === i + 2) && J.mjBox({ st: 0.2, lw: 0 }) === 2 && J.mjBox({ st: 900, lw: 0 }) === 6 && J.mjBox({ st: 900, lw: 1 }) === 1);

  /* an older version of the app answers a card after the judge wrote it (the same course open on two devices, one not yet updated) */
  const mine = () => J.mjWrite({ box: 0, due: 30, seen: 6, lapses: 0, last: 20 }, { st: 9.3, df: 5.5, rr: 15, nd: 4, lw: 0, rc: 1 });
  const oldRight = s => { s.box = Math.min(6, (s.box || 1) + 1); s.due = 40; s.seen++; s.last = 30; return s; }, oldWrong = s => { if (s.box > 1) s.lapses++; s.box = 1; s.due = 30; s.seen++; s.last = 30; return s; };
  const a = J.mjRead(oldRight(mine())), b = J.mjRead(oldWrong(mine())), c0 = J.mjRead(mine());
  ok('an older version answers right: the memory is at least that box’s length and never shorter than it was', sane(a) && a.st >= 14 && a.st >= c0.st && a.lw === 0 && (a.rr & 1) === 1 && J.mjStatus(a, 0, J.MJ_CAL0) === 'memorized', a);
  ok('an older version answers wrong: the memory is cut as a miss here would cut it, and the card needs practice', sane(b) && b.st < c0.st && b.st <= 4 && b.lw === 1 && b.df > c0.df && J.mjStatus(b, 0, J.MJ_CAL0) === 'practice' && J.mjWhy(b, 0, J.MJ_CAL0) === 'miss', b);
  ok('an older version that leaves the box alone leaves the memory alone', (() => { const s = mine(); s.due = 55; s.last = 31; s.seen++; const m = J.mjRead(s); return m.st === c0.st && m.df === c0.df && m.rr === c0.rr; })());
  ok('the next answer here takes the card back: one grade and the judge’s box and the saved box agree again', (() => { const s = oldRight(mine()); const g = grade(s, true, 44.4, 'pick', { q: 1, g: 1, n: 3 }); return g.s.mb === g.s.box && g.mem.n === 3 /* no calibration on a card another version graded last */ && sane(J.mjRead(g.s)) && g.s.st >= 14; })());
  ok('a card answered by the two versions in turn, 2,000 times over, always reads sanely', (() => { const q = rng(5); for (let i = 0; i < 2000; i++) { let s = null, t = 0.4, mem = null; for (let k = 0; k < 12; k++) { const right = q() < 0.75; if (s && q() < 0.4) { right ? oldRight(s) : oldWrong(s); s.last = t; } else { const g = grade(s, right, t, TYPES[Math.floor(q() * 4)], mem); s = g.s; mem = g.mem; } const m = J.mjRead(s); if (!sane(m) || !J.MJ_STATES.includes(J.mjStatus(m, 0, mem || J.MJ_CAL0)) || !(s.box >= 1 && s.box <= 6)) return false; t += q() < 0.3 ? 0.001 : Math.exp(q() * 5 - 1); } } return true; })());

  /* damaged values */
  const junk = [{ st: NaN }, { st: -4 }, { st: 'abc' }, { st: 1e12 }, { st: 0 }, { st: 5, h: 'x' }, { st: 5, h: null }, { st: 5, h: 255, df: 99 }, { st: 5, h: 0, df: -3 }, { st: 5, h: 1e9, df: NaN }, { st: 5, h: 3, mb: 'q' }, { st: 5, h: 3, mb: 3, box: 99 }, { st: 5, h: 3, mb: 3, box: -2 }, { st: 5, h: 3, box: 'x' }, { st: Infinity, h: 3, df: Infinity }];
  ok('damaged saved values do no harm: the card still reads in range and can be answered', junk.every(j => { const s = Object.assign({ box: 3, due: 9, seen: 4, lapses: 1, last: 5 }, j), m = J.mjRead(s); if (!sane(m)) return false; const g = grade(s, true, 9.4, 'pick', null); return sane(g.m) && g.s.box >= 1 && g.s.box <= 6 && isFinite(g.s.due) && g.s.mb === g.s.box; }), junk.map(j => J.mjRead(Object.assign({ box: 3, due: 9, seen: 4, lapses: 1, last: 5 }, j))).filter(m => !sane(m))[0]);
})();

/* ---------- 3. simulation ---------- */
/* h0: half-life in days after the first lesson (middle card, middle learner) · G: how much a real recall lengthens it · fail: share kept after a miss.
   asPublished behaves roughly as the published numbers assume; the others forget faster or remember longer than that. */
const WORLDS = { asPublished: { h0: 7, G: 4.7, fail: 0.35 }, forgetsFaster: { h0: 2.0, G: 2.5, fail: 0.35 }, forgetsFastest: { h0: 1.0, G: 1.8, fail: 0.3 }, remembersLonger: { h0: 14, G: 6, fail: 0.4 } };
function simulate(world, o) { const { learners = 60, cards = 300, days = 60, newPerDay = 10, pStudy = 0.85, guess = 0.25, seed = 11, away = [14, 30], noCal = false, noRecall = false, noSpeed = false } = o || {}, Wd = WORLDS[world]; /* noRecall: release B's rule, every question a pick and no recall mark needed · noSpeed: every right answer counts in full */
  const acc = {}, add = (k, f, v) => { const a = acc[k] = acc[k] || {}; a[f] = (a[f] || 0) + v; }; let reviews = 0, recalls = 0, slow = 0, rightN = 0, studyDays = 0, retSum = 0, retN = 0, okN = 0, askN = 0, qS = 0, gS = 0, fS = 0, fO = 0, fN = 0, measures = 0;
  for (let L = 0; L < learners; L++) { const r = rng(seed * 1000 + L), ability = Math.exp(0.4 * gauss(r)), pace = 3000 * Math.exp(0.3 * gauss(r)), times = []; let mem = null; /* pace: this learner's time for an answer they know well, in ms */
    const C = []; for (let i = 0; i < cards; i++) C.push({ hard: Math.exp(0.5 * gauss(r)), h: 0, lastTrue: 0, intro: false, s: null });
    const pTrue = (c, now) => c.intro ? Math.pow(2, -(now - c.lastTrue) / c.h) : 0;
    const qType = (c, now) => { if (noRecall || !c.s) return 'pick'; const m = J.mjRead(c.s), t = Math.max(0, now - c.s.last); return J.mjAsk(m, t, Math.floor(c.s.last) === Math.floor(now), mem && mem.q > 0 ? mem : J.MJ_CAL0) ? 'rec' : 'pick'; };
    const ask = (c, now, type) => { const p = Math.min(1, pTrue(c, now)), recalled = r() < p, right = recalled || (type === 'pick' && r() < guess); /* nothing to guess from on a recall question */
      c.ms = pace * (1 + 2.5 * (recalled ? 1 - p : 1)) * Math.exp(0.4 * gauss(r)); /* assumed: the weaker the memory the slower the answer, and a guess is slowest */
      if (recalled) c.h = Math.min(3650, c.h * (1 + Wd.G * Math.sqrt(1 - p) / Math.pow(c.hard, 0.3))); else { if (Math.floor(now) !== c.failDay) { c.failDay = Math.floor(now); c.relearn = Math.min(5, (c.relearn || 0) + 1); } c.h = Math.max(c.base * Math.pow(1.25, c.relearn || 0), c.h * Wd.fail); }
      c.lastTrue = now; okN += right ? 1 : 0; askN++; return right; };
    const usual = () => { if (times.length < 12) return 4000; const a = times.slice(-50).sort((x, y) => x - y); return a[a.length >> 1]; };
    const answer = (c, right, now, type) => { const sp = right && !noSpeed ? J.mjSpeed(c.ms, usual()) : 1; if (right) { times.push(c.ms); rightN++; if (sp < 1) slow++; } if (noRecall && c.s) c.s.rc = 1; const g = grade(c.s, right, now, type, mem, noCal, { sp, plain: noRecall }); if (g.type === 'rec') recalls++; if (g.before.m && g.before.t >= J.MJ.minGap && Math.floor(now) >= days - 30) { fS += g.before.forecast; fO += right ? 1 : 0; fN++; } c.s = g.s; mem = g.mem; reviews++; };
    const sitting = (c, now, tick) => { const ty = qType(c, now), right = ask(c, now, ty); answer(c, right, now, ty); if (!right) for (let k = 0; k < 2; k++) { const t2 = tick(), y2 = qType(c, t2); answer(c, ask(c, t2, y2), t2, y2); } }; /* a missed card comes back twice in the same sitting */
    const measure = (now, tag) => { const cal = mem || J.MJ_CAL0; if (tag === 'studying') measures++; C.forEach(c => { if (!c.intro) return; const p = pTrue(c, now), m = J.mjRead(c.s), t = now - c.s.last, st = J.mjStatus(m, t, cal), est = J.mjRecall(t, J.mjLen(m.st, cal));
      add(tag + '|all', 'n', 1); add(tag + '|all', 'p', p); add(tag + '|all', 'est', est); add(tag + '|all', 'err', (est - p) * (est - p)); add(tag + '|' + st, 'n', 1); add(tag + '|' + st, 'p', p); add(tag + '|' + st, 'miss', p < 0.6 ? 1 : 0); if (p < 0.6) { add(tag + '|forgotten', 'n', 1); add(tag + '|forgotten', 'flag', st === 'practice' ? 1 : 0); } }); };
    let next = 0;
    for (let day = 0; day < days; day++) { if (day >= 30 && day % 5 === 0) measure(day + 0.3, 'studying');
      if (r() > pStudy) continue; studyDays++; let now = day + 0.35; const tick = () => { now += 0.0004; return now; };
      const due = C.filter(c => c.intro && c.s.due <= day); for (let i = due.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [due[i], due[j]] = [due[j], due[i]]; }
      due.slice(0, 80).forEach(c => { const t = tick(); retSum += pTrue(c, t); retN++; sitting(c, t, tick); });
      for (let k = 0; k < newPerDay && next < cards; k++) { const c = C[next++], t = tick(); c.intro = true; c.base = c.h = Math.max(0.25, Wd.h0 * ability / c.hard * Math.exp(0.6 * gauss(r))); c.lastTrue = t; now += 0.002; sitting(c, tick(), tick); } }
    away.forEach(d => measure(days + d, 'away' + d)); const cl = mem || J.MJ_CAL0; qS += cl.q; gS += cl.g; }
  const out = { world, q: +(qS / learners).toFixed(2), g: +(gS / learners).toFixed(2), forecast: fN ? +(fS / fN).toFixed(3) : null, actual: fN ? +(fO / fN).toFixed(3) : null, reviewsPerStudyDay: +(reviews / studyDays).toFixed(1), recallShare: +(recalls / reviews).toFixed(3), slowShare: +(slow / Math.max(1, rightN)).toFixed(3), recallAtDue: +(retSum / retN).toFixed(3), answersRight: +(okN / askN).toFixed(3) };
  Object.keys(acc).forEach(k => { const a = acc[k], per = k.startsWith('studying') ? measures : learners; out[k] = { n: Math.round(a.n / per), ...(a.p != null ? { known: +(a.p / a.n).toFixed(3) } : {}), ...(a.est != null ? { est: +(a.est / a.n).toFixed(3), err: +Math.sqrt(a.err / a.n).toFixed(3) } : {}), ...(a.miss != null ? { miss: +(a.miss / a.n).toFixed(3) } : {}), ...(a.flag != null ? { flagged: +(a.flag / a.n).toFixed(3) } : {}) }; });
  return out; }
function table(R) { const f = x => x == null ? '     -' : String(x).padStart(6), g = (k, fld) => (R[k] || {})[fld];
  console.log('\n== ' + R.world + '   personal numbers q=' + R.q + ' g=' + R.g + '   spaced answers in the last 30 days: forecast right ' + R.forecast + ', actually right ' + R.actual + '   reviews per study day ' + R.reviewsPerStudyDay + '   true recall when a due card comes up ' + R.recallAtDue + '   recall questions ' + R.recallShare + ' of all   right answers counted as slow ' + R.slowShare);
  console.log('  ' + ''.padEnd(26) + ['cards', 'known', 'est', 'err'].map(x => x.padStart(6)).join('') + '   | memorized: n known missed | learning: n known | needs practice: n known missed | of the forgotten, flagged');
  for (const [tag, title] of [['studying', 'while studying'], ['away14', 'after 14 days away'], ['away30', 'after 30 days away']]) console.log('  ' + title.padEnd(26) + f(g(tag + '|all', 'n')) + f(g(tag + '|all', 'known')) + f(g(tag + '|all', 'est')) + f(g(tag + '|all', 'err')) + '   |' + f(g(tag + '|memorized', 'n')) + f(g(tag + '|memorized', 'known')) + f(g(tag + '|memorized', 'miss')) + '      |' + f(g(tag + '|learning', 'n')) + f(g(tag + '|learning', 'known')) + '    |' + f(g(tag + '|practice', 'n')) + f(g(tag + '|practice', 'known')) + f(g(tag + '|practice', 'miss')) + '           |' + f(g(tag + '|forgotten', 'n')) + f(g(tag + '|forgotten', 'flagged'))); }

/* pass marks: [floor for "memorized cards truly known" while studying, after 14 days away, after 30 days away, ceiling for the gap between forecast and result, ceiling for reviews per study day] */
const MARKS = { asPublished: [0.90, 0.86, 0.82, 0.03, 50], forgetsFaster: [0.90, 0.82, 0.76, 0.04, 95], forgetsFastest: [0.89, 0.80, 0.72, 0.05, 140], remembersLonger: [0.92, 0.90, 0.88, 0.03, 40] };
(function sim() {
  const t0 = Date.now(), res = {};
  for (const w of Object.keys(WORLDS)) { const R = res[w] = simulate(w), M = MARKS[w], k = (tag, st) => R[tag + '|' + st] || {}; if (TABLE) table(R);
    ok(w + ': cards called memorized are truly known while studying (' + k('studying', 'memorized').known + ', pass mark ' + M[0] + ') and few are close to forgotten (' + k('studying', 'memorized').miss + ', at most 0.04)', k('studying', 'memorized').known >= M[0] && k('studying', 'memorized').miss <= 0.04 && k('studying', 'memorized').n >= 30, R);
    ok(w + ': memorized still means known after 14 days away (' + k('away14', 'memorized').known + ', pass mark ' + M[1] + ') and after 30 (' + k('away30', 'memorized').known + ', pass mark ' + M[2] + ')', k('away14', 'memorized').known >= M[1] && k('away30', 'memorized').known >= M[2]);
    ok(w + ': cards that need practice are less known than memorized ones, studying and away', ['studying', 'away14', 'away30'].every(tag => (tag === 'studying' && !(k(tag, 'practice').n >= 10)) || k(tag, 'practice').known < k(tag, 'memorized').known - 0.04));
    ok(w + ': the longer the learner stays away, the fewer cards are memorized and the more need practice (' + k('away14', 'memorized').n + ' then ' + k('away30', 'memorized').n + ' memorized); next to nothing is still called learning', k('away30', 'memorized').n < k('away14', 'memorized').n && k('away30', 'practice').n > k('away14', 'practice').n && !(k('away14', 'learning').n > 9) && !(k('away30', 'learning').n > 9)); /* MEM-3: a few cards with a long memory and no recall mark yet are still learning after two weeks away (under 3 in 100) */
    ok(w + ': the judge’s forecasts match what happened on spaced answers (forecast ' + R.forecast + ', result ' + R.actual + ', pass mark within ' + M[3] + ')', Math.abs(R.forecast - R.actual) <= M[3]);
    ok(w + ': the workload stays in hand (' + R.reviewsPerStudyDay + ' reviews per study day, pass mark ' + M[4] + ')', R.reviewsPerStudyDay <= M[4]);
    ok(w + ': the estimate of what is known is close to the truth while studying (' + k('studying', 'all').est + ' against ' + k('studying', 'all').known + ')', Math.abs(k('studying', 'all').est - k('studying', 'all').known) <= 0.04); }
  ok('the personal numbers go the right way: lower for learners who forget faster, in order (q ' + ['remembersLonger', 'asPublished', 'forgetsFaster', 'forgetsFastest'].map(w => res[w].q).join(' > ') + ')', res.remembersLonger.q > res.asPublished.q && res.asPublished.q > res.forgetsFaster.q && res.forgetsFaster.q > res.forgetsFastest.q && res.asPublished.q > 0.6 && res.asPublished.q < 1.3);
  const noCal = simulate('forgetsFaster', { noCal: true }), withCal = res.forgetsFaster; if (TABLE) { console.log('\n(without the personal numbers)'); table(noCal); }
  ok('the personal numbers earn their place: for a learner who forgets faster, forecasts are off by ' + Math.abs(noCal.forecast - noCal.actual).toFixed(2) + ' without them and ' + Math.abs(withCal.forecast - withCal.actual).toFixed(2) + ' with them', Math.abs(noCal.forecast - noCal.actual) > 0.08 && Math.abs(withCal.forecast - withCal.actual) < Math.abs(noCal.forecast - noCal.actual) / 2 && withCal['away30|memorized'].known > noCal['away30|memorized'].known);
  const casual = simulate('forgetsFaster', { newPerDay: 5, pStudy: 0.5, days: 90, cards: 250, seed: 77 }); if (TABLE) { console.log('\n(a casual learner: 5 new cards a day, studies every other day, 90 days)'); table(casual); }
  ok('a casual learner who forgets faster: memorized cards truly known while studying (' + (casual['studying|memorized'] || {}).known + ', pass mark 0.88) and after 30 days away (' + (casual['away30|memorized'] || {}).known + ', pass mark 0.7)', (casual['studying|memorized'] || {}).known >= 0.88 && (casual['away30|memorized'] || {}).known >= 0.7);
  /* MEM-3: what the recall question and the speed rule each change, for the two kinds of learner where memorized is hardest to get right */
  for (const w of ['asPublished', 'forgetsFaster']) { const B = simulate(w, { noRecall: true, noSpeed: true }), nr = simulate(w, { noRecall: true }), ns = simulate(w, { noSpeed: true }), C = res[w], km = R => (R['studying|memorized'] || {}), a30 = R => (R['away30|memorized'] || {});
    if (TABLE) { console.log('\n(' + w + ', as release B: no recall question, no speed rule)'); table(B); console.log('\n(' + w + ', recall question only)'); table(ns); console.log('\n(' + w + ', speed rule only)'); table(nr); }
    ok(w + ': with the recall question and the speed rule, memorized cards are known at least as well as under release B, studying (' + km(C).known + ' against ' + km(B).known + ') and after 30 days away (' + a30(C).known + ' against ' + a30(B).known + ')', km(C).known >= km(B).known - 0.003 && a30(C).known >= a30(B).known - 0.003);
    ok(w + ': fewer memorized cards are close to forgotten than under release B (' + km(C).miss + ' against ' + km(B).miss + '), for at most a tenth more reviews (' + C.reviewsPerStudyDay + ' against ' + B.reviewsPerStudyDay + ' a study day)', km(C).miss <= km(B).miss && C.reviewsPerStudyDay <= B.reviewsPerStudyDay * 1.1);
    ok(w + ': recall questions are a small share of all questions (' + C.recallShare + ', at most 0.3) and few right answers count as slow (' + C.slowShare + ', at most 0.12)', C.recallShare > 0.02 && C.recallShare <= 0.3 && C.slowShare <= 0.12 && C.slowShare > 0); }
  if (TABLE) console.log('\nsimulation: ' + ((Date.now() - t0) / 1000).toFixed(1) + ' s');
})();

/* ---------- 4. risk (MEM-2) ---------- */
(function risk() {
  ok('risk is the chance of forgetting by this time tomorrow: 1 in 10 for a card with a one-day memory answered just now', near(J.mjRisk({ st: 1 }, 0, J.MJ_CAL0), 0.1, 1e-12) && [0.3, 1, 7, 30].every(L => near(J.mjRisk({ st: L }, 2.5, J.MJ_CAL0), 1 - J.mjRecall(3.5, L), 1e-12)) && J.mjRisk({ st: 1 }, -5, J.MJ_CAL0) === J.mjRisk({ st: 1 }, 0, J.MJ_CAL0));
  const r = rng(20261125), bad = { range: 0, time: 0, length: 0, wrong: 0, right: 0 }; let first = null; const note = (k, d) => { bad[k]++; if (!first) first = [k, d]; };
  for (let i = 0; i < 50000; i++) {
    const c = { st: Math.exp(r() * 8 - 2), df: 1 + r() * 9, rr: Math.floor(r() * 16), nd: 1 + Math.floor(r() * 4), lw: 0 }, cal = r() < 0.3 ? J.MJ_CAL0 : { q: Math.exp(r() * 4.1 - 3), g: 0.5 + r() * 0.8 };
    const t = Math.exp(r() * 12 - 8), t2 = t * (1 + r() * 3), type = TYPES[Math.floor(r() * 4)], same = t < 1 && r() < 0.6, a = J.mjRisk(c, t, cal);
    if (!(a > 0 && a < 1)) note('range', { c, t, a });
    if (J.mjRisk(c, t2, cal) < a - 1e-12) note('time', { c, t, t2 });
    if (J.mjRisk({ st: c.st * (1 + r() * 3) }, t, cal) > a + 1e-12) note('length', { c, t });
    if (J.mjRisk(J.mjUpdate(c, false, t, same, type, cal), 0, cal) < J.mjRisk(c, 0, cal) - 1e-12) note('wrong', { c, t, type });
    if (J.mjRisk(J.mjUpdate(c, true, t, same, type, cal), 0, cal) > J.mjRisk(c, 0, cal) + 1e-12) note('right', { c, t, type });
  }
  ok('risk lies between 0 and 1 (50000 random cards)', !bad.range, first);
  ok('risk rises the longer a card goes unseen', !bad.time, first);
  ok('risk falls as the memory gets longer', !bad.length, first);
  ok('a wrong answer never lowers the risk, a right answer never raises it', !bad.wrong && !bad.right, first);
  const due = L => J.mjRisk({ st: L }, L, J.MJ_CAL0);
  ok('among cards that are due, the shorter memory is the one more at risk (' + [1, 3, 7, 30].map(L => due(L).toFixed(3)).join(' > ') + '), and an overdue card more than one just due', due(1) > due(3) && due(3) > due(7) && due(7) > due(30) && J.mjRisk({ st: 7 }, 14, J.MJ_CAL0) > due(7));
})();

/* ---------- 5. sharper evidence (MEM-3) ---------- */
(function sharper() {
  const C0 = J.MJ_CAL0, M = J.MJ;
  ok('speed: up to twice the usual time counts in full, five times and more counts ' + M.slowW + ', in between it falls evenly; no time or no usual time counts in full', [0.1, 1, 2].every(k => J.mjSpeed(4000 * k, 4000) === 1) && near(J.mjSpeed(4000 * 3.5, 4000), 1 - (1 - M.slowW) / 2, 1e-9) && [5, 9, 100].every(k => J.mjSpeed(4000 * k, 4000) === M.slowW) && [[0, 4000], [-5, 4000], [NaN, 4000], [3000, 0], [3000, undefined]].every(([a, b]) => J.mjSpeed(a, b) === 1));
  const r = rng(20261127), bad = { more: 0, loss: 0, order: 0, miss: 0, pickMem: 0, mark: 0, lost: 0, ask: 0, askRight: 0, old: 0 }; let first = null; const note = (k, d) => { bad[k]++; if (!first) first = [k, d]; };
  for (let i = 0; i < 100000; i++) {
    const c = { st: Math.exp(r() * 8 - 2), df: 1 + r() * 9, rr: Math.floor(r() * 16), nd: 1 + Math.floor(r() * 4), lw: 0, rc: Math.floor(r() * 3) }; c.lw = c.rr & 1 ? 0 : (r() < 0.5 ? 1 : 0);
    const gap = Math.exp(r() * 12 - 8), same = gap < 1 && r() < 0.6, type = TYPES[Math.floor(r() * 4)], T = J.MJ_TYPES[type], cal = r() < 0.3 ? C0 : { q: Math.exp(r() * 4.1 - 3), g: 0.5 + r() * 0.8 };
    const a = J.mjSpeed(Math.exp(r() * 6 + 5), 4000), b = J.mjSpeed(Math.exp(r() * 6 + 5), 4000), lo = Math.min(a, b), hi = Math.max(a, b), full = J.mjUpdate(c, true, gap, same, type, cal), kLo = J.mjUpdate(c, true, gap, same, type, cal, lo), kHi = J.mjUpdate(c, true, gap, same, type, cal, hi), w = J.mjUpdate(c, false, gap, same, type, cal, lo);
    if (kLo.st > full.st + 1e-12 || kHi.st > full.st + 1e-12 || J.mjUpdate(c, true, gap, same, type, cal, 7).st !== full.st) note('more', { c, gap, type, lo, hi });
    if (kLo.st < Math.min(c.st, M.maxSt) - 1e-12) note('loss', { c, gap, type, lo });
    if (kLo.st > kHi.st + 1e-12) note('order', { c, gap, type, lo, hi });
    if (w.st !== J.mjUpdate(c, false, gap, same, type, cal).st) note('miss', { c, gap, type });
    const had = J.mjRc(c, cal);
    if (!T.rc && !had && J.mjStatus(full, 0, cal) === 'memorized') note('pickMem', { c, gap, type, full });
    if (full.rc !== ((had || (T.rc && !same)) ? 1 : 0)) note('mark', { c, gap, same, type, full });
    if (w.rc !== 0 || J.mjStatus(w, 0, cal) === 'memorized') note('lost', { c, gap, type, w });
    const ask = J.mjAsk(c, gap, same, cal), pick = J.mjUpdate(c, true, gap, same, 'pick', cal), rec = J.mjUpdate(c, true, gap, same, 'rec', cal);
    if (ask !== (!same && !had && J.mjLen(pick.st, cal) >= M.tMem)) note('ask', { c, gap, same, ask });
    if (ask && J.mjStatus(rec, 0, cal) !== 'memorized' && !J.mjWhy(rec, 0, cal)) note('askRight', { c, gap, rec });
    if (c.rc === 2 && J.mjStatus(c, gap, cal) !== (J.mjWhy(c, gap, cal) ? 'practice' : J.mjLen(c.st, cal) >= M.tMem ? 'memorized' : 'learning')) note('old', { c, gap });
  }
  ok('speed: a slow right answer never counts for more than a quick one, and a weight above 1 changes nothing (100000 random cards)', !bad.more && !bad.order, first);
  ok('speed: a slow right answer never shortens a memory, and speed changes nothing about a wrong answer', !bad.loss && !bad.miss, first);
  ok('recall: a right pick or "Got it" never makes a card memorized that has no recall mark', !bad.pickMem, first);
  ok('recall: the mark comes from a typed or recalled right answer on a later day than the answer before, and from nothing else', !bad.mark, first);
  ok('recall: a wrong answer takes the mark away, whatever the question', !bad.lost, first);
  ok('recall: the judge asks for a recall question exactly when the card has no mark, was not answered today and a right pick would make its memory long enough for memorized', !bad.ask, first);
  ok('recall: answered right, the recall question it asked for makes the card memorized (unless it still needs practice for missing on 2 of its last 4 days)', !bad.askRight, first);
  ok('recall: a card saved before MEM-3 is judged by its memory length alone, as before', !bad.old, first);
  const before = { box: 5, due: 30, seen: 6, lapses: 0, last: 20, st: 16, df: 5, h: 15 | (4 << 4), mb: 5 }, short = Object.assign({}, before, { st: 4, box: 3, mb: 3 });
  ok('recall: a memorized card from release B stays memorized when it is next answered right, by a pick too, and loses the mark only by a miss', (() => { const m = J.mjRead(before); if (m.rc !== 2 || J.mjStatus(m, 5, C0) !== 'memorized' || J.mjAsk(m, 5, false, C0)) return false; const a = grade(Object.assign({}, before), true, 25.4, 'pick', null, true), b = grade(Object.assign({}, before), false, 25.4, 'pick', null, true); return a.type === 'pick' && a.s.rc === 1 && statusOf(a.s, 25.5) === 'memorized' && b.s.rc === 0 && statusOf(b.s, 25.5) === 'practice'; })());
  ok('recall: a learning card from release B gets the recall question when its turn comes, and reading it writes nothing', (() => { const fz = Object.freeze(Object.assign({}, short)), m = J.mjRead(fz); if (m.rc !== 2 || J.mjStatus(m, 4, C0) !== 'learning' || !J.mjAsk(m, 4, false, C0)) return false; const a = grade(Object.assign({}, short), true, 24.4, 'pick', null, true), p = grade(Object.assign({}, short), true, 24.4, 'pick', null, true, { plain: true }); return a.type === 'rec' && a.s.rc === 1 && statusOf(a.s, 24.5) === 'memorized' && p.type === 'pick' && p.s.rc === 0 && p.s.st >= M.tMem && statusOf(p.s, 24.5) === 'learning'; })());
  ok('recall: an older version of the app leaves the mark alone when it answers right and the judge drops it when that version recorded a miss', (() => { const mk = () => J.mjWrite({ box: 0, due: 30, seen: 6, lapses: 0, last: 20 }, { st: 9.3, df: 5.5, rr: 15, nd: 4, lw: 0, rc: 1 }); const a = mk(); a.box = Math.min(6, a.box + 1); const b = mk(); b.box = 1; return a.rc === 1 && J.mjRead(a).rc === 1 && J.mjRead(b).rc === 0 && J.mjRead(mk()).rc === 1; })());
  const slow = (() => { let s = null, t = 0.4; const out = []; for (let i = 0; i < 5; i++) { const g = grade(s, true, t, 'pick', null, true, { sp: M.slowW }); s = g.s; out.push([Math.floor(t), f1(s.st), statusOf(s, t + 0.0005), g.type]); t = s.due + 0.4; } return out; })();
  ok('a learner who is always right but always slow gets there one answer later: memorized on the fourth answer (day ' + slow[3][0] + ') instead of the third', slow[2][2] === 'learning' && slow[3][2] === 'memorized' && slow.some(x => x[3] === 'rec'), slow);
  ok('the answer log knows the recall question: type code 3, no lucky guess in its forecast', J.MJ_TCODE.rec === 3 && J.MJ_TYPES.rec.g === 0 && near(J.mjForecast({ st: 5, df: 5, rr: 15, nd: 4, lw: 0 }, 5, 'rec', C0), 0.9, 1e-9) && J.mjForecast({ st: 5, df: 5, rr: 15, nd: 4, lw: 0 }, 5, 'pick', C0) > 0.9);
})();

console.log((fail ? 'FAIL ' : '') + 'memory judge: ' + pass + ' checks pass' + (fail ? ', ' + fail + ' fail' : ''));
process.exit(fail ? 1 : 0);
