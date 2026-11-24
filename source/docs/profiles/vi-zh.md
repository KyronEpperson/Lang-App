# Vietnamese speakers learning Mandarin Chinese: pair profile

Course `vi-zh` teaches Mandarin to speakers of Vietnamese. It is a standard course assembled from two halves (`docs/HALVES-SPEC.md` §11, `docs/briefs/vi-zh-design.md`):
- the Chinese half `tools/halves/target/zh/`, exported from en-zh (28 lessons, 886 cards, Simplified characters + pinyin; read-only);
- a Vietnamese native half `tools/halves/native/vi/zh/`, filled by four writers (w1–w4, `mk_native.js vi --target zh`).

This profile is the writers' and the reviewer's authority. It follows `docs/profiles/vi-ko.md`, which governs house style, register and interface terms, and reuses that half's settled Vietnamese wherever the idea is the same. It departs from vi-ko only where Chinese needs it, and says so.

**Evidence tags:**
- **[research]**: a study opened for this profile;
- **[reference]**: a reference page opened;
- **[convention]**: a Vietnamese Chinese-teaching page, or the Vietnamese interface files, opened;
- **[author]**: the author's knowledge, not checked against an opened page;
- **[inference]**: this profile's reasoning.

**Every Hán Việt reading in this profile is [author] unless tagged otherwise. None is a licence to skip the lookup.** The author is not a native speaker of Vietnamese.

## 1. Summary

