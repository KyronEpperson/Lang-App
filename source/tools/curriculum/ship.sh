#!/bin/bash
# usage: tools/curriculum/ship.sh "<version>" "<commit subject>" "<commit body>"
set -e; cd /home/claude
sed -i "s/const APP_VERSION='[^']*'/const APP_VERSION='$1 · $(date +%F)'/" src/app.html
./build.sh 2>&1 | grep verify; node harness.js 2>&1 | tail -1 | grep -q "✅ no errors · ✅ no overflow · ✅ [0-9]* guards pass" || { echo HARNESS FAIL; exit 1; }
cp korean-site/{index.html,sw.js,vercel.json} lang-app/; cp src/app.html lang-app/source/src/; cp packs/*.js lang-app/source/packs/; cp docs/*.md lang-app/source/docs/; cp harness.js iterations.md lang-app/source/ 2>/dev/null; rm -rf lang-app/source/tools; cp -r tools lang-app/source/tools
cd lang-app && git add -A && git -c user.name="Kyron Epperson" -c user.email="epperson.kyron@gmail.com" commit -q -m "$2

$3

Co-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01DWtPfs4ETEWT7AdvPKaJj1" && git push origin HEAD:main 2>&1 | tail -1
