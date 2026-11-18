/* th-en stage A1: new lessons (source of truth), written for Thai speakers per docs/profiles/th.md. Shorthand is expanded by _dsl.js.
   The last lesson (tinglish) is th-only (profile §8 add; deviations.c.json). */
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
["ty","ที่นี่มีห้องน้ำไหม (ใช้ bathroom)","Is there a bathroom here|Is there a restroom here","is there · bathroom — ระวังคำนำหน้านาม","the","ถามว่ามีห้องน้ำไหม ผู้ฟังยังไม่รู้ว่าห้องไหน จึงใช้คำนำหน้านาม a"],
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
["ty","ฉันมีพี่สาวสองคน (ใช้ sister)","I have two sisters","have · two · sister — สองคน","sister","สองคนต้องใช้รูปพหูพจน์ sisters"],
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
<p>ภาษาไทยวางคำแสดงคำถามไว้ตรงตำแหน่งของคำตอบ เช่น “คุณอยู่ <b>ที่ไหน</b>” แต่ภาษาอังกฤษต้องย้าย what (อะไร) where (ที่ไหน) when (เมื่อไร) who (ใคร) why (ทำไม) how (อย่างไร) ไปไว้หน้าสุด แล้วตามด้วยลำดับแบบคำถาม</p>
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
["ty","ห้องน้ำอยู่ที่ไหน (ใช้ bathroom)","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — ใช้ the","a","ห้องน้ำที่ทั้งสองฝ่ายรู้ว่าห้องไหน ใช้คำนำหน้านาม the"],
["ty","ชอบหมาไหม","Do you like dogs","do · like · dog — หมาทั่วไป","dog","พูดถึงหมาทั้งหมดโดยทั่วไปใช้รูปพหูพจน์ dogs"]]},
{ id:"third-s", title:"ประธานเอกพจน์บุรุษที่ 3: he she it เติม -s และ does / doesn't", blurb:"ประธานเป็นคนเดียวหรือสิ่งเดียว กริยาต้องเติม -s ส่วนคำถามและปฏิเสธใช้ does", deck:"แนะนำตัว", body:`
<p>กริยาภาษาไทยไม่เคยเปลี่ยนรูปตามประธาน “ฉันทำงาน” “เธอทำงาน” ใช้คำเดียวกัน แต่ใน Present Simple Tense ถ้าประธานเป็น <b>ประธานเอกพจน์บุรุษที่ 3</b> คือ he she it หรือคนเดียว สิ่งเดียว เช่น my mom กริยาต้องเติม <b>-s</b> นี่คือข้อผิดพลาดที่พบบ่อยที่สุดอย่างหนึ่งเวลาคนไทยพูดภาษาอังกฤษ</p>
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
["ty","เขา (ผู้ชาย) มีรถ","He has a car","has · car — ใช้ a","have","he ใช้ has และรถคันเดียวต้องมีคำนำหน้านาม a"],
["ty","เธอชอบแมว","She likes cats","likes · cat — แมวทั่วไป","cat","she ใช้ likes และแมวทั่วไปใช้รูปพหูพจน์ cats"],
["ty","เขา (ผู้ชาย) ไม่ได้อาศัยอยู่ที่นี่","He doesn't live here","doesn't · live · here","lives","หลัง doesn't ใช้กริยาช่อง 1"]]},
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
<div class="tip">ข้อผิดพลาดที่พบบ่อย: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓ / <b>Have two brothers.</b> ✗ → <b>I have two brothers.</b> ✓ (ภาษาอังกฤษละประธานไม่ได้)</div>`,
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
{ id:"past", title:"Past Simple Tense: was / were และ -ed", blurb:"Verb to be ใช้ was / were กริยาอื่นเติม -ed ส่วนคำถามและปฏิเสธใช้ did", deck:"คุยเล่น", body:`
<p>ภาษาไทยบอกอดีตด้วยคำบอกเวลา เช่น “เมื่อวาน” หรือ “แล้ว” โดยกริยาไม่เปลี่ยนรูป แต่ภาษาอังกฤษต้องเปลี่ยนรูปกริยาเป็น <b>กริยาช่อง 2</b> ทุกครั้ง แม้จะมี yesterday อยู่แล้วก็ตาม คำบอกเวลาไม่ได้แทน Tense: <b>Yesterday I eat rice.</b> ✗ → <b>Yesterday I ate rice.</b> ✓</p>
<h3>Verb to be ในอดีต: was / were</h3>
<p>I he she it ใช้ <b>was</b> ส่วน you we they ใช้ <b>were</b></p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|ตอนนั้นฉันเหนื่อย}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|สนุกมาก}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|ตอนนั้นเราอยู่บ้าน}}{{ex:Were you busy?|/wər ju ˈbɪzi/|ตอนนั้นยุ่งไหม}}
<h3>กริยาอื่นในอดีต: เติม -ed</h3>
<p>เติม <b>-ed</b> ท้ายกริยา ใช้รูปเดียวกันกับทุกประธาน และต้องออกเสียงท้ายคำให้ได้ยิน -ed มีสามเสียง คือ /t/ /d/ หรือ /ɪd/ เช่น worked ลงท้ายด้วย /kt/ และ called ลงท้ายด้วย /ld/</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|เมื่อวานฉันทำงาน}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|เราดูหนังกัน}}{{ex:She called me.|/ʃi ˈkɔːld mi/|เธอโทรหาฉัน}}
<h3>ปฏิเสธและคำถามใช้ did</h3>
<p>เมื่อใช้ <b>didn't</b> หรือ <b>Did</b> ความเป็นอดีตอยู่ที่ did แล้ว กริยาที่ตามมาจึงกลับเป็นกริยาช่อง 1 ห้ามบอกอดีตซ้ำสองที่</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|เมื่อวานฉันไม่ได้ทำงาน}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|คุณโทรหาฉันหรือเปล่า}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยของคนไทย: <b>He didn't went.</b> ✗ → <b>He didn't go.</b> ✓ / <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. ช่องว่างควรเติมคำใด",["was","were","did","are"],1,"they ใช้ were"],["“เมื่อวานฉันไม่ได้ทำงาน” ภาษาอังกฤษพูดว่าอย่างไร",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"หลัง didn't ใช้กริยาช่อง 1"],["Did you ___ the movie? ช่องว่างควรเติมคำใด",["watch","watched","watching","watches"],0,"หลัง Did ใช้กริยาช่อง 1"]],
practice:[
["mc","I ___ tired yesterday. ช่องว่างควรเติมคำใด","was","were","did","am","I ใช้ was"],
["mc","“เราดูหนังกัน” (เรื่องที่ผ่านไปแล้ว) ภาษาอังกฤษพูดว่าอย่างไร","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","เรื่องที่ผ่านไปแล้วใช้กริยาช่อง 2: watched"],
["mc","“เมื่อวานโทรมาหรือเปล่า” ภาษาอังกฤษพูดว่าอย่างไร","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","หลัง Did ใช้กริยาช่อง 1"],
["mc","“สนุกมาก” (เมื่อวาน) ภาษาอังกฤษพูดว่าอย่างไร","It was fun.","It were fun.","It did fun.","It funned.","it ใช้ was"],
["mc","“ตอนนั้นยุ่งไหม” ภาษาอังกฤษพูดว่าอย่างไร","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy เป็นคำคุณศัพท์จึงถามด้วย Verb to be"],
["or","เราดูหนังกัน (หนึ่งเรื่อง)","We watched a movie","watch movies","หนังหนึ่งเรื่องใช้คำนำหน้านาม a และ movie ไม่เติม -s"],
["or","ฉันเล่นกับเพื่อน ๆ ของฉัน","I played with my friends","friend play","เพื่อนหลายคนจึงใช้รูปพหูพจน์ friends"],
["or","เมื่อวานฉันไม่ได้ทำงาน","I didn't work yesterday","worked","หลัง didn't ใช้กริยาช่อง 1"],
["fi","We __ at home last night.","เมื่อคืนเราอยู่บ้าน","were","was|did|are","we ใช้ were"],
["fi","I __ soccer yesterday.","เมื่อวานฉันเล่นฟุตบอล","played","play|playing|was play","มี yesterday ก็ต้องใช้กริยาช่อง 2: played"],
["fi","__ you work yesterday?","เมื่อวานทำงานหรือเปล่า","Did","Were|Do|Was","คำถามอดีตของกริยาทั่วไปใช้ Did"],
["ty","ฉันเหนื่อย (เรื่องที่ผ่านไปแล้ว)","I was tired","was · tired","were","I ใช้ was"],
["ty","ฉันดูหนังมา (หนึ่งเรื่อง)","I watched a movie","watched · movie — ใช้ a","the","หนังหนึ่งเรื่องใช้คำนำหน้านาม a"],
["ty","ฉันโทรหาเพื่อน ๆ ของฉัน (เรื่องที่ผ่านไปแล้ว)","I called my friends","called · my · friend — หลายคน","friend","เพื่อนหลายคนจึงใช้รูปพหูพจน์ friends"]]},
{ id:"irregular-past", title:"กริยาไม่ปกติในอดีต: went ate saw", blurb:"กริยาที่ใช้บ่อยที่สุดมักไม่เติม -ed จำ 12 คำนี้ก่อน", deck:"คุยเล่น", body:`
<p>กริยาที่ใช้ทุกวันส่วนใหญ่เป็น <b>กริยาไม่ปกติ</b> คือกริยาช่อง 2 ไม่ได้เติม -ed แต่เปลี่ยนเป็นคำใหม่ ไม่มีกฎให้เดา จึงต้องจำเป็นคู่ ช่อง 1 กับช่อง 2 และฝึกพิมพ์จนคล่อง</p>
<div class="tbl"><table><tr><th>ช่อง 1</th><th>ช่อง 2</th><th>ช่อง 1</th><th>ช่อง 2</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Chiang Mai.|/aɪ ˈwent tə ˌtʃɑːŋ ˈmaɪ/|ฉันไปเชียงใหม่มา}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|เรากินพิซซ่ากัน}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|ฉันดูหนังมา}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|ฉันไปเจอเพื่อน ๆ มา}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|ฉันซื้อหนังสือมาหนึ่งเล่ม}}
<h3>คำถามและปฏิเสธกลับไปใช้ช่อง 1</h3>
<p><b>did</b> บอกอดีตไว้แล้ว กริยาที่ตามมาจึงเป็นกริยาช่อง 1 เหมือนบทที่แล้ว</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|ทำอะไรมา}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|ไปไหนมา}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|ฉันไม่ได้ไป}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยของคนไทย: <b>She goed to the store.</b> ✗ → <b>She went to the store.</b> ✓ / <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["กริยาช่อง 2 ของ go",["goed","gone","went","going"],2,"go เป็นกริยาไม่ปกติ ช่อง 2 คือ went"],["“ทำอะไรมา” ภาษาอังกฤษพูดว่าอย่างไร",["What did you do?","What did you did?","What you did?","What were you do?"],0,"หลัง did ใช้กริยาช่อง 1 do"],["I didn't ___ breakfast. ช่องว่างควรเติมคำใด",["ate","eaten","eats","eat"],3,"หลัง didn't ใช้กริยาช่อง 1"]],
practice:[
["mc","กริยาช่อง 2 ของ eat","ate","eated","eat","eaten","eat เป็นกริยาไม่ปกติ ช่อง 2 คือ ate"],
["mc","“ไปไหนมา” ภาษาอังกฤษพูดว่าอย่างไร","Where did you go?","Where did you went?","Where you went?","Where were you go?","หลัง did ใช้กริยาช่อง 1"],
["mc","“ฉันซื้อหนังสือมาหนึ่งเล่ม” ภาษาอังกฤษพูดว่าอย่างไร","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","ช่อง 2 ของ buy คือ bought และหนึ่งเล่มต้องมีคำนำหน้านาม a"],
["mc","กริยาช่อง 2 ของ see","saw","seed","seen","sawed","see เป็นกริยาไม่ปกติ ช่อง 2 คือ saw"],
["mc","“ฉันไม่ได้ไป” ภาษาอังกฤษพูดว่าอย่างไร","I didn't go.","I didn't went.","I wasn't go.","I not went.","หลัง didn't ใช้กริยาช่อง 1"],
["or","ฉันดูหนังมา (หนึ่งเรื่อง)","I saw a movie","see movies","หนังหนึ่งเรื่องใช้คำนำหน้านาม a และ movie ไม่เติม -s ส่วนช่อง 2 ของ see คือ saw"],
["or","เรากินพิซซ่ากัน","We ate pizza","eated","ช่อง 2 ของ eat คือ ate"],
["or","ฉันไปเจอเพื่อน ๆ ของฉันมา","I met my friends","friend meet","เพื่อนหลายคนจึงใช้รูปพหูพจน์ friends"],
["fi","I __ to Jeju last year.","ปีที่แล้วฉันไปเกาะเชจู","went","go|goed|gone","ช่อง 2 ของ go คือ went"],
["fi","What did you __?","กินอะไรมา","eat","ate|eaten|eating","หลัง did ใช้กริยาช่อง 1"],
["fi","She __ a new phone.","เธอซื้อโทรศัพท์เครื่องใหม่","bought","buyed|buy|buys","ช่อง 2 ของ buy คือ bought"],
["ty","ฉันไปปูซานมา","I went to Busan","went · to · Busan","go","ช่อง 2 ของ go คือ went"],
["ty","ฉันซื้อหนังสือมาหนึ่งเล่ม","I bought a book","bought · book — ใช้ a","the","หนึ่งเล่มจึงใช้คำนำหน้านาม a"],
["ty","ฉันไปเจอเพื่อน ๆ ของฉันมา","I met my friends|I saw my friends","met · my · friend — หลายคน","friend","เพื่อนหลายคนจึงใช้รูปพหูพจน์ friends"]]},
{ id:"the", title:"ทบทวน the: ครั้งแรกใช้ a ครั้งต่อไปใช้ the", blurb:"พูดถึงครั้งแรกใช้ a เมื่อทั้งสองฝ่ายรู้แล้วว่าสิ่งไหน ใช้ the", deck:"ถามทางและการเดินทาง", body:`
<p>คำนำหน้านาม (article) ไม่มีในภาษาไทย จึงต้องฝึกหลายรอบกว่าจะใช้ได้เอง บทนี้ทบทวนว่าเมื่อไรใช้ <b>the</b> และเมื่อไร <b>ไม่ต้องใส่อะไรเลย</b></p>
<p>คนไทยมักคิดว่า the คือ “นี้” หรือ “นั้น” แต่ไม่ใช่ “นี้ / นั้น” คือ this / that ซึ่งชี้ของ ส่วน the แค่บอกว่า <b>ผู้ฟังรู้แล้วว่าหมายถึงสิ่งไหน</b></p>
<h3>ครั้งแรกใช้ a พูดถึงซ้ำใช้ the</h3>
<p>ถ้าผู้ฟังเพิ่งได้ยินเป็นครั้งแรกใช้ a ถ้าเพิ่งพูดถึงไปแล้วและผู้ฟังรู้ว่าชิ้นไหน ใช้ the</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|ฉันซื้อเสื้อมาตัวหนึ่ง เสื้อตัวนั้นสีฟ้า}}
<h3>สถานการณ์บอกอยู่แล้วว่าสิ่งไหน ใช้ the</h3>
<p>หน้าต่างในห้องนี้ สถานีแถวนี้ หรือสิ่งที่มีหนึ่งเดียวอย่างดวงอาทิตย์ ทุกคนรู้ว่าหมายถึงอะไร จึงใช้ the ได้ตั้งแต่ครั้งแรก</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|ช่วยเปิดหน้าต่างหน่อยได้ไหม}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|สถานีรถไฟใต้ดินอยู่ที่ไหน}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|วันนี้แดดร้อน}}
<h3>สำนวนที่ไม่ใช้คำนำหน้านาม</h3>
<p>สำนวนเกี่ยวกับสถานที่ การเดินทาง และมื้ออาหารที่ใช้บ่อย ให้จำเป็นชุด</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|ฉันนั่งรถเมล์ไปทำงาน}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|ฉันอยู่บ้าน}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|ฉันเข้านอนตอนห้าทุ่ม}}
<div class="tip">ถามตัวเองว่า “ผู้ฟังรู้ไหมว่า <b>สิ่งไหน</b>” ถ้ารู้ใช้ the ถ้าไม่รู้ใช้ a และอย่าลืมใส่ เพราะคนไทยพลาดจากการไม่ใส่มากกว่าใส่ผิด</div>`,
check:[["I have a cat. ___ cat is white. ช่องว่างควรเติมคำใด",["A","An","The","(ไม่ใส่)"],2,"แมวตัวที่เพิ่งพูดถึงไป จึงใช้ the"],["I go to ___ work by bus. ช่องว่างควรเติมคำใด",["a","the","an","(ไม่ใส่)"],3,"go to work ไม่ใช้คำนำหน้านาม"],["ขอให้ช่วยเปิดหน้าต่างในห้องนี้ พูดว่าอย่างไร",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"หน้าต่างที่ทั้งสองฝ่ายรู้ว่าบานไหน จึงใช้ the"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. ช่องว่างควรเติมคำใด","The","A","An","Some","เสื้อตัวที่เพิ่งพูดถึง จึงใช้คำนำหน้านาม the"],
["mc","“สถานีอยู่ที่ไหน” ภาษาอังกฤษพูดว่าอย่างไร","Where's the station?","Where's a station?","Where's station?","Where the station?","สถานีแถวนี้ที่ทั้งสองฝ่ายรู้ จึงใช้ the"],
["mc","ประโยคใดถูกต้อง","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work และ by bus ไม่ใช้คำนำหน้านาม"],
["mc","“แดดร้อน” ภาษาอังกฤษพูดว่าอย่างไร","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","สิ่งที่มีหนึ่งเดียวใช้ the"],
["mc","“ฉันอยู่บ้าน” ภาษาอังกฤษพูดว่าอย่างไร","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home ไม่ใช้คำนำหน้านาม"],
["or","ช่วยเปิดหน้าต่างหน่อยได้ไหม","Can you open the window","a windows","หน้าต่างที่ทั้งสองฝ่ายรู้ว่าบานไหน ใช้คำนำหน้านาม the"],
["or","ฉันนั่งรถเมล์ไปทำงาน","I go to work by bus","the a","go to work และ by bus ไม่ใช้คำนำหน้านาม"],
["or","หมาตัวนั้นตัวใหญ่ (ที่พูดถึงไปแล้ว)","The dog is big","A dogs","หมาตัวที่พูดถึงไปแล้ว จึงใช้คำนำหน้านาม the"],
["fi","I saw a movie. __ movie was great.","ฉันดูหนังมาเรื่องหนึ่ง หนังเรื่องนั้นดีมาก","The","A|An|Some","หนังเรื่องที่เพิ่งพูดถึง จึงใช้ the"],
["fi","Where's __ bathroom?","ห้องน้ำอยู่ที่ไหน","the","a|an|some","ห้องน้ำของที่นี่ที่ทั้งสองฝ่ายรู้ จึงใช้ the"],
["fi","I have __ idea.","ฉันมีไอเดียอย่างหนึ่ง","an","a|the|some","พูดถึงครั้งแรกและขึ้นต้นด้วยเสียงสระ จึงใช้ an"],
["ty","ช่วยปิดประตูหน่อยได้ไหม","Can you close the door|Could you close the door","can you · close · door — ใช้ the","a","ประตูที่ทั้งสองฝ่ายรู้ว่าบานไหน ใช้คำนำหน้านาม the"],
["ty","สถานีอยู่ที่ไหน","Where is the station|Where's the station","where · station — ใช้ the","a","สถานีแถวนี้ที่ทั้งสองฝ่ายรู้ ใช้คำนำหน้านาม the"],
["ty","ฉันอยู่บ้าน","I'm at home|I'm home","I'm · at · home — ไม่ใช้ the","the","home ไม่ใช้คำนำหน้านาม"]]},
{ id:"adjectives", title:"คำคุณศัพท์และการเปรียบเทียบ: bigger, more expensive, the best", blurb:"คำคุณศัพท์วางหน้าคำนาม ขั้นกว่าใช้ -er / more ขั้นสูงสุดใช้ the -est / the most", deck:"ช้อปปิ้งและจ่ายเงิน", body:`
<p>ภาษาไทยวางคำขยายไว้หลังคำนาม “กระเป๋าใบใหญ่” แต่ภาษาอังกฤษวาง <b>คำคุณศัพท์ไว้หน้าคำนาม</b>: <b>a big bag</b> และถ้าคำคุณศัพท์อยู่ท้ายประโยค ต้องมี Verb to be นำหน้าเสมอ: <b>This bag is big.</b> (ไม่ใช่ This bag big.) บทนี้เรียนการเปรียบเทียบที่ใช้บ่อยตอนช้อปปิ้งด้วย</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|กระเป๋าใบใหญ่}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|กระเป๋าใบนี้ใหญ่}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|เล็กเกินไป}}
<h3>ขั้นกว่า: -er หรือ more</h3>
<p>คำว่า “กว่า” ภาษาอังกฤษทำได้สองแบบ คำสั้นเติม <b>-er</b> คำยาวใส่ <b>more</b> ข้างหน้า และ “กว่า…” ที่ตามด้วยสิ่งที่เทียบใช้ <b>than</b></p>
<div class="tbl"><table><tr><th>รูปปกติ</th><th>ขั้นกว่า</th><th>ขั้นสูงสุด</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|อันนี้ถูกกว่า}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|อันนี้แพงกว่าอันนั้น}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|มีไซซ์ใหญ่กว่านี้ไหม}}
<h3>ขั้นสูงสุดใช้ the</h3>
<p>“ที่สุด” ใช้ <b>the</b> + -est หรือ <b>the most</b> เพราะของที่ดีที่สุดมีอยู่หนึ่งเดียว</p>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|นี่คือร้านอาหารที่ดีที่สุดแถวนี้}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|อันไหนถูกที่สุด}}
<div class="tip">ข้อผิดพลาดที่พบบ่อย: <b>more cheaper</b> / <b>more good</b> ✗ → <b>cheaper</b> / <b>better</b> ✓ ใช้ -er หรือ more อย่างใดอย่างหนึ่งเท่านั้น</div>`,
check:[["ขั้นกว่าของ big",["more big","biger","bigger","most big"],2,"big ลงท้ายด้วยสระเดี่ยว + พยัญชนะตัวเดียว จึงเพิ่ม g อีกตัวก่อนเติม -er: bigger"],["This is ___ expensive than that. ช่องว่างควรเติมคำใด",["more","most","much","very"],0,"คำยาวทำขั้นกว่าด้วย more"],["ขั้นสูงสุดของ good",["the goodest","the most good","the better","the best"],3,"good เปลี่ยนรูปพิเศษ: good – better – the best"]],
practice:[
["mc","ขั้นกว่าของ cheap","cheaper","more cheap","cheapper","most cheap","คำสั้นเติม -er"],
["mc","“อันนี้แพงกว่า” ภาษาอังกฤษพูดว่าอย่างไร","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","คำยาวใช้ more"],
["mc","“มีไซซ์ใหญ่กว่านี้ไหม” ภาษาอังกฤษพูดว่าอย่างไร","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","เรียงเป็น คำนำหน้านาม + คำคุณศัพท์ + คำนาม"],
["mc","ขั้นกว่าของ good","better","gooder","more good","best","good เปลี่ยนรูปพิเศษ: good – better – best"],
["mc","“ที่นี่คือร้านอาหารที่ดีที่สุด” ภาษาอังกฤษพูดว่าอย่างไร","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","ขั้นสูงสุดต้องมี the นำหน้า"],
["or","มีไซซ์ใหญ่กว่านี้ไหม","Do you have a bigger size","the sizes","ถามหาไซซ์ไหนก็ได้หนึ่งไซซ์ จึงใช้คำนำหน้านาม a"],
["or","อันนี้ถูกที่สุด","This is the cheapest","a cheaper","ขั้นสูงสุดต้องมีคำนำหน้านาม the"],
["or","อันนี้ถูกกว่าอันนั้น","This is cheaper than that","more","คำที่เติม -er แล้วไม่ต้องใส่ more"],
["fi","It's __ small.","เล็กเกินไป","too","much|more|most","“เกินไป” ใช้ too"],
["fi","This is cheaper __ that one.","อันนี้ถูกกว่าอันนั้น","than","then|that|more","“กว่า…” ใช้ than"],
["fi","It's the __ expensive one.","อันนี้แพงที่สุด","most","more|much|very","ขั้นสูงสุดของคำยาวใช้ the most"],
["ty","มีไซซ์เล็กกว่านี้ไหม","Do you have a smaller size","smaller · size — ใช้ a","the","ถามหาไซซ์ไหนก็ได้หนึ่งไซซ์ จึงใช้คำนำหน้านาม a"],
["ty","อันนี้ดีที่สุด","This is the best|This one is the best","the · best — ใช้ the","a","ขั้นสูงสุดต้องมีคำนำหน้านาม the"],
["ty","อันนี้ถูกกว่า","This is cheaper|This one is cheaper","cheap — ขั้นกว่า","more","คำสั้นเติม -er"]]},
{ id:"going-to", title:"พูดถึงแผน: be going to", blurb:"สิ่งที่ตัดสินใจไว้แล้วใช้ be going to + กริยาช่อง 1", deck:"คุยเล่น", body:`
<p>ภาษาไทยใช้ “จะ” กับอนาคตทุกแบบ แต่ภาษาอังกฤษมีหลายรูป เมื่อพูดถึง <b>แผนที่ตัดสินใจไว้แล้ว</b> ใช้ <b>be + going to + กริยาช่อง 1</b> (ส่วน will จะได้เรียนภายหลัง)</p>
{{ex:I'm going to visit Chiang Mai.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˌtʃɑːŋ ˈmaɪ/|ฉันจะไปเที่ยวเชียงใหม่}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|เธอจะซื้อรถ}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|เราจะไปกินข้าวเย็นกัน}}
<h3>ปฏิเสธและคำถาม</h3>
<p>เติม not หลัง am / is / are และย้าย am / is / are ไปไว้หน้าประธานเมื่อเป็นคำถาม เหมือนประโยคที่มี Verb to be ทั่วไป</p>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|ฉันจะไม่ไป}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|จะมาไหม}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|สุดสัปดาห์นี้จะทำอะไร}}
<h3>คาดการณ์จากสิ่งที่เห็นอยู่ตรงหน้า</h3>
<p>เห็นเมฆดำแล้วรู้ว่าฝนจะตก ก็ใช้ going to ได้เช่นกัน</p>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|ฝนจะตกแล้ว}}
<h3>คำบอกเวลาที่ใช้คู่กัน</h3>
<p>tomorrow (พรุ่งนี้) tonight (คืนนี้) this weekend (สุดสัปดาห์นี้) next week (สัปดาห์หน้า) มักวางไว้ท้ายประโยค แต่คำบอกเวลาไม่ได้แทน Tense ต้องมี going to หรือ will ด้วยเสมอ: <b>Tomorrow I go to Phuket.</b> ✗ → <b>Tomorrow I'm going to go to Phuket.</b> ✓</p>
<div class="tip">เวลาพูดเร็ว going to มักออกเสียงเป็น <b>gonna</b> และอย่าลืม Verb to be: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["“พรุ่งนี้ฉันจะไปเจอเพื่อน” ภาษาอังกฤษพูดว่าอย่างไร",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + กริยาช่อง 1"],["She ___ going to study. ช่องว่างควรเติมคำใด",["am","are","is","be"],2,"she ใช้ is"],["“สุดสัปดาห์นี้จะทำอะไร” ภาษาอังกฤษพูดว่าอย่างไร",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"คำแสดงคำถาม + be + ประธาน + going to"]],
practice:[
["mc","“ฉันจะไปปูซาน” ภาษาอังกฤษพูดว่าอย่างไร","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + กริยาช่อง 1"],
["mc","They ___ going to come. ช่องว่างควรเติมคำใด","are","is","am","be","they ใช้ are"],
["mc","“ฝนจะตกแล้ว” ภาษาอังกฤษพูดว่าอย่างไร","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","หลัง going to ใช้กริยาช่อง 1"],
["mc","“ฉันจะไม่ไป” ภาษาอังกฤษพูดว่าอย่างไร","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","เติม not หลัง Verb to be"],
["mc","“จะมาไหม” ภาษาอังกฤษพูดว่าอย่างไร","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","ย้าย Verb to be ไปไว้หน้าประธาน"],
["or","เธอจะซื้อรถ","She's going to buy a car","the cars","รถหนึ่งคันใช้คำนำหน้านาม a และ car ไม่เติม -s"],
["or","ฉันจะไปเจอเพื่อน ๆ ของฉัน","I'm going to meet my friends","friend","เพื่อนหลายคนจึงใช้รูปพหูพจน์ friends"],
["or","เราจะไปกินข้าวเย็นกัน","We're going to have dinner","a","ชื่อมื้ออาหารอย่าง dinner ไม่ใช้คำนำหน้านาม"],
["fi","I'm going __ study tonight.","คืนนี้ฉันจะอ่านหนังสือ","to","for|at|will","going to + กริยาช่อง 1"],
["fi","__ you going to come?","จะมาไหม","Are","Do|Is|Will","you ใช้ Are"],
["fi","It's going to __ tomorrow.","พรุ่งนี้ฝนจะตก","rain","rains|raining|rained","หลัง going to ใช้กริยาช่อง 1"],
["ty","ฉันตั้งใจจะดูหนังหนึ่งเรื่อง (ใช้ going to)","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — ใช้ a","the","หนังเรื่องไหนก็ได้หนึ่งเรื่อง จึงใช้คำนำหน้านาม a"],
["ty","ตั้งใจจะทำอะไร (ใช้ going to)","What are you going to do","what · going to · do","will","ถามถึงแผนใช้ be going to"],
["ty","ฉันตั้งใจจะไปเจอเพื่อน ๆ ของฉัน (ใช้ going to)","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — หลายคน","friend","เพื่อนหลายคนจึงใช้รูปพหูพจน์ friends"]]},
{ id:"joining", title:"เชื่อมประโยค: and, but, or, so, because", blurb:"รวมประโยคสั้นสองประโยคเป็นหนึ่งเดียว และใช้คำเชื่อมทีละคำ ไม่ใช้เป็นคู่แบบภาษาไทย", deck:"ความรู้สึกและปฏิกิริยา", body:`
<p>พูดแต่ประโยคสั้น ๆ จะฟังขาดเป็นช่วง ๆ ใช้คำสันธาน (คำเชื่อม) ห้าคำนี้ต่อประโยคเข้าด้วยกันจะฟังเป็นธรรมชาติขึ้นมาก</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|ฉันชอบกาแฟและชา}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|เหนื่อยแต่มีความสุข}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|กาแฟหรือชา}}
<h3>so: ก็เลย / จึง</h3>
<p>เรียงเป็น <b>เหตุ + so + ผล</b> เหมือน “…ก็เลย…” ในภาษาไทย</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|ฉันเหนื่อยก็เลยกลับบ้าน}}
<h3>because: เพราะ</h3>
<p>เรียงเป็น <b>ผล + because + เหตุ</b> เหมือน “…เพราะ…” ในภาษาไทย</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|ฉันกลับบ้านเพราะเหนื่อย}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|ฉันอยู่บ้านเพราะฝนตก}}
<h3>คำเชื่อมเป็นคู่ของภาษาไทย ภาษาอังกฤษใช้แค่คำเดียว</h3>
<p>ภาษาไทยชอบใช้คำเชื่อมเป็นคู่ เช่น “<b>เพราะ</b>เหนื่อย <b>จึง</b>กลับบ้าน” หรือ “<b>ถึงแม้</b>ฝนตก <b>แต่</b>ฉันก็ไป” ภาษาอังกฤษเลือกได้แค่คำเดียว: because <b>หรือ</b> so และ although <b>หรือ</b> but</p>
<h3>too: ด้วย</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|ฉันก็ชอบเหมือนกัน}}
<div class="tip">ห้ามใช้ because กับ so ในประโยคเดียวกัน: <b>Because I was tired, so I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓ ในทำนองเดียวกัน <b>Although it rained, but I went.</b> ✗</div>`,
check:[["I was sick, ___ I stayed home. ช่องว่างควรเติมคำใด",["because","but","so","or"],2,"เหตุมาก่อนแล้วตามด้วยผล ใช้ so"],["I stayed home ___ I was sick. ช่องว่างควรเติมคำใด",["because","so","but","and"],0,"ผลมาก่อนแล้วตามด้วยเหตุ ใช้ because"],["“รับกาแฟหรือชา” พูดว่าอย่างไร",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"ให้เลือกอย่างใดอย่างหนึ่งใช้ or"]],
practice:[
["mc","I like dogs ___ I don't like cats. ช่องว่างควรเติมคำใด","but","so","or","because","เนื้อหาที่ขัดกันเชื่อมด้วย but"],
["mc","I was hungry, ___ I ate a sandwich. ช่องว่างควรเติมคำใด","so","because","but","or","เหตุมาก่อนแล้วตามด้วยผล ใช้ so"],
["mc","I ate a sandwich ___ I was hungry. ช่องว่างควรเติมคำใด","because","so","but","or","ผลมาก่อนแล้วตามด้วยเหตุ ใช้ because"],
["mc","“กาแฟหรือชา” ภาษาอังกฤษพูดว่าอย่างไร","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","ให้เลือกอย่างใดอย่างหนึ่งใช้ or"],
["mc","“เหนื่อยแต่มีความสุข” ภาษาอังกฤษพูดว่าอย่างไร","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","“แต่” ใช้ but"],
["or","ฉันชอบแมวและหมา","I like cats and dogs","cat dog","พูดถึงสัตว์ทั่วไปใช้รูปพหูพจน์ cats และ dogs"],
["or","ขอกาแฟหนึ่งแก้วกับแซนด์วิชหนึ่งชิ้น","A coffee and a sandwich please","the or","สั่งอย่างละหนึ่งจึงใช้คำนำหน้านาม a กับทั้งสองคำ"],
["or","ฉันหิวก็เลยกิน","I was hungry so I ate","because","เหตุมาก่อนแล้วตามด้วยผล ใช้ so"],
["fi","I'm tired __ happy.","เหนื่อยแต่มีความสุข","but","so|because|or","“แต่” ใช้ but"],
["fi","I stayed home __ it was raining.","ฉันอยู่บ้านเพราะฝนตก","because","so|but|or","ผลมาก่อนแล้วตามด้วยเหตุ ใช้ because"],
["fi","Coffee __ tea?","กาแฟหรือชา","or","so|but|because","ให้เลือกอย่างใดอย่างหนึ่งใช้ or"],
["ty","ฉันชอบกาแฟและชา","I like coffee and tea","like · coffee · and · tea — ไม่ใช้ a","a","coffee และ tea ที่พูดถึงทั่วไปไม่ใช้คำนำหน้านาม"],
["ty","เหนื่อยแต่มีความสุข","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","“แต่” ใช้ but"],
["ty","ฉันชอบหมาและแมว","I like dogs and cats|I like cats and dogs","dog · and · cat — สัตว์ทั่วไป","dog","พูดถึงสัตว์ทั่วไปใช้รูปพหูพจน์ dogs และ cats"]]},
{ id:"tinglish", title:"ภาษาอังกฤษแบบไทย: คำที่คนไทยพลาดบ่อย", blurb:"close the light หรือ check bill คนไทยฟังเข้าใจ แต่เวลาคุยกับชาวต่างชาติให้พูดแบบเจ้าของภาษา", deck:"กับดักภาษาอังกฤษแบบไทย", body:`
<p>ภาษาอังกฤษแบบไทย (Tinglish) หลายคำไม่ได้ผิดไวยากรณ์ แต่เกิดจากการแปลคำไทยทีละคำ ในประเทศไทยทุกคนฟังเข้าใจ เพราะคิดจากภาษาไทยเหมือนกัน แต่เจ้าของภาษาหรือคนในต่างประเทศอาจงง บทนี้รวมคำที่เจอบ่อยที่สุด พร้อมคำที่ควรพูดแทน</p>
<h3>กริยาที่แปลตรงตัวจากภาษาไทย</h3>
<div class="tbl"><table><tr><th>ภาษาไทย</th><th>แบบไทย ✗</th><th>เจ้าของภาษาพูด ✓</th></tr><tr><td>เปิดไฟ / ปิดไฟ</td><td>open / close the light</td><td class="k">turn on / turn off the light</td></tr><tr><td>ไปช้อปปิ้ง</td><td>go to shopping</td><td class="k">go shopping</td></tr><tr><td>เล่นมือถือ เล่นเฟซบุ๊ก</td><td>play phone / play Facebook</td><td class="k">be on my phone / be on Facebook</td></tr><tr><td>เช็กบิล</td><td>Check bill!</td><td class="k">Check, please. / Can I get the check?</td></tr></table></div>
<p>เปิด / ปิด ประตูและหน้าต่างใช้ open / close แต่ไฟและเครื่องใช้ไฟฟ้าใช้ turn on / turn off และอย่าลืมคำนำหน้านาม the หน้า light เพราะทุกคนรู้ว่าหมายถึงไฟดวงไหน</p>
{{ex:Turn on the light.|/ˈtɜːrn ˈɑːn ðə ˈlaɪt/|เปิดไฟ}}{{ex:Turn off the light.|/ˈtɜːrn ˈɔːf ðə ˈlaɪt/|ปิดไฟ}}{{ex:I go shopping on weekends.|/aɪ ˈgoʊ ˈʃɑːpɪŋ ɑːn ˈwiːkendz/|ฉันไปช้อปปิ้งทุกสุดสัปดาห์}}{{ex:I'm on my phone.|/aɪm ɑːn maɪ ˈfoʊn/|ฉันกำลังเล่นมือถือ}}{{ex:Check, please.|/ˈtʃek ˈpliːz/|เช็กบิลด้วย}}
<h3>คำที่คนไทยใช้ แต่เจ้าของภาษาไม่ใช้</h3>
<div class="tbl"><table><tr><th>แบบไทย ✗</th><th>เจ้าของภาษาพูด ✓</th></tr><tr><td>same same</td><td class="k">It's the same. / They're similar. / Same here.</td></tr><tr><td>go to fitness</td><td class="k">go to the gym</td></tr><tr><td>American share</td><td class="k">split the bill</td></tr><tr><td>hi-so</td><td class="k">fancy / upscale (สถานที่) · posh (คน)</td></tr></table></div>
{{ex:It's the same.|/ɪts ðə ˈseɪm/|เหมือนกันเลย}}{{ex:Same here.|/ˈseɪm ˈhɪr/|ฉันก็เหมือนกัน}}{{ex:I'm going to the gym.|/aɪm ˈgoʊɪŋ tə ðə ˈdʒɪm/|ฉันจะไปยิม}}{{ex:Let's split the bill.|/ˈlets ˈsplɪt ðə ˈbɪl/|หารกันเถอะ}}
<h3>bored กับ boring</h3>
<p>“ฉันเบื่อ” แปลว่า <b>I'm bored.</b> ไม่ใช่ I'm boring. ซึ่งแปลว่า “ฉันเป็นคนน่าเบื่อ” กฎง่าย ๆ คือ ความรู้สึกของเราใช้ <b>-ed</b> (bored interested tired) ส่วนสิ่งที่ทำให้เรารู้สึกแบบนั้นใช้ <b>-ing</b> (boring interesting)</p>
{{ex:I'm bored.|/aɪm ˈbɔːrd/|ฉันเบื่อ}}{{ex:This movie is boring.|/ˈðɪs ˈmuːvi ɪz ˈbɔːrɪŋ/|หนังเรื่องนี้น่าเบื่อ}}{{ex:I'm interested in music.|/aɪm ˈɪntrəstɪd ɪn ˈmjuːzɪk/|ฉันสนใจดนตรี}}
<h3>ตอบคำถามปฏิเสธ</h3>
<p>ภาษาไทยตอบ “ใช่” เมื่อเห็นด้วยกับคำพูดของอีกฝ่าย เช่น “ไม่ได้ไปเหรอ” — “ใช่ ไม่ได้ไป” แต่ภาษาอังกฤษตอบตามข้อเท็จจริง ถ้าไม่ได้ไปต้องตอบ <b>No</b> เสมอ: You didn't go? — <b>No, I didn't.</b></p>
{{ex:No, I didn't.|/ˈnoʊ aɪ ˈdɪdnt/|เปล่า ไม่ได้ไป}}
<h3>“นะ” “ครับ” “ค่ะ” ไม่มีในภาษาอังกฤษ</h3>
<p>คำลงท้ายเหล่านี้ใส่ในประโยคภาษาอังกฤษไม่ได้ ความสุภาพหรือความนุ่มนวลแบบ “นะ” ให้ใช้ please หรือ OK? แทน: <b>Call to me na.</b> ✗ → <b>Call me, OK?</b> ✓</p>
{{ex:Call me, OK?|/ˈkɔːl mi oʊˈkeɪ/|โทรหาฉันนะ}}
<div class="tip">ใช้ภาษาอังกฤษแบบไทยกับเพื่อนคนไทยได้ไม่ผิดอะไร แต่เวลาคุยกับลูกค้าหรือเพื่อนชาวต่างชาติ ให้เลือกแบบเจ้าของภาษา: <b>close the light</b> ✗ → <b>turn off the light</b> ✓ / <b>I'm boring.</b> ✗ → <b>I'm bored.</b> ✓</div>`,
check:[["“เปิดไฟหน่อยได้ไหม” ภาษาอังกฤษพูดว่าอย่างไร",["Can you open the light?","Can you turn on the light?","Can you open light?","Can you turn open the light?"],1,"ไฟใช้ turn on ส่วน open ใช้กับประตูและหน้าต่าง และไฟดวงที่ทั้งสองคนรู้ต้องมีคำนำหน้านาม the"],["“ฉันเบื่อมาก” ภาษาอังกฤษพูดว่าอย่างไร",["I'm very boring.","I very bored.","I'm boring very.","I'm very bored."],3,"ความรู้สึกของเราใช้ bored ส่วน boring แปลว่าน่าเบื่อ"],["เพื่อนถามว่า You didn't eat? ถ้ายังไม่ได้กินจริง ๆ ตอบว่าอย่างไร",["No, I didn't.","Yes, I didn't.","Yes, I did.","No, I did."],0,"ภาษาอังกฤษตอบตามข้อเท็จจริง ไม่ได้กินจึงตอบ No, I didn't."]],
practice:[
["mc","“เหมือนกันเลย” ภาษาอังกฤษพูดว่าอย่างไร","It's the same.","Same same.","It's same same.","It's a same.","เจ้าของภาษาพูด same คำเดียว และมี the นำหน้า"],
["mc","“ฉันเบื่อ” ภาษาอังกฤษพูดว่าอย่างไร","I'm bored.","I'm boring.","I bored.","I'm bore.","ความรู้สึกของเราใช้ bored ส่วน I'm boring แปลว่าฉันเป็นคนน่าเบื่อ"],
["mc","อยากเช็กบิลที่ร้านอาหาร พูดว่าอย่างไร","Check, please.","Check bill!","Bill check, please.","Check the bill me.","check bill เป็นภาษาอังกฤษแบบไทย เจ้าของภาษาพูดว่า Check, please."],
["mc","“ฉันไปช้อปปิ้ง” ภาษาอังกฤษพูดว่าอย่างไร","I go shopping.","I go to shopping.","I go to shop shopping.","I going shopping.","กิจกรรมที่ลงท้ายด้วย -ing ใช้ go ตรง ๆ ไม่มี to"],
["mc","เพื่อนถามว่า You didn't go? ถ้าไม่ได้ไปจริง ๆ ตอบว่าอย่างไร","No, I didn't.","Yes, I didn't.","Yes, I did not go.","No, I did.","ภาษาอังกฤษตอบตามข้อเท็จจริง ไม่ได้ไปจึงตอบ No"],
["or","ปิดไฟหน่อย","Turn off the light","a","ไฟดวงที่ทั้งสองคนรู้ ใช้คำนำหน้านาม the และใช้ turn off ไม่ใช่ close"],
["or","เราหารค่าอาหารกัน","We split the bill","a","บิลของมื้อนี้ที่รู้กันอยู่ ใช้คำนำหน้านาม the"],
["or","หนังเรื่องนี้น่าเบื่อ","This movie is boring","bored","สิ่งที่ทำให้เบื่อใช้ boring ส่วน bored ใช้กับความรู้สึกของคน"],
["or","ฉันไปยิม (เป็นประจำ)","I go to the gym","fitness gyms","ยิมที่ไปประจำใช้คำนำหน้านาม the และ gym ไม่เติม -s ส่วน fitness ไม่ได้แปลว่ายิม"],
["fi","Can you turn __ the TV?","เปิดทีวีหน่อยได้ไหม","on","open|at|to","เครื่องใช้ไฟฟ้าใช้ turn on ไม่ใช่ open"],
["fi","I'm __ in Thai food.","ฉันสนใจอาหารไทย","interested","interesting|interest|interests","ความรู้สึกของเราใช้ interested ส่วน interesting แปลว่าน่าสนใจ"],
["fi","I go __ every Saturday.","ฉันไปช้อปปิ้งทุกวันเสาร์","shopping","to shopping|to shop|shoppings","go shopping ไม่มี to"],
["ty","ฉันไปช้อปปิ้งทุกสุดสัปดาห์ (ใช้ on)","I go shopping on weekends|I go shopping on the weekends","go shopping · on · weekend — ทุกสุดสัปดาห์","weekend","on weekends ต้องเป็นรูปพหูพจน์ และไม่มี to หน้า shopping"],
["ty","ขอเช็กบิลหน่อย","Can I get the check|Can we get the check|Could I get the check|Could we get the check|Can I have the check|Can we have the check|Check, please|The check, please|Can I get the check, please|Can we get the check, please|Could we get the check, please|Could I get the check, please|Can I have the check, please|Can we have the check, please|Could I have the check|Could we have the check","can I get · check — ใช้ the","a","the check คือบิลของโต๊ะนี้ ใช้คำนำหน้านาม the"],
["ty","ฉันเบื่อ","I'm bored","bored / boring — ความรู้สึกของเรา","boring","ความรู้สึกของเราใช้ bored"],
["ty","เปิดไฟหน่อยได้ไหม","Can you turn on the light|Could you turn on the light|Can you turn the light on|Could you turn the light on|Can you turn on the lights|Could you turn on the lights|Can you turn the lights on|Could you turn the lights on|Turn on the light, please|Please turn on the light|Can you turn on the light, please|Could you turn on the light, please|Can you turn the light on, please|Could you turn the light on, please","can you · turn on · light — ใช้ the","open","ไฟดวงที่ทั้งสองคนรู้ใช้คำนำหน้านาม the และไฟใช้ turn on ไม่ใช่ open"]]},
];
