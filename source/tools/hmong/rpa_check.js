/* White Hmong RPA spelling guard.
   usage:  node tools/hmong/rpa_check.js <file-or-pack-or-folder> [--field NAME]... [--pron] [--distractors] [--green-ok] [--names-ok] [--allow FILE] [--json] [--quiet]
           --field DECKS,EXAMPLES  only these pack tables (or a .tsv column) · --pron  also the pron lines · --distractors  wrong options count as errors too
           --green-ok  Green spellings are not errors (dialect-comparison material) · --names-ok  unknown capitalised words are warnings everywhere
           node tools/hmong/rpa_check.js --selftest
   module: const { checkToken, checkText } = require('./rpa_check.js')

   A token is legal White Hmong RPA when it is ONE syllable = onset (from ONSETS, or none) + vowel (from VOWELS) + optional tone letter (b j v s g m d).
   Each syllable is written as its own word; hyphenated compounds are checked part by part.
   Inputs:
     packs/course-hmn-en.js   Hmong is the learner's language: deck names, meanings, notes, lesson prose, prompts, explanations (English and pron skipped)
     packs/course-en-hmn.js   Hmong is the target: card fronts, examples, dialogues, patterns, practice answers (English prose skipped)
     packs/i18n-hmn.js, tools/i18n/hmn/ui.json   interface strings
     tools/target/<t>/, tools/content/<x>/       source folders: the pack is generated to a temp file with that folder's gen.js first
     *.tsv                     the Hmong column (header hmn / hmong / rpa / word / headword / hmoob, else the first column); --field picks a column
     anything else             every token of the text is treated as Hmong
   Exit code 1 when an error is found (illegal or Green-only spelling in a Hmong field, or a pack path this tool does not know). */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const ROOT = path.join(__dirname, '..', '..');
let HM = 'hmn'; /* the language code read as Hmong; --lang xx re-points it (smoke tests of the field map on other packs) */

/* ---- inventory (White Hmong / Hmoob Dawb, RPA). Source: tools/hmong/RPA.md §2-§4 (56 White onsets + zero, 13 White vowels, 7 tone letters; Green dl dlh ndl ndlh aa; marginal nl hnl g). ---- */
const ONSETS = ('c ch d dh f h hl hm hml hn hny k kh l m ml n nc nch nk nkh np nph npl nplh nq nqh nr nrh nt nth nts ntsh ntx ntxh ny ' +
  'p ph pl plh q qh r rh s t th ts tsh tx txh v x xy y z').split(' ');
