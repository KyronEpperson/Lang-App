/* SEC-1 checker for one course's writer table, on the built app (run node tools/sections/apply.js and ./build.sh first).
   usage: node tools/sections/check.js <course>
   Fails when: the table names a lesson or section that is not there; an added card does not land in its section's deck (a string that names no card, a card already used earlier in the lesson, a front without a meaning);
   a dropped front is not one the section uses; an added card repeats a front; a new card of a course in another script has no reading; a section still has fewer than 3 cards (listed; allowed only when the section has nothing to teach: say so in the report). */
const path = require('path'), { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..', '..'), cid = process.argv[2];
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext()).newPage();
  await p.addInitScript(([lang, cid]) => {
    const st = JSON.stringify({ nick: 'K', welcomed: 1, onboard: { skipped: 1 }, hintSeen: 1, tourDone: 1, fx3d: false });
    localStorage.setItem('la-s-' + cid, st);
    if (cid === 'en-ko') localStorage.setItem('ko-app2', st);
    localStorage.setItem('la-meta', JSON.stringify({ v: 1, native: lang, course: cid, picked: 1, seenHome: 1, prefs: {} }));
  }, [cid.split('-')[0], cid]);
  await p.route(/supabase|fonts\.g/, r => r.abort());
  await p.goto('file://' + path.join(ROOT, 'korean-flashcards.html') + '#lessons');
  await p.waitForFunction(cid => { try { return COURSE.id === cid && LESSONS.length > 0; } catch (e) { return false; } }, cid, { timeout: 30000 });
  const r = await p.evaluate(() => {
    const bad = [], small = [], X = (COURSE.builtin ? LS_SECS_KO : COURSE.SECS) || {}, n = { lessons: 0, decks: 0, cards: 0, added: 0, dropped: 0, hidden: 0 };
    if (!LS_ALIGN[COURSE.id]) return { bad: ['course is not in LS_ALIGN'], small, n };
    const ids = new Set(LESSONS.map(l => l.id)); Object.keys(X).forEach(id => { if (!ids.has(id)) bad.push('no lesson "' + id + '"'); });
    const nonLatin = (DECKS[LESSONS[0].deck] || []).some(c => /[^\u0000-ɏḀ-ỿ]/.test(c[0]));
    LESSONS.forEach(l => {
      const pl = lsPlan(l); if (!pl.pre) { if (X[l.id] && !(l.id === 'hangul' && COURSE.target === 'ko')) small.push(l.id + ': hand-set lesson now, its table entry is not used'); return; }
      n.lessons++; const raw = lsCut(l.body), x = X[l.id] || {}, seenAdd = new Set();
      Object.keys(x).forEach(i => { if (!(+i >= 0 && +i < raw.length)) bad.push(l.id + ': no section ' + i + ' (the lesson has ' + raw.length + ')'); });
      pl.parts.forEach((part, i) => {
        const w = x[i] || {};
        (w.add || []).forEach(a => {
          const f = Array.isArray(a) ? a[0] : a, k = lsNorm(f).trim(); n.added++;
          if (Array.isArray(a) && (!a[0] || !a[2])) bad.push(l.id + ' [' + i + ']: card without front or meaning: ' + JSON.stringify(a));
          if (seenAdd.has(k)) bad.push(l.id + ' [' + i + ']: added twice in this lesson: ' + f); seenAdd.add(k);
          const hit = pl.parts.slice(i).find(q => q.cards.some(y => lsNorm(y.c[0]).trim() === k));
          if (!hit) bad.push(l.id + ' [' + i + ']: not in the deck (a string must be the exact front of an existing card; a card already used in an earlier section cannot be added again): ' + f);
          if (Array.isArray(a) && nonLatin && COURSE.target !== 'ko' && !String(a[1] || '').trim()) { const y = hit && hit.cards.find(y => lsNorm(y.c[0]).trim() === k); if (y && y.d[0] === LS_EX) bad.push(l.id + ' [' + i + ']: new card needs a reading: ' + f); }
        });
        (w.drop || []).forEach(f => { n.dropped++; if (lsAt(lsNorm(f).trim(), lsNorm(raw[i])) < 0) bad.push(l.id + ' [' + i + ']: drop names a front this section does not use: ' + f); });
        if (part.cards.length) { n.decks++; n.cards += part.cards.length; part.cards.forEach(y => { if (y.d[0] === LS_EX) n.hidden++; }); }
      });
      pl.pre.forEach((c, i) => { if (c < 3) small.push(l.id + ' [' + i + '] has ' + c); });
    });
    return { bad, small, n };
  });
  r.bad.forEach(x => console.log('FAIL ' + x));
  r.small.forEach(x => console.log('SMALL ' + x));
  console.log(cid + ': ' + JSON.stringify(r.n) + ' · ' + r.small.length + ' sections under 3 cards · ' + r.bad.length + ' errors');
  console.log(r.bad.length ? 'SECTIONS CHECK FAIL' : 'SECTIONS CHECK OK');
  await b.close(); process.exit(r.bad.length ? 1 : 0);
})();
