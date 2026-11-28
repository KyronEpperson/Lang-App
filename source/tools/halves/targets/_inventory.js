/* Lang App · two halves: a reusable "by marks" target whose test for "is this target text?" is the COURSE'S OWN INVENTORY.
   For Latin-script targets with no syllable grammar to classify text (Spanish first; then Indonesian, Tagalog, Portuguese, French, Italian, German …).
   docs/briefs/x-es-design.md explains the model; docs/briefs/x-vi-design.md is the "by marks" machinery it plugs into (marks.jsonl, validate.js, missingSpans).

   The inventory is everything the course itself puts in a target-only POSITION (never guessed from the text):
     card fronts, dialogue lines, example sentences, pattern text and examples, lesson sentences ({{ex:…}}), in-lesson card fronts, tile fronts,
     greetings, and the answers / options / wrong typed answers / fill sentence of fill, order and type items.
   mc and check options are NOT in it: they are what the inventory classifies (one decision per item, from its key answer; export_target.js).
   From it come a phrase set (whole strings, punctuation-free, lower case) and a lexicon (every word of those strings, lower case).

   Usage (one small file per language, e.g. targets/es.js):
     module.exports = require('./_inventory.js').inventoryTarget({ code: 'es', field: 'es', name: 'Spanish', letters: [...], pronParts: [...],
       homographs: [...], diacritic: /[ñáéíóúü]/i, respell: <module path>, profile: <profile.json path> });
   The returned object is a TARGETS entry (lib.js). Its inventory is filled by export_target.js through useCourse(pack course) before anything is
   classified; any other tool (validate.js, mk_native.js, selftest) gets it lazily from target/<t>/ (the same positional fields, so the answers agree). */
'use strict';
const fs = require('fs'), path = require('path');

/* Latin letters incl. precomposed accented letters (text is NFC) */
const LAT_WORD = /[A-Za-zÀ-ÖØ-öø-ɏḀ-ỿ]+/g;
const TOKEN_RX = /\{\{[a-z]+:[^}]*\}\}/g;
const words = s => String(s == null ? '' : s).normalize('NFC').match(new RegExp(LAT_WORD.source, 'g')) || [];
const phraseKey = s => words(s).join(' ').toLowerCase();

