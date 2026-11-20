/* Taiwanese Hokkien (Taigi, MOE recommended characters) -> Tâi-lô, the en-nan pron line (profile docs/profiles/en-nan.md §6).
   Deterministic: longest match over tools/target/nan/lexicon.txt (every entry copied from a source that was opened, with its source id),
   so the same Taigi text always gives the same Tâi-lô.
   Output: CITATION tones as the MOE dictionary prints them (no tone sandhi is written); tone marks (á à â ā a̍; tones 1 and 4 unmarked);
   hyphens between the syllables of a word and spaces between words exactly as the lexicon entry (= the MOE headword) has them
   (m̄ sī, hit ê, tsia̍h-pá); `--` before a neutral-tone syllable (tsia̍h-pá--buē, To-siā--lí); nasal vowels with nn; oo; glottal -h.
   The first letter of a sentence (text ending in 。？！) is a capital, as in the MOE example sentences; proper nouns carry their capital
   in the lexicon (Tâi-uân). Chinese punctuation becomes ASCII, attached to the word before it.
   Context rules (the homograph table, profile §6.3): 無 未 袂 after a word and right before ？ become --bô --buē --bē; 咧 is --leh at
   the end, leh after 坐, teh elsewhere; 的 at the end after a non-pronoun is --ê; 過 at the end or before a final 無？ is --kuè;
   這 / 彼 are tse / he before 是 敢 攏 嘛 也 就 遮 真 足 誠 較 傷 有 無 毋 袂 會 欲 佇 or at the end, tsit / hit before a classifier, a
   number or a noun listed in DEM_NOUN, and throw otherwise; 上 before an adjective in ADJ is siōng, else tsiūnn; 遮 / 遐 before an
   adjective in ADJ or 𠢕… are tsiah / hiah; 一 二 after another number word are it, jī; a compound number is one hyphenated word;
   a run of number characters that contains 空 and no 十 百 千 萬 (and, in the same text, any other such run of 3 or more) is read
   digit by digit in the literary readings, hyphenated (a phone number). Three characters outside the BMP are allowed: 𪜶 𠢕 𨑨.
   It throws on: a character or word not in the lexicon; a Latin letter or Arabic digit; 這 / 彼 it cannot place; 二 directly before a
   classifier (write 兩); a character with no default reading standing outside a listed word (NODEF).
   It warns (stderr, not fatal) when a character with literary and colloquial readings stands alone (POLY).
   usage: node respell.js "你食飽未？"  ->  你食飽未？ -> Lí tsia̍h-pá--buē?
          node respell.js --pattern      prints pronPattern
          node respell.js --check        loads the lexicon, checks every entry, prints counts by source */
const fs = require('fs'), path = require('path'); let warned = [];
const W = new Map(), SRC = new Map(), DUP = []; let MAXL = 1;
/* the only characters outside the Basic Multilingual Plane the course may use (MOE recommended characters for core words; fonts must be
   checked, profile §10.6): 𪜶 in 'they', 𠢕 gâu in 𠢕早 'good morning', 𨑨 in 𨑨迌 tshit-thô 'to play, have fun' */
const NONBMP = new Set(['𪜶', '𠢕', '𨑨']);
/* ---------- Tâi-lô syllable rule (MOE 臺灣台語羅馬字拼音方案使用手冊, 2024) ---------- */
const INITS = ['tsh', 'ph', 'th', 'kh', 'ts', 'ng', 'p', 'b', 'm', 't', 'n', 'l', 'k', 'g', 'h', 's', 'j'];
const FINALS = ['a', 'ah', 'ai', 'aih', 'ainn', 'ak', 'am', 'an', 'ang', 'ann', 'annh', 'ap', 'at', 'au', 'auh', 'aunn', 'aunnh',
  'e', 'eh', 'enn', 'ennh', 'i', 'ia', 'iah', 'iak', 'iam', 'ian', 'iang', 'iann', 'iannh', 'iap', 'iat', 'iau', 'iauh', 'iaunn', 'ih', 'ik', 'im', 'in', 'ing', 'inn', 'innh',
  'io', 'ioh', 'iok', 'iong', 'ionn', 'ip', 'it', 'iu', 'iuh', 'iunn', 'm', 'mh', 'ng', 'ngh', 'o', 'oh', 'ok', 'om', 'ong', 'onn', 'onnh', 'oo', 'ooh', 'op',
  'u', 'ua', 'uah', 'uai', 'uainn', 'uainnh', 'uan', 'uang', 'uann', 'uannh', 'uat', 'ue', 'ueh', 'ui', 'uih', 'uinn', 'uh', 'un', 'ut'];
