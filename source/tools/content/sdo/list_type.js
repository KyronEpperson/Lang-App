/* sdo-en typed-answer pass helper (docs/profiles/sdo.md §8.3): lists every type item of a generated pack with its Spanish prompt, hint
   and accepted English, and flags (1) an accepted answer with a contraction whose full form is not accepted, (2) a prompt with no explicit
   subject while the answers start with he/she/it, (3) a simple-present answer whose Spanish prompt has no habit or time cue (it could also read as progressive).
   usage: node tools/content/sdo/list_type.js <pack path> [--only id,id] [--flags]   (--flags: print only flagged items) */
const fs = require('fs'), vm = require('vm');
const a = process.argv.slice(2); const F = a[0]; if (!F) { console.error('usage: node tools/content/sdo/list_type.js <pack path> [--only id,id] [--flags]'); process.exit(2); }
const oi = a.indexOf('--only'), ONLY = oi > 0 ? a[oi + 1].split(',') : null, FLAGS = a.includes('--flags');
global.LANGAPP_PACKS = { course: {}, i18n: {} }; vm.runInThisContext(fs.readFileSync(F, 'utf8'));
const c = Object.values(LANGAPP_PACKS.course)[0];
const FULL = [[/\bI'm\b/i, 'I am'], [/\byou're\b/i, 'you are'], [/\bhe's\b/i, 'he is|he has'], [/\bshe's\b/i, 'she is|she has'], [/\bit's\b/i, 'it is|it has'], [/\bwe're\b/i, 'we are'], [/\bthey're\b/i, 'they are'], [/\bthat's\b/i, 'that is'], [/\bthere's\b/i, 'there is'],
  [/\bdon't\b/i, 'do not'], [/\bdoesn't\b/i, 'does not'], [/\bdidn't\b/i, 'did not'], [/\bisn't\b/i, 'is not'], [/\baren't\b/i, 'are not'], [/\bwasn't\b/i, 'was not'], [/\bweren't\b/i, 'were not'], [/\bcan't\b/i, 'cannot|can not'], [/\bwon't\b/i, 'will not'],
  [/\bI'll\b/i, 'I will'], [/\byou'll\b/i, 'you will'], [/\bwe'll\b/i, 'we will'], [/\bI've\b/i, 'I have'], [/\bI'd\b/i, 'I would|I had'], [/\bhaven't\b/i, 'have not'], [/\bhasn't\b/i, 'has not'], [/\bshouldn't\b/i, 'should not'], [/\bcouldn't\b/i, 'could not'], [/\bwouldn't\b/i, 'would not']];
const norm = s => String(s).toLowerCase().replace(/[.,!?¿¡"“”]/g, '').replace(/’/g, "'").replace(/\s+/g, ' ').trim();
let n = 0, nf = 0;
for (const [id, ps] of Object.entries(c.PRACTICE)) { if (ONLY && !ONLY.includes(id)) continue;
  ps.forEach((it, i) => { if (it.t !== 'type') return; n++; const acc = (it.a || []).map(norm), flags = [];
    if (!it.nc) (it.a || []).forEach(x => FULL.forEach(([re, full]) => { if (re.test(x)) { const ok = full.split('|').some(f => acc.includes(norm(x.replace(re, f)))); if (!ok) flags.push('no full form for «' + x + '»'); } }));
    const subj = /^(he|she|it)\b/i.test((it.a || [''])[0]);
    if (subj && !/\b(él|ella|ello|[A-ZÁÉÍÓÚ][a-záéíóú]+ (?!\()|mi |tu |su |el |la |los |las )/.test(it.p || '')) flags.push('answers start with he/she/it but the prompt names no subject');
    const prog = acc.some(x => /\b(is|are|am|'s|'re|'m) \w+ing\b/.test(x)), lex = acc.some(x => /^(i|you|we|they|he|she|it) (\w+s|\w+)\b/.test(x) && !/\b(is|are|am|was|were|will|can|have|has|had|do|does|did|'s|'re|'m)\b/.test(x));
    if (!prog && lex && !/ahora|en este momento|todos los días|siempre|cada|los (lunes|martes|miércoles|jueves|viernes|sábados|domingos)|normalmente|a veces|nunca|casi|por lo general|ayer|mañana/i.test(it.p || '')) flags.push('simple present only, and the prompt has no habit/time cue: could «is …ing» also be right?');
    if (flags.length) nf++;
    if (!FLAGS || flags.length) console.log(id + '#' + i + '  p: ' + it.p + '\n    hint: ' + (it.hint || '') + '\n    a: ' + (it.a || []).join(' | ') + (flags.length ? '\n    FLAG: ' + flags.join('; ') : '') + '\n'); }); }
console.log(n + ' type items, ' + nf + ' flagged (flags are heuristics: read every item, not only the flagged ones)');
