#!/usr/bin/env bash
# Build: src/app.html + packs/*.js → korean-flashcards.html (generated; artifact file) → korean-site/ and korean-site.zip
# EDIT src/app.html and packs/*.js — never edit korean-flashcards.html directly.
set -e
cd "$(dirname "$0")"
# Step 0: assemble the single-file app (artifact + site source) from src/app.html + packs/*.js
python3 - <<'PY0'
import glob,subprocess,sys,os,tempfile
src=open('src/app.html',encoding='utf8').read()
assert src.count('/*__PACKS__*/')==1, 'packs marker missing or duplicated in src/app.html'
HELD=set(l.strip() for l in open('packs/HELD.txt',encoding='utf8') if l.strip() and not l.startswith('#')) if os.path.exists('packs/HELD.txt') else set()
PACKS=[f for f in sorted(glob.glob('packs/*.js')) if os.path.basename(f) not in HELD]
if HELD: print('held back (packs/HELD.txt):',sorted(HELD))
out=[]
for f in PACKS:
    js=open(f,encoding='utf8').read()
    if '</script' in js.lower(): sys.exit('pack contains </script>: '+f)
    r=subprocess.run(['node','--check',f],capture_output=True,text=True)
    if r.returncode: sys.exit('pack syntax error in '+f+': '+r.stderr[-400:])
    out.append('/* pack: '+os.path.basename(f)+' */\n;(function(){\n'+js+'\n})();')
open('korean-flashcards.html','w',encoding='utf8').write(src.replace('/*__PACKS__*/','\n'.join(out)))
print('assembled korean-flashcards.html from src/app.html +',len(out),'pack(s)')
# Site variant: course-* and i18n-* packs become files under korean-site/packs/ (hashed names), loaded on demand; everything else stays inline.
import hashlib,json,re,shutil
os.makedirs('korean-site/packs',exist_ok=True)
for old in glob.glob('korean-site/packs/*.js'): os.remove(old)
inline=[]; man={'courses':{},'i18n':{}}
for f in PACKS:
    name=os.path.basename(f)[:-3]; js=open(f,encoding='utf8').read(); wrapped='/* pack: '+name+'.js */\n;(function(){\n'+js+'\n})();'
    if not re.match(r'(course|i18n)-',name): inline.append(wrapped); continue
    fn='packs/%s.%s.js'%(name,hashlib.sha256(wrapped.encode('utf8')).hexdigest()[:8]); open('korean-site/'+fn,'w',encoding='utf8').write(wrapped+'\n')
    probe=subprocess.run(['node','-e','var LANGAPP_PACKS={course:{},i18n:{}};new Function("LANGAPP_PACKS",require("fs").readFileSync(process.argv[1],"utf8"))(LANGAPP_PACKS);var c=LANGAPP_PACKS.course,o={c:Object.keys(c).map(function(k){return c[k].standard?{id:c[k].id,native:c[k].native,target:c[k].target,name:c[k].name||null,standard:1}:{id:c[k].id,native:c[k].native,target:c[k].target,name:c[k].name||null}}),i:Object.keys(LANGAPP_PACKS.i18n)};console.log(JSON.stringify(o))',f],capture_output=True,text=True)
    if probe.returncode: sys.exit('pack probe failed: '+f+' '+probe.stderr[-300:])
    o=json.loads(probe.stdout)
    for c in o['c']: c['file']=fn; man['courses'][c['id']]=c
    for l in o['i']: man['i18n'][l]=fn
    if len(o['c'])+len(o['i'])!=1: sys.exit('external pack must define exactly one course or one i18n table: '+f)
# interface-pack aliases: a native language whose LANGS entry in src/app.html has ui:'<code>' (spr reads es) loads that language's interface file
for a,b in re.findall(r"\b([a-z]{2,4}):\{name:'[^']*',self:'[^']*',flag:'[^']*',ko:'[^']*'(?:,t:1)?,ui:'([a-z]{2,3})'\}",src):
    if b in man['i18n'] and a not in man['i18n']: man['i18n'][a]=man['i18n'][b]
mj=json.dumps(man,ensure_ascii=False,separators=(',',':')).replace('</','<\\/').replace('\u2028','\\u2028').replace('\u2029','\\u2029')
loader=("(function(){var M="+mj+";window.LANGAPP_MANIFEST=M;window.LANGAPP_PACKS={course:{},i18n:{}};var m=null;try{m=JSON.parse(localStorage.getItem('la-meta')||'null')}catch(e){}"
 "var w=[],c=m&&typeof m==='object'&&m.v===1&&m.picked&&typeof m.course==='string'&&Object.prototype.hasOwnProperty.call(M.courses,m.course)?M.courses[m.course]:null;"
 "if(c){w.push(c.file);if(M.i18n[c.native])w.push(M.i18n[c.native])}else{var b='';try{b=String((m&&m.native)||navigator.language||'').toLowerCase().split(/[-_]/)[0];if(b==='fil')b='tl';if(b==='mww'||b==='hnj')b='hmn'}catch(e){}if(b&&b!=='en'&&Object.prototype.hasOwnProperty.call(M.i18n,b))w.push(M.i18n[b])}"
 "for(var i=0;i<w.length;i++)document.write('<script src=\"'+w[i]+'\"><\\/script>')})();")
