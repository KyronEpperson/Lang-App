/* Compact authoring helpers for <lang>-en lessons (shared by every language; see docs/PIPELINE.md).
   Usage: const DSL = require('./_dsl.js')(profile); DSL.lesson(src). Expands the practice shorthand into docs/PRACTICE-SPEC.md items.
   mc:  ['mc', q, correct, wrong1, wrong2, wrong3, why]
   or:  ['or', p, 'tiles in order', 'distractor tiles', why]
   fi:  ['fi', q with __, p, 'a|a2', 'o1|o2|o3', why]
   ty:  ['ty', p, 'a|a2', hint, 'x1 x2', why]   (contraction/full-form variants are generated automatically) */
const PAIRS = [["i'm","i am"],["i'll","i will"],["i'd","i would"],["i've","i have"],["it's","it is"],["that's","that is"],["don't","do not"],["doesn't","does not"],["he's","he is"],["she's","she is"],["we're","we are"],["we've","we have"],["can't","cannot"],["isn't","is not"],
  ["didn't","did not"],["wasn't","was not"],["weren't","were not"],["won't","will not"],["aren't","are not"],["you're","you are"],["they're","they are"],["there's","there is"],["what's","what is"],["haven't","have not"],["hasn't","has not"],["he'll","he will"],["she'll","she will"],["we'll","we will"],["you'll","you will"],["they'll","they will"],["it'll","it will"],["wouldn't","would not"],["shouldn't","should not"],["couldn't","could not"],["you've","you have"],["they've","they have"],["mustn't","must not"]];
const NO_REV = new Set(["i've","we've","you've","they've"]); /* full form does not always contract naturally; only expand contraction → full for these */
const cap = (s, like) => (like[0] === like[0].toUpperCase() && like[0] !== like[0].toLowerCase()) ? s[0].toUpperCase() + s.slice(1) : s;
function variants(s) {
  let out = new Set([s]);
  for (let pass = 0; pass < 3; pass++) for (const v of [...out]) for (const [c, f] of PAIRS) {
    const rc = new RegExp('(^|[ ,])' + c.replace("'", "['’]") + '(?=[ ,.?!]|$)', 'i');
    if (rc.test(v)) out.add(v.replace(rc, (m, a) => a + cap(f, m.slice(a.length))));
    const rf = new RegExp('(^|[ ,])' + f + '(?=[ ,.?!]|$)', 'i');
    if (rf.test(v) && !NO_REV.has(c)) out.add(v.replace(rf, (m, a) => a + cap(c, m.slice(a.length))));
  }
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
  if (k === 'ty') { if (r.length !== 6) throw new Error('ty arity: ' + r[1]);
    const seen = new Set(), a = [];
    r[2].split('|').forEach(v => variants(v).forEach(x => { if (!seen.has(pn(x))) { seen.add(pn(x)); a.push(x); } }));
    const o = { t: 'type', p: r[1], a, hint: native(r[3]) ? r[3] : r[3] + TY_CUE }; if (r[4]) o.x = r[4].split(' '); o.why = r[5]; return o; }
  throw new Error('unknown item kind ' + k);
}
const lesson = L => ({ id: L.id, title: L.title, blurb: L.blurb, deck: L.deck, body: L.body, check: L.check, practice: L.practice.map(item) });
return { lesson, item, variants };
};
module.exports.variants = variants;
