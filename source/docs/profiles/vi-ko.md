# Vietnamese speakers learning Korean: pair profile

Course `vi-ko` teaches Korean to speakers of Vietnamese. It is a standard course assembled from two halves (`docs/HALVES-SPEC.md`):
- the reviewed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards);
- a Vietnamese native half `tools/halves/native/vi/ko/`, filled by four writers (w1–w4, `mk_native.js`).

This profile is the writers' authority. It settles up front what the es-ko review had to fix afterwards (`native/es/ko/REVIEW.md`): terms, fixed glosses, address, tab names, lesson titles and deck labels. It follows the structure of `docs/profiles/tl-ko.md` and the house style of `docs/profiles/vi.md` (§2, §3, §10) and `en-vi.md` (§2.3–2.7). It says where it departs from them.

**Evidence tags:**
- **[research]**: a study opened for this profile.
- **[reference]**: a reference page opened.
- **[convention]**: a Vietnamese Korean-teaching page opened.
- **[author]**: the author's knowledge, not checked against an opened page. **Every Hán-Việt reading, hanja and Vietnamese sentence here is [author] unless tagged otherwise**; the author is not a native speaker.
- **[inference]**: this profile's reasoning.

Untagged rules are design decisions.

## 1. Summary

1. **Prose:** standard written Vietnamese, neutral vocabulary, Northern standard spelling. The learner is **bạn** or no pronoun. No *anh / chị / em*, *ạ* or *nha* in the app voice (§3.1).
2. **Terms:** the closed list in §3.3. Tabs as in `tools/i18n/vi/ui.json`: **Hôm nay, Luyện, Ôn tập, Bài học, Tiến độ**.
3. **Glosses:** the English tag alone carries politeness: (trang trọng) / (lịch sự) / (thân mật) / (kính ngữ).
   - Pronouns are *tôi / bạn*; casual lines use no pronoun, or *mình / cậu*.
   - **ạ** appears only on honorific or humble lines (§3.2).
4. **Hán-Việt is the big bridge** (59.8% of Sino-Korean words have a Vietnamese Sino counterpart: Kim 2008, in Phan 2026 [research, secondary]).
   - Codas correspond: ㄱ↔c/ch, ㄴ↔n, ㄹ↔t, ㅁ↔m, ㅂ↔p, ㅇ↔ng/nh.
   - Readings come **only from the §5.1 whitelist**, with false friends taught alongside.
5. **Sounds.**
   - Bridges: *th* = ㅌ; *t, c, ch* ≈ ㄸ ㄲ ㅉ; unreleased finals; *ư* = ㅡ.
   - Traps: no aspirated *k / p / ch*; **no final l** (ㄹ → ㄴ, research-backed); tones on stop-final syllables; a glottal stop that blocks linking; Vietnamese spelling habits on the romanization (§4).
6. **Grammar.**
   - SOV and particles.
   - The noun phrase is a **mirror image** (*túi to* / 큰 가방), except counters.
   - One *ở* = 에 / 에서; *là / có / ở* = 이에요 / 있어요.
   - Tense: optional *đã / sẽ* vs obligatory endings; ***chưa*** = past negative.
   - *ạ* ≠ 요 (§5).
7. **Prompts:** cue tense (*đã, sẽ*) and level (the tag). "I'm from ___": gloss the row as it stands (§8).
8. **Confidence:** moderate for sounds and Hán-Việt; low for Vietnamese wording (no native check, §10).

## 2. Learners

- Vietnamese are about 28% of foreign students and 60% of language trainees in Korea (2019, cited in Jang & You 2022) [research, secondary].
- Goals [inference]: study in Korea, EPS work, K-drama and K-pop, Korean firms in Vietnam.
- They know Hán-Việt from school.

## 3. Register, terms and settled names

### 3.1 Variety, voice, typography

- **Vocabulary:** national-textbook vocabulary, Northern standard spelling. For North/South pairs, the app voice uses the first form (*cốc, quả, thịt lợn, bát*), as `vi.md` §2 does. Card meanings may give both (*cốc / ly*).
- **Voice:** use **bạn**, or no subject at all («Đọc to từng khối chữ.»).
  - Commands are the bare verb; use *hãy* sparingly.
  - *nhé* at most once per lesson, in encouragement.
  - Never *anh / chị / em / mình* for the learner, never *ạ* in the app voice.
- **Spelling:** **NFC** everywhere. Traditional tone placement (*hòa, khỏe, thủy*). *y* in established words (*Mỹ, lý do, kỹ năng*; the interface writes *Kỹ năng*).
- **Names:** *tiếng Hàn* (lowercase mid-sentence), *Hàn Quốc*, *người Hàn*, *Hangul*, *Seoul, Busan, Jeju*.
  - Korean names stay as romanized (*Minsu, Gangnam*). Never Vietnamise them, and never use old Hán-Việt place names (*Hán Thành* ✗).
- **Quoting:**
  - Vietnamese sound anchors go in quotes in plain fields («“ư” trong “thư”») and in `<b>` in bodies.
  - Romanization goes in parentheses after the Hangul (서울 (seoul)), or in `<i>` in bodies.
  - English appears only as a loanword source, in quotes (커피 ← "coffee").
- **Numbers:** Vietnamese format in Vietnamese text (*4.500 won*). Korean rows keep 4,500원. `numbers` says once that Korea writes the comma.
- **`on…=` rule:** a body must never contain a space + *on* + letters + `=`. Watch *ong / ông*: write «ông: …».

### 3.2 Address in glosses, *ạ*, and Korean speech levels

| Korean line | Vietnamese gloss | Example |
|---|---|---|
| 요-form, to a peer or stranger | *tôi / bạn* or no pronoun; no *ạ* | 어디 가요? → «Bạn đi đâu?» |
| -습니다 set phrases | *xin* where natural; no *ạ* | 감사합니다 → «Xin cảm ơn» |
| 반말 | no pronoun, else *mình / cậu*; *nhé* allowed | 고마워 → «Cảm ơn nhé» |
| romantic 반말 (sweet talk, flirting, dating) | no pronoun (*anh / em* would invent genders) | 보고 싶어 → «Nhớ quá» |
| -시-, honorific verbs or 드리다 said **to** an elder, superior or customer | no *bạn*; drop "you" or use the Korean's role noun (손님 *quý khách*, 할머니 *bà*, 선생님 *thầy*); final **ạ** allowed | 어디 가세요? → «Đi đâu ạ?»; 앉으세요 → «Mời ngồi ạ» |
| -시- **about** a third person | neutral, with Vietnamese honorific verbs where they exist (*dùng, nghỉ*) | 할머니가 주무세요 → «Bà đang nghỉ.» |

