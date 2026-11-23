/* Bengali (Bengali script) -> the en-bn romanisation, the course's pron line (profile docs/profiles/en-bn.md §6).
   LEXICON-FIRST: every Bengali word is looked up whole in tools/target/bn/lexicon.txt and in every tools/target/bn/lexicon-add-*.txt
   (format: bengali<TAB>romanisation<TAB>source, `#` comments). There is NO rule fallback: a word that is not in a lexicon file makes
   the tool THROW, naming every missing word, so nobody ships a guessed vowel. The same text always gives the same output.
   - Whole words only: বইটা, ঢাকায়, আপনাকে are separate lines (no suffix stripping).
   - Longest match over words: a multi-word line (`আপনাকে দেখে	apnake dekhe	…`) wins over its single words. This is how a homograph
     (করে kôre "does" / kore "having done") gets its reading: a homograph used alone throws and asks for such a line.
   - Spacing is kept as one space between words; । ॥ become "."; , ? ! : ; stay stuck to the word before; a hyphen stays a hyphen
     (a hyphenated compound is looked up whole first, then part by part). Quotes and brackets are dropped.
   - It throws on Latin letters, digits (Western or Bengali: write numbers as words), and any other character it does not know.
   usage: node respell.js "আপনি কেমন আছেন?"      ->  আপনি কেমন আছেন? -> apni kemon achhen?
          node respell.js --pattern                prints pronPattern
          node respell.js --check                  validates every lexicon line (pattern, word counts, sources, conflicts); exit 1 on a problem
          node respell.js --suggest "<word>"       prints an UNVERIFIED rule-based guess (tools/target/bn/suggest.js), never a source */
const fs = require('fs'), path = require('path');

/* ---------- pronPattern ---------- */
/* Letters of the key (§6.3): a b c d e f g h i j k l m n o p r s t u w y, ô æ, the underdots ṭ ḍ ṛ, nasal vowels (NFC: ã ẽ ĩ õ ũ ỗ, and
   æ + U+0303 which has no precomposed form). No capitals, no q v x z. Words joined by single spaces, a hyphen only inside a word,
   . , ? ! : ; stuck to the word. Forbids aa ii uu ee oo (English long-vowel spellings) and a c that is not part of ch / cch / cchh.
   Written for NFC text; BMP only, so it behaves the same with and without the u flag. */
function pronPattern() {
  const L = '[abcdefghijklmnoprstuwyôæṭḍṛãẽĩõũỗ\\u0303]';
  const W = '-?' + L + '+(?:-' + L + '+)*[.,?!:;]?';
  return '^(?!.*(?:aa|ii|uu|ee|oo|c(?!c?h)))' + W + '(?: ' + W + ')*$';
}
const PRON_RE = new RegExp(pronPattern()), PRON_RE_U = new RegExp(pronPattern(), 'u');

