/* Shared helpers for courses that teach a language to ENGLISH speakers (course id en-<t>). See docs/BUILD-PLAN-EN.md.
   Source per target, in tools/target/<t>/: profile.json, decks.js, extra.js, lessons-*.js. Output: packs/course-en-<t>.js. */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const check = t => { if (!/^[a-z]{2,4}$/.test(t || '') || t === 'en') throw new Error('usage: <target language code>, e.g. es'); if (!fs.existsSync(path.join(__dirname, t, 'profile.json'))) throw new Error('no tools/target/' + t + '/profile.json'); return t; };
const dir = t => path.join(__dirname, t);
/* a course still being written or reviewed has a HOLD file in its folder: its pack is built outside packs/ so a release of another course cannot pick it up */
const packPath = t => fs.existsSync(path.join(__dirname, t, 'HOLD')) ? path.join(require('os').tmpdir(), 'course-en-' + t + '.hold.js') : path.join(ROOT, 'packs', 'course-en-' + t + '.js');
const profile = t => JSON.parse(fs.readFileSync(path.join(dir(t), 'profile.json'), 'utf8'));
/* rows of " | "-separated fields; empty fields allowed ("a |  | c", trailing " |") */
function rows(text, n, label) {
  return String(text || '').split('\n').map(s => s.trim()).filter(Boolean).map((line, i) => {
    let l = line; while (l.includes(' | | ')) l = l.replace(' | | ', ' |  | '); if (/ \|$/.test(l)) l += ' ';
    const f = l.split(' | ').map(s => s.trim());
    if (f.length !== n) throw new Error(label + ' line ' + (i + 1) + ': expected ' + n + ' fields, got ' + f.length + ': ' + line);
    return f;
  });
}
/* practice shorthand (answers are in the target language, prompts and why in English):
   mc: ['mc', q, correct, wrong1, wrong2, wrong3, why]
   or: ['or', p, 'tiles in order', 'distractor tiles', why]      tiles split on spaces, or on " | " when the string contains " | " (languages without spaces, or multi-word tiles)
   fi: ['fi', q with __, p, 'a|a2', 'o1|o2|o3', why]
   ty: ['ty', p, 'a|a2', hint, 'x1 x2', why]
   Any row may end with the extra string '!strict': accent marks then count exactly (the accent is the point: tú / tu). */
const tiles = s => (s.includes(' | ') ? s.split(' | ') : s.split(' ')).map(x => x.trim()).filter(Boolean);
function item(r0) {
  const r = r0.slice(); let strict = false; if (r[r.length - 1] === '!strict') { strict = true; r.pop(); }
  const k = r[0]; let o;
  if (k === 'mc') { if (r.length !== 7) throw new Error('mc arity: ' + r[1]); o = { t: 'mc', q: r[1], o: [r[2], r[3], r[4], r[5]], why: r[6] }; }
  else if (k === 'or') { if (r.length !== 5) throw new Error('or arity: ' + r[1]); o = { t: 'order', p: r[1], a: tiles(r[2]), x: tiles(r[3]), why: r[4] }; }
  else if (k === 'fi') { if (r.length !== 6) throw new Error('fi arity: ' + r[1]); o = { t: 'fill', q: r[1], p: r[2], a: r[3].split('|'), o: r[4].split('|'), why: r[5] }; }
  else if (k === 'ty') { if (r.length !== 6) throw new Error('ty arity: ' + r[1]); o = { t: 'type', p: r[1], a: r[2].split('|'), hint: r[3] }; if (r[4]) o.x = tiles(r[4]); o.why = r[5]; }
  else throw new Error('unknown item kind ' + k);
  if (strict) o.strict = true; return o;
}
function load(t) {
  const D = dir(t), P = profile(t);
  /* decks*.js and extra*.js: several writers each own one file (decks-a.js + extra-a.js, …); all are merged */
  const ls = re => fs.readdirSync(D).filter(f => re.test(f)).sort();
  const DECKS = {}, DIALOG = {}, EXAMPLES = {}, PATTERNS = [];
  ls(/^decks.*\.js$/).forEach(f => { for (const [name, txt] of Object.entries(require(path.join(D, f)))) { if (DECKS[name]) throw new Error('deck «' + name + '» is defined twice'); DECKS[name] = rows(txt, 4, name); } });
  ls(/^extra.*\.js$/).forEach(f => { const X = require(path.join(D, f));
    for (const [k, a, b, tr] of rows(X.DIALOG, 4, f + ' DIALOG')) { if (DIALOG[k]) throw new Error('dup dialog ' + k); DIALOG[k] = [a, b, tr]; }
    for (const [k, s, tr] of rows(X.EXAMPLES, 3, f + ' EXAMPLES')) { if (EXAMPLES[k]) throw new Error('dup example ' + k); EXAMPLES[k] = [s, tr]; }
    rows(X.PATTERNS, 4, f + ' PATTERNS').forEach(r => PATTERNS.push(r)); });
  const files = fs.readdirSync(D).filter(f => /^lessons-.*\.js$/.test(f)).sort();
  const byId = {}; files.forEach(f => require(path.join(D, f)).forEach(L => { if (byId[L.id]) throw new Error('duplicate lesson id ' + L.id); byId[L.id] = L; }));
  return { P, DECKS, DIALOG, EXAMPLES, PATTERNS, byId, files };
}
module.exports = { ROOT, check, dir, packPath, profile, rows, item, tiles, load };
