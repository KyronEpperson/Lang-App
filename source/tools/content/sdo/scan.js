/* sdo-en setting scan (docs/profiles/sdo.md §2, §8.2, §9): lists rows of a generated sdo-en pack
   - EN: whose ENGLISH side names a non-Dominican Latin American home or origin (deviation candidates; travel may stay),
   - es: whose Spanish text has a word the profile swaps for the DR (REPLACE: auto, autobús, frijoles, Lima as home…),
   - FORBID: whose Spanish text has a Mexico- or Spain-only word that must not stay in Dominican scenes (tacos, cuate, vale…).
   Santiago is NOT listed: it is a Dominican city. Pesos are Dominican money too: rows naming pesos are listed only so the writer
   checks they read as Dominican pesos (DR scene) or become dollars (US scene).
   usage: node tools/content/sdo/scan.js <pack path> [--strict]   (generate first: node tools/content/gen.js sdo <pack path>)
   --strict: exit 1 when any FORBID row remains (use at merge). */
const fs = require('fs'), vm = require('vm');
const F = process.argv[2], STRICT = process.argv.includes('--strict');
if (!F) { console.error('usage: node tools/content/sdo/scan.js <pack path> [--strict]'); process.exit(2); }
global.LANGAPP_PACKS = { course: {}, i18n: {} }; vm.runInThisContext(fs.readFileSync(F, 'utf8'));
const c = LANGAPP_PACKS.course['sdo-en']; if (!c) { console.error('no sdo-en course in ' + F); process.exit(2); }
const EN = /\bLima\b|Madrid|Bogot|Buenos Aires|Mexic|\bPeru\b|\bSpain\b|Colombia|Argentin|Monterrey|Guadalajara|\bsoles?\b|\bpesos?\b|\btacos?\b|tortillas?|quesadillas?|tamales?/;
const ES = /\bauto(s)?\b|autob[uú]s|\bbus\b|\bLima\b|Madrid|Bogot[aá]|Monterrey|Guadalajara|M[eé]xico|Per[uú]|Colombia|Argentina|\bsoles?\b|\bpesos?\b|frijoles|\bcami[oó]n\b|\bcoche\b|departamento|cacahuate|camote|popote|\bplátanos?\b/;
const FORBID = /\btacos?\b|tortillas?|quesadillas?|tamales?|\bcuates?\b|\blana\b|\bchamba\b|platica[rs]?|\bqué padre\b|(?<![Mm]ás )\bvale\b|\bvosotros\b|\bhabéis\b|\bordenador\b|\bmóvil\b|\bzumo\b|\bguay\b|\bchaval/;
const out = [], P = (k, s) => out.push(k + ': ' + String(s).slice(0, 170));
const sp = (k, s) => { if (FORBID.test(s)) P('FORBID ' + k, s); else if (ES.test(s)) P('es ' + k, s); };
for (const [d, cs] of Object.entries(c.DECKS)) cs.forEach(x => { if (EN.test(x[0])) P('EN card ' + d, x[0]); sp('card ' + d + ' «' + x[0] + '»', x[2] + ' | ' + x[3]); });
for (const [k, v] of Object.entries(c.DIALOG)) { if (EN.test(v[0] + ' ' + v[1])) P('EN dialog «' + k + '»', v[0] + ' / ' + v[1]); sp('dialog «' + k + '»', v[2] || ''); }
for (const [k, v] of Object.entries(c.EXAMPLES)) { if (EN.test(v[0])) P('EN example «' + k + '»', v[0]); sp('example «' + k + '»', v[1] || ''); }
c.LESSONS.forEach(L => { (L.body.match(/\{\{ex:[^}]*\}\}/g) || []).forEach(e => { const f = e.slice(5, -2).split('|'); if (EN.test(f[0])) P('EN ex ' + L.id, f[0]); sp('ex ' + L.id, f[2] || ''); });
  const prose = L.body.replace(/\{\{ex:[^}]*\}\}/g, '').replace(/<[^>]+>/g, '');
  (prose.match(new RegExp('.{0,40}(' + ES.source + '|' + FORBID.source + ').{0,40}', 'g')) || []).forEach(s => sp('body ' + L.id, s)); });
for (const [id, ck] of Object.entries(c.CHECKS)) ck.forEach((q, i) => { if (EN.test(JSON.stringify(q[1]))) P('EN check ' + id + '#' + i, JSON.stringify(q[1])); sp('check ' + id + '#' + i, q[0] + ' | ' + q[3]); });
for (const [id, ps] of Object.entries(c.PRACTICE)) ps.forEach((it, i) => { const en = JSON.stringify([it.a, it.o, it.x, it.t === 'fill' ? it.q : '']); if (EN.test(en)) P('EN practice ' + id + '#' + i, en); sp('practice ' + id + '#' + i, [it.q, it.p, it.why, it.hint].filter(Boolean).join(' | ')); });
out.forEach(l => console.log(l));
const n = p => out.filter(l => l.startsWith(p)).length;
console.log('\nsdo scan: ' + n('EN') + ' English-side rows (deviation candidates; sdo.md §8.2), ' + n('es ') + ' Spanish rows to check (§2), ' + n('FORBID') + ' FORBID rows (Mexico/Spain-only words; 0 at merge)');
if (STRICT && n('FORBID')) process.exit(1);
