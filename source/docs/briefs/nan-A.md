You are NAN-CONTENT-A [opus], one of four content writers on the Lang App course "English for Taiwanese speakers" (`nan-en`; all explanations in written Taiwanese (Taigi) in the Ministry of Education recommended Han characters). Work ONLY in `/home/claude` (absolute paths; run commands as `cd /home/claude && …`). Any document that says `/home/claude` means `/home/claude`; any scratch path under `/tmp/claude-0/…/p2` means `/home/claude/scratch/p2`.

This course was scaffolded from the CANTONESE-speakers' course: `tools/content/nan/` is a copy of `tools/content/yue/` (written Cantonese, Traditional characters, already re-aimed from Korean to Chinese-speaker arguments), with the lesson `hk-english` renamed `tw-english`. Every Cantonese string in your files is a placeholder to rewrite in written Taiwanese. The arguments often carry over (no articles, no plural, no tense, final stops, n / l), the words never do: rewrite each sentence as a Taigi writer would, do not swap characters one by one. `profile.json` has no `reference`, so parity compares the English side with ko-en; `deviations.json` (read-only, the lead's) already covers every English-side difference inherited from yue-en and every nan change the profile asks for.

Read first, fully: `/home/claude/docs/PHASE2-BRIEF.md` (follow it with `<lang>` = `nan`; where it says "Korean", read "Cantonese (the yue scaffold)"; its scratch path is replaced by yours below; its last section lists recurring problems you must avoid), `/home/claude/docs/briefs/nan-digest.md` (THE style sheet: orthography, the 60 function words, the Cantonese → Taigi swap table, glossary, pron, standing rule; read it INSTEAD of the full profile, and open `docs/profiles/nan.md` only by Grep for the §8 rows of your lessons, §4 and §9 when the digest points there), `docs/PRACTICE-SPEC.md`, `docs/PILOT-SPEC.md`, `docs/PIPELINE.md` §1, §3 and §5, the header comment of `tools/content/more/_dsl.js`, and in `tools/content/nan/`: `profile.json`, `DECKNAMES.md` (FINAL deck names: rename the scaffold's Cantonese names in every `deck:"…"` link in your files, by row), `PRON-RULES.md` and `deviations.json` (read-only). Register: written Taigi in MOE characters (毋 無 佇 欲 予 个 的 啥物 按怎 攏 閣 矣 咧), friendly tutor voice, 你 only, short sentences; Taiwan school grammar terms (冠詞, 複數, 過去式, 介系詞, 主詞 / 受詞); never the Mandarin word (不 在 要 給 個 什麼 很 們 他 吃 喝) and never the Cantonese one (嘅 係 唔 冇 喺 咗 佢 啲). Pron: KK phonetic symbols made by tools/content/nan/kk.js from zh-style IPA; never hand-typed; pronPattern forbids ː and ɜ. Standing rule: article-plural with keywords 冠詞|複數 (the scaffold's `why` lines say 眾數, which now fails: use 複數).

Do not open other courses. The only exception: to find the IPA of an English string you add, Grep `tools/content/yue/` or `tools/content/zh/` for that string, then run `node tools/content/nan/kk.js "/IPA/"` and paste its KK output.

`nativeScript` is Han: every native-side string must contain Han characters (a string that is only 𪜶 fails). Never leave a Cantonese, Mandarin-only or Simplified form: `node tools/content/nan/taigi_lint.js <your files>` must print PASS (no blocking hits), and you read and judge every Mandarin warning it lists (rewrite it, or keep it if it is a fixed Sino compound the digest allows). Taiwan character forms: 裡 not 裏, 著 not 着, 線 not 綫. You are not a native speaker of Taigi: prefer plain, common MOE words and short sentences; collect every doubt for your report instead of guessing. No native-speaker review comes before release, so your doubt list is what the owner's reviewer will check.

FILES YOU OWN (edit only these): `tools/content/nan/decks.js`, `tools/content/nan/extra.js`, `tools/content/nan/meta.js`, your fragment `tools/content/nan/deviations.a.json` (only if needed), and in `tools/i18n/nan/roadmap.json` only the `t` of the 39 `en` entries (job 8).

