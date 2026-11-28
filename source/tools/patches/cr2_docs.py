#!/usr/bin/env python3
# Docs and release-script lines for the second course-report release (ST-1, SR-1, SD-1, OP-1, FL-1, HL-1). usage: python3 tools/patches/cr2_docs.py <version>
import os,sys,datetime
V=sys.argv[1]; R=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); D=datetime.date.today().isoformat()
def edit(p,fn):
    f=os.path.join(R,p); s=open(f,encoding='utf-8').read(); t=fn(s); open(f,'w',encoding='utf-8').write(t)
def ship(s):
    if 'tools/tests/stories.js' in s: return s
    a="node tools/tests/learnloop.js > /tmp/claude-0/learnloop.out"; assert s.count(a)==1
    add="for t in stories sounds about; do node tools/$t/apply.js --check || { echo \"PACK BLOCK OUT OF DATE ($t): after regenerating a pack run node tools/sections/apply.js, then node tools/$t/apply.js\"; exit 1; }; done\nfor d in tools/stories/*/; do c=$(basename $d); node tools/stories/check.js check $c tools/stories/$c/stories.js > /tmp/claude-0/stories-$c.out 2>&1 || { echo \"STORY CHECK FAIL $c\"; grep -v '^PASS' /tmp/claude-0/stories-$c.out | head -20; exit 1; }; done\nfor t in stories sayrecord soundtrain pathspeed labels; do node tools/tests/$t.js > /tmp/claude-0/$t.out 2>&1 || { echo \"TEST FAIL $t\"; grep -v '^PASS' /tmp/claude-0/$t.out | head -20; exit 1; }; echo \"$t: $(grep -c '^PASS' /tmp/claude-0/$t.out) checks pass\"; done\n"
    return s.replace(a,add+a)
edit('tools/curriculum/ship.sh',ship)
H=f"""{V} ({D}): **course report solutions 6, 8, 9, 10, 11 and 14 on Spanish for English speakers** (owner: "yes lets implement these"; thread "Implement course report fixes"; entry CR-2 in `iterations.md`). All en-es only; every other course is untouched.
- **6 Graded stories (ST-1):** 25 stories of 40 to 150 words, one after each lesson from the second, at least 95% words already met. Listen, read, three questions. `docs/briefs/graded-stories.md`.
- **8 Say it, record it, compare (SR-1):** a `🎙 Say it` button on new cards, quiz answers and story lines. The recording stays in memory on the device. **The site header now allows the microphone for this site (`microphone=(self)` in `build.sh`).** `docs/briefs/say-record-compare.md`.
- **9 Sound training (SD-1):** ten "which did you hear?" questions on 29 word pairs (r/rr, stress, n/ñ, vowels, p/b t/d), on the sounds lesson page. `docs/briefs/sound-training.md`.
- **10 One path (OP-1):** session new cards come from the decks of finished lessons first. **11 Speed round (FL-1):** ten known sentences, three laps against a shorter clock, a row after the first checkpoint. `docs/briefs/speed-round.md`.
- **14 Honest labels (HL-1):** a closed "What this course covers" panel above the lesson list and a goal line on each lesson page. `docs/briefs/honest-labels.md`.
- **Pack blocks:** stories, sounds and labels live in `tools/stories|sounds|about/en-es/` and are written into the pack before the SECS block. **After regenerating a pack: `node tools/sections/apply.js`, then `node tools/stories/apply.js`, `node tools/sounds/apply.js`, `node tools/about/apply.js`.** `ship.sh` fails when one is out of date.
- **Code:** `st*`, `sr*`, `sd*`, `op*`, `fl*`, `ab*` functions in `src/app.html`; patches in `tools/patches/` (`st_stories.py`, `sr_record.py`, `sd_sounds.py`, `op_onepath.py`, `fl_speed.py`, `ab_labels.py`, in that order). Saved state: `S.story`, `S.snd`, `S.flu`.
- **Checks (new, in `ship.sh`):** `tools/tests/stories.js` 14, `sayrecord.js` 15 (fake microphone), `soundtrain.js` 11, `pathspeed.js` 15, `labels.js` 6; the story word checker; harness guards.
- **Agents:** three Opus writers for the stories. Everything else by the dispatcher.
- **Not done / open:** roll-out to other courses waits for the owner. Solution 7 (recording audio) needs the owner's terminal; 12 (speech sent to a recognition service) and 13 (conversation partner: server key, running cost) need the owner's yes. Story lines and sound pairs have no recordings of their own: the device voice says them. Say it has no self-mark step. Not tested: real phones, real microphones and voices, learners.
"""
def hand(s):
    if 'entry CR-2 in' in s: return s
    a=V+' (2026-11-28): **the learn-loop pilot'; assert s.count(a)==1; s=s.replace(a,H+'\n'+a)
    return s
edit('docs/HANDOFF.md',hand)
I=f"""## CR-2 ({V}, {D}): course report solutions 6, 8, 9, 10, 11, 14 on en-es

Ask (owner): "yes lets implement these" (the ranked solutions of the course report, after the pilot of 1 to 5).
Rewritten prompt: build each remaining solution that needs no key, no money and no speech leaving the device, on en-es, each behind its own switch or its own pack data so another course gets it by adding data; keep every one out of lesson completion and out of review scheduling; give each a test and a brief; leave 7, 12 and 13 to the owner.
Built: ST-1 stories, SR-1 say-record-compare, SD-1 sound training, OP-1 one path, FL-1 speed round, HL-1 honest labels. Briefs in `docs/briefs/` (graded-stories, say-record-compare, sound-training, speed-round, honest-labels). HANDOFF {V}.
One release instead of six: each piece has its own test, and one full run costs about 35 minutes of shared cloud time.
Agents: three Opus writers for the 25 stories (about 85k tokens each), gated by `tools/stories/check.js`, read and corrected by the dispatcher. The sound pairs (29 textbook pairs) and the labels were written by the dispatcher.

"""
def it(s):
    if '## CR-2 (' in s: return s
    a='## LP-1 ('; assert s.count(a)==1; return s.replace(a,I+a)
edit('iterations.md',it)
print('cr2_docs: ok')
