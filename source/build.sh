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
out=[]
for f in sorted(glob.glob('packs/*.js')):
    js=open(f,encoding='utf8').read()
    if '</script' in js.lower(): sys.exit('pack contains </script>: '+f)
    r=subprocess.run(['node','--check',f],capture_output=True,text=True)
    if r.returncode: sys.exit('pack syntax error in '+f+': '+r.stderr[-400:])
    out.append('/* pack: '+os.path.basename(f)+' */\n;(function(){\n'+js+'\n})();')
open('korean-flashcards.html','w',encoding='utf8').write(src.replace('/*__PACKS__*/','\n'.join(out)))
print('assembled korean-flashcards.html from src/app.html +',len(out),'pack(s)')
PY0
python3 - <<'PY'
import re,time
h=open('korean-flashcards.html',encoding='utf8').read()
head=open('korean-site/index.html',encoding='utf8').read().split('<body>\n')[0]
body=h.replace('<meta name="claude:viewport-fit-sides" content="cover">\n','').replace('<title>Hangul Starter Deck</title>','',1).replace('<h1>한글 <small>Korean starter</small></h1>','<h1>한글 <small>Lang App · Korean</small></h1>',1).replace("' · 한글 Korean starter'","' · Lang App'",1)
open('korean-site/index.html','w',encoding='utf8').write(head+'<body>\n'+body+'\n</body>\n</html>\n')
sw=open('korean-site/sw.js').read(); sw=re.sub(r"korean-v\d+","korean-v%d"%int(time.time()),sw); open('korean-site/sw.js','w').write(sw)
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
cfg={"cleanUrls":True,"headers":[{"source":"/(.*)","headers":hdrs},{"source":"/sw.js","headers":[{"key":"Cache-Control","value":"no-cache"},{"key":"Service-Worker-Allowed","value":"/"}]}]}
open('korean-site/vercel.json','w').write(json.dumps(cfg,indent=1))
print('vercel.json: CSP with',len(scripts),'script hash(es)')

PY
python3 korean-site/verify_build.py
rm -f korean-site.zip && (cd korean-site && zip -q -r ../korean-site.zip .) && ls -la korean-site.zip