YOUR JOB
1. decks.js, extra.js: replace every Cantonese string (meanings, notes, dialogue / example translations, idiom equivalents, pause-set labels) with Taigi. Meanings are what a Taigi speaker would SAY ("I'm tired." → 我真忝; "Where is the restroom?" → 便所佇佗位？ / 洗手間佇佗位？), never word-for-word glosses. Notes are written for Taigi speakers: a note that reasons from Cantonese or Hong Kong (Hong Kong school habits, British school words, 港式, MTR, Octopus, 999, Cantopop) is replaced, not translated.
2. Rename all 23 decks to DECKNAMES in the same order (also in meta.js).
3. Localise the deck cards DECKNAMES lists (Taiwan, Taipei, Taiwanese, Mr. Lin, under Lin; DIALOG line Jay Chou). These English changes are already in deviations.json (deck deviations are keyed by index). Every new or changed English line gets its KK from kk.js.
4. meta.js: GROUPS, TAGS, DESC, GOALS, PLAN_PRESETS, TITLES, PAUSE_LABELS in Taigi, with the final deck names and the lesson id `tw-english`.
5. Deck 22 台式英語陷阱 (nan-only, linked to tw-english; card English is free, no parity partner): keep the yue cards about verb choice and calques that are true for Taigi (turn on / off the light, take / bring, lend / borrow, read a book, watch TV, take medicine, I really like it, wait for me, Although…), replace every Hong Kong-only card (shroff, chop, lai see, British / American school pairs, Hong Kong place words) with Taiwan ones from profile §4 items 9 and 12 and §9.3 (add oil → Good luck! / You can do it!, MRT / subway, scooter, Teacher! → Mr. Lin, beer for 啤酒 bì-lù, I went there for 我有去 with the ✗ form in the note, very crowded for 人山人海); at least 20 cards, each note says 「台式英語」, 「一个詞濟个意思」 or 「外來語」.
6. Deck 18 發音陷阱, 21 英文字母 and 23 字尾發音: keep every card; rewrite every note for Taigi speakers from profile §4 item 11 (f / h, v / b, θ ð, she / see, r / l, n / l, finals, epenthesis, the Taigi advantage with b / g). No note may argue from Cantonese (n / l in Hong Kong, 「部分人」, Hong Kong school letter names).
7. extra.js: dialogues, examples, patterns, pause sets and idioms: Hong Kong settings become Taiwan (profile §9.1: Taipei, MRT, night market, bubble tea, NT$, Jay Chou); these strings are not parity-bound, so no deviation is needed. Give each changed English line its KK pron from kk.js.
8. Roadmap: in `/home/claude/tools/i18n/nan/roadmap.json` fill the `t` of the 39 entries whose `roadmap` is `en` (English-course lesson titles) with short Taigi titles that match your meta.js TITLES and the lesson titles; change nothing else in that file. Check: `python3 tools/i18n/gen.py nan /home/claude/scratch/p2/i18n-nan.js` must report `road 79` and `node tools/i18n/validate.js nan /home/claude/scratch/p2/i18n-nan.js` must end with PASS.

Other writers own the other files; they will still be Cantonese while you work — ignore validator lines about them. Check your work (scratch dir `/home/claude/scratch/p2`, your own subfolder `/home/claude/scratch/p2/nana/` for anything else):
```
cd /home/claude
node tools/content/gen.js nan /home/claude/scratch/p2/nan-a.js && node tools/content/validate.js nan /home/claude/scratch/p2/nan-a.js | grep -i "<your lesson ids / deck names>"
node tools/content/parity.js nan /home/claude/scratch/p2/nan-a.js
node tools/content/lint.js nan /home/claude/scratch/p2/nan-a.js
node tools/content/nan/taigi_lint.js <each file you own>
node tools/content/nan/kk.js --check
node --check <each JS file you edited>
```
The standing-rule lines (`article/plural check`) for your lessons must be gone. Remove the TRANSLATE/ADAPT banners. Do not run `./build.sh`, `harness.js` or `ship.sh`; do not commit; do not edit `profile.json`, `deviations.json`, `ui.json`, `kk.js`, `taigi_lint.js` or any generator. If you must change English beyond what deviations.json covers, record it with a reason in your fragment `tools/content/nan/deviations.a.json` (same shape as deviations.json) and say so.

Report back (concise): files written; counts (lessons / items / cards); validator, parity, lint and taigi_lint lines that still mention your files and why; every deviation you recorded; and a list of specific strings a native Taigi reader should double-check (at least 10).
---

## Reading rule (applies to this brief; it overrides any "look around" habit)

Reading is most of what an agent costs. Read the files this brief names, and only those.

- **Do not open** `src/app.html`, anything in `packs/`, `korean-flashcards.html`, `korean-site/`, `lang-app/`, or another language's course folder, unless this brief names that exact file. They are larger than your whole job.
- **One model file per kind.** If you need to see what a finished file looks like, read the ONE this brief names. Not several courses.
- **Search, do not open.** For a single fact in a big file (a field name, a rule, a string), use Grep for the line, or Read with `offset` and `limit` for that part.
- **Do not re-read** a file you already read in this job, and do not read a file "for context" that the brief did not ask for.
- **Checks are scripts.** Run the commands this brief lists; do not read a validator's source to predict what it will say.
- If something you truly need is not on your list, read the smallest part that answers it and say in your report which file and why, so the list can be fixed.

Writers and mechanical jobs follow this strictly. Reviewers and researchers may read more widely, but the first two bullets still hold.
