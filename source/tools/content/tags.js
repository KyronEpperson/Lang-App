/* Target-text tags for the <lang>-en courses built by tools/content/ (docs/briefs/target-text-tags.md §6).
   In these courses the learner reads their own language and the quoted target language is English. Before tagging it was marked three ways:
   "…" in notes and explanations, <i>…</i> in lesson bodies, and nothing at all in many prompts. A tagged course writes all of it as ‹…›.
   The work happens on the source lines of tools/content/<lang>/ (decks.js, lessons.js, practice.js, more/*.js):

     node tools/content/tags.js draft <lang>                 one-time script draft, written into the source ("X" and <i>X</i> that are English
                                                             become ‹X›; bold that is not English becomes <strong>)
     node tools/content/tags.js sheet <lang> <dir>           numbered source lines for the readers, one file per chunk (key <TAB> line)
     node tools/content/tags.js apply <lang> <rows> [--dry]  rows {"k":"<file>:<line>","text":"…"}: a row may only change the marking
                                                             (‹ ›, quotes, <i>, <b>/<strong>); then the pack is rebuilt and compared with
                                                             the baseline: every string equal once the marking is taken out, else undone
     node tools/content/tags.js base <lang>                  save the baseline pack the comparison uses (before the first change)
     node tools/content/tags.js lint <lang>                  the release check: runs well formed, only in prose fields, none in a target position */