/* ---------- lexicon ---------- */
const norm = s => String(s).normalize('NFC').replace(/[‌‍]/g, ''); /* ড় ঢ় য় come out the same in either encoding */
const BN_WORDCH = /^[ঀ-৥ৰ-৿]+$/u;     /* Bengali letters and marks, no digits ০-৯ */
const SOURCES = new Map();                                  /* id -> URL, from `#source <id> <url> …` lines in any lexicon file */
const LEX = new Map();                                      /* key -> [{ r, src, file, line, hom }] */
const ERRS = [];                                            /* load errors: reported by --check; a bad line is skipped at load */
let MAXW = 1;
function addLine(raw, n, file) {
  const ms = raw.match(/^#source\s+(\S+)\s+(\S+)/); if (ms) { SOURCES.set(ms[1], ms[2]); return; }
  const line = raw.replace(/\r$/, ''); if (!line.trim() || line.trim().startsWith('#')) return;
  const f = line.split('\t'); const where = file + ':' + n;
  if (f.length < 3 || !f[2].trim()) { ERRS.push(where + ': need «bengali<TAB>romanisation<TAB>source»: «' + line + '»'); return; }
  const key = norm(f[0]).trim().replace(/ +/g, ' '), r = f[1].normalize('NFC').trim(), src = f[2].trim();
  const words = key.split(' ');
  if (!words.every(w => w.split('-').every(p => BN_WORDCH.test(p)))) { ERRS.push(where + ': «' + key + '» is not Bengali words (letters and marks only, no digits, single spaces)'); return; }
  if (!PRON_RE.test(r) || !PRON_RE_U.test(r) || /[.,?!:;]/.test(r)) { ERRS.push(where + ': «' + key + '» -> «' + r + '» does not match pronPattern (key §6.3; no punctuation in a lexicon reading)'); return; }
  if (r.split(' ').length !== words.length) { ERRS.push(where + ': «' + key + '» has ' + words.length + ' word(s) but «' + r + '» has ' + r.split(' ').length); return; }
  if ((key.match(/-/g) || []).length !== (r.match(/-/g) || []).length) { ERRS.push(where + ': «' + key + '» and «' + r + '» have different hyphens'); return; }
  const hom = /homograph:/.test(src);
  if (!LEX.has(key)) LEX.set(key, []);
  LEX.get(key).push({ r, src, file, line: n, hom });
  if (words.length > MAXW) MAXW = words.length;
}
const FILES = ['lexicon.txt'].concat(fs.readdirSync(__dirname).filter(f => /^lexicon-add-[\w-]+\.txt$/.test(f)).sort());
FILES.forEach(f => { const p = path.join(__dirname, f); if (fs.existsSync(p)) fs.readFileSync(p, 'utf8').split('\n').forEach((l, i) => addLine(l, i + 1, f)); });

/* the reading of a key: { r } , or { err } for a homograph used alone / two different readings without the homograph mark */
function lookup(key) {
  const es = LEX.get(key); if (!es) return null;
  const rs = [...new Set(es.map(e => e.r))]; if (rs.length === 1) return { r: rs[0] };
  if (es.every(e => e.hom)) return { err: '«' + key + '» is a homograph: ' + es.map(e => e.r + ' (' + e.src.replace(/^.*homograph:/, '') + ')').join(' / ') + '. Use it inside a multi-word line that fixes the reading (e.g. «সে করে» or «আপনাকে দেখে»): add that phrase to your lexicon-add file' };
  return { err: '«' + key + '» has conflicting readings: ' + es.map(e => e.r + ' (' + e.file + ':' + e.line + ')').join(' / ') + '. Tell the lead; do not pick one' };
}

/* ---------- respell ---------- */
const PUNCT = { '।': '.', '॥': '.', '.': '.', '?': '?', '!': '!', ',': ',', ':': ':', ';': ';' };
const DROP = /["“”‘’'«»()\[\]…—–]/u;
function respell(text) {
  const src = norm(text).trim(); if (!src) return '';
  /* tokens: { w } a Bengali word part, { p } punctuation, { sp } a space, { hy } a hyphen */
  const toks = []; let buf = '';
  const flush = () => { if (buf) { toks.push({ w: buf }); buf = ''; } };
  for (const c of src) {
    if (/[ঀ-৿]/u.test(c) && !/[০-৯]/u.test(c)) { buf += c; continue; }
    flush();
    if (PUNCT[c]) { toks.push({ p: PUNCT[c] }); continue; }
    if (c === '-' || c === '‐') { toks.push({ hy: 1 }); continue; }
    if (/\s/.test(c)) { if (toks.length && !toks[toks.length - 1].sp) toks.push({ sp: 1 }); continue; }
    if (DROP.test(c)) continue;
    if (/[0-9০-৯]/u.test(c)) throw new Error('digit «' + c + '» in «' + text + '»: write numbers as words');
    if (/[A-Za-z]/.test(c)) throw new Error('Latin letter «' + c + '» in «' + text + '»: Bengali strings carry no Latin letters');
    throw new Error('character «' + c + '» (U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0') + ') in «' + text + '» is not Bengali text the tool knows');
  }
  flush();
  /* group words joined by hyphens into one unit { parts: [..] } */
  const units = [];
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i];
    if (t.w) { const parts = [t.w]; let lead = false;
      if (units.length && units[units.length - 1].hy) { units.pop(); lead = !units.length || !units[units.length - 1].parts; } /* "-টা" written alone */
      while (toks[i + 1] && toks[i + 1].hy && toks[i + 2] && toks[i + 2].w) { parts.push(toks[i + 2].w); i += 2; }
      units.push({ parts, lead }); continue; }
    if (t.hy) { units.push({ hy: 1 }); continue; }
    units.push(t);
  }
  const missing = [], errs = [], out = [];
  const readUnit = u => { const whole = lookup(u.parts.join('-'));
    if (whole && whole.r) return whole.r; if (whole && whole.err && u.parts.length === 1) { errs.push(whole.err); return null; }
    const rs = u.parts.map(p => { const x = lookup(p); if (!x) { missing.push(p); return null; } if (x.err) { errs.push(x.err); return null; } return x.r; });
    return rs.every(Boolean) ? rs.join('-') : null; };
  for (let i = 0; i < units.length; i++) {
    const u = units[i];
    if (u.p) { out.push({ p: u.p }); continue; }
    if (u.sp) { out.push({ sp: 1 }); continue; }
    if (u.hy) { out.push({ hyw: 1 }); continue; }
    /* longest multi-word match: plain single-part words separated by single spaces */
    let hit = null;
    if (u.parts.length === 1) for (let L = MAXW; L >= 2 && !hit; L--) {
      const ws = []; let j = i;
      while (ws.length < L && j < units.length && units[j].parts && units[j].parts.length === 1 && !units[j].lead) { ws.push(units[j].parts[0]); if (ws.length < L) { if (!(units[j + 1] && units[j + 1].sp)) break; j += 2; } }
      if (ws.length === L) { const x = lookup(ws.join(' ')); if (x && x.r) hit = { r: x.r, end: j }; }
    }
    if (hit) { out.push({ r: hit.r }); i = hit.end; continue; }
    const r = readUnit(u); out.push({ r: r === null ? null : (u.lead ? '-' : '') + r });
  }
  if (missing.length || errs.length) {
    const ms = [...new Set(missing)];
    throw new Error((ms.length ? 'not in the lexicon: ' + ms.map(m => '«' + m + '»').join(' ') + ' (in «' + text + '»). Add each word to YOUR OWN tools/target/bn/lexicon-add-<role>.txt as bengali<TAB>romanisation<TAB>source (a page you opened, or unverified:model), using the profile §6.3 key; `node tools/target/bn/respell.js --suggest "<word>"` prints an unverified guess to start from.' : '') + (errs.length ? (ms.length ? ' ' : '') + [...new Set(errs)].join(' ') : '') + (ERRS.length ? ' (Also: ' + ERRS.length + ' lexicon line(s) could not be read and were skipped; run `node tools/target/bn/respell.js --check`.)' : ''));
  }
  let s = '';
  out.forEach(o => { if (o.p) s = s.replace(/ +$/, '') + o.p; else if (o.sp) { if (s && !/[ -]$/.test(s)) s += ' '; } else if (o.hyw) s = s.replace(/ +$/, '') + '-'; else s += o.r; });
  s = s.replace(/\s+/g, ' ').replace(/ ([.,?!:;])/g, '$1').trim();
  if (!s || !/[a-zôæṭḍṛ]/u.test(s)) throw new Error('no Bengali word in «' + text + '»');
  return s.normalize('NFC');
}

