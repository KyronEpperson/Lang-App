#!/usr/bin/env python3
"""Pre-push guard: the CSP script hash in vercel.json must match the inline script in index.html,
or the live app goes blank. Also checks the script parses. Run: python3 verify_build.py"""
import re,hashlib,base64,json,subprocess,sys,tempfile,os
d=os.path.dirname(os.path.abspath(__file__))
html=open(os.path.join(d,'index.html'),encoding='utf8').read()
scripts=re.findall(r'<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)</script>',html)
want={"'sha256-"+base64.b64encode(hashlib.sha256(s.encode('utf8')).digest()).decode()+"'" for s in scripts}
csp=[h['value'] for r in json.load(open(os.path.join(d,'vercel.json')))['headers'] for h in r['headers'] if h['key']=='Content-Security-Policy'][0]
missing=[w for w in want if w not in csp]
ok=True
if missing: print('CSP HASH MISMATCH — app would be blank in production:',missing); ok=False
for s in scripts:
    f=tempfile.NamedTemporaryFile('w',suffix='.js',delete=False,encoding='utf8'); f.write(s); f.close()
    r=subprocess.run(['node','--check',f.name],capture_output=True,text=True); os.unlink(f.name)
    if r.returncode: print('SCRIPT SYNTAX ERROR:',r.stderr[-300:]); ok=False
print('verify_build: OK' if ok else 'verify_build: FAILED'); sys.exit(0 if ok else 1)
