/* Lang App · two halves: shared helpers (page loading, file IO, text checks). See docs/HALVES-SPEC.md. */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os');
const ROOT = path.resolve(__dirname, '..', '..');
const HALVES = __dirname;
const SRC = process.env.HALVES_SRC || path.join(ROOT, 'src', 'app.html'); /* the en-ko data section is identical in src/app.html and the built file; src is 20x smaller */

/* open the app in headless chromium and hand back the page (caller closes the browser) */
async function openApp() {
  const { chromium } = require('playwright');
  const h = fs.readFileSync(SRC, 'utf8');
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'halves-'));
  const page = path.join(tmp, 'page.html');
  fs.writeFileSync(page, '<!doctype html><html><head><meta charset=utf8></head><body>' + h + '</body></html>');
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1024, height: 800 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.route('**/fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await p.route('**/*.supabase.co/**', r => r.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
  await p.goto('file://' + page);
  await p.waitForTimeout(150);
  return { browser, page: p, errs };
}

/* the live built-in en-ko course, as plain JSON */
async function liveBuiltin(page) {
  return page.evaluate(() => {
    const c = COURSES['en-ko'];
    const pick = k => JSON.parse(JSON.stringify(c[k] === undefined ? null : c[k]));
    const o = {};
    ['id', 'native', 'target', 'ttsLang', 'name', 'brand', 'DECKS', 'GROUPS', 'TAGS', 'DESC', 'DIALOG', 'EXAMPLES', 'LESSONS', 'CHECKS', 'PATTERNS', 'PAIRS', 'GOALS', 'PLAN_PRESETS', 'TITLES', 'PAUSE', 'introWord'].forEach(k => o[k] = pick(k));
    o.PRACTICE = JSON.parse(JSON.stringify(PRACTICE_BUILTIN));
    o.GREET_T = JSON.parse(JSON.stringify(GREET_T));
    o.STROKES = Object.keys(STROKES);
    o.MYDECK = MYDECK;
    return o;
  });
}

/* ---------- files ---------- */
function readJSON(f) { return JSON.parse(fs.readFileSync(f, 'utf8')); }
/* one JSON object per line, keys in a fixed order: diff-friendly, and JSON string escaping makes | tab " < > safe */
function writeJSONL(f, rows) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, rows.map(r => JSON.stringify(r)).join('\n') + (rows.length ? '\n' : '')); }
function readJSONL(f) { if (!fs.existsSync(f)) return []; return fs.readFileSync(f, 'utf8').split('\n').filter(l => l.trim()).map((l, i) => { try { return JSON.parse(l); } catch (e) { throw new Error(f + ':' + (i + 1) + ' bad JSON: ' + e.message); } }); }
function writeJSON(f, o) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, JSON.stringify(o, null, 1) + '\n'); }
function byId(rows) { const m = new Map(); rows.forEach(r => m.set(r.id, r)); return m; }

