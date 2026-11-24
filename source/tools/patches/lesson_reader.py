#!/usr/bin/env python3
# readings under words in the lessons of every course with a non-Latin target (assertion-guarded edits to src/app.html)
import io
P='/home/claude/src/app.html'; s=io.open(P,encoding='utf8').read()
J=io.open('/home/claude/tools/patches/lesson_reader.js.txt',encoding='utf8').read()
def rep(a,b):
    global s
    assert s.count(a)==1,(s.count(a),a[:70]); s=s.replace(a,b)
rep("function romAnnotate(root){ if(!root||!COURSE||COURSE.target!=='ko') return;", J+"function romAnnotate(root){ if(!root||!COURSE) return; if(COURSE.target!=='ko'){ if(rdOn()) rdAnnotate(root); return; }")
rep("function lsRom(root,id,quiz){ try{ if((quiz?ROM_SKIP_Q:ROM_SKIP)[id]) return; romAnnotate(root); }catch(e){} }",
    "function lsRom(root,id,quiz){ try{ if(COURSE.target==='ko'&&(quiz?ROM_SKIP_Q:ROM_SKIP)[id]) return; romAnnotate(root); }catch(e){} }\nfunction lsRomHas(id){ return COURSE.target==='ko'?!ROM_SKIP[id]:rdOn(); }")
rep("${COURSE.target==='ko'&&!ROM_SKIP[id]?'<button class=\"ghost qromT\" id=\"lsRomT\" type=\"button\" data-noi18n></button>':''}","${lsRomHas(id)?'<button class=\"ghost qromT\" id=\"lsRomT\" type=\"button\" data-noi18n></button>':''}")
rep("<div class=\"fb\" style=\"text-align:left\"></div>`; lsRom(body,id,1);","<div class=\"fb\" style=\"text-align:left\"></div>`; if(COURSE.target==='ko'||!rdSpoils(q)) lsRom(body,id,1);")
rep("body.noqrom ruby.rb rt{display:none}","body.noqrom ruby.rb rt{display:none}\nbdi.rbr{display:inline-flex;flex-wrap:wrap;align-items:baseline;direction:rtl;column-gap:.3em}")
io.open(P,'w',encoding='utf8').write(s); print('ok')
