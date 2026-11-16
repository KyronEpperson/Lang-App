"""Lang App logo: a capital L built from letter tiles in many scripts, with tiles breaking away and scattering to the upper right
(the same idea as the intro, where letters and phrases disperse).
logo_svg(size, bg=None, pad=..., glyphs=True, ink=..., paper=..., accent=...) returns an SVG string.
glyphs=False draws plain tiles (favicon and the inline header mark, where letters would be unreadable)."""
GLYPHS = ['한', 'あ', 'A', '文', 'ñ', 'я', '語', 'é', 'ㅎ', 'カ', 'ü', 'B', '가', 'ç', 'ж', 'い', 'ö', '你', 'C', 'ê']
ACCENT_CELLS = {(0, 1), (1, 3), (3, 5), (0, 4)}
# scattered tiles: x, y (centre, 0-100), size, rotation, opacity, accent?
SCATTER = [(33.5, 15.5, 10.0, 14, 1.0, 0), (45, 27, 8.6, -16, .92, 1), (57, 52, 9.2, 10, .95, 0), (69, 56.5, 9.6, -8, 1.0, 0),
           (50, 40, 7.4, 24, .8, 0), (61, 35, 6.6, -22, .7, 1), (56, 18, 6.2, 30, .62, 0), (72, 42, 5.8, 12, .58, 0),
           (70, 25, 5.0, -28, .48, 0), (82, 33, 4.4, 20, .4, 1), (66, 10, 4.2, 18, .36, 0), (80, 16, 3.6, -12, .3, 0), (90, 24, 3.0, 8, .22, 0), (88, 9, 2.6, 0, .18, 1)]
FONT = "'Noto Sans CJK KR','Noto Sans KR','Noto Sans CJK JP','Noto Sans','DejaVu Sans',system-ui,sans-serif"
def logo_svg(size=512, bg=None, pad=0.0, radius=0.0, glyphs=True, ink='#1d2030', paper='#f3efe6', accent='#e0563f', attrs=''):
    P = 12.4; C = 11.0; ox, oy = 12.0, 12.8          # tile pitch, tile size, origin of the L (viewBox 0-100)
    cells = [(c, r) for r in range(6) for c in range(2)] + [(c, r) for r in (4, 5) for c in (2, 3, 4)]
    cells = [x for x in cells if x not in ((1, 0), (4, 4))]   # these two have already broken away (first scatter tiles)
    k = 1 - 2 * pad; tr = 'translate(%.2f %.2f) scale(%.4f)' % (pad * 100, pad * 100, k)
    out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="%s" height="%s" %s>' % (size, size, attrs)]
    if bg: out.append('<rect width="100" height="100" rx="%.2f" fill="%s"/>' % (radius * 100, bg))
    out.append('<g transform="%s">' % tr); gi = 0
    def tile(cx, cy, s, rot, op, acc, g):
        fill = accent if acc else paper; t = '<g transform="translate(%.2f %.2f) rotate(%d)"%s>' % (cx, cy, rot, '' if op >= 1 else ' opacity="%.2f"' % op)
        t += '<rect x="%.2f" y="%.2f" width="%.2f" height="%.2f" rx="%.2f" fill="%s"/>' % (-s / 2, -s / 2, s, s, s * 0.2, fill)
        if glyphs and s >= 5.5:
            t += '<text x="0" y="%.2f" text-anchor="middle" font-family="%s" font-weight="700" font-size="%.2f" fill="%s">%s</text>' % (s * 0.27, FONT, s * 0.72, '#fff' if acc else ink, g)
        return t + '</g>'
    for (c, r) in cells:
        out.append(tile(ox + c * P + C / 2, oy + r * P + C / 2, C, 0, 1, (c, r) in ACCENT_CELLS, GLYPHS[gi % len(GLYPHS)])); gi += 1
    for (x, y, s, rot, op, acc) in SCATTER:
        out.append(tile(x, y, s, rot, op, acc, GLYPHS[gi % len(GLYPHS)])); gi += 1
    out.append('</g></svg>')
    return ''.join(out)
if __name__ == '__main__':
    import sys
    open(sys.argv[1] if len(sys.argv) > 1 else 'logo.svg', 'w').write(logo_svg(512, bg='#1d2030', pad=0.04))
