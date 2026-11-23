/* Trainers golden (docs/TRAINERS-PLAN.md WP0a): a seeded recording of everything the Korean trainers render for the built-in en-ko course.
   Zero-diff packages (WP0b–WP6) must leave this recording byte-identical; fix packages (WP7, WP8) re-record it with the diff reviewed.
   usage: node tools/tests/trainers-golden.js            compare with tools/tests/golden/en-ko-trainers.json (exit 1 on any difference)
          node tools/tests/trainers-golden.js --record   (re)write the recording
          GOLDEN_SRC=<built html> to record/compare another build (default: korean-flashcards.html)
   Deterministic: Math.random is a seeded mulberry32 reset per item, the clock is frozen, locale en-US, fresh storage, speech is a no-op. */
'use strict';
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path'), os = require('os');
const ROOT = path.resolve(__dirname, '..', '..');
const SRC = process.env.GOLDEN_SRC || path.join(ROOT, 'korean-flashcards.html');
const GOLD = path.join(__dirname, 'golden', 'en-ko-trainers.json');
const RECORD = process.argv.includes('--record');

function capture() {
  const out = {};
  const mb = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const seed = n => { Math.random = mb(1000003 * (n + 1)); };
  const noop = () => {};
  window.speak = noop; window.buzz = noop; try { window.fxGood = noop; window.fxBad = noop; window.streakFx = noop; window.ansFx = noop; } catch (e) {}
  const SNAP = JSON.stringify(S);
  const reset = () => { S = JSON.parse(SNAP); hStreak = 0; memoClear(); };
  const box = document.createElement('div'); box.id = 'goldenBox'; document.body.appendChild(box);
  const html = el => el.innerHTML;
  const firstOpt = () => box.querySelector('.opt');
  /* qSel as the page booted (top-level initialiser, before quizChips ran) is read by the caller before anything else */

  /* ---- 1. per-deck predicates (exhaustive over every deck) ---- */
  out.decks = names.map(d => ({ d, script: isScriptDeck(d), letter: isLetterDeck(d), soundCard0: DECKS[d].length ? soundCard(d, DECKS[d][0]) : null, dialogDeckOfFirst: DECKS[d].length ? dialogDeck(DECKS[d][0][0]) : null }));
  out.dialogDeck = Object.keys(DIALOG).map(k => [k, dialogDeck(k)]).concat([['__nope__', dialogDeck('__nope__')]]);

  /* ---- 2. Hangul drill data ---- */
  out.answersFor = [...WORDS_CV, ...WORDS_F].map(w => { const a = answersFor(w); return a ? [w, a.canon, a.parts, [...a.answers].join(',')] : [w, null]; });
  out.hangulItem = [1, 2, 3].map(l => { const r = []; for (let i = 0; i < 200; i++) { seed(l * 1000 + i); const it = hangulItem(l); r.push([it.ch, it.canon, it.parts, it.answers.size]); } return r; });
  out.mean = [...WORDS_CV, ...WORDS_F].map(w => [w, MEAN[w] == null ? null : MEAN[w]]);

  /* ---- 3. renderers ---- */
  const R = {};
  const run = (name, n, fn) => { R[name] = []; for (let i = 0; i < n; i++) { reset(); seed(i + name.length * 7919); box.innerHTML = ''; try { R[name].push(fn(i)); } catch (e) { R[name].push('ERR ' + e.message); } } };
  const submit = (val) => { const inp = box.querySelector('input.ans'); inp.value = val; const f = box.querySelector('form'); f.dispatchEvent(new Event('submit', { cancelable: true })); return html(box.querySelector('.fb')); };
  const saveMode = S.drillMode;
  [1, 2, 3].forEach(lvl => {
    run('type' + lvl, 50, i => { S.drillMode = 'type'; renderHangulQ(box, lvl, noop); const h0 = html(box); const ch = box.querySelector('.q').textContent; const a = answersFor(ch); const k = i % 4;
      const fb = k === 0 ? submit(a.canon) : k === 1 ? submit([...a.answers].pop()) : k === 2 ? submit('zzq') : (submit(''), html(box.querySelector('.fb')));
      return [h0, fb]; });
    run('pick' + lvl, 50, i => { S.drillMode = 'pick'; renderHangulQ(box, lvl, noop); const h0 = html(box); const o = box.querySelectorAll('.opt')[i % 4]; if (o) o.click(); return [h0, html(box.querySelector('.fb'))]; });
  });
  const clickRun = mode => run(mode, 50, i => { S.drillMode = mode; renderHangulQ(box, 2, noop); const h0 = html(box); const o = box.querySelectorAll('.opt')[i % 4]; if (o) o.click(); const fb = box.querySelector('.fb'); return [h0, fb ? html(fb) : null]; });
  ['register', 'sound', 'listen', 'role'].forEach(clickRun);
  run('numbers', 50, i => { S.drillMode = 'numbers'; renderHangulQ(box, 2, noop); const h0 = html(box); return [h0, submit(i % 2 ? '1' : '0')]; });
  run('build', 50, i => { S.drillMode = 'build'; renderHangulQ(box, 2, noop); const h0 = html(box); box.querySelector('.skip').click(); return [h0, html(box.querySelector('.fb'))]; });
  run('say', 20, i => { S.drillMode = 'say'; renderHangulQ(box, 2, noop); return html(box); });
  run('staleModes', 8, i => { S.drillMode = ['sound', 'numbers', 'register', 'build', 'pick', 'bogus', 'listen', 'role'][i]; renderHangulQ(box, 1, noop); return html(box).slice(0, 400); });
  S.drillMode = saveMode;
  out.render = R;

  /* quiz (renderQuizQ) per deck, wrong answer: the "Why:" line; review question distractors (renderReviewQ partition) */
  out.quizWhy = names.filter(d => DECKS[d].length).map((d, i) => { reset(); seed(5000 + i); box.innerHTML = ''; try { renderQuizQ(box, d, DECKS[d][0], 'read', noop); const opts = [...box.querySelectorAll('.opt')]; const w = opts.find(o => o.dataset.a !== DECKS[d][0][0]) || opts[0]; w.click(); return [d, html(box)]; } catch (e) { return [d, 'ERR ' + e.message]; } });
  out.reviewQ = names.filter(d => DECKS[d].length).map((d, i) => { reset(); seed(6000 + i); box.innerHTML = ''; try { renderReviewQ(box, d, DECKS[d][0], noop, { noTeach: true }); return [d, html(box)]; } catch (e) { return [d, 'ERR ' + e.message]; } });
  out.buildQuiz = names.filter(d => DECKS[d].length).map((d, i) => { reset(); seed(7000 + i); try { return [d, buildQuiz(DECKS[d].map(c => ({ d, c })), 'mixed').map(x => x.d + '|' + x.c[0] + '|' + x.mode)]; } catch (e) { return [d, 'ERR ' + e.message]; } });

  /* card backs: every jamo card (stroke button), plus one card per deck (pronNote, breakdown button) */
  out.cardBack = [];
  names.forEach(d => DECKS[d].forEach((c, j) => { if (!(STROKES[c[0]] || j === 0 || DIALOG[c[0]])) return; reset(); seed(8000 + out.cardBack.length); box.innerHTML = ''; try { renderFlashcard(box, d, c, noop); const b = box.querySelector('.back'); out.cardBack.push([d, c[0], b ? html(b) : html(box)]); } catch (e) { out.cardBack.push([d, c[0], 'ERR ' + e.message]); } }));

  /* ---- 4. breakdown / build / conjugator / grammar ---- */
  reset(); const sents = buildSentences(); out.buildSentences = sents.map(s => [s.ko, s.en, s.say]);
  out.breakdown = sents.map(s => breakdown(s.ko));
  out.breakdownHTML = sents.slice(0, 40).map(s => breakdownHTML(s.ko));
  out.dialogVocab = dialogVocab();
  const verbs = ['가다', '먹다', '하다', '마시다', '예쁘다', '듣다', '돕다', '살다', '모르다', '받다', '입다', '쓰다', '바쁘다', '빠르다', '걷다', '춥다', '덥다', '어렵다', '닫다', '믿다', '잡다', '공부하다', '만나다', '보다', '오다', '주다', '배우다', '기다리다', '되다', '놀다', '알다', '만들다', '좋다', '싫다', '크다', '작다', '앉다', '읽다', '없다', '있다', '먹', '다'];
  out.cjHTML = verbs.map(v => [v, cjHTML(v)]);
  try { showGrammar = true; gq = ''; out.grammar = renderGrammar(); gq = '에서'; out.grammarQ = renderGrammar(); gq = ''; showGrammar = false; } catch (e) { out.grammar = 'ERR ' + e.message; }

  /* ---- 5. numbers / sound / romanisation ---- */
  out.numItem = []; for (let i = 0; i < 200; i++) { seed(9000 + i); out.numItem.push(numItem()); }
  out.sino = [0, 1, 10, 11, 38900, 10000, 12345].map(n => sino(n)); out.native = [[1, false], [25, true], [20, true], [99, false]].map(([n, a]) => native(n, a));
  out.soundPool = (soundPool || []).slice();
  const allCards = []; names.forEach(d => DECKS[d].forEach(c => allCards.push(c[0])));
  out.pronNote = allCards.map(k => pronNote(k));
  out.romanize = allCards.map(k => romanize(k));
  out.pronounce = (soundPool || []).map(x => x[0].split(/\s+/).map(w => pronounce(w, false, true)));

  /* ---- 6. tooltips: toast() and koTips() on every KOUI word ---- */
  out.koui = Object.keys(KOUI).map(k => { toast(k + '!'); const t = $('toast').title; const d = document.createElement('div'); d.innerHTML = '<div class="ko">' + k + '</div>'; document.body.appendChild(d); koTips(d); const kt = d.firstChild.title; d.remove(); return [k, t, kt]; });
  toast('plain text'); out.toastPlain = $('toast').title;

  /* ---- 7. session planning, onboarding, UI chrome ---- */
  const states = [
    ['fresh', s => {}],
    ['quick', s => { s.sessLen = 'quick'; }],
    ['long', s => { s.sessLen = 'long'; }],
    ['readYes', s => { s.onboard = { read: 'yes', goal: 'travel', len: 'standard' }; }],
    ['readNo', s => { s.onboard = { read: 'no', goal: 'travel', len: 'standard' }; }],
    ['survivalOnly', s => { s.drillLvl = 0; s.onboard = { read: 'yes' }; ['Hangul consonants'].forEach(d => DECKS[d].forEach(c => { s.cards[ck(d, c)] = { box: 3, due: dayNum() + 5, seen: 1, lapses: 0, last: Date.now() }; })); }],
    ['learnedHangul', s => { s.sessLen = 'long'; s.onboard = { read: 'slow' }; s.drillLvl = 0; ['Hangul consonants', 'Survival phrases'].forEach(d => DECKS[d].slice(0, 10).forEach(c => { s.cards[ck(d, c)] = { box: 3, due: dayNum() + 5, seen: 1, lapses: 0, last: Date.now() }; })); }]
  ];
  out.session = states.map(([n, f], i) => { reset(); f(S); memoClear(); seed(11000 + i); const sz = sessSize(); let pl; try { pl = planSession().map(x => x.t + (x.lvl ? ':' + x.lvl : '') + (x.d ? ':' + x.d : '') + (x.id ? ':' + x.id : '')); } catch (e) { pl = 'ERR ' + e.message; } return [n, sz, pl]; });
  reset(); out.weekDeck = weekDeck();
  out.quickRead = (QUICK.read || []).map(x => x[0]);
  out.tour3 = TOUR[3];
  out.hModes = [...document.querySelectorAll('#hModes .chip')].map(b => [b.dataset.hm, b.hidden]);
  out.navRead = (() => { const a = document.querySelector('#nav a[href="#read"]'); return a ? [a.textContent, a.dataset.k, a.dataset.ico] : null; })();
  out.vHangul = (() => { const v = $('v-hangul'); return v ? [v.querySelector('h2').innerHTML, (v.querySelector('.panel > p') || {}).innerHTML, $('hLvls').hidden, $('regStart').hidden] : null; })();
  /* global search: drill and action entries */
  out.search = (() => { const r = {}; globalSearch(); const inp = $('gsIn'); ['type', 'pick', 'build', 'register', 'listen', 'numbers', 'role', 'say', 'conjugator', 'e'].forEach(q => { inp.value = q; inp.dispatchEvent(new Event('input')); r[q] = $('gsOut').innerText; }); closeSheet(); return r; })();
  /* onboarding: the HTML, then each answer's effect */
  out.onboard = ['no', 'slow', 'yes'].map((v, i) => { reset(); S.onboard = null; seed(12000 + i); renderOnboard(); const h = $('todayHome').innerHTML; $('obRead').querySelector('[data-v="' + v + '"]').click(); $('obGo').click(); return [v, i === 0 ? h : null, Object.keys(S.cards).length, S.drillLvl || null, S.lessons.hangul || null, [...qSel], deck, $('toast').textContent, $('toast').title]; });
  /* today screen tiles */
  reset(); S.onboard = { skipped: 1 }; S.hintSeen = 1; renderToday(); out.todayPlan = (document.querySelector('#todayHome .plan') || {}).innerHTML || null; out.todayQuick = (document.querySelector('#todayHome .quick') || {}).innerHTML || null;
  box.remove(); reset();
  return out;
}

