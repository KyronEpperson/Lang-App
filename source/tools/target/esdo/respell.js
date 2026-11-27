/* en-esdo pron: the en-es respelling (tools/target/es/respell.js) plus three Dominican rules (docs/profiles/en-esdo.md section 6).
   MODE 'careful' (now): identical to en-es, because phone voices and the reused en-es clips say the s and the d.
   MODE 'natural': educated Santo Domingo speech at conversational speed (breath s, final ng, -ao). To switch, change MODE below,
   then: node tools/target/repron.js esdo && node tools/target/gen.js esdo && node tools/lessonread/apply.js en-esdo && node tools/sections/apply.js
   (prose respellings in lesson bodies are not regenerated). DO_MODE=natural in the environment overrides it for a trial run. */
const ES = require('../es/respell.js');
const MODE = process.env.DO_MODE || 'careful';
/* next word starts with a vowel sound: a vowel, silent h + vowel, or the word y ("and"); hie-/hue- start with a glide, so they count as consonants */
const vstart = w => !!w && (/^y$/i.test(w) || (/^h?[aeiouáéíóú]/i.test(w) && !/^h[iu][aeiouáéíóú]/i.test(w)));
function word(w, next) {
  if (EXC[w.toLowerCase()]) return EXC[w.toLowerCase()];
  const r = ES.respell(w);
  const lw = w.toLowerCase(), syl = r.split('-'), L = syl.length - 1;
  /* R3: stressed -ado / -ados (cansado, colmado, pescado; not sábado, hígado): the d is dropped */
  if (/ados?$/.test(lw) && L >= 1 && /^(doh|dohs)$/.test(syl[L]) && /^[A-Z]+$/.test(syl[L - 1])) syl[L] = syl[L].slice(1);
  for (let i = 0; i <= L; i++) {
    /* R1: s at the end of a syllable is a breath, written h. A word-final s before a vowel sound links to it and stays s (los amigos) */
    if (/s$/i.test(syl[i]) && !/ks$/i.test(syl[i]) && !(i === L && vstart(next))) syl[i] = syl[i].replace(/s$/, 'h').replace(/S$/, 'H');
    /* R2: word-final n before a pause or a vowel is velar, written ng (están, pan, en eso); before a consonant it stays n */
    if (i === L && /n$/i.test(syl[i]) && (!next || vstart(next))) syl[i] = syl[i].replace(/n$/, 'ng').replace(/N$/, 'NG');
  }
  return syl.join('-');
}
function natural(text) {
  /* R0: a comma, stop, question or exclamation mark is a pause: the word before it has no "next word" */
  const toks = text.replace(/[¿¡"«»()]/g, ' ').trim().split(/\s+/).filter(Boolean);
  const ws = toks.map(t => t.replace(/[?!.,;:…]+$/, '')).filter(Boolean);
  const pause = toks.filter(t => t.replace(/[?!.,;:…]+$/, '')).map(t => /[?!.,;:…]$/.test(t));
  return ws.map((w, i) => word(w, pause[i] ? null : ws[i + 1])).join(' ');
}
/* loanwords the Spanish rules misread */
const EXC = { whatsapp: 'WAHTS-ahp', dembow: 'dehm-BOH' };
const careful = text => text.replace(/[¿¡"«»()]/g, ' ').trim().split(/\s+/).map(t => t.replace(/[?!.,;:…]+$/, '')).filter(Boolean).map(w => EXC[w.toLowerCase()] || ES.respell(w)).join(' ');
const respell = text => MODE === 'natural' ? natural(text) : (Object.keys(EXC).some(k => text.toLowerCase().includes(k)) ? careful(text) : ES.respell(text));
module.exports = Object.assign({}, ES, { respell, natural, MODE });
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a), '| natural:', natural(a));
