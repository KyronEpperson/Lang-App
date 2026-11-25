#!/usr/bin/env python3
# FND-1, English for X: the alphabet lesson of every English course gets flip tiles for the 26 letters, right under the table of letter names.
# A tile's reading is the reading of the letter's card (the letter name in the course's own respelling). Edits tools/content/<lang>/lessons.js; regenerate each pack afterwards.
import io, os, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
T = '\n{{tiles:A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}}'
done = []
for t in sorted(os.listdir(os.path.join(ROOT, 'tools', 'content'))):
    p = os.path.join(ROOT, 'tools', 'content', t, 'lessons.js')
    if not os.path.exists(p): continue
    s = io.open(p, encoding='utf8').read()
    i = s.find('id:"alphabet"')
    assert i >= 0, t + ': no alphabet lesson'
    k = s.find('id:"', i + 5)
    j = s.find('</table></div>', i)
    assert 0 < j < (k if k > 0 else len(s)), t + ': no table in the alphabet lesson'
    assert '{{tiles:' not in s[i:(k if k > 0 else len(s))], t + ': already applied'
    j += len('</table></div>')
    io.open(p, 'w', encoding='utf8').write(s[:j] + T + s[j:])
    done.append(t)
print('tiles in the alphabet lesson of', len(done), 'courses:', ' '.join(done))
# the content validator knows {{ex:}} only; let it accept {{tiles:}} as well
p = os.path.join(ROOT, 'tools', 'content', 'validate.js'); s = io.open(p, encoding='utf8').read()
a = "  ok(opens === toks.length && closes === toks.length, 'lesson ' + l.id + ' malformed {{ }} tokens');"
b = "  const tiles = (body.match(/\\{\\{tiles:[^{}]*\\}\\}/g) || []).length;\n  ok(opens === toks.length + tiles && closes === toks.length + tiles, 'lesson ' + l.id + ' malformed {{ }} tokens');"
assert s.count(a) == 1; io.open(p, 'w', encoding='utf8').write(s.replace(a, b))
# the release test: the 26 English courses are done (light: tiles, cards, order and the flip are checked; the lesson is already driven to its end by tools/content/e2e_en.js)
p = os.path.join(ROOT, 'tools', 'tests', 'foundations.js'); s = io.open(p, encoding='utf8').read()
import re
m = re.search(r"const PENDING='([^']*)'", s); pend = [c for c in m.group(1).split(' ') if c not in [t + '-en' for t in done]]
s = s.replace(m.group(0), "const PENDING='" + ' '.join(pend) + "'")
for a, b in [
 ("let fail=0,pass=0;", "/* English for X: lesson 1 `alphabet`, the 26 letters on cards (the letter names) and on tiles */\n'" + ' '.join(done) + "'.split(' ').forEach(t=>{ FOUND[t+'-en']={lessons:['alphabet'],letters:[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],tilesOnly:[],words:[],light:true}; });\nlet fail=0,pass=0;"),
 ("Object.keys(FOUND).forEach(cid=>ok(withSec.includes(cid),", "Object.keys(FOUND).filter(cid=>!FOUND[cid].light).forEach(cid=>ok(withSec.includes(cid),"),
 ("    /* D */\n    for(const id of F.lessons){", "    /* D */\n    for(const id of F.light?[]:F.lessons){"),
]:
    assert s.count(a) == 1, a[:50]; s = s.replace(a, b)
io.open(p, 'w', encoding='utf8').write(s)
