/* Validates packs/course-ko-en.js against MULTILANG-SPEC §2 / §3.1 / §3.2. */
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
const FILE = process.argv[2] || '/home/claude/packs/course-ko-en.js';
const src = fs.readFileSync(FILE, 'utf8');
const errs = [], info = [];
const fail = m => errs.push(m);
const ok = (c, m) => { if (!c) fail(m); };

/* §2 pack rules */
try { cp.execFileSync('node', ['--check', FILE], { stdio: 'pipe' }); } catch (e) { fail('node --check failed: ' + e.stderr); }
ok(!/<\/script/i.test(src), 'contains </script');
ok(!/(^|[^:"'])\/\/(?![^\n]*\*\/)/m.test(src) || !/^\s*\/\//m.test(src), 'line comment');
ok(!src.includes('//'), 'contains "//" anywhere');
ok(!src.includes('`'), 'contains backtick');
const stripped = src.replace(/\/\*[\s\S]*?\*\//g, '').trim();
ok(/^LANGAPP_PACKS\.course\['ko-en'\]\s*=\s*\{[\s\S]*\};$/.test(stripped), 'file must only assign LANGAPP_PACKS.course[\'ko-en\']');

const ctx = { LANGAPP_PACKS: { course: {}, i18n: {} } };
vm.createContext(ctx);
vm.runInContext('(function(){' + src + '\n})();', ctx);
ok(Object.keys(ctx.LANGAPP_PACKS.course).join() === 'ko-en', 'pack must set only course ko-en');
ok(Object.keys(ctx.LANGAPP_PACKS.i18n).length === 0, 'pack must not touch i18n');
const C = ctx.LANGAPP_PACKS.course['ko-en'];

/* header */
ok(C.id === 'ko-en' && C.native === 'ko' && C.target === 'en' && C.ttsLang === 'en-US', 'header ids');
ok(C.name && C.name.en === 'English' && C.name.ko === '영어' && C.brand === 'English', 'name/brand');
const F = C.features || {};
ok(['script', 'pron', 'conj', 'register', 'numbers', 'sound', 'strokes'].every(k => F[k] === false), 'features all false');
for (const k of ['DECKS', 'GROUPS', 'TAGS', 'DESC', 'DIALOG', 'EXAMPLES', 'LESSONS', 'CHECKS', 'PATTERNS', 'PAIRS', 'GOALS', 'TITLES', 'PAUSE']) ok(k in C, 'missing key ' + k);
ok(Array.isArray(C.PAIRS) && C.PAIRS.length === 0, 'PAIRS must be []');

const isStr = s => typeof s === 'string';
const nonEmpty = s => isStr(s) && s.trim().length > 0;
const hasHangul = s => /[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(s);
const norm = s => s.toLowerCase().trim().replace(/[\s.!?,…。]+$/u, '').replace(/\s+/g, ' ');

/* DECKS */
const deckNames = Object.keys(C.DECKS);
ok(deckNames.length >= 16, 'decks < 16: ' + deckNames.length);
let cardCount = 0;
const targets = new Map();
for (const [d, cards] of Object.entries(C.DECKS)) {
  ok(hasHangul(d), 'deck name not Korean: ' + d);
  ok(Array.isArray(cards) && cards.length > 0, 'empty deck ' + d);
  const meanings = new Set();
  cards.forEach((c, i) => {
    const where = d + '#' + i;
    if (!(Array.isArray(c) && c.length === 4 && c.every(isStr))) { fail('bad tuple ' + where + ' ' + JSON.stringify(c)); return; }
    const [t, p, m, n] = c;
    ok(nonEmpty(t) && nonEmpty(p) && nonEmpty(m), 'empty field ' + where);
    ok(!hasHangul(t), 'target has Hangul ' + where);
    ok(hasHangul(p), 'pron not Hangul ' + where + ' ' + p);
    ok(hasHangul(m), 'meaning not Korean ' + where);
    ok(n === '' || hasHangul(n), 'note not Korean ' + where);
    ok(t === t.trim() && m === m.trim(), 'untrimmed ' + where);
    const k = norm(t);
    if (targets.has(k)) fail('duplicate target "' + t + '" in ' + d + ' and ' + targets.get(k)); else targets.set(k, d);
    if (meanings.has(m)) fail('duplicate meaning in ' + d + ': ' + m); meanings.add(m);
    cardCount++;
  });
}
ok(cardCount >= 260, 'cards < 260: ' + cardCount);
const targetSet = new Set(Object.values(C.DECKS).flat().map(c => c[0]));

/* GROUPS / TAGS / DESC / GOALS */
const grouped = [];
C.GROUPS.forEach(g => { ok(Array.isArray(g) && g.length === 2 && nonEmpty(g[0]) && Array.isArray(g[1]), 'bad group ' + JSON.stringify(g)); grouped.push(...g[1]); });
grouped.forEach(d => ok(C.DECKS[d], 'group deck missing ' + d));
deckNames.forEach(d => { const n = grouped.filter(x => x === d).length; ok(n === 1, 'deck ' + d + ' in ' + n + ' groups'); });
const tagged = new Set();
for (const [t, ds] of Object.entries(C.TAGS)) {
  ok(/^[a-z0-9_-]+$/.test(t) || /^[가-힣0-9 ·_-]+$/.test(t), 'bad tag key ' + t);
  ds.forEach(d => { ok(C.DECKS[d], 'tag ' + t + ' unknown deck ' + d); tagged.add(d); });
}
deckNames.forEach(d => ok(tagged.has(d), 'deck untagged ' + d));
deckNames.forEach(d => ok(nonEmpty(C.DESC[d]) && hasHangul(C.DESC[d]), 'DESC missing ' + d));
Object.keys(C.DESC).forEach(d => ok(C.DECKS[d], 'DESC for unknown deck ' + d));
const goalSpec = { travel: '여행', work: '직장·업무', social: '친구·데이트', media: '영화·드라마·음악' };
ok(Object.keys(C.GOALS).sort().join() === Object.keys(goalSpec).sort().join(), 'GOALS keys');
for (const [g, lab] of Object.entries(goalSpec)) {
  const G = C.GOALS[g]; if (!G) continue;
  ok(G.label === lab, 'goal label ' + g);
  ok(Array.isArray(G.decks) && G.decks.length > 0, 'goal decks ' + g);
  (G.decks || []).forEach(d => ok(C.DECKS[d], 'goal ' + g + ' unknown deck ' + d));
}
const titlesSpec = [[1, 'Beginner', '입문'], [3, 'Student', '학생'], [5, 'Talker', '수다쟁이'], [8, 'Traveler', '여행자'], [12, 'Local', '현지인'], [16, 'Pro', '고수'], [20, 'Master', '달인']];
ok(JSON.stringify(C.TITLES) === JSON.stringify(titlesSpec), 'TITLES differ from spec');
if (C.PLAN_PRESETS) for (const [k, P] of Object.entries(C.PLAN_PRESETS)) {
  ok(nonEmpty(P.label) && P.weeks > 0, 'plan ' + k);
  P.decks.forEach(d => ok(C.DECKS[d], 'plan ' + k + ' unknown deck ' + d));
  P.lessons.forEach(id => ok(C.LESSONS.some(l => l.id === id), 'plan ' + k + ' unknown lesson ' + id));
}

/* DIALOG / EXAMPLES */
const dk = Object.keys(C.DIALOG), ek = Object.keys(C.EXAMPLES);
ok(dk.length >= 60, 'DIALOG < 60: ' + dk.length);
ok(ek.length >= 40, 'EXAMPLES < 40: ' + ek.length);
for (const [k, v] of Object.entries(C.DIALOG)) {
  ok(targetSet.has(k), 'DIALOG key not a card target: ' + k);
  ok(Array.isArray(v) && v.length === 3 && v.every(nonEmpty), 'DIALOG shape ' + k);
  if (Array.isArray(v) && v.length === 3) { ok(!hasHangul(v[0]) && !hasHangul(v[1]), 'DIALOG English lines have Hangul ' + k); ok(hasHangul(v[2]) && v[2].includes(' / '), 'DIALOG translation "A / B" ' + k); }
}
for (const [k, v] of Object.entries(C.EXAMPLES)) {
  ok(targetSet.has(k), 'EXAMPLES key not a card target: ' + k);
  ok(Array.isArray(v) && v.length === 2 && v.every(nonEmpty) && !hasHangul(v[0]) && hasHangul(v[1]), 'EXAMPLES shape ' + k);
}

/* LESSONS / CHECKS */
ok(C.LESSONS.length >= 9, 'lessons < 9');
const ids = new Set();
const allowedTag = /^<\/?(p|h3|ul|li|b|i|table|tr|th)>$|^<td( class="k")?>$|^<\/td>$|^<div class="(tip|tbl)">$|^<\/div>$/;
const correctIdx = [];
C.LESSONS.forEach(l => {
  ok(/^[a-z0-9-]+$/.test(l.id) && !ids.has(l.id), 'lesson id ' + l.id); ids.add(l.id);
  ok(nonEmpty(l.title) && /^\d+ · /.test(l.title) && hasHangul(l.title), 'lesson title ' + l.id);
  ok(nonEmpty(l.blurb) && hasHangul(l.blurb), 'lesson blurb ' + l.id);
  ok(C.DECKS[l.deck], 'lesson deck missing ' + l.id + ' ' + l.deck);
  ok(isStr(l.body) && l.body.length > 200, 'lesson body ' + l.id);
  const body = l.body;
  (body.match(/<[^>]*>/g) || []).forEach(t => ok(allowedTag.test(t), 'lesson ' + l.id + ' disallowed tag ' + t));
  ok(!/[<>]/.test(body.replace(/<[^>]*>/g, '')), 'lesson ' + l.id + ' stray < or >');
  ok(!/on\w+=|javascript:|<script|style=/i.test(body), 'lesson ' + l.id + ' unsafe attr');
  /* tag balance */
  const stack = [];
  (body.match(/<\/?[a-z0-9]+/g) || []).forEach(t => {
    if (t[1] === '/') { const n = t.slice(2); if (stack.pop() !== n) fail('lesson ' + l.id + ' unbalanced </' + n + '>'); }
    else stack.push(t.slice(1));
  });
  ok(stack.length === 0, 'lesson ' + l.id + ' unclosed ' + stack.join(','));
  /* ex tokens */
  const opens = (body.match(/\{\{/g) || []).length, closes = (body.match(/\}\}/g) || []).length;
  const toks = body.match(/\{\{ex:[^{}]*\}\}/g) || [];
  ok(opens === toks.length && closes === toks.length, 'lesson ' + l.id + ' malformed {{ }} tokens');
  ok(toks.length >= 3, 'lesson ' + l.id + ' has < 3 ex tokens');
  toks.forEach(t => {
    const parts = t.slice(5, -2).split('|');
    ok(parts.length === 3 && parts.every(nonEmpty), 'lesson ' + l.id + ' bad token ' + t);
    if (parts.length === 3) { ok(!hasHangul(parts[0]), 'token English has Hangul ' + t); ok(hasHangul(parts[1]) && hasHangul(parts[2]), 'token pron/meaning not Korean ' + t); }
  });
  const ch = C.CHECKS[l.id];
  ok(Array.isArray(ch) && ch.length === 3, 'lesson ' + l.id + ' must have exactly 3 checks');
  (ch || []).forEach((q, i) => {
    const w = l.id + '#' + i;
    ok(Array.isArray(q) && q.length === 4, 'check shape ' + w);
    ok(nonEmpty(q[0]) && hasHangul(q[0]), 'check question ' + w);
    ok(Array.isArray(q[1]) && q[1].length === 4 && q[1].every(nonEmpty) && new Set(q[1]).size === 4, 'check options ' + w);
    ok(Number.isInteger(q[2]) && q[2] >= 0 && q[2] <= 3, 'check index ' + w);
    ok(nonEmpty(q[3]) && hasHangul(q[3]), 'check explanation ' + w);
    correctIdx.push(q[2]);
  });
});
Object.keys(C.CHECKS).forEach(k => ok(ids.has(k), 'CHECKS for unknown lesson ' + k));
const idxCounts = [0, 1, 2, 3].map(i => correctIdx.filter(x => x === i).length);
ok(idxCounts.filter(n => n > 0).length >= 3 && Math.max(...idxCounts) <= correctIdx.length * 0.5, 'correct option position not varied: ' + idxCounts);

/* PATTERNS */
ok(C.PATTERNS.length >= 20, 'PATTERNS < 20');
C.PATTERNS.forEach((p, i) => {
  ok(Array.isArray(p) && p.length === 4 && p.every(nonEmpty), 'pattern shape #' + i);
  ok(hasHangul(p[1]) && !hasHangul(p[2]), 'pattern lang #' + i);
  ok(ids.has(p[3]), 'pattern lesson id unknown #' + i + ' ' + p[3]);
});

/* PAUSE */
for (const k of ['compliment', 'expression', 'polite', 'saying']) {
  const s = C.PAUSE.sets[k];
  ok(Array.isArray(s) && s.length === 2 && nonEmpty(s[0]) && Array.isArray(s[1]), 'pause set shape ' + k);
  if (!s) continue;
  ok(s[1].length >= 18, 'pause ' + k + ' < 18');
  const seen = new Set();
  s[1].forEach((x, i) => {
    ok(Array.isArray(x) && x.length === 2 && x.every(nonEmpty) && !hasHangul(x[0]) && hasHangul(x[1]), 'pause item ' + k + '#' + i);
    const n = norm(x[0]); ok(!seen.has(n), 'pause dup ' + k + ' ' + x[0]); seen.add(n);
  });
}
ok(C.PAUSE.idioms.length >= 24, 'idioms < 24');
const iseen = new Set();
C.PAUSE.idioms.forEach((x, i) => {
  ok(Array.isArray(x) && x.length === 4 && x.every(nonEmpty), 'idiom shape #' + i);
  ok(!hasHangul(x[0]) && hasHangul(x[1]) && hasHangul(x[2]) && hasHangul(x[3]), 'idiom lang #' + i);
  const n = norm(x[0]); ok(!iseen.has(n), 'idiom dup ' + x[0]); iseen.add(n);
  ok(!targets.has(n), 'idiom duplicates a card target: ' + x[0]);
});

/* report */
info.push('decks ' + deckNames.length + ' · cards ' + cardCount + ' · lessons ' + C.LESSONS.length + ' · checks ' + correctIdx.length +
  ' · DIALOG ' + dk.length + ' · EXAMPLES ' + ek.length + ' · PATTERNS ' + C.PATTERNS.length +
  ' · PAUSE ' + ['compliment', 'expression', 'polite', 'saying'].map(k => k + ' ' + C.PAUSE.sets[k][1].length).join(', ') +
  ' · idioms ' + C.PAUSE.idioms.length + ' · groups ' + C.GROUPS.length + ' · tags ' + Object.keys(C.TAGS).length);
info.push('correct-index distribution [0,1,2,3]: ' + idxCounts.join(','));
info.push('deck sizes: ' + deckNames.map(d => d + ' ' + C.DECKS[d].length).join(' | '));
console.log(info.join('\n'));
if (errs.length) { console.log('FAIL (' + errs.length + ')\n - ' + errs.join('\n - ')); process.exit(1); }
console.log('PASS: all checks OK');
