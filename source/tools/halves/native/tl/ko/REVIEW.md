# tl-ko native half: cold review (2026-11-23)

## What I checked

- **Every jsonl row**, joined by id with its Korean in `target/ko/`:
  - 641 cards, 149 dialogues, 74 examples, 47 patterns, 294 sentences, 99 checks, 462 practice items;
  - 43 deck labels and descriptions, 5 groups, 140 labels, 33 lesson titles and blurbs.
- **Practice and check prompts** against their accepted answers (`a`) and rejected forms (`x`).
- **All 33 lesson bodies**, read with their `{{ex:…}}` rows expanded (Korean plus the Tagalog gloss).
- I opened the English half only where a prompt's cue or a claim was in doubt.
- **Mechanical checks after editing:**
  - the Hangul set of every edited field equals the pre-review value (the script asserts this);
  - same Korean, same gloss, across cards, sentences, examples and pause labels;
  - no duplicate meanings within a deck;
  - leftover English (fields identical to the English half);
  - lesson cross-references.

Every fix is applied by id from one idempotent script, `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/tlko-review/fix.py`. It always starts from the pre-review copy (`…/tlko-review/base/`). Both are session scratch files. I touched only the merged files and `lessons/*.html` here. I did not touch `work/`, `target/`, `ui.json` or `course.json`, and I did not touch the deck labels, which are progress keys.

**Validator:** `node tools/halves/validate.js tl ko` gives **errors: 0**, with 4 warnings.
- 3 warnings are the existing waived extra Hangul in `hangul`, `polite` and `meet`.
- 1 warning is that `trainer.json` is absent.

`assemble.js tl ko` succeeds and its output passes `node --check`.

## Decisions (choice → rule applied everywhere)