- **Departure from the house profiles.** `vi.md` §2 (service dialogues with *anh / chị* + *ạ*) and `en-vi.md` §2.3 (kinship pairs by relationship) do **not** apply to non-honorific lines.
  - A Korean 요 line carries no age or gender.
  - *ạ* on every 요 line would teach "요 = *ạ*" (§5.6).
- **Practice:** the tag is the only politeness cue (§8).
- **No slash inside a gloss** (*thầy*, not *thầy/cô*): dialogue glosses are split on " / ".

**Fixed glosses: use them everywhere** [author]

| Korean | Vietnamese |
|---|---|
| 안녕하세요 / 안녕 | Xin chào / Chào |
| 감사합니다, 고맙습니다 / 감사해요, 고마워요 / 고마워 | Xin cảm ơn / Cảm ơn / Cảm ơn nhé |
| 죄송합니다 / 미안해요 / 미안해 | Tôi xin lỗi / Xin lỗi / Xin lỗi nhé |
| 안녕히 가세요 / 안녕히 계세요 | Tạm biệt (nói với người ra về) / Tạm biệt (nói với người ở lại) |
| 네 / 응 | Vâng / Ừ |
| 잘 먹겠습니다 / 잘 먹었습니다 | Cảm ơn vì bữa ăn (trước khi ăn) / Cảm ơn vì bữa ăn ngon (sau khi ăn) |
| 잘 부탁드립니다 | Rất mong được giúp đỡ |
| 수고하셨습니다 / 수고했어(요) / 수고하세요 / 고생했어 | Hôm nay đã vất vả rồi ạ / Vất vả rồi / Chúc làm việc tốt ạ / Vất vả nhiều rồi |
| 화이팅, 힘내 | Cố lên! |
| 혹시 / 좀 / 저기요 | không biết…, liệu… (hỏi khéo) / một chút, giúp / Xin lỗi, cho hỏi |
| 오빠 / 형 / 언니 / 누나 / 동생 | anh (con gái gọi) / anh (con trai gọi) / chị (con gái gọi) / chị (con trai gọi) / em |
| 선생님 / 사장님 / 손님 | thầy, giáo viên / ông chủ, giám đốc / quý khách |
| 사원 / 대리 / 과장 / 차장 / 부장 / 팀장 / 사장, 대표 | nhân viên / trợ lý quản lý / quản lý / phó trưởng phòng / trưởng phòng / trưởng nhóm / giám đốc (approximate; ranks vary by company) |

**Sample prose** [author; native check §10]:
- «Trong tiếng Hàn, động từ luôn đứng cuối câu.»
- «요 không phải là *ạ*: *ạ* là từ thêm vào, còn 요 là một phần của động từ.»
- «Tiếng Việt nói *túi to*, tiếng Hàn nói 큰 가방: từ bổ nghĩa luôn đứng trước danh từ.»
- «학생 (haksaeng) cùng gốc Hán với *học sinh*: phụ âm cuối ㄱ ứng với *c*.»

### 3.3 Glossary: one term per idea (closed list)

| Idea | Use exactly | Not |
|---|---|---|
| particle; 은/는, 이/가, 을/를 | **trợ từ**; **trợ từ chủ đề / chủ ngữ / tân ngữ** | tiểu từ, giới từ |
| Vietnamese *ở, đến, của* | **giới từ** (only when comparing) | |
| subject / object | **chủ ngữ / tân ngữ** | |
| noun / verb / adjective (크다) | **danh từ / động từ / tính từ**. Say once that a Korean tính từ conjugates like a verb, just as a Vietnamese one is a predicate without *là*. | động từ mô tả |
| 하다 verb / stem / dictionary form | **động từ 하다 / gốc động từ (gốc) / dạng nguyên mẫu (đuôi 다)** | thân từ, nguyên thể |
| ending | **đuôi** (đuôi câu, đuôi nối) | vĩ tố, hậu tố |
| 요-form | **dạng 요** | |
| politeness levels | **mức lịch sự**: **trang trọng** (-습니다), **lịch sự** (dạng 요), **thân mật** (반말) | "kính ngữ" for the levels, "trống không" |
| -(으)시-, 드시다; 저, 드리다 | **kính ngữ, động từ kính ngữ** [convention: PREP]; **khiêm nhường** | |
| counter | **đơn vị đếm** [convention: PREP] | loại từ (kept for Vietnamese *cái, con*) |
| 하나 / 일 | **số thuần Hàn / số Hán Hàn** [convention: Univext] | |
| word origin | **từ Hán Hàn / từ thuần Hàn / từ Hán Việt / chữ Hán (hanja)** | |
| vowel / consonant / compound vowel | **nguyên âm / phụ âm / nguyên âm ghép** | |
| 받침 | **phụ âm cuối (받침)** | patchim (clashes with RR *batchim*) |
| block / syllable | **khối chữ / âm tiết** | |
| plain / tense / aspirated | **âm thường / âm căng / âm bật hơi** [convention: Univext] | âm đôi |
| sound change / linking / nasalisation | **biến âm / nối âm / mũi hóa** | |
| romanization | **phiên âm Latinh** (screen: **Phiên âm**) | |
| tense | **thì**: **quá khứ / hiện tại / tương lai** | |
| time word / connector / question word / softener | **từ chỉ thời gian / từ nối / từ để hỏi / từ làm mềm câu** | liên từ, từ đệm |
| pronoun / possessive / negative / modifier form | **đại từ / sở hữu / phủ định / dạng định ngữ** | |
| title (씨, 님) / loanword | **danh xưng / từ ngoại lai** | |
| tone / intonation / word order | **thanh điệu / ngữ điệu / trật tự từ** | |
| false friend | **từ dễ nhầm** («cùng gốc Hán, khác nghĩa») | |

### 3.4 Interface, course meta, format

- **Tabs and buttons:**
  - tabs **Hôm nay, Luyện** (the tab; *luyện tập* stays a common noun), **Ôn tập, Bài học, Tiến độ**;
  - buttons *Đã nhớ, Chưa nhớ, Kiểm tra*;
  - deck *Cụm từ của tôi*;
  - nouns *thẻ, bộ thẻ, bài học, gợi ý*.
