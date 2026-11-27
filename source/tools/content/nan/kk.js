/* nan-en pronunciation aid: KK (Kenyon & Knott) phonetic symbols as Taiwan schools and dictionaries print them, made by a tool
   from the IPA the zh-en / yue-en courses use (OALD North American values, tools/content/zh/PRON-RULES.md). Rules: PRON-RULES.md.

   usage:
     node tools/content/nan/kk.js "/ˈpiːpl/" ["/ˈɡʊd ˈmɔːrnɪŋ/" …]   print the KK form of each IPA string (use this for every NEW pron)
     node tools/content/nan/kk.js --check                           report spans in tools/content/nan that still look like IPA
     node tools/content/nan/kk.js --files [--dry]                   ONE-TIME conversion of the scaffold (done by the lead on 2026-11-27;
                                                                    do not run again: KK /e/ would be re-read as IPA /e/ and become ɛ)
   The conversion is deterministic, so the same English always gets the same aid (tools/content/lint.js stays clean). */
const fs = require('fs'), path = require('path');
const DIR = __dirname;
const FILES = ['decks.js', 'extra.js', 'lessons.js', 'practice.js', 'meta.js', 'more/a1.js', 'more/a2.js', 'more/b1.js'];
const V = 'aeiouæɑɔəɜɪʊʌɛɝɚ\u0001\u0002\u0003';
const C = 'pbtdkgfvθðszʃʒhmnŋ'; /* consonants that can stand before a syllabic l / n (r, j, w, l excluded on purpose) */

function word(w) {
  let s = w.replace(/ɡ/g, 'g');
  s = s.replace(/ɜːr/g, 'ɝ').replace(/ɜr/g, 'ɝ');
  s = s.replace(/eɪ/g, '\u0001').replace(/oʊ/g, 'o');
  s = s.replace(/ər(?![aeiouæɑɔəɜɪʊʌɛ\u0001\u0002\u0003o])/g, 'ɚ');
  s = s.replace(/iː/g, '\u0002').replace(/uː/g, '\u0003').replace(/ɑː/g, 'ɑ').replace(/ɔː/g, 'ɔ').replace(/ː/g, '');
  s = s.replace(/e/g, 'ɛ').replace(/i/g, 'ɪ').replace(/u/g, 'ʊ');
  s = s.replace(/\u0001/g, 'e').replace(/\u0002/g, 'i').replace(/\u0003/g, 'u');
  /* syllabic consonants (zh rule: no ə written): KK writes ḷ, and ṇ after t d s z; after other consonants KK writes ən */
  s = s.replace(new RegExp('([' + C + '])l(?=$|[^' + V + 'ˈˌ])', 'g'), '$1ḷ');
  s = s.replace(/([tdsz])n(?=$|[^aeiouæɑɔəɪʊʌɛɝɚˈˌ])/g, '$1ṇ');
  s = s.replace(/([fvθðʃʒkgpbm])n(?=$|[^aeiouæɑɔəɪʊʌɛɝɚˈˌ])/g, '$1ən');
  return s;
}
function toKK(ipa) {
  return ipa.replace(/\/([^/\n]+)\//g, (m, body) => '/' + body.split(' ').map(word).join(' ') + '/');
}
const IPA_SPAN = /\/([^\s/](?:[^/\n]*[^\s/])?)\//g;
const IPA_CHARS = /^[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖ɡ ]+$/;
const looksIPA = b => IPA_CHARS.test(b) && /[ːˈˌəɜæɑɔɪʊʌθðʃʒŋ]/.test(b);
const BRITISH = /ɒ|əʊ|(?<![aɔ])[ɪeʊ]ə/;

const argv = process.argv.slice(2);
if (argv[0] === '--files' || argv[0] === '--check') {
  const dry = argv.includes('--dry') || argv[0] === '--check'; let n = 0; const left = [];
  for (const f of FILES) {
    const p = path.join(DIR, f); if (!fs.existsSync(p)) continue;
    const src = fs.readFileSync(p, 'utf8');
    const out = src.replace(IPA_SPAN, (m, body) => {
      if (argv[0] === '--check') { if (looksIPA(body) && /[ːɜɒɡ]|oʊ|əʊ/.test(body)) left.push(f + ': still IPA: ' + m); return m; }
      if (BRITISH.test(body)) { left.push(f + ': British value kept as IPA: ' + m); return m; }
      if (!looksIPA(body)) return m;
      n++; return '/' + body.split(' ').map(word).join(' ') + '/';
    });
    if (!dry && out !== src) fs.writeFileSync(p, out);
  }
  if (argv[0] === '--files') console.log((dry ? 'would convert ' : 'converted ') + n + ' spans');
  left.forEach(l => console.log(l));
  if (argv[0] === '--check') { console.log(left.length ? left.length + ' spans to look at' : 'no IPA-only spans left'); process.exit(left.some(l => /still IPA/.test(l)) ? 1 : 0); }
} else if (argv.length) argv.forEach(a => console.log(toKK(a.startsWith('/') ? a : '/' + a + '/')));
else { console.error('usage: node tools/content/nan/kk.js "/IPA/" … | --check | --files [--dry]'); process.exit(2); }
module.exports = { toKK, word };
