#!/usr/bin/env node
/* Lang App · two halves: PROOF that target/ko + native/en/ko reassemble into the built-in en-ko course.
   Two comparisons, both printed difference by difference:
     A. raw data: the assembled pack's tables against COURSES['en-ko'] / PRACTICE_BUILTIN / greet() (deep, exact; lesson bodies after expanding tokens and DOM-normalising)
     B. runtime path: the pack is pushed through the app's own validCourse() + setCourseTables() (the path every pack takes: cleanLessonHTML, cleanPractice,
        GOALS filter, lesson-deck filter …) and the resulting globals are compared with the globals the built-in course sets.
   {{strokes:X}} has no runtime support yet: the proof expands it with the app's strokeSVG() exactly as the built-in lesson does, and lists it as needing the lead.
   Usage: node tools/halves/proof.js      (HALVES_DIR=<dir> to prove another copy; exit 1 when any difference) */
'use strict';
const L = require('./lib.js');
const { assemble } = require('./assemble.js');

const ORDER = [];
function diff(a, b, p, out) {
  if (out.length > 5000) return out;
  if (a === b) return out;
  const ta = Array.isArray(a) ? 'array' : a === null ? 'null' : typeof a, tb = Array.isArray(b) ? 'array' : b === null ? 'null' : typeof b;
  if (ta !== tb) { out.push(p + ': type ' + ta + ' vs ' + tb + ' :: ' + JSON.stringify(a).slice(0, 120) + ' | ' + JSON.stringify(b).slice(0, 120)); return out; }
  if (ta === 'array') { if (a.length !== b.length) out.push(p + ': length ' + a.length + ' vs ' + b.length); for (let i = 0; i < Math.min(a.length, b.length); i++) diff(a[i], b[i], p + '[' + i + ']', out); return out; }
  if (ta === 'object') { const ka = Object.keys(a), kb = Object.keys(b); ka.filter(k => !(k in b)).forEach(k => out.push(p + '.' + k + ': only in built-in')); kb.filter(k => !(k in a)).forEach(k => out.push(p + '.' + k + ': only in assembled')); if (ka.filter(k => k in b).join('\u0001') !== kb.filter(k => k in a).join('\u0001')) { if (/\.(DECKS|"DECKS")$/.test(p)) out.push(p + ': key order differs'); else ORDER.push(p); } /* key order only matters for DECKS (ungrouped decks follow it); elsewhere objects are looked up by key */ ka.filter(k => k in b).forEach(k => diff(a[k], b[k], p + '.' + JSON.stringify(k), out)); return out; }
  out.push(p + ': ' + JSON.stringify(a).slice(0, 160) + ' ≠ ' + JSON.stringify(b).slice(0, 160)); return out;
}