- **Đọc** (Read) holds drills this course lacks until a `trainer.json` exists. Never send the learner there. Drop `sound-changes`' "open Read and try the 🔀 Sound changes drill".
- **Keep** `hangul`'s "Tap a letter to replay", as es-ko did: the stroke diagrams exist (spec §8.1). In Vietnamese: «Chạm vào một chữ để xem lại thứ tự nét.»
- **`course.json`:** `{"native":"vi","name":"Tiếng Hàn","brand":"한글"}`.
- **`ui.json`** (lead, or w1 if assigned). The vi dictionary was written for vi-en ("Korean" → *Tiếng Anh*), so about 26 strings that name Korean, Hangul or romanization need overrides, the 14 `uiKeys` among them.
  - Korean → *tiếng Hàn*; Hangul → *Hangul*; romanization → *phiên âm Latinh* (short labels: *Phiên âm*).
  - Flag 🇰🇷; «Đọc 한→vi».
- **Format:**
  - **Hangul set-equality.** No added and no dropped Hangul. Otherwise `"_waive":["hangul"]` + `_note` goes on the lesson's title row; only `hangul` should need it (the reading guide's jamo).
  - **Latin is free**, so Hán-Việt readings cost nothing. **Printed hanja are forbidden** except in the idioms' own target field: few learners read them, and each one is a claim (zh-ko found two near-misses).
  - Keep `__` blanks and the single dialogue " / ". No braces. `q p why hint` ≤ 400 characters, options ≤ 200, no identical options.

### 3.5 Settled names (permanent progress keys and cross-reference targets)

