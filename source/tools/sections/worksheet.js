/* SEC-1 writer's worksheet for one course: every lesson, every section, its text, the cards the app already puts under it, and the cards of the lesson's deck that are in no section.
   usage: node tools/sections/worksheet.js <course> > tools/sections/<course>/worksheet.md      (the course must be in LS_ALIGN and the build fresh) */
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
  const out = await p.evaluate(() => {
    if (!LS_ALIGN[COURSE.id]) return 'NOT ALIGNED';
    const sv = COURSE.SECS; COURSE.SECS = null; Object.keys(LS_PLAN).forEach(k => delete LS_PLAN[k]);
    const plain = h => h.replace(/\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g, '\n  EX: $1 | $2 | $3\n').replace(/<\/(p|h3|tr|div|li)>/g, '\n').replace(/<\/t[dh]>/g, ' ; ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z]+;/g, ' ').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
    const o = ['# Worksheet: ' + COURSE.id, ''];
    LESSONS.forEach(l => {
      const pl = lsPlan(l), raw = lsCut(l.body);
      o.push('## LESSON ' + l.id + ' — ' + l.title + ' — deck "' + l.deck + '"');
      if (!pl.pre) { o.push('(hand-set lesson: leave it out of your file)', ''); return; }
      const before = raw.map(() => []), used = new Set();
      /* the cards each section has before any passing on: rebuild from pre (cards are in section order inside the merged decks) */
      let flat = []; pl.parts.forEach(x => { flat = flat.concat(x.cards); });
      let at = 0; pl.pre.forEach((n, i) => { before[i] = flat.slice(at, at + n); at += n; });
      flat.forEach(y => used.add(y.d + '|' + y.c[0]));
      raw.forEach((h, i) => {
        o.push('### SECTION ' + i + (pl.pre[i] < 3 ? '   <-- NEEDS CARDS (has ' + pl.pre[i] + ')' : '   (has ' + pl.pre[i] + ')'));
        o.push(plain(h));
        o.push('CARDS NOW: ' + (before[i].length ? before[i].map(y => y.c[0] + ' = ' + y.c[2] + (y.d[0] === LS_EX ? '' : ' [card]')).join(' || ') : '(none)'));
        o.push('');
      });
      const rest = (DECKS[l.deck] || []).filter(c => !used.has(l.deck + '|' + c[0]));
      o.push('DECK CARDS IN NO SECTION (add by front, as a string, only where a section teaches them): ' + (rest.length ? rest.map(c => c[0] + ' | ' + c[1] + ' | ' + c[2]).join(' || ') : '(none)'), '');
    });
    COURSE.SECS = sv; Object.keys(LS_PLAN).forEach(k => delete LS_PLAN[k]);
    return o.join('\n');
  });
  console.log(out);
  await b.close();
})();
