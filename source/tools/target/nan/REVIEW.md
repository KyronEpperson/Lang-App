# en-nan cold review (EN-NAN-REVIEWER, 2026-11-20)

Brief: docs/briefs/en-nan-R.md + docs/TARGET-REVIEW.md. Sources first: every fact below names the page opened in this review
(WebFetch, which returns a model summary of the page: each reading was asked for "copied character for character", and the
expected reading was never put in the prompt). Baseline before edits: gen + validate PASS (27 lessons, 18 decks, 307 cards, 378 items).

## Batch 1: sandhi and tone sources (opened 2026-11-20)

| Claim in the course | Source opened | What it says | Verdict |
|---|---|---|---|
| Open syllables 1→7, 7→3, 3→2, 2→1 | https://en.wikipedia.org/wiki/Tone_sandhi (Taiwanese Hokkien section); https://bitesizetaiwanese.com/ep03-tone-changes | Wikipedia: "tone 1 becomes 7, 7 becomes 3, 3 becomes 2, and 2 becomes 1." BST rule 1 "1-7-3-2-1" | sourced (2 sources) |
| 5→7 general, 5→3 Taipei | same two | Wikipedia: "Tone 5 becomes 7 or 3, depending on dialect." BST: "to Tone 7 (Mid), or to Tone 3 (Low) in some Northern dialects" | sourced; wording changed from "Taipei" to "some northern speakers" (neither source says Taipei) |
| -p -t -k: 4 ↔ 8 | same two + https://taioaan.org/wiki/index.php/Zoafntiau | Wikipedia: "take the opposite tone (phonetically, a high tone becomes low, and a low tone becomes high)". BST: "4 and 8 swap" (sip8-sip, sio̍k4-sio̍k). taioaan: 8→4, 4→8 | sourced (3) |
| -h: 4 → 2, 8 → 3, -h dropped | Wikipedia (as above); BST ep03 | Wikipedia: syllables ending in a glottal stop "drop their final consonant to become tone 2 or 3" (no pairing). BST: "4 (-h) becomes 2 (High Falling)" khuah2-khuah; "8 (-h) becomes 3 (Mid Falling)" pe̍h3-pe̍h | 4 → 2: BST, and taioaan Zoafntiau ("syllables ending in h are usually pronounced in shouting tone", its name for tone 2, "such as in bahzaxng, but not bøeq"). 8 → 3: BST only, consistent with Wikipedia's "2 or 3". The lesson states both and says the 8 → 3 pair rests on one source; no practice item tests the pairing. Native / teacher check still advised for 8 → 3 |
| Last syllable of a group keeps its tone | Wikipedia; BST ep03 | "all its non-neutral-tone syllables save for the last undergo tone sandhi"; BST: "the syllable at the end of a phrase stays in the original tone", and tone change "depends on the sentence structure" | sourced |
| Neutral tone: syllable before -- keeps its citation tone | MOE 臺灣台語羅馬字拼音方案使用手冊 https://language.moe.gov.tw/files/people_files/tshiutsheh_1130826.pdf; https://bitesizetaiwanese.com/ep05-the-neutral-tone/ | MOE: "輕聲符之前為重讀音節，唸本調，輕聲符之後為輕聲" (tsáu--tshut-khì). BST: neutral tones "don't create tone changes for the preceding syllable" | sourced |
| Neutral syllable "light and low" | BST ep05 | "always a short, mid-to-low pitch, or a mid falling tone"; after tones 1, 5, 7 "its tonal contour extends into the neutral tone word" | "low" overgeneralises: changed to "light and short" with the BST detail |
| 仔: the syllable before it changes "in its own way" (not taught) | taioaan Zoafntiau; https://ghostisland.media/en/shows/bite-size-taiwanese-pronounce-it-like-a-pro/ep07-suffix | taioaan lists "basic tone + ar" among exceptions; BST: "the special tone changes and sound changes of the '-á' suffix". The BST outline page with the rule could not be opened | kept as is (not taught, which is what the sources allow) |
| Pitch numbers 55 51 31 3 24 33 5 | https://taioaan.org/wiki/index.php/Tones_of_Taiwanese; https://bitesizetaiwanese.com/pronounce-it-like-a-pro-ep01-basic-tones/ | taioaan: 55, 51, 31, 3ʔ, 24, 33, 5ʔ. BST: High Flat ˥, High Falling ˥˧, Mid Falling ˨˩, Mid Stop ˨, Low Rising ˨˦, Mid Flat ˧, High stop ˥; tone 6 "merged with other tones" | numbers kept with a line that sources differ slightly (BST's IPA = 53, 21, 2) |
| MOE manual on sandhi | MOE manual (above) | the manual states no sandhi rules and no pitch values (only the -- rule and "-h 為喉塞音") | the profile's "[curriculum convention]" for the circle rests on Wikipedia + BST, not the MOE |

## Batch 2: lexicon re-opened (lexicon.txt + lexicon-add-3 / -A / -B)

Method: 13 MOE index pages (hunlui 29, 55, 61, 98, 99, 100 ×3, 102 ×2, 207), 11 MOE headword searches, 1 character index, ~60 MOE entries
(su/N) and the non-MOE pages were re-opened; each fetch asked for headwords and readings "copied character for character" without the
expected reading in the prompt. The answers were saved and compared by script (NFC) with every lexicon line
(scratch: nanR/seen.tsv, scripts/cmp.js, scripts/table.js).

**Result: 428 distinct entries in the four files. 426 re-opened and matching, 0 corrected, 2 could not be re-opened (禮拜一, 禮拜六: derived, on no page).** No reading differed. (The 3 entries of lexicon-add-R.txt come from the MOE manual.)
Caveat on the method: seen.tsv is my transcription of each fetch answer, not the raw fetch output (the tool returns a model summary, which was read and typed into the file); the script diff guards against slips in the comparison, not against a misreading of a fetch answer. Notes:
- Constructed MOE URLs are unreliable: a search URL typed by hand (tsha=多謝, hunlui/29 page 2) served a different, cached page
  (the 食 results; page 1). Rows were taken only from pages whose own headword or search term was the one asked for.
- Second pass: 這馬, 定定, 起來, 厝裡 from su/2858 (the first fetch returned only a summary; the second gave the example lines I tsit-má tī tshù--lí teh khùn. / I tiānn-tiānn tī puànn-mê-á peh khí-lâi tha̍k-tsheh.); 菜單 su/8962; 林 su/21888, 王 su/21827, 李 su/21867.
  Not re-opened: 禮拜一, 禮拜六 (derived, no page has them: profile §11 item 4 stands).
- 臺灣 Tâi-uân, 臺中 Tâi-tiong, 高鐵 Ko-thih, 大學 tāi-ha̍k matched inside longer MOE names on the 臺 index (國立臺灣…, 高鐵臺中站,
  臺北海洋大學), not as their own headwords.
- 青菜: Wiktionary gives tshenn-tshài for "Zhangzhou, Kaohsiung" and tshinn-tshài for "Xiamen, Quanzhou, Taipei"; no General Taiwanese
  label. Kept (matches the southern / general reading the course follows); native check.
- 倒爿 tò-pîng: Wiktionary "General Taiwanese, Xiamen, Zhangzhou": matches.
- 皮 phuê: reading matches (MOE sound index ph p.6). Meaning: the MOE proverb 一隻牛剝雙領皮 Tsi̍t tsiah gû pak siang niá phuê (t:牛 page)
  shows phuê as an animal's hide, which supports "skin"; the writer's meaning was inferred, now has this support.
- **美國人 / 臺灣人 (one word or two):** neither is an MOE headword. The MOE Tâi-lô manual (Appendix 4, 名詞 (九)) states: "專有名詞後接普通名詞時，
  若普通名詞為單音節，則與專名連寫", example **Tâi-lâm-lâng（臺南人）**. So the course's "Bí-kok lâng" / "Tâi-uân lâng" break the MOE rule.
  Added to lexicon-add-R.txt: 美國人 Bí-kok-lâng, 臺灣人 Tâi-uân-lâng, 臺南人 Tâi-lâm-lâng (manual URL), and every pron regenerated.

### Meanings and claims checked on the same pages (brief §4)

