#!/usr/bin/env python3
# FND-1 batch 1: flip tiles run right to left in Arabic-script courses, and an underscore in a hand-set tile reading shows as a space.
import io
P='/home/claude/src/app.html'
s=io.open(P,encoding='utf-8').read()
a="""'<div class="tiles-grid">'+inner"""
b="""'<div class="tiles-grid"'+(COURSE.target==='ar'||COURSE.target==='ur'?' dir="rtl"':'')+'>'+inner"""
c="""r=escT(i>0?t.slice(i+1):(R[t]||''))"""
d="""r=escT(i>0?t.slice(i+1).replace(/_/g,' '):(R[t]||''))"""
assert s.count(a)==1 and s.count(c)==1, 'tilesTok not as expected (already applied?)'
s=s.replace(a,b).replace(c,d)
io.open(P,'w',encoding='utf-8').write(s)
print('foundations_b1: ok')
