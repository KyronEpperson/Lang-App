/* usage: node tools/audio/export.js <course id> [out dir]
   Lists every sentence the app can speak in one course (cards, examples, dialogues, lesson example rows, practice answers) and writes
   <out>/<target>/manifest.json = { target, lang, clips: [{k, t}] }. k is the clip name (hash of the spoken text), t the text to synthesise.
   Runs the built app in a headless browser so the text is cleaned by the app's own sayText(). */
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path'); const { clipKey } = require('./lib.js');
const CID = process.argv[2]; const OUT = process.argv[3] || path.join(__dirname, '..', '..', 'lang-app', 'audio');
if (!/^[a-z]{2}-[a-z]{2}$/.test(CID || '')) { console.error('usage: node tools/audio/export.js <course id, e.g. en-ko>'); process.exit(1); }
(async () => {
  const b = await chromium.launch(); const p = await b.newPage(); const native = CID.split('-')[0];
  await p.addInitScript(([lang, cid]) => { const st = JSON.stringify({ nick: 'K', welcomed: 1, onboard: { skipped: 1 }, hintSeen: 1, tourDone: 1, fx3d: false }); localStorage.setItem('la-s-' + cid, st); if (cid === 'en-ko') localStorage.setItem('ko-app2', st); localStorage.setItem('la-meta', JSON.stringify({ v: 1, native: lang, course: cid, picked: 1, seenHome: 1, prefs: {} })); }, [native, CID]);
  await p.route(/supabase|fonts\.g/, r => r.abort());
  await p.goto('file://' + path.join(__dirname, '..', '..', 'korean-flashcards.html'));
  await p.waitForFunction(() => { try { return typeof COURSE !== 'undefined' && !!COURSE && typeof DECKS !== 'undefined' && Object.keys(DECKS).length > 0; } catch (e) { return false; } }, null, { timeout: 30000 });
  const got = await p.evaluate((cid) => {
    if (COURSE.id !== cid) return { err: 'loaded ' + COURSE.id + ' instead of ' + cid };
    const raw = new Set(); const add = x => { if (typeof x === 'string' && x.trim()) raw.add(x); };
    Object.values(DECKS).forEach(cs => cs.forEach(c => add(c[0])));
    Object.values(typeof EXAMPLES !== 'undefined' ? EXAMPLES : {}).forEach(e => add(e && e[0]));
    Object.values(typeof DIALOG !== 'undefined' ? DIALOG : {}).forEach(d => { if (d) { add(d[0]); add(d[1]); if (d[0] && d[1]) add(d[0] + '. ' + d[1]); } });
    const html = []; (typeof LESSONS !== 'undefined' ? LESSONS : []).forEach(l => { ['body', 'html', 'tip'].forEach(k => { if (typeof l[k] === 'string') html.push(l[k]); }); });
    const div = document.createElement('div'); html.forEach(h => { div.innerHTML = h; div.querySelectorAll('[data-say]').forEach(e => add(e.dataset.say)); });
    const PR = (COURSE.PRACTICE) || (typeof PRACTICE !== 'undefined' ? PRACTICE : {});
    Object.values(PR || {}).forEach(set => (set || []).forEach(it => { if (!it || !Array.isArray(it.a)) return; const a = it.a[0]; if (it.t === 'fill' && it.q) add(String(it.q).replace('__', a)); else if (it.t === 'order' || it.t === 'type') add(a); }));
    const seen = new Map(); raw.forEach(x => { const t = sayText(x).normalize('NFC'); if (t) seen.set(t, 1); });
    return { target: COURSE.target, lang: ttsLang(), texts: [...seen.keys()] };
  }, CID);
  await b.close();
  if (got.err) { console.error(got.err); process.exit(1); }
  const clips = got.texts.map(t => ({ k: clipKey(t), t })).sort((a, b) => a.k < b.k ? -1 : 1);
  const keys = new Set(clips.map(c => c.k)); if (keys.size !== clips.length) { console.error('hash collision: rename is needed'); process.exit(1); }
  const dir = path.join(OUT, got.target); fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'manifest.json'); let prev = { clips: [] }; try { prev = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) {}
  /* one language can be taught by several courses: keep clips other courses added */
  const merged = new Map((prev.clips || []).map(c => [c.k, c])); clips.forEach(c => merged.set(c.k, c));
  const all = [...merged.values()].sort((a, b) => a.k < b.k ? -1 : 1);
  fs.writeFileSync(file, JSON.stringify({ target: got.target, lang: got.lang, clips: all }, null, 0).replace(/\},\{/g, '},\n{') + '\n');
  const chars = all.reduce((n, c) => n + c.t.length, 0);
  console.log(CID + ': ' + clips.length + ' sentences from this course · manifest now ' + all.length + ' clips, ' + chars + ' characters → ' + file);
})();
