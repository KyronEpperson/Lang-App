/* The card memory judge and older releases (iterations.md, entry MEM-1): the same course on two devices, one on this build (N) and one on an older release (O).
   Not part of ship.sh, because it needs an older build. Run it by hand whenever what the judge saves on a card changes:
     git -C lang-app show 85ee0618:index.html > /tmp/old.html     (85ee0618 is release 2.92.0; d0dfb7d1 is 2.100.0, the last release before the judge)
     node tools/tests/memjudge-roundtrip.js /tmp/old.html
   1. this build answers cards; 2. the older release receives them by sync, shows every screen and answers its own way; 3. this build takes that back;
   4. both answer different cards and sync both ways; 5. progress saved only by the older release is opened by this build (the usual update).
   The one-time note on Progress is for cards last answered before the judge was released (MEM_T0 in the app: 2026-11-25, 00:00 UTC). Steps 3 and 5 date
   one such card themselves, so the test does not depend on the day it is run (until 2.110.0 it answered the card "now", which stopped being "before" on that day). */
const { chromium } = require('playwright'); const path = require('path');
if (!process.argv[2]) { console.log('usage: node tools/tests/memjudge-roundtrip.js <older build .html>'); process.exit(2); }
const NEW = path.join(__dirname, '../../korean-flashcards.html'), OLD = path.resolve(process.argv[2]);
const DAY = 86400000; let pass = 0, fail = 0; const ok = (n, c, d) => { if (c) { pass++; console.log('PASS ' + n); } else { fail++; console.log('FAIL ' + n + '  ' + JSON.stringify(d === undefined ? null : d).slice(0, 600)); } };
(async () => {
  const b = await chromium.launch(); const errs = { N: [], O: [] };
  const open = async (file, tag) => { const ctx = await b.newContext({ viewport: { width: 390, height: 800 } }); const p = await ctx.newPage(); p.on('pageerror', e => errs[tag].push(String(e).slice(0, 300))); p.on('console', m => { if (m.type() === 'error' && !/fonts|net::|Failed to load resource/.test(m.text())) errs[tag].push('console: ' + m.text().slice(0, 300)); });
    await p.route('**/fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' })); await p.route('**/*.supabase.co/**', r => r.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
    await p.goto('file://' + file); await p.waitForTimeout(900);
    await p.evaluate(() => { ['welcome', 'langHome', 'fxIntro', 'fxIdle'].forEach(i => { const e = document.getElementById(i); if (e) e.remove(); }); S.onboard = { skipped: 1 }; S.hintSeen = 1; S.tourDone = 1; S.nick = 'K'; S.welcomed = 1; S.free = true; save(); renderToday(); }); return p; };
  const N = await open(NEW, 'N'), O = await open(OLD, 'O');
  const ver = await O.evaluate(() => APP_VERSION); console.log('older release: ' + ver + ' · this build: ' + await N.evaluate(() => APP_VERSION) + (await N.evaluate(() => typeof judge === 'function') ? ' with the judge' : ''));
  ok('the older release has no judge of its own', await O.evaluate(() => typeof judge === 'undefined' && typeof mjRead === 'undefined' && typeof grade === 'function' && typeof applyRemoteRow === 'function'));
  const screens = async (p) => p.evaluate(async () => { for (const r of ['today', 'practice', 'review', 'progress', 'lessons']) { location.hash = '#' + r; route(); await new Promise(z => setTimeout(z, 120)); } location.hash = '#review'; route(); await new Promise(z => setTimeout(z, 100)); const bb = document.querySelector('#cmBrowse'); if (bb) { bb.click(); await new Promise(z => setTimeout(z, 120)); } location.hash = '#progress'; route(); await new Promise(z => setTimeout(z, 150)); return document.getElementById('v-progress').textContent.length; });

  /* 1. this build answers six cards; two of them three days ago */
  const row1 = await N.evaluate(DAY => { const d = names.find(n => n !== MYDECK && DECKS[n].length >= 8 && !isLetterDeck(n)), cs = DECKS[d]; cs.forEach(c => { delete S.cards[ck(d, c)]; }); delete S.mem; S.rlog = []; memoClear();
    judge(d, cs[0], true, 'pick'); judge(d, cs[1], false, 'pick'); judge(d, cs[1], true, 'pick'); judge(d, cs[2], true, 'type'); judge(d, cs[3], true, 'pick'); judge(d, cs[6], true, 'pick');
    [0, 3, 6].forEach(i => { const s = S.cards[ck(d, cs[i])]; s.last -= 3 * DAY; s.due -= 3; }); judge(d, cs[0], true, 'pick'); /* a spaced answer: the personal numbers move */
    S.updatedAt = Date.now(); save(); return { d, keys: cs.slice(0, 8).map(c => ck(d, c)), state: JSON.parse(JSON.stringify(S)) }; }, DAY);
  const K = row1.keys, c = (st, i) => st.cards[K[i]];
  ok('this build wrote the judge fields and still a box and due date an older release understands', [0, 1, 2, 3, 6].every(i => c(row1.state, i).st > 0 && c(row1.state, i).mb === c(row1.state, i).box && c(row1.state, i).box >= 1 && c(row1.state, i).box <= 6 && Number.isInteger(c(row1.state, i).due)) && row1.state.mem && row1.state.mem.n === 1 && row1.state.rlog.length === 7 && row1.state.rlog[0].length === 9, [row1.state.mem, c(row1.state, 0)]);

  /* 2. the older release receives it by sync, shows it and answers three cards its own way */
  const o2 = await O.evaluate(({ row, K, d }) => { const changed = applyRemoteRow(JSON.parse(JSON.stringify(row))); const kept = K.filter(k => S.cards[k]).every(k => JSON.stringify(S.cards[k]) === JSON.stringify(row.cards[k])); const mem = S.mem ? JSON.stringify(S.mem) : null;
    const cs = DECKS[d], due3 = isDue(d, cs[3]), new4 = isNew(d, cs[4]); return { changed, kept, mem, due3, new4, n: Object.keys(S.cards).length, learned: learned(d) }; }, { row: row1.state, K, d: row1.d });
  ok('the older release takes the synced progress as it is, judge fields and personal numbers included', o2.kept && o2.mem === JSON.stringify(row1.state.mem) && o2.n === Object.keys(row1.state.cards).length && o2.due3 && o2.new4, o2);
  const oLen = await screens(O); ok('the older release shows every screen with it, without an error', oLen > 100 && !errs.O.length, errs.O);
  const row2 = await O.evaluate(async ({ K, d }) => { const cs = DECKS[d]; await new Promise(z => setTimeout(z, 30)); grade(d, cs[3], true, false); grade(d, cs[0], false, false); grade(d, cs[2], true, false); grade(d, cs[5], true, true); S.updatedAt = Date.now(); save(); return JSON.parse(JSON.stringify(S)); }, { K, d: row1.d });
  ok('its answers change the box and keep the judge fields it does not understand', c(row2, 3).box === c(row1.state, 3).box + 1 && c(row2, 3).st === c(row1.state, 3).st && c(row2, 3).mb === c(row1.state, 3).mb && c(row2, 0).box === 1 && c(row2, 0).h === c(row1.state, 0).h && c(row2, 5).box === 2 && c(row2, 5).st === undefined && row2.rlog.length === 11 && row2.rlog[10].length < 9, [c(row2, 3), c(row2, 0), c(row2, 5), row2.rlog.length]);

  /* 3. this build receives that back */
  const before = await N.evaluate(K => K.map(k => S.cards[k] ? JSON.stringify(S.cards[k]) : null), K);
  const n3 = await N.evaluate(({ row, K, d }) => { applyRemoteRow(JSON.parse(JSON.stringify(row))); memoClear(); const cs = DECKS[d], info = K.map(k => S.cards[k] ? Object.assign({ box: S.cards[k].box, mb: S.cards[k].mb, stSaved: S.cards[k].st }, memInfo(S.cards[k]), { m: mjRead(S.cards[k]) }) : null), mc = memCounts(d), tot = memTotals();
    return { info, mc, sum: mc.new + mc.learning + mc.memorized + mc.practice, total: cs.length, tot, all: names.reduce((n, x) => n + DECKS[x].length, 0), mem: S.mem, rlog: S.rlog.length, lastRow: S.rlog[S.rlog.length - 1].length }; }, { row: row2, K, d: row1.d });
  const I = n3.info;
  ok('a card the older release answered right reads at least as long as its new box (3 days), and is learning', I[3].box === 3 && I[3].mb === 2 && I[3].m.st === 3 && I[3].st === 'learning' && I[3].why === '' && I[2].m.st === 3 && I[2].st === 'learning', [I[3], I[2]]);
  ok('a card the older release answered wrong needs practice with a shorter memory', I[0].box === 1 && I[0].st === 'practice' && I[0].why === 'miss' && I[0].m.st < JSON.parse(before[0]).st && I[0].m.lw === 1, I[0]);
  ok('a card first learned on the older release reads from its box: 1 day, learning', I[5].box === 2 && I[5].stSaved === undefined && I[5].m.st === 1 && I[5].st === 'learning', I[5]);
  ok('cards the older release did not touch are exactly as this build left them', JSON.stringify(await N.evaluate(K => [1, 6].map(i => JSON.stringify(S.cards[K[i]])), K)) === JSON.stringify([before[1], before[6]]) && I[1].st === 'practice' && I[1].why === 'miss');
  ok('no card is lost: the deck’s four counts add up to its cards, and the course’s to all cards', n3.sum === n3.total && n3.tot.new + n3.tot.learning + n3.tot.memorized + n3.tot.practice === n3.all, [n3.mc, n3.tot, n3.all]);
  ok('the personal numbers and the longer answer log survive the trip', n3.mem && n3.mem.n === 1 && n3.mem.q === row1.state.mem.q && n3.rlog === 11 && n3.lastRow < 9, [n3.mem, n3.rlog, n3.lastRow]);
  const nLen = await screens(N); ok('this build shows every screen with the mixed progress and the mixed answer log, without an error', nLen > 100 && !errs.N.length, errs.N);
  const prog = await N.evaluate(({ k, DAY }) => { const s = S.cards[k], keep = s.last, note = () => { memoClear(); renderProgress(); return document.getElementById('memNote').textContent; }; /* k: the card first learned on the older release, so it has no judge fields yet */
    const asIs = note(); s.last = MEM_T0 - DAY; const before = note(); s.last = keep; note(); return { boxes: document.getElementById('boxes').textContent, asIs, before, answeredAfter: keep >= MEM_T0, same: s.last === keep }; }, { k: K[5], DAY });
  ok('Progress shows the three words, and the one-time note for a card without judge fields that was last answered before the judge was released; not for one answered on an older release after that', /learning/.test(prog.boxes) && /memorized/.test(prog.boxes) && /needs practice/.test(prog.boxes) && /judged by how long you remember/.test(prog.before) && (prog.answeredAfter ? prog.asIs === '' : /judged by how long you remember/.test(prog.asIs)) && prog.same, prog);
  const n4 = await N.evaluate(({ K, d }) => { const cs = DECKS[d], n0 = S.mem.n; judge(d, cs[3], true, 'pick'); const s = S.cards[K[3]], a = { agree: s.mb === s.box, st: s.st, n: S.mem.n - n0, st5: null }; judge(d, cs[5], true, 'pick'); a.st5 = S.cards[K[5]].st; a.agree5 = S.cards[K[5]].mb === S.cards[K[5]].box; a.n2 = S.mem.n - n0; return a; }, { K, d: row1.d });
  ok('the next answer here takes each card back: the judge’s box and the saved box agree again, and those answers do not move the personal numbers', n4.agree && n4.st >= 3 && n4.n === 0 && n4.agree5 && n4.st5 >= 1 && n4.n2 === 0, n4);

  /* 4. both devices answer different cards at the same time, then sync both ways */
  const rN = await N.evaluate(async ({ K, d }) => { await new Promise(z => setTimeout(z, 20)); judge(d, DECKS[d][4], true, 'type'); S.updatedAt = Date.now(); save(); return JSON.parse(JSON.stringify(S)); }, { K, d: row1.d });
  const rO = await O.evaluate(async ({ K, d }) => { await new Promise(z => setTimeout(z, 20)); grade(d, DECKS[d][7], true, true); S.updatedAt = Date.now(); save(); return JSON.parse(JSON.stringify(S)); }, { K, d: row1.d });
  const mN = await N.evaluate(({ row, K }) => { applyRemoteRow(JSON.parse(JSON.stringify(row))); memoClear(); return K.map(k => S.cards[k] ? JSON.stringify(S.cards[k]) : null); }, { row: rO, K });
  const mO = await O.evaluate(({ row, K }) => { applyRemoteRow(JSON.parse(JSON.stringify(row))); return { cards: K.map(k => S.cards[k] ? JSON.stringify(S.cards[k]) : null), mem: S.mem || null }; }, { row: rN, K });
  ok('after syncing both ways the two devices hold the same cards, each from the device that answered it last', JSON.stringify(mN) === JSON.stringify(mO.cards) && JSON.parse(mN[4]).st === 1.5 && JSON.parse(mN[7]).box === 2 && JSON.parse(mN[7]).st === undefined && JSON.parse(mN[3]).mb === JSON.parse(mN[3]).box, [mN[4], mN[7]]);
  await screens(O); await screens(N); ok('both still show every screen without an error', !errs.O.length && !errs.N.length, errs);

  /* 5. the usual update: one device, progress saved by the older release, then this build opens it */
  const T0 = await N.evaluate(() => MEM_T0);
  const oldOnly = await O.evaluate(({ DAY, T0 }) => { const d = names.find(n => n !== MYDECK && DECKS[n].length >= 8 && !isLetterDeck(n)), t = dayNum(), now = Date.now(); S = Object.assign(fresh(), { onboard: { skipped: 1 }, hintSeen: 1, tourDone: 1, nick: 'K', welcomed: 1, free: true }); let i = 0;
    names.slice(0, 5).forEach(dn => DECKS[dn].forEach(c => { const box = i % 7; if (box) S.cards[ck(dn, c)] = { box, due: t + (i % 9) - 4, seen: 1 + i % 5, lapses: i % 3, last: now - (i % 45) * DAY }; i++; })); { const k = Object.keys(S.cards)[0]; S.cards[k].last = Math.min(S.cards[k].last, T0 - DAY); } /* one card for certain from before the judge, whatever the day */ S.mastered = { [names[0]]: 1, [names[1]]: 1 }; S.updatedAt = now; save(); return { due: dueCount(), dueKeys: names.slice(0, 5).map(dn => DECKS[dn].filter(c => isDue(dn, c)).length), key: curKey(), raw: JSON.stringify(S), /* save() writes a moment later, so the row is taken from memory */ n: Object.keys(S.cards).length, learned: names.slice(0, 5).map(learned), mastered: names.slice(0, 5).map(x => mastered(x)) }; }, { DAY, T0 });
  await N.evaluate(({ key, raw }) => { localStorage.clear(); localStorage.setItem(key, raw); }, oldOnly); await N.reload(); await N.waitForTimeout(900);
  await N.evaluate(() => { ['welcome', 'langHome', 'fxIntro', 'fxIdle'].forEach(i => { const e = document.getElementById(i); if (e) e.remove(); }); });
  const up = await N.evaluate(async (o) => { const same0 = JSON.stringify(S.cards) === JSON.stringify(JSON.parse(o.raw).cards); memoClear(); const tot = memTotals(), all = names.reduce((n, x) => n + DECKS[x].length, 0), ln = names.slice(0, 5).map(learned);
    for (const r of ['today', 'practice', 'review', 'progress']) { location.hash = '#' + r; route(); await new Promise(z => setTimeout(z, 120)); } const note = document.getElementById('memNote').textContent, hide = document.getElementById('memNoteOk'); const same1 = JSON.stringify(S.cards) === JSON.stringify(JSON.parse(o.raw).cards);
    if (hide) hide.click(); await new Promise(z => setTimeout(z, 120)); return { due: dueCount(), dueKeys: names.slice(0, 5).map(dn => DECKS[dn].filter(c => isDue(dn, c)).length), trophies: JSON.stringify(S.mastered), trophyShown: (document.getElementById('pDecks').textContent.match(/🏆/g) || []).length, same0, same1, tot, all, ln, note, hidden: document.getElementById('memNote').textContent === '' && S.memNote === 1, noteDue: memNoteDue(), n: Object.keys(S.cards).length }; }, oldOnly);
  ok('progress saved by the older release opens here unchanged, and looking at every screen changes none of it', up.same0 && up.same1 && up.n === oldOnly.n, up);
  ok('every card has a judgement and the unlock count ("learned") is the same as on the older release', up.tot.new + up.tot.learning + up.tot.memorized + up.tot.practice === up.all && up.tot.learning > 0 && up.tot.memorized > 0 && up.tot.practice > 0 && JSON.stringify(up.ln) === JSON.stringify(oldOnly.learned), [up.tot, up.ln, oldOnly.learned]);
  ok('no due card stops being due (' + oldOnly.due + ' due on both), and the two deck trophies stay', up.due === oldOnly.due && oldOnly.due > 0 && JSON.stringify(up.dueKeys) === JSON.stringify(oldOnly.dueKeys) && up.trophies === JSON.stringify(JSON.parse(oldOnly.raw).mastered) && up.trophyShown === 2, [up.due, oldOnly.due, up.trophies, up.trophyShown]);
  ok('Progress explains once why counts may have dropped, and Hide puts the note away for good', /judged by how long you remember/.test(up.note) && up.hidden && !up.noteDue, up.note);
  console.log('   (older release counted ' + JSON.stringify(oldOnly.mastered) + ' cards as mastered in the first five decks; this build counts ' + JSON.stringify(await N.evaluate(() => names.slice(0, 5).map(x => memCounts(x).memorized))) + ' as memorized)');
  ok('no page error on either device during the whole trip', !errs.N.length && !errs.O.length, errs);
  console.log((fail ? 'FAIL ' : '') + 'round trip with ' + ver.split(' ')[0] + ': ' + pass + ' pass' + (fail ? ', ' + fail + ' fail' : '')); await b.close(); process.exit(fail ? 1 : 0);
})();
