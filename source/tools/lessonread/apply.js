/* Lesson readings, step 2 (2.105.0): writes each course's extra lesson readings into its pack as READS, read by rdBuild() in src/app.html.
   Source: tools/lessonread/<id>/readings.json (made by fill.js with the course's own pronunciation tool) plus written.json (hand-written, checked by check.js).
   The block sits between two marker lines at the end of packs/course-<id>.js and is replaced on every run, so run this again after a pack is regenerated.
   usage: node tools/lessonread/apply.js [id ...]   (no id = every folder here) */
'use strict';
const fs = require('fs'), path = require('path'); const ROOT = path.resolve(__dirname, '..', '..');
const A = '/*LESSON-READS*/', Z = '/*END-LESSON-READS*/';
const ids = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(__dirname).filter(d => fs.statSync(path.join(__dirname, d)).isDirectory());
const rd = f => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { return null; } };
ids.forEach(id => { const dir = path.join(__dirname, id), pf = path.join(ROOT, 'packs', 'course-' + id + '.js'); if (!fs.existsSync(pf)) { console.log(id + ': no pack, skipped'); return; }
  const R = Object.assign({}, rd(path.join(dir, 'readings.json')) || {}, rd(path.join(dir, 'written.json')) || {}); const keys = Object.keys(R).sort();
  let s = fs.readFileSync(pf, 'utf8'); const i = s.indexOf(A); if (i >= 0) { const j = s.indexOf(Z, i); if (j < 0) throw new Error(id + ': open marker without close'); s = s.slice(0, i).replace(/\n+$/, '\n') + s.slice(j + Z.length).replace(/^\n+/, ''); }
  if (keys.length) { const o = {}; keys.forEach(k => { o[k] = String(R[k]).normalize('NFC'); }); s = s.replace(/\n*$/, '\n') + A + '\nif(LANGAPP_PACKS.course[' + JSON.stringify(id) + ']) LANGAPP_PACKS.course[' + JSON.stringify(id) + '].READS=' + JSON.stringify(o) + ';\n' + Z + '\n'; }
  fs.writeFileSync(pf, s); console.log(id + ': ' + keys.length + ' readings'); });
