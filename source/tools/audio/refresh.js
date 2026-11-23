/* usage: node tools/audio/refresh.js [--check] [audio dir]
   For every language that has clips or a sentence list under lang-app/audio/, rebuilds audio/<lang>/manifest.json = every sentence the
   CURRENT courses can speak in that language (all courses that teach it; sentences no course speaks any more are dropped), then prints
   and returns coverage: clips missing per voice, characters to generate, clips on disk that no sentence uses.
   --check: report only, write nothing. Needs a build (korean-flashcards.html). The generators (gen_elevenlabs.js, gen_azure.js) read the manifest. */
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path'), vm = require('vm'); const { clipKey } = require('./lib.js'); const { collect } = require('./export.js');
const ROOT = path.join(__dirname, '..', '..');
function courseIds() { /* built-in en-ko + every released pack (packs/HELD.txt excluded) */
  const held = new Set(fs.existsSync(path.join(ROOT, 'packs', 'HELD.txt')) ? fs.readFileSync(path.join(ROOT, 'packs', 'HELD.txt'), 'utf8').split('\n').map(l => l.trim()).filter(l => l && l[0] !== '#') : []);
  const ids = ['en-ko']; fs.readdirSync(path.join(ROOT, 'packs')).forEach(f => { const m = f.match(/^course-([a-z]{2,3}-[a-z]{2,4})\.js$/); if (m && !held.has(f)) ids.push(m[1]); }); return ids;
}
function idx(f) { try { const c = JSON.parse(fs.readFileSync(f, 'utf8')).clips; return Array.isArray(c) ? new Set(c) : null; } catch (e) { return null; } }
async function refresh(opts) {
  opts = opts || {}; const AUD = opts.dir || path.join(ROOT, 'lang-app', 'audio');
  const langs = new Set(fs.readdirSync(AUD).filter(d => fs.statSync(path.join(AUD, d)).isDirectory()));
  const ids = courseIds().filter(id => langs.has(id.split('-')[1])); const by = {}; const b = await chromium.launch();
  for (const id of ids) { const got = await collect(b, id); if (got.err) { await b.close(); throw new Error(id + ': ' + got.err); }
    const o = by[got.target] = by[got.target] || { lang: got.lang, m: new Map(), courses: [] }; o.courses.push(id); if (id.split('-')[0] === 'en') o.lang = got.lang; got.texts.forEach(t => o.m.set(clipKey(t), t)); }
  await b.close(); const rows = [];
  for (const t of Object.keys(by).sort()) { const o = by[t]; const all = [...o.m].map(([k, tx]) => ({ k, t: tx })).sort((a, c) => a.k < c.k ? -1 : 1); const dir = path.join(AUD, t); const file = path.join(dir, 'manifest.json');
    let prev = { clips: [] }; try { prev = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) {} const pk = new Set((prev.clips || []).map(c => c.k));
    const added = all.filter(c => !pk.has(c.k)).length, dropped = [...pk].filter(k => !o.m.has(k)).length;
    if (!opts.check && (added || dropped || !fs.existsSync(file))) fs.writeFileSync(file, JSON.stringify({ target: t, lang: o.lang, clips: all }, null, 0).replace(/\},\{/g, '},\n{') + '\n');
    const v = {}; ['f', 'm'].forEach(g => { const s = idx(path.join(dir, g, 'index.json')); if (s && s.size) { const miss = all.filter(c => !s.has(c.k)); v[g] = { have: s.size, missing: miss.length, chars: miss.reduce((n, c) => n + c.t.length, 0), orphans: [...s].filter(k => !o.m.has(k)).length }; } });
    const flat = idx(path.join(dir, 'index.json')); if (flat && flat.size) { const miss = all.filter(c => !flat.has(c.k)); v.flat = { have: flat.size, missing: miss.length, chars: miss.reduce((n, c) => n + c.t.length, 0), orphans: [...flat].filter(k => !o.m.has(k)).length }; }
    rows.push({ lang: t, sentences: all.length, chars: all.reduce((n, c) => n + c.t.length, 0), added, dropped, voices: v, courses: o.courses.length }); }
  return rows;
}
function table(rows) { const out = ['| Language | Sentences | Woman: missing (chars) | Man: missing (chars) | Unused clips | List changed (+new −gone) |', '|---|---|---|---|---|---|'];
  const cell = x => x ? (x.missing ? x.missing + ' (' + x.chars + ')' : 'complete') : 'no clips';
  rows.forEach(r => { const un = Math.max(0, ...Object.values(r.voices).map(x => x.orphans)); out.push('| ' + r.lang + ' | ' + r.sentences + ' | ' + cell(r.voices.f || r.voices.flat) + ' | ' + cell(r.voices.m) + ' | ' + un + ' | +' + r.added + ' −' + r.dropped + ' |'); }); return out.join('\n'); }
module.exports = { refresh, table };
if (require.main === module) (async () => { const a = process.argv.slice(2); const check = a.includes('--check'); const dir = a.find(x => !x.startsWith('--'));
  const rows = await refresh({ check, dir }); const voiced = rows.filter(r => Object.keys(r.voices).length);
  console.log(table(voiced)); const tot = voiced.reduce((n, r) => n + Math.max(0, ...Object.values(r.voices).map(x => x.missing)), 0);
  console.log('\n' + voiced.length + ' language(s) with clips · ' + tot + ' sentence(s) behind · ' + (rows.length - voiced.length) + ' language(s) with a sentence list only' + (check ? ' · check only, nothing written' : ' · manifests refreshed')); })().catch(e => { console.error(e.message); process.exit(1); });
