#!/usr/bin/env python3
# SR-1 (course report, solution 8): say, record, compare. Inserts tools/patches/sr/sr.js and its hooks into src/app.html and lets the site use the microphone (build.sh header). Needs st_stories.py first. Safe to run twice.
import os,sys
R=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); f=os.path.join(R,'src','app.html'); s=open(f,encoding='utf-8').read()
if 'function srOn(' in s: print('sr_record: already applied'); sys.exit(0)
assert 'function stFor(' in s
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (s.count(a),a[:80]); s=s.replace(a,b)
js=open(os.path.join(R,'tools','patches','sr','sr.js'),encoding='utf-8').read().strip()
assert '//' not in js and '</script' not in js
rep('function pracBadge(id){', js+'\nfunction pracBadge(id){')
rep("function closeSheet(){ document.querySelectorAll('.sheet').forEach(s=>s.remove()); }", "function closeSheet(){ if(SR) srEnd(); document.querySelectorAll('.sheet').forEach(s=>s.remove()); }")
# Review card, back face: next to the note button
rep('''<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center"><button class="ghost notebtn"''', '''<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">${srBtn(c[0])}<button class="ghost notebtn"''')
# recall reveal in lesson and practice quizzes
rep('''class="speak" data-say="${say}" type="button" style="padding:4px 9px">🔊</button>''', '''class="speak" data-say="${say}" type="button" style="padding:4px 9px">🔊</button>${srBtn(c[0])}''',2)
# new-card teach screen: hear it, then say it
rep('''<button class="speak" data-say="${say}" type="button">🔊</button></div>`; /* a letter or sound card''', '''<button class="speak" data-say="${say}" type="button">🔊</button>${srBtn(c[0])}</div>`; /* a letter or sound card''')
# story: the line the learner opened
rep('''${ST.en||ST.open[i]?`<span class="m">${pesc(x[1])}</span>`:''}</div>`''', '''${ST.en||ST.open[i]?`<span class="m">${pesc(x[1])}</span>`:''}${ST.open[i]?srBtn(x[0]):''}</div>`''')
rep(".st-run .st-title{", ".sr-sheet .sr-text{font-size:1.3rem;line-height:1.4;text-align:center;margin:8px 0 6px;font-weight:600}\n.sr-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:0 0 8px}\n.sr-row .speak{min-height:44px;margin-top:0;font-size:.85rem;padding:6px 14px}\n.sr-sheet .sr-rec{min-height:52px;width:100%}\n.sr-sheet .stat{text-align:center;max-width:none;margin:4px 0 0}\n.sr-sheet .sr-priv{font-size:.68rem;opacity:.8}\n.speak.sr-open{margin-left:6px}\n.st-run .st-title{")
open(f,'w',encoding='utf-8').write(s)
b=os.path.join(R,'build.sh'); t=open(b,encoding='utf-8').read(); a='microphone=(), '
if a in t:
    assert t.count(a)==1; open(b,'w',encoding='utf-8').write(t.replace(a,'microphone=(self), '))
print('sr_record: applied')