function inventoryTarget(cfg) {
  const LETTERS = new Set((cfg.letters || []).map(x => x.toLowerCase()));
  const PRON_PART = new Set(cfg.pronParts || []);
  const HOMO = new Set((cfg.homographs || []).map(x => x.toLowerCase()));
  const DIA = cfg.diacritic || /[^\x00-\x7f]/;
  const PROSE_OK = new Set((cfg.proseOk || []).map(x => x.toLowerCase()));
  let RS = null, PR = null;
  const respellMod = () => (RS || (RS = require(cfg.respell)));
  const pronRx = () => (PR || (PR = new RegExp(JSON.parse(fs.readFileSync(cfg.profile, 'utf8')).pronPattern)));
  let inv = null; /* { phrases: Set, lex: Set, source } */
  /* items: explicit per-item classes, { '<lesson>.k<n>' | '<lesson>.<nn>': 'target' | 'prose' } (check ids and mc practice ids exactly as
     export_target.js writes them). An item is 'target' only if every option is target text or language-neutral material; one option of English
     prose makes it 'prose'. The table is read by itemIsValue through the item's options and key (the hook gets no id): useCourse records which ids
     carry which (options, key), and refuses an unknown id, a bad class, or two ids with the same options but different classes. */
  const ITEMS = cfg.items || null; let itemSig = null;
  const sigOf = (opts, key) => JSON.stringify([opts, key]);
  function indexItems(c) {
    if (!ITEMS) return;
    const ids = new Set(); itemSig = new Map();
    const note = (id, opts, key) => { ids.add(id); const k = sigOf(opts, key); if (!itemSig.has(k)) itemSig.set(k, []); itemSig.get(k).push(id); };
    Object.entries(c.CHECKS || {}).forEach(([lid, list]) => list.forEach((ch, i) => note(lid + '.k' + (i + 1), ch[1], ch[2])));
    Object.entries(c.PRACTICE || {}).forEach(([lid, list]) => list.forEach((it, i) => { if (it.t === 'mc') note(lid + '.' + String(i + 1).padStart(2, '0'), it.o, 0); }));
    Object.entries(ITEMS).forEach(([id, v]) => { if (!ids.has(id)) throw new Error(cfg.code + ' items: no check or mc item ' + id);
      if (v !== 'target' && v !== 'prose') throw new Error(cfg.code + ' items: ' + id + ' must be target or prose, not ' + v); });
    itemSig.forEach(list => { const v = new Set(list.map(id => ITEMS[id] || '')); if (v.size > 1) throw new Error(cfg.code + ' items: same options, different classes: ' + list.join(', ')); });
  }

  function build(strings, source) {
    const phrases = new Set(), lex = new Set();
    strings.forEach(s => { if (s == null || typeof s !== 'string') return; const k = phraseKey(s.replace(/_+/g, ' ')); if (k) phrases.add(k);
      const t = String(s).normalize('NFC'), W = new RegExp(LAT_WORD.source, 'g'); let w;
      while ((w = W.exec(t))) { if (t[w.index - 1] === '_' || t[w.index + w[0].length] === '_') continue; lex.add(w[0].toLowerCase()); } });
    inv = { phrases, lex, source };
    return inv;
  }
  /* from an en-<t> pack course object (export_target.js) */
  function useCourse(c) {
    const S = [];
    Object.values(c.DECKS || {}).forEach(d => d.forEach(cd => S.push(cd[0])));
    Object.values(c.DIALOG || {}).forEach(v => S.push(v[0], v[1]));
    Object.values(c.EXAMPLES || {}).forEach(v => S.push(v[0]));
    (c.PATTERNS || []).forEach(p => S.push(p[0], p[2]));
    (c.GREET || []).forEach(g => S.push(g[0]));
    (c.LESSONS || []).forEach(l => {
      String(l.body || '').replace(TOKEN_RX, tok => { let m = tok.match(/^\{\{ex:([^|}]*)\|/); if (m) S.push(m[1]);
        m = tok.match(/^\{\{tiles:([^}]*)\}\}$/); if (m) m[1].split(' ').forEach(x => S.push(x.split('=')[0])); return tok; });
      const walk = s => { if (Array.isArray(s)) s.forEach(walk); else if (s && Array.isArray(s.cards)) s.cards.forEach(cd => S.push(cd[0])); };
      walk(l.sections || []);
    });
    Object.values(c.PRACTICE || {}).forEach(list => list.forEach(it => { if (it.t === 'mc') return; [].concat(it.a || [], it.o || [], it.x || []).forEach(x => S.push(x)); if (it.t === 'fill') S.push(it.q); }));
    indexItems(c);
    return build(S, 'pack');
  }
  /* from an exported target half (same positional fields) */
  function fromHalf(dir) {
    const rd = f => { const p = path.join(dir, f); if (!fs.existsSync(p)) return []; return fs.readFileSync(p, 'utf8').split('\n').filter(l => l.trim()).map(l => JSON.parse(l)); };
    const K = cfg.field, S = [];
    rd('cards.jsonl').forEach(r => S.push(r[K])); rd('dialog.jsonl').forEach(r => S.push(r.a, r.b)); rd('examples.jsonl').forEach(r => S.push(r[K]));
    rd('patterns.jsonl').forEach(r => S.push(r[K], r.ex)); rd('sentences.jsonl').forEach(r => S.push(r[K]));
    rd('lessons.jsonl').forEach(l => { const walk = s => { if (Array.isArray(s)) s.forEach(walk); else if (s && Array.isArray(s.cards)) s.cards.forEach(cd => S.push(cd[K])); };
      walk(l.sections || []); (l.tiles || []).forEach(t => t.items.forEach(i => S.push(i.f))); });
    rd('practice.jsonl').forEach(it => { if (it.t === 'mc') return; [].concat(it.a || [], it.o || [], it.x || []).forEach(x => S.push(x)); if (it.t === 'fill') S.push(it.q); });
    const cj = path.join(dir, 'course.json'); if (fs.existsSync(cj)) (JSON.parse(fs.readFileSync(cj, 'utf8')).greet || []).forEach(g => S.push(g[K]));
    return build(S, dir);
  }
  const I = () => inv || fromHalf(path.join(process.env.HALVES_DIR || path.resolve(__dirname, '..'), 'target', cfg.code));

  const inLex = w => I().lex.has(String(w).normalize('NFC').toLowerCase());
  const isLetter = s => LETTERS.has(String(s).trim().toLowerCase());
  /* a whole pronunciation line of the course (pronPattern) that is unmistakably a line: has a hyphen or a CAPITAL stressed chunk */
  const isLine = s => { s = String(s == null ? '' : s).trim(); if (!s) return false; if (/^[A-Z]+$/.test(s)) return pronRx().test(s.toLowerCase()); /* one stressed chunk alone: "EE" */
    return pronRx().test(s) && /-|[A-Z]/.test(s); };
  const isPronPart = s => PRON_PART.has(String(s == null ? '' : s).trim());
  /* whole-string test (mc / check key answer, title, tile reading, in-lesson card front): a letter (group), a pronunciation line or piece, a phrase of the
     inventory, or a string whose words are all in the lexicon with at least one that is not an English homograph. Digits are never target text. */
  function isValue(s) {
    s = String(s == null ? '' : s).trim(); if (!s) return false;
    if (isLetter(s) || isPronPart(s) || isLine(s)) return true;
    if (/\d/.test(s)) return false;
    const w = words(s); if (!w.length) return false;
    if (I().phrases.has(phraseKey(s))) return true;
    /* enough of the words are the course's (a wrong form like «Soy enfermero.» or «Nuestras abuela» still reads as Spanish): all of one or two words but one,
       two thirds of a longer string, and at least one known word that is not an English homograph */
    const known = w.filter(inLex), n = w.length;
    if (!known.some(x => !HOMO.has(x.toLowerCase()))) return false;
    return n === 1 ? known.length === 1 : n === 2 ? known.length >= 1 : known.length * 3 >= n * 2;
  }
  /* one decision per mc / check item (export_target.js): its key answer, or failing that most of its options (the key may be a form the inventory lacks:
     «comes» among come / como / comen) */
  const autoItem = (opts, key) => isValue(opts[key]) || opts.filter(isValue).length * 2 > opts.length;
  /* an explicit class from cfg.items wins (known once useCourse has indexed the pack; only export_target.js decides items) */
  const itemIsValue = (opts, key) => { const ids = itemSig && itemSig.get(sigOf(opts, key)), v = ids && ITEMS[ids[0]]; return v ? v === 'target' : autoItem(opts, key); };
  /* text inside a MARKED position (bold, example cell): the position already says "a quoted form"; only English emphasis must be told apart,
     so English homographs count as target here */
  const isMarkedText = s => { s = String(s == null ? '' : s).trim(); if (!s) return false; if (isValue(s)) return true; if (/\d/.test(s)) return false; const w = words(s); return w.length > 0 && w.every(inLex); };

  /* the marked target spans of one native string, and the target-looking words left unmarked (same contract as lib.js viMarks).
     kind 'html' (lesson bodies): <b>…</b> holding target text (recorded WITH its tags); <td class="k"> cell text outside "(…)" glosses; <i>…</i> holding
     a pronunciation line (hyphen or capitals).
     Both kinds: "X (LINE)" and "X, LINE" where LINE is exactly respell(X) and a line of the course (self-certifying: both parts are marked); every word of
     the row's own target text (not single letters without a diacritic, not pieces next to a blank, not English homographs); extra.spans (hand-kept,
     tools/target/<t>/marks.extra.jsonl) wherever they occur as whole words. extra.not: words never taken from the row's own text.
     unmarked: words outside every span that are in the lexicon (not English homographs, two letters or more) or carry a target diacritic.

     TAGGED courses (cfg.tagged; docs/briefs/target-text-tags.md): the course text itself says which words are target text, by writing them inside
     ‹ › (U+2039 / U+203A), e.g. "A little more formal than ‹me llamo›." Then nothing is guessed: the spans are exactly the ‹…› runs (recorded WITH
     their delimiters, so a native half must keep them delimited), plus the positional ones (in lesson bodies every <b>…</b>, which is a taught
     target term, and every example cell; pronunciation lines in <i>; a "LINE" that is the respelling of the tagged text before it). The old rules
     become a LINT: a row's own target word, or a lexicon / diacritic word outside every mark is reported as unmarked, and the release test wants
     that report empty. A stray or nested delimiter, or a tag or
     token inside ‹…›, throws. */
  const TAGGED = !!cfg.tagged, TAG_RX = /‹([^‹›]*)›/g;
  function marks(kind, text, own, extra) {
    const s = String(text == null ? '' : text), taken = [], spans = [], ranges = [], lint = [];
    const free = (a, b) => taken.every(([x, y]) => b <= x || a >= y);
    let how = '';
    const add = (a, b) => { const v = s.slice(a, b); if (b > a && v.trim() && free(a, b)) { taken.push([a, b]); spans.push([a, v]); ranges.push([a, b, how]); } };
    const block = (a, b) => { if (free(a, b)) taken.push([a, b]); };
    const L1 = /[A-Za-zÀ-ÖØ-öø-ɏḀ-ỿ]/;
    let m;
    const TOK = new RegExp(TOKEN_RX.source, 'g'); while ((m = TOK.exec(s))) block(m.index, m.index + m[0].length);
    (cfg.names || []).forEach(nm => { let i = -1; while ((i = s.indexOf(nm, i + 1)) >= 0) block(i, i + nm.length); });
    if (TAGGED) { how = 'tag'; const T = new RegExp(TAG_RX.source, 'g'); let n = 0;
      while ((m = T.exec(s))) { n++; const inner = m[1]; if (!inner.trim() || inner !== inner.trim() || /[<>{}|]/.test(inner)) throw new Error(cfg.code + ' tags: bad ‹…› run «' + m[0] + '» (empty, padded with spaces, or holding a tag or token) in: ' + s.slice(Math.max(0, m.index - 40), m.index + 60));
        add(m.index, m.index + m[0].length); }
      if ((s.match(/[‹›]/g) || []).length !== n * 2) throw new Error(cfg.code + ' tags: a ‹ or › without its partner in: ' + s.slice(0, 160)); }
    how = 'extra';
    /* hand-kept spans first: they are explicit marks */
    ((extra && extra.spans) || []).forEach(sp => { if (!sp) return; let i = -1; while ((i = s.indexOf(sp, i + 1)) >= 0) { const pre = s[i - 1], post = s[i + sp.length];
      if ((pre && L1.test(pre) && L1.test(sp[0])) || (post && L1.test(post) && L1.test(sp[sp.length - 1]))) continue; add(i, i + sp.length); } });
    if (kind === 'html') {
      how = 'b'; const B = /<b>([^<]*)<\/b>/g; while ((m = B.exec(s))) { if (TAGGED || isMarkedText(m[1])) add(m.index, m.index + m[0].length); } /* tagged: bold in a body IS a taught target term (position, like an example cell); emphasis in the learner's language is <strong> */
      if (TAGGED) { const BX = /<b>(?![^<]*<\/b>)/g; while ((m = BX.exec(s))) lint.push([m.index, m.index + 3, 'b', 'bold run holding markup: ' + s.slice(m.index, m.index + 40)]); }
      how = 'pos';
      const K = /<td class="k">([^<]*)<\/td>/g; while ((m = K.exec(s))) { const st = m.index + m[0].indexOf('>') + 1, inner = m[1];
        const P = /\s*\(([^()]*)\)/g; let last = 0, p; const segs = []; while ((p = P.exec(inner))) { segs.push([last, p.index]); last = p.index + p[0].length; } segs.push([last, inner.length]);
        segs.forEach(([a, b]) => { const seg = inner.slice(a, b), lead = seg.length - seg.trimStart().length, t = seg.trim(); if (t && (TAGGED || isMarkedText(t))) add(st + a + lead, st + a + lead + t.length); }); }
      const IT = /<i>([^<]*)<\/i>/g; while ((m = IT.exec(s))) { if (isLine(m[1])) add(m.index + 3, m.index + 3 + m[1].length); }
      const TAG = /<[^>]+>/g; while ((m = TAG.exec(s))) block(m.index, m.index + m[0].length);
    }
    /* "X (LINE)" / "X, LINE": the k words before the opener respell to exactly LINE (k = words in LINE) */
    const PR = /(\(|, )([A-Za-z][A-Za-z\- ]*[A-Za-z])(?=\)|[.,;:!?]|\s*$)/g;
    while ((m = PR.exec(s))) { const line = m[2]; if (!pronRx().test(line)) continue; const k = line.split(' ').length;
      const before = s.slice(0, m.index), ws = []; const WR = new RegExp(LAT_WORD.source, 'g'); let w; while ((w = WR.exec(before))) ws.push([w.index, w.index + w[0].length]);
      if (ws.length < k) continue; const a = ws[ws.length - k][0], b = ws[ws.length - 1][1]; if (/[^\s¿¡?!.›]/.test(s.slice(b, m.index))) continue;
      let r = null; try { r = respellMod().respell(s.slice(a, b).replace(/[‹›]/g, '')); } catch (e) { r = null; }
      if (r === line && (/-|[A-Z]/.test(line) || inLex(s.slice(a, b)))) { how = 'prx'; if (TAGGED) { if (free(a, b)) { lint.push([a, b, 'prx', s.slice(a, b)]); block(a, b); } } else add(a, b); how = 'line'; const ls = m.index + m[1].length; add(ls, ls + line.length); } }
    /* words of the row's own target text */
    const NOT = new Set(((extra && extra.not) || []).map(x => String(x).toLowerCase()));
    const ownW = new Set(); (own || []).forEach(o => { const t = String(o == null ? '' : o).normalize('NFC'); const WO = new RegExp(LAT_WORD.source, 'g'); let w;
      while ((w = WO.exec(t))) { const x = w[0].toLowerCase(); if (t[w.index - 1] === '_' || t[w.index + w[0].length] === '_') continue;
        if (NOT.has(x)) continue; if (!DIA.test(x) && (x.length < 2 || HOMO.has(x))) continue; ownW.add(x); } });
    const unmarked = [];
    const WR = new RegExp(LAT_WORD.source, 'g');
    while ((m = WR.exec(s))) { const a = m.index, b = a + m[0].length; if (!free(a, b) || /['’]/.test(s[a - 1] || '')) continue; /* not the tail of an English contraction (you'll, don't) */
      const x = m[0].normalize('NFC').toLowerCase(); if (PROSE_OK.has(x)) continue;
      how = 'own';
      if (ownW.has(x)) { if (TAGGED) lint.push([a, b, 'own', m[0]]); else add(a, b); } else if (DIA.test(x) || (x.length > 1 && !HOMO.has(x) && inLex(x))) { unmarked.push(m[0]); lint.push([a, b, 'lex', m[0]]); } }
    /* tagged: everything the old rules would have marked or reported, outside ‹…›, is reported (the release wants none) */
    if (TAGGED) { unmarked.length = 0; if (extra && extra.lintOff) lint.length = 0; lint.forEach(x => unmarked.push(x[3])); }
    return { spans: spans.sort((x, y) => x[0] - y[0]).map(x => x[1]), unmarked, ranges: ranges.sort((x, y) => x[0] - y[0]), lint: lint.sort((x, y) => x[0] - y[0]) };
  }

  return { tagged: TAGGED, code: cfg.code, field: cfg.field, name: cfg.name, script: cfg.name, by: 'marks', runs: null, has: isValue, isValue, itemIsValue, leadRx: null, marks, useCourse,
    unmarkedNote: cfg.name + ' words of the course inventory, or with a ' + cfg.name + ' diacritic, outside every mark',
    /* exposed for tests and the design note */
    inventory: () => I(), isMarkedText, isLine, autoItem, items: ITEMS, reset: () => { inv = null; } };
}

module.exports = { inventoryTarget, LAT_WORD };
