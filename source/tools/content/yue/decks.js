/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   yue-en: pron = IPA (OALD North American values in the school symbol set) per docs/profiles/yue.md §6 and tools/content/zh/PRON-RULES.md; must match profile.json pronPattern.
   Deck names are FINAL (tools/content/yue/DECKNAMES.md). The last two decks are yue-only (profile §9). */
module.exports = {
"打招呼": `
Hello. | /həˈloʊ/ | 你好 | 最基本的問候，任何場合、對任何人都可以用。
Hi! | /ˈhaɪ/ | 嗨 / 你好（較隨意） | 比 Hello 輕鬆親切。在美國，同事之間也常說 Hi。
Hey! | /ˈheɪ/ | 喂 / 你好（熟人之間） | 朋友之間用。對陌生人說可能顯得不禮貌。
Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ | 早安 | 中午以前都可以用，也可以簡單說 Morning!
Good afternoon. | /ˈgʊd ˌæftərˈnuːn/ | 午安 | 大約中午 12 點到傍晚 6 點。語氣稍為正式，商店和公司裏常聽到。
Good evening. | /ˈgʊd ˈiːvnɪŋ/ | 晚上好 | 晚上見面時的問候。Good night 只在道別時用。
How are you? | /ˈhaʊ ər ju/ | 你好嗎？ | 這是打招呼，不是真的問近況。輕鬆回一句 Good, thanks. You? 就可以。
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/ | 我很好，謝謝。你呢？ | 課本的 I'm fine, thank you. 聽起來很書面，I'm good 自然得多。
What's up? | /ˈwʌts ˈʌp/ | 最近怎樣？/ 有甚麼事？ | 熟人之間隨口的招呼，不用認真報告近況。一般回答 Not much.
Not much. | /ˈnɑːt ˈmʌtʃ/ | 沒甚麼特別 | What's up? 最常見的回答，可以再反問一句 Not much, you?
How's it going? | /ˈhaʊz ɪt ˈgoʊɪŋ/ | 近來怎樣？/ 一切順利嗎？ | How are you? 的口語版，可以回答 Pretty good!
Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | 很高興認識你 | 只在第一次見面時用。回答 Nice to meet you, too.
Long time no see! | /ˈlɔːŋ ˈtaɪm ˈnoʊ ˈsiː/ | 很久沒見！ | 一般認為這句源自中文的「好久不見」，英文母語者也常說。稍為正式一點：It's been a while.
See you later. | /ˈsiː ju ˈleɪtər/ | 遲些見 | 即使沒有再見面的計劃，道別時也可以隨口說。
Take care. | /ˈteɪk ˈker/ | 保重 | 溫暖的道別語，也常放在訊息結尾。
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | 祝你今天愉快！ | 店員收錢後常說。回一句 You too! 就可以了。
Bye! | /ˈbaɪ/ | 再見！ | 香港人常說「拜拜」，但在英文裏，成年人之間說 Bye-bye 會顯得有點孩子氣，說 Bye! 就夠了。
Good night. | /ˈgʊd ˈnaɪt/ | 晚安 | 只在晚上道別或去睡覺時用。見面打招呼要說 Good evening。night 的 n 不要讀成 l（light）。
`,
"自我介紹": `
My name is Amy. | /maɪ ˈneɪm ɪz ˈeɪmi/ | 我叫 Amy | 日常更常說 I'm Amy. 說全名時英文名在前、姓氏在後：Amy Chan。name 的 n 不要讀成 l。
Please call me Jay. | /ˈpliːz ˈkɔːl mi ˈdʒeɪ/ | 叫我 Jay 就可以 | 想讓對方用英文名或簡稱稱呼你時說。很多香港人本身就有英文名，直接用就可以。
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔːl ju/ | 我應該怎樣稱呼你？ | 對方的名字不好讀，或想知道對方的暱稱時很有用。
Where are you from? | /ˈwer ər ju frʌm/ | 你是哪裏人？/ 你從哪裏來？ | 在外國最先被問到的問題之一。
I'm from Hong Kong. | /aɪm frəm ˌhɑːŋ ˈkɑːŋ/ | 我來自香港 | Hong Kong 前面不加冠詞 the。from 的 r 要讀出來，不要讀成 "fom"。
I live in Kowloon. | /aɪ ˈlɪv ɪn ˌkaʊˈluːn/ | 我住在九龍 | live 的 v 要用上齒輕碰下唇，聲帶震動，不要讀成 f；元音是短的 /ɪ/，讀長了就變成 leave。
I'm a student. | /aɪm ə ˈstuːdnt/ | 我是學生 | 職業前一定要加冠詞 a / an。I'm student. ✗ 是最常見的錯誤。
What do you do? | /ˈwʌt də ju ˈduː/ | 你做甚麼工作？ | 問職業的標準說法，比 What's your job? 委婉。
I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | 我在銀行工作 | 公司、地點前用 at：I work at Google.
I work in marketing. | /aɪ ˈwɜːrk ɪn ˈmɑːrkɪtɪŋ/ | 我做市場推廣 | 範疇、部門前用 in，和 at（公司）區分開。
I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | 我 25 歲 | years 是眾數，字尾的 s 要讀出來。初次見面直接問年齡可能不太禮貌。
I'm really into hiking. | /aɪm ˈriːəli ɪntə ˈhaɪkɪŋ/ | 我很喜歡行山 | 說興趣時，比 My hobby is… 自然得多。
I like watching movies. | /aɪ ˈlaɪk ˈwɑːtʃɪŋ ˈmuːviz/ | 我喜歡看電影 | like 後面接動作，用 -ing 形式或 to + 動詞原形。香港學校教的是 film；美國說 movie。
I've been learning English for a year. | /aɪv bɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ fər ə ˈjɪr/ | 我學了一年英文 | 由過去一直持續到現在的事，用 have been + -ing（現在完成進行式）。中文說「學了一年」動詞不變，英文要靠動詞形式。
I'm here on vacation. | /aɪm ˈhɪr ɑːn veɪˈkeɪʃn/ | 我來度假 | 香港學校教的是 holiday（I'm here on holiday.）；美國說 vacation。
I'm married. | /aɪm ˈmærid/ | 我已婚 | 單身就說 I'm single. 初次見面最好不要問對方是否已婚。
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgər ˈbrʌðər/ | 我有一個弟弟 | 英文不分「哥哥」和「弟弟」，只用 older / younger brother 區分。
`,
"求生英文 1": `
Excuse me. | /ɪkˈskjuːz mi/ | 不好意思 / 請問 | 叫住別人或請人讓路時用。碰到別人之後說 Sorry!
Thank you. | /ˈθæŋk ju/ | 謝謝 | 廣東話分「唔該」和「多謝」，英文兩種情況都說 Thank you。th 要把舌尖輕放在上下齒之間送氣，不要讀成 "fank you"。
Thanks a lot. | /ˈθæŋks ə ˈlɑːt/ | 非常感謝 | 比 Thank you 輕鬆親切。
You're welcome. | /jʊr ˈwelkəm/ | 不用客氣 | 口語也常說 Sure. / No problem. / Anytime.
No problem. | /ˈnoʊ ˈprɑːbləm/ | 沒問題 / 小事而已 | 回應別人道謝時非常常用。problem 的 r 和 l 都要讀出來。
I'm sorry. | /aɪm ˈsɑːri/ | 對不起 | 真正道歉時用。輕輕碰到別人，說一句 Sorry! 就夠了。
Yes, please. | /ˈjes ˈpliːz/ | 好的，謝謝 | 回應 Would you like some water? 這類提議。
No, thank you. | /ˈnoʊ ˈθæŋk ju/ | 不用了，謝謝 | 拒絕時比只說 No 禮貌得多。口語：I'm good, thanks.
Sorry? | /ˈsɑːri/ | 甚麼？/ 你說甚麼？ | 句尾語調上揚，意思是「請再說一次」。在美國比 Pardon? 更常用。
Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | 可以再說一次嗎？ | 聽不明白就大方地問，母語者之間也常這樣說。
Could you speak more slowly? | /kəd ju ˈspiːk ˈmɔːr ˈsloʊli/ | 可以說慢一點嗎？ | 加上 please 更有禮貌。
I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | 我不明白 | 有點生硬。委婉一點：Sorry, I didn't quite catch that.
Do you speak Cantonese? | /də ju ˈspiːk ˌkæntəˈniːz/ | 你會說廣東話嗎？ | Do you speak…? 比 Can you speak…? 更自然、更有禮貌。Cantonese 的重音在最後一個音節。
I speak a little English. | /aɪ ˈspiːk ə ˈlɪtl ˈɪŋglɪʃ/ | 我會說一點英文 | 美式發音中，little 中間的 t 讀得像輕輕的 d。
How do you say this in English? | /ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/ | 這個用英文怎樣說？ | 指着東西問，馬上就能學到新字。注意是 How do you say…?，不是 How to say…? ✗
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmiːn/ | 這是甚麼意思？ | 指着餐牌、告示牌問。
Can you help me? | /kən ju ˈhelp mi/ | 可以幫我一下嗎？ | 更有禮貌的說法：Could you help me? help 的 l 和 p 都要讀出來。
`,
"求生英文 2": `
Where's the restroom? | /ˈwerz ðə ˈrestruːm/ | 洗手間在哪裏？ | 香港和英國說 toilet；美國說 restroom / bathroom，toilet 在美國指馬桶本身。
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | 這個多少錢？ | 問幾件東西：How much are these?
Is there an ATM around here? | /ɪz ðer ən ˌeɪ tiː ˈem əˈraʊnd ˈhɪr/ | 這附近有櫃員機嗎？ | 英國也叫 cash machine。
Can I get the Wi-Fi password? | /kən aɪ ˈget ðə ˈwaɪfaɪ ˈpæswɜːrd/ | 可以告訴我 Wi-Fi 密碼嗎？ | 也可以問 Is there Wi-Fi here?
I'm lost. | /aɪm ˈlɔːst/ | 我迷路了 | 也可以拿出地圖問：Where am I on this map? lost 字尾的 st 兩個音都要讀出來。
Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | 可以用信用卡付款嗎？ | 八達通和 PayMe 在外國用不到，要準備好信用卡。美國幾乎到處都收信用卡，小店可能設最低消費。
One moment, please. | /ˈwʌn ˈmoʊmənt ˈpliːz/ | 請稍等 | 有禮貌的說法，商店裏、電話裏常聽到。
Just a second. | /ˈdʒʌst ə ˈsekənd/ | 等一等 | 口語。更短：Just a sec.
No worries. | /ˈnoʊ ˈwɜːriz/ | 沒事 / 不要緊 | 澳洲、英國特別常用，美國也很常見。
That's okay. | /ˈðæts oʊˈkeɪ/ | 沒關係（別人道歉時） | 別人道歉時說 That's okay! 或 Don't worry about it.
Of course. | /əv ˈkɔːrs/ | 當然可以 | 答應請求時用。回答問題時用，可能像在說「這還用問？」，語氣要柔和。
I'm not sure. | /aɪm ˈnɑːt ˈʃʊr/ | 我不太肯定 | 比 I don't know 委婉。
I have a question. | /aɪ ˈhæv ə ˈkwestʃən/ | 我有一個問題 | 上課、開會時也可以說 Can I ask a question?
Can you write it down? | /kən ju ˈraɪt ɪt ˈdaʊn/ | 可以幫我寫下來嗎？ | 地址、數字、名字聽不清楚時最好的辦法。
Can I take a picture? | /kən aɪ ˈteɪk ə ˈpɪktʃər/ | 可以拍照嗎？ | 在博物館、商店裏先問一句是基本禮貌。
Could you take a picture of us? | /kəd ju ˈteɪk ə ˈpɪktʃər əv əs/ | 可以幫我們拍張照嗎？ | 拍完說一句 Thank you so much!
After you. | /ˈæftər ˈjuː/ | 你先請 | 在門口、升降機前讓別人先走時說。升降機在香港叫 lift，美國叫 elevator。
Watch out! | /ˈwɑːtʃ ˈaʊt/ | 小心！ | 有危險時大聲喊。Look out! 意思一樣。
`,
"問路與交通": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈget tə ðə ˈsʌbweɪ ˈsteɪʃn/ | 地鐵站怎樣去？ | subway 是美國的地鐵；香港叫 MTR（港鐵），英國說 underground / tube。在香港和英國，subway 是行人隧道。
Is it far from here? | /ɪz ɪt ˈfɑːr frəm ˈhɪr/ | 離這裏遠嗎？ | 美式發音要把 far 字尾的 r 讀出來；英式不讀，兩種都對。
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔːkɪŋ ˈdɪstəns/ | 走路可以到嗎？ | 也可以問 Can I walk there?
Go straight. | /ˈgoʊ ˈstreɪt/ | 一直向前走 | Go straight for two blocks. 美國常用 block（一個街口的距離）表示遠近。
Turn left at the corner. | /ˈtɜːrn ˈleft ət ðə ˈkɔːrnər/ | 在街角左轉 | 在交通燈處：at the light。left 字尾的 ft 要讀出來。
It's on your right. | /ɪts ɑːn jʊr ˈraɪt/ | 在你的右邊 | right 開頭是 r，嘴唇微微收圓，舌尖不碰上顎；不要讀成 light 或 white。
It's across the street. | /ɪts əkrɔːs ðə ˈstriːt/ | 在馬路對面 | across from… = 在……的對面。
It's next to the bank. | /ɪts ˈnekst tə ðə ˈbæŋk/ | 在銀行旁邊 | next to 裏兩個 t 連在一起，只讀一個；但 next 的 /ks/ 不能省。
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoʊz ˌdaʊnˈtaʊn/ | 哪條綫去市中心？ | downtown 前面不加 to。line 字尾的 n 要讀出來。
Where do I transfer? | /ˈwer də aɪ trænsˈfɜːr/ | 在哪裏轉車？ | 英式說 change：Where do I change?
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgoʊ tə ði ˈerpɔːrt/ | 這班巴士去機場嗎？ | 元音前的 the 讀 /ði/。
Which stop should I get off at? | /ˈwɪtʃ ˈstɑːp ʃəd aɪ ˈget ˈɔːf æt/ | 我應該在哪一站下車？ | get off = 下車（巴士、地鐵）。介詞 at 放在句尾。
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔːstən ˈpliːz/ | 一張去波士頓的車票 | 目的地前用 to。
Round trip or one way? | /ˈraʊnd ˈtrɪp ər ˈwʌn ˈweɪ/ | 來回還是單程？ | 香港和英國說 Return or single?；美國說 round trip / one way。
Can you take me to this address? | /kən ju ˈteɪk mi tə ˈðɪs ˈædres/ | 請載我到這個地址 | 搭的士時把手機上的地址給司機看，就不會出錯。的士在美國叫 taxi 或 cab。
Could you pull over here? | /kəd ju ˈpʊl ˈoʊvər ˈhɪr/ | 可以在這裏停車嗎？ | 想下車時說。Right here is fine. 也可以。
How long does it take? | /ˈhaʊ ˈlɔːŋ dəz ɪt ˈteɪk/ | 要多久？ | 回答：About 20 minutes.
Is this seat taken? | /ɪz ˈðɪs ˈsiːt ˈteɪkən/ | 這個座位有人嗎？ | 沒有人就會回答 No, go ahead. seat 的元音是長的 /iː/，sit 的 /ɪ/ 短而放鬆，兩個字不要讀成一樣。
`,
"餐廳點餐": `
A table for two, please. | /ə ˈteɪbl fər ˈtuː ˈpliːz/ | 兩位，謝謝 | 美國餐廳一般要等侍應帶位。
Do you have a reservation? | /də ju ˈhæv ə ˌrezərˈveɪʃn/ | 有訂位嗎？ | 侍應會這樣問。回答：Yes, under Chan.
Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | 可以看一下餐牌嗎？ | menu 的重音在前面。
What do you recommend? | /ˈwʌt də ju ˌrekəˈmend/ | 有甚麼推介？ | 也可以問 What's popular here?
I'll have the steak. | /aɪl ˈhæv ðə ˈsteɪk/ | 我要牛扒 | 點菜的基本句式：I'll have + 菜名。steak 字尾的 k 要輕輕讀出來。
Can I get a Coke? | /kən aɪ ˈget ə ˈkoʊk/ | 我要一杯可樂 | 可樂一般說 Coke。get a 連讀，美式聽起來像 "geda"。
Medium rare, please. | /ˈmiːdiəm ˈrer ˈpliːz/ | 牛扒要三成熟 | 回答 How would you like your steak? 五成熟是 medium，全熟是 well done。
No onions, please. | /ˈnoʊ ˈʌnjənz ˈpliːz/ | 不要洋葱 | 也可以說 Can I get it without onions?
I'm allergic to peanuts. | /aɪm əˈlɜːrdʒɪk tə ˈpiːnʌts/ | 我對花生敏感 | allergic 的重音在第二個音節。名詞「敏感症」是 allergy。
Is it spicy? | /ɪz ɪt ˈspaɪsi/ | 辣嗎？ | 怕辣可以說 Not too spicy, please. 想要不辣的就問 Is there anything mild?
Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | 可以給我們一些水嗎？ | 美國餐廳的冰水一般免費。美式發音中，water 的 t 讀得像輕輕的 d。
Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | 全部都很好吃 | 侍應問 How is everything? 時這樣回答。
Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | 麻煩埋單 | 香港和英國說 the bill；美國說 the check。美國餐廳一般坐在座位上付款。
Can we split the bill? | /kən wi ˈsplɪt ðə ˈbɪl/ | 可以分開付款嗎？ | 也說 separate checks。split 開頭三個輔音 /spl/ 連在一起，中間不加元音。
It's on me. | /ɪts ɑːn ˈmiː/ | 我請客 | My treat! 意思一樣。
Can I get this to go? | /kən aɪ ˈget ˈðɪs tə ˈgoʊ/ | 這個可以拿走嗎？ | to go 就是外賣（口語說「拎走」），英式說 take away。吃剩的想帶走，也可以說 Can I get a box?
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkluːdɪd/ | 包括小費嗎？ | 香港餐廳多數收加一服務費；美國餐廳一般要另付 15% 至 20% 小費。
`,
"咖啡店與便利店": `
Can I get an iced Americano? | /kən aɪ ˈget ən ˈaɪst əˌmerɪˈkɑːnoʊ/ | 我要一杯凍美式咖啡 | 點飲品最常用 Can I get…? iced 字尾是 /st/，t 很輕，但不要整個省掉。
What size would you like? | /ˈwʌt ˈsaɪz wəd ju ˈlaɪk/ | 要甚麼大小？ | 店員會這樣問。
Small, please. | /ˈsmɔːl ˈpliːz/ | 小杯，謝謝 | 星巴克用 tall / grande / venti。
For here or to go? | /fər ˈhɪr ər tə ˈgoʊ/ | 在這裏喝還是外賣？ | 英式：Eat in or take away? to go 就是茶餐廳說的「拎走」。
Can I get oat milk instead? | /kən aɪ ˈget ˈoʊt ˈmɪlk ɪnˈsted/ | 可以換成燕麥奶嗎？ | instead = 代替。可能要加錢。milk 的 l 和 k 都要讀出來。
Less ice, please. | /ˈles ˈaɪs ˈpliːz/ | 少冰，謝謝 | 不要冰（「走冰」）：No ice, please.
Decaf, please. | /ˈdiːkæf ˈpliːz/ | 要低咖啡因的 | decaffeinated 的簡稱。
Can I get a name for the order? | /kən aɪ ˈget ə ˈneɪm fər ði ˈɔːrdər/ | 請問怎樣稱呼？（寫在杯上） | 店員要在杯上寫名字，說你的英文名就可以，例如 Amy。
Do you need a bag? | /də ju ˈniːd ə ˈbæg/ | 需要袋嗎？ | 不需要就說 No, I'm good. bag 字尾的 g 要帶聲，不要讀成 back。
Can I get a receipt? | /kən aɪ ˈget ə rɪˈsiːt/ | 請給我收據 | receipt 裏的 p 不發音。
Where can I find batteries? | /ˈwer kən aɪ ˈfaɪnd ˈbætəriz/ | 電池在哪裏？ | 問東西放在哪裏的萬用句。
Do you sell phone chargers? | /də ju ˈsel ˈfoʊn ˈtʃɑːrdʒərz/ | 有手機充電器賣嗎？ | 也可以說 Do you have…?
Can you heat this up? | /kən ju ˈhiːt ˈðɪs ˈʌp/ | 可以幫我加熱嗎？ | heat this up 要連起來讀。
That's it. | /ˈðæts ˈɪt/ | 就這些 | 店員問 Anything else? 時這樣回答。
Here you go. | /ˈhɪr ju ˈgoʊ/ | 給你 | 遞錢或遞東西時說。
Keep the change. | /ˈkiːp ðə ˈtʃeɪndʒ/ | 不用找了 | 在美國搭的士、收外賣時常用來代替小費。
`,
"購物與付款": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | 我隨便看看，謝謝 | 店員問 Can I help you find anything? 時用。
Do you have this in a medium? | /də ju ˈhæv ˈðɪs ɪn ə ˈmiːdiəm/ | 這個有中碼嗎？ | 尺碼：small / medium / large。
Do you have it in black? | /də ju ˈhæv ɪt ɪn ˈblæk/ | 有黑色的嗎？ | 顏色前用 in。black 的 l 要讀出來，不要讀成 "back"。
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑːn/ | 可以試穿嗎？ | try on = 試穿（衣服、鞋）。
Where's the fitting room? | /ˈwerz ðə ˈfɪtɪŋ ˈruːm/ | 試身室在哪裏？ | 英國說 changing room。
It's too big. | /ɪts ˈtuː ˈbɪg/ | 太大了 | 太小：It's too small.
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | 有點緊 | 太鬆：It's a bit loose.
Is this on sale? | /ɪz ˈðɪs ɑːn ˈseɪl/ | 這個有折扣嗎？ | on sale = 減價；for sale = 出售。很容易混淆。
Can you give me a discount? | /kən ju ˈgɪv mi ə ˈdɪskaʊnt/ | 可以便宜一點嗎？ | 美國一般商店不講價，只有在跳蚤市場或買二手貨時才會議價。
I'll take it. | /aɪl ˈteɪk ɪt/ | 我要這個 | 決定買時說。兩件或以上：I'll take them.
Cash or card? | /ˈkæʃ ər ˈkɑːrd/ | 現金還是信用卡？ | 付款時一定會聽到。
Do you take Apple Pay? | /də ju ˈteɪk ˈæpl ˈpeɪ/ | 可以用 Apple Pay 嗎？ | take = 接受（某種付款方式）。八達通和 PayMe 在外國一般用不到。
Can I get a refund? | /kən aɪ ˈget ə ˈriːfʌnd/ | 可以退款嗎？ | 記得保留收據。
I'd like to exchange this. | /aɪd ˈlaɪk tu ɪksˈtʃeɪndʒ ˈðɪs/ | 我想換這一件 | 補充原因：It's the wrong size.
Can you gift wrap it? | /kən ju ˈgɪft ˈræp ɪt/ | 可以包成禮物嗎？ | wrap 的 w 不發音。
Does that include tax? | /dəz ˈðæt ɪnˈkluːd ˈtæks/ | 包括稅嗎？ | 香港沒有銷售稅；美國的標價通常未包括稅，付款時會多出一些。
`,
"數字、時間與日期": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | 現在幾點？ | 問陌生人：Excuse me, do you have the time? time 字尾的 m 要合上嘴唇讀出來。
It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ | 三點半 | 香港學校教的 half past three 也對。three 開頭是 th，不要讀成 free。
It's a quarter to five. | /ɪts ə ˈkwɔːrtər tə ˈfaɪv/ | 四點四十五分 | quarter = 15 分鐘（廣東話說「三個字」）。也可以說 four forty-five。
At noon | /ət ˈnuːn/ | 中午 12 點 | 午夜是 midnight，比 12 a.m. / 12 p.m. 更不容易弄錯。
What's the date today? | /ˈwʌts ðə ˈdeɪt təˈdeɪ/ | 今天是幾號？ | 問星期幾：What day is it today? 美國寫日期先月後日，5/3 是 5 月 3 日；香港和英國先日後月。
It's May 3rd. | /ɪts ˈmeɪ ˈθɜːrd/ | 5 月 3 日 | 日期用序數詞讀：first, second, third, fourth… 樓層也用序數詞：美國的 first floor 是香港的地下（G/F），second floor 才是香港的一樓。
My birthday is in October. | /maɪ ˈbɜːrθdeɪ ɪz ɪn ɑːkˈtoʊbər/ | 我的生日在 10 月 | 月份前用 in，具體日期前用 on：on October 5th。
On Monday | /ɑːn ˈmʌndeɪ/ | 在星期一 | 星期前用 on。每逢星期一：on Mondays。
Next weekend | /ˈnekst ˈwiːkend/ | 下個週末 | next / last / this 前面不加介詞。
The day after tomorrow | /ðə ˈdeɪ æftər təˈmɑːroʊ/ | 後天 | 前天：the day before yesterday。
Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | 13 還是 30？ | 13 的重音在後（-teen 拉長，字尾有 n），30 的重音在前。聽價錢時一定要確認。
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlərz/ | 15 元 | $15.50 讀作 fifteen fifty。港幣和美元都叫 dollars，要分清楚時說 Hong Kong dollars / US dollars。眾數字尾的 s 要讀出來。
Two hundred and fifty | /ˈtuː ˈhʌndrəd ənd ˈfɪfti/ | 二百五十 (250) | 美國常省略 and：two hundred fifty。
Ten thousand | /ˈten ˈθaʊznd/ | 一萬 (10,000) | 英文沒有「萬」這個單位，數字每三位一組：10 thousand。
One million | /ˈwʌn ˈmɪljən/ | 一百萬 (1,000,000) | 一千萬 = ten million，一億 = one hundred million。
Twice a week | /ˈtwaɪs ə ˈwiːk/ | 一星期兩次 | once（一次）、twice（兩次）、three times（三次）。
In ten minutes | /ɪn ˈten ˈmɪnɪts/ | 10 分鐘後 | 表示將來時間的 in = ……之後，不是「10 分鐘之內」。minutes 字尾的 /ts/ 要讀出來。
`,
"閒談": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwiːkend/ | 週末過得怎樣？ | 星期一必問。用一兩句簡單回答，再反問對方。
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | 過得很輕鬆 | pretty 在這裏是「相當、頗」，不是「漂亮」。
Any plans for the weekend? | /ˈeni ˈplænz fər ðə ˈwiːkend/ | 週末有甚麼計劃？ | 星期五必問。沒有計劃就說 Not really, just relaxing.
Nice weather today, huh? | /ˈnaɪs ˈweðər təˈdeɪ ˈhʌ/ | 今天天氣真好啊 | 天氣是和誰都可以聊的最安全話題。廣東話的「食咗飯未？」在英文裏不是問候語。
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | 今天冷得要命 | 熱的時候：It's boiling! 或 It's so hot!
How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | 你在這裏住了多久？ | 回答：About three years. lived 字尾的 /vd/ 要讀出來。
Have you been to Hong Kong? | /həv ju bɪn tə ˌhɑːŋ ˈkɑːŋ/ | 你去過香港嗎？ | 問經歷用 have been to。中文的「去過」在這裏對應現在完成式。
What do you do for fun? | /ˈwʌt də ju ˈduː fər ˈfʌn/ | 你平時有甚麼消遣？ | 比 What's your hobby? 自然得多。
Have you seen any good shows lately? | /həv ju ˈsiːn ˈeni ˈgʊd ˈʃoʊz ˈleɪtli/ | 最近有看甚麼好看的劇集嗎？ | show = 劇集、綜藝等節目。
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | 聽起來很好玩 | 回應對方時用。That sounds great! 也很好。
Same here. | /ˈseɪm ˈhɪr/ | 我也是 | 口語直接說 Same!
Me neither. | /ˈmiː ˈniːðər/ | 我也不 | 附和否定句：I don't like it. → Me neither.（不能說 Me too）
I know, right? | /aɪ ˈnoʊ ˈraɪt/ | 就是嘛！ | 非常同意時的口語說法。
Oh, really? | /ˈoʊ ˈriːəli/ | 哦，真的嗎？ | 表示有興趣的回應，句尾上揚。
By the way | /baɪ ðə ˈweɪ/ | 順帶一提 | 轉換話題時用。訊息裏寫 BTW。
How's work? | /ˈhaʊz ˈwɜːrk/ | 工作怎樣？ | 熟人之間的問候，可以回答 Busy, but good! 薪金、租金、年齡、體重都不適合拿來閒談。
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/ | 跟你聊天很開心 | 自然地結束對話時說。
`,
"情緒與反應": `
I'm so happy for you! | /aɪm ˈsoʊ ˈhæpi fər ju/ | 真替你高興！ | 對方有好事時說。
Congratulations! | /kənˌgrætʃəˈleɪʃnz/ | 恭喜！ | 一定要加 -s，字尾的 /nz/ 也要讀出來。簡稱 Congrats!
That's awesome! | /ˈðæts ˈɔːsəm/ | 太好了！ | 美國人極常用的反應。
No way! | /ˈnoʊ ˈweɪ/ | 不是吧！ | 吃驚時說。也可以表示拒絕：No way, I'm not doing that.
Seriously? | /ˈsɪriəsli/ | 真的嗎？/ 認真的？ | 視乎語氣，可以表示驚訝，也可以表示不耐煩。
I'm so tired. | /aɪm ˈsoʊ ˈtaɪərd/ | 我很累 | 累透了：I'm exhausted.
I'm stressed out. | /aɪm ˈstrest ˈaʊt/ | 我壓力很大 | 比 I have stress 自然。
I'm bored. | /aɪm ˈbɔːrd/ | 我很悶 | 注意：I'm boring 的意思是「我是個沉悶的人」。
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | 我很興奮 / 很期待 | 有值得期待的事時說。-ed 形容詞表示自己的感受。
I'm nervous. | /aɪm ˈnɜːrvəs/ | 我很緊張 | 面試、演講前。安慰別人：Don't be nervous.
That's too bad. | /ˈðæts ˈtuː ˈbæd/ | 太可惜了 | 輕微的遺憾。嚴重的事用下一句。
I'm sorry to hear that. | /aɪm ˈsɑːri tə ˈhɪr ˈðæt/ | 聽到這個消息我很難過 | 不是道歉，而是安慰。sorry 在這裏是「遺憾、難過」。
What a relief! | /ˈwʌt ə rɪˈliːf/ | 總算放心了！ | 和 Phew! 一起說更自然。
Oh my gosh! | /ˈoʊ maɪ ˈgɑːʃ/ | 天啊！ | Oh my God 的委婉說法。訊息裏寫 OMG。
I'm upset. | /aɪm ʌpˈset/ | 我心裏很不舒服 | 介乎生氣和傷心之間的感覺。
That's so annoying. | /ˈðæts ˈsoʊ əˈnɔɪɪŋ/ | 真煩人 | 當面對人說 You're annoying 語氣很重。
I can't wait! | /aɪ ˈkænt ˈweɪt/ | 急不及待！ | 字面意思是「沒法等了」，表示非常期待。美式 can't 的元音是 /æ/，字尾的 t 很輕，要靠重音聽出否定。
It's not a big deal. | /ɪts ˈnɑːt ə ˈbɪg ˈdiːl/ | 沒甚麼大不了 | 對方過意不去時，用來讓對方放心。
`,
"讚美與好感": `
You look great! | /ju ˈlʊk ˈgreɪt/ | 你看起來很好！ | 稱讚外表用 You look…，熟人之間很自然。
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuːz/ | 你的鞋很好看 | love = 非常喜歡。對陌生人也可以隨口稱讚一句。
That color looks good on you. | /ˈðæt ˈkʌlər ˈlʊks ˈgʊd ɑːn ju/ | 這個顏色很適合你 | look good on + 人 = 穿在某人身上好看。美式拼法是 color，香港學校教的英式拼法是 colour。
You have a great smile. | /ju ˈhæv ə ˈgreɪt ˈsmaɪl/ | 你的笑容很好看 | 熟絡以後才用的溫暖讚美。
You're so funny. | /jʊr ˈsoʊ ˈfʌni/ | 你真搞笑 | funny = 好笑的；fun = 令人開心、好玩的。
Great job! | /ˈgreɪt ˈdʒɑːb/ | 做得好！ | 職場、學校都可以用。Nice work! 也一樣。
I'm proud of you. | /aɪm ˈpraʊd əv ju/ | 我為你感到驕傲 | 對家人、朋友說，上司也會對下屬說。
You did it! | /ju ˈdɪd ɪt/ | 你做到了！ | 對達成目標的人說。
Your Cantonese is really good! | /jʊr ˌkæntəˈniːz ɪz ˈriːəli ˈgʊd/ | 你的廣東話說得真好！ | 對學廣東話的外國朋友說，對方會很高興。Cantonese 的重音在最後一個音節。
You have good taste. | /ju ˈhæv ˈgʊd ˈteɪst/ | 你很有品味 | 稱讚衣着、音樂、家居佈置的品味。
I really enjoyed spending time with you. | /aɪ ˈriːəli ɪnˈdʒɔɪd ˈspendɪŋ ˈtaɪm wɪð ju/ | 和你在一起很開心 | 約會、聚會結束時說。enjoyed 字尾只加一個 /d/，不多加音節。
Do you want to grab coffee sometime? | /də ju ˈwɑːnt tə ˈgræb ˈkɔːfi ˈsʌmtaɪm/ | 改天一起喝杯咖啡好嗎？ | want to 在口語讀作 wanna。grab = 隨便吃點、喝點東西。
I miss you. | /aɪ ˈmɪs ju/ | 我想念你 | 對分隔兩地的人說，家人、朋友都可以。
You mean a lot to me. | /ju ˈmiːn ə ˈlɑːt tə mi/ | 你對我很重要 | 對朋友、伴侶表達真心時說。
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvər/ | 你真是救了我一命！ | 即使只是小忙，也可以誇張地表達感謝。
You made my day! | /ju ˈmeɪd maɪ ˈdeɪ/ | 你令我整天都很開心！ | 收到窩心的話或禮物時說。
That's very kind of you. | /ˈðæts ˈveri ˈkaɪnd əv ju/ | 你真好 | 得到幫助或稱讚時有禮貌地回應。
`,
"工作與電郵": `
I hope this email finds you well. | /aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/ | 希望你一切安好 | 正式電郵的開頭問候。輕鬆一點：I hope you're doing well. 美式電郵比香港辦公室常見的英式寫法短，也較隨意。
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu ˈæsk əbaʊt ðə ˈskedʒuːl/ | 我來信是想查詢時間表 | 第一句就說明來意：I'm writing to + 目的。
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔːrt/ | 報告已附上 | Please find attached… 更正式，也較生硬。
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndər əbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | 提醒一下明天的會議 | 委婉地催促的說法。
Let me know if you have any questions. | /ˈlet mi ˈnoʊ ɪf ju ˈhæv ˈeni ˈkwestʃənz/ | 有問題請隨時告訴我 | 電郵結尾最常用的一句。
Could you send me the file by Friday? | /kəd ju ˈsend mi ðə ˈfaɪl baɪ ˈfraɪdeɪ/ | 可以在星期五或之前把檔案傳給我嗎？ | by = 在……或之前（期限）；until = 一直到……
Sorry for the late reply. | /ˈsɑːri fər ðə ˈleɪt rɪˈplaɪ/ | 抱歉遲了回覆 | 也可以說 Thanks for your patience.
Thanks for getting back to me. | /ˈθæŋks fər ˈgetɪŋ ˈbæk tə mi/ | 謝謝你的回覆 | get back to = 回覆、再聯絡。
Best regards, | /ˈbest rɪˈgɑːrdz/ | 祝好（電郵結尾） | 一般電郵用 Best regards 就可以。Yours faithfully / Yours sincerely 較正式，多用於書信。關係較熟：Best, / Thanks,
Let's schedule a meeting. | /ˈlets ˈskedʒuːl ə ˈmiːtɪŋ/ | 我們約個時間開會吧 | schedule 美式讀 /ˈskedʒuːl/，英式讀 /ˈʃedjuːl/。
I'm running late. | /aɪm ˈrʌnɪŋ ˈleɪt/ | 我會遲一點到 | 在路上預先通知：I'll be there in 10.
Can we push the meeting to 3? | /kən wi ˈpʊʃ ðə ˈmiːtɪŋ tə ˈθriː/ | 會議可以推遲到 3 點嗎？ | 提早用 move up：Can we move it up to 1?
I'll get back to you. | /aɪl ˈget ˈbæk tə ju/ | 我確認後再回覆你 | 不能馬上答覆時爭取時間。
Can you walk me through it? | /kən ju ˈwɔːk mi θruː ɪt/ | 可以逐步向我解釋嗎？ | walk through = 一步一步講解。
Let's touch base next week. | /ˈlets ˈtʌtʃ ˈbeɪs ˈnekst ˈwiːk/ | 我們下星期再聯絡一下 | 意思是簡單交代一下進度。
What's the deadline? | /ˈwʌts ðə ˈdedlaɪn/ | 截止日期是甚麼時候？ | When is this due? 意思一樣。
I'm working from home today. | /aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/ | 我今天在家工作 | 縮寫 WFH。
I'm off tomorrow. | /aɪm ˈɔːf təˈmɑːroʊ/ | 我明天放假 | 請假：I'm taking a day off tomorrow.
Thanks for all your hard work. | /ˈθæŋks fər ˈɔːl jʊr ˈhɑːrd ˈwɜːrk/ | 辛苦了 / 感謝你的付出 | 中文的「辛苦了」沒有完全對應的說法。下班道別直接說 See you tomorrow! 就可以。
`,
"電話與短訊縮寫": `
Hello, this is Amy. | /həˈloʊ ˈðɪs ɪz ˈeɪmi/ | 喂，我是 Amy | 打電話時不說 I'm Amy，而說 This is Amy。
Can I speak to Mr. Chan? | /kən aɪ ˈspiːk tə ˈmɪstər ˈtʃæn/ | 請問陳先生在嗎？ | 稱謂後面接姓氏：Mr. Chan，不是 Mr. 加名字。更有禮貌：May I speak to…?
Who's calling, please? | /ˈhuːz ˈkɔːlɪŋ ˈpliːz/ | 請問是哪一位？ | 接電話的一方問。
Hold on a second. | /ˈhoʊld ˈɑːn ə ˈsekənd/ | 請稍等一下 | 打電話或說話時請對方等一等。hold 字尾的 /ld/ 要讀出來。
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ ˈʌp/ | 抱歉，訊號不好，聽不清楚 | break up =（電話聲音）斷斷續續。也有「分手」的意思。
Can I call you back? | /kən aɪ ˈkɔːl ju ˈbæk/ | 我遲些再打給你可以嗎？ | 忙的時候：I'm in a meeting. Can I call you back?
I'll text you. | /aɪl ˈtekst ju/ | 我傳訊息給你 | 美國把傳短訊、傳訊息都叫 text。text 字尾的 /kst/ 三個輔音都要讀。
I'm on my way. | /aɪm ɑːn maɪ ˈweɪ/ | 我在路上了 | 訊息裏寫 OMW。
LOL | /ˌel oʊ ˈel/ | 哈哈 (laughing out loud) | 不是真的大笑，就像隨手打的「哈哈」。
BRB | /ˌbiː ɑːr ˈbiː/ | 馬上回來 (be right back) | 聊天、玩遊戲時暫時離開用。
BTW | /ˌbiː tiː ˈdʌbəljuː/ | 順帶一提 (by the way) | 轉換話題時用，就像聊天時說「順便講」。
TBH | /ˌtiː biː ˈeɪtʃ/ | 老實說 (to be honest) | 放在句首或句尾都可以。
IDK | /ˌaɪ diː ˈkeɪ/ | 不知道 (I don't know) | 常寫成小楷 idk。
OMG | /ˌoʊ em ˈdʒiː/ | 天啊 (oh my God) | 口語也會直接說 O-M-G!
ASAP | /ˌeɪ es eɪ ˈpiː/ /ˈeɪsæp/ | 盡快 (as soon as possible) | 職場常用，但對上司最好給出具體日期，更有禮貌。
TTYL | /ˌtiː tiː waɪ ˈel/ | 遲些再談 (talk to you later) | 結束聊天時用。香港人在英文訊息句尾加的 la、lor、ar 是本地聊天習慣，對外國人就不用加了。
NVM | /ˌen viː ˈem/ | 沒事了，算了 (never mind) | 收回剛才的問題時用。
FYI | /ˌef waɪ ˈaɪ/ | 供你參考 (for your information) | 工作電郵、即時通訊裏很常用。
`,
"旅行（機場與酒店）": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔːrt/ | 這是我的護照 | 辦理登機手續、過入境檢查時遞過去說。
I'm here for sightseeing. | /aɪm ˈhɪr fər ˈsaɪtsiːɪŋ/ | 我來觀光 | 回答入境問題 What's the purpose of your visit?
I'm staying for a week. | /aɪm ˈsteɪɪŋ fər ə ˈwiːk/ | 我逗留一星期 | 回答 How long are you staying?
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ ət ðə ˈhɪltən/ | 我住希爾頓酒店 | 回答 Where are you staying?
Window or aisle? | /ˈwɪndoʊ ər ˈaɪl/ | 靠窗還是靠通道？ | aisle 的 s 不發音。
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsiːt ˈpliːz/ | 我想要靠通道的座位 | 靠窗：a window seat。
Where is the baggage claim? | /ˈwer ɪz ðə ˈbægɪdʒ ˈkleɪm/ | 行李認領處在哪裏？ | 英國說 baggage reclaim。claim 的 l 和字尾的 m 都要讀出來。
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | 我的行李不見了 | luggage 是不可數名詞，沒有眾數：a piece of luggage。
I have a reservation under Chan. | /aɪ ˈhæv ə ˌrezərˈveɪʃn ʌndər ˈtʃæn/ | 我用「陳」這個姓氏訂了房 | under + 訂房人的姓名。說姓氏就可以，有需要時逐個字母拼出來：C-H-A-N。
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃekaʊt/ | 幾點退房？ | 想遲一點走：Can I get a late check-out?
Can I check in early? | /kən aɪ ˈtʃek ˈɪn ˈɜːrli/ | 可以提早入住嗎？ | check in 要連讀。
Is breakfast included? | /ɪz ˈbrekfəst ɪnˈkluːdɪd/ | 包早餐嗎？ | breakfast 讀 /ˈbrekfəst/，不是 break + fast。
The air conditioner isn't working. | /ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/ | 冷氣壞了 | 口語簡稱 AC。
Could I get some extra towels? | /kəd aɪ ˈget ˈsʌm ˈekstrə ˈtaʊəlz/ | 可以多給我幾條毛巾嗎？ | could I 要連讀。towels 是眾數，字尾的 /z/ 要讀出來。
Can you hold my bags until 3? | /kən ju ˈhoʊld maɪ ˈbægz əntɪl ˈθriː/ | 可以替我保管行李到 3 點嗎？ | 退房後寄存行李。hold = 代為保管。
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈleɪd/ | 我的航班延誤了 | 取消是 canceled（英式拼法 cancelled）。flight 的 l 要讀出來，不要讀成 fight。
Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | 12 號閘口在哪裏？ | 英文把號碼放在後面：gate 12、room 305。
Do I need to take my laptop out? | /də aɪ ˈniːd tə ˈteɪk maɪ ˈlæptɑːp ˈaʊt/ | 需要把手提電腦拿出來嗎？ | 過保安檢查時問。
`,
"醫院與緊急情況": `
Help! | /ˈhelp/ | 救命！ | 緊急時大聲喊。
Call 911! | /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/ | 快打 911！ | 美國的緊急電話是 911（讀作 nine one one）；香港和英國是 999。
I need a doctor. | /aɪ ˈniːd ə ˈdɑːktər/ | 我要看醫生 | 情況緊急：I need an ambulance.
I don't feel well. | /aɪ ˈdoʊnt ˈfiːl ˈwel/ | 我不太舒服 | 最常用的說法。
I have a headache. | /aɪ ˈhæv ə ˈhedeɪk/ | 我頭痛 | 痛的部位 + ache：stomachache, toothache。headache 是可數名詞，前面要加冠詞 a。
I have a fever. | /aɪ ˈhæv ə ˈfiːvər/ | 我發燒了 | fever 中間的 v 要震動聲帶，不要讀成 f 或 w。
My stomach hurts. | /maɪ ˈstʌmək ˈhɜːrts/ | 我肚子痛 | 部位 + hurts。hurts 字尾的 /ts/ 要讀出來。
I have a sore throat. | /aɪ ˈhæv ə ˈsɔːr ˈθroʊt/ | 我喉嚨痛 | throat 是喉嚨，不是頸 (neck)。開頭是 th 加 r，不要讀成 "froat"。
I feel dizzy. | /aɪ ˈfiːl ˈdɪzi/ | 我頭暈 | 想吐：I feel sick. / I feel nauseous. dizzy 中間是帶聲的 /z/，不是 /s/。
I sprained my ankle. | /aɪ ˈspreɪnd maɪ ˈæŋkl/ | 我扭傷了腳踝 | sprain = 扭傷。手腕是 wrist。
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr ˈhɪr/ | 這附近有藥房嗎？ | 美國也叫 drugstore（例如 CVS）；英國說 chemist。
Do I need a prescription? | /də aɪ ˈniːd ə prɪˈskrɪpʃn/ | 需要醫生處方嗎？ | 在美國，不用處方就可以買的藥叫 over-the-counter。
I lost my wallet. | /aɪ ˈlɔːst maɪ ˈwɑːlɪt/ | 我遺失了錢包 | 遺失了手機就說 phone。失物認領處是 lost and found。
Someone stole my phone. | /ˈsʌmwʌn ˈstoʊl maɪ ˈfoʊn/ | 有人偷了我的手機 | stole 是 steal（偷）的過去式。
Where is the police station? | /ˈwer ɪz ðə pəˈliːs ˈsteɪʃn/ | 警署在哪裏？ | police 的重音在後面。
I need to contact my consulate. | /aɪ ˈniːd tə ˈkɑːntækt maɪ ˈkɑːnsələt/ | 我需要聯絡我的領事館 | 遺失護照時一定用得着。consulate 是領事館，embassy 是大使館。
I have travel insurance. | /aɪ ˈhæv ˈtrævl ɪnˈʃʊrəns/ | 我買了旅遊保險 | 去醫療費用高的國家，一定要預先買。
`,
"片語動詞": `
pick up | /ˈpɪk ˈʌp/ | （開車）接 / 拾起 | I'll pick you up at 7. 代名詞 (you, it) 放在中間。
give up | /ˈgɪv ˈʌp/ | 放棄 | Don't give up! 放棄做某事用 -ing：give up smoking。
figure out | /ˈfɪgjər ˈaʊt/ | 弄明白 / 想出辦法 | I can't figure out this app.（我弄不懂這個 app 怎樣用）
find out | /ˈfaɪnd ˈaʊt/ | 發現 / 得知 | 指打聽到消息。figure out 是動腦筋解決問題。
look for | /ˈlʊk fɔːr/ | 尋找 | I'm looking for my keys. 找到了用 find。
look after | /ˈlʊk ˈæftər/ | 照顧 | Can you look after my cat? 美國也常說 take care of。
look forward to | /ˈlʊk ˈfɔːrwərd tuː/ | 期待 | to 後面接名詞或 -ing：I'm looking forward to seeing you. 不能接動詞原形。
run out of | /ˈrʌn ˈaʊt əv/ | 用完 / 耗盡 | 用完的東西放在 of 後面：We ran out of milk.（牛奶喝完了）
turn on | /ˈtɜːrn ˈɑːn/ | 開（電器） | 「開燈」要說 turn on the light，不說 open the light ✗。代名詞放中間：Turn it on.
turn off | /ˈtɜːrn ˈɔːf/ | 關掉（電器） | 「熄燈」不說 close the light ✗。代名詞放中間：Turn it off. (turn off it ✗)
turn down | /ˈtɜːrn ˈdaʊn/ | 拒絕 / 調低（音量） | 兩個意思都很常用：She turned down the offer. / Turn it down!
put off | /ˈpʊt ˈɔːf/ | 推遲 / 拖延 | 日常口語比 postpone 常用得多：Stop putting it off!
show up | /ˈʃoʊ ˈʌp/ | 出現 / 到場 | 指人到了現場：He didn't show up to the party.（他沒有來派對）
hang out | /ˈhæŋ ˈaʊt/ | 一起玩 / 消磨時間 | 和朋友出去玩用 hang out，不用 play（play 多用於小孩、遊戲、運動）。
check out | /ˈtʃek ˈaʊt/ | 看看 / 查看 | Check out this video! 也有「退房」的意思。
work out | /ˈwɜːrk ˈaʊt/ | 健身 / 順利解決 | 去健身室做運動常說 work out：I work out every day. / It'll work out.（事情會好起來的）
come up with | /ˈkʌm ˈʌp wɪð/ | 想出（主意） | 想出主意、藉口、辦法：She came up with a great idea.
get along with | /ˈget əˈlɔːŋ wɪð/ | 和……相處融洽 | 關係好：I get along with my coworkers.（我和同事相處得很好）
calm down | /ˈkɑːm ˈdaʊn/ | 冷靜下來 | calm 的 l 不發音。對生氣的人這樣說，可能令對方更生氣。
set up | /ˈset ˈʌp/ | 安裝 / 設定 / 安排 | 安裝器材、準備會議等：Can you help me set up my printer?
break up | /ˈbreɪk ˈʌp/ | 分手 | They broke up last month. 和誰分手：break up with。
fill out | /ˈfɪl ˈaʊt/ | 填寫（表格） | Please fill out this form. 英式說 fill in。
grow up | /ˈgroʊ ˈʌp/ | 長大 | 說在哪裏長大：I grew up in Kowloon.（我在九龍長大）
wake up | /ˈweɪk ˈʌp/ | 醒來 | 醒過來是 wake up，起牀是 get up。
`,
"發音易錯": `
rice | /ˈraɪs/ | 米 / 飯 | r：嘴唇微微收圓，舌尖向後捲，不碰口腔任何地方。讀成 l 就變成 lice，也不要讀成 w。
lice | /ˈlaɪs/ | 蝨子 | l：舌尖抵住上齒後面再放開。把 I like rice 說成 lice 就尷尬了。
right | /ˈraɪt/ | 右邊 / 正確的 | r 開頭，舌尖不碰上顎。和 light 分清楚，也不要讀成 white。
light | /ˈlaɪt/ | 光 / 燈 / 輕的 | l 開頭，舌尖抵住上齒後面。廣東話口語常把 n 讀成 l（例如「你」），英文卻要分清楚：light 不是 night。
fan | /ˈfæn/ | 風扇 / 粉絲 | /æ/ 嘴巴張大，嘴角向兩邊拉；張得不夠就像 "fen"。字尾的 n 要讀出來。
pan | /ˈpæn/ | 平底鑊 | 和 pen 分清楚：pan 的 /æ/ 嘴巴張得比 pen 的 /e/ 大。
coffee | /ˈkɔːfi/ | 咖啡 | 美式的第一個元音是 /ɔː/，英式較短。重音在前，第二個音節輕而短。
copy | /ˈkɑːpi/ | 影印 / 副本 | 美式的元音是 /ɑː/，嘴巴張開，不收圓。中間是 p，和 coffee 的 f 分清楚。
think | /ˈθɪŋk/ | 想 / 認為 | /θ/：舌尖輕放在上下齒之間送氣。讀成 f 就變成 "fink"。字尾的 /ŋk/ 也要讀出來。
sink | /ˈsɪŋk/ | 洗手盆 / 下沉 | 開頭是 s，舌尖在牙齒後面。和 think 是一對。
three | /ˈθriː/ | 三 | th 加 r：舌尖先放在齒間，再向後捲。讀成 f 就變成 free，讀成 t 就像 tree。
tree | /ˈtriː/ | 樹 | /tr/ 連在一起讀，中間不加元音，r 也不能省。
this | /ˈðɪs/ | 這個 | 帶聲的 /ð/：舌尖放在齒間，聲帶震動，不要讀成 d（"dis"）。
very | /ˈveri/ | 非常 | v：上齒輕碰下唇，聲帶震動。不要讀成 w（wary）。
berry | /ˈberi/ | 漿果 | b：雙唇合上再放開。和 very 分清楚。
vote | /ˈvoʊt/ | 投票 | v 開頭，不是 w，也不是 b。字尾的 t 輕輕收住。
boat | /ˈboʊt/ | 船 | b 開頭。雙元音 /oʊ/ 之後還有 t，不要把 t 吞掉。
walk | /ˈwɔːk/ | 走路 | l 不發音，元音是嘴巴張開的 /ɔː/，字尾的 k 要讀出來。
work | /ˈwɜːrk/ | 工作 | 美式是捲舌的 /ɜːr/。和 walk 是很容易混淆的一對。
beach | /ˈbiːtʃ/ | 沙灘 | /iː/ 是長音，嘴角向兩邊拉緊。讀成短而放鬆的 /ɪ/ 會變成罵人的字。
leave | /ˈliːv/ | 離開 | 長音 /iː/，字尾的 v 帶聲。和短音的 live（住）分清楚。
live | /ˈlɪv/ | 住 / 生活 | 短而放鬆的 /ɪ/。字尾的 v 要震動聲帶，不要讀成 f。
banana | /bəˈnænə/ | 香蕉 | 重音在中間，前後兩個 a 都弱讀成 /ə/。廣東話每個音節一樣重，英文不是。
hotel | /hoʊˈtel/ | 酒店 | 重音在後面的 tel。字尾的 l 舌尖要碰上去，不要讀成元音。
milk | /ˈmɪlk/ | 牛奶 | l 之後緊接 k：舌尖先碰上齒後面，再輕輕讀出 k，兩個音都不能省。
McDonald's | /məkˈdɑːnldz/ | 麥當勞 | 重音在 Don，Mc 弱讀成 /mək/。照中文譯名「麥當勞」的節奏說，外國人很難聽懂。
night | /ˈnaɪt/ | 夜晚 | n：舌尖抵住上齒後面，氣從鼻出。讀成 l 就變成 light。
know | /ˈnoʊ/ | 知道 | k 不發音。n 開頭，讀成 l 就變成 low。
low | /ˈloʊ/ | 低的 | l 開頭，舌尖抵住上齒後面，氣從舌頭兩邊出。
free | /ˈfriː/ | 自由的 / 免費的 | f：上齒輕碰下唇。和 three 是一對：three 的舌尖在齒間。
they | /ˈðeɪ/ | 他們 | /ð/：舌尖放在齒間，聲帶震動。讀成 d 就變成 day。
day | /ˈdeɪ/ | 日子 / 一天 | d 開頭，舌尖在上齒後面，不伸到齒間。和 they 是一對。
wary | /ˈweri/ | 謹慎的 | w：雙唇收圓，不碰牙齒。和 very 分清楚。
vest | /ˈvest/ | 背心 | v 開頭，上齒碰下唇。讀成 w 就變成 west。字尾的 /st/ 要讀全。
west | /ˈwest/ | 西方 / 西面 | w 開頭，嘴唇收圓，牙齒不碰嘴唇。
zip | /ˈzɪp/ | 拉鏈 / 拉上 | /z/ 的口形和 s 一樣，但聲帶要震動。不帶聲就變成 sip。
sip | /ˈsɪp/ | 小口地喝 | 開頭是不帶聲的 s。和 zip 是一對。
show | /ˈʃoʊ/ | 表演 / 展示 | /ʃ/：嘴唇向前收圓，舌頭比 s 稍後。讀成 s 就變成 so。
so | /ˈsoʊ/ | 所以 / 這麼 | 開頭是 s，嘴唇不用向前突。和 show 是一對。
full | /ˈfʊl/ | 滿的 / 飽的 | 短而放鬆的 /ʊ/。讀得太長太緊就變成 fool。
fool | /ˈfuːl/ | 傻瓜 | 長音 /uː/，嘴唇收得更圓更緊。字尾的 l 舌尖要碰上去。
bad | /ˈbæd/ | 壞的 | /æ/ 嘴巴張大。張得不夠就變成 bed。
bed | /ˈbed/ | 牀 | /e/ 嘴巴張得比 /æ/ 小。字尾的 d 帶聲，不要讀成 bet。
`,
"英文習語": `
It's a piece of cake. | /ɪts ə ˈpiːs əv ˈkeɪk/ | 易如反掌 | 非常容易：The test was a piece of cake.
I'm on cloud nine. | /aɪm ɑːn ˈklaʊd ˈnaɪn/ | 我高興得不得了 | 特別開心的時候說。
It costs an arm and a leg. | /ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/ | 貴得驚人 | 貴到要拿手臂和腿去換。
Let's call it a day. | /ˈlets ˈkɔːl ɪt ə ˈdeɪ/ | 今天到此為止吧 | 結束工作、溫習時說，開會時也很自然。
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ ʌndər ðə ˈweðər/ | 我有點不舒服 | 像快要感冒那樣的輕微不適，和天氣無關。
I need to hit the books. | /aɪ ˈniːd tə ˈhɪt ðə ˈbʊks/ | 我要用功溫習了 | 考試前說。不是真的打書。
Once in a blue moon | /ˈwʌns ɪn ə ˈbluː ˈmuːn/ | 極少 / 難得一次 | 非常少有：I only eat fast food once in a blue moon.
Better late than never. | /ˈbetər ˈleɪt ðən ˈnevər/ | 遲做總比不做好 | 鼓勵起步遲的人。
Don't beat around the bush. | /ˈdoʊnt ˈbiːt əraʊnd ðə ˈbʊʃ/ | 不要兜圈子 | 叫對方直接說重點。
It's not my cup of tea. | /ɪts ˈnɑːt maɪ ˈkʌp əv ˈtiː/ | 不合我的口味 | 委婉地表示不喜歡。廣東話說的「唔係我杯茶」就是這個意思。
Let's get the ball rolling. | /ˈlets ˈget ðə ˈbɔːl ˈroʊlɪŋ/ | 我們開始吧 | 會議、項目開始時說。
I'll keep my fingers crossed. | /aɪl ˈkiːp maɪ ˈfɪŋgərz ˈkrɔːst/ | 我會為你祈求好運 | 常配合食指和中指交叉的手勢。
Hang in there. | /ˈhæŋ ˈɪn ˈðer/ | 撐住 / 堅持下去 | 對處境艱難的人說。這種場合的「加油」可以說 Hang in there；Add oil 在香港以外未必人人明白。
Speak of the devil! | /ˈspiːk əv ðə ˈdevl/ | 一說曹操，曹操就到！ | 正說着某人，他就出現了。
The ball is in your court. | /ðə ˈbɔːl ɪz ɪn jʊr ˈkɔːrt/ | 輪到你決定了 | 來自網球。
My lips are sealed. | /maɪ ˈlɪps ər ˈsiːld/ | 我一定守口如瓶 | 字面意思是「嘴唇封住了」。
It's on the tip of my tongue. | /ɪts ɑːn ðə ˈtɪp əv maɪ ˈtʌŋ/ | 話到嘴邊卻想不起來 | 明明知道，卻一時說不出來的時候。
I'm all ears. | /aɪm ˈɔːl ˈɪrz/ | 我洗耳恭聽 | 意思是「你說吧，我在認真聽」。
When pigs fly. | /wen ˈpɪgz ˈflaɪ/ | 除非太陽從西邊出來 | 絕不可能發生的事：He'll clean his room when pigs fly.
`,
"影視與俚語": `
Spill the tea. | /ˈspɪl ðə ˈtiː/ | 快說有甚麼八卦 | tea = 八卦、內幕。朋友之間的俚語。
No cap. | /ˈnoʊ ˈkæp/ | 真的，不騙你 | 年輕人的俚語。cap = 謊話。
That song slaps. | /ˈðæt ˈsɔːŋ ˈslæps/ | 這首歌太好聽了 | slap =（音樂等）非常好，也可以形容食物。
I'm dead. | /aɪm ˈded/ | 笑死我了 | 訊息裏常配 💀 表情符號，不是真的死了。
Low-key | /ˌloʊˈkiː/ | 有點 / 暗地裏 | I low-key love this song. 反義詞是 high-key（毫不掩飾地）。
I'm obsessed with this song. | /aɪm əbˈsest wɪð ˈðɪs ˈsɔːŋ/ | 我迷上了這首歌 | obsessed = 着迷的，多用在正面的意思上。
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | 講甚麼的？ | 問電影、劇集的劇情。about 的第一個音節弱讀成 /ə/。
No spoilers! | /ˈnoʊ ˈspɔɪlərz/ | 不要劇透！ | Don't spoil it! 意思一樣。
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə ˈhoʊl ˈsiːzn/ | 我一口氣看完了一整季 | binge-watch 就是「煲劇」，一口氣看很多集。
The ending was so good. | /ði ˈendɪŋ wəz ˈsoʊ ˈgʊd/ | 結局很好看 | 不好看：The ending was disappointing.
It's a must-watch. | /ɪts ə ˈmʌstwɑːtʃ/ | 一定要看 | 極力推介時說。
Plot twist! | /ˈplɑːt ˈtwɪst/ | 劇情大逆轉！ | 生活中出現意外時也可以說。
It's overrated. | /ɪts ˌoʊvərˈreɪtɪd/ | 名過其實 | 反義詞是 underrated（被低估的）。
That scene gave me chills. | /ˈðæt ˈsiːn ˈgeɪv mi ˈtʃɪlz/ | 那一幕看得我起雞皮疙瘩 | 因為感動或緊張而起雞皮疙瘩。
Who's your bias? | /ˈhuːz jʊr ˈbaɪəs/ | 你最喜歡哪個成員？ | 追星用語，來自韓國流行音樂的粉絲圈，指組合中你最喜歡的成員。一般的說法是 Who's your favorite member?
Are you kidding me? | /ər ju ˈkɪdɪŋ mi/ | 你在開玩笑嗎？ | 電影、劇集常見的對白，可以表示驚訝，也可以表示不滿。
I've got your back. | /aɪv ˈgɑːt jʊr ˈbæk/ | 我支持你 / 有我在 | 意思是會一直支持你、保護你。
Gotcha. | /ˈgɑːtʃə/ | 明白了 / 捉到你了！ | got you 的縮略，最常用來表示「明白了」。
Let's do this! | /ˈlets ˈduː ˈðɪs/ | 來，開始吧！ | 開始前為大家打氣。
`,
"英文字母": `
A | /ˈeɪ/ | 字母 A（小楷 a） | apple 的 A。名稱是 /ˈeɪ/，和 day 的元音一樣。
B | /ˈbiː/ | 字母 B（小楷 b） | bag 的 B。雙唇合上再放開。電話裏容易和 P、D 聽錯，可以說 B as in boy。
C | /ˈsiː/ | 字母 C（小楷 c） | coffee 的 C。名稱和 see 同音，開頭是 /s/，不是 /ʃ/。
D | /ˈdiː/ | 字母 D（小楷 d） | dog 的 D。和 T 只差聲帶震動，電話裏容易聽錯。
E | /ˈiː/ | 字母 E（小楷 e） | email 的 E。名稱是長音 /ˈiː/；/ˈaɪ/ 是 I 的名稱。
F | /ˈef/ | 字母 F（小楷 f） | fan 的 F。名稱只有一個音節：上齒輕碰下唇就收住，後面不加元音。coffee 裏的 ff 說 double F。
G | /ˈdʒiː/ | 字母 G（小楷 g） | go 的 G。名稱是 /ˈdʒiː/，J 才是 /ˈdʒeɪ/，不要把兩個對調。
H | /ˈeɪtʃ/ | 字母 H（小楷 h） | hotel 的 H。名稱由元音開頭，所以說 an H。只有一個音節，/tʃ/ 之後不加元音。
I | /ˈaɪ/ | 字母 I（小楷 i） | idea 的 I。和表示「我」的 I 同音；/ˈiː/ 是 E 的名稱。
J | /ˈdʒeɪ/ | 字母 J（小楷 j） | job 的 J。名稱是 /ˈdʒeɪ/，容易和 G 的 /ˈdʒiː/ 對調。
K | /ˈkeɪ/ | 字母 K（小楷 k） | key 的 K。和 OK 後半的音相同。
L | /ˈel/ | 字母 L（小楷 l） | light 的 L。名稱只有一個音節：舌尖抵住上齒後面就收住，後面不加元音。
M | /ˈem/ | 字母 M（小楷 m） | milk 的 M。合上雙唇收住。電話裏容易和 N 聽錯，可以說 M as in Mary。
N | /ˈen/ | 字母 N（小楷 n） | name 的 N。舌尖抵住上齒後面，氣從鼻出。電話裏容易和 M 混淆，可以說 N as in name。
O | /ˈoʊ/ | 字母 O（小楷 o） | OK 的 O。美式是 /oʊ/，收尾時嘴唇收圓。說電話號碼時，數字 0 也常讀作 O。
P | /ˈpiː/ | 字母 P（小楷 p） | pan 的 P。雙唇爆破送氣，和 B 分清楚。
Q | /ˈkjuː/ | 字母 Q（小楷 q） | question 的 Q。名稱是 /ˈkjuː/，和 queue（排隊）同音。在英文字裏，Q 後面幾乎一定跟着 U。
R | /ˈɑːr/ | 字母 R（小楷 r） | rice 的 R。美式名稱是 /ˈɑːr/：先張開嘴讀 /ɑː/，再把舌尖向後捲，不碰任何地方。英式不捲舌。名稱只有一個音節。
S | /ˈes/ | 字母 S（小楷 s） | sorry 的 S。名稱只有一個音節，以 /s/ 收住，後面不加元音。/ˈsiː/ 是 C 的名稱。class 裏的 ss 說 double S。
T | /ˈtiː/ | 字母 T（小楷 t） | taxi 的 T。大楷說 capital T，兩個 T 連在一起說 double T。
U | /ˈjuː/ | 字母 U（小楷 u） | university 的 U。名稱和 you 同音，以 /j/ 開頭，所以說 a U。
V | /ˈviː/ | 字母 V（小楷 v） | very 的 V。上齒輕碰下唇，聲帶震動。名稱是 /ˈviː/，不要讀成 "wee"。
W | /ˈdʌbəljuː/ | 字母 W（小楷 w） | water 的 W。名稱是 double u（兩個 U），三個音節都要讀出來。
X | /ˈeks/ | 字母 X（小楷 x） | X-ray（X 光）的 X，不過 X 更常出現在字尾，例如 box。名稱由元音開頭，所以說 an X；只有一個音節，/ks/ 之後不加元音。
Y | /ˈwaɪ/ | 字母 Y（小楷 y） | yes 的 Y。名稱和 why 同音。
Z | /ˈziː/ | 字母 Z（小楷 z） | zero 的 Z。美國人說 zee；香港學校教的是英式的 zed，兩個都對。開頭是帶聲的 /z/，不是 /s/。
`,
"港式英文陷阱": `
Turn on the light. | /ˈtɜːrn ˈɑːn ðə ˈlaɪt/ | 開燈 | 港式英文：「開燈」不是 open the light ✗。燈、電視、冷氣等電器的「開」用 turn on。
Turn off the TV. | /ˈtɜːrn ˈɔːf ðə ˌtiː ˈviː/ | 關電視 | 港式英文：「熄電視」不是 close the TV ✗。電器用 turn off，門窗才用 close。
I'll take you to the station. | /aɪl ˈteɪk ju tə ðə ˈsteɪʃn/ | 我帶你去車站 | 一字多義：中文的「帶」在英文分兩個字。把人或物帶去別處用 take；帶到說話人這裏才用 bring。
Can you bring me some water? | /kən ju ˈbrɪŋ mi ˈsʌm ˈwɔːtər/ | 可以拿些水給我嗎？ | 一字多義：「拿來、帶來」（朝說話人的方向）用 bring，和 take 的方向相反。
Can you lend me a pen? | /kən ju ˈlend mi ə ˈpen/ | 可以借一枝筆給我嗎？ | 一字多義：中文的「借」不分方向。借給別人用 lend。Can you borrow me a pen? ✗
Can I borrow your charger? | /kən aɪ ˈbɑːroʊ jʊr ˈtʃɑːrdʒər/ | 我可以借用你的充電器嗎？ | 一字多義：向別人借來用是 borrow。記住：lend 是借出，borrow 是借入。
I'm reading a book. | /aɪm ˈriːdɪŋ ə ˈbʊk/ | 我在看書 | 一字多義：廣東話的「睇」在英文分幾個字。「睇書」用 read，不說 see a book ✗ 或 look a book ✗。
I'm watching TV. | /aɪm ˈwɑːtʃɪŋ ˌtiː ˈviː/ | 我在看電視 | 一字多義：看電視、看比賽這種持續地看用 watch。watch TV 是固定說法，TV 前不加冠詞；指某一部電視機時才說 the TV：Turn off the TV.
Look at this picture. | /ˈlʊk ət ˈðɪs ˈpɪktʃər/ | 看看這張照片 | 一字多義：主動去看某樣東西用 look at，at 不能漏；「看見」用 see。
Take this medicine twice a day. | /ˈteɪk ˈðɪs ˈmedɪsn ˈtwaɪs ə ˈdeɪ/ | 這種藥一天吃兩次 | 港式英文：「食藥」不是 eat medicine ✗，要用 take。medicine 泛指藥物時是不可數名詞。
Tell me the truth. | /ˈtel mi ðə ˈtruːθ/ | 對我說實話 | 一字多義：「講」在英文分幾個字：say 後面接說話的內容，tell 後面接人，speak 接語言，talk 指交談。say the truth ✗ → tell the truth ✓
I really like it. | /aɪ ˈriːəli ˈlaɪk ɪt/ | 我很喜歡 | 港式英文：「我好鍾意」不是 I very like it. ✗。very 不能直接修飾動詞，要說 I really like it. 或 I like it very much.
What do you think? | /ˈwʌt də ju ˈθɪŋk/ | 你覺得怎樣？ | 港式英文：「你覺得點？」不說 How do you think? ✗。問意見用 What do you think?
Although it rained, we went hiking. | /ɔːlðoʊ ɪt ˈreɪnd wi ˈwent ˈhaɪkɪŋ/ | 雖然下雨，我們還是去了行山 | 港式英文：「雖然……但是」在英文只用一個連接詞。Although it rained, but we went… ✗
Because I was tired, I went to bed early. | /bɪkəz aɪ wəz ˈtaɪərd aɪ ˈwent tə ˈbed ˈɜːrli/ | 因為太累，所以我很早就睡了 | 港式英文：「因為……所以」只用一個，because 和 so 不能同時出現。go to bed 不加冠詞。
There's a bank near here. | /ðerz ə ˈbæŋk nɪr ˈhɪr/ | 這附近有一間銀行 | 港式英文：中文的「有」既是 have，也是 there is。「呢度有間銀行」不是 There has a bank. ✗，要說 There's a bank.
Many people have this problem. | /ˈmeni ˈpiːpl ˈhæv ˈðɪs ˈprɑːbləm/ | 有很多人有這個問題 | 港式英文：There are many people have… ✗ 一句裏有兩個動詞。說 Many people have…，或加 who：There are many people who have…
It's difficult for me to wake up early. | /ɪts ˈdɪfɪkəlt fər mi tə ˈweɪk ˈʌp ˈɜːrli/ | 我很難早起 | 港式英文：I am difficult to wake up early. ✗ 是把中文直譯過來。difficult / easy 的主語用 it：It's difficult for me to…
Wait for me. | /ˈweɪt fər mi/ | 等等我 | 港式英文：「等我」不是 Wait me. ✗。wait 後面要加 for 才可以接人。
I'm leaving now. | /aɪm ˈliːvɪŋ ˈnaʊ/ | 我先走了 | 港式英文：「我走先」直譯成 I go first. ✗，對方聽不出是道別。說 I'm leaving now. 或 I have to go.
Let's discuss the plan. | /ˈlets dɪˈskʌs ðə ˈplæn/ | 我們討論一下計劃吧 | 港式英文：discuss about the plan ✗。discuss 後面直接接要討論的事，不加 about。
Good luck! | /ˈgʊd ˈlʌk/ | 加油！/ 祝你好運！ | 港式英文：Add oil! 已收進《牛津英語詞典》，香港人之間可以用，但外地人未必明白。對外國人說 Good luck! / You can do it! / Go for it!
Where's the cashier? | /ˈwerz ðə kæˈʃɪr/ | 收銀處在哪裏？ | 港式英文：停車場和醫院的 shroff（繳費處）是香港本地用字，外地人未必明白。在外國說 cashier 或 payment office。
I need a company stamp. | /aɪ ˈniːd ə ˈkʌmpəni ˈstæmp/ | 我需要公司印章 | 港式英文：香港把印章叫 chop，在本地沒有問題，外地人卻未必明白。說 stamp 就清楚了。
I'm waiting in line. | /aɪm ˈweɪtɪŋ ɪn ˈlaɪn/ | 我在排隊 | 英式 / 美式：香港學校教的是 queue（I'm queuing.）；美國說 wait in line。兩個都對。
Take the elevator to the first floor. | /ˈteɪk ði ˈelɪveɪtər tə ðə ˈfɜːrst ˈflɔːr/ | 搭升降機到地下 | 英式 / 美式：香港說 lift 和 ground floor (G/F)；美國說 elevator，first floor 就是地下。
I live in an apartment. | /aɪ ˈlɪv ɪn ən əˈpɑːrtmənt/ | 我住在一個住宅單位 | 英式 / 美式：香港說 flat；美國說 apartment。
Where's the trash can? | /ˈwerz ðə ˈtræʃ ˈkæn/ | 垃圾桶在哪裏？ | 英式 / 美式：香港說 rubbish bin；美國說 trash can 或 garbage can。
I play soccer on weekends. | /aɪ ˈpleɪ ˈsɑːkər ɑːn ˈwiːkendz/ | 我週末踢足球 | 英式 / 美式：香港說 football；在美國 football 是美式足球，足球叫 soccer。
What's your cell phone number? | /ˈwʌts jʊr ˈsel ˈfoʊn ˈnʌmbər/ | 你的手提電話號碼是甚麼？ | 英式 / 美式：香港說 mobile (phone)；美國說 cell phone，口語直接說 phone。
`,
"字尾發音": `
bag | /ˈbæg/ | 袋 | 字尾的 g 要帶聲，前面的元音稍為拉長。讀成不帶聲的 k 就變成 back。
back | /ˈbæk/ | 背部 / 後面 | 字尾是不帶聲的 k，元音較短。廣東話的字尾 k（例如「六」）只做口形不放氣，英文的 k 最好輕輕放出來。
feed | /ˈfiːd/ | 餵 | 字尾是帶聲的 d，元音 /iː/ 拉長。讀成 t 就變成 feet。
feet | /ˈfiːt/ | 腳（眾數） | 字尾是不帶聲的 t，元音較短。foot 的眾數是 feet，不加 s。
rope | /ˈroʊp/ | 繩 | 雙元音 /oʊ/ 之後還有 p：雙唇合上，再輕輕放開。
robe | /ˈroʊb/ | 長袍 / 浴袍 | 字尾是帶聲的 b，/oʊ/ 讀得比 rope 長。
leaf | /ˈliːf/ | 樹葉 | 字尾是不帶聲的 f。leave 的字尾是帶聲的 v，元音也較長。
cold | /ˈkoʊld/ | 冷的 | 字尾 /ld/ 兩個音都要讀：舌尖先碰上齒後面讀 l，再讀 d。漏了 l 就變成 code。
code | /ˈkoʊd/ | 密碼 / 代碼 | /oʊ/ 之後直接是 d，沒有 l。和 cold 是一對。
list | /ˈlɪst/ | 清單 | 字尾 /st/ 的 t 不能省，不要讀成 "lis"。
friends | /ˈfrendz/ | 朋友（眾數） | 字尾 /ndz/ 三個輔音都要讀，不要讀成 "frens"。眾數的 s 在這裏讀 /z/。
asked | /ˈæskt/ | 問了（ask 的過去式） | 字尾是 /skt/：-ed 在這裏只讀 /t/，不多加音節。不要只讀成 "as"。
months | /ˈmʌnθs/ | 月（眾數） | 字尾 /nθs/ 很難，可以先慢慢讀 month，再加 s。
cats | /ˈkæts/ | 貓（眾數） | 字尾 /ts/ 的 t 和 s 都要讀，不要讀成 "cass"。少了這個音，別人聽不出是眾數。
cards | /ˈkɑːrdz/ | 卡片（眾數） | 字尾 /dz/ 要帶聲。讀成不帶聲就變成 carts（手推車）。
walked | /ˈwɔːkt/ | 走了（walk 的過去式） | -ed 在 k 之後讀 /t/，整個字只有一個音節。少了 /t/，別人聽不出是過去式。
wanted | /ˈwɑːntɪd/ | 想要（want 的過去式） | 只有在 t 或 d 之後，-ed 才多讀一個音節 /ɪd/。其他動詞不要多加音節：enjoyed 不是 "enjoy-ded"。
time | /ˈtaɪm/ | 時間 | 雙元音 /aɪ/ 之後要合上雙唇讀出 m。廣東話沒有「雙元音 + 輔音」的字尾，所以很容易把 m 吞掉。
like | /ˈlaɪk/ | 喜歡 / 好像 | /aɪ/ 之後還有 k，不要讀成 "lai"。
game | /ˈgeɪm/ | 遊戲 / 比賽 | /eɪ/ 要讀足，再合上雙唇讀 m，不要縮短成 "gem"。
nine | /ˈnaɪn/ | 九 | 開頭和字尾都是 n。字尾的 n 不要吞掉，開頭的 n 不要讀成 l。
line | /ˈlaɪn/ | 綫 / 隊伍 | l 開頭，n 收尾。和 nine 只差第一個音。
place | /ˈpleɪs/ | 地方 | 開頭 /pl/ 兩個輔音連在一起，l 不能省，否則變成 pace。
pace | /ˈpeɪs/ | 步伐 / 速度 | p 之後直接是元音，沒有 l。和 place 是一對。
bring | /ˈbrɪŋ/ | 帶來 | 開頭是 /br/，r 不要讀成 l（"bling"），也不要省掉。
present | /ˈpreznt/ | 禮物 / 現在的 | 開頭是 /pr/，r 不能省，不要讀成 "pesent"。字尾的 /nt/ 也要讀出來。
`
};
