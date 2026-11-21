# Vietnamese speakers learning English — course profile

Course `vi-en`. Audience: Vietnamese-speaking adults. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in Vietnamese. Answers and examples are in English.

**Evidence labels** follow `reports/Grammar learning order research.md`:
- **[research-backed]**: a study or dataset fetched for this profile, named, with its sample where it is small. "Abstract only" or "page summary only" is stated when the full paper was not read.
- **[curriculum convention]**: what Vietnamese textbooks, exam boards, prep sites or style guides do.
- **[practitioner opinion]**: a teacher's, guide's or author's stated view with no data behind it, or this profile's own inference (marked "inference").

Untagged rules in §6–§10 are design decisions, not findings.

## 1. Summary (10 lines max)

- Teach **American English** (`en-US` TTS, same English strings as `ko-en`). Explanations use **standard written Vietnamese, addressing the learner as *bạn*** and never with kinship pronouns (anh/chị/em). Grammar terms are the school ones (mạo từ, thì hiện tại đơn, danh từ đếm được).
- **Articles and plural -s lead the error evidence.** In the fetched studies, articles have the highest mean error count, and plural -s is omitted 41.7% of the time even in C1 speech. Third-person -s is close behind (58% verbal -s omission, small token count). Next come tense marking (đã/đang/sẽ are optional, so verbs stay bare), *be* omitted before adjectives, and noun-phrase order.
- **Endings are the pronunciation problem**, and the grammar errors partly ride on them. The weak spots are clusters, -s after a consonant, devoicing (*dog* → "đóc") and substitutions (/θ/→/t/, /ʃ/→/s/, /tr/→/tʃ/). Plain deletion of a single final consonant is rare in the one study that counted it.
- **Pronunciation aid: IPA between slashes, required on every card and example row** (`/aɪ θɪŋk soʊ/`), in a fixed General American key that marks stress (ˈ) and consonant-to-vowel linking (‿). Vietnamese learners meet IPA in textbooks and dictionaries, and a Vietnamese-letter respelling would hide exactly the endings they drop. Because the aid has no Vietnamese letters, `nativeScript` must be `null`. Vietnamese is then detected through `labels.cueTest` (a diacritics class).
- **Standing rule: `article-plural`** (as for ko/ja), keywords `mạo từ|số nhiều|đếm được`, flags `i`. It has zero parity cost, and the third-person -s alternative is weaker on both counts (§7).
- **Curriculum:** keep all 39 lessons; 27 are reweighted in the explanation only. Add `final-sounds` after `third-s` and `noun-phrase` after `adjectives`, both in A1. Drop none.
- Learners are false beginners with a listening and speaking gap: EF EPI 2025 gives reading 522 and writing 508 against listening 470 and speaking 461. Main motivators are IELTS and university TOEIC thresholds. Weight audio, minimal pairs and typed production.

## 2. Variant, register and voice

