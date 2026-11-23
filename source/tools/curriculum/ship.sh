#!/bin/bash
# usage: tools/curriculum/ship.sh "<version>" "<commit subject>" "<commit body>"
set -e; cd /home/claude
# Never overwrite work merged on GitHub (for example a Cursor pull request): stop if the remote has commits this clone lacks.
git -C lang-app fetch -q origin main && { git -C lang-app merge-base --is-ancestor origin/main HEAD || { echo 'REMOTE AHEAD: import the new commits from lang-app (git pull) into /home/claude before shipping'; exit 1; }; }
sed -i "s/const APP_VERSION='[^']*'/const APP_VERSION='$1 · $(date +%F)'/" src/app.html
./build.sh 2>&1 | grep verify; node harness.js 2>&1 | tail -1 | grep -q "✅ no errors · ✅ no overflow · ✅ [0-9]* guards pass" || { echo HARNESS FAIL; exit 1; }
node tools/site/lazy.js > /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/lazy.out 2>&1; grep -q "^FAIL\|CRASH" /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/lazy.out && { echo SITE TEST FAIL; grep "^FAIL\|CRASH" /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/lazy.out; exit 1; }; echo "site test: $(grep -c '^PASS' /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/lazy.out) pass" 
if [ -e packs/course-ar-en.js ]; then node tools/site/rtl.js ar > /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/rtl.out 2>&1 || { echo RTL FAIL; grep -v "^PASS" /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/rtl.out; exit 1; }; node tools/site/rtl_site.js > /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/rtlsite.out 2>&1 || { echo RTL SITE FAIL; grep -v "^PASS" /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/rtlsite.out; exit 1; }; echo "right-to-left: $(grep -c "^PASS" /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/rtl.out) + $(grep -c "^PASS" /tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/rtlsite.out) pass"; fi
node tools/tests/esko.js > /tmp/claude-0/esko.out 2>&1 || { echo 'ES-KO FIXTURE FAIL'; grep -v '^PASS' /tmp/claude-0/esko.out; exit 1; }; echo "es-ko fixture: $(grep -c '^PASS' /tmp/claude-0/esko.out) pass"
node tools/tests/voicetest.js > /tmp/claude-0/voice.out 2>&1 || { echo 'VOICE TEST FAIL'; grep -v '^PASS' /tmp/claude-0/voice.out | head -20; exit 1; }; echo "voice test: $(grep -c '^PASS' /tmp/claude-0/voice.out) pass"

cp korean-site/{index.html,sw.js,vercel.json,manifest.json,offline.html,README.md} korean-site/*.png lang-app/; mkdir -p lang-app/supabase; cp korean-site/supabase/*.md lang-app/supabase/; mkdir -p lang-app/packs; ( cd lang-app/packs; touch .current; for f in *.js; do [ -e "$f" ] || continue; [ -e "../../korean-site/packs/$f" ] || grep -qx "$f" .current || rm -f "$f"; done ); ls korean-site/packs > lang-app/packs/.current; cp korean-site/packs/*.js lang-app/packs/; cp korean-site/verify_build.py lang-app/; cp build.sh lang-app/source/ 2>/dev/null; cp src/app.html lang-app/source/src/; cp packs/*.js lang-app/source/packs/; rm -rf lang-app/source/docs; cp -r docs lang-app/source/docs; cp CURSOR.md lang-app/source/ 2>/dev/null; cp harness.js iterations.md lang-app/source/ 2>/dev/null; rm -rf lang-app/source/tools; cp -r tools lang-app/source/tools
cd lang-app && git add -A && git -c user.name="Kyron Epperson" -c user.email="epperson.kyron@gmail.com" commit -q -m "$2

$3

Co-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01DWtPfs4ETEWT7AdvPKaJj1" && git push origin HEAD:main 2>&1 | tail -1
