/* Shared-English-side parity check (PILOT-SPEC §1.6): compares packs/course-<lang>-en.js with packs/course-ko-en.js.
   usage: node tools/content/parity.js <lang> [<lang pack path>] [--ref <ko-en pack path>]
   Compared (ko-en is the reference):
     - lesson ids in the same order (minus deviations.extraLessons in <lang>, minus deviations.droppedLessons in ko-en)
     - deck count; English card targets per deck position (deck i of <lang> vs deck i of ko-en); each lesson's deck position
     - per lesson: check count, check answer indexes, and every check option that has no Hangul in ko-en (an English option)
     - per lesson: practice item count, item types, and the English o / a / x per item (plus q for fill items)
   Exceptions: tools/content/<lang>/deviations.json
     {"lessons": {"<id>": "reason"}, "items": {"<lessonId>#<index>": "reason"}, "decks": {"<ko-en deck name | <lang> deck name | index>": "reason"},
      "extraLessons": ["id"], "droppedLessons": ["id"]}
   A lesson listed in "lessons" is excluded from check/practice/deck-position comparison; an item key also covers that lesson's check
   ("<id>#check<i>"). Exit 1 on any unexplained difference; unused deviations are reported as warnings. */
const LIB = require('./lib.js');
const argv = process.argv.slice(2);
const refAt = argv.indexOf('--ref');
const REF = refAt >= 0 ? argv.splice(refAt, 2)[1] : LIB.packPath('ko');
const LANG = LIB.checkLang(argv[0] || '');
const FILE = argv[1] || LIB.packPath(LANG);
const DEV = LIB.loadDeviations(LANG);
const KO = LIB.loadPack(REF, 'ko').C;
const XX = LIB.loadPack(FILE, LANG).C;
if (!KO) { console.log('FAIL: no ko-en course in ' + REF); process.exit(1); }
if (!XX) { console.log('FAIL: no ' + LIB.courseId(LANG) + ' course in ' + FILE); process.exit(1); }
const HANGUL = new RegExp(LIB.loadProfile('ko').nativeScript, 'u');

const diffs = [], used = new Set(), stats = { lessons: 0, decks: 0, cards: 0, checks: 0, options: 0, items: 0 };
const J = v => JSON.stringify(v);
const dev = (kind, key) => { const r = DEV[kind][key]; if (r !== undefined) used.add(kind + ':' + key); return r !== undefined; };
const diff = (msg, ...keys) => { for (const [kind, key] of keys) if (dev(kind, key)) return; diffs.push(msg); };

/* lessons */
const koIds = KO.LESSONS.map(l => l.id), xxIds = XX.LESSONS.map(l => l.id);
DEV.extraLessons.forEach(id => { used.add('extraLessons:' + id); if (!xxIds.includes(id)) diffs.push('extraLessons lists ' + id + ' but the ' + LANG + ' pack has no such lesson'); if (koIds.includes(id)) diffs.push('extraLessons lists ' + id + ' but ko-en has it too'); });
DEV.droppedLessons.forEach(id => { used.add('droppedLessons:' + id); if (!koIds.includes(id)) diffs.push('droppedLessons lists ' + id + ' but ko-en has no such lesson'); if (xxIds.includes(id)) diffs.push('droppedLessons lists ' + id + ' but the ' + LANG + ' pack still has it'); });
const koSeq = koIds.filter(id => !DEV.droppedLessons.includes(id)), xxSeq = xxIds.filter(id => !DEV.extraLessons.includes(id));
if (J(koSeq) !== J(xxSeq)) {
  const missing = koSeq.filter(id => !xxSeq.includes(id)), extra = xxSeq.filter(id => !koSeq.includes(id));
  if (missing.length) diffs.push('lessons missing (not in droppedLessons): ' + missing.join(', '));
  if (extra.length) diffs.push('lessons extra (not in extraLessons): ' + extra.join(', '));
  if (!missing.length && !extra.length) { const i = koSeq.findIndex((id, k) => id !== xxSeq[k]); diffs.push('lesson order differs from position ' + (i + 1) + ': ko-en ' + koSeq.slice(i, i + 3).join(',') + ' … vs ' + xxSeq.slice(i, i + 3).join(',') + ' …'); }
}

