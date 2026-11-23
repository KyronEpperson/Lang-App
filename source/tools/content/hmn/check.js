/* hmn-en writer and reviewer check: what gen / validate / parity / rpa_check / coverage do NOT catch for this course.
   usage: node tools/content/hmn/check.js <pack.js> [--only id,id,...] [--list-type]
          <pack.js> is a scratch pack made with  node tools/content/gen.js hmn <pack.js>
          --only     limit the report to these lesson ids, deck names or deck indexes (your own files)
          --list-type  print every type item (prompt => accepted answers) for the typed-answer read-through
   ERRORS (exit 1):
     E1  Hangul or Vietnamese letters anywhere (scaffold placeholders left over; Hmong RPA and the English side use plain ASCII letters).
     E2  a practice why, a check question or explanation, or a lesson blurb with no Hmong word (labels.cueTest): profile hmn.md §7 writer rule
         (validate.js only demands that these are non-empty when nativeScript is null).
     E3  Korea- or Vietnam-specific items left on the English side (Hanoi, Vietnam, Minh, Nguyen, Seoul, Busan, Jeju, Daegu, Korea, Korean, kimchi, won as money, K-pop, BTS, Han Kang,
         Jenny Park, bias, suffering, tiger distractor, steak, subway, Minji, Mr. Kim): localise them (docs/briefs/hmn-*.md, common note §4).
     E4  a type item whose prompt has nws while an accepted answer has he / she / it / him / her / his / its, and the prompt carries no cue
         «(txiv neej)», «(poj niam)», «(tsiaj)», «(khoom)» (profile §10 cue rule 1); a prompt that names the person instead of nws needs no cue.
   WARNINGS (read each one; fix or leave with a reason in your report):
     W1  a type item whose first answer is not Simple Present (past form, will, going to, have + participle, was / were, be + -ing) and whose
         prompt has no Hmong time word (nag hmo, tag kis, tam sim no, hnub no, lawm, yuav, twb, tab tom, nyuam qhuav) and no bracketed tense cue «(past tense)», «(use will)», «(use have)» ….
     W2  a type item with a tag question (", isn't it", ", don't you" ...) that has no nc: 1 (docs/PIPELINE.md §2).
     (Full forms of contractions are checked by validate.js on the generated pack: a missing pair fails there.)
     W3  a card meaning, idiom gloss or pause gloss equal to its English after removing a bracket (the validator passes "pizza (pizza)").
   Hmong spelling and glossary coverage are NOT checked here: run rpa_check.js and coverage.js as the brief says. */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..', '..');
const LIB = require(path.join(ROOT, 'tools', 'content', 'lib.js'));
const a = process.argv.slice(2);
const packFile = a.find(x => /\.js$/.test(x));
if (!packFile) { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(2); }
const oi = a.indexOf('--only'); const ONLY = oi >= 0 ? new Set((a[oi + 1] || '').split(',').filter(Boolean)) : null;
const LIST = a.includes('--list-type');
const PROFILE = LIB.loadProfile('hmn');
const CUE = new RegExp(PROFILE.labels.cueTest);
const { C } = LIB.loadPack(packFile, 'hmn');
const errs = [], warns = [];
const E = (code, where, msg) => errs.push(code + '  ' + where + ': ' + msg);
const W = (code, where, msg) => warns.push(code + '  ' + where + ': ' + msg);
const want = (...keys) => !ONLY || keys.some(k => ONLY.has(String(k)));

