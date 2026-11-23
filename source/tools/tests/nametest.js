/* Learner-name token @@ (docs/HALVES-SPEC.md §5): the line where the learner says their own name shows the nickname, or 민수 / Minsu without one.
   node tools/tests/nametest.js [built.html]
   1. built-in en-ko and the real es-ko pack, with no nickname, with "Ana", with a Hangul name and with a hostile one: dialogue, lesson rows (Korean, romanisation, gloss),
      practice (mc options, tile answer as ONE tile, distractor tile, typed matching), rendered lesson / practice / review screens never show a raw @@;
   2. the raw tables (COURSES[…], PRACTICE_BUILTIN, NAME_RAW) keep the token; a nickname change re-derives without a reload;
   3. speak(): a substituted line never asks for a recorded clip, an ordinary line still does. */
const { chromium } = require('playwright'); const path = require('path');
const FILE = path.resolve(process.argv[2] || path.join(__dirname, '../../korean-flashcards.html'));
(async () => {
  const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 800 } })).newPage(); const errs = [];
  p.on('pageerror', e => errs.push(String(e).slice(0, 200)));
  await p.route('**/fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await p.route('**/*.supabase.co/**', r => r.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
  await p.goto('file://' + FILE); await p.waitForTimeout(1200);
  const res = await p.evaluate(() => {
    const out = []; const ok = (n, c, d) => out.push([n, !!c, c ? '' : JSON.stringify(d === undefined ? null : d).slice(0, 300)]);
    const w = document.getElementById('welcome'); if (w) w.remove(); S.onboard = { skipped: 1 }; S.hintSeen = 1; S.tourDone = 1;
    const vis = () => document.body.innerText + ' ' + [...document.querySelectorAll('[data-say]')].map(e => e.dataset.say).join(' ');
    const office = () => { const it = pracItems('office'); return { mc: it.find(x => x.t === 'mc' && /드림/.test(x.o.join())), ord: it.find(x => x.t === 'order' && x.a.includes('마케팅팀')) }; };
    const lessonText = id => { const l = LESSONS.find(x => x.id === id); return COURSE.builtin ? l.body : expandEx(l.body); };
    const tile = (lid, pred, seq) => { showLesson(lid); pracOpen(lid); PR.i = PR.items.findIndex(pred); PR.tries = 0; PR.done = false; pracItem(); const it = PR.items[PR.i], box = document.getElementById('pracRun');
      const shown = [...box.querySelectorAll('button')].map(x => x.textContent.trim()); const words = seq === 'bad' ? it.a.slice(0, -1).concat(it.x[0]) : it.a;
      words.forEach(wd => { const bt = [...box.querySelectorAll('.prac-tiles button, button')].find(x => x.textContent.trim() === wd && !x.disabled && !x.closest('.prac-built')); if (bt) bt.click(); });
      const raw = /@@/.test(box.innerText); box.querySelector('.prac-chk').click(); const r = !!box.querySelector('.prac-ok'); document.querySelector('#pracRun .prac-back').click(); return { r, shown, raw }; };
    const screens = () => { const hits = []; ['#today', '#lessons', '#review', '#practice', '#read', '#progress'].forEach(h => { location.hash = h; route(); if (/@@/.test(vis())) hits.push(h); });
      ['meet', 'office'].forEach(id => { showLesson(id); if (/@@/.test(vis())) hits.push('lesson ' + id); }); return hits; };
    const setNick = n => { S.nick = n; save(); };

    /* ---------- built-in, no nickname ---------- */
    applyCourse('en-ko'); setNick('');
    const B = COURSES['en-ko'];
    ok('B0 raw built-in tables keep the token', /@@/.test(B.DIALOG['이름이 뭐예요?'][1]) && /@@/.test(JSON.stringify(PRACTICE_BUILTIN.office)) && /@@/.test(B.LESSONS.find(l => l.id === 'meet').body) && /@@/.test(JSON.stringify(NAME_RAW.DIALOG)));
    ok('B1 dialogue, no nickname: 민수 / Minsu', DIALOG['이름이 뭐예요?'][1] === '저는 민수입니다. 이름이 뭐예요?' && /I'm Minsu\./.test(DIALOG['이름이 뭐예요?'][2]), DIALOG['이름이 뭐예요?']);
    const m0 = lessonText('meet'), o0 = lessonText('office');
    ok('B2 lesson rows, no nickname: Korean, romanisation, gloss, data-say', /<span class="k">안녕하세요\. 저는 민수입니다<\/span><span class="r">annyeonghaseyo\. jeoneun minsuimnida<\/span><span class="m">Hello\. I'm Minsu\.<\/span>/.test(m0) && /data-say="안녕하세요\. 저는 민수입니다"/.test(m0) && /마케팅팀 민수입니다/.test(o0) && /민수 드림/.test(o0) && /Thank you\. Minsu/.test(o0), m0.slice(0, 600));
    let of = office(); ok('B3 practice, no nickname: mc options and tile answer', of.mc && of.mc.o.includes('민수 드림') && /as Minsu:/.test(of.mc.q) && of.ord && of.ord.a.includes('민수입니다') && of.ord.x.includes('민수님') && /this is Minsu/.test(of.ord.p), of);
    let t = tile('office', x => x.t === 'order' && x.a.includes('마케팅팀'), 'a'), tb = tile('office', x => x.t === 'order' && x.a.includes('마케팅팀'), 'bad');
    ok('B4 tile UI: name tile is one tile, accepted; distractor tile rejected', t.r && !tb.r && t.shown.includes('민수입니다') && !t.raw, { t, tb });
    ok('B5 no raw @@ on any screen (no nickname)', !screens().length, screens());

    /* ---------- built-in, nickname Ana (no reload) ---------- */
    setNick('Ana');
    ok('N1 dialogue follows the nickname', DIALOG['이름이 뭐예요?'][1] === '저는 Ana입니다. 이름이 뭐예요?' && /I'm Ana\./.test(DIALOG['이름이 뭐예요?'][2]), DIALOG['이름이 뭐예요?']);
    const m1 = lessonText('meet');
    ok('N2 lesson row: Korean, romanisation and gloss carry Ana', /저는 Ana입니다<\/span><span class="r">annyeonghaseyo\. jeoneun Anaimnida<\/span><span class="m">Hello\. I'm Ana\./.test(m1), m1.slice(0, 600));
    of = office(); ok('N3 practice options and answers carry Ana', of.mc.o.includes('Ana 드림') && of.ord.a.includes('Ana입니다') && of.ord.x.includes('Ana님'), of);
    t = tile('office', x => x.t === 'order' && x.a.includes('마케팅팀'), 'a'); ok('N4 tile UI with Ana', t.r && t.shown.includes('Ana입니다'), t);
    ok('N5 typed matching accepts the name in any case', pracMatch('ana입니다', ['Ana입니다']) && pracMatch('안녕하세요 마케팅팀 ANA입니다', [of.ord.a.join(' ')]) && !pracMatch('안녕하세요 마케팅팀 민수입니다', [of.ord.a.join(' ')]));
    ok('N6 raw tables still hold the token after a nickname change', /@@/.test(B.DIALOG['이름이 뭐예요?'][1]) && /@@/.test(JSON.stringify(PRACTICE_BUILTIN.office)) && /@@/.test(JSON.stringify(NAME_RAW.PRACTICE.office)));
    ok('N7 no raw @@ on any screen (Ana)', !screens().length, screens());
    /* the cards' progress keys never depend on the name */
    ok('N8 card fronts / progress keys unchanged by the nickname', JSON.stringify(Object.keys(DECKS).map(d => DECKS[d].map(c => c[0]))) === JSON.stringify(Object.keys(B._rt.DECKS).map(d => B._rt.DECKS[d].map(c => c[0]))));

    /* ---------- speech: no recorded clip for a name line ---------- */
    const asked = []; const realPlay = window.playClip; window.playClip = (tt) => { asked.push(tt); return true; };
    try { speak(DIALOG['이름이 뭐예요?'][0] + '. ' + DIALOG['이름이 뭐예요?'][1]); speak(of.ord.a.join(' ')); speak('저는 Ana입니다. 이름이 뭐예요?'); speak('감사합니다'); speak('안녕하세요'); speak('마케팅팀'); speak('이름이 뭐예요?'); speak('Ana입니다'); } finally { window.playClip = realPlay; }
    ok('S1 speak(): name lines skip the clip lookup, ordinary lines use it', JSON.stringify(asked) === JSON.stringify(['감사합니다', '안녕하세요', '마케팅팀', '이름이 뭐예요?'].map(sayText)), asked); /* words that share an item with the name (안녕하세요, 마케팅팀, the question line) keep their clips */

    /* ---------- Hangul nickname and a hostile one ---------- */
    setNick('지은'); ok('H1 Hangul name: romanize() in the romanisation slot', /저는 지은입니다<\/span><span class="r">annyeonghaseyo\. jeoneun jieunimnida<\/span><span class="m">Hello\. I'm 지은\./.test(lessonText('meet')), lessonText('meet').slice(0, 500));
    setNick('Jo Lee<img src=x onerror=1>&"|/__@@');
    const d = DIALOG['이름이 뭐예요?'][1], all = JSON.stringify([DIALOG, PRACTICE.office, LESSONS.find(l => l.id === 'meet').body]);
    ok('H2 hostile nickname is reduced to safe characters everywhere', !/[<>&"|]/.test(d) && !/@@/.test(all) && !/_/.test(d) && !/<img/.test(all) && /^저는 Jo Lee[^<]*입니다/.test(d), d);
    of = office(); ok('H3 a name with a space is still ONE tile', of.ord.a.length === 3 && /^Jo Lee[^_<>&"|]*입니다$/.test(of.ord.a[2]), of.ord.a);
    t = tile('office', x => x.t === 'order' && x.a.includes('마케팅팀'), 'a'); ok('H4 tile UI with a two-word name', t.r, t);
    S.nick = 'Mo'; location.hash = '#lessons'; route(); ok('H6 a nickname replaced without save() (sync merge, sign-out wipe) is picked up by route()', DIALOG['이름이 뭐예요?'][1] === '저는 Mo입니다. 이름이 뭐예요?', DIALOG['이름이 뭐예요?'][1]);
    setNick('');
    ok('H5 back to no nickname', DIALOG['이름이 뭐예요?'][1] === '저는 민수입니다. 이름이 뭐예요?');

    /* ---------- the real es-ko pack ---------- */
    if (COURSES['es-ko']) {
      applyCourse('es-ko'); setNick('');
      ok('E1 es-ko dialogue: 민수 and Minsu in the Spanish line', DIALOG['이름이 뭐예요?'][1] === '저는 민수입니다. 이름이 뭐예요?' && /Minsu/.test(DIALOG['이름이 뭐예요?'][2]) && !/@@/.test(DIALOG['이름이 뭐예요?'][2]), DIALOG['이름이 뭐예요?']);
      const em = lessonText('meet'); ok('E2 es-ko lesson row expands with the name', /저는 민수입니다/.test(em) && /jeoneun minsuimnida/.test(em) && /Minsu/.test(em) && !/@@/.test(em), em.slice(0, 500));
      setNick('Ana'); of = office();
      ok('E3 es-ko practice follows the nickname', of.mc.o.includes('Ana 드림') && of.ord.a.includes('Ana입니다') && /Ana/.test(of.ord.p) && !/@@/.test(JSON.stringify(PRACTICE)), of);
      ok('E4 es-ko pack object keeps the token', /@@/.test(JSON.stringify(COURSES['es-ko'].PRACTICE.office)) && /@@/.test(COURSES['es-ko'].DIALOG['이름이 뭐예요?'][1]));
      ok('E5 no raw @@ on any es-ko screen', !screens().length, screens());
      setNick(''); applyCourse('en-ko');
    } else ok('E0 es-ko pack present', false, 'missing');
    return out;
  });
  await b.close();
  let bad = 0; res.forEach(([n, c, d]) => { console.log((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : ' :: ' + d)); if (!c) bad++; });
  if (errs.length) { console.log('page errors: ' + errs.join(' | ')); bad++; }
  console.log(bad ? 'NAME FAIL ' + bad : 'NAME OK'); process.exit(bad ? 1 : 0);
})();
