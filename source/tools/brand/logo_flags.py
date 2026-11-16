"""Lang App logo: a capital L built from flag tiles. logo_svg(size, bg=None, pad=...) returns an SVG string.
Tiles (stem top to bottom, then the foot): Korea, Japan, Spain, United States | Brazil, India.
Flags are simplified to read at icon sizes (no fine emblems)."""
import math
def star(cx, cy, r, fill):
    pts = []
    for i in range(10):
        a = -math.pi / 2 + i * math.pi / 5; rr = r if i % 2 == 0 else r * 0.4
        pts.append('%.2f,%.2f' % (cx + rr * math.cos(a), cy + rr * math.sin(a)))
    return '<polygon points="%s" fill="%s"/>' % (' '.join(pts), fill)
def kr():
    return ('<rect width="100" height="100" fill="#fff"/>'
            '<g transform="rotate(-33 50 50)"><path d="M26 50a24 24 0 0 1 48 0z" fill="#cd2e3a"/><path d="M26 50a24 24 0 0 0 48 0z" fill="#0047a0"/>'
            '<circle cx="38" cy="50" r="12" fill="#cd2e3a"/><circle cx="62" cy="50" r="12" fill="#0047a0"/></g>'
            + ''.join('<g transform="rotate(%d 50 50)"><rect x="41" y="5" width="18" height="3.4" fill="#111"/><rect x="41" y="10.5" width="18" height="3.4" fill="#111"/></g>' % a for a in (45, 135, 225, 315)))
def jp(): return '<rect width="100" height="100" fill="#fff"/><circle cx="50" cy="50" r="27" fill="#bc002d"/>'
def es(): return '<rect width="100" height="100" fill="#c60b1e"/><rect y="25" width="100" height="50" fill="#ffc400"/>'
def fr(): return '<rect width="100" height="100" fill="#fff"/><rect width="33.4" height="100" fill="#0055a4"/><rect x="66.6" width="33.4" height="100" fill="#ef4135"/>'
def us():
    s = '<rect width="100" height="100" fill="#fff"/>' + ''.join('<rect y="%.2f" width="100" height="%.2f" fill="#b22234"/>' % (i * 100 / 7.0, 100 / 14.0 + 0.2) for i in range(7))
    s += '<rect width="50" height="%.2f" fill="#3c3b6e"/>' % (100 * 4 / 7.0)
    for r in range(3):
        for c in range(3): s += star(10 + c * 15, 10.5 + r * 17.5, 5.2, '#fff')
    return s
def br(): return '<rect width="100" height="100" fill="#009c3b"/><polygon points="50,14 90,50 50,86 10,50" fill="#ffdf00"/><circle cx="50" cy="50" r="19" fill="#002776"/>'
def india(): return ('<rect width="100" height="100" fill="#fff"/><rect width="100" height="33.4" fill="#ff9933"/><rect y="66.6" width="100" height="33.4" fill="#138808"/>'
                     '<circle cx="50" cy="50" r="11" fill="none" stroke="#000080" stroke-width="3"/><circle cx="50" cy="50" r="2.4" fill="#000080"/>')
STEM = [kr, jp, es, us]; FOOT = [br, india]
def logo_svg(size=512, bg=None, pad=0.12, radius=0.0, edge='rgba(0,0,0,.18)', attrs=''):
    """4 rows x 3 columns of square tiles; pad = margin as a fraction of the size; bg = background fill or None."""
    rows, cols, gap = 4, 3, 0.09            # gap as a fraction of a tile
    box = 1 - 2 * pad; t = box / (rows + (rows - 1) * gap); step = t * (1 + gap)
    w = cols * t + (cols - 1) * t * gap; ox = (1 - w) / 2; oy = pad
    cells = [(0, r, STEM[r]) for r in range(4)] + [(1 + i, 3, FOOT[i]) for i in range(2)]
    out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="%s" height="%s" %s>' % (size, size, attrs)]
    if bg: out.append('<rect width="100" height="100" rx="%.2f" fill="%s"/>' % (radius * 100, bg))
    for i, (c, r, f) in enumerate(cells):
        x = (ox + c * step) * 100; y = (oy + r * step) * 100; s = t; cid = 'lt%d' % i
        out.append('<svg x="%.3f" y="%.3f" width="%.3f" height="%.3f" viewBox="0 0 100 100"><clipPath id="%s"><rect width="100" height="100" rx="16"/></clipPath><g clip-path="url(#%s)">%s</g><rect x="1.5" y="1.5" width="97" height="97" rx="15" fill="none" stroke="%s" stroke-width="3"/></svg>' % (x, y, s * 100, s * 100, cid, cid, f(), edge))
    out.append('</svg>')
    return ''.join(out)
if __name__ == '__main__':
    import sys
    open(sys.argv[1] if len(sys.argv) > 1 else 'logo.svg', 'w').write(logo_svg(512, bg='#1d2030'))