const VOWELS = 'a e i o u w ai au aw ee ia oo ua'.split(' ');
const TONES = 'b j v s g m d'.split(' ');
/* Green Mong (Moob Leeg) spellings that are not White Hmong */
const GREEN_ONSETS = 'dl dlh ndl ndlh'.split(' ');
const GREEN_VOWELS = ['aa'];
/* marginal onsets (RPA.md §2, §5 rule 7): flag, do not fail */
const MARGINAL_ONSETS = 'nl hnl g'.split(' ');
/* -d occurs in phrase-final short forms only (RPA.md §4): any other -d word is a warning (list it in NEW-WORDS) */
const D_WORDS = new Set('nrad nraud ped saud tid tod thaud ntawd nkawd'.split(' '));
/* Green word forms that happen to be structurally legal White syllables (only a lexical list can catch them) */
const GREEN_WORDS = new Set([]);
/* Green forms named in GLOSSARY.tsv notes ("Green: Moob") that are legal White syllables: warning only, and never for a form that is itself a White glossary word (av) */
let GREEN_LEX = null;
function greenLex() {
  if (GREEN_LEX) return GREEN_LEX; GREEN_LEX = new Map(); const f = path.join(__dirname, 'GLOSSARY.tsv'); if (!fs.existsSync(f)) return GREEN_LEX;
  const rows = fs.readFileSync(f, 'utf8').split('\n').filter(l => l.trim()).map(l => l.split('\t')); const head = rows[0].map(h => h.trim().toLowerCase()); const hc = Math.max(0, head.indexOf('hmong')), nc = head.indexOf('note');
  const white = new Set(); rows.slice(1).forEach(r => String(r[hc] || '').toLowerCase().split(/[^a-z]+/).filter(Boolean).forEach(w => white.add(w)));
  if (nc < 0) return GREEN_LEX;
  rows.slice(1).forEach(r => { const m = String(r[nc] || '').match(/Green:\s*([^;,.(]+)/i); if (!m) return; m[1].trim().toLowerCase().split(/\s+/).forEach(w => { if (/^[a-z]+$/.test(w) && !white.has(w) && !GREEN_LEX.has(w)) GREEN_LEX.set(w, String(r[hc]).trim()); }); });
  return GREEN_LEX;
}

const ONS = ['', ...ONSETS].sort((a, b) => b.length - a.length);
const GONS = [...GREEN_ONSETS, ...ONSETS, ''].sort((a, b) => b.length - a.length), MONS = [...MARGINAL_ONSETS, ...ONSETS, ''].sort((a, b) => b.length - a.length);
const VOW = VOWELS.slice().sort((a, b) => b.length - a.length), GVOW = [...GREEN_VOWELS, ...VOWELS].sort((a, b) => b.length - a.length);
const TONESET = new Set(TONES);
const LETTERS = new Set([...ONSETS, ...TONES, ...GREEN_ONSETS, ...MARGINAL_ONSETS, 'w']); /* bare letters taught in lessons: b, ntxh, -v */

/* every way to read s as onset + vowel + tone? (s lower-case ASCII) */
function syllable(s, green) {
  const out = []; for (const o of (green === 'marginal' ? MONS : green ? GONS : ONS)) { if (!s.startsWith(o)) continue; const r = s.slice(o.length);
    for (const v of (green === true ? GVOW : VOW)) { if (!r.startsWith(v)) continue; const t = r.slice(v.length);
      if (t === '' || (t.length === 1 && TONESET.has(t))) out.push({ onset: o, vowel: v, tone: t }); } }
  return out;
}
/* split a run-together word into 2..5 legal syllables (first parse found), or null */
function segment(s, green, max, first) {
  if (first === undefined) first = true; max = max || 5; if (!s) return []; if (max === 0) return null;
  for (let i = Math.min(s.length, 6); i >= 1; i--) { const head = s.slice(0, i), p = syllable(head, green); if (!p.length) continue; if (!first && !p.some(x => x.onset)) continue; /* a later syllable must start with a consonant: keeps English (you = yo+u) out */
    const rest = segment(s.slice(i), green, max - 1, false); if (rest) return [{ text: head, ...p[0] }, ...rest]; }
  return null;
}

/* ---- allow list: tools/hmong/ALLOW.txt (one entry per line, # comments; multi-word entries allowed; case-insensitive) ---- */
let ALLOW_CACHE = null;
function loadAllow(file) {
  if (!file && ALLOW_CACHE) return ALLOW_CACHE;
  const f = file || path.join(__dirname, 'ALLOW.txt'); const words = new Set(), phrases = [];
  if (fs.existsSync(f)) fs.readFileSync(f, 'utf8').split('\n').forEach(l => { l = l.replace(/#.*/, '').trim(); if (!l) return; if (/[\s.]/.test(l.replace(/\.$/, '')) || /\s/.test(l)) phrases.push(l); else words.add(l.toLowerCase().replace(/\.$/, '')); });
  phrases.sort((a, b) => b.length - a.length); const r = { words, phrases, file: f }; if (!file) ALLOW_CACHE = r; return r;
}
/* tools/hmong/ALLOW.txt + a course's own ALLOW.txt (tools/content/<x>/ALLOW.txt), used when no --allow FILE is given and the input is that course's source
   folder, its interface (tools/i18n/<x>/) or its built packs (packs/course-<x>-en.js, packs/i18n-<x>.js); --allow FILE still replaces both */
function loadAllowWith(extra) {
  const base = loadAllow(); if (!extra || !fs.existsSync(extra)) return base; const add = loadAllow(extra);
  const phrases = [...new Set([...base.phrases, ...add.phrases])].sort((a, b) => b.length - a.length);
  return { words: new Set([...base.words, ...add.words]), phrases, file: base.file + ' + ' + path.relative(ROOT, extra) };
}
function courseAllowFor(target) {
  const rel = path.relative(ROOT, path.resolve(target)).split(path.sep); let x = null;
  if (rel[0] === 'tools' && (rel[1] === 'content' || rel[1] === 'i18n') && rel[2]) x = rel[2];
  else if (rel[0] === 'packs' && rel.length === 2) { const m = rel[1].match(/^course-([a-z]+)-en\.js$|^i18n-([a-z]+)\.js$/); if (m) x = m[1] || m[2]; }
  if (!x || x !== HM) return null; const f = path.join(ROOT, 'tools', 'content', x, 'ALLOW.txt'); return fs.existsSync(f) ? f : null;
}
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* checkToken(token, opts) -> { token, ok, kind, reason?, parse? }
   kind: rpa | joined | green | allow | name | acronym | number | english | illegal
   opts: { allow: Set (lower-case words), english: Set (lower-case words; tolerated in mixed text), mixed: bool, greenOk: bool, sentenceStart: bool } */
function checkToken(token, opts) {
  opts = opts || {}; const t = String(token).replace(/^['’](?=[a-z])/i, ''); const low = t.toLowerCase(); /* a leading apostrophe (zero onset) is legal, not required: RPA.md §1 */ const allow = opts.allow || loadAllow().words;
  const R = (ok, kind, extra) => Object.assign({ token: t, ok, kind }, extra || {});
  if (!t) return R(true, 'number');
  if (/^[\d.,:%/+\-–]+$/.test(t)) return R(true, 'number');
  if (allow.has(low) || allow.has(t)) return R(true, 'allow');
  if (/\d/.test(t) && /[a-z]/i.test(t)) { const base = low.replace(/\d+$/, ''); if (base && /^[a-z]+$/.test(base) && (syllable(base).length || segment(base))) return R(false, 'illegal', { reason: 'digit after a Hmong word (reduplication sign? write the word twice): RPA.md §5 rule 6' }); return R(true, 'number', { reason: 'code with digits (V1, mp3, 1st)' }); }
  if (LETTERS.has(low) && !syllable(low).length) return R(true, 'letter', { reason: 'a letter or onset on its own (letter-teaching text)' });
  if (/^[a-z]+$/i.test(t)) {
    const p = syllable(low);
    if (p.length) { if (GREEN_WORDS.has(low)) return R(!!opts.greenOk, 'green', { reason: 'Green Mong word form', parse: p[0] }); if (!opts.greenOk && greenLex().has(low)) return R(true, 'greenword', { reason: 'Green form of White «' + greenLex().get(low) + '» (GLOSSARY.tsv note)', parse: p[0] }); if (p[0].tone === 'd' && !D_WORDS.has(low)) return R(true, 'dtone', { reason: '-d outside the phrase-final set (' + [...D_WORDS].join(' ') + '): list it in NEW-WORDS', parse: p[0] }); return R(true, 'rpa', { parse: p[0] }); }
    const mg = syllable(low, 'marginal'); if (mg.length && !syllable(low, true).length) return R(true, 'marginal', { reason: 'marginal onset ' + mg[0].onset + ' (RPA.md §2: flag, do not fail)', parse: mg[0] });
    const g = syllable(low, true); if (g.length) return R(!!opts.greenOk, 'green', { reason: 'Green Mong spelling (' + (GREEN_ONSETS.includes(g[0].onset) ? 'onset ' + g[0].onset : 'vowel ' + g[0].vowel) + ')', parse: g[0] });
  }
  if (opts.english && opts.english.has(low)) return R(true, 'english');
  if (/^[a-z]+$/i.test(t)) {
    if (t.length >= 2 && t === t.toUpperCase()) return R(true, 'acronym');
    const seg = segment(low); if (seg && seg.length > 1) return R(true, 'joined', { reason: 'syllables run together: ' + seg.map(x => x.text).join(' '), parse: seg });
    if (/^[A-Z]/.test(t) && (!opts.sentenceStart || !opts.strictCaps)) return R(!opts.strictNames, 'name', { reason: 'capitalised word that is not RPA: if it is a name or a loan kept in English, add it to ALLOW.txt (RPA.md §6)' });
    return R(false, 'illegal', { reason: why(low) });
  }
  const bad = [...t].filter(c => !/[a-z]/i.test(c)); return R(false, 'illegal', { reason: 'not an RPA letter: ' + [...new Set(bad)].join(' ') });
}
function why(low) {
  let best = ''; for (const o of ONS) if (low.startsWith(o) && o.length >= best.length) best = o;
  const r = low.slice(best.length); if (!r) return 'no vowel';
  const v = VOW.find(x => r.startsWith(x)); if (!best && !/^[aeiouw]/.test(low)) return 'onset ' + low.match(/^[^aeiouw]*/)[0] + ' is not an RPA initial';
  if (!v) return 'no RPA vowel after ' + (best || 'the start') + ' (' + r + ')';
  const t = r.slice(v.length); return t.length > 1 ? 'ending ' + t + ' after vowel ' + v + ' (only one tone letter b j v s g m d may follow)' : 'ending ' + t + ' is not a tone letter (b j v s g m d)';
}

/* checkText(text, opts) -> { tokens: [{ token, start, ok, kind, reason? }], errors: [...] }
   Removes ALLOW phrases first, then {{…}} tokens' braces, HTML tags and entities; splits on anything that is not a letter, digit, apostrophe or hyphen; hyphenated words are checked part by part. */
function tokenize(text, opts) {
  opts = opts || {}; let s = String(text == null ? '' : text); const allow = opts.allowList || loadAllow();
  s = s.replace(/[\uFE0E\uFE0F\u200D]/g, ' '); /* emoji variation selectors and the zero-width joiner belong to the emoji before them: not letters */
  s = s.replace(/<[^>]*>/g, m => ' '.repeat(m.length)).replace(/&[a-z]+;|&#\d+;/gi, m => ' '.repeat(m.length));
  s = s.replace(/(^|[^\p{L}\p{M}\d\/])(\/[^\s\/<>]{1,40}\/)(?=$|[^\p{L}\p{M}\d\/])/gu, (m, a, ipa) => a + ' '.repeat(ipa.length)); /* an IPA transcription between slashes (/θ/, /ˈdʌbəljuː/, /tɝːn‿ɪt/) is pron, not Hmong; kuv/koj and tus / tug are still read */
  s = s.replace(/[\u02C8\u02CC\u02D0\u02D1\u203F]/g, ' '); /* IPA stress / length / linking marks (ˈ ˌ ː ˑ ‿) quoted on their own: not letters */
  for (const ph of allow.phrases) s = s.replace(new RegExp('(^|[^\\p{L}])' + esc(ph) + '(?=$|[^\\p{L}])', 'giu'), (m, a) => a + ' '.repeat(m.length - a.length));
  const out = []; const re = /[\p{L}\p{M}\d]+(?:['’][\p{L}]+)*/gu; let m;
  while ((m = re.exec(s))) {
    const before = s.slice(0, m.index); const sentenceStart = /(^|[.!?:;…"“«(\n]|\/)\s*['"“«(]*$/.test(before) || /^\s*$/.test(before);
    out.push({ token: m[0], start: m.index, sentenceStart, hyph: /[-‐‑]$/.test(before) || /^[-‐‑]/.test(s.slice(m.index + m[0].length)) });
  }
  return out;
}
function checkText(text, opts) {
  opts = opts || {}; const toks = tokenize(text, opts).map(x => Object.assign(x, checkToken(x.token, Object.assign({}, opts, { sentenceStart: x.sentenceStart }))));
  return { tokens: toks, errors: toks.filter(x => !x.ok) };
}

/* ---- packs ---- */
function loadPackFile(f) {
  const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(f, 'utf8'))(P);
  const cs = Object.values(P.course), is = Object.entries(P.i18n); return { course: cs[0] || null, i18n: is[0] || null };
}
/* roles: H = Hmong (target side: strict), N = learner side (Hmong when the learner speaks Hmong), E = English, O = either language (options/hints),
   P = pron line, S = skip (ids, deck references, numbers); a trailing 'd' = a distractor (intentionally wrong: reported, never an error); 'f' = fill fragment. */
function walkPack(c, sink) {
  const hmnNative = c.native === HM, hmnTarget = c.target === HM;
  const side = r => { const d = /d$/.test(r), f = /f/.test(r); const b = r.replace(/[df]+$/, '');
    const L = b === 'T' ? (hmnTarget ? 'hmn' : 'en') : b === 'N' ? (hmnNative ? 'hmn' : 'en') : b === 'O' ? 'either' : b === 'E' ? 'en' : b === 'P' ? 'pron' : 'skip';
    return { lang: L, distractor: d, fragment: f, mixed: L === 'hmn' && hmnNative && b !== 'T' }; };
  const put = (v, role, p) => { if (typeof v !== 'string' || !v) return; sink(Object.assign({ text: v, path: p, role }, side(role))); };
  const each = (o, fn) => { if (o && typeof o === 'object') for (const k of Object.keys(o)) fn(o[k], k); };
  const unknown = p => sink({ text: '', path: p, role: '?', lang: 'unmapped' });
  const known = new Set(['id', 'native', 'target', 'ttsLang', 'features', 'accents', 'keys', 'tilesDefault', 'romaAlmost', 'noAudio', 'voiceMatch', 'standard', 'builtin',
    'name', 'brand', 'introWord', 'GREET', 'DECKS', 'GROUPS', 'TAGS', 'DESC', 'DIALOG', 'EXAMPLES', 'LESSONS', 'CHECKS', 'PRACTICE', 'PATTERNS', 'PAIRS', 'GOALS', 'PLAN_PRESETS', 'TITLES', 'PAUSE', 'UI', 'TRAINER', 'ROLES', 'KINDS']);
  Object.keys(c).forEach(k => { if (!known.has(k) && k !== 'SECS') unknown(k); });
  each(c.SECS, (secs, id) => each(secs, (w, i) => ((w && w.add) || []).forEach((r, j) => { const p = `SECS{${id}}[${i}].add[${j}]`; if (Array.isArray(r)) { put(r[0], 'T', p + '[0]'); put(r[1], 'P', p + '[1]'); put(r[2], 'N', p + '[2]'); put(r[3], 'N', p + '[3]'); } else put(r, 'T', p); }))); /* SEC-1 section cards: the writer's new cards are cards like any other; drops only name existing fronts */
  each(c.name, (v, k) => put(v, k === HM ? (hmnTarget ? 'T' : 'N') : 'E', 'name.' + k));
  put(c.brand, 'T', 'brand'); put(c.introWord, 'T', 'introWord');
  (c.GREET || []).forEach((g, i) => { put(g[0], 'T', `GREET[${i}][0]`); put(g[1], 'N', `GREET[${i}][1]`); });
  each(c.DECKS, (cards, d) => { put(d, 'N', `DECKS{${d}}`); (cards || []).forEach((r, i) => { const p = `DECKS{${d}}[${i}]`; put(r[0], 'T', p + '[0]'); put(r[1], 'P', p + '[1]'); put(r[2], 'N', p + '[2]'); put(r[3], 'N', p + '[3]'); for (let j = 4; j < r.length; j++) unknown(p + '[' + j + ']'); }); });
  (c.GROUPS || []).forEach((g, i) => put(g[0], 'N', `GROUPS[${i}][0]`));
  each(c.DESC, (v, d) => put(v, 'N', `DESC{${d}}`));
  each(c.DIALOG, (v, k) => { (v || []).forEach((x, i) => put(x, i < v.length - 1 ? 'T' : 'N', `DIALOG{${k}}[${i}]`)); });
  each(c.EXAMPLES, (v, k) => { put(v[0], 'T', `EXAMPLES{${k}}[0]`); put(v[1], 'N', `EXAMPLES{${k}}[1]`); });
  (c.LESSONS || []).forEach((l, i) => { const p = `LESSONS[${i}:${l.id}]`; put(l.title, 'N', p + '.title'); put(l.blurb, 'N', p + '.blurb'); lessonBody(l.body || '', p + '.body', put);
    const secCards = (x, q) => { if (Array.isArray(x)) x.forEach((y, j) => secCards(y, q + '[' + j + ']')); else if (x && typeof x === 'object' && Array.isArray(x.cards)) { put(x.name, 'N', q + '.name'); x.cards.forEach((r, j) => { put(r[0], 'T', q + `.cards[${j}][0]`); put(r[1], 'P', q + `.cards[${j}][1]`); put(r[2], 'N', q + `.cards[${j}][2]`); put(r[3], 'N', q + `.cards[${j}][3]`); }); } }; secCards(l.sections, p + '.sections'); /* FND-1: in-lesson decks are cards like any other; deck names and slices point at DECKS */
    Object.keys(l).forEach(k => { if (!['id', 'title', 'blurb', 'deck', 'body', 'sections'].includes(k)) unknown(p + '.' + k); }); });
  each(c.CHECKS, (arr, id) => (arr || []).forEach((q, i) => { const p = `CHECKS{${id}}[${i}]`; put(q[0], 'N', p + '[0]'); const ci = typeof q[2] === 'number' ? q[2] : 0;
    (q[1] || []).forEach((o, j) => put(o, j === ci ? 'O' : 'Od', p + `[1][${j}]`)); put(q[3], 'N', p + '[3]'); }));
  each(c.PRACTICE, (arr, id) => (arr || []).forEach((it, i) => { const p = `PRACTICE{${id}}[${i}:${it.t}]`;
    const sk = new Set(['t', 'why', 'strict']); put(it.why, 'N', p + '.why');
    if (it.t === 'mc') { put(it.q, 'N', p + '.q'); (it.o || []).forEach((o, j) => put(o, j ? 'Od' : 'O', p + `.o[${j}]`)); ['q', 'o'].forEach(k => sk.add(k)); }
    else if (it.t === 'order') { put(it.p, 'N', p + '.p'); put((it.a || []).join(' '), 'T', p + '.a'); (it.x || []).forEach((x, j) => put(x, 'Td', p + `.x[${j}]`)); (it.alt || []).forEach((a, j) => put(a.join(' '), 'T', p + `.alt[${j}]`)); ['p', 'a', 'x', 'alt'].forEach(k => sk.add(k)); }
    else if (it.t === 'fill') { put(it.q, 'Tf', p + '.q'); put(it.p, 'N', p + '.p'); (it.a || []).forEach((a, j) => put(a, 'Tf', p + `.a[${j}]`)); (it.o || []).forEach((o, j) => put(o, 'Tfd', p + `.o[${j}]`)); (it.xr || []).forEach((x, j) => put(x, 'Tfd', p + `.xr[${j}]`)); ['q', 'p', 'a', 'o', 'xr'].forEach(k => sk.add(k)); }
    else if (it.t === 'type') { put(it.p, 'N', p + '.p'); (it.a || []).forEach((a, j) => put(a, 'T', p + `.a[${j}]`)); put(it.hint, 'O', p + '.hint'); (it.x || []).forEach((x, j) => put(x, 'Td', p + `.x[${j}]`)); (it.xr || []).forEach((x, j) => put(x, 'Td', p + `.xr[${j}]`)); ['p', 'a', 'hint', 'x', 'xr'].forEach(k => sk.add(k)); }
    else unknown(p);
    Object.keys(it).forEach(k => { if (!sk.has(k) && (typeof it[k] === 'string' || (it[k] && typeof it[k] === 'object'))) unknown(p + '.' + k); }); })); /* number / boolean flags (strict, nc…) hold no text */
  (c.PATTERNS || []).forEach((r, i) => { put(r[0], 'T', `PATTERNS[${i}][0]`); put(r[1], 'N', `PATTERNS[${i}][1]`); put(r[2], 'T', `PATTERNS[${i}][2]`); });
  (c.PAIRS || []).forEach((r, i) => (Array.isArray(r) ? r : [r]).forEach((x, j) => put(x, 'O', `PAIRS[${i}][${j}]`)));
  each(c.GOALS, (g, k) => put(g && g.label, 'N', `GOALS{${k}}.label`)); each(c.PLAN_PRESETS, (g, k) => put(g && g.label, 'N', `PLAN_PRESETS{${k}}.label`));
  (c.TITLES || []).forEach((r, i) => { put(r[1], 'E', `TITLES[${i}][1]`); put(r[2], 'N', `TITLES[${i}][2]`); });
  if (c.PAUSE) { each(c.PAUSE.sets, (s, k) => { put(s[0], 'O', `PAUSE.sets{${k}}[0]`); (s[1] || []).forEach((r, i) => { put(r[0], 'T', `PAUSE.sets{${k}}[1][${i}][0]`); put(r[1], 'N', `PAUSE.sets{${k}}[1][${i}][1]`); }); });
    (c.PAUSE.idioms || []).forEach((r, i) => { put(r[0], 'T', `PAUSE.idioms[${i}][0]`); put(r[1], 'N', `PAUSE.idioms[${i}][1]`); }); }
  each(c.UI, (v, k) => { put(k, 'E', `UI{${k}}#key`); put(v, 'N', `UI{${k}}`); });
  const deep = (o, p, role) => { if (typeof o === 'string') put(o, role, p); else if (Array.isArray(o)) o.forEach((x, i) => deep(x, p + '[' + i + ']', role)); else each(o, (v, k) => deep(v, p + '.' + k, role)); };
  deep(c.TRAINER, 'TRAINER', 'N'); deep(c.ROLES, 'ROLES', 'N');
}
/* lesson HTML: prose is the learner side; {{ex:target|pron|meaning}} rows; <td class="k"> cells hold target-language examples */
function lessonBody(h, p, put) {
  let n = 0; h = h.replace(/\{\{ex:([^}]*)\}\}/g, (m, x) => { const f = x.split('|'); put(f[0], 'T', p + `{{ex#${n}}}[0]`); put(f[1], 'P', p + `{{ex#${n}}}[1]`); put(f.slice(2).join('|'), 'N', p + `{{ex#${n}}}[2]`); n++; return ' '; });
  h = h.replace(/\{\{[^}]*\}\}/g, ' '); let k = 0;
  h = h.replace(/<(td|span|b|i|div)\b[^>]*class="[^"]*\bk\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/g, (m, tag, x) => { put(x.replace(/<[^>]*>/g, ' '), 'T', p + `<k#${k++}>`); return ' '; });
  put(h, 'N', p);
}
function walkI18n(code, d, sink) {
  const put = (v, lang, p) => { if (typeof v === 'string' && v) sink({ text: v.replace(/\{\d+\}/g, ' '), path: p, role: lang === 'hmn' ? 'N' : 'E', lang, mixed: lang === 'hmn', distractor: false, fragment: false }); };
  const hm = code === HM ? 'hmn' : 'other';
  if (d.exact) Object.entries(d.exact).forEach(([k, v]) => { put(k, 'en', 'exact{' + k + '}#key'); put(typeof v === 'object' ? v.t : v, hm, 'exact{' + k + '}'); });
  if (d.patterns) (Array.isArray(d.patterns) ? d.patterns.map((x, i) => [i, x]) : Object.entries(d.patterns)).forEach(([k, v]) => { put(String(k).replace(/\{[a-z]\}/g, ' '), 'en', 'patterns{' + k + '}#key'); put(typeof v === 'object' ? (v.t || v[1]) : v, hm, 'patterns{' + k + '}'); });
}
/* collect every string of an input as { text, path, lang: hmn|en|either|pron|skip|unmapped, mixed, distractor, fragment } */
function collect(target, opts) {
  opts = opts || {}; const items = []; const sink = x => items.push(x); let st; try { st = fs.statSync(target); } catch (e) { throw new Error('no such file or folder: ' + target); }
  let info = { kind: '', id: '' };
  if (st.isDirectory()) {
    const abs = path.resolve(target), rel = path.relative(ROOT, abs).split(path.sep); const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'hmong-'));
    if (rel[0] === 'tools' && (rel[1] === 'target' || rel[1] === 'content') && rel[2]) {
      const out = path.join(tmp, 'pack.js'); const r = cp.spawnSync('node', [path.join(ROOT, 'tools', rel[1], 'gen.js'), rel[2], out], { cwd: ROOT, encoding: 'utf8' });
      if (r.status) throw new Error('could not generate the pack from ' + target + ': ' + (r.stderr || r.stdout).slice(-600));
      const sub = collect(out, opts); sub.info.kind = 'source folder ' + path.relative(ROOT, abs) + ' -> ' + sub.info.kind; sub.info.courseAllow = courseAllowFor(abs); return sub; }
    if (rel[0] === 'tools' && rel[1] === 'i18n' && rel[2] && fs.existsSync(path.join(abs, 'ui.json'))) { const sub = collect(path.join(abs, 'ui.json'), opts); sub.info.courseAllow = courseAllowFor(abs); return sub; }
    const files = fs.readdirSync(abs).filter(f => /\.(js|json|tsv|txt)$/.test(f) && !/^(rpa_check|coverage)\.js$/.test(f)).map(f => path.join(abs, f));
    files.forEach(f => { try { const sub = collect(f, opts); sub.items.forEach(x => { x.file = path.basename(f); items.push(x); }); } catch (e) { items.push({ text: '', path: path.basename(f), lang: 'unmapped', error: e.message }); } });
    return { items, info: { kind: 'folder', id: target } };
  }
  const ext = path.extname(target).toLowerCase(); const src = fs.readFileSync(target, 'utf8');
  if (ext === '.js' && /LANGAPP_PACKS\s*\.\s*(course|i18n)/.test(src)) {
    const pk = loadPackFile(target);
    if (pk.course) { const c = pk.course; info = { kind: c.native === HM ? c.id + ' (Hmong = learner language)' : c.target === HM ? c.id + ' (Hmong = target)' : c.id + ' (no Hmong side: smoke run)', id: c.id, native: c.native, target: c.target }; walkPack(c, sink); }
    else if (pk.i18n) { info = { kind: 'interface pack ' + pk.i18n[0], id: pk.i18n[0] }; walkI18n(pk.i18n[0], pk.i18n[1], sink); }
    info.courseAllow = courseAllowFor(target); return { items, info };
  }
  if (ext === '.json') { const j = JSON.parse(src); if (j && j.exact) { const code = j.lang || (path.basename(path.dirname(target)) === 'hmn' ? 'hmn' : 'hmn'); info = { kind: 'ui.json (' + code + ')', id: target }; walkI18n(HM, j, sink); info.courseAllow = courseAllowFor(target); return { items, info }; } }
  if (ext === '.tsv') {
    const rows = src.split('\n').filter(l => l.trim() && !/^#/.test(l)).map(l => l.split('\t')); const head = rows[0].map(h => h.trim().toLowerCase());
    let col = opts.fields && opts.fields.length ? head.indexOf(opts.fields[0].toLowerCase()) : head.findIndex(h => /^(hmn|hmong|rpa|word|headword|hmoob|hmong \(rpa\))$/.test(h));
    const hasHead = col >= 0 || head.some(h => /^(en|english|gloss|meaning|pos|source|notes?)$/.test(h)); if (col < 0) col = 0;
    rows.slice(hasHead ? 1 : 0).forEach((r, i) => sink({ text: r[col] || '', path: 'line ' + (i + (hasHead ? 2 : 1)) + ' col ' + (hasHead ? head[col] : col + 1), lang: 'hmn', mixed: false, distractor: false, fragment: false, role: 'H' }));
    return { items, info: { kind: 'tsv column ' + (hasHead ? head[col] : col + 1), id: target } };
  }
  src.split('\n').forEach((l, i) => sink({ text: l, path: 'line ' + (i + 1), lang: 'hmn', mixed: !!opts.mixed, distractor: false, fragment: false, role: 'H' }));
  return { items, info: { kind: 'plain text', id: target } };
}
/* English words of an input (its English fields), tolerated inside Hmong prose of an hmn-en pack */
function englishVocab(items) {
  const s = new Set(); items.forEach(x => { if (x.lang === 'en') String(x.text).replace(/<[^>]*>/g, ' ').toLowerCase().split(/[^a-z'’]+/).forEach(w => { w = w.replace(/^['’]+|['’]+$/g, ''); if (w) { s.add(w); s.add(w.replace(/['’]s$/, '')); } }); });
  return s;
}
/* English words of every other course in packs/ (their English sides): tolerated inside the Hmong prose of an hmn-en pack, which quotes English
   grammar words (be, teacher…) that its own English fields may lack. Cached in the OS temp dir by the packs' sizes and mtimes. */
function englishCorpus() {
  const dir = path.join(ROOT, 'packs'); if (!fs.existsSync(dir)) return new Set();
  const files = fs.readdirSync(dir).filter(f => /^course-[a-z]+-[a-z]+\.js$/.test(f) && !/-hmn\.js$|^course-hmn-/.test(f));
  const sig = files.map(f => { const st = fs.statSync(path.join(dir, f)); return f + ':' + st.size + ':' + st.mtimeMs; }).join('|');
  const cache = path.join(os.tmpdir(), 'hmong-english-corpus-v2.json');
  try { const c = JSON.parse(fs.readFileSync(cache, 'utf8')); if (c.sig === sig) return new Set(c.words); } catch (e) {}
  const keep = HM; const items = [];
  for (const f of files) { try { const c = loadPackFile(path.join(dir, f)).course; if (!c || c.target !== 'en' || c.native === 'en') continue; HM = c.native; walkPack(c, x => { if (x.lang === 'en' && /^T/.test(x.role)) items.push(x); }); } catch (e) {} } /* only the English that X-en courses TEACH (card fronts, examples, dialogue lines, answers): English prose of en-X courses quotes their target languages (kung, po…) */
  HM = keep; const words = englishVocab(items); try { fs.writeFileSync(cache, JSON.stringify({ sig, words: [...words] })); } catch (e) {}
  return words;
}
/* tokens of the Hmong side of an input, with what checkToken says about each */
function hmongTokens(target, opts) {
  opts = opts || {}; const { items, info } = collect(target, opts); const english = englishVocab(items); const allowList = opts.allowFile ? loadAllow(opts.allowFile) : loadAllowWith(info.courseAllow);
  if (info.target === 'en' && !opts.noCorpus) englishCorpus().forEach(w => english.add(w)); /* hmn-en: the learner's prose quotes English */
  const fields = (opts.fields || []).map(f => f.toLowerCase()); const out = [], unmapped = []; let seqNo = 0; /* seq: which string a token came from (coverage joins neighbours) */
  for (const it of items) {
    if (it.lang === 'unmapped') { unmapped.push(it); continue; }
    const top = String(it.path).split(/[.{\[<]/)[0].toLowerCase();
    let lang = it.lang; if (lang === 'pron' && (opts.pron || fields.includes('pron'))) lang = 'hmn';
    if (fields.length && !/^tsv/.test(info.kind) && !fields.includes(top) && !(it.lang === 'pron' && fields.includes('pron'))) continue;
    const hmnSide = info.target === HM || info.native === HM || !info.native;
    if (lang === 'either' && hmnSide) lang = 'hmn';
    if (lang !== 'hmn') continue;
    const mixed = it.mixed || it.role === 'O' || it.role === 'Od' || !!opts.mixed;
    const txt = !mixed && /^T/.test(it.role || '') ? it.text.replace(/\([^()]*\)/g, m => ' '.repeat(m.length)) : it.text; /* en-hmn: "pob (ball)" — a bracket in a target field is an English gloss */
    const r = checkText(txt, { english: mixed ? english : null, allowList, allow: allowList.words, greenOk: !!opts.greenOk, strictNames: !mixed && !opts.namesOk }); /* in a pure Hmong field a capitalised non-RPA word must be in ALLOW.txt (RPA.md §6); in Hmong prose that quotes English it is a warning */
    const gaps = []; if (it.fragment) { const re = /_{2,}/g; let g; while ((g = re.exec(it.text))) gaps.push([g.index, g.index + g[0].length]); }
    r.tokens.forEach(t => {
      if (gaps.some(([a, z]) => t.start + t.token.length === a || t.start === z)) return; /* a fill gap splits a word: its pieces are not words */
      if (it.fragment && !gaps.length && r.tokens.length === 1 && t.kind === 'illegal') { t.ok = true; t.kind = 'fragment'; } /* a fill answer that is part of a word (a letter, an onset) */
      if (it.distractor && !opts.distractors && t.ok) return;
      out.push(Object.assign(t, { path: (it.file ? it.file + ' › ' : '') + it.path, distractor: !!it.distractor, text: it.text, role: it.role, seq: seqNo })); }); seqNo++;
  }
  info.allowFile = allowList.file; return { tokens: out, unmapped, info, english };
}

function report(target, opts) {
  const { tokens, unmapped, info } = hmongTokens(target, opts);
  const errs = tokens.filter(t => !t.ok && !t.distractor), dis = tokens.filter(t => !t.ok && t.distractor);
  const by = k => { const m = new Map(); tokens.filter(t => t.kind === k).forEach(t => { const e = m.get(t.token) || { n: 0, at: [] }; e.n++; if (e.at.length < 3) e.at.push(t.path); m.set(t.token, e); }); return [...m.entries()].sort((a, b) => b[1].n - a[1].n); };
  if (opts.json) { console.log(JSON.stringify({ input: target, kind: info.kind, tokens: tokens.length, errors: errs, distractors: dis, joined: by('joined'), names: by('name'), unmapped: unmapped.map(u => u.path + (u.error ? ' ' + u.error : '')) }, null, 1)); return errs.length || unmapped.length ? 1 : 0; }
  console.log('rpa_check · ' + target + ' · ' + info.kind + ' · ' + tokens.length + ' Hmong tokens checked' + (fs.existsSync(path.join(__dirname, 'ALLOW.txt')) ? ' · allow: ' + path.relative(ROOT, String(info.allowFile || '')).replace(/^\.\.\/.*\/(?=[^/]+$)/, '') : ' · (no ALLOW.txt)'));
  const grp = list => { const m = new Map(); list.forEach(t => { const k = t.token + '\u0000' + (t.reason || t.kind); const e = m.get(k) || { t, n: 0, at: [] }; e.n++; if (e.at.length < 4) e.at.push(t.path); m.set(k, e); }); return [...m.values()].sort((a, b) => b.n - a.n); };
  if (unmapped.length) { console.log('\nUNMAPPED pack paths (this tool does not know what language they hold; teach walkPack):'); unmapped.slice(0, 40).forEach(u => console.log('  ' + u.path + (u.error ? ' :: ' + u.error : ''))); }
  if (errs.length) { console.log('\nERRORS (' + errs.length + '):'); grp(errs).forEach(e => console.log('  ' + e.t.token.padEnd(14) + ' ×' + e.n + '  ' + (e.t.kind === 'green' ? 'GREEN ' : '') + (e.t.reason || '') + '\n      at ' + e.at.join(' · '))); }
  if (!opts.quiet) {
    const j = by('joined'); if (j.length) { console.log('\nrun-together syllables (RPA writes each syllable as its own word) — warning:'); j.slice(0, 40).forEach(([w, e]) => console.log('  ' + w.padEnd(16) + ' ×' + e.n + '  ' + e.at.join(' · '))); }
    const mg = by('marginal').concat(by('dtone'), by('greenword')); if (mg.length) { console.log('\nmarginal onsets (nl hnl g), -d outside the phrase-final set, Green word forms from the glossary notes — warning:'); mg.forEach(([w, e]) => console.log('  ' + w.padEnd(16) + ' ×' + e.n + '  ' + e.at.join(' · '))); }
    const n = tokens.filter(t => t.kind === 'name' && t.ok).length ? by('name').filter(([w]) => tokens.some(t => t.token === w && t.ok)) : []; if (n.length) { console.log('\ncapitalised non-RPA words in Hmong prose, taken as names (add real ones to ALLOW.txt) — warning:'); n.slice(0, 60).forEach(([w, e]) => console.log('  ' + w.padEnd(16) + ' ×' + e.n + '  ' + e.at.join(' · '))); }
    if (dis.length) { console.log('\nintentional distractors that are not legal RPA (info only):'); grp(dis).slice(0, 30).forEach(e => console.log('  ' + e.t.token.padEnd(14) + ' ×' + e.n + '  ' + (e.t.reason || ''))); }
  }
  console.log('\n' + (errs.length || unmapped.length ? 'RPA FAIL: ' + errs.length + ' error token(s), ' + unmapped.length + ' unmapped path(s)' : 'RPA OK'));
  return errs.length || unmapped.length ? 1 : 0;
}

/* ---- self-test ---- */
function selftest() {
  const LEGAL = ('kuv koj nws peb nej lawv wb neb nkawd yog tsis muaj nyob mus los tuaj noj haus pw ua hais lus Hmoob dawb ntsuab zoo siab txiv niam tus lub ib ob plaub tsib rau xya yim cuaj kaum ' +
    'nees nkaum puas li cas ntawm ntawd hnub hmo ntuj dej nqaij mov zaub qab tsev kawm ntawv xyoo hli ntxhais tub nplooj phau txhua hlub nyiaj khoom qhia dhia ntshai tshiab ntsib nkauj hnav ' +
    'nraug nrog nthuav xav yuav cov thiab kev sib tham txhais nplhaib ntxiv txawj paub pom hnov hu choj aub os ib hmov nphau plhom rhuav nrhiav nqhis nchuav hnyav hmlos mluas xyaum Kuv HMOOB').split(' ');
  const ILLEGAL = ('kun hello thank you bab jaj kuvv kuvb xyz mpo bus ka\'u kúv kŭv aai ow ey ngai tlh zhoo shoo rr pt ks ae eo uua iaa txhh nyy hmm brr ok street tsht qqa nng ' +
    'kuvś wbb aubé iu oi').split(' ');
  const GREEN = 'dlej naag dlaim ndlwg dlhau ndlhuav dlev plaab'.split(' ');
  /* RPA.md §8: 40 glossary headwords covering every White onset but nqh, every vowel and tone */
  const SPEC40 = ['ib tag hmo', 'nees nkaum cuaj', 'mus kav khw', 'tsev hais plaub', 'siab zoo', 'ntawd', 'qaug dab peg', 'hnub dhau los', 'hli nra', 'raug nqi', 'xas npus', 'chaw nyob', 'pheej yig', 'qhov ntxa', 'thov txim', 'viv ncaus', 'xyoo tshiab', 'nyob zoo', 'dej', 'niam txiv',
    'nplooj ntsws', 'fab', 'rho', 'ncho', 'nrho', 'plhu', 'txha', 'hmlos', 'hnyav', 'mloog', 'nphau', 'ntxhw', 'nkhaus', 'nplhos', 'nthuav', 'ntshai', 'ua tsaug', 'pog', 'pov', 'kuv nco koj'];
  let fail = 0, n = 0; const t = (c, m) => { n++; if (!c) { fail++; console.log('FAIL ' + m); } };
  const none = { allow: new Set(), english: null, sentenceStart: true, strictCaps: true };
  LEGAL.forEach(w => { const r = checkToken(w, none); t(r.ok && r.kind === 'rpa', 'legal ' + w + ' -> ' + r.kind + ' ' + (r.reason || '')); });
  ILLEGAL.forEach(w => { const r = checkToken(w, none); t(!r.ok, 'illegal ' + w + ' -> ' + r.kind); });
  GREEN.forEach(w => { const r = checkToken(w, none); t(!r.ok && r.kind === 'green', 'green ' + w + ' -> ' + r.kind); t(checkToken(w, Object.assign({}, none, { greenOk: true })).ok, 'green-ok ' + w); });
  SPEC40.forEach(w => { const r = checkText(w, { allow: new Set() }); t(!r.errors.length && r.tokens.every(x => x.kind === 'rpa'), 'RPA.md §8 ' + w + ' ' + JSON.stringify(r.tokens.map(x => x.kind))); });
  /* RPA.md §8 negative tests */
  ['goob', 'gab', 'hnlo'].forEach(w => t(checkToken(w, none).kind === 'marginal' && checkToken(w, none).ok, 'marginal onset ' + w));
  t(checkToken('nloog', none).kind === 'marginal' && checkToken('nloog', none).ok, 'nloog marginal (flag, not fail)');
  ['kuvb', 'bus', 'wa', 'phô', 'kheej7'].forEach(w => t(!checkToken(w, none).ok, 'RPA.md negative ' + w));
  t(!checkToken('Monday', { allow: new Set(), strictNames: true }).ok && checkToken('Monday', { allow: new Set(['monday']), strictNames: true }).ok, 'Monday fails in a Hmong field unless allow-listed');
  t(checkToken("'os", none).kind === 'rpa', 'leading apostrophe stripped');
  if (greenLex().size) t(checkToken('moog', none).kind === 'greenword' && checkToken('av', none).kind === 'rpa', 'Green word forms from GLOSSARY.tsv notes warn (moog), White homographs do not (av)');
  t(checkToken('kheej7', none).kind === 'illegal' && checkToken('V1', none).ok && checkToken('mp3', none).ok, 'digits: reduplication fails, codes pass');
  t(checkToken('ntxh', none).kind === 'letter' && checkToken('b', none).kind === 'letter', 'bare onsets and tone letters are letters');
  t(checkToken('ntawd', none).kind === 'rpa' && checkToken('kud', none).kind === 'dtone', '-d set');
  /* parse shape */
  const p = checkToken('ntxhais', none).parse; t(p && p.onset === 'ntxh' && p.vowel === 'ai' && p.tone === 's', 'parse ntxhais ' + JSON.stringify(p));
  const q = checkToken('Hmoob', none).parse; t(q && q.onset === 'hm' && q.vowel === 'oo' && q.tone === 'b', 'parse Hmoob ' + JSON.stringify(q));
  /* names, numbers, allow, run-together, English in mixed text */
  t(checkToken('Vang', { allow: new Set(), sentenceStart: false }).kind === 'name', 'Vang is a name (capitalised, mid-sentence)');
  t(checkToken('Xiong', { allow: new Set(['xiong']) }).kind === 'allow', 'Xiong from allow list');
  t(checkToken('vang', { allow: new Set() }).ok === false, 'lower-case vang is not RPA');
  t(checkToken('2024', none).kind === 'number' && checkToken('10:30', none).ok, 'numerals tolerated');
  t(checkToken('niamtxiv', none).kind === 'joined', 'niamtxiv is run-together');
  t(checkToken('USA', none).kind === 'acronym', 'acronym');
  t(checkToken('hello', { allow: new Set(), english: new Set(['hello']) }).kind === 'english', 'English word tolerated in mixed text');
  const tx = checkText('Kuv nyob St. Paul, Minnesota. Kuv muaj 3 tus menyuam!', { allowList: { words: new Set(['minnesota']), phrases: ['St. Paul'] }, allow: new Set(['minnesota']) });
  t(tx.errors.length === 0 && tx.tokens.some(x => x.kind === 'joined' && x.token === 'menyuam'), 'checkText sentence with allow phrase, numeral, run-together word: ' + JSON.stringify(tx.errors.map(e => e.token)));
  const t2 = checkText('Nws hais tias "hello" thiab mus tsev.', { allow: new Set() }); t(t2.errors.length === 1 && t2.errors[0].token === 'hello', 'checkText finds the one illegal token');
  const t3 = checkText('niam-txiv <b>zoo</b> &amp; Hmoob', { allow: new Set() }); t(t3.errors.length === 0 && t3.tokens.length === 4, 'hyphen parts + HTML stripped: ' + JSON.stringify(t3.tokens.map(x => x.token)));
  /* emoji selectors and IPA between slashes are not Hmong; slashes between Hmong words still are */
  t(checkText('\u2328\uFE0F Ntaus \u2764\uFE0F \u{1F468}\u200D\u{1F469} \u02C8 nyob ua ntej', { allow: new Set() }).errors.length === 0, 'U+FE0F / U+200D after an emoji and a lone stress mark ignored');
  const ip = checkText('Nrog lub qa: /\u00F0/ hauv this; /\u02C8d\u028Cb\u0259lju\u02D0/, /t\u025D\u02D0n\u203F\u026At/, /ks/: six', { allow: new Set(), english: new Set(['this', 'six']) }); t(ip.errors.length === 0 && !ip.tokens.some(x => x.token === 'ks'), 'IPA spans skipped: ' + JSON.stringify(ip.errors.map(e => e.token)));
  const sl = checkText('kuv/kun/nws thiab tus / tuug', { allow: new Set() }); t(JSON.stringify(sl.errors.map(e => e.token)) === '["kun","tuug"]', 'slashes between Hmong words still read: ' + JSON.stringify(sl.errors.map(e => e.token)));
  /* the field map on the two fixture packs (one per direction): exactly the planted errors, English inside Hmong prose tolerated, distractors never errors */
  const fx = f => hmongTokens(path.join(__dirname, 'fixtures', f), { noCorpus: false });
  const A = fx('course-en-hmn.sample.js'), AE = A.tokens.filter(x => !x.ok && !x.distractor).map(x => x.token).sort();
  t(JSON.stringify(AE) === JSON.stringify(['dlej', 'kun']), 'en-hmn fixture errors = dlej, kun: ' + JSON.stringify(AE));
  t(A.tokens.some(x => x.distractor && x.token === 'nyop') && !A.tokens.some(x => x.token === 'ball') && !A.tokens.some(x => /^(Hello|Thank|water)$/i.test(x.token)), 'en-hmn: distractors kept apart, English fields and glosses skipped');
  t(A.tokens.some(x => x.path.includes('<k#0>') && x.token === 'pob') && A.tokens.some(x => x.path.includes('{{ex#0}}[0]') && x.token === 'kuv'), 'en-hmn: lesson td.k and {{ex:}} target read');
  t(!A.tokens.some(x => /\{\{ex#0\}\}\[1\]/.test(x.path)), 'en-hmn: pron skipped');
  const B = fx('course-hmn-en.sample.js'), BE = B.tokens.filter(x => !x.ok && !x.distractor).map(x => x.token).sort();
  t(JSON.stringify(BE) === JSON.stringify(['kung']), 'hmn-en fixture errors = kung: ' + JSON.stringify(BE));
  t(B.tokens.some(x => x.token === 'am' && x.kind === 'english' || x.token === 'teacher' && x.kind === 'english') && !B.tokens.some(x => x.path.includes('[0:order].a')), 'hmn-en: English in Hmong prose tolerated; English answers not read');
  t(!A.unmapped.length && !B.unmapped.length, 'fixtures: no unmapped paths');
  console.log('selftest: ' + LEGAL.length + ' legal + ' + SPEC40.length + ' RPA.md §8 entries, ' + ILLEGAL.length + ' illegal, ' + GREEN.length + ' Green, ' + n + ' checks · ' + (fail ? 'FAIL ' + fail : 'OK'));
  return fail ? 1 : 0;
}

module.exports = { setLang: l => { HM = l; }, checkToken, checkText, tokenize, syllable, segment, collect, walkPack, hmongTokens, englishVocab, loadAllow, ONSETS, VOWELS, TONES, GREEN_ONSETS, GREEN_VOWELS };

if (require.main === module) {
  const a = process.argv.slice(2); if (!a.length || a.includes('-h') || a.includes('--help')) { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(a.length ? 0 : 2); }
  if (a.includes('--selftest')) { process.exitCode = selftest(); return; }
  const opts = { fields: [], namesOk: a.includes('--names-ok'), pron: a.includes('--pron'), distractors: a.includes('--distractors'), greenOk: a.includes('--green-ok'), json: a.includes('--json'), quiet: a.includes('--quiet'), mixed: a.includes('--mixed') };
  const files = []; for (let i = 0; i < a.length; i++) { if (a[i] === '--field') { (a[++i] || '').split(',').filter(Boolean).forEach(f => opts.fields.push(f)); } else if (a[i] === '--allow') opts.allowFile = a[++i]; else if (!/^--/.test(a[i])) files.push(a[i]); }
  const li = a.indexOf('--lang'); if (li >= 0) { HM = a[li + 1]; files.splice(files.indexOf(HM), 1); }
  let rc = 0; for (const f of files) { try { rc |= report(f, opts); } catch (e) { console.log('rpa_check: ' + e.message); rc = 2; } }
  process.exitCode = rc;
}