| Claim | Source | Finding | Action |
|---|---|---|---|
| 斤 = 600 g | https://wiki.riteme.site/wiki/Jin_(mass) (Wikipedia mirror) | "1 Taiwan jin is 600 grams" | kept, sourced |
| 粒 for small round things | https://bitesizetaiwanese.com/pronounce-it-like-a-pro-ep01-basic-tones/ | "Lia̍p … measure word for round objects" | "small" dropped: "round things" |
| 牽手 "a warm word for your spouse" | https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E7%89%BD%E6%89%8B | "(Taiwanese Hokkien …) wife" | gloss → "wife", "warm" removed |
| 囝 child (son or daughter) | https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E5%9B%9D ; wp700 | "son", "child", "baby" ; Wikipedia: "son" | "child; son" kept, "(son or daughter)" removed |
| 後生 son | https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/h%C4%81u-se%E2%81%BF | "son" | kept, sourced |
| 翁某 husband and wife | su/12062 (翁 白 ang = near-synonym of 頭家 sense 2 "丈夫、先生"); su/13567 (𪜶某 glossed 他的老婆) | 翁 = husband, 某 = wife | kept, sourced |
| 𪜶 as "his / her" | su/13567 | sense 2: possessive "他的/她的/他們的" (𪜶某真媠 = 他的老婆很漂亮) | kept, sourced |
| 家 as the Mandarin for 厝 | MOE h29 lists 家 ka as a Taigi headword | the "Not (Mandarin)" claim is the writer's | 家 removed from the table and the deck note |
| 歹勢 vs 失禮 (greetings check 2: 歹勢 wrong for breaking something) | t:歹勢 page; su/1826 | 歹勢 = "不好意思、對不起、抱歉"; 失禮 synonyms 失人禮, 抱歉, 無禮 | both are apologies in the MOE; "small vs serious" removed; check 2 and the MCQ distractors no longer treat 歹勢 as wrong |
| 感謝 "more formal" | su/2415 (und-hani) | 多謝 near-synonyms: 勞力, 感恩, 感謝, 說謝 | "more formal / speeches and signs" removed |
| 勞力 | su/2415; h61 | near-synonym of 多謝 | kept |
| 再見 as Taigi | su/2232 | 再會, near-synonym ② 再見 tsài-kiàn | kept |
| 早睏 "good night" | su/2530 | 早睏 = "早睡" (go to bed early); example 伊慣勢早睏… | "good night" removed: meaning "Go to bed early." |
| 你好 as a greeting | – | no source opened attests it | lesson line kept only as "you may also see"; no claim it is a greeting (already so) |
| 你幾歲 "can sound blunt" | – | none | removed |
| 冷 líng "cold to the touch" | su/8287, su/11204 | 冷 listed as near-synonym of 寒 (氣候上的冷) and antonym of 熱 (weather) | gloss → "cold" |
| j as dz, oo as aw, o vs oo, -h as a catch | BST ep01 IPA: Jı̍t /dʑit/, Khòo /kʰɔ/, Hó /hə/, Bah /baʔ/ | j = [dʑ] (closer to the j of "jeep" than dz); oo = [ɔ] ("aw") matches; o = [ə] in BST's transcription (not "tight o of go"); -h = [ʔ] glottal stop | j and o descriptions rewritten to the IPA source; aw and catch kept, cited |
| 上 alone = tsiūnn; siōng only before an adjective | su/164 (上 白 tsiūnn main; 文 siōng); su/306 上好 siōng hó; su/501 上蓋 siōng-kài | matches the tool | kept |
| 免啦 as a reply to an offer | su/2872 | 免啦！ "不用啦！" (no context of an offer) | kept as "No need!"; the dialogue use (reply to 我請你食飯) listed for the native check |
| 傷 "more than you want" | su/9290 | 傷 = too (傷鹹, 你講話傷過份) | "more than you want" removed: "too" |

### Lexicon table (every entry)

