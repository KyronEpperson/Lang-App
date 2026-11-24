#!/usr/bin/env python3
# 2.104.0: Today page. (1) Session plans sized to their stated time (about 12 seconds a step).
# (2) The review counts in the header get the heading "Reviews coming up" and their own line.
# (3) Below the session card only the phrase of the day and the option buttons remain:
#     study plan, study time / reminder, "N cards from mastery", deck of the week and the track chips are no longer drawn.
# usage: python3 tools/patches/today_simple.py [src/app.html]
import sys, re
p = sys.argv[1] if len(sys.argv) > 1 else 'src/app.html'
s = open(p, encoding='utf8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, 'not found exactly once: ' + a[:90]
    s = s.replace(a, b)

def cut(start, end, keep_end=True):
    """remove from the one occurrence of `start` up to the next `end`"""
    global s
    assert s.count(start) == 1, 'not found exactly once: ' + start[:90]
    i = s.index(start); j = s.index(end, i + len(start))
    s = s[:i] + s[j if keep_end else j + len(end):]

# (1) sizes
rep("const SIZES={quick:{due:4,fresh:5,quiz:3,hangul:0},standard:{due:10,fresh:5,quiz:5,hangul:5,register:2,role:1},long:{due:18,fresh:10,quiz:8,hangul:6,build:3,register:2,listen:2,numbers:2,role:2}};",
    "/* sized to the stated time at about 12 seconds a step (a new card is two steps: the look, then its question): quick 11 steps, standard 25, long 52 */\n"
    "const SIZES={quick:{due:8,fresh:0,quiz:3,hangul:0},standard:{due:6,fresh:5,quiz:4,hangul:4,register:1},long:{due:12,fresh:10,quiz:6,hangul:5,build:2,register:2,listen:2,numbers:2,role:1}};")
rep("function sessSize(){ const z=SIZES[S.sessLen]||SIZES.standard; if(modeOk('build')",
    "function sessSize(){ let z=SIZES[S.sessLen]||SIZES.standard; /* a quick session is reviews; on a day with fewer than 3 due it teaches one batch of five new cards instead of the quiz */ if(z===SIZES.quick&&dueCount()<3&&nextNewCards(5).length) z=Object.assign({},z,{fresh:5,quiz:0}); if(modeOk('build')")

# (2) header counts
rep("""<div class="meta"><span><b>${due}</b> due</span><span><b>${forecast(2)[1]}</b> tomorrow</span><span><b>${forecast(7).reduce((a,b)=>a+b,0)}</b> this week</span><span title="new cards today / daily cap">""",
    """<div class="meta"><span class="mlab">Reviews coming up</span><span><b>${due}</b> due</span><span><b>${forecast(2)[1]}</b> tomorrow</span><span><b>${forecast(7).reduce((a,b)=>a+b,0)}</b> this week</span></div><div class="meta" style="margin-top:6px"><span title="new cards today / daily cap">""")
rep(".hero .meta b{color:var(--ink);font-weight:500}",
    ".hero .meta b{color:var(--ink);font-weight:500}\n.hero .meta{row-gap:4px}.hero .meta .mlab{flex-basis:100%;font-family:var(--body);color:var(--ink)}")

# rows that hold nothing in this plan are not listed (a quick session has no new cards and no reading drill)
rep("""<div><span>New cards${newDeck?' · '+newDeck:''}${newLeft()===0?' · daily cap reached':''}</span><small>${newN}</small></div>""",
    """${sz.fresh?`<div><span>New cards${newDeck?' · '+newDeck:''}${newLeft()===0?' · daily cap reached':''}</span><small>${newN}</small></div>`:''}""")
rep("""<div><span>${CF('script')?'Reading drill':'Drills'}</span><small>${sz.hangul}</small></div>""",
    """${sz.hangul?`<div><span>${CF('script')?'Reading drill':'Drills'}</span><small>${sz.hangul}</small></div>`:''}""")

# (3) panels under the session card
rep("    ${renderPlanPanel()}\n", "")
cut("    ${(()=>{ const [hh,mm]=(S.studyAt||'21:00').split(':').map(Number); const now=new Date(); const past=", "    ${(()=>{ const pool=[]; names.filter(deckUnlocked)")
cut("    ${(()=>{ const cand=names.filter(d=>DECKS[d].length&&!(S.mastered||{})[d]&&mastered(d)>0)", "    </div>\n    <div class=\"advrow\">")
cut("  const pn=$('planNew'); if(pn) pn.onclick=renderPlanPicker;", "  const pa=$('potdAdd');")
for gone in ["id=\"planNew\">Make one", "id=\"icsBtn\"", "Deck of the week</b>", "Your track ·", "from mastery</span>"]:
    assert (gone in s) == (gone == "id=\"planNew\">Make one"), gone  # the plan panel function stays in the file, unused
open(p, 'w', encoding='utf8').write(s)
print('today page simplified; session sizes 11 / 25 / 52 steps')