const fs = require('fs'), path = require('path'), { spawnSync } = require('child_process');
const ROOT = path.join(__dirname, '..', '..');
const [cmd, LANG, A3] = process.argv.slice(2); const DRY = process.argv.includes('--dry');
if (!cmd || !LANG) { console.error('usage: node tools/content/tags.js draft|sheet|apply|base|lint <lang> [file]'); process.exit(2); }
const SRC = path.join(__dirname, LANG), ID = LANG + '-en', PACK = path.join(ROOT, 'packs', 'course-' + ID + '.js');
const BASE = path.join(ROOT, 'tools', 'content', LANG, '.tags-base.json');
const FILES = ['decks.js', 'lessons.js', 'practice.js'].concat(fs.existsSync(path.join(SRC, 'more')) ? fs.readdirSync(path.join(SRC, 'more')).filter(f => /\.js$/.test(f)).sort().map(f => 'more/' + f) : []).filter(f => fs.existsSync(path.join(SRC, f)));
const loadPack = file => { const P = { course: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(file, 'utf8'))(P); return P.course[ID]; };
const RUN = /‹([^‹›\s](?:[^‹›]*[^‹›\s])?)›/g;
const wellFormed = s => { const n = (s.match(/[‹›]/g) || []).length; return n === 2 * (s.match(RUN) || []).length && !/‹[^›]*[<>{}|][^›]*›/.test(s); };
/* what a tag-only change may touch: the delimiters, the quotes they replace (straight, escaped or not), <i>, and <b> / <strong> */
const norm = s => String(s).replace(/[‹›]/g, '').replace(/\\?"/g, '').replace(/<\/?(i|b|strong)>/g, '');
const normPack = s => String(s).replace(/[‹›"]/g, '').replace(/<\/?(i|b|strong)>/g, '');

/* ---- the course's own English: every word of a card front, a dialogue or example line, an example row, an answer or an option */
function lexicon(c) {
  const W = new Set(), add = s => (String(s).toLowerCase().match(/[a-z]+(?:['’][a-z]+)?/g) || []).forEach(w => W.add(w.replace('’', "'")));
  Object.values(c.DECKS).forEach(d => d.forEach(x => add(x[0])));
  Object.values(c.DIALOG || {}).forEach(x => { add(x[0]); add(x[1]); }); Object.values(c.EXAMPLES || {}).forEach(x => add(x[0]));
  (c.LESSONS || []).forEach(l => (String(l.body).match(/\{\{ex:[^|}]*/g) || []).forEach(x => add(x.slice(5))));
  Object.values(c.CHECKS || {}).forEach(l => l.forEach(k => k[1].forEach(add)));
  Object.values(c.PRACTICE || {}).forEach(l => l.forEach(it => { ['a', 'o', 'x'].forEach(k => [].concat(it[k] || []).forEach(add)); if (it.t === 'fill') add(it.q); }));
  (c.PATTERNS || []).forEach(x => { add(x[0]); add(x[2]); });
  return W;
}
const NOT_EN = /[áéíóúüñ¿¡«»àâçèêëîïôùûœãõäöß\u0100-\uffff]/i;
function isEn(x, W, strict) {
  if (NOT_EN.test(x) || /[<>{}|"‹›]/.test(x)) return false;
  const ws = (x.toLowerCase().match(/[a-z]+(?:['’][a-z]+)?/g) || []).map(w => w.replace('’', "'")); if (!ws.length) return false;
  const known = ws.filter(w => W.has(w)).length; return strict ? known === ws.length : known * 2 >= ws.length;
}

/* ---- draft: on the source lines */
function draftLine(line, file, W, st) {
  const tag = x => { st.tags++; return '‹' + x.trim() + '›'; };
  if (file === 'decks.js') {
    const f = line.split(' | '); if (f.length !== 4) return line;
    f[3] = f[3].replace(/"([^"‹›|<>{}]+)"/g, (m, x) => isEn(x, W) && x.trim() === x ? tag(x) : m); return f.join(' | ');
  }
  /* inside JavaScript strings a quoted English run is \"…\" */
  let out = line.replace(/\\"([^"\\‹›|<>{}]+)\\"/g, (m, x) => isEn(x, W) && x.trim() === x ? tag(x) : m);
  const isBody = /^\s*(<(p|h3|div|ul|ol|table|tr)\b|\{\{ex:)/.test(out) || /<\/(p|h3|td|li)>/.test(out) && !/^\s*[\[{]/.test(out);
  if (isBody) {
    /* never inside an example token or an example cell */
    out = out.split(/(\{\{[^}]*\}\}|<td class="k">[\s\S]*?<\/td>)/).map((seg, i) => { if (i % 2) return seg;
      seg = seg.replace(/<i>([^<]+)<\/i>/g, (m, x) => isEn(x, W, true) && x.trim() === x ? tag(x) : m);
      seg = seg.replace(/(^|[^=\\])"([^"‹›|<>{}=]+)"/g, (m, a, x) => isEn(x, W) && x.trim() === x ? a + tag(x) : m);
      seg = seg.replace(/<b>([^<]+)<\/b>/g, (m, x) => isEn(x, W) ? m : (st.strong++, '<strong>' + x + '</strong>'));
      return seg; }).join('');
  }
  return out;
}

function build() {
  const g = spawnSync('node', [path.join(__dirname, 'gen.js'), LANG], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 28 });
  if (g.status !== 0) return (g.stderr || g.stdout || 'gen.js failed').split('\n').slice(0, 6).join('\n');
  const s = spawnSync('node', [path.join(ROOT, 'tools', 'sections', 'apply.js')], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 28 });
  if (s.status !== 0) return 'sections/apply.js: ' + (s.stderr || s.stdout || '').split('\n').slice(0, 4).join('\n');
  return null;
}
/* every string of the pack, with its path */
function walk(v, p, out) { if (typeof v === 'string') out.push([p, v]); else if (Array.isArray(v)) v.forEach((x, i) => walk(x, p + '[' + i + ']', out)); else if (v && typeof v === 'object') Object.keys(v).forEach(k => walk(v[k], p + '.' + k, out)); return out; }
function sameAsBase() {
  if (!fs.existsSync(BASE)) return 'no baseline: run "tags.js base ' + LANG + '" on the untagged course first';
  const a = JSON.parse(fs.readFileSync(BASE, 'utf8')), b = walk(loadPack(PACK), '', []);
  /* SECS is rebuilt from the bodies by tools/sections/apply.js: compared by tools/sections/dump.js, not here */
  const fa = a.filter(x => !/^\.SECS/.test(x[0])), fb = b.filter(x => !/^\.SECS/.test(x[0]));
  if (fa.length !== fb.length) return 'the pack has ' + fb.length + ' strings, the baseline ' + fa.length;
  for (let i = 0; i < fa.length; i++) if (fa[i][0] !== fb[i][0] || normPack(fa[i][1]) !== normPack(fb[i][1])) return 'moved: ' + fb[i][0] + '\n  was: ' + fa[i][1].slice(0, 160) + '\n  now: ' + fb[i][1].slice(0, 160);
  return null;
}

/* ---- lint: where a run may stand */
const PROSE = [/^\.DECKS\.[^[]+\[\d+\]\[3\]$/, /^\.DESC\./, /^\.LESSONS\[\d+\]\.(title|blurb|body)$/, /^\.CHECKS\.[^[]+\[\d+\]\[(0|3)\]$/, /^\.PRACTICE\.[^[]+\[\d+\]\.(why|hint|p)$/, /^\.SECS\./];
function lint(c) {
  const bad = [], all = walk(c, '', []), types = {}; Object.entries(c.PRACTICE || {}).forEach(([id, l]) => l.forEach((it, i) => { types['.PRACTICE.' + id + '[' + i + ']'] = it.t; }));
  let runs = 0, fields = 0;
  all.forEach(([p, s]) => { if (!/[‹›]/.test(s)) return; fields++; runs += (s.match(RUN) || []).length;
    if (!wellFormed(s)) return bad.push([p, 'a run is open, empty, starts or ends with a space, or holds markup', s]);
    const mq = p.match(/^(\.PRACTICE\.[^[]+\[\d+\])\.q$/); const ok = PROSE.some(r => r.test(p)) || (mq && types[mq[1]] === 'mc');
    if (!ok) return bad.push([p, 'a run in a field that is not prose (a target position, an answer, an option, a name or a key)', s]);
    if (/\.body$/.test(p) && (/\{\{[^}]*[‹›][^}]*\}\}/.test(s) || /<td class="k">[^<]*[‹›]/.test(s) || /<(b|i)>[^<]*[‹›][^<]*<\/\1>/.test(s))) bad.push([p, 'a run inside an example token, an example cell or bold / italics', s.match(/.{0,30}(\{\{[^}]*[‹›]|<td class="k">[^<]*[‹›]|<(b|i)>[^<]*[‹›]).{0,30}/)[0]]); });
  return { bad, runs, fields };
}

if (cmd === 'base') {
  fs.writeFileSync(BASE, JSON.stringify(walk(loadPack(PACK), '', []))); console.log('baseline of ' + ID + ' saved: ' + path.relative(ROOT, BASE));
} else if (cmd === 'draft') {
  if (!fs.existsSync(BASE)) { console.error('run "tags.js base ' + LANG + '" first'); process.exit(1); }
  const W = lexicon(loadPack(PACK)), st = { tags: 0, strong: 0 }, keep = {};
  FILES.forEach(f => { const p = path.join(SRC, f), src = fs.readFileSync(p, 'utf8'); keep[f] = src; fs.writeFileSync(p, src.split('\n').map(l => draftLine(l, f, W, st)).join('\n')); });
  const err = build() || sameAsBase(); if (err) { FILES.forEach(f => fs.writeFileSync(path.join(SRC, f), keep[f])); build(); console.error('draft undone: ' + err); process.exit(1); }
  console.log(ID + ': draft wrote ' + st.tags + ' runs, ' + st.strong + ' bold runs became <strong>; the pack is the baseline once the marking is taken out');
} else if (cmd === 'sheet') {
  const dir = A3; fs.mkdirSync(dir, { recursive: true }); let n = 0;
  FILES.forEach(f => { const lines = fs.readFileSync(path.join(SRC, f), 'utf8').split('\n'); let part = 1, buf = [], size = 0;
    const flush = () => { if (!buf.length) return; fs.writeFileSync(path.join(dir, 'sheet-' + f.replace(/[/.]/g, '_') + '-' + part + '.tsv'), buf.join('\n') + '\n'); n++; part++; buf = []; size = 0; };
    lines.forEach((l, i) => { if (!l.trim()) return; buf.push(f + ':' + (i + 1) + '\t' + l); size += l.length; if (size > 45000 && !/^\s*</.test(lines[i + 1] || '')) flush(); }); flush(); });
  console.log(n + ' sheet(s) in ' + dir);
} else if (cmd === 'apply') {
  const rows = fs.readFileSync(A3, 'utf8').split('\n').filter(x => x.trim()).map((x, i) => { try { return JSON.parse(x); } catch (e) { console.error('line ' + (i + 1) + ' is not JSON'); process.exit(1); } });
  const src = {}, keep = {}; FILES.forEach(f => { keep[f] = fs.readFileSync(path.join(SRC, f), 'utf8'); src[f] = keep[f].split('\n'); });
  const errs = []; let changed = 0; const seen = new Set();
  rows.forEach(r => { const m = String(r.k || '').match(/^(.+):(\d+)$/); if (!m || !src[m[1]]) return errs.push((r.k || '?') + ': no such file or line key');
    if (seen.has(r.k)) return errs.push(r.k + ': given twice'); seen.add(r.k);
    const old = src[m[1]][+m[2] - 1]; if (old === undefined) return errs.push(r.k + ': no such line'); if (typeof r.text !== 'string' || /\n/.test(r.text)) return errs.push(r.k + ': text must be one line');
    if (norm(old) !== norm(r.text)) { let i = 0; const a = norm(old), b = norm(r.text); while (i < a.length && a[i] === b[i]) i++; return errs.push(r.k + ': more than the marking changed near «' + a.slice(Math.max(0, i - 20), i + 30) + '» → «' + b.slice(Math.max(0, i - 20), i + 30) + '»'); }
    if (!wellFormed(r.text)) return errs.push(r.k + ': a run is open, empty, starts or ends with a space, or holds < > { } |');
    if (old !== r.text) { src[m[1]][+m[2] - 1] = r.text; changed++; } });
  if (errs.length) { console.error(errs.slice(0, 40).join('\n')); console.error(errs.length + ' row(s) refused; nothing written'); process.exit(1); }
  if (DRY) { console.log('ok: ' + changed + ' line(s) would change, marking only and well formed (nothing written, nothing rebuilt)'); process.exit(0); }
  FILES.forEach(f => fs.writeFileSync(path.join(SRC, f), src[f].join('\n')));
  const undo = () => { FILES.forEach(f => fs.writeFileSync(path.join(SRC, f), keep[f])); build(); };
  let err = build() || sameAsBase(); if (!err) { const l = lint(loadPack(PACK)); if (l.bad.length) err = l.bad.slice(0, 20).map(x => x[0] + ': ' + x[1] + '\n    ' + String(x[2]).slice(0, 200)).join('\n'); }
  if (err) { undo(); console.error(err); console.error('refused: the rebuilt course is not the baseline plus marking; nothing written'); process.exit(1); }
  console.log('applied ' + changed + ' line(s) to tools/content/' + LANG + '/; pack rebuilt, equal to the baseline once the marking is taken out');
} else if (cmd === 'lint') {
  const c = loadPack(PACK), l = lint(c);
  l.bad.slice(0, 40).forEach(x => console.log('  ' + x[0] + ': ' + x[1] + ' · ' + String(x[2]).slice(0, 160)));
  console.log(ID + ': ' + l.runs + ' tagged runs in ' + l.fields + ' fields; ' + l.bad.length + ' misplaced or malformed'); process.exit(l.bad.length ? 1 : 0);
} else { console.error('unknown command ' + cmd); process.exit(2); }
