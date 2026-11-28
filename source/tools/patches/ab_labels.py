#!/usr/bin/env python3
# HL-1 (course report, solution 14): honest labels. Inserts tools/patches/ab/ab.js and its hooks into src/app.html. Needs st_stories.py first (CSS anchor). Safe to run twice.
import os,sys
R=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); f=os.path.join(R,'src','app.html'); s=open(f,encoding='utf-8').read()
if 'function abFor(' in s: print('ab_labels: already applied'); sys.exit(0)
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (s.count(a),a[:80]); s=s.replace(a,b)
js=open(os.path.join(R,'tools','patches','ab','ab.js'),encoding='utf-8').read().strip()
assert '//' not in js and '</script' not in js
rep('function pracBadge(id){', js+'\nfunction pracBadge(id){')
rep("""'<div class="lesson-list">'+(()=>{ const nx=""", """abPanelHTML()+'<div class="lesson-list">'+(()=>{ const nx=""")
rep("""<h2 style="margin-top:12px">${l.title}</h2><div id="lsRomBody">""", """<h2 style="margin-top:12px">${l.title}</h2>${abGoalHTML(l)}<div id="lsRomBody">""")
rep(".st-run .st-title{", ".ab-course{border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin:0 0 12px;background:var(--paper)}\n.ab-course summary{cursor:pointer;font-weight:600;font-size:.9rem}\n.ab-course h4{margin:12px 0 4px;font-size:.85rem}\n.ab-course ul{margin:0;padding-left:20px;font-size:.9rem;line-height:1.5}\n.ab-course p{margin:8px 0 0;font-size:.9rem;line-height:1.5}\n.ab-goal{margin:6px 0 10px;padding:8px 12px;border-left:3px solid var(--ok);background:var(--panel2,rgba(127,127,127,.08));border-radius:0 8px 8px 0;font-size:.92rem;line-height:1.45}\n.st-run .st-title{")
open(f,'w',encoding='utf-8').write(s); print('ab_labels: applied')
