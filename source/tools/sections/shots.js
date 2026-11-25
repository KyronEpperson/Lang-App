/* Pictures of an aligned lesson for the owner. usage: node tools/sections/shots.js <out dir> [course] [lesson id] */
const path = require('path'), { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..', '..'), OUT = process.argv[2], cid = process.argv[3] || 'en-ko', lid = process.argv[4] || 'meet';
(async () => {
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: 390, height: 800 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  const p = await c.newPage();
  await p.addInitScript(([lang, cid]) => {
    const st = JSON.stringify({ nick: 'K', welcomed: 1, onboard: { skipped: 1 }, hintSeen: 1, tourDone: 1, fx3d: false });
    localStorage.setItem('la-s-' + cid, st);
    if (cid === 'en-ko') localStorage.setItem('ko-app2', st);
    localStorage.setItem('la-meta', JSON.stringify({ v: 1, native: lang, course: cid, picked: 1, seenHome: 1, prefs: {} }));
  }, [cid.split('-')[0], cid]);
  await p.route(/supabase|fonts\.g/, r => r.abort());
  await p.goto('file://' + path.join(ROOT, 'korean-flashcards.html') + '#lessons');
  await p.waitForFunction(cid => { try { return COURSE.id === cid && LESSONS.length > 0; } catch (e) { return false; } }, cid);
  await p.waitForTimeout(500);
  await p.evaluate(lid => { const i = LESSONS.findIndex(l => l.id === lid); LESSONS.slice(0, i).forEach(l => { S.lessons[l.id] = 1; }); save(); showLesson(lid); }, lid);
  await p.waitForTimeout(500);
  await p.screenshot({ path: path.join(OUT, cid + '-' + lid + '.png'), fullPage: true });
  await p.evaluate(() => { document.querySelectorAll('.lsdeck')[1].querySelector('.lsgo').click(); });
  await p.waitForTimeout(900);
  const el = await p.$$('.lsdeck');
  await el[1].screenshot({ path: path.join(OUT, cid + '-' + lid + '-deck-2.png') });
  await b.close();
})();