**Variant: American English** [practitioner opinion, inference].
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings, so spelling, examples and the IPA key must match the audio.
2. Vietnamese prep sites and textbooks mix conventions. The fetched IPA chart is British-style (44 sounds, /əʊ/, /ɒ/), but its example word is transcribed American (`/ˈtiː.tʃɚ/`) ([PREP](https://prepedu.com/vi/blog/bang-phien-am-tieng-anh-ipa-quoc-te)). So learners already meet both; the profile picks one key (§6).
3. IELTS is the leading test and is British-run, but it accepts any standard variety. The listening-paper accents are not an argument for the course's TTS.

Mention British forms only in a card `note` («Tiếng Anh-Anh: *flat*, *lift*»), never as an answer variant.

**Vietnamese variety: standard written Vietnamese, neutral vocabulary** [curriculum convention; practitioner opinion].
- Use the spelling and vocabulary of national textbooks. Where North and South commonly differ for an everyday object, give both, separated by « / »: *cốc / ly*, *quả / trái*, *thịt lợn / thịt heo*, *ô / dù*, *bát / chén*, *vừng / mè*. Use one consistent choice for the app's own voice: the first form in each pair.
- Avoid regional discourse particles in the app voice (*nha*, *hen*, *nghen*, *đấy à*). *Nhé* is allowed sparingly in encouragement («Thử lại nhé»); never use the deferential *ạ* in the app voice.
- **Tone-mark placement:** use the traditional placement found in most current print and apps: *hòa, khỏe, thủy, xòe*, not *hoà, khoẻ, thuỷ* [practitioner opinion; not verified against a fetched style rule, §11]. Pick it once and never mix.
- **Unicode NFC is mandatory** for every Vietnamese string (precomposed *ạ*, not *a* + combining dot). Nothing in the pipeline normalises, and a decomposed string fails both the standing-rule keywords and `cueTest` (tested locally: decomposed «Mạo từ» does not match `mạo từ`).

**Form of address: *bạn*, or no pronoun at all** [curriculum convention].
- Unbabel's Vietnamese guideline lists *tôi, chúng tôi, bạn, các bạn* as the pronouns usable in polite communication ([Unbabel](https://help.unbabel.com/hc/en-us/articles/360022945614-Language-Guidelines-Vietnamese)). Proton's guidance says to "omit pronoun subjects such as 'we' and 'you'" where they add nothing, and its examples use *bạn* ([Proton](https://localize.proton.me/t/guidance-for-vietnamese/3345)).
- Rules:
  - Prefer no subject: «Đã lưu.», «Hoàn thành bài học!». When a subject is needed, use *bạn*.
  - Never use *anh / chị / em / mình* for the learner. Vietnamese kinship pronouns encode age and gender, which the app does not know.
  - The app does not refer to itself except on the feedback page («Góp ý cho chúng tôi»).
  - Address a group, where unavoidable, as *các bạn*.
- **Inside translations (meanings, dialogue translations, `p`)** the pronoun follows the English situation. The default is *tôi / bạn*. Service dialogues (waiter, receptionist) may use *anh/chị* and *ạ* («Anh/chị dùng gì ạ?»), because that is how the Vietnamese speaker would actually say it. Explain the mismatch once in `polite` (§8): English *you* covers every *anh/chị/em/bạn*.

**Voice: short, friendly, explanatory, contrastive.** Sample sentences:
- «Tiếng Việt không có mạo từ, nên "a" và "the" là chỗ dễ sai nhất. Chỉ cần nhớ ba quy tắc.»
- «Tiếng Việt nói "Nó đói", nhưng tiếng Anh cần động từ to be: "He is hungry", không phải "He hungry".»
- «"Hôm qua" không thay được thì quá khứ. Có "yesterday" vẫn phải dùng "went".»

**Mixing English into Vietnamese text.** Both languages use Latin script, so English must always be visibly delimited:
- **Lesson HTML bodies:** English words and sentences in `<b>`. Vietnamese quoted phrases in curly quotes “…”.
- **Plain-text fields** (`why`, `hint`, `p`, `q`, card `note`, check explanations) cannot carry markup. There, put English inside straight double quotes: «Danh từ đếm được số ít cần mạo từ "a".» Use curly quotes “…” for Vietnamese quotations.
- **Error marking:** `✗` for the error and `✓` for the correction, with the arrow: `I'm teacher. ✗ → I'm a teacher. ✓`. Never colour alone.
- **Never inflect English with Vietnamese words placed inside it.** Write «các cụm động từ» (the phrasal verbs), not «các phrasal verbs».
- **Punctuation:** Vietnamese uses the same Latin punctuation. No space before `: ; ? !`; one space after a colon ([Unbabel](https://help.unbabel.com/hc/en-us/articles/360022945614-Language-Guidelines-Vietnamese)). Separate alternatives with ` / ` (spaced) as in ko-en.
- **Capitalisation:** sentence case. Days and months are lowercase inside a sentence (*thứ hai*, *tháng mười một*) ([Proton](https://localize.proton.me/t/guidance-for-vietnamese/3345)).

## 3. Glossary

Use these terms **exactly and consistently** in lesson bodies, `why`, `hint`, deck names and UI. "Fetched" means the term was seen on a fetched Vietnamese grammar page ([VietJack, danh từ và mạo từ](https://vietjack.com/ngu-phap-tieng-anh-co-ban/danh-tu-va-mao-tu.jsp); [PREP, thì hiện tại đơn](https://prepedu.com/vi/blog/thi-hien-tai-don-simple-present)). Those pages are prep sites, not MOET textbooks. Unmarked terms are [curriculum convention] from common Vietnamese ELT usage, not verified on a fetched page (§11).

| English term | Vietnamese term (use this) | Note |
|---|---|---|
| article | mạo từ | Fetched. **Standing-rule keyword.** Do not use *quán từ* (academic variant, seen in Phan 2016's title) |
| definite article (the) | mạo từ xác định | Fetched |
| indefinite article (a / an) | mạo từ bất định | Fetched (VietJack). In practice `why`, prefer «mạo từ "a"» |
| zero article | không dùng mạo từ | «Ở đây không dùng mạo từ» |
| noun | danh từ | Fetched |
| countable / uncountable noun | danh từ đếm được / danh từ không đếm được | Fetched. **Keyword «đếm được»** matches both |
| singular / plural | số ít / số nhiều | Fetched. **Keyword «số nhiều»** |
| plural -s | đuôi -s số nhiều | |
| classifier (cái, con, chiếc) | loại từ | Vietnamese grammar term; use when contrasting |
| pronoun / personal pronoun | đại từ / đại từ nhân xưng | Fetched (đại từ nhân xưng) |
| subject / object | chủ ngữ / tân ngữ | chủ ngữ fetched |
| object pronoun (me, him) | đại từ tân ngữ | |
| possessive adjective (my, his) | tính từ sở hữu | |
| possessive 's | sở hữu cách ('s) | |
| verb | động từ | |
| be | động từ to be | Fetched |
| ordinary verb | động từ thường | Fetched |
| auxiliary (do / does / did) | trợ động từ | Not on the fetched page, which writes "do/does" directly. Gloss once: «trợ động từ (do, does, did)» |
| modal verb | động từ khuyết thiếu | can, must, should, might |
| third-person singular | ngôi thứ ba số ít | Fetched. Name it in `why` (secondary emphasis, §7) |
| base form | động từ nguyên mẫu | The fetched page uses both *nguyên thể* and *nguyên mẫu*; use **nguyên mẫu** only |
| past form / past participle | dạng quá khứ (V2) / quá khứ phân từ (V3) | quá khứ phân từ fetched. V2/V3 is the school shorthand |
| -ing form | dạng V-ing | |
| regular / irregular verb | động từ có quy tắc / động từ bất quy tắc | |
| tense | thì | |
| present simple | thì hiện tại đơn | Fetched |
| present continuous | thì hiện tại tiếp diễn | |
| past simple | thì quá khứ đơn | |
| past continuous | thì quá khứ tiếp diễn | |
| future with will | thì tương lai đơn (will) | |
| be going to | tương lai gần (be going to) | |
| present perfect | thì hiện tại hoàn thành | |
| present perfect continuous | thì hiện tại hoàn thành tiếp diễn | |
| past perfect | thì quá khứ hoàn thành | |
| passive / active | câu bị động / câu chủ động | câu bị động fetched |
| conditional, first / second / third | câu điều kiện loại 1 / loại 2 / loại 3 | «câu điều kiện loại I» fetched; write Arabic numerals |
| relative clause / relative pronoun | mệnh đề quan hệ / đại từ quan hệ | |
| infinitive (to + verb) | động từ nguyên mẫu có "to" | |
| gerund | danh động từ | First mention «danh động từ (V-ing)» |
| phrasal verb | cụm động từ | |
| reported speech | câu tường thuật | |
| preposition / conjunction | giới từ / liên từ | |
| adjective / adverb | tính từ / trạng từ | |
| adverb of frequency | trạng từ chỉ tần suất | Fetched |
| comparative / superlative | so sánh hơn / so sánh nhất | |
| question word | từ để hỏi (Wh-) | |
| affirmative / negative / question | câu khẳng định / câu phủ định / câu nghi vấn | Fetched |
| word order | trật tự từ | |
| noun phrase | cụm danh từ | Title of `noun-phrase` |
| contraction (don't) | dạng rút gọn | |
| idiom | thành ngữ | |
| pronunciation | phát âm | |
| transcription (IPA) | phiên âm (IPA) | Dictionaries put it "giữa hai dấu gạch chéo" ([PREP](https://prepedu.com/vi/blog/bang-phien-am-tieng-anh-ipa-quoc-te)) |
| word stress | trọng âm | Fetched on PREP |
| linking | nối âm | |
| final sound(s) | âm cuối | Title of `final-sounds` |
| consonant cluster | cụm phụ âm | |
| vowel / consonant | nguyên âm / phụ âm | Fetched |
| long / short vowel | nguyên âm dài / nguyên âm ngắn | VietJack labels length «Dài» / «Ngắn» |
| diphthong | nguyên âm đôi | Fetched |
| voiced / voiceless | hữu thanh / vô thanh | VietJack uses *tỏ / điếc*. Use *hữu thanh / vô thanh*, the more widespread pair (unverified) |
| lesson | bài học | UI |
| practice (set) | luyện tập | UI |
| review (SRS) | ôn tập | UI |
| deck | bộ thẻ | UI |
| card | thẻ | UI |
| streak | chuỗi ngày học | UI: «Chuỗi 5 ngày» |
| hint | gợi ý | UI |
| check (3 questions) | kiểm tra nhanh | Button «Kiểm tra» |
| correct / incorrect | đúng / chưa đúng | Feedback «Chính xác!» / «Chưa đúng». Avoid a bare «Sai» |
| answer / explanation | đáp án / giải thích | `why` shown under «Giải thích» |
| try again | thử lại | |
| multiple choice | trắc nghiệm | Familiar exam format |
| word tiles | sắp xếp từ | |
| gap-fill | điền vào chỗ trống | |
| typed sentence | viết câu | |
| drills | bài luyện | |
| level / XP | cấp độ / XP | «Cấp 5» |
| pronunciation toggle | Hiện phiên âm | Replaces "romanization" |
| progress | tiến độ | Nav |
| feedback | góp ý | Nav |
| settings / sign in / sync | cài đặt / đăng nhập / đồng bộ | |

## 4. Persistent error zones

**Ranking.** Items with fetched production data come first, ordered by how many independent studies agree and how often the form occurs. The ranking is [practitioner opinion, inference]. Example format: error ✗ → correction ✓. **The "Why" line (the contrast with Vietnamese) and every example error are [practitioner opinion] unless the Evidence line names a study for them.**

**Main fetched evidence** (most are small Vietnamese university samples):
- [Disney & Le 2024](https://mdpi.com/2226-471X/9/10/327): 16 C1 Hanoi graduates, 240 minutes of presentations, 3,858 /s z/ tokens.
- [Le Thi Kim Duc 2024](https://jst.tnu.edu.vn/jst/article/download/10966/pdf): 57 non-English majors, grammar test plus paragraph.
- [Vo, Diep & Nguyen 2025](https://jsrd.thanhdo.edu.vn/index.php/khpt/article/download/311/202/2371): 49 B2–C1 English majors, 16,424 words, 1,007 errors.
- [Nguyen Thi Quyen 2018](https://js.vnu.edu.vn/FS/article/view/4248/3953): 99 TESOL majors, forced-choice article task.
- [Dao 2008](https://www.hpu.edu/research-publications/tesol-working-papers/2008-fall/6.2-05-Dao.pdf): 72 college students, aspect test and translation task. The year comes from the URL path.
- Tra Vinh study, IJELLR 8(4) 2020 ([page](https://eajournals.org/ijellr/vol-8-issue-4-september-2020/interlingual-errors-in-vietnamese-english-a-case-study-on-tra-vinh-university-students)): 40 students. Abstract only; authors not shown on the page. Its percentages are **shares of the 40 students who made the error at least once**, not error rates.
- [Tran 2018, SJSU guide](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf): a teacher's guide with examples and no data, so [practitioner opinion].
- [TEFL Academy](https://www.theteflacademy.com/blog/common-mistakes-of-vietnamese-learners-of-english/) and [llexi](https://llexi.com/l1-errors/common-english-errors-vietnamese-speakers.html): [practitioner opinion].

1. **Articles (a / an / the / none)**
   - *What goes wrong:* omission (`I have car`, `She is teacher`), *the* for a specific but unknown thing, and *a* with uncountables (`a salt`).
   - *Example:* `I want to be teacher. ✗ → I want to be a teacher. ✓`
   - *Why:* Vietnamese has no articles. *một* is the numeral "one", and classifiers (*cái, con, chiếc*) and demonstratives (*này, đó*) do other jobs. Errors on *the* and *a* rise where the referent is specific but not shared, or shared but not specific (Nguyen 2018 below).
   - *Evidence:*
     - [research-backed] Articles had the highest mean error count of six categories (1.47 per student, SD 1.05, against 0.96 for plurals) ([Le Thi Kim Duc 2024](https://jst.tnu.edu.vn/jst/article/download/10966/pdf)). Caveat: the paper's abstract names tense and prepositions as the main struggles, contradicting its own table, and it reports no inferential statistics.
     - [research-backed] Article misuse was about 25% of 487 misformation errors, and omissions were "mainly articles, prepositions and relative pronouns" (no count) ([Vo et al. 2025](https://jsrd.thanhdo.edu.vn/index.php/khpt/article/download/311/202/2371)).
     - [research-backed] *the* was chosen correctly 92% of the time in [+definite, +specific] contexts but only 56.5% in [+definite, −specific] contexts at pre-intermediate level (76.7% at intermediate). Errors tracked specificity, although most individual learners fit the definiteness or "fluctuation" patterns and only one fit a pure specificity pattern. About half the learners omitted articles before family nouns (`father of…`) ([Nguyen Thi Quyen 2018](https://js.vnu.edu.vn/FS/article/view/4248/3953)).
     - [research-backed, abstract only] All 40 Tra Vinh students made article omission or confusion errors.
2. **Plural -s and countability**
   - *Examples:* `I have two dictionary. ✗ → two dictionaries ✓` / `three friend ✗ → three friends ✓` / `some informations ✗ → some information ✓`
   - *Why:* Vietnamese marks number with a numeral or with optional *các / những*, and the noun never changes: *hai quyển từ điển*. Classifier phrases (*một cốc nước*) map onto English *a glass of water*, which learners may skip or overuse.
   - *Evidence:*
     - [research-backed] Plural -s was omitted in 41.7% of 1,511 plural nouns in C1 speech ([Disney & Le 2024](https://mdpi.com/2226-471X/9/10/327)).
     - [research-backed] Mean 0.96 plural errors per student, the third-highest category ([Le Thi Kim Duc 2024](https://jst.tnu.edu.vn/jst/article/download/10966/pdf)). [research-backed, abstract only] 97.5% of the Tra Vinh students omitted plural -s at least once.
     - [practitioner opinion] [Tran 2018](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf) §3.
     - Countability (*information, advice, furniture*) has no fetched source [practitioner opinion].
3. **Third-person -s and subject–verb agreement**
   - *Examples:* `Joe buy food on the weekend. ✗ → buys ✓` / `She have three meetings. ✗ → has ✓` / `He do his homework. ✗ → does ✓`
   - *Why:* Vietnamese verbs never agree with the subject. The -s is also a word-final /s z/ after a consonant, the hardest phonological spot (item 13).
   - *Evidence:*
     - [research-backed] Verbal -s was omitted in 58% of verb tokens in C1 speech ([Disney & Le 2024](https://mdpi.com/2226-471X/9/10/327)). **Caveat:** only 112 tokens, copulas and auxiliaries excluded, and third-person singular is not reported separately.
     - [research-backed] Mean 0.86 agreement errors per student, below articles and plurals ([Le Thi Kim Duc 2024](https://jst.tnu.edu.vn/jst/article/download/10966/pdf)). [research-backed, abstract only] All 40 Tra Vinh students made agreement errors.
     - Disney & Le conclude that L1 transfer alone cannot explain the omissions: morphology, phonology and word frequency add up, and individuals vary from 11.5% to 48.8% overall.
4. **Tense marking: bare verbs with time words**
   - *Examples:* `I go to school yesterday. ✗ → went ✓` / `I already go to school yesterday. ✗ → I went to school yesterday. ✓` / `I going to school now. ✗ → I'm going ✓` / `I study English for three years. ✗ → I've studied / I've been studying ✓`
   - *Why:* Vietnamese verbs do not inflect. *đã* (past), *đang* (in progress) and *sẽ* (future) are optional and often dropped when a time word (*hôm qua*, *bây giờ*) is present. *đã* also overlaps with *already*, so learners stack *already* on the past.
   - *Evidence:*
     - [research-backed, abstract only] 85% of the Tra Vinh students omitted tense or aspect suffixes.
     - [research-backed] Correct simple/progressive choice ranged from 25.5% to 61.7% for non-English majors and 48% to 88% for English majors ([Dao 2008](https://www.hpu.edu/research-publications/tesol-working-papers/2008-fall/6.2-05-Dao.pdf)).
     - [research-backed] Tense was a less frequent written error (mean 0.67) than articles in [Le Thi Kim Duc 2024](https://jst.tnu.edu.vn/jst/article/download/10966/pdf). In a grammar test with time words in view, learners do better than in speech [practitioner opinion].
     - [practitioner opinion] The examples come from [Tran 2018](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf) §1 and [llexi](https://llexi.com/l1-errors/common-english-errors-vietnamese-speakers.html).
5. ***be* omitted before adjectives (and before -ing)**
   - *Examples:* `He hungry. ✗ → He is hungry. ✓` / `My room very small. ✗ → My room is very small. ✓`
   - *Why:* Vietnamese adjectives are predicates on their own (*Nó đói*, *Phòng tôi rất nhỏ*). The copula *là* appears only before nouns (*Tôi là sinh viên*), so learners supply *be* before nouns and drop it before adjectives.
   - *Evidence:*
     - [research-backed] Learners omitted *be* in 11.1% to 38.2% of translation items (non-English majors) and 12% to 28% (English majors), most often in the complex sentence ([Dao 2008](https://www.hpu.edu/research-publications/tesol-working-papers/2008-fall/6.2-05-Dao.pdf)).
     - [research-backed, abstract only] 30% of the Tra Vinh students omitted *be* before adjectives.
     - [practitioner opinion] The *Nó đói* contrast is from [TEFL Academy](https://www.theteflacademy.com/blog/common-mistakes-of-vietnamese-learners-of-english/).
6. **Noun-phrase order: modifiers after the noun, possession with "of"**
   - *Examples:* `a car red ✗ → a red car ✓` / `an issue environmental ✗ → an environmental issue ✓` / `shop coffee ✗ → coffee shop ✓` / `Car of you is outside. ✗ → Your car is outside. ✓` / `the report of Lan ✗ → Lan's report ✓`
   - *Why:* Vietnamese puts adjectives and noun modifiers after the head (*xe đỏ*, *quán cà phê*), and marks possession with optional *của* after the noun (*xe (của) bạn*). English reverses both.
   - *Evidence:*
     - [research-backed, abstract only] Noun-modifier position errors were made by 100% of the Tra Vinh students, and adjective position errors by 97.5%.
     - [research-backed] "Sentence structure" was the second-largest category (mean 1.26), with examples such as `She very like music` ([Le Thi Kim Duc 2024](https://jst.tnu.edu.vn/jst/article/download/10966/pdf)).
     - [practitioner opinion] [Tran 2018](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf) §5 and §7; [llexi](https://llexi.com/l1-errors/common-english-errors-vietnamese-speakers.html).
7. **Adverb and degree-word placement (`very like`, `always is`)**
   - *Examples:* `I very like it. ✗ → I like it very much / I really like it. ✓` / `He always is late. ✗ → He is always late. ✓`
   - *Why:* *rất* precedes the verb (*tôi rất thích*), and Vietnamese adverbs of frequency sit before the predicate, with no copula to place them after.
   - *Evidence:* [research-backed] Errors on the "like very much" items reached 28% (English majors) and 40.4% (non-English majors) ([Dao 2008](https://www.hpu.edu/research-publications/tesol-working-papers/2008-fall/6.2-05-Dao.pdf)). [research-backed] 40% of the Tra Vinh students misplaced adverbs in the verb phrase (abstract only). [research-backed] `He always is late` is an example in [Le Thi Kim Duc 2024](https://jst.tnu.edu.vn/jst/article/download/10966/pdf).
8. **Verb form after verbs and modals; purpose with "for"**
   - *Examples:* `Lan can to play the piano. ✗ → can play ✓` / `You should to send it. ✗ → should send ✓` / `Lan like play the piano. ✗ → likes playing / likes to play ✓` / `He stopped for getting gas. ✗ → stopped to get gas ✓` / `He buyed a car. ✗ → bought ✓`
   - *Why:* Vietnamese verbs chain without markers (*thích chơi*). Purpose is *để* / *cho*, which learners render as *for*.
   - *Evidence:* [research-backed] Verb form and complementation were about 40% of 487 misformation errors ([Vo et al. 2025](https://jsrd.thanhdo.edu.vn/index.php/khpt/article/download/311/202/2371)); tense is folded in, with no separate count. The subtype counts in absolute numbers were computed by the fetch tool, not given by the paper. [practitioner opinion] The examples come from [Tran 2018](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf) §2 and [llexi](https://llexi.com/l1-errors/common-english-errors-vietnamese-speakers.html).
9. **Questions: wh-word left in place, "yes or no" tag, no auxiliary**
   - *Examples:* `Yesterday you went where? ✗ → Where did you go yesterday? ✓` / `Why you came early? ✗ → Why did you come early? ✓` / `Your group meets every week yes or no? ✗ → Does your group meet every week? ✓` / `You go to the office today? ✗ → Are you going…? / Did you go…? ✓`
   - *Why:* Vietnamese keeps statement order, puts the question word where the answer goes (*Bạn đi đâu?*), and forms yes/no questions with *có… không?* at the edges.
   - *Evidence:* [practitioner opinion] [Tran 2018](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf) §5; [llexi](https://llexi.com/l1-errors/common-english-errors-vietnamese-speakers.html). No fetched study counts it.
10. **Pronouns: one form for subject and object, kinship terms, no possessive or reflexive forms**
    - *Examples:* `I talk to she every day. ✗ → her ✓` / `Her talks to me. ✗ → She ✓` / `We have to help us. ✗ → ourselves ✓` / `My father he made tea. ✗ → My father made tea. ✓`
    - *Why:* Vietnamese personal reference uses kinship terms and names, which do not change form by position. Possession is *của* + noun. Reflexives use *tự / chính*.
    - *Evidence:* [practitioner opinion] [Tran 2018](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf) §6–§8. llexi adds he/she mismatches; but *anh ấy / cô ấy* do mark gender, so treat that as minor [practitioner opinion].
11. **Word forms: adjective vs adverb vs noun**
    - *Examples:* `She sings beautiful. ✗ → beautifully ✓` / `an independence worker ✗ → an independent worker ✓` / `It was become legal. ✗ → It became legal. ✓`
    - *Why:* one Vietnamese word serves as adjective, adverb and verb; English marks the role with suffixes.
    - *Evidence:* [practitioner opinion] [Tran 2018](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf) §4.
12. **Prepositions**
    - *Examples:* `in Monday ✗ → on Monday ✓` / `in 5 May ✗ → on 5 May ✓`
    - *Why:* *ở* covers in, on and at; *vào* covers time.
    - *Evidence:* [research-backed] Lowest mean in Le Thi Kim Duc 2024 (0.54), but about 20% of misformations in [Vo et al. 2025](https://jsrd.thanhdo.edu.vn/index.php/khpt/article/download/311/202/2371). Mixed evidence: teach the core set, no standing rule.
13. **Pronunciation.** Each item is tagged separately.
    - **Endings and clusters (the main problem; the framing differs from OTHERS.md).**
      - OTHERS.md says learners "drop final consonants". The fetched counts show a narrower pattern:
        - [research-backed] Plain deletion of a single final consonant was only 1.3% of productions. Cluster reduction (8.3–10.1%), substitution of single final consonants (16.2–17.1%) and devoicing (12–12.5%) dominated. Coronals (/t d n s z l/ and the sibilants) made up over 80% of substitutions ([Nguyen 2019](https://hs.kku.ac.th/ichuso/2019/034-ICHUSO-2019.pdf); 10 Mekong Delta English majors, 5 per group).
        - [research-backed] /s z/ were omitted in 46.7% of cases after a consonant against 19.7% after a vowel, and in 45.1% of grammatical -s against 16.8% of lexical /s z/. Grammatical -s after a consonant was worst (50.7%). Frequent words (*is*, *this*) were around 12% ([Disney & Le 2024](https://mdpi.com/2226-471X/9/10/327)).
        - [research-backed] Final-sound omission was the most widespread error type: 25 of 51 final-year English majors in an oral exam ([Ha Cam Tam 2005](https://js.vnu.edu.vn/FS/article/view/2072/1973); the table was partly garbled in extraction, so treat individual counts as approximate).
      - *Design consequence:* teach **endings after consonants**, clusters (/ks/ *six*, /st/ *last*, /nts/), and voicing (*dog* ≠ *dock*), not "say the last letter". Link endings to grammar (-s, -ed).
      - [practitioner opinion] Vietnamese-style substitutions: *pull* → "pun", *seed* → "sít", *dog* → "đóc", *like* lacking the final /k/ after /aɪ/ ([VnExpress 2016](https://vnexpress.net/am-cuoi-trong-tieng-anh-3502249.html)); /z s t v ks dʒ/ left out (*mice, right, manage*) ([TEFL Academy](https://www.theteflacademy.com/blog/common-mistakes-of-vietnamese-learners-of-english/)).
    - **Extra /s/ added**: an ending sound added to words like *hobby*, made by 13 of 51 students [research-backed: Ha Cam Tam 2005]. Hypercorrection: do not over-drill -s on singulars.
    - **-ed endings**: dropped, said with Vietnamese-like /t d/, or given the wrong allomorph. "The majority" of 31 students made several kinds of -ed error [research-backed, abstract only, no counts: [Pham Hai Yen 2023](https://vjol.info.vn/tctbgd/article/view/89826)].
    - **/θ/ → /t/ (Vietnamese aspirated *th*), /ð/ → /z/ or /d/**: [research-backed, abstract only, no percentages] /θ/ "most often" replaced by Vietnamese /tʰ/ and /ð/ by /z/, plus a new /dʒ/-for-/ð/ error ([Bui, IJAL](https://ejournal.upi.edu/index.php/IJAL/article/view/2744); 10 recorded adults plus 115 questionnaire respondents). [research-backed] ð→z/d in 10 of 51 students (Ha Cam Tam 2005). Note: Vietnamese spelling *th* is /tʰ/, so *think* read by spelling gives /tʰɪŋ/ [practitioner opinion].
    - **/ʃ/ → /s/, /tr/ → /tʃ/, /tʃ/ ↔ /ʃ/, /dʒ/**: [research-backed] the most frequent confusions in Ha Cam Tam 2005 were tr→tʃ (16 of 51 students), ʃ→s (15), dʒ→other (13) and t→tʃ (13). [practitioner opinion] *share/chair* confusion ([BoldVoice](https://boldvoice.com/blog/english-pronunciation-vietnamese-speakers)). Northern speakers merge Vietnamese *s/x* and *tr/ch*, which predicts this [practitioner opinion, inference].
    - **/p/ → /b/ at the start of words**: p→b in 9 of 51 students [research-backed: Ha Cam Tam 2005]. Vietnamese has initial *p* only in loanwords (*pin*) [practitioner opinion].
    - **/r/ → /z/, /l/ ↔ /n/**: r→z in 7 of 51 [research-backed: Ha Cam Tam 2005]. "/l/ and /r/… commonly mistaken for /n/ and /z/" [practitioner opinion: TEFL Academy]. The l/n merger is a known feature of some northern dialects [practitioner opinion, unsourced].
    - **Long vs short vowels**: *sheet/sit*, *beach/bitch*, *full/fool* ([TEFL Academy](https://www.theteflacademy.com/blog/common-mistakes-of-vietnamese-learners-of-english/); [BoldVoice](https://boldvoice.com/blog/english-pronunciation-vietnamese-speakers)). /æ/ has no Vietnamese equivalent, and *pay* is said as "pê" (BoldVoice). All [practitioner opinion].
    - **Stress, rhythm and vowel reduction**: Vietnamese is tonal and syllable-timed, so every syllable gets full weight, there is no schwa, and middle syllables of long words (*vacation*, *Wednesday*) are distorted (BoldVoice; llexi). [practitioner opinion].
    - **Linking**: words said as separate tone-bearing syllables, so *check it out* has no link. [practitioner opinion]. The listening score gap (§5) is consistent with this but does not prove it.

## 5. Learner starting point

**Proficiency**
- [research-backed, self-selected online test-takers] **EF EPI 2025, Vietnam:** 500, rank 64, with a global average of 488 ([EF fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-vietnam-english.pdf)). That is band "Moderate" (500–549), up from "Low" with 498 in 2024 ([Tuổi Trẻ, 20 Nov 2025](https://news.tuoitre.vn/vietnam-returns-to-global-moderate-english-proficiency-group-ef-103251120163417603.htm)). **Correction to OTHERS.md**, which gives 498 (≈63) as the 2025 figure; 498 is the 2024 score.
- **Skills (EF 2025):** reading 522, writing 508, **listening 470, speaking 461**. Unlike in Japan or Korea, writing is high and **listening is the second-weakest skill**.
- **Cities:** Hà Nội 532, Đà Nẵng 509, TP. Hồ Chí Minh 508, Cần Thơ 495. **Regions:** Red River Delta 526 against Mekong Delta 464. Workers aged 26–30 averaged 544 (Tuổi Trẻ).
- [research-backed, test-taker data] **IELTS Academic 2023–24, Vietnam:** mean 6.2 (listening 6.3, reading 6.4, writing 6.0, speaking 5.7), and the most common band was 6.0 (about 21%) ([Tuổi Trẻ](https://news.tuoitre.vn/60-most-common-score-among-vietnamese-ielts-test-takers-report-10382438.htm)). Speaking is again lowest.

**School and exams**
- [curriculum convention] National textbooks (*Global Success*) run pronunciation sections on IPA-labelled sounds, e.g. grade 6 unit 1: "Pay attention to the sounds /ɑː/ and /ʌ/" ([Lời giải hay](https://loigiaihay.com/a-closer-look-1-trang-8-unit-1-sgk-tieng-anh-6-moi-c134a21999.html); page summary only).
- [curriculum convention] **THPT graduation exam (2025 format):**
  - English became **elective**, with 40 multiple-choice items in 50 minutes.
  - "Các câu hỏi liên quan đến ngữ âm, trọng âm, giao tiếp đã được lược bỏ hoàn toàn." Pronunciation and stress items were removed; grammar is embedded in gap-fills and reading ([PREP](https://prepedu.com/vi/blog/cac-dang-bai-trong-de-thi-tieng-anh-thpt-quoc-gia)).
  - So adults who sat the exam before 2025 practised "choose the word pronounced differently" and stress items; younger learners did not.
  - Familiar formats: multiple choice, gap-fill and arranging. They map onto mc / fill / order.
- [research-backed, news report] **IELTS has displaced the school exam for many.**
  - Since 2017, an IELTS certificate exempts students from the THPT English exam (IELTS 4.0 = 10 points). About 47,000 students used the exemption in 2023, against 28,600 in 2021.
  - 16–22-year-olds were 62% of test-takers in 2022.
  - Dozens of universities use IELTS in admission ([Báo Quảng Ninh, Dec 2023](https://english.baoquangninh.vn/graduation-exemptions-for-ielts-entice-more-vietnamese-youths-3277175.html)).
- [curriculum convention, one institution's page] **TOEIC as a university exit requirement:** e.g. Dai Nam University required TOEIC ≥ 450 from 2016, and 40.5% of students met it in the IIG test ([Dai Nam](https://dainam.edu.vn/en/news/dai-nam-university-the-first-university-opens-toeic-test-for-students-in-iig-organization)). How widespread this is was not established (§11).
- [research-backed] University students report that phonetics was largely absent from high school ([Nguyen & Tran 2025](https://jst.tnu.edu.vn/jst/article/download/12642/pdf), 157 English majors). Their attitudes to IPA were neutral: "IPA chart too hard to memorise" M = 3.19 on a 5-point scale.
- [research-backed] Explicit phonetics instruction improved English majors' pronunciation ([Ton Nu My Nhat & Hoang Thi Thu Hien, 3L](https://ejournal.ukm.my/3l/article/view/70231); 50 students; abstract only).
- [research-backed] 85% of 40 surveyed English majors said grammar was taught mainly through rules ([Vo et al. 2025](https://jsrd.thanhdo.edu.vn/index.php/khpt/article/download/311/202/2371)).

**Implications for the app** [practitioner opinion, inference]
1. **Start at A1 but move fast.** Adults are false beginners who know the rule names (thì hiện tại đơn, ngôi thứ ba số ít). Explanations can be short and use the §3 terms.
2. **Listening is the gap, not only speaking.** Use audio on every row, IPA showing endings and links, minimal pairs, and a dedicated `final-sounds` lesson.
3. **Typed production over recognition.** Rule knowledge is good, and the errors that remain (articles, -s, be) are production errors.
4. **Do not gate on late forms.** Even C1 graduates omit plural -s 41.7% of the time in speech.
5. **IELTS framing sells.** Use IELTS Speaking Part 1-style topics (hometown, work or study, hobbies) in small talk, and TOEIC-style office vocabulary in the work deck.

## 6. Pronunciation aid policy

**Evidence and practice**
- **For IPA:**
  - National textbooks label sounds with IPA (/ɑː/, /ʌ/) [curriculum convention: Lời giải hay].
  - Prep sites teach the 44-sound IPA chart and note that dictionaries print transcriptions "giữa hai dấu gạch chéo" [curriculum convention: [PREP](https://prepedu.com/vi/blog/bang-phien-am-tieng-anh-ipa-quoc-te); [VietJack](https://vietjack.com/tai-lieu-mon-tieng-anh/bang-phien-am-tieng-anh-ipa.jsp)].
  - A prep article warns against "Việt hoá" pronunciation, says "việc quy đổi mọi âm từ tiếng Anh sang âm trong tiếng Việt rất dễ khiến người học mắc lỗi", and recommends learning IPA [practitioner opinion: [Mytour](https://mytour.vn/vi/blog/bai-viet/ve-ban-chat-cluster-la-gi-nhung-sai-lam-trong-cach-phat-am-cac-cluster-pho-bien-trong-speaking-va-cach-khac-phuc.html)].
  - Explicit phonetics instruction helped [research-backed, abstract only: Ton Nu & Hoang].
- **Against IPA, or limits:**
  - Students were neutral on whether the chart is too hard to memorise (M = 3.19) and on confusing letters with symbols (M = 2.94, leaning to disagree), but agreed they lacked phonetics in high school (M ≈ 3.55–3.65) [research-backed: Nguyen & Tran 2025].
  - So familiarity is partial: common symbols are recognised, but full fluency in reading IPA cannot be assumed.
- **Against Vietnamese-letter respelling** [practitioner opinion, inference]:
  - Vietnamese syllables allow only a few unreleased final consonants (*p t c ch m n ng nh*) and no clusters. A respelling cannot write final /s z v f l dʒ/ or /ks st/, so *bus* becomes «bớt» and *six* «xích».
  - Those are the very endings learners drop (§4.13).
  - VnExpress's examples of the error («gốt», «đóc», «sít») *are* Vietnamese respellings.
- **No fetched study compares IPA, respelling and no aid for Vietnamese learners.** The decision below is inference.

**Decision: IPA in every `pron` field (`"pron": "required"`), between slashes, in the fixed key below. It is shown by default and hidden with the toggle «Hiện phiên âm». The `pron` lesson teaches the key on one screen.**
- **Why required, not optional:** PIPELINE §3 notes the engine has never had to render an empty pron. Every card then carries an aid, as in ko-en.
- **Why not "none":** listening is the documented weakness. IPA shows the endings, stress and links that learners do not hear.

**Consequence for profile.json** (validator mechanics, checked in `tools/content/validate.js` and `lib.js`):
- `pronOk` sends every pron through `isNative(p, english)`. With a `nativeScript` regex set, the pron would have to contain Vietnamese letters, so **IPA cannot validate unless `nativeScript` is `null`**.
- With `null`, `isNative` means "non-empty and different from the English after lower-casing and stripping punctuation". Undelimited IPA would equal the English for *bed, pen, ten, him, set*. **The slashes are what make every pron differ.**
- Vietnamese detection then moves to `labels.cueTest`, a diacritics class. The validator requires it on every mc `q` and every type `hint`, and the DSL uses it for cue injection. Both cue strings contain diacritics and match it (tested).
- **Cost:** card meanings, glosses and translations are checked only for "differs from English", not for Vietnamese letters. A meaning that is just a loanword (*taxi*, *pizza*, *OK*) fails, so write «gọi taxi», «bánh pizza», «được, OK».
  - Content agents should self-check that every meaning contains at least one Vietnamese diacritic, or is a full Vietnamese phrase.
  - Pipeline request (§11): a `nativeTest` field separate from the pron test.
- The pack bans `//` anywhere. The pattern below never allows two adjacent slashes.

**IPA key (General American, matching `en-US` TTS).** This is the profile's own design. It uses Cambridge-style US symbols that learners meet in online dictionaries (e.g. PREP's `/ˈtiː.tʃɚ/`) and keeps the British-chart length mark ː that Vietnamese charts teach. Syllable dots, the flap mark t̬ and optional-sound brackets are dropped. **Each `pron` must be built only from these symbols.**

| Sound | Symbol | Example |
|---|---|---|
| see | iː | /siː/ |
| sit | ɪ | /sɪt/ |
| bed | e | /bed/ (never ɛ) |
| happy (final), weak he / she / you / to | i, u (no length mark) | /ˈhæpi/, /hi/, /ʃi/, /ju/, /tu/ before a vowel |
| cat | æ | /kæt/ |
| hot, stop, dog, talk | ɑː | /hɑːt/, /dɑːg/, /tɑːk/ (no ɒ; US merger) |
| door, four (before r only) | ɔː | /dɔːr/, /fɔːr/ |
| book | ʊ | /bʊk/ |
| food | uː | /fuːd/ |
| cup | ʌ | /kʌp/ |
| about (unstressed) | ə | /əˈbaʊt/ |
| teacher (unstressed -er) | ɚ | /ˈtiːtʃɚ/ |
| bird (stressed er) | ɝː | /bɝːd/ |
| day, my, boy, go, now | eɪ, aɪ, ɔɪ, oʊ, aʊ | /deɪ/, /maɪ/, /bɔɪ/, /goʊ/ (never əʊ), /naʊ/ |
| car, here, where, tour | ɑːr, ɪr, er, ʊr | /kɑːr/, /hɪr/, /wer/, /tʊr/ |
| p b t d k g | p b t d k g | ASCII **g**, not ɡ |
| f v θ ð s z ʃ ʒ h | same | /θɪŋk/, /ðɪs/, /ʃiː/, /ˈvɪʒən/ |
| church, judge | tʃ, dʒ | /tʃɝːtʃ/, /dʒʌdʒ/ |
| m n ŋ l r | same | /sɪŋ/ |
| yes, we | j, w | /jes/, /wiː/ |

**Rules for writing `pron`:**
1. **Format.**
   - One slash group per English sentence: `/aɪ θɪŋk soʊ/`. Two sentences on one card become two groups separated by one space: `/aɪ hæv‿ə dɑːg/ /ðə dɑːg‿ɪz soʊ kjuːt/`.
   - English alternates written with ` / ` become groups joined by ` / `: `/ˌfɪfˈtiːn/ / /ˈfɪfti/`.
   - Lowercase IPA only: no punctuation (drop `? ! . ,`), no capitals, no digits, no Vietnamese letters.
   - Never two adjacent slashes.
2. **Exact code points.** Use ː (U+02D0), never a colon. Use ˈ (U+02C8) and ˌ (U+02CC), never an apostrophe. Use ɑ (U+0251), never a. Use ‿ (U+203F) and ASCII g. The pattern rejects `:`, `'`, `ɡ`, `ɛ`, `ɒ` and `əʊ`.
3. **Sound, US values.** Write *r* wherever it is said (`/kɑːr/`). Write the flap as /t/ (`/ˈwɑːtɚ/`); the audio carries it, and the `pron` lesson says so.
4. **Stress.** Put ˈ before the stressed syllable of every word of two or more syllables (`/ˈstuːdənt/`, `/təˈdeɪ/`). Monosyllables are unmarked. Use ˌ only for the secondary stress of numbers in -teen and compounds (`/ˌfɪfˈtiːn/`).
5. **Endings in full, always.** This is the point of the aid. Write:
   - every final consonant and cluster: `/læst/`, `/sɪks/`, `/wɝːks/`;
   - plural and third-person -s as /s/, /z/ or /ɪz/ by sound: `/triːz/`, `/ˈbʌsɪz/`;
   - -ed as /t/, /d/ or /ɪd/: `/wɑːtʃt/`, `/pleɪd/`, `/ˈwɑːntɪd/`.
   - Write the careful form even where fast speech elides (`last weekend` → `/læst ˈwiːkend/`).
6. **Weak forms** in sentences: a /ə/, an /ən/, the /ðə/ (/ði/ before a vowel sound), to /tə/, of /əv/, and /ən/, for /fɚ/, at /ət/, can /kən/, was /wəz/. Use the strong form when stressed or sentence-final (`What are you looking at` → … `/æt/`). Keep *you* as /ju/.
7. **Linking ‿.** Mark it **only** where a word ending in a consonant sound is followed, in the same sentence, by a word beginning with a vowel sound: `/tɝːn‿ɪt‿ɑːn/`, `/aɪm‿ə ˈstuːdənt/`. It shows the final consonant carrying over, which is the Vietnamese learner's way into saying it. Do not mark other links (vowel–vowel, r-linking).
8. **Names and Vietnamese words inside English sentences:** transcribe the usual English pronunciation, not the Vietnamese one. Minh /mɪn/, Lan /lɑːn/, Huy /hwiː/, Hanoi /hæˈnɔɪ/, Da Nang /dɑː ˈnɑːŋ/, Ho Chi Minh City /hoʊ tʃiː mɪn ˈsɪti/, pho /fʌ/, banh mi /ˈbɑːn miː/. These are approximations (§11).
9. **Numbers** are transcribed as said: `1998` → `/ˌnaɪnˈtiːn ˈnaɪnti eɪt/`.
10. **No aid in practice items** (PRACTICE-SPEC). The aid appears only on cards and `{{ex:…}}` rows. Naming a single sound in a `why`, `hint` or lesson body is allowed («đuôi /z/»), because that is explanation, not an aid.
    - **The pack bans `//` anywhere**, not only in `pron`. Wherever IPA appears (`why`, notes, lesson bodies), never put two slashes together: write «/s/, /z/ hoặc /ɪz/», never «/s//z/».
    - **Recommended tool:** a `tools/content/vi/pron_check.js` like ja's, with a word-to-IPA lexicon built from the key, because the pattern cannot catch legal but wrong IPA.
11. **Validator:** `pronPattern` (tested with the `u` flag on every example below and on 11 bad strings):
    ```
    ^(?!.*əʊ)/[a-bd-pr-vwzæɑɔəɚɝɪʊʌθðʃʒŋˈˌː‿ ]+/(?:(?: | / )/[a-bd-pr-vwzæɑɔəɚɝɪʊʌθðʃʒŋˈˌː‿ ]+/)*$
    ```
    The letter ranges exclude c, q, x, y and capitals, which catches English spelling pasted in place of IPA. The pattern cannot catch wrong-but-legal IPA (`/hot/`); content review must.

**Worked examples.** The English comes from the existing course except where marked. Every row passed `nativeTester` (nativeScript null) and the pattern in `node`.

| English | `pron` | Rules shown |
|---|---|---|
| It's cold today. | /ɪts koʊld təˈdeɪ/ | 1 no punctuation, 4 stress, oʊ not əʊ |
| I'm a student. | /aɪm‿ə ˈstuːdənt/ | 7 linking, 6 weak *a* |
| I have a dog. The dog is so cute. | /aɪ hæv‿ə dɑːg/ /ðə dɑːg‿ɪz soʊ kjuːt/ | 1 two groups, 3 US ɑː, ASCII g |
| My brother works in Seoul. | /maɪ ˈbrʌðɚ wɝːks‿ɪn soʊl/ | 5 cluster /ks/, 7 linking carries the /s/ |
| Does he speak English? | /dʌz hi spiːk‿ˈɪŋglɪʃ/ | 1 no `?`, 5 final /k/ linked, weak *he* /hi/ |
| She doesn't eat meat. | /ʃi ˈdʌzənt‿iːt miːt/ | 5 /nt/ cluster, 7 |
| I went to the beach last weekend. | /aɪ went tə ðə biːtʃ læst ˈwiːkend/ | 5 careful /st/, 6 weak *to*, *the* |
| I watched a movie (es-profile sentence) | /aɪ wɑːtʃt‿ə ˈmuːvi/ | 5 -ed as /t/ |
| three trees | /θriː triːz/ | TH vs TR, 5 plural /z/ |
| Turn it on. | /tɝːn‿ɪt‿ɑːn/ | 7 double linking |
| Turn on the light. / Turn the light on. | /tɝːn‿ɑːn ðə laɪt/ / /tɝːn ðə laɪt‿ɑːn/ | 1 alternates |
| fifteen / fifty | /ˌfɪfˈtiːn/ / /ˈfɪfti/ | 4 stress tells them apart |
| Can I get a latte, please? | /kən‿aɪ get‿ə ˈlɑːteɪ pliːz/ | 6 weak *can*, 3 flap written t |
| I was born in 1998. | /aɪ wəz bɔːrn‿ɪn ˌnaɪnˈtiːn ˈnaɪnti eɪt/ | 9 numbers, ɔːr |
| bed (illustrative) | /bed/ | slashes make it differ from the English |

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "mạo từ|số nhiều|đếm được", "flags": "i" }`.
- At least half of each practice set's `order` items and half of its `type` items must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much).
- The `why` of each such item must contain **mạo từ**, **số nhiều** or **đếm được**.
- `flags: "i"` is needed because a `why` often starts with «Mạo từ…» (tested: matches). Text must be NFC (§2).

Sample `why` lines (plain strings, English in straight quotes):
- «"Teacher" là danh từ đếm được số ít, nên cần mạo từ "a".»
- «Có "two" thì danh từ phải ở dạng số nhiều: "books".»
- «"Water" là danh từ không đếm được: không có mạo từ "a", không thêm -s.»
- «Lần thứ hai nhắc đến, cả hai đã biết là con chó nào, nên dùng mạo từ "the".»

**Justification:**
- **Articles are the most consistently documented error.** They had the highest mean error count ([Le Thi Kim Duc 2024](https://jst.tnu.edu.vn/jst/article/download/10966/pdf)) and a quarter of misformations at B2–C1 ([Vo et al. 2025](https://jsrd.thanhdo.edu.vn/index.php/khpt/article/download/311/202/2371)). Learners' errors track specificity (fluctuation between definiteness and specificity) ([Nguyen Thi Quyen 2018](https://js.vnu.edu.vn/FS/article/view/4248/3953)) [research-backed]. Vietnamese has no articles [practitioner opinion; standard contrastive description].
- **Plural -s persists to C1:** 41.7% omission in speech ([Disney & Le 2024](https://mdpi.com/2226-471X/9/10/327)) [research-backed].
- **Zero parity cost.** The shared tile and typed items were written to the Korean rule, so only the Vietnamese `why` must name the point [practitioner opinion; consequence of PILOT-SPEC §1.6]. ja reached the same conclusion.

**Why not `verb-core` (agreement, do-support, inversion)?** A reader will see 58% verbal -s against 41.7% plural -s and ask.
- The 58% rests on **112 verb tokens**, excludes copulas and auxiliaries, and is not reported for third-person singular separately. The 41.7% rests on 1,511 nouns.
- In writing, agreement errors are fewer than article and plural errors (0.86 vs 1.47 and 0.96 per student, Le 2024).
- `verb-core`'s heuristic is built around Spanish do-support and inversion. Vietnamese question errors (wh-in-situ, *yes or no?*) are documented only by practitioners.
- Switching may make the shared items fail the heuristic in some lessons (not run) and force rewrites, which is a parity cost.
- *Verdict:* articles/plurals stay as the validated rule. Agreement becomes the **secondary emphasis** below. If the pipeline later implements a combined kind (OTHERS.md lists `article-tense` and similar), Vietnamese is the natural first user (§11).

**Secondary emphasis (not validated; do not add these words to `keywords`):**
- Where an item also involves third-person -s, the `why` names **ngôi thứ ba số ít**.
- Where *be* is required before an adjective, it names **động từ to be** («Tính từ cần động từ to be đi trước: "She is tired"»).
- Where a time word appears with a past form, it says the time word does not replace the tense («Có "yesterday" vẫn phải dùng thì quá khứ đơn»).
- Do not put the keywords mạo từ / số nhiều / đếm được in `why` lines of items that do not hinge on them.
- PRACTICE-SPEC has no dictation item. Making the plural audible (OTHERS.md: "dictation items that end in -s") is an engine request (§11), not a rule here.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions** (same as ja):
- **keep** = adapt as-is: a fresh Vietnamese explanation from the Vietnamese point of view, with English rows, checks and practice unchanged.
- **reweight** = same English checks and practice. The Vietnamese explanation and the lesson-body example rows shift emphasis as noted. Lesson-body rows are not parity-bound; check and practice strings are. No deviation entry is needed, unless body changes are large enough that the lead wants a note (ja filed one for `pron`).
- **add** = new lesson. It needs `extraLessons` in `deviations.json` and `lessonOrder.after` in profile.json.

| lesson id | verdict | note for Vietnamese speakers |
|---|---|---|
| pron | reweight | Teach the IPA key (§6) on one screen. Vietnamese set: TH→/t/ (*think/tink*), /ð/→/z/, /ʃ/–/s/ (*she/see*), /tʃ/–/ʃ/ (*chair/share*), /tr/≠/tʃ/ (*tree/chee*), initial /p/ (*pie/buy*), /r/≠/z/, /l/≠/n/, long/short (*sheep/ship*), stress. Shared items are kept for parity: rice/lice (r vs l) and bag/back (final voicing, *dog* → «đóc») are relevant; fan/pan and vote/boat target no Vietnamese contrast, and think/sink is not the θ→t error, so add *three/tree*, *thank/tank* in body rows. The `why` lines explain from Vietnamese (*th* in Vietnamese spelling = /tʰ/) |
| be | reweight | Core lesson. *là* only before nouns; adjectives need *be*: «Nó đói» → He is hungry. Warn both ways: `He hungry ✗` and `I am agree ✗` (the latter is [practitioner opinion]) |
| it-there | reweight | *có* = "have" and "there is": «Có nhiều người» → There are many people, not *Have many people*. «Trời mưa» → It's raining (*trời* ≠ the sky) |
| articles | reweight | Classifiers (*cái, con, chiếc*) and *một* are not articles. "a = one of many, the = we both know which", not "a particular one" (Nguyen 2018: errors track specificity). Job nouns: «Tôi là giáo viên» → I'm a teacher |
| plurals | reweight | *các / những* are optional, but -s is not. A numeral does not replace -s (*hai quyển sách* → two books). The -s must be *heard*: /s z ɪz/ preview, linked to `final-sounds` |
| present | reweight | SVO matches Vietnamese; say so and move on. Spend the time on frequency adverbs: `He always is late ✗` → He is always late; I always get up… |
| questions | reweight | Wh-word goes first, not where the answer goes (*Bạn đi đâu?* → Where are you going?). *có… không?* → Do you…?; never `…, yes or no?` |
| third-s | reweight | Name it «ngôi thứ ba số ít». Stress that the -s must be *said* (58% omitted even at C1, Disney & Le). Both /s/ and /z/ |
| final-sounds | **add** (after `third-s`, A1) | See "Additions" below |
| prep | keep | *ở* → in / on / at; *vào* + time → on Monday, at 7, in May |
| countable | reweight | Classifier phrases → a glass of / a bowl of / a piece of (*một cốc nước*, *một bát phở*). Uncountables: information, advice, homework, furniture, luggage |
| object-have | reweight | Vietnamese pronouns do not change form: `I talk to she ✗` → her. Possession with *của*: `car of me ✗` → my car. *có* (have vs there is) recap |
| can-like | reweight | No *to* after *can* (`can to play ✗`). `I very like ✗` → I really like / I like it very much (Dao 2008). like + -ing / to |
| polite | reweight | Vietnamese politeness lives in kinship pronouns and particles (*ạ, dạ, vui lòng*); English politeness lives in could / would / please. English *you* covers anh/chị/em/bạn. Translations use anh/chị where natural (§2) |
| continuous | reweight | *đang* ≈ be + -ing, but *be* is obligatory: `I going ✗` → I'm going. Stative verbs (know, like) take no -ing |
| past | reweight | *đã* is optional; *hôm qua* does not replace -ed. Say the -ed: /t/ /d/ /ɪd/, with the IPA showing it. `already go yesterday ✗` |
| irregular-past | keep | Warn about over-regularising (`buyed ✗`, Tran 2018) |
| the | keep | Second mention = known to both: matches the `articles` reweight |
| adjectives | reweight | Adjective before the noun (*xe đỏ* → red car), no -s on adjectives, adverb form (sing *beautifully*). Comparatives as ko |
| noun-phrase | **add** (after `adjectives`, A1) | See "Additions" below |
| going-to | keep | *sẽ* covers both will and going to; the contrast is the same as in ko |
| tense | reweight | Recap built on «đã / đang / sẽ không phải là thì»: time words plus a tense, never instead of it |
| joining | reweight | Paired conjunctions: «Vì… nên…» → because **or** so, not both. «Tuy… nhưng…» → although **or** but [practitioner opinion] |
| numbers | reweight | Separators swap: Vietnamese 1.000 = one thousand, 2,5 = 2.5. nghìn / triệu / tỷ → thousand / million / billion. Big đồng prices (50.000 đồng = fifty thousand dong). Dates dd/mm vs US month/day |
| smalltalk | reweight | Vietnamese ask age, marital status and salary early in order to choose a kinship pronoun; English does not need this, so avoid these openers. Safe topics: hometown, food, work or study, weekend (IELTS Part 1 topics) |
| past-continuous | keep | |
| will | keep | *sẽ* ≈ will; promises and offers |
| perfect | reweight | *đã từng* ≈ ever (Have you ever…?). «Bạn ăn chưa?» → Have you eaten yet? *rồi* ≈ already |
| modals | reweight | No *to* after modals (`should to ✗`). *phải* = must / have to; *không cần phải* = don't have to ≠ mustn't |
| to-ing | reweight | Purpose is *to*, not *for* (`stopped for getting gas ✗` → stopped to get gas). stop smoking vs stop to smoke |
| articles-2 | keep | |
| first-conditional | reweight | «Nếu… thì…»: English drops *then* and never uses *will* after *if* |
| relative | reweight | Good news: Vietnamese also modifies after the noun (*người bạn sống ở Hà Nội*). The trap is the missing pronoun: `a friend lives in Hanoi ✗` → a friend who lives… (*mà* is optional in Vietnamese, but *who/that* is not) |
| phrasal | keep | |
| perfect-2 | reweight | «Tôi sống ở đây từ năm 2020» → I've lived here since 2020; «được 5 năm» → for five years |
| narrative | keep | |
| conditionals | keep | Label them loại 2 / loại 3 (school terms) |
| passive | reweight | *bị* (adverse) and *được* (beneficial) both map to be + V3. Intransitive verbs have no passive: `The accident was happened ✗`, `It was become ✗` (Tran 2018) |
| reported | keep | |
| email | reweight | «Kính gửi anh/chị…», «Trân trọng» → Hi / Dear + name, Best regards. Name order: *Nguyễn Văn Minh* signs "Minh Nguyen" for English readers or explains it; greeting by given name is fine |
| idioms | keep | |

**Totals:** 39 existing lessons: 12 keep, 27 reweight, 0 dropped. Plus 2 additions, which are the only lesson-level parity exceptions. All verdicts are [practitioner opinion] grounded in the §4 contrasts.

**Additions**

1. **`final-sounds`: «Âm cuối và đuôi -s, -ed»** (after `third-s`; A1 grows to 25 with both additions).
   - *Reason:* endings are the single most-documented pronunciation problem, and they carry the grammar.
     - Grammatical -s after a consonant is omitted 50.7% of the time at C1 (Disney & Le).
     - Cluster reduction, substitution and devoicing dominate over plain deletion (Nguyen 2019).
     - Final-sound omission was the most widespread error in Ha Cam Tam 2005.
     - No ko-en lesson owns it.
   - *Placement:* after both plural -s (`plurals`) and third-person -s (`third-s`) are known. -ed is previewed here and drilled in `past`.
   - *Deck:* new deck «Âm cuối» (§9).
   - *Content outline:*
     1. Vietnamese finals are few and unreleased, while English finals are released and can be clusters.
     2. -s after a consonant: /s/ *books*, /z/ *dogs*, /ɪz/ *buses*. The same three sounds serve plural -s, third-person -s and possessive 's.
     3. Clusters: /ks/ *six*, /st/ *last*, /nts/ *students*.
     4. Voicing at the end: *bag/back*, *dog/dock*, *seed/seat*.
     5. Linking: the final consonant moves to the next vowel (*works‿in*, *turn‿it‿on*), shown by ‿ in the IPA.
     6. -ed preview: /t/ *watched*, /d/ *played*, /ɪd/ *wanted*.
     7. Don't add an -s where none belongs (*hobby*; Ha Cam Tam).
   - *Practice (text-only, 14 items, ko `pron` set as the model):* mc pairs by meaning («"Sáu" là từ nào?» → six / sick / sit / sip; «"Cái túi"?» → bag / back / bat / bad). Order and type items hinge on plurals, so the standing rule is met:
     - order `p:"hai chiếc xe buýt"`, `a:["two","buses"]`, `x:["bus"]`, why «Có "two" nên dùng số nhiều; "bus" thêm -es, đọc /ɪz/.»
     - type `p:"sáu học sinh"`, `a:["six students"]`, `x:["student"]`, why «Có "six" nên "students" ở dạng số nhiều, cụm phụ âm /nts/.»
     - fill `q:"She __ in Hanoi."`, `a:["works"]`, `o:["work","worked","working"]`, why «"She" là ngôi thứ ba số ít…»
   - *Parity:* new lesson id plus a new deck (count deviation).
2. **`noun-phrase`: «Cụm danh từ: tính từ, danh từ ghép và 's»** (after `adjectives`, A1).
   - *Reason:* noun-modifier and adjective position errors were made by 100% and 97.5% of 40 students (Tra Vinh, abstract only). Tran 2018 and llexi document `an issue environmental`, `Car of you`, `the report of Marina`. ko-en's `adjectives` covers adjective-before-noun in one line, and no lesson covers noun + noun or 's.
   - *Deck:* existing «Mua sắm · thanh toán» (no new deck).
   - *Content outline:*
     1. English modifiers come first, Vietnamese after: *xe đỏ* → a red car, *quán cà phê* → a coffee shop (the head comes last).
     2. Noun + noun: the first noun works like an adjective and stays singular (*a shoe shop*, not *shoes shop*).
     3. 's vs *của*: *điện thoại của Lan* → Lan's phone. *my / your* replace *của tôi / của bạn* (`phone of me ✗`).
     4. The article goes before the whole phrase: *an old red car* (*an* because *old* starts with a vowel sound).
   - *Practice:* order items with an article or plural distractor:
     - `p:"một chiếc xe cũ"`, `a:["an","old","car"]`, `x:["a"]`, why «Mạo từ đứng trước cả cụm; "old" bắt đầu bằng nguyên âm nên dùng "an".»
     - `p:"hai cửa hàng giày"`, `a:["two","shoe","shops"]`, `x:["shoes"]`, why «Danh từ đứng trước giữ số ít; chỉ danh từ chính "shops" ở dạng số nhiều.»
   - *Parity:* new lesson id only.

**Considered and not added:**
- A separate tense-markers lesson: `tense` and `past` reweights cover đã/đang/sẽ.
- A pronouns lesson: `object-have` covers it.
- A *be*-before-adjectives lesson: `be` is reweighted to centre on it.

## 9. Vocabulary and cultural notes

**Localise in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets.** English strings use plain ASCII forms (no Vietnamese diacritics inside English). Vietnamese strings use full diacritics.

| ko-en | vi-en (English side) | Vietnamese side |
|---|---|---|
| Minji | Minh (alternatives: Lan, Huy, Linh, Mai) | Minh |
| Seoul | Hanoi | Hà Nội |
| Busan | Ho Chi Minh City (Da Nang as alternate) | TP. Hồ Chí Minh / Sài Gòn; Đà Nẵng |
| Daegu, other cities | Hue, Can Tho, Hai Phong | Huế, Cần Thơ, Hải Phòng |
| Seoul National University | "a university in Hanoi" (generic) | |
| kimchi, bibimbap | pho, banh mi, spring rolls, iced coffee | phở, bánh mì, nem / chả giò, cà phê sữa đá |
| K-pop, K-drama | V-pop, a TV series (genres, no artist names) | nhạc V-pop |
| Gangnam | the Old Quarter (Hanoi), District 1 (HCMC) | phố cổ, Quận 1 |
| Chuseok, Korean New Year | Tet (Lunar New Year), Mid-Autumn Festival | Tết, Trung thu |
| 존댓말 / 반말 | anh / chị / em vs bạn comparisons | |
| won (₩) | dong (VND). Use dollars in US-setting scenes | đồng |
| Mr. Kim | Mr. Nguyen / Ms. Tran | anh Nguyễn / chị Trần (in translation, pick by context) |

- **Do not use "Anh" as a character name**, though it is a common Vietnamese name: in Vietnamese meanings it collides with *tiếng Anh* (English) and the pronoun *anh*.
- Write *Hanoi* (English convention) in English strings and *Hà Nội* in Vietnamese strings.
- Money: «45.000 đồng» on the Vietnamese side, *forty-five thousand dong* / *45,000 dong* on the English side. Note the separator swap (§8 `numbers`).

**Checks and practice:** Korean proper nouns in shared English strings (Seoul, Busan, kimchi, K-pop, Minji) stay unchanged (parity). Translate the Vietnamese side literally: *Seoul*, *Busan*, *kim chi*, *K-pop*. That reads as a Vietnamese learner talking about Korea, which is natural; Korean culture is popular in Vietnam [practitioner opinion]. Do not file per-item deviations. If localisation is wanted later, it is one bulk deviation with reason "localisation".

**Parity cost of localising cards:** parity compares English targets per deck position. Every localised card (e.g. `My name is Minji.` → `My name is Minh.`, `I'm from Korea.` → `I'm from Vietnam.`, `Do you speak Korean?` → `Do you speak Vietnamese?`, `Your Korean is really good!`, `the Korean embassy`) needs a `decks["<deck name>"]` entry listing the card indexes, as ja did. DIALOG and EXAMPLES keyed by those targets must be re-keyed.

**Deck names** (Vietnamese, same order as ko; ` · ` as separator like ko):

| ko | vi |
|---|---|
| 인사 | Chào hỏi |
| 자기소개 | Giới thiệu bản thân |
| 생존 영어 1 / 2 | Tiếng Anh cấp tốc 1 / 2 |
| 길 묻기·교통 | Hỏi đường · giao thông |
| 식당 주문 | Gọi món ở nhà hàng |
| 카페·편의점 | Quán cà phê · cửa hàng tiện lợi |
| 쇼핑·계산 | Mua sắm · thanh toán |
| 숫자·시간·날짜 | Số · giờ · ngày tháng |
| 스몰토크 | Trò chuyện xã giao |
| 감정·반응 | Cảm xúc · phản ứng |
| 칭찬·호감 표현 | Lời khen · thiện cảm |
| 직장·이메일 | Công sở · email |
| 전화·문자 줄임말 | Điện thoại · viết tắt khi nhắn tin |
| 여행(공항·호텔) | Du lịch (sân bay · khách sạn) |
| 병원·긴급 | Bệnh viện · khẩn cấp |
| 구동사 | Cụm động từ |
| 발음 주의 | Phát âm dễ sai |
| 영어 관용구 | Thành ngữ tiếng Anh |
| 영화·드라마·슬랭 | Phim ảnh · tiếng lóng |

**Deck changes** [practitioner opinion unless noted]:
- **Add «Âm cuối»** (required by `final-sounds`, ≥ 20 cards, count deviation):
  - minimal pairs that differ only at the end: *six / sick*, *bag / back*, *dog / dock*, *seed / seat*, *rice / rise*, *nine / night*, *card / car*, *wash / watch*, *mice / my*;
  - -s triples *book(s) /s/*, *dog(s) /z/*, *bus(es) /ɪz/*;
  - -ed triples *watched / played / wanted*;
  - clusters *last, next, desks, months, asked*.
  - Each `note` names the ending («đuôi /z/», «cụm phụ âm /ks/»).
- **«Phát âm dễ sai»**: keep the ko cards (their IPA changes, not the English) and append Vietnamese-specific pairs: *three / tree*, *thank / tank*, *she / see*, *ship / sip*, *chair / share*, *watch / wash*, *pie / buy*, *pea / bee*, *rice / lice* (kept), *light / night*, *ship / sheep*, *full / fool*. Appending cards needs a `decks` entry (ja precedent).
- **Optional third deck «Lỗi dịch từ tiếng Việt»** (calques, ≥ 16 cards). Content agents must check each item before use; no fetched source lists them:
  - *open / close the light* → turn on / off the light (*mở / tắt đèn*);
  - *Have many people* → There are many people (*có*; llexi lists this one);
  - *I very like* → I really like (*rất thích*; Dao 2008 measures it);
  - *play with friends* for adults → hang out with friends (*chơi*);
  - *go to the market* used for the supermarket;
  - *How to say…?* → How do you say…?
- **Small talk**: add IELTS-Part-1-style cards (*Where's your hometown? What do you do? Do you work or study?*). The `note` warns against age and salary questions.
- **Travel**: departures from Noi Bai / Tan Son Nhat, grab a motorbike taxi → "ride-hailing app", tipping (rare in Vietnam, expected in the US).
- **Work and email**: TOEIC-style office vocabulary (meeting, deadline, invoice, schedule). Replace «Kính gửi anh/chị» with *Hi* / *Dear* + name; sign-offs.
- **Phone and text abbreviations**: keep the English (lol, btw, OMW). Explain with Vietnamese texting equivalents (*k* = không, *dc* = được, *hihi*) in notes.

## 10. Interface wording notes

[Curriculum convention from the Proton and Unbabel guidelines, otherwise practitioner opinion; the Microsoft Vietnamese style guide could not be read, §11.]

- **Register:** *bạn* or no pronoun (§2). Sentences such as toasts, empty states and dialogs are short declaratives: «Đã lưu.», «Hôm nay bạn đã ôn xong!», «Chưa có thẻ nào cần ôn.»
- **Buttons:** verb first, bare verb, no subject, no final period: «Bắt đầu», «Tiếp tục», «Kiểm tra», «Lưu», «Gửi», «Bỏ qua», «Thử lại», «Xem đáp án». A primary CTA may add an object: «Bắt đầu học», «Xem bài học». Proton: neutral buttons use the infinitive. Capitalise only the first word.
- **Exclamation marks** are uncommon in Vietnamese UI (Proton). Use them only for correct-answer feedback («Chính xác!») and milestones («Chuỗi 7 ngày!»).
- **Counters.** Vietnamese has no plural form. `Intl.PluralRules('vi')` has the single category `other` (checked locally, ICU 78.3), so 1 and 2 use the same pattern.

  | English | Vietnamese |
  |---|---|
  | N cards due | N thẻ cần ôn |
  | N lessons | N bài học |
  | N days | N ngày |
  | N-day streak | Chuỗi N ngày |
  | N words | N từ |
  | N questions | N câu |
  | N min | N phút |
  | N XP | N XP |
  | Level N | Cấp N |
  | N% | N% (no space) |

  Supply identical forms for 1 and 2 where the validator asks for both.
- **Numbers and dates** (Intl `vi-VN`, checked locally):
  - `1.234.567,5`: dot thousands, comma decimals. Vietnamese is the reverse of English here.
  - Currency: `45.000 ₫` from Intl. In copy write «45.000 đồng».
  - Dates: long `Thứ Hai, 16 tháng 11, 2026`; short `16/11/2026` (dd/mm/yyyy). Weekday and month names are lowercase mid-sentence.
  - Time: 24-hour `21:05`.
  - Years have no separator (*năm 2026*) (Proton).
- **Script and font:**
  - All strings NFC (§2).
  - Vietnamese stacks two marks on one vowel (*ệ, ổ, ẫ*), so labels need line-height ≥ 1.4 and no `overflow:hidden` clipping above the cap height.
  - The engine's body and display font is DM Sans. Its Vietnamese coverage was not verified (§11). If glyphs fall back mid-word, the engine agent should load a Vietnamese-capable subset or font.
  - IPA symbols (ɪ ʊ ə θ ð ʃ ŋ ˈ ‿) will likely fall back to system fonts. That is acceptable but should be checked on device.
- **Bottom nav (7 tabs, ~50–55px each at 390px, about 8 Latin characters):**

  | English | Vietnamese label | Chars |
  |---|---|---|
  | Today | Hôm nay | 7 |
  | Practice | Luyện tập | 9 (sole exception; fallback «Luyện») |
  | Review | Ôn tập | 6 |
  | Lessons | Bài học | 7 |
  | Read | Đọc | 3 |
  | Progress | Tiến độ | 7 |
  | Feedback | Góp ý | 5 |

  *Luyện tập* is the glossary term and pairs with *Ôn tập*. If the 390px zero-overflow check fails, use «Luyện» on the tab only and keep «Luyện tập» everywhere else.
- **UI glossary** (must match §3):

  | English | Vietnamese |
  |---|---|
  | deck / decks | bộ thẻ |
  | card | thẻ |
  | streak | chuỗi ngày học (counter: «Chuỗi N ngày») |
  | streak at risk | Sắp mất chuỗi ngày học |
  | review (noun / tab) | ôn tập |
  | cards due | thẻ cần ôn |
  | lesson | bài học |
  | practice | luyện tập |
  | check (lesson quiz) | kiểm tra nhanh |
  | hint | gợi ý |
  | answer / explanation | đáp án / giải thích |
  | correct / incorrect | Chính xác! / Chưa đúng |
  | skip | bỏ qua |
  | settings | cài đặt |
  | sign in / sign out | đăng nhập / đăng xuất |
  | sync | đồng bộ |
  | backup | sao lưu |
  | level | cấp độ (counter «Cấp N») |
  | progress | tiến độ |
  | feedback | góp ý («Góp ý cho chúng tôi» on the page title) |
  | show pronunciation | Hiện phiên âm |
- **Language names:** `Intl.DisplayNames('vi')` returns «Tiếng Anh» / «Tiếng Việt» (checked locally). Mid-sentence, write «tiếng Anh».
- **i18n validator note:** with `nativeScript: null`, the interface validator warns on translations identical to the English key. Brand terms (XP, email, OK) may trigger it; accept those warnings.

## 11. Gaps and unverified claims

- **Blocked or unread sources:**
  - Microsoft Vietnamese Style Guide PDF (returned as binary). §10's button and register rules therefore rest on Proton and Unbabel only.
  - The full PDFs of Phan Thị Ngọc Lệ 2016 (article errors, ULIS), Lê Thanh Hòa 2014 (final consonants, Dong Nai) and Pham Hai Yen 2023 (-ed). Only abstract pages were read; Phan and Lê give no figures and are not used as evidence.
  - Swan & Smith, *Learner English*, "Vietnamese speakers" chapter (never opened).
- **Abstract-only or weak evidence:**
  - Tra Vinh 2020: abstract only, authors unknown, and percentages are shares of 40 students, not error rates.
  - Bui (/θ ð/): abstract only, no percentages, year not stated.
  - Ton Nu & Hoang: abstract only.
  - Global Success textbook: page summary only.
  - Disney & Le's verbal -s figure rests on 112 tokens and is not third-person-specific; past -ed was not analysed.
  - Nguyen 2019 has 10 speakers.
  - Ha Cam Tam 2005's table was partly garbled in extraction.
  - Vo et al. 2025's subtype counts are the fetch tool's arithmetic, and the paper has internal inconsistencies.
  - Le Thi Kim Duc 2024's abstract contradicts its own results.
  - Dao's year comes from the URL path.
- **No fetched source for:**
  - question formation, pronouns and reflexives, word forms, countability of *information/advice*, paired conjunctions (*vì… nên*), the *bị/được* passive, `I am agree`, the calque list in §9, and the l/n dialect merger (all [practitioner opinion]);
  - stress, rhythm and linking for Vietnamese learners.
- **Pronunciation aid:**
  - No study compares IPA, respelling and no aid for Vietnamese learners.
  - How much IPA adults actually read is uncertain. The one fetched survey is neutral (Nguyen & Tran 2025), and the fetched textbook evidence is one exercise heading.
  - The symbol key is the profile's design. No Cambridge Dictionary page was opened to confirm individual transcriptions, so content agents should check new words against a US dictionary.
  - English pronunciations of Vietnamese names (/hwiː/, /fʌ/) are approximations.
- **Validator trade-off:** `nativeScript: null` (forced by IPA) weakens the "meaning is Vietnamese" check to "differs from English". **Pipeline request:** a separate profile field (e.g. `nativeTest`) for meanings and translations, so Vietnamese can require diacritics there while keeping IPA in `pron`. Also, PRACTICE-SPEC has no dictation item type, so listening-for-endings practice needs an engine feature.
- **Standing rule:** a combined article/plural + agreement kind would fit Vietnamese better than either existing kind. It is not implemented, so `article-plural` is used.
- **Learner context:**
  - EF EPI is a self-selected online test. The 2026 fact sheet exists and was not fetched.
  - IELTS figures come from news reports of IDP/BC data.
  - TOEIC exit requirements were verified for one university only.
  - The grade-3-to-12 compulsory English curriculum and the share of adults taught under it were not verified.
- **Engine rendering:** `src/app.html` `expandEx` splits `{{ex:…}}` on `|` only and renders `pron` in the mono font (`.pron`), so slashes and ‿ pass through; on-device glyph coverage for IPA in DM Mono was not checked.
- **Conventions not verified:** the tone-mark placement choice (*hòa* vs *hoà*), *hữu thanh / vô thanh*, *động từ khuyết thiếu* and the other unmarked glossary terms, and Vietnamese glyph coverage of DM Sans (engine check).

## Sources

Web pages opened and used:
- [Disney & Le (2024). *Languages* 9(10), 327 (MDPI): /s z/ omission in C1 Vietnamese speakers' presentations (description; exact title not recorded)](https://mdpi.com/2226-471X/9/10/327)
- [Le Thi Kim Duc (2024). Grammatical challenges in written English: common errors among Vietnamese learners. *TNU Journal of Science and Technology* 229(12)](https://jst.tnu.edu.vn/jst/article/download/10966/pdf)
- [Vo, Diep & Nguyen (2025). Syntactic error patterns in Vietnamese university EFL writing. *Journal of Scientific Research and Development* 4(4)](https://jsrd.thanhdo.edu.vn/index.php/khpt/article/download/311/202/2371)
- [Nguyen Thi Quyen (2018). English article choices by Vietnamese EFL learners. *VNU Journal of Foreign Studies* 34(2)](https://js.vnu.edu.vn/FS/article/view/4248/3953)
- [Dao, D. V. (2008, from URL). HPU TESOL Working Papers 6(2): Vietnamese learners' tense/aspect, be and adverb-placement errors (description; exact title not recorded)](https://www.hpu.edu/research-publications/tesol-working-papers/2008-fall/6.2-05-Dao.pdf)
- [Interlingual errors in Vietnamese English: a case study on Tra Vinh University students. IJELLR 8(4), 2020 (abstract)](https://eajournals.org/ijellr/vol-8-issue-4-september-2020/interlingual-errors-in-vietnamese-english-a-case-study-on-tra-vinh-university-students)
- [Tran, S. N. (2018). Guide for Multilingual Student Writing: Common English-Vietnamese Errors (SJSU)](https://gcp-web.sjsu.edu/wac/docs/VietnameseEnglishGuide.pdf)
- [Nguyen, H. D. (2019). IC-HUSO 2019 paper 034, Khon Kaen University: word-final consonant errors by Vietnamese English majors (description; exact title not recorded)](https://hs.kku.ac.th/ichuso/2019/034-ICHUSO-2019.pdf)
- [Ha Cam Tam (2005). Một số khó khăn phổ biến về ngữ âm của người Việt học tiếng Anh. *VNU Journal of Science, Foreign Languages* XXI(1)](https://js.vnu.edu.vn/FS/article/view/2072/1973)
- [Bui, T. S. Pronunciation of consonants /ð/ and /θ/ by adult Vietnamese EFL learners. *Indonesian Journal of Applied Linguistics* (abstract)](https://ejournal.upi.edu/index.php/IJAL/article/view/2744)
- [Pham Hai Yen (2023). *Tạp chí Thiết bị Giáo dục* 299: action research on -ed pronunciation errors (description; abstract page only)](https://vjol.info.vn/tctbgd/article/view/89826)
- [Nguyen Tien Dat & Tran Thi Mai (2025). Exploring challenges and student-driven solutions in phonology learning at tertiary education level. *TNU Journal of Science and Technology* 230(08)](https://jst.tnu.edu.vn/jst/article/download/12642/pdf)
- [Ton Nu My Nhat & Hoang Thi Thu Hien. Pronunciation competence and phonetics instruction in the Vietnamese tertiary context. *3L* (abstract)](https://ejournal.ukm.my/3l/article/view/70231)
- [Phan Thị Ngọc Lệ (2016). Những lỗi sai cơ bản về cách sử dụng quán từ trong văn bản học thuật Tiếng Anh của người Việt. *Ngôn ngữ và Đời sống* (abstract page; terminology only)](https://vjol.info.vn/NNDS/article/view/32802)
- [Lê Thanh Hòa (2014). Common English pronunciation errors of final consonants and consonant clusters by Dongnai University students. *Ngôn ngữ và Đời sống* (abstract page; not used as evidence)](https://www.vjol.info.vn/index.php/NNDS/article/view/20281)
- [TEFL Academy: Common mistakes of Vietnamese learners of English](https://www.theteflacademy.com/blog/common-mistakes-of-vietnamese-learners-of-english/)
- [llexi: Common English errors by Vietnamese speakers](https://llexi.com/l1-errors/common-english-errors-vietnamese-speakers.html)
- [BoldVoice: English pronunciation for Vietnamese speakers](https://boldvoice.com/blog/english-pronunciation-vietnamese-speakers)
- [VnExpress (2016). Âm cuối trong tiếng Anh](https://vnexpress.net/am-cuoi-trong-tieng-anh-3502249.html)
- [Mytour: Cluster và những sai lầm khi phát âm](https://mytour.vn/vi/blog/bai-viet/ve-ban-chat-cluster-la-gi-nhung-sai-lam-trong-cach-phat-am-cac-cluster-pho-bien-trong-speaking-va-cach-khac-phuc.html)
- [PREP: Bảng phiên âm IPA](https://prepedu.com/vi/blog/bang-phien-am-tieng-anh-ipa-quoc-te)
- [VietJack: Bảng phiên âm tiếng Anh IPA](https://vietjack.com/tai-lieu-mon-tieng-anh/bang-phien-am-tieng-anh-ipa.jsp)
- [VietJack: Danh từ và mạo từ](https://vietjack.com/ngu-phap-tieng-anh-co-ban/danh-tu-va-mao-tu.jsp)
- [PREP: Thì hiện tại đơn](https://prepedu.com/vi/blog/thi-hien-tai-don-simple-present)
- [PREP: Các dạng bài trong đề thi tiếng Anh THPT 2025](https://prepedu.com/vi/blog/cac-dang-bai-trong-de-thi-tieng-anh-thpt-quoc-gia)
- [Lời giải hay: A Closer Look 1, Unit 1, Tiếng Anh 6 Global Success](https://loigiaihay.com/a-closer-look-1-trang-8-unit-1-sgk-tieng-anh-6-moi-c134a21999.html)
- [EF EPI 2025 fact sheet: Vietnam](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-vietnam-english.pdf)
- [Tuổi Trẻ News (2025). Vietnam returns to global moderate English proficiency group](https://news.tuoitre.vn/vietnam-returns-to-global-moderate-english-proficiency-group-ef-103251120163417603.htm)
- [Tuổi Trẻ News. 6.0 most common score among Vietnamese IELTS test takers](https://news.tuoitre.vn/60-most-common-score-among-vietnamese-ielts-test-takers-report-10382438.htm)
- [Báo Quảng Ninh (2023). Graduation exemptions for IELTS entice more Vietnamese youths](https://english.baoquangninh.vn/graduation-exemptions-for-ielts-entice-more-vietnamese-youths-3277175.html)
- [Dai Nam University: TOEIC as graduation standard](https://dainam.edu.vn/en/news/dai-nam-university-the-first-university-opens-toeic-test-for-students-in-iig-organization)
- [Proton localisation: Guidance for Vietnamese](https://localize.proton.me/t/guidance-for-vietnamese/3345)
- [Unbabel: Language Guidelines — Vietnamese](https://help.unbabel.com/hc/en-us/articles/360022945614-Language-Guidelines-Vietnamese)

Local files read: `/home/claude/docs/profiles/es.md`, `ja.md`, `OTHERS.md` (Vietnamese section); `/home/claude/reports/Grammar learning order research.md`; `/home/claude/docs/PILOT-SPEC.md`, `PIPELINE.md`, `PRACTICE-SPEC.md`; `/home/claude/tools/content/lib.js`, `validate.js`, `ko/` (lessons, decks, practice `pron`), `ja/profile.json`, `ja/deviations.json`, `es/profile.json`; `/home/claude/src/app.html` (fonts, read-only).
