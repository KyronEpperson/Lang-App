#!/usr/bin/env python3
# 2.106.0: Progress page without the "Reviews coming up" chart, the "Certificates" panel and the "Weekly badges" panel (owner: "remove these").
# Certificates are no longer awarded either (no toast, no +100 XP), because nothing shows them any more. Saved S.certs / S.weekly are left alone.
# Also adds guard `progressTrim` to harness.js.
# usage: python3 tools/patches/progress_trim.py   (from the build home)
s = open('src/app.html', encoding='utf8').read()
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, 'expected %d of: %s' % (n, a[:90])
    s = s.replace(a, b)
def cutline(start):
    """remove the one whole line that begins with `start`"""
    global s
    assert s.count('\n' + start) == 1, 'not found exactly once: ' + start[:90]
    i = s.index('\n' + start); j = s.index('\n', i + 1); s = s[:i] + s[j:]
cutline('    <div class="panel" data-adv="progress" style="margin-top:12px"><h3 style="margin-top:0">Reviews coming up</h3><div class="fc" id="fc">')
cutline('    <div class="panel" data-adv="progress"><div class="row"><h3 style="margin:0">Certificates</h3>')
cutline('    <div class="panel" data-adv="progress"><h3 style="margin-top:0">Weekly badges</h3>')
cutline("  (()=>{ const f=forecast(14); const mx=Math.max(1,...f); $('fc').innerHTML=")
cutline("  { checkCerts(); const cs=$('certs'); cs.innerHTML=")
cutline("  { const ws=Object.entries(S.weekly||{}).sort(); $('badges').innerHTML =")
rep("checkMastery(d); checkCerts(); }", "checkMastery(d); }", 3)
assert s.count('checkCerts()') == 1  # the unused function itself
for gone in ['id="fc"', 'id="certs"', 'id="badges"', "$('fc')", "$('fcSum')", "$('certs')", "$('badges')"]:
    assert gone not in s, gone
open('src/app.html', 'w', encoding='utf8').write(s)
h = open('harness.js', encoding='utf8').read()
if 'out.progressTrim=' not in h:
    a = "      out.idleDesktop=(()=>{"; assert h.count(a) == 1
    g = "      out.progressTrim=(()=>{ /* Progress draws no review forecast chart, no certificates and no weekly badges, and nothing awards a certificate */ try{ renderProgress(); }catch(e){ return false; } return !document.querySelector('#fc,#fcSum,#certs,#certOut,#badges')&&!/Certificates|Weekly badges/.test(document.getElementById('v-progress').textContent); })();\n"
    open('harness.js', 'w', encoding='utf8').write(h.replace(a, g + a))
print('progress page trimmed')
