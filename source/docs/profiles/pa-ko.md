# Punjabi speakers learning Korean: pair profile

Course `pa-ko` = the fixed Korean half `tools/halves/target/ko/` (33 lessons, 56 decks in 6 groups, 1413 cards, 201 dialogues, 275 examples, 294 lesson sentences, 99 checks, 462 practice items; `docs/HALVES-SPEC.md`) + the Punjabi half `tools/halves/native/pa/ko/`, written by w1–w4 (w4 also `wT.jsonl`) from `mk_native.js pa`. This profile is the writers' authority. It follows `hi-ko.md`'s plan and analysis (shared: SOV, postpositions, gendered verbs, respect plural), writes every Punjabi string fresh, and adds what is Punjabi-specific: tone (§5.2), ਤੂੰ for 반말 (§2.2), ਜੀ ↔ 요 / 님 (§2.3), kinship address (§4.7), religious neutrality (§2.6). The interface dictionary `tools/i18n/pa/` (NOTES.md, `ui.json`, `roadmap.json`) **binds**: tabs, buttons, level titles, grammar terms and register are reused exactly (§3).

**The author is not a native speaker of Punjabi or Korean; every Punjabi sentence here is [inference] until checked (§10).** Tags: **[source]** opened for this profile · **[via hi-ko]** a study hi-ko opened, not reopened; it concerns **Hindi** speakers, so transfer to Punjabi is [inference] · **[convention]** grammars, school terms, the app's strings · **[inference]**. No study of Punjabi speakers learning Korean was found.

## 1. Summary

Register: everyday Indian Punjabi, learner = ਤੁਸੀਂ + -ਓ (§2.1). Levels: 요 / -습니다 / -시- → ਤੁਸੀਂ, **반말 → ਤੂੰ**, ਜੀ only for -시- / 님 / 네 (§2.2–2.3). Gender: neutral wording → scene → ਜਾਂਦਾ/ਜਾਂਦੀ (§2.4). Greeting ਨਮਸਕਾਰ, no religious terms (§2.6). Sounds: ㄲ ≈ ਕ, ㅋ ≈ ਖ, ㄱ = ਕ with a little air; never ਘ ਝ ਢ ਧ ਭ / ਗ ਦ ਬ ਜ as anchors; **no Punjabi tone on Korean** (§5). `ui.json`: none needed (§3.5).

## 2. Register, glosses, gender, neutrality

### 2.1 Voice and typography (NOTES.md §1)

- **Learner:** ਤੁਸੀਂ, -ਓ commands, English verbs + ਕਰੋ; gendered verbs about the learner only in the generic plural (ਤੁਸੀਂ ਜਾਣਦੇ ਹੋ). No ਯਾਰ, no ਕਿਰਪਾ ਕਰਕੇ in instructions.
- **Spelling:** NFC; ਵਿੱਚ, ਇੱਕ, ਨਾਂ, ਉਹਨਾਂ / ਇਹਨਾਂ; ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ where standard, no ਲ਼; ਉੱਤੇ for place, 'ਤੇ in set phrases; postpositions apart (ਘਰ ਵਿੱਚ) except ਮੈਨੂੰ ਤੈਨੂੰ ਸਾਨੂੰ ਤੁਹਾਨੂੰ.
- **Punctuation:** **।** ends every Punjabi sentence, also after Korean or RR; never a Latin full stop after Gurmukhi; `? ! : — … ·` as English; digits 0–9; straight quotes; spaced ` / ` for alternatives; `✗` / `✓`.
- **Script:** Hangul for Korean, Latin only for RR (italic in bodies); all else Gurmukhi, brands too (ਵਟਸਐਪ, ਕਾਕਾਓਟਾਕ, ਟੀ-ਮਨੀ). `course.json`: `{"native":"pa","name":"ਕੋਰੀਆਈ","brand":"한글"}`.
- **Punjabi, not Hindi** (the interface lint): never ਹੂੰ ਕੋ ਸੇ ਮੇਂ ਔਰ ਲੇਕਿਨ ਯਹ ਵਹ ਜਾਤਾ ਥਾ ਕਹਾਂ ਤੁਮ, nor ਵਿਚ / ਇਕ.
- **Body lint:** never a space + *on* + letters + `=` (only possible in RR: put `:` after the RR word).

### 2.2 Speech levels and pronouns

| Korean | Punjabi gloss | Example |
|---|---|---|
| 반말 | **ਤੂੰ**, bare-stem command, ਤੇਰਾ / ਤੈਨੂੰ, ਹੈਂ | 뭐 해? → ਕੀ ਕਰ ਰਿਹਾ/ਰਹੀ ਹੈਂ? · 먹어 → ਖਾ ਲੈ |
| 요-form | ਤੁਸੀਂ, -ਓ, **no ਜੀ** | 앉아요 → ਬੈਠੋ · 어디 가요? → ਕਿੱਥੇ ਜਾ ਰਹੇ ਹੋ? |
| -습니다 | ਤੁਸੀਂ, more formal words | 감사합니다 → ਧੰਨਵਾਦ |
| -시- / 드시다 / 계시다 to a listener the scene shows as senior (§2.3 test) | ਤੁਸੀਂ + **ਜੀ** | 드세요 → ਖਾਓ ਜੀ · 앉으세요 (to a guest) → ਬੈਠੋ ਜੀ |
| -시- honouring a third person | respect plural + ਜੀ on that noun | 할머니가 주무세요 → ਦਾਦੀ ਜੀ ਸੌਂ ਰਹੇ ਹਨ |
| 주세요 / -아 주세요 | ਦੇ ਦਿਓ / verb + ਦਿਓ; no ਕਿਰਪਾ ਕਰਕੇ, no ਜੀ | 물 주세요 → ਪਾਣੀ ਦੇ ਦਿਓ |
| 주시겠어요? | -ਦਿਓਗੇ ਜੀ? | 찍어 주시겠어요? → ਫ਼ੋਟੋ ਖਿੱਚ ਦਿਓਗੇ ਜੀ? |

