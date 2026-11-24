#!/usr/bin/env python3
# 2.97.0: stroke-order tiles are flip cards with sound; stroke numbers sit in a badge at the start of each stroke (assertion-guarded edits to src/app.html)
import io,re
P='/home/claude/src/app.html'
s=io.open(P,encoding='utf8').read()
def rep(a,b):
    global s
    assert s.count(a)==1,(s.count(a),a[:70]); s=s.replace(a,b)
# numbers: a dot in the stroke colour at the start of the stroke, the number inside in the tile colour (black on the dark theme); two strokes that start at one point no longer overlap
rep(""".stroke text{font:700 9px var(--mono);fill:var(--accent)}""",""".stroke circle{fill:var(--ink)}.stroke text{font:700 8px var(--mono);fill:var(--bg);text-anchor:middle;dominant-baseline:central}
.sgl{min-width:0}.sgl .stroke{display:block}.sgl .sgb{display:none;aspect-ratio:1;box-sizing:border-box;flex-direction:column;align-items:center;justify-content:center;gap:4px;background:var(--bg);border-radius:10px;border:1px dashed var(--line)}
.sgl .sgb .rom{font-size:1.4rem;font-weight:700;white-space:nowrap}.sgl .sgb small{font-size:.8rem;color:var(--muted)}
.sgl.flip .stroke{display:none}.sgl.flip .sgb{display:flex}.sgl .stroke svg,.sgl .sgb{animation:sgflip .22s ease}
@keyframes sgflip{from{transform:scaleX(.05)}to{transform:scaleX(1)}}
@media (prefers-reduced-motion:reduce){.sgl .stroke svg,.sgl .sgb{animation:none}}""")
rep("""${s.map((d,i)=>`<path d="${d}" style="animation-delay:${i*0.6}s"/><text x="${(d.match(/M(\\d+)/)||[])[1]||0}" y="${(+(d.match(/M\\d+ (\\d+)/)||[])[1]||0)-4}">${i+1}</text>`).join('')}</svg>""",
    """${s.map((d,i)=>`<path d="${d}" style="animation-delay:${i*0.6}s"/>`).join('')}${(()=>{ const seen=[]; return s.map((d,i)=>{ const m=d.match(/M([\\d.]+) ([\\d.]+)/)||[0,0,0]; let x=+m[1], y=+m[2]; if(seen.some(p=>Math.abs(p[0]-x)<9&&Math.abs(p[1]-y)<9)){ const h=d.match(/M[\\d.]+ [\\d.]+ H([\\d.]+)/), v=d.match(/M[\\d.]+ [\\d.]+ V([\\d.]+)/), l=d.match(/M[\\d.]+ [\\d.]+ L([\\d.]+) ([\\d.]+)/); let dx=0, dy=0; if(h) dx=+h[1]-x; else if(v) dy=+v[1]-y; else if(l){ dx=+l[1]-x; dy=+l[2]-y; } const n=Math.sqrt(dx*dx+dy*dy)||1; x=Math.round(x+dx/n*13); y=Math.round(y+dy/n*13); } seen.push([x,y]); return `<circle cx="${x}" cy="${y}" r="6"/><text x="${x}" y="${y}">${i+1}</text>`; }).join(''); })()}</svg>""")
