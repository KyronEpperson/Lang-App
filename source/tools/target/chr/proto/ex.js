const R = require('/home/claude/tools/target/chr/respell.js'); const P = new RegExp(R.pattern(), 'u'); const P2 = new RegExp(R.pattern());
const ex = [['ᎣᏏᏲ','hello','vowel sign + si + yo'],['ᏩᏙ','thanks','w row, d row'],['ᏣᎳᎩ','Cherokee','Joyner j written ts'],['ᏙᎯᏧ?','How are you?','d-row sign said t; sentence capital'],
['ᏙᎯᏊ','I\'m fine','Ꮚ written gwu'],['ᎥᎥ','yes','v, the nasal vowel'],['ᎥᏝ','no','tl row printed tl'],['ᎩᏟ','dog','tl row printed hl'],['ᏅᎩ','four','unwritten h'],
['ᎠᎪᏩᏘᎭ','he sees him / it','Ꮹ loses its vowel: wh'],['ᏔᎵᏚ','twelve','Ꮅ loses its vowel'],['ᏍᎪᎯ','ten','lone Ꮝ'],['ᎤᎿ','there','Ꮏ hna'],['ᏍᎪᎯᏥᏆ','one hundred','Ꮵ loses its vowel: ts'],
['ᎠᏧᏣ','a boy','ch and ts both printed'],['Ꭷ','Hey now!','the only k sign'],['ᎦᏙ ᏕᏣᏙᎠ?','What are you called?','two words'],['Ꮭ ᏩᏯ ᎤᏲᎢ ᏱᎩ.','The wolf isn\'t bad.','Ꮭ ... Ᏹ-; sentence'],
['ᎰᏩᏍ?','Is it okay?','derived suffix -Ꮝ (warning)'],['ꮳꮃꭹ','Cherokee (typed in lowercase syllabary)','lowercase folds to uppercase']];
let n=0; ex.forEach(([t,m,r],i)=>{ const p=R.respell(t); const w=R.warnings(); if(!P.test(p)||!P2.test(p)) throw new Error(p); n++; console.log('| '+(i+1)+' | '+t+' | `'+p+'` | '+m+' | '+r+(w.length?' (warning printed)':'')+' |'); });
const neg=['ᎣᏏᏲ','osiyo ','os  iyo','o²siyo','osi-yo','Osiyo ?','tohitsu?!','tsa1'];
neg.forEach(x=>console.log('neg', JSON.stringify(x), P.test(x)));