assert src.count('\n<script>\n')==1, 'expected exactly one inline <script> block in src/app.html'
site=src.replace('\n<script>\n','\n<script>'+loader+'</script>\n<script>\n').replace('/*__PACKS__*/','\n'.join(inline))
open('korean-site/.site-body.html','w',encoding='utf8').write(site)
open('korean-site/.packs.json','w',encoding='utf8').write(json.dumps(man,ensure_ascii=False))
print('site: %d inline pack(s), %d course file(s), %d interface file(s)'%(len(inline),len(man['courses']),len(man['i18n'])))
PY0
python3 - <<'PY'
import re,time
h=open('korean-site/.site-body.html',encoding='utf8').read()
import os,json; os.remove('korean-site/.site-body.html'); MAN=json.load(open('korean-site/.packs.json',encoding='utf8')); os.remove('korean-site/.packs.json')
head=open('korean-site/index.html',encoding='utf8').read().split('<body>\n')[0]
body=h.replace('<meta name="claude:viewport-fit-sides" content="cover">\n','').replace('<title>Lang App</title>','',1)
open('korean-site/index.html','w',encoding='utf8').write(head+'<body>\n'+body+'\n</body>\n</html>\n')
sw=open('korean-site/sw.js').read(); sw=re.sub(r"korean-v\d+","korean-v%d"%int(time.time()),sw); PK={re.sub(r'\.[0-9a-f]{8}\.js$','',f.split('/')[-1]):f for f in [c['file'] for c in MAN['courses'].values()]+list(MAN['i18n'].values())}
sw=re.sub(r"const P=\{[^;]*\};","const P="+json.dumps(PK,separators=(',',':'))+";",sw); assert 'const P={' in sw, 'sw.js: pack map missing'; open('korean-site/sw.js','w').write(sw)
print('index.html + sw.js regenerated')
# G35: security headers + hash-based CSP (only the app's own inline script may run)
import hashlib,base64,json
built=open('korean-site/index.html',encoding='utf8').read()
scripts=re.findall(r'<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)</script>',built)
hashes=" ".join("'sha256-"+base64.b64encode(hashlib.sha256(s.encode('utf8')).digest()).decode()+"'" for s in scripts)
SB='https://ddhxqolevqbaabssupvb.supabase.co'
csp="; ".join([ "default-src 'self'", "script-src 'self' "+hashes, "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:", "img-src 'self' data: blob:", "connect-src 'self' "+SB+" https://fonts.googleapis.com https://fonts.gstatic.com",
  "media-src 'self' blob: data:", "worker-src 'self'", "manifest-src 'self'", "object-src 'none'", "base-uri 'none'", "form-action 'self'", "frame-ancestors 'none'", "upgrade-insecure-requests" ])
hdrs=[{"key":"Content-Security-Policy","value":csp},{"key":"Strict-Transport-Security","value":"max-age=63072000; includeSubDomains; preload"},
  {"key":"X-Content-Type-Options","value":"nosniff"},{"key":"X-Frame-Options","value":"DENY"},{"key":"Referrer-Policy","value":"strict-origin-when-cross-origin"},
  {"key":"Permissions-Policy","value":"camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"},
  {"key":"Cross-Origin-Opener-Policy","value":"same-origin"},{"key":"Cache-Control","value":"public, max-age=0, must-revalidate"}]
cfg={"cleanUrls":True,"redirects":[{"source":"/:path*","has":[{"type":"host","value":"lang-app-3qdw.vercel.app"}],"destination":"https://lang-app.io/:path*","permanent":False}],"headers":[{"source":"/(.*)","headers":hdrs},{"source":"/packs/(.*)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]},{"source":"/sw.js","headers":[{"key":"Cache-Control","value":"no-cache"},{"key":"Service-Worker-Allowed","value":"/"}]}]}
open('korean-site/vercel.json','w').write(json.dumps(cfg,indent=1))
print('vercel.json: CSP with',len(scripts),'script hash(es)')

PY
python3 korean-site/verify_build.py
rm -f korean-site.zip && (cd korean-site && zip -q -r ../korean-site.zip .) && ls -la korean-site.zip