| Topic | Rule |
|---|---|
| **`po` / `kayo` in glosses** (owner-approved change) | **The test:** the line or its dialogue shows that the **listener** is an elder, teacher, customer or boss (or the meeting is a formal first meeting), and the Korean honours that listener. Then the gloss uses natural *po* plus *kayo / ninyo / inyo* (never *po* with *ka / mo*). It applies to:<br>• lines from staff to a customer (뭐 드릴까요?, 드시고 가세요?, 봉투 필요하세요?, pharmacist 식후에 드세요, 몇 명이세요?);<br>• lines to a teacher or boss (선생님…, 과장님…, 퇴근하겠습니다, the 수고하셨습니다 family, work email);<br>• special honorific words (드세요, 주무세요, 계세요?, 성함, 연세, 뵙겠습니다);<br>• the honorific-lesson examples, which the lesson defines as speech to elders;<br>• the «napakagalang» request -아/어 주시겠어요 / 주실래요.<br>The awkward constructions are gone: «kumain ka, pakiusap (honorific)», «(sa nakatatanda)» used as a tag. |
| `po`: exceptions | **No *po*** in these cases:<br>• ordinary 요-form between equals;<br>• context-free set phrases (안녕하세요, 안녕히 가세요/계세요, 조심히 가세요, 좋은 하루 보내세요, 먼저 가세요, 수고하세요; 감사합니다 / 죄송합니다 on their own keep the tag *(formal)*);<br>• -(으)세요 / -시- to a stranger whose status the line does not show: directions (똑바로 가세요, g005, g018), «magdala ng payong» (g087), 뭐가 필요하세요? (g012), 나이가 어떻게 되세요? (g022), the context-free -시네요 compliments (g009, pause compliment.06/16/21), 도와주셔서 감사합니다 (g002), 늦어서 죄송합니다 (g003);<br>• a superior speaking down with -세요 (boss or teacher to a junior: «Oo, pasok ka»);<br>• humble 드릴게요 between peers (g066);<br>• -시- that honours a **third person** (할머니 계세요?, 사장님 계세요?): *po* only honours the listener, so these carry the tag *(honorific)* (s0279, honorific.03 and honorific.10 now all have it);<br>• all instructions and explanations to the learner. |
| `po`: register tags | The tags *(formal) / (polite) / (casual) / (honorific)* stay where the English has them. Practice prompts whose rejected form differs only in level still carry the cue. |
| `po`: lesson text | The `polite` lesson gains a short paragraph: *po* in the translations marks -시- or formal respect to a superior, 요 between equals carries no *po*, so 요 ≠ *po*. The `honorific` lesson gains one sentence on *po* for the listener vs *(honorific)* for a third person. The three 요 ≠ *po* differences already in the text stay accurate. |
| school (학교) | **paaralan** (the profile's choice, §4.4). Replaces «eskuwelahan» (23 places) and «school» (2). |
| 화장실 | **CR**. The one «banyo» (c0101) is now CR; c0276 keeps «CR / palikuran» as the dictionary meaning. |
| 좋아해요 | **mahilig sa …** for things and activities, and **Gusto kita** for a person (좋아해). 좋아요 → «gusto ko / maganda». *Gusto* + verb is kept for -고 싶어요. This keeps the want-like contrast clean. |
| 주세요 / -아 주세요 | «pakiusap» is dropped from every request gloss. The forms used:<br>• **«Pahingi ng …»** for free or service items (water, menu, receipt, bag, more);<br>• **«… nga»** for orders at a counter or restaurant («Dalawang kape nga»);<br>• **«Pabili ng …»** for shop or pharmacy purchases;<br>• **paki- + verb** for -아/어 주세요 («Pakihatid», «Pakibawasan ang tamis»);<br>• 계산해 주세요 = **«Pa-bill out»**.<br>«Pakiusap» survives only as the noun 'request' in prose and as the meaning of 부탁해요. |
| 미국 | **Amerika** (Taga-Amerika ako / Galing ako sa Amerika). The meet body says «Sa halip na Amerika». The c0077 note: «미국 = Amerika (USA)». |
| Clock times | Spanish **alas-** with a hyphen (alas-dos y medya, alas-nuwebe diyes). There were no unhyphenated forms. |
| Age | Glosses use **«N taong gulang»** (s0016, c0079, c0158, c0170, c0409). The deliberate *anyos* lines stay in the numbers, counters and meet trap material (s0180, numbers.04 and .12, counters.05, c0079 and c0409 notes, the bodies), because the profile teaches both forms there. |
| Tense cues on prompts | **(nakaraan) / (kasalukuyan) / (hinaharap)**, replacing the parenthetical (past) / (present) / (future). They appear on 7 prompts (`q` / `p`) and in past.12's hint, which reads «nakaraan». The `verbs`, `past` and `future` lessons now each say which cue means which tense.<br>**Exemption:** where a prompt or a lesson names the tense as a grammar term, it keeps the profile's English term: «가다 sa past =», «Past ng 보다», «(honorific na past)», and the lesson bodies' «가세요 (present) / 가셨어요 (past)». |
| 안녕히 가세요 / 계세요 | **«Ingat (sa taong aalis)» / «Paalam (sa taong maiiwan)»**. Cards add «lit. 'umalis / manatili nang mapayapa'». The ambiguous «ikaw ang maiiwan» is gone. |
| 수고 family | 수고하세요 → «Sige, laban lang sa trabaho (sa naiiwan…; lit. 'magpakahirap ka')».<br>수고하셨습니다 / 수고하셨어요 → «Salamat po sa sipag ninyo ngayong araw» to seniors; «salamat sa sipag mo» when the speaker is not junior (g108).<br>수고했어(요) → «Good job».<br>고생했어 → «Pinaghirapan mo iyon / Napagod ka siguro». |
| 잘 부탁드립니다 | First meeting: **«Kayo na po ang bahala sa akin»**, with a literal note (c0084, g055).<br>Work email (c0559): **«Salamat po in advance / Aasahan ko po kayo»**. |
| 잘 먹겠습니다 / 잘 먹었습니다 | **«Salamat sa pagkain (bago kumain)» / «Salamat sa pagkain, busog na ako (pagkatapos kumain)»**, with the literal meaning in sentences. |
| 넵, 확인했습니다 | **«Opo, noted»**, the Philippine office idiom. *opo* ≈ 네 is the profile's bridge. |
| 선생님 | **Teacher** as the address word. «titser» (3 places) is now «teacher». |
| cafe | **café** everywhere. |
| plans.html "Formal" column | Renamed **Honorific**: its lines (같이 가시겠어요?, 시간 있으세요?) are -시- forms, not -습니다. In meet.html, the column holds 만나서 반갑습니다 and 성함이 어떻게 되세요?, so it is renamed **Formal / honorific**. In polite.html (고맙습니다, 미안합니다) it stays **Formal**. |
| 좋은 하루 보내세요 | «Sana maganda ang araw mo» everywhere (s0242, noun-modifiers.14, pause expression.25), so it does not collide with «Magandang araw» for 안녕하세요. |

## Rows changed

256 jsonl rows and 12 lesson bodies. Each row is counted once, whatever the number of fields edited.

| File | Rows changed |
|---|---|
| cards.jsonl | 65 |
| dialog.jsonl | 31 |
| examples.jsonl | 7 |
| patterns.jsonl | 1 |
| sentences.jsonl | 44 |
| checks.jsonl | 10 |
| practice.jsonl | 83 |
| labels.jsonl | 15 |
| decks, groups, lessons.jsonl, course.json, ui.json | 0 |
| lessons/*.html | 12 files: counters, future, honorific, isseoyo, meet, nouns, office, past, plans, polite, requests, verbs |

**Accuracy fixes beyond the glossary:**
- c0193: 깜짝 놀랐어요 had become «ginulat mo ako»; it is now «nagulat talaga ako».
- label expression.15: 당연하죠 had become «Halata naman», which means 'obviously'; it is now «Natural lang iyon».
- label expression.19: 잘 모르겠어요 had become «Ewan ko», which is blunt; it is now «Hindi ako sigurado», matching s0262.
- g077 and c0457: 진짜 웃겨 had become «Ang kulit»; it is now «Grabe, nakakatawa».
- g119 and g147: 어때? had become «Kumusta ito?»; it is now «Okay ba ito?».
- Pause-set duplicates:
  - compliment.01 멋져요 duplicated compliment.14 멋있어요; it is now «Ang porma mo / Bongga!».
  - expression.05 글쎄요 is now «Hmm… ewan ko lang», distinct from .19 «Hindi ako sigurado».
  - expression.15 is now «Natural lang iyon», distinct from .04 «Siyempre».
- g085 now reads «Alas-nuwebe diyes».
- Idioms: 작심삼일 is now «Ningas-kugon…», and 누워서 떡 먹기 is now «Sisiw lang».

**Cross-references** (aralin 4, 10, 32 «Magalang na pakiusap») all match `lessons.jsonl`. No English is left in the lesson prose apart from the profile-approved terms and «Rule of thumb».

## For a native speaker to check (max 20)

1. The *po* boundary as a whole. Do these read naturally with the mixed levels they keep?
   - pharmacist «inumin po ninyo» (g049);
   - directions to a stranger without *po* («Dumiretso ka lang», «Saan ka pupunta?», g018);
   - boss «Oo, pasok ka» (g107);
   - g108 «salamat sa sipag mo».
2. `polite.html`: the new paragraph «Tungkol sa mga salin sa course na ito». `honorific.html`: the added sentence on *po* vs *(honorific)*.
3. «… nga» for orders («Dalawang kape nga», «Isang iced Americano nga»). Without *po*, does it sound curt?
4. «Pahingi ng …» vs «Pabili ng …» vs paki-. Is the split by situation natural, or should one form cover all requests?
5. «Pa-bill out» (s0184, c0580) and «Boss, pa-bill out» for 사장님, 계산해 주세요.
6. 수고하세요 = «Sige, laban lang sa trabaho». 수고하셨습니다 = «Salamat po sa sipag ninyo ngayong araw».
7. 잘 부탁드립니다 = «Kayo na po ang bahala sa akin» (c0084, g055); the work-email version «Salamat po in advance / Aasahan ko po kayo» (c0559).
8. «Opo, noted» for 넵, 확인했습니다 (s0209, texting.03, texting.14).
9. 안녕히 가세요 «Ingat (sa taong aalis)» vs 안녕히 계세요 «Paalam (sa taong maiiwan)», and the `meet` paragraph with «manatili / umalis nang mapayapa».
10. The tense cues «(nakaraan) / (kasalukuyan) / (hinaharap)», especially «Hindi rin ako pupunta (kasalukuyan)» (do-man.14) and joining.14, where the Tagalog verb is contemplative but the Korean is present.
11. «paaralan» everywhere vs everyday «school / eskuwela» (isseoyo table, particles, future).
12. «mahilig sa» for 좋아해요 in glosses (e003, s0173, s0241, want-like items).
13. «N taong gulang» in glosses vs *anyos* in the numbers trap material.
14. 고생했어 = «Pinaghirapan mo iyon / Napagod ka siguro» (c0472, g080).
15. Pause labels: compliment.01 «Ang porma mo / Bongga!», expression.05 «Hmm… ewan ko lang», saying.14 «Laban lang ulit ngayong araw», i09 «Ningas-kugon…».
16. «Tao po! / Oo, pasok po kayo!» for 계세요? / 들어오세요 (g096).
17. «Baka sakaling may English menu kayo?» for 혹시 영어 메뉴 있어요? (s0280, requests.02); is *baka sakali* right for 혹시?
18. «Manager» as the vocative for 과장님 (e072, g107, office.11, office.14), vs the Philippine «Sir / Ma'am».
19. Carried over unchanged from the writers and not re-judged: the `hangul` reading-guide anchors (*dyip, tsinelas*, «ibuga ang hangin», «mariin»).
20. Carried over unchanged from the writers and not re-judged: the `isseoyo` *may / nasa / wala* table.