1. **Prose and voice:** exactly vi-ko §3.1. Standard written Vietnamese, Northern standard spelling and vocabulary, NFC. The learner is **bạn** or no pronoun. No *anh / chị / em*, *ạ* or *nha* in the app voice.
2. **The big bridge is Hán Việt.** Estimates of the Sino-Vietnamese share of the Vietnamese lexicon run from about a third to 70%. It is lower in speech and higher in formal and technical writing [reference: Wikipedia, *Sino-Vietnamese vocabulary*, citing DeFrancis, Maspero, Nguyễn, and Hoàng Phê's dictionary at about 40%].
   - **Do not print "60%" as a fact.** Say *rất nhiều từ, nhất là từ trang trọng*.
   - Every 1–4-character card carries a **Hán Việt decision** (§5.1). The reading must be looked up, never guessed. **A wrong reading is the worst error in this course.**
3. **False friends matter as much as cognates.** 工作 *công tác*, 困难 *khốn nạn*, 表情 *biểu tình* [research]; §5.2 has more, some of them [author] and to be verified before use.
4. **Tones: both languages are tonal, but they do not map one to one.** There are two separate maps:
   - the **sound map** (how a Mandarin tone sounds to a Vietnamese ear, §4.2);
   - the **cognate map** (what a Hán Việt tone predicts about the Mandarin tone, §5.3).
   Never claim "thanh 1 = thanh ngang".
5. **Grammar bridges:**
   - SVO, analytic, no inflection;
   - number + classifier + noun (*hai con mèo* / 两只猫);
   - 有 = *có*, 也 = *cũng*, 都 = *đều*;
   - *có … không?* ≈ 去不去;
   - 咱们 / 我们 = *chúng ta* / *chúng tôi*.
6. **Grammar traps:**
   - **the modifier comes before the noun** (*quyển sách của tôi* / 我的书, the mirror image of Vietnamese);
   - **the place comes before the verb** (*làm việc ở bệnh viện* / 在医院工作);
   - 很 before a bare adjective;
   - 了 / 过 / 着 are not *đã / đang*;
   - 比 before the adjective (*đắt hơn* / 比…贵);
   - 把;
   - 的.
7. **Sound traps** (ranked by research, §6):
   - z / c / s and zh / ch / sh / r;
   - *ing* and the other nasal finals;
   - *er*, ü;
   - tone 4 said level, tone 3 and its sandhi.
8. **Script:** Simplified, as the course does. Traditional is printed only in a card note, and only where it shows the Hán Việt link (學生 next to *học sinh*), through the row's `trad`.

## 2. Learners

- Vietnamese learners of Chinese study it for work in Chinese and Taiwanese firms in Vietnam, trade, study in China or Taiwan, and C-drama [inference].
- They know many Hán Việt words, but most cannot read Chinese characters. A few older or specialist learners know Hán Nôm [inference].
- **Northern vs Southern speakers:**
  - Southern speakers already have retroflex *tr / s / r*, which helps with zh / ch / sh / r.
  - Northern speakers merge *tr* with *ch* and *s* with *x* [reference: Wikiwand *Vietnamese phonology*, via vi-ko §4].
  - Write for both: give the mouth position, and name the Southern sound only as an extra hint.

## 3. Register, terms and settled names

### 3.1 Variety, voice, typography (inherits vi-ko §3.1; differences only)

- **Language names:**
  - **tiếng Trung** (lowercase mid-sentence), **tiếng Trung phổ thông** where the variety matters [convention: `tools/i18n/vi/roadmap.json` "Tiếng Trung phổ thông, chữ giản thể"];
  - *tiếng Hoa* is not used in the app voice;
  - *người Trung Quốc*, *Trung Quốc*;
  - **chữ Hán**; **chữ giản thể / chữ phồn thể**; **pinyin**; **từ Hán Việt**, **âm Hán Việt**.
- **Places** use the Vietnamese names, which are mostly Hán Việt [author; verify each before printing]:
  - Bắc Kinh 北京, Thượng Hải 上海, Quảng Châu 广州, Thâm Quyến 深圳, Nam Kinh 南京, Tây An 西安, Thành Đô 成都, Hàng Châu 杭州, Thiên Tân 天津, Trùng Khánh 重庆;
  - Đài Loan 台湾;
  - **Hồng Kông** 香港, not *Hương Cảng*.
  - Foreign places keep their Vietnamese names (*Mỹ, Anh, Pháp, Nhật Bản, Hàn Quốc, Canada*). 加拿大 is a sound loan: its Hán Việt reading is not used.
- **Chinese person names in glosses:** the Hán Việt form, as Vietnamese writes them (王明 → *Vương Minh*; 李 *Lý*, 张 *Trương*, 刘 *Lưu*, 陈 *Trần*, 杨 *Dương*, 黄 *Hoàng*, 赵 *Triệu*, 周 *Chu*, 吴 *Ngô*, 林 *Lâm*) [author].
  - Look up every given name.
  - Use one form for a name across all files.
  - The pinyin stays on the Chinese line, so the learner still hears the Chinese name.
- **Quoting:**
  - pinyin in `<i>` in bodies, and in parentheses after the characters in plain fields: 谢谢 (xièxie);
  - Hán Việt in *italics* in bodies, and «…» or plain text in fields;
  - Vietnamese sound anchors in quotes: «“ư” trong “thư”».
- **Numbers:** Vietnamese format in Vietnamese text (*1.005 tệ*, *3,5 giờ*); Chinese rows stay as they are. Money: 块 / 元 = *tệ* (or *đồng nhân dân tệ* once) [author].
- **`on…=` rule** (vi-ko §3.1): never a space + *on* + letters + `=` in a body. Watch *ông / ống*: write «ông: …».

### 3.2 Address and register in glosses

The Chinese politeness system is lighter than the Korean one. There is no speech-level ending, only word choice: 您, titles, 请, 吧.

| Chinese line | Vietnamese gloss |
|---|---|
| 你 between equals, strangers of the same age, service talk | *bạn* or no pronoun; no *ạ* |
| 您 (to an elder, a teacher, a customer) | vi-ko §3.2 honorific row: no *bạn*; the role noun (*thầy, cô, ông, bà, quý khách*) or no "you"; end with **ạ** where the English names the elder or customer |
| 老师 / 先生 / 小姐 / 师傅 / 阿姨 / 叔叔 | *thầy (cô)* / *ông, anh* / *cô* (see the trap card) / *bác tài, chú* (driver, craftsman) / *cô, dì* / *chú* [author] |
| 服务员! (calling a server) | the vi-ko decision for 저기요 applies: the gloss is a *Xin lỗi* form. *Em ơi! / Anh ơi!* is named only in notes, as the Vietnamese way of doing the same thing |
| 咱们 / 我们 | ***chúng ta*** (inclusive) / ***chúng tôi*** (exclusive): an exact bridge [author] |
| casual lines between friends (吧, 啊, 呢) | no pronoun, or *mình / cậu* (vi-ko §3.2) |

**Fixed glosses: reuse vi-ko's settled Vietnamese** (`tools/halves/native/vi/ko/`) wherever the function is the same, so the two courses read alike:

| Chinese | Take the gloss vi-ko uses for |
|---|---|
| 你好 / 您好 | 안녕하세요 (*Xin chào*); 您好 to an elder gets the honorific row |
| 谢谢 / 谢谢你 | 감사해요 / 고마워요 (*Cảm ơn*) |
| 不客气 / 没关系 | the vi-ko gloss of 천만에요 / 괜찮아요, as settled there |
| 对不起 / 不好意思 | 죄송합니다 / 미안해요 (*Tôi xin lỗi* / *Xin lỗi*) |
| 再见 | *Tạm biệt*. Chinese has one goodbye, so no "who leaves" note is needed: say so once in `greetings` |
| 是 / 对 / 嗯 (yes) | 네 / 응 (*Vâng* / *Ừ*) by register |
| 加油! | 화이팅 (*Cố lên!*) |
| 请… | *Mời…* (an invitation: 请坐 «Mời ngồi») or *Xin…* / *làm ơn* (a request), as the line means |

Where vi-ko has no matching row, choose once and write it in your `work/NOTES-<wN>.md`, so the other writers use the same gloss.

### 3.3 Glossary: one term per idea (closed list)

Grammar and interface terms are **vi-ko §3.3 unchanged** where the idea is the same. Namely:
- *danh từ, động từ, tính từ, đại từ, trợ từ*;
- *chủ ngữ / tân ngữ*, *trật tự từ*, *phủ định*;
- *từ để hỏi*, *từ nối*, *từ chỉ thời gian*;
- *thanh điệu*, *ngữ điệu*;
- *từ dễ nhầm*, *từ Hán Việt*, *chữ Hán*;
- tabs **Hôm nay, Luyện, Ôn tập, Bài học, Tiến độ**; buttons *Đã nhớ, Chưa nhớ, Kiểm tra*; deck *Cụm từ của tôi*.

Chinese-specific terms:

| Idea | Use exactly | Not |
|---|---|---|
| tone 1 / 2 / 3 / 4, neutral tone | **thanh 1 / thanh 2 / thanh 3 / thanh 4**, **thanh nhẹ** [convention: roadmap.json] | thanh ngang etc. for Mandarin tones; *khinh thanh* only once, in brackets |
| tone change (sandhi) | **biến điệu** [convention: roadmap.json] | |
| initial / final (pinyin) | **thanh mẫu / vận mẫu** [convention: roadmap.json] | phụ âm đầu for pinyin |
| tone mark | **dấu thanh** | |
| measure word | **lượng từ** [convention: PREP]. At first mention: «lượng từ (giống loại từ *cái, con* trong tiếng Việt)» | đơn vị đếm (kept for Korean); *loại từ* only for Vietnamese |
| character, stroke, radical | **chữ Hán, nét, bộ thủ** [convention: roadmap.json] | |
| Simplified / Traditional | **giản thể / phồn thể** | |
| coverb (在, 给, 跟, 从, 把) | **giới từ** | |
| 了 / 过 / 着 | name the particle: «trợ từ 了». Explain the meaning («đã xong / đã đổi», «đã từng», «đang ở trạng thái») | thì quá khứ for 了 |
| verb-not-verb question | **câu hỏi chính phản** [convention: roadmap.json] | |
| 把 sentence / 比 sentence | **câu chữ 把 / câu chữ 比** [author] | |
| complement (听懂, 吃完, 说得好) | **bổ ngữ** (bổ ngữ kết quả, bổ ngữ trình độ) [author] | |
| reading of a character in Vietnamese | **âm Hán Việt** | âm Hán (alone) |

### 3.4 Course meta, interface, format

- **`course.json`:** `{"native":"vi","name":"…","brand":"中文","readings":"hanviet"}`. `name` = the course name in Vietnamese (w1; suggested form: *Tiếng Trung*). `brand` stays 中文.
- **`ui.json`:** w1 fills `work/wU.jsonl` (12 strings, `docs/briefs/vi-zh-design.md` §6).
  - Use *tiếng Trung*, *chữ Hán*, *pinyin*, and vi-ko's wording (the `ref` column).
  - The grammar-search example is a Chinese pattern (了) and a Vietnamese word, never 에서.
  - Hashtags follow vi-ko: lowercase, no diacritics, no spaces.
- **Drills / trainers:** en-zh has none. The non-script Read tab is called **Kỹ năng** («Drills»). Never promise a character-writing trainer or a stroke-order animation.
- **Format:**
  - Han set-equality: keep every Chinese run of the English. The only additions allowed are in a card note, via `trad`.
  - Bodies and `why` may add Chinese (it shows up as a warning for the reviewer); keep it rare.
  - Keep the pinyin of the English (a warning if one is missing).
  - Keep `__` blanks and the single dialogue " / ".
  - No braces and no `|` in example glosses.
  - `q p why hint` ≤ 400 characters, options ≤ 200.

### 3.5 Settled names

**Lesson titles.** Keep "N · " and exactly the English title's Chinese.
- 14 of the 28 lessons have an English title identical to a roadmap item whose Vietnamese title already exists in `tools/i18n/vi/roadmap.json` [convention]. **Use those titles exactly**, so the roadmap and the course agree:

| id | title |
|---|---|
| pinyin | 1 · Pinyin: thanh mẫu và vận mẫu |
| tones | 2 · Bốn thanh điệu và thanh nhẹ |
| tone-change | 3 · Biến điệu: 不, 一, thanh 3 |
| characters | 4 · Cấu tạo chữ Hán: nét và bộ thủ |
| pronouns | 6 · Đại từ và 们 |
| shi | 7 · 是: A là B |
| ma | 9 · Câu hỏi với 吗 và 呢 |
| de | 12 · 的: sở hữu và miêu tả |
| you | 13 · 有: có (sở hữu và tồn tại) |
| numbers | 14 · Số và tiền |
| time | 18 · Giờ và ngày tháng |
| zai | 19 · 在: ở, trong và từ chỉ vị trí |
| word-order | 20 · Trật tự từ: ai · khi nào · ở đâu · động từ |
| serial | 24 · Hai động từ liền nhau: 去 + động từ |

  (`measure` has the roadmap title «Loại từ: 个・本・杯», but this profile uses **lượng từ**: title it with *Lượng từ* and keep the English title's Chinese. The lead reconciles roadmap.json.)
- The other 14 (`greetings`, `adj`, `question-words`, `bu-mei`, `measure`, `food`, `family`, `want-can`, `le`, `progress`, `a-not-a`, `ye-dou`, `ba-bie`, `and-or`) are written by their writer from the English title, with the §3.3 terms. The reviewer harmonises them.
- Cross-references give number and title: «bài 21, “…”».

**Deck labels (31) and group names (6):** w1 writes them. They become permanent progress keys once shipped. Rules:
- short, unique, natural, never "Cụm từ của tôi";
- "Top …" → «… thông dụng» as in vi-ko (*Danh từ thông dụng, Động từ thông dụng*);
- **"Traps for English speakers" must be renamed** for this reader. Its cards are general Chinese traps (很 instead of 是, 不 / 没, 两 / 二, 小姐, 东西), so say «bẫy thường gặp», not «cho người Anh». The notes are rewritten from the Vietnamese angle (§5.4).

**Labels:**
- The **level titles** `zh.t01–t20` are English words in en-zh («Beginner … Master»): write Vietnamese level names.
  - Reuse vi-ko's where the idea matches (vi-ko: *Chồi non, Học sinh, Tiền bối, Cao thủ, Bậc thầy, Sư phụ*), but keep seven distinct titles.
  - No false-friend claims.
- The **greetings** `zh.h.*` gloss 晚安 / 早上好 / 下午好 / 晚上好. Use the same register as vi-ko's greeting labels.

## 4. Reading guide (pinyin for a Vietnamese eye)

The phonetics behind the anchors are [author] unless tagged. Learner errors are [research: Nguyễn Thị Phương Thảo 2025, 55–62 first-year Chinese majors, Hanoi University of Industry].

### 4.1 Pinyin letter → Vietnamese anchor

**The pinyin letters are not Vietnamese spelling.** The two worst traps:
- **pinyin d, b, g are unaspirated** = Vietnamese *t, p (pin), c*;
- **pinyin t, p, k are aspirated**: the strong puff of Vietnamese *th* (*t* = "th"). **p is never "ph"** and **k is never "kh"**.

| Pinyin | Say | Trap |
|---|---|---|
| b / p | “p” (*pin*) without breath / with a strong puff, like *th* | p ≠ *ph* [f] |
| d / t | “t” (*ta*) / “th” (*tha*) | d ≠ Vietnamese *d* [z] |
| g / k | “c” (*ca*) / “c” + a strong puff | k ≠ *kh*; g ≠ Vietnamese *g* (a fricative) |
| h | **“kh”** (*kha*): a rough sound at the back | not the soft Vietnamese *h* [research: learners use Vietnamese *h*, 38 errors] |
| j / q / x | “ch” (*cha*, Northern) with the tongue tip down / the same + a puff / “x” with the tongue flat behind the lower teeth | q ≠ *qu*; x is softer than Vietnamese *x* |
| zh / ch / sh / r | tongue tip curled back: Southern “tr” / “tr” + a puff / Southern “s” / Southern “r” (≈ *r* in *ra* said in the South) | Northern speakers say *ch / x / d*: **ranked hard by 74%** [research] |
| z / c / s | “ts” as in *tsunami* / “ts” + a puff / “x” | **z / c / s are the hardest: 87% of learners** [research]. Learners say *ch*: no Vietnamese sound has the tongue tip on the teeth for z/c |
| l / n / m / f | as in Vietnamese; f = “ph” | keep n and l apart [research] |
| w / y | “u” / “i” gliding | |
| a / o / e | “a” / “ô” then “ua”-like (*bo, po*) / **“ơ”** (*喝 hē* ≈ “hơ”) | e ≠ Vietnamese “e” |
| -i after z c s zh ch sh r | **“ư”** (*字 zì* ≈ “tzư”, *是 shì*): the tongue buzzes | not “i” [research: learners say *i*] |
| ü (lǜ, nǚ; written *u* after j q x y) | say “i” with rounded lips | **not “uy”** [research: learners say *uy*] |
| ai / ei / ao / ou | “ai” / “ây” / “ao” / “âu” | ou ≠ uo [research] |
| ie / üe / ian / uo | “iê” / ü + “ê” / **“iên”** (*天 tiān* ≈ “thiên”) / “uô” | ian is not “i-an” |
| an / en / ang / eng / ong | “an” / “ân” / “ang” / “âng” / “ung” | |
| in / ing | “in” / “i” + **back nasal “ng”**, the tongue back as in *-ng*, not Vietnamese *-inh* | ***ing* has the most final errors** [research] |
| er | “ơ” + tongue curled back | not plain “ơ” [research] |

### 4.2 The four tones (sound map)

| Mandarin | Sound | Closest Vietnamese, and the trap |
|---|---|---|
| thanh 1 (ā), 55 | high and level, held | like **ngang**, but higher and steadier |
| thanh 2 (á), 35 | rising from mid to high | sounds like **sắc**; Vietnamese learners make few errors here [research: 0 errors on tones 1 and 2] |
| thanh 3 (ǎ), 214; 21 before another tone | low; alone it dips and rises | alone it is near **hỏi**. In speech it is mostly **low and flat** (half third tone). Do not glottalise it like *ngã* or *nặng* [author] |
| thanh 4 (à), 51 | **falls from high to low**, sharp | **no Vietnamese tone does this**: *huyền* starts low, *nặng* is short and creaky. **Learners say it level (55)**, the most frequent tone error [research] |
| thanh nhẹ | short, light, pitch set by the tone before | **not** a sixth tone; the tone mark is just absent |

**Tone-mark letters.** Pinyin ´ and ` look like *sắc* and *huyền* but mean thanh 2 and thanh 4. ˇ is not *hỏi*, and ¯ does not exist in Vietnamese. Say this in `tones`.

### 4.3 Typing pinyin on a Vietnamese keyboard

A Vietnamese input method rewrites pinyin:
- **VNI** turns the tone digit `3` into *hỏi* (`ni3` → *nỉ*) and `1` into *sắc* (`ni1` → *ní*, which the app reads as thanh 2);
- **Telex** turns `nar` into *nả* and `ow` into *ơ*.

The app accepts pinyin with tone marks (the accent bar), tone numbers, or characters, and uses word tiles by default. **Tell learners once** (`pinyin` and `tones`): switch Unikey / the phone's Vietnamese keyboard to English (or the Chinese pinyin keyboard) when typing pinyin, or use the accent bar and the tiles. [Smoke test, design note §9]

### 4.4 Lesson 1–3 anchors

- `pinyin` carries §4.1, `tones` §4.2 + §4.3, and `tone-change` the sandhi (不 bú before thanh 4, 一 yí / yì, 3 + 3 → 2 + 3).
- The three bodies, the Pinyin sounds and Tone pairs cards, and their deck descriptions use **the same anchors** (w2 writes `pinyin` and the cards; w3 writes `tones` and `tone-change`).
- **Never compare with English sounds.** The English source's "as in *cheese*", "like the s in *measure*" and similar are all rewritten (flagged `rw`).

## 5. Bridges and traps

### 5.1 Hán Việt on cards: the rule (fields `hvUse` / `hv` / `trad`; format in `work/README.md`)

**The four decisions** for every card that is a word of 1–4 characters:

| hvUse | When | The note says |
|---|---|---|
| **same** | Modern Vietnamese uses the Sino-Vietnamese word with this meaning: 学生 *học sinh*, 大学 *đại học*, 国家 *quốc gia*, 时间 *thời gian*, 准备 *chuẩn bị*, 感谢 *cảm tạ*, 银行 *ngân hàng*, 公司 *công ty*, 电话 *điện thoại*, 经济 *kinh tế*, 问题 *vấn đề*, 结婚 *kết hôn*, 同意 *đồng ý*, 注意 *chú ý*, 生日 *sinh nhật*, 家庭 *gia đình*, 越南 *Việt Nam*, 中国 *Trung Quốc* | «Âm Hán Việt: *học sinh*, nghĩa giống tiếng Việt», plus any nuance (学生 covers university students; Vietnamese *học sinh* is a school pupil and *sinh viên* is a university student: vi-ko review) |
| **shifted** | Vietnamese uses it with another meaning: a false friend (§5.2) | the reading **and** the contrast: «… nhưng tiếng Việt *phương tiện* nghĩa là …» |
| **none** | Vietnamese does not use the word (电脑 *điện não*, 喜欢 *hỉ hoan*, 天气 *thiên khí*, 医院 *y viện*) | optional. If you show the reading, show it as a memory aid, and say Vietnamese says *máy tính / thích / thời tiết / bệnh viện* |
| **skip** | No useful reading: particles (吗 呢 吧 了 的), interjections, pure sound loans (咖啡, 沙发), names of brands | nothing about Hán Việt |

**Rules:**
1. **Look up every syllable** on an opened page: a Hán Việt dictionary or Wiktionary's character entry. Never compose one from memory or from a similar character.
   - One Simplified character can stand for several Traditional ones, and their readings and meanings can differ [author; look each up]: 干 = 乾 (dry) / 幹 (do; trunk) / 干; 面 = 面 (face) / 麵 (noodles); 台 = 臺 (as in 台湾) / 台; 机 = 機 (machine) / 机 (small table). **Look up the Traditional character this word actually uses**, then its reading.
2. `hv` is the **Hán Việt** reading, never a later vernacular form. 恩 is *ân* (Hán Việt); *ơn* in *cảm ơn* is a Nôm reading [reference: Wiktionary 恩, Vietnamese]. The same goes for 味 *vị* (vernacular *mùi*), 本 *bản* (*vốn*), 法 *pháp* (*phép*) [reference: Wikipedia, *Sino-Vietnamese vocabulary*, Old Sino-Vietnamese table]. The note may name the vernacular form: «*cảm ơn* dùng âm cổ *ơn* của 恩 (Hán Việt: *ân*)».
3. **感恩 ≠ thank you.** In Mandarin 感恩 gǎn'ēn means "to feel grateful" (gratitude, formal) [reference: Wiktionary 感恩]; "thank you" is 谢谢. Vietnamese *cảm ơn* is written 感恩 in chữ Hán [reference: Wiktionary 感恩], so the learner will expect 感恩 = thank you. Teach it as a shifted item wherever it appears.
4. **Polyphones:** some characters have two readings by meaning (行 *hành* / *hàng*, 长 *trường* / *trưởng*, 乐 *lạc* / *nhạc*, 重 *trọng* / *trùng*) [author]. Use the reading of the meaning on this card. The validator warns when a character is read two ways, and the reviewer checks each case.
5. **Printed Traditional characters** go only in a card note, only through `trad`, and only when the Simplified form hides the link (学 / 學, 国 / 國, 时 / 時). Where Simplified = Traditional (人, 大, 中), print nothing extra.
6. **Reversed order.** Most Sino-Vietnamese compounds keep the Chinese order (介绍 *giới thiệu*, 准备 *chuẩn bị*). A few Vietnamese words are the Chinese characters in reverse order: Vietnamese *ngôn ngữ* (言語) for Chinese 语言, *vận mệnh* (運命) for 命运 [author; look both up before use]. Then `hv` is still the reading of the Chinese card in its own order (语言 → *ngữ ngôn*), and `hvUse` is `none`; the note may name the Vietnamese word. **Claim a reversal only after looking up both words.**
7. **Lesson bodies** give Hán Việt in prose only where it helps the point (numbers, 有 *hữu* next to *có*, 学 *học*). Many grammar words have no useful reading (们, 的, 吗): say nothing rather than invent a link. The same lookup rule applies.

### 5.2 False friends (từ dễ nhầm)

**[research: Lê Văn Trung 2012, *Tạp chí Khoa học ĐHSP TPHCM* 35]** (cards where they occur get `shifted`):

| Chinese (meaning) | Hán Việt (Vietnamese meaning) |
|---|---|
| 工作 gōngzuò (work, job) | *công tác* (official duty; *đi công tác* = business trip) |
| 困难 kùnnan (difficult) | *khốn nạn* (wretched; vile, an insult) |
| 表情 biǎoqíng (facial expression) | *biểu tình* (street protest) |
| 示威 shìwēi (demonstrate, protest) | *thị uy* (show of force) |
| 兽医 shòuyī (vet, the person) | *thú y* (veterinary science, the field) |

[author; verify before use]:

| Chinese (meaning) | Hán Việt (Vietnamese meaning) |
|---|---|
| 方便 fāngbiàn (convenient) | *phương tiện* (means; vehicle) |
| 认识 rènshi (know a person, recognise) | *nhận thức* (awareness, cognition) |
| 东西 dōngxi (thing) | *đông tây* (east and west; 东西 dōngxī with a full second tone also means that) |
| 意思 yìsi (meaning) | *ý tứ* (tact, considerateness) |
| 先生 xiānsheng (Mr., husband) | *tiên sinh* (dated: sir, teacher) |
| 老师 lǎoshī (teacher) | *lão sư* (archaic: old master); Vietnamese *thầy / cô giáo* |
| 博士 bóshì (PhD) | *bác sĩ* (physician); a doctor is 医生 yīshēng |
| 爱人 àiren (spouse, PRC) | *ái nhân* (literary: lover) |

### 5.3 Sound correspondences between Hán Việt and Mandarin (guessing aids, not rules)

These help a learner guess the Mandarin of a known Hán Việt word. They have exceptions. Present them as tendencies («thường», «hay gặp»), and **never derive a reading from them**.

**Finals** [author]:
- Hán Việt **-m → Mandarin -n**: 三 *tam* sān, 心 *tâm* xīn, 南 *nam* nán, 感 *cảm* gǎn. Mandarin lost final m.
- Hán Việt **-p / -t / -c / -ch → no final** in Mandarin: 十 *thập* shí, 八 *bát* bā, 学 *học* xué, 国 *quốc* guó, 百 *bách* bǎi. The Mandarin tone of these is unpredictable.
- Hán Việt **-nh** often ↔ Mandarin **-ing / -eng**: 明 *minh* míng, 生 *sinh* shēng, 情 *tình* qíng.
- -n ↔ -n, -ng ↔ -ng mostly.

**Initials** [author]:
- *nh* ↔ r (人 *nhân* rén, 日 *nhật* rì, 热 *nhiệt* rè);
- *v* ↔ w (文 *văn* wén, 万 *vạn* wàn);
- *ng* ↔ no initial or w / y (五 *ngũ* wǔ, 语 *ngữ* yǔ, 我 *ngã* wǒ);
- *tr* ↔ zh / ch (中 *trung* zhōng, 茶 *trà* chá, 长 *trường* cháng);
- *gi* ↔ j / x (家 *gia* jiā, 间 *gian* jiān);
- *qu* ↔ g / k (国 *quốc* guó, 光 *quang* guāng);
- *kh* ↔ k / q (开 *khai* kāi, 去 *khứ* qù).

**Tones (the cognate map)** [author, **unverified**: derived from the Middle Chinese tone classes, which split by the initial in both languages. The tone table in Wikipedia, *Four tones (Middle Chinese)*, shows the split in its Sino-Vietnamese row but gives no tone names]. **This tip is optional.** Use it in `tones` only as a tendency, with examples whose readings and pinyin you looked up, and drop any row you cannot confirm:

| Hán Việt tone | Mandarin tone it usually goes with | Examples |
|---|---|---|
| ngang, initial *p t c ch th tr s x h kh gi qu* or none | **thanh 1** | 天 *thiên* tiān, 家 *gia* jiā, 心 *tâm* xīn |
| ngang, initial *m n l nh ng v d* | **thanh 2** | 人 *nhân* rén, 年 *niên* nián, 来 *lai* lái, 明 *minh* míng, 文 *văn* wén, 民 *dân* mín |
| huyền | **thanh 2** | 时 *thời* shí, 平 *bình* píng, 茶 *trà* chá, 同 *đồng* tóng |
| hỏi | **thanh 3** | 好 *hảo* hǎo, 小 *tiểu* xiǎo, 本 *bản* běn |
| ngã | **thanh 3**, sometimes **thanh 4** | 老 *lão* lǎo, 马 *mã* mǎ, 五 *ngũ* wǔ / 士 *sĩ* shì |
| sắc, open or nasal syllable | **thanh 4** | 四 *tứ* sì, 去 *khứ* qù, 半 *bán* bàn |
| nặng, open or nasal syllable | **thanh 4** | 大 *đại* dà, 是 *thị* shì, 道 *đạo* dào, 万 *vạn* wàn |
| sắc / nặng ending in -p -t -c -ch | **any** | 八 *bát* bā, 国 *quốc* guó, 学 *học* xué, 日 *nhật* rì |

If used, it is one compact tip in `tones`, with three or four looked-up examples and the word «thường». It must never sit next to the sound map (§4.2) in a way that suggests ngang *sounds like* thanh 1. The reviewer checks every example.

### 5.4 Grammar: the mirror and the bridges

**Same as Vietnamese** (say so: it is the learner's head start) [author/inference]:
- SVO, no inflection, no articles, no plural endings. 们 only for people, optional like *các / những*.
- **Number + classifier + noun**: *hai con mèo* / 两只猫, *ba quyển sách* / 三本书, *một cốc trà* / 一杯茶.
  - 个 ≈ *cái* (general), 只 ≈ *con* (animals), 本 ≈ *quyển / cuốn*, 杯 ≈ *cốc / ly*, 张 ≈ *tờ / tấm*, 件 ≈ *chiếc / cái* (clothes, matters) [convention: PREP glosses].
  - **Difference:** Chinese needs the classifier after every number and after 这 / 那; Vietnamese often drops it (*hai cà phê*). Expect 三书 ✗.
- Question words stay in place (*Đây là cái gì?* / 这是什么?).
- 吗 ≈ *… không?* at the end. ***có … không?*** ≈ verb-not-verb (*có đi không?* / 去不去?). The A-not-A form is the easy win.
- 有 = *có* (have, and there is); 没有 = *không có*.
- 也 = *cũng*, 都 = *đều*, 还 = *vẫn / còn*, all before the verb, as in Vietnamese.
- Time words before the verb, or at the start, in both (*Ngày mai tôi đi* / 我明天去).
- Adjectives are predicates without a copula in both (*Tôi mệt*). **Difference:** Chinese adds 很 to a bare adjective statement (我很累), and the 很 is weak, not *rất*. Expect 我累 ✗ (sounds contrastive) more than 我是累 ✗.
- 别 = *đừng*; 吧 ≈ *… đi* / *… nhé* (suggestion).
- 咱们 / 我们 = *chúng ta* / *chúng tôi*.

**Mirror image: tell the learner exactly these:**
1. **Modifiers before the noun**, always, with 的:
   - *quyển sách của tôi* / 我的书;
   - *người Trung Quốc* / 中国人 (!);
   - *thầy giáo tiếng Trung* / 中文老师;
   - *món ăn tôi thích* / 我喜欢的菜.
   - Demonstratives too: *quyển sách này* / 这本书.
   - Give the rule as «Mọi thứ bổ nghĩa đứng **trước** danh từ.» It is the vi-ko rule for Korean, so reuse its wording: «Tiếng Việt nói *túi to*, tiếng Trung nói 大包» [inference].
2. **Place before the verb:** *Tôi làm việc ở bệnh viện* / 我**在医院**工作. Order: who · when · where · verb (the `word-order` title). Expect 我工作在医院 ✗.
3. **Comparison:** *đắt hơn taxi* / **比**出租车贵. 比 + the thing compared comes **before** the adjective. *nhất* after vs 最 before: *ngon nhất* / 最好吃.
4. **Manner and result after the verb:** *nói tiếng Trung giỏi* ↔ 中文说**得**很好. 得 + adjective goes after the verb, but the object must come first or the verb must repeat.

**Not like đã / đang / sẽ** (the biggest conceptual trap) [author]:
- **了** marks completion or a change, not past tense:
  - 我吃了 ≈ *Tôi ăn rồi*;
  - sentence-final 了 ≈ ***rồi*** (a change: 下雨了 *Mưa rồi*, 我饿了 *Đói rồi*);
  - a past habit or state takes no 了 (*Năm ngoái tôi ở Bắc Kinh* / 去年我住在北京).
  - Gloss with *rồi* where the Chinese has 了, and never add *đã* as the only past cue when the Chinese has no 了.
- **过** = experience ≈ ***đã từng***: 我去过北京 *Tôi đã từng đến Bắc Kinh*.
- **在 / 正在** + verb = ***đang***; **着** = an ongoing state, often not glossed.
- **会 / 要** (will) ≈ ***sẽ***; 会 also means "can (learned skill)", 能 "can (able, allowed)", 想 "want, would like", 要 "want, need, will": see `want-can`.
- **不 / 没:**
  - 不 = *không* (habits, choices, the future);
  - 没 = *chưa / không* for what did not happen (我没去 *Tôi không đi / Tôi chưa đi*);
  - *chưa* = 还没 (not yet).
  - Expect 我不去了 vs 我没去 confusion: gloss the first «Tôi không đi nữa».
- **把** has no Vietnamese twin. The nearest is *đem / lấy … (ra / vào)*; say so only in `ba-bie`. Most Vietnamese sentences keep SVO.

### 5.5 Pronouns and address

- 我 / 你 / 他 / 她 are neutral. Vietnamese chooses *tôi / em / cháu*, *anh / chị / bạn* by relationship.
  - In glosses 你 = *bạn* unless the line is to an elder (§3.2).
  - 他 / 她 = *anh ấy / cô ấy* by default, or the role noun when the line names one.
- 您 has no single Vietnamese equivalent (*ông / bà / thầy / quý khách* + *ạ*). Explain it in `greetings` and `pronouns`.
- **Kinship terms for strangers exist in both** (阿姨 *cô, dì*; 叔叔 *chú*; 大哥 *anh*), an easy bridge.

## 6. Error zones, ranked

1. **z / c / s** (87%) and **zh / ch / sh / r** (74%) rated hardest. Substitutions: Vietnamese *ch* for z / c / zh / ch, *x* for sh, Vietnamese *h* for h. c had 46 errors, z 43, h 38 [research: Nguyễn Thị Phương Thảo 2025].
2. **Nasal finals** (59.7% rated hardest; ***ing***: 50 errors, the most of any final), **er** (39, said as *ơ*), **ü** (22, said as *uy*), apical -i (said as *i*) [research].
3. **Tone 4 said level** (40 errors, the most of any tone), **tone 3** reduced (26), **3 + 3 sandhi** forgotten (14); tones 1 and 2 had no errors [research].
4. **Then [inference]:**
   - Vietnamese spelling habits on pinyin (d, p, k, h, x, q);
   - Hán Việt false friends and over-trust in cognates;
   - modifier and place order;
   - 了 as a past tense, *đã* glossed without 了;
   - missing classifiers;
   - 很 missing;
   - 比 order;
   - 不 / 没.

## 7. Per-lesson notes (ids in `target/zh/lessons.jsonl` order; writer in brackets)

| # | id | Vietnamese angle · rewrite |
|---|---|---|
| 1 | pinyin (w2) | §4.1 and §4.3. "One character, one syllable" is the Hán Việt idea: one chữ Hán = one âm tiết, as in *học sinh*. Rewrite every English sound comparison. |
| 2 | tones (w3) | §4.2 sound map; tone-mark letters vs Vietnamese marks; one compact §5.3 cognate tip. Six tones vs four + thanh nhẹ: be honest, not one to one. |
| 3 | tone-change (w3) | 不 / 一 / 3 + 3; Vietnamese has no tone sandhi of this kind [author], so drill it. |
| 4 | characters (w3) | Pictographs and radicals. Many learners know a few chữ Hán from Hán Nôm signs, pagodas and Tết couplets (*câu đối*) [inference]. Simplified vs Traditional, with one Hán Việt example (学 / 學 *học*). No invented character etymologies. |
| 5 | greetings (w3) | 你好 / 您好 vs *chào* + kinship; 谢谢 vs *cảm ơn* and the 感恩 trap (§5.1); 再见 = one goodbye; 吃了吗 as a greeting (≈ *Ăn cơm chưa?*, which exists in Vietnamese too: a bridge) [author]. |
| 6 | pronouns (w3) | §5.5; 们 ≈ *các / chúng*; 咱们 = *chúng ta*. |
| 7 | shi (w3) | 是 = *là*; no 是 before adjectives, as Vietnamese drops *là* (*Tôi mệt*). |
| 8 | adj (w3) | 很 + adjective; 很 is weak, not *rất*; 太…了 ≈ *… quá*. |
| 9 | ma (w3) | 吗 ≈ *… không?*; 呢 ≈ *còn … thì sao?*; questions stay SVO. |
| 10 | question-words (w3) | In place, as in Vietnamese; 什么 *gì*, 谁 *ai*, 哪儿 *đâu*, 几 *mấy*. |
| 11 | bu-mei (w3) | 不 / 没 vs *không / chưa* (§5.4). 我不去了 = «không đi nữa». |
| 12 | de (w3) | The mirror rule (§5.4.1); 的 ≈ *của* but placed before the noun; 我妈妈 without 的 ≈ *mẹ tôi*. |
| 13 | you (w3) | 有 = *có*, both senses, a perfect bridge; 没有 = *không có*; never 不有. |
| 14 | numbers (w3) | Chinese numerals vs the Hán Việt numerals Vietnamese learners know (一 *nhất*, 二 *nhị*, 三 *tam*, 四 *tứ*, 五 *ngũ*, 六 *lục*, 七 *thất*, 八 *bát*, 九 *cửu*, 十 *thập*, 百 *bách*, 千 *thiên*, 万 *vạn*) [author]; **万 = *vạn* = 10.000**; 二 vs 两; prices in 块 = *tệ*. |
| 15 | measure (w4) | Classifiers already known (§5.4); Chinese needs one after numbers and 这 / 那; 个 is not always *cái*. |
| 16 | food (w4) | Ordering; 服务员 (§3.2); paying by phone. |
| 17 | family (w4) | Kinship terms: Chinese splits by side like Vietnamese (*nội / ngoại* ≈ 爷爷奶奶 / 姥姥姥爷, 外公外婆) [author]. Ages with 岁 = *tuổi*. |
| 18 | time (w4) | Order big → small (年 月 日 = *năm tháng ngày*, the reverse of Vietnamese *ngày tháng năm*); 点 = *giờ*; 半 = *rưỡi*. **Weekdays are numbered one apart:** 星期一 = *thứ Hai*, 星期六 = *thứ Bảy*, 星期天 / 星期日 = *Chủ nhật* [author]. |
| 19 | zai (w4) | 在 = *ở*, but **before** the verb; location words after the noun (桌子上 = *trên bàn*: the mirror again). |
| 20 | word-order (w4) | who · when · where · verb vs the Vietnamese *ở…* after the verb (§5.4.2). |
| 21 | want-can (w4) | 想 / 要 / 会 / 能 vs *muốn / cần, sẽ / biết / có thể*. Note 会 = *biết* (a learned skill: 我会说中文 *Tôi biết nói tiếng Trung*), a direct bridge. |
| 22 | le (w4) | 了 ≠ *đã* (§5.4). Gloss with *rồi*; prompts pin the 了 answer (§8). |
| 23 | progress (w4) | 在 / 正在 = *đang*. |
| 24 | serial (w4) | 去 + verb ≈ *đi* + verb (*đi ăn* / 去吃饭): a bridge. Means of transport before 去 (坐地铁去 ≈ *đi tàu điện ngầm*). |
| 25 | a-not-a (w4) | ***có … không?*** = 去不去. The best bridge in the course. |
| 26 | ye-dou (w4) | 也 *cũng*, 都 *đều*, 还 *vẫn / còn*: same position as Vietnamese. 都不 vs 不都 ≈ *đều không* vs *không phải ai cũng*. |
| 27 | ba-bie (w4) | 吧 ≈ *… đi / nhé*; 别 = *đừng*. |
| 28 | and-or (w4) | 和 joins nouns only, unlike *và*. 还是 (questions) vs 或者 (statements) ≈ *hay* vs *hoặc*: Vietnamese makes the same split [author]. |

## 8. Glosses and practice prompts

- **One prompt, one answer.** Before writing a `p` or `q`, read the item in `target/zh/practice.jsonl` (`a`, `x`, `o`, `alt`, `strict`). The prompt must lead to the accepted Chinese and to nothing in `x`.
- **Pin the cue that decides the answer:**
  - 了 → use *rồi* or *xong*;
  - 过 → *đã từng*;
  - 在 / 正在 → *đang*;
  - 不 vs 没 → the time (*hôm qua*) or *nữa*;
  - 两 vs 二 → the classifier context;
  - 您 vs 你 → name the addressee (*Nói với thầy giáo:*);
  - a classifier → the noun;
  - 和 vs 还是 → statement or question.
- **Glosses of Chinese example rows and dialogues:**
  - one gloss per sentence: the same Chinese sentence gets the **same** Vietnamese across cards, examples, dialogues and lesson rows;
  - each writer records the glosses they set in `work/NOTES-<wN>.md`, and every writer reads all four before glossing a repeat (`REPEATS.md` lists them).
- **Places and names:** §3.1. Countries: *Mỹ, Anh, Pháp, Nhật Bản, Hàn Quốc, Việt Nam, Canada, Úc*.
- **Pattern rows** (`patterns`: `meaning` + `tr`):
  - `meaning` glosses the pattern with the blank kept (`___`);
  - `tr` translates the example sentence; it is search text, not shown as a link.
- **Meanings:** short and distinct within each deck. **Notes:** one or two sentences, the Hán Việt line first when the card has one.

## 9. What not to do

1. **No guessed Hán Việt.** No reading without an opened page, and no reading composed from a similar character.
2. **No "same" without checking modern use:** a word being Sino-Vietnamese does not mean Vietnamese uses it.
3. **No Chinese beyond the source**, except `trad` in notes (and, rarely, bodies and `why`). Never in prompts, options or glosses.
4. **No English sound comparisons** and no English left in.
5. **No "tone X = Vietnamese tone Y".**
6. **No 了 = past tense**, no *đã* as the only cue for a 了 answer.
7. **No *anh / chị / em* or *ạ*** outside §3.2, and never in the app voice.
8. **Never touch pinyin or characters.** They are target-side. Keep the pinyin of the English prose exactly.

## 10. Unverified; questions for a native reviewer

- **[author], unchecked:**
  - every Hán Việt reading not tagged [reference];
  - the false friends in the second half of §5.2;
  - the §5.3 correspondences;
  - the place and surname forms;
  - *lão sư, ái nhân, ý tứ* meanings.
- **[inference]:** Southern advantage on retroflexes; *Ăn cơm chưa?* as a greeting bridge; *hay / hoặc* = 还是 / 或者.
- **Questions:**
  1. *tiếng Trung* or *tiếng Hoa* in the app voice?
  2. Are *thanh 1–4* and *thanh nhẹ* the standard terms (vs *thanh một* …)?
  3. *lượng từ* everywhere, or *loại từ* (roadmap)?
  4. Is the *bác tài / chú* gloss for 师傅 natural?
  5. Chinese names in Hán Việt (*Vương Minh*) or in pinyin (*Wang Ming*) in a course?

## Sources

Opened 2026-11-24:
- [Wikipedia: Sino-Vietnamese vocabulary](https://en.wikipedia.org/wiki/Sino-Vietnamese_vocabulary): share estimates; Old Sino-Vietnamese doublets.
- [Wikipedia: Four tones (Middle Chinese)](https://en.wikipedia.org/wiki/Four_tones_(Middle_Chinese)): Sino-Vietnamese tone row.
- [Wiktionary: 感恩](https://en.wiktionary.org/wiki/%E6%84%9F%E6%81%A9) and [Wiktionary: 恩 (archived)](https://webcf.waybackmachine.org/web/20220407020522/https://en.wiktionary.org/wiki/%E6%81%A9): *ân* (Hán Việt) vs *ơn* (Nôm); 感恩 = *cảm ơn* in chữ Hán, Mandarin "feel grateful".
- [Lê Văn Trung (2012), *Bước đầu tìm hiểu hiện tượng chuyển di ngôn ngữ từ Việt sang Hán*, Tạp chí Khoa học ĐHSP TPHCM 35](https://journal.hcmue.edu.vn/index.php/hcmuejos/article/download/1102/1093/1103): false friends.
- [Nguyễn Thị Phương Thảo (2025), *越南汉语学习者初级阶段语音偏误分析及教学对策*, MA thesis, Hanoi University of Industry](https://cps.haui.edu.vn/media/29/uffile-upload-no-title29913.pdf): error ranking.
- [PREP: Lượng từ trong tiếng Trung](https://prepedu.com/vi/blog/luong-tu-trong-tieng-trung): the term *lượng từ*, classifier glosses.

Local:
- `docs/profiles/vi-ko.md`, `tools/halves/native/vi/ko/` (+ `REVIEW.md`);
- `docs/profiles/en-zh.md`;
- `tools/i18n/vi/ui.json`, `tools/i18n/vi/roadmap.json`;
- `tools/halves/target/zh/`, `native/en/zh/`.
