/* LS-1: drives an open lesson to the end in a Playwright page: every section's flashcards (five shown, then the quiz), then the review of all the lesson's cards.
   Used by tools/curriculum/e2e.js, tools/content/e2e_en.js and tools/tests/lesson_sections.js. Returns the number of steps taken; stops when S.drills[id] is set. */
module.exports=async function driveLesson(p,id,max){ let n=0; await p.click('#miniStart');
  for(;n<(max||4000);n++){ const st=await p.evaluate(id=>{ if(S.drills&&S.drills[id]) return 'done'; const root=document.getElementById('lessonBody');
      const card=root.querySelector('.mdCard'); if(card){ const bs=[...card.querySelectorAll('button:not([disabled])')]; const g=bs[bs.length-1]; if(g){ g.click(); return 'card'; } return 'wait'; }
      const qb=root.querySelector('.qbody'); if(qb){ const nx=qb.querySelector('.next'); if(nx&&!nx.hidden){ nx.click(); return 'next'; } const o=[...qb.querySelectorAll('.opt:not([disabled])')].find(x=>x.dataset.a===qb.dataset.ans); if(o){ o.click(); return 'pick'; } qb.click(); return 'tap'; }
      const b=root.querySelector('.lsbtns .lsnext'); if(b){ b.click(); return 'round'; }
      document.getElementById('miniStart').click(); return 'start'; },id);
    if(st==='done') break; await p.waitForTimeout(st==='wait'?120:25); }
  return n; };
