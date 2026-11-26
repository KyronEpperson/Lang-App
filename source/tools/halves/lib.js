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
const TARGETS = {
  ko: { code: 'ko', field: 'ko', name: 'Korean', script: 'Hangul', runs: s => hangulSet(s), has: hasHangul, isValue: isKoreanValue, leadRx: /^([^A-Za-z]*[㄰-㆏가-힯][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$/ },
  zh: { code: 'zh', field: 'zh', name: 'Chinese', script: 'Han', runs: s => runSetOf(HAN_RX, s), has: hasHan, isValue: isChineseValue, leadRx: /^([^A-Za-z]*[㐀-䶿一-鿿][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$/,
    /* extra native-only card fields for learners whose language reads Chinese characters (vi: Hán Việt). Assembly ignores them; validate.js checks them. */
    cardExtras: ['hv', 'hvUse', 'trad'] },
  /* third half (docs/briefs/x-yue-design.md). Script mode like zh: a learner language written in Han characters (zh, ja, nan) cannot be told from it by script
     and needs the "by marks" mode of docs/HALVES-BLUEPRINT.md §5 before its native half can be validated. */
  yue: { code: 'yue', field: 'yue', name: 'Cantonese', script: 'Han', runs: s => runSetOf(HAN_RX, s), has: hasHan, isValue: isCantoneseValue, leadRx: /^([^A-Za-z]*[㐀-䶿一-鿿][^A-Za-z]*)( · | — )(.*[A-Za-z].*)$/ }
};
function target(t) { const c = TARGETS[t]; if (!c) throw new Error('unknown target "' + t + '" (known: ' + Object.keys(TARGETS).join(', ') + ')'); return c; }
/* split "target lead<sep>native note" (hint, pause-set label); null when there is no leading target part */
function splitLead(t, s) {
  const T = target(t); s = String(s); if (T.isValue(s)) return { lead: s, sep: '', note: '' };
  const m = s.match(T.leadRx); return m && T.isValue(m[1]) ? { lead: m[1], sep: m[2], note: m[3] } : null;
}

module.exports = { ROOT, HALVES, SRC, openApp, liveBuiltin, readJSON, writeJSON, writeJSONL, readJSONL, byId, hangulSet, sameHangul, hasHangul, isKoreanValue, tokens, TOKEN_RX, words,
  TARGETS, target, splitLead, hasHan, isPinyin, isChineseValue, HAN_RX, isJyutping, isCantoneseValue };
