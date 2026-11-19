/* usage (run on your own computer, from the repository root):
     AZURE_SPEECH_KEY=<your key> AZURE_SPEECH_REGION=<region, e.g. eastus> node source/tools/audio/gen_azure.js ko [es ...]
   options:  --voice=<name>   use another voice for this run (default: source/tools/audio/voices.json)
             --limit=<n>      make at most n new clips (try 20 first and listen)
             --dry            only report what would be made
   Reads audio/<lang>/manifest.json, asks Azure Speech for every clip that is not on disk yet, writes audio/<lang>/<name>.mp3,
   then rewrites audio/<lang>/index.json (the list the app reads). Clips already on disk are never requested again, so a second run costs nothing.
   The key is read from the environment only: it is never written to a file. Needs Node 18 or newer; no packages to install. */
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2); const opt = {}; const langs = [];
args.forEach(a => { const m = a.match(/^--([a-z]+)(?:=(.*))?$/); if (m) opt[m[1]] = m[2] === undefined ? true : m[2]; else langs.push(a); });
const ROOT = [process.cwd(), path.join(__dirname, '..', '..', '..'), path.join(__dirname, '..', '..', 'lang-app')].find(d => fs.existsSync(path.join(d, 'audio')));
if (!ROOT || !langs.length) { console.error('usage: AZURE_SPEECH_KEY=… AZURE_SPEECH_REGION=… node source/tools/audio/gen_azure.js <lang> [lang …]   (run from the repository root, where the audio/ folder is)'); process.exit(1); }
const KEY = process.env.AZURE_SPEECH_KEY, REGION = process.env.AZURE_SPEECH_REGION;
if (!opt.dry && (!KEY || !REGION)) { console.error('Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION in your terminal first. Nothing was sent.'); process.exit(1); }
const VOICES = JSON.parse(fs.readFileSync(path.join(__dirname, 'voices.json'), 'utf8'));
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function synth(text, voice, locale) {
  const ssml = `<speak version="1.0" xml:lang="${locale}"><voice name="${voice}">${esc(text)}</voice></speak>`;
  for (let attempt = 1; attempt <= 5; attempt++) {
    const r = await fetch(`https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`, { method: 'POST', headers: { 'Ocp-Apim-Subscription-Key': KEY, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3', 'User-Agent': 'lang-app-audio' }, body: ssml });
    if (r.ok) { const buf = Buffer.from(await r.arrayBuffer()); if (buf.length < 200) throw new Error('empty audio'); return buf; }
    if (r.status === 429 || r.status >= 500) { await sleep(1500 * attempt); continue; }
    throw new Error('Azure answered ' + r.status + ' ' + (await r.text()).slice(0, 200) + (r.status === 401 ? ' (check the key and the region)' : ''));
  }
  throw new Error('still busy after 5 tries');
}
function writeIndex(dir, man) { const have = man.clips.filter(c => fs.existsSync(path.join(dir, c.k + '.mp3'))).map(c => c.k); fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify({ target: man.target, clips: have }) + '\n'); return have.length; }
(async () => {
  for (const lang of langs) {
    const dir = path.join(ROOT, 'audio', lang); const mf = path.join(dir, 'manifest.json');
    if (!fs.existsSync(mf)) { console.error(lang + ': no audio/' + lang + '/manifest.json'); continue; }
    const man = JSON.parse(fs.readFileSync(mf, 'utf8')); const v = VOICES[lang] || {}; const voice = opt.voice || v.voice; const locale = v.locale || man.lang;
    if (!voice) { console.error(lang + ': no voice set in voices.json (or pass --voice=…)'); continue; }
    let todo = man.clips.filter(c => !fs.existsSync(path.join(dir, c.k + '.mp3'))); const chars = todo.reduce((n, c) => n + c.t.length, 0);
    console.log(`${lang}: ${man.clips.length} clips in the list, ${todo.length} to make (${chars} characters), voice ${voice}`);
    if (opt.limit) todo = todo.slice(0, +opt.limit);
    if (opt.dry) { continue; }
    let done = 0, bytes = 0;
    for (const c of todo) {
      try { const buf = await synth(c.t, voice, locale); fs.writeFileSync(path.join(dir, c.k + '.mp3'), buf); done++; bytes += buf.length; if (done % 50 === 0) { console.log(`  ${done} / ${todo.length}`); writeIndex(dir, man); } }
      catch (e) { console.error('  stopped at «' + c.t + '»: ' + e.message); break; }
      await sleep(120);
    }
    const have = writeIndex(dir, man);
    console.log(`${lang}: made ${done} clips (${(bytes / 1048576).toFixed(1)} MB) · ${have} of ${man.clips.length} now on disk · index.json updated`);
  }
})();
