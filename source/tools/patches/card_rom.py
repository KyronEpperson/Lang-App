# 2.105.0: cards carry the reading under target-script words in the note, the example, the dialogue and "break it down" (same ruby as lessons; the Aa switch hides it).
p='src/app.html'; s=open(p,encoding='utf8').read()
a="  const card=container.querySelector('.card'), lblL=container.querySelector('.swipe-lbl.l'), lblR=container.querySelector('.swipe-lbl.r');"
assert s.count(a)==1 and 'cardRom(' not in s
s=s.replace(a,"  cardRom(container);\n"+a)
a="out.innerHTML=out.innerHTML?'':breakdownHTML(bb.dataset.bd); });"
assert s.count(a)==1
s=s.replace(a,"out.innerHTML=out.innerHTML?'':breakdownHTML(bb.dataset.bd); try{ romAnnotate(out); }catch(_){} });")
a="function lsRomHas(id){"
assert s.count(a)==1
s=s.replace(a,"function cardRom(root){ try{ root.querySelectorAll('.back .note,.back .dlg').forEach(x=>romAnnotate(x)); }catch(e){} }\n"+a)
open(p,'w',encoding='utf8').write(s); print('ok')