const HANGUL = /[ᄀ-ᇿ㄰-㆏가-힯]/;
const VIET = /[ăâđêôơưĂÂĐÊÔƠƯàảãạằẳẵặầẩẫậèẻẽẹềểễệìỉĩịòỏõọồổỗộờởỡợùủũụừửữựỳỷỹỵ]/;
const KOREA = /\b(Vietnam|Vietnamese|Hanoi|Saigon|Ho Chi Minh|Da Nang|Nguyen|Minh|Seoul|Busan|Jeju|Daegu|Incheon|Gangnam|Korea|Korean|Koreans|kimchi|bibimbap|bulgogi|soju|K-pop|K-drama|BTS|Jimin|Han Kang|Jenny Park|bias|suffered|suffering|tiger|steak|[Mm]edium rare|subway|Minji|Jisoo|Minho|Mr\. Kim|Ms\. Kim|under Kim|Ms\. Park|Mr\. Park|Chuseok|Seollal|hanbok)\b|\bwon\b(?! ?'t)(?=[ .,!?]|$)/;
const MONEY_WON = /\b(thousand|hundred|million|fifty|ten|[0-9,]+) won\b/;

/* E1: every string in the pack */
const walk = (o, p) => { if (typeof o === 'string') { if (HANGUL.test(o) || VIET.test(o)) E('E1', p, 'placeholder letters left: ' + o.slice(0, 80)); } else if (Array.isArray(o)) o.forEach((x, i) => walk(x, p + '[' + i + ']')); else if (o && typeof o === 'object') Object.entries(o).forEach(([k, v]) => { if (HANGUL.test(k) || VIET.test(k)) E('E1', p + '.' + k, 'placeholder letters in a key'); walk(v, p + '.' + k); }); };
const view = Object.assign({}, C, { LESSONS: Object.fromEntries((C.LESSONS || []).map(l => [l.id, l])) });
walk(view, 'pack');
if (ONLY) { const keep = errs.filter(x => !x.startsWith('E1') || [...ONLY].some(k => x.includes('.' + k + '.') || x.includes('.' + k + '[') || x.includes('.' + k + ':'))); errs.length = 0; errs.push(...keep); }

/* decks: E3 on targets, W4 on meanings */
const unbr = s => String(s).replace(/\([^()]*\)/g, ' ').toLowerCase().replace(/[’]/g, "'").replace(/[\s.!?,…"“”]+/g, ' ').trim();
Object.keys(C.DECKS).forEach((d, i) => { if (!want(d, i, i + 1)) return; C.DECKS[d].forEach((c, j) => {
  const w = 'deck ' + (i + 1) + ' «' + d + '» card ' + j;
  if (KOREA.test(c[0]) || MONEY_WON.test(c[0])) E('E3', w, c[0]);
  if (unbr(c[2]) === unbr(c[0]) || !unbr(c[2])) W('W3', w, 'meaning is the English word again once the bracket is removed: ' + c[2]);
}); });
if (want('DIALOG', 'EXAMPLES')) { for (const [k, v] of Object.entries(C.DIALOG)) if (KOREA.test(v[0] + ' / ' + v[1]) || MONEY_WON.test(v[0] + v[1])) E('E3', 'DIALOG ' + k, v[0] + ' / ' + v[1]);
  for (const [k, v] of Object.entries(C.EXAMPLES)) if (KOREA.test(v[0]) || MONEY_WON.test(v[0])) E('E3', 'EXAMPLES ' + k, v[0]); }
if (want('IDIOMS', 'PAUSE')) { (C.PAUSE.idioms || []).forEach((x, i) => { if (unbr(x[1]) === unbr(x[0])) W('W3', 'IDIOMS #' + i, x[1]); });
  for (const [k, s] of Object.entries(C.PAUSE.sets)) s[1].forEach((x, i) => { if (unbr(x[1]) === unbr(x[0])) W('W3', 'PAUSE ' + k + ' #' + i, x[1]); }); }

/* lessons */
const TIME = /\b([Nn]ag hmo|[Tt]ag kis|[Tt]am sim no|[Hh]nub no|lawm|[Yy]uav|[Tt]wb|[Tt]ab tom|[Nn]yuam qhuav)\b|\([^)]*\b(past|will|going to|have|has|had|Present Perfect|Simple Past|Past Continuous|Present Continuous|continuous|-ing|was|were|did|would|should)\b[^)]*\)/i;
const PRON3 = /\b(he|she|it|him|her|his|its|he's|she's|it's|he'll|she'll|it'll)\b/i;
const NWSCUE = /\((txiv neej|poj niam|tsiaj|khoom)\)/;
/* names that count as a cue instead of nws: single capitalised entries of the two ALLOW files (given and clan names, Mai, Tou, Vang …) */
const IRR = new Set('went ate saw bought came got made took met had said told found left gave knew thought brought sent spent wrote drank drove flew forgot lost paid ran sat slept spoke stood swam taught understood woke wore won began broke chose fell felt heard kept read rode rang sang sold shut sang threw was were did'.split(' '));
const PERF = /\b(have|has|haven't|hasn't|'ve|'s)\s+(never\s+|ever\s+|already\s+|just\s+|not\s+)?(been|seen|done|gone|eaten|taken|given|written|known|made|had|met|bought|found|lost|read|heard|\w+ed)\b/i;
const NONPRES = s => PERF.test(s.replace(/[’]/g, "'")) || (s => { const ws = s.toLowerCase().replace(/[’]/g, "'").split(/[^a-z']+/).filter(Boolean);
  return ws.some(w => IRR.has(w) || /^(will|won't|wasn't|weren't|didn't|hadn't|going|been)$/.test(w) || /'ll$/.test(w) || (/ed$/.test(w) && w.length > 4 && !/(united|need|feed|seed|speed|bed|red|tired|bored|married|interested|excited|worried|scared|closed|used|called|named|located|retired|divorced|surprised)$/.test(w)) || /ing$/.test(w) && ws.some(x => /^(am|is|are|i'm|you're|we're|they're|he's|she's|it's)$/.test(x))); })(s);
const TAG = /,\s*(isn't|aren't|wasn't|weren't|don't|doesn't|didn't|won't|can't|haven't|hasn't|is|are|do|does|did|will|can|have|has)\s+(it|he|she|they|you|we|i|there)\b/i;
const typeList = [];
for (const l of C.LESSONS) {
  if (!want(l.id)) continue;
  const id = l.id;
  if (!CUE.test(l.blurb || '')) E('E2', id + ' blurb', 'no Hmong word: ' + l.blurb);
  (C.CHECKS[id] || []).forEach((q, i) => {
    if (!CUE.test(q[0] || '')) E('E2', id + '#check' + i + ' question', q[0]);
    if (!CUE.test(q[3] || '')) E('E2', id + '#check' + i + ' explanation', q[3]);
    if (q[1].some(o => KOREA.test(o) || MONEY_WON.test(o))) E('E3', id + '#check' + i, q[1].join(' / '));
  });
  const bodyEx = [...(l.body || '').matchAll(/\{\{ex:([^|}]*)\|/g)].map(m => m[1]);
  bodyEx.forEach(s => { if (KOREA.test(s) || MONEY_WON.test(s)) E('E3', id + ' body example', s); });
  (C.PRACTICE[id] || []).forEach((it, i) => {
    const w = id + '#' + i + ' (' + it.t + ')';
    if (it.why !== undefined && !CUE.test(it.why)) E('E2', w + ' why', 'no Hmong word: ' + it.why);
    const eng = [it.t === 'fill' ? it.q : '', it.t === 'type' ? it.hint : '', ...(it.o || []), ...(it.a || []), ...(it.x || [])].filter(s => typeof s === 'string').join(' | ');
    if (KOREA.test(eng) || MONEY_WON.test(eng)) E('E3', w, eng.slice(0, 160));
    if (it.t !== 'type') return;
    const p = it.p || '', A = it.a || [];
    typeList.push(w + '\n    p: ' + p + '\n    a: ' + A.join(' | ') + (it.nc ? '   [nc]' : ''));
    if (/\bnws\b/i.test(p) && A.some(x => PRON3.test(x)) && !NWSCUE.test(p)) E('E4', w, 'nws without a cue: «' + p + '» → ' + A[0]);
    if (A[0] && NONPRES(A[0]) && !TIME.test(p)) W('W1', w, 'answer is not Simple Present but the prompt has no time word or cue: «' + p + '» → ' + A[0]);
    if (A.some(x => TAG.test(x)) && !it.nc) W('W2', w, 'tag question without nc: 1: ' + A.find(x => TAG.test(x)));
  });
}
if (LIST) console.log('TYPE ITEMS (' + typeList.length + ')\n' + typeList.join('\n'));
const show = (t, xs) => { if (!xs.length) return; console.log('\n' + t + ' (' + xs.length + '):'); xs.forEach(x => console.log('  ' + x)); };
show('ERRORS', errs); show('WARNINGS', warns);
console.log('\nhmn check · ' + packFile + (ONLY ? ' · only ' + [...ONLY].join(',') : '') + ' · ' + errs.length + ' error(s), ' + warns.length + ' warning(s)' + (errs.length ? '' : ' · OK'));
process.exitCode = errs.length ? 1 : 0;