(async () => {
  if (!fs.existsSync(SRC)) { console.error('no build at ' + SRC + ' (run ./build.sh)'); process.exit(2); }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'golden-')); const page = path.join(tmp, 'page.html');
  fs.writeFileSync(page, '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>' + fs.readFileSync(SRC, 'utf8') + '</body></html>');
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 800 }, locale: 'en-US', timezoneId: 'UTC' }); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.clock.setFixedTime(new Date('2026-11-20T10:00:00Z'));
  await p.route('**/fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' })); await p.route('**/*.supabase.co/**', r => r.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
  await p.goto('file://' + page); await p.waitForTimeout(300);
  const qSel0 = await p.evaluate(() => [...qSel]);
  /* the drill text a fresh en-ko profile sees: the read tab rendered once by the app itself */
  const got = await p.evaluate('(' + capture.toString() + ')()');
  got.qSelBoot = qSel0;
  got.pageErrors = errs.slice();
  await b.close(); fs.rmSync(tmp, { recursive: true, force: true });
  const js = JSON.stringify(got, null, 0);
  if (RECORD) { fs.mkdirSync(path.dirname(GOLD), { recursive: true }); fs.writeFileSync(GOLD, JSON.stringify(got, null, 1) + '\n'); console.log('recorded ' + path.relative(ROOT, GOLD) + ' (' + js.length + ' bytes, ' + Object.keys(got).length + ' sections)'); process.exit(0); }
  if (!fs.existsSync(GOLD)) { console.error('no recording: run with --record on the untouched build first'); process.exit(2); }
  const want = JSON.parse(fs.readFileSync(GOLD, 'utf8'));
  const diffs = [];
  const walk = (a, b, p) => { if (diffs.length > 60) return; if (JSON.stringify(a) === JSON.stringify(b)) return; if (a && b && typeof a === 'object' && typeof b === 'object') { const ks = new Set([...Object.keys(a), ...Object.keys(b)]); for (const k of ks) walk(a[k], b[k], p + '.' + k); return; } diffs.push(p + ': ' + JSON.stringify(a).slice(0, 220) + '  →  ' + JSON.stringify(b).slice(0, 220)); };
  walk(want, got, 'golden');
  if (diffs.length) { console.log('GOLDEN DIFF (' + diffs.length + (diffs.length > 60 ? '+' : '') + '):'); diffs.forEach(d => console.log('  ' + d)); console.log('GOLDEN FAIL'); process.exit(1); }
  console.log('GOLDEN OK · ' + Object.keys(want).length + ' sections, ' + js.length + ' bytes identical');
})().catch(e => { console.error('golden: ' + e.stack); process.exit(2); });
