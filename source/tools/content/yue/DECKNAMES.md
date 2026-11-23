# yue-en deck names (FINAL — set by the lead from profile §9; do not change)

2026-11-23 written-Cantonese rewrite (docs/briefs/yue-en-cantonese-rewrite.md): the finishing editor renamed the 11 names with 與 to 同 (問路同交通, 咖啡店同便利店, 購物同付款, 數字、時間同日期, 情緒同反應, 讚美同好感, 工作同電郵, 電話同短訊縮寫, 旅行（機場同酒店）, 醫院同緊急情況, 影視同俚語) in every file at once: decks.js, meta.js, lessons.js, more/*.js, deviations.json and deviations.a.json, this table and docs/profiles/yue.md. Nothing outside tools/content/yue uses the names (grep; packs/course-yue-en.js is generated; the stale copy under lang-app/source/ was not touched). validate, parity (every decks: deviation used under the new name), lint (0 missing deck links) and link_roadmap --check pass.

Rows 1–20 replace the Korean course's 20 decks in the same order. Later rows are yue-only decks (profile §9), appended last in decks.js by CONTENT-A.

| # | name (use verbatim) | notes |
|---|---|---|
| 1 | 打招呼 | Convert (zh 「问候」). 打招呼 is the everyday Hong Kong word |
| 2 | 自我介紹 | Convert + localise 3 cards: `My name is Amy.`, `I'm from Hong Kong.`, `I live in Kowloon.` (new IPA for these) |
| 3 | 求生英文 1 | Convert + localise 1 card: `Do you speak Cantonese?` |
| 4 | 求生英文 2 | Convert + patch 1 note (WeChat / Alipay → Octopus / PayMe / card) |
| 5 | 問路同交通 | Convert + patch notes: yuan → dollars; 地鐵 → 港鐵; subway = 美國的地鐵; 的士, 巴士 |
| 6 | 餐廳點餐 | Convert + patch 1 note. Notes: tipping in the US; "check" = 埋單; "to go" = 外賣 / 拎走 |
| 7 | 咖啡店同便利店 | Convert |
| 8 | 購物同付款 | Convert + patch 1 note (mobile payment). 付款 for zh 结账 |
| 9 | 數字、時間同日期 | Linked to `numbers`. Convert + patch 1 note (yuan → dollars); add notes on month-first dates and floor numbering |
| 10 | 閒談 | Linked to `smalltalk`. Convert + localise 1 card: `Have you been to Hong Kong?` |
| 11 | 情緒同反應 | Convert |
| 12 | 讚美同好感 | Convert + localise 1 card: `Your Cantonese is really good!` |
| 13 | 工作同電郵 | Linked to `email`. Convert + patch 1 note (您). 電郵, not 邮件 |
| 14 | 電話同短訊縮寫 | Convert + localise 2 cards: `Hello, this is Amy.`, `Can I speak to Mr. Chan?` Explain LOL, BTW with Hong Kong chat habits (哈哈, 順便講) |
| 15 | 旅行（機場同酒店） | Convert + localise 1 card: `I have a reservation under Chan.` (zh has 5 mentions of 李 to replace) |
| 16 | 醫院同緊急情況 | Convert + localise 1 card (consulate, table above). Note: 911 in the US, 999 in Hong Kong |
| 17 | 片語動詞 | Linked to `phrasal`. Convert |
| 18 | 發音易錯 | Linked to `pron`. **Rewrite the notes of all 44 zh cards and replace zh-en's own appended pairs.** Keep the shared ko-en cards (English + IPA). Cantonese pairs: night / light, know / low, three / free, they / day, very / wary, vest / west, zip / sip, show / so, rice / lice, leave / live, full / fool, bad / bed, walk / work. The zh notes argue from pinyin, 普通话 and 「部分地区」 (3 times) and do not transfer |
| 19 | 英文習語 | Linked to `idioms`. Convert |
| 20 | 影視同俚語 | Convert. 影片, 劇集 for Mainland 视频, 电视剧 |
| 21 | 英文字母 | Shared alphabet deck, linked to `alphabet`. **Rewrite the notes** (zh has 11 pinyin references); letters and IPA copy |
| 22 | 港式英文陷阱 | yue-only. Linked to `hk-english`. ≥ 20 cards. About half convert from zh 「中式英语陷阱」 (26 cards: turn on / off the light, take / bring, lend / borrow, read a book, watch TV, take medicine, I really like it, Although…); the rest are new (It's difficult for me to…, wait for me, I'm leaving now, Good luck! for 加油, cashier for shroff, stamp for chop, the British / American pairs). Each note says 「港式英文」, 「一字多義」 or 「英式 / 美式」 |
| 23 | 字尾發音 | yue-only. Linked to `plurals`, `third-s`, `past` (and `pron`). ≥ 20 cards, all new notes: final voicing (bag / back, feed / feet, rope / robe, leave / leaf), clusters (cold / code, list, friends, asked, months, cats, cards, walked, wanted), diphthong + consonant (time, like, game, nine / line), initial clusters (place / pace, bring, present). English + IPA for friends, asked, months, bed / bet exist in the zh pack |
