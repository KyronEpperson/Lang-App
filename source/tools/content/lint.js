/* Cross-file lint for a generated <lang>-en pack (run by the lead before the cold review; see docs/PIPELINE.md).
   usage: node tools/content/lint.js <lang> [<pack path>]
   Reports (never edits):
     1. the same English text with more than one pronunciation aid (cards, lesson example rows, idioms)
     2. the same English text with more than one meaning on cards vs lesson rows (info only)
     3. English-side leftovers from the Korean course in places a language may localise (K-pop names in dialogues/examples)
     4. lesson deck links that do not exist; lessons with no practice set; practice sets outside 12-16 items
   Exit code 1 when (1) or (4) has findings. */
const fs = require('fs'), path = require('path');
const lang = process.argv[2]; if (!/^[a-z]{2}$/.test(lang || '')) { console.error('usage: node tools/content/lint.js <lang> [pack]'); process.exit(2); }
const file = process.argv[3] || path.join(__dirname, '..', '..', 'packs', 'course-' + lang + '-en.js');
const P = { course: {}, i18n: {} }; new Function('LANGAPP_PACKS', fs.readFileSync(file, 'utf8'))(P);
const C = P.course[lang + '-en']; if (!C) { console.error('no course in', file); process.exit(2); }
const norm = s => String(s).replace(/’/g, "'").replace(/[.!?…]+$/, '').replace(/\s+/g, ' ').trim().toLowerCase();
const pron = new Map(), mean = new Map(); const add = (m, en, v, where) => { if (m === pron) v = String(v || '').replace(/\s*[（(][^）)]*[）)]\s*$/, ''); /* a trailing (tag) is a collision note, not part of the reading */ if (!en || !v) return; const k = norm(en); if (!m.has(k)) m.set(k, new Map()); const mm = m.get(k); if (!mm.has(v)) mm.set(v, []); mm.get(v).push(where); };
Object.keys(C.DECKS || {}).forEach(d => C.DECKS[d].forEach(c => { add(pron, c[0], c[1], 'deck ' + d); add(mean, c[0], c[2], 'deck ' + d); }));
(C.LESSONS || []).forEach(l => { const re = /\{\{ex:([^|}]*)\|([^|}]*)\|([^}]*)\}\}/g; let m; while ((m = re.exec(l.body || ''))) { add(pron, m[1], m[2], 'lesson ' + l.id); add(mean, m[1], m[3], 'lesson ' + l.id); } });
(C.IDIOMS || []).forEach(x => add(pron, x[0], x[2], 'idiom'));
let bad = 0; const out = [];
for (const [k, mm] of pron) if (mm.size > 1) { bad++; out.push('PRON  "' + k + '": ' + [...mm].map(([v, w]) => v + ' [' + [...new Set(w)].join(', ') + ']').join('  ≠  ')); }
let info = 0; for (const [k, mm] of mean) if (mm.size > 1) { info++; if (info <= 15) out.push('mean  "' + k + '": ' + [...mm.keys()].join('  |  ')); }
const KP = /\b(BTS|Jimin|Blackpink|K-drama|K-dramas|Gangnam|Minji|Seoul National)\b/; let left = 0;
const scan = (s, where) => { if (typeof s === 'string' && KP.test(s)) { left++; if (left <= 12) out.push('left  ' + where + ': ' + s.slice(0, 90)); } };
Object.keys(C.DIALOG || {}).forEach(k => (C.DIALOG[k] || []).forEach(s => scan(s, 'dialog ' + k))); Object.keys(C.EXAMPLES || {}).forEach(k => [].concat(C.EXAMPLES[k] || []).forEach(s => scan(s, 'example ' + k)));
const decks = new Set(Object.keys(C.DECKS || {}));
(C.LESSONS || []).forEach(l => { if (l.deck && !decks.has(l.deck)) { bad++; out.push('LINK  lesson ' + l.id + ' → missing deck ' + l.deck); } const pr = (C.PRACTICE || {})[l.id]; if (!pr) { bad++; out.push('PRAC  lesson ' + l.id + ' has no practice set'); } else if (pr.length < 12 || pr.length > 16) { bad++; out.push('PRAC  lesson ' + l.id + ' has ' + pr.length + ' items'); } });
console.log(out.join('\n')); console.log('lint ' + lang + ': ' + bad + ' blocking · ' + info + ' meaning variants (info) · ' + left + ' K-pop leftovers (info)'); process.exit(bad ? 1 : 0);