- **Scope of ਤੂੰ:** ਤੂੰ / ਤੇਰਾ / ਤੈਨੂੰ **only** in glosses of 반말 lines, never toward the learner — an extension of the interface's one exception (`don't (지 마)` → ਨਾ ਕਰ); a lint must not "fix" it. Among Punjabi friends and partners ਤੂੰ is the normal intimate form (en-pa §2.3 [convention]); ਤੁਸੀਂ would erase the 반말 / 요 contrast.
- **Both directions:** a 요 / -습니다 / -시- line never gets ਤੂੰ; a 반말 line never gets ਤੁਸੀਂ. §6 phrases carry no ਤੁਸੀਂ / ਤੂੰ form, so one gloss fits every level of the phrase (반가워 = 반갑습니다 = ਮਿਲ ਕੇ ਖ਼ੁਸ਼ੀ ਹੋਈ); only a phrase that exists at one level only (잘 자) may. 너 = ਤੂੰ; 당신 = ਤੁਸੀਂ with "ਕੋਰੀਆਈ ਵਿੱਚ ਘੱਟ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ" where the English explains it.
- **Tags** carry what ਤੁਸੀਂ cannot: **(ਰਸਮੀ)** -습니다 · **(ਨਿਮਰ)** 요 · **(ਆਮ)** 반말 · **(ਸਤਿਕਾਰ ਵਾਲਾ)** -시-. Use one where the English has one, and on every prompt whose `x` / options differ from the answer only in level (§7.2). ਰਸਮੀ is new (no interface string says "formal").

### 2.3 ਜੀ ↔ 요 / 님: bridge and break

- **Bridge** [inference]: ਜੀ softens and honours, like 요 / 님. ਹਾਂ ਜੀ / ਨਹੀਂ ਜੀ = 네 / 아니요; ਹਾਂ / ਨਹੀਂ = 응 / 아니. Name + ਜੀ ≈ name + 씨 (민수 씨 → ਮਿਨਸੂ ਜੀ); title + ਜੀ ≈ title + 님. Neither goes on your own name. 요 sticks to a single word (커피요, 저요?), as ਜੀ sticks to ਹਾਂ or a name.
- **Breaks** (teach in `polite`, `titles`): (1) 요 is an **obligatory verb ending** on every polite sentence; ਜੀ is optional and mobile. (2) 요 is baseline politeness to any adult stranger, not extra respect: 요 ≠ ਜੀ. (3) Respect for a superior is -시- or a special verb. (4) 씨 is for peers and juniors, never a teacher or boss; ਜੀ has no ceiling.
- **Gloss rule:** ਜੀ only on (a) 네 / 아니요; (b) a name or title carrying 씨 / 님; (c) a -시- line **when the line or its scene shows the listener as senior**: staff to a customer (g045 봉투 필요하세요? → ਲਿਫ਼ਾਫ਼ਾ ਚਾਹੀਦਾ ਹੈ ਜੀ?, 뭐 드릴까요?, 몇 명이세요?), to a teacher, boss, elder or host, a formal first meeting, or a special honorific word (드세요, 주무세요, 계세요?, 성함, 연세, 뵙다); (d) 주시겠어요? (-ਦਿਓਗੇ ਜੀ?, so g098 takes ਜੀ) and the §6 phrases that show one.
- **Bare -세요 (no ਜੀ):** context-free set phrases (안녕히 가세요 / 계세요, 수고하세요, 조심히 가세요, 좋은 하루 보내세요, 먼저 가세요), 주세요 requests, directions and help to a stranger whose status the line does not show (g012 뭐가 필요하세요? → ਹਾਂ, ਕੀ ਚਾਹੀਦਾ ਹੈ?), a senior speaking down with -세요, and -시- honouring a third person (respect plural instead). Instructions to the learner never take ਜੀ.

### 2.4 Gender: the first rule that fits

Punjabi verbs agree with the speaker (ਜਾਂਦਾ / ਜਾਂਦੀ ਹਾਂ) and a ਤੂੰ addressee (ਰਿਹਾ / ਰਹੀ ਹੈਂ); Korean marks neither.

**1. Neutral wording, same tense and meaning:**

| Korean | Neutral Punjabi |
|---|---|
| 좋아요 / 있어요 | ਮੈਨੂੰ X ਪਸੰਦ ਹੈ / ਮੇਰੇ ਕੋਲ X ਹੈ |
| 학생이에요 · 배고파요 · 몰라요 | ਮੈਂ ਵਿਦਿਆਰਥੀ ਹਾਂ · ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ · ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ |
| past of a transitive verb | ਮੈਂ ਖਾਣਾ ਖਾਧਾ (agrees with the object) |
| -고 싶어요 · -아/어야 해요 | ਮੇਰਾ ਘਰ ਜਾਣ ਨੂੰ ਦਿਲ ਕਰਦਾ ਹੈ · ਮੈਨੂੰ ਕੰਮ ਕਰਨਾ ਪਵੇਗਾ |
| a known skill | ਮੈਨੂੰ ਕੋਰੀਆਈ ਬੋਲਣੀ ਆਉਂਦੀ ਹੈ |
| 못 + verb | ਮੈਥੋਂ ਮਸਾਲੇਦਾਰ ਨਹੀਂ ਖਾਧਾ ਜਾਂਦਾ |
| -(으)ㄹ까요? / 해도 돼요? · -자 | ਮੈਂ ਜਾਵਾਂ? (subjunctive) · ਚਲੋ ਖਾਈਏ |
| 반말 questions | ਤੇਰਾ ਨਾਂ ਕੀ ਹੈ? · ਤੈਨੂੰ ਕੀ ਪਸੰਦ ਹੈ? · ਕਿੱਥੇ ਜਾਣਾ ਹੈ? |

Never reword across a cue: ਮੈਨੂੰ ਜਾਣਾ ਹੈ = "have to", not "will"; ਮੈਥੋਂ … ਨਹੀਂ … ਜਾਂਦਾ = 못, never 안.

**2. The scene decides:** in the speaker's mouth 오빠 / 언니 → female, 형 / 누나 → male; addressed 오빠 / 형 → male ਤੂੰ, 언니 / 누나 → female ਤੂੰ; an English he / she or a named speaker.

**3. Otherwise the unspaced pair**, masculine first, on the inflected word only: (ਮੈਂ) ਘਰ ਗਿਆ/ਗਈ · ਤੂੰ ਕਿੱਥੇ ਜਾ ਰਿਹਾ/ਰਹੀ ਹੈਂ? Never a spaced ` / ` (the dialogue separator). Bare masculine forms in §4 / §6 are shorthand for the pair. ਤੁਸੀਂ takes the generic plural (ਜਾਂਦੇ ਹੋ), no pair. **`@@` is never the subject of a gendered verb** (ਮੈਂ @@ ਹਾਂ, @@ ਜੀ, ਧੰਨਵਾਦ। @@).

### 2.5 Meaning first

Gloss the Korean (check `target/ko`), not the English. Use what a speaker in Indian Punjab says in neutral speech: everyday Persian / Arabic words stay (ਸ਼ੁਕਰੀਆ, ਜ਼ਰੂਰ, ਮਦਦ), English loans where normal (ਬੱਸ, ਸਟੇਸ਼ਨ, ਆਰਡਰ), no Sanskritised officialese.

### 2.6 Religious neutrality (one rule, recorded)

**Course content uses no religious greeting, blessing, God-word or community-marked term.**
- **Greeting:** 안녕하세요 = **ਨਮਸਕਾਰ** in every gloss (cards, dialogues, sentences, pause label `ko.z.polite.11`); casual 안녕 = **ਹੈਲੋ**. **ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਨਮਸਤੇ and ਸਲਾਮ appear nowhere** in course content, not even in a "who says which" note. Why: greetings mark religion, and some Sikhs object to ਸਤ ਸ੍ਰੀ ਅਕਾਲ as a greeting (en-pa §2.4 [source there: Wikipedia, *Sat Sri Akaal*]); ਨਮਸਤੇ reads Hindu; ਨਮਸਕਾਰ is the greeting of Punjabi news and official speech [inference, §10 Q1].
- **Banned:** ਗੁਰੂ (also not for 선생님 or 사범), ਵਾਹਿਗੁਰੂ, ਰੱਬ / ਰੱਬਾ, ਭਗਵਾਨ, ਖ਼ੁਦਾ, ਅੱਲ੍ਹਾ, ਰੱਬ ਰਾਖਾ, ਖ਼ੁਦਾ ਹਾਫ਼ਿਜ਼, ਰੱਬ ਕਰੇ, ਛਕਣਾ, ਲੰਗਰ, ਪ੍ਰਸ਼ਾਦ, ਅਰਦਾਸ, ਸੰਗਤ.
- **Where writers will reach for them:** 아이고 → ਹਾਏ / ਉਫ਼; 소원성취 → ਸਾਰੀਆਂ ਇੱਛਾਵਾਂ ਪੂਰੀਆਂ ਹੋਣ; 잘 먹겠습니다 → no prayer comparison; 선생님 → ਟੀਚਰ / ਸਰ / ਮੈਡਮ; 드세요 → ਖਾਓ ਜੀ (never ਛਕੋ); level 사범 → ਸੇਨਸੇਈ.
- **Food:** no assumption about diet; a neutral "many dishes contain pork, beef or fish" is allowed.
- **For the lead:** the interface's pre-course "Hello" = ਸਤ ਸ੍ਰੀ ਅਕਾਲ (NOTES §4 #19) is outside this half; consider ਨਮਸਕਾਰ there.

## 3. Glossary, screen names, labels

### 3.1 Terms (closed list; **bold** = interface, binding)

| Idea | Term |
|---|---|
| Korean particle · Punjabi postposition | **ਪਾਰਟੀਕਲ** (first use: "ਪੰਜਾਬੀ ਸੰਬੰਧਕ ਵਾਂਗ ਸ਼ਬਦ ਦੇ ਪਿੱਛੇ, ਪਰ ਜੁੜ ਕੇ") · ਸੰਬੰਧਕ |
| 은/는 · 이/가 · 을/를 | ਵਿਸ਼ਾ · ਕਰਤਾ · ਕਰਮ ਪਾਰਟੀਕਲ |
| noun · pronoun · verb · adjective · adverb · interjection | **ਨਾਂਵ · ਪੜਨਾਂਵ · ਕਿਰਿਆ · ਵਿਸ਼ੇਸ਼ਣ** · ਕਿਰਿਆ-ਵਿਸ਼ੇਸ਼ਣ · ਵਿਸਮਕ |
| 크다, 좋다 · 공부하다 · irregular | ਵਿਸ਼ੇਸ਼ਣ-ਕਿਰਿਆ · 하다-ਕਿਰਿਆ · **ਬੇਨਿਯਮੀ** |
| dictionary form · stem · ending | **ਡਿਕਸ਼ਨਰੀ ਰੂਪ** (= -ਣਾ / -ਨਾ) · **ਸਟੈਮ** (once "ਧਾਤੂ") · ਐਂਡਿੰਗ |
| 요-form · -습니다 / 요 / 반말 / -(으)시- | **요-ਰੂਪ** · ਰਸਮੀ / **ਨਿਮਰ** / **ਆਮ** / **ਸਤਿਕਾਰ ਵਾਲਾ**; together ਨਿਮਰਤਾ ਦੇ ਪੱਧਰ |
| 씨, 님, ਜੀ, ਭਾਜੀ · 개 명 잔 | ਸੰਬੋਧਨ ਸ਼ਬਦ · **ਕਾਊਂਟਰ** |
| two number sets | ਮੂਲ ਕੋਰੀਆਈ / ਸਾਈਨੋ-ਕੋਰੀਆਈ (never ਚੀਨੀ ਅੰਕ) |
| tenses | **ਵਰਤਮਾਨ / ਭੂਤਕਾਲ / ਭਵਿੱਖ ਕਾਲ** |
| word order · question word · connector · softener · pattern · grammar | ਸ਼ਬਦਾਂ ਦੀ ਤਰਤੀਬ · **ਸਵਾਲੀਆ ਸ਼ਬਦ** · ਜੋੜਨ ਵਾਲੇ ਸ਼ਬਦ · ਨਰਮ ਕਰਨ ਵਾਲੇ ਸ਼ਬਦ · **ਪੈਟਰਨ** · **ਵਿਆਕਰਨ** |
| Hangul · vowel · consonant · block · syllable · 받침 | **ਹੰਗੁਲ · ਸਵਰ · ਵਿਅੰਜਨ · ਬਲਾਕ** ("ਇੱਕ ਬਲਾਕ = ਇੱਕ ਉਚਾਰਖੰਡ") · **ਉਚਾਰਖੰਡ · ਆਖ਼ਰੀ ਵਿਅੰਜਨ** |
| ㄱㄷㅂㅅㅈ / ㅋㅌㅍㅊ / ㄲㄸㅃㅆㅉ | ਸਾਦੇ / ਹਵਾ ਵਾਲੇ (once "ਮਹਾਂਪ੍ਰਾਣ") / ਕੱਸੇ ਹੋਏ ਵਿਅੰਜਨ |
| sound change · 연음 · 비음화 · tone · stress | **ਧੁਨੀ-ਬਦਲਾਅ** · ਜੋੜ ਕੇ ਬੋਲਣਾ · ਨੱਕ ਵਾਲਾ ਬਦਲਾਅ · ਸੁਰ · ਜ਼ੋਰ |
| the RR line · stroke order | **ਰੋਮਨ** (never ਉਚਾਰਨ) · ਲਿਖਣ ਦੀ ਤਰਤੀਬ |

### 3.2 Screen names (binding)

Tabs **ਅੱਜ · ਪਾਠ · ਅਭਿਆਸ · ਦੁਹਰਾਈ · ਤਰੱਕੀ**; buttons **ਯਾਦ ਹੈ · ਫਿਰ ਤੋਂ · ਜਾਂਚੋ · 📖 ਬ੍ਰਾਊਜ਼ · ਮੇਰੇ ਵਾਕ**. Never name the Read tab (ਪੜ੍ਹਨਾ), a trainer or a drill. `hangul` keeps "tap a letter to replay" (ਦੁਬਾਰਾ ਦੇਖਣ ਲਈ ਅੱਖਰ ਉੱਤੇ ਟੈਪ ਕਰੋ): the stroke cells always render. `sound-changes`: replace the Read-drill line with "ਪਾਠ ਦੀਆਂ ਉਦਾਹਰਨਾਂ ਸੁਣੋ ਅਤੇ ਅਭਿਆਸ / ਦੁਹਰਾਈ ਵਿੱਚ ਦੁਹਰਾਓ".

### 3.3 Labels (w1; permanent progress keys)

All 56 deck labels and 6 groups were looked up in `ui.json`; the only hits are reused (Numbers = ਗਿਣਤੀ, three groups). Every label is unique, none is ਮੇਰੇ ਵਾਕ, none ends in ।.

**Decks, in id order:**
1. ਹੰਗੁਲ ਦੇ ਸਵਰ · ਹੰਗੁਲ ਦੇ ਵਿਅੰਜਨ · ਹੰਗੁਲ: ਅਗਲਾ ਪੜਾਅ · ਉਚਾਰਨ ਦੇ ਨੁਕਤੇ
2. ਜ਼ਰੂਰੀ ਵਾਕ · ਜਾਣ-ਪਛਾਣ · ਜ਼ਰੂਰੀ ਵਾਕ 2 · ਪੁੱਛ-ਗਿੱਛ
3. ਕੈਫ਼ੇ ਅਤੇ ਕਨਵੀਨੀਅੰਸ ਸਟੋਰ · ਰੋਜ਼ਮੱਰਾ ਦੇ ਅੰਕ · ਕਾਊਂਟਰ · ਮੌਸਮ ਅਤੇ ਭਾਵਨਾਵਾਂ · ਜੋੜਨ ਵਾਲੇ ਸ਼ਬਦ
4. ਡਾਕਟਰ ਅਤੇ ਕੈਮਿਸਟ · ਘਰ ਅਤੇ ਨਿੱਕੇ-ਮੋਟੇ ਕੰਮ · ਸਤਿਕਾਰ ਵਾਲੇ ਰੂਪ · ਥਾਵਾਂ ਅਤੇ ਇਮਾਰਤਾਂ · ਸ਼ੌਕ
5. ਖਾਣੇ ਦੇ ਸ਼ਬਦ · ਡਰਿੰਕਸ · ਗਤੀਵਿਧੀਆਂ · ਟੀਵੀ ਅਤੇ ਮਨੋਰੰਜਨ · ਥਾਂ ਅਤੇ ਦਿਸ਼ਾ ਦੇ ਸ਼ਬਦ
6. ਮੁੱਖ ਕਿਰਿਆਵਾਂ · ਪਾਰਟੀਕਲ · ਗਿਣਤੀ · ਮਿੱਠੀਆਂ ਗੱਲਾਂ · ਪਿਆਰੀਆਂ ਗੱਲਾਂ · ਫ਼ਲਰਟਿੰਗ · ਦੋਸਤਾਂ ਨਾਲ ਚੈਟ
7. ਜੋਸ਼ ਅਤੇ ਟੌਹਰ · ਦੋਸਤਾਂ ਨਾਲ ਘੁੰਮਣਾ · ਕੇ-ਪੌਪ ਅਤੇ ਫ਼ੈਨ ਕਲਚਰ · ਸੋਸ਼ਲ ਮੀਡੀਆ ਅਤੇ ਸਲੈਂਗ
8. ਡੇਟਿੰਗ: ਅਗਲਾ ਕਦਮ · ਕੰਮ ਅਤੇ ਦਫ਼ਤਰ · ਹਲਕੀ-ਫੁਲਕੀ ਗੱਲਬਾਤ · ਖਾਣਾ ਅਤੇ ਆਰਡਰ
9. ਰਾਹ ਅਤੇ ਸਫ਼ਰ · ਸਮਾਂ ਅਤੇ ਦਿਨ · ਪਰਿਵਾਰ ਅਤੇ ਲੋਕ · ਵਿਸ਼ੇਸ਼ਣ · ਕੇ-ਡਰਾਮੇ ਦੇ ਡਾਇਲਾਗ
10. ਵੱਧ ਵਰਤੇ ਨਾਂਵ · ਵੱਧ ਵਰਤੀਆਂ ਕਿਰਿਆਵਾਂ · ਵੱਧ ਵਰਤੇ ਵਿਸ਼ੇਸ਼ਣ · ਵੱਧ ਵਰਤੇ ਕਿਰਿਆ-ਵਿਸ਼ੇਸ਼ਣ · ਵੱਧ ਵਰਤੇ ਪੜਨਾਂਵ
11. ਵੱਧ ਵਰਤੇ ਪਾਰਟੀਕਲ · ਵੱਧ ਵਰਤੇ ਜੋੜ-ਸ਼ਬਦ · ਵੱਧ ਵਰਤੇ ਵਿਸਮਕ · ਵੱਧ ਵਰਤੇ ਸ਼ਬਦ · ਵੱਧ ਵਰਤੇ ਕਾਊਂਟਰ
12. ਫ਼ਲਰਟ ਦੇ ਸ਼ਬਦ · ਤਾਰੀਫ਼ਾਂ · ਦੇਸ਼

**Groups:** ਬੁਨਿਆਦ · **ਰੋਜ਼ਾਨਾ** · ਸ਼ਬਦਾਵਲੀ · **ਵਿਆਕਰਨ** · **ਮੇਲ-ਜੋਲ** · ਮੁੱਖ ਸ਼ਬਦ.

**`labels.jsonl`:** the level titles (ko.t01 ਪੁੰਗਰ … t16 ਸੇਨਸੇਈ; no ਗੁਰੂ), the four greeting glosses (night ਦੇਰ ਹੋ ਗਈ, ਸ਼ਾਬਾਸ਼ …), goals and plans are copied **verbatim** from `ui.json` `exact` under the same English key. **Two dictionary hits are not reused:** `ko.z.polite.11` "Hello" → ਨਮਸਕਾਰ (§2.6); `ko.z.expression.08` 알겠어요 "Got it" → **ਸਮਝ ਆ ਗਿਆ** (the interface's own "Got it — quiz me"; the button ਯਾਦ ਹੈ means "I remember"). Pause sets: ਤਾਰੀਫ਼ · ਰੋਜ਼ ਦੇ ਬੋਲ · ਨਿਮਰਤਾ ਦੀਆਂ ਮੁੱਢਲੀਆਂ ਗੱਲਾਂ · ਅਖਾਣ. `ko.d.mydeck`: ਜੋ ਵੀ ਤੁਸੀਂ ਆਪ ਜੋੜੋ।

### 3.4 Lesson titles

"N · title", each keeping exactly its English title's Hangul (roadmap wording reused where it fits; Hangul follows the English: 28 is 보다, 더, 제일; 33 has none). Cross-references: "ਪਾਠ N, «title»".

1 ਹੰਗੁਲ ਇੱਕੋ ਬੈਠਕ ਵਿੱਚ · 2 ਨਿਮਰਤਾ ਦੇ ਪੱਧਰ · 3 ਲੋਕਾਂ ਨੂੰ ਮਿਲਣਾ · 4 ਧੁਨੀ-ਬਦਲਾਅ: 감사합니다 ਵੱਖਰਾ ਕਿਉਂ ਸੁਣਾਈ ਦਿੰਦਾ ਹੈ · 5 ਨਾਂਵ ਅਤੇ 은/는 · 6 있어요 ਅਤੇ 없어요 · 7 ਪੜਨਾਂਵ ਅਤੇ ਸਵਾਲੀਆ ਸ਼ਬਦ · 8 ਕਿਰਿਆਵਾਂ · 9 ਵਰਤਮਾਨ ਕਾਲ: 요-ਰੂਪ · 10 ਭੂਤਕਾਲ: 았어요 / 었어요 · 11 ਭਵਿੱਖ ਕਾਲ ਅਤੇ ਇਰਾਦੇ: -(으)ㄹ 거예요 · 12 ਸ਼ਬਦਾਂ ਦੀ ਤਰਤੀਬ ਅਤੇ 을/를 · 13 에 ਅਤੇ 에서, ਨਾਲੇ ਪਾਰਟੀਕਲਾਂ ਦਾ ਨਕਸ਼ਾ · 14 ਨਾਂਹ ਕਰਨਾ: 안 ਅਤੇ -지 않아요 · 15 도 ਅਤੇ 만: ਵੀ ਅਤੇ ਸਿਰਫ਼ · 16 ਨਾਂਵ ਅਤੇ ਕਿਰਿਆ ਜੋੜ ਕੇ ਵਾਕ · 17 ਚਾਹੁਣਾ ਅਤੇ ਪਸੰਦ ਕਰਨਾ: -고 싶어요, 좋아해요 · 18 ਗਿਣਤੀ ਦੇ ਦੋ ਸਿਸਟਮ · 19 ਬਾਹਰ ਖਾਣਾ · 20 ਆਉਣਾ-ਜਾਣਾ · 21 ਸੰਬੋਧਨ ਅਤੇ ਸਤਿਕਾਰ ਵਾਲੇ ਰੂਪ · 22 ਪ੍ਰੋਗਰਾਮ ਬਣਾਉਣਾ · 23 ਕੋਰੀਆਈਆਂ ਵਾਂਗ ਮੈਸੇਜ ਕਰਨਾ · 24 ਕਾਊਂਟਰ · 25 ਵਾਕ ਜੋੜਨਾ: -고, -지만, -아/어서 · 26 ਬੀਤੇ ਦੀ ਗੱਲ ਸੁਣਾਉਣਾ · 27 ਨਾਂਵ ਦਾ ਵਰਣਨ: 좋은 날씨, 큰 가방 · 28 ਤੁਲਨਾ: 보다, 더, 제일 · 29 ਨਾ ਕਰ ਸਕਣਾ, ਕਰ ਸਕਣਾ ਅਤੇ ਨਾ ਜਾਣਨਾ · 30 ਕਰਨਾ ਪੈਣਾ: -아/어야 해요 · 31 ਸਤਿਕਾਰ ਵਾਲੀਆਂ ਕਿਰਿਆਵਾਂ · 32 ਨਿਮਰਤਾ ਨਾਲ ਮੰਗਣਾ · 33 ਦਫ਼ਤਰ ਦੀ ਕੋਰੀਆਈ

**Table headers fixed now** (tl and zh reviews had to fix them): `polite` ਰਸਮੀ · ਨਿਮਰ · ਆਮ (-습니다 column); `meet` **ਰਸਮੀ / ਸਤਿਕਾਰ ਵਾਲਾ** · ਨਿਮਰ · ਆਮ (반갑습니다, 성함이 어떻게 되세요?); `plans` **ਸਤਿਕਾਰ ਵਾਲਾ** · ਨਿਮਰ · ਆਮ (가시겠어요?, 있으세요?).

### 3.5 `ui.json`

**None needed.** The pa dictionary serves only pa-ko; its 14 `uiKeys` strings already say ਕੋਰੀਆਈ / ਹੰਗੁਲ / ਰੋਮਨ (checked one by one), with no target swap to undo (unlike hi). **For the lead:** `validate.js` line 241 counts `uiKeys` as words remaining unless the native `ui.json` has them; copying the 14 `t` values from `tools/i18n/pa/ui.json` verbatim reaches 0 without changing wording.

## 4. Grammar bridges and breaks

Punjabi grammar here is general knowledge [convention, no grammar opened]. Hangul in §4–§5 is for writers; a field may use it only if its English has the same Hangul runs, or under `_waive`.

### 4.1 SOV and the ਸੰਬੰਧਕ map

- **Holds:** same order (ਕੌਣ · ਕਦੋਂ · ਕਿਸ ਨਾਲ · ਕਿੱਥੇ · ਕੀ · ਕਿਰਿਆ); question words in place (ਇਹ ਕੀ ਹੈ? = 이거 뭐예요?); negation right before the verb.
- **Breaks:** (1) ਘਰ ਵਿੱਚ vs 집에: predicted 집 에; (2) ਕੀ opens yes/no questions and means 뭐; Korean only raises the voice; (3) pronoun dropping: Punjabi drops subjects because the verb shows the person (ਜਾ ਰਿਹਾ ਹਾਂ); Korean drops them with no agreement and avoids "you".

| Punjabi | Korean | Example · note |
|---|---|---|
| subject (— / ਨੇ) | 이/가; topic 은/는 | ਨੇ depends on tense; the particle never does |
| ਨੂੰ (definite / animate object) | 을/를 (every object) | ਮੈਂ ਚਾਹ ਪੀਂਦਾ ਹਾਂ has no ਨੂੰ, but 차를 마셔요 |
| ਨੂੰ / ਲਈ (to, for a person) | 에게 / 한테 | ਦੋਸਤ ਨੂੰ = 친구한테 |
| ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ | 저는 + verb | 저에게 배고파요 ✗ |
| ਵਿੱਚ / ਉੱਤੇ / ਨੂੰ (time) | 에 (be, go, time) or 에서 (do) | ਘਰ ਵਿੱਚ ਹਾਂ = 집에 있어요 · ਘਰ ਵਿੱਚ ਆਰਾਮ = 집에서 쉬어요 · ਸੋਮਵਾਰ ਨੂੰ = 월요일에 |
| ਤੋਂ · ਤੱਕ · ਨਾਲ | 에서 / 부터 / 보다 · 까지 · (으)로 / 하고 | ਸ਼ਾਮ ਤੱਕ = 저녁까지 |
| ਕੋਲ (have) | 이/가 있어요 | ਮੇਰੇ ਕੋਲ ਸਮਾਂ ਹੈ = 시간이 있어요 |
| ਦਾ / ਦੀ / ਦੇ | 의, usually dropped (제) | no agreement |

Punjabi drops the postposition with ਜਾਣਾ (ਘਰ ਜਾਂਦਾ ਹਾਂ); Korean wants 집에 가요, though casual 집 가요 exists, so the error is cheap.

### 4.2 ਵੀ, ਹੀ, ਤਾਂ

- **ਵੀ ↔ 도:** ਵੀ + ਨਹੀਂ = "either" (ਮੈਂ ਵੀ ਨਹੀਂ = 저도 안). Break: 도 **replaces** 은/는, 이/가, 을/를 (저는도 ✗); it stacks only after 에 / 에서, as ਵੀ after ਵਿੱਚ (ਘਰ ਵਿੱਚ ਵੀ = 집에도).
- **ਹੀ / ਸਿਰਫ਼ ↔ 만:** same slot (ਪਾਣੀ ਹੀ = 물만). Break: ਹੀ is also emphatic (ਹੁਣੇ ਹੀ); 만 never.
- **ਤਾਂ ↔ 은/는:** only for contrast (ਕੌਫ਼ੀ ਤਾਂ ਨਹੀਂ ≈ 커피는 안). 은/는 marks the topic in almost every sentence: teach "ਜਿੱਥੋਂ ਤੱਕ … ਦੀ ਗੱਲ ਹੈ". **Never call 은/는 "ਤਾਂ" or 을/를 "ਨੂੰ".**

### 4.3 Existence vs copula: ਹੈ has three jobs (`isseoyo`)

| Punjabi | Korean | Job |
|---|---|---|
| ਮੈਂ ਵਿਦਿਆਰਥੀ ਹਾਂ | 학생이에요 | A = B |
| ਮੈਂ ਸਕੂਲ ਵਿੱਚ ਹਾਂ | 학교에 있어요 | location |
| ਮੇਰੇ ਕੋਲ ਸਮਾਂ ਹੈ · ਇੱਥੇ ਇੱਕ ਸਕੂਲ ਹੈ | 시간이 있어요 · 여기에 학교가 있어요 | having · existing |
| ਸਮਾਂ ਨਹੀਂ ਹੈ · ਡਾਕਟਰ ਨਹੀਂ ਹਾਂ | 시간이 없어요 · 의사가 아니에요 | one ਨਹੀਂ, two Korean words |

Predicted: 저는 고양이예요 for "I have a cat"; 안 있어요 ✗.

### 4.4 Verbs, tense, negation, ability

- 다 ≈ -ਣਾ / -ਨਾ (먹다 ≈ ਖਾਣਾ); ਸਟੈਮ 먹 ≈ ਧਾਤੂ ਖਾ. **No agreement** for person, gender or number: the biggest relief for a Punjabi speaker. ਵਧੀਆ ਹੈ is one word, 좋아요 (좋아이에요 ✗). 하다 ≈ ਕਰਨਾ, and the split works alike: ਪੜ੍ਹਾਈ ਨਹੀਂ ਕਰਦਾ = 공부 안 해요.
- **Tense:** present = ਜਾਂਦਾ ਹਾਂ + ਜਾ ਰਿਹਾ ਹਾਂ; past ਖਾਧਾ / ਖਾ ਲਿਆ / ਖਾਧਾ ਹੈ = 먹었어요 (no ਨੇ, no agreement; ਅਜੇ ਨਹੀਂ ਗਿਆ = 안 갔어요); future ਜਾਵਾਂਗਾ ≈ 갈 거예요, presumptive ਹੋਵੇਗਾ = "probably".
- **Negation:** ਨਹੀਂ before the verb = 안 (ਕੌਫ਼ੀ ਨਹੀਂ ਪੀਂਦਾ = 커피를 안 마셔요); prohibitive ਨਾ (ਨਾ ਜਾਓ) ≈ -지 마세요; ਨਹੀਂ ਕਰਾਂਗਾ vs ਨਹੀਂ ਕਰ ਸਕਦਾ ≈ 안 vs 못 (ਮੈਥੋਂ … ਨਹੀਂ ਹੁੰਦਾ = 못); ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ = 몰라요. **Ability:** ਸਕਣਾ ≈ -(으)ㄹ 수 있어요; ਆਉਣਾ (ਮੈਨੂੰ ਤੈਰਨਾ ਆਉਂਦਾ ਹੈ) ≈ 할 줄 알아요.

### 4.5 ਮੈਨੂੰ ਪਸੰਦ ਹੈ vs 좋아해요

In ਮੈਨੂੰ ਕੌਫ਼ੀ ਪਸੰਦ ਹੈ the thing liked is the subject, as in **커피가 좋아요**; 좋아해요 needs 을/를. Predicted: 커피가 좋아해요 ✗ [inference, as hi-ko]. Teach «ਮੈਨੂੰ X ਪਸੰਦ ਹੈ» = X가 좋아요 = X를 좋아해요. -고 싶어요 = ਦਿਲ ਕਰਦਾ ਹੈ / ਚਾਹੁੰਦਾ ਹਾਂ, never ਮੈਨੂੰ … ਜਾਣਾ ਹੈ.

### 4.6 Honorifics

- **Holds** [inference]: ਤੁਸੀਂ / ਤੂੰ follows age and closeness like 요 / 반말; moving to ਤੂੰ with someone older needs leave, like 말 놔도 돼요. **The respect plural = -시-:** ਪਿਤਾ ਜੀ ਘਰ ਹਨ ≈ 아버지가 집에 계세요.
- **Breaks:** (1) Korean marks respect only on the verb ending and omits "you" (당신 ≠ ਤੁਸੀਂ: name + 씨, a title, or nothing). (2) One Punjabi plural serves listener and third person; Korean splits 요 / -시-; never -시- on yourself (저는 가세요 ✗). (3) -습니다 marks a situation, not a person (ਧੰਨਵਾਦ vs ਸ਼ੁਕਰੀਆ). (4) Korean has a humble "I" (저 / 나).
- Predicted: 반말 to a young waiter or driver [inference]; every adult stranger in Korea gets 요.

### 4.7 Kinship address: ਭਾਜੀ / ਵੀਰ ਜੀ / ਭੈਣ ਜੀ ↔ 형 / 오빠 / 누나 / 언니

| Punjabi | male speaker | female speaker |
|---|---|---|
| ਭਾਜੀ / ਵੀਰ ਜੀ (older brother, older man) | 형 | 오빠 |
| ਭੈਣ ਜੀ / ਦੀਦੀ (older sister, older woman) | 누나 | 언니 |

Holds: sibling words for older people. Breaks: (1) the Korean word follows the **speaker's** gender; (2) Punjabi uses ਭਾਜੀ / ਭੈਣ ਜੀ with strangers, Koreans do not (저기요, 사장님, 기사님); (3) 오빠 to a non-relative can sound flirty [convention]. Meanings stay plain (형 / 오빠 = ਵੱਡਾ ਭਰਾ / ਭਾਜੀ); the note says who says which.

### 4.8 Comparing, relative clauses, joining, numbers, counters

- **Comparing:** X Y ਤੋਂ ਸਸਤਾ ਹੈ = X가 Y보다 싸요, same order; ਜ਼ਿਆਦਾ / ਹੋਰ ≈ 더; ਸਭ ਤੋਂ ≈ 제일.
- **Modifiers / relative clauses:** Punjabi adjectives agree (ਵੱਡਾ / ਵੱਡੀ); Korean changes the ending (크다 → 큰 가방). No ਜੋ … ਉਹ in Korean: everything goes before the noun; bridge = the ਵਾਲਾ phrase (ਕੋਰੀਆਈ ਬੋਲਣ ਵਾਲਾ ਦੋਸਤ = 한국어 하는 친구).
- **Joining:** -ਕੇ (ਖਾ ਕੇ) ≈ -고 / -아/어서, neither takes tense. ਕਿਉਂਕਿ puts the reason second; Korean first (바빠서), like "…, ਇਸ ਲਈ". Story words: ਪਹਿਲਾਂ · ਫਿਰ · ਉਸ ਤੋਂ ਬਾਅਦ · ਇਸ ਲਈ · ਪਰ · ਅਖ਼ੀਰ ਵਿੱਚ.
- **Numbers:** hours and age native Korean; minutes, money, dates Sino-Korean (ਤਿੰਨ ਵਜੇ ਦਸ ਮਿੰਟ = 세 시 십 분). 10만 = ਇੱਕ ਲੱਖ, 1000만 = ਇੱਕ ਕਰੋੜ; ਸਾਢੇ ਤਿੰਨ ≈ 세 시 반; ਸਵਾ / ਪੌਣੇ / ਡੇਢ / ਢਾਈ have no Korean word. 살 / ਸਾਲ is a coincidence.
- **Counters:** ਦੋ ਕੱਪ ਚਾਹ → 차 두 잔 — the number goes **after** the noun (predicted 두 커피). Bridge: ਤਿੰਨ ਜਣੇ ≈ 세 명 [inference].

## 5. Reading guide

### 5.1 Comparisons, not readings

Gurmukhi gives **one sound** (ㅏ ≈ ਆ) or one syllable (옷 ≈ "ਓਤ", "ਸਾਹ ਛੱਡੇ ਬਿਨਾਂ"), always with ਲਗਭਗ / ਵਰਗਾ or a mouth description, never a word. Reasons: no letter for ㅡ or ㅓ; a respelling can trigger tone (§5.2); inherent-a deletion and stress distort words; press spellings (ਸਿਓਲ) fix the "ਯੋ" reading of ㅓ; Hangul is the goal. Name labels (ਮਿਨਸੂ, ਕਿਮਚੀ) are labels, not readings (§7.3).

**Anchors allowed:** vowels ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ ਅ; stops ਕ/ਖ, ਤ/ਥ, ਪ/ਫ, ਚ/ਛ; ਸ ਸ਼ ਨ ਮ ਰ ਲ ਹ ਯ ਵ; the ng of ਰੰਗ. **Never anchors:** ਘ ਝ ਢ ਧ ਭ, ਗ ਦ ਬ ਜ, non-initial ਹ, ਟ ਠ ਡ ਣ ੜ, ਫ਼ ਖ਼. These letters are fine in ordinary Punjabi words (ਧੰਨਵਾਦ, ਥੋੜ੍ਹਾ) and in ✗ contrasts ("ਟ ਨਹੀਂ, ਤ").

**Why not ਗ ਦ ਬ ਜ** (hi-ko used ग द ब ज): Korean listeners heard Hindi voiced stops as lenis 94.6% of the time (Ahn 2009 [via hi-ko]), so ਗ is understood and never marked ✗; but ㄱ ㄷ ㅂ ㅈ are voiceless at word start (Park & Narang 2019 advise voiceless onsets [via hi-ko]), and the lead asked for the ਕ/ਖ scale only. Learner-facing text describes plain stops by **air and tension only**.

### 5.2 Tone and stress

**Punjabi** [source: Wikipedia, *Punjabi language*]: lexical tone (falling / rising; most words level) arose where voiced aspirates lost aspiration; word-initial ਘ ਝ ਢ ਧ ਭ are voiceless with a tone (ਘਰ ≈ *kàr*); ਹ is "silent or very weakly pronounced except word-initially" and leaves a tone; tone falls on the stressed syllable. **Korean** has no lexical tone and no fixed word stress: syllables are even, pitch belongs to the phrase.

1. **No tonal anchor.** The tempting ਘ (k + low pitch) ≈ Seoul ㄱ [inference] is banned: it teaches a contour tone and ਘ varies by dialect (en-pa §2.1).
2. **Flat, even blocks.** Learner-facing: "ਕੋਰੀਆਈ ਵਿੱਚ ਸੁਰ ਨਹੀਂ ਹੁੰਦੀ: ਹਰ ਬਲਾਕ ਸਿੱਧਾ ਬੋਲੋ, ਨਾ ਚੜ੍ਹਾਓ ਨਾ ਉਤਾਰੋ, ਕਿਸੇ ਉਚਾਰਖੰਡ ਉੱਤੇ ਜ਼ੋਰ ਨਾ ਦਿਓ। ਸਵਾਲ ਵਿੱਚ ਸਿਰਫ਼ ਅਖ਼ੀਰ ਉੱਤੇ ਅਵਾਜ਼ ਚੜ੍ਹਦੀ ਹੈ।"
3. **Medial h in RR** (*manhi*, *jeonhwa*): a Punjabi reader may drop it and raise the vowel before it, as in ਚਾਹ. Dropping is harmless (Korean drops ㅎ too: 좋아요); **the tone is not**: "ਹ ਹਲਕਾ ਜਾਂ ਗ਼ਾਇਬ, ਪਰ ਸੁਰ ਕੋਈ ਨਹੀਂ".
4. **Writer-facing only:** after ㅋㅌㅍㅊ / ㄲㄸㅃㅉㅆ a Seoul vowel starts higher, after ㄱㄷㅂㅈ lower [via hi-ko: Wikipedia, *Korean phonology*] — a by-product of the consonant, not a tone to produce; never in a learner field.
5. **Name labels** avoid ਘ ਝ ਢ ਧ ਭ and non-initial ਹ (§7.3).

### 5.3 Sound table (card notes c0001–c0060, `hangul` table, Hangul deck descriptions)

| Jamo (RR) | Comparison | Trap |
|---|---|---|
| ㅏ a | ਆ, short | not ਅ (Indian transliteration writes *a* for both) |
| ㅓ eo | between ਅ and ਔ: jaw open, lips **not** rounded | not ਓ / "ਯੋ" |
| ㅗ · ㅜ · ㅣ | ਓ rounded · ਊ · ਈ; length does not matter | |
| ㅡ eu | ਉ with lips spread | no letter; not "ਯੂ" |
| ㅐ = ㅔ | ਏ or ਐ, merged in Seoul | one vowel, not "ਆਏ" |
| ㅑ ㅛ ㅠ · ㅘ · ㅟ | ਯਾ ਯੋ ਯੂ · ਵਾ · ਵੀ | |
| ㅕ · ㅝ · ㅚ ㅙ ㅞ · ㅢ | ਯ + ㅓ · ਵ + ㅓ · about ਵੇ · ㅡ + ਈ | *yeo* ≠ ਯੋ, *wo* ≠ ਵੋ |
| ㄱ ㄷ ㅂ ㅈ (g d b j) | ਕ ਤ ਪ ਚ with **a little** air: less than ਖ, more than ਕ | RR g d b j read ਗ ਦ ਬ ਜ: tolerated (§5.1) |
| ㅋ ㅌ ㅍ ㅊ (k t p ch) | ਖ ਥ ਫ ਛ, strong air | RR k t p read airless (Indian English) → heard as ㄲ ㄸ ㅃ [via hi-ko: Narkar & Staroverov 2023]; some speakers fricate ਫ ਖ ਛ [source: Wikipedia]: ㅍ never ਫ਼, ㅋ never ਖ਼, ㅊ never ਸ਼ |
| ㄲ ㄸ ㅃ ㅉ | ਕ ਤ ਪ ਚ: no air, throat tight | **not doubled** (no ਅੱਧਕ length); between vowels the ੱ of ਪੱਕਾ is fair [inference] |
| ㅅ / ㅆ | ਸ / a tight ਸ; before ㅣ about ਸ਼ | |
| ㄷ ㅌ ㄸ | the ਤ family | **never** ਟ ਠ ਡ: Korean has no retroflex |
| ㄹ (r / l) | one tap ਰ between vowels; ਲ at the end; ㄹㄹ = the long ੱਲ of ਗੱਲਾਂ | not trilled, not ੜ; final ㄹ is not ਰ |
| final ㅇ ng | the ng of ਰੰਗ, without ਗ | 강 ≠ "ਗਾਂਗ" |
| final ㄴ · ㅁ | a full ਨ · ਮ | not a bindi vowel: 산 ≠ ਸਾਂ |
| ㅎ h | light ਹ, **no tone**, often silent between sounds | §5.2 |
| finals ㄱ ㄷ ㅂ | stop, no released air; ㅅ ㅈ ㅊ ㅌ ㅎ → ㄷ (옷 ≈ "ਓਤ") | not "ਓਸ" |

**Script bridge:** Hangul draws mouth shapes, as ਕ ਖ ਗ ਘ ਙ is ordered by mouth position; one **ਬਲਾਕ** = one **ਉਚਾਰਖੰਡ**. Breaks: vowels are full letters, not ਲਗਾਂ-ਮਾਤਰਾਂ; a silent ㅇ holds the place much as ੳ / ਅ / ੲ carry a vowel; the final consonant sits inside the block; there is no inherent vowel.

### 5.4 Reading guide for lesson 1 (ready to paste; `hangul` takes `_waive` for 감사합니다; parts go into `sound-changes` and the three Hangul deck descriptions)

> **ਰੋਮਨ ਕਿਵੇਂ ਪੜ੍ਹੀਏ** — ਇਹ ਅੱਖਰ ਅੰਗਰੇਜ਼ੀ ਪੜ੍ਹਨ ਵਾਲਿਆਂ ਲਈ ਬਣੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਗੱਲਾਂ ਯਾਦ ਰੱਖੋ:
> - **a** ਹਮੇਸ਼ਾ "ਆ"। "ਅ" ਵਰਗਾ ਸਵਰ **eo** ਹੈ: ਮੂੰਹ ਖੁੱਲ੍ਹਾ, ਬੁੱਲ੍ਹ ਗੋਲ ਨਹੀਂ। *seoul* ਵਿੱਚ "ਯੋ" ਨਹੀਂ ਹੈ।
> - **eu**: "ਉ", ਪਰ ਬੁੱਲ੍ਹ ਫੈਲਾ ਕੇ। **ae** ਅਤੇ **e**: ਦੋਵੇਂ "ਏ" — ਕੋਰੀਆਈ ਲੋਕ ਵੀ ਇਹਨਾਂ ਵਿੱਚ ਫ਼ਰਕ ਨਹੀਂ ਕਰਦੇ। **wo** = ਵ + eo।
> - **k, t, p, ch** = ਖ, ਥ, ਫ, ਛ — ਹਥੇਲੀ ਉੱਤੇ ਹਵਾ ਲੱਗੇ। *p* ਕਦੇ ਫ਼ ਨਹੀਂ।
> - **kk, tt, pp, jj** = ਕ, ਤ, ਪ, ਚ — ਬਿਨਾਂ ਹਵਾ, ਗਲਾ ਕੱਸ ਕੇ; ਅੱਧਕ ਵਾਂਗ ਲੰਮੇ ਨਹੀਂ।
> - **g, d, b, j**: ਕ, ਤ, ਪ, ਚ ਵਰਗੇ, ਪਰ ਥੋੜ੍ਹੀ ਜਿਹੀ ਹਵਾ ਨਾਲ — ਖ ਜਿੰਨੀ ਨਹੀਂ। **t, d** ਤ ਵਾਂਗ, ਟ ਵਾਂਗ ਨਹੀਂ।
> - ਕੋਰੀਆਈ ਵਿੱਚ **ਸੁਰ ਨਹੀਂ ਹੁੰਦੀ**: ਹਰ ਬਲਾਕ ਸਿੱਧਾ ਅਤੇ ਬਰਾਬਰ ਬੋਲੋ। **h** ਹਲਕਾ ਹੈ ਜਾਂ ਗ਼ਾਇਬ, ਪਰ ਇਸ ਨਾਲ ਸੁਰ ਨਹੀਂ ਬਦਲਦੀ।
> - **r** ਸਵਰਾਂ ਵਿਚਕਾਰ ਇੱਕ ਹਲਕਾ ਰ; **l** ਅਖ਼ੀਰ ਵਿੱਚ ਸਾਫ਼ ਲ: *mul*। **ng** = "ਰੰਗ" ਦੀ ਅਵਾਜ਼, ਬਿਨਾਂ ਗ। ਅਖ਼ੀਰਲਾ **n** ਪੂਰਾ ਨ ਹੈ, ਨੱਕ ਵਾਲਾ ਸਵਰ ਨਹੀਂ।
> - ਅਖ਼ੀਰ ਵਿੱਚ **k, t, p**: ਮੂੰਹ ਬੰਦ ਕਰਕੇ ਰੁਕੋ, ਹਵਾ ਨਾ ਛੱਡੋ: *bap*। ਆਖ਼ਰੀ ਵਿਅੰਜਨ ਅਗਲੇ ਸਵਰ ਨਾਲ ਜੁੜ ਜਾਂਦਾ ਹੈ: *hangugeo*।
> - ਰੋਮਨ ਬੋਲਣ ਦਾ ਸਹਾਰਾ ਹੈ; ਲਿਖਣਾ ਹੰਗੁਲ ਵਿੱਚ ਹੈ: 감사합니다 = *gamsahamnida*।

`hangul` vowel table: ㅏ ਆ · ㅓ eo (ਅ ਅਤੇ ਔ ਵਿਚਕਾਰ, ਬੁੱਲ੍ਹ ਗੋਲ ਨਹੀਂ) · ㅣ ਈ · ㅗ ਓ · ㅜ ਊ · ㅡ eu (ਉ, ਬੁੱਲ੍ਹ ਫੈਲੇ) · ㅐ / ㅔ ਏ; the English "(uh) (oo) (ee) (bed)" go.

## 6. Fixed phrases (one gloss everywhere)

Copy exactly; add a bracketed context tag only where the English row has one.

| Korean | Punjabi | Korean | Punjabi |
|---|---|---|---|
| 안녕하세요 | ਨਮਸਕਾਰ | 안녕 | ਹੈਲੋ |
| 안녕히 가세요 | ਆਰਾਮ ਨਾਲ ਜਾਓ (ਜਾਣ ਵਾਲੇ ਨੂੰ) | 안녕히 계세요 | ਆਰਾਮ ਨਾਲ ਰਹੋ (ਰੁਕਣ ਵਾਲੇ ਨੂੰ) |
| 처음 뵙겠습니다 | ਪਹਿਲੀ ਮੁਲਾਕਾਤ ਹੈ ਜੀ | 반가워(요) / 반갑습니다 | ਮਿਲ ਕੇ ਖ਼ੁਸ਼ੀ ਹੋਈ |
| 감사합니다 / 고마워요 / 고마워 | ਧੰਨਵਾਦ / ਸ਼ੁਕਰੀਆ / ਥੈਂਕਸ | 죄송합니다 / 미안해요 / 미안해 | ਮਾਫ਼ ਕਰਨਾ ਜੀ / ਮਾਫ਼ ਕਰਨਾ / ਸੌਰੀ |
| 네 / 아니요 | ਹਾਂ ਜੀ / ਨਹੀਂ ਜੀ | 응 / 아니 | ਹਾਂ / ਨਹੀਂ |
| 괜찮아요 | ਕੋਈ ਗੱਲ ਨਹੀਂ / ਠੀਕ ਹੈ | 아니에요 (to thanks) | ਕੋਈ ਗੱਲ ਨਹੀਂ ਜੀ |
| 저기요 | ਸੁਣੋ ਜੀ (ਧਿਆਨ ਖਿੱਚਣ ਲਈ) | 실례합니다 | ਮਾਫ਼ ਕਰਨਾ, ਜ਼ਰਾ… |
| 잠깐만요 / 잠시만요 | ਇੱਕ ਮਿੰਟ / ਜ਼ਰਾ ਰੁਕੋ ਜੀ | 여보세요 | ਹੈਲੋ? (ਫ਼ੋਨ ਉੱਤੇ) |
| 주세요 · N 주세요 | ਦੇ ਦਿਓ (ਮੰਗਣ ਵੇਲੇ) · N ਦੇ ਦਿਓ | V-아/어 주세요 · -아/어 주시겠어요? | V ਦਿਓ (ਬੋਲ ਦਿਓ) · -ਦਿਓਗੇ ਜੀ? |
| 부탁해요 | ਮਿਹਰਬਾਨੀ ਕਰਕੇ (ਬੇਨਤੀ) | 계산해 주세요 | ਬਿੱਲ ਲੈ ਆਓ |
| 좀 | ਜ਼ਰਾ | 혹시 | ਕਿਤੇ (… ਤਾਂ ਨਹੀਂ?) |
| 잘 먹겠습니다 | ਖਾਣੇ ਲਈ ਸ਼ੁਕਰੀਆ (ਖਾਣ ਤੋਂ ਪਹਿਲਾਂ) | 잘 먹었습니다 | ਬਹੁਤ ਸੁਆਦ ਸੀ, ਸ਼ੁਕਰੀਆ (ਖਾਣ ਤੋਂ ਬਾਅਦ) |
| 수고하셨습니다 / -어요 | ਅੱਜ ਦੀ ਮਿਹਨਤ ਲਈ ਸ਼ੁਕਰੀਆ ਜੀ | 수고했어(요) | ਸ਼ਾਬਾਸ਼, ਬਹੁਤ ਮਿਹਨਤ ਕੀਤੀ |
| 수고하세요 | ਕੰਮ ਵਧੀਆ ਚੱਲੇ (ਕੰਮ ਕਰਦੇ ਨੂੰ, ਜਾਂਦੇ ਵੇਲੇ) | 수고 많으셨어요 | ਸਾਰੀ ਮਿਹਨਤ ਲਈ ਸ਼ੁਕਰੀਆ ਜੀ |
| 고생했어 | ਬੜੀ ਖੇਚਲ ਕੀਤੀ, ਸ਼ਾਬਾਸ਼ | 먼저 퇴근하겠습니다 | ਮੈਂ ਪਹਿਲਾਂ ਜਾ ਰਿਹਾ/ਰਹੀ ਹਾਂ ਜੀ |
| 잘 부탁드립니다 (meeting) | ਸਾਥ ਦੀ ਉਮੀਦ ਹੈ ਜੀ | 잘 부탁드립니다 (email) | ਮਿਲ ਕੇ ਕੰਮ ਕਰਨ ਦੀ ਉਡੀਕ ਹੈ ਜੀ |
| 잘 지냈어요? | ਕੀ ਹਾਲ-ਚਾਲ ਹੈ? ਸਭ ਠੀਕ ਰਿਹਾ? | 오랜만이에요 | ਬੜੇ ਦਿਨਾਂ ਬਾਅਦ ਮਿਲੇ |
| 조심히 가(세요) | ਧਿਆਨ ਨਾਲ ਜਾਣਾ | 좋은 하루 보내세요 | ਦਿਨ ਵਧੀਆ ਲੰਘੇ |
| 좋은 아침이에요 | ਸ਼ੁਭ ਸਵੇਰ | 잘 자 | ਚੰਗੀ ਤਰ੍ਹਾਂ ਸੌਂ ਜਾ |
| 콜! / 오케이 콜 | ਪੱਕਾ! / ਠੀਕ ਹੈ, ਪੱਕਾ! | 화이팅 | ਚੱਕ ਦੇ ਫੱਟੇ! |
| 대박 / 대박이다 | ਕਮਾਲ! / ਕਮਾਲ ਹੋ ਗਈ | 진짜? / 헐 | ਸੱਚੀਂ? / ਹੈਂ?! |
| 아이고 · 어떡해 | ਹਾਏ / ਉਫ਼ · ਹੁਣ ਕੀ ਕਰੀਏ | 설마 | ਨਹੀਂ ਹੋ ਸਕਦਾ… |
| 그럼요 / 물론이죠 | ਹਾਂ, ਬਿਲਕੁਲ / ਜ਼ਰੂਰ | 당연하죠 | ਜ਼ਾਹਰ ਹੈ |
| 글쎄요 · 잘 모르겠어요 | ਪਤਾ ਨਹੀਂ… ਸੋਚਣਾ ਪਵੇਗਾ · ਮੈਨੂੰ ਪੱਕਾ ਨਹੀਂ ਪਤਾ | 알겠어요 · ㅋㅋㅋ / ㅠㅠ | ਸਮਝ ਆ ਗਿਆ · ਹਾਹਾਹਾ / ਰੋਣਾ ਆ ਗਿਆ |
| 선생님 · 사장님 | ਟੀਚਰ (ਜਾਂ ਸਰ / ਮੈਡਮ) · ਮਾਲਕ (ਦੁਕਾਨ ਦਾ) | 과장님 / 팀장님 / 대리 | ਮੈਨੇਜਰ / ਟੀਮ ਲੀਡਰ / ਸੀਨੀਅਰ ਮੁਲਾਜ਼ਮ |
| 선배 / 후배 · 기사님 | ਸੀਨੀਅਰ / ਜੂਨੀਅਰ · ਡਰਾਈਵਰ ਜੀ | 오빠·형 / 언니·누나 | ਭਾਜੀ / ਭੈਣ ਜੀ (§4.7) |

콜 = English "call" (accepting a plan), written "ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦ «ਕਾਲ» ਤੋਂ, ਯਾਨੀ ਸੱਦਾ ਮੰਨ ਲੈਣਾ", never in Latin. 대박, 헐, 진짜? and 설마 stay distinct; so do 좋은 하루 보내세요, 좋은 아침이에요 and 안녕하세요.

## 7. Row conventions

### 7.1 Format (spec §4–6)

- Hangul runs set-equal to the English row's; exceptions need `"_waive":["hangul"]` + `_note` (for a body, on its `lessons.jsonl` row). Planned: `hangul` only.
- One ` / ` per dialogue gloss; `___` / `__` unchanged; no `{ }` outside bodies; `q p why hint` ≤ 400 characters, options ≤ 200 and distinct; meanings distinct within a deck (case-insensitive).
- Bodies: same `<h3>` / div / table / `li` structure; tokens unchanged, in order; no `<img> <svg> <script> <style>` or `javascript:`; no English in prose or headers.

### 7.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) first.
- **Level:** ਤੂੰ wording for a 반말 answer, ਤੁਸੀਂ for 요 / -습니다 / -시-; tag whenever `x` or the options hold the same sentence at another level (polite.14 "ਨਹੀਂ, ਕੋਈ ਗੱਲ ਨਹੀਂ (ਆਮ)", rejecting 괜찮아요). Copy scene cues ("ਦੋਸਤ ਨੂੰ ਮੈਸੇਜ:", "ਕਿਸੇ ਵੱਡੇ ਨੂੰ:", "ਰੈਸਟੋਰੈਂਟ ਦੇ ਮਾਲਕ ਨੂੰ ਬੁਲਾਉਂਦੇ ਹੋਏ:"). Never ਤੁਸੀਂ with (ਆਮ), never ਤੂੰ with (ਨਿਮਰ).
- **Tense:** present = habitual -ਦਾ ਹੈ (progressive only if the English is); past = perfective; future = -ਵਾਂਗਾ / -ਏਗਾ (never -ਣ ਵਾਲਾ); have-to = ਮੈਨੂੰ … ਪਵੇਗਾ; want = ਦਿਲ ਕਰਦਾ ਹੈ. Where `x` holds another tense, add **(ਭੂਤਕਾਲ) / (ਵਰਤਮਾਨ) / (ਭਵਿੱਖ)** (past.12 "(ਮੈਂ) ਘਰ ਗਿਆ/ਗਈ", hint ਭੂਤਕਾਲ, rejects 가요).
- "(I)" → "(ਮੈਂ)" + §2.4; method cues stay ((안 ਨਾਲ), (ਅੰਕ ਹੰਗੁਲ ਵਿੱਚ ਲਿਖੋ)); instructions in -ਓ.

### 7.3 Names, places, `@@`, local frame

- **`@@`** = the learner's name (runtime: nickname or 민수); as many `@@` as the English; any name must fit (ਮੈਂ @@ ਹਾਂ · @@ ਜੀ · ਧੰਨਵਾਦ। @@); no gendered verb with `@@` as subject.
- **People:** 민수 ਮਿਨਸੂ · 리사 ਲੀਸਾ · 지은 ਜੀਉਨ · Mike ਮਾਈਕ · Juan ਹੁਆਨ. No Punjabi example name is added.
- **Places:** ਕੋਰੀਆ · ਸਿਓਲ · ਬੁਸਾਨ · ਮਯੋਂਗਦੋਂਗ · ਹੋਂਗਦੇ · ਗੰਗਨਾਮ · ਇੰਚਓਨ · ਹਾਨ ਦਰਿਆ.
- **Other labels:** established Indian spelling first (ਕਿਮਚੀ, ਸੋਜੂ, ਕੇ-ਪੌਪ); else letter by letter: g ਗ · k/kk ਕ · d ਦ · t/tt ਤ · b ਬ · p/pp ਪ · j/jj ਜ · ch ਚ · s/ss ਸ · h ਹ (initial only, else dropped) · n ਨ · m ਮ · ng ੰਗ/ਂਗ · r ਰ · l ਲ · a ਾ · eo/o ਓ · u ਊ · eu ਉ · i ਈ · ae/e ਏ · y ਯ · w ਵ. **Never ਘ ਝ ਢ ਧ ਭ in a label.**
- **Countries:** base `Intl.DisplayNames(['pa'],{type:'region'})` (tested: ਭਾਰਤ, ਪਾਕਿਸਤਾਨ, ਕੈਨੇਡਾ, ਜਪਾਨ, ਚੀਨ, ਜਰਮਨੀ…); overrides US → **ਅਮਰੀਕਾ** (Intl: ਸੰਯੁਕਤ ਰਾਜ (ਅਮਰੀਕਾ)), KR → ਦੱਖਣੀ ਕੋਰੀਆ in the deck and ਕੋਰੀਆ elsewhere, GB → ਯੂ.ਕੇ. [§10 Q8]. Rows are blanks ("ਮੈਂ ___ ਤੋਂ ਹਾਂ"); never fill in India.
- **Local frame:** rupees (₹), no exchange rates; KakaoTalk ≈ ਵਟਸਐਪ; T-money ≈ "ਦਿੱਲੀ ਮੈਟਰੋ ਕਾਰਡ ਵਰਗਾ"; payments ≈ ਯੂਪੀਆਈ; taxi ≈ ਆਟੋ / ਕੈਬ.
- **KakaoTalk "1"** counts the people who have **not** read yet; 읽씹 = the 1 is gone and no reply comes. The English `src` has it backwards: write it correctly (bridge: ਵਟਸਐਪ blue ticks, no reply).

## 8. Per-lesson notes

**B** = build on; **R** = an English-built passage to rewrite, not translate.

| # | id | Notes |
|---|---|---|
| 1 | `hangul` | B: ਬਲਾਕ ≈ ਉਚਾਰਖੰਡ; ਕ ਖ ਗ ਘ ਙ by mouth; §5.4 guide. R: vowel glosses; keep "tap a letter"; `_waive` |
| 2 | `polite` | B: ਤੁਸੀਂ / ਤੂੰ ≈ 요 / 반말; four breaks (§4.6); 요 ≠ ਜੀ; ਧੰਨਵਾਦ / ਸ਼ੁਕਰੀਆ / ਥੈਂਕਸ = three levels; headers ਰਸਮੀ / ਨਿਮਰ / ਆਮ |
| 3 | `meet` | B: ਨਮਸਕਾਰ at any hour; age sets address in both cultures; Punjabi has no "who leaves" goodbye. R: 이에요 / 예요 with Mike / Juan; country tip with `___`; header ਰਸਮੀ / ਸਤਿਕਾਰ ਵਾਲਾ |
| 4 | `sound-changes` | B: silent medial ਹ ≈ silent ㅎ, minus the tone (§5.2). R: drop the drill line (§3.2); keep the ✗ / ✓ list in RR |
| 5 | `nouns` | B: no articles or gender. Traps: 그 vs 저 (ਉਹ covers both); 들 optional |
| 6 | `isseoyo` | R: the "English 'is'" opening → §4.3 |
| 7 | `pronouns-questions` | B: question words in place; ਕੀ's two jobs; ਸਾਡੇ ਮੰਮੀ ≈ 우리 엄마 |
| 8 | `verbbasics` | B: §4.4. R: the "to …" framing |
| 9 | `verbs` | B: one form = ਜਾਂਦਾ ਹਾਂ + ਜਾ ਰਿਹਾ ਹਾਂ + question |
| 10 | `past` | B: one past, no ਨੇ, no gender. R: "I ate / have eaten" → ਖਾਧਾ / ਖਾ ਲਿਆ / ਖਾਧਾ ਹੈ |
| 11 | `future` | B: -ਵਾਂਗਾ; presumptive ਹੋਵੇਗਾ = "probably". R: "kkeoyeyo" → "ਕੱਸਿਆ ਕ" |
| 12 | `sov` | B: SOV in both; 을/를 vs ਨੂੰ. R: every "English is SVO" line |
| 13 | `particles` | B: ਪੰਜਾਬੀ ਦਾ ਇੱਕੋ ਵਿੱਚ = 에 / 에서; ਤੋਂ = from. R: "English 'at'" |
| 14 | `negation` | B: ਨਹੀਂ before the verb = 안; ਨਹੀਂ ਹੈ → 없어요 / 아니에요 |
| 15 | `do-man` | B: §4.2 |
| 16 | `sentences` | B: same frame as Punjabi; Korean drops ਹੈ. R: the "English order" mistakes |
| 17 | `want-like` | B: §4.5; ਦਿਲ ਕਰਦਾ ਹੈ |
| 18 | `numbers` | B: ਲੱਖ / ਕਰੋੜ, ਸਾਢੇ (§4.8). R: "like English digits" → "ਦਸ ਸ਼ਬਦ, ਇੱਕ ਨਿਯਮ" |
| 19 | `food` | B: counters (§4.8); meal phrases (§6) |
| 20 | `getting-around` | B: T-money ≈ metro card; ਆਟੋ / ਕੈਬ; exit numbers |
| 21 | `titles` | B: §4.6–4.7; ਓਏ … ≈ 아/야. R: "(you female / male)" → "ਜੇ ਤੁਸੀਂ ਕੁੜੀ / ਮੁੰਡਾ ਹੋ" |
| 22 | `plans` | B: ਚਲੋ ਖਾਈਏ ≈ 먹자; ਚੱਲੀਏ? ≈ -(으)ㄹ까요?; header ਸਤਿਕਾਰ ਵਾਲਾ |
| 23 | `texting` | B: ㅋㅋ ≈ ਹਾਹਾ; ਵਟਸਐਪ; 읽씹 corrected (§7.3) |
| 24 | `counters` | B: number before the noun in Punjabi, after it in Korean; ਜਣੇ ≈ 명 |
| 25 | `joining` | B: -ਕੇ; reason first with ਇਸ ਲਈ. R: "and / but / so" → ਅਤੇ / ਪਰ / ਇਸ ਲਈ |
| 26 | `story` | B: the story words (§4.8) |
| 27 | `noun-modifiers` | B: the ਵਾਲਾ phrase; agreement vs ending. R: "no that / which" → "ਕੋਰੀਆਈ ਵਿੱਚ 'ਜੋ' ਨਹੀਂ" |
| 28 | `compare` | B: ਤੋਂ = 보다, same place |
| 29 | `cant` | B: ਨਹੀਂ ਕਰਾਂਗਾ / ਨਹੀਂ ਕਰ ਸਕਦਾ ≈ 안 / 못; ਮੈਥੋਂ … ਨਹੀਂ ਹੁੰਦਾ; spicy food is an easy win |
| 30 | `have-to` | B: ਮੈਨੂੰ … ਪਵੇਗਾ; ਲੋੜ ਨਹੀਂ = 안 가도 돼요. R: cross-reference → ਪਾਠ 32, «ਨਿਮਰਤਾ ਨਾਲ ਮੰਗਣਾ» |
| 31 | `honorific` | B: respect plural = -시-; ਜੀ for the listener vs respect plural for a third person; 드세요 = ਖਾਓ ਜੀ |
| 32 | `requests` | B: 좀 = ਜ਼ਰਾ; 혹시 = ਕਿਤੇ; -ਦਿਓਗੇ ਜੀ? ≈ 주시겠어요?; "ਮੈਂ ਬੈਠ ਜਾਵਾਂ?" ≈ -아/어도 돼요? |
| 33 | `office` | B: a title alone ≈ "ਸਰ"; the 수고 family (§6); 회식 ≈ ਦਫ਼ਤਰ ਦੀ ਪਾਰਟੀ |

## 9. What not to do

No Korean beyond the source row without `_waive`, and never edit `f` `id` `k` `src` or a Korean field · no Latin except RR · no invented etymologies, hanja or character origins (살 / ਸਾਲ is a labelled coincidence) · no Gurmukhi word respellings, English-sound comparisons, tonal or ਗ ਦ ਬ ਜ anchors, or tone on Korean · no ਤੂੰ outside 반말 glosses, no added ਜੀ, no ਕਿਰਪਾ ਕਰਕੇ with plain 주세요, no silent gender choice or spaced gender slash · no religious terms or Hindi forms · hours native, minutes / money / dates Sino-Korean · KakaoTalk's "1" = not yet read · never name the Read tab, a trainer or a drill; never call 은/는 "ਤਾਂ" or 을/를 "ਨੂੰ".

## 10. Unverified, and questions for a native reviewer

**Unverified:** all idioms (§2.4, §6); all stop evidence (Hindi speakers [via hi-ko]); ㄲ ≈ ੱ; ਨਮਸਕਾਰ as neutral; terms not in the dictionary (ਰਸਮੀ, ਸਾਦੇ / ਹਵਾ ਵਾਲੇ / ਕੱਸੇ ਹੋਏ, ਵਿਸਮਕ, ਸੰਬੰਧਕ, ਵਿਸ਼ਾ / ਕਰਤਾ / ਕਰਮ ਪਾਰਟੀਕਲ).

**Ask a Punjabi speaker** ("OK" or the natural version):
1. Is **ਨਮਸਕਾਰ** a religiously neutral, natural gloss for 안녕하세요 in an app, or is ਹੈਲੋ safer?
2. 반말 glossed with **ਤੂੰ** (ਕੀ ਕਰ ਰਿਹਾ/ਰਹੀ ਹੈਂ?, ਖਾ ਲੈ): natural for friend and partner lines, or too rough on screen?
3. Do the ਜੀ rules read naturally: 네 = ਹਾਂ ਜੀ, staff 봉투 필요하세요? = ਲਿਫ਼ਾਫ਼ਾ ਚਾਹੀਦਾ ਹੈ ਜੀ?, but plain 앉아요 = ਬੈਠੋ and 안녕히 가세요 bare?
4. ਆਰਾਮ ਨਾਲ ਜਾਓ / ਰਹੋ; 수고하세요 = ਕੰਮ ਵਧੀਆ ਚੱਲੇ; 잘 부탁드립니다 = ਸਾਥ ਦੀ ਉਮੀਦ ਹੈ ਜੀ; 처음 뵙겠습니다 = ਪਹਿਲੀ ਮੁਲਾਕਾਤ ਹੈ ਜੀ?
5. ㅓ "between ਅ and ਔ, lips not rounded"; plain stops "ਕ with a little air"; is the no-tone warning clear?
6. The neutral rewordings ਮੇਰਾ … ਦਿਲ ਕਰਦਾ ਹੈ, ਮੈਨੂੰ … ਪਵੇਗਾ, ਮੈਥੋਂ … ਨਹੀਂ ਖਾਧਾ ਜਾਂਦਾ, and the pair ਗਿਆ/ਗਈ?
7. Deck labels (ਜੋਸ਼ ਅਤੇ ਟੌਹਰ, ਵੱਧ ਵਰਤੇ …, ਡਾਕਟਰ ਅਤੇ ਕੈਮਿਸਟ) and terms ਸਾਦੇ / ਹਵਾ ਵਾਲੇ / ਕੱਸੇ ਹੋਏ, ਰਸਮੀ?
8. ਯੂ.ਕੇ. or ਬਰਤਾਨੀਆ; ਕਿਤੇ for 혹시; ਚੱਕ ਦੇ ਫੱਟੇ for 화이팅?

## Sources (opened 2026-11-23 unless marked)

- Wikipedia, [*Punjabi language*](https://en.wikipedia.org/wiki/Punjabi_language): tones, stops, vowels, fricated aspirates.
- [Fraser 2024, York University MRP](https://yorkspace.library.yorku.ca/items/846fdae8-f6f5-4511-8c99-5234bf6dbc8f) on non-native Korean stops: opened; participants' first languages not given, so unused.
- Via hi-ko, not reopened: Ngaihte & Holliday 2019; Ahn 2009; Park & Narang 2019; Narkar & Staroverov 2023; Wikipedia, *Korean phonology*. Via en-pa §2.4: Wikipedia, *Sat Sri Akaal*.
- Local: `docs/HALVES-SPEC.md`; `docs/profiles/{hi-ko,en-pa}.md`; `docs/briefs/x-ko-{profile,writer,topup}.md`; `tools/i18n/pa/{NOTES.md,ui.json,roadmap.json}`; `tools/halves/native/{en,tl,zh}/ko/`; `tools/halves/target/ko/`.
