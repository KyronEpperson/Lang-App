/* voice choice (woman's / man's recordings): node tools/tests/voicetest.js
   Serves a COPY of korean-site/ from a temp dir (with the vercel.json headers, so the CSP applies) and adds fixture clip folders:
   ko: f + m (Korean course, built-in onboarding)   it: f + m (generic onboarding)   es: flat only   fr: f only   de: nothing.
   Audio requests are recorded from the page (no reliance on playback); speechSynthesis.speak is stubbed and counted. */
const { chromium } = require('playwright'); const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const { clipKey } = require('../audio/lib.js');
const SITE = path.resolve(__dirname, '../../korean-site'); const SHOTS = process.env.VOICE_SHOTS || path.join(os.tmpdir(), 'voicetest-shots');
let fail = 0; const ok = (n, c, d) => { console.log((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : ' :: ' + JSON.stringify(d === undefined ? '' : d))); if (!c) fail++; };
const T = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.mp3': 'audio/mpeg' };
function serve(root) { return new Promise(res => { const cfg = JSON.parse(fs.readFileSync(root + '/vercel.json', 'utf8')); const s = http.createServer((q, r) => { let u = decodeURIComponent(q.url.split('?')[0]); if (u === '/') u = '/index.html'; const f = path.join(root, u);
  if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end('nf'); return; }
  const h = { 'Content-Type': T[path.extname(f)] || 'application/octet-stream' }; cfg.headers.forEach(rule => { if (new RegExp('^' + rule.source + '$').test(u)) rule.headers.forEach(x => { if (x.key !== 'Strict-Transport-Security') h[x.key] = x.value.replace('; upgrade-insecure-requests', ''); }); });
  r.writeHead(200, h); fs.createReadStream(f).pipe(r); }); s.listen(0, '127.0.0.1', () => res(s)); }); }
