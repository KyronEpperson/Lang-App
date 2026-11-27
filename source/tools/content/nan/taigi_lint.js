/* nan-en writing lint (written Taiwanese, MOE recommended characters; docs/profiles/nan.md §2, docs/briefs/nan-digest.md).
   usage: node tools/content/nan/taigi_lint.js [file …]      (default: every source file of tools/content/nan)
   It finds leftovers of the Cantonese scaffold and Mandarin words where Taigi has its own word. It does not judge naturalness.
   Exit 1 if any BLOCKING hit remains (Cantonese marker, Simplified character, Hangul, 眾數, TRANSLATE banner).
   Mandarin markers are WARNINGS: each one must be either rewritten or be inside a fixed Sino compound in the allow list. */
const fs = require('fs'), path = require('path');
const DIR = __dirname;
const FILES = ['decks.js', 'extra.js', 'lessons.js', 'practice.js', 'meta.js', 'more/a1.js', 'more/a2.js', 'more/b1.js'];
const files = process.argv.slice(2).length ? process.argv.slice(2).map(f => path.resolve(f)) : FILES.map(f => path.join(DIR, f));

/* written Cantonese: none of these may remain (outside a quoted 「」 example that names Cantonese on purpose, which this course never needs) */
const YUE = ['嘅', '咗', '喺', '啲', '嚟', '哋', '嗰', '嘢', '咩', '係', '唔', '冇', '佢', '噉', '咁', '攞', '搵', '諗', '睇', '瞓', '攰', '乜', '點解', '而家', '琴日', '尋日', '聽日', '屋企', '邊度', '邊個', '幾時', '鍾意', '畀', '俾', '咪', '喇', '囉', '嘞', '㗎', '喎', '啩', '吖', '晒', '埋單', '的士', '港幣', '蚊', '香港', '廣東話', '粵語', '書面語', '眾數', '第三身', '串字', '大楷', '細楷', '揸', '靚', '嘥', '咪住', '同埋', '仲有', '淨係', '講嘢'];
/* allowed compounds that contain a marker character (checked before the marker test) */
const YUE_OK = ['關係', '沒關係', '係數', '緊急', '要緊', '趕緊', '緊張', '咁爾'];
/* Mandarin words where Taigi has its own (NOTES.md §1); warnings */
const ZH = ['不', '在', '要', '吃', '喝', '他', '她', '很', '沒有', '沒', '給', '個', '東西', '們', '嗎', '呢', '吧', '了', '還', '說', '誰', '什麼', '怎麼', '哪', '這裡', '那裡', '那', '和', '跟', '都', '就是', '而且', '但是', '可是', '一點', '一下', '知道', '喜歡', '覺得', '想要', '可以'];
const ZH_OK = ['不規則', '不可數', '不定詞', '不定冠詞', '個人', '個性', '現在式', '現在進行式', '現在完成式', '現在分詞', '在地', '存在', '實在', '重要', '需要', '主要', '要緊', '要求', '摘要', '其他', '說明', '小說', '了解', '了後', '學了', '不管', '不時', '不止', '不但', '不安', '那霸', '和平', '溫和', '總和', '附和', '還原', '首都', '都市', '大都', '給付'];
const SIMPLIFIED = /[这说们时会对发学语过还没样为么国见长东车门问间话动经认让写读买卖钱饭鸡鱼马鸟龙爱]/;
const HANGUL = /[가-힣ᄀ-ᇿ㄰-㆏]/;
const NONBMP = /[\u{20000}-\u{3FFFF}]/u;

let block = 0, warn = 0;
const strip = (line, ok) => { let s = line; for (const w of ok) if (w) s = s.split(w).join('□'); return s; };
for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const lines = fs.readFileSync(f, 'utf8').split('\n'); const rel = path.relative(process.cwd(), f);
  const hits = { yue: {}, zh: {}, other: [] };
  lines.forEach((line, i) => {
    if (/TRANSLATE\/ADAPT/.test(line)) hits.other.push((i + 1) + ': TRANSLATE/ADAPT banner still there');
    if (!/[㐀-鿿]/.test(line)) return;
    const y = strip(line, YUE_OK);
    for (const w of YUE) if (y.includes(w)) (hits.yue[w] = hits.yue[w] || []).push(i + 1);
    const z = strip(line, ZH_OK);
    for (const w of ZH) if (w && z.includes(w)) (hits.zh[w] = hits.zh[w] || []).push(i + 1);
    const s = line.match(SIMPLIFIED); if (s) hits.other.push((i + 1) + ': Simplified character ' + s[0]);
    if (HANGUL.test(line)) hits.other.push((i + 1) + ': Hangul');
    const nb = line.match(NONBMP); if (nb && nb[0] !== '𪜶') hits.other.push((i + 1) + ': character outside the BMP ' + nb[0] + ' (only 𪜶 is allowed, with its Tâi-lô)');
  });
  const ny = Object.values(hits.yue).reduce((a, v) => a + v.length, 0), nz = Object.values(hits.zh).reduce((a, v) => a + v.length, 0);
  block += ny + hits.other.length; warn += nz;
  console.log(rel + ': Cantonese ' + ny + ' · other blocking ' + hits.other.length + ' · Mandarin warnings ' + nz);
  for (const [w, ls] of Object.entries(hits.yue)) console.log('  BLOCK ' + w + ' ×' + ls.length + ' (lines ' + ls.slice(0, 8).join(',') + (ls.length > 8 ? ',…' : '') + ')');
  hits.other.slice(0, 20).forEach(o => console.log('  BLOCK ' + o));
  for (const [w, ls] of Object.entries(hits.zh)) console.log('  warn  ' + w + ' ×' + ls.length + ' (lines ' + ls.slice(0, 8).join(',') + (ls.length > 8 ? ',…' : '') + ')');
}
console.log(block ? 'FAIL: ' + block + ' blocking hits, ' + warn + ' Mandarin warnings' : 'PASS (no blocking hits) · ' + warn + ' Mandarin warnings to read');
process.exit(block ? 1 : 0);