# tiles
a=s.index("function sglLabel(ch){"); b=s.index("function strokeTok(h){")
c0=s.rindex("/* stroke-order grid label",0,a)
s=s[:c0]+"""/* stroke-order tile: a flip card. Front: the strokes. Tap: flips to the romanization and says the letter (a consonant with ㅏ, a vowel after silent ㅇ; ㅇ as final ng). Tap again: back to the strokes, redrawn, and said again. */
function sglTile(ch){ const R={'ㄱ':'g/k','ㄴ':'n','ㄷ':'d/t','ㄹ':'r/l','ㅁ':'m','ㅂ':'b/p','ㅅ':'s','ㅇ':'- / ng','ㅈ':'j','ㅊ':'ch','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'h','ㅏ':'a','ㅑ':'ya','ㅓ':'eo','ㅕ':'yeo','ㅗ':'o','ㅛ':'yo','ㅜ':'u','ㅠ':'yu','ㅡ':'eu','ㅣ':'i'}, W={'ㄱ':'가','ㄴ':'나','ㄷ':'다','ㄹ':'라','ㅁ':'마','ㅂ':'바','ㅅ':'사','ㅇ':'응','ㅈ':'자','ㅊ':'차','ㅋ':'카','ㅌ':'타','ㅍ':'파','ㅎ':'하','ㅏ':'아','ㅑ':'야','ㅓ':'어','ㅕ':'여','ㅗ':'오','ㅛ':'요','ㅜ':'우','ㅠ':'유','ㅡ':'으','ㅣ':'이'}; const c=String(ch).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;'), sv=strokeSVG(ch).replace(/<button[^>]*>.*?<\\/button>/,''); if(!R[ch]) return '<div class="sgl" data-replay="1"><div class="k">'+c+'</div>'+sv+'</div>'; const WR={'가':'ga','나':'na','다':'da','라':'ra','마':'ma','바':'ba','사':'sa','응':'eung','자':'ja','차':'cha','카':'ka','타':'ta','파':'pa','하':'ha','아':'a','야':'ya','어':'eo','여':'yeo','오':'o','요':'yo','우':'u','유':'yu','으':'eu','이':'i'}, wr=WR[W[ch]]; return '<div class="sgl" data-replay="1" data-sound="'+W[ch]+'" role="button" aria-label="'+c+'" data-noi18n>'+sv+'<div class="sgb"><span class="rom">'+R[ch]+'</span><small>'+W[ch]+(wr?' · '+wr:'')+'</small></div></div>'; }
"""+s[b:]
rep("""`<div class="sgl" data-replay="1"><div class="k">${sglLabel(ch)}</div>${strokeSVG(ch).replace(/<button[^>]*>.*?<\\/button>/,'')}</div>`""","""sglTile(ch)""")
rep("""'<div class="sgl" data-replay="1"><div class="k">'+sglLabel(ch)+'</div>'+strokeSVG(ch).replace(/<button[^>]*>.*?<\\/button>/,'')+'</div>'""","""sglTile(ch)""")
rep("""Tap a letter to replay.</p>""","""Tap a letter to flip it: you hear it and see how it is written in English letters. Tap again to watch the strokes.</p>""")
rep("""if(sg){ const sv=sg.querySelector('svg'); if(sv){ const cl=sv.cloneNode(true); sv.replaceWith(cl); } }""",
    """if(sg){ const flipped=sg.querySelector('.sgb')?sg.classList.toggle('flip'):false; if(!flipped){ const sv=sg.querySelector('svg'); if(sv){ const cl=sv.cloneNode(true); sv.replaceWith(cl); } } if(sg.dataset.sound){ try{ speak(sg.dataset.sound); }catch(err){} } }""")
io.open(P,'w',encoding='utf8').write(s)
P='/home/claude/harness.js'; h=io.open(P,encoding='utf8').read()
a="const sg=[...document.querySelectorAll('#lsRomBody .sgl .k')]; const f=sg.length===24&&sg.every(x=>x.querySelector('.rom'))&&sg[0].textContent==='ㄱ - g/k';"
assert h.count(a)==1
h=h.replace(a,"const sg=[...document.querySelectorAll('#lsRomBody .sgl')]; let f=sg.length===24&&sg.every(x=>x.querySelector('.sgb .rom')&&x.dataset.sound&&x.querySelectorAll('circle').length===x.querySelectorAll('path').length)&&sg[0].querySelector('.sgb .rom').textContent==='g/k'&&getComputedStyle(sg[0].querySelector('.sgb')).display==='none'; if(f){ const said=[], sp=window.speak; try{ speak=t=>said.push(t); sg[0].click(); const f1=sg[0].classList.contains('flip')&&getComputedStyle(sg[0].querySelector('.sgb')).display==='flex'&&getComputedStyle(sg[0].querySelector('.stroke')).display==='none'; sg[0].click(); f=f1&&!sg[0].classList.contains('flip')&&said.join()==='가,가'; } finally { speak=sp; } }")
io.open(P,'w',encoding='utf8').write(h)
print('ok')
