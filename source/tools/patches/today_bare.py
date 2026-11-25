#!/usr/bin/env python3
# Today page (owner, 2026-11-25: "remove the few options button on this page", then, quoting the header counts, "also remove all of this"):
# no More / Fewer options button on Today: the session list and the four option buttons are always shown;
# the header no longer shows "Reviews coming up · due · tomorrow · this week" or "new today · memorized".
# Also updates guard `todaySimple` in harness.js.
# usage: python3 tools/patches/today_bare.py   (from the build home)
s = open('src/app.html', encoding='utf8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, 'not found exactly once: ' + a[:90]
    s = s.replace(a, b)
rep("""<div class="meta"><span class="mlab">Reviews coming up</span><span><b>${due}</b> due</span><span><b>${forecast(2)[1]}</b> tomorrow</span><span><b>${forecast(7).reduce((a,b)=>a+b,0)}</b> this week</span></div><div class="meta" style="margin-top:6px"><span title="new cards today / daily cap"><b>${newToday()}/${S.newCap||15}</b> new today</span><span><b>${memTotals().memorized}</b> memorized</span></div>""", "")
rep("""    <div class="advrow"><button type="button" class="chip advbtn" data-advbtn="today" aria-expanded="false">⚙ More options</button></div>\n""", "")
rep("""<div class="plan" data-adv="today"><div><span>Review due cards</span>""", """<div class="plan"><div><span>Review due cards</span>""")
rep("""<div class="quick" data-adv="today"><a href="#practice">""", """<div class="quick"><a href="#practice">""")
rep("\n.hero .meta{row-gap:4px}.hero .meta .mlab{flex-basis:100%;font-family:var(--body);color:var(--ink)}", "")
open('src/app.html', 'w', encoding='utf8').write(s)
h = open('harness.js', encoding='utf8').read()
a = "!!h.querySelector('.hero .meta .mlab')"
if a in h:
    assert h.count(a) == 1
    h = h.replace(a, "!h.querySelector('.hero .meta,.advbtn,.plan[data-adv],.quick[data-adv]')")
    open('harness.js', 'w', encoding='utf8').write(h)
print('today page: no options button, no header counts')
