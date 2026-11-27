#!/usr/bin/env python3
# harness.js guard for tools/patches/han_native_readings.py: lesson readings stay gated to marked text when the learner writes Han characters too.
import io, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'harness.js'); s = io.open(p, encoding='utf8').read()
if 'g.rdHanNative=' in s:
    print('han_native_readings_harness: already applied'); raise SystemExit(0)
a = "    g.memRecallWired="
assert s.count(a) == 1, 'anchor'
s = s.replace(a, "    g.rdHanNative=/function rdMarked\\(\\)\\{ const c=COURSE; return !!\\(c&&RD_HAN\\[c\\.target\\]&&RD_HANNAT\\[c\\.native\\]&&c\\.native!==c\\.target\\); \\}/.test(h)&&/RD_CLS\\[c\\.target\\]&&\\(!RD_CLS\\[c\\.native\\]\\|\\|rdMarked\\(\\)\\)/.test(h)&&/if\\(MK&&!inMk&&!\\(t\\.charAt\\(h\\[0\\]-1\\)==='\\\\u300c'/.test(h); /* a learner who writes Han characters (zh, yue, nan, wuu, ja) on a Han-script target gets readings only under marked target text (b, .k, 「 」), never under their own text */\n" + a)
io.open(p, 'w', encoding='utf8').write(s)
print('han_native_readings_harness: applied')
