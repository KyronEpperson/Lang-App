/* usage (run on your own computer, from the repository root):
     ELEVENLABS_API_KEY=<your key> node source/tools/audio/gen_elevenlabs.js ko --gender=f [es ...]
   options:  --gender=f|m        which voice: f = the woman's voice into audio/<lang>/f, m = the man's voice into audio/<lang>/m (voices.json, "elevenlabs" section)
             --voice=<voice_id>  use another voice for this run (default: voices.json)
             --model=<model_id>  use another model for this run (default: voices.json, else eleven_multilingual_v2)
             --limit=<n>         make at most n new clips (try 20 first and listen)
             --dry               only report what would be made (and, if the key is set, the credits left on the account)
             --out=<dir>         write clips + index.json to this folder instead of audio/<lang>/<gender> (for listening tests; never commit it)
             --keys=<k1,k2,…>    only these clip names from the manifest (for listening tests)
             --force             remake clips that are already on disk (only sensible with --keys or --limit)
   Reads audio/<lang>/manifest.json, asks ElevenLabs for every clip that is not on disk yet, writes audio/<lang>/<gender>/<name>.mp3,
   then rewrites audio/<lang>/<gender>/index.json = {"clips":[…]} (the clips in that folder). Clips already on disk are never requested again, so a second run costs nothing.
   Only the manifest's "t" texts are ever sent. Output is mp3, 24 kHz, 48 kbit/s (mp3_24000_48), the same as the Azure clips.
   The key is read from the environment only: it is never written to a file or printed. Needs Node 18 or newer; no packages to install. */
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2); const opt = {}; const langs = [];
args.forEach(a => { const m = a.match(/^--([a-z]+)(?:=(.*))?$/); if (m) opt[m[1]] = m[2] === undefined ? true : m[2]; else langs.push(a); });
const ROOT = [process.cwd(), path.join(__dirname, '..', '..', '..'), path.join(__dirname, '..', '..', 'lang-app')].find(d => fs.existsSync(path.join(d, 'audio')));
const usage = 'usage: ELEVENLABS_API_KEY=… node source/tools/audio/gen_elevenlabs.js <lang> [lang …] --gender=f|m   (run from the repository root, where the audio/ folder is)';
if (!ROOT || !langs.length) { console.error(usage); process.exit(1); }
const G = opt.gender; if (G && G !== 'f' && G !== 'm') { console.error('--gender must be f or m'); process.exit(1); }
if (!G && !(opt.voice && opt.out)) { console.error('say which voice: --gender=f (woman) or --gender=m (man)\n' + usage); process.exit(1); }
const KEY = process.env.ELEVENLABS_API_KEY;
if (!opt.dry && !KEY) { console.error('ELEVENLABS_API_KEY is not set. In your terminal run  export ELEVENLABS_API_KEY=<your key>  (PowerShell: $env:ELEVENLABS_API_KEY="<your key>") and run this again. Nothing was sent.'); process.exit(1); }
const API = 'https://api.elevenlabs.io'; const FORMAT = 'mp3_24000_48'; const DEFAULT_MODEL = 'eleven_multilingual_v2';
const VOICES = JSON.parse(fs.readFileSync(path.join(__dirname, 'voices.json'), 'utf8')); const EL = VOICES.elevenlabs || {};
const sleep = ms => new Promise(r => setTimeout(r, ms));
const headers = () => ({ 'xi-api-key': KEY, 'Content-Type': 'application/json', 'User-Agent': 'lang-app-audio' });
let credits = 0; /* summed from the character-cost response header */
async function synth(text, voice, model, lang, settings) {
  const body = { text, model_id: model };
  if (!/multilingual_v2/.test(model) && lang) body.language_code = lang; /* multilingual_v2 rejects language_code; the newer models accept it */
  if (settings) body.voice_settings = settings;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const r = await fetch(`${API}/v1/text-to-speech/${encodeURIComponent(voice)}?output_format=${FORMAT}`, { method: 'POST', headers: headers(), body: JSON.stringify(body) });
    if (r.ok) { const buf = Buffer.from(await r.arrayBuffer()); if (buf.length < 200) throw new Error('empty audio'); credits += +(r.headers.get('character-cost') || 0); return buf; }
    if (r.status === 429 || r.status >= 500) { const ra = +(r.headers.get('retry-after') || 0); await sleep(ra ? ra * 1000 : 2000 * attempt); continue; }
    const t = (await r.text()).slice(0, 300).replace(/\s+/g, ' ');
    throw new Error('ElevenLabs answered ' + r.status + ' ' + t + (r.status === 401 ? ' (check the key)' : r.status === 404 ? ' (voice not found: is it added to your account?)' : ''));
  }
  throw new Error('still busy after 6 tries');
}
async function subscription() {
  try { const r = await fetch(`${API}/v1/user/subscription`, { headers: headers() }); if (!r.ok) return null; const s = await r.json(); return { tier: s.tier, used: s.character_count, limit: s.character_limit, reset: s.next_character_count_reset_unix }; } catch (e) { return null; }
}
function writeIndex(dir, man) { const have = man.clips.filter(c => fs.existsSync(path.join(dir, c.k + '.mp3'))).map(c => c.k); fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify({ clips: have }) + '\n'); return have.length; }
(async () => {
  if (opt.dry && KEY) { const s = await subscription(); if (s) console.log(`account: ${s.tier} plan, ${s.used} of ${s.limit} credits used this period (${s.limit - s.used} left${s.reset ? ', resets ' + new Date(s.reset * 1000).toISOString().slice(0, 10) : ''})`); }
  for (const lang of langs) {
    const src = path.join(ROOT, 'audio', lang); const mf = path.join(src, 'manifest.json');
    if (!fs.existsSync(mf)) { console.error(lang + ': no audio/' + lang + '/manifest.json'); continue; }
    const man = JSON.parse(fs.readFileSync(mf, 'utf8')); const v = EL[lang] || {}; const gv = (G && v[G]) || {};
    const voice = opt.voice || gv.voice_id; const model = opt.model || gv.model || v.model || DEFAULT_MODEL; const code = (man.lang || lang).split('-')[0];
    if (!voice) { console.error(lang + ': no voice_id for "' + G + '" in the "elevenlabs" section of voices.json (or pass --voice=…)'); continue; }
    const dir = opt.out ? path.resolve(opt.out) : path.join(src, G); if (!opt.dry) fs.mkdirSync(dir, { recursive: true });
    let list = man.clips; if (opt.keys) { const want = new Set(String(opt.keys).split(',')); list = list.filter(c => want.has(c.k)); }
    let todo = list.filter(c => opt.force || !fs.existsSync(path.join(dir, c.k + '.mp3'))); const chars = todo.reduce((n, c) => n + c.t.length, 0);
    console.log(`${lang}${G ? '/' + G : ''}: ${man.clips.length} clips in the list, ${todo.length} to make (${chars} characters), voice ${voice}, model ${model}, ${FORMAT} → ${path.relative(ROOT, dir)}`);
    if (opt.limit) todo = todo.slice(0, +opt.limit);
    if (opt.dry) { continue; }
    let done = 0, bytes = 0;
    for (const c of todo) {
      try { const buf = await synth(c.t, voice, model, code, gv.settings || v.settings); fs.writeFileSync(path.join(dir, c.k + '.mp3'), buf); done++; bytes += buf.length; if (done % 50 === 0) { console.log(`  ${done} / ${todo.length}`); writeIndex(dir, man); } }
      catch (e) { console.error('  stopped at «' + c.t + '»: ' + e.message); break; }
      await sleep(120);
    }
    const have = writeIndex(dir, man);
    console.log(`${lang}${G ? '/' + G : ''}: made ${done} clips (${(bytes / 1048576).toFixed(1)} MB, ${credits} credits charged) · ${have} of ${man.clips.length} now on disk · index.json updated`);
  }
})();
