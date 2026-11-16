"""Renders the icon set and og image into korean-site/ from logo.py. usage: python3 tools/brand/render.py"""
import os, sys, json, subprocess
D=os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0,D)
from logo import logo_svg
SITE=os.path.join(os.path.dirname(os.path.dirname(D)),'korean-site'); BG='#1d2030'
jobs=[('icon.png',512,logo_svg(512,bg=BG,pad=0.1)),('icon-512.png',512,logo_svg(512,bg=BG,pad=0.1)),('icon-192.png',192,logo_svg(192,bg=BG,pad=0.1)),
      ('apple-touch-icon.png',180,logo_svg(180,bg=BG,pad=0.1)),('icon-maskable-512.png',512,logo_svg(512,bg=BG,pad=0.22)),('favicon-32.png',32,logo_svg(32,bg=BG,pad=0.07,radius=0.16,edge='rgba(0,0,0,0)'))]
og='''<body style="margin:0;width:1200px;height:630px;background:#15161c;color:#f3efe6;font-family:'DejaVu Sans','Liberation Sans',Arial,sans-serif;position:relative;overflow:hidden">
<div style="position:absolute;inset:0 0 auto 0;height:14px;background:#c2402f"></div>
<div style="position:absolute;left:80px;top:84px;width:640px">
<div style="font-size:38px;font-weight:700;letter-spacing:2px;color:#cfc8b8">Lang App</div>
<div style="font-size:56px;font-weight:700;line-height:1.1;white-space:nowrap;margin-top:22px">Learn languages,<br>5 minutes a day.</div>
<div style="font-size:27px;line-height:1.4;margin-top:26px;color:#cfc8b8">Flashcards with audio, short grammar lessons, typing practice and real conversations. Free, in your browser.</div>
<div style="display:flex;gap:12px;margin-top:30px;font-size:23px;font-weight:700">%s</div></div>
<div style="position:absolute;right:66px;top:126px;width:384px;height:384px;border-radius:44px;background:#1d2030;border:2px solid #2c3042;display:grid;place-items:center">%s</div></body>'''
chips=''.join('<span style="border:2px solid #3a3d4b;border-radius:999px;padding:9px 20px">%s</span>'%c for c in ('Audio','Spaced review','Grammar'))
html={n:('<body style="margin:0">%s</body>'%s,sz,sz) for n,sz,s in jobs}; html['og-image.png']=(og%(chips,logo_svg(330,pad=0.04)),1200,630)
js='''const {chromium}=require('playwright');const J=%s;(async()=>{const b=await chromium.launch();for(const n in J){const [h,w,ht]=J[n];const p=await b.newPage({viewport:{width:w,height:ht}});await p.setContent(h);await p.screenshot({path:%s+'/'+n,omitBackground:false});await p.close();}await b.close();})()'''%(json.dumps(html),json.dumps(SITE))
subprocess.run(['node','-e',js],check=True,cwd='/home/claude'); print('rendered',', '.join(html))
