#!/usr/bin/env python3
# 2.96.0: a "Next lesson" button at the bottom of every lesson, whether or not the lesson is finished (assertion-guarded edits to src/app.html)
import io
P='/home/claude/src/app.html'
s=io.open(P,encoding='utf8').read()
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (s.count(a), a[:80])
    s=s.replace(a,b)
# 1. the block is drawn for every lesson that has a next one; green tick and primary colour only once this lesson is done
a=s.index("function nextCta(id){"); b=s.index("\n",a)
s=s[:a]+"""function nextCta(id){ const n=nextLessonAfter(id), d=!!S.lessons[id]; if(!n) return d?`<div class="ls-next"><b style="color:var(--ok)">✓</b> <span>${LL('All lessons','모든 수업')}</span> <a class="big primary" style="text-align:center;text-decoration:none;display:block;margin-top:10px" href="#today">${LL('Today','오늘')}</a></div>`:''; return `<div class="ls-next"><div class="stat" style="margin-bottom:8px">${d?'<b style="color:var(--ok)">✓</b> ':''}<span>${LL('Next lesson','다음 수업')}</span></div><button class="big ${d?'primary':'hit'} nl-go" type="button" data-next="${n.id}" style="width:100%">${LL('Open lesson · '+lessonName(n),'수업 열기 · '+lessonName(n)).replace(lessonName(n),()=>'<span class="pc">'+lessonName(n)+'</span>')}</button></div>`; }"""+s[b:]
# 2. a lesson opened from that button stays open in the list
rep("document.addEventListener('click',e=>{ const b=e.target.closest&&e.target.closest('.nl-go'); if(!b) return; e.preventDefault(); goLesson(b.dataset.next); });",
    "document.addEventListener('click',e=>{ const b=e.target.closest&&e.target.closest('.nl-go'); if(!b) return; e.preventDefault(); { const i=LESSONS.findIndex(x=>x.id===b.dataset.next); if(i>0&&!lessonUnlocked(i)){ S.seen=S.seen||{}; S.seen[b.dataset.next]=1; save(); } } goLesson(b.dataset.next); });")
rep("function lessonUnlocked(i){ if(S.free||i===0||S.lessons[LESSONS[i-1].id]) return true;",
    "function lessonUnlocked(i){ if(S.free||i===0||S.lessons[LESSONS[i-1].id]||(S.seen&&S.seen[LESSONS[i].id]===1)) return true;")
# 3. lesson page: the block moves to the very bottom, under the practice set
rep("""<div id="lsNext" style="margin-top:16px">${nextCta(id)}</div>${pracEntryHTML(id)}</div>`;""",
    """${pracEntryHTML(id)}<div id="lsNext" style="margin-top:16px">${nextCta(id)}</div></div>`;""")
rep("/* After a lesson is done the learner is always offered the next one: in the lesson itself, after its practice set, and at the end of a Today session. */",
    "/* Every lesson ends with a button to the next one (bottom of the lesson, and after its practice set), finished or not; a Today session offers the next open lesson at its end. */")
# 4. en-ko lesson 1: say how many letters there are and where the rest live
rep("""<div class="tip" style="background:var(--accent-soft)"><b>Not reading Hangul yet?</b>""",
    """<div class="tip"><b>How many letters are there?</b> 40 in all. This lesson covers the 24 basic ones: 14 consonants and 10 vowels. The other 16 are built from them: 5 double consonants (ㄲ kk, ㄸ tt, ㅃ pp, ㅆ ss, ㅉ jj) and 11 combined vowels (ㅐ ae, ㅔ e, ㅒ yae, ㅖ ye, ㅘ wa, ㅙ wae, ㅚ oe, ㅝ wo, ㅞ we, ㅟ wi, ㅢ ui). ㅐ and ㅔ are in the <b>Hangul vowels</b> deck; the rest are in <b>Hangul · advanced</b>.</div>
<div class="tip" style="background:var(--accent-soft)"><b>Not reading Hangul yet?</b>""")
io.open(P,'w',encoding='utf8').write(s)
print('ok')
