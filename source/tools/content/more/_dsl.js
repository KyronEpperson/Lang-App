/* Compact authoring helpers for <lang>-en lessons (shared by every language; see docs/PIPELINE.md).
   Usage: const DSL = require('./_dsl.js')(profile); DSL.lesson(src). Expands the practice shorthand into docs/PRACTICE-SPEC.md items.
   mc:  ['mc', q, correct, wrong1, wrong2, wrong3, why]
   or:  ['or', p, 'tiles in order', 'distractor tiles', why]
   fi:  ['fi', q with __, p, 'a|a2', 'o1|o2|o3', why]
   ty:  ['ty', p, 'a|a2', hint, 'x1 x2', why]   (contraction/full-form variants are generated automatically, by the context rules below)
        ['ty', p, 'a|a2', hint, 'x1 x2', why, {nc: 1}]   nc = no contraction processing in either direction: a is exactly as written */
const PAIRS = [["i'm","i am"],["i'll","i will"],["i'd","i would"],["i've","i have"],["it's","it is"],["that's","that is"],["don't","do not"],["doesn't","does not"],["he's","he is"],["she's","she is"],["we're","we are"],["we've","we have"],["can't","cannot"],["isn't","is not"],
  ["didn't","did not"],["wasn't","was not"],["weren't","were not"],["won't","will not"],["aren't","are not"],["you're","you are"],["they're","they are"],["there's","there is"],["what's","what is"],["haven't","have not"],["hasn't","has not"],["he'll","he will"],["she'll","she will"],["we'll","we will"],["you'll","you will"],["they'll","they will"],["it'll","it will"],["wouldn't","would not"],["shouldn't","should not"],["couldn't","could not"],["you've","you have"],["they've","they have"],["mustn't","must not"]];
const NO_REV = new Set(["i've","we've","you've","they've"]); /* full form does not always contract naturally; only expand contraction → full for these */
const cap = (s, like) => (like[0] === like[0].toUpperCase() && like[0] !== like[0].toLowerCase()) ? s[0].toUpperCase() + s.slice(1) : s;
/* Context rules, so that every generated variant is real English (tools/content/contractions_test.js):
   1. A negative contraction is never expanded when it is inverted: before a personal pronoun ("…, don't you" ≠ "do not you"), at the
      start of a clause ("Isn't the weather nice", tags after a comma), or after a wh-word before a subject ("Why isn't the bus here").
      Imperative "Don't + verb" still expands.
   2. A positive auxiliary is never contracted at the end of a clause ("what time it is", "Yes, I am", "I think it is"), nor in "wh- is it".
   3. 's is "has" before got/gotten/been/had ("He's got a car" → "He has got a car"); before any other past participle it is ambiguous
      (is/has), so it is left as written; otherwise "is". 'd is "had" before better or a participle ("I'd seen" → "I had seen"), "would"
      before a base verb ("I'd like"); before read/put/come… (base = participle) it is left as written.
   4. Only the pronoun / wh-word contractions in PAIRS are touched: possessive 's (my brother's car), let's, o'clock never change. */
const PERS = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'there', 'one', 'anyone', 'anybody', 'someone', 'somebody', 'everyone', 'everybody']);
const WH = new Set(['why', 'what', 'where', 'when', 'who', 'how', 'which', 'whose']);
const ADV = new Set(['not', 'never', 'already', 'just', 'ever', 'always', 'really', 'also', 'still', 'finally', 'recently', 'probably', 'actually', 'definitely', 'only', 'even', 'all']);
const HAVE_ONLY = new Set(['got', 'gotten', 'been', 'had']);
const BASE_PP = new Set(['read', 'put', 'cut', 'hit', 'let', 'set', 'come', 'become', 'run', 'shut', 'quit', 'hurt', 'cost', 'spread', 'bet', 'burst', 'cast', 'beat', 'overcome', 'outrun', 'broadcast', 'forecast', 'upset', 'thrust', 'shed', 'split', 'spit', 'rid']);
/* irregular past participles that differ from the base form (closed class) */
const IRR_PP = new Set(('seen done gone gotten eaten taken given written known shown grown thrown flown drawn blown driven ridden risen arisen chosen spoken broken stolen frozen woken ' +
  'forgotten hidden bitten fallen beaten worn torn sworn borne shorn slain lain sewn sown mown hewn woven striven swollen shaken forbidden forgiven mistaken proven sung rung drunk swum begun ' +
  'sunk sprung shrunk stunk stung strung wrung clung flung slung swung hung spun stuck struck dug shone made said paid laid told sold held stood understood felt dealt meant slept kept swept ' +
  'wept crept leapt left lent bent sent spent built burnt dreamt learnt spelt spilt spoilt knelt lost shot sat spat met led fed bled bred fled sped slid lit fought sought bought brought ' +
  'thought caught taught found ground wound heard won withdrawn').split(' '));