| entry | reading in lexicon | source re-opened | result |
|---|---|---|---|
| 我 | guá | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 你 | lí | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 伊 | i | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 阮 | guán | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 咱 | lán | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 恁 | lín | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 家己 | ka-kī | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 遮 | tsia | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 遐 | hia | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 彼个 | hit ê | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 這號 | tsit-lō | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 逐个 | ta̍k ê | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 別个 | pa̍t-ê | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 佗位 | tó-uī | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 佗一个 | tó tsi̍t ê | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 啥 | siánn | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 啥人 | siánn-lâng | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 啥款 | siánn-khuán | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 啥物 | siánn-mih | https://sutian.moe.edu.tw/zh-hant/hunlui/207/ | matches |
| 當時 | tang-sî | https://sutian.moe.edu.tw/zh-hant/hunlui/207/ | matches |
| 敢是 | kám-sī | https://sutian.moe.edu.tw/zh-hant/hunlui/207/ | matches |
| 是按怎 | sī-án-tsuánn | https://sutian.moe.edu.tw/zh-hant/hunlui/207/ | matches |
| 按怎 | án-tsuánn | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 按呢 | án-ne | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 个 | ê | https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100 | matches |
| 的 | ê | https://sutian.moe.edu.tw/zh-hant/hunlui/99/ | matches |
| 仔 | á | https://sutian.moe.edu.tw/zh-hant/hunlui/99/ | matches |
| 矣 | --ah | https://sutian.moe.edu.tw/zh-hant/hunlui/99/ | matches |
| 未 | buē | https://sutian.moe.edu.tw/zh-hant/su/1653/ | matches |
| 猶未 | iáu-buē | https://sutian.moe.edu.tw/zh-hant/su/1653/ | matches |
| 啦 | --lah | https://sutian.moe.edu.tw/zh-hant/su/2872/ | matches |
| 咧 | teh | https://sutian.moe.edu.tw/zh-hant/su/4771/ | matches |
| 是 | sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 毋 | m̄ | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋是 | m̄ sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 是毋是 | sī m̄ sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 敢毋是 | kám m̄ sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 也是 | iā sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 嘛是 | mā sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 攏是 | lóng sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 就是 | tō sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 抑是 | ia̍h-sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 猶是 | iáu-sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 但是 | tān-sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 若是 | nā-sī | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=是&iahbe=1&pitsoo=50 | matches |
| 有 | ū | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 無 | bô | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 敢有 | kám ū | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 猶有 | iáu-ū | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 有影 | ū-iánn | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 有閒 | ū-îng | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 有名 | ū-miâ | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 有時 | ū-sî | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 有法度 | ū-huat-tōo | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 無法度 | bô-huat-tōo | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=無 | matches |
| 無愛 | bô ài | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 無要緊 | bô iàu-kín | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 毋免 | m̄-bián | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋好 | m̄ hó | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋敢 | m̄ kánn | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋知 | m̄ tsai | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋知影 | m̄ tsai-iánn | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋捌 | m̄ bat | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋通 | m̄-thang | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋著 | m̄-tio̍h | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 毋過 | m̄-koh | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 莫 | mài | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 袂 | bē | https://sutian.moe.edu.tw/zh-hant/su/6632/ | matches |
| 袂曉 | bē-hiáu | https://sutian.moe.edu.tw/zh-hant/su/6632/ | matches |
| 袂使 | bē-sái | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 袂當 | bē-tàng | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=毋&iahbe=1&pitsoo=50 | matches |
| 會 | ē | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 會使 | ē-sái | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 會當 | ē-tàng | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 欲 | beh | https://sutian.moe.edu.tw/zh-hant/su/7469/ | matches |
| 想欲 | siūnn-beh | https://sutian.moe.edu.tw/zh-hant/su/14370/ | matches |
| 愛 | ài | https://sutian.moe.edu.tw/zh-hant/su/9427/ | matches |
| 愛睏 | ài-khùn | https://sutian.moe.edu.tw/zh-hant/su/9427/ | matches |
| 免 | bián | https://sutian.moe.edu.tw/zh-hant/su/2872/ | matches |
| 免錢 | bián-tsînn | https://sutian.moe.edu.tw/zh-hant/su/2872/ | matches |
| 敢 | kám | https://sutian.moe.edu.tw/zh-hant/su/8414/ | matches |
| 捌 | bat | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 佇 | tī | https://sutian.moe.edu.tw/zh-hant/su/2858/ | matches |
| 共 | kā | https://sutian.moe.edu.tw/zh-hant/su/2099/ | matches |
| 比 | pí | https://sutian.moe.edu.tw/zh-hant/su/10139/ | matches |
| 較 | khah | https://sutian.moe.edu.tw/zh-hant/su/10139/ | matches |
| 都 | to | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 真 | tsin | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 誠 | tsiânn | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 足 | tsiok | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 真正 | tsin-tsiànn | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 攏 | lóng | https://sutian.moe.edu.tw/zh-hant/su/1826/ | matches |
| 再 | tsài | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 慢慢仔 | bān-bān-á | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 直直 | ti̍t-ti̍t | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 透早 | thàu-tsá | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 做陣 | tsò-tīn | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 總共 | tsóng-kiōng | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 親像 | tshin-tshiūnn | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 一下 | tsi̍t-ē | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 這馬 | tsit-má | https://sutian.moe.edu.tw/zh-hant/su/2858/ | matches |
| 定定 | tiānn-tiānn | https://sutian.moe.edu.tw/zh-hant/su/2858/ | matches |
| 多謝 | to-siā | https://sutian.moe.edu.tw/zh-hant/su/2415/ | matches |
| 感謝 | kám-siā | https://sutian.moe.edu.tw/zh-hant/su/2415/ | matches |
| 多謝你 | to-siā--lí | https://sutian.moe.edu.tw/zh-hant/su/2415/ | matches |
| 勞力 | lóo-la̍t | https://sutian.moe.edu.tw/zh-hant/hunlui/61/?iahbe=1&pitsoo=100 | matches |
| 歹勢 | pháinn-sè | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=歹勢 | matches |
| 好勢 | hó-sè | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 再會 | tsài-huē | https://sutian.moe.edu.tw/zh-hant/su/2232/ | matches |
| 再見 | tsài-kiàn | https://sutian.moe.edu.tw/zh-hant/su/2232/ | matches |
| 失禮 | sit-lé | https://sutian.moe.edu.tw/zh-hant/su/1826/ | matches |
| 客氣 | kheh-khì | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=有&iahbe=1&pitsoo=100 | matches |
| 恭喜 | kiong-hí | https://sutian.moe.edu.tw/zh-hant/hunlui/61/?iahbe=1&pitsoo=100 | matches |
| 介紹 | kài-siāu | https://sutian.moe.edu.tw/zh-hant/hunlui/61/?iahbe=1&pitsoo=100 | matches |
| 見面 | kìnn-bīn | https://sutian.moe.edu.tw/zh-hant/hunlui/61/?iahbe=1&pitsoo=100 | matches |
| 人客 | lâng-kheh | https://sutian.moe.edu.tw/zh-hant/hunlui/61/?iahbe=1&pitsoo=100 | matches |
| 禮物 | lé-bu̍t | https://sutian.moe.edu.tw/zh-hant/hunlui/61/?iahbe=1&pitsoo=100 | matches |
| 好 | hó | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 阿爸 | a-pah | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿母 | a-bú | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿公 | a-kong | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿媽 | a-má | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿兄 | a-hiann | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿姊 | a-tsí | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿姨 | a-î | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿伯 | a-peh | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿叔 | a-tsik | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿姑 | a-koo | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 阿舅 | a-kū | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 外公 | guā-kong | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 外媽 | guā-má | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 後生 | hāu-senn | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 囡仔 | gín-á | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 兄弟 | hiann-tī | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 父母 | hū-bió | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 牽手 | khan-tshiú | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 翁某 | ang-bóo | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 囝 | kiánn | https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters | matches |
| 小弟 | sió-tī | https://sutian.moe.edu.tw/zh-hant/su/4770/ | matches |
| 一 | tsi̍t | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 二 | jī | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 兩 | nn̄g | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 三 | sann | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 四 | sì | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 五 | gōo | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 六 | la̍k | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 七 | tshit | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 八 | peh | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 九 | káu | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 十 | tsa̍p | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 百 | pah | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 千 | tshing | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 萬 | bān | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 空 | khòng | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 三百 | sann-pah | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 一半 | tsi̍t-puànn | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 幾 | kuí | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 箍 | khoo | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 杯 | pue | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 本 | pún | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 隻 | tsiah | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 台 | tâi | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 張 | tiunn | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 件 | kiānn | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 粒 | lia̍p | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 條 | tiâu | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 雙 | siang | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 斤 | kin | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 歲 | huè | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 點 | tiám | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 點鐘 | tiám-tsing | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 分鐘 | hun-tsing | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 項 | hāng | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 次 | tshù | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 句 | kù | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 塊 | tè | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 冊 | tsheh | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 公斤 | kong-kin | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 公里 | kong-lí | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 去 | khì | https://sutian.moe.edu.tw/zh-hant/su/7469/ | matches |
| 來 | lâi | https://sutian.moe.edu.tw/zh-hant/su/2872/ | matches |
| 食 | tsia̍h | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=多謝 (the site served the 食 results page) | matches |
| 食飯 | tsia̍h-pn̄g | https://sutian.moe.edu.tw/zh-hant/su/1653/ | matches |
| 食飽 | tsia̍h-pá | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=飽 | matches |
| 啉 | lim | https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters | matches |
| 講 | kóng | https://sutian.moe.edu.tw/zh-hant/su/2099/ | matches |
| 看 | khuànn | https://sutian.moe.edu.tw/zh-hant/su/4770/ | matches |
| 坐 | tsē | https://sutian.moe.edu.tw/zh-hant/su/4770/ | matches |
| 做 | tsò | https://sutian.moe.edu.tw/zh-hant/su/2099/ | matches |
| 買 | bé | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 學 | o̍h | https://sutian.moe.edu.tw/zh-hant/su/10139/ | matches |
| 睏 | khùn | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 讀冊 | tha̍k-tsheh | https://sutian.moe.edu.tw/zh-hant/su/4771/ | matches |
| 行路 | kiânn-lōo | https://sutian.moe.edu.tw/zh-hant/su/9427/ | matches |
| 蹛 | tuà | https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters | matches |
| 予 | hōo | https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters | matches |
| 落雨 | lo̍h-hōo | https://sutian.moe.edu.tw/zh-hant/su/7469/ | matches |
| 煩惱 | huân-ló | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 感冒 | kám-mōo | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 起來 | khí-lâi | https://sutian.moe.edu.tw/zh-hant/su/2858/ | matches |
| 人 | lâng | https://sutian.moe.edu.tw/zh-hant/su/9427/ | matches |
| 厝 | tshù | https://bitesizetaiwanese.com/pronounce-it-like-a-pro-ep01-basic-tones/ (Tshù, house) | matches |
| 厝裡 | tshù--lí | https://sutian.moe.edu.tw/zh-hant/su/2858/ | matches |
| 天 | thinn | https://sutian.moe.edu.tw/zh-hant/su/7469/ | matches |
| 房間 | pâng-king | https://sutian.moe.edu.tw/zh-hant/su/2099/ | matches |
| 便所 | piān-sóo | https://sutian.moe.edu.tw/zh-hant/su/14370/ | matches |
| 物件 | mi̍h-kiānn | https://sutian.moe.edu.tw/zh-hant/su/10139/ | matches |
| 桌仔 | toh-á | https://sutian.moe.edu.tw/zh-hant/su/10139/ | matches |
| 內面 | lāi-bīn | https://sutian.moe.edu.tw/zh-hant/su/10139/ | matches |
| 炒飯 | tshá-pn̄g | https://sutian.moe.edu.tw/zh-hant/su/4770/ | matches |
| 柑仔 | kam-á | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 菜單 | tshài-tuann | https://sutian.moe.edu.tw/zh-hant/su/8962/ | matches |
| 火鍋 | hué-ko | https://sutian.moe.edu.tw/und-hani/hunlui/55/ | matches |
| 甌仔 | au-á | https://sutian.moe.edu.tw/und-hani/hunlui/55/ | matches |
| 低 | kē | https://sutian.moe.edu.tw/zh-hant/su/10139/ | matches |
| 濟 | tsē | https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters | matches |
| 媠 | suí | https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters | matches |
| 慢 | bān | https://sutian.moe.edu.tw/zh-hant/su/4770/ | matches |
| 歡喜 | huann-hí | https://sutian.moe.edu.tw/zh-hant/su/4771/ | matches |
| 小心 | sió-sim | https://sutian.moe.edu.tw/zh-hant/su/9427/ | matches |
| 獅 | sai | https://en.wiktionary.com/wiki/獅虎豹鱉猴狗象鹿 | matches |
| 虎 | hóo | https://en.wiktionary.com/wiki/獅虎豹鱉猴狗象鹿 | matches |
| 豹 | pà | https://en.wiktionary.com/wiki/獅虎豹鱉猴狗象鹿 | matches |
| 鱉 | pih | https://en.wiktionary.com/wiki/獅虎豹鱉猴狗象鹿 | matches |
| 猴 | kâu | https://en.wiktionary.com/wiki/獅虎豹鱉猴狗象鹿 | matches |
| 狗 | káu | https://en.wiktionary.com/wiki/獅虎豹鱉猴狗象鹿 | matches |
| 象 | tshiūnn | https://en.wiktionary.com/wiki/獅虎豹鱉猴狗象鹿 | matches |
| 鹿 | lo̍k | https://en.wiktionary.com/wiki/獅虎豹鱉猴狗象鹿 | matches |
| 老師 | lāu-su | https://sutian.moe.edu.tw/zh-hant/su/2699/ | matches |
| 學生 | ha̍k-sing | https://sutian.moe.edu.tw/zh-hant/su/11618/ | matches |
| 中學生 | tiong-ha̍k-sing | https://sutian.moe.edu.tw/zh-hant/su/11618/ | matches |
| 名 | miâ | https://sutian.moe.edu.tw/zh-hant/su/2117/ | matches |
| 號做 | hō-tsò | https://sutian.moe.edu.tw/zh-hant/su/2117/ | matches |
| 姓 | sènn | https://sutian.moe.edu.tw/zh-hant/su/3766/ | matches |
| 貴姓 | kuì-sènn | https://sutian.moe.edu.tw/zh-hant/su/9035/ | matches |
| 請 | tshiánn | https://sutian.moe.edu.tw/zh-hant/su/11380/ | matches |
| 多多 | to-to | https://sutian.moe.edu.tw/zh-hant/su/11380/ | matches |
| 指教 | tsí-kàu | https://sutian.moe.edu.tw/zh-hant/su/11380/ | matches |
| 逐家 | ta̍k-ke | https://sutian.moe.edu.tw/zh-hant/su/11380/ | matches |
| 今仔日 | kin-á-ji̍t | https://sutian.moe.edu.tw/zh-hant/su/13473/ | matches |
| 請恁 | tshiánn--lín | https://sutian.moe.edu.tw/zh-hant/su/11380/ | matches |
| 朋友 | pîng-iú | https://sutian.moe.edu.tw/zh-hant/su/11380/ | matches |
| 電影 | tiān-iánn | https://sutian.moe.edu.tw/zh-hant/su/11380/ | matches |
| 閣 | koh | https://sutian.moe.edu.tw/zh-hant/su/10907/ | matches |
| 明仔載 | bîn-á-tsài | https://sutian.moe.edu.tw/zh-hant/su/13522/ | matches |
| 叫 | kiò | https://sutian.moe.edu.tw/zh-hant/su/10907/ | matches |
| 第一 | tē-it | https://sutian.moe.edu.tw/zh-hant/su/10907/ | matches |
| 煮 | tsú | https://sutian.moe.edu.tw/zh-hant/su/10907/ | matches |
| 菜 | tshài | https://sutian.moe.edu.tw/zh-hant/su/10907/ | matches |
| 歹食 | pháinn-tsia̍h | https://sutian.moe.edu.tw/zh-hant/su/10907/ | matches |
| 下班 | hā-pan | https://sutian.moe.edu.tw/zh-hant/su/10907/ | matches |
| 聽 | thiann | https://sutian.moe.edu.tw/zh-hant/su/13225/ | matches |
| 歌 | kua | https://sutian.moe.edu.tw/zh-hant/su/9626/ | matches |
| 聽過 | thiann--kuè | https://sutian.moe.edu.tw/zh-hant/su/13225/ | matches |
| 爸母 | pē-bú | https://sutian.moe.edu.tw/zh-hant/su/13225/ | matches |
| 話 | uē | https://sutian.moe.edu.tw/zh-hant/su/13225/ | matches |
| 擺 | pái | https://sutian.moe.edu.tw/zh-hant/su/12482/ | matches |
| 一擺 | tsi̍t pái | https://sutian.moe.edu.tw/zh-hant/su/12482/ | matches |
| 頂擺 | tíng-pái | https://sutian.moe.edu.tw/zh-hant/su/12482/ | matches |
| 知影 | tsai-iánn | https://sutian.moe.edu.tw/zh-hant/su/4408/ | matches |
| 叫做 | kiò-tsò | https://sutian.moe.edu.tw/zh-hant/su/4408/ | matches |
| 夜市 | iā-tshī | https://sutian.moe.edu.tw/zh-hant/su/3773/ | matches |
| 來去 | lâi-khì | https://sutian.moe.edu.tw/zh-hant/su/3773/ | matches |
| 踅 | se̍h | https://sutian.moe.edu.tw/zh-hant/su/3773/ | matches |
| 錢 | tsînn | https://sutian.moe.edu.tw/zh-hant/su/11988/ | matches |
| 金錢 | kim-tsînn | https://sutian.moe.edu.tw/zh-hant/su/11988/ | matches |
| 頭家 | thâu-ke | https://sutian.moe.edu.tw/zh-hant/su/12062/ | matches |
| 佮 | kah | https://sutian.moe.edu.tw/zh-hant/su/13522/ | matches |
| 菜市仔 | tshài-tshī-á | https://sutian.moe.edu.tw/zh-hant/su/12062/ | matches |
| 賣 | bē | https://sutian.moe.edu.tw/zh-hant/su/12062/ | matches |
| 偌濟 | guā-tsē | https://sutian.moe.edu.tw/zh-hant/su/6998/ | matches |
| 弓蕉 | king-tsio | https://sutian.moe.edu.tw/zh-hant/su/6998/ | matches |
| 碗 | uánn | https://sutian.moe.edu.tw/zh-hant/su/9775/ | matches |
| 飯 | pn̄g | https://sutian.moe.edu.tw/zh-hant/su/9775/ | matches |
| 飯碗 | pn̄g-uánn | https://sutian.moe.edu.tw/zh-hant/su/9775/ | matches |
| 貴 | kuì | https://sutian.moe.edu.tw/zh-hant/su/9035/ | matches |
| 遮貴 | tsiah kuì | https://sutian.moe.edu.tw/zh-hant/su/9035/ | matches |
| 麵 | mī | https://sutian.moe.edu.tw/zh-hant/su/13053/ | matches |
| 俗 | sio̍k | https://sutian.moe.edu.tw/zh-hant/su/9035/ | matches |
| 彼擔 | hit tànn | https://sutian.moe.edu.tw/zh-hant/su/4690/ | matches |
| 水果 | tsuí-kó | https://sutian.moe.edu.tw/zh-hant/su/4690/ | matches |
| 肉 | bah | https://sutian.moe.edu.tw/zh-hant/su/2595/ | matches |
| 肉圓 | bah-uân | https://sutian.moe.edu.tw/zh-hant/su/2595/ | matches |
| 肉乾 | bah-kuann | https://sutian.moe.edu.tw/zh-hant/su/2595/ | matches |
| 卵 | nn̄g | https://sutian.moe.edu.tw/zh-hant/su/2953/ | matches |
| 雞卵 | ke-nn̄g | https://sutian.moe.edu.tw/zh-hant/su/2953/ | matches |
| 魚 | hî | https://sutian.moe.edu.tw/zh-hant/su/8084/ | matches |
| 滷肉飯 | lóo-bah-pn̄g | https://sutian.moe.edu.tw/zh-hant/su/10581/ | matches |
| 肉燥飯 | bah-sò-pn̄g | https://sutian.moe.edu.tw/zh-hant/su/10581/ | matches |
| 傷 | siunn | https://sutian.moe.edu.tw/zh-hant/su/9290/ | matches |
| 講話 | kóng-uē | https://sutian.moe.edu.tw/zh-hant/su/9290/ | matches |
| 鹹 | kiâm | https://sutian.moe.edu.tw/zh-hant/su/9290/ | matches |
| 茶 | tê | https://sutian.moe.edu.tw/zh-hant/su/6537/ | matches |
| 烏龍茶 | oo-liông-tê | https://sutian.moe.edu.tw/zh-hant/su/6537/ | matches |
| 水 | tsuí | https://sutian.moe.edu.tw/zh-hant/su/814/ | matches |
| 頂懸 | tíng-kuân | https://sutian.moe.edu.tw/zh-hant/su/8082/ | matches |
| 酒 | tsiú | https://sutian.moe.edu.tw/zh-hant/su/8082/ | matches |
| 囥 | khǹg | https://sutian.moe.edu.tw/zh-hant/su/8082/ | matches |
| 汽水 | khì-tsuí | https://sutian.moe.edu.tw/zh-hant/su/8082/ | matches |
| 下跤 | ē-kha | https://sutian.moe.edu.tw/zh-hant/su/477/ | matches |
| 貓 | niau | https://sutian.moe.edu.tw/zh-hant/su/477/ | matches |
| 椅仔 | í-á | https://sutian.moe.edu.tw/zh-hant/su/477/ | matches |
| 倒手 | tò-tshiú | https://sutian.moe.edu.tw/zh-hant/su/5727/ | matches |
| 寫字 | siá-jī | https://sutian.moe.edu.tw/zh-hant/su/5727/ | matches |
| 用 | īng | https://sutian.moe.edu.tw/zh-hant/su/5727/ | matches |
| 正手 | tsiànn-tshiú | https://sutian.moe.edu.tw/zh-hant/su/1679/ | matches |
| 頭前 | thâu-tsîng | https://sutian.moe.edu.tw/zh-hant/su/12058/ | matches |
| 行 | kiânn | https://sutian.moe.edu.tw/zh-hant/su/12058/ | matches |
| 綴 | tuè | https://sutian.moe.edu.tw/zh-hant/su/12058/ | matches |
| 後壁 | āu-piah | https://sutian.moe.edu.tw/zh-hant/su/4968/ | matches |
| 歹話 | pháinn-uē | https://sutian.moe.edu.tw/zh-hant/su/4968/ | matches |
| 斡 | uat | https://sutian.moe.edu.tw/zh-hant/su/10532/ | matches |
| 路口 | lōo-kháu | https://sutian.moe.edu.tw/zh-hant/su/10532/ | matches |
| 正爿 | tsiànn-pîng | https://sutian.moe.edu.tw/zh-hant/su/10532/ | matches |
| 就 | tō | https://sutian.moe.edu.tw/zh-hant/su/10532/ | matches |
| 到 | kàu | https://sutian.moe.edu.tw/zh-hant/su/10532/ | matches |
| 捷運 | tsia̍t-ūn | https://sutian.moe.edu.tw/zh-hant/su/7397/ | matches |
| 車 | tshia | https://sutian.moe.edu.tw/zh-hant/su/3394/ | matches |
| 火車 | hué-tshia | https://sutian.moe.edu.tw/zh-hant/su/3394/ | matches |
| 計程車 | kè-thîng-tshia | https://sutian.moe.edu.tw/zh-hant/su/3394/ | matches |
| 遠 | hn̄g | https://sutian.moe.edu.tw/zh-hant/su/4770/ | matches |
| 近 | kīn | https://sutian.moe.edu.tw/zh-hant/su/10857/ | matches |
| 昨昏 | tsa-hng | https://sutian.moe.edu.tw/zh-hant/su/5016/ | matches |
| 上尾 | siōng-bué | https://sutian.moe.edu.tw/zh-hant/su/5016/ | matches |
| 一工 | tsi̍t kang | https://sutian.moe.edu.tw/zh-hant/su/5016/ | matches |
| 已經 | í-king | https://sutian.moe.edu.tw/zh-hant/su/5016/ | matches |
| 袂赴 | bē-hù | https://sutian.moe.edu.tw/zh-hant/su/5016/ | matches |
| 下晡 | ē-poo | https://sutian.moe.edu.tw/zh-hant/su/432/ | matches |
| 招 | tsio | https://sutian.moe.edu.tw/zh-hant/su/432/ | matches |
| 早起 | tsá-khí | https://sutian.moe.edu.tw/zh-hant/su/2517/ | matches |
| 逐工 | ta̍k-kang | https://sutian.moe.edu.tw/zh-hant/su/2517/ | matches |
| 公園 | kong-hn̂g | https://sutian.moe.edu.tw/zh-hant/su/2517/ | matches |
| 運動 | ūn-tōng | https://sutian.moe.edu.tw/zh-hant/su/2517/ | matches |
| 中晝 | tiong-tàu | https://sutian.moe.edu.tw/zh-hant/su/713/ | matches |
| 暗時 | àm-sî | https://sutian.moe.edu.tw/zh-hant/su/9598/ | matches |
| 外口 | guā-kháu | https://sutian.moe.edu.tw/zh-hant/su/9598/ | matches |
| 廿 | jia̍p | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 廿一 | jia̍p-it | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 一百空一 | tsi̍t-pah khòng-it | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 百二 | pah-jī | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 早 | tsá | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=早&iahbe=1&pitsoo=50 | matches |
| 𠢕早 | gâu-tsá | https://sutian.moe.edu.tw/zh-hant/su/13473/ | matches |
| 較早 | khah-tsá | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=早&iahbe=1&pitsoo=50 | matches |
| 古早味 | kóo-tsá-bī | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=早&iahbe=1&pitsoo=50 | matches |
| 早頓 | tsá-tǹg | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=早&iahbe=1&pitsoo=50 | matches |
| 早睏 | tsá-khùn | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=早&iahbe=1&pitsoo=50 | matches |
| 明仔早起 | bîn-á-tsá-khí | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=早&iahbe=1&pitsoo=50 | matches |
| 以前 | í-tsîng | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=早&iahbe=1&pitsoo=50 | matches |
| 哪會 | ná ē | https://sutian.moe.edu.tw/zh-hant/hunlui/207/ | matches |
| 𨑨迌 | tshit-thô | https://sutian.moe.edu.tw/zh-hant/su/13522/ | matches |
| 𪜶 | in | https://sutian.moe.edu.tw/zh-hant/su/13567/ | matches |
| 感情 | kám-tsîng | https://sutian.moe.edu.tw/zh-hant/su/13567/ | matches |
| 某 | bóo | https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100 | matches |
| 臺 | tâi | https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/臺/ (臺灣, 臺中, 高鐵, 大學 inside 國立臺灣…, 高鐵臺中站, 臺北海洋大學) | matches |
| 臺北 | Tâi-pak | https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/臺/ (臺灣, 臺中, 高鐵, 大學 inside 國立臺灣…, 高鐵臺中站, 臺北海洋大學) | matches |
| 臺南 | Tâi-lâm | https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/臺/ (臺灣, 臺中, 高鐵, 大學 inside 國立臺灣…, 高鐵臺中站, 臺北海洋大學) | matches |
| 臺灣 | Tâi-uân | https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/臺/ (臺灣, 臺中, 高鐵, 大學 inside 國立臺灣…, 高鐵臺中站, 臺北海洋大學) | matches |
| 臺中 | Tâi-tiong | https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/臺/ (臺灣, 臺中, 高鐵, 大學 inside 國立臺灣…, 高鐵臺中站, 臺北海洋大學) | matches |
| 臺鐵 | Tâi-thih | https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/臺/ (臺灣, 臺中, 高鐵, 大學 inside 國立臺灣…, 高鐵臺中站, 臺北海洋大學) | matches |
| 高鐵 | Ko-thih | https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/臺/ (臺灣, 臺中, 高鐵, 大學 inside 國立臺灣…, 高鐵臺中站, 臺北海洋大學) | matches |
| 大學 | tāi-ha̍k | https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/臺/ (臺灣, 臺中, 高鐵, 大學 inside 國立臺灣…, 高鐵臺中站, 臺北海洋大學) | matches |
| 臺北市 | Tâi-pak-tshī | https://language.moe.gov.tw/files/people_files/tshiutsheh_1130826.pdf (Tâi-pak-tshī) | matches |
| 臺語 | Tâi-gí | https://www.wikiwand.com/en/dictionary/臺語 (General Taiwanese Tâi-gí; Taipei Tâi-gú) | matches |
| 台語 | Tâi-gí | https://www.wikiwand.com/en/dictionary/臺語 (General Taiwanese Tâi-gí; Taipei Tâi-gú) | matches |
| 美國 | Bí-kok | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=美國塗豆 | matches |
| 咱人 | lán-lâng | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=lâng&iahbe=2&pitsoo=50 | matches |
| 別人 | pa̍t-lâng | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=lâng&iahbe=2&pitsoo=50 | matches |
| 老人 | lāu-lâng | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=lâng&iahbe=2&pitsoo=50 | matches |
| 病人 | pēnn-lâng | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=lâng&iahbe=2&pitsoo=50 | matches |
| 大 | tuā | https://sutian.moe.edu.tw/zh-hant/su/188/ | matches |
| 大兄 | tuā-hiann | https://sutian.moe.edu.tw/zh-hant/su/188/ | matches |
| 大人 | tuā-lâng | https://sutian.moe.edu.tw/zh-hant/su/188/ | matches |
| 細 | sè | https://sutian.moe.edu.tw/zh-hant/su/7720/ | matches |
| 細聲 | sè-siann | https://sutian.moe.edu.tw/zh-hant/su/7720/ | matches |
| 熱 | jua̍h | https://sutian.moe.edu.tw/zh-hant/su/11204/ | matches |
| 寒 | kuânn | https://sutian.moe.edu.tw/zh-hant/su/8287/ | matches |
| 甲 | kah | https://sutian.moe.edu.tw/zh-hant/su/8287/ | matches |
| 欲死 | beh-sí | https://sutian.moe.edu.tw/zh-hant/su/8287/ | matches |
| 氣象報告 | khì-siōng pò-kò | https://sutian.moe.edu.tw/zh-hant/su/8287/ | matches |
| 冷 | líng | https://sutian.moe.edu.tw/zh-hant/su/8287/ | matches |
| 禮拜 | lé-pài | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=禮拜 | matches |
| 禮拜日 | lé-pài-ji̍t | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=禮拜 | matches |
| 拜一 | pài-it | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=禮拜 | matches |
| 拜六 | pài-la̍k | https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=禮拜 | matches |
| 禮拜一 | lé-pài-it | – | could not re-open |
| 禮拜六 | lé-pài-la̍k | – | could not re-open |
| 牛 | gû | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=牛&iahbe=1&pitsoo=100 | matches |
| 牛肉 | gû-bah | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=牛&iahbe=1&pitsoo=100 | matches |
| 牛奶 | gû-ling | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=牛&iahbe=1&pitsoo=100 | matches |
| 會曉 | ē-hiáu | https://sutian.moe.edu.tw/zh-hant/su/9626/ | matches |
| 唱 | tshiùnn | https://sutian.moe.edu.tw/zh-hant/su/9626/ | matches |
| 過 | kuè | https://sutian.moe.edu.tw/zh-hant/su/10149/ | matches |
| 過份 | kuè-hūn | https://sutian.moe.edu.tw/zh-hant/su/10149/ | matches |
| 上 | tsiūnn | https://sutian.moe.edu.tw/zh-hant/su/164/ | matches |
| 上車 | tsiūnn-tshia | https://sutian.moe.edu.tw/zh-hant/su/164/ | matches |
| 上好 | siōng hó | https://sutian.moe.edu.tw/zh-hant/su/306/ | matches |
| 上蓋 | siōng-kài | https://sutian.moe.edu.tw/zh-hant/su/501/ | matches |
| 代誌 | tāi-tsì | https://sutian.moe.edu.tw/zh-hant/su/306/ | matches |
| 管 | kuán | https://sutian.moe.edu.tw/zh-hant/su/306/ | matches |
| 唱歌 | tshiùnn-kua | https://sutian.moe.edu.tw/zh-hant/su/306/ | matches |
| 飽 | pá | https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=飽 | matches |
| 好食 | hó-tsia̍h | https://sutian.moe.edu.tw/zh-hant/su/1006/ | matches |
| 好看 | hó-khuànn | https://sutian.moe.edu.tw/zh-hant/hunlui/61/?iahbe=1&pitsoo=100 | matches |
| 電話 | tiān-uē | https://bitesizetaiwanese.com/ep14-what-is-your-phone-number | matches |
| 號 | hō | https://bitesizetaiwanese.com/ep14-what-is-your-phone-number | matches |
| 林 | Lîm | https://sutian.moe.edu.tw/zh-hant/su/21888/ | matches |
| 王 | Ông | https://sutian.moe.edu.tw/zh-hant/su/21827/ | matches |
| 李 | Lí | https://sutian.moe.edu.tw/zh-hant/su/21867/ | matches |
| 陳 | Tân | https://sutian.moe.edu.tw/zh-hant/huliok/186/?iahbe=2 | matches |
| 阿美仔 | A-bí--á | https://sutian.moe.edu.tw/zh-hant/su/432/ | matches |
| 糖仔 | thn̂g-á | https://sutian.moe.edu.tw/zh-hant/su/10139/ | matches |
| 一斤 | tsi̍t kin | https://sutian.moe.edu.tw/zh-hant/su/6998/ | matches |
| 下 | ē | https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1..3&pitsoo=100 | matches |
| 偌 | guā | https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100 + ?iahbe=4 | matches |
| 過人 | kuè--lâng | https://sutian.moe.edu.tw/zh-hant/su/10149/ | matches |
| 上好是 | siōng-hó sī | https://sutian.moe.edu.tw/zh-hant/su/306/ | matches |
| 拄咧 | tú-teh | https://sutian.moe.edu.tw/zh-hant/su/4771/ | matches |
| 教師 | kàu-su | https://sutian.moe.edu.tw/zh-hant/su/2117/ | matches |
| 酸 | sng | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 穿 | tshīng | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 衫 | sann | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 著 | tio̍h | https://sutian.moe.edu.tw/zh-hant/su/9565/ | matches |
| 格 | keh | https://sutian.moe.edu.tw/zh-hant/su/8082/ | matches |
| 倒爿 | tò-pîng | Wiktionary (see notes) | matches |
| 落車 | lo̍h-tshia | https://sutian.moe.edu.tw/zh-hant/su/9910/ | matches |
| 臺北車頭 | Tâi-pak Tshia-thâu | https://sutian.moe.edu.tw/zh-hant/su/9910/ | matches |
| 皮 | phuê | https://sutian.moe.edu.tw/und-hani/siannuntiau/tsong/siann/ph/?iahbe=6 | matches |
| 青菜 | tshenn-tshài | Wiktionary (see notes) | matches |

