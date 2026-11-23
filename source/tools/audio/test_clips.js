/* usage: node tools/audio/test_clips.js <beep.mp3>
   Proves the clip path on the site build with the real security headers: a listed clip plays from audio/<lang>/<hash>.mp3 and the device voice is not used;
   an unlisted sentence and a clip that fails to load both fall back to the device voice. Uses fake clips served by the test, not real audio files. */
const { chromium } = require('playwright'); const fs = require('fs'); const srv = require('../site/srv.js'); const { clipKey } = require('./lib.js');
(async () => {
  const beep = fs.readFileSync(process.argv[2]); const s = await srv(8791); const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] }); const ctx = await b.newContext({ serviceWorkers: 'block' }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  const A = '안녕하세요', B = '감사합니다', C = '네'; const kA = clipKey(A), kB = clipKey(B); const reqs = [];
  await p.addInitScript(() => { const st = JSON.stringify({ nick: 'K', welcomed: 1, onboard: { skipped: 1 }, hintSeen: 1, tourDone: 1, fx3d: false }); localStorage.setItem('la-s-en-ko', st); localStorage.setItem('ko-app2', st); localStorage.setItem('la-meta', JSON.stringify({ v: 1, native: 'en', course: 'en-ko', picked: 1, seenHome: 1, prefs: {} })); window.__tts = []; const orig = window.speechSynthesis && window.speechSynthesis.speak; if (window.speechSynthesis) window.speechSynthesis.speak = function (u) { window.__tts.push(u.text); }; });
  await p.route(/supabase|fonts\.g/, r => r.abort());
  await p.route(/\/audio\//, r => { const u = r.request().url(); reqs.push(u.split('/audio/')[1]); if (/\/audio\/ko\/index\.json$/.test(u)) return r.fulfill({ contentType: 'application/json', body: JSON.stringify({ target: 'ko', clips: [kA, kB] }) }); if (u.includes(kA)) return r.fulfill({ contentType: 'audio/mpeg', body: beep }); return r.fulfill({ status: 404, body: 'nf' }); });
  await p.goto('http://localhost:8791/'); await p.waitForFunction(() => { try { return !!COURSE && Object.keys(DECKS).length > 0; } catch (e) { return false; } }); await p.waitForTimeout(500);
  const out = {}; const say = async t => { await p.evaluate(x => { window.__tts.length = 0; speak(x); }, t); await p.waitForTimeout(1300); return p.evaluate(() => ({ tts: window.__tts.slice(), clip: !!(clipEl && !clipEl.error && clipEl.currentTime > 0) })); };
  await p.evaluate(() => loadClips()); await p.waitForTimeout(600);
  out.listed = await say(A); out.broken = await say(B); out.unlisted = await say(C);
  out.cspErrors = errs.length; out.requests = reqs;
  const ok = out.listed.clip && out.listed.tts.length === 0 && out.broken.tts.length >= 1 && out.unlisted.tts.length >= 1 && reqs.includes('ko/' + kA + '.mp3');
  console.log(JSON.stringify(out)); console.log(ok ? 'clip test: PASS' : 'clip test: FAIL'); await b.close(); s.close && s.close(); process.exit(ok ? 0 : 1);
})();
