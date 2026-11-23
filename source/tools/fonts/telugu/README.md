# Noto Sans Telugu (bundled for Telugu text)

Why: the Telugu → English course marks z, v, th in its Telugu-script pronunciation aids with the Telugu nukta U+0C3C
(Unicode 14, 2021). Stock Android fonts before 2025 do not draw it, so the app ships its own Telugu font.

Source: https://github.com/notofonts/notofonts.github.io, `fonts/NotoSansTelugu/unhinted/ttf/NotoSansTelugu-{Regular,Bold}.ttf`,
version 2.005 (fetched 2026-11-23). Licence: SIL Open Font License 1.1 (OFL.txt). The files are subsets, which the OFL allows;
the family name is unchanged ("Noto Sans Telugu" has no Reserved Font Name).

Rebuild:
    pyftsubset NotoSansTelugu-Regular.ttf --unicodes="U+0C00-0C7F,U+200C,U+200D,U+25CC,U+0964,U+0965,U+0020,U+00A0" \
      --layout-features='*' --flavor=woff --output-file=NotoSansTelugu-Regular.woff      (same for Bold)

Served as files (`korean-site/fonts/`, copied to the repository root `fonts/` by ship.sh); CSS in src/app.html
(`@font-face 'LATelugu'`, unicode-range U+0C00-0C7F, so it downloads only when Telugu text is on screen; about 45 KB per weight).
The single-file build (korean-flashcards.html) has no font file beside it and falls back to the device font.
Check on a real phone before changing anything: వ఼ెరి, జ఼ూ, థ఼్రీ, ద఼ిస్.