/* ---------- --check ---------- */
function check() {
  const probs = ERRS.slice(); let ver = 0, unv = 0; const bySrc = {};
  const known = id => SOURCES.has(id) || /^https?:\/\//.test(id) || id === 'unverified:model';
  LEX.forEach((es, key) => {
    es.forEach(e => { const id = e.src.split(/\s/)[0];
      if (!known(id)) probs.push(e.file + ':' + e.line + ': «' + key + '»: unknown source «' + id + '» (use a #source id from lexicon.txt, a URL you opened, or unverified:model)');
      if (id === 'unverified:model') unv++; else ver++; bySrc[id] = (bySrc[id] || 0) + 1; });
    const x = lookup(key); if (x && x.err && !es.every(e => e.hom)) probs.push('conflict: ' + x.err);
    if (es.some(e => e.hom) && !es.every(e => e.hom)) probs.push('«' + key + '»: some lines are marked homograph: and some are not');
    /* a multi-word line must agree with the single-word lines of its non-homograph words */
    const ws = key.split(' '); if (ws.length > 1) { const rs = es[0].r.split(' ');
      ws.forEach((w, k) => { const y = lookup(w); if (y && y.r && y.r !== rs[k]) probs.push('«' + key + '» reads «' + w + '» as ' + rs[k] + ' but its own line says ' + y.r); }); }
  });
  return { probs, ver, unv, bySrc, keys: LEX.size };
}

module.exports = { respell, pronPattern, pattern: pronPattern, warnings: () => [], check, LEX, SOURCES };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pronPattern()); process.exit(0); }
  if (args[0] === '--check') {
    const c = check(); const lines = c.ver + c.unv;
    console.log(c.keys + ' keys, ' + lines + ' lines (' + FILES.join(', ') + ')');
    console.log('  sourced: ' + c.ver + ' (' + Math.round(100 * c.ver / Math.max(lines, 1)) + '%)   unverified:model: ' + c.unv);
    Object.keys(c.bySrc).sort().forEach(k => console.log('    ' + k + ': ' + c.bySrc[k]));
    if (c.probs.length) { console.log(c.probs.length + ' problem(s):'); c.probs.forEach(p => console.log('  ' + p)); process.exit(1); }
    console.log('OK: every line matches pronPattern (with and without the u flag), word counts agree, sources are known, no conflicts.');
    process.exit(0);
  }
  if (args[0] === '--suggest') {
    const { guess } = require('./suggest.js'); let bad = 0;
    args.slice(1).forEach(w => { try { const g = guess(w); console.log('UNVERIFIED GUESS (rule-based, not a source; check it before use): ' + w + ' -> ' + g.guess + (g.notes.length ? '   [' + g.notes.join(' | ') + ']' : '')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } });
    process.exit(bad ? 1 : 0);
  }
  let bad = 0;
  args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } });
  process.exit(bad ? 1 : 0);
}