/* decks */
const koDecks = Object.keys(KO.DECKS), xxDecks = Object.keys(XX.DECKS);
const deckDev = i => [['decks', String(i)], ['decks', koDecks[i]], ['decks', xxDecks[i]]].filter(k => k[1] !== undefined);
if (koDecks.length !== xxDecks.length) diff('deck count ' + xxDecks.length + ' vs ko-en ' + koDecks.length, ['decks', 'count']);
for (let i = 0; i < Math.max(koDecks.length, xxDecks.length); i++) {
  const a = koDecks[i] !== undefined ? KO.DECKS[koDecks[i]].map(c => c[0]) : null, b = xxDecks[i] !== undefined ? XX.DECKS[xxDecks[i]].map(c => c[0]) : null;
  stats.decks++; stats.cards += a ? a.length : 0;
  if (!a || !b) { diff('deck #' + i + ' exists only in ' + (a ? 'ko-en (' + koDecks[i] + ')' : LANG + ' (' + xxDecks[i] + ')'), ...deckDev(i)); continue; }
  if (J(a) !== J(b)) {
    const k = a.findIndex((t, j) => t !== b[j]);
    diff('deck #' + i + ' (' + koDecks[i] + ' / ' + xxDecks[i] + ') English targets differ' + (a.length !== b.length ? ' (' + b.length + ' vs ' + a.length + ' cards)' : '') + (k >= 0 ? ' at card ' + k + ': ' + J(b[k]) + ' vs ' + J(a[k]) : ''), ...deckDev(i));
  }
}

/* per-lesson checks and practice */
for (const id of koSeq.filter(id => xxSeq.includes(id))) {
  stats.lessons++;
  if (dev('lessons', id)) continue;
  const kl = KO.LESSONS.find(l => l.id === id), xl = XX.LESSONS.find(l => l.id === id);
  const kdi = koDecks.indexOf(kl.deck), xdi = xxDecks.indexOf(xl.deck);
  if (kdi !== xdi) diff(id + ': lesson deck is #' + xdi + ' (' + xl.deck + ') vs ko-en #' + kdi + ' (' + kl.deck + ')', ['items', id + '#deck']);
  const kc = KO.CHECKS[id] || [], xc = XX.CHECKS[id] || [];
  if (kc.length !== xc.length) diff(id + ': ' + xc.length + ' checks vs ko-en ' + kc.length, ['items', id + '#checks']);
  kc.forEach((q, i) => {
    const r = xc[i]; if (!r) return; stats.checks++;
    const key = ['items', id + '#check' + i];
    if (q[2] !== r[2]) diff(id + ' check ' + i + ': answer index ' + r[2] + ' vs ko-en ' + q[2], key);
    q[1].forEach((o, j) => { if (HANGUL.test(o)) return; stats.options++; if (!r[1] || r[1][j] !== o) diff(id + ' check ' + i + ' option ' + j + ': ' + J(r[1] && r[1][j]) + ' vs ko-en ' + J(o), key); });
  });
  const kp = KO.PRACTICE[id] || [], xp = XX.PRACTICE[id] || [];
  if (kp.length !== xp.length) diff(id + ': ' + xp.length + ' practice items vs ko-en ' + kp.length, ['items', id + '#count']);
  kp.forEach((it, i) => {
    const r = xp[i]; if (!r) return; stats.items++;
    const key = ['items', id + '#' + i];
    if (it.t !== r.t) return diff(id + '#' + i + ': type ' + r.t + ' vs ko-en ' + it.t, key);
    for (const f of ['o', 'a', 'x'].concat(it.t === 'fill' ? ['q'] : [])) if (J(it[f]) !== J(r[f])) { diff(id + '#' + i + ' (' + it.t + ') ' + f + ': ' + J(r[f]) + ' vs ko-en ' + J(it[f]), key); break; }
  });
}

/* report */
const unused = [];
for (const k of ['lessons', 'items', 'decks']) for (const key of Object.keys(DEV[k])) if (!used.has(k + ':' + key)) unused.push(k + ':' + key);
console.log('parity ' + LANG + '-en vs ko-en: lessons ' + stats.lessons + '/' + koIds.length + ' · decks ' + xxDecks.length + '/' + koDecks.length + ' · cards ' + stats.cards +
  ' · checks ' + stats.checks + ' (English options ' + stats.options + ') · practice items ' + stats.items);
console.log('deviations used: ' + (used.size ? [...used].join(', ') : 'none') + (DEV.extraLessons.length || DEV.droppedLessons.length ? ' · extra ' + DEV.extraLessons.join(',') + ' · dropped ' + DEV.droppedLessons.join(',') : ''));
if (unused.length) console.log('WARN unused deviations (stale?): ' + unused.join(', '));
if (diffs.length) {
  console.log('FAIL: ' + diffs.length + ' unexplained difference(s) — fix the pack or add a reason to ' + DEV.file);
  diffs.slice(0, 60).forEach(d => console.log(' - ' + d));
  if (diffs.length > 60) console.log(' … and ' + (diffs.length - 60) + ' more');
  process.exit(1);
}
console.log('PASS: shared English side matches ko-en');
