#!/usr/bin/env python3
# 2.94.0: stroke-order grid labels read "letter - romanization" (assertion-guarded edits to src/app.html)
import io
P='/home/claude/src/app.html'
s=io.open(P,encoding='utf8').read()
def rep(a,b):
    global s
    assert s.count(a)==1,(s.count(a),a[:70]); s=s.replace(a,b)
rep(""".sgl .k{font-family:var(--display);font-weight:700}""",""".sgl .k{font-family:var(--display);font-weight:700;font-size:1rem;margin-bottom:2px}.sgl .k .rom{font-size:.8rem;font-weight:500}""")
rep("""<div class="sgl" data-replay="1"><div class="k">${ch}</div>${strokeSVG(ch)""","""<div class="sgl" data-replay="1"><div class="k">${sglLabel(ch)}</div>${strokeSVG(ch)""")
rep("""'<div class="sgl" data-replay="1"><div class="k">'+escT(ch)+'</div>'+strokeSVG(ch)""","""'<div class="sgl" data-replay="1"><div class="k">'+sglLabel(ch)+'</div>'+strokeSVG(ch)""")
rep("function strokeTok(h){","""/* stroke-order grid label: letter - romanization (first sound / final sound where they differ; initial ㅇ is silent) */
function sglLabel(ch){ const R={'ㄱ':'g/k','ㄴ':'n','ㄷ':'d/t','ㄹ':'r/l','ㅁ':'m','ㅂ':'b/p','ㅅ':'s','ㅇ':'silent/ng','ㅈ':'j','ㅊ':'ch','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'h','ㄲ':'kk','ㄸ':'tt','ㅃ':'pp','ㅆ':'ss','ㅉ':'jj','ㅏ':'a','ㅑ':'ya','ㅓ':'eo','ㅕ':'yeo','ㅗ':'o','ㅛ':'yo','ㅜ':'u','ㅠ':'yu','ㅡ':'eu','ㅣ':'i','ㅐ':'ae','ㅔ':'e','ㅒ':'yae','ㅖ':'ye','ㅘ':'wa','ㅙ':'wae','ㅚ':'oe','ㅝ':'wo','ㅞ':'we','ㅟ':'wi','ㅢ':'ui'}; const c=String(ch).replace(/&/g,'&amp;').replace(/</g,'&lt;'); return R[ch]?c+' <span class="rom" data-noi18n>- '+R[ch]+'</span>':c; }
function strokeTok(h){""")
io.open(P,'w',encoding='utf8').write(s)
