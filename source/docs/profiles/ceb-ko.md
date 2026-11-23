# Cebuano (Bisaya) speakers learning Korean: pair profile

Course `ceb-ko`: Korean for speakers of Cebuano (Bisaya), assembled from the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards, frozen v1, see `docs/HALVES-SPEC.md`) and a native half `tools/halves/native/ceb/ko/` written in Cebuano. This profile is the brief the Cebuano writers follow. It decides the house rules for the native half, says what a Bisaya speaker already brings, ranks the traps, gives the reading guide for the romanization, and lists, lesson by lesson, what must be rewritten rather than translated.

**Evidence tags** (as in `docs/profiles/en-es.md`).
- **[research-backed]**: an empirical study opened for this profile. The sample is named. **(Filipino L1)** means the study's learners are "Filipino" or Tagalog speakers, **not** Cebuano speakers; nothing found studies Cebuano speakers learning Korean.
- **[curriculum convention]**: what syllabuses, dictionaries, spelling guides, schools and courses do.
- **[practitioner opinion]**: a teacher's, journalist's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning. **Every Cebuano sentence written in this profile is [inference]**: its author is not a Cebuano speaker, and the app's earlier Cebuano profile measured its author's Cebuano as weak (`docs/profiles/en-ceb.md` §6, §11). §10 lists what the Bisaya-speaking friend must check first.

Untagged rules in §3, §6 to §9 are design decisions, not findings.

