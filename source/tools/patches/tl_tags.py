#!/usr/bin/env python3
"""TL-1: target-text tags in the app (docs/briefs/target-text-tags.md). Run from the build home: python3 tools/patches/tl_tags.py
A tagged course writes target text inside prose as ‹…›. The page shows each run as highlighted target text that plays when tapped and never shows
the delimiters. Section matching (lsNorm) reads the delimiters as punctuation. Assertion-guarded; a second run changes nothing."""
import io
p='src/app.html'
s=io.open(p,encoding='utf8').read()
if 'function tlWrap(' in s:
    print('tl_tags: already applied'); raise SystemExit(0)
def rep(a,b):
    global s
    assert s.count(a)==1,(a[:70],s.count(a))
    s=s.replace(a,b)
# 1. section matching: the delimiters are punctuation
rep("""toLowerCase().replace(/[.,!?¿¡。、！？;:"'’“”«»()\\[\\]…~·\\/\\-]/g,' ').replace(/\\s+/g,' ')+' '; }""",
    """toLowerCase().replace(/[.,!?¿¡。、！？;:"'’“”«»‹›()\\[\\]…~·\\/\\-]/g,' ').replace(/\\s+/g,' ')+' '; }""")
# 2. plain-text view of lesson html
rep("""function lsText(x){ return String(x||'').replace(/<[^>]+>/g,'')""","""function lsText(x){ return String(x||'').replace(/<[^>]+>/g,'').replace(/[‹›]/g,'')""")
# 3. the wrapper, its observer and the tap handler
anchor="""new MutationObserver(()=>{ clearTimeout(koTips._t); koTips._t=setTimeout(()=>{ koTips(); i18nPass(); bidiPass(); },80); }).observe(document.body,{childList:true,subtree:true});"""
code="""
/* TL-1: target text inside prose. A tagged course writes it as ‹…› in its own text (docs/briefs/target-text-tags.md); the page shows the run as highlighted target text that plays when tapped, and never shows the delimiters. One pass over added text, so every screen gets it. */
const TL_RX=/‹([^‹›\\s](?:[^‹›]*[^‹›\\s])?)›/g;
function tlOn(){ const c=COURSE; if(!c||c.builtin) return false; if(c._tl==null){ let on=false; try{ on=Object.values(c.DECKS||{}).some(d=>Array.isArray(d)&&d.some(x=>x&&typeof x[3]==='string'&&x[3].indexOf('‹')>=0))||(c.LESSONS||[]).some(l=>l&&String(l.body||'').indexOf('‹')>=0); }catch(e){} c._tl=on; } return c._tl; }
function tlStrip(s){ return String(s==null?'':s).replace(TL_RX,'$1'); }
function tlSay(t){ return /[A-Za-zÀ-ɏḀ-ỿ]{2}/.test(t)&&!/^-|-$|…|_|[a-z]-[A-Za-z]/.test(t); } /* a letter, an ending or a frame with a gap is shown, not spoken */
function tlNode(n){ const v=n.nodeValue, p=n.parentNode; if(!p||p.nodeType!==1||v.indexOf('‹')<0) return; TL_RX.lastIndex=0; if(!TL_RX.test(v)) return;
  if(/^(OPTION|TITLE)$/.test(p.nodeName)){ n.nodeValue=tlStrip(v); return; } if(/^(TEXTAREA|SCRIPT|STYLE)$/.test(p.nodeName)||p.isContentEditable) return;
  const f=document.createDocumentFragment(), lg=hLang(COURSE.target); let at=0, m; TL_RX.lastIndex=0;
  while((m=TL_RX.exec(v))){ if(m.index>at) f.appendChild(document.createTextNode(v.slice(at,m.index))); const b=document.createElement('b'); b.className='tl'; b.lang=lg; b.setAttribute('data-noi18n',''); if(tlSay(m[1])) b.setAttribute('data-tl',''); b.textContent=m[1]; f.appendChild(b); at=m.index+m[0].length; }
  if(at<v.length) f.appendChild(document.createTextNode(v.slice(at))); p.replaceChild(f,n); }
function tlWrap(root){ if(!root||!tlOn()) return; if(root.nodeType===3){ tlNode(root); return; } if(root.nodeType!==1||root.textContent.indexOf('‹')<0) return; const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT), nodes=[]; let n; while((n=tw.nextNode())){ if(n.nodeValue.indexOf('‹')>=0) nodes.push(n); } nodes.forEach(tlNode); }
new MutationObserver(recs=>{ if(!tlOn()) return; recs.forEach(r=>{ if(r.type==='characterData'){ if(r.target.nodeType===3) tlNode(r.target); } else r.addedNodes.forEach(x=>{ if(x.nodeType===3) tlNode(x); else if(x.nodeType===1&&!(x.classList&&x.classList.contains('tl'))) tlWrap(x); }); }); }).observe(document.body,{childList:true,subtree:true,characterData:true});
document.addEventListener('click',e=>{ if(!e.target||!e.target.closest||!tlOn()) return; const t=e.target.closest('b'); if(!t||t.closest('button,a,label,.opt,.ex')) return; if(!(t.matches('b.tl[data-tl]')||(t.closest('.lbody')&&!t.classList.contains('tl')&&tlSay(t.textContent)))) return; e.stopPropagation(); e.preventDefault(); speak(t.textContent); },true);
"""
rep(anchor,anchor+code)
# 4. look: target text in notes and explanations stands out and shows it can be tapped
css_anchor=""".note{font-size:.9rem;color:var(--muted);max-width:34ch;line-height:1.45}"""
rep(css_anchor,css_anchor+"""
b.tl{font-weight:600;color:var(--ink)} b.tl[data-tl],.lbody b{cursor:pointer} .note b.tl,.n b.tl,.why b.tl,.prac-why b.tl,.prac-hint b.tl,.fb b.tl{color:var(--accent)} .lbody b.tl{font-weight:700;color:inherit}""")
io.open(p,'w',encoding='utf8').write(s)
print('tl_tags: applied')
