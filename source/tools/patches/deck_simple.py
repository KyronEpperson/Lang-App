#!/usr/bin/env python3
# DS-1: the flashcard deck page (Review) shows only the search box, "Add your own phrase", the deck card with Change deck, the quiz and the progress bar.
# Everything else (Due / All / Browse, Audio, Speed, Blur romanization, Shuffle, Reset deck, the key hints) moves into a Settings sheet opened by a new
# gear button in the header, next to the bug button. The "N due · N/M learned" line is no longer shown. The controls keep their ids, so their handlers are unchanged.
# usage: python3 tools/patches/deck_simple.py [src/app.html]   (each replacement must match exactly once)
import sys
p=sys.argv[1] if len(sys.argv)>1 else 'src/app.html'
s=open(p,encoding='utf8').read()
SHEET='''<div class="setsheet" id="setSheet" role="dialog" aria-modal="true" aria-label="Settings" hidden><div class="sheet-in" style="max-height:88vh;overflow:auto;gap:14px"><div class="row" style="flex-wrap:nowrap"><h3 style="margin:0">Settings</h3><button class="ghost" type="button" id="setX" aria-label="Close" style="padding:4px 10px">✕</button></div>
    <div class="row" style="justify-content:flex-start;gap:10px 18px">
      <label class="auto"><input type="checkbox" id="auto"> Audio</label>
      <label class="auto">Speed <select class="ghost" id="rateSel" style="padding:4px 6px"><option value="0.7">slow</option><option value="0.85">normal</option><option value="1">native</option></select></label>
      <label class="auto"><input type="checkbox" id="hideRom"> Blur romanization in Browse</label>
    </div>
    <div id="setDeck" style="display:grid;gap:12px">
      <div class="modes" style="width:auto"><button class="chip" id="cmDue" aria-pressed="true">Due</button><button class="chip" id="cmAll" aria-pressed="false">All</button><button class="chip" id="cmBrowse" aria-pressed="false">📖 Browse</button></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="ghost" id="shuffle">Shuffle</button><button class="ghost" id="reset">Reset deck</button></div>
      <div class="keys" id="rvKeys" style="margin-top:0"><span data-k="teach"><kbd>F</kbd> flip · </span><kbd>P</kbd> play · <span data-k="q"><kbd>1-4</kbd> quiz answer · </span><kbd>Enter</kbd> next</div>
    </div>
  </div></div>

  '''