### Homograph rules in respell.js, checked against the re-opened pages

| Rule | Source | Verdict |
|---|---|---|
| 這 tse alone / tsit + classifier; 彼 he / hit | h98: 這 tse, 這 tsit, 彼 he, 彼 hit (separate headwords); examples 這敢是你的 Tse kám-sī (8414), 這塊桌仔 Tsit tè (10139), 這遮貴 Tse tsiah (9035), 彼擔 hit tànn (4690) | matches |
| 上 tsiūnn default, siōng before an adjective | su/164 (上 白 tsiūnn main, 文 siōng); 上好 siōng hó (306); 上蓋媠 siōng-kài suí (501); 上尾 siōng-bué (5016) | matches; "臺北上熱" (上 + a plain adjective) is by analogy |
| 行 kiânn (walk) / hâng (row) | h61 行 kiânn; h100 行 hâng (classifier) | matches (POLY warning kept) |
| 大 tuā / tāi | su/188 (tuā main, 文 tāi); 大學 tāi-ha̍k in 臺北海洋大學 (tai5) | matches |
| 遮 / 遐 = tsiah / hiah before an adjective or 𠢕… | h102: 遮 tsiah, 遐 hiah (adverbs); 這遮貴 tsiah kuì (9035); 哪會遐𠢕早 hiah gâu-tsá (13473) | matches |
| 無 / 未 / 袂 / 咧 neutral at the end | 你欲去無 khì--bô (7469); 食飽未 --buē (1653, and MOE manual); 會曉唱袂 tshiùnn--bē, 柑仔會酸袂 sng--bē (9626, 9565); 恁小弟咧 --leh, 你咧 lí--leh (4770); 咧 teh before a verb (4771); 坐咧看 tsē leh (4770) | matches |
| 過 neutral at the end | 我有去過 khì--kuè (10149); 有聽過無 thiann--kuè--bô (13225) | matches |
| the two number sets | counting: h100 (tsi̍t, nn̄g, sann, sì, gōo, la̍k, tshit, peh, káu, tsa̍p); literary: h100 it, jī, sam, sù, ngóo, lio̍k, pat, kiú (and 空 khòng); BST ep14: digits in phone numbers use the literary readings (khòng-kiú, pat-sam-ngóo-ngóo, tshit-pat-sù-lio̍k) | the LIT table in respell.js (空 khòng, 一 it, 二 jī, 三 sam, 四 sù, 五 ngóo, 六 lio̍k, 七 tshit, 八 pat, 九 kiú) matches h100 + BST; 七 tshit is the same in both sets |
| 一 / 二 after a number word read it / jī | h100 廿一 jia̍p-it, 百二 pah-jī; 一百空一 tsi̍t-pah khòng-it | matches |