**Lesson titles** (keep "N · " and exactly the English title's Hangul):

| id | title |
|---|---|
| hangul | 1 · Hangul trong một buổi |
| polite | 2 · Các mức lịch sự |
| meet | 3 · Gặp gỡ làm quen |
| sound-changes | 4 · Biến âm: vì sao 감사합니다 đọc khác đi |
| nouns | 5 · Danh từ và 은/는 |
| isseoyo | 6 · 있어요 và 없어요 |
| pronouns-questions | 7 · Đại từ và từ để hỏi |
| verbbasics | 8 · Động từ |
| verbs | 9 · Thì hiện tại: dạng 요 |
| past | 10 · Thì quá khứ: 았어요 / 었어요 |
| future | 11 · Tương lai và dự định: -(으)ㄹ 거예요 |
| sov | 12 · Trật tự từ và 을/를 |
| particles | 13 · 에 và 에서, cùng bản đồ trợ từ |
| negation | 14 · Nói không: 안 và -지 않아요 |
| do-man | 15 · 도 và 만: cũng và chỉ |
| sentences | 16 · Ghép danh từ với động từ |
| want-like | 17 · Muốn và thích: -고 싶어요, 좋아해요 |
| numbers | 18 · Hai hệ thống số |
| food | 19 · Đi ăn ngoài |
| getting-around | 20 · Đi lại |
| titles | 21 · Danh xưng và kính ngữ |
| plans | 22 · Lên kế hoạch |
| texting | 23 · Nhắn tin như người Hàn |
| counters | 24 · Đơn vị đếm |
| joining | 25 · Nối câu: -고, -지만, -아/어서 |
| story | 26 · Kể chuyện trong quá khứ |
| noun-modifiers | 27 · Bổ nghĩa cho danh từ: 좋은 날씨, 큰 가방 |
| compare | 28 · So sánh: 보다, 더, 제일 |
| cant | 29 · Không thể, có thể và không biết |
| have-to | 30 · Phải: -아/어야 해요 |
| honorific | 31 · Động từ kính ngữ |
| requests | 32 · Nhờ vả lịch sự |
| office | 33 · Tiếng Hàn công sở |

Cross-references give number and title: «bài 32, “Nhờ vả lịch sự”».

**Groups:** Nền tảng · Hằng ngày · Từ vựng · Ngữ pháp · Giao lưu.

**Deck labels** (43 in `decks.jsonl` order; unique; none starts with "Hangul"):

Nguyên âm (Hangul) · Phụ âm (Hangul) · Nâng cao (Hangul) · Mẹo phát âm · Câu sinh tồn · Giới thiệu bản thân · Câu sinh tồn 2 · Hỏi chỗ, hỏi đường · Quán cà phê & cửa hàng tiện lợi · Con số ngoài đời · Đơn vị đếm · Thời tiết & cảm xúc · Từ nối · Bác sĩ & hiệu thuốc · Nhà ở & việc vặt · Kính ngữ · Địa điểm & tòa nhà · Sở thích · Món ăn · Đồ uống · Hoạt động · Phim ảnh & giải trí · Vị trí & phương hướng · Động từ cơ bản · Trợ từ · Số · Lời ngọt ngào · Câu nói dễ thương · Tán tỉnh · Nhắn tin thân mật · Khen & cổ vũ · Đi chơi · K-pop & văn hóa fan · Mạng xã hội & tiếng lóng · Hẹn hò nghiêm túc · Công việc & văn phòng · Chuyện phiếm · Gọi món · Chỉ đường & giao thông · Thời gian & ngày tháng · Gia đình & mọi người · Tính từ · Câu thoại phim Hàn

**Labels:**
- **Level titles** [author]:
  - t01 *Chồi non* (not *Mầm non*, which means kindergarten);
  - t03 *Học sinh*;
  - t05 *Tiền bối*. Never say it is the same word as 선배: 先輩 vs 前輩;
  - t08 *Cao thủ*;
  - t12 *Bậc thầy*;
  - t16 *Sư phụ*. Not *Sư phạm*: 사범 師範 is a false friend.
- **Greetings:** *đã khuya rồi, vất vả rồi* · *chào buổi sáng* · *chào buổi chiều* · *chào buổi tối*.
- **Goals:** *Du lịch & đi lại* · *Hẹn hò, bạn bè & đi chơi* · *Phim Hàn & âm nhạc* · *Công việc & học tập*.
- **Plans:** *Chuyến đi Hàn Quốc* · *Kết bạn & hẹn hò* · *Giao tiếp sau 90 ngày*.
- **Pause sets:** *lời khen* · *câu nói thường ngày* · *phép lịch sự cơ bản* · *câu nói hay*.

**Idioms ko.i01–i32** (the label is the Vietnamese meaning; the hanja show from the target half) [author]:
- **Add the reading in parentheses:** i04 chuyển họa vi phúc · i05 khổ tận cam lai · i06 đại khí vãn thành · i07 hữu bị vô hoạn · i08 thất điên bát khởi · i10 dĩ tâm truyền tâm · i12 cẩm thượng thiêm hoa · i13 đa đa ích thiện · i19 quá do bất cập · i22 nhất phiến đan tâm · i25 ôn cố tri tân · i27 khuyến thiện trừng ác · i30 bách chiến bách thắng.
- **Name a Vietnamese equivalent, never "the same idiom":** i02 *một công đôi việc* · i03 *tái ông thất mã* (same story, different characters) · i11 *đồng cam cộng khổ* · i16 «như chuyện Ngu Công dời núi» · i09 *cả thèm chóng chán* · i15 *tự làm tự chịu* · i29 *mười phần chắc chín* · i31 *tay trắng làm nên* · i28 *nước đổ đầu vịt* · i01 *cầu được ước thấy*.
- **Gloss only:** the rest. i24 = *bạn từ thuở nhỏ*, never *thanh mai trúc mã* (childhood sweethearts).

## 4. Reading guide

Vietnamese facts are from [Wikiwand, *Vietnamese phonology*] [reference]:
- *th* [tʰ] is aspirated; *t, ch / tr* (Hanoi [tɕ]) are unaspirated; *kh* = [x].
- *b, đ* are preglottalised voiced.
- *p* occurs initially only in a few loans.
- In Hanoi, *d, gi, r* = [z] and *s* = *x* = [s].
- Codas are only p t k m n ng (+ glides), and final stops are unreleased.
- A p/t/k-final syllable takes only *sắc* or *nặng*.
- Northern speech puts a glottal stop before vowel-initial words.
- *-c / -ng* after rounded vowels are said with closed lips.

### 4.1 Korean sound → Vietnamese anchor

Anchor words are toneless (*ngang*). No toneless word ends in p/t/c, so those are given as rimes.

| Korean | Anchor | Note |
|---|---|---|
| ㅏ / ㅜ / ㅣ | "a" (*ba*) / "u" (*thu*) / "i" (*đi*) | |
| ㅗ | "ô" (*cô*) | **not** Vietnamese "o" [ɔ] |
| ㅓ | between "ơ" (*cơm*) and "o", lips not rounded | [inference] |
| ㅡ | "ư" (*thư*) | exact bridge |
| ㅐ = ㅔ | between "e" (*xe*) and "ê" (*quê*) | one sound in Seoul; 20% of 85 surveyed learners named ㅐ/ㅔ hardest (Pham 2024) [research] |
| ㅘ ㅝ ㅙ ㅞ ㅟ ㅚ ㅢ | "oa" (*hoa*), "uơ" (*huơ*), "oe" (*khoe*), "uê" (*thuê*), "uy" (*huy*), ㅚ ≈ "uê", ㅢ ≈ "ưi" | same glides as Vietnamese |
| ㅑ ㅕ ㅛ ㅠ | "i" gliding into a / ơ / ô / u, one syllable | not Vietnamese *ia* |
| ㄲ ㄸ ㅃ ㅉ ㅆ | "c" (*ca*), "t" (*ta*), "p" (*pin*), "ch" (*cha*), "x" (*xa*), said tight | Korean listeners hear Vietnamese unaspirated stops as tense (강정희 2009, cited by Pham 2024) [research, secondary] |
| ㅌ | "th" (*tha*) | exact bridge |
| ㅋ ㅍ ㅊ | "c", "p", "ch" **plus a puff**, like "th" | **trap:** not "kh" or "ph" |
| ㄱ ㄷ ㅂ ㅈ | light, a little breath: between c/g, t/đ, p/b, ch/gi | voiced between vowels. *b, đ* are implosive, so not models. |
| ㅅ / ㅎ | "x" / "h" | ㅅ before ㅣ ≈ Southern "s" [inference] |
| ㄹ between vowels | one light tap of the tongue tip | no Vietnamese tap; Hanoi "r" = [z] |
| ㄹ final | tongue tip held on the ridge, the sound flowing out at the sides | **no Vietnamese final l**: 6 of 8 beginners said 설날 as [선날] (Pham 2024); ㄹ → ㄴ is also cited by Jang & You 2022 [research] |
| finals ㅁ ㄴ ㅇ / ㄱ ㄷ ㅂ | "m", "n", "ng" (*song*) / rimes "-ác, -át, -áp", unreleased | exact bridge, but see tones |

### 4.2 Romanization letters a Vietnamese eye misreads

| RR | Vietnamese habit | Say |
|---|---|---|
| d | [z] / [j] | light "t / đ" |
| r | [z] | a tap; at the end, l |
| g | fricative *g* (*ga*) | a stop near "c" |
| k t p ch | unaspirated = the tense ㄲ ㄸ ㅃ ㅉ | with a puff |
| kk tt pp jj ss | long | tight and short |
| j | "gi" [z] | a light "ch" |
| o / eo / eu | open "o" / *eo* of *mèo* / "e-u" | "ô" / one vowel near "ơ" / "ư" |
| ae, e / ui / oe | "a-e", "e" / "u-i" / *oe* of *khoe* | one vowel between e and ê / "ưi" / "uê" |
| s | Southern retroflex | "x" |

### 4.3 Three rules unlike Vietnamese

1. **No tones.** Seoul words have no tones; say syllables level.
   - **Trap:** habit forces *sắc / nặng* on 밥, 학, 맛 [inference; no tone-transfer data found: Pham 2024 reports none].
2. **Linking, no glottal stop.** 한국어 = han-gu-geo, not "han-guốc-ơ". Pham (2024), citing 응웬티타잉화 (2021), links syllable-splitting to Vietnamese [research, secondary].
3. **Finals are the bridge, except l.** Korean finals sound as k n t l m p ng; Vietnamese has all but l.
   - 옥 and 국 do **not** close the lips, unlike the Northern *-ốc / -úc* [reference + inference].

### 4.4 Ready-to-paste guide for `hangul` (waiver on its title row) [author]

> **Đọc phiên âm Latinh thế nào?** Dòng chữ Latinh dưới câu tiếng Hàn là phiên âm theo kiểu tiếng Anh. Đừng đọc theo chính tả tiếng Việt.
> - **o** = “ô”; **eo** = gần “ơ”, môi không tròn; **eu** = “ư”; **ae** và **e** = một âm, giữa “e” và “ê”; **ui** = “ưi”; **oe** = “uê”; **wa, wo, wi** = “oa, uơ, uy”.
> - **k, t, p, ch** (ㅋ ㅌ ㅍ ㅊ) bật hơi mạnh như “th”. Không phải “kh”, không phải “ph”.
> - **kk, tt, pp, jj, ss** (ㄲ ㄸ ㅃ ㅉ ㅆ) căng và ngắn như “c, t, p, ch, x” tiếng Việt. Không kéo dài.
> - **g, d, b, j** (ㄱ ㄷ ㅂ ㅈ) nhẹ, hơi có hơi. **d** không phải “d” tiếng Việt; **j** là “ch” nhẹ.
> - **r** = chạm nhẹ đầu lưỡi một lần; cuối âm tiết là **l**: giữ đầu lưỡi ở lợi, đừng đọc thành “n”. **s** = “x”.
> - **Không có thanh điệu**: đọc đều giọng, kể cả âm tiết tận cùng bằng p, t, k.
> - **Nối âm**: phụ âm cuối chuyển sang khối sau nếu khối đó bắt đầu bằng ㅇ câm. Không ngắt hơi trước nguyên âm.

- `sound-changes` repeats the lines on linking, tones and final ㄹ.
- The three Hangul deck descriptions repeat their own lines verbatim.
- The jamo cards ko.c0001–c0060 use the §4.1 anchors.
- **Never compare with English sounds.**

## 5. Bridges and traps for grammar

### 5.1 Sino-Korean ↔ Hán-Việt: the closed whitelist

**Rules:**
- Cite a reading only for a listed word, and only where the row or body already has that Hangul ("where"). "illus." words are absent from the Korean half: use them only in prose without the Hangul.
- No other etymology (no «*cái* ← 個»). **F** = on a fetched page (Phan 2026); everything else is [author].
- Wording: «학생 (haksaeng) cùng gốc Hán với *học sinh*».

**Same meaning:**

| Korean | Hán-Việt | where |
|---|---|---|
| 학생 | học sinh | nouns, past, negation bodies |
| 시간 | thời gian | isseoyo, counters bodies |
| 한국(어) | Hàn Quốc (F) (ngữ) | cant body, s0014 |
| 감사 | cảm tạ | polite, sound-changes bodies; c0062 |
| 준비 | chuẩn bị | g103 |
| 은행 · 병원 · 공원 | ngân hàng · bệnh viện · công viên | c0267 · c0265 · c0273 |
| 생일 · 행복 | sinh nhật · hạnh phúc | s0066 · c0187 |
| 여행 · 운동 | lữ hành (everyday: *du lịch*) · vận động | c0281 · c0278 |
| 형제 · 연습 | huynh đệ · luyện tập | g148 · g117 |
| 층 · 호선 | tầng · 호 hiệu + 선 tuyến | c0149 · c0153 |
| 백화점 · 해산물 | bách hóa (+ store) · hải sản (+ 물) | c0271 · c0309 |
| 무대 · 사실 · 신호(등) | vũ đài · sự thật · tín hiệu | c0500 · c0207 · c0375 |
| 음식 | ẩm thực (VN: cuisine) | noun-modifiers body |
| 매일 · 제일 | 매 = mỗi, 일 = nhật · đệ nhất | c0606 · compare body |
| 권 | quyển (also a Vietnamese classifier) | counters body |
| 주의 · 문화 · 경제 · 역사 · 감동 · 기념 | chú ý · văn hóa · kinh tế · lịch sử · cảm động · kỷ niệm (all F) | illus. |
| 전화 · 언어 · 결혼 · 안전 · 위험 · 동의 · 부모 | điện thoại · ngôn ngữ · kết hôn · an toàn · nguy hiểm · đồng ý · phụ mẫu | illus. |

**Same characters, different meaning (từ dễ nhầm)**, taught alongside the cognates:

| Korean (KO meaning) | Hán-Việt (VN meaning) | where |
|---|---|---|
| 공부 (study) | công phu (painstaking effort) (F) | verbs, negation, particles bodies |
| 시험 (exam) | thí nghiệm (experiment) | g079 |
| 취미 (hobby) | thú vị (interesting) | c0277 |
| 긴장 (nervous) | khẩn trương (urgent) | c0190 |
| 안녕 (peace; hello) | an ninh (security) | meet body |
| 질문 (question) | chất vấn (interrogate) | e032 |
| 계산 (paying the bill) | kế toán (accounting) | c0112, s0184 |
| 사장 (boss) / 부장 (department head) | xã trưởng (village head) / bộ trưởng (minister) | titles, office bodies |
| 시장 (marketplace) | thị trường (economic market; a marketplace is *chợ*) | c0270 |
| 가족 (family) | gia tộc (clan) | c0613 |
| 회의 (any meeting) / 최고 (the best) | hội nghị (conference) / tối cao (supreme) | c0544 / c0464 |
| 화장실 (화장 = makeup) | hóa trang (makeup, costume) | requests body |
| 편의점 (편의 = convenience) | tiện nghi (amenities); the shop is *cửa hàng tiện lợi* | getting-around body |
| 환경 · 자신 · 국어 | hoàn cảnh · tự tin · quốc ngữ (F) | illus. |

**Other patterns:**
- **Reversed order** (illus.): 소개 / *giới thiệu*, 평화 / *hòa bình* [author]; 민주주의 / *chủ nghĩa dân chủ* (F).
- **Vietnamese uses another word:** 학교 (*trường học*), 공항 (*sân bay*), 도서관 (*thư viện*). Give no reading.
- **Not Sino:** 사랑 (= *tình yêu*, F), 사람, 우리. Say «không phải từ nào cũng có gốc Hán».
- **Codas** (Phan, table 11, F): ㄱ↔c/ch, ㄴ↔n, **ㄹ↔t**, ㅁ↔m, ㅂ↔p, ㅇ↔ng/nh (팔 *bát*, 학 *học*, 삼 *tam*, 십 *thập*).
  - It is a guessing aid and a warning: «Hán Việt tận cùng *t* thường ứng với ㄹ, nhưng ㄹ đọc là **l**.»
  - Initials correspond weakly (ㅅ↔s 12.3%): teach no initial rules.
  - Phan: sound alone misleads, so check the meaning in context [research].

### 5.2 Word order and the noun phrase

- **SVO → SOV.** *Tôi ăn cơm* / 저는 밥을 먹어요.
  - Both languages drop an obvious subject, and neither verb agrees with the person [inference].
- **Prepositions before vs particles after.** *ở nhà* / 집에, *từ Mỹ* / 미국에서.
  - Vietnamese has no case marking, so particles feel optional: expect them dropped or misplaced [inference].
- **The mirror rule** [inference]:

| Vietnamese (noun first) | Korean (noun last) |
|---|---|
| *túi to, thời tiết đẹp* | 큰 가방, 좋은 날씨 |
| *món ăn tôi thích* | 제가 좋아하는 음식 |
| *nhà của tôi* | 제 집 |
| *quyển sách này* | 이 책 |
| **but** *hai cốc cà phê* | **커피 두 잔** |

  Give the rule as «Mọi từ bổ nghĩa đứng **trước** danh từ; chỉ số và đơn vị đếm đứng **sau**.»
- **Demonstratives:** *này / đó / kia* and *đây / đó / kia* = 이 / 그 / 저 and 여기 / 거기 / 저기, one to one. The Korean ones go before the noun.
- **Topic:** contrastive *thì* (*Tôi thì thích cà phê*) ≈ contrastive 은/는. In plain statements Vietnamese uses nothing, so no "은/는 = *thì*" rule [inference].
- **Plural:** *các / những* are optional, like 들.
- **Questions:**
  - Question words stay in place in both languages (*Đây là cái gì?* / 이거 뭐예요?).
  - Vietnamese ends a yes/no question with *không*; the 요-form raises the voice.

### 5.3 *là / có / ở* → 이에요 / 있어요 / 없어요

| Vietnamese | Korean |
|---|---|
| *Tôi là sinh viên.* | 학생이에요 (A = B; *là* in the middle, 이에요 at the end) |
| *Tôi ở trường.* / *Tôi có mèo.* / *Ở đây có trường.* | 학교에 있어요 / 고양이가 있어요 / 여기에 학교가 있어요 |
| *Không có thời gian.* / *Không ở nhà.* | 시간이 없어요 / 집에 없어요 |
| *Tôi không phải là sinh viên.* | 학생이 아니에요 |
| *Tôi mệt.* (no *là*) | 피곤해요 (no 이에요) |

- Vietnamese already separates *là* from *có / ở*, unlike English.
- 있어요 = *có* + *ở*; 없어요 = their negatives [inference].

### 5.4 One *ở*, two particles

| Vietnamese | Korean |
|---|---|
| *ở* + being or existing | 에 + 있어요 / 없어요 |
| *ở* + doing (*học ở thư viện*) | 에서 |
| *đến / tới*; times (*lúc 3 giờ*) | 에 |
| *từ* (a place) | 에서 |

[inference]. The same mechanism is research-backed for Filipino *sa* (tl-ko §5.4), not for Vietnamese.

### 5.5 Counters, numbers, tense, negation

- **Counters** [inference]. Vietnamese already counts as **number + classifier + noun**; Korean counts as **noun + number + counter**.
  - Pairs: 개 *cái / chiếc*, 명 / 분 *người / vị*, 잔 *cốc, ly*, 병 *chai*, 마리 *con*, 권 *quyển*, 장 *tờ, tấm*, 살 *tuổi*, 시간 *tiếng*, 번 *lần*.
  - **Trap:** a café order without a classifier (*hai cà phê*) becomes 두 커피 ✗.
- **Numbers.**
  - Sino-Korean numbers have Hán-Việt twins: 일 *nhất*, 이 *nhị*, 삼 *tam*, 사 *tứ*, 오 *ngũ*, 육 *lục*, 칠 *thất*, 팔 *bát*, 구 *cửu*, 십 *thập*, 백 *bách*, 천 *thiên*, 만 *vạn*. Learners know them from ordinals (*thứ tư*) and idioms [author].
  - **만 = *vạn* = 10,000** (오만 원 = "năm vạn won"), a model for grouping by 10,000.
  - Native numbers do age (*25 tuổi* = 스물다섯 살) and **hours**. Minutes, money, dates and floors are Sino-Korean.
  - The hour/minute split is new: Vietnamese uses one system. Expect 삼 시 ✗.
- **Tense** [inference].
  - Vietnamese *đã / đang / sẽ / rồi* are optional; Korean past is obligatory. Expect 어제 가요 ✗.
  - ***chưa*** (*Tôi chưa ăn*) = 아직 안 먹었어요, a **past** form; a form-for-form learner says 안 먹어요 ✗.
  - *sắp* (about to) is not the future; *định* ≈ -(으)ㄹ 거예요.
- **Negation.**
  - *không* + verb = 안 + verb (holds); *không phải (là)* = 아니에요; *không có* = 없어요.
  - *không thể / không … được* ≈ 못, -(으)ㄹ 수 없어요; *đừng* ≈ -지 마세요.
  - **Trap:** 공부 안 해요 puts 안 inside the 하다 verb.
- **Comparison.**
  - *rẻ hơn taxi* (comparative after the adjective) vs 택시보다 싸요 (보다 on the standard, before the adjective).
  - *ngon nhất* vs 제일 맛있어요 (제일 goes before).

### 5.6 *ạ* vs 요; kinship vs honorifics

**Holds** [inference; Vietnamese facts from `en-vi.md` §2.3–2.4]:
1. Vietnamese speakers already pick words by age and relationship in every sentence.
2. ***vâng / dạ* ≈ 네, *ừ* ≈ 응.**
3. ***ạ* and 요 both close the sentence.** This is a positional bridge that tl-ko's *po* lacks.
4. **Lexical honorifics exist on both sides:** *dùng* (eat, polite) ≈ 드시다; *mời* ≈ the inviting -(으)세요 (앉으세요 «Mời ngồi»).
5. ***anh / chị*** ≈ 오빠 / 형 / 언니 / 누나. *Em ơi!* to a waiter ≈ 저기요: the same situation, a different word.

**Breaks: tell the learner exactly these four things.**
1. 요 is part of the verb; *ạ* is an added word.
2. *ạ* follows **age**; 요 follows **closeness**. A same-age stranger gets *bạn* without *ạ*, but gets 요 in Korean until both agree to drop it.
3. -습니다 marks the **situation** (announcements, work, first meetings).
4. -시- honours the **doer**, who may not be the listener (할머니가 가세요). Never use it about yourself (저는 가세요 ✗).

**Pronouns:**
- Korean has no polite "you": it drops "you" or uses name + 씨 or a title. 당신 is not *anh / chị*.
- 저 / 나 is a **level** choice; *tôi / em / cháu* is a **relationship** choice.
- 우리 also means "my" for family (≈ *mẹ mình*).
- 오빠 / 형 depend on the **speaker's** gender; *anh* does not.

## 6. Error zones, ranked

1. **Plain / tense / aspirated consonants.**
   - Survey of 85 learners: 62.3% named tense consonants hardest, 45.9% aspirated.
   - Perception test with 8 beginners: 75% / 62.5% / 50% correct for plain / tense / aspirated; the top error was aspirated heard as plain.
   - ㅈ ㅉ ㅊ and ㅅ ㅆ are also confused (Pham 2024) [research].
2. **Final ㄹ → ㄴ** (35.3% named it hardest; 6 of 8 said [선날]) [research].
3. **Romanization read in Vietnamese spelling** (§4.2) [inference].
4. **Noun phrase in Vietnamese order**, counters before the noun [inference].
5. **Particles dropped; 에 / 에서 merged** [inference].
6. **Tense omitted; *chưa*** [inference].
7. **Level errors** (반말 with a same-age stranger, -시- on oneself) [inference].
8. **Linking blocked; tones on stop-final syllables** [research, secondary / inference].
9. **Sino false friends** [author].
10. **Hours in Sino-Korean; grouping by 1,000** [inference].

## 7. Per-lesson notes (ids in `target/ko/lessons.jsonl` order)

| # | id | Vietnamese angle · rewrite |
|---|---|---|
| 1 | hangul | §4.4 guide (waiver). ㅡ = "ư", the glides are easy wins, ㅗ = "ô". Rewrite the English vowel sounds; keep the replay line. |
| 2 | polite | *ạ / vâng / dạ* as the bridge, then the four breaks (§5.6). Headers *Trang trọng / Lịch sự / Thân mật*. |
| 3 | meet | Vietnamese also asks age (to choose *anh / em*). 안녕 ≠ *an ninh*. One *tạm biệt* vs 가세요 / 계세요. |
| 4 | sound-changes | Linking without a glottal stop; level pitch; ㄹ as the exception among the finals. Respellings → RR + syllable breaks. Drop the Read-drill line. |
| 5 | nouns | No articles; optional plural (*các* / 들); contrastive *thì* ≈ 은/는. |
| 6 | isseoyo | Rebuild the "is" opening and table on §5.3. |
| 7 | pronouns-questions | Question words stay in place, as in Vietnamese; 이 / 그 / 저 go before the noun; 당신 ≠ *anh / chị*. |
| 8 | verbbasics | No person agreement; tính từ are predicates in both. Drop the "to …" infinitive framing. |
| 9 | verbs | The present covers habit and "now", like a bare Vietnamese verb. |
| 10 | past | Obligatory past, optional *đã*; *chưa* in prose only. "I ate / have eaten" → *ăn rồi / đã ăn*. |
| 11 | future | *sẽ* ≈ -(으)ㄹ 거예요; *sắp* is not the future. |
| 12 | sov | SVO → SOV. Rewrite every "English is SVO". |
| 13 | particles | §5.4. Particle map: «tiếng Việt: giới từ đứng trước». |
| 14 | negation | *không* = 안 before the verb; *không phải* = 아니에요; *không có* = 없어요. |
| 15 | do-man | 도 *cũng*, 만 *chỉ*. **Trap:** those come before; 도 / 만 stick after the noun and replace 은/는, 이/가, 을/를. |
| 16 | sentences | The four shapes against *là*, a bare tính từ, *có*, SVO. |
| 17 | want-like | *muốn* + verb vs -고 싶어요 after; *thích* X → X을/를 좋아해요. |
| 18 | numbers | §5.5; "like English digits" → «như ghép Hán Việt: *nhị thập ngũ* = 이십오». |
| 19 | food | Classifiers are already known; 잘 먹겠습니다 vs the pre-meal *mời*: both rituals, but the Korean one thanks [inference]; 계산 ≠ *kế toán*. |
| 20 | getting-around | 층 = *tầng*, 호선 ≈ *tuyến*. No US comparisons. |
| 21 | titles | 오빠 / 형 / 언니 / 누나 ≈ *anh / chị*, but chosen by the speaker's gender; 사장 ≠ *xã trưởng*; "(you female / male)" → «nếu bạn là nữ / nam». |
| 22 | plans | -자 ≈ *… đi!*; -(으)ㄹ까요? ≈ *… nhé?*; -(으)ㄹ래요? ≈ *Bạn có muốn … không?* |
| 23 | texting | ㅋㅋ ≈ *haha*; 네 / 응 ≈ *vâng / ừ*; KakaoTalk vs Zalo [inference]. |
| 24 | counters | §5.5 pairs; 권 = *quyển*; the order flips (*hai cốc cà phê* / 커피 두 잔). |
| 25 | joining | -고 *và*, -지만 *nhưng*, -아/어서 *nên*. **Trap:** *… vì bận* puts the reason second; Korean puts it first. |
| 26 | story | 먼저 *trước tiên*, 그리고 *và*, 그다음에 *sau đó*, 그래서 *vì vậy*, 마지막으로 *cuối cùng*. |
| 27 | noun-modifiers | The mirror rule (§5.2): «không có *mà*; mọi thứ đứng trước danh từ». |
| 28 | compare | *hơn / nhất* after the adjective vs 보다 / 제일 (= *đệ nhất*) before. |
| 29 | cant | *không … được* ≈ 못 / -(으)ㄹ 수 없어요; *không biết* ≈ 몰라요 / 모르겠어요. |
| 30 | have-to | *phải* before the verb vs -아/어야 해요 after the stem. Cross-reference → «bài 32, “Nhờ vả lịch sự”». |
| 31 | honorific | -시- for the doer, never oneself; *dùng / mời* as parallels. |
| 32 | requests | 좀 ≈ *giúp*; 혹시 ≈ *không biết…*; -아/어 주시겠어요? ≈ *… giúp tôi được không ạ?* |
| 33 | office | Title + 님 ≈ *anh / chị* + name or *sếp* in function; 부장 ≠ *bộ trưởng*; 회의 ≠ *hội nghị*; 수고 ≈ *vất vả*. "Roughly" column → the §3.2 office titles. |

## 8. Glosses and practice prompts

- **One prompt, one answer.** Read the item's `a` / `x` in `target/ko/practice.jsonl` (read-only) first. The prompt must exclude every form not in `a`.
- **Tense:**
  - past answer → *đã* (or *… rồi*), even where Vietnamese would drop it;
  - future → *sẽ*;
  - present → no marker (*đang* only for "now");
  - *chưa* only for a past-negative answer.
- **Level:** translate the English tag: (lịch sự) / (trang trọng) / (thân mật) / (kính ngữ).
  - "To an elder:" → «Nói với người lớn tuổi:»; "Text a friend:" → «Nhắn cho bạn thân:».
  - Never let a pronoun be the cue.
- **Patterns:** keep the English Hangul: «(dùng -(으)ㄹ까요)», «(viết số bằng Hangul)». "(I)" → «(Tôi)». "I" is always *tôi*.
- **Places:** choose the verb so that 에 vs 에서 is decided.
- **Names:** Kii, Minsu and Korean places as in the source.
  - Country names: *Mỹ, Hàn Quốc, Việt Nam, Nhật Bản, Trung Quốc, Anh, Pháp, Úc*.
  - 베트남 is a phonetic loan, not Hán-Việt [author].
- **"I'm from the US":** the Korean half is moving to a blank 「___에서 왔어요」 plus a Countries deck. **Gloss each row as it stands when you write it:**
  - 미국에서 왔어요 → «Tôi đến từ Mỹ»;
  - a blank → «Tôi đến từ ___», blank unchanged;
  - Countries cards → their Vietnamese names.
  - Propose no new Korean rows.
- **Meanings and notes:** meanings are short and distinct within each deck; notes are one sentence; dialogue glosses keep one " / ".

## 9. What not to do

1. **No Korean beyond the source row** without `_waive` + `_note`. The only planned waiver is `hangul`.
2. **No English left in:** no English glosses, tab names or Konglish jokes. English only as a loanword source, in quotes.
3. **No invented etymology:** readings come only from §5.1 and the idiom list. No hanja. When unsure, leave it out.
4. **No English sound comparisons.**
5. **No *anh / chị / em* or *ạ*** outside §3.2. Never in the app voice.
6. **No *nha / hen* or slang** in the app voice. No *Mầm non, Sư phạm, thanh mai trúc mã*.
7. **No pointers to drills (*Đọc*)** while `trainer.json` is absent.
8. **Never touch the romanization**: it is target-side.

## 10. Unverified; questions for a native reviewer

- **[author], unchecked:**
  - every reading without **F** (all false friends except 공부; 소개 / 평화);
  - the idiom readings and equivalents;
  - 先輩 / 前輩, 師範, 高手, 便宜店.
- **[inference], no Vietnamese-learner data:** ㅓ between *ơ* and *o*; ㅅ before ㅣ ≈ Southern *s*; tone transfer; the *ở*, *chưa* and noun-order errors.
- **Secondary only:** 강정희 2009, Kim 2008, 응웬티타잉화 2021 (inside Pham / Phan); the 28% / 60% figures. Pham's tests had 8 learners.
- **For the lead:** `tools/i18n/vi/roadmap.json` disagrees with the glossary: *Loại từ* (here *đơn vị đếm*), *Sơ lược về kính ngữ* (here *mức lịch sự*), *gốc từ* (here *gốc động từ*).
- **Questions:**
  1. Are the §3.2 samples natural?
  2. *ạ* on honorific glosses only, or never?
  3. Is *mình / cậu* fine nationwide?
  4. Are the fixed glosses natural?
  5. Are *Chồi non, Tiền bối, Sư phụ* good level titles?
  6. Is ㅓ closer to *ơ* or to *o*?
  7. *đơn vị đếm* or *loại từ*?
  8. 반말: *thân mật* or *ngang hàng*?

## Sources

Opened 2026-11-23:
- [Pham Thu Trang (2024). 베트남인 학습자를 위한 한국어 발음 교재 개발 방안 연구 (MA thesis, Hansung Univ.)](https://dspace.hansung.ac.kr/bitstream/2024.oak/9333/2/200000809527.pdf)
- [Jang, K. & You, K.-B. (2022). Korean syllable-final double consonants, Vietnamese vs Korean speakers. *JCCT* 8(6)](https://koreascience.kr/article/JAKO202234257575846.pdf)
- [Phan Thu Thao (2026). 베트남 중급 학습자를 위한 한자어 교육 방법 연구 (MA thesis, Hansung Univ.)](https://dspace.hansung.ac.kr/bitstream/2024.oak/10570/2/TH_I1A5A5_%eb%b2%a0%ed%8a%b8%eb%82%a8%20%ec%a4%91%ea%b8%89%20%ed%95%99%ec%8a%b5%ec%9e%90%eb%a5%bc%20%ec%9c%84%ed%95%9c%20%ed%95%9c%ec%9e%90%ec%96%b4%20%ea%b5%90%ec%9c%a1%20%eb%b0%a9%eb%b2%95%20%ec%97%b0%ea%b5%ac%20.pdf)
- [Wikiwand: Vietnamese phonology](https://wikiwand.com/en/articles/Vietnamese_phonology)
- [PREP: Kính ngữ tiếng Hàn](https://prepedu.com/vi/blog/kinh-ngu-tieng-han) · [PREP: Đơn vị đếm](https://prepedu.com/vi/blog/don-vi-dem-trong-tieng-han) · [Univext: Ngữ pháp cơ bản](https://univext.com/vi/blog/470/ngu-phap-tieng-han-co-ban) · [Univext: Lỗi thường gặp](https://univext.com/vi/blog/480/cac-loi-tieng-han-thuong-gap)

Local: `docs/HALVES-SPEC.md`; profiles `tl-ko`, `vi`, `en-vi`, `zh-ko`, `ja-ko`; `docs/briefs/tl-ko-writer.md`; `native/tl/ko/work/README.md`; `native/es/ko/REVIEW.md`; `native/en/ko/` (tables + 8 bodies); `target/ko/`; `tools/i18n/vi/`; `tools/halves/validate.js`.