const ADJ_ED = new Set(('married tired bored closed located called supposed used interested excited worried scared surprised embarrassed disappointed pleased retired divorced engaged dressed ' +
  'confused satisfied delayed crowded packed based included allowed named related involved exhausted amazed shocked annoyed frustrated relaxed stressed naked wicked sacred hundred beloved ' +
  'crooked rugged ragged aged talented skilled qualified experienced complicated hurt shut bound born upset').split(' '));
const DET = new Set(['the', 'a', 'an', 'my', 'your', 'his', 'her', 'our', 'their', 'its', 'this', 'that', 'these', 'those', 'some', 'any', 'every', 'no']);
const subj = w => !!w && (DET.has(w.lw) || PERS.has(w.lw) || /^[A-Z]/.test(w.w));
const PREFIX = /^(over|under|mis|re|un|out|fore|with|up)(?=[a-z]{3})/;
const lex = (set, w) => set.has(w) || (PREFIX.test(w) && set.has(w.replace(PREFIX, '')));
/* past participle (or ambiguous with one): irregular list, or a regular -ed form (not -eed: need, speed) */
const isPP = w => lex(IRR_PP, w) || lex(BASE_PP, w) || (/ed$/.test(w) && w.length > 3 && !/eed$/.test(w));
const TOK = /[^\s,.?!;:"“”()]+(?::[0-9]+)?/g;
function toks(s) { const t = []; let m; TOK.lastIndex = 0; while ((m = TOK.exec(s))) t.push({ w: m[0], lw: m[0].toLowerCase().replace(/’/g, "'"), st: m.index, en: m.index + m[0].length }); return t; }
const gapPunct = (s, a, b) => /[,.?!;:"“”()—–]/.test(s.slice(a, b));
const initial = (s, t, i) => i === 0 || gapPunct(s, t[i - 1].en, t[i].st);
const final = (s, t, i) => i === t.length - 1 || gapPunct(s, t[i].en, t[i + 1].st);
/* the next word that decides is/has or would/had: adverbs are skipped; a capitalised word (a name) counts as no participle */
const nextWord = (t, i) => { let j = i + 1; while (t[j] && ADV.has(t[j].lw)) j++; return !t[j] ? null : (/^[A-Z]/.test(t[j].w) && j > 0 ? '#name' : t[j].lw); };
/* the full form a contraction at t[i] may expand to here, or null */
function expandTo(s, t, i, c, f) {
  const nx = t[i + 1] ? t[i + 1].lw : null;
  if (/n't$/.test(c)) {
    if (nx && PERS.has(nx)) return null;
    if (initial(s, t, i)) return c === "don't" && nx && !final(s, t, i) && !subj(t[i + 1]) ? f : null;
    if (i > 0 && WH.has(t[i - 1].lw) && subj(t[i + 1])) return null;
    return f;
  }
  if (final(s, t, i) && /'(s|d)$/.test(c)) return null;
  if (/'s$/.test(c)) {
    let k = i; if (WH.has(c.slice(0, -2)) && t[i + 1] && PERS.has(t[i + 1].lw)) k = i + 1; /* What's he got / What's it called: decide on the word after the subject */
    const w = nextWord(t, k);
    if (w && HAVE_ONLY.has(w)) return f.replace(/ is$/, ' has');
    if (w && !/ing$/.test(w) && !lex(ADJ_ED, w) && isPP(w)) return null;
    return f;
  }
  if (/'d$/.test(c)) {
    const w = nextWord(t, i);
    if (!w || lex(BASE_PP, w)) return null;
    if (w === 'better' || HAVE_ONLY.has(w) || isPP(w)) return f.replace(/ would$/, ' had');
    return f;
  }
  return f;
}
/* may the full form starting at t[i] (n words) contract to c here? */
function contractOk(s, t, i, n, c) {
  if (NO_REV.has(c)) return false;
  if (/n't$/.test(c)) return true;
  const j = i + n - 1;
  if (final(s, t, j)) return false;
  if (t[j].lw === 'is' && t[j + 1] && t[j + 1].lw === 'it' && final(s, t, j + 1)) return false;
  /* a written-out is / would is never ambiguous; only "is got" / "would better" style input is left alone */
  if (/'s$/.test(c)) { const w = nextWord(t, j); if (w && HAVE_ONLY.has(w)) return false; }
  if (/'d$/.test(c)) { const w = nextWord(t, j); if (w && (w === 'better' || HAVE_ONLY.has(w))) return false; }
  return true;
}
/* every one-step change of s: [{s, std}] — std = the pair's own full form / contraction (not a has/had reading) */
function steps(s, pairs = PAIRS, noRev = NO_REV, firstOnly = false) {
  const out = [], t = toks(s);
  for (const [c, f] of pairs) {
    for (let i = 0; i < t.length; i++) if (t[i].lw === c) {
      const to = expandTo(s, t, i, c, f);
      if (to) { out.push({ s: s.slice(0, t[i].st) + cap(to, t[i].w) + s.slice(t[i].en), std: to === f }); if (firstOnly) break; }
    }
    if (noRev.has(c)) continue;
    const fw = f.split(' ');
    for (let i = 0; i + fw.length <= t.length; i++) {
      if (!fw.every((w, k) => t[i + k].lw === w && (k === 0 || !gapPunct(s, t[i + k - 1].en, t[i + k].st)))) continue;
      if (!contractOk(s, t, i, fw.length, c)) continue;
      const e = t[i + fw.length - 1].en;
      out.push({ s: s.slice(0, t[i].st) + cap(c, t[i].w) + s.slice(e), std: true });
      if (firstOnly) break;
    }
  }
  return out;
}
function variants(s, opt) {
  const out = new Set([s]);
  if (opt && opt.nc) return [s];
  /* first occurrence per pair, three passes (the historical order of the lists), then close over later occurrences */
  for (let pass = 0; pass < 3; pass++) for (const v of [...out]) for (const st of steps(v, PAIRS, NO_REV, true)) out.add(st.s);
  for (let n = -1; n !== out.size;) { n = out.size; for (const v of [...out]) for (const st of steps(v)) out.add(st.s); }
  return [...out];
}
const pn = s => s.replace(/’/g, "'").replace(/[.,!?~"“”]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
/* Cue injection: an mc question or a type hint written without any native-language text gets the profile's cue appended
   (labels.mcBlankCue / labels.typeHintCue). "Native text" = matches labels.cueTest, else profile.nativeScript.
   When both are null (e.g. Spanish: same script as English) nothing is injected and authors write the full native prompt. */
module.exports = profile => {
const src = (profile.labels && profile.labels.cueTest) || profile.nativeScript;
const HG = src ? new RegExp(src) : null;
const native = s => !HG || HG.test(s);
const MC_CUE = (profile.labels && profile.labels.mcBlankCue) || '', TY_CUE = (profile.labels && profile.labels.typeHintCue) || '';
function item(r) {
  const [k] = r;
  if (k === 'mc') { if (r.length !== 7) throw new Error('mc arity: ' + r[1]); return { t: 'mc', q: native(r[1]) ? r[1] : r[1] + MC_CUE, o: [r[2], r[3], r[4], r[5]], why: r[6] }; }
  if (k === 'or') { if (r.length !== 5) throw new Error('or arity: ' + r[1]); return { t: 'order', p: r[1], a: r[2].split(' '), x: r[3].split(' '), why: r[4] }; }
  if (k === 'fi') { if (r.length !== 6) throw new Error('fi arity: ' + r[1]); return { t: 'fill', q: r[1], p: r[2], a: r[3].split('|'), o: r[4].split('|'), why: r[5] }; }
  if (k === 'ty') { if (r.length !== 6 && r.length !== 7) throw new Error('ty arity: ' + r[1]);
    const opt = r[6] || {}; if (Object.keys(opt).some(k => k !== 'nc') || (opt.nc !== undefined && opt.nc !== 1)) throw new Error('ty options: only {nc: 1}: ' + r[1]);
    const seen = new Set(), a = [];
    r[2].split('|').forEach(v => variants(v, opt).forEach(x => { if (!seen.has(pn(x))) { seen.add(pn(x)); a.push(x); } }));
    const o = { t: 'type', p: r[1], a, hint: native(r[3]) ? r[3] : r[3] + TY_CUE }; if (r[4]) o.x = r[4].split(' '); o.why = r[5]; if (opt.nc) o.nc = 1; return o; }
  throw new Error('unknown item kind ' + k);
}
const lesson = L => ({ id: L.id, title: L.title, blurb: L.blurb, deck: L.deck, body: L.body, check: L.check, practice: L.practice.map(item) });
return { lesson, item, variants };
};
module.exports.variants = variants;
module.exports.steps = steps;
module.exports.PAIRS = PAIRS;
