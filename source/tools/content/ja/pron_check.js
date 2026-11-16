/* ja-en reading checker (not part of the build). Usage: node tools/content/ja/pron_check.js [phrases|words|all]
   Lists every English -> katakana pair in decks.js, extra.js (IDIOMS), lessons.js and more/*.js, then flags:
   - phrases: the same English row with two different readings
   - words:   one English word read two ways (rows are aligned word-by-word; linked kana groups are split by best fit,
              so a remaining "conflict" is usually a linked form allowed by PRON-RULES.md §C — check each one)
   - pattern: readings that fail profile.json pronPattern (always printed). */
const fs = require('fs'), path = require('path');
const D = __dirname + '/';
const prof = JSON.parse(fs.readFileSync(D + 'profile.json', 'utf8'));
const rows = [];
const add = (file, line, en, pr) => rows.push({ file, line, en: en.trim(), pr: pr.trim() });
fs.readFileSync(D + 'decks.js', 'utf8').split('\n').forEach((l, i) => { const p = l.split(' | '); if (p.length >= 4 && !l.startsWith('/*')) add('decks.js', i + 1, p[0], p[1]); });
{ let on = false; fs.readFileSync(D + 'extra.js', 'utf8').split('\n').forEach((l, i) => { if (/IDIOMS/.test(l)) on = true; const p = l.split(' | '); if (on && p.length >= 4) add('extra.js', i + 1, p[0], p[2]); }); }
for (const f of ['lessons.js', 'more/a1.js', 'more/a2.js', 'more/b1.js']) fs.readFileSync(D + f, 'utf8').split('\n').forEach((l, i) => { const re = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; let m; while ((m = re.exec(l))) add(f, i + 1, m[1], m[2]); });
const mode = process.argv[2] || 'words';
const pat = new RegExp(prof.pronPattern);
rows.forEach(r => { if (!pat.test(r.pr)) console.log('PATTERN', r.file + ':' + r.line, r.en, '|', r.pr); });
const normE = s => s.toLowerCase().replace(/[“”"]/g, '').replace(/[.,!?;:]/g, ' ').replace(/\s+/g, ' ').trim();
const stripP = p => p.replace(/ \((th|s|r|l|v|b|f|h|sh)\)$/, '').replace(/[?!.,]/g, ' ').replace(/\s+/g, ' ').trim();
if (mode === 'all') rows.forEach(r => console.log(r.file + ':' + r.line + '\t' + r.en + '\t' + r.pr));
if (mode === 'phrases' || mode === 'words') {
  const m = {}; rows.forEach(r => { (m[normE(r.en)] = m[normE(r.en)] || []).push(r); });
  for (const k in m) if (new Set(m[k].map(r => stripP(r.pr))).size > 1) console.log('PHRASE', k, '=>', m[k].map(r => r.pr + ' [' + r.file + ':' + r.line + ']').join(' | '));
}
if (mode === 'words') {
  const lex = {}, addW = (w, p, s) => { (lex[w] = lex[w] || {}); (lex[w][p] = lex[w][p] || []).push(s); };
  const segs = []; rows.forEach(r => { const e = normE(r.en).split(' / '), p = stripP(r.pr).split(' / '); if (e.length === p.length) e.forEach((x, i) => segs.push({ r, e: x.split(' ').filter(Boolean), g: p[i].split(' ').filter(Boolean) })); });
  segs.forEach(a => { if (a.e.length === a.g.length) a.e.forEach((w, i) => addW(w, a.g[i], a.r.file + ':' + a.r.line)); });
  const best = w => lex[w] && Object.keys(lex[w]).sort((x, y) => lex[w][y].length - lex[w][x].length)[0];
  const sim = (a, b) => { if (!a) return 0; if (a === b) return 3; let c = 0; for (const ch of a) if (b.includes(ch)) c++; return c / Math.max(a.length, b.length); };
  const parts = (n, k) => { const out = []; (function rec(i, k, acc) { if (k === 1) { out.push([...acc, n - i]); return; } for (let s = 1; s <= n - i - (k - 1); s++) rec(i + s, k - 1, [...acc, s]); })(0, k, []); return out; };
  segs.forEach(a => { if (a.g.length >= a.e.length) return; let bp = null, bs = -1; for (const P of parts(a.e.length, a.g.length)) { let i = 0, s = 0; P.forEach((z, j) => { if (z === 1) s += sim(best(a.e[i]), a.g[j]); i += z; }); if (s > bs) { bs = s; bp = P; } } let i = 0; bp.forEach((z, j) => { if (z === 1) addW(a.e[i], a.g[j], a.r.file + ':' + a.r.line); i += z; }); });
  for (const w of Object.keys(lex).sort()) { const ks = Object.keys(lex[w]); if (ks.length > 1) console.log('WORD', w, '=>', ks.map(k => k + '(' + lex[w][k].length + ')').join('  ')); }
}