## Batch 3: edits made from batches 1–2 (decks-a, decks-b, lessons-1/2/3)

Wrong teaching (claims removed or replaced by what the opened source says):
- sandhi, sandhi-2, Tone sandhi deck (牛肉): "Taipei: 5 → 3" → "some northern speakers" (Wikipedia: "7 or 3, depending on dialect"; BST: "Tone 3 (Low) in some Northern dialects"). The -p -t -k swap and the -h pairs 4 → 2, 8 → 3 now cite Wikipedia + BST in the lesson; nothing removed from practice (the rule is sourced).
- sandhi-2, 厝裡 / 多謝你 cards, u-bo P3: neutral syllable "light and low" → "light and short" (BST ep05: mid-to-low or mid falling; after tones 1, 5, 7 it carries on the previous pitch); the "keeps its citation tone" rule now cites the MOE manual.
- tones: added that pitch numbers differ by source (taioaan 51 / 31 / 3 vs BST 53 / 21 / 2).
- initials: j "close to the dz of adze, not the j of jam" → BST's [dʑ]; check 3 no longer offers "the j of jam" as the wrong answer (an English j is close to [dʑ]; not safely wrong).
- finals, Tâi-lô sounds deck (虎): single o "tighter lips, the o of go" → BST transcribes 好 hó as [hə]; -h described as a glottal stop (BST [ʔ]).
- greetings + deck: 歹勢 "small things" / 失禮 "real apology", "stronger than 歹勢" removed (MOE: 歹勢 = 不好意思、對不起、抱歉; 失禮 = 抱歉). Check 2 ("You broke something…") no longer has 歹勢 as the wrong option (now 多謝). 勞力 "especially for help" and 感謝 "more formal, speeches and signs" removed (MOE lists both as near-synonyms of 多謝).
- 早睏 card: "Get some sleep. (good night)" → "Go to bed early." (MOE su/2530: 早睡).
- 你幾歲 card: "can sound blunt" removed. 冷 card: "cold (to the touch)" → "cold" (MOE lists 冷 with 寒 for weather).
- 囝 card: "(son or daughter)" → "child; son" (Wiktionary / Wikipedia). family lesson: 牽手 "a warm word for your spouse" → "a Taiwanese word for wife" (Wiktionary).
- characters: the 厝 / 家 row removed from the "Not (Mandarin)" table (家 ka is itself an MOE Taigi headword); 厝 card note "Not the Mandarin word for home" replaced.
- describing: "傷 means more than you want…" removed (MOE: 傷 = too).
- market, Classifiers deck: 粒 "small round things" → "round things" (BST); 斤 600 g now cited (Wikipedia "Jin (mass)").
- can: "會 … is not about skill … just about what happens" was contradicted by the MOE (伊會食會睏 glossed 能吃能睡; 伊會準時到位袂？ 能不能): rewritten. "never 毋會曉" (no source says it is wrong; the MOE only gives 袂曉 as the antonym of 會曉) → distractors and tip now use Mandarin 不會 / 會不會; Traps deck note on 我袂曉 rewritten.
- negation: "免啦 answers an offer" → "the MOE's example for 'no need!' (不用啦)". Traps deck: "毋 is not used for orders", "Not 毋 alone" removed; 毋通 note now quotes the MOE sentence 驚死就毋通出來𨑨迌. "毋 = refusing / won't" kept: the NTNU paper on Taiwanese negatives (https://scholar.lib.ntnu.edu.tw/en/publications/the-selection-of-negative-words-in-taiwanese-the-principles-and-p-2/) distinguishes a "volitional m̄"; native check.

Wrong options that may be acceptable (replaced by Mandarin-character options, which the matcher never accepts):
- 這遮貴，毋買啦 / 無買啦 (prices P2, prices P8 fill, negation P4) → 不要買啦 / 別買啦 / 不.
- 我食飯佇厝裡 (place check 3, P2), 我讀冊佇臺北 (intro tip), 我欲落車佇臺北車頭 (go-come P4): the MOE itself has verb + 佇 + place (貓睏佇椅仔下跤, su/477), so these were not safely wrong → 我佇厝裡吃飯 / 我在厝裡食飯 / 我欲在臺北車頭落車; tips now name 在 → 佇. The "place before the action verb" teaching stays, framed as the order of the MOE's examples (佇菜市仔賣物件, 佇臺北車頭落車, 佇後壁講…).
- 講慢慢仔 (classroom check 3, P2) → 慢慢說 / 慢慢仔說 / 慢講仔.
- Duplicate fill 這遮貴，__買啦！ (prices P8 = negation P10): negation P10 and P4 now use the MOE sentence 叫你莫來你閣來 (su/10907).
- 美國人 / 臺灣人 prons regenerated as one word (Bí-kok-lâng, Tâi-uân-lâng).

## Batch 4: composed sentences and their patterns

Inventory (scratch nanR/scripts/inv.js over all decks, extras, lesson examples and practice answers): 567 distinct Taigi strings;
80 are MOE / BST example sentences copied whole (proto/moe_sentences.tsv), 194 are single lexicon words, **293 are composed**.

| Pattern | Attestation opened in this review |
|---|---|
| X 是 Y | 昨昏是上尾一工 (su/5016); 囝婿是半子 (t:是 proverb) |
| 毋是 | headword m̄ sī (t:是, t:毋); 敢毋是 (h99); no plain "X 毋是 Y" sentence was found → by analogy |
| 有 / 無 … 無? | 這條歌有聽過無？ (su/13225); BST ep05: I ū tshia--bô (Does she have a car?) |
| 佇 + place before the verb | 伊這馬佇厝裡咧睏 (su/2858); 阿娥…攏佇菜市仔賣物件 (su/12062); 我欲佇臺北車頭落車 (su/9910); 莫佇後壁講人的歹話 (su/4968); 暗時你莫佇外口拋拋走 (su/9598). Also verb + 佇 + place: 貓睏佇椅仔下跤 (su/477) |
| 欲 / 想欲 / 愛 | 你欲去無？ 欲落雨矣 (su/7469); 我想欲去便所 (su/14370); 我真愛𨑨迌, 你行路愛小心 (su/9427) |
| 敢 …? | 這敢是你的？ 你敢無欲去？ (su/8414); 你敢知影伊叫做啥物名？ (su/4408) |
| … 無? / … 未? / 會 … 袂? | 你欲去無？ (7469); 你食飽未？ (1653); 柑仔會酸袂？ 伊會準時到位袂？ (9565); 這條歌你會曉唱袂？ (9626) |
| classifier phrases | 三碗飯 (9775); 一擺 (12482); 細粒柑仔 (7720); 這塊桌仔 / 彼塊 (10139); 這條歌 (13225); 這件代誌 (306); 𪜶兩个 (13567); 彼擔 (4690); 三名教師 (2117); 一隻牛 (t:牛 proverb 一隻牛剝雙領皮) |
| 比 … 較 | 這塊桌仔比彼塊較低; 伊的糖仔比我較濟 (10139); 明仔載會比今仔日較寒 (8287) |
| 咧 + verb | 伊咧讀冊, 伊拄咧食飯 (4771) |
| … 矣 | 欲落雨矣, 天欲光矣 (7469); 今仔日伊閣來矣 (10907); 頭前路口斡正爿就到矣 (10532) |
| 有 … 過 | 我有去過 (10149); 這條歌有聽過無？ (13225) |
| 坐 + vehicle (+ 去 + place) | 伊便若坐車，就會眩車 (su/6391); 拆單欲去坐火車 (su/4099). The full frame 坐 + vehicle + 去 + place was not found → by analogy |
| 請 + verb | 請你讓予我過一下; 請你有閒來阮遐𨑨迌; 請你多多指教 (11380) |
| 傷 / 真 / 誠 / 足 + adjective | 傷鹹, 你講話傷過份 (9290); 今仔日真熱 (11204); 我足愛睏的 (9427); 誠: adverb list only → by analogy |
| 袂曉 / 會曉 / 袂當 / 袂使 | 會曉唱袂 (9626), 袂曉 (6632, antonym of 會曉); 袂使, 袂當, 會使, 會當: headwords only → by analogy |
| 免 / 莫 / 毋通 | 你免來, 免啦 (2872); 這遮貴，莫買啦 (9035); 叫你莫來你閣來 (10907); 驚死就毋通出來𨑨迌 (13522); 過九點就毋通閣敲電話予伊 (2530) |
| 無愛 + noun | 我無愛無老實的人 (9427) |
| question word in place | 你號做啥物名？ (2117); 你敢知影伊叫做啥物名？ (4408); 若無，你是欲按怎？ (su/5480, 欲按怎) |
| noun + amount + 偌濟錢 | 頭家，弓蕉一斤偌濟錢？ (6998) |
| proper noun + 人 one word | MOE manual: Tâi-lâm-lâng (臺南人) |

**Result: 293 composed strings. Kept with an attested pattern: 195. Kept by analogy (listed below for the native check): 98. Replaced: 0. Cut: 0.**
("Attested pattern" = every frame in the string has an MOE / BST example above and every word is a re-opened lexicon entry; it does not mean the string itself was found.)
No pattern was left with no source at all, so nothing was cut. The changes in batch 3 replaced 13 wrong *options* (not correct answers) that might be acceptable.
Practice already accepts both price orders where they are asked (prices P11: 一碗麵偌濟錢 | 麵一碗偌濟錢).

### Kept by analogy (native check)
### 我姓 X (姓 is an MOE noun; verb use not seen) (3)
我姓林。 / 我姓陳。 / 我姓王。
### X 毋是 Y (毋是 headword; 敢毋是; no plain sentence found) (8)
我毋是老師。 / 毋是，我是學生。 / 毋是，是我小弟的。 / 毋是，彼个是我的。 / 我毋是老師，我是學生。 / 我毋是學生。 / 這个人毋是學生 / 伊毋是老師。
### number + 歲 (MOE: 大我三歲) (3)
我十八歲。 / 你幾歲？ / 我三十歲。
### 請 + adverb/閣 + 講 (MOE 請你 + verb: 請你讓予我過一下) (5)
慢慢仔講。 / 老師，請你慢慢仔講。 / 好，我慢慢仔講。 / 請閣講兩擺。 / 請慢慢仔講。
### person + 𠢕早 (MOE: 阿伯𠢕早) (3)
老師𠢕早。 / 逐家𠢕早。 / 阿媽𠢕早。
### classifier phrase not in the MOE (classifier from the h100 index / BST) (11)
一粒柑仔 / 一台車 / 一句話 / 幾个人？ / 遮有幾个人？ / 你有幾个囝？ / 恁幾个人？ / 你欲買幾本冊？ / 你食幾碗飯？ / 我欲買兩粒雞卵。 / 兩粒雞卵
### 是毋是 tag/question (MOE: only the proverb 是毋是，罵家己) (4)
伊是老師，是毋是？ / 你是毋是老師？ / 這本冊是你的，是毋是？ / 你是毋是學生？
### 嘛是 (headword only) (1)
我嘛是。
### 坐 + vehicle + 去/來 + place (MOE: 坐車 su/6391, 去坐火車 su/4099; the full frame not found) (7)
你欲坐火車去臺南無？ / 欲，我欲坐火車去。 / 我欲坐火車去臺南。 / 阮明仔載欲坐火車去臺南。 / 我坐火車去臺南。 / 我坐捷運去公園。 / 伊坐高鐵來臺北。
### 來去 + 矣 (1)
我欲來去矣，再會！
### adjective + 無? (no MOE example found; 有…無? attested by 這條歌有聽過無, BST I ū tshia--bô) (4)
肉圓好食無？ / 公園近無？ / 這碗麵好食無？ / 你寒無？
### question word in place (MOE: 號做啥物名, 叫做啥物名; 當時/按怎 index only) (3)
你欲按怎去？ / 你當時欲來？ / 你當時欲去
### 誠 + adjective (誠 in the MOE adverb list; no sentence found) (3)
誠好食。 / 這碗麵誠好食。 / 今仔日誠熱。
### 會曉 + verb statement (MOE: 會曉唱袂？) (1)
我會曉講臺語。
### 會使/袂使/會當/袂當 + verb (headwords only) (3)
你袂使去。 / 我明仔載袂當來。 / 你袂當去。
### other analogies found by reading (3)
茶免錢。 (免錢 headword only) / 傷遠矣，咱坐計程車。 (傷 + adj + 矣) / 我袂曉講臺語。 (袂曉 + verb)

### classifier + noun pairs with no MOE example of that pairing (35)
(classifier from the MOE h100 index; the frame from 三碗飯, 一隻牛, 𪜶兩个, 彼个)
一个人 / 兩本冊 / 一隻狗 / 這本冊 / 彼个人 / 兩隻貓 / 一杯茶 / 這隻狗真媠。 / 遮有四个人。 / 你看，這件衫！ / 我有兩个囝。 / 我有四本冊。 / 這隻狗真細。 / 這件衫三百箍。 / 我有兩个阿兄。 / 我一个人。 / 我欲買兩本冊。 / 我欲啉一杯烏龍茶。 / 彼个人是啥人？ / 一个學生 / 兩个人 / 彼个人是老師。 / 兩个後生 / 兩个阿兄 / 我有一个小弟。 / 我有兩本冊 / 彼隻貓 / 這隻狗 / 三杯茶 / 兩隻狗 / 兩杯茶 / 我欲啉一杯茶。 / 我想欲啉一杯茶 / 我無愛這本冊 / 我無買兩本冊

Further strings for the native check, named by the writers: 免啦！ as the reply to 我請你食飯 (MOE gives 免啦 with no context);
我去臺南坐火車 used as the wrong option and tip in go-come (the writer says it means "go to Tainan to take the train"; the MOE's
拆單欲去坐火車 shows 去 + 坐火車 = "go and take the train", which supports the reading but not that it is wrong for "by train");
斡正爿路口 as the wrong order in directions (not attested either way).

## Batch 5: the usual review, and the close

- Tone sandhi deck per-word notes (歡喜 1→7, 臺灣 5→7, 朋友 5→7, 牛奶 5→7, 電話 7→3, 運動 7→3, 老人 7→3, 厝裡 neutral, no sandhi before --):
  each matches the sourced rule and the re-opened reading. The sandhi mc items in later lessons (外公, 夜市, 頂懸, 正手, 高鐵, 早起, 菜單,
  會使, 免錢, 猶未) were checked against the same rules: all consistent.
- Tones lesson, tone 6: BST "merged with other tones"; MOE manual "陽上欄位空白處表示多併入其他調類" and "有些方音有第 6 聲": the lesson's
  "the general accent has no tone 6" stands.
- Cards: no target appears in two decks. Near pairs across decks: 火車 (Tone sandhi) / 坐火車 (Getting around); 偌濟 (Questions) /
  偌濟錢？ (Numbers and money). Different points, kept. The two 14-card decks were not padded. The Traps deck is mostly negatives
  (毋 / 無 / 袂 / 莫 / 免 contrasts): kept, since the profile ranks them as the main trap.
- Lesson bodies: describing fell near the floor after a cut; one sourced sentence on 上蓋 (su/501) added. All bodies pass the validator.
- Greetings practice keeps its Tâi-lô tone-pair items (allowed).
- Finish: `node tools/target/repron.js nan` (525 prons read, 0 rewritten after the 美國人 / 臺灣人 pass), `node tools/target/gen.js nan`
  (wrote /tmp/course-en-nan.hold.js, 27 lessons, 18 decks, 307 cards: the HOLD file is kept), `node tools/target/validate.js nan`: PASS.
  `node --check` passes on every JS file. packs/ and src/ untouched.

### First ten things for a native speaker or teacher
1. 我是美國人 / 我是臺灣人 now Bí-kok-lâng / Tâi-uân-lâng (MOE manual rule from Tâi-lâm-lâng): confirm.
2. 佇 + place before action verbs vs after (我佇臺北讀冊 vs 我讀冊佇臺北; 貓睏佇椅仔下跤 is MOE): is the after-verb order acceptable with 讀冊 / 食飯?
3. Adjective + 無? questions: 公園近無？, 肉圓好食無？, 你寒無？
4. 是毋是 as a question / tag: 你是毋是學生？, 伊是老師，是毋是？
5. 坐火車去臺南 (by train) vs 我去臺南坐火車 (the go-come tip treats it as a different meaning).
6. 早睏 as a goodnight wish (MOE: only "go to bed early"), and 免啦 as a reply to "my treat".
7. 毋 as "won't / refuse" in the notes (毋來, 毋 would be a refusal) and 毋買啦: are these right, and is 毋 ever used for "don't"?
8. 歹勢 vs 失禮: is there a usage difference worth teaching (the MOE glosses both as apologies)?
9. Classifiers not in any MOE example: 一台車, 一句話, 兩粒雞卵, 恁幾个人？; and 我三十歲 / 我十八歲.
10. 請閣講兩擺, 請慢慢仔講, 逐家𠢕早 / 老師𠢕早, 我欲來去矣，再會！, 我嘛是, 茶免錢. Also the two derived lexicon entries 禮拜一 / 禮拜六
    (on no page), and the 8 → 3 sandhi pair for -h syllables (one source).

### Addendum (second pass after an internal check)
- Residue removed: "light and low" in the sandhi-2 check 1 why; "歹勢 is for small things" in greetings P2 why; 無要緊 note "The answer to 歹勢: literally not important" (now: a reply in the course's dialogue, an MOE adverb); review commentary removed from the 早睏 card; my own gloss "the a of about" removed from finals (BST [hə] / [hɔ] only).
- sandhi: "a group usually ends at the end of a word or before a pause" → "a group is a phrase; where it ends depends on the sentence" (Wikipedia, BST); a word said alone is its own group.
- 欲 card: "Mandarin 要 is not Taigi" → "write 欲 here, not 要" (要 occurs in the Taigi 無要緊).
- 感謝 card cut from Greetings and courtesy: with the "more formal" claim gone it had the same meaning as 勞力 ("Thanks."); neither was a dialogue key; 感謝 stays named in the 勞力 note and the greetings lesson. Cards: 307 → 306.

Final run after the addendum: repron 524 prons read, 0 rewritten; gen wrote /tmp/course-en-nan.hold.js (27 lessons, 18 decks, 306 cards, 378 items); validate PASS; node --check OK on every JS file; HOLD kept.
