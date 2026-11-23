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

module.exports = { ROOT, HALVES, SRC, openApp, liveBuiltin, readJSON, writeJSON, writeJSONL, readJSONL, byId, hangulSet, sameHangul, hasHangul, isKoreanValue, tokens, TOKEN_RX, words };
