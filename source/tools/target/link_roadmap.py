"""usage: python3 tools/target/link_roadmap.py <t>  — marks the roadmap items of target <t> in packs/roadmaps.js as covered by the live lessons
of the en-<t> course (profile.json lessons[].roadmap), so the app stops listing them as planned. Lessons the profile added have no roadmap item."""
import json, re, sys
t = sys.argv[1]; R = '/home/claude/packs/roadmaps.js'
P = json.load(open('/home/claude/tools/target/%s/profile.json' % t, encoding='utf8'))
link = {l['roadmap']: l['id'] for l in P['lessons'] if l.get('roadmap')}
s = open(R, encoding='utf8').read(); mm = re.search(r'\n  (?:/\*PLAN:\w+\*/ )?%s: \{' % re.escape(t), s); i = mm.start(); m = re.search(r'\n  (?:/\*PLAN:\w+\*/ )?[a-z]{2,3}: \{', s[i + 5:]); j = i + 5 + m.start() if m else len(s); blk = s[i:j]; n = [0]; miss = []
def rep(mo):
    rid = mo.group(1)
    if rid in link: n[0] += 1; return '["%s", %s, %s, "%s"]' % (rid, mo.group(2), mo.group(3), link[rid])
    miss.append(rid); return mo.group(0)
blk2 = re.sub(r'\["(%s-[a-z0-9-]+)", ("(?:[^"\\]|\\.)*"), ("(?:[^"\\]|\\.)*")(?:, "[a-z0-9-]+")?\]' % t, rep, blk)
open(R, 'w', encoding='utf8').write(s[:i] + blk2 + s[j:])
print('%s roadmap: %d items linked, not covered: %s' % (t, n[0], miss or 'none'))
