/* SEC-1: make the writer table of every x-ko course from the en-ko one (the Korean is the same, lesson by lesson and section by section).
   A string entry stays (it names an existing card by its Korean front). An added card keeps its Korean and takes its meaning from tools/sections/xko/meanings.json.
   A drop whose front holds Latin letters is left out (those fronts are translated in the packs).
   usage: node tools/sections/xko.js   then   node tools/sections/apply.js */
const fs = require('fs'), path = require('path');
const X = JSON.parse(fs.readFileSync(path.join(__dirname, 'en-ko', 'sections.json'), 'utf8'));
const M = JSON.parse(fs.readFileSync(path.join(__dirname, 'xko', 'meanings.json'), 'utf8'));
const langs = Object.keys(M).filter(k => k !== '_about' && k !== 'fronts');
langs.forEach(l => { if (M[l].length !== M.fronts.length || M[l].some(x => !x || typeof x !== 'string')) throw new Error(l + ': ' + M[l].length + ' meanings for ' + M.fronts.length + ' fronts'); });
langs.forEach(l => {
  const out = { _about: 'SEC-1 writer file for ' + l + '-ko, made by tools/sections/xko.js from tools/sections/en-ko/sections.json and tools/sections/xko/meanings.json. Edit those, not this file.' };
  Object.keys(X).forEach(id => {
    if (id[0] === '_') return;
    out[id] = {};
    Object.keys(X[id]).forEach(k => {
      const w = X[id][k], o = {};
      if (w.drop) { const d = w.drop.filter(f => !/[A-Za-z]/.test(f)); if (d.length) o.drop = d; }
      if (w.add) o.add = w.add.map(a => { if (!Array.isArray(a)) return a; const i = M.fronts.indexOf(a[0]); if (i < 0) throw new Error('no meaning for ' + a[0] + ': add it to xko/meanings.json or name the card by a string'); return [a[0], '', M[l][i]]; });
      out[id][k] = o;
    });
  });
  const dir = path.join(__dirname, l + '-ko');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'sections.json'), JSON.stringify(out, null, 1) + '\n');
});
console.log('wrote ' + langs.length + ' tables: ' + langs.join(' '));
