/* Korean course grading and sound engine (docs/reviews/ko-target-half-review.md, "Applied"): node tools/tests/kograde.js [built.html]
   1. Every practice item of en-ko and es-ko in the BUILT app, graded with the app's own matcher: the marked answer(s) are accepted, every listed
      alt order is accepted, every wrong option / distractor tile is rejected, no two options are identical.
   2. An alt order graded through the real tile UI (pracClick); Korean contractions (전 = 저는 …) accepted, other languages untouched.
   3. romanize(): ㄴ-insertion / 절음 / 밟- cases; the sound drill: tensing applied, unsafe phrases kept out of the pool. */
const { chromium } = require('playwright'); const path = require('path');
const FILE = path.resolve(process.argv[2] || path.join(__dirname, '../../korean-flashcards.html'));
(async () => {
  const b = await chromium.launch(); const p = await (await b.newContext()).newPage(); const errs = [];
  p.on('pageerror', e => errs.push(String(e).slice(0, 200)));
  await p.route('**/fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await p.route('**/*.supabase.co/**', r => r.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
  await p.goto('file://' + FILE); await p.waitForTimeout(1200);
  const res = await p.evaluate(() => {
    const out = {};
    for (const cid of ['en-ko', 'es-ko', 'ceb-ko', 'tl-ko']) {
      const w = document.getElementById('welcome'); if (w) w.remove();
      if (!COURSES[cid]) { out[cid] = { missing: true }; continue; }
      applyCourse(cid);
      const fails = [], stats = { items: 0, mc: 0, order: 0, fill: 0, type: 0, accepted: 0, rejected: 0, alts: 0, contractions: 0 };
      const F = (id, m) => fails.push(id + ': ' + m);
      Object.keys(PRACTICE).forEach(lid => {
        const raw = PRACTICE[lid], items = pracItems(lid);
        if (items.length !== raw.length) F(lid, 'cleanPractice dropped ' + (raw.length - items.length) + ' item(s)');
        items.forEach((it, i) => {
          const id = lid + '.' + String(i + 1).padStart(2, '0'); stats.items++; stats[it.t]++;
          const yes = (inp, acc, strict, loose, why) => { if (pracMatch(inp, acc, strict, loose)) stats.accepted++; else F(id, 'REJECTED correct ' + why + ' «' + inp + '»'); };
          const no = (inp, acc, strict, loose, why) => { if (!pracMatch(inp, acc, strict, loose)) stats.rejected++; else F(id, 'ACCEPTED wrong ' + why + ' «' + inp + '»'); };
          if (raw[i].alt && !it.alt) F(id, 'alt dropped by cleanPractice');
          if (it.t === 'mc') {
            if (new Set(it.o).size !== it.o.length) F(id, 'identical options');
            /* mc is graded by index: option 0 is right, the rest wrong; also no wrong option may equal the right one after normalising */
            it.o.slice(1).forEach(o => { if (pracNorm(o) === pracNorm(it.o[0])) F(id, 'wrong option equals the answer: ' + o); else stats.rejected++; });
            stats.accepted++;
          } else if (it.t === 'order') {
            const acc = [it.a.join(' ')].concat((it.alt || []).map(a => a.join(' ')));
            yes(it.a.join(' '), acc, true, false, 'order');
            (it.alt || []).forEach(a => { stats.alts++; if (a.slice().sort().join('|') !== it.a.slice().sort().join('|')) F(id, 'alt is not a permutation of a'); yes(a.join(' '), acc, true, false, 'alt order'); });
            const tiles = it.a.concat(it.x || []); if (new Set(tiles).size !== tiles.length) F(id, 'identical tiles');
            (it.x || []).forEach(x => it.a.forEach((_, k) => { const t = it.a.slice(); t[k] = x; no(t.join(' '), acc, true, false, 'tile ' + x); }));
            if (it.a.length > 1) { const r = it.a.slice().reverse().join(' '); if (!acc.includes(r)) no(r, acc, true, false, 'reversed order'); }
          } else if (it.t === 'fill') {
            const acc = it.a.concat(it.a.map(a => it.q.replace('__', a)));
            it.a.forEach(a => { yes(a, acc, !!it.strict, false, 'gap'); yes(it.q.replace('__', a), acc, !!it.strict, false, 'sentence'); });
            const opts = [it.a[0]].concat(it.o); if (new Set(opts).size !== opts.length) F(id, 'identical pick options');
            it.o.forEach(o => { no(o, acc, !!it.strict, false, 'option'); no(it.q.replace('__', o), acc, !!it.strict, false, 'option sentence'); });
            no(it.q.replace('__', '').replace(/\s+/g, ' ').trim(), acc, !!it.strict, false, 'empty gap sentence');
          } else if (it.t === 'type') {
            it.a.forEach(a => yes(a, it.a, !!it.strict, true, 'answer'));
            yes(String(it.a[0]).split(/\s+/).join(' '), it.a, true, false, 'tiles of a[0]');
            const words = String(it.a[0]).split(/\s+/).filter(Boolean);
            const tiles = words.concat(it.x || []); if (new Set(tiles).size !== tiles.length) F(id, 'identical tiles');
            (it.x || []).forEach(x => words.forEach((_, k) => { const t = words.slice(); t[k] = x; no(t.join(' '), it.a, !!it.strict, true, 'tile ' + x); }));
            /* contractions of the first answer are accepted too (Korean normaliser) */
            const ctr = { '저는': '전', '나는': '난', '이것은': '이건', '이거는': '이건', '이것이': '이게', '무엇을': '뭘', '뭐를': '뭘' };
            const t = words.map(w => ctr[w] || w).join(' '); if (t !== words.join(' ')) { stats.contractions++; yes(t, it.a, !!it.strict, true, 'contraction'); }
            if (words[0] === '저는') { stats.contractions++; yes(['저'].concat(words.slice(1)).join(' '), it.a, !!it.strict, true, 'bare 저'); }
          } else F(id, 'unknown type ' + it.t);
        });
      });
      /* checks: options distinct, index in range */
      Object.entries(CHECKS).forEach(([lid, list]) => list.forEach((c, i) => { if (new Set(c[1]).size !== c[1].length) F(lid + '.k' + (i + 1), 'identical check options'); if (!(c[2] >= 0 && c[2] < c[1].length)) F(lid + '.k' + (i + 1), 'answer index out of range'); }));
      out[cid] = { stats, fails };
    }
    /* the normaliser is Korean-only: other languages are unchanged */
    out.other = { en: pracMatch("I'm a student", ["I am a student"]) === false && pracMatch('i am a student', ['I am a student']) === true };

    applyCourse('en-ko'); /* the engine checks below run on the built-in course */
    /* contractions: Korean-only equivalences, not a loosening */
    const C = [['전 학생이에요', ['저는 학생이에요'], 1], ['난 괜찮아', ['나는 괜찮아'], 1], ['뭘 먹어요', ['무엇을 먹어요'], 1], ['이건 뭐예요', ['이것은 뭐예요'], 1], ['그게 좋아요', ['그것이 좋아요'], 1],
      ['저 학생이에요', ['저는 학생이에요'], 0], ['저가 학생이에요', ['저는 학생이에요'], 0], ['전 학생이에요', ['저는 의사예요'], 0]];
    out.ctr = C.map(([inp, acc, want]) => [inp, pracMatch(inp, acc) === !!want]).filter(x => !x[1]).map(x => x[0]);
    out.loose = pracMatch('저 학생이에요', ['저는 학생이에요'], false, true) && !pracMatch('저 학생이에요', ['저는 학생이에요'], false, false);
    /* romanize */
    const R = { '스물여덟': 'seumullyeodeol', '꽃잎': 'kkonnip', '색연필': 'saengnyeonpil', '한여름': 'hannyeoreum', '십육': 'simnyuk', '맛없어요': 'madeopseoyo', '맛없다': 'madeopda', '밟다': 'bapda', '밟아요': 'balbayo', '맛있어요': 'masisseoyo', '감사합니다': 'gamsahamnida', '한국어': 'hangugeo', '백화점': 'baekwajeom' };
    out.rom = Object.entries(R).filter(([k, v]) => romanize(k) !== v).map(([k, v]) => k + ' ' + romanize(k) + ' ≠ ' + v);
    /* sound drill */
    soundPool = null; renderSoundQ(document.createElement('div'), 1, () => {}); const pool = new Map(soundPool.map(x => [x[0], x[1]]));
    const want = { '미쳤다': '미쳗따', '진짜 웃겨': '진짜 욷껴', '학교': '학꾜', '잘 먹겠습니다': '잘 먹껟씀니다', '괜찮아요': '괜차나요', '정말요': '정말료' };
    out.snd = Object.entries(want).filter(([k, v]) => pool.get(k) !== v).map(([k, v]) => k + ' [' + pool.get(k) + '] ≠ [' + v + ']');
    out.sndOut = ['몇 화', '다섯 마리', '몇 살이에요', '늦을 것 같아', '연락할게요', '잠시만요'].filter(k => pool.has(k));
    out.sndN = soundPool.length;
    applyCourse('en-ko');
    /* an alt order through the tile UI */
    const tileRun = (lid, idx, seq) => { showLesson(lid); pracOpen(lid); PR.i = idx; PR.tries = 0; PR.done = false; pracItem(); const it = PR.items[PR.i], box = document.getElementById('pracRun');
      const words = seq === 'alt' ? it.alt[0] : seq === 'a' ? it.a : it.a.slice().reverse();
      words.forEach(wd => { const bt = [...box.querySelectorAll('.prac-tiles button, button')].find(x => x.textContent.trim() === wd && !x.disabled && !x.closest('.prac-built')); if (bt) bt.click(); });
      box.querySelector('.prac-chk').click(); const r = !!box.querySelector('.prac-ok'); document.querySelector('#pracRun .prac-back').click(); return r; };
    out.ui = { alt: tileRun('past', 5, 'alt'), a: tileRun('past', 5, 'a'), bad: !tileRun('past', 5, 'bad'), vocative: tileRun('titles', 7, 'alt') };
    return out;
  });
  await b.close();
  let bad = 0;
  for (const cid of ['en-ko', 'es-ko', 'ceb-ko', 'tl-ko']) { const r = res[cid]; if (r.missing) { console.log(cid + ': MISSING'); bad++; continue; } console.log(cid + ': ' + JSON.stringify(r.stats) + ' · failures ' + r.fails.length); r.fails.forEach(f => console.log('  ' + f)); bad += r.fails.length; }
  console.log('other-language sanity: ' + JSON.stringify(res.other)); if (!res.other.en) bad++;
  const chk = (n, c, d) => { console.log((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : ' :: ' + JSON.stringify(d))); if (!c) bad++; };
  chk('contractions accepted, near-misses rejected', !res.ctr.length, res.ctr); chk('bare 저 only for type items (loose)', res.loose);
  chk('romanize() word list', !res.rom.length, res.rom);
  chk('sound drill: tensed outputs', !res.snd.length, res.snd); chk('sound drill: unsafe phrases kept out (' + res.sndN + ' items)', !res.sndOut.length, res.sndOut);
  chk('alt order accepted through the tile UI', res.ui.alt && res.ui.a && res.ui.bad && res.ui.vocative, res.ui);
  if (errs.length) { console.log('page errors: ' + errs.join(' | ')); bad++; }
  console.log(bad ? 'GRADE FAIL ' + bad : 'GRADE OK'); process.exit(bad ? 1 : 0);
})();