/* ---------- text checks ---------- */
const HANGUL_RX = /[ᄀ-ᇿ㄰-㆏가-힯ꥠ-꥿ힰ-퟿]+(?:[ᄀ-ᇿ㄰-㆏가-힯ꥠ-꥿ힰ-퟿]+)*/g;
const hasHangul = s => /[ᄀ-ᇿ㄰-㆏가-힯]/.test(String(s || ''));
/* the multiset of Hangul runs, sorted: what a translation must keep untouched */
function hangulSet(s) { return (String(s || '').match(HANGUL_RX) || []).slice().sort(); }
function sameHangul(a, b) { const x = hangulSet(a), y = hangulSet(b); return x.length === y.length && x.every((v, i) => v === y[i]); }
/* a value that is Korean material rather than prose: has Hangul and no Latin letters (allowing a few markers) */
function isKoreanValue(s) { s = String(s == null ? '' : s); return hasHangul(s) && !/[A-Za-z]/.test(s); }
const TOKEN_RX = /\{\{[a-z]+:[^}]*\}\}/g;
function tokens(s) { return (String(s || '').match(TOKEN_RX) || []); }
function words(s) { return (String(s || '').replace(/<[^>]+>/g, ' ').replace(TOKEN_RX, ' ').match(/[A-Za-zÀ-ɏ']+/g) || []).length; }

/* ---------- targets other than Korean (docs/briefs/vi-zh-design.md) ----------
   Each target names the field that holds its text in the target half (ko → "ko", zh → "zh"), the script whose runs a native string must keep
   ("protected runs": Hangul for ko, Han characters for zh), and how a quiz option or hint is told apart from prose. Korean keeps the original helpers above. */
const HAN_RX = /[㐀-䶿一-鿿豈-﫿]+/g;
const hasHan = s => /[㐀-䶿一-鿿豈-﫿]/.test(String(s || ''));
const PIN_MARK = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜĀÁǍÀĒÉĚÈŌÓǑÒ]/;
const PIN_NEUTRAL = /^(ma|ne|ba|le|de|a|zhe|guo|men|ge|zi|bu|yi|r)$/i; /* toneless syllables that occur alone in quiz options (Qù bu qù?, yí ge rén) */
const PIN_INITIAL = /^(zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])$/;            /* a bare pinyin initial as a quiz option ("q", "zh") is language-neutral material */
let PIN_RX = null;
function pinyinRx() { if (!PIN_RX) { const p = path.join(ROOT, 'tools', 'target', 'zh', 'profile.json'); PIN_RX = new RegExp(readJSON(p).pronPattern); } return PIN_RX; }
/* a whole string of pinyin: passes the course's own pronPattern and every word carries a tone mark (or is a known toneless syllable), so "bú, rising" is prose */
function isPinyin(s) { s = String(s == null ? '' : s).trim(); if (!s) return false; if (PIN_INITIAL.test(s)) return true; return pinyinRx().test(s) && s.split(/[\s,.?!:;]+/).filter(Boolean).every(w => PIN_MARK.test(w) || PIN_NEUTRAL.test(w)); }
const isChineseValue = s => { s = String(s == null ? '' : s); return (hasHan(s) && !/[A-Za-zÀ-ɏ]/.test(s)) || isPinyin(s); };
/* Cantonese (yue): Traditional Han text with Jyutping (tone digits 1-6) as the reading. A whole string of Jyutping passes the en-yue profile's pronPattern;
   a bare Jyutping initial or final as a quiz option ("gw", "j", "oe") is language-neutral material, as pinyin initials are for zh. */
const JYU_INITIAL = /^(ng|gw|kw|[bpmfdtnlgkhwzcsj])$/;
const JYU_FINAL = /^(aang|oeng|aai|aau|aam|aan|aap|aat|aak|ang|eng|ing|ong|ung|oet|oek|eoi|eon|eot|yun|yut|aa|ai|au|am|an|ap|at|ak|ei|eu|em|en|ep|et|ek|iu|im|in|ip|it|ik|oi|ou|on|ot|ok|ui|um|un|up|ut|uk|oe|eo|yu|a|e|i|o|u)$/;
let JYU_RX = null;
function jyutpingRx() { if (!JYU_RX) { const p = path.join(ROOT, 'tools', 'target', 'yue', 'profile.json'); JYU_RX = new RegExp(readJSON(p).pronPattern); } return JYU_RX; }
function isJyutping(s) { s = String(s == null ? '' : s).trim(); if (!s) return false; return JYU_INITIAL.test(s) || JYU_FINAL.test(s) || jyutpingRx().test(s); }
const isCantoneseValue = s => { s = String(s == null ? '' : s); return (hasHan(s) && !/[A-Za-zÀ-ɏ]/.test(s)) || isJyutping(s); };
function runSetOf(rx, s) { return (String(s || '').match(rx) || []).slice().sort(); }

/* ---------- "by marks" targets (docs/HALVES-BLUEPRINT.md §5, docs/briefs/x-vi-design.md) ----------
   Vietnamese is written in Latin letters, so script cannot tell it from an English, Spanish or French learner's text. The half records instead WHERE
   the target text is: whole target fields live in the target half (by position, never by looking at the text), and inside mixed native fields the
   exporter records the marked spans in target/<t>/marks.jsonl. validate.js then requires every recorded span, character for character, in every native half.
   The classifiers below decide only (a) which mc / check items carry target options (one decision per item, from its key answer) and (b) whether a
   MARKED span (bold, example cell, italic line …) holds target text. They are the course's own definitions: a Vietnamese syllable is whatever
   tools/target/vi/respell.js can respell, and a pronunciation line is whatever the en-vi profile's pronPattern accepts. */
const LAT_WORD = /[A-Za-zÀ-ÖØ-öø-ɏḀ-ỿ]+/g;                 /* a run of Latin letters, Vietnamese precomposed letters included (text is NFC) */
const VI_LETTERS = new Set('a ă â b c d đ e ê g h i k l m n o ô ơ p q r s t u ư v x y f j w z ch gh gi kh ng ngh nh ph qu th tr'.split(' ')); /* letters and letter groups as quiz / lesson material */
const VI_DIACRITIC = /[đĐ]|[̛̣̀́̂̃̆̉]/;   /* tested on NFD: a mark English never writes (café aside) */
let VI_RS = null, VI_PR = null;
function viRespell() { if (!VI_RS) VI_RS = require(path.join(ROOT, 'tools', 'target', 'vi', 'respell.js')); return VI_RS; }
function viPronRx() { if (!VI_PR) VI_PR = new RegExp(readJSON(path.join(ROOT, 'tools', 'target', 'vi', 'profile.json')).pronPattern); return VI_PR; }
const EN_HOMOGRAPHS = new Set(('an at be bin bo bun can dam day den do go ha hang he hen hi him ho hum in la lo long ma man may me men mi mo no on pa pan pen ' +
  'pho pin ram rang rum sang sin so son song sum sun tan ten the tin to tong van').split(' '));
const hasViDiacritic = s => VI_DIACRITIC.test(String(s || '').normalize('NFD'));
function isViSyllable(w) { try { viRespell().syllable(String(w)); return true; } catch (e) { return false; } }
/* a whole string of Vietnamese: at least one word, every word a syllable respell.js accepts or a letter (group) of the alphabet; anything else is punctuation */
function isVietnamese(s) { s = String(s == null ? '' : s).normalize('NFC'); if (/\d/.test(s)) return false; const w = s.match(LAT_WORD) || []; return w.length > 0 && w.every(x => VI_LETTERS.has(x.toLowerCase()) || isViSyllable(x)); }
/* a whole en-vi pronunciation line (lowercase ASCII chunks with tone symbols: "vee-uht. nahm") */
function isViRespelling(s) { s = String(s == null ? '' : s).trim(); return !!s && viPronRx().test(s); }
/* a bare piece of the pronunciation line (an initial "kw", "dt", "ny" or a vowel spelling "uh", "a" that cannot stand alone as a chunk): quiz and tile
   material, language-neutral like a bare pinyin or Jyutping initial */
const VI_PRON_PART = /^(b|ch|d|dt|f|g|h|k|kh|kw|l|m|n|ng|ny|p|s|t|v|z|ah|a|uh|eh|ey|ee|aw|oh|er|oo|uu|ee-uh|oo-uh|uu-uh)$/;
const isVietnameseValue = s => isVietnamese(s) || isViRespelling(s) || VI_PRON_PART.test(String(s == null ? '' : s).trim());

/* the marked target spans of one native string, and the target-looking words left unmarked.
   kind 'html' (lesson bodies): <b>…</b> whose text is Vietnamese (recorded WITH the tags, so a native body keeps the mark); the text of <td class="k"> cells outside "(…)" glosses; <i>…</i> holding a
   pronunciation line that carries a tone symbol, a hyphen or two chunks (bare "ah", "her" are not marked: English words pass the pattern too).
   Both kinds: "X (line)" where the line is exactly respell(X) (self-certifying: the line proves X is Vietnamese; both are marked), and every word that is
   a word of the row's own target text (own: the card front, the item's answers / target options / wrong typed answers / fill sentence …).
   Tokens ({{ex:…}}, {{tiles:…}}) are id references checked elsewhere. Returns { spans: [exact substrings, in order], unmarked: [words with a
   Vietnamese diacritic outside every span] }. Words without diacritics outside marks cannot be recognised in Latin script and are not reported. */
function viMarks(kind, text, own) {
  const s = String(text == null ? '' : text), taken = [], spans = [];
  const free = (a, b) => taken.every(([x, y]) => b <= x || a >= y);
  const add = (a, b) => { const v = s.slice(a, b); if (b > a && v.trim() && free(a, b)) { taken.push([a, b]); spans.push([a, v]); } };
  const block = (a, b) => { if (free(a, b)) taken.push([a, b]); }; /* text that is neither a span nor reportable (tags, tokens) */
  let m;
  const TOK = new RegExp(TOKEN_RX.source, 'g'); while ((m = TOK.exec(s))) block(m.index, m.index + m[0].length);
  if (kind === 'html') {
    const B = /<b>([^<]*)<\/b>/g; while ((m = B.exec(s))) { if (isVietnamese(m[1])) add(m.index, m.index + m[0].length); } /* recorded with its tags: the mark stays a mark */
    const K = /<td class="k">([^<]*)<\/td>/g; while ((m = K.exec(s))) { const st = m.index + m[0].indexOf('>') + 1, inner = m[1];
      const P = /\s*\(([^()]*)\)/g; let last = 0, p; const segs = []; while ((p = P.exec(inner))) { segs.push([last, p.index]); last = p.index + p[0].length; } segs.push([last, inner.length]);
      segs.forEach(([a, b]) => { const seg = inner.slice(a, b), lead = seg.length - seg.trimStart().length, t = seg.trim(); if (t && isVietnamese(t)) add(st + a + lead, st + a + lead + t.length); }); }
    const I = /<i>([^<]*)<\/i>/g; while ((m = I.exec(s))) { const t = m[1].trim(); if (isViRespelling(t) && /[/_?~.]$|-| /.test(t)) add(m.index + 3, m.index + 3 + m[1].length); }
    const TAG = /<[^>]+>/g; while ((m = TAG.exec(s))) block(m.index, m.index + m[0].length);
  }
  /* "X (line)": the k words before "(" respell to exactly the line inside it */
  const PR = /\(([a-z/_?~.\- ]+)\)/g;
  while ((m = PR.exec(s))) { const line = m[1]; if (!isViRespelling(line)) continue; const k = line.split(' ').length;
    const before = s.slice(0, m.index), ws = []; const WR = new RegExp(LAT_WORD.source, 'g'); let w; while ((w = WR.exec(before))) ws.push([w.index, w.index + w[0].length]);
    if (ws.length < k) continue; const a = ws[ws.length - k][0], b = ws[ws.length - 1][1]; if (/\S/.test(s.slice(b, m.index))) continue;
    let r = null; try { r = viRespell().respell(s.slice(a, b)); } catch (e) { r = null; }
    if (r === line) { add(a, b); add(m.index + 1, m.index + 1 + line.length); } }
  /* words of the row's own target text. Not taken from it: word pieces next to a blank (Tôi __i chơi → no "i"), single letters without a diacritic,
     and EN_HOMOGRAPHS (Vietnamese syllables that are also everyday English words: "to means big. It has nothing to do with English to."). The source
     language of every native half is English, so only English homographs could turn an English word into a protected span. */
  const ownW = new Set(); (own || []).forEach(o => { const t = String(o == null ? '' : o).normalize('NFC'); const WO = new RegExp(LAT_WORD.source, 'g'); let w;
    while ((w = WO.exec(t))) { const x = w[0].toLowerCase(); if (t[w.index - 1] === '_' || t[w.index + w[0].length] === '_') continue; if (!hasViDiacritic(x) && (x.length < 2 || EN_HOMOGRAPHS.has(x))) continue; ownW.add(x); } });
  const unmarked = [];
  const WR = new RegExp(LAT_WORD.source, 'g');
  while ((m = WR.exec(s))) { const a = m.index, b = a + m[0].length; if (!free(a, b)) continue;
    if (ownW.has(m[0].normalize('NFC').toLowerCase())) add(a, b); else if (hasViDiacritic(m[0])) unmarked.push(m[0]); }
  return { spans: spans.sort((x, y) => x[0] - y[0]).map(x => x[1]), unmarked };
}
/* does a native string still hold every recorded span? A span may not be glued to a letter on either side, and occurrences are counted without
   overlap, longest span first: "bàn" recorded on its own and inside "Bạn tôi bán bàn." needs two occurrences. Returns the missing spans (one entry per
   missing occurrence). */
function missingSpans(text, spans) {
  const s = String(text == null ? '' : text), need = new Map(); (spans || []).forEach(x => need.set(x, (need.get(x) || 0) + 1));
  const out = [], used = [], L1 = /[A-Za-zÀ-ÖØ-öø-ɏḀ-ỿ\u0300-\u036f]/;
  [...need.keys()].sort((a, b) => b.length - a.length).forEach(sp => { let c = 0, i = -1; const n = need.get(sp);
    while (c < n && (i = s.indexOf(sp, i + 1)) >= 0) { const pre = s[i - 1], post = s[i + sp.length], j = i + sp.length;
      if ((pre && L1.test(pre) && L1.test(sp[0])) || (post && L1.test(post) && L1.test(sp[sp.length - 1]))) continue;
      if (used.some(([a, b]) => i < b && j > a)) continue; used.push([i, j]); c++; }
    for (let k = c; k < n; k++) out.push(sp); });
  return out;
}

const TARGETS = {
  ko: { code: 'ko', field: 'ko', name: 'Korean', script: 'Hangul', by: 'script', runs: s => hangulSet(s), has: hasHangul, isValue: isKoreanValue, leadRx: /^([^A-Za-z]*[㄰-㆏가-힯][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$/ },
  zh: { code: 'zh', field: 'zh', name: 'Chinese', script: 'Han', by: 'script', runs: s => runSetOf(HAN_RX, s), has: hasHan, isValue: isChineseValue, leadRx: /^([^A-Za-z]*[㐀-䶿一-鿿][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$/,
    /* extra native-only card fields for learners whose language reads Chinese characters (vi: Hán Việt). Assembly ignores them; validate.js checks them. */
    cardExtras: ['hv', 'hvUse', 'trad'] },
  /* third half (docs/briefs/x-yue-design.md). Script mode like zh: a learner language written in Han characters (zh, ja, nan) cannot be told from it by script
     and needs the "by marks" mode of docs/HALVES-BLUEPRINT.md §5 before its native half can be validated. */
  yue: { code: 'yue', field: 'yue', name: 'Cantonese', script: 'Han', by: 'script', runs: s => runSetOf(HAN_RX, s), has: hasHan, isValue: isCantoneseValue, leadRx: /^([^A-Za-z]*[㐀-䶿一-鿿][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$/ },
  /* fourth half (docs/briefs/x-vi-design.md): "by marks". No protected script and no run sets (runs: null); has / isValue are whole-string tests used
     only where the position already says "target or prose?" is a fair question (titles, tile readings, in-lesson card fronts, the key answer of an
     mc / check item). Hints are never split: a hint is a mixed native field. marks = the span finder above; target/vi/marks.jsonl holds its output. */
  vi: { code: 'vi', field: 'vi', name: 'Vietnamese', script: 'Vietnamese', by: 'marks', runs: null, has: isVietnamese, isValue: isVietnameseValue, leadRx: null, marks: viMarks },
  /* fifth half (docs/briefs/x-es-design.md): "by marks", target text recognised by the course's own inventory (targets/_inventory.js; Spanish data: targets/es.js) */
  es: require('./targets/es.js')
};
function target(t) { const c = TARGETS[t]; if (!c) throw new Error('unknown target "' + t + '" (known: ' + Object.keys(TARGETS).join(', ') + ')'); return c; }
/* split "target lead<sep>native note" (hint, pause-set label); null when there is no leading target part. Marks-mode targets never split. */
function splitLead(t, s) {
  const T = target(t); s = String(s); if (T.isValue(s)) return { lead: s, sep: '', note: '' };
  if (!T.leadRx) return null;
  const m = s.match(T.leadRx); return m && T.isValue(m[1]) ? { lead: m[1], sep: m[2], note: m[3] } : null;
}

module.exports = { ROOT, HALVES, SRC, openApp, liveBuiltin, readJSON, writeJSON, writeJSONL, readJSONL, byId, hangulSet, sameHangul, hasHangul, isKoreanValue, tokens, TOKEN_RX, words,
  TARGETS, target, splitLead, hasHan, isPinyin, isChineseValue, HAN_RX, isJyutping, isCantoneseValue,
  isVietnamese, isViRespelling, isVietnameseValue, hasViDiacritic, viMarks, missingSpans };
