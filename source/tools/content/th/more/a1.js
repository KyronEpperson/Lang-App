/* TRANSLATE/ADAPT (th): scaffolded from tools/content/ko/more/a1.js by new_lang.js.
   Translate/adapt everything that is not English (the ko text) for th speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,
   explanations written from the th point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position
   identical to ko-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */
/* ko-en stage A1: new lessons (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it และ there: ประธานที่ขาดไม่ได้", blurb:"อากาศและเวลาใช้ it ส่วน “มี…อยู่ที่ไหนสักแห่ง” ใช้ there is / there are", deck:"คุยเล่น", body:`
<p>ภาษาไทยพูดว่า “ร้อน” “ฝนตก” หรือ “มีร้านกาแฟแถวนี้” ได้เลยโดยไม่ต้องมีประธาน แต่ประโยคภาษาอังกฤษต้องมีประธานเสมอ เมื่อไม่มีใครเป็นผู้กระทำ ภาษาอังกฤษจึงใช้คำว่า <b>it</b> และ <b>there</b> มาเติมตำแหน่งประธานไว้ โดยตัวมันเองไม่มีความหมาย</p>
<h3>อากาศ เวลา และวันที่ ใช้ It</h3>
<p>it ในที่นี้ไม่ได้แปลว่า “มัน” แต่ใส่ไว้เพื่อให้ประโยคมีประธานเท่านั้น</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|วันนี้อากาศหนาว}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|ตอนนี้บ่ายสามโมง}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|ฝนกำลังตก}}
<h3>“มี” ที่แปลว่า มีอยู่ ใช้ There is / There are</h3>
<p>คำว่า “มี” ในภาษาไทยใช้ได้สองความหมาย คือ “เป็นเจ้าของ” (ฉันมีรถ) และ “มีอยู่ที่ใดที่หนึ่ง” (มีร้านอาหารเยอะ) ภาษาอังกฤษแยกเป็นสองคำ ความหมายที่สองใช้ <b>there is</b> กับของชิ้นเดียว และ <b>there are</b> กับของหลายชิ้นซึ่งคำนามต้องเป็นรูปพหูพจน์ เวลาพูดมักย่อเป็น There's</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|แถวนี้มีร้านกาแฟ}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|มีห้องสองห้อง}}
<h3>คำถามและประโยคปฏิเสธ</h3>
<p>ย้าย is / are ไปไว้หน้า there เพื่อทำเป็นคำถาม และเติม not หลัง is / are เพื่อปฏิเสธ</p>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|ที่นี่มีห้องน้ำไหม}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|มีที่นั่งว่างไหม}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|วันนี้ไม่มีรถเมล์}}
<h3>have กับ there is ต่างกันอย่างไร</h3>
<p>ถ้ามีคนเป็นเจ้าของ ใช้ <b>have</b> ถ้าบอกว่ามีของอยู่ในสถานที่หนึ่ง ใช้ <b>there is</b></p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|ฉันมีรถ (เป็นเจ้าของ)}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|มีรถจอดอยู่ข้างนอก}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยของคนไทย: <b>Is hot today.</b> ✗ → <b>It's hot today.</b> ✓ / <b>Have many restaurants here.</b> ✗ → <b>There are many restaurants here.</b> ✓</div>`,
check:[["“วันนี้อากาศร้อน” ภาษาอังกฤษพูดว่าอย่างไร",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"เรื่องอากาศต้องใช้ it เป็นประธาน"],["There ___ three people. ช่องว่างควรเติมคำใด",["is","are","have","be"],1,"มีหลายคนจึงใช้ there are"],["“ที่นี่มีห้องน้ำไหม” ภาษาอังกฤษพูดว่าอย่างไร",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"ถามว่ามีของอยู่หรือไม่ ใช้ Is there a …?"]],
practice:[
["mc","“ฝนกำลังตก” ภาษาอังกฤษพูดว่าอย่างไร","It's raining.","Is raining.","There is raining.","Rain is.","เรื่องอากาศใช้ it เป็นประธาน"],
["mc","“แถวนี้มีร้านกาแฟ” ภาษาอังกฤษพูดว่าอย่างไร","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","มีของอยู่ในสถานที่ใช้ there is และร้านเดียวต้องมีคำนำหน้านาม a"],
["mc","There ___ two rooms. ช่องว่างควรเติมคำใด","are","is","have","has","rooms เป็นคำนามพหูพจน์จึงใช้ are"],
["mc","“ตอนนี้บ่ายสามโมง” ภาษาอังกฤษพูดว่าอย่างไร","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","เวลาก็ใช้ it ขึ้นต้นประโยค"],
["mc","“ฉันมีรถ” (เป็นเจ้าของ) ภาษาอังกฤษพูดว่าอย่างไร","I have a car.","There is a car me.","I am a car.","It's a car me.","มีคนเป็นเจ้าของใช้ have"],
["or","วันนี้อากาศหนาว","It's cold today","There's","เรื่องอากาศใช้ it เป็นประธาน"],
["or","มีรถจอดอยู่ข้างนอก","There's a car outside","cars","รถคันเดียวใช้คำนำหน้านาม a และ car ไม่เติม -s"],
["or","มีที่นั่งสองที่","There are two seats","seat is","สองที่ขึ้นไปใช้ are และ seats เป็นรูปพหูพจน์"],
["fi","__ cold today.","วันนี้อากาศหนาว","It's|It is","Is|There's|This","ใช้ it เติมตำแหน่งประธาน"],
["fi","There __ a bank near here.","แถวนี้มีธนาคาร","is","are|have|be","ธนาคารแห่งเดียวจึงใช้ is"],
["fi","__ there any seats?","มีที่นั่งว่างไหม","Are","Is|Do|Have","seats เป็นคำนามพหูพจน์จึงใช้ Are"],
["ty","วันนี้อากาศร้อน","It's hot today","it · hot · today — อากาศใช้ it","There's","เรื่องอากาศขึ้นต้นด้วย it"],
["ty","ที่นี่มีห้องน้ำไหม","Is there a bathroom here|Is there a restroom here","is there · bathroom — ระวังคำนำหน้านาม","the","ถามถึงห้องน้ำเป็นครั้งแรกและมีห้องเดียว จึงใช้คำนำหน้านาม a"],
["ty","มีห้องสองห้อง","There are two rooms","there are · two · room — หลายห้อง","room","สองห้องต้องใช้รูปพหูพจน์ rooms"]]},
{ id:"plurals", title:"รูปพหูพจน์ -s กับ this / these และ my / your", blurb:"สองขึ้นไปต้องเติม -s เสมอ this ใช้กับสิ่งเดียว these ใช้กับหลายสิ่ง", deck:"ช้อปปิ้งและจ่ายเงิน", body:`
<p>ภาษาไทยนับของด้วย ตัวเลข + ลักษณนาม และคำนามไม่เปลี่ยนรูปเลย เช่น “หนังสือ 3 เล่ม” ภาษาอังกฤษไม่มีลักษณนาม แต่เมื่อมีตั้งแต่สองขึ้นไป คำนามต้องเปลี่ยนเป็นรูปพหูพจน์ (plural) โดยเติม <b>-s</b> ทุกครั้ง คำซ้ำอย่าง “เด็ก ๆ” ในภาษาไทยจะใส่หรือไม่ใส่ก็ได้ แต่ -s ในภาษาอังกฤษขาดไม่ได้ และต้องออกเสียงท้ายคำให้ได้ยินด้วย</p>
<h3>วิธีทำรูปพหูพจน์</h3>
<div class="tbl"><table><tr><th>กฎ</th><th>ตัวอย่าง</th></tr><tr><td>ส่วนใหญ่เติม -s</td><td class="k">book → books</td></tr><tr><td>ลงท้ายด้วย s x ch sh เติม -es</td><td class="k">box → boxes</td></tr><tr><td>พยัญชนะ + y เปลี่ยนเป็น -ies</td><td class="k">city → cities</td></tr><tr><td>รูปพิเศษ</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
<p>-s ออกเสียงได้สามแบบ คือ /s/ /z/ หรือ /ɪz/ ดูได้จากคำอ่านของแต่ละคำ เช่น books ลงท้ายด้วย /ks/ และ boxes ลงท้ายด้วย /ɪz/</p>
{{ex:two books|/ˈtuː ˈbʊks/|หนังสือ 2 เล่ม}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|กล่อง 3 ใบ}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|ฉันมีลูกสองคน}}
<h3>this / that ใช้กับสิ่งเดียว these / those ใช้กับหลายสิ่ง</h3>
<p>ภาษาไทยใช้ “นี้” และ “นั้น” ได้ทั้งกับของชิ้นเดียวและหลายชิ้น แต่ภาษาอังกฤษต้องเลือกคำให้ตรงกับจำนวน</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|นี่คือกระเป๋าของฉัน}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|นี่คือกุญแจของฉัน (หลายดอก)}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|รองเท้าคู่นั้นสวยดี}}
<h3>my your his her our their</h3>
<p>คำเหล่านี้บอกว่าเป็นของใคร เหมือน “ของฉัน” “ของคุณ” แต่วางไว้หน้าคำนาม ถ้ามีคำเหล่านี้แล้วจะไม่ใช้ a หรือ the ซ้ำอีก</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|นี่โทรศัพท์ของคุณหรือเปล่า}}{{ex:Her brothers live in Chiang Mai.|/hər ˈbrʌðərz ˈlɪv ɪn ˌtʃɑːŋ ˈmaɪ/|พี่ชาย (หลายคน) ของเธออยู่ที่เชียงใหม่}}
<div class="tip">หลังตัวเลข many these และ those คำนามต้องเป็นรูปพหูพจน์เสมอ: <b>two friend</b> ✗ → <b>two friends</b> ✓ / <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. ช่องว่างควรเติมคำใด",["sister","sisters","a sister","sister's"],1,"สองคนจึงต้องใช้รูปพหูพจน์ sisters"],["___ are my keys. ช่องว่างควรเติมคำใด",["This","That","These","It"],2,"keys เป็นคำนามพหูพจน์จึงใช้ These"],["“นี่คือกระเป๋าของฉัน” ภาษาอังกฤษพูดว่าอย่างไร",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"มี my แล้วไม่ต้องใช้คำนำหน้านาม"]],
practice:[
["mc","“หนังสือ 2 เล่ม” ภาษาอังกฤษพูดว่าอย่างไร","two books","two book","two a book","twos book","สองขึ้นไปต้องเติม -s เป็นรูปพหูพจน์"],
["mc","รูปพหูพจน์ของ child","children","childs","childes","child","child เป็นคำที่มีรูปพหูพจน์พิเศษ"],
["mc","___ shoes are nice. (รองเท้าคู่นั้น)","Those","That","This","It","shoes เป็นคำนามพหูพจน์จึงใช้ those"],
["mc","“นี่คือกระเป๋าของฉัน” ภาษาอังกฤษพูดว่าอย่างไร","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my กับคำนำหน้านามใช้ด้วยกันไม่ได้"],
["mc","รูปพหูพจน์ของ box","boxes","boxs","boxies","box","คำที่ลงท้ายด้วย s x ch sh ต้องเติม -es"],
["or","นี่คือกุญแจของฉัน (หลายดอก)","These are my keys","key This","หลายดอกจึงใช้ these และ keys เป็นรูปพหูพจน์"],
["or","ฉันมีลูกสองคน","I have two children","child a","สองคนต้องใช้รูปพหูพจน์ children และไม่ใช้คำนำหน้านาม a"],
["or","รองเท้าคู่นั้นสวยดี","Those shoes are nice","That","shoes มีหลายข้างจึงใช้ those"],
["fi","I have three __.","ฉันมีแมวสามตัว","cats","cat|a cat|cat's","สามตัวจึงต้องใช้รูปพหูพจน์ cats"],
["fi","__ is my friend.","คนนี้เป็นเพื่อนของฉัน","This","These|Those|They","คนเดียวจึงใช้ this"],
["fi","Two __, please.","ขอกาแฟสองแก้ว","coffees","coffee|a coffee|coffee's","สั่งเป็นแก้วแล้วนับจำนวน พูดเป็นรูปพหูพจน์ coffees ได้"],
["ty","นี่คือหนังสือของฉัน (หลายเล่ม)","These are my books","these · my · book — หลายเล่ม","book","หลายเล่มจึงใช้ these และ books เป็นรูปพหูพจน์"],
["ty","ฉันมีพี่สาวสองคน","I have two sisters","have · two · sister — สองคน","sister","สองคนต้องใช้รูปพหูพจน์ sisters"],
["ty","นี่คือกระเป๋าของฉัน","This is my bag","this · my · bag — ไม่ต้องมี a","a","มี my แล้วจึงไม่ใช้คำนำหน้านาม a"]]},
{ id:"present", title:"Present Simple Tense และลำดับคำ: ประธาน + กริยา + กรรม", blurb:"ลำดับคำเหมือนภาษาไทย จุดที่ต้องระวังคือไม่ใส่ am / is / are หน้ากริยา", deck:"แนะนำตัว", body:`
<p>ข่าวดีสำหรับคนไทย: ลำดับคำพื้นฐานของภาษาอังกฤษเหมือนภาษาไทย คือ <b>ประธาน → กริยา → กรรม</b> “ฉัน ดื่ม กาแฟ” ก็คือ <b>I drink coffee.</b> แปลตรงตัวได้เลย จุดที่คนไทยพลาดบ่อยจึงไม่ใช่ลำดับคำ แต่เป็นคำที่เติมเข้ามาเกิน</p>
<h3>ประธาน + กริยา + กรรม</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|ฉันดื่มกาแฟ}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|ฉันเรียนภาษาอังกฤษ}}
<h3>อย่าใส่ am / is / are หน้ากริยา</h3>
<p>คนไทยมักใส่ am หรือ is ไว้หน้ากริยาเพราะคิดว่าเป็นคำว่า “เป็น” หรือเป็นเครื่องหมายของประโยคบอกเล่า แต่ประโยคมีกริยาหลักอยู่แล้ว ให้ถามตัวเองว่า “นอกจาก Verb to be มีกริยาอื่นในประโยคหรือเปล่า” ถ้ามี เช่น study drink live ก็ไม่ต้องใส่ am / is / are</p>
<p><b>I'm study English.</b> ✗ → <b>I study English.</b> ✓</p>
<h3>สถานที่และเวลาไว้ท้ายประโยค</h3>
<p>เหมือนภาษาไทย: สถานที่ก่อน แล้วตามด้วยเวลา</p>
{{ex:We live in Bangkok.|/wi ˈlɪv ɪn ˈbæŋkɑːk/|เราอาศัยอยู่ที่กรุงเทพฯ}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|ฉันเรียนภาษาอังกฤษทุกวัน}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|พวกเขาทำงานวันเสาร์อาทิตย์}}
<h3>Present Simple Tense ใช้กับนิสัยและข้อเท็จจริง</h3>
<p>ใช้กับสิ่งที่ทำเป็นประจำหรือเรื่องที่เป็นจริงเสมอ ภาษาไทยวาง “ไม่” ไว้หน้ากริยา แต่ภาษาอังกฤษต้องใช้ <b>don't</b> แทน จะใช้ not ตรง ๆ หน้ากริยาไม่ได้</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|ฉันไม่กินเนื้อสัตว์}}
<h3>บ่อยแค่ไหน: always usually sometimes never</h3>
<p>คำเหล่านี้วางไว้ <b>หน้ากริยาหลัก</b> คล้ายคำว่า “มักจะ” หรือ “ไม่เคย” ในภาษาไทย ไม่ใช่ท้ายประโยคแบบ “เสมอ”</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|ปกติฉันตื่นตอนเจ็ดโมง}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|ฉันไม่ดื่มกาแฟตอนกลางคืนเลย}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยของคนไทย: <b>I am go to school.</b> ✗ → <b>I go to school.</b> ✓ / <b>I not eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓</div>`,
check:[["ลำดับคำของ “ฉันดื่มกาแฟ” ข้อใดถูก",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"ประธาน + กริยา + กรรม เหมือนภาษาไทย"],["I ___ eat meat. (ไม่กิน) ช่องว่างควรเติมคำใด",["not","am not","no","don't"],3,"ปฏิเสธกริยาทั่วไปใช้ don't"],["always ควรอยู่ตรงไหน",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"คำบอกความถี่วางไว้หน้ากริยาหลัก"]],
practice:[
["mc","“ฉันเรียนภาษาอังกฤษ” ภาษาอังกฤษพูดว่าอย่างไร","I study English.","I English study.","I am study English.","Study I English.","ประธาน + กริยา + กรรม และไม่ต้องใส่ am หน้ากริยา"],
["mc","“ฉันไม่กินเนื้อสัตว์” ภาษาอังกฤษพูดว่าอย่างไร","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","ปฏิเสธกริยาทั่วไปใช้ don't"],
["mc","“เราอาศัยอยู่ที่โซล” ภาษาอังกฤษพูดว่าอย่างไร","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","สถานที่ตามหลังกริยา"],
["mc","“ปกติฉันตื่นตอนเจ็ดโมง” ภาษาอังกฤษพูดว่าอย่างไร","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually วางไว้หน้ากริยาหลัก"],
["mc","ประโยคไหนพูดถึงสิ่งที่ทำทุกวัน","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","กิจวัตรใช้ Present Simple Tense"],
["or","ฉันดื่มกาแฟทุกวัน","I drink coffee every day","the am","กิจวัตรใช้ Present Simple Tense และ coffee ที่พูดถึงทั่วไปไม่ใช้คำนำหน้านาม"],
["or","ฉันอ่านหนังสือเยอะ","I read many books","book","หลัง many คำนามต้องเป็นรูปพหูพจน์ books"],
["or","เราทำงานวันเสาร์อาทิตย์","We work on weekends","are","มีกริยา work แล้ว ไม่ต้องใส่ are"],
["fi","I __ like fish.","ฉันไม่ชอบปลา","don't|do not","not|am not|no","ปฏิเสธกริยาทั่วไปใช้ don't"],
["fi","I __ English every day.","ฉันเรียนภาษาอังกฤษทุกวัน","study","am study|studying|to study","Present Simple Tense ใช้กริยาช่อง 1 ตามปกติ"],
["fi","They live __ Busan.","พวกเขาอาศัยอยู่ที่ปูซาน","in","at|on|to","หน้าชื่อเมืองใช้ in"],
["ty","ฉันดื่มชา","I drink tea","drink · tea — ไม่ต้องมี a","a","tea ที่พูดถึงทั่วไปไม่ใช้คำนำหน้านาม"],
["ty","ฉันชอบแมว","I like cats","like · cat — แมวทั่วไป","cat","พูดถึงแมวทั้งหมดโดยทั่วไปใช้รูปพหูพจน์ cats"],
["ty","ฉันไม่กินเนื้อสัตว์","I don't eat meat","don't · eat · meat","am","ปฏิเสธกริยาทั่วไปใช้ don't ไม่ใช่ am not"]]},
{ id:"questions", title:"การตั้งคำถาม: Do you …? และคำแสดงคำถาม", blurb:"เติม ไหม ท้ายประโยคแบบภาษาไทยไม่ได้ ต้องเอา Do ไว้หน้า และคำแสดงคำถามไว้หน้าสุด", deck:"ภาษาอังกฤษเอาตัวรอด 2", body:`
<p>ภาษาไทยทำคำถามง่ายมาก แค่เติม “ไหม” หรือ “หรือเปล่า” ท้ายประโยค ลำดับคำเหมือนเดิม แต่ภาษาอังกฤษต้อง <b>เปลี่ยนลำดับคำ</b> ที่ต้นประโยค พูดว่า <b>You like coffee?</b> แล้วขึ้นเสียงท้าย ฟังเหมือนคนประหลาดใจ ไม่ใช่คำถามธรรมดา</p>
<h3>ประโยคที่มี Verb to be: สลับที่</h3>
<p>ถ้ากริยาในประโยคมีแค่ am / is / are ให้ย้ายไปไว้หน้าประธาน</p>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|เป็นอะไรหรือเปล่า / โอเคไหม}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|นี่กระเป๋าของคุณหรือเปล่า}}
<h3>ประโยคที่มีกริยาอื่น: เติม Do ไว้หน้า</h3>
<p>ถามตัวเองว่า “นอกจาก Verb to be มีกริยาอื่นหรือเปล่า” ถ้ามี เช่น like speak live ให้เติม <b>Do</b> ไว้ต้นประโยค ส่วนที่เหลือเรียงเหมือนเดิม Do ทำหน้าที่เหมือน “ไหม” แต่ย้ายมาอยู่ข้างหน้า</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|ชอบกาแฟไหม}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|พูดภาษาอังกฤษได้ไหม}}
<p>ตอบสั้น ๆ ด้วย do: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>คำแสดงคำถามไว้หน้าสุด</h3>
<p>ภาษาไทยวางคำถามไว้ตรงตำแหน่งของคำตอบ เช่น “คุณอยู่ <b>ที่ไหน</b>” แต่ภาษาอังกฤษต้องย้าย what (อะไร) where (ที่ไหน) when (เมื่อไร) who (ใคร) why (ทำไม) how (อย่างไร) ไปไว้หน้าสุด แล้วตามด้วยลำดับแบบคำถาม</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|คุณอยู่ที่ไหน}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|คุณทำงานอะไร}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|ห้องน้ำอยู่ที่ไหน}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|อันนี้ราคาเท่าไร}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยของคนไทย: <b>You live where?</b> ✗ → <b>Where do you live?</b> ✓ / <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["“ชอบกาแฟไหม” ภาษาอังกฤษพูดว่าอย่างไร",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"มีกริยา like จึงขึ้นต้นด้วย Do"],["“คุณอยู่ที่ไหน” ภาษาอังกฤษพูดว่าอย่างไร",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"คำแสดงคำถาม + do + ประธาน + กริยา"],["คำตอบที่ถูกของ Do you speak English? คือข้อใด",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"ถามด้วย Do ก็ตอบด้วย do"]],
practice:[
["mc","“พูดภาษาอังกฤษได้ไหม” ภาษาอังกฤษพูดว่าอย่างไร","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","มีกริยา speak จึงขึ้นต้นด้วย Do"],
["mc","“คุณอยู่ที่ไหน” ภาษาอังกฤษพูดว่าอย่างไร","Where do you live?","Where you live?","Where are you live?","Where live you?","คำแสดงคำถาม + do + ประธาน + กริยา"],
["mc","“อันนี้ราคาเท่าไร” ภาษาอังกฤษพูดว่าอย่างไร","How much is this?","How much this is?","How much does this?","What much is this?","ถามราคาใช้ How much is …?"],
["mc","Do you like tea? คำตอบที่ถูกคือข้อใด","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","ถามด้วย Do ก็ตอบด้วย do"],
["mc","“คุณทำงานอะไร” (ถามอาชีพ) ภาษาอังกฤษพูดว่าอย่างไร","What do you do?","What are you do?","What you do?","What do you?","ถามอาชีพใช้ What do you do?"],
["or","ชอบกาแฟไหม","Do you like coffee","Are the","มีกริยา like จึงใช้ Do และ coffee ที่พูดถึงทั่วไปไม่ใช้คำนำหน้านาม"],
["or","ห้องน้ำอยู่ที่ไหน","Where is the bathroom","a do","ห้องน้ำของที่นี่ที่ทั้งสองฝ่ายรู้ ใช้คำนำหน้านาม the"],
["or","คุณอยู่ที่ไหน","Where do you live","are","มีกริยา live จึงต้องใช้ do"],
["fi","__ you like music?","ชอบฟังเพลงไหม","Do","Are|Is|Does","มีกริยา like และประธานคือ you จึงใช้ Do"],
["fi","__ do you live?","คุณอยู่ที่ไหน","Where","What|Who|When","ถามสถานที่ใช้ where"],
["fi","What time __ it?","ตอนนี้กี่โมง","is","do|does|are","ไม่มีกริยาอื่น จึงถามด้วย Verb to be"],
["ty","พูดภาษาอังกฤษได้ไหม","Do you speak English|Can you speak English","do · speak · English","Are","มีกริยา speak จึงขึ้นต้นด้วย Do"],
["ty","ห้องน้ำอยู่ที่ไหน","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — ใช้ the","a","ห้องน้ำที่ทั้งสองฝ่ายรู้ว่าห้องไหน ใช้คำนำหน้านาม the"],
["ty","ชอบหมาไหม","Do you like dogs","do · like · dog — หมาทั่วไป","dog","พูดถึงหมาทั้งหมดโดยทั่วไปใช้รูปพหูพจน์ dogs"]]},
{ id:"third-s", title:"ประธานเอกพจน์บุรุษที่ 3: he she it เติม -s และ does / doesn't", blurb:"ประธานเป็นคนเดียวหรือสิ่งเดียว กริยาต้องเติม -s ส่วนคำถามและปฏิเสธใช้ does", deck:"แนะนำตัว", body:`
<p>กริยาภาษาไทยไม่เคยเปลี่ยนรูปตามประธาน “ฉันทำงาน” “เธอทำงาน” ใช้คำเดียวกัน แต่ใน Present Simple Tense ถ้าประธานเป็น <b>ประธานเอกพจน์บุรุษที่ 3</b> คือ he she it หรือคนเดียว สิ่งเดียว เช่น my mom กริยาต้องเติม <b>-s</b> นี่คือข้อผิดพลาดที่พบมากที่สุดเวลาคนไทยพูดภาษาอังกฤษ</p>
<div class="tbl"><table><tr><th>ประธาน</th><th>กริยา</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
<p>รู้กฎแล้วยังไม่พอ ต้องออกเสียง -s ให้ได้ยินด้วย ภาษาไทยไม่มีเสียง /s/ หรือ /z/ ท้ายพยางค์ จึงหายไปง่ายเวลาพูดเร็ว ดูคำอ่าน works แล้วออกเสียง /ks/ ท้ายคำให้ครบ</p>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|เธอทำงานที่ธนาคาร}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|เขาชอบฟุตบอล}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|แม่ของฉันทำอาหารเก่ง}}
<h3>กริยาที่เปลี่ยนรูปนิดหน่อย</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|เธอมีรถ (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|เขาไปทำงานตอนแปดโมง (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|เธอเรียนภาษาอังกฤษ (study → studies)}}
<h3>ปฏิเสธและคำถามใช้ does</h3>
<p>เมื่อใช้ <b>doesn't</b> หรือ <b>Does</b> ตัว -s ย้ายไปอยู่ที่ does แล้ว กริยาที่ตามมาจึงกลับเป็นกริยาช่อง 1 ไม่เติม -s</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|เขาไม่ดื่มกาแฟ}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|เธออยู่ที่นี่หรือเปล่า}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยของคนไทย: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ / <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. ช่องว่างควรเติมคำใด",["live","lives","living","is live"],1,"ประธานเอกพจน์บุรุษที่ 3 (she) กริยาต้องเติม -s"],["He ___ like coffee. ช่องว่างควรเติมคำใด",["don't","isn't","doesn't","not"],2,"ปฏิเสธเมื่อประธานเป็น he ใช้ doesn't"],["“เธอมีรถ” ภาษาอังกฤษพูดว่าอย่างไร",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"have เมื่อประธานเป็น she จะเปลี่ยนเป็น has"]],
practice:[
["mc","My brother ___ in Busan. ช่องว่างควรเติมคำใด","works","work","working","is work","พี่ชายคนเดียวเป็นประธานเอกพจน์บุรุษที่ 3 จึงใช้ works"],
["mc","“เขาไม่ดื่มกาแฟ” ภาษาอังกฤษพูดว่าอย่างไร","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he ใช้ doesn't + กริยาช่อง 1"],
["mc","“เธออยู่ที่นี่หรือเปล่า” ภาษาอังกฤษพูดว่าอย่างไร","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","หลัง Does กริยาไม่เติม -s"],
["mc","have → she ___","has","haves","have","is have","have เปลี่ยนเป็น has"],
["mc","study → he ___","studies","studys","study","studyes","พยัญชนะ + y เปลี่ยนเป็น -ies"],
["or","เธอทำงานที่ธนาคาร","She works at a bank","work the","ประธานเอกพจน์บุรุษที่ 3 จึงใช้ works และธนาคารที่พูดถึงครั้งแรกใช้คำนำหน้านาม a"],
["or","เขามีหมาสองตัว","He has two dogs","have dog","he ใช้ has และสองตัวต้องใช้รูปพหูพจน์ dogs"],
["or","เธอไม่กินเนื้อสัตว์","She doesn't eat meat","eats","หลัง doesn't กริยาไม่เติม -s"],
["fi","He __ soccer.","เขาชอบฟุตบอล","likes","like|liking|is like","ประธานเอกพจน์บุรุษที่ 3 (he) จึงใช้ likes"],
["fi","__ she speak English?","เธอพูดภาษาอังกฤษได้ไหม","Does","Do|Is|Are","คำถามเมื่อประธานเป็น she ใช้ Does"],
["fi","She __ to work at eight.","เธอไปทำงานตอนแปดโมง","goes","go|going|gos","go เปลี่ยนเป็น goes"],
["ty","เขามีรถ","He has a car","has · car — ใช้ a","have","he ใช้ has และรถคันเดียวต้องมีคำนำหน้านาม a"],
["ty","เธอชอบแมว","She likes cats","likes · cat — แมวทั่วไป","cat","she ใช้ likes และแมวทั่วไปใช้รูปพหูพจน์ cats"],
["ty","เขาไม่ได้อยู่ที่นี่","He doesn't live here","doesn't · live · here","lives","หลัง doesn't ใช้กริยาช่อง 1"]]},
{ id:"countable", title:"คำนามนับได้และนับไม่ได้: some any much many", blurb:"water ใช้ a ไม่ได้และเติม -s ไม่ได้ นับได้ใช้ many นับไม่ได้ใช้ much", deck:"สั่งอาหารในร้าน", body:`
<p>ภาษาไทยนับได้ทุกอย่างด้วยลักษณนาม เช่น “น้ำ 2 แก้ว” “ข้อมูล 2 อย่าง” จึงไม่มีอะไรบอกว่าคำไหนนับไม่ได้ แต่ภาษาอังกฤษแบ่งคำนามเป็น <b>คำนามนับได้</b> และ <b>คำนามนับไม่ได้</b> คำนามนับไม่ได้ใช้ a / an ไม่ได้ ใส่ตัวเลขข้างหน้าไม่ได้ และเติม -s ไม่ได้</p>
<div class="tbl"><table><tr><th>คำนามนับได้</th><th>คำนามนับไม่ได้</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>ใช้ a / an ตัวเลข และ -s ได้</td><td>ใช้ a / an ตัวเลข และ -s ไม่ได้</td></tr></table></div>
<p>คำที่คนไทยพลาดบ่อยเพราะภาษาไทยนับได้: information (ข้อมูล) advice (คำแนะนำ) homework (การบ้าน) furniture (เฟอร์นิเจอร์) knowledge (ความรู้) ทั้งหมดเป็นคำนามนับไม่ได้</p>
<h3>some และ any</h3>
<p>“บ้าง” หรือ “นิดหน่อย” ในประโยคบอกเล่าใช้ <b>some</b> ในประโยคปฏิเสธและคำถามใช้ <b>any</b> ยกเว้นเวลาขอหรือเสนอสิ่งของ แม้เป็นคำถามก็ใช้ <b>some</b>: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|ฉันมีเงินอยู่บ้าง}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|ฉันไม่มีเงินเลย}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|มีคำถามไหม}}
<h3>many และ much</h3>
<p>คำนามนับได้ใช้ <b>many</b> + รูปพหูพจน์ คำนามนับไม่ได้ใช้ <b>much</b> ส่วน <b>a lot of</b> ใช้ได้ทั้งสองแบบ</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|กี่คน}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|ราคาเท่าไร}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|ฉันมีเวลาไม่ค่อยมาก}}
<h3>นับคำนามนับไม่ได้อย่างไร</h3>
<p>ใช้คำบอกภาชนะหรือหน่วยนำหน้า ทำหน้าที่คล้ายลักษณนามในภาษาไทย</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|น้ำหนึ่งแก้ว}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|กาแฟหนึ่งถ้วย}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยของคนไทย: <b>a water</b> / <b>many money</b> / <b>many knowledge</b> ✗ → <b>some water</b> / <b>much money</b> / <b>a lot of knowledge</b> ✓</div>`,
check:[["How ___ people are there? ช่องว่างควรเติมคำใด",["much","many","any","a"],1,"people เป็นคำนามนับได้จึงใช้ many"],["คำใดเป็นคำนามนับไม่ได้",["apple","chair","water","friend"],2,"water ใช้ a ไม่ได้และเติม -s ไม่ได้"],["I don't have ___ money. ช่องว่างควรเติมคำใด",["some","a","many","any"],3,"ประโยคปฏิเสธใช้ any"]],
practice:[
["mc","Can I have ___ water? ช่องว่างควรเติมคำใด","some","a","many","an","water เป็นคำนามนับไม่ได้ ใช้ a หรือ many ไม่ได้"],
["mc","How ___ time do we have? ช่องว่างควรเติมคำใด","much","many","any","a","time เป็นคำนามนับไม่ได้จึงใช้ much"],
["mc","“มีคำถามไหม” ภาษาอังกฤษพูดว่าอย่างไร","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","คำนามนับได้หลัง any ต้องเป็นรูปพหูพจน์"],
["mc","“น้ำหนึ่งแก้ว” ภาษาอังกฤษพูดว่าอย่างไร","a glass of water","a water glass of","one waters","a glass water","คำนามนับไม่ได้นับด้วย a glass of"],
["mc","I have ___ friends in Seoul. ช่องว่างควรเติมคำใด","many","much","a","an","friends เป็นคำนามพหูพจน์ที่นับได้จึงใช้ many"],
["or","ฉันมีเงินอยู่บ้าง","I have some money","a moneys","money เป็นคำนามนับไม่ได้ จึงใช้คำนำหน้านาม a หรือเติม -s ไม่ได้"],
["or","ขอแอปเปิลสองลูก","Two apples please","apple","สองลูกต้องใช้รูปพหูพจน์ apples"],
["or","ฉันมีเวลาไม่ค่อยมาก","I don't have much time","many","time นับไม่ได้จึงใช้ much"],
["fi","How __ is this?","อันนี้ราคาเท่าไร","much","many|any|some","ถามราคาใช้ how much"],
["fi","I don't have __ questions.","ฉันไม่มีคำถาม","any","some|much|a","ประโยคปฏิเสธใช้ any"],
["fi","a cup __ coffee","กาแฟหนึ่งถ้วย","of","for|in|a","นับด้วยรูป a cup of …"],
["ty","ขอน้ำหน่อยได้ไหม","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — ไม่ใช้ a","a","water เป็นคำนามนับไม่ได้ จึงใช้ some แทนคำนำหน้านาม a"],
["ty","มีคำถามไหม","Do you have any questions","any · question — หลายข้อ","question","คำนามนับได้หลัง any ใช้รูปพหูพจน์ questions"],
["ty","กี่คน","How many people","how many · people","much","คนนับได้จึงใช้ many"]]},
{ id:"object-have", title:"me him her และกริยา have", blurb:"หลังกริยาใช้ me ไม่ใช่ I และอย่าลืมใส่กรรม พร้อมกริยาใช้บ่อยอย่าง have", deck:"แนะนำตัว", body:`
<p>คำสรรพนามภาษาไทยใช้รูปเดียวทั้งเป็นประธานและกรรม “ฉันรู้จักเขา” “เขารู้จักฉัน” แต่ภาษาอังกฤษต้อง <b>เปลี่ยนรูป</b> เมื่ออยู่ <b>หลังกริยาหรือคำบุพบท</b></p>
<div class="tbl"><table><tr><th>ประธาน</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>กรรม</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|เธอรู้จักฉัน}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|ฉันชอบเขา (ผู้ชาย)}}{{ex:Can you help us?|/kən ju ˈhelp əs/|ช่วยพวกเราหน่อยได้ไหม}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|ฉันทำงานกับเธอ}}
<h3>เขา แปลได้ทั้ง he และ she</h3>
<p>ภาษาพูดของไทยใช้ “เขา” กับทั้งผู้ชายและผู้หญิง แต่ภาษาอังกฤษต้องเลือก ผู้ชายใช้ he / him ผู้หญิงใช้ she / her: <b>My sister is a nurse. He works at night.</b> ✗ → <b>She works at night.</b> ✓</p>
<h3>อย่าทิ้งกรรม</h3>
<p>ภาษาไทยละกรรมได้เมื่อรู้กันอยู่แล้ว เช่น “ชอบ” “ไม่รู้จัก” แต่กริยาภาษาอังกฤษอย่าง like และ know ต้องมีกรรมตามเสมอ: <b>I like.</b> ✗ → <b>I like it.</b> ✓</p>
<h3>have: มี เป็นเจ้าของ</h3>
<p>ใช้เมื่อคนเป็นเจ้าของหรือมีสิ่งใดสิ่งหนึ่ง ทั้งครอบครัว สิ่งของ และเวลา ส่วน “มี” ที่แปลว่ามีอยู่ในสถานที่ใช้ there is ตามบทก่อนหน้า</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|ฉันมีพี่ชายสองคน}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|มีปากกาไหม}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|ฉันไม่มีเวลา}}
<h3>have: กิน ดื่ม</h3>
<p>have ใช้แทน “กิน” หรือ “ดื่ม” ได้ และชื่อมื้ออาหารอย่าง breakfast lunch dinner ไม่ใช้คำนำหน้านาม</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|ไปกินข้าวกลางวันกัน}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|ฉันดื่มกาแฟทุกเช้า}}
<div class="tip">ข้อผิดพลาดที่พบบ่อย: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓ / <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. (เขา ผู้ชาย) ช่องว่างควรเติมคำใด",["he","his","him","he's"],2,"หลังกริยาใช้รูปกรรม him"],["Can you help ___? (พวกเรา) ช่องว่างควรเติมคำใด",["us","we","our","ours"],0,"หลังกริยาใช้รูปกรรม us"],["“มีปากกาไหม” ภาษาอังกฤษพูดว่าอย่างไร",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have เป็นกริยาทั่วไปจึงถามด้วย Do"]],
practice:[
["mc","She knows ___. (ฉัน) ช่องว่างควรเติมคำใด","me","I","my","mine","หลังกริยาใช้รูปกรรม me"],
["mc","I like ___. (พวกเขา) ช่องว่างควรเติมคำใด","them","they","their","theirs","หลังกริยาใช้รูปกรรม them"],
["mc","“ช่วยพวกเราหน่อยได้ไหม” ภาษาอังกฤษพูดว่าอย่างไร","Can you help us?","Can you help we?","Can you help our?","Can us help you?","หลังกริยาใช้ us"],
["mc","“ไปกินข้าวกลางวันกัน” ภาษาอังกฤษพูดว่าอย่างไร","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","ชื่อมื้ออาหารไม่ใช้คำนำหน้านาม"],
["mc","“ฉันมีพี่ชายสองคน” ภาษาอังกฤษพูดว่าอย่างไร","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","ครอบครัวใช้ have และสองคนต้องเป็นรูปพหูพจน์"],
["or","มีปากกาไหม","Do you have a pen","the pens","ปากกาด้ามไหนก็ได้หนึ่งด้าม ใช้คำนำหน้านาม a และ pen ไม่เติม -s"],
["or","ฉันชอบเธอ","I like her","she","หลังกริยาใช้รูปกรรม her"],
["or","ฉันมีน้องสาวสองคน","I have two sisters","sister a","สองคนต้องใช้รูปพหูพจน์ sisters และไม่ใช้คำนำหน้านาม a"],
["fi","Call __ tonight.","คืนนี้โทรหาฉันนะ","me","I|my|mine","หลังกริยาใช้ me"],
["fi","I work with __.","ฉันทำงานกับเขา (ผู้ชาย)","him","he|his|he's","หลังคำบุพบทก็ใช้รูปกรรม"],
["fi","She __ a dog.","เธอเลี้ยงหมา","has","have|is|haves","ประธานเอกพจน์บุรุษที่ 3 (she) ใช้ has"],
["ty","ช่วยฉันหน่อยได้ไหม","Can you help me|Could you help me","can you · help · me","I","หลังกริยาใช้รูปกรรม me"],
["ty","มีปากกาไหม","Do you have a pen","do you have · pen — ใช้ a","the","หาปากกาด้ามไหนก็ได้ จึงใช้คำนำหน้านาม a"],
["ty","ฉันมีเพื่อนเยอะ","I have many friends|I have a lot of friends","have · many · friend — หลายคน","friend","หลัง many คำนามต้องเป็นรูปพหูพจน์ friends"]]},
{ id:"can-like", title:"can, like + -ing, I'd like: สิ่งที่ทำได้และสิ่งที่อยากได้", blurb:"บอกว่าทำอะไรได้ ชอบทำอะไร และตอนนี้อยากได้อะไร", deck:"คุยเล่น", body:`
<p>สามรูปประโยคนี้ใช้ได้ทันทีทั้งตอนแนะนำตัวและตอนสั่งอาหาร</p>
<h3>can: ทำได้</h3>
<p>ใช้ <b>can + กริยาช่อง 1</b> เสมอ แม้ประธานเป็น he หรือ she ก็ไม่เติม -s และไม่เปลี่ยนกริยาเป็นช่อง 2 ภาษาไทยวาง “ได้” ไว้ท้ายประโยค (ว่ายน้ำได้) แต่ can อยู่หน้ากริยา</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|ฉันว่ายน้ำได้}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|ฉันขับรถไม่เป็น}}{{ex:Can you speak Thai?|/kən ju ˈspiːk ˈtaɪ/|คุณพูดภาษาไทยได้ไหม}}
<h3>like + -ing: ชอบทำอะไร</h3>
<p>บอกงานอดิเรกด้วย like หรือ love แล้วตามด้วย <b>กริยาเติม -ing</b> ภาษาไทยเรียงกริยาต่อกันได้เลย (ชอบทำอาหาร) แต่ภาษาอังกฤษต้องเปลี่ยนกริยาตัวที่สองเป็นรูป -ing</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|ฉันชอบทำอาหาร}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|ฉันชอบดูหนังมาก}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|ฉันไม่ชอบวิ่ง}}
<p>“ชอบมาก” แปลตรงตัวเป็น <b>I like very.</b> ไม่ได้ เพราะ like ต้องมีกรรม และ very ใช้ขยายกริยาตรง ๆ ไม่ได้ ให้พูดว่า <b>I really like it.</b> หรือ <b>I like it very much.</b></p>
<h3>I'd like: ขอ… / อยากได้…</h3>
<p><b>I like</b> แปลว่าชอบเป็นประจำ ส่วน <b>I'd like</b> แปลว่าตอนนี้อยากได้ และสุภาพกว่า ตรงกับ “ขอ…หน่อย” เวลาสั่งอาหารหรือเครื่องดื่มจึงใช้ I'd like</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|ขอกาแฟหนึ่งแก้ว}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|รับชาไหม}}
<div class="tip">ข้อผิดพลาดที่พบบ่อย: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ / สั่งที่ร้านกาแฟ: <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. ช่องว่างควรเติมคำใด",["sings","sing","singing","to sing"],1,"หลัง can ใช้กริยาช่อง 1"],["“ฉันชอบทำอาหาร” ภาษาอังกฤษพูดว่าอย่างไร",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"หลัง like ใช้รูป -ing"],["สั่งที่ร้านกาแฟ พูดแบบไหนเป็นธรรมชาติที่สุด",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"สิ่งที่อยากได้ตอนนี้ใช้ I'd like"]],
practice:[
["mc","He can ___ Korean. ช่องว่างควรเติมคำใด","speak","speaks","speaking","to speak","หลัง can ใช้กริยาช่อง 1"],
["mc","“ฉันขับรถไม่เป็น” ภาษาอังกฤษพูดว่าอย่างไร","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","ปฏิเสธของ can คือ can't"],
["mc","“ฉันชอบดูหนัง” ภาษาอังกฤษพูดว่าอย่างไร","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","หลัง like ใช้รูป -ing และหนังทั่วไปใช้รูปพหูพจน์ movies"],
["mc","สั่งเครื่องดื่มว่า “ขอกาแฟหนึ่งแก้ว” ภาษาอังกฤษพูดว่าอย่างไร","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","สิ่งที่อยากได้ตอนนี้ใช้ I'd like"],
["mc","“รับชาไหม” ภาษาอังกฤษพูดว่าอย่างไร","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","เวลาเสนอใช้ Would you like …?"],
["or","ขอกาแฟหนึ่งแก้ว","I'd like a coffee please","the coffees","สั่งหนึ่งแก้วจึงใช้คำนำหน้านาม a และ coffee ไม่เติม -s"],
["or","ฉันชอบอ่านหนังสือ","I like reading books","book read","หลัง like ใช้รูป -ing และหนังสือทั่วไปใช้รูปพหูพจน์ books"],
["or","ว่ายน้ำเป็นไหม","Can you swim","swimming","หลัง can ใช้กริยาช่อง 1"],
["fi","I can't __.","ฉันว่ายน้ำไม่เป็น","swim","swimming|swims|to swim","หลัง can't ใช้กริยาช่อง 1"],
["fi","I like __ music.","ฉันชอบฟังเพลง","listening to","listen to|listen|to listening","หลัง like ใช้รูป -ing"],
["fi","__ like a sandwich, please.","ขอแซนด์วิชหนึ่งชิ้น","I'd|I would","I|I'm|I can","สั่งอาหารใช้ I'd like"],
["ty","ฉันชอบทำอาหาร","I like cooking|I love cooking|I like to cook","like · cook — ใช้ -ing","cook","หลัง like ใช้รูป -ing"],
["ty","ขอแซนด์วิชหนึ่งชิ้น","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — ใช้ a","the","แซนด์วิชชิ้นไหนก็ได้หนึ่งชิ้น จึงใช้คำนำหน้านาม a"],
["ty","ฉันชอบหมา","I like dogs|I love dogs","like · dog — หมาทั่วไป","dog","พูดถึงหมาทั่วไปใช้รูปพหูพจน์ dogs"]]},
{ id:"continuous", title:"กำลังทำอยู่: Present Continuous Tense (be + -ing)", blurb:"สิ่งที่ทำเป็นประจำใช้ Present Simple Tense สิ่งที่กำลังทำตอนนี้ใช้ be + -ing", deck:"คุยเล่น", body:`
<p>ภาษาไทยพูดว่า “ฉันทำงาน” ได้ทั้งความหมายว่าทำเป็นประจำและกำลังทำอยู่ หรือเติม “กำลัง” เมื่ออยากให้ชัด ภาษาอังกฤษแยกสองความหมายนี้เสมอ สิ่งที่ <b>กำลังทำอยู่ตอนนี้</b> ใช้ <b>be + กริยาเติม -ing</b></p>
<p>เทียบกับภาษาไทยได้ว่า -ing คือ “กำลัง” แต่ต้องมี am / is / are ด้วยทุกครั้ง ขาดไม่ได้: <b>She studying English.</b> ✗ → <b>She's studying English.</b> ✓</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|ตอนนี้ฉันกำลังทำงาน}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|เธอกำลังทำอาหารเย็น}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|ฝนกำลังตก}}
<h3>คำถามและประโยคปฏิเสธ</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|ตอนนี้ทำอะไรอยู่}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|ฟังอยู่หรือเปล่า}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|ฉันไม่ได้นอนอยู่}}
<h3>เทียบกับ Present Simple Tense</h3>
<div class="tbl"><table><tr><th>ทำเป็นประจำ (Present Simple)</th><th>กำลังทำตอนนี้ (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>กริยาที่ไม่เติม -ing</h3>
<p>กริยาที่บอก <b>สภาพ</b> เช่น like know want need และ have (ที่แปลว่ามี) ใช้ Present Simple Tense แม้จะหมายถึงตอนนี้ก็ตาม เหมือนที่ภาษาไทยไม่พูดว่า “กำลังรู้จัก” ภาษาอังกฤษก็ไม่พูดว่า I'm knowing</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|ฉันรู้จักเขา}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|ฉันอยากดื่มน้ำ}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยของคนไทย: ลืม Verb to be <b>I working.</b> ✗ → <b>I'm working.</b> ✓ / <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["“ตอนนี้ทำอะไรอยู่” ภาษาอังกฤษพูดว่าอย่างไร",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"สิ่งที่กำลังทำตอนนี้ถามด้วย be + -ing"],["I ___ coffee every morning. ช่องว่างควรเติมคำใด",["am drinking","drinking","drink","am drink"],2,"สิ่งที่ทำทุกวันใช้ Present Simple Tense"],["ประโยคใดถูกต้อง",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know want และ have (มี) ไม่ใช้รูป -ing"]],
practice:[
["mc","“ตอนนี้ฉันกำลังทำงาน” ภาษาอังกฤษพูดว่าอย่างไร","I'm working now.","I work now am.","I'm work now.","I working now.","สิ่งที่กำลังทำใช้ be + -ing"],
["mc","“เธอกำลังทำอาหารเย็น” ภาษาอังกฤษพูดว่าอย่างไร","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","ใช้ be + -ing และชื่อมื้ออาหารไม่ใช้คำนำหน้านาม"],
["mc","ประโยคไหนพูดถึงสิ่งที่ทำทุกวัน","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","กิจวัตรใช้ Present Simple Tense"],
["mc","“ตอนนี้ทำอะไรอยู่” ภาษาอังกฤษพูดว่าอย่างไร","What are you doing?","What do you doing?","What are you do?","What you are doing?","คำแสดงคำถาม + be + ประธาน + -ing"],
["mc","“ฉันรู้จักเขา” ภาษาอังกฤษพูดว่าอย่างไร","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know เป็นกริยาที่ไม่ใช้รูป -ing"],
["or","ฉันกำลังอ่านหนังสือ","I'm reading a book","read books","อ่านอยู่หนึ่งเล่ม จึงใช้คำนำหน้านาม a และ book ไม่เติม -s"],
["or","เด็ก ๆ กำลังเล่นกันอยู่","The kids are playing","kid is","เด็กหลายคนจึงใช้รูปพหูพจน์ kids คู่กับ are"],
["or","ตอนนี้ฝนกำลังตก","It's raining now","rains","สิ่งที่เกิดขึ้นตอนนี้ใช้ be + -ing"],
["fi","I'm __ TV.","ฉันกำลังดูทีวี","watching","watch|watches|to watch","หลัง be ใช้รูป -ing"],
["fi","What __ you doing?","ทำอะไรอยู่","are","do|is|does","you ใช้ are"],
["fi","She __ working today.","วันนี้เธอไม่ได้ทำงาน","isn't|is not","doesn't|don't|not","ปฏิเสธของ be + -ing คือ isn't"],
["ty","ตอนนี้ฉันกำลังทำอาหาร","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook — ใช้ -ing · now","cook","สิ่งที่กำลังทำใช้ be + -ing"],
["ty","ฉันกำลังดูหนัง","I'm watching a movie","I'm · watching · movie — ใช้ a","the","หนังเรื่องไหนก็ได้หนึ่งเรื่อง จึงใช้คำนำหน้านาม a"],
["ty","เด็ก ๆ กำลังนอนหลับ","The kids are sleeping|The children are sleeping","kids · are · sleeping — หลายคน","kid","เด็กหลายคนจึงใช้รูปพหูพจน์ kids คู่กับ are"]]},
{ id:"past", title:"과거형: was / were와 -ed", blurb:"be동사는 was·were, 일반동사는 -ed. 질문과 부정은 did.", deck:"스몰토크", body:`
<p>한국어의 '-았/었어요'에 해당해요. be동사와 일반동사의 과거가 따로 있어요.</p>
<h3>be동사의 과거: was / were</h3>
<p>I, he, she, it에는 <b>was</b>, you, we, they에는 <b>were</b>예요.</p>
{{ex:I was tired.|아이 워즈 타이어드|피곤했어요}}{{ex:It was fun.|잇 워즈 펀|재미있었어요}}{{ex:We were at home.|위 워 앳 홈|우리는 집에 있었어요}}{{ex:Were you busy?|워 유 비지?|바빴어요?}}
<h3>일반동사의 과거: -ed</h3>
<p>동사 끝에 <b>-ed</b>를 붙여요. 주어가 누구든 모양이 같아요.</p>
{{ex:I worked yesterday.|아이 웍트 예스터데이|어제 일했어요}}{{ex:We watched a movie.|위 왓치트 어 무비|우리는 영화를 봤어요}}{{ex:She called me.|쉬 콜드 미|그녀가 저한테 전화했어요}}
<h3>부정과 질문은 did</h3>
<p><b>didn't</b>나 <b>Did</b>를 쓰면 동사는 원래 모양으로 돌아가요.</p>
{{ex:I didn't work yesterday.|아이 디든 워크 예스터데이|어제 일 안 했어요}}{{ex:Did you call me?|디쥬 콜 미?|저한테 전화했어요?}}
<div class="tip">가장 흔한 실수: <b>I didn't worked.</b> (X) → <b>I didn't work.</b> (O), <b>I was work.</b> (X) → <b>I worked.</b> (O)</div>`,
check:[["They ___ at home yesterday. 빈칸에 알맞은 것은?",["was","were","did","are"],1,"they에는 were예요."],["'어제 일 안 했어요'를 영어로 하면?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't 뒤에는 동사원형이 와요."],["Did you ___ the movie? 빈칸에 알맞은 것은?",["watch","watched","watching","watches"],0,"Did 뒤에는 동사원형이 와요."]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","I에는 was예요."],
["mc","'우리는 영화를 봤어요' =","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","일반동사 과거는 -ed예요."],
["mc","'어제 전화했어요?' =","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did 뒤에는 동사원형이 와요."],
["mc","'재미있었어요' =","It was fun.","It were fun.","It did fun.","It funned.","it에는 was예요."],
["mc","'바빴어요?' =","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy는 상태라서 be동사로 물어요."],
["or","우리는 영화를 봤어요","We watched a movie","watch movies","영화 한 편이라 관사 a와 단수 movie예요."],
["or","저는 친구들과 놀았어요","I played with my friends","friend play","여러 명이라 복수 friends예요."],
["or","어제 일 안 했어요","I didn't work yesterday","worked","didn't 뒤에는 동사원형이 와요."],
["fi","We __ at home last night.","우리는 어젯밤에 집에 있었어요","were","was|did|are","we에는 were예요."],
["fi","I __ soccer yesterday.","어제 축구했어요","played","play|playing|was play","과거는 -ed예요."],
["fi","__ you work yesterday?","어제 일했어요?","Did","Were|Do|Was","일반동사 과거 질문은 Did예요."],
["ty","피곤했어요","I was tired","was · tired","were","I에는 was예요."],
["ty","저는 영화를 봤어요","I watched a movie","watched · movie — 관사 a","the","영화 한 편이라 관사 a를 붙여요."],
["ty","저는 친구들한테 전화했어요","I called my friends","called · my · friend — 복수","friend","여러 명이라 복수 friends예요."]]},
{ id:"irregular-past", title:"불규칙 과거: went, ate, saw", blurb:"가장 자주 쓰는 동사일수록 -ed가 아니에요. 12개만 먼저 외워요.", deck:"스몰토크", body:`
<p>매일 쓰는 동사들은 과거형이 <b>불규칙</b>이에요. 규칙이 없으니 짝으로 외워요.</p>
<div class="tbl"><table><tr><th>현재</th><th>과거</th><th>현재</th><th>과거</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Busan.|아이 웬 투 부산|부산에 갔어요}}{{ex:We ate pizza.|위 에잇 피짜|우리는 피자를 먹었어요}}{{ex:I saw a movie.|아이 쏘 어 무비|영화를 봤어요}}{{ex:I met my friends.|아이 멧 마이 프렌즈|친구들을 만났어요}}{{ex:I bought a book.|아이 봇 어 북|책을 한 권 샀어요}}
<h3>질문과 부정에서는 원래 모양으로</h3>
<p><b>did</b>가 과거를 표시하니까 동사는 원형으로 돌아가요.</p>
{{ex:What did you do?|왓 디쥬 두?|뭐 했어요?}}{{ex:Where did you go?|웨어 디쥬 고?|어디 갔어요?}}{{ex:I didn't go.|아이 디든 고|안 갔어요}}
<div class="tip">가장 흔한 실수: <b>I goed.</b> (X) → <b>I went.</b> (O), <b>Did you went?</b> (X) → <b>Did you go?</b> (O)</div>`,
check:[["go의 과거형은?",["goed","gone","went","going"],2,"go의 과거는 went예요."],["'뭐 했어요?'를 영어로 하면?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did 뒤에는 동사원형 do가 와요."],["I didn't ___ breakfast. 빈칸에 알맞은 것은?",["ate","eaten","eats","eat"],3,"didn't 뒤에는 동사원형이 와요."]],
practice:[
["mc","eat의 과거형은?","ate","eated","eat","eaten","eat의 과거는 ate예요."],
["mc","'어디 갔어요?' =","Where did you go?","Where did you went?","Where you went?","Where were you go?","did 뒤에는 동사원형이 와요."],
["mc","'저는 책을 한 권 샀어요' =","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy의 과거는 bought, 한 권이라 관사 a예요."],
["mc","see의 과거형은?","saw","seed","seen","sawed","see의 과거는 saw예요."],
["mc","'저는 안 갔어요' =","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't 뒤에는 동사원형이 와요."],
["or","저는 영화를 봤어요","I saw a movie","see movies","한 편이라 관사 a와 단수 movie예요. see의 과거는 saw예요."],
["or","우리는 피자를 먹었어요","We ate pizza","eated","eat의 과거는 ate예요."],
["or","저는 친구들을 만났어요","I met my friends","friend meet","여러 명이라 복수 friends예요."],
["fi","I __ to Jeju last year.","작년에 제주에 갔어요","went","go|goed|gone","go의 과거는 went예요."],
["fi","What did you __?","뭐 먹었어요?","eat","ate|eaten|eating","did 뒤에는 동사원형이 와요."],
["fi","She __ a new phone.","그녀는 새 휴대폰을 샀어요","bought","buyed|buy|buys","buy의 과거는 bought예요."],
["ty","저는 부산에 갔어요","I went to Busan","went · to · Busan","go","go의 과거는 went예요."],
["ty","저는 책을 한 권 샀어요","I bought a book","bought · book — 관사 a","the","한 권이라 관사 a를 붙여요."],
["ty","저는 친구들을 만났어요","I met my friends|I saw my friends","met · my · friend — 복수","friend","여러 명이라 복수 friends예요."]]},
{ id:"the", title:"the 다시 보기: 처음엔 a, 다음엔 the", blurb:"처음 꺼낼 땐 a, 서로 아는 것이 되면 the.", deck:"길 묻기·교통", body:`
<p>관사는 한 번에 익혀지지 않아요. 여기서는 <b>the</b>를 쓰는 때와 <b>아무것도 안 쓰는 때</b>를 다시 연습해요.</p>
<h3>처음엔 a, 다시 말할 땐 the</h3>
<p>듣는 사람이 처음 듣는 것이면 a, 방금 말해서 이제 아는 것이면 the예요.</p>
{{ex:I bought a shirt. The shirt is blue.|아이 봇 어 셔트. 더 셔트 이즈 블루|셔츠를 하나 샀어요. 그 셔츠는 파란색이에요}}
<h3>상황상 하나뿐이면 the</h3>
<p>이 방의 창문, 이 근처의 역처럼 무엇인지 뻔하면 처음부터 the예요.</p>
{{ex:Can you open the window?|캔 유 오픈 더 윈도우?|창문 좀 열어 줄래요?}}{{ex:Where's the subway station?|웨어즈 더 서브웨이 스테이션?|지하철역이 어디예요?}}{{ex:The sun is hot today.|더 썬 이즈 핫 투데이|오늘 햇볕이 뜨거워요}}
<h3>관사를 안 쓰는 표현</h3>
<p>자주 쓰는 장소·교통·식사 표현은 통째로 외워요.</p>
{{ex:I go to work by bus.|아이 고우 투 워크 바이 버스|저는 버스로 출근해요}}{{ex:I'm at home.|아임 앳 홈|저 집에 있어요}}{{ex:I go to bed at eleven.|아이 고우 투 베드 앳 일레븐|저는 11시에 자요}}
<div class="tip">스스로 물어보세요: "듣는 사람이 <b>어느 것인지</b> 알까?" 알면 the, 모르면 a예요.</div>`,
check:[["I have a cat. ___ cat is white. 빈칸에 알맞은 것은?",["A","An","The","(없음)"],2,"방금 말한 그 고양이라서 the예요."],["I go to ___ work by bus. 빈칸에 알맞은 것은?",["a","the","an","(없음)"],3,"go to work에는 관사를 쓰지 않아요."],["이 방의 창문을 열어 달라고 할 때 알맞은 말은?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"둘 다 아는 그 창문이라서 the예요."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","방금 말한 그 셔츠라서 the예요."],
["mc","'역이 어디예요?' =","Where's the station?","Where's a station?","Where's station?","Where the station?","이 근처의 그 역이라서 the예요."],
["mc","다음 중 알맞은 문장은?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work, by bus에는 관사가 없어요."],
["mc","'해가 뜨거워요' =","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","하나뿐인 것에는 the를 붙여요."],
["mc","'저 집에 있어요' =","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home에는 관사가 없어요."],
["or","창문 좀 열어 줄래요?","Can you open the window","a windows","둘 다 아는 그 창문이라 관사 the예요."],
["or","저는 버스로 출근해요","I go to work by bus","the a","go to work, by bus에는 관사를 쓰지 않아요."],
["or","그 개는 커요","The dog is big","A dogs","이미 말한 그 개라서 관사 the예요."],
["fi","I saw a movie. __ movie was great.","영화를 봤어요. 그 영화 정말 좋았어요","The","A|An|Some","방금 말한 그 영화라서 the예요."],
["fi","Where's __ bathroom?","화장실이 어디예요?","the","a|an|some","이 건물의 그 화장실이라서 the예요."],
["fi","I have __ idea.","좋은 생각이 있어요","an","a|the|some","처음 꺼내는 하나이고 모음 소리로 시작해서 an이에요."],
["ty","문 좀 닫아 줄래요?","Can you close the door|Could you close the door","can you · close · door — 관사 the","a","둘 다 아는 그 문이라 관사 the예요."],
["ty","역이 어디예요?","Where is the station|Where's the station","where · station — 관사 the","a","이 근처의 그 역이라 관사 the예요."],
["ty","저는 집에 있어요","I'm at home|I'm home","I'm · at · home — 관사 없이","the","home 앞에는 관사를 쓰지 않아요."]]},
{ id:"adjectives", title:"형용사와 비교: bigger, more expensive, the best", blurb:"형용사는 명사 앞에. 비교는 -er / more, 최고는 the -est / the most.", deck:"쇼핑·계산", body:`
<p>형용사는 명사 <b>앞</b>이나 be동사 <b>뒤</b>에 와요. 쇼핑할 때 꼭 필요한 비교 표현까지 같이 익혀요.</p>
{{ex:a big bag|어 빅 백|큰 가방}}{{ex:This bag is big.|디스 백 이즈 빅|이 가방은 커요}}{{ex:It's too small.|이츠 투 스몰|너무 작아요}}
<h3>비교: -er 또는 more</h3>
<p>짧은 단어는 <b>-er</b>, 긴 단어는 앞에 <b>more</b>를 붙여요. '~보다'는 <b>than</b>이에요.</p>
<div class="tbl"><table><tr><th>원래</th><th>더 ~한</th><th>가장 ~한</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|디스 원 이즈 치퍼|이게 더 싸요}}{{ex:It's more expensive than that one.|이츠 모어 익스펜시브 댄 댓 원|저것보다 더 비싸요}}{{ex:Do you have a bigger size?|두 유 해버 비거 사이즈?|더 큰 사이즈 있어요?}}
<h3>최상급에는 the</h3>
{{ex:This is the best restaurant here.|디스 이즈 더 베스트 레스토란트 히어|여기서 제일 좋은 식당이에요}}{{ex:Which is the cheapest?|위치 이즈 더 치피스트?|어느 게 제일 싸요?}}
<div class="tip">가장 흔한 실수: <b>more cheaper</b>, <b>more good</b> (X) → <b>cheaper</b>, <b>better</b> (O). -er와 more는 같이 쓰지 않아요.</div>`,
check:[["big의 비교급은?",["more big","biger","bigger","most big"],2,"짧은 단어는 -er, 끝 자음을 한 번 더 써요."],["This is ___ expensive than that. 빈칸에 알맞은 것은?",["more","most","much","very"],0,"긴 단어의 비교급은 more를 붙여요."],["good의 최상급은?",["the goodest","the most good","the better","the best"],3,"good – better – the best예요."]],
practice:[
["mc","cheap의 비교급은?","cheaper","more cheap","cheapper","most cheap","짧은 단어는 -er를 붙여요."],
["mc","'이게 더 비싸요' =","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","긴 단어는 more를 붙여요."],
["mc","'더 큰 사이즈 있어요?' =","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","관사 + 형용사 + 명사 순서예요."],
["mc","good의 비교급은?","better","gooder","more good","best","good – better – best예요."],
["mc","'여기가 제일 좋은 식당이에요' =","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","최상급 앞에는 the를 붙여요."],
["or","더 큰 사이즈 있어요?","Do you have a bigger size","the sizes","아무 사이즈 하나를 찾으니까 관사 a예요."],
["or","이게 제일 싸요","This is the cheapest","a cheaper","최상급 앞에는 관사 the를 붙여요."],
["or","이게 저것보다 싸요","This is cheaper than that","more","-er 형용사에는 more를 붙이지 않아요."],
["fi","It's __ small.","너무 작아요","too","much|more|most","'너무'는 too예요."],
["fi","This is cheaper __ that one.","이게 저것보다 싸요","than","then|that|more","'~보다'는 than이에요."],
["fi","It's the __ expensive one.","제일 비싼 거예요","most","more|much|very","긴 단어의 최상급은 the most예요."],
["ty","더 작은 사이즈 있어요?","Do you have a smaller size","smaller · size — 관사 a","the","아무 사이즈 하나를 찾으니까 관사 a예요."],
["ty","이게 제일 좋아요","This is the best|This one is the best","the · best — 관사 the","a","최상급 앞에는 관사 the를 붙여요."],
["ty","이게 더 싸요","This is cheaper|This one is cheaper","cheap — 비교급","more","짧은 단어는 -er를 붙여요."]]},
{ id:"going-to", title:"계획 말하기: be going to", blurb:"이미 마음먹은 일은 be going to + 동사.", deck:"스몰토크", body:`
<p>'~할 거예요'처럼 <b>미리 정한 계획</b>을 말할 때 써요. 틀은 <b>be + going to + 동사원형</b>이에요.</p>
{{ex:I'm going to visit Busan.|아임 고잉 투 비짓 부산|저는 부산에 갈 거예요}}{{ex:She's going to buy a car.|쉬즈 고잉 투 바이 어 카|그녀는 차를 살 거예요}}{{ex:We're going to have dinner.|위어 고잉 투 해브 디너|우리는 저녁을 먹을 거예요}}
<h3>부정과 질문</h3>
{{ex:I'm not going to go.|아임 낫 고잉 투 고|저는 안 갈 거예요}}{{ex:Are you going to come?|아 유 고잉 투 컴?|올 거예요?}}{{ex:What are you going to do this weekend?|왓 아 유 고잉 투 두 디스 위켄드?|이번 주말에 뭐 할 거예요?}}
<h3>보이는 대로 예상할 때도</h3>
{{ex:It's going to rain.|이츠 고잉 투 레인|비가 올 거예요}}
<h3>함께 쓰는 시간 표현</h3>
<p>tomorrow(내일), tonight(오늘 밤), this weekend(이번 주말), next week(다음 주)를 문장 끝에 붙여요.</p>
<div class="tip">말할 때는 going to가 <b>gonna(거나)</b>처럼 들려요. 그리고 be동사를 빼먹지 마세요: <b>I going to go.</b> (X) → <b>I'm going to go.</b> (O)</div>`,
check:[["'내일 친구를 만날 거예요'를 영어로 하면?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + 동사원형이에요."],["She ___ going to study. 빈칸에 알맞은 것은?",["am","are","is","be"],2,"she에는 is예요."],["'주말에 뭐 할 거예요?'를 영어로 하면?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"의문사 + be + 주어 + going to예요."]],
practice:[
["mc","'저는 부산에 갈 거예요' =","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + 동사원형이에요."],
["mc","They ___ going to come.","are","is","am","be","they에는 are예요."],
["mc","'비가 올 거예요' =","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to 뒤에는 동사원형이 와요."],
["mc","'저는 안 갈 거예요' =","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","be동사 뒤에 not을 넣어요."],
["mc","'올 거예요?' =","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","be동사를 앞으로 보내요."],
["or","그녀는 차를 살 거예요","She's going to buy a car","the cars","차 한 대라서 관사 a와 단수 car예요."],
["or","저는 친구들을 만날 거예요","I'm going to meet my friends","friend","여러 명이라 복수 friends예요."],
["or","우리는 저녁을 먹을 거예요","We're going to have dinner","a","식사 이름 dinner에는 관사를 쓰지 않아요."],
["fi","I'm going __ study tonight.","오늘 밤에 공부할 거예요","to","for|at|will","going to + 동사원형이에요."],
["fi","__ you going to come?","올 거예요?","Are","Do|Is|Will","you에는 Are예요."],
["fi","It's going to __ tomorrow.","내일 비가 올 거예요","rain","rains|raining|rained","going to 뒤에는 동사원형이 와요."],
["ty","저는 영화를 볼 거예요","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — 관사 a","the","아무 영화 한 편이라 관사 a예요."],
["ty","뭐 할 거예요?","What are you going to do","what · going to · do","will","계획을 물을 때는 be going to예요."],
["ty","저는 친구들을 만날 거예요","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — 복수","friend","여러 명이라 복수 friends예요."]]},
{ id:"joining", title:"문장 잇기: and, but, or, so, because", blurb:"짧은 문장 두 개를 하나로. so와 because는 순서가 반대예요.", deck:"감정·반응", body:`
<p>짧은 문장만 말하면 뚝뚝 끊겨요. 이 다섯 단어로 문장을 이으면 훨씬 자연스러워요.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|아이 라익 커피 앤 티|저는 커피와 차를 좋아해요}}{{ex:I'm tired but happy.|아임 타이어드 벗 해피|피곤하지만 행복해요}}{{ex:Coffee or tea?|커피 오어 티?|커피 아니면 차?}}
<h3>so: 그래서</h3>
<p><b>이유 + so + 결과</b> 순서예요. 한국어 '~해서'와 순서가 같아요.</p>
{{ex:I was tired, so I went home.|아이 워즈 타이어드 쏘 아이 웬 홈|피곤해서 집에 갔어요}}
<h3>because: 왜냐하면</h3>
<p><b>결과 + because + 이유</b> 순서예요. 한국어와 반대라서 주의해요.</p>
{{ex:I went home because I was tired.|아이 웬 홈 비코즈 아이 워즈 타이어드|피곤해서 집에 갔어요}}{{ex:I stayed home because it was raining.|아이 스테이드 홈 비코즈 잇 워즈 레이닝|비가 와서 집에 있었어요}}
<h3>too: ~도</h3>
{{ex:I like it too.|아이 라이킷 투|저도 좋아해요}}
<div class="tip">so와 because를 한 문장에 같이 쓰지 않아요: <b>Because I was tired, so I went home.</b> (X). 둘 중 하나만 고르세요.</div>`,
check:[["I was sick, ___ I stayed home. 빈칸에 알맞은 것은?",["because","but","so","or"],2,"이유 다음에 결과가 오면 so예요."],["I stayed home ___ I was sick. 빈칸에 알맞은 것은?",["because","so","but","and"],0,"결과 다음에 이유가 오면 because예요."],["'커피 드실래요, 차 드실래요?'에 알맞은 말은?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"둘 중 하나를 고를 때는 or예요."]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","반대되는 내용은 but으로 이어요."],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","이유 다음에 결과가 오면 so예요."],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","결과 다음에 이유가 오면 because예요."],
["mc","'커피 아니면 차?' =","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","둘 중 하나는 or예요."],
["mc","'피곤하지만 행복해요' =","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","'~지만'은 but이에요."],
["or","저는 고양이와 개를 좋아해요","I like cats and dogs","cat dog","동물 전체는 복수 cats, dogs로 말해요."],
["or","커피 한 잔이랑 샌드위치 하나 주세요","A coffee and a sandwich please","the or","하나씩 주문하니까 각각 관사 a를 붙여요."],
["or","배고파서 먹었어요","I was hungry so I ate","because","이유 다음에 결과가 오면 so예요."],
["fi","I'm tired __ happy.","피곤하지만 행복해요","but","so|because|or","'~지만'은 but이에요."],
["fi","I stayed home __ it was raining.","비가 와서 집에 있었어요","because","so|but|or","결과 다음에 이유가 오면 because예요."],
["fi","Coffee __ tea?","커피 아니면 차?","or","so|but|because","둘 중 하나는 or예요."],
["ty","저는 커피와 차를 좋아해요","I like coffee and tea","like · coffee · and · tea — 관사 없이","a","일반적인 coffee, tea에는 관사를 붙이지 않아요."],
["ty","피곤하지만 행복해요","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","'~지만'은 but이에요."],
["ty","저는 개와 고양이를 좋아해요","I like dogs and cats|I like cats and dogs","dog · and · cat — 복수","dog","동물 전체는 복수 dogs, cats로 말해요."]]},
];