const SYLB = new RegExp('^(?:' + INITS.join('|') + ')?(?:' + FINALS.slice().sort((a, b) => b.length - a.length).join('|') + ')$');
const MARK = { '́': 2, '̀': 3, '̂': 5, '̄': 7, '̍': 8 };
/* one syllable (NFD, lowercase): letters with at most one tone mark; tone 8 only on -p -t -k -h, tones 2 3 5 7 only on open / nasal syllables */
function sylOK(s) {
  const d = s.normalize('NFD').toLowerCase(); const marks = [...d].filter(c => /[̀-ͯ]/.test(c));
  if (marks.length > 1) return 'two tone marks'; if (marks.length && !(marks[0] in MARK)) return 'unknown mark';
  const base = d.replace(/[̀-ͯ]/g, ''); if (!SYLB.test(base)) return 'not a Tâi-lô syllable';
  const checked = /[ptkh]$/.test(base) && !/(nn|ng)$/.test(base) || /(nnh|ngh|mh)$/.test(base); const t = marks.length ? MARK[marks[0]] : 0;
  if (checked && t && t !== 8) return 'a checked syllable (-p -t -k -h) takes no mark (tone 4) or the tone-8 mark';
  if (!checked && t === 8) return 'the tone-8 mark is only for -p -t -k -h syllables';
  return '';
}
/* a reading: syllables joined by '-', words by ' ', an optional '--' before a neutral-tone syllable (also at the start: --ah) */
function readingOK(r) {
  if (!/^(?:--)?[^\s-]+(?:(?:--|-| )[^\s-]+)*$/.test(r)) return 'bad separators';
  for (const s of r.split(/--|-| /).filter(Boolean)) { const e = sylOK(s); if (e) return '«' + s + '»: ' + e; } return '';
}
const sylCount = r => r.split(/--|-| /).filter(Boolean).length;
/* ---------- lexicon ---------- */
function addLine(line, n, file) {
  const t = line.replace(/\s+#.*$/, '').trim(); if (!t || t.startsWith('#')) return;
  const f = t.split('\t'); if (f.length < 3) throw new Error(file + ':' + n + ': need «characters<TAB>tâi-lô<TAB>source»: «' + line + '»');
  const w = f[0].normalize('NFC'), r = f[1].normalize('NFC').trim(), src = f[2].trim();
  if (![...w].every(c => /^[\u3400-\u9fff\uf900-\ufaff]$/.test(c) || NONBMP.has(c))) throw new Error(file + ':' + n + ': «' + w + '» has a character outside the BMP CJK blocks that is not in NONBMP');
  const e = readingOK(r); if (e) throw new Error(file + ':' + n + ': «' + w + ' ' + r + '»: ' + e);
  if ([...w].length !== sylCount(r)) throw new Error(file + ':' + n + ': «' + w + '» has ' + [...w].length + ' characters but «' + r + '» has ' + sylCount(r) + ' syllables');
  if (W.has(w) && W.get(w) !== r) DUP.push(w + ': ' + W.get(w) + ' / ' + r);
  if (!W.has(w)) { W.set(w, r); SRC.set(w, src); } if ([...w].length > MAXL) MAXL = [...w].length;
}
const LEXF = path.join(__dirname, 'lexicon.txt');
fs.readFileSync(LEXF, 'utf8').split('\n').forEach((l, i) => addLine(l, i + 1, 'lexicon.txt'));
/* writers' additions: lexicon-add-<id>.txt next to this file, same format, each line with the URL of the page it was copied from; the lead merges them into lexicon.txt */
fs.readdirSync(__dirname).filter(f => /^lexicon-add-[\w-]+\.txt$/.test(f)).sort().forEach(f => fs.readFileSync(path.join(__dirname, f), 'utf8').split('\n').forEach((l, i) => addLine(l, i + 1, f)));
/* characters with no default: alone (outside a listed word) they throw */
const NODEF = { '這': 'tse (this, alone) / tsit (this + classifier)', '彼': 'he (that, alone) / hit (that + classifier)' };
/* characters whose default is right alone but which read otherwise in other words: alone, they warn */
const POLY = { '大': 'tuā; tāi in literary words', '下': 'ē; hā in literary words', '行': 'kiânn (walk); hâng (row, firm)', '上': 'tsiūnn (go up, board); siōng (most) in 上尾 and other words' };
const NUM = new Set([...'一二三四五六七八九十百千萬空兩廿']);
const LIT = { '空': 'khòng', '一': 'it', '二': 'jī', '三': 'sam', '四': 'sù', '五': 'ngóo', '六': 'lio̍k', '七': 'tshit', '八': 'pat', '九': 'kiú' };
const CLF = new Set([...'个本隻台杯碗張塊項間位擺款號點箍粒條件枝支罐雙斤歲次句']);
const TSE_NEXT = new Set([...'是敢攏嘛也就遮真足誠較傷有無毋袂會欲佇']); /* 這遮貴 Tse tsiah kuì (s:9035) */
const ADJ = new Set(['好', '貴', '俗', '大', '細', '熱', '寒', '媠', '濟', '遠', '近', '好食', '好看', '慢']);
const LEH_PREV = new Set(['坐']); /* verbs after which 咧 is leh (MOE: 坐咧看, 徛咧講); extend only from MOE examples */
const PRON = new Set(['我', '你', '伊', '阮', '咱', '恁', '𪜶']);
const DEM_NOUN = new Set(['馬', '陣']); /* words listed whole (這馬, 這陣) never reach the rule; nouns allowed after tsit / hit go here */
const PUNCT = { '。': '.', '，': ',', '？': '?', '！': '!', '、': ',', '：': ':', '；': ';', '.': '.', ',': ',', '?': '?', '!': '!', ':': ':', ';': ';' };
const DROP = /[“”‘’"'《》（）()「」『』…\-—～~·]/;
const isHan = c => /[㐀-鿿豈-﫿]/.test(c) || /[\u{20000}-\u{3ffff}]/u.test(c);
function fwd(cs, chunk) { const out = []; for (let i = 0; i < cs.length;) { let hit = null;
    for (let L = Math.min(MAXL, cs.length - i); L >= 1; L--) { const w = cs.slice(i, i + L).join(''); if (W.has(w) || (L === 1 && NODEF[w])) { hit = w; break; } }
    if (!hit) throw new Error('unknown: «' + cs[i] + '» in «' + chunk + '» (not in lexicon.txt: report it; the lead adds it only from the MOE dictionary or another opened source)'); out.push(hit); i += [...hit].length; } return out; }
function bwd(cs, chunk) { const out = []; for (let j = cs.length; j > 0;) { let hit = null;
    for (let L = Math.min(MAXL, j); L >= 1; L--) { const w = cs.slice(j - L, j).join(''); if (W.has(w) || (L === 1 && NODEF[w])) { hit = w; break; } }
    if (!hit) throw new Error('unknown: «' + cs[j - 1] + '» in «' + chunk + '»'); out.unshift(hit); j -= [...hit].length; } return out; }
const rd = ws => ws.map(w => W.get(w) || w).join(' ');
function segRun(cs, chunk) { let f = null, b = null, err = null; try { f = fwd(cs, chunk); } catch (e) { err = e; } try { b = bwd(cs, chunk); } catch (e) { err = err || e; }
  if (!f && !b) throw err; if (!f || !b) return f || b; /* one direction can stall on a character the other covers inside a longer word (第一擺: 第一 / 擺) */
  if (f.join('/') === b.join('/') || rd(f) === rd(b)) return f;
  throw new Error('two possible readings in «' + chunk + '»: ' + f.join('/') + ' (' + rd(f) + ') or ' + b.join('/') + ' (' + rd(b) + '): add the longer word to lexicon.txt'); }
function respell(text) {
  const src = String(text).normalize('NFC').trim(); if (!src) return '';
  const toks = [];
  src.split(/\s+/).forEach(chunk => { const cs = [...chunk]; let run = [];
    const flush = () => { if (run.length) segRun(run, chunk).forEach(w => toks.push({ w, r: W.get(w) })); run = []; };
    for (const c of cs) {
      if (PUNCT[c]) { flush(); toks.push({ p: PUNCT[c] }); continue; }
      if (DROP.test(c)) { flush(); continue; }
      if (!isHan(c)) throw new Error('not a Han character: «' + c + '» in «' + chunk + '» (write numbers in characters; no Latin letters in Taigi strings)');
      run.push(c);
    }
    flush(); });
  /* digit strings: a run of number characters that contains 空 is read digit by digit, literary */
  const phone = /空[一二三四五六七八九空]/.test(src.replace(/[，、\s]/g, '')); /* a text with a phone number: its other digit groups of 3+ are read the same way */
  for (let i = 0; i < toks.length;) { let j = i; while (j < toks.length && toks[j].w && [...toks[j].w].every(c => NUM.has(c))) j++;
    const run = toks.slice(i, j), digitsOnly = run.length && !run.some(t => /[十百千萬廿兩]/.test(t.w)), len = run.map(t => t.w).join('').length;
    if (j > i && digitsOnly && (run.some(t => t.w.includes('空')) || (phone && len >= 3))) { const ds = toks.slice(i, j).map(t => t.w).join('');
      if ([...ds].some(c => !LIT[c])) throw new Error('digit string «' + ds + '» in «' + src + '»: only 空 一 … 九 can be read digit by digit');
      toks.splice(i, j - i, ...[...ds].map(c => ({ w: c, r: LIT[c], lit: 1 }))); i += ds.length; } else i = Math.max(j, i + 1); }
  const isQEnd = i => { const n = toks[i + 1]; return n && n.p === '?'; };
  const atEnd = i => { const n = toks[i + 1]; return !n || n.p; };
  toks.forEach((t, i) => { if (!t.w || t.lit) return; const prev = toks[i - 1], next = toks[i + 1];
    if (t.w === '無' && prev && prev.w && isQEnd(i)) t.r = '--bô';
    else if (t.w === '未' && prev && prev.w && isQEnd(i)) t.r = '--buē';
    else if (t.w === '袂' && prev && prev.w && isQEnd(i)) t.r = '--bē';
    else if (t.w === '咧') t.r = (prev && prev.w && atEnd(i)) ? '--leh' : (prev && LEH_PREV.has(prev.w)) ? 'leh' : 'teh'; /* 坐咧看 tsē leh khuànn (s:4770); 伊咧讀冊 I teh (s:4771) */
    else if (t.w === '的' && prev && prev.w && atEnd(i) && !PRON.has(prev.w)) t.r = '--ê'; /* 我足愛睏的 ài-khùn--ê (s:9427); but 這敢是你的？ lí ê (s:8414) */
    else if ((t.w === '遮' || t.w === '遐') && next && next.w && (ADJ.has(next.w) || next.w.startsWith('𠢕'))) t.r = t.w === '遮' ? 'tsiah' : 'hiah'; /* 'so': 遐𠢕早 hiah gâu-tsá (s:13473), 遮貴 tsiah kuì (s:9035) */
    else if (t.w === '上' && next && next.w && ADJ.has(next.w)) t.r = 'siōng'; /* 'most' before an adjective: 上好 siōng hó (s:306), 上尾 siōng-bué (s:5016) */
    else if (t.w === '過' && prev && prev.w && (atEnd(i) || (next && next.w === '無' && isQEnd(i + 1)))) t.r = '--kuè'; /* 我有去過 guá ū khì--kuè (s:10149); ū thiann--kuè--bô (s:13225) */
    else if (t.w === '這' || t.w === '彼') { const n = next && next.w ? next.w : null; const tse = t.w === '這' ? 'tse' : 'he', tsit = t.w === '這' ? 'tsit' : 'hit';
      if (!n || TSE_NEXT.has([...n][0])) t.r = tse;
      else if (CLF.has([...n][0]) || NUM.has([...n][0]) || DEM_NOUN.has(n)) t.r = tsit;
      else throw new Error('«' + t.w + '» before «' + n + '» in «' + src + '»: ' + NODEF[t.w] + '; put a classifier after it or report the phrase'); }
    else if ((t.w === '一' || t.w === '二') && prev && prev.w && NUM.has([...prev.w].slice(-1)[0]) && prev.w !== '兩') t.r = t.w === '一' ? 'it' : 'jī';
    if (t.w === '二' && next && next.w && CLF.has([...next.w][0]) && !(prev && prev.w && NUM.has([...prev.w].slice(-1)[0]))) throw new Error('二 before a classifier in «' + src + '»: write 兩 (nn̄g)');
    if ([...t.w].length === 1 && POLY[t.w] && t.r === W.get(t.w)) warned.push('«' + t.w + '» alone is read ' + t.r + ' in «' + src + '»; check: ' + POLY[t.w]);
  });
  /* a compound number is one word: syllables joined by hyphens (Tsa̍p-jī tiám, sann-pah, tsi̍t-pah khòng-it: a new word starts at 空) */
  const numW = t => t && t.w && !t.lit && [...t.w].every(c => NUM.has(c));
  let out = '';
  toks.forEach((t, i) => { if (t.p) { out += t.p; return; } const r = t.r;
    const glue = (numW(t) && numW(toks[i - 1]) && t.w[0] !== '空') || (t.lit && toks[i - 1] && toks[i - 1].lit) ? '-' : ' ';
    /* a digit string is one hyphenated word, as Bite-size Taiwanese writes phone numbers (khòng-kiú, pat-sam-ngóo-ngóo) */
    out += (!out || r.startsWith('--')) ? r : glue + r; });
  out = out.replace(/ ([,.?!:;])/g, '$1').replace(/^[,.?!:;]+/, '').trim();
  if (/[。？！]$/.test(src)) out = out.replace(/^(\p{L})/u, c => c.toUpperCase()).replace(/([.?!] )(\p{L})/gu, (m, a, c) => a + c.toUpperCase());
  return out.normalize('NFC');
}
/* pronPattern: lowercase/uppercase Latin letters with combining or precomposed tone marks, hyphens, '--', single spaces, ASCII punctuation
   after a word. Written for NFC text; a̍ m̄ n̄ have no precomposed form, so the combining marks are allowed after any letter. BMP only,
   so it works with and without the u flag. The generator's syllable rule, not the pattern, is the guarantee. */
function pattern() {
  const L = "[A-Za-zÀ-ÿĀ-žǸǹḾḿ](?:[\\u0300\\u0301\\u0302\\u0304\\u030d])?";
  const SY = '(?:' + L + ')+';
  const WD = '(?:--)?' + SY + '(?:(?:-|--)' + SY + ')*';
  return '^' + WD + '[,.?!:;]?(?: ' + WD + '[,.?!:;]?)*$';
}
function warnings() { const w = warned; warned = []; return w; }
module.exports = { respell, pattern, warnings, W, SRC, sylOK, readingOK };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  if (args[0] === '--check') { const by = {}; SRC.forEach(s => { by[s] = (by[s] || 0) + 1; }); console.log(W.size + ' entries'); Object.keys(by).sort().forEach(k => console.log('  ' + k + ': ' + by[k])); if (DUP.length) console.log('duplicates kept first: ' + DUP.join('; ')); process.exit(0); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); warnings().forEach(m => process.stderr.write('warning: ' + m + '\n')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } }); process.exit(bad ? 1 : 0);
}
