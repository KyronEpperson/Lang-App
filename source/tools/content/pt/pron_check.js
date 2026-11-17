/* pt-en IPA consistency checker (adapted from zh/pron_check.js; not part of the build). Rules: tools/content/pt/PRON-RULES.md.
   usage: node tools/content/pt/pron_check.js [summary|phrases|words|rules|zh|all]
   Collects every English -> IPA pair from decks.js, extra.js (IDIOMS), lessons.js and more/*.js ({{ex:}} rows and IPA quoted in prose),
   aligns them word by word, and reports: phrases with more than one transcription, words with more than one transcription
   (weak/strong function-word pairs listed in ALLOWED are skipped), rule violations, and (mode zh) every phrase or word whose
   pt transcription is not one that zh-en uses for the same English (PRON-RULES: pt agrees with zh for identical English). */
const fs = require('fs');
const PT = __dirname + '/', ZH = __dirname + '/../zh/';
function collect(D) {
  const pairs = [];
  const decks = require(D + 'decks.js');
  for (const [name, txt] of Object.entries(decks)) txt.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 2 && f[1].trim()) pairs.push({ en: f[0].trim(), ipa: f[1].trim(), src: 'decks:' + name }); });
  const idi = fs.readFileSync(D + 'extra.js', 'utf8').split('exports.IDIOMS')[1] || '';
  idi.split('\n').forEach(l => { const f = l.split(' | '); if (f.length >= 3 && f[2].trim().startsWith('/')) pairs.push({ en: f[0].trim(), ipa: f[2].trim(), src: 'extra:IDIOMS' }); });
  for (const fn of ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js']) {
    const t = fs.readFileSync(D + fn, 'utf8'); let m;
    const ex = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; while ((m = ex.exec(t))) if (m[2].trim()) pairs.push({ en: m[1].trim(), ipa: m[2].trim(), src: fn });
    const pr = /(?:<b>)?([A-Za-z][A-Za-z' ]{0,30}?)(?:<\/b>)?\s*(\/[^/<>\s][^/<>]*\/)/g; while ((m = pr.exec(t))) if (/ˈ/.test(m[2])) pairs.push({ en: m[1].trim(), ipa: m[2].trim(), src: fn + ':prose' });
  }
  return pairs;
}
const norm = s => s.toLowerCase().replace(/’/g, "'");
const words = s => norm(s).replace(/[.,!?;:"“”()…]/g, ' ').split(/\s+/).filter(Boolean);
const itoks = ipa => ipa.split(/ ‖ |\/ \//).map(s => s.replace(/^\/|\/$/g, '')).join(' ').split(/\s+/).filter(Boolean);
/* weak / strong (or stressed / unstressed) pairs that PRON-RULES §B allows (zh list + pt additions: into, which, before) */
const ALLOWED = new Set(['a', 'an', 'the', 'to', 'for', 'from', 'at', 'of', 'in', 'on', 'after', 'about', 'and', 'or', 'can', 'do', 'did', 'does', 'have', 'has', 'had', 'you', 'me', 'it', 'that', 'there', 'where', 'so', 'he', 'she', 'we', 'was', 'were', 'are', 'into', 'which', 'before']);
const FUNC = new Set("a an the i me my you your he him his she her it its we us our they them their am is are was were be been being do does did have has had can could will would shall should may might must in on at to for of from with near by about into over under after before around across through within until past and but or so if because although when than that as there who where which i'm you're he's she's it's we're they're i'll you'll i'd i've you've it'll there's that's what's".split(' '));
const VOW = /^[ˈˌ]?[aeiouæɑɔəɜɪʊʌ]/;
function analyse(pairs, withRules) {
  const W = {}, P = {}, rules = [];
  for (const p of pairs) {
    const k = norm(p.en).replace(/[.,!?]/g, '').trim(); (P[k] = P[k] || new Set()).add(p.ipa);
    const ew = words(p.en), iw = itoks(p.ipa);
    if (withRules) {
      if (/əʊ|ɒ|ɪə(?!r)|eə|ʊə|ɹ|ɚ|ɝ|ɾ|ɡ/.test(p.ipa.replace(/aɪər|aʊər|aʊəl|aɪəs/g, ''))) rules.push('symbol   ' + p.src + ' «' + p.en + '» ' + p.ipa);
      iw.forEach((t, i) => {
        const nx = iw[i + 1];
        if (nx && t === 'ðə' && VOW.test(nx)) rules.push('ðə+V     ' + p.src + ' «' + p.en + '» ' + p.ipa);
        if (nx && t === 'ði' && !VOW.test(nx)) rules.push('ði+C     ' + p.src + ' «' + p.en + '» ' + p.ipa);
        if (nx && t === 'tə' && VOW.test(nx)) rules.push('tə+V     ' + p.src + ' «' + p.en + '» ' + p.ipa);
        if (nx && t === 'ə' && VOW.test(nx)) rules.push('ə+V      ' + p.src + ' «' + p.en + '» ' + p.ipa);
        /* PRON-RULES §A4: word-final syllabic /l/ after any consonant, /n/ after t d s z ʃ ʒ v (not tʃ dʒ); names exempt */
        if ((/[^aeiouæɑɔəɜɪʊʌːrjw]əl[zdt]?$/.test(t) || /(?:^|[^t])[tdszʃʒv]ən[zdt]?s?$/.test(t.replace(/dʒ/g, 'J'))) && !/ˈ(bɔːstən|hɪltən|dɪstəns)/.test(t)) rules.push('syllabic ' + t + '  ' + p.src + ' «' + p.en + '»');
        if (/ɑ(?!ː)|ɔ(?![ːɪ])|ɜ(?!ː)/.test(t)) rules.push('length   ' + t + '  ' + p.src + ' «' + p.en + '»');
      });
    }
    if (ew.length !== iw.length) continue;
    ew.forEach((w, i) => {
      const t = iw[i]; (W[w] = W[w] || {}); (W[w][t] = W[w][t] || []).push(p.src + ' «' + p.en + '»');
      if (withRules && !FUNC.has(w) && !/[ˈˌ]/.test(t)) rules.push('nostress ' + w + ' ' + t + '  ' + p.src + ' «' + p.en + '»');
    });
  }
  return { W, P, rules };
}
const pt = analyse(collect(PT), true);
const mode = process.argv[2] || 'summary';
const phraseConf = Object.keys(pt.P).filter(k => pt.P[k].size > 1);
const wordConf = Object.keys(pt.W).filter(w => Object.keys(pt.W[w]).length > 1 && !ALLOWED.has(w));
if (mode === 'phrases' || mode === 'all') phraseConf.forEach(k => console.log('PHRASE ' + k + ' => ' + [...pt.P[k]].join('  ||  ')));
if (mode === 'words' || mode === 'all') wordConf.forEach(w => { console.log('WORD ' + w + ':'); for (const t in pt.W[w]) console.log('    ' + t + '  x' + pt.W[w][t].length + '  ' + pt.W[w][t].slice(0, 3).join(' ; ')); });
if (mode === 'rules' || mode === 'all') pt.rules.forEach(r => console.log('RULE ' + r));
let zhPhrase = 0, zhWord = 0;
if (fs.existsSync(ZH + 'decks.js')) {
  const zh = analyse(collect(ZH), false);
  for (const k in pt.P) if (zh.P[k]) for (const ipa of pt.P[k]) if (!zh.P[k].has(ipa)) { zhPhrase++; if (mode === 'zh' || mode === 'all') console.log('ZH-PHRASE ' + k + ' : pt ' + ipa + '  zh ' + [...zh.P[k]].join(' || ')); }
  for (const w in pt.W) if (zh.W[w]) for (const t in pt.W[w]) if (!zh.W[w][t]) { zhWord++; if (mode === 'zh' || mode === 'all') console.log('ZH-WORD ' + w + ' : pt ' + t + ' (' + pt.W[w][t][0] + ')  zh ' + Object.keys(zh.W[w]).join(' | ')); }
}
console.log('pairs ' + collect(PT).length + ' · words ' + Object.keys(pt.W).length + ' · phrase conflicts ' + phraseConf.length + ' · word conflicts ' + wordConf.length + ' · rule hits ' + pt.rules.length + ' · differs from zh: phrases ' + zhPhrase + ', words ' + zhWord);
