#!/usr/bin/env python3
# FND-1 batch 3: a long reading on a flip tile (a Thai letter name, a letter name such as EWP-see-lawn) is set smaller and may wrap, so it stays inside the tile.
import io
P='/home/claude/src/app.html'
s=io.open(P,encoding='utf-8').read()
a=""".tiles-grid .sgl .sgb .rom{font-size:1.15rem}"""
b=""".tiles-grid .sgl .sgb .rom{font-size:1.15rem}.tiles-grid .sgl .sgb{overflow:hidden;padding:2px}.tiles-grid .sgl .sgb .rom.lg{font-size:.7rem;white-space:normal;text-align:center;line-height:1.15;overflow-wrap:anywhere}"""
c="""(r?'<div class="sgb"><span class="rom">'+r+'</span></div>':'')+'</div>'; }).join('')+'</div>'); }"""
d="""(r?'<div class="sgb"><span class="rom'+(r.length>6?' lg':'')+'">'+r+'</span></div>':'')+'</div>'; }).join('')+'</div>'); }"""
assert s.count(a)==1 and s.count(c)==1, 'tile styles not as expected (already applied?)'
io.open(P,'w',encoding='utf-8').write(s.replace(a,b).replace(c,d))
print('foundations_b3: ok')