const ST = { nick: 'K', welcomed: 1, onboard: { skipped: 1 }, hintSeen: 1, tourDone: 1, fx3d: false };
const seed = (course, state, prefs) => ({ course, state, prefs: prefs || { nick: 'K' } });
(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'voicetest-')); const root = path.join(tmp, 'site'); fs.cpSync(SITE, root, { recursive: true }); fs.mkdirSync(SHOTS, { recursive: true });
  const srv = await serve(root); const U = 'http://127.0.0.1:' + srv.address().port + '/';
  const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] }); const errs = [];
  const mk = async (sd, vp) => { const c = await b.newContext({ viewport: vp || { width: 390, height: 800 }, serviceWorkers: 'block' }); const p = await c.newPage(); p._req = []; p.on('pageerror', e => errs.push(e.message)); p.on('request', q => { const u = q.url(); if (u.includes('/audio/')) p._req.push(u.split('/audio/')[1]); });
    await p.route(/supabase|fonts\.g|_vercel/, r => r.abort());
    await p.addInitScript(sd => { window.__tts = []; if (window.speechSynthesis) window.speechSynthesis.speak = function (u) { window.__tts.push(u.text); }; if (localStorage.getItem('la-meta')) return; const st = JSON.stringify(sd.state); localStorage.setItem(sd.course === 'en-ko' ? 'ko-app2' : 'la-s-' + sd.course, st); localStorage.setItem('la-meta', JSON.stringify({ v: 1, native: 'en', course: sd.course, picked: 1, seenHome: 1, prefs: sd.prefs })); }, sd);
    return [c, p]; };
  const boot = async (p, h) => { await p.goto(U + '#' + (h || 'today')); await p.waitForFunction(() => { try { return !!COURSE && Object.keys(DECKS).length > 0 && !!VOX[COURSE.target] && VOX[COURSE.target].done; } catch (e) { return false; } }, null, { timeout: 15000 }); await p.waitForTimeout(250); };
  const say = async (p, t) => { p._req.length = 0; await p.evaluate(x => { window.__tts.length = 0; speak(x); }, t); await p.waitForTimeout(900); return { req: p._req.filter(x => /\.mp3$/.test(x)), tts: await p.evaluate(() => window.__tts.length) }; };
  const btn = p => p.evaluate(() => { const v = document.getElementById('voiceBtn'); return { shown: !!v && !v.hidden && v.offsetParent !== null, glyph: v && v.textContent, label: v && v.getAttribute('aria-label') }; });

  /* 1. texts that exist in each course, as playClip receives them (sayText + NFC), hashed with tools/audio/lib.js */
  const TX = {}; { const [c, p] = await mk(seed('en-ko', ST)); await boot(p);
    for (const id of ['en-ko', 'en-it', 'en-es', 'en-fr', 'en-de']) TX[id] = await p.evaluate(async id => { await ensureCourse(id); applyCourse(id, { noRoute: true }); const out = []; for (const d of names) { for (const cd of DECKS[d]) { const t = sayText(cd[0]).normalize('NFC'); if (t && !out.includes(t)) out.push(t); if (out.length >= 4) return out; } } return out; }, id);
    await c.close(); }
  const K = {}; Object.keys(TX).forEach(id => { K[id] = TX[id].map(clipKey); });
  ok('fixture texts found in every course', Object.values(TX).every(a => a.length >= 4), TX);
  /* 2. fixtures: ko f has A,B,C; ko m has A,B (C missing → device voice when 'm'); it f+m; es flat; fr f only; de nothing */
  const mp3 = path.join(tmp, 'tiny.mp3'); try { cp.execFileSync('ffmpeg', ['-v', 'quiet', '-f', 'lavfi', '-i', 'anullsrc=r=22050:cl=mono', '-t', '0.15', '-q:a', '9', mp3]); } catch (e) { fs.writeFileSync(mp3, Buffer.from([0xff, 0xfb, 0x90, 0x00])); }
  const put = (lang, dir, keys) => { const d = path.join(root, 'audio', lang, dir); fs.mkdirSync(d, { recursive: true }); fs.writeFileSync(path.join(d, 'index.json'), JSON.stringify({ clips: keys })); keys.forEach(k => fs.copyFileSync(mp3, path.join(d, k + '.mp3'))); };
  put('ko', 'f', K['en-ko'].slice(0, 3)); put('ko', 'm', K['en-ko'].slice(0, 2)); put('it', 'f', K['en-it'].slice(0, 2)); put('it', 'm', K['en-it'].slice(0, 2)); put('es', '', K['en-es'].slice(0, 2)); put('fr', 'f', K['en-fr'].slice(0, 2));
  const [kA, kB, kC] = K['en-ko'], [tA, tB, tC] = TX['en-ko'];

  /* 3. onboarded user, both voices, pref unset */
  { const [c, p] = await mk(seed('en-ko', ST)); await boot(p);
    let s = await btn(p); ok('toggle visible when both voices exist', s.shown, s); ok('default voice is woman (pref unset)', s.glyph === '👩' && /woman/i.test(s.label || '') && (await p.evaluate(() => [voicePref(), S.voice === undefined])).join() === 'f,true', s);
    ok('toggle visible in simple view', await p.evaluate(() => document.body.classList.contains('simple')) && s.shown);
    ok('one-time Today card shown', await p.evaluate(() => !!document.getElementById('voiceAsk') && document.getElementById('todayHome').firstElementChild.id === 'voiceAsk'));
    let r = await say(p, tA); ok('default plays audio/ko/f/<k>.mp3', r.req.length === 1 && r.req[0] === 'ko/f/' + kA + '.mp3', r);
    await p.click('#voiceAsk [data-voice="m"]'); await p.waitForTimeout(200);
    ok('choosing in the card saves the pref and hides the card', await p.evaluate(() => S.voice === 'm' && JSON.parse(localStorage.getItem('la-meta')).prefs.voice === 'm' && !document.getElementById('voiceAsk')));
    ok('card choice toast', /Voice: man/.test(await p.evaluate(() => document.getElementById('toast').textContent)));
    r = await say(p, tA); ok('switched voice requests audio/ko/m/<k>.mp3 (no woman request)', r.req.length === 1 && r.req[0] === 'ko/m/' + kA + '.mp3', r);
    r = await say(p, tC); ok('clip missing in chosen voice → device voice, no request for the other voice', r.req.length === 0 && r.tts >= 1, r);
    await p.reload(); await boot(p); s = await btn(p);
    ok('preference survives reload', s.glyph === '👨' && /man/i.test(s.label) && await p.evaluate(() => S.voice === 'm'), s);
    ok('one-time card never shows again', await p.evaluate(() => !document.getElementById('voiceAsk')));
    await p.click('#voiceBtn'); await p.waitForTimeout(200);
    ok('toggle switches to woman + toast + saved', (await btn(p)).glyph === '👩' && await p.evaluate(() => S.voice === 'f' && /Voice: woman/.test(document.getElementById('toast').textContent) && JSON.parse(localStorage.getItem('la-meta')).prefs.voice === 'f'));
    r = await say(p, tB); ok('after toggle plays audio/ko/f/<k>.mp3', r.req.length === 1 && r.req[0] === 'ko/f/' + kB + '.mp3', r);
    /* Settings row */
    await p.goto(U + '#progress'); await p.waitForTimeout(400);
    ok('settings row visible with both choices', await p.evaluate(() => { const r = document.getElementById('voiceRow'); return !r.hidden && r.offsetParent !== null && r.querySelectorAll('[data-voice]').length === 2 && r.querySelector('[data-voice="f"]').getAttribute('aria-pressed') === 'true'; }));
    await p.click('#voiceRow [data-voice="m"]'); await p.waitForTimeout(200);
    ok('settings row sets the pref', await p.evaluate(() => S.voice === 'm' && document.getElementById('voiceRow').querySelector('[data-voice="m"]').getAttribute('aria-pressed') === 'true' && document.getElementById('voiceBtn').textContent === '👨'));
    /* course switch: f-only language hides the toggle and plays its only voice; switching back restores ko/m (no stale Set) */
    await p.evaluate(async () => { await ensureCourse('en-fr'); applyCourse('en-fr'); }); await p.waitForFunction(() => VOX.fr && VOX.fr.done); await p.waitForTimeout(200);
    s = await btn(p); ok('switch to f-only course hides toggle and settings row', !s.shown && await p.evaluate(() => document.getElementById('voiceRow').hidden), s);
    r = await say(p, TX['en-fr'][0]); ok('f-only language plays audio/fr/f/ even with pref man', r.req.length === 1 && r.req[0] === 'fr/f/' + K['en-fr'][0] + '.mp3', r);
    await p.evaluate(async () => { await ensureCourse('en-ko'); applyCourse('en-ko'); }); await p.waitForTimeout(300);
    r = await say(p, tB); ok('switch back to ko restores man voice', (await btn(p)).shown && r.req.length === 1 && r.req[0] === 'ko/m/' + kB + '.mp3', r);
    /* header fit + screenshots */
    for (const w of [390, 320]) { await p.setViewportSize({ width: w, height: 700 }); await p.goto(U + '#today'); await boot(p);
      const f = await p.evaluate(() => { const top = document.querySelector('.top'); const bs = [...document.querySelectorAll('.hdr-r > button')].filter(x => !x.hidden); const st = document.getElementById('hdrStat'); return { page: document.documentElement.scrollWidth <= innerWidth, top: top.scrollWidth <= top.clientWidth, btns: bs.every(x => x.getBoundingClientRect().right <= innerWidth + 0.5 && x.getBoundingClientRect().left >= 0), n: bs.length, stat: st.getBoundingClientRect().width, h1: document.querySelector('header h1').getBoundingClientRect().right <= bs[0].getBoundingClientRect().left + 0.5 }; });
      ok('header fits at ' + w + 'px with the toggle', f.page && f.top && f.btns && f.h1 && f.n === 4 && f.stat >= 30, f); /* the stat (streak/goal) must stay readable, not squeezed to the dot */
      await p.screenshot({ path: path.join(SHOTS, 'voice-header-' + w + '.png'), clip: { x: 0, y: 0, width: w, height: 120 } }); }
    await c.close(); }
  /* 4. dismissing the card keeps woman and never shows again */
  { const [c, p] = await mk(seed('en-ko', ST)); await boot(p);
    await p.click('#voiceAskX'); await p.waitForTimeout(200);
    ok('dismiss sets pref f and hides card', await p.evaluate(() => S.voice === 'f' && !document.getElementById('voiceAsk') && JSON.parse(localStorage.getItem('la-meta')).prefs.voice === 'f'));
    await p.reload(); await boot(p); ok('dismissed card stays gone after reload', await p.evaluate(() => !document.getElementById('voiceAsk')));
    await c.close(); }
  /* 5. onboarding question: Korean (renderOnboard) and generic (renderOnboardGeneric) with both voices; hidden with one voice */
  for (const [id, gen] of [['en-ko', 0], ['en-it', 1]]) { const [c, p] = await mk(seed(id, Object.assign({}, ST, { onboard: null }))); await boot(p);
    const q = await p.evaluate(() => { const o = document.getElementById('obVoice'); return { shown: !!o && !o.hidden && o.offsetParent !== null, chips: o ? o.querySelectorAll('.chip').length : 0, def: o && o.querySelector('[aria-pressed="true"]') && o.querySelector('[aria-pressed="true"]').dataset.v, gen: !CF('script'), ask: !!document.getElementById('voiceAsk') }; });
    ok('onboarding (' + (gen ? 'generic' : 'Korean') + ') asks which voice when both exist', q.shown && q.chips === 2 && q.def === 'f' && q.gen === !!gen && !q.ask, q);
    await p.click('#obVoiceC [data-v="m"]'); await p.click('#obGo'); await p.waitForTimeout(300);
    ok('onboarding (' + (gen ? 'generic' : 'Korean') + ') saves the voice', await p.evaluate(() => S.voice === 'm' && !!S.onboard && JSON.parse(localStorage.getItem('la-meta')).prefs.voice === 'm' && !document.getElementById('voiceAsk')));
    await c.close(); }
  { const [c, p] = await mk(seed('en-fr', Object.assign({}, ST, { onboard: null }))); await boot(p);
    ok('onboarding has no voice question with one voice', await p.evaluate(() => { const o = document.getElementById('obVoice'); return !!document.getElementById('obGo') && !!o && o.hidden; }));
    await p.click('#obGo'); await p.waitForTimeout(200); ok('one-voice onboarding leaves pref unset', await p.evaluate(() => S.voice === undefined && !document.getElementById('voiceAsk')));
    await c.close(); }
  /* 6. flat layout and no audio */
  { const [c, p] = await mk(seed('en-es', ST)); await boot(p);
    ok('toggle hidden for flat-only language', !(await btn(p)).shown && await p.evaluate(() => !document.getElementById('voiceAsk')));
    const r = await say(p, TX['en-es'][0]); ok('flat layout still plays audio/es/<k>.mp3', r.req.length === 1 && r.req[0] === 'es/' + K['en-es'][0] + '.mp3', r);
    await c.close(); }
  { const [c, p] = await mk(seed('en-de', ST)); await boot(p);
    ok('toggle hidden with no voices', !(await btn(p)).shown);
    const r = await say(p, TX['en-de'][0]); ok('no clips → device voice, no mp3 request', r.req.length === 0 && r.tts >= 1, r);
    await c.close(); }
  { const [c, p] = await mk(seed('en-ko', ST)); const probes = []; p.on('request', q => { if (/\/audio\/.*index\.json$/.test(q.url())) probes.push(q.url().split('/audio/')[1]); }); await boot(p);
    await p.click('#voiceBtn'); await p.click('#voiceBtn'); await p.waitForTimeout(300);
    ok('indexes probed once per language (toggling does not refetch)', probes.sort().join() === 'ko/f/index.json,ko/index.json,ko/m/index.json', probes);
    await c.close(); }
  /* 7. interface strings are translated (Spanish speakers learning Korean) */
  { const sd = seed('es-ko', ST); const [c, p] = await mk(sd); await boot(p);
    const t = await p.evaluate(() => ({ lang: uiLang(), ask: (document.querySelector('#voiceAsk b') || {}).textContent, chip: (document.querySelector('#voiceAsk [data-voice="m"]') || {}).textContent, btn: document.getElementById('voiceBtn').getAttribute('aria-label') }));
    ok('voice strings translated (es)', t.lang === 'es' && t.ask === '¿Qué voz quieres escuchar?' && t.chip === 'Voz de hombre' && t.btn === 'Voz: mujer. Cambiar a voz de hombre', t);
    /* no overflow at 320px (Spanish interface) on the screens that show the new controls */
    const fit = async (name, sel) => { await p.waitForTimeout(250); const f = await p.evaluate(sel => { const el = document.querySelector(sel); const r = el && el.getBoundingClientRect(); return { el: !!el && el.offsetParent !== null, page: document.documentElement.scrollWidth <= innerWidth, inside: !!r && r.left >= 0 && r.right <= innerWidth + 0.5, kids: !!el && [...el.querySelectorAll('button,b,span')].every(x => { const q = x.getBoundingClientRect(); return q.right <= innerWidth + 0.5; }) }; }, sel); ok('no overflow at 320px (es): ' + name, f.el && f.page && f.inside && f.kids, f); await p.locator(sel).scrollIntoViewIfNeeded(); await p.screenshot({ path: path.join(SHOTS, 'voice-' + name + '-320.png') }); };
    await p.setViewportSize({ width: 320, height: 700 }); await fit('today-card', '#voiceAsk');
    await p.goto(U + '#progress'); await fit('progress-row', '#voiceRow');
    await c.close(); }
  { const [c, p] = await mk(seed('es-ko', Object.assign({}, ST, { onboard: null })), { width: 320, height: 900 }); await boot(p);
    await p.waitForTimeout(250); const f = await p.evaluate(() => { const el = document.getElementById('obVoice'); return { el: !!el && !el.hidden, page: document.documentElement.scrollWidth <= innerWidth, kids: !!el && [...el.querySelectorAll('button,h3')].every(x => x.getBoundingClientRect().right <= innerWidth + 0.5) }; });
    ok('no overflow at 320px (es): onboarding question', f.el && f.page && f.kids, f); await p.locator('#obVoice').scrollIntoViewIfNeeded(); await p.screenshot({ path: path.join(SHOTS, 'voice-onboarding-320.png') });
    await c.close(); }
  ok('no page errors', errs.length === 0, errs);
  console.log('screenshots: ' + SHOTS);
  await b.close(); srv.close(); fs.rmSync(tmp, { recursive: true, force: true });
  console.log(fail ? 'VOICETEST FAIL ' + fail : 'VOICETEST OK'); process.exit(fail ? 1 : 0);
})().catch(e => { console.error('CRASH', e); process.exit(1); });
