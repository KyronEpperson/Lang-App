"""Build LATaigi: a two-glyph fallback font for the Taigi characters most phone fonts lack:
U+20895 (gau, as in 'good morning') = 敖 over 力, U+2A736 (in, 'they') = 亻 beside 因.
The glyphs are composed from Noto Sans CJK TC components (SIL OFL 1.1), squeezed to fit. Output: LATaigi.woff + LATaigi.b64"""
import base64, sys
from fontTools.ttLib import TTCollection
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.t2CharStringPen import T2CharStringPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.misc.transform import Transform
SRC = '/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'
tc = TTCollection(SRC); f = next(x for x in tc.fonts if 'CJK TC' in x['name'].getDebugName(1))
gs = f.getGlyphSet(); cmap = f.getBestCmap()
def bounds(ch):
    bp = BoundsPen(gs); gs[cmap[ord(ch)]].draw(bp); return bp.bounds
def place(pen, ch, box):
    """draw glyph of ch scaled so its ink box fills box=(x0,y0,x1,y1)"""
    b = bounds(ch); sx = (box[2]-box[0])/(b[2]-b[0]); sy = (box[3]-box[1])/(b[3]-b[1])
    t = Transform().translate(box[0], box[1]).scale(sx, sy).translate(-b[0], -b[1])
    gs[cmap[ord(ch)]].draw(TransformPen(pen, t))
glyphs = {}
p = T2CharStringPen(1000, None); place(p, '敖', (60, 330, 940, 850)); place(p, '力', (200, -90, 800, 300)); glyphs['u20895'] = p.getCharString()
p = T2CharStringPen(1000, None); place(p, '亻', (50, -90, 300, 850)); place(p, '因', (340, -70, 950, 830)); glyphs['u2A736'] = p.getCharString()
p = T2CharStringPen(1000, None); glyphs['.notdef'] = p.getCharString()
fb = FontBuilder(1000, isTTF=False)
order = ['.notdef', 'u20895', 'u2A736']; fb.setupGlyphOrder(order)
fb.setupCharacterMap({0x20895: 'u20895', 0x2A736: 'u2A736'})
fb.setupCFF('LATaigi', {'FullName': 'LATaigi'}, glyphs, {})
fb.setupHorizontalMetrics({g: (1000, 0) for g in order})
fb.setupHorizontalHeader(ascent=880, descent=-120)
fb.setupNameTable({'familyName': 'LATaigi', 'styleName': 'Regular', 'licenseDescription': 'Glyphs composed from Noto Sans CJK TC components. SIL Open Font License 1.1.', 'licenseInfoURL': 'https://openfontlicense.org'})
fb.setupOS2(sTypoAscender=880, sTypoDescender=-120, usWinAscent=880, usWinDescent=120)
fb.setupPost()
fb.font.flavor = 'woff'; fb.save('LATaigi.woff')
open('LATaigi.b64', 'w').write(base64.b64encode(open('LATaigi.woff', 'rb').read()).decode())
print('woff bytes', len(open('LATaigi.woff', 'rb').read()))
