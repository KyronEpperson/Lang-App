/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   yue-en: pron = IPA (OALD North American values in the school symbol set) per docs/profiles/yue.md §6 and tools/content/zh/PRON-RULES.md; must match profile.json pronPattern.
   Deck names are FINAL (tools/content/yue/DECKNAMES.md). The last two decks are yue-only (profile §9). Meanings and notes are written Cantonese (docs/briefs/yue-en-cantonese-rewrite.md). */
module.exports = {
"打招呼": `
Hello. | /həˈloʊ/ | 你好 | 最基本嘅問候，咩場合、對咩人都用得。
Hi! | /ˈhaɪ/ | 嗨 / 你好（隨意啲） | 比 Hello 輕鬆親切。喺美國，同事之間都成日講 Hi。
Hey! | /ˈheɪ/ | 喂 / 你好（熟人之間） | 朋友之間用。對陌生人講可能會顯得冇禮貌。
Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ | 早晨 | 中午之前都用得，亦可以簡單講 Morning!
Good afternoon. | /ˈgʊd ˌæftərˈnuːn/ | 你好（下晝見面） | 大約中午 12 點到傍晚 6 點。語氣比較正式，喺商店同公司成日聽到。廣東話一般淨係講「你好」。
Good evening. | /ˈgʊd ˈiːvnɪŋ/ | 你好（夜晚見面） | 夜晚見面嗰陣嘅問候，廣東話一般淨係講「你好」。Good night 只係道別先用。
How are you? | /ˈhaʊ ər ju/ | 你點呀？ | 呢句係打招呼，唔係真係問你近況。輕鬆回一句 Good, thanks. You? 就得。
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/ | 我幾好，多謝。你呢？ | 課本嘅 I'm fine, thank you. 聽落好書面，I'm good 自然得多。
What's up? | /ˈwʌts ˈʌp/ | 最近點呀？/ 有咩事？ | 熟人之間隨口嘅招呼，唔使認真報告近況。一般答 Not much.
Not much. | /ˈnɑːt ˈmʌtʃ/ | 冇乜特別 | What's up? 最常見嘅答法，可以再問返一句 Not much, you?
How's it going? | /ˈhaʊz ɪt ˈgoʊɪŋ/ | 近排點呀？/ 順唔順利？ | How are you? 嘅口語版，可以答 Pretty good!
Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | 好開心識到你 | 只係第一次見面先用。回應：Nice to meet you, too.
Long time no see! | /ˈlɔːŋ ˈtaɪm ˈnoʊ ˈsiː/ | 好耐冇見！ | 一般認為呢句源自中文嘅「好久不見」，英文母語人士都成日講。正式少少：It's been a while.
See you later. | /ˈsiː ju ˈleɪtər/ | 遲啲見 | 就算冇計劃再見面，道別嗰陣都可以隨口講。
Take care. | /ˈteɪk ˈker/ | 保重 | 溫暖嘅道別語，亦成日放喺訊息結尾。
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | 祝你今日開心！ | 店員收錢之後成日講。回一句 You too! 就得。
Bye! | /ˈbaɪ/ | 再見！ | 香港人成日講「拜拜」，但喺英文入面，成年人之間講 Bye-bye 會顯得有啲孩子氣，講 Bye! 就夠。
Good night. | /ˈgʊd ˈnaɪt/ | 晚安 | 只係夜晚道別或者去瞓覺先用。見面打招呼要講 Good evening。night 嘅 n 唔好讀成 l (light)。
`,
"自我介紹": `
My name is Amy. | /maɪ ˈneɪm ɪz ˈeɪmi/ | 我叫 Amy | 日常多數講 I'm Amy. 講全名嗰陣英文名喺前、姓喺後：Amy Chan。name 嘅 n 唔好讀成 l。
Please call me Jay. | /ˈpliːz ˈkɔːl mi ˈdʒeɪ/ | 叫我 Jay 就得 | 想對方用你嘅英文名或者簡稱叫你嗰陣講。好多香港人本身已經有英文名，直接用就得。
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔːl ju/ | 我應該點稱呼你？ | 對方個名唔易讀，或者想知對方嘅暱稱嗰陣好有用。
Where are you from? | /ˈwer ər ju frʌm/ | 你係邊度人？/ 你喺邊度嚟？ | 喺外國最先會畀人問到嘅問題之一。
I'm from Hong Kong. | /aɪm frəm ˌhɑːŋ ˈkɑːŋ/ | 我係香港人 / 我喺香港嚟 | Hong Kong 前面唔加冠詞 the。from 嘅 r 要讀出嚟，唔好讀成 "fom"。
I live in Kowloon. | /aɪ ˈlɪv ɪn ˌkaʊˈluːn/ | 我住喺九龍 | live 嘅 v 要用上排牙輕輕掂住下唇，聲帶振動，唔好讀成 f；元音係短嘅 /ɪ/，讀長咗就變成 leave。
I'm a student. | /aɪm ə ˈstuːdnt/ | 我係學生 | 職業前面一定要加冠詞 a / an。I'm student. ✗ 係最常見嘅錯誤。
What do you do? | /ˈwʌt də ju ˈduː/ | 你做咩工作？ | 問職業嘅標準講法，比 What's your job? 婉轉。
I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | 我喺銀行做嘢 | 公司、地點前面用 at：I work at Google.
I work in marketing. | /aɪ ˈwɜːrk ɪn ˈmɑːrkɪtɪŋ/ | 我做市場推廣 | 範疇、部門前面用 in，同 at（公司）分開。
I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | 我 25 歲 | years 係眾數，字尾嘅 s 要讀出嚟。第一次見面就直接問人年紀可能唔太禮貌。
I'm really into hiking. | /aɪm ˈriːəli ɪntə ˈhaɪkɪŋ/ | 我好鍾意行山 | 講興趣嗰陣，比 My hobby is… 自然得多。
I like watching movies. | /aɪ ˈlaɪk ˈwɑːtʃɪŋ ˈmuːviz/ | 我鍾意睇戲 | like 後面接動作，用 -ing 形式或者 to + 動詞原形。香港學校教 film；美國講 movie。
I've been learning English for a year. | /aɪv bɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ fər ə ˈjɪr/ | 我學咗一年英文 | 由過去一直持續到而家嘅事，用 have been + -ing（現在完成進行式）。廣東話講「學咗一年」，動詞唔會變，英文就要靠動詞形式。
I'm here on vacation. | /aɪm ˈhɪr ɑːn veɪˈkeɪʃn/ | 我嚟度假 | 香港學校教 holiday (I'm here on holiday.)；美國講 vacation。
I'm married. | /aɪm ˈmærid/ | 我結咗婚 | 單身就講 I'm single. 第一次見面最好唔好問人結咗婚未。
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgər ˈbrʌðər/ | 我有個細佬 | 英文唔分「哥哥」同「細佬」，只係用 older / younger brother 分。
`,
"求生英文 1": `
Excuse me. | /ɪkˈskjuːz mi/ | 唔好意思 / 請問 | 叫住人或者請人讓一讓嗰陣用。撞到人之後講 Sorry!
Thank you. | /ˈθæŋk ju/ | 多謝 / 唔該 | 廣東話分「唔該」同「多謝」，英文兩種情況都講 Thank you。th 要將舌尖輕輕放喺上下排牙中間送氣，唔好讀成 "fank you"。
Thanks a lot. | /ˈθæŋks ə ˈlɑːt/ | 多謝晒 | 比 Thank you 輕鬆親切。
You're welcome. | /jʊr ˈwelkəm/ | 唔使客氣 | 口語亦成日講 Sure. / No problem. / Anytime.
No problem. | /ˈnoʊ ˈprɑːbləm/ | 冇問題 / 小事啫 | 人哋多謝你嗰陣好常用嘅回應。problem 嘅 r 同 l 都要讀出嚟。
I'm sorry. | /aɪm ˈsɑːri/ | 對唔住 | 真係道歉先用。輕輕撞到人，講句 Sorry! 就夠。
Yes, please. | /ˈjes ˈpliːz/ | 好呀，唔該 | 用嚟回應 Would you like some water? 呢類提議。
No, thank you. | /ˈnoʊ ˈθæŋk ju/ | 唔使喇，唔該 | 拒絕嗰陣比淨係講 No 有禮貌得多。口語：I'm good, thanks.
Sorry? | /ˈsɑːri/ | 吓？/ 你講咩話？ | 句尾語調向上，意思係「唔該再講多次」。喺美國比 Pardon? 更常用。
Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | 可唔可以講多次？ | 聽唔明就大方問，母語人士之間都成日咁講。
Could you speak more slowly? | /kəd ju ˈspiːk ˈmɔːr ˈsloʊli/ | 可唔可以講慢啲？ | 加 please 更有禮貌。
I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | 我唔明 | 有啲生硬。婉轉啲：Sorry, I didn't quite catch that.
Do you speak Cantonese? | /də ju ˈspiːk ˌkæntəˈniːz/ | 你識唔識講廣東話？ | Do you speak…? 比 Can you speak…? 自然啲、有禮貌啲。Cantonese 嘅重音喺最後一個音節。
I speak a little English. | /aɪ ˈspiːk ə ˈlɪtl ˈɪŋglɪʃ/ | 我識講少少英文 | 美式發音入面，little 中間嘅 t 讀得似輕輕嘅 d。
How do you say this in English? | /ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/ | 呢個用英文點講？ | 指住嘢問，即刻學到新字。留意係 How do you say…?，唔係 How to say…? ✗
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmiːn/ | 呢個係咩意思？ | 指住餐牌、告示牌問。
Can you help me? | /kən ju ˈhelp mi/ | 你可唔可以幫吓我？ | 更有禮貌嘅講法：Could you help me? help 嘅 l 同 p 都要讀出嚟。
`,
"求生英文 2": `
Where's the restroom? | /ˈwerz ðə ˈrestruːm/ | 洗手間喺邊度？ | 香港同英國講 toilet；美國講 restroom / bathroom，toilet 喺美國係指個馬桶。
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | 呢個幾多錢？ | 問幾樣嘢：How much are these?
Is there an ATM around here? | /ɪz ðer ən ˌeɪ tiː ˈem əˈraʊnd ˈhɪr/ | 呢度附近有冇櫃員機？ | 英國亦叫 cash machine。
Can I get the Wi-Fi password? | /kən aɪ ˈget ðə ˈwaɪfaɪ ˈpæswɜːrd/ | 可唔可以話我知 Wi-Fi 密碼？ | 亦可以問 Is there Wi-Fi here?
I'm lost. | /aɪm ˈlɔːst/ | 我蕩失路 | 亦可以攞個地圖出嚟問：Where am I on this map? lost 字尾嘅 st 兩個音都要讀出嚟。
Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | 可唔可以碌卡？ | 八達通同 PayMe 喺外國用唔到，要預備好信用卡。美國差唔多周圍都收信用卡，細舖可能有最低消費。
One moment, please. | /ˈwʌn ˈmoʊmənt ˈpliːz/ | 唔該等一等 | 有禮貌嘅講法，喺商店、電話度成日聽到。
Just a second. | /ˈdʒʌst ə ˈsekənd/ | 等陣 / 等一等 | 口語。再短啲：Just a sec.
No worries. | /ˈnoʊ ˈwɜːriz/ | 冇事 / 唔緊要 | 澳洲、英國特別常用，美國都好常見。
That's okay. | /ˈðæts oʊˈkeɪ/ | 唔緊要（人哋道歉嗰陣） | 人哋同你道歉嗰陣講 That's okay! 或者 Don't worry about it.
Of course. | /əv ˈkɔːrs/ | 當然可以 | 答應人哋嘅請求嗰陣用。用嚟答問題，可能似講緊「使問咩？」，語氣要柔和啲。
I'm not sure. | /aɪm ˈnɑːt ˈʃʊr/ | 我唔太肯定 | 比 I don't know 婉轉。
I have a question. | /aɪ ˈhæv ə ˈkwestʃən/ | 我有個問題 | 上堂、開會嗰陣亦可以講 Can I ask a question?
Can you write it down? | /kən ju ˈraɪt ɪt ˈdaʊn/ | 可唔可以幫我寫低？ | 地址、數字、名聽唔清楚嗰陣最好嘅方法。
Can I take a picture? | /kən aɪ ˈteɪk ə ˈpɪktʃər/ | 可唔可以影相？ | 喺博物館、商店入面先問一句係基本禮貌。
Could you take a picture of us? | /kəd ju ˈteɪk ə ˈpɪktʃər əv əs/ | 可唔可以幫我哋影張相？ | 影完講句 Thank you so much!
After you. | /ˈæftər ˈjuː/ | 你行先 | 喺門口、升降機前面讓人行先嗰陣講。升降機喺香港叫 lift，美國叫 elevator。
Watch out! | /ˈwɑːtʃ ˈaʊt/ | 小心！ | 有危險嗰陣大聲嗌。Look out! 意思一樣。
`,
"問路同交通": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈget tə ðə ˈsʌbweɪ ˈsteɪʃn/ | 地鐵站點去？ | subway 係美國嘅地鐵；香港叫 MTR（港鐵），英國講 underground / tube。喺香港同英國，subway 係行人隧道。
Is it far from here? | /ɪz ɪt ˈfɑːr frəm ˈhɪr/ | 離呢度遠唔遠？ | 美式發音要讀出 far 字尾嘅 r；英式唔讀，兩種都啱。
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔːkɪŋ ˈdɪstəns/ | 行唔行得到？ | 亦可以問 Can I walk there?
Go straight. | /ˈgoʊ ˈstreɪt/ | 一直向前行 | Go straight for two blocks. 美國成日用 block（一個街口嘅距離）講遠近。
Turn left at the corner. | /ˈtɜːrn ˈleft ət ðə ˈkɔːrnər/ | 喺街角轉左 | 喺交通燈嗰度：at the light。left 字尾嘅 ft 要讀出嚟。
It's on your right. | /ɪts ɑːn jʊr ˈraɪt/ | 喺你右手邊 | right 開頭係 r，嘴唇微微收圓，舌尖唔掂上顎；唔好讀成 light 或者 white。
It's across the street. | /ɪts əkrɔːs ðə ˈstriːt/ | 喺馬路對面 | across from… = 喺……對面。
It's next to the bank. | /ɪts ˈnekst tə ðə ˈbæŋk/ | 喺銀行隔籬 | next to 入面兩個 t 連埋一齊，只讀一個；但 next 嘅 /ks/ 唔可以省。
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoʊz ˌdaʊnˈtaʊn/ | 邊條綫去市中心？ | downtown 前面唔加 to。line 字尾嘅 n 要讀出嚟。
Where do I transfer? | /ˈwer də aɪ trænsˈfɜːr/ | 喺邊度轉車？ | 英式講 change：Where do I change?
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgoʊ tə ði ˈerpɔːrt/ | 呢架巴士去唔去機場？ | 元音前面嘅 the 讀 /ði/。
Which stop should I get off at? | /ˈwɪtʃ ˈstɑːp ʃəd aɪ ˈget ˈɔːf æt/ | 我應該喺邊個站落車？ | get off = 落車（巴士、地鐵）。介詞 at 放喺句尾。
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔːstən ˈpliːz/ | 一張去波士頓嘅車飛，唔該 | 目的地前面用 to。
Round trip or one way? | /ˈraʊnd ˈtrɪp ər ˈwʌn ˈweɪ/ | 來回定單程？ | 香港同英國講 Return or single?；美國講 round trip / one way。
Can you take me to this address? | /kən ju ˈteɪk mi tə ˈðɪs ˈædres/ | 唔該車我去呢個地址 | 搭的士嗰陣將手機上面嘅地址畀司機睇，就唔會出錯。的士喺美國叫 taxi 或者 cab。
Could you pull over here? | /kəd ju ˈpʊl ˈoʊvər ˈhɪr/ | 可唔可以喺呢度停車？ | 想落車嗰陣講。Right here is fine. 都得。
How long does it take? | /ˈhaʊ ˈlɔːŋ dəz ɪt ˈteɪk/ | 要幾耐？ | 回答：About 20 minutes.
Is this seat taken? | /ɪz ˈðɪs ˈsiːt ˈteɪkən/ | 呢個位有冇人坐？ | 冇人就會答 No, go ahead. seat 嘅元音係長嘅 /iː/，sit 嘅 /ɪ/ 短而放鬆，兩個字唔好讀成一樣。
`,
"餐廳點餐": `
A table for two, please. | /ə ˈteɪbl fər ˈtuː ˈpliːz/ | 兩位，唔該 | 美國餐廳一般要等侍應帶位。
Do you have a reservation? | /də ju ˈhæv ə ˌrezərˈveɪʃn/ | 有冇訂位？ | 侍應會咁問。回答：Yes, under Chan.
Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | 可唔可以睇吓餐牌？ | menu 嘅重音喺前面。
What do you recommend? | /ˈwʌt də ju ˌrekəˈmend/ | 有咩推介？ | 亦可以問 What's popular here?
I'll have the steak. | /aɪl ˈhæv ðə ˈsteɪk/ | 我要牛扒 | 點菜嘅基本句式：I'll have + 菜名。steak 字尾嘅 k 要輕輕讀出嚟。
Can I get a Coke? | /kən aɪ ˈget ə ˈkoʊk/ | 我要杯可樂 | 可樂一般講 Coke。get a 連讀，美式聽落似 "geda"。
Medium rare, please. | /ˈmiːdiəm ˈrer ˈpliːz/ | 牛扒要三成熟，唔該 | 用嚟答 How would you like your steak? 五成熟係 medium，全熟係 well done。
No onions, please. | /ˈnoʊ ˈʌnjənz ˈpliːz/ | 唔要洋葱，唔該 | 亦可以講 Can I get it without onions?
I'm allergic to peanuts. | /aɪm əˈlɜːrdʒɪk tə ˈpiːnʌts/ | 我對花生敏感 | allergic 嘅重音喺第二個音節。名詞「敏感症」係 allergy。
Is it spicy? | /ɪz ɪt ˈspaɪsi/ | 辣唔辣？ | 怕辣可以講 Not too spicy, please. 想要唔辣嘅就問 Is there anything mild?
Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | 可唔可以畀啲水我哋？ | 美國餐廳嘅冰水一般免費。美式發音入面，water 嘅 t 讀得似輕輕嘅 d。
Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | 樣樣都好好食 | 侍應問 How is everything? 嗰陣咁答。
Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | 唔該埋單 | 香港同英國講 the bill；美國講 the check。美國餐廳一般坐喺位度畀錢。
Can we split the bill? | /kən wi ˈsplɪt ðə ˈbɪl/ | 可唔可以分開埋單？ | 亦講 separate checks。split 開頭三個輔音 /spl/ 連埋一齊，中間唔加元音。
It's on me. | /ɪts ɑːn ˈmiː/ | 我請 | My treat! 意思一樣。
Can I get this to go? | /kən aɪ ˈget ˈðɪs tə ˈgoʊ/ | 呢個可唔可以攞走？ | to go 即係外賣（口語講「攞走」），英式講 take away。食剩想帶走，亦可以講 Can I get a box?
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkluːdɪd/ | 包唔包小費？ | 香港餐廳多數收加一服務費；美國餐廳一般要另外畀 15% 至 20% 小費。
`,
"咖啡店同便利店": `
Can I get an iced Americano? | /kən aɪ ˈget ən ˈaɪst əˌmerɪˈkɑːnoʊ/ | 我要一杯凍美式 | 點飲品最常用 Can I get…? iced 字尾係 /st/，t 好輕，但唔好成個省咗。
What size would you like? | /ˈwʌt ˈsaɪz wəd ju ˈlaɪk/ | 要咩大細？ | 店員會咁問。
Small, please. | /ˈsmɔːl ˈpliːz/ | 細杯，唔該 | 星巴克用 tall / grande / venti。
For here or to go? | /fər ˈhɪr ər tə ˈgoʊ/ | 喺度飲定攞走？ | 英式：Eat in or take away? to go 即係茶餐廳講嘅「攞走」。
Can I get oat milk instead? | /kən aɪ ˈget ˈoʊt ˈmɪlk ɪnˈsted/ | 可唔可以轉燕麥奶？ | instead = 代替。可能要加錢。milk 嘅 l 同 k 都要讀出嚟。
Less ice, please. | /ˈles ˈaɪs ˈpliːz/ | 少冰，唔該 | 唔要冰（「走冰」）：No ice, please.
Decaf, please. | /ˈdiːkæf ˈpliːz/ | 要低咖啡因嘅，唔該 | decaffeinated 嘅簡稱。
Can I get a name for the order? | /kən aɪ ˈget ə ˈneɪm fər ði ˈɔːrdər/ | 請問點稱呼？（寫喺杯上） | 店員要喺杯上面寫名，講你嘅英文名就得，例如 Amy。
Do you need a bag? | /də ju ˈniːd ə ˈbæg/ | 使唔使袋？ | 唔使就講 No, I'm good. bag 字尾嘅 g 要帶聲，唔好讀成 back。
Can I get a receipt? | /kən aɪ ˈget ə rɪˈsiːt/ | 唔該畀張收據我 | receipt 入面嘅 p 唔發音。
Where can I find batteries? | /ˈwer kən aɪ ˈfaɪnd ˈbætəriz/ | 電池喺邊度？ | 問嘢擺喺邊度嘅萬用句。
Do you sell phone chargers? | /də ju ˈsel ˈfoʊn ˈtʃɑːrdʒərz/ | 有冇手機充電器賣？ | 亦可以講 Do you have…?
Can you heat this up? | /kən ju ˈhiːt ˈðɪs ˈʌp/ | 可唔可以幫我叮熱？ | heat this up 要連埋一齊讀。
That's it. | /ˈðæts ˈɪt/ | 就咁多 | 店員問 Anything else? 嗰陣咁答。
Here you go. | /ˈhɪr ju ˈgoʊ/ | 畀你 | 遞錢或者遞嘢嗰陣講。
Keep the change. | /ˈkiːp ðə ˈtʃeɪndʒ/ | 唔使找 | 喺美國搭的士、收外賣嗰陣成日用嚟代替小費。
`,
"購物同付款": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | 我隨便睇吓，唔該 | 店員問 Can I help you find anything? 嗰陣用。
Do you have this in a medium? | /də ju ˈhæv ˈðɪs ɪn ə ˈmiːdiəm/ | 呢件有冇中碼？ | 尺碼：small / medium / large。
Do you have it in black? | /də ju ˈhæv ɪt ɪn ˈblæk/ | 有冇黑色？ | 顏色前面用 in。black 嘅 l 要讀出嚟，唔好讀成 "back"。
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑːn/ | 可唔可以試身？ | try on = 試（衫、鞋）。
Where's the fitting room? | /ˈwerz ðə ˈfɪtɪŋ ˈruːm/ | 試身室喺邊度？ | 英國講 changing room。
It's too big. | /ɪts ˈtuː ˈbɪg/ | 太大喇 | 太細：It's too small.
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | 有啲緊 | 太鬆：It's a bit loose.
Is this on sale? | /ɪz ˈðɪs ɑːn ˈseɪl/ | 呢件有冇減價？ | on sale = 減價；for sale = 出售。好易搞亂。
Can you give me a discount? | /kən ju ˈgɪv mi ə ˈdɪskaʊnt/ | 可唔可以平啲？ | 美國一般商店唔講價，只有喺跳蚤市場或者買二手嘢先會講價。
I'll take it. | /aɪl ˈteɪk ɪt/ | 我要呢件 | 決定買嗰陣講。兩件或以上：I'll take them.
Cash or card? | /ˈkæʃ ər ˈkɑːrd/ | 現金定信用卡？ | 畀錢嗰陣一定會聽到。
Do you take Apple Pay? | /də ju ˈteɪk ˈæpl ˈpeɪ/ | 可唔可以用 Apple Pay？ | take = 接受（某種付款方式）。八達通同 PayMe 喺外國一般用唔到。
Can I get a refund? | /kən aɪ ˈget ə ˈriːfʌnd/ | 可唔可以退錢？ | 記住保留收據。
I'd like to exchange this. | /aɪd ˈlaɪk tu ɪksˈtʃeɪndʒ ˈðɪs/ | 我想換呢件 | 補充原因：It's the wrong size.
Can you gift wrap it? | /kən ju ˈgɪft ˈræp ɪt/ | 可唔可以幫我包成禮物？ | wrap 嘅 w 唔發音。
Does that include tax? | /dəz ˈðæt ɪnˈkluːd ˈtæks/ | 包唔包稅？ | 香港冇銷售稅；美國嘅標價通常未包稅，畀錢嗰陣會多咗少少。
`,
"數字、時間同日期": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | 而家幾點？ | 問陌生人：Excuse me, do you have the time? time 字尾嘅 m 要合埋嘴讀出嚟。
It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ | 三點半 | 香港學校教嘅 half past three 都啱。three 開頭係 th，唔好讀成 free。
It's a quarter to five. | /ɪts ə ˈkwɔːrtər tə ˈfaɪv/ | 四點四十五分（四點九） | quarter = 15 分鐘（廣東話叫「三個字」）。亦可以講 four forty-five。
At noon | /ət ˈnuːn/ | 中午 12 點 | 午夜係 midnight，比 12 a.m. / 12 p.m. 更加唔易搞錯。
What's the date today? | /ˈwʌts ðə ˈdeɪt təˈdeɪ/ | 今日幾號？ | 問星期幾：What day is it today? 美國寫日期先月後日，5/3 係 5 月 3 號；香港同英國先日後月。
It's May 3rd. | /ɪts ˈmeɪ ˈθɜːrd/ | 5 月 3 號 | 日期用序數詞讀：first, second, third, fourth… 樓層都用序數詞：美國嘅 first floor 係香港嘅地下 (G/F)，second floor 先至係香港嘅一樓。
My birthday is in October. | /maɪ ˈbɜːrθdeɪ ɪz ɪn ɑːkˈtoʊbər/ | 我生日喺 10 月 | 月份前面用 in，具體日子前面用 on：on October 5th。
On Monday | /ɑːn ˈmʌndeɪ/ | （喺）星期一 | 星期前面用 on。逢星期一：on Mondays。
Next weekend | /ˈnekst ˈwiːkend/ | 下個週末 | next / last / this 前面唔加介詞。
The day after tomorrow | /ðə ˈdeɪ æftər təˈmɑːroʊ/ | 後日 | 前日：the day before yesterday。
Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | 13 定 30？ | 13 嘅重音喺後面（-teen 拉長，字尾有 n），30 嘅重音喺前面。聽價錢嗰陣一定要確認清楚。
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlərz/ | 15 蚊 | $15.50 讀做 fifteen fifty。港幣同美金都叫 dollars，要分清楚就講 Hong Kong dollars / US dollars。眾數字尾嘅 s 要讀出嚟。
Two hundred and fifty | /ˈtuː ˈhʌndrəd ənd ˈfɪfti/ | 二百五十 (250) | 美國成日省略 and：two hundred fifty。
Ten thousand | /ˈten ˈθaʊznd/ | 一萬 (10,000) | 英文冇「萬」呢個單位，數字每三個位一組：10 thousand。
One million | /ˈwʌn ˈmɪljən/ | 一百萬 (1,000,000) | 一千萬 = ten million，一億 = one hundred million。
Twice a week | /ˈtwaɪs ə ˈwiːk/ | 一個星期兩次 | once（一次）、twice（兩次）、three times（三次）。
In ten minutes | /ɪn ˈten ˈmɪnɪts/ | 10 分鐘之後 | 講將來時間嘅 in = ……之後，唔係「10 分鐘之內」。minutes 字尾嘅 /ts/ 要讀出嚟。
`,
"閒談": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwiːkend/ | 週末過得點呀？ | 星期一必問。用一兩句簡單答，再問返對方。
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | 幾輕鬆 | pretty 喺度係「幾、相當」，唔係「靚」。
Any plans for the weekend? | /ˈeni ˈplænz fər ðə ˈwiːkend/ | 週末有冇咩計劃？ | 星期五必問。冇計劃就講 Not really, just relaxing.
Nice weather today, huh? | /ˈnaɪs ˈweðər təˈdeɪ ˈhʌ/ | 今日天氣幾好喎 | 天氣係同邊個都可以傾嘅最安全話題。廣東話嘅「食咗飯未？」喺英文唔係問候語。
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | 今日凍到震 | 熱嘅時候：It's boiling! 或者 It's so hot!
How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | 你喺度住咗幾耐？ | 回答：About three years. lived 字尾嘅 /vd/ 要讀出嚟。
Have you been to Hong Kong? | /həv ju bɪn tə ˌhɑːŋ ˈkɑːŋ/ | 你去過香港未？ | 問經歷用 have been to。廣東話嘅「去過」喺度對應現在完成式。
What do you do for fun? | /ˈwʌt də ju ˈduː fər ˈfʌn/ | 你平時有咩消遣？ | 比 What's your hobby? 自然得多。
Have you seen any good shows lately? | /həv ju ˈsiːn ˈeni ˈgʊd ˈʃoʊz ˈleɪtli/ | 最近有冇睇過啲好睇嘅劇集？ | show = 劇集、綜藝等節目。
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | 聽落好好玩 | 回應對方嗰陣用。That sounds great! 都好好。
Same here. | /ˈseɪm ˈhɪr/ | 我都係 | 口語直接講 Same!
Me neither. | /ˈmiː ˈniːðər/ | 我都唔（係／會） | 附和否定句：I don't like it. → Me neither.（唔可以講 Me too）
I know, right? | /aɪ ˈnoʊ ˈraɪt/ | 係囉！ | 非常同意嗰陣嘅口語講法。
Oh, really? | /ˈoʊ ˈriːəli/ | 哦，真㗎？ | 表示有興趣嘅回應，句尾向上。
By the way | /baɪ ðə ˈweɪ/ | 係呢 / 順便講 | 轉話題嗰陣用。訊息入面寫 BTW。
How's work? | /ˈhaʊz ˈwɜːrk/ | 份工點呀？ | 熟人之間嘅問候，可以答 Busy, but good! 人工、租金、年紀、體重都唔適合攞嚟閒談。
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/ | 同你傾偈好開心 | 自然咁結束對話嗰陣講。
`,
"情緒同反應": `
I'm so happy for you! | /aɪm ˈsoʊ ˈhæpi fər ju/ | 真係替你開心！ | 對方有好事嗰陣講。
Congratulations! | /kənˌgrætʃəˈleɪʃnz/ | 恭喜！ | 一定要加 -s，字尾嘅 /nz/ 都要讀出嚟。簡稱 Congrats!
That's awesome! | /ˈðæts ˈɔːsəm/ | 太好喇！ | 美國人極常用嘅反應。
No way! | /ˈnoʊ ˈweɪ/ | 唔係嘛！ | 好驚訝嗰陣講。亦可以表示拒絕：No way, I'm not doing that.
Seriously? | /ˈsɪriəsli/ | 真㗎？/ 認真？ | 睇語氣，可以表示驚訝，亦可以表示唔耐煩。
I'm so tired. | /aɪm ˈsoʊ ˈtaɪərd/ | 我好攰 | 攰到死：I'm exhausted.
I'm stressed out. | /aɪm ˈstrest ˈaʊt/ | 我好大壓力 | 比 I have stress 自然。
I'm bored. | /aɪm ˈbɔːrd/ | 我好悶 | 留意：I'm boring 嘅意思係「我係個好悶嘅人」。
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | 我好興奮 / 好期待 | 有值得期待嘅事嗰陣講。-ed 形容詞表示自己嘅感受。
I'm nervous. | /aɪm ˈnɜːrvəs/ | 我好緊張 | 面試、演講之前。安慰人：Don't be nervous.
That's too bad. | /ˈðæts ˈtuː ˈbæd/ | 真係可惜 | 輕微嘅遺憾。嚴重嘅事用下一句。
I'm sorry to hear that. | /aɪm ˈsɑːri tə ˈhɪr ˈðæt/ | 聽到咁嘅消息我好難過 | 唔係道歉，而係安慰。sorry 喺度係「遺憾、難過」。
What a relief! | /ˈwʌt ə rɪˈliːf/ | 總算放心喇！ | 同 Phew! 一齊講更自然。
Oh my gosh! | /ˈoʊ maɪ ˈgɑːʃ/ | 天呀！ | Oh my God 嘅婉轉講法。訊息入面寫 OMG。
I'm upset. | /aɪm ʌpˈset/ | 我心入面好唔舒服 | 介乎嬲同傷心之間嘅感覺。
That's so annoying. | /ˈðæts ˈsoʊ əˈnɔɪɪŋ/ | 真係煩 | 當面同人講 You're annoying 語氣好重。
I can't wait! | /aɪ ˈkænt ˈweɪt/ | 等唔切喇！ | 字面意思係「冇辦法再等」，表示非常期待。美式 can't 嘅元音係 /æ/，字尾嘅 t 好輕，要靠重音聽出否定。
It's not a big deal. | /ɪts ˈnɑːt ə ˈbɪg ˈdiːl/ | 冇咩大不了 | 對方過意唔去嗰陣，用嚟令對方放心。
`,
"讚美同好感": `
You look great! | /ju ˈlʊk ˈgreɪt/ | 你今日好精神！ | 稱讚外表用 You look…，熟人之間好自然。
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuːz/ | 你對鞋好靚 | love = 非常鍾意。對陌生人都可以隨口讚一句。
That color looks good on you. | /ˈðæt ˈkʌlər ˈlʊks ˈgʊd ɑːn ju/ | 呢個顏色好襯你 | look good on + 人 = 某人着起嚟好睇。美式串法係 color，香港學校教嘅英式串法係 colour。
You have a great smile. | /ju ˈhæv ə ˈgreɪt ˈsmaɪl/ | 你笑起嚟好好睇 | 熟咗之後先用嘅溫暖讚美。
You're so funny. | /jʊr ˈsoʊ ˈfʌni/ | 你真係好搞笑 | funny = 好笑嘅；fun = 令人開心、好玩嘅。
Great job! | /ˈgreɪt ˈdʒɑːb/ | 做得好！ | 職場、學校都用得。Nice work! 都一樣。
I'm proud of you. | /aɪm ˈpraʊd əv ju/ | 我為你驕傲 | 對屋企人、朋友講，上司都會對下屬講。
You did it! | /ju ˈdɪd ɪt/ | 你做到喇！ | 對達成目標嘅人講。
Your Cantonese is really good! | /jʊr ˌkæntəˈniːz ɪz ˈriːəli ˈgʊd/ | 你嘅廣東話講得真好！ | 對學廣東話嘅外國朋友講，對方會好開心。Cantonese 嘅重音喺最後一個音節。
You have good taste. | /ju ˈhæv ˈgʊd ˈteɪst/ | 你好有品味 | 讚人衣着、音樂、家居佈置嘅品味。
I really enjoyed spending time with you. | /aɪ ˈriːəli ɪnˈdʒɔɪd ˈspendɪŋ ˈtaɪm wɪð ju/ | 同你一齊好開心 | 約會、聚會完嘅時候講。enjoyed 字尾只加一個 /d/，唔好多加音節。
Do you want to grab coffee sometime? | /də ju ˈwɑːnt tə ˈgræb ˈkɔːfi ˈsʌmtaɪm/ | 遲啲一齊飲杯咖啡好唔好？ | want to 喺口語讀做 wanna。grab = 隨便食啲、飲啲嘢。
I miss you. | /aɪ ˈmɪs ju/ | 我掛住你 | 對分隔兩地嘅人講，屋企人、朋友都可以。
You mean a lot to me. | /ju ˈmiːn ə ˈlɑːt tə mi/ | 你對我好重要 | 對朋友、伴侶表達真心嗰陣講。
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvər/ | 你真係救咗我一命！ | 就算只係小忙，都可以誇張啲咁表達謝意。
You made my day! | /ju ˈmeɪd maɪ ˈdeɪ/ | 你令我今日好開心！ | 收到窩心嘅說話或者禮物嗰陣講。
That's very kind of you. | /ˈðæts ˈveri ˈkaɪnd əv ju/ | 你真係好好 | 得到幫助或者稱讚嗰陣有禮貌咁回應。
`,
"工作同電郵": `
I hope this email finds you well. | /aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/ | 希望你一切都好 | 正式電郵嘅開頭問候。輕鬆啲：I hope you're doing well. 美式電郵比香港寫字樓常見嘅英式寫法短，亦隨意啲。
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu ˈæsk əbaʊt ðə ˈskedʒuːl/ | 我寫呢封電郵係想問吓時間表 | 第一句就講明來意：I'm writing to + 目的。
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔːrt/ | 我已經附上報告 | Please find attached… 更正式，亦比較生硬。
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndər əbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | 提提你聽日嘅會議 | 婉轉咁催人嘅講法。
Let me know if you have any questions. | /ˈlet mi ˈnoʊ ɪf ju ˈhæv ˈeni ˈkwestʃənz/ | 有咩問題隨時話我知 | 電郵結尾最常用嘅一句。
Could you send me the file by Friday? | /kəd ju ˈsend mi ðə ˈfaɪl baɪ ˈfraɪdeɪ/ | 可唔可以喺星期五或之前將個檔案傳畀我？ | by = 喺……或之前（期限）；until = 一直到……
Sorry for the late reply. | /ˈsɑːri fər ðə ˈleɪt rɪˈplaɪ/ | 唔好意思，遲咗回覆 | 亦可以講 Thanks for your patience.
Thanks for getting back to me. | /ˈθæŋks fər ˈgetɪŋ ˈbæk tə mi/ | 多謝你嘅回覆 | get back to = 回覆、再聯絡。
Best regards, | /ˈbest rɪˈgɑːrdz/ | 祝好（電郵結尾） | 一般電郵用 Best regards 就得。Yours faithfully / Yours sincerely 比較正式，多數用喺書信。熟啲：Best, / Thanks,
Let's schedule a meeting. | /ˈlets ˈskedʒuːl ə ˈmiːtɪŋ/ | 我哋約個時間開會啦 | schedule 美式讀 /ˈskedʒuːl/，英式讀 /ˈʃedjuːl/。
I'm running late. | /aɪm ˈrʌnɪŋ ˈleɪt/ | 我會遲少少到 | 喺路上預先通知：I'll be there in 10.
Can we push the meeting to 3? | /kən wi ˈpʊʃ ðə ˈmiːtɪŋ tə ˈθriː/ | 個會可唔可以延到 3 點？ | 提早用 move up：Can we move it up to 1?
I'll get back to you. | /aɪl ˈget ˈbæk tə ju/ | 我確認咗再覆你 | 唔可以即刻答覆嗰陣，用嚟爭取時間。
Can you walk me through it? | /kən ju ˈwɔːk mi θruː ɪt/ | 可唔可以一步步解釋畀我聽？ | walk through = 一步一步講解。
Let's touch base next week. | /ˈlets ˈtʌtʃ ˈbeɪs ˈnekst ˈwiːk/ | 我哋下個星期再傾吓 | 意思係簡單交代吓進度。
What's the deadline? | /ˈwʌts ðə ˈdedlaɪn/ | 幾時截止？ | When is this due? 意思一樣。
I'm working from home today. | /aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/ | 我今日喺屋企做嘢 | 縮寫 WFH。
I'm off tomorrow. | /aɪm ˈɔːf təˈmɑːroʊ/ | 我聽日放假 | 請假：I'm taking a day off tomorrow.
Thanks for all your hard work. | /ˈθæŋks fər ˈɔːl jʊr ˈhɑːrd ˈwɜːrk/ | 辛苦晒 / 多謝你嘅付出 | 廣東話嘅「辛苦晒」喺英文冇完全對應嘅講法。放工道別直接講 See you tomorrow! 就得。
`,
"電話同短訊縮寫": `
Hello, this is Amy. | /həˈloʊ ˈðɪs ɪz ˈeɪmi/ | 喂，我係 Amy | 打電話嗰陣唔講 I'm Amy，而係講 This is Amy。
Can I speak to Mr. Chan? | /kən aɪ ˈspiːk tə ˈmɪstər ˈtʃæn/ | 請問陳生喺唔喺度？ | 稱謂後面接姓：Mr. Chan，唔係 Mr. 加名。更有禮貌：May I speak to…?
Who's calling, please? | /ˈhuːz ˈkɔːlɪŋ ˈpliːz/ | 請問邊位？ | 聽電話嗰個問。
Hold on a second. | /ˈhoʊld ˈɑːn ə ˈsekənd/ | 唔該等等 | 打電話或者講嘢嗰陣請對方等一等。hold 字尾嘅 /ld/ 要讀出嚟。
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ ˈʌp/ | 唔好意思，收得唔好，聽唔清楚 | break up =（電話聲音）斷斷續續。亦有「分手」嘅意思。
Can I call you back? | /kən aɪ ˈkɔːl ju ˈbæk/ | 我遲啲再打畀你得唔得？ | 忙嘅時候：I'm in a meeting. Can I call you back?
I'll text you. | /aɪl ˈtekst ju/ | 我發訊息畀你 | 美國將傳短訊、傳訊息都叫 text。text 字尾嘅 /kst/ 三個輔音都要讀。
I'm on my way. | /aɪm ɑːn maɪ ˈweɪ/ | 我嚟緊喇 | 訊息入面寫 OMW。
LOL | /ˌel oʊ ˈel/ | 哈哈 (laughing out loud) | 唔係真係大笑，就好似隨手打嘅「哈哈」。
BRB | /ˌbiː ɑːr ˈbiː/ | 即刻返 (be right back) | 傾偈、打機嗰陣暫嗰陣走開用。
BTW | /ˌbiː tiː ˈdʌbəljuː/ | 係呢 (by the way) | 轉話題嗰陣用，就好似傾偈嗰陣講「順便講」。
TBH | /ˌtiː biː ˈeɪtʃ/ | 老實講 (to be honest) | 放喺句頭或者句尾都得。
IDK | /ˌaɪ diː ˈkeɪ/ | 唔知 (I don't know) | 成日寫成細楷 idk。
OMG | /ˌoʊ em ˈdʒiː/ | 天呀 (oh my God) | 口語都會直接講 O-M-G!
ASAP | /ˌeɪ es eɪ ˈpiː/ /ˈeɪsæp/ | 盡快 (as soon as possible) | 職場常用，但對上司最好畀個具體日期，更有禮貌。
TTYL | /ˌtiː tiː waɪ ˈel/ | 遲啲再傾 (talk to you later) | 結束傾偈嗰陣用。香港人喺英文訊息句尾加嘅 la、lor、ar 係本地傾偈習慣，同外國人傾就唔使加。
NVM | /ˌen viː ˈem/ | 冇嘢喇，算啦 (never mind) | 收返啱啱嘅問題嗰陣用。
FYI | /ˌef waɪ ˈaɪ/ | 供你參考 (for your information) | 工作電郵、即時通訊入面好常用。
`,
"旅行（機場同酒店）": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔːrt/ | 呢本係我嘅護照 | 辦登機手續、過入境檢查嗰陣遞過去講。
I'm here for sightseeing. | /aɪm ˈhɪr fər ˈsaɪtsiːɪŋ/ | 我嚟觀光 | 用嚟答入境問題 What's the purpose of your visit?
I'm staying for a week. | /aɪm ˈsteɪɪŋ fər ə ˈwiːk/ | 我留一個星期 | 用嚟答 How long are you staying?
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ ət ðə ˈhɪltən/ | 我住希爾頓酒店 | 用嚟答 Where are you staying?
Window or aisle? | /ˈwɪndoʊ ər ˈaɪl/ | 窗口位定走廊位？ | aisle 嘅 s 唔發音。
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsiːt ˈpliːz/ | 我想要走廊位，唔該 | 窗口位：a window seat。
Where is the baggage claim? | /ˈwer ɪz ðə ˈbægɪdʒ ˈkleɪm/ | 行李認領處喺邊度？ | 英國講 baggage reclaim。claim 嘅 l 同字尾嘅 m 都要讀出嚟。
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | 我啲行李唔見咗 | luggage 係不可數名詞，冇眾數：a piece of luggage。
I have a reservation under Chan. | /aɪ ˈhæv ə ˌrezərˈveɪʃn ʌndər ˈtʃæn/ | 我用「陳」呢個姓訂咗房 | under + 訂房人嘅姓名。講姓就得，有需要就逐個字母串出嚟：C-H-A-N。
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃekaʊt/ | 幾點退房？ | 想遲啲走：Can I get a late check-out?
Can I check in early? | /kən aɪ ˈtʃek ˈɪn ˈɜːrli/ | 可唔可以早啲入住？ | check in 要連讀。
Is breakfast included? | /ɪz ˈbrekfəst ɪnˈkluːdɪd/ | 包唔包早餐？ | breakfast 讀 /ˈbrekfəst/，唔係 break + fast。
The air conditioner isn't working. | /ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/ | 冷氣壞咗 | 口語簡稱 AC。
Could I get some extra towels? | /kəd aɪ ˈget ˈsʌm ˈekstrə ˈtaʊəlz/ | 可唔可以多畀幾條毛巾我？ | could I 要連讀。towels 係眾數，字尾嘅 /z/ 要讀出嚟。
Can you hold my bags until 3? | /kən ju ˈhoʊld maɪ ˈbægz əntɪl ˈθriː/ | 可唔可以幫我保管行李到 3 點？ | 退房之後寄存行李。hold = 代為保管。
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈleɪd/ | 我班機延誤咗 | 取消係 canceled（英式串法 cancelled）。flight 嘅 l 要讀出嚟，唔好讀成 fight。
Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | 12 號閘口喺邊度？ | 英文將號碼放喺後面：gate 12、room 305。
Do I need to take my laptop out? | /də aɪ ˈniːd tə ˈteɪk maɪ ˈlæptɑːp ˈaʊt/ | 使唔使將手提電腦攞出嚟？ | 過保安檢查嗰陣問。
`,
"醫院同緊急情況": `
Help! | /ˈhelp/ | 救命！ | 緊急嗰陣大聲嗌。
Call 911! | /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/ | 快啲打 911！ | 美國嘅緊急電話係 911（讀做 nine one one）；香港同英國係 999。
I need a doctor. | /aɪ ˈniːd ə ˈdɑːktər/ | 我要睇醫生 | 情況緊急：I need an ambulance.
I don't feel well. | /aɪ ˈdoʊnt ˈfiːl ˈwel/ | 我唔係幾舒服 | 最常用嘅講法。
I have a headache. | /aɪ ˈhæv ə ˈhedeɪk/ | 我頭痛 | 痛嘅部位 + ache：stomachache, toothache。headache 係可數名詞，前面要加冠詞 a。
I have a fever. | /aɪ ˈhæv ə ˈfiːvər/ | 我發燒 | fever 中間嘅 v 要振動聲帶，唔好讀成 f 或者 w。
My stomach hurts. | /maɪ ˈstʌmək ˈhɜːrts/ | 我肚痛 | 部位 + hurts。hurts 字尾嘅 /ts/ 要讀出嚟。
I have a sore throat. | /aɪ ˈhæv ə ˈsɔːr ˈθroʊt/ | 我喉嚨痛 | throat 係喉嚨，唔係頸 (neck)。開頭係 th 加 r，唔好讀成 "froat"。
I feel dizzy. | /aɪ ˈfiːl ˈdɪzi/ | 我頭暈 | 想嘔：I feel sick. / I feel nauseous. dizzy 中間係帶聲嘅 /z/，唔係 /s/。
I sprained my ankle. | /aɪ ˈspreɪnd maɪ ˈæŋkl/ | 我扭傷咗腳眼 | sprain = 扭傷。手腕係 wrist。
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr ˈhɪr/ | 呢度附近有冇藥房？ | 美國亦叫 drugstore（例如 CVS）；英國講 chemist。
Do I need a prescription? | /də aɪ ˈniːd ə prɪˈskrɪpʃn/ | 使唔使醫生處方？ | 喺美國，唔使處方都買得到嘅藥叫 over-the-counter。
I lost my wallet. | /aɪ ˈlɔːst maɪ ˈwɑːlɪt/ | 我唔見咗銀包 | 唔見咗手機就講 phone。失物認領處係 lost and found。
Someone stole my phone. | /ˈsʌmwʌn ˈstoʊl maɪ ˈfoʊn/ | 有人偷咗我部手機 | stole 係 steal（偷）嘅過去式。
Where is the police station? | /ˈwer ɪz ðə pəˈliːs ˈsteɪʃn/ | 警署喺邊度？ | police 嘅重音喺後面。
I need to contact my consulate. | /aɪ ˈniːd tə ˈkɑːntækt maɪ ˈkɑːnsələt/ | 我要聯絡我嘅領事館 | 唔見咗護照嗰陣一定用得着。consulate 係領事館，embassy 係大使館。
I have travel insurance. | /aɪ ˈhæv ˈtrævl ɪnˈʃʊrəns/ | 我買咗旅遊保險 | 去醫療費用貴嘅國家，一定要預先買。
`,
"片語動詞": `
pick up | /ˈpɪk ˈʌp/ | （揸車）接 / 執起 | I'll pick you up at 7. 代名詞 (you, it) 放喺中間。
give up | /ˈgɪv ˈʌp/ | 放棄 | Don't give up! 放棄做某樣嘢用 -ing：give up smoking。
figure out | /ˈfɪgjər ˈaʊt/ | 搞清楚 / 諗到辦法 | I can't figure out this app.（我搞唔明呢個 app 點用）
find out | /ˈfaɪnd ˈaʊt/ | 發現 / 得知 | 指打聽到消息。figure out 係用腦諗辦法解決問題。
look for | /ˈlʊk fɔːr/ | 搵 | I'm looking for my keys. 搵到就用 find。
look after | /ˈlʊk ˈæftər/ | 照顧 / 睇住 | Can you look after my cat? 美國亦成日講 take care of。
look forward to | /ˈlʊk ˈfɔːrwərd tuː/ | 期待 | to 後面接名詞或者 -ing：I'm looking forward to seeing you. 唔可以接動詞原形。
run out of | /ˈrʌn ˈaʊt əv/ | 用晒 | 用晒嘅嘢放喺 of 後面：We ran out of milk.（啲牛奶飲晒）
turn on | /ˈtɜːrn ˈɑːn/ | 開（電器） | 「開燈」要講 turn on the light，唔講 open the light ✗。代名詞放中間：Turn it on.
turn off | /ˈtɜːrn ˈɔːf/ | 熄 / 閂（電器） | 「熄燈」、「閂燈」都唔講 close the light ✗。代名詞放中間：Turn it off. (turn off it ✗)
turn down | /ˈtɜːrn ˈdaʊn/ | 拒絕 / 校細（音量） | 兩個意思都好常用：She turned down the offer. / Turn it down!
put off | /ˈpʊt ˈɔːf/ | 押後 / 拖延 | 日常口語比 postpone 常用得多：Stop putting it off!
show up | /ˈʃoʊ ˈʌp/ | 出現 / 到場 | 指人到咗現場：He didn't show up to the party.（佢冇嚟個派對）
hang out | /ˈhæŋ ˈaʊt/ | 一齊出去玩 / 消磨時間 | 同朋友出去玩用 hang out，唔用 play（play 多數用喺細路、遊戲、運動）。
check out | /ˈtʃek ˈaʊt/ | 睇吓 / 查吓 | Check out this video! 亦有「退房」嘅意思。
work out | /ˈwɜːrk ˈaʊt/ | 做運動 / 順利解決 | 去健身室做運動成日講 work out：I work out every day. / It'll work out.（啲嘢會好返嘅）
come up with | /ˈkʌm ˈʌp wɪð/ | 諗出（主意） | 諗出主意、藉口、辦法：She came up with a great idea.
get along with | /ˈget əˈlɔːŋ wɪð/ | 同……相處得好 | 關係好：I get along with my coworkers.（我同同事相處得好好）
calm down | /ˈkɑːm ˈdaʊn/ | 冷靜啲 | calm 嘅 l 唔發音。對嬲緊嘅人咁講，可能會令對方更嬲。
set up | /ˈset ˈʌp/ | 安裝 / 設定 / 安排 | 安裝器材、準備會議等等：Can you help me set up my printer?
break up | /ˈbreɪk ˈʌp/ | 分手 | They broke up last month. 同邊個分手：break up with。
fill out | /ˈfɪl ˈaʊt/ | 填（表格） | Please fill out this form. 英式講 fill in。
grow up | /ˈgroʊ ˈʌp/ | 長大 | 講喺邊度大：I grew up in Kowloon.（我喺九龍大）
wake up | /ˈweɪk ˈʌp/ | 醒 | 醒過嚟係 wake up，起身係 get up。
`,
"發音易錯": `
rice | /ˈraɪs/ | 米 / 飯 | r：嘴唇微微收圓，舌尖向後捲，唔掂口腔任何地方。讀成 l 就變成 lice，亦唔好讀成 w。
lice | /ˈlaɪs/ | 蝨乸 | l：舌尖頂住上排牙後面再放開。將 I like rice 講成 lice 就尷尬喇。
right | /ˈraɪt/ | 右邊 / 啱嘅 | r 開頭，舌尖唔掂上顎。同 light 分清楚，亦唔好讀成 white。
light | /ˈlaɪt/ | 光 / 燈 / 輕嘅 | l 開頭，舌尖頂住上排牙後面。廣東話口語成日將 n 讀成 l（例如「你」），英文就要分清楚：light 唔係 night。
fan | /ˈfæn/ | 風扇 / 粉絲 | /æ/ 嘴要擘大，嘴角向兩邊拉；擘得唔夠就似 "fen"。字尾嘅 n 要讀出嚟。
pan | /ˈpæn/ | 平底鑊 | 同 pen 分清楚：pan 嘅 /æ/ 嘴擘得比 pen 嘅 /e/ 大。
coffee | /ˈkɔːfi/ | 咖啡 | 美式嘅第一個元音係 /ɔː/，英式短啲。重音喺前面，第二個音節輕而短。
copy | /ˈkɑːpi/ | 影印 / 副本 | 美式嘅元音係 /ɑː/，嘴擘開，唔收圓。中間係 p，同 coffee 嘅 f 分清楚。
think | /ˈθɪŋk/ | 諗 / 認為 | /θ/：舌尖輕輕放喺上下排牙中間送氣。讀成 f 就變成 "fink"。字尾嘅 /ŋk/ 都要讀出嚟。
sink | /ˈsɪŋk/ | 洗手盆（鋅盆）/ 沉 | 開頭係 s，舌尖喺牙齒後面。同 think 係一對。
three | /ˈθriː/ | 三 | th 加 r：舌尖先放喺上下排牙中間，再向後捲。讀成 f 就變成 free，讀成 t 就似 tree。
tree | /ˈtriː/ | 樹 | /tr/ 連埋一齊讀，中間唔加元音，r 亦唔可以省。
this | /ˈðɪs/ | 呢個 | 帶聲嘅 /ð/：舌尖放喺上下排牙中間，聲帶振動，唔好讀成 d ("dis")。
very | /ˈveri/ | 非常 | v：上排牙輕輕掂住下唇，聲帶振動。唔好讀成 w (wary)。
berry | /ˈberi/ | 莓 / 漿果 | b：上下唇合埋再放開。同 very 分清楚。
vote | /ˈvoʊt/ | 投票 | v 開頭，唔係 w，亦唔係 b。字尾嘅 t 輕輕收住。
boat | /ˈboʊt/ | 船 | b 開頭。雙元音 /oʊ/ 之後仲有 t，唔好吞咗個 t。
walk | /ˈwɔːk/ | 行路 | l 唔發音，元音係嘴擘開嘅 /ɔː/，字尾嘅 k 要讀出嚟。
work | /ˈwɜːrk/ | 工作 / 做嘢 | 美式係捲舌嘅 /ɜːr/。同 walk 係好易搞亂嘅一對。
beach | /ˈbiːtʃ/ | 沙灘 | /iː/ 係長音，嘴角向兩邊拉緊。讀成短而放鬆嘅 /ɪ/ 會變成鬧人嘅字。
leave | /ˈliːv/ | 離開 | 長音 /iː/，字尾嘅 v 帶聲。同短音嘅 live（住）分清楚。
live | /ˈlɪv/ | 住 / 生活 | 短而放鬆嘅 /ɪ/。字尾嘅 v 要振動聲帶，唔好讀成 f。
banana | /bəˈnænə/ | 香蕉 | 重音喺中間，前後兩個 a 都弱讀成 /ə/。廣東話每個音節一樣重，英文唔係。
hotel | /hoʊˈtel/ | 酒店 | 重音喺後面嘅 tel。字尾嘅 l 舌尖要掂上去，唔好讀成元音。
milk | /ˈmɪlk/ | 牛奶 | l 之後緊接 k：舌尖先掂上排牙後面，再輕輕讀出 k，兩個音都唔可以省。
McDonald's | /məkˈdɑːnldz/ | 麥當勞 | 重音喺 Don，Mc 弱讀成 /mək/。照中文譯名「麥當勞」嘅節奏講，外國人好難聽得明。
night | /ˈnaɪt/ | 夜晚 | n：舌尖頂住上排牙後面，氣由鼻出。讀成 l 就變成 light。
know | /ˈnoʊ/ | 知道 | k 唔發音。n 開頭，讀成 l 就變成 low。
low | /ˈloʊ/ | 低嘅 | l 開頭，舌尖頂住上排牙後面，氣由脷兩邊出。
free | /ˈfriː/ | 自由嘅 / 免費嘅 | f：上排牙輕輕掂住下唇。同 three 係一對：three 嘅舌尖喺上下排牙中間。
they | /ˈðeɪ/ | 佢哋 | /ð/：舌尖放喺上下排牙中間，聲帶振動。讀成 d 就變成 day。
day | /ˈdeɪ/ | 日子 / 一日 | d 開頭，舌尖喺上排牙後面，唔伸出嚟。同 they 係一對。
wary | /ˈweri/ | 謹慎嘅 | w：嘴唇收圓，唔掂牙齒。同 very 分清楚。
vest | /ˈvest/ | 背心 | v 開頭，上排牙掂下唇。讀成 w 就變成 west。字尾嘅 /st/ 要讀齊。
west | /ˈwest/ | 西方 / 西面 | w 開頭，嘴唇收圓，牙齒唔掂嘴唇。
zip | /ˈzɪp/ | 拉鏈 / 拉埋 | /z/ 嘅口形同 s 一樣，但聲帶要振動。唔帶聲就變成 sip。
sip | /ˈsɪp/ | 一啖一啖咁飲 | 開頭係唔帶聲嘅 s。同 zip 係一對。
show | /ˈʃoʊ/ | 表演 / 展示 | /ʃ/：嘴唇向前收圓，脷比 s 後少少。讀成 s 就變成 so。
so | /ˈsoʊ/ | 所以 / 咁 | 開頭係 s，嘴唇唔使向前突。同 show 係一對。
full | /ˈfʊl/ | 滿嘅 / 飽嘅 | 短而放鬆嘅 /ʊ/。讀得太長太緊就變成 fool。
fool | /ˈfuːl/ | 傻瓜 | 長音 /uː/，嘴唇收得更圓更緊。字尾嘅 l 舌尖要掂上去。
bad | /ˈbæd/ | 壞嘅 | /æ/ 嘴擘大。擘得唔夠就變成 bed。
bed | /ˈbed/ | 床 | /e/ 嘴擘得比 /æ/ 細。字尾嘅 d 帶聲，唔好讀成 bet。
`,
"英文習語": `
It's a piece of cake. | /ɪts ə ˈpiːs əv ˈkeɪk/ | 易如反掌 | 非常容易：The test was a piece of cake.
I'm on cloud nine. | /aɪm ɑːn ˈklaʊd ˈnaɪn/ | 我開心到唔得了 | 特別開心嘅時候講。
It costs an arm and a leg. | /ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/ | 貴到離譜 | 貴到要攞手臂同腳去換。
Let's call it a day. | /ˈlets ˈkɔːl ɪt ə ˈdeɪ/ | 今日就到呢度啦 | 結束工作、溫書嗰陣講，開會嗰陣都好自然。
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ ʌndər ðə ˈweðər/ | 我有啲唔舒服 | 好似就快感冒嗰種輕微唔舒服，同天氣無關。
I need to hit the books. | /aɪ ˈniːd tə ˈhɪt ðə ˈbʊks/ | 我要專心溫書喇 | 考試前講。唔係真係打書。
Once in a blue moon | /ˈwʌns ɪn ə ˈbluː ˈmuːn/ | 好少 / 難得一次 | 非常少有：I only eat fast food once in a blue moon.
Better late than never. | /ˈbetər ˈleɪt ðən ˈnevər/ | 遲做好過唔做 | 鼓勵起步遲嘅人。
Don't beat around the bush. | /ˈdoʊnt ˈbiːt əraʊnd ðə ˈbʊʃ/ | 唔好兜圈 | 叫對方直接講重點。
It's not my cup of tea. | /ɪts ˈnɑːt maɪ ˈkʌp əv ˈtiː/ | 呢樣嘢唔啱我口味 | 婉轉咁表示唔鍾意。廣東話講嘅「唔係我杯茶」就係呢個意思。
Let's get the ball rolling. | /ˈlets ˈget ðə ˈbɔːl ˈroʊlɪŋ/ | 我哋開始啦 | 會議、項目開始嗰陣講。
I'll keep my fingers crossed. | /aɪl ˈkiːp maɪ ˈfɪŋgərz ˈkrɔːst/ | 我會幫你祈好運 | 成日配合食指同中指交叉嘅手勢。
Hang in there. | /ˈhæŋ ˈɪn ˈðer/ | 頂住 / 堅持落去 | 對處境艱難嘅人講。呢種場合嘅「加油」可以講 Hang in there；Add oil 喺香港以外未必人人明白。
Speak of the devil! | /ˈspiːk əv ðə ˈdevl/ | 一講曹操，曹操就到！ | 啱啱講緊某人，佢就出現。
The ball is in your court. | /ðə ˈbɔːl ɪz ɪn jʊr ˈkɔːrt/ | 輪到你決定 | 嚟自網球。
My lips are sealed. | /maɪ ˈlɪps ər ˈsiːld/ | 我一定唔會講出去 | 字面意思係「嘴唇封住咗」。
It's on the tip of my tongue. | /ɪts ɑːn ðə ˈtɪp əv maɪ ˈtʌŋ/ | 話到嘴邊又諗唔起 | 明明知道，但一時講唔出嚟嘅時候。
I'm all ears. | /aɪm ˈɔːl ˈɪrz/ | 我洗耳恭聽 | 意思係「你講啦，我認真聽緊」。
When pigs fly. | /wen ˈpɪgz ˈflaɪ/ | 除非太陽由西邊出 | 絕對冇可能發生嘅事：He'll clean his room when pigs fly.
`,
"影視同俚語": `
Spill the tea. | /ˈspɪl ðə ˈtiː/ | 快啲講有咩八卦 | tea = 八卦、內幕。朋友之間嘅俚語。
No cap. | /ˈnoʊ ˈkæp/ | 真㗎，唔呃你 | 後生仔嘅俚語。cap = 大話。
That song slaps. | /ˈðæt ˈsɔːŋ ˈslæps/ | 呢首歌好好聽 | slap =（音樂等）非常好，都可以形容食物。
I'm dead. | /aɪm ˈded/ | 笑死我 | 訊息入面成日配 💀 表情符號，唔係真係死咗。
Low-key | /ˌloʊˈkiː/ | 有啲 / 暗地裏 | I low-key love this song. 反義詞係 high-key（毫不掩飾咁）。
I'm obsessed with this song. | /aɪm əbˈsest wɪð ˈðɪs ˈsɔːŋ/ | 我迷咗呢首歌 | obsessed = 着迷，多數用喺正面嘅意思。
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | 講咩㗎？ | 問電影、劇集嘅劇情。about 嘅第一個音節弱讀成 /ə/。
No spoilers! | /ˈnoʊ ˈspɔɪlərz/ | 唔好劇透！ | Don't spoil it! 意思一樣。
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə ˈhoʊl ˈsiːzn/ | 我一口氣煲晒成季 | binge-watch 即係「煲劇」，一口氣睇好多集。
The ending was so good. | /ði ˈendɪŋ wəz ˈsoʊ ˈgʊd/ | 個結局好好睇 | 唔好睇：The ending was disappointing.
It's a must-watch. | /ɪts ə ˈmʌstwɑːtʃ/ | 一定要睇 | 極力推介嗰陣講。
Plot twist! | /ˈplɑːt ˈtwɪst/ | 劇情大逆轉！ | 生活入面有意外嗰陣都可以講。
It's overrated. | /ɪts ˌoʊvərˈreɪtɪd/ | 名過其實 | 反義詞係 underrated（畀人低估）。
That scene gave me chills. | /ˈðæt ˈsiːn ˈgeɪv mi ˈtʃɪlz/ | 嗰幕睇到我起晒雞皮 | 因為感動或者緊張而起雞皮。
Who's your favorite singer? | /ˈhuːz jʊr ˈfeɪvərɪt ˈsɪŋər/ | 你最鍾意邊個歌手？ | 傾音樂、追星嗰陣問。問組合入面最鍾意邊個成員，就講 Who's your favorite member? favorite 係美式串法，英式寫 favourite。
Are you kidding me? | /ər ju ˈkɪdɪŋ mi/ | 你講笑呀？ | 電影、劇集常見嘅對白，可以表示驚訝，亦可以表示不滿。
I've got your back. | /aɪv ˈgɑːt jʊr ˈbæk/ | 我撐你 / 有我喺度 | 意思係會一直支持你、保護你。
Gotcha. | /ˈgɑːtʃə/ | 明白 / 捉到你喇！ | got you 嘅縮寫，最常用嚟表示「明白」。
Let's do this! | /ˈlets ˈduː ˈðɪs/ | 嚟，開始啦！ | 開始之前同大家打氣。
`,
"英文字母": `
A | /ˈeɪ/ | 字母 A（細楷 a） | apple 嘅 A。名稱係 /ˈeɪ/，同 day 嘅元音一樣。
B | /ˈbiː/ | 字母 B（細楷 b） | bag 嘅 B。上下唇合埋再放開。電話入面容易同 P、D 聽錯，可以講 B as in boy。
C | /ˈsiː/ | 字母 C（細楷 c） | coffee 嘅 C。名稱同 see 同音，開頭係 /s/，唔係 /ʃ/。
D | /ˈdiː/ | 字母 D（細楷 d） | dog 嘅 D。同 T 只差聲帶振動，電話入面容易聽錯。
E | /ˈiː/ | 字母 E（細楷 e） | email 嘅 E。名稱係長音 /ˈiː/；/ˈaɪ/ 係 I 嘅名稱。
F | /ˈef/ | 字母 F（細楷 f） | fan 嘅 F。名稱只有一個音節：上排牙輕輕掂住下唇就收，後面唔加元音。coffee 入面嘅 ff 講 double F。
G | /ˈdʒiː/ | 字母 G（細楷 g） | go 嘅 G。名稱係 /ˈdʒiː/，J 先係 /ˈdʒeɪ/，唔好將兩個調轉。
H | /ˈeɪtʃ/ | 字母 H（細楷 h） | hotel 嘅 H。名稱由元音開頭，所以講 an H。只有一個音節，/tʃ/ 之後唔加元音。
I | /ˈaɪ/ | 字母 I（細楷 i） | idea 嘅 I。同解「我」嘅 I 同音；/ˈiː/ 係 E 嘅名稱。
J | /ˈdʒeɪ/ | 字母 J（細楷 j） | job 嘅 J。名稱係 /ˈdʒeɪ/，容易同 G 嘅 /ˈdʒiː/ 調轉。
K | /ˈkeɪ/ | 字母 K（細楷 k） | key 嘅 K。同 OK 後半嘅音一樣。
L | /ˈel/ | 字母 L（細楷 l） | light 嘅 L。名稱只有一個音節：舌尖頂住上排牙後面就收，後面唔加元音。
M | /ˈem/ | 字母 M（細楷 m） | milk 嘅 M。合埋上下唇收。電話入面容易同 N 聽錯，可以講 M as in Mary。
N | /ˈen/ | 字母 N（細楷 n） | name 嘅 N。舌尖頂住上排牙後面，氣由鼻出。電話入面容易同 M 搞亂，可以講 N as in name。
O | /ˈoʊ/ | 字母 O（細楷 o） | OK 嘅 O。美式係 /oʊ/，收尾嗰陣嘴唇收圓。講電話號碼嗰陣，數字 0 都成日讀做 O。
P | /ˈpiː/ | 字母 P（細楷 p） | pan 嘅 P。上下唇爆破送氣，同 B 分清楚。
Q | /ˈkjuː/ | 字母 Q（細楷 q） | question 嘅 Q。名稱係 /ˈkjuː/，同 queue（排隊）同音。喺英文字入面，Q 後面差唔多一定跟住 U。
R | /ˈɑːr/ | 字母 R（細楷 r） | rice 嘅 R。美式名稱係 /ˈɑːr/：先擘大嘴讀 /ɑː/，再將舌尖向後捲，唔掂任何地方。英式唔捲脷。名稱只有一個音節。
S | /ˈes/ | 字母 S（細楷 s） | sorry 嘅 S。名稱只有一個音節，以 /s/ 收，後面唔加元音。/ˈsiː/ 係 C 嘅名稱。class 入面嘅 ss 講 double S。
T | /ˈtiː/ | 字母 T（細楷 t） | taxi 嘅 T。大楷講 capital T，兩個 T 連埋講 double T。
U | /ˈjuː/ | 字母 U（細楷 u） | university 嘅 U。名稱同 you 同音，以 /j/ 開頭，所以講 a U。
V | /ˈviː/ | 字母 V（細楷 v） | very 嘅 V。上排牙輕輕掂住下唇，聲帶振動。名稱係 /ˈviː/，唔好讀成 "wee"。
W | /ˈdʌbəljuː/ | 字母 W（細楷 w） | water 嘅 W。名稱係 double u（兩個 U），三個音節都要讀出嚟。
X | /ˈeks/ | 字母 X（細楷 x） | X-ray（X 光）嘅 X，不過 X 更常喺字尾出現，例如 box。名稱由元音開頭，所以講 an X；只有一個音節，/ks/ 之後唔加元音。
Y | /ˈwaɪ/ | 字母 Y（細楷 y） | yes 嘅 Y。名稱同 why 同音。
Z | /ˈziː/ | 字母 Z（細楷 z） | zero 嘅 Z。美國人講 zee；香港學校教英式嘅 zed，兩個都啱。開頭係帶聲嘅 /z/，唔係 /s/。
`,
"港式英文陷阱": `
Turn on the light. | /ˈtɜːrn ˈɑːn ðə ˈlaɪt/ | 開燈 | 港式英文：「開燈」唔係 open the light ✗。燈、電視、冷氣呢啲電器嘅「開」用 turn on。
Turn off the TV. | /ˈtɜːrn ˈɔːf ðə ˌtiː ˈviː/ | 熄電視 / 閂電視 | 港式英文：「熄電視」唔係 close the TV ✗。電器用 turn off，門窗先用 close。
I'll take you to the station. | /aɪl ˈteɪk ju tə ðə ˈsteɪʃn/ | 我帶你去車站 | 一字多義：廣東話嘅「帶」喺英文分兩個字。將人或者嘢帶去第度用 take；帶嚟講嘢嘅人呢度先用 bring。
Can you bring me some water? | /kən ju ˈbrɪŋ mi ˈsʌm ˈwɔːtər/ | 可唔可以攞啲水畀我？ | 一字多義：「攞嚟、帶嚟」（向住講嘢嘅人嘅方向）用 bring，同 take 方向相反。
Can you lend me a pen? | /kən ju ˈlend mi ə ˈpen/ | 可唔可以借支筆畀我？ | 一字多義：廣東話嘅「借」唔分方向。借畀人用 lend。Can you borrow me a pen? ✗
Can I borrow your charger? | /kən aɪ ˈbɑːroʊ jʊr ˈtʃɑːrdʒər/ | 我可唔可以借你個充電器用吓？ | 一字多義：問人借嚟用係 borrow。記住：lend 係借出，borrow 係借入。
I'm reading a book. | /aɪm ˈriːdɪŋ ə ˈbʊk/ | 我睇緊書 | 一字多義：廣東話嘅「睇」喺英文分幾個字。「睇書」用 read，唔講 see a book ✗ 或者 look a book ✗。
I'm watching TV. | /aɪm ˈwɑːtʃɪŋ ˌtiː ˈviː/ | 我睇緊電視 | 一字多義：睇電視、睇波呢種持續咁睇用 watch。watch TV 係固定講法，TV 前面唔加冠詞；指某一部電視機先講 the TV：Turn off the TV.
Look at this picture. | /ˈlʊk ət ˈðɪs ˈpɪktʃər/ | 睇吓呢張相 | 一字多義：主動去睇某樣嘢用 look at，at 唔可以漏；「睇到」用 see。
Take this medicine twice a day. | /ˈteɪk ˈðɪs ˈmedɪsn ˈtwaɪs ə ˈdeɪ/ | 呢隻藥一日食兩次 | 港式英文：「食藥」唔係 eat medicine ✗，要用 take。medicine 泛指藥物嗰陣係不可數名詞。
Tell me the truth. | /ˈtel mi ðə ˈtruːθ/ | 同我講真話 | 一字多義：「講」喺英文分幾個字：say 後面接講嘅內容，tell 後面接人，speak 接語言，talk 指傾偈。say the truth ✗ → tell the truth ✓
I really like it. | /aɪ ˈriːəli ˈlaɪk ɪt/ | 我好鍾意 | 港式英文：「我好鍾意」唔係 I very like it. ✗。very 唔可以直接修飾動詞，要講 I really like it. 或者 I like it very much.
What do you think? | /ˈwʌt də ju ˈθɪŋk/ | 你覺得點？ | 港式英文：「你覺得點？」唔講 How do you think? ✗。問意見用 What do you think?
Although it rained, we went hiking. | /ɔːlðoʊ ɪt ˈreɪnd wi ˈwent ˈhaɪkɪŋ/ | 雖然落雨，我哋都去咗行山 | 港式英文：「雖然……但係」喺英文只用一個連接詞。Although it rained, but we went… ✗
Because I was tired, I went to bed early. | /bɪkəz aɪ wəz ˈtaɪərd aɪ ˈwent tə ˈbed ˈɜːrli/ | 因為太攰，所以我好早就瞓咗 | 港式英文：「因為……所以」只用一個，because 同 so 唔可以同時出現。go to bed 唔加冠詞。
There's a bank near here. | /ðerz ə ˈbæŋk nɪr ˈhɪr/ | 呢度附近有間銀行 | 港式英文：廣東話嘅「有」可以係 have，亦可以係 there is。「呢度有間銀行」唔係 There has a bank. ✗，要講 There's a bank.
Many people have this problem. | /ˈmeni ˈpiːpl ˈhæv ˈðɪs ˈprɑːbləm/ | 好多人都有呢個問題 | 港式英文：There are many people have… ✗ 一句入面有兩個動詞。講 Many people have…，或者加 who：There are many people who have…
It's difficult for me to wake up early. | /ɪts ˈdɪfɪkəlt fər mi tə ˈweɪk ˈʌp ˈɜːrli/ | 我好難早起身 | 港式英文：I am difficult to wake up early. ✗ 係將廣東話直譯過去。difficult / easy 嘅主語用 it：It's difficult for me to…
Wait for me. | /ˈweɪt fər mi/ | 等等我 | 港式英文：「等我」唔係 Wait me. ✗。wait 後面要加 for 先可以接人。
I'm leaving now. | /aɪm ˈliːvɪŋ ˈnaʊ/ | 我走先喇 | 港式英文：「我走先」直譯成 I go first. ✗，對方聽唔出你係道別。講 I'm leaving now. 或者 I have to go.
Let's discuss the plan. | /ˈlets dɪˈskʌs ðə ˈplæn/ | 我哋討論吓個計劃啦 | 港式英文：discuss about the plan ✗。discuss 後面直接接要討論嘅嘢，唔加 about。
Good luck! | /ˈgʊd ˈlʌk/ | 加油！/ 祝你好運！ | 港式英文：Add oil! 已經收錄喺《牛津英語詞典》，香港人之間用得，但外地人未必明白。對外國人講 Good luck! / You can do it! / Go for it!
Where's the cashier? | /ˈwerz ðə kæˈʃɪr/ | 收銀處喺邊度？ | 港式英文：停車場同醫院嘅 shroff（繳費處）係香港本地用字，外地人未必明白。喺外國講 cashier 或者 payment office。
I need a company stamp. | /aɪ ˈniːd ə ˈkʌmpəni ˈstæmp/ | 我要公司印 | 港式英文：香港將印章叫 chop，喺本地冇問題，但外地人未必明白。講 stamp 就清楚。
I'm waiting in line. | /aɪm ˈweɪtɪŋ ɪn ˈlaɪn/ | 我排緊隊 | 英式 / 美式：香港學校教 queue (I'm queuing.)；美國講 wait in line。兩個都啱。
Take the elevator to the first floor. | /ˈteɪk ði ˈelɪveɪtər tə ðə ˈfɜːrst ˈflɔːr/ | 搭升降機去地下 | 英式 / 美式：香港講 lift 同 ground floor (G/F)；美國講 elevator，first floor 即係地下。
I live in an apartment. | /aɪ ˈlɪv ɪn ən əˈpɑːrtmənt/ | 我住單位（唔係獨立屋） | 英式 / 美式：香港講 flat；美國講 apartment。
Where's the trash can? | /ˈwerz ðə ˈtræʃ ˈkæn/ | 垃圾桶喺邊度？ | 英式 / 美式：香港講 rubbish bin；美國講 trash can 或者 garbage can。
I play soccer on weekends. | /aɪ ˈpleɪ ˈsɑːkər ɑːn ˈwiːkendz/ | 我週末踢足球 | 英式 / 美式：香港講 football；喺美國 football 係美式足球，足球叫 soccer。
What's your cell phone number? | /ˈwʌts jʊr ˈsel ˈfoʊn ˈnʌmbər/ | 你手提電話號碼係幾多？ | 英式 / 美式：香港講 mobile (phone)；美國講 cell phone，口語直接講 phone。
`,
"字尾發音": `
bag | /ˈbæg/ | 袋 | 字尾嘅 g 要帶聲，前面嘅元音拉長少少。讀成唔帶聲嘅 k 就變成 back。
back | /ˈbæk/ | 背脊 / 後面 | 字尾係唔帶聲嘅 k，元音短啲。廣東話嘅字尾 k（例如「六」）只做口形唔放氣，英文嘅 k 最好輕輕放出嚟。
feed | /ˈfiːd/ | 餵 | 字尾係帶聲嘅 d，元音 /iː/ 拉長。讀成 t 就變成 feet。
feet | /ˈfiːt/ | 腳（眾數） | 字尾係唔帶聲嘅 t，元音短啲。foot 嘅眾數係 feet，唔加 s。
rope | /ˈroʊp/ | 繩 | 雙元音 /oʊ/ 之後仲有 p：上下唇合埋，再輕輕放開。
robe | /ˈroʊb/ | 長袍 / 浴袍 | 字尾係帶聲嘅 b，/oʊ/ 讀得比 rope 長。
leaf | /ˈliːf/ | 樹葉 | 字尾係唔帶聲嘅 f。leave 嘅字尾係帶聲嘅 v，元音都長啲。
cold | /ˈkoʊld/ | 凍嘅 | 字尾 /ld/ 兩個音都要讀：舌尖先掂上排牙後面讀 l，再讀 d。漏咗 l 就變成 code。
code | /ˈkoʊd/ | 密碼 / 代碼 | /oʊ/ 之後直接係 d，冇 l。同 cold 係一對。
list | /ˈlɪst/ | 清單 | 字尾 /st/ 嘅 t 唔可以省，唔好讀成 "lis"。
friends | /ˈfrendz/ | 朋友（眾數） | 字尾 /ndz/ 三個輔音都要讀，唔好讀成 "frens"。眾數嘅 s 喺度讀 /z/。
asked | /ˈæskt/ | 問咗（ask 嘅過去式） | 字尾係 /skt/：-ed 喺度只讀 /t/，唔多加音節。唔好淨係讀成 "as"。
months | /ˈmʌnθs/ | 月（眾數） | 字尾 /nθs/ 好難，可以先慢慢讀 month，再加 s。
cats | /ˈkæts/ | 貓（眾數） | 字尾 /ts/ 嘅 t 同 s 都要讀，唔好讀成 "cass"。少咗呢個音，人哋聽唔出係眾數。
cards | /ˈkɑːrdz/ | 卡（眾數） | 字尾 /dz/ 要帶聲。讀成唔帶聲就變成 carts（手推車）。
walked | /ˈwɔːkt/ | 行咗（walk 嘅過去式） | -ed 喺 k 之後讀 /t/，成個字只有一個音節。少咗 /t/，人哋聽唔出係過去式。
wanted | /ˈwɑːntɪd/ | 想要（want 嘅過去式） | 只有喺 t 或者 d 之後，-ed 先多讀一個音節 /ɪd/。其他動詞唔好多加音節：enjoyed 唔係 "enjoy-ded"。
time | /ˈtaɪm/ | 時間 | 雙元音 /aɪ/ 之後要合埋上下唇讀出 m。廣東話冇「雙元音 + 輔音」嘅字尾，所以好易吞咗個 m。
like | /ˈlaɪk/ | 鍾意 / 好似 | /aɪ/ 之後仲有 k，唔好讀成 "lai"。
game | /ˈgeɪm/ | 遊戲 / 比賽 | /eɪ/ 要讀足，再合埋上下唇讀 m，唔好縮短成 "gem"。
nine | /ˈnaɪn/ | 九 | 開頭同字尾都係 n。字尾嘅 n 唔好吞咗，開頭嘅 n 唔好讀成 l。
line | /ˈlaɪn/ | 線 / 隊 | l 開頭，n 收尾。同 nine 只差第一個音。
place | /ˈpleɪs/ | 地方 | 開頭 /pl/ 兩個輔音連埋一齊，l 唔可以省，否則變成 pace。
pace | /ˈpeɪs/ | 步伐 / 速度 | p 之後直接係元音，冇 l。同 place 係一對。
bring | /ˈbrɪŋ/ | 帶嚟 | 開頭係 /br/，r 唔好讀成 l（"bling"），亦唔好省咗。
present | /ˈpreznt/ | 禮物 / 而家嘅 | 開頭係 /pr/，r 唔可以省，唔好讀成 "pesent"。字尾嘅 /nt/ 都要讀出嚟。
`
};
