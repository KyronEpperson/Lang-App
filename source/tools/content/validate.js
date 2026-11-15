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
for (const k of ['DECKS', 'GROUPS', 'TAGS', 'DESC', 'DIALOG', 'EXAMPLES', 'LESSONS', 'CHECKS', 'PRACTICE', 'PATTERNS', 'PAIRS', 'GOALS', 'TITLES', 'PAUSE']) ok(k in C, 'missing key ' + k);
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

/* PRACTICE (docs/PRACTICE-SPEC.md v1) */
const practiceInfo = [];
(function checkPractice() {
  const P = C.PRACTICE;
  if (!P || typeof P !== 'object') { fail('missing PRACTICE'); return; }
  const lessonIds = C.LESSONS.map(l => l.id);
  ok(Object.keys(P).join() === lessonIds.join(), 'PRACTICE keys must equal lesson ids in order: ' + Object.keys(P).join());
  /* engine normaliser: trim, collapse spaces, strip . , ! ? ~ and quotes, lower-case, curly apostrophe = straight */
  const pn = s => s.replace(/’/g, "'").replace(/[.,!?~"“”]/g, '').replace(/(^|\s)'|'(\s|$)/g, '$1$2').replace(/\s+/g, ' ').trim().toLowerCase();
  const ART = /^(a|an|the)$/i;
  const words = s => pn(s).split(' ');
  const plPair = (u, v) => { u = u.toLowerCase(); v = v.toLowerCase(); return u === v + 's' || u === v + 'es' || (v.endsWith('y') && u === v.slice(0, -1) + 'ies'); };
  const anyPair = (xs, ys) => xs.some(x => ys.some(y => plPair(x, y) || plPair(y, x)));
  const namesPoint = s => isStr(s) && /관사|복수/.test(s);
  const CONTR = { "i'm": 'i am', "i'll": 'i will', "i'd": 'i would', "i've": 'i have', "it's": 'it is', "that's": 'that is', "don't": 'do not', "doesn't": 'does not', "he's": 'he is', "she's": 'she is', "we're": 'we are', "we've": 'we have', "can't": 'cannot', "isn't": 'is not' };
  const NO_REVERSE = new Set(["i've", "we've"]); /* "I've" before a plain noun object is not natural AmE, so "I have" does not demand it */
  const allStrings = it => [it.q, it.p, it.why, it.hint, ...(it.o || []), ...(it.a || []), ...(it.x || [])].filter(isStr);
  for (const id of lessonIds) {
    const items = P[id];
    if (!Array.isArray(items)) { fail('PRACTICE.' + id + ' missing'); continue; }
    ok(items.length >= 12 && items.length <= 16, 'PRACTICE.' + id + ' has ' + items.length + ' items (12-16)');
    const seq = items.map(it => it && it.t);
    const cnt = t => seq.filter(x => x === t).length;
    ok(/^(mc)+(order)+(fill)+(type)+$/.test(seq.join('')) && seq.join(',') === [...seq].sort((a, b) => ['mc', 'order', 'fill', 'type'].indexOf(a) - ['mc', 'order', 'fill', 'type'].indexOf(b)).join(','), 'PRACTICE.' + id + ' block order must be mc → order → fill → type');
    ok(cnt('mc') >= 4 && cnt('mc') <= 5, 'PRACTICE.' + id + ' mc count ' + cnt('mc'));
    ok(cnt('order') >= 3 && cnt('order') <= 4, 'PRACTICE.' + id + ' order count ' + cnt('order'));
    ok(cnt('fill') === 3, 'PRACTICE.' + id + ' fill count ' + cnt('fill'));
    ok(cnt('type') >= 3 && cnt('type') <= 4, 'PRACTICE.' + id + ' type count ' + cnt('type'));
    let orderHits = 0, typeHits = 0;
    items.forEach((it, i) => {
      const w = 'PRACTICE.' + id + '#' + i + ' (' + (it && it.t) + ')';
      if (!it || typeof it !== 'object') { fail(w + ' not an object'); return; }
      const allowed = { mc: ['t', 'q', 'o', 'why'], order: ['t', 'p', 'a', 'x', 'why'], fill: ['t', 'q', 'p', 'a', 'o', 'why'], type: ['t', 'p', 'a', 'hint', 'x', 'why'] }[it.t];
      if (!allowed) { fail(w + ' unknown type'); return; }
      Object.keys(it).forEach(k => ok(allowed.includes(k), w + ' unexpected field ' + k));
      allStrings(it).forEach(s => { ok(!/[<>]/.test(s), w + ' contains < or >: ' + s); ok(!/[\r\n\t]/.test(s), w + ' control char'); ok(s === s.trim() && s.length > 0, w + ' empty/untrimmed string'); });
      const eng = [...(it.o || []), ...(it.a || []), ...(it.x || [])].concat(it.t === 'fill' ? [it.q] : []);
      eng.forEach(s => ok(isStr(s) && !hasHangul(s), w + ' Hangul in English answer string: ' + s));
      ok(it.t === 'fill' || it.t === 'mc' ? nonEmpty(it.why) && hasHangul(it.why) : (it.why === undefined || (nonEmpty(it.why) && hasHangul(it.why))), w + ' why must be Korean');
      if (it.t === 'mc') {
        ok(nonEmpty(it.q) && hasHangul(it.q), w + ' q must be Korean');
        ok(Array.isArray(it.o) && it.o.length === 4 && it.o.every(nonEmpty), w + ' needs exactly 4 options');
        ok(Array.isArray(it.o) && new Set(it.o.map(pn)).size === it.o.length, w + ' options not unique after normalising');
      } else if (it.t === 'order') {
        ok(nonEmpty(it.p) && hasHangul(it.p), w + ' p must be Korean');
        ok(Array.isArray(it.a) && it.a.length >= 2 && it.a.length <= 6 && it.a.every(s => nonEmpty(s) && !/\s/.test(s)), w + ' a must be 2-6 single-word tiles');
        ok(Array.isArray(it.x) && it.x.length >= 1 && it.x.length <= 2 && it.x.every(s => nonEmpty(s) && !/\s/.test(s)), w + ' x must be 1-2 single-word tiles');
        if (Array.isArray(it.a) && Array.isArray(it.x)) {
          const A = it.a.map(s => s.toLowerCase());
          it.x.forEach(s => ok(!A.includes(s.toLowerCase()), w + ' distractor tile also in a: ' + s));
          if (namesPoint(it.why) && (it.x.some(s => ART.test(s)) || anyPair(it.x, it.a))) orderHits++;
        }
      } else if (it.t === 'fill') {
        ok(nonEmpty(it.q) && it.q.split('__').length === 2 && !/___/.test(it.q), w + ' q must contain exactly one "__"');
        ok(nonEmpty(it.p) && hasHangul(it.p), w + ' p must be Korean');
        ok(Array.isArray(it.a) && it.a.length >= 1 && it.a.every(nonEmpty), w + ' a must be non-empty');
        ok(Array.isArray(it.o) && it.o.length === 3 && it.o.every(nonEmpty) && new Set(it.o.map(pn)).size === 3, w + ' o must be 3 distinct wrong fills');
        if (Array.isArray(it.a) && Array.isArray(it.o)) { const A = new Set(it.a.map(pn)); it.o.forEach(s => ok(!A.has(pn(s)), w + ' wrong fill overlaps a: ' + s)); }
      } else if (it.t === 'type') {
        ok(nonEmpty(it.p) && hasHangul(it.p), w + ' p must be Korean');
        ok(nonEmpty(it.hint) && hasHangul(it.hint), w + ' hint must be present and Korean-led');
        ok(Array.isArray(it.a) && it.a.length >= 1 && it.a.every(nonEmpty), w + ' a must be non-empty');
        if (!Array.isArray(it.a)) return;
        ok(new Set(it.a.map(pn)).size === it.a.length, w + ' duplicate variants after normalising');
        ok(!/[.,!?]$/.test(it.a[0]), w + ' a[0] should have no end punctuation');
        const n0 = words(it.a[0]).length;
        ok(n0 >= 2 && n0 <= 7, w + ' a[0] must be 2-7 words: ' + it.a[0]);
        ok(it.x === undefined || (Array.isArray(it.x) && it.x.length >= 1 && it.x.length <= 2 && it.x.every(nonEmpty)), w + ' x must be 1-2 tiles');
        const V = new Set(it.a.map(pn));
        it.a.forEach(v => {
          const s = pn(v);
          for (const [c, e] of Object.entries(CONTR)) {
            const re = new RegExp('(^| )' + c + '( |$)');
            if (re.test(s)) ok(V.has(s.replace(re, '$1' + e + '$2')), w + ' contraction "' + c + '" without full form: ' + v);
            const re2 = new RegExp('(^| )' + e + '( |$)');
            if (!NO_REVERSE.has(c) && re2.test(s)) ok(V.has(s.replace(re2, '$1' + c + '$2')), w + ' full form "' + e + '" without contraction: ' + v);
          }
        });
        const w0 = words(it.a[0]);
        const allHaveArt = it.a.every(v => words(v).some(t => ART.test(t)));
        const xArtOrPair = Array.isArray(it.x) && (it.x.some(s => ART.test(s)) || anyPair(it.x, w0));
        if (namesPoint(it.why) && (allHaveArt || xArtOrPair)) typeHits++;
      }
    });
    const nOrder = cnt('order'), nType = cnt('type');
    ok(orderHits >= Math.ceil(nOrder / 2), 'PRACTICE.' + id + ' article/plural check: only ' + orderHits + '/' + nOrder + ' order items');
    ok(typeHits >= Math.ceil(nType / 2), 'PRACTICE.' + id + ' article/plural check: only ' + typeHits + '/' + nType + ' type items');
    practiceInfo.push(id + ' ' + items.length + ' (mc ' + cnt('mc') + ', order ' + cnt('order') + ' [a/p ' + orderHits + '], fill ' + cnt('fill') + ', type ' + cnt('type') + ' [a/p ' + typeHits + '])');
  }
})();

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
info.push('practice: ' + practiceInfo.join(' | '));
info.push('deck sizes: ' + deckNames.map(d => d + ' ' + C.DECKS[d].length).join(' | '));
console.log(info.join('\n'));
if (errs.length) { console.log('FAIL (' + errs.length + ')\n - ' + errs.join('\n - ')); process.exit(1); }
console.log('PASS: all checks OK');