(async () => {
  const { pack, missing } = assemble('en', 'ko', { lenient: true });
  const { browser, page, errs } = await L.openApp();
  const R = await page.evaluate(pk => {
    const J = x => JSON.parse(JSON.stringify(x === undefined ? null : x));
    const norm = h => { const t = document.createElement('template'); t.innerHTML = String(h); return t.innerHTML.replace(/\s+/g, ' ').replace(/> </g, '><').trim(); };
    const strokes = h => String(h).replace(/\{\{strokes:([^}]*)\}\}/g, (m, ch) => '<div class="sgl" data-replay="1"><div class="k">' + ch + '</div>' + strokeSVG(ch).replace(/<button[^>]*>.*?<\/button>/, '') + '</div>');
    const B = COURSES['en-ko'];
    const greetAt = () => { const real = Date.prototype.getHours, o = []; try { for (const h of [2, 9, 14, 20]) { Date.prototype.getHours = () => h; o.push(greet()); } } finally { Date.prototype.getHours = real; } return o; };
    const snap = () => ({ DECKS: J(Object.fromEntries(Object.entries(DECKS).filter(([k]) => k !== MYDECK))), GROUPS: J(GROUPS.map(g => [g[0], g[1].filter(d => d !== MYDECK)])), PATH: J(PATH.filter(d => d !== MYDECK)), TAGS: J(TAGS), DESC: J(DESC), DIALOG: J(DIALOG), EXAMPLES: J(EXAMPLES), CHECKS: J(CHECKS), PATTERNS: J(PATTERNS), PAIRS: J(PAIRS), GOALS: J(GOALS), PLAN_PRESETS: J(PLAN_PRESETS), TITLES: J(TITLES), PAUSE_SETS: J(PAUSE_SETS), IDIOMS: J(IDIOMS), PRACTICE: J(PRACTICE), LESSONS: LESSONS.map(l => ({ id: l.id, title: l.title, blurb: l.blurb, deck: l.deck, body: norm(B === COURSE && COURSE.builtin ? l.body : strokes(expandEx(l.body))) })), GREET: greetAt() });
    /* built-in globals */
    setCourseTables(B); const builtin = snap();
    /* raw built-in data for comparison A */
    const raw = { DECKS: J(Object.fromEntries(Object.entries(B.DECKS).filter(([k]) => k !== MYDECK))), GROUPS: J(B.GROUPS.map(g => [g[0], g[1].filter(d => d !== MYDECK)])), TAGS: J(B.TAGS), DESC: J(B.DESC), DIALOG: J(B.DIALOG), EXAMPLES: J(B.EXAMPLES), PATTERNS: J(B.PATTERNS), CHECKS: J(B.CHECKS), PRACTICE: J(PRACTICE_BUILTIN), GOALS: J(B.GOALS), PLAN_PRESETS: J(B.PLAN_PRESETS), TITLES: J(B.TITLES), PAIRS: J(B.PAIRS), PAUSE: J(B.PAUSE), name: J(B.name), brand: B.brand, introWord: B.introWord, ttsLang: B.ttsLang, GREET: builtin.GREET,
      LESSONS: B.LESSONS.map(l => ({ id: l.id, title: l.title, blurb: l.blurb, deck: l.deck, body: norm(l.body) })) };
    /* the assembled pack through the runtime pack path */
    const valid = validCourse(pk.id, pk);
    const cleaned = pk.LESSONS.filter(l => cleanLessonHTML(l.body) !== l.body).map(l => l.id);
    const was = COURSE; COURSE = pk; let packed;
    try { setCourseTables(pk); packed = snap(); } finally { COURSE = was; setCourseTables(B); }
    const asm = { LESSONS: pk.LESSONS.map(l => ({ id: l.id, title: l.title, blurb: l.blurb, deck: l.deck, body: norm(strokes(expandEx(l.body))) })) };
    const exact = pk.LESSONS.filter((l, i) => strokes(expandEx(l.body)) === B.LESSONS[i].body).length;
    return { builtin, raw, packed, valid, cleaned, asm, exact };
  }, pack);
  await browser.close();

  const A = [], Bd = [];
  const rawPack = { DECKS: pack.DECKS, GROUPS: pack.GROUPS, TAGS: pack.TAGS, DESC: pack.DESC, DIALOG: pack.DIALOG, EXAMPLES: pack.EXAMPLES, PATTERNS: pack.PATTERNS, CHECKS: pack.CHECKS, PRACTICE: pack.PRACTICE, GOALS: pack.GOALS, PLAN_PRESETS: pack.PLAN_PRESETS, TITLES: pack.TITLES, PAIRS: pack.PAIRS, PAUSE: pack.PAUSE, name: pack.name, brand: pack.brand, introWord: pack.introWord, ttsLang: pack.ttsLang, GREET: pack.GREET, LESSONS: R.asm.LESSONS };
  diff(R.raw, rawPack, 'raw', A);
  diff(R.builtin, R.packed, 'runtime', Bd);
  const strokeTok = pack.LESSONS.reduce((n, l) => n + (l.body.match(/\{\{strokes:/g) || []).length, 0);
  console.log('== PROOF en-ko: target/ko + native/en/ko vs built-in ==');
  console.log('validCourse(pack): ' + R.valid + (missing.length ? '   missing native rows: ' + missing.length : ''));
  missing.slice(0, 50).forEach(m => console.log('  MISSING ' + m));
  console.log('A. raw data differences: ' + A.length); A.slice(0, 400).forEach(x => console.log('  ' + x));
  console.log('B. runtime-path differences: ' + Bd.length); Bd.slice(0, 400).forEach(x => console.log('  ' + x));
  console.log('key-order-only differences (no runtime effect, not counted): ' + ORDER.length + (ORDER.length ? ' e.g. ' + ORDER.slice(0, 3).join(', ') : ''));
  console.log('lesson bodies byte-identical to the built-in after token expansion (before DOM normalising): ' + R.exact + '/' + pack.LESSONS.length);
  console.log('cleanLessonHTML changed ' + R.cleaned.length + ' assembled bod' + (R.cleaned.length === 1 ? 'y' : 'ies') + (R.cleaned.length ? ': ' + R.cleaned.join(', ') : ''));
  console.log('needs runtime support (not a data difference): {{strokes:X}} × ' + strokeTok + ' in ' + pack.LESSONS.filter(l => /\{\{strokes:/.test(l.body)).map(l => l.id).join(', ') + ' (expanded here with strokeSVG; the current pack path would show the token text)');
  if (errs.length) console.log('page errors: ' + errs.slice(0, 3).join(' | '));
  process.exit(A.length || Bd.length || missing.length || !R.valid || R.cleaned.length ? 1 : 0);
})().catch(e => { console.error('proof: ' + e.stack); process.exit(2); });