JS='''/* DS-1: Settings sheet behind the header gear. On Review it also holds that page's deck controls (Due / All / Browse, Shuffle, Reset deck, key hints); elsewhere only Audio, Speed and Blur. Keys do not reach the quiz while it is open. */
function openSet(){ closeSheet(); const sh=$('setSheet'); $('setDeck').style.display=$('v-cards').hidden?'none':'grid'; sh.hidden=false; setTimeout(()=>{ try{ $('setX').focus({preventScroll:true}); }catch(e){} },30); }
function closeSet(){ const sh=$('setSheet'); if(!sh||sh.hidden) return; sh.hidden=true; try{ $('setBtn').focus({preventScroll:true}); }catch(e){} }
$('setBtn').onclick=openSet; $('setX').onclick=closeSet; $('setSheet').addEventListener('click',e=>{ if(e.target===e.currentTarget||e.target.closest('#cmDue,#cmAll,#cmBrowse,#shuffle,#reset')) closeSet(); });
document.addEventListener('keydown',e=>{ const sh=$('setSheet'); if(!sh||sh.hidden) return; if(e.key==='Escape'){ e.preventDefault(); e.stopPropagation(); closeSet(); return; } if(e.key==='Tab'){ const f=[...sh.querySelectorAll('button,input,select')].filter(x=>x.offsetParent!==null); if(!f.length) return; const a=f[0], z=f[f.length-1]; if(e.shiftKey&&document.activeElement===a){ e.preventDefault(); z.focus(); } else if(!e.shiftKey&&document.activeElement===z){ e.preventDefault(); a.focus(); } return; } if(!e.ctrlKey&&!e.metaKey&&!e.altKey) e.stopPropagation(); },true);
window.addEventListener('hashchange',closeSet);
'''
R=[
# header: the gear sits next to the bug button
('''title="Report a problem on this page" style="padding:4px 9px">🐞</button>''',
 '''title="Report a problem on this page" style="padding:4px 9px">🐞</button><button class="ghost" id="setBtn" type="button" aria-label="Settings" title="Settings" style="padding:4px 9px">⚙</button>'''),
# the search box and "Add your own phrase" always show
('''<input class="ans" id="search" data-adv="review" type="search"''','''<input class="ans" id="search" type="search"'''),
('''<details id="addCard" data-adv="review" style="margin-bottom:10px">''','''<details id="addCard" style="margin-bottom:10px">'''),
# the row of modes and audio options leaves the page
('''    <div class="row" style="margin-top:10px">
      <div class="modes" style="width:auto"><button class="chip" id="cmDue" aria-pressed="true">Due</button><button class="chip" id="cmAll" aria-pressed="false">All</button><button class="chip" id="cmBrowse" aria-pressed="false">📖 Browse</button></div>
      <label class="auto" data-adv="review"><input type="checkbox" id="auto"> Audio</label>
      <label class="auto" data-adv="review">Speed <select class="ghost" id="rateSel" style="padding:4px 6px"><option value="0.7">slow</option><option value="0.85">normal</option><option value="1">native</option></select></label>
      <label class="auto" data-adv="review"><input type="checkbox" id="hideRom"> Blur romanization in Browse</label>
    </div>
    <div id="cardsStage" style="margin-top:12px"></div>
    <div class="keys" id="rvKeys" data-adv="review"><span data-k="teach"><kbd>F</kbd> flip · </span><kbd>P</kbd> play · <span data-k="q"><kbd>1-4</kbd> quiz answer · </span><kbd>Enter</kbd> next</div>
    <div class="bar" style="margin-top:14px"><i id="prog"></i></div>
    <div class="row" style="margin-top:8px"><span class="stat" id="left"></span><span style="display:flex;gap:8px" data-adv="review"><button class="ghost" id="shuffle">Shuffle</button><button class="ghost" id="reset">Reset deck</button></span></div><div class="advrow"><button type="button" class="chip advbtn" data-advbtn="review" aria-expanded="false">⚙ More options</button></div>
  </section>''',
 '''    <div id="cardsStage" style="margin-top:12px"></div>
    <div class="bar" style="margin-top:14px"><i id="prog"></i></div>
    <div class="row" style="margin-top:8px"><span class="stat" id="left" hidden></span></div>
  </section>'''),
# the sheet itself, outside the views so every page can open it
('''  <section class="view" id="v-today">''',SHEET+'''<section class="view" id="v-today">'''),
# css
('''.sheet{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:40;display:flex;align-items:flex-end;justify-content:center}''',
 '''.sheet,.setsheet{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:40;display:flex;align-items:flex-end;justify-content:center}.setsheet[hidden],#left[hidden]{display:none!important}'''),
('''@media (min-width:561px){.sheet{align-items:center}''','''@media (min-width:561px){.sheet,.setsheet{align-items:center}'''),
# the gear is a fifth header button when a language has both voices: a smaller title keeps the streak readable on small phones
('''body.two-voices #courseBtn{min-width:32px}}''','''body.two-voices #courseBtn{min-width:32px}body.two-voices header h1{font-size:1rem}body.two-voices .hdr-r>button{padding:4px 3px!important}}'''),
# Browse: a way back to the cards now that the mode buttons are in Settings
('''  stage.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>deleteCustom(b.dataset.del));
  { const hd=stage.querySelector('.row');''',
 '''  stage.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>deleteCustom(b.dataset.del));
  { const bk=document.createElement('button'); bk.type='button'; bk.className='chip'; bk.id='brBack'; bk.textContent='← Back'; bk.style.marginBottom='10px'; bk.onclick=()=>$('cmDue').click(); stage.prepend(bk); try{ translateDom(stage); }catch(e){} } /* DS-1 */
  { const hd=stage.querySelector('.row');'''),
# wiring
('''$('gsBtn').onclick=globalSearch;''',JS+'''$('gsBtn').onclick=globalSearch;'''),
]
for a,b in R:
    assert s.count(a)==1, ('expected exactly one match', s.count(a), a[:90])
    s=s.replace(a,b)
open(p,'w',encoding='utf8').write(s)
print('deck_simple: %d replacements'%len(R))
