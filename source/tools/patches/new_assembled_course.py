#!/usr/bin/env python3
# Register a course assembled from a target half whose foundation is the same as an existing course of that target.
# usage: python3 tools/patches/new_assembled_course.py <new course id> <model course id>     e.g. es-zh vi-zh
# Adds the course to FOUND (tools/tests/foundations.js, a copy of the model's entry), to the reading lists of tools/tests/lessonread.js and
# tools/lessonread/fill.js when the model is in them, and to LS_ALIGN (src/app.html). Safe to run again.
import io, os, re, subprocess, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
new, model = sys.argv[1], sys.argv[2]
assert re.fullmatch(r"[a-z]{2,4}-[a-z]{2,4}", new) and re.fullmatch(r"[a-z]{2,4}-[a-z]{2,4}", model)
def rw(rel, fn):
    p = os.path.join(ROOT, rel); s = io.open(p, encoding='utf8').read(); t = fn(s)
    if t != s: io.open(p, 'w', encoding='utf8').write(t)
    print(rel, 'changed' if t != s else 'unchanged')
def found(s):
    if "'%s':{" % new in s: return s
    m = re.search(r"^ '%s':\{.*\},\n" % re.escape(model), s, re.M); assert m, 'model entry not found in FOUND'
    line = m.group(0).replace("'%s':{" % model, "'%s':{" % new, 1)
    return s[:m.end()] + " /* assembled from the same target half as %s: same foundation */\n" % model + line + s[m.end():]
def lst(s):
    if "'%s'" % new in s: return s
    assert s.count("'%s'" % model) >= 1
    return s.replace("'%s'" % model, "'%s','%s'" % (model, new), 1)
rw('tools/tests/foundations.js', found)
for rel in ('tools/tests/lessonread.js', 'tools/lessonread/fill.js'):
    if "'%s'" % model in io.open(os.path.join(ROOT, rel), encoding='utf8').read(): rw(rel, lst)
subprocess.check_call([sys.executable, os.path.join(ROOT, 'tools', 'patches', 'lesson_align_on.py'), new])