**How little is known.** No study of Cebuano speakers learning Korean was found. A UP Korean-language teacher calls pronunciation "quite difficult" for Filipino students, who still tend to be "more sensitive to sounds" than monolingual English speakers because they already know several Philippine languages ([UP Department of Linguistics news, de Chavez](https://linguistics.upd.edu.ph/news/de-chavez-on-why-korean-is-a-super-hard-language/)) [practitioner opinion]. The closest evidence is one error analysis of written Korean by 16 UP Diliman students whose L1 is given only as "Filipino" (Manrique 2022), and one acoustic study of 14 Filipina marriage migrants in Korea (Jo, Kim & Kim 2008). Two large L2 Korean pronunciation studies that were opened (Yoo & Kang 2018; the arXiv five-L1 study, 2023) **contain no Filipino learners at all**. Most of §4 and §5 is therefore contrastive reasoning from Cebuano grammar sources, marked [inference].

## 1. Summary

1. **Explanations:** everyday Cebu-standard Cebuano (the register of a good teacher in Cebu City), spelled by the app's house rules from `en-ceb.md` §2.2 (KWF 2022: *u* early / *o* last, *og* = marker, *ug* = "and", *mo- / ni-*, no apostrophes, no accents); no Tagalog, never *po*.
2. **One house rule for terms:** grammar terms are the **English terms Philippine schooling uses** (*noun, verb, particle, subject, object, topic marker, ending, honorific, counter*), from a closed list (§3.4), embedded in Cebuano sentences; no Tagalog grammar terms (*pangngalan, pandiwa*) and no invented Cebuano ones. No other English beyond the glossary and the app's tab names.
3. **Strongest bridges (§4):** *naa / wala* = 있어요 / 없어요 (exist, be at, have); zero copula vs *naa* = 이에요 vs 있어요; *kini / kana / kadto* = 이 / 그 / 저; Cebuano already picks forms by "ends in a vowel or not" (*dako-ng*, *Unsa-y*), which is the 은/는, 이/가, 을/를 rule; *sab* = 도, *lang* = 만; *pinaka-* = 제일, *mas … kaysa sa* = 더 … 보다; numbers in two systems.
4. **Strongest traps (§5), ranked:** aspirated vs tense vs plain stops (research-backed, Filipino L1); ㅗ/ㅜ and ㅔ/ㅣ merged by Cebuano's *o/u*, *e/i* habit and ㅓ misread (partly research-backed); particles **after** the noun where Cebuano markers come **before**; *sa* covering both 에 and 에서 (research-backed, Filipino L1); verb-last order and question words left in place; politeness built into every verb; hours and age in **native** Korean numbers where Cebuano uses Spanish ones.
5. **Romanization:** the Korean half prints Revised Romanization; §6 gives a full Cebuano reading guide (one vowel for *eo, eu, ae*; no glottal stop and no stress; *j* = *dy* of *dyip*; *k t p ch* with a puff; *kk tt pp* tight; final *l* never *r*).
6. **Glosses:** natural Cebuano, no *po*, no added titles; politeness is shown only by the English half's own tags, written **(formal) (polite) (casual) (honorific)**.
7. **Localisation:** keep "I'm from the US" glosses exact; the lead adds 필리핀에서 왔어요 / 세부에서 왔어요 to the built-in course before export (§9). Pair-layer lesson and trap deck are proposals that need a spec change (§8).
8. **Confidence:** low to moderate. Two Filipino-L1 studies, no Cebuano-L1 study; 20 quick review questions for the friend in §10.

## 2. Learners: who, why, what first

### 2.1 Who learns Korean from Cebuano

- **Workers bound for Korea under the Employment Permit System (EPS).** In 2015 the Philippines held 13.98% of Korea's new-worker quota for manufacturing (about 4,600 positions; 12.71% in 2014, 9.86% in 2013) ([Rappler 2015](https://www.rappler.com/nation/87929-ph-south-korea-quota-manufacturing-workers)) [research-backed: official figures reported by the press]. Entry continued after the pandemic: 251 EPS workers arrived in December 2021 alone ([DFA 2021](https://dfa.gov.ph/dfa-news/news-from-our-foreign-service-postsupdate/29964-251-filipino-workers-under-rok-s-labor-migration-program-enter-s-korea)). EPS applicants take a Korean test, the EPS-TOPIK [unverified: widely reported, but no official page could be opened; format unknown here, §11]. How many applicants are Cebuano speakers is unknown [inference: Cebuano had 19.7 million native speakers in 2010 ([Wikipedia, *Cebuano language*, IPFS mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Cebuano_language)), so a large share is likely].
- **K-drama and K-pop fans.** A 2025 focus-group study of Filipino Hallyu fans found that "most rely on informal methods such as peer discussions, digital resources, and incidental exposure", and that "most do not consider their skills sufficient for practical communication" ([Leon, Caugma & Dreisbach 2025](https://periodical.uthm.edu.my/index.php/dils/article/view/20069), abstract only; sample size not given) [research-backed (Filipino L1), abstract only]. Fans arrive knowing words (오빠, 사랑해, 대박) and not the system.
- **School and university students.** DepEd's Special Program in Foreign Language taught Korean in 69 public high schools to 4,810 learners in 13 regions in SY 2024–2025, with 168 teachers trained; the partnership with Korea was renewed in March 2026 ([Manila Bulletin 2026](https://mb.com.ph/2026/03/04/deped-renews-partnership-with-south-korea-to-expand-korean-language-program-in-public-high-schools)). Whether any of those schools are in Central Visayas or Mindanao is not stated. In Cebu, a King Sejong Institute (run through Wonkwang Health Science University) has taught Korean since 2013 ([Cebu Daily News 2015](https://cebudailynews.inquirer.net/?p=74866)), and a 2008 Cebu IT Park course targeted students, teachers, workers going to Korea and tourism staff, at a time when Cebu had an estimated 10,000 Korean residents ([Philstar 2008](https://philstar.com/cebu-business/2008/11/01/411656/korean-learning-program-seen-bare-biz-prospects)) [practitioner opinion: press reports].
- **Spouses.** Filipina marriage migrants in Korea were the sample of the one Filipino phonetics study found (14 women, mean age 31.6) ([Jo, Kim & Kim 2008](https://koreascience.kr/article/JAKO200833338919695.pdf)). The Filipino community in Korea was about 63,000 in 2015 ([Wikipedia, *Filipinos in South Korea*](https://en.wikipedia.org/wiki/Filipinos_in_South_Korea)); no breakdown by visa or home region was found.
- **Workers in Cebu who serve Koreans** (tourism, diving, English-teaching academies, call centres) [inference from the Philstar report; no data].
- **This course's first learner** is a Bisaya-speaking friend of the owner; his reason for learning is unknown (question 1 in §10).

### 2.2 What they need first [inference]

1. **Reading Hangul and the romanization correctly** from day one: the course prints romanization under every line, and a Cebuano reader misreads it in predictable ways (§6).
2. **The 요 default and the respect system**, because Cebuano shows respect with titles and tone, not grammar (§4.8). A Bisaya speaker who uses 반말 with an older co-worker or supervisor is rude without knowing it.
3. **있어요 / 없어요, 주세요, numbers, counters and money**: the survival core for a worker or traveller. Cebuano gives strong bridges for all of them (§4).
4. **Particles placed after the noun**: the one structural habit Cebuano does not give.
5. For EPS-bound learners, the workplace vocabulary EPS-TOPIK tests (safety, tools, factory instructions) is **not** in this 33-lesson course; §9 lists it as a gap the lead may fill later [inference: the test content was not verified].

### 2.3 Bridge languages and the house rule for terms

**Facts.**
- English has been a medium of instruction since 1901; for technical subjects (nursing, medicine, computing, mathematics) it is the preferred medium of textbooks ([Wikipedia, *Philippine English*](https://en.wikipedia.org/wiki/Philippine_English)) [curriculum convention]. Since RA 12027 (October 2024), Filipino and English, not the mother tongue, are the media of instruction from Kindergarten to Grade 3, with regional languages as supplementary media ([Cebu Daily News 2024](https://cebudailynews.inquirer.net/600005/use-of-mother-tongue-as-medium-of-instruction-ends/amp)). So every Bisaya speaker schooled in the Philippines has met grammar in English, and most also in Filipino.
- Mixing English into Bisaya ("Bislish") is common among educated younger speakers ([Wikipedia, *Cebuano language*](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Cebuano_language); [Wikiwand, *Bislish*](https://www.wikiwand.com/en/Bislish), example *Tired na jud ko my friend, how far pa house nimo?*). In role-plays by 80 first-year students at Cebu Technological University (Argao), switching **inside** the sentence was the dominant type (for example 106 declaratives, mostly intrasentential) ([Sales 2022](https://journal.unilak.ac.id/index.php/REILA/article/download/7559/3877/34193)) [research-backed, small qualitative sample].
- Tagalog is a sensitive bridge in Cebu. A 2026 SunStar Cebu column objects to young Cebuanos adding *po*, "the marker of respect. In Tagalog. Not Cebuano", and says Cebuano and English are enough "to survive and even flourish" in Cebu ([Briones, SunStar 2026](https://www.sunstar.com.ph/cebu/briones-linguistic-appropriation)) [practitioner opinion]. In Davao, by contrast, younger speakers mix in more Tagalog ("Bisalog") ([Wikipedia, *Bisalog*](https://en.wikipedia.org/wiki/Bisalog)).

**House rule (one rule, no exceptions):**
- **Prose is Cebuano.** Every explanation, `why`, `hint`, gloss, card meaning and note is written in Cebuano sentences.
- **Grammar terms are English, from the closed list in §3.4**, written in English spelling, used as nouns inside Cebuano (*ang verb*, *sa particle*, *mga ending*). They take Cebuano markers, never Cebuano affixes (*gi-particle* ✗).
- **No other English**, except the app's own tab and button names (§3.5) and established loans Cebuanos write in Cebuano spelling (*selpon*, *dyip*). No English clauses, no English discourse words (*so, then, actually*).
- **No Tagalog** words or grammar terms. Tagalog appears only where a comparison truly helps (once, in `polite`, for *po*; §4.8), labelled "sa Tagalog".

Why [inference]: the English terms are the ones the learner was taught; Cebuano grammar terms (*tudling-pulong*, *pulong-ngalan*) exist in KWF-style writing but are not the words a Cebu teacher uses in class; Tagalog terms (*pangngalan*) would be understood but resented by some (Briones); and a closed list keeps 1,000+ rows consistent, which the es-ko review had to enforce afterwards (`tools/halves/native/es/ko/REVIEW.md`, "Glossary enforced").

## 3. Variety, register, spelling and terms of the Cebuano text

### 3.1 Variety and register

- **Variety:** everyday Cebuano of Cebu City, as in `en-ceb.md` §2.1 [curriculum convention there]. Not the literary "deep" Bisaya (*lalom nga Binisaya*), not street slang, not Davao Bisalog.
- **Register:** a friendly teacher talking to an adult. Address the learner with ***ikaw / ka*** (singular; respect in Cebuano comes from titles, not a pronoun, `en-ceb.md` §2.5). Commands use the plain command form (*Basaha, Ingna, Timan-i*), softened with *lang* or *sa* where a teacher would (*Basaha lang ni*), never with *po*.
- **Code-switching:** limited to the §3.4 glossary terms and the §3.5 interface names. That is less mixing than real Cebu speech, on purpose: a learner must be able to tell which words are terms.
- **Spelling:** the app's Cebuano house rules, reused unchanged from `en-ceb.md` §2.2 (which follows KWF 2022, *Gabay sa Ortograpiyang Sinugbuánong Binisayâ*, and the *Bisaya* magazine rules) [curriculum convention]:
  - *u* in first and middle syllables, *o* in the last (*tubig, buntag, dako, ugma*); affixed words keep the root's vowels (*himoon*).
  - *i* in native words except *babaye, pangadye, dayeg, sikwate*; *e* in loans (*kape, Lunes*).
  - ***og*** marks an indefinite object (*Mopalit ko og saging*); ***ug*** is "and". Never *ug* as the marker.
  - ***mo-*** (future form), ***ni-*** (past form); never *mu-*.
  - ***gyud*** (the deliberate exception), ***sab*** for "also" (*pod / sad* in notes), ***dili***, ***wala***.
  - Hyphen where the glottal stop falls (*kan-on, kanus-a, Taga-Cebu*) and between repeated halves (*hinay-hinay*).
  - Short forms joined, **no apostrophes** (*unsay, naay, walay, Nong, Day*). **No accent marks.**
  - *Pilipinas* (the country), *Pilipino*, *Koreano / Koreana* (a Korean person), *Korea*, *Seoul*, *Sugbo* or *Cebu* (both current; use *Cebu* in prose, matching the Korean 세부).
- **The language name** in prose: *Korean* (the glossary term), as in *Nagtuon ko og Korean*. The course name in `course.json` is proposed as `"name": "Korean"` [inference; Cebuano also says *Kinoreano* or *pinulongang Koreano*; question 2 in §10].

### 3.2 Glosses of Korean lines: one policy

- Glosses are natural, short Cebuano for what the Korean line means in context.
- **Never *po*.** Never add a title (*Sir, Ma'am, Nong, Nang*) that the Korean line does not contain.
- **Politeness is carried only by the tag** the English half already has, translated as follows and nothing else: **(formal)** for -습니다, **(polite)** for 요-form, **(casual)** for 반말, **(honorific)** for -시- and the special verbs. A gloss has a tag exactly where the English gloss has one.
- Korean lines that address the listener with -세요 or 주세요 are glossed with the Cebuano command form plus *palihug* where the English has "please" (*Lingkod, palihug* for 앉으세요 in a seating context) [inference]. *Palihug* never replaces the tag.
- Names, places and "the US" stay as they are in the English gloss (§9).

### 3.3 Ten sample sentences of explanation prose (all [inference], for the native check)

1. Sa Korean, ang verb kanunay anaa sa katapusan sa sentence.
2. Ang object marker 을/를 motapot sa luyo sa noun, dili sa atubangan. Sa Bisaya, ang marker mag-una (*sa balay*); sa Korean, ang particle mosunod (집에).
3. Kon dili ka sigurado, gamita ang 요. Mas maayo nga matinahuron kaayo kaysa bastos.
4. Ang 이/가 dili pareho sa *ang*. Ang *ang* sa Bisaya mausab depende sa verb; ang 이/가 dili.
5. Sama sa *kini, kana, kadto*: ang 이 duol nako, ang 그 duol nimo, ang 저 layo sa atong duha.
6. Ang 있어요 pareho sa *naa*: naa sa usa ka lugar, ug naa kay butang.
7. Ayaw ibutang ang 뭐 sa sinugdanan. Sa Bisaya moingon ta *Unsa ni?*, pero sa Korean 이거 뭐예요?
8. Ang ㅋ, ㅌ, ㅍ, ㅊ adunay kusog nga hangin. Ibutang ang imong kamot atubangan sa imong baba: kinahanglan mabati nimo ang hangin.
9. Ang 오빠 gamiton lang sa babaye para sa lalaki nga mas magulang. Kon lalaki ka, 형 ang imong gamiton.
10. Maayo kaayo! Balika kini nga mga card ugma aron dili nimo makalimtan.

(The Hangul in these samples is illustrative. In real rows, the Hangul set must equal the English row's, §3.6.)

**Spelling checks on the profile's own Cebuano.** *kon* ("if", "when") follows the house *u* early / *o* last rule; *kung* is the common chat spelling and also the Tagalog one, so the course writes *kon* (question 3 in §10). These words are spelled as commonly printed but may conflict with the "affixed words keep the root's vowels" rule (KWF §7.5, via `en-ceb.md` §2.2), and need the native or KWF check before writers copy them: *katapusan* (root *tapos*), *gihisgutan* (root *hisgot*), *sinugdanan*, *kapehan*, *pagkahuman* (root *human*, unaffected), *eskuwelahan*. Repeated words follow the repeat-hyphen rule (*hinay-hinay*); a lexicalised doubling such as *duhaduha* ("doubt") is avoided in samples until checked.

### 3.4 Glossary: one term per idea (closed list)

| Idea | Term to use, exactly | Do not use | Cebuano gloss at first use (once per lesson at most) |
|---|---|---|---|
| Korean 은/는, 이/가, 을/를, 에, 도… | **particle** | marker, partikulo, pang-ugnay | gamay nga pulong nga motapot sa luyo sa noun |
| Cebuano *ang, sa, og, si, ni, kang* | **marker** | particle | (only when comparing with Bisaya) |
| 은/는 | **topic marker**; "the topic" means **only** the 은/는 noun | "topic" for the Cebuano *ang* noun | ang gihisgutan: "kon bahin sa…" |
| 이/가 | **subject marker** | | |
| 을/를 | **object marker** | | |
| the doer of a verb | **subject** | | kinsa ang nagbuhat |
| the thing acted on | **object** | | ang butang nga gibuhatan |
| the Cebuano *ang* noun | **"ang pulong nga naay *ang*"** (descriptive, no term) | topic, subject, focus | |
| noun / verb | **noun / verb** | pangngalan, pandiwa, nombre, berbo | |
| 크다, 좋다 (Korean adjectives) | **describing verb** | adjective (allowed once: "sa English, adjective") | verb nga naghulagway |
| 먹다, 가다 | **action verb** | | |
| 공부하다 | **하다 verb** | | |
| 가 in 가다 | **stem** | root (keep "root" for Bisaya *palit*) | |
| 가다 | **dictionary form** | infinitive | |
| -아요, -았어요, -고 | **ending** | suffix, hulapi | |
| 가요 | **요-form** | | |
| politeness levels | **formal** (-습니다), **polite** (요-form), **casual** (반말) | informal, bastos (for 반말) | |
| -(으)시-, 드시다 | **honorific** | po-form, galang | |
| politeness in general | **politeness level** | | |
| 개, 명, 잔 | **counter** | classifier | |
| 하나, 둘 / 일, 이 | **native numbers / Sino-Korean numbers** | Chinese numbers, "sino" alone | |
| Cebuano numbers | **numerong Bisaya** (*usa, duha*) / **numerong Kinatsila** (*uno, dos*) | Spanish numbers | |
| ㅏ / ㄱ | **vowel / consonant** | bokal, patinig, katinig | |
| 받침 | **final consonant (받침, batchim)** | | |
| one Hangul syllable | **block** | pantig | |
| syllable (sound unit) | **syllable** | pantig | |
| ㅋ ㅌ ㅍ ㅊ / ㄲ ㄸ ㅃ ㅆ ㅉ / ㄱ ㄷ ㅂ ㅈ | **aspirated consonant / tense consonant / plain consonant** (always with "consonant", so "tense" never stands alone) | | may buga sa hangin / hugot, walay hangin / humok |
| a stem ending in a vowel / a consonant | **vowel stem / consonant stem** | | stem nga mohuman sa vowel / sa consonant |
| 어제, 내일, 주말에 | **time word** | | |
| 저, 나, 우리, 그 사람 | **pronoun** | panghalip | |
| 그리고, 그래서, 먼저 | **connector** | conjunction | |
| 좀, 혹시 | **softener** | | pulong nga mopahumok sa hangyo |
| 들 (Korean); *mga* (Bisaya) | **plural** | | |
| 의, owner first (제 집) | **possessive** | | |
| rising / falling voice | **intonation** | | pagsaka o pagkanaog sa tingog |
| order of words | **word order** | | |
| the syllable said stronger | **stress** | diin (allowed as the gloss) | |
| *-* in *kan-on*, *Kii-yeyo* | **hyphen** | gitling | |
| 연음 | **linking** | liaison | (a kind of sound change) |
| 비음화 | **nasal sound change** | assimilation | |
| the Latin line under Korean | **romanization** | | |
| 연음, 비음화… | **sound change** | | |
| sentence | **sentence** | tudling-pulong, pangungusap | |
| 뭐, 어디 | **question word** | | |
| tenses | **past / present / future**; "tense" only in the fixed phrases **past tense, present tense** (lesson titles 9 and 10) | "tense" alone | |
| 안, 못, 없어요 | **negative** | | |
| glottal stop (Cebuano *bata*, *kan-on*) | **glottal stop** | impit | hunong sa tutunlan |
| Cebuano *nga / -ng* | **linker** | pang-angay | |
| 씨, 님, 오빠; *kuya, Manong* | **title** | honorific (for these) | |
| 커피, 버스 | **loanword** | | pulong nga gihulam |

### 3.5 Interface names

The app has no Cebuano interface pack (spec §8.2: `setI18n()` sets `I18N = null` for `ceb`), so the learner sees the English interface. Prose names tabs and buttons **in English, capitalised, exactly as on screen**: Today, Lessons, Practice, Review, Progress (the main navigation links in `src/app.html`: `#today`, `#lessons`, `#practice`, `#review`, `#progress`); card, deck. The "Read" tab is an advanced link (`data-adv="nav"`) that holds the drills, which this course does not have, so prose never names it. If the lead later adds a `ui.json` map, writers update these names in one pass. Never send the learner to a trainer or drill (all `features` are false, spec §7): the English `sound-changes` line "open Read and try the 🔀 Sound changes drill" and the `hangul` line "Tap a letter to replay" are dropped or replaced (the `hangul` stroke cells do replay when tapped, spec §8.1, so a Cebuano line saying so may stay once the lead confirms the cells render).

### 3.6 Constraints from the halves format that shape the writing

- **Hangul set-equality** (spec §6): every native string must contain exactly the English string's set of Hangul runs. Writers cannot add Korean examples. A lesson that genuinely needs extra Hangul (the reading guide in `hangul`; a localised example in `meet`) carries `"_waive":["hangul"]` and a `_note` on its `lessons.jsonl` title row, as the es half did for `hangul` (extra ㄹ).
  - The English `hangul` body contains only ㄱ ㄴ ㄷ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ, the ten basic vowels, ㅐ ㅔ, 강 and 받침. The §6 guide uses ㄹ and the tense letters, so **`hangul` needs a waiver**. The `sound-changes` body adds ㄹ but no tense letters: write that part of the guide with Latin letters only, or waive it too.
  - **Set-equality works both ways:** a rewrite may not drop the English row's Hangul either. When a passage is rebuilt on Bisaya (`isseoyo`, `numbers`, `sov`), every Korean word and every ✗/✓ mistake example of the English body must still appear. The Korean in this profile's bridge tables (§4.4 학생이 아니에요, §4.10 커피가 뜨거워요, and similar) is for the writers' understanding; it goes into a lesson body only if that body's English already has the same Hangul runs, or under a waiver.
- **Deck labels** are progress keys (the es review changed none of its 43). Writers translate them once, keep them unique and never "My phrases", and must not start a label with the English word "Hangul" or "Pronunciation" (README rule 4): write *Mga vowel (Hangul)*, not *Hangul vowels*. Deck labels are names, not grammar prose, so the §2.3 term rule does not force English there.
- Dialogue glosses keep the single ` / `; blanks `__` stay; no braces in glosses; `q p why hint` ≤ 400 characters.
- In lesson bodies never write a space + `on` + letters + `=`. In Cebuano this bites with words like *ong* or *onse* followed by `=`: write *onse: 11*, not *onse = 11*.

## 4. What a Cebuano speaker already knows

Each item says where the bridge holds, where it misleads, and how the course uses it. Cebuano facts are from `en-ceb.md` (app house rules and its sources) and the opened Wikipedia *Cebuano grammar* and *Cebuano numerals* pages; Korean facts are from the English half.

### 4.1 Markers before the noun, particles after it

- **Cebuano:** *ang / si* (the noun the sentence is about), *sa / ni* (owner; the doer of a non-*mo-* verb), *og / kang* (other roles, including an indefinite object) ([Wikipedia, *Cebuano grammar*](https://en.wikipedia.org/wiki/Cebuano_grammar)) [curriculum convention]. *Si, ni, kang* are for personal names.
- **Holds:** the learner already thinks "a small word shows the noun's job". 을/를 behaves like *og* in a *mo-* sentence: *Mopalit ko og saging* / 바나나를 사요 [inference].
- **Misleads, three ways** [inference]:
  1. **Position.** Cebuano markers come **before** the noun (*sa balay*); Korean particles come **after** it (집에). The English half's own mistake list already has "Particle before the noun — 에 집 ✗"; for a Bisaya speaker it is the first habit to break.
  2. ***ang* is not 이/가 or 은/는.** Which noun gets *ang* depends on the verb's form: *Mokaon ko og mangga* (doer gets *ang*-type *ko*) vs *Kaonon nako ang mangga* (the mango gets *ang*). Korean marks the eaten thing with 을/를 either way. So no fixed "*ang* = X" rule may be taught. The nearest feel: 은/는 is "what we're talking about", which overlaps with *ang* in plain statements (*Maestro si Pedro* / 피터 씨는 선생님이에요), and that is the only comparison the course makes.
  3. **No personal markers in Korean.** *Si / ni / kang* have no Korean counterpart: names take the same particles as things (민수 씨가, 민수 씨를).
- ***sa* splits in two** (research-backed, Filipino L1): see §5.4.

### 4.2 Choosing a form by "ends in a vowel or not"

- **Cebuano:** the linker *nga* joins a vowel-final word as *-ng* (*dakong balay*), and *ang* after a vowel becomes *-y* (*Unsay imong ngalan?*) (`en-ceb.md` §2.2, after KWF §13) [curriculum convention].
- **Korean:** 은/는, 이/가, 을/를, 이에요/예요, 으로/로, -을/-ㄹ all choose by the same test.
- **Use it** [inference]: open `nouns` with "Kabalo ka na niini: sa Bisaya, *dako* + *nga* = *dakong*. Sa Korean, pareho: tan-awa kon ang pulong mohuman sa vowel o sa consonant." This is the most useful single bridge in the course, because the test recurs in seven lessons.

### 4.3 Verb-first Cebuano, verb-last Korean

- **Cebuano** puts the main word first: *Mokaon ko*, *Maestro si Pedro*, *Init ang kape* (`en-ceb.md` §4.2; Wikipedia examples are verb-initial) [curriculum convention].
- **Korean** puts the verb last: 저는 밥을 먹어요.
- **Use it:** rewrite `sov` without "English is SVO". The contrast to draw is "Bisaya: verb una; Korean: verb katapusan; English: sa tunga". Both Bisaya and Korean drop an obvious subject, and both let the other words move: that part helps.
- **Short words in second place.** Cebuano short pronouns and particles cluster after the first word (*Dili ko ganahan*, *Asa ka?*); Korean particles stay glued to their noun. A Bisaya speaker may try to move 도 or 만 like *sab* or *lang* [inference].

### 4.4 *naa / wala* and the missing copula: 있어요 / 없어요 and 이에요

This is the strongest bridge in the course [inference, built on `en-ceb.md` §2.3 and §4.4].

| Bisaya | Korean | Job |
|---|---|---|
| *Estudyante ko.* (no verb) | 학생이에요 | A = B |
| *Naa ko sa eskuwelahan.* | 학교에 있어요 | being somewhere |
| *Naa koy iring.* | 고양이가 있어요 | having |
| *Naay eskuwelahan diri.* | 여기에 학교가 있어요 | existing |
| *Walay oras.* / *Wala koy oras.* | 시간이 없어요 | not existing, not having |
| *Dili ko estudyante.* | 학생이 아니에요 | A ≠ B |

- **Holds:** Cebuano already splits "is" exactly where Korean does: no verb (or *dili* in the negative) for identity, *naa / wala* for being somewhere, having and existing. `isseoyo` must be **rewritten around this table** instead of the English "is" table.
- **Misleads:** *wala* also means "didn't" (*Wala ko moadto*); Korean 없어요 never does. And *dili* covers both "isn't (a)" and "won't"; Korean 아니에요 only covers nouns (§4.6).

### 4.5 Three-way demonstratives

- *kini* (near me) / *kana* (near you) / *kadto* (far from both), and *diri / diha / didto* for places, map one-to-one onto 이 / 그 / 저 and 여기 / 거기 / 저기 [inference; the Cebuano three-way set is in `en-ceb.md`'s `this-that` lesson and roadmap].
- **Use it** in `nouns` and `pronouns-questions` instead of the English two-way "this / that".
- **Small trap:** Cebuano puts the demonstrative after the noun or links it (*kining balay*, *ang balay nga kini*); Korean always puts 이/그/저 directly before the noun with nothing between (이 집).

### 4.6 Negation

| Bisaya | Korean | Holds / misleads |
|---|---|---|
| *wala* (none) | 없어요 | holds |
| *dili* + noun (*Dili ko Amerikano*) | 아니에요 | holds |
| *dili* + verb (*Dili ko moadto*) | 안 가요 / 안 갈 거예요 | holds: 안 sits right before the verb as *dili* sits before it |
| *wala* + verb, past (*Wala ko moadto*) | 안 갔어요 | **misleads**: after *wala* the Cebuano verb takes the future form (*mo-*); the Korean verb stays past |
| *dili maka-* (can't) | 못 / -(으)ㄹ 수 없어요 | holds (§4.10) |
| *ayaw* (don't!) | not in this course | |

[inference; Cebuano facts from `en-ceb.md` §4.4 and Wikipedia *Cebuano grammar* §negation]

### 4.7 Enclitic particles

| Bisaya | Korean | Note [inference] |
|---|---|---|
| *ba* (yes/no question) | no particle in 요-form: the voice rises (가요?) | Bisaya also uses rising intonation; tell the learner "walay *ba* sa Korean" |
| *sab / pod / sad* (also) | 도 | 저도요 = *Ako sab*; but 도 replaces 은/는, 이/가, 을/를 |
| *lang / ra* (only) | 만 | 커피만 = *Kape lang*; 만 is glued to the noun, *lang* floats |
| *na* (already, now) | 벌써, 이제 | not taught as particles in this course |
| *pa* (still, yet) | 아직 | *Wala pa* ≈ 아직 안… |
| *man, gyud* | no direct equivalent; tone, 진짜 | do not force an equivalent |

### 4.8 Respect: titles and tone vs grammar

- **Cebuano** has no *po / opo*; respect comes from titles (*Manong / Nong, Manang / Nang, Kuya / Ate, Sir / Ma'am*), softeners (*palihug, lang, sa*) and tone; *ikaw / ka* is used with everyone (`en-ceb.md` §2.5 [inference there]; Briones 2026 quoting a Reddit post: Cebuano "relies on relational titles, tone of voice and directness rather than a dedicated particle" [practitioner opinion]).
- **Korean** puts respect into every verb (요, -습니다, -시-) and avoids "you".
- **Bridge for titles** [inference]: 형 / 오빠 / 누나 / 언니 work like *Kuya / Ate*, used beyond the family. **Two traps:** the Korean word depends on **the speaker's** gender (a man says 형 and 누나; a woman says 오빠 and 언니), while *Kuya / Ate* do not; and *Kuya / Ate* are used freely for service staff, while Korean defaults to 저기요 or a job title (사장님) in shops.
- **Trap: "*ikaw* is fine, so 당신 is fine."** It is not; Korean drops "you" and uses name + 씨 or a title (`pronouns-questions`).
- **About *po*.** Many Bisaya speakers know *po* from school and TV. A single labelled comparison helps in `polite`: "Kon kabalo ka sa Tagalog nga *po*: ang 요 susama, pero ang 요 gamiton sa tanang dili nimo suod, bisan ka-edad nimo, ug kini kabahin sa verb, dili usa ka pulong nga idugang." Nowhere else [inference].

### 4.9 Two number systems: a strong parallel with two exact breaks

- **Cebuano:** native numbers (*usa, duha, tulo*) for counting things, with the linker *ka* (*usa ka tawo*); Spanish-derived numbers for "counting large numbers, currency, solar time" ([Wikipedia, *Cebuano numerals*](https://en.wikipedia.org/wiki/Cebuano_numerals)); the Cebuano course teaches clock time *alas tres* and prices *singko pesos* in Spanish, and age *baynte singko anyos* (`en-ceb.md` §2.4, §4.9) [curriculum convention].
- **Korean:** native numbers for counting things, hours and age; Sino-Korean for money, minutes, dates, phone numbers, floors (English `numbers` lesson).

| Use | Bisaya | Korean | Bridge |
|---|---|---|---|
| counting things | native (*duha ka saging*) | native (두 개) | **holds** |
| money | Spanish (*singkuwenta pesos*) | Sino-Korean (오만 원) | **holds** |
| minutes | Spanish (*alas tres y medya*) | Sino-Korean (삼십 분) | **holds** |
| **hours** | Spanish (*alas tres*) | **native** (세 시) | **breaks**: 삼 시 ✗ |
| **age** | Spanish (*baynte singko anyos*) | **native** (스물다섯 살) | **breaks**: 이십오 살 ✗ |
| large numbers | Spanish; groups of 1,000 | Sino-Korean; groups of 10,000 (만) | holds for the system, breaks for grouping |

- **Use it** [inference]: the `numbers` lesson is rewritten around "Kabalo ka na mogamit og duha ka klase sa numero", then the two breaks in bold. The en-ko phrase "Sino-Korean for money and time" becomes "Sino-Korean para sa kuwarta ug minuto; native para sa oras ug edad".
- ***ka* vs counters.** *Duha ka saging* is number + *ka* + noun; 바나나 두 개 is noun + number + counter. Cebuano also has measure words close to counters: *duha ka tasa nga kape* ≈ 커피 두 잔, *pila ka buok?* ≈ 몇 개? [inference; *kabuok* appears in the Cebuano course as "pieces"].

### 4.10 Other bridges (all [inference])

- **Verbs do not change for the person** in Cebuano either: *Mokaon ko / ka / siya*. Korean 먹어요 is the same for everyone (`verbbasics`).
- **Describing words are predicates** without "is": *Init ang kape* / 커피가 뜨거워요. Korean "describing verbs" will feel natural; only the order flips.
- **Noun + "do" verbs:** Cebuano makes verbs from nouns and loans with *mag- / nag-* (*magtrabaho*, and in Bislish *mag-shopping*); 하다 verbs work the same way (공부하다, 쇼핑하다).
- **The linker and noun modifiers:** *dako-ng balay* and 크-ㄴ 가방 both glue a sound onto the describing word before the noun. **Trap:** Cebuano also allows the description **after** the noun with *nga* (*balay nga dako*, *ang pagkaon nga akong gusto*); Korean never does (제가 좋아하는 음식).
- **Comparison:** *mas* ≈ 더 (both before the describing word); *kaysa (sa)* ≈ 보다, but *kaysa* comes **before** the noun and 보다 **after** it; *pinaka-* ≈ 제일 (*pinakalami* / 제일 맛있어요).
- **"Let's":** the inclusive *ta* (*Kaon ta!*, *Adto ta*) ≈ casual -자 (먹자, 가자); *Unsa kaha kon…?* ≈ -(으)ㄹ까요? (`plans`).
- **Can / can't:** *maka-* ≈ -(으)ㄹ 수 있어요; *dili maka-* ≈ 못 / -(으)ㄹ 수 없어요 (`cant`).
- **Must / may:** *kinahanglan* (before the verb) ≈ -아/어야 해요 (after the stem); *Pwede ko…?* ≈ -아/어도 돼요? (`have-to`, `requests`).
- **Reduplication:** Cebuano *hinay-hinay* ("slowly") and Korean 천천히 / 빨리빨리 both repeat for manner; a passing remark only.
- **Pronouns:** *siya* is he and she; Korean speech also avoids a gendered "he / she" (그 사람, 이분). *Kami / kita* (exclusive / inclusive "we") both become 우리; 우리 also means "my" for family and home (우리 엄마), which Cebuano expresses with *among / atong*.
- **Loanwords.** Cebuano has thousands of Spanish loans ([Wikipedia, *Cebuano language*](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Cebuano_language)) and English loans; Korean has English loans written with Korean sounds (커피 keopi, 버스 beoseu, 택시 taeksi). Both languages turn *f* into *p* (Philippine English replaces /f/ and /v/ with [p] and [b], [Wikipedia, *Philippine English*](https://en.wikipedia.org/wiki/Philippine_English)), so 커피 sounds natural to a Bisaya ear. Spelling them in Hangul is the hard part (Manrique: 드레시 for 드레스, §5.9). 빵 (bread) and Cebuano *pan* both go back to Iberian words; the route of 빵 (Portuguese via Japanese) was not verified (§11).

## 5. Error zones of Cebuano speakers in Korean, ranked

**How the list is ranked** [inference]: (1) items with Filipino-learner data; (2) items that occur in nearly every sentence and are testable in this course's practice; (3) lesson-local traps. **No item has Cebuano-L1 data.** Where a study is cited, its learners are Filipino or Tagalog speakers, and the transfer to Cebuano rests on Cebuano sharing the feature (stated each time).

### 5.1 Aspirated vs tense vs plain stops

- **Wrong → right:** 탈 *tal* (mask) said like 딸 *ttal* (daughter); 커피 said with no puff (sounds like 꺼피); 파 *pa* heard as 빠 *ppa*; 불 *bul* (fire) vs 뿔 *ppul* (horn) vs 풀 *pul* (grass) not told apart.
- [research-backed (Filipino L1)] Jo, Kim & Kim (2008), 14 Filipina marriage migrants vs 10 Korean women: the Filipino group's aspirated stops had far shorter voice onset times than the Koreans' (ㅌ 26.88 vs 58.45; ㅍ 37.55 vs 58.89; ㅋ 34.90 vs 55.83; ㅊ 48.59 vs 82.28), and their tense stops longer ones (ㅃ 47.50 vs 17.51). For ㅌ, 9 of 14 produced a tense sound and 3 a plain one; the paper calls this a "92.9%" error rate, although 12 of 14 is 85.7% ([Jo, Kim & Kim 2008](https://koreascience.kr/article/JAKO200833338919695.pdf)). The authors attribute it to Tagalog having no aspirated consonants (the paper gives the Tagalog consonant count inconsistently, as 16 and 15). What the numbers show is that **both series were off and converged in the middle**: the aspirated stops had too little air (and ㅌ was judged tense by 9 of 14), while the tense stops had more delay than Korean tense stops. So the safe teaching claim is "your stops have no puff, and Korean needs two different things: a clear puff for ㅋ ㅌ ㅍ ㅊ, and a tight, puff-less stop for ㄲ ㄸ ㅃ ㅆ ㅉ". Two fetches of this paper assigned the VOT values to opposite groups; the profile uses the second, which labelled each value by group (§11).
- [curriculum convention] Cebuano has the same gap: "All these consonants are unaspirated" ([Binisaya.com, *Dialectology: Cebuano phonology*](https://binisaya.com/content/dialectology-cebuano-phonology)); "all stops are unaspirated" ([Wikipedia, *Cebuano language*](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Cebuano_language)). [inference] The Filipino finding transfers to Cebuano.
- [research-backed, not Filipino] Across Chinese, Japanese, English and Vietnamese learners, errors in the three-way contrast were high in every group ([Yoo & Kang 2018](https://koreascience.kr/article/JAKO201832547631780.page), abstract); across five L1s (no Filipino), tense or aspirated stops replaced by plain ones were a shared pattern ([Comparison of L2 Korean pronunciation error patterns from five L1 backgrounds, arXiv 2023](https://arxiv.org/html/2306.10821v1)).
- **Design consequence:** the reading guide (§6) gives two instructions and no sound equivalence: ㅋ ㅌ ㅍ ㅊ need a deliberate puff (hand in front of the mouth), and ㄲ ㄸ ㅃ ㅆ ㅉ need a tight throat and no puff, tighter than his everyday *k t p*. The minimal-pair cards (ko.c0045 to ko.c0048) get Cebuano notes built on those two instructions. Whether everyday Cebuano *k t p* sound closer to the tense or the plain series to Korean ears is **not** claimed: Jo et al. do not settle it, and the es-ko review flagged the same comparison for Spanish as unverified.

### 5.2 Vowels: ㅗ/ㅜ and ㅔ/ㅣ merged, ㅓ misread, ㅡ missing

- **Wrong → right:** 소 *so* / 수 *su* said alike; 게 *ge* / 기 *gi* said alike; 서울 *seoul* read "se-ul" or "so-ul"; 그 *geu* read "ge-u"; 어 said as 오.
- [curriculum convention] Cebuano had three vowel phonemes; *e/i* and *o/u* "are mostly allophones and can be swapped without changing meaning" ([Wikipedia, *Cebuano language*](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Cebuano_language)); Binisaya.com: the variants are "all in free variation" ([Binisaya.com](https://binisaya.com/content/dialectology-cebuano-phonology)). The app's own Cebuano course teaches one spelling per word and *requests* (not yet built) an engine fold that grades *o/u* and *e/i* variants as "almost", because natives write both (`en-ceb.md` §10, request 4).
- [inference] **This is the Cebuano-specific vowel trap**: a speaker for whom *o/u* and *e/i* are one sound each will not hear or keep ㅗ/ㅜ and ㅔ/ㅣ apart. It ranks above ㅓ for Cebuano even though no study measured it.
- [research-backed (Filipino L1)] In Jo et al. (2008), the Filipino group differed significantly from Koreans on ㅗ (both formants), ㅏ (F2) and ㅓ (F1); **no clear difference was reported for ㅡ, ㅜ or ㅔ**. ㅓ was the most common vowel error across all L1s in Yoo & Kang (2018) [research-backed, not Filipino].
- **ㅐ / ㅔ are not an error zone:** they sound the same in modern Seoul speech (card ko.c0056, ko.c0007). The course says so and moves on.
- **ㅡ** has no Cebuano counterpart [inference]; Jo et al. found no group difference, so it is ranked below the mergers.

### 5.3 Particles after the noun, and the wrong particle

- **Wrong → right:** 에 집 → 집에; 커피가 좋아해요 → 커피를 좋아해요; 시간가 있어요 → 시간이 있어요; 저은 → 저는.
- [research-backed (Filipino L1)] Manrique (2022), 644 sentences by 16 UP students: selection errors were 491 of 809 errors (about 61%), omission 156; particle misselection and omission were among the most common, including "만화가 너무 좋아해요" → "만화를 너무 좋아해요", which the author ties to Filipino *gusto* shaping the marking of 좋아하다 ([Manrique 2022](https://linguistics.upd.edu.ph/wp-content/uploads/2022/08/14-Error-Analysis-of-Written-Compositions-of-Filipino-Learners-of-Korean-as-a-Foreign-Language.pdf)). Written work only; L1 given as "Filipino".
- [inference] Cebuano *gusto / ganahan* behave like Tagalog *gusto* (*Gusto nako ang kape*: the liked thing gets *ang*), so the 좋아해요 trap transfers. Particle position (before vs after) is not in the study; it is a Cebuano-specific inference from §4.1.

### 5.4 에 vs 에서: one *sa* for both

- **Wrong → right:** 카페에 공부해요 → 카페에서 공부해요; 집에서 있어요 → 집에 있어요; 장례식장에 해요 → 장례식장에서 해요 (Manrique's example).
- [research-backed (Filipino L1)] Manrique (2022) names -에 vs -에서 confusion and attributes it to Filipino *sa* covering both.
- [curriculum convention] Cebuano *sa* has the same range (*Naa ko sa balay*; *Nagtuon ko sa kapehan*; *gikan sa Cebu*) (`en-ceb.md`, Wikipedia *Cebuano grammar*). [inference] Transfers directly.
- **Design consequence:** `particles` is rewritten around *sa*: "Ang *sa* sa Bisaya, duha sa Korean: 에 kon moadto ka o naa ka; 에서 kon naay buhaton didto o gikan ka didto."

### 5.5 Word order: verb last, question words in place

- **Wrong → right:** 먹어요 밥을 → 밥을 먹어요 (verb-first habit); 뭐 이거예요? → 이거 뭐예요? (from *Unsa ni?*); 어디 화장실이에요? → 화장실 어디예요? (from *Asa ang CR?*).
- [research-backed (Filipino L1)] Ordering errors were only 24 of 809 in Manrique (2022) (about 3%), in written work by students past the first weeks.
- [inference] Low in writing, but the question-word habit is strong: Cebuano fronts every question word (*Unsa, Asa, Kinsa, Kanus-a, Ngano, Pila*). It ranks here because `pronouns-questions`, `sov` and `getting-around` drill it.

### 5.6 Politeness endings and honorifics

- **Wrong → right:** 반말 to an older co-worker because "*ikaw* is fine with everyone" → 요-form; 저는 가세요 → 저는 가요 (honorific about oneself); 당신 for "you" → name + 씨 or a title; mixing levels in one sentence.
- [research-backed (Filipino L1)] Manrique (2022) reports register errors (저 in plain-style writing; spoken forms in formal writing) and plain-style ending errors (필요한다 → 필요하다).
- [inference] For a Cebuano speaker the deeper problem is that respect is grammatical at all (§4.8). It is ranked below sounds and particles only because the course's 요-default rule catches most of it.

### 5.7 Hours and age in native numbers; 만

- **Wrong → right:** 삼 시 → 세 시 (from *alas tres*); 이십오 살 → 스물다섯 살 (from *baynte singko anyos*); 오십천 원 → 오만 원.
- [inference] from §4.9: the Cebuano Spanish-number habit pulls hours and age toward Sino-Korean, exactly where Korean uses native numbers.

### 5.8 Counters and their order

- **Wrong → right:** 두 커피 → 커피 두 잔 (from *duha ka kape*); 세 개 사람 → 사람 세 명; 하나 개 → 한 개.
- [inference] Cebuano number + *ka* + noun puts the number first; Korean puts it after the noun.

### 5.9 Final consonants, ㄹ, linking without a glottal stop

- **Wrong → right:** 물 *mul* said "mur" or with a dark *l*; 한국어 said "han-guk-'eo" with a glottal stop → *hangugeo*; final 받침 released with a puff (밥 "ba-pə").
- [research-backed (Filipino L1)] Jo et al. (2008): the Filipino group produced final /l/ as /r/ or a dark [ɫ] (no percentages).
- [curriculum convention] Cebuano starts every vowel-initial word with a glottal stop and marks medial ones with a hyphen (*kan-on*) ([Binisaya.com](https://binisaya.com/content/dialectology-cebuano-phonology)). [inference] A Bisaya reader will insert that stop before a Korean vowel-initial syllable, which blocks linking (연음), and may read the romanization's hyphen (*Kii-yeyo*) as a catch.

### 5.10 Spelling loanwords and spacing (writing)

- [research-backed (Filipino L1)] Manrique (2022): loanword misspellings (드레시 → 드레스) and missing spaces in auxiliary constructions (살고싶어요 → 살고 싶어요).
- [inference] Low priority for this course (typing is limited to practice items), noted for `texting` and `want-like`.

### 5.11 Stress

- [inference] Cebuano stress distinguishes words (`en-ceb.md` §4.5); Seoul Korean has no word stress. A Bisaya speaker may stress Korean syllables unevenly. The reading guide says "pareho ang gibug-aton sa tanang syllable".

## 6. Pronunciation aid: how a Cebuano reader reads the romanization

**What the Korean half prints.** Every Korean line carries Revised Romanization (RR) in `rom`, shared by every course and not editable (spec §5). RR spells pronunciation, not letter by letter: the app's English `sound-changes` lesson says "The romanization in this app is written the way words sound", and RR itself reflects most sound changes (독립문 → Dongnimmun) ([Wikipedia, *Revised Romanization of Korean*](https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean)) [curriculum convention]. So 감사합니다 appears as *gamsahamnida* and 좋아요 as *joayo*.

**Where a Cebuano reader goes wrong** [inference]:
1. Reads **eo, eu, ae, oe, ui** as two vowels with a glottal stop between them, because Cebuano vowel pairs are two syllables (*maayo* = ma-a-yo; the Cebuano course's card *gabii*: "Two i's are two syllables, with a catch between them").
2. Treats ***o / u*** and ***e / i*** as interchangeable (§5.2).
3. Reads *k t p* as his own unaspirated stops (§5.1) and doubled *kk tt pp* as long.
4. Reads ***j*** as the *h* of Spanish names (*Jose*) or skips it; Cebuano spelling writes that sound *dy* (*dyip*).
5. Adds a glottal stop before vowel-initial syllables and reads RR hyphens as one (§5.9).
6. Says final ***l*** as *r*; stresses one syllable.

But some RR sequences **are** two syllables (*kapeeseo* = 카페에서, ka-pe-e-seo; *haksaengieyo* = 학생이에요, hak-saeng-i-e-yo). The guide therefore names the single-vowel digraphs explicitly and says every other vowel pair is two syllables.

**Placement.** The full guide goes in the `hangul` body (its own `<h3>` section after the vowel and consonant tables; needs the waiver of §3.6). The `sound-changes` body repeats the parts on linking, finals and "no glottal stop". The three Hangul deck descriptions (`ko.d.hangul-vowels`, `ko.d.hangul-consonants`, `ko.d.hangul-advanced`) repeat their part in the same words. Card notes for single jamo (ko.c0001 to ko.c0060) use the same comparisons.

### 6.1 The reading guide, in Cebuano (ready to paste; every line [inference], native check §10)

> **Unsaon pagbasa sa romanization**
>
> Ang Latin nga sulat ilalom sa matag Korean nga linya mao ang romanization. Gisulat kini para sa mga mobasa og English, apan mabasa nimo kini sama sa Bisaya, gawas niining mga letra.
>
> **Mga vowel**
> - **a, i**: sama sa Bisaya.
> - **o** (ㅗ): o nga lingin kaayo ang ngabil. **u** (ㅜ): u nga lingin ang ngabil, sama sa u sa *tubig*. Sa Bisaya, pareho ra ang *kumusta* ug *komusta*; sa Korean, **lahi nga pulong** ang *so* ug *su*. Ayaw ilisi.
> - **e** (ㅔ) ug **ae** (ㅐ): pareho ang tingog, sama sa e sa *kape*. Apan lahi ang **e** ug **i**: ang *ge* dili *gi*.
> - **eo** (ㅓ): **usa ra ka vowel**, dili e-o. Ablihi ang baba sama sa a, unya ingna ang o nga dili molingin ang ngabil. *Seoul* = "seo-ul", duha ka syllable, dili "se-ul" ug dili "so-ul".
> - **eu** (ㅡ): **usa ra ka vowel**, dili e-u. Ingna ang u samtang nagpahiyom, patag ang ngabil.
> - **ui** (ㅢ): eu ug i nga paspas, usa ka syllable.
> - **oe** (ㅚ): sama sa "we".
> - **ya, yeo, yo, yu, ye, wa, wo, wi, wae, we**: usa ka syllable matag usa.
> - Ang ubang duha ka vowel nga magkauban, duha ka syllable: *kapeeseo* = ka-pe-e-seo.
>
> **Mga consonant**
> - **k, t, p, ch** (ㅋ ㅌ ㅍ ㅊ): ibuga ang hangin. Ibutang ang imong kamot atubangan sa imong baba: kinahanglan mabati nimo ang hangin. Ang *k, t, p* sa Bisaya walay hangin, mao nga para sa ㅋ ㅌ ㅍ ㅊ kinahanglan nimo idugang ang hangin.
> - **kk, tt, pp, ss, jj** (ㄲ ㄸ ㅃ ㅆ ㅉ): **dili taas** nga tingog. Hugot ang tutunlan, walay hangin, mas hugot pa kaysa sa *k, t, p* sa Bisaya.
> - **g, d, b, j** sa sinugdanan sa pulong (ㄱ ㄷ ㅂ ㅈ): humok, gamay ra nga hangin, tunga-tunga sa g ug k, sa d ug t, sa b ug p. Taliwala sa duha ka vowel, tinuod nga g, d, b, j.
> - **j**: sama sa *dy* sa *dyip*. Dili sama sa j sa *Jose*.
> - **ch**: sama sa *ts* sa *otso*, apan may hangin.
> - **s**: sama sa Bisaya; sa atubangan sa i, mahimong "sh": *si* = "shi".
> - **h**: kanunay ingnon, sama sa Bisaya.
> - **r** taliwala sa duha ka vowel (ㄹ): sama sa r sa Bisaya. Sa katapusan sa syllable, **l**, dili r: *mul* (tubig), dili "mur". **ll** = taas nga l.
> - **ng**: sama sa ng sa *ngalan*, apan sa Korean makita lang kini sa katapusan sa syllable.
> - **f, v, z**: wala sa Korean. Ang *coffee* sa Korean kay *keopi*.
>
> **Sa katapusan sa syllable**
> - **k, t, p** sa katapusan: isira ang baba o ang dila, apan **ayaw ibuga ang hangin**. *bap* (kan-on): isira ang ngabil sa p, ug hunong.
> - Pito ra ka tingog ang mahimo sa katapusan: k, n, t, l, m, p, ng.
>
> **Tulo ka lagda nga lahi sa Bisaya**
> 1. **Walay glottal stop.** Ang Korean walay hunong sa tutunlan. Ang final consonant mobalhin sa sunod nga vowel: *hangugeo* = han-gu-geo, dili "han-guk-'eo". Ang hyphen sa romanization (*Kii-yeyo*) dili glottal stop.
> 2. **Walay stress.** Pareho ang gibug-aton sa tanang syllable. Ayaw pagdiin.
> 3. **Ang romanization nagsulat sa tingog**, dili sa Hangul: ang 감사합니다 gisulat *gamsahamnida*. Kon lahi ang Hangul ug ang romanization, sundon ang romanization sa pagsulti, ug ang Hangul sa pagsulat.

### 6.2 Notes for writers

- The jamo in brackets are for the `hangul` body only (waived). In deck descriptions and card notes, keep only the Hangul the English row has.
- *coffee* in the guide is the English word, deliberately, because 커피 is an English loan; it is the one English word the guide uses.
- Cebuano anchor words used: *kape, kumusta / komusta, dyip, otso, ngalan, Jose*. Each is in the Cebuano course or `en-ceb.md`, except *Jose* [inference: Philippine reading with *h*].
- Do **not** compare with English sounds ("as in father") anywhere: the friend reads English, but the course's anchor is Bisaya.

## 7. Per-lesson notes (33 lessons, ids from `target/ko/lessons.jsonl`)

"Bridge / trap" is what to build the Cebuano explanation on. "Rewrite" names English-built passages that must be rewritten, not translated (in addition to the general rules of §3 and the `rw` flags `mk_native.js ceb` will put in the work files). All [inference] unless a section above tags it.

| # | id | Bridge or trap for a Bisaya speaker | Rewrite, do not translate |
|---|---|---|---|
| 1 | `hangul` | Hangul is an alphabet like the Latin letters he reads; insert the §6.1 guide. | The vowel table glosses "eo (uh), u (oo), i (ee), e (bed)": replace with Cebuano anchors. Drop "Tap a letter to replay" unless the lead confirms the cells render. Waiver needed (§3.6). |
| 2 | `polite` | No Cebuano grammar for respect; titles and tone do that job (§4.8). One labelled *po* comparison. | "Rule of thumb" stays; recast "comes off as sweet" naturally. The "Say it 3 ways" headers become formal / polite / casual (glossary). |
| 3 | `meet` | *Kumusta* is not the same as 안녕하세요's set use; age is asked to set politeness (Filipinos ask age too, but not for grammar). 이에요/예요 = the vowel test of §4.2. | Goodbye logic (가세요 / 계세요) explained with *Una na ko* / *Sige* situations. Localised line: see §9 (the *Kim* / *Lisa* examples may stay). |
| 4 | `sound-changes` | Linking without a glottal stop; the Cebuano *ng* makes the nasal rule easy (*ngalan*). | "gamsa ham nida" respellings are English-style: use RR plus Cebuano syllable breaks. **Drop** "open Read and try the 🔀 Sound changes drill". |
| 5 | `nouns` | *kini / kana / kadto* = 이 / 그 / 저; owner first like *akong balay* (제 집); the vowel test for 은/는. **Trap:** *mga* is used readily; Korean 들 is optional (사과들 세 개 ✗). | "no a or the, no gender": restate as "walay *ang* o *sa* sa atubangan; ang particle naa sa luyo". |
| 6 | `isseoyo` | The §4.4 table: zero copula vs *naa / wala*. | The whole "English uses 'is' for two jobs" opening and table: rebuild on Bisaya. |
| 7 | `pronouns-questions` | *ako/ko* ≠ 저/나 (Korean choice is politeness, Cebuano is long/short form); *kami / kita* → 우리; *ikaw* ≠ 당신; question words stay in place (§5.5). | "Korean uses pronouns less than English": compare with Bisaya, which uses short pronouns constantly. |
| 8 | `verbbasics` | Verbs don't change for person (same in Bisaya); describing verbs = Bisaya predicates without "is"; 하다 verbs like *mag-* + noun. | "to …" infinitive framing; "English adjectives" (allowed once). |
| 9 | `verbs` | New: vowel harmony (아요/어요). Present also covers "right now" and questions by tone, as Bisaya does. | Nothing English-specific beyond glosses. |
| 10 | `past` | Korean has tense; Bisaya *ni- / mo-* is "done / not yet done" (`en-ceb.md` glossary). **Trap:** after *wala* Bisaya uses *mo-*; Korean keeps the past: 안 갔어요. | "I ate / I have eaten / I did eat" line: replace with Bisaya *Nikaon ko / Nakakaon na ko* both = 먹었어요. |
| 11 | `future` | Bisaya *mo-* covers future and habit; Korean -(으)ㄹ 거예요 for plans, present for fixed near events (like *Moadto ko ugma*). | The "kkeoyeyo" pronunciation note: say "tense k" with §6.1 terms. |
| 12 | `sov` | Bisaya verb first, Korean verb last (§4.3); both drop the obvious subject. 을/를 ≈ *og* in *mo-* sentences only. | Every "English is SVO" sentence. |
| 13 | `particles` | *sa* → 에 or 에서 (§5.4, research-backed Filipino L1). Particle map: add one row "Bisaya: marker before the noun". | "English often translates both as 'at'" → "Ang Bisaya naggamit og *sa* para sa duha". |
| 14 | `negation` | *dili* before the verb ≈ 안 before the verb; *dili* + noun = 아니에요; *wala* = 없어요. **Trap:** *wala* + verb is past. | The four common mistakes stay; add *wala* trap in the explanation, not as new Korean (Hangul rule). |
| 15 | `do-man` | *sab* = 도 (저도요 = *Ako sab*), *lang* = 만 (*Kape lang*). **Trap:** Bisaya particles float to second place; 도/만 stay glued to the noun. | "도 + negative = either": Bisaya *Dili sab ko* = 저도 안 가요. |
| 16 | `sentences` | Bisaya shapes reversed: *Estudyante ko* / 학생이에요; *Init ang kape* / 커피가 뜨거워요 (only the 4 shapes, no new Hangul). | "English order" mistakes → "Bisaya order: verb una". |
| 17 | `want-like` | *gusto* + verb before, -고 싶어요 after. **Trap (research-backed, Filipino L1):** *Gusto nako ang kape* → 커피가 좋아해요 ✗. | The "want / like" framing works; redo examples' logic from *gusto / ganahan*. |
| 18 | `numbers` | §4.9 table: two systems already known; two breaks (hours, age); 만 grouping vs *mil*. | Whole lesson framing ("English counting"); "Sino numbers build like English digits" → "sama sa numerong Kinatsila: *baynte singko* = 이십오". |
| 19 | `food` | *ka* + measure word ≈ counter (*duha ka tasa* ≈ 두 잔). 잘 먹겠습니다 has no Bisaya equivalent; explain it, don't force *Kaon ta*. | "Four phrases cover 90%" stays. Table manners: no Filipino comparison needed. |
| 20 | `getting-around` | Jeepney talk (*Para!*, *Lugar lang*) has no Korean taxi equivalent; teach the Korean lines as new. | T-money line stays; "Stations announce in Korean then English" stays (true in Korea). |
| 21 | `titles` | 오빠/형/언니/누나 ≈ *Kuya/Ate*, but chosen by the speaker's gender; 씨 has no Bisaya equivalent; *Sir/Ma'am* ≈ 직함 + 님 at work. | Table column "(you female / you male)": say "kon babaye ka / kon lalaki ka". |
| 22 | `plans` | *Kaon ta!* = 먹자; *Unsa kaha kon…?* ≈ -(으)ㄹ까요?; *Gusto ka…?* ≈ -(으)ㄹ래요?. | "콜" note: keep; explain the station-exit custom without US comparison. |
| 23 | `texting` | ㅋㅋ ≈ *haha / hehe*; leaving someone on "1" (읽씹) ≈ being "seen-zoned" on Messenger [inference]. | KakaoTalk explained by comparison with Messenger, which Filipinos use. |
| 24 | `counters` | *Pila ka buok?* ≈ 몇 개?; Bisaya order number-first vs Korean noun-number-counter (§5.8). | "like two cups of coffee in English" → Bisaya *duha ka tasa nga kape*. |
| 25 | `joining` | -고 ≈ *ug / dayon*; -지만 ≈ *pero*; -아/어서 ≈ *mao nga / kay*. **Trap:** *kay* puts the reason after (*Wala ko moadto kay puliki ko*); Korean puts it first (바빠서 안 갔어요). | "And, but, so" framing → Bisaya connectors. |
| 26 | `story` | 먼저 *una*, 그리고 *ug / dayon*, 그다음에 *pagkahuman*, 그래서 *mao nga*, 그런데 *pero*, 마지막으로 *sa katapusan*. | Connector table glosses in Bisaya. |
| 27 | `noun-modifiers` | *dako-ng balay* ≈ 크-ㄴ 가방 (a sound glued to the describing word); **trap:** Bisaya allows *balay nga dako*, Korean never puts the description after. | "Korean has no that / which / who" → "walay *nga* human sa noun; ang tanan mag-una sa noun". |
| 28 | `compare` | *mas* ≈ 더; *kaysa sa* ≈ 보다 but on the other side of the noun; *pinaka-* ≈ 제일. | None beyond glosses. |
| 29 | `cant` | *maka-* / *dili maka-* ≈ -(으)ㄹ 수 있어요 / 없어요, 못; *dili ko kabalo* ≈ 몰라요; 모르겠어요 is softer. | The spicy-food "rite of passage" paragraph stays. |
| 30 | `have-to` | *kinahanglan* (before) ≈ -아/어야 해요 (after); *dili kinahanglan* ≈ 안 -아/어도 돼요; *Pwede ko…?* ≈ -아/어도 돼요?. | Cross-reference "the Asking politely lesson" → the Cebuano lesson 32 title. |
| 31 | `honorific` | No Bisaya verb honorifics; 시 is about the person doing the action, never oneself. | "your partner's parents": keep; a Filipino-family framing (*ginikanan sa imong uyab / bana / asawa*) is fine. |
| 32 | `requests` | *palihug* ≈ 주세요 / 좀; *lang* and *sa* soften like 좀; 혹시 ≈ *basin* ("perhaps") [unverified, §10]. | Softener table glosses ('a bit', 'by any chance') → Bisaya glosses. |
| 33 | `office` | Philippine offices use *Sir / Ma'am* + name; Korea uses the title alone. The 수고 family has no Bisaya equivalent: gloss by situation (es-ko settled the same problem). | Title table "Roughly" column → Philippine job titles; note that many EPS learners will work in factories, not offices (§2.2). |

## 8. Pair-layer proposals (proposals only)

**Format constraint.** Spec v1 has no pair layer: the lesson list is the 33 en-ko ids (the roadmap matches on them), every target id needs a native row in **every** native half, and trap cards would carry Korean, which lives only in the target half. Both proposals below therefore need a spec change (a per-pair `extra/` folder with its own target and native rows, assembled after the shared halves), or must be folded into existing lessons. **Fallback without a spec change:** put the opening lesson's content into the first sections of `hangul` and `polite` (prose only, no new Hangul beyond waivers). All 15 trap items below already exist in the Korean half, but only the 7 `ko.c` cards (rows 3, 6, 10, 11, 12, 13, 15) have a `note` field; the 8 `ko.s` lesson rows carry only a `gloss`, so their trap notes go into the prose of the lesson that shows them (`particles` for 1–2, `want-like` 4, `pronouns-questions` 5, `do-man` 7, `past` 8, `joining` 9, `hangul` 14).

### 8.1 Opening lesson "Ang nahibal-an na nimo" (What you already know)

Proposed id `ceb-know`, placed before `hangul`, about 350 words, no practice items beyond 6 checks.

1. **Duha ka sistema sa numero:** you already switch between *usa, duha* and *uno, dos*; Korean does the same (§4.9). Preview the two breaks: hours and age.
2. ***naa* ug *wala*:** = 있어요 / 없어요, with the four-row table of §4.4.
3. ***kini, kana, kadto*:** = 이, 그, 저.
4. **"Mohuman ba sa vowel?":** *dakong* vs *dako nga*: the test behind 은/는, 이/가, 을/를 (§4.2).
5. ***sab* ug *lang*:** = 도 and 만.
6. **Ang lahi:** markers before the noun vs particles after it; verb first vs verb last; respect inside the verb (요); *sa* splits into 에 and 에서.
7. **Ang imong mga tingog:** your *k t p* have no puff: add one for ㅋ ㅌ ㅍ ㅊ, tighten for ㄲ ㄸ ㅃ; *o/u* and *e/i* must stay apart in Korean; no glottal stop.
8. Checks (6): one per screen 1–6, prose options only.

### 8.2 Deck "Mga lit-ag para sa Bisaya" (Traps for Bisaya speakers): 15 sample cards

Existing Korean-half ids are given; the deck would reuse those Korean strings with Cebuano meanings and notes. Meanings and notes are [inference].

| # | Korean (id) | Meaning in Cebuano | Note |
|---|---|---|---|
| 1 | 집에 가요 (ko.s0120) | Mouli ko. | Ang 에 naa sa luyo sa 집. Sa Bisaya, ang *sa* mag-una: *sa balay*. |
| 2 | 카페에서 공부해요 (ko.s0126) | Nagtuon ko sa kapehan. | Kini nga *sa* kay 에서, kay naay buhaton didto. |
| 3 | 시간 있어요? (ko.c0607) | Naa kay oras? | 있어요 = *naa*. |
| 4 | 커피를 좋아해요 (ko.s0173) | Ganahan ko og kape. | 을/를, dili 이/가: ang 좋아해요 usa ka action verb. |
| 5 | 이거 뭐예요? (ko.s0041) | Unsa ni? | Ang 뭐 magpabilin sa lugar sa tubag; dili kini mag-una. |
| 6 | 저도요 (ko.c0566) | Ako sab. | 도 = *sab*, motapot dayon sa 저. |
| 7 | 커피만 마셔요 (ko.s0149) | Kape ra ang akong imnon. | 만 = *ra / lang*, apan motapot sa noun. |
| 8 | 안 갔어요 (ko.s0097) | Wala ko moadto. | Sa Bisaya, *mo-* human sa *wala*. Sa Korean, past gihapon: 갔어요. |
| 9 | 바빠서 안 갔어요 (ko.s0222) | Wala ko moadto kay puliki ko. | Sa Korean, ang rason mag-una. |
| 10 | 세 시 삼십 분 (ko.c0408) | Alas tres y medya. | Oras: native (세). Minuto: Sino-Korean (삼십). Dili 삼 시. |
| 11 | 스물다섯 살 (ko.c0409) | Baynte singko anyos. | Edad: native numbers, dili Sino-Korean. |
| 12 | 만 원 (ko.c0407) | Diyes mil won (10,000). | 만 = 10,000, usa ra ka pulong. 50,000 = 오만. |
| 13 | 형 / 오빠 (ko.c0609) | kuya | Kon lalaki ka: 형. Kon babaye ka: 오빠. |
| 14 | 서울 (ko.s0004) | Seoul | Ang *eo* usa ra ka vowel: seo-ul. |
| 15 | ㄷ ㄸ ㅌ (ko.c0047) | d · tt · t | Para sa ㅌ, ibuga ang hangin. Para sa ㄸ, hugot ug walay hangin. Ang ㄷ humok. |

## 9. Localisation

### 9.1 What stays

- Glosses translate what the Korean says. 미국에서 왔어요 is glossed ***Taga-Amerika ko*** (or *Gikan ko sa Amerika*, question 14 in §10), never "Taga-Pilipinas ko". *Kii*, 키이, 오클라호마 stay.
- 영어 할 수 있어요? (ko.c0091, ko.g014) and 혹시 영어 메뉴 있어요? (ko.s0280, ko.p040, requests.02) are **more** useful to a Filipino than to an American: keep and gloss as is.

### 9.2 Philippine equivalents in prose (no new Hangul without a waiver)

- Where the English prose tells the learner to "put your own country / city", the Cebuano prose names *Pilipinas*, *Cebu*, *Davao*, *Cagayan de Oro* in Latin letters.
- Money comparisons: pesos (*pesos*), not dollars.
- Apps: Messenger, not iMessage; jeepney, not subway, as the home comparison.
- If a lesson body must show the Korean (필리핀에서 왔어요, 세부), put `_waive` on that lesson's title row with a `_note`; `meet` is the only lesson where this is worth it.

### 9.3 Korean-half rows tied to the US (for the lead)

| id | Korean | Use |
|---|---|---|
| ko.c0077 | 미국에서 왔어요 | card |
| ko.g021 | 어디에서 왔어요? / 미국에서 왔어요. 오클라호마요. | dialogue |
| ko.s0012, ko.s0127 | 미국에서 왔어요 | `meet`, `particles` example rows |
| ko.p005 | 에서 · ex 집에서 쉬어요 · 미국에서 왔어요 | pattern |
| meet.06 | order: 미국에서 / 왔어요, distractor 미국 | practice |
| particles.03 | mc: 미국에서 왔어요 / 미국에 왔어요 / … | practice |
| ko.s0009, ko.g019, ko.s0289, ko.s0292, office.05, office.08 | Kii / 키이 | name only; fine for any learner |

### 9.4 What the lead should add to the Korean half (proposals)

| Korean | RR (to be generated by the export, shown for reference) | Gloss (en) | Where |
|---|---|---|---|
| 필리핀에서 왔어요 | pillipineseo wasseoyo | I'm from the Philippines | `ko.d.introductions`; `meet` example row |
| 세부에서 왔어요 | sebueseo wasseoyo | I'm from Cebu | `ko.d.introductions` |
| 저는 필리핀 사람이에요 | jeoneun pillipin saramieyo | I'm Filipino | `ko.d.introductions` |
| 세부아노어 할 수 있어요 | sebuanoeo hal su isseoyo | I can speak Cebuano | `ko.d.introductions` (세부아노어 is the app's own Korean name for Cebuano in `LANGS`) |
| 필리핀 페소 | pillipin peso | Philippine peso | `ko.d.numbers-in-the-wild` |
| a dialogue variant of ko.g021 ending 필리핀에서 왔어요. 세부요. | | | `ko.d.introductions` |

**Process.** Target rows are shared by every native half. The lead adds these to the built-in en-ko course (`src/app.html`), runs `export_ko.js` (new ids are appended; old ids stay), checks `proof.js`, and then **every** native half (en, es, ceb) needs rows for the new ids before `validate.js` passes. A ceb-only addition is not possible in spec v1 (see §8).

**Later, for EPS-bound learners** [inference]: a workplace deck (공장 factory, 안전 safety, 조심하세요 be careful, 다쳤어요 I got hurt, 월급 salary, 기숙사 dormitory, 반장님 team leader). Its content should follow the official EPS-TOPIK materials, which were not opened (§11).

## 10. Review plan: 20 questions for the Bisaya-speaking friend

Each item is a passage from this profile with a question he can answer in under a minute. Ask him to answer "OK", or to write the natural version.

1. Why are you learning Korean: work in Korea (EPS), K-drama / K-pop, school, family, or something else? (Decides §2.2 order.)
2. What do you call the language in Bisaya: *Korean*, *Kinoreano*, or *pinulongang Koreano*? (§3.1)
3. Read the ten sample sentences in §3.3. Natural for a teacher in Cebu? Fix any word. Do you write *kon* or *kung*?
4. §3.4 Cebuano glosses (*gamay nga pulong nga motapot sa luyo sa noun*, *may buga sa hangin / hugot, walay hangin / humok*, *verb nga naghulagway*) and the gloss tags (formal) (polite) (casual) (honorific) in English: clear and natural?
5. Are English grammar terms inside Bisaya sentences (*ang verb*, *ang particle*, *ang object marker*) easier for you than Bisaya terms? (§2.3 house rule)
6. *Timan-i*, *Basaha*, *Ingna*, *Ablihi ang baba*: natural commands in a lesson, or too strong?
7. Is *Mas maayo nga matinahuron kaayo kaysa bastos* the right tone for "better too polite than rude"?
8. §6.1 vowels: do *o* and *u* (and *e* and *i*) sound the same to you in Bisaya words? Can you hear *so* vs *su* in Korean?
9. §6.1: say *Seoul* and *geu*. Did you say two vowels with a stop in between before reading the guide?
10. §6.1 consonants: is "your *k t p* sound like Korean kk tt pp" understandable? Is *ibuga ang hangin* the right phrase for a puff of air?
11. §6.1: *j* like the *dy* of *dyip*, and *ch* like the *ts* of *otso*: right for your speech?
12. §6.1 "Walay glottal stop" and "Walay stress": clear in Bisaya?
13. §4.4 table: are *Estudyante ko*, *Naa ko sa eskuwelahan*, *Naa koy iring*, *Naay eskuwelahan diri*, *Wala koy oras* all natural?
14. §9.1: for 미국에서 왔어요, is *Taga-Amerika ko* or *Gikan ko sa Amerika* the natural "I'm from the US"?
15. §4.9: in daily life, do you say the hour and your age in Spanish (*alas tres*, *baynte singko anyos*), in Bisaya, or in English?
16. §4.8: do you use *po* at all? Would one comparison of 요 with Tagalog *po* help, or annoy?
17. §4.8: do you call shop staff *Kuya / Ate*? Does "오빠 is for women only" surprise you?
18. §8.2 cards 7 and 9: *Kape ra ang akong imnon* and *Wala ko moadto kay puliki ko*: natural? Would you say *busy* instead of *puliki*?
19. §7, lesson 32: is *basin* a fair match for 혹시 ("by any chance")? Or *tingali*, or something else?
20. §7, lesson 26: *una, dayon, pagkahuman, mao nga, pero, sa katapusan* as story connectors: natural?

## 11. Gaps and unverified claims

**No native check yet.** Every Cebuano sentence, gloss, word choice and spelling in §3.3, §4, §6.1, §7, §8 and §9 is [inference] by a non-speaker. §10 orders what to check first.

**Evidence that does not exist or was not found**
- **No study of Cebuano speakers learning Korean.** All research cited is Filipino L1 (Manrique 2022; Jo, Kim & Kim 2008) or non-Filipino (Yoo & Kang 2018; arXiv 2023). Transfer to Cebuano rests on shared features (unaspirated stops; *sa*; *gusto*) and is [inference].
- **Manrique 2022:** 16 students, written work only, L1 "Filipino" unspecified, error levels inferred from course level, one judge.
- **Jo, Kim & Kim 2008:** 14 Filipina marriage migrants; the paper's arithmetic is inconsistent (9 + 3 of 14 reported as 92.9%), its Tagalog consonant count is given as both 16 and 15, and its ㅐ F1 figure differs between text and appendix. VOT units were not stated in the fetched text. Only the direction of the aspiration finding is used here with confidence.
- **The Cebuano vowel mergers (ㅗ/ㅜ, ㅔ/ㅣ) as a learner error** have no measurement; they are inferred from Cebuano's free variation. Jo et al. found no group difference for ㅜ, ㅡ and ㅔ, which weakly argues against ranking those vowels high for Filipino speakers in general.
- **Cebuano final stops** (released or not) and the exact quality of Cebuano *o* and *r*: not verified; the guide gives instructions, not claims.
- **How Korean listeners hear everyday Cebuano *k t p*** (closer to tense or to plain): not measured; the profile makes no such claim. **Jo et al. read twice:** a first summarising fetch assigned the VOT columns to the opposite groups from a second, narrow fetch that labelled each value; §5.1 uses the second. If the first were right, the direction of the tense-stop finding would reverse; the aspirated finding (too little air; ㅌ judged tense by 9 of 14) holds under the second reading and matches the paper's English abstract.

**Pages that could not be opened**
- EPS-TOPIK format and content: the HRD Korea page returned binary data, and the DMW EPS page was a login screen. Test format, item counts and pass marks are therefore not stated anywhere in this profile.
- Abastillas (2015), *Divergence in Cebuano and English code-switching practices* (Georgetown dissertation): ProQuest returned only the citation. How much English Cebuano teachers really use in class is unverified; §2.3's house rule rests on schooling facts, a small student study and press opinion.
- The Leon, Caugma & Dreisbach (2025) Hallyu study: abstract only; sample size unknown.
- Numbers of Cebuano speakers among EPS applicants, SPFL Korean schools in the Visayas and Mindanao, and Filipinos in Korea by home region: not found.

**Claims carried from the app's Cebuano profile** (`docs/profiles/en-ceb.md`, itself unverified by a native): the house spelling, *Manong / Manang / Kuya / Ate* use, "no *po*", *ikaw* with elders, Spanish numbers for time and prices, *wala* + *mo-*.

**Specific word choices to verify:** *matinahuron*, *puliki*, *basin* for 혹시, *timan-i*, *ibuga*, *pahiyom*, *eskuwelahan* vs *eskwelahan*, *estudyante*, *kapehan*, *pagkahuman*, *Diyes mil* for 10,000, *Jose* read with *h*, *Asa ang CR?*, "seen-zoned" as a Cebuano expression.

**Etymologies not verified:** 빵 via Japanese from Portuguese *pão*; the es-ko review flagged the same.

**Engine and format (for the lead)**
- `LANGS` already has `ceb` (`src/app.html`, `ceb:{name:'Cebuano (Bisaya)',…,ko:'세부아노어'}`), so the validator's LANGS check should pass; whether every halves tool accepts a three-letter code end to end (the Cebuano target course needed a `lib.js` change, `en-ceb.md` §10.1) was not tested here.
- No Cebuano `ui.json` / i18n: tab names stay English (§3.5) until spec §8.2's `UI` merge lands and someone writes the map.
- `hangul` (and possibly `sound-changes` and `meet`) need `_waive` for the reading guide and localisation (§3.6, §9.2).
- The pair layer (§8) and the Philippine rows (§9.4) need a spec change or an update to the built-in course; neither is possible inside spec v1 for one language alone.

## Sources

Web pages opened and used for this profile (2026-11-22):
- [Manrique, J. D. R. (2022). Error Analysis of Written Compositions of Filipino Learners of Korean as a Foreign Language. *UP Working Papers in Linguistics* 1(1)](https://linguistics.upd.edu.ph/wp-content/uploads/2022/08/14-Error-Analysis-of-Written-Compositions-of-Filipino-Learners-of-Korean-as-a-Foreign-Language.pdf)
- [Jo, S.-H., Kim, H.-G. & Kim, S.-J. (2008). 여성 결혼이민자들의 한국어 조음에 나타나는 음향음성학 특성 연구: 일본과 필리핀 출신 여성 결혼이민자들을 대상으로. *음성과학* 15(3)](https://koreascience.kr/article/JAKO200833338919695.pdf)
- [유소영 & 강현화 (2018; cited in the text as Yoo & Kang, a romanisation of the names not checked against the paper). Analysis of Phonemic Errors of Korean Learners According to Language and Proficiency. *Language Facts and Perspectives* 44 (abstract page; no Filipino learners)](https://koreascience.kr/article/JAKO201832547631780.page)
- [Comparison of L2 Korean pronunciation error patterns from five L1 backgrounds by using automatic phonetic transcription (arXiv 2306.10821, 2023; no Filipino learners)](https://arxiv.org/html/2306.10821v1)
- [de Chavez on why Korean is a "super hard" language (UP Department of Linguistics news)](https://linguistics.upd.edu.ph/news/de-chavez-on-why-korean-is-a-super-hard-language/)
- [Leon, L. I. D., Caugma, A. C. & Dreisbach, J. (2025). A Qualitative Case Study in Korean Language Learning Motivations of Filipino Hallyu Fans. *Development in Language Studies* 5(1) (abstract)](https://periodical.uthm.edu.my/index.php/dils/article/view/20069)
- [Binisaya.com: Dialectology, 3. Phonology](https://binisaya.com/content/dialectology-cebuano-phonology)
- [Wikipedia: Cebuano language (IPFS mirror)](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Cebuano_language)
- [Wikipedia: Cebuano grammar](https://en.wikipedia.org/wiki/Cebuano_grammar)
- [Wikipedia: Cebuano numerals](https://en.wikipedia.org/wiki/Cebuano_numerals)
- [Wikipedia: Philippine English](https://en.wikipedia.org/wiki/Philippine_English)
- [Wikipedia: Revised Romanization of Korean](https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean)
- [Wikipedia: Filipinos in South Korea](https://en.wikipedia.org/wiki/Filipinos_in_South_Korea)
- [Wikipedia: Bisalog](https://en.wikipedia.org/wiki/Bisalog)
- [Wikiwand: Bislish](https://www.wikiwand.com/en/Bislish)
- [Sales, A. J. G. (2022). Linguistic Borrowing of English Words and Utterances among Philippine's Generation Z in Cebuano Visayan. *Journal of Research and Innovation in Language* 4(1)](https://journal.unilak.ac.id/index.php/REILA/article/download/7559/3877/34193)
- [Briones, P. (2026). Linguistic appropriation. SunStar Cebu](https://www.sunstar.com.ph/cebu/briones-linguistic-appropriation)
- [Cebu Daily News (2024). Use of mother tongue as medium of instruction ends (RA 12027)](https://cebudailynews.inquirer.net/600005/use-of-mother-tongue-as-medium-of-instruction-ends/amp)
- [Rappler (2015). PH corners 14% of new foreign workers in S. Korea factories](https://www.rappler.com/nation/87929-ph-south-korea-quota-manufacturing-workers)
- [Department of Foreign Affairs (2021). 251 Filipino workers under ROK's labor migration program enter S. Korea](https://dfa.gov.ph/dfa-news/news-from-our-foreign-service-postsupdate/29964-251-filipino-workers-under-rok-s-labor-migration-program-enter-s-korea)
- [Manila Bulletin (2026). DepEd renews partnership with South Korea to expand Korean language program in public high schools](https://mb.com.ph/2026/03/04/deped-renews-partnership-with-south-korea-to-expand-korean-language-program-in-public-high-schools)
- [Cebu Daily News (2015). Article on two Cebu learners at a Korean culture and language workshop, King Sejong Institute Cebu (headline not recorded)](https://cebudailynews.inquirer.net/?p=74866)
- [Philstar (2008). Korean learning program seen to bare biz prospects (Cebu)](https://philstar.com/cebu-business/2008/11/01/411656/korean-learning-program-seen-bare-biz-prospects)

Local project files read: `docs/HALVES-SPEC.md`; `docs/profiles/en-es.md` (model); `docs/profiles/en-ceb.md` (§1–5, §10–11: house spelling, terms, register); `tools/target/ceb/REVIEW.md`; `tools/target/ceb/decks-a.js` (sample cards); `tools/halves/native/es/ko/work/README.md`; `tools/halves/native/es/ko/REVIEW.md`; `tools/halves/target/ko/{lessons,cards,sentences,dialog,patterns,practice,course}.jsonl/json`; `tools/halves/native/en/ko/{lessons.jsonl,cards.jsonl,ui.json,course.json}` and all 33 `lessons/*.html`; the `LANGS` table in `src/app.html`.

## Confirmed by the owner (2026-11-23)
- Speakers call the language **Bisaya**; the app shows it as "Bisaya (Cebuano)".
- Clock times and ages are said with Spanish numbers (alas dos, traynta anyos): confirmed. The notes and the `numbers` lesson that rest on this stand.
