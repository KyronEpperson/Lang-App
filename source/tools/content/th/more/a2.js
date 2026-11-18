/* th-en stage A2: new lessons, plus the th-only time-markers. English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"กำลังทำอยู่ในอดีต: was / were + -ing", blurb:"สิ่งที่กำลังทำอยู่ในตอนนั้น ใช้ปูฉากหลังของเรื่องเล่า", deck:"ความรู้สึกและปฏิกิริยา", body:`
<p>ใช้พูดถึงสิ่งที่<b>กำลังทำอยู่ ณ ช่วงเวลาหนึ่งในอดีต</b> ภาษาไทยพูดว่า “ตอนนั้นฉันกำลังนอน” โดยใช้คำว่า ตอนนั้น และ กำลัง บอกเวลา แต่ภาษาอังกฤษต้องเปลี่ยนรูปกริยา: นำ Present Continuous Tense มาเปลี่ยน Verb to be เป็นรูปอดีต (<b>was / were</b>) ก็ได้แล้ว</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|ตอนนั้นฉันกำลังนอนหลับ}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|ตอนนั้นเรากำลังดูทีวี}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|ตอนนั้นฝนกำลังตก}}
<p>ประธาน <b>I he she it</b> ใช้ <b>was</b> ส่วน <b>you we they</b> ใช้ <b>were</b></p>
<h3>ประโยคคำถาม</h3>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|ตอนนั้นคุณกำลังทำอะไรอยู่}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|ตอน 9 โมงคุณกำลังทำงานอยู่หรือเปล่า}}
<h3>ใช้คู่กับ when: กำลังทำอยู่แล้วมีอีกเรื่องแทรกเข้ามา</h3>
<p>เรื่องที่ทำต่อเนื่องอยู่ใช้ <b>Past Continuous Tense</b> ส่วนเรื่องสั้น ๆ ที่แทรกเข้ามาใช้ <b>Past Simple Tense</b></p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|ตอนที่คุณโทรมา ฉันกำลังทำอาหารอยู่}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|ฉันกำลังเดินกลับบ้านอยู่ตอนที่ฝนเริ่มตก}}
<p>คำว่า กำลัง ในภาษาไทยละได้ แต่ was / were ในภาษาอังกฤษละไม่ได้: <b>I cooking.</b> ✗ → <b>I was cooking.</b> ✓</p>
<div class="tip">ถ้าใช้ Past Simple Tense อย่างเดียว ความหมายจะเปลี่ยนไป <b>I cooked when you called.</b> แปลว่า “พอคุณโทรมา ฉันจึงเริ่มทำอาหาร”</div>`,
check:[["“ตอน 9 โมงคุณกำลังทำอะไรอยู่” ภาษาอังกฤษพูดว่าอย่างไร",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"ประธาน you ใช้ were และตามด้วยรูป -ing"],["I was cooking ___ you called. ช่องว่างควรเติมคำใด",["when","so","or","than"],0,"“ตอนที่…” ใช้ when"],["They ___ watching TV. ช่องว่างควรเติมคำใด",["was","did","were","are being"],2,"ประธาน they ใช้ were"]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","ประธาน I ใช้ was"],
["mc","“ตอนที่คุณโทรมา ฉันกำลังทำอาหารอยู่” ภาษาอังกฤษพูดว่าอย่างไร","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","เรื่องที่กำลังทำอยู่ใช้ Past Continuous Tense เรื่องที่แทรกเข้ามาใช้ Past Simple Tense"],
["mc","“ตอนนั้นคุณกำลังทำอะไรอยู่” ภาษาอังกฤษพูดว่าอย่างไร","What were you doing?","What did you doing?","What was you doing?","What were you do?","ประธาน you ใช้ were และตามด้วยรูป -ing"],
["mc","They ___ playing soccer.","were","was","did","are","ประธาน they ใช้ were"],
["mc","“ตอนนั้นฝนกำลังตก” ภาษาอังกฤษพูดว่าอย่างไร","It was raining.","It were raining.","It was rain.","It rained was.","ประธาน it ใช้ was และตามด้วยรูป -ing"],
["or","ตอนนั้นฉันกำลังอ่านหนังสือเล่มหนึ่ง","I was reading a book","read books","หนังสือหนึ่งเล่ม ใช้คำนำหน้านาม a กับคำนามเอกพจน์ book"],
["or","ตอนนั้นเด็ก ๆ กำลังนอนหลับ","The kids were sleeping","kid was","เด็กหลายคน ใช้รูปพหูพจน์ kids และใช้ were"],
["or","ตอนนั้นเรากำลังดูทีวี","We were watching TV","was","ประธาน we ใช้ were"],
["fi","I was __ dinner.","ตอนนั้นฉันกำลังทำอาหารเย็น","cooking|making","cook|cooked|cooks","หลัง was ต้องใช้รูป -ing"],
["fi","What __ you doing?","ตอนนั้นคุณกำลังทำอะไรอยู่","were","was|did|does","ประธาน you ใช้ were"],
["fi","I was sleeping __ you called.","ตอนที่คุณโทรมา ฉันกำลังนอนหลับ","when","so|than|or","“ตอนที่…” ใช้ when"],
["ty","ตอนนั้นฉันกำลังทำงาน","I was working","was · work — รูป -ing","were","ประธาน I ใช้ was ตามด้วยรูป -ing"],
["ty","ตอนนั้นฉันกำลังดูหนังเรื่องหนึ่ง","I was watching a movie","was · watching · movie — คำนำหน้านาม a","the","หนังเรื่องไหนก็ได้หนึ่งเรื่อง ใช้คำนำหน้านาม a"],
["ty","ตอนนั้นเด็ก ๆ กำลังเล่นกันอยู่","The kids were playing|The children were playing","kids · were · playing — รูปพหูพจน์","kid","เด็กหลายคน ใช้รูปพหูพจน์ kids และใช้ were"]]},
{ id:"will", title:"will: ตัดสินใจตอนพูด สัญญา และคาดการณ์", blurb:"ตัดสินใจตอนที่พูดใช้ will ถ้าวางแผนไว้ก่อนแล้วใช้ be going to", deck:"คุยเล่น", body:`
<p>รูปคือ <b>will + กริยาช่อง 1</b> เวลาพูดเกือบทุกครั้งจะย่อเป็น <b>I'll you'll it'll</b> และรูปปฏิเสธคือ <b>won't</b></p>
<p>คำว่า จะ ในภาษาไทยใช้ได้ทั้ง will และ be going to แต่ภาษาอังกฤษแยกกันชัดเจน: ตัดสินใจตอนที่พูดหรือให้สัญญาใช้ will ส่วนแผนที่วางไว้ก่อนแล้วใช้ be going to</p>
<h3>ตัดสินใจตอนที่พูด</h3>
<p>ประโยคไทยแบบ “เดี๋ยวฉัน…เอง” ที่ใช้เสนอตัวหรือตัดสินใจทันที มักตรงกับ <b>I'll</b></p>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|ฉันเอาพาสต้า}}{{ex:I'll get it.|/aɪl ˈget ɪt/|เดี๋ยวฉันรับเอง (โทรศัพท์) / เดี๋ยวฉันไปเปิดเอง (ประตู)}}
<h3>สัญญาและเสนอตัว</h3>
{{ex:I'll help you.|/aɪl ˈhelp ju/|เดี๋ยวฉันช่วยเอง}}{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|เดี๋ยวฉันจะโทรหาคุณทีหลัง}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|ฉันจะไม่มาสาย}}
<h3>คาดการณ์</h3>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|ทุกอย่างจะเรียบร้อยดี}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|ฉันว่าฝนจะตก}}
<h3>will กับ be going to</h3>
<div class="tbl"><table><tr><th></th><th>ใช้เมื่อ</th><th>ตัวอย่าง</th></tr><tr><td class="k">will</td><td>ตัดสินใจตอนพูด ให้สัญญา</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>แผนที่วางไว้ก่อน</td><td>I'm going to visit Chiang Mai next month.</td></tr></table></div>
<div class="tip">ผิดบ่อยที่สุด: <b>I will to go.</b> <b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ หลัง will ใช้กริยาช่อง 1 เท่านั้น ไม่มี to และไม่เติม -ing</div>`,
check:[["โทรศัพท์ดังขึ้น จะพูดว่า “เดี๋ยวฉันรับเอง” อย่างไร",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"เรื่องที่ตัดสินใจตอนพูดใช้ will"],["I ___ be late. (ฉันจะไม่มาสาย) ช่องว่างควรเติมคำใด",["won't","willn't","don't will","not will"],0,"รูปปฏิเสธของ will คือ won't"],["ประโยคไหนพูดถึงแผนที่วางไว้ก่อน",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"แผนที่วางไว้ก่อนใช้ be going to"]],
practice:[
["mc","“เดี๋ยวฉันช่วยเอง” ภาษาอังกฤษพูดว่าอย่างไร","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","หลัง will ใช้กริยาช่อง 1"],
["mc","สั่งอาหารในร้านแล้วตัดสินใจตอนนั้นว่า “ฉันเอาพาสต้า” พูดว่าอย่างไร","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","เรื่องที่ตัดสินใจตอนพูดใช้ will"],
["mc","“ฉันจะไม่มาสาย” ภาษาอังกฤษพูดว่าอย่างไร","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not ย่อเป็น won't และยังต้องมี be หน้า late"],
["mc","“คุณจะมาไหม” ภาษาอังกฤษพูดว่าอย่างไร","Will you come?","Do you will come?","Will you coming?","Will come you?","คำถามใช้ Will + ประธาน + กริยาช่อง 1"],
["mc","ประโยคไหนพูดถึงแผนที่วางไว้ก่อน","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","แผนที่วางไว้ก่อนใช้ be going to"],
["or","เดี๋ยวฉันจะโทรหาคุณทีหลัง","I'll call you later","calling","หลัง will ใช้กริยาช่อง 1"],
["or","ฉันเอากาแฟแก้วหนึ่ง","I'll have a coffee","the coffees","กาแฟที่สั่งหนึ่งแก้ว ใช้คำนำหน้านาม a"],
["or","เดี๋ยวฉันเปิดประตูเอง","I'll open the door","a doors","ประตูบานที่อยู่ตรงนี้ ทั้งสองฝ่ายรู้ว่าบานไหน จึงใช้คำนำหน้านาม the"],
["fi","I __ call you tomorrow.","พรุ่งนี้ฉันจะโทรหาคุณ","will","am|going|do","คำสัญญาใช้ will"],
["fi","I __ forget.","ฉันจะไม่ลืม","won't|will not","don't|not|willn't","รูปปฏิเสธของ will คือ won't"],
["fi","__ you help me?","ช่วยฉันหน่อยได้ไหม","Will|Can|Could|Would","Do|Are|Is","ขอให้ช่วยใช้ Will you…? (หรือ Can / Could / Would)"],
["ty","เดี๋ยวฉันช่วยเอง","I'll help you|I'll help","I'll · help · you","helping","หลัง will ใช้กริยาช่อง 1"],
["ty","ฉันเอาสลัด (สั่งอาหาร)","I'll have a salad|I'll have the salad","I'll have · salad — ระวังคำนำหน้านาม","salads","สั่งหนึ่งจานใช้คำนำหน้านาม a (ถ้าหมายถึงสลัดในเมนูที่รู้กันใช้ the)"],
["ty","เดี๋ยวฉันปิดประตูเอง","I'll close the door|I'll shut the door","I'll · close · door — คำนำหน้านาม the","a","ประตูบานที่อยู่ตรงนี้ ใช้คำนำหน้านาม the"]]},
{ id:"perfect", title:"Present Perfect Tense: เคยทำมาแล้ว", blurb:"have + กริยาช่อง 3 ใช้เล่าประสบการณ์ ถ้าบอกเวลาที่แน่นอนใช้ Past Simple Tense", deck:"ท่องเที่ยว (สนามบินและโรงแรม)", body:`
<p><b>have + กริยาช่อง 3</b> ใช้บอกประสบการณ์ ว่า<b>เคย</b>ทำอะไรมาแล้วในชีวิต โดย<b>ไม่บอกว่าเมื่อไร</b> คำว่า เคย ในภาษาไทยจึงมักตรงกับรูปนี้ ประธาน he she it ใช้ <b>has</b></p>
{{ex:I've been to Japan.|/aɪv bɪn tə dʒəˈpæn/|ฉันเคยไปญี่ปุ่น}}{{ex:She has visited Thailand twice.|/ʃi həz ˈvɪzɪtɪd ˈtaɪlænd ˈtwaɪs/|เธอเคยมาเที่ยวเมืองไทยสองครั้ง}}
<h3>ever และ never</h3>
{{ex:Have you ever eaten tom yum?|/həv ju ˈevər ˈiːtn ˌtɑːm ˈjʌm/|คุณเคยกินต้มยำไหม}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|ฉันไม่เคยเห็นมันเลย}}
<p>ตอบว่า <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>เคย ไม่ใช่ used to</h3>
<p>คนไทยมักแปล “เคยไปภูเก็ต” ว่า <b>I used to go to Phuket.</b> ✗ แต่ used to แปลว่า “แต่ก่อนไปเป็นประจำ ตอนนี้ไม่ไปแล้ว” ถ้าหมายถึงเคยไปมาแล้วครั้งหนึ่งให้พูดว่า <b>I've been to Phuket.</b> ✓</p>
<h3>กริยาช่อง 3 ที่ใช้บ่อย</h3>
<div class="tbl"><table><tr><th>ช่อง 1</th><th>ช่อง 2</th><th>ช่อง 3</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>บอกเวลาที่จบไปแล้ว ใช้ Past Simple Tense</h3>
<p>ถ้ามีคำบอกเวลาอย่าง last year yesterday หรือ in 2020 ห้ามใช้ Present Perfect Tense แม้ภาษาไทยจะพูดว่า “ไปมาแล้ว” ก็ตาม</p>
{{ex:I went to Japan last year.|/aɪ ˈwent tə dʒəˈpæn ˈlæst ˈjɪr/|ฉันไปญี่ปุ่นมาเมื่อปีที่แล้ว}}
<div class="tip">ผิดบ่อยที่สุด: <b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["“คุณเคยไปญี่ปุ่นไหม” ภาษาอังกฤษพูดว่าอย่างไร",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"ถามประสบการณ์ใช้ Have you ever + กริยาช่อง 3"],["I ___ never seen that movie. ช่องว่างควรเติมคำใด",["am","did","have","was"],2,"ใช้ have + never + กริยาช่อง 3"],["เลือกประโยคที่ถูกต้อง",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"มีคำบอกเวลา last year จึงใช้ Past Simple Tense"]],
practice:[
["mc","“ฉันเคยไปญี่ปุ่น” ภาษาอังกฤษพูดว่าอย่างไร","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have + กริยาช่อง 3 คือ been"],
["mc","กริยาช่อง 3 ของ see","seen","saw","seed","seeing","กริยาสามช่องของ see คือ see – saw – seen"],
["mc","“คุณเคยกินกิมจิไหม” ภาษาอังกฤษพูดว่าอย่างไร","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","ถามประสบการณ์ใช้ Have you ever + กริยาช่อง 3"],
["mc","“ฉันไม่เคยเห็นมันเลย” ภาษาอังกฤษพูดว่าอย่างไร","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","ใช้ have + never + กริยาช่อง 3"],
["mc","ถ้ามีคำว่า “เมื่อปีที่แล้ว” ประโยคไหนถูกต้อง","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","มีคำบอกเวลาที่จบไปแล้ว จึงใช้ Past Simple Tense"],
["or","ฉันเคยดูหนังเรื่องนั้นแล้ว","I've seen the movie","a saw","หนังเรื่องที่ทั้งสองฝ่ายรู้ว่าเรื่องไหน ใช้คำนำหน้านาม the"],
["or","ฉันเคยไปเกาหลีมาสองครั้ง","I've been to Korea twice","went","หลัง have ใช้กริยาช่อง 3 คือ been"],
["or","ฉันไม่เคยเห็นงูเลย","I've never seen a snake","the snakes","งูตัวไหนก็ได้หนึ่งตัว ใช้คำนำหน้านาม a"],
["fi","Have you ever __ to Busan?","คุณเคยไปปูซานไหม","been","be|went|go","หลัง have ใช้กริยาช่อง 3 คือ been"],
["fi","I've __ eaten that.","ฉันไม่เคยกินอันนั้นเลย","never","ever|no|not never","“ไม่เคยเลย” ใช้ never"],
["fi","She __ visited Korea twice.","เธอเคยไปเกาหลีมาสองครั้ง","has","have|is|did","ประธานเอกพจน์บุรุษที่ 3 (she) ใช้ has"],
["ty","คุณเคยไปญี่ปุ่นไหม","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","ถามประสบการณ์ใช้ Have you ever been to…?"],
["ty","ฉันเคยอ่านหนังสือเล่มนั้นแล้ว","I've read the book|I've read that book","I've · read · book — คำนำหน้านาม the","a","หนังสือเล่มที่ทั้งสองฝ่ายรู้ว่าเล่มไหน ใช้คำนำหน้านาม the"],
["ty","ฉันไม่เคยเลี้ยงแมวเลย","I've never had a cat","never · had · cat — คำนำหน้านาม a","the","แมวตัวไหนก็ได้หนึ่งตัว ใช้คำนำหน้านาม a"]]},
{ id:"time-markers", title:"เวลาอยู่ที่กริยา: แล้ว กำลัง จะ เคย ยัง", blurb:"ภาษาไทยบอกเวลาด้วยคำเติม ภาษาอังกฤษต้องเปลี่ยนรูปกริยาเอง", deck:"คุยเล่น", body:`
<p>กริยาภาษาไทยไม่เคยเปลี่ยนรูป เมื่อวาน วันนี้ หรือพรุ่งนี้ก็ใช้คำว่า กิน เหมือนเดิม เวลาบอกด้วยคำบอกเวลาภาษาไทยอย่าง แล้ว กำลัง จะ เคย ยัง หรือคำอย่าง เมื่อวาน และ พรุ่งนี้ แต่ภาษาอังกฤษ<b>ต้องเปลี่ยนรูปกริยาเอง</b> ตารางนี้จับคู่คำไทยแต่ละคำกับรูปภาษาอังกฤษ</p>
<div class="tbl"><table><tr><th>คำไทย</th><th>รูปภาษาอังกฤษ</th><th>ตัวอย่าง</th></tr><tr><td>กำลัง</td><td class="k">be + -ing</td><td>She's baking a cake.</td></tr><tr><td>จะ</td><td class="k">will / be going to</td><td>I'll call you later.</td></tr><tr><td>แล้ว (บอกเวลาที่จบไปแล้ว)</td><td class="k">กริยาช่อง 2</td><td>I ate at seven.</td></tr><tr><td>แล้ว (ผลยังอยู่ถึงตอนนี้)</td><td class="k">have + กริยาช่อง 3 (+ already)</td><td>I've already eaten.</td></tr><tr><td>เคย</td><td class="k">have (ever) + กริยาช่อง 3</td><td>Have you ever been to Phuket?</td></tr><tr><td>ไม่เคย</td><td class="k">have never + กริยาช่อง 3</td><td>I've never seen snow.</td></tr><tr><td>ยังไม่ / ยังไม่ได้</td><td class="k">haven't + กริยาช่อง 3 + yet</td><td>I haven't eaten yet.</td></tr><tr><td>เพิ่ง</td><td class="k">have just + กริยาช่อง 3</td><td>I've just arrived.</td></tr></table></div>
{{ex:She's baking a cake.|/ʃiz ˈbeɪkɪŋ ə ˈkeɪk/|เธอกำลังอบเค้ก}}{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|เดี๋ยวฉันจะโทรหาคุณทีหลัง}}{{ex:I've already bought the tickets.|/aɪv ɔːlˈredi ˈbɔːt ðə ˈtɪkɪts/|ฉันซื้อตั๋วเรียบร้อยแล้ว}}{{ex:Have you ever been to a night market?|/həv ju ˈevər bɪn tu ə ˈnaɪt ˈmɑːrkɪt/|คุณเคยไปตลาดกลางคืนไหม}}
<h3>แล้ว ไม่ได้แปลว่า already เสมอไป</h3>
<p>ถ้าแปล “ฉันกินแล้ว” ทีละคำจะได้ <b>I already eat.</b> ✗ ซึ่งผิด เพราะกริยายังเป็นช่อง 1 ต้องเลือกรูปให้ถูก: ถ้าบอกเวลาที่จบไปแล้วใช้กริยาช่อง 2 ถ้าสนใจผลที่ยังอยู่ตอนนี้ใช้ have + กริยาช่อง 3</p>
{{ex:I ate at seven.|/aɪ ˈeɪt ət ˈsevn/|ฉันกินไปตอน 7 โมงแล้ว}}{{ex:I've already eaten.|/aɪv ɔːlˈredi ˈiːtn/|ฉันกินแล้ว (ตอนนี้อิ่มอยู่)}}
<h3>ยังไม่ได้ และ yet</h3>
<p>“ยังไม่ได้…” เป็นประโยคปฏิเสธ <b>haven't + กริยาช่อง 3</b> และมี <b>yet</b> ท้ายประโยค คำถาม “…หรือยัง” ก็ใช้ yet เหมือนกัน</p>
{{ex:I haven't eaten yet.|/aɪ ˈhævnt ˈiːtn ˈjet/|ฉันยังไม่ได้กินเลย}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|กินข้าวหรือยัง}}
<h3>กฎข้อ 1: คำบอกเวลาไม่ได้แทนรูปกริยา</h3>
<p>มีคำว่า yesterday อยู่แล้วก็ยังต้องใช้กริยาช่อง 2</p>
{{ex:Yesterday I went to the market.|/ˈjestərdeɪ aɪ ˈwent tə ðə ˈmɑːrkɪt/|เมื่อวานฉันไปตลาด}}
<h3>กฎข้อ 2: ไม่มีคำบอกเวลา ภาษาอังกฤษก็ยังต้องเลือก Tense</h3>
<p>“ฉันกินข้าว” อาจหมายถึงกินเป็นประจำ กำลังกินอยู่ หรือกินไปแล้วก็ได้ ภาษาไทยไม่ต้องเลือก แต่ภาษาอังกฤษต้องดูบริบทแล้วเลือกรูปกริยาทุกครั้ง</p>
{{ex:I eat rice every day.|/aɪ ˈiːt ˈraɪs ˈevri ˈdeɪ/|ฉันกินข้าวทุกวัน (เป็นประจำ)}}{{ex:I'm eating rice.|/aɪm ˈiːtɪŋ ˈraɪs/|ฉันกำลังกินข้าว}}{{ex:I ate rice.|/aɪ ˈeɪt ˈraɪs/|ฉันกินข้าวไปแล้ว}}
<div class="tip">ผิดบ่อยที่สุดสองแบบ: <b>Yesterday I go to the market.</b> ✗ → <b>Yesterday I went to the market.</b> ✓ และ <b>I'm already eat.</b> ✗ → <b>I've already eaten.</b> ✓ (อย่าใส่ am หน้ากริยาแทนคำว่า แล้ว)</div>`,
check:[["“ฉันยังไม่ได้กินเลย” ภาษาอังกฤษพูดว่าอย่างไร",["I already not eat.","I don't eat yet.","I haven't eaten yet.","I'm not eat yet."],2,"“ยังไม่ได้…” ใช้ haven't + กริยาช่อง 3 และ yet ท้ายประโยค"],["เมื่อวานฉันไปตลาด: Yesterday I ___ to the market. ช่องว่างควรเติมคำใด",["went","go","goes","have gone"],0,"มี yesterday ก็ต้องใช้กริยาช่อง 2: went"],["“เธอกำลังอบเค้ก” ภาษาอังกฤษพูดว่าอย่างไร",["She bakes a cake.","She baking a cake.","She baked a cake.","She's baking a cake."],3,"กำลัง ตรงกับ Verb to be + -ing และละ is ไม่ได้"]],
practice:[
["mc","“ฉันกำลังกินอยู่” ภาษาอังกฤษพูดว่าอย่างไร","I'm eating.","I eating.","I eat now.","I'm eat.","กำลัง ตรงกับ Verb to be + -ing: I'm eating"],
["mc","“ฉันเคยไปภูเก็ต” ภาษาอังกฤษพูดว่าอย่างไร","I've been to Phuket.","I used to go to Phuket.","I ever go to Phuket.","I've went to Phuket.","เคย (ประสบการณ์) ใช้ have + กริยาช่อง 3 ส่วน used to แปลว่าแต่ก่อนไปเป็นประจำ"],
["mc","“เมื่อวานฉันดูหนังเรื่องนั้น” ภาษาอังกฤษพูดว่าอย่างไร","I saw the movie yesterday.","I've seen the movie yesterday.","I see the movie yesterday.","I already see the movie yesterday.","มี yesterday ต้องใช้กริยาช่อง 2 และห้ามใช้ have + กริยาช่อง 3"],
["mc","“เดี๋ยวฉันจะโทรหาคุณทีหลัง” ภาษาอังกฤษพูดว่าอย่างไร","I'll call you later.","I call you later.","I calling you later.","I'm call you later.","จะ ที่เป็นคำสัญญาใช้ will + กริยาช่อง 1"],
["mc","“กินข้าวหรือยัง” (ถามว่ากินแล้วหรือยัง) ภาษาอังกฤษพูดว่าอย่างไร","Have you eaten yet?","Did you eat already yet?","Are you eat yet?","Have you eat yet?","“…หรือยัง” ใช้ Have you + กริยาช่อง 3 … yet?"],
["or","ฉันซื้อตั๋วแล้ว (หลายใบ)","I've already bought the tickets","ticket a","ตั๋วหลายใบที่รู้กันว่าใบไหน ใช้คำนำหน้านาม the และรูปพหูพจน์ tickets"],
["or","เธอกำลังอบเค้ก","She's baking a cake","the cakes","กำลัง ตรงกับ Verb to be + -ing และเค้กหนึ่งก้อนใช้คำนำหน้านาม a"],
["or","ฉันยังไม่ได้อ่านหนังสือพวกนั้นเลย","I haven't read the books yet","book already","หนังสือพวกนั้นใช้คำนำหน้านาม the กับรูปพหูพจน์ books และ ยังไม่ได้ ใช้ haven't … yet"],
["or","เมื่อเช้าฉันเจอเขา (ผู้ชาย)","I met him this morning","meet","เมื่อเช้าเป็นเวลาที่จบไปแล้ว ใช้กริยาช่อง 2: met"],
["fi","I've __ finished my homework.","ฉันทำการบ้านเสร็จแล้ว","already","yet|ever|never","แล้ว ในประโยคบอกเล่าแบบ Present Perfect Tense ใช้ already"],
["fi","She __ cooking dinner now.","ตอนนี้เธอกำลังทำอาหารเย็น","is","was|does|has","กำลัง และ ตอนนี้ ใช้ is + -ing"],
["fi","I haven't seen it __.","ฉันยังไม่ได้ดูเลย","yet","already|ever|never","ยังไม่ได้ ใช้ประโยคปฏิเสธและมี yet ท้ายประโยค"],
["ty","คุณเคยเห็นช้างสักตัวไหม","Have you ever seen an elephant|Have you seen an elephant","have you ever · seen · elephant — คำนำหน้านาม an","a","elephant ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an"],
["ty","ฉันซื้อรถมาคันหนึ่งแล้ว","I've already bought a car|I've bought a car|I already bought a car","already · bought · car — คำนำหน้านาม a","the","แล้ว ที่ผลยังอยู่ถึงตอนนี้ใช้ have + กริยาช่อง 3 และรถหนึ่งคันใช้คำนำหน้านาม a"],
["ty","เขา (ผู้ชาย) กำลังอ่านหนังสือพิมพ์","He's reading a newspaper|He's reading the newspaper","reading · newspaper — ระวังคำนำหน้านาม","newspapers","กำลัง ใช้ Verb to be + -ing และหนังสือพิมพ์หนึ่งฉบับต้องมีคำนำหน้านาม a หรือ the"],
["ty","ฉันยังไม่ได้กินเลย","I haven't eaten yet|I haven't eaten","haven't · eaten · yet","already","ยังไม่ได้ ใช้ haven't + กริยาช่อง 3 + yet"]]},
{ id:"modals", title:"have to, must, should, might: หน้าที่และคำแนะนำ", blurb:"ต้อง ควร และอาจจะ หลังทุกคำใช้กริยาช่อง 1", deck:"โรงพยาบาลและเหตุฉุกเฉิน", body:`
<p>สี่คำนี้ใช้บอกหน้าที่ คำแนะนำ และความเป็นไปได้ หลังทุกคำต้องใช้<b>กริยาช่อง 1</b> ไม่เติม -s และไม่มี to (ยกเว้น <b>have to</b> ที่มี to อยู่ในตัว)</p>
<div class="tbl"><table><tr><th>ภาษาไทย</th><th>ภาษาอังกฤษ</th></tr><tr><td>ต้อง</td><td class="k">have to / must</td></tr><tr><td>ควร</td><td class="k">should</td></tr><tr><td>อาจจะ</td><td class="k">might</td></tr><tr><td>ไม่ต้อง</td><td class="k">don't have to</td></tr><tr><td>ห้าม</td><td class="k">must not</td></tr></table></div>
<h3>have to: ต้อง</h3>
<p>ใช้บ่อยที่สุดในชีวิตประจำวัน ประธาน he she it ใช้ <b>has to</b></p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|พรุ่งนี้ฉันต้องทำงาน}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|ตอนนี้เธอต้องไปแล้ว}}
<h3>ไม่ต้อง ไม่ใช่ ห้าม</h3>
<p>คำว่า “ไม่ต้อง” มีคำว่า ต้อง อยู่ด้วย จึงอาจแปลผิดเป็น must not แต่ความหมายต่างกันมาก</p>
<div class="tbl"><table><tr><th>ประโยค</th><th>ความหมาย</th></tr><tr><td class="k">You don't have to come.</td><td>ไม่ต้องมาก็ได้ (ไม่จำเป็น)</td></tr><tr><td class="k">You must not smoke here.</td><td>ห้ามสูบบุหรี่ที่นี่ (ห้ามเด็ดขาด)</td></tr></table></div>
<h3>should: ควร</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|คุณควรไปหาหมอ}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|คุณไม่ควรกังวล}}
<h3>might: อาจจะ</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|ฝนอาจจะตก}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|ฉันอาจจะไปสาย}}
<div class="tip">ผิดบ่อยที่สุด: <b>You should to go.</b> <b>It might rains.</b> ✗ → <b>You should go.</b> <b>It might rain.</b> ✓</div>`,
check:[["“ไม่ต้องมาก็ได้” ภาษาอังกฤษพูดว่าอย่างไร",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"ไม่จำเป็น ใช้ don't have to"],["ให้คำแนะนำ: You ___ see a doctor. ช่องว่างควรเติมคำใด",["might","have","should","must to"],2,"คำแนะนำใช้ should + กริยาช่อง 1"],["She ___ to work today. ช่องว่างควรเติมคำใด",["have","must","should","has"],3,"ประธานเอกพจน์บุรุษที่ 3 (she) ใช้ has to"]],
practice:[
["mc","“พรุ่งนี้ฉันต้องทำงาน” ภาษาอังกฤษพูดว่าอย่างไร","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + กริยาช่อง 1"],
["mc","“ไม่ต้องมาก็ได้” ภาษาอังกฤษพูดว่าอย่างไร","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","ไม่จำเป็น ใช้ don't have to"],
["mc","“คุณควรไปหาหมอ” ภาษาอังกฤษพูดว่าอย่างไร","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + กริยาช่อง 1 และหมอหนึ่งคนใช้คำนำหน้านาม a"],
["mc","“ฝนอาจจะตก” ภาษาอังกฤษพูดว่าอย่างไร","It might rain.","It might rains.","It might to rain.","It mights rain.","might + กริยาช่อง 1 ไม่เติม -s"],
["mc","“ห้ามสูบบุหรี่ที่นี่” ภาษาอังกฤษพูดว่าอย่างไร","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","ห้าม ใช้ must not"],
["or","คุณควรไปหาหมอ","You should see a doctor","the doctors","หมอคนไหนก็ได้หนึ่งคน ใช้คำนำหน้านาม a"],
["or","ตอนนี้ฉันต้องไปแล้ว","I have to go now","going","หลัง have to ใช้กริยาช่อง 1"],
["or","คุณต้องซื้อตั๋วหนึ่งใบ","You have to buy a ticket","the tickets","ตั๋วหนึ่งใบ ใช้คำนำหน้านาม a กับคำนามเอกพจน์ ticket"],
["fi","She __ to study tonight.","คืนนี้เธอต้องอ่านหนังสือ","has","have|must|should","ประธานเอกพจน์บุรุษที่ 3 (she) ใช้ has to"],
["fi","You __ have to pay.","คุณไม่ต้องจ่ายเงิน","don't|do not","must not|not|aren't","ไม่จำเป็น ใช้ don't have to"],
["fi","It __ rain tomorrow.","พรุ่งนี้ฝนอาจจะตก","might|may|could","must to|has to|should to","ความเป็นไปได้ใช้ might"],
["ty","ฉันต้องทำงาน","I have to work|I must work|I need to work","have to · work","should","หน้าที่ใช้ have to"],
["ty","คุณควรไปหาหมอ","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — คำนำหน้านาม a","the","หมอคนไหนก็ได้หนึ่งคน ใช้คำนำหน้านาม a"],
["ty","คุณต้องซื้อตั๋วหนึ่งใบ","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — คำนำหน้านาม a","the","ตั๋วหนึ่งใบ ใช้คำนำหน้านาม a"]]},
{ id:"to-ing", title:"กริยาตามด้วย to หรือ -ing: want to, enjoy -ing", blurb:"want ตามด้วย to ส่วน enjoy ตามด้วย -ing กริยาแต่ละตัวกำหนดไว้ตายตัว", deck:"คุยเล่น", body:`
<p>ภาษาไทยเรียงกริยาต่อกันได้เลยโดยไม่มีคำเชื่อม เช่น อยากไป ไปซื้อ แต่ภาษาอังกฤษต้องดูกริยาตัวแรกว่ากริยาตัวที่สองเป็น <b>to + กริยาช่อง 1</b> หรือ<b>รูป -ing</b> ซึ่งกำหนดไว้ตายตัว ให้จำคำที่ใช้บ่อยเป็นกลุ่ม</p>
<div class="tbl"><table><tr><th>ตามด้วย to</th><th>ตามด้วย -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + กริยาช่อง 1: สิ่งที่จะทำต่อไป</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|ฉันอยากกลับบ้าน}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|ฉันต้องอ่านหนังสือ}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|ฉันอยากสั่งอาหาร (แบบสุภาพ)}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|ฉันตัดสินใจเรียนภาษาอังกฤษ}}
<p>ถ้ามีคนอื่นอยู่ตรงกลางก็ยังต้องมี to: “พ่อแม่อยากให้ฉันอ่านหนังสือ” → <b>My parents want me to read.</b> ไม่ใช่ <b>want me read</b> ✗</p>
<h3>enjoy finish mind ตามด้วย -ing</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|ฉันสนุกกับการทำอาหาร}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|ฉันทำงานเสร็จแล้ว}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|ฉันรอได้ ไม่เป็นไร}}
<h3>กริยาที่ใช้ได้ทั้งสองแบบ</h3>
<p>like love และ start ใช้ได้ทั้ง to และ -ing</p>
<p>ระวัง “ไปช้อปปิ้ง” คือ <b>go shopping</b> ไม่มี to: <b>I go to shopping.</b> ✗ → <b>I go shopping.</b> ✓</p>
<div class="tip">ผิดบ่อยที่สุด: <b>I want go.</b> <b>I enjoy to cook.</b> ✗ → <b>I want to go.</b> <b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. ช่องว่างควรเติมคำใด",["go","going","to go","to going"],2,"หลัง want ใช้ to + กริยาช่อง 1"],["I enjoy ___ movies. ช่องว่างควรเติมคำใด",["watching","to watch","watch","to watching"],0,"หลัง enjoy ใช้รูป -ing"],["“ฉันอยากสั่งอาหาร” (แบบสุภาพ) ภาษาอังกฤษพูดว่าอย่างไร",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"หลัง would like ใช้ to + กริยาช่อง 1"]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","หลัง need ใช้ to + กริยาช่อง 1"],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","หลัง enjoy ใช้รูป -ing"],
["mc","“ฉันอยากสั่งอาหาร” (แบบสุภาพ) ภาษาอังกฤษพูดว่าอย่างไร","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","หลัง would like ใช้ to + กริยาช่อง 1"],
["mc","“ฉันทำงานเสร็จแล้ว” ภาษาอังกฤษพูดว่าอย่างไร","I finished working.","I finished to work.","I finished work to.","I finish worked.","หลัง finish ใช้รูป -ing"],
["mc","“ฉันรอได้ ไม่เป็นไร” ภาษาอังกฤษพูดว่าอย่างไร","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","หลัง mind ใช้รูป -ing"],
["or","ฉันอยากซื้อรถสักคัน","I want to buy a car","the buying","หลัง want ใช้ to และรถหนึ่งคันใช้คำนำหน้านาม a"],
["or","ฉันสนุกกับการดูหนัง","I enjoy watching movies","movie watch","หลัง enjoy ใช้รูป -ing และหนังโดยรวมใช้รูปพหูพจน์ movies"],
["or","ฉันต้องพักผ่อน","I need to rest","resting","หลัง need ใช้ to + กริยาช่อง 1"],
["fi","I want __ a coffee.","ฉันอยากดื่มกาแฟสักแก้ว","to have|to drink|to get","have|having|drinking","หลัง want ใช้ to + กริยาช่อง 1"],
["fi","She enjoys __.","เธอสนุกกับการว่ายน้ำ","swimming","to swim|swim|swims","หลัง enjoy ใช้รูป -ing"],
["fi","I decided __ English.","ฉันตัดสินใจเรียนภาษาอังกฤษ","to study|to learn","study|studying|studied","หลัง decide ใช้ to + กริยาช่อง 1"],
["ty","ฉันอยากกลับบ้าน","I want to go home","want to · go · home — ไม่ใช้คำนำหน้านาม","the","หลัง want ใช้ to และหน้า home ไม่ใช้คำนำหน้านาม"],
["ty","ฉันชอบอ่านหนังสือ (ใช้ enjoy)","I enjoy reading books|I enjoy reading","enjoy · read · book — รูปพหูพจน์","book","หลัง enjoy ใช้รูป -ing และหนังสือโดยรวมใช้รูปพหูพจน์ books"],
["ty","ฉันอยากสั่งอาหาร (แบบสุภาพ)","I'd like to order|I want to order","I'd like · to · order","ordering","หลัง would like ใช้ to + กริยาช่อง 1"]]},
{ id:"articles-2", title:"the ขั้นต่อไป: สิ่งที่มีหนึ่งเดียวและรูปพหูพจน์ที่ไม่มีคำนำหน้านาม", blurb:"เครื่องดนตรีใช้ the กีฬาไม่ใช้ รวมถึงชื่อประเทศและการพูดถึงทั้งประเภท", deck:"ท่องเที่ยว (สนามบินและโรงแรม)", body:`
<p>บทที่สามของคำนำหน้านาม (article) บทนี้รวมกรณีที่มีกฎตายตัวไว้ด้วยกัน ภาษาไทยไม่มีคำนำหน้านามเลย จึงต้องจำเป็นกลุ่ม</p>
<h3>กรณีที่ใช้ the</h3>
<div class="tbl"><table><tr><th>กรณี</th><th>ตัวอย่าง</th></tr><tr><td>สิ่งที่มีหนึ่งเดียวในโลก</td><td class="k">the sun, the internet</td></tr><tr><td>เครื่องดนตรี</td><td class="k">play the piano</td></tr><tr><td>แม่น้ำและมหาสมุทร</td><td class="k">the Chao Phraya, the Pacific</td></tr><tr><td>ชื่อประเทศที่เป็นรูปพหูพจน์หรือเป็นการรวมกัน</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|ฉันเล่นเปียโน}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|เธอมาจากสหรัฐอเมริกา}}{{ex:I found it on the internet.|/aɪ ˈfaʊnd ɪt ɑːn ði ˈɪntərnet/|ฉันเจอข้อมูลนั้นในอินเทอร์เน็ต}}
<h3>กรณีที่ไม่ใช้คำนำหน้านาม</h3>
<div class="tbl"><table><tr><th>กรณี</th><th>ตัวอย่าง</th></tr><tr><td>ชื่อประเทศและเมืองส่วนใหญ่</td><td class="k">Thailand, Bangkok</td></tr><tr><td>กีฬา ภาษา มื้ออาหาร</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>พูดถึงทั้งประเภท</td><td class="k">Dogs are cute. I love music.</td></tr></table></div>
{{ex:I live in Thailand.|/aɪ ˈlɪv ɪn ˈtaɪlænd/|ฉันอาศัยอยู่ที่ประเทศไทย}}{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|ฉันเล่นฟุตบอล}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|หมาน่ารัก}}
<h3>ทั้งประเภท กับ ตัวที่เจาะจง</h3>
<p>ภาษาไทยพูดว่า “หมาซื่อสัตย์” ได้เลย แต่ภาษาอังกฤษต้องใช้รูปพหูพจน์โดยไม่มีคำนำหน้านาม: <b>Dogs are loyal.</b> ✓ ไม่ใช่ <b>Dog is loyal.</b> ✗ หรือ <b>The dog is loyal.</b> ✗</p>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|ฉันชอบหมา (หมาทั่วไปทั้งหมด)}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|หมาในสวนนี้น่ารัก (หมากลุ่มนี้)}}
<div class="tip">พูดถึงทั้งประเภทให้ใช้รูปพหูพจน์โดยไม่มี the ถ้าพูดว่า <b>I like the dogs.</b> จะแปลว่า “ฉันชอบหมาพวกนั้น”</div>`,
check:[["I play ___ soccer. ช่องว่างควรเติมคำใด",["a","the","an","(ไม่ใส่)"],3,"ชื่อกีฬาไม่ใช้คำนำหน้านาม"],["She's from ___ United States. ช่องว่างควรเติมคำใด",["the","a","an","(ไม่ใส่)"],0,"หน้า United States ใช้ the"],["“หมาน่ารัก” (หมาทั้งประเภท) ภาษาอังกฤษพูดว่าอย่างไร",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"พูดถึงทั้งประเภท ใช้รูปพหูพจน์และไม่ใช้คำนำหน้านาม"]],
practice:[
["mc","I play ___ piano.","the","a","an","some","หน้าเครื่องดนตรีใช้ the"],
["mc","“ฉันอาศัยอยู่ที่เกาหลี” ภาษาอังกฤษพูดว่าอย่างไร","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","ชื่อประเทศส่วนใหญ่ไม่ใช้คำนำหน้านาม"],
["mc","“ฉันเล่นฟุตบอล” ภาษาอังกฤษพูดว่าอย่างไร","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","ชื่อกีฬาไม่ใช้คำนำหน้านามและไม่เติม -s"],
["mc","“แมวน่ารัก” (แมวทั้งประเภท) ภาษาอังกฤษพูดว่าอย่างไร","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","พูดถึงทั้งประเภท ใช้รูปพหูพจน์และไม่ใช้คำนำหน้านาม"],
["mc","She's from ___ United States.","the","a","an","some","หน้า United States ใช้ the"],
["or","ฉันเล่นเปียโน","I play the piano","a pianos","หน้าเครื่องดนตรีใช้คำนำหน้านาม the"],
["or","หมาน่ารัก (หมาทั้งประเภท)","Dogs are cute","The dog","พูดถึงหมาทั้งประเภท ใช้รูปพหูพจน์ dogs และไม่ใช้คำนำหน้านาม"],
["or","ฉันเจอข้อมูลนั้นในอินเทอร์เน็ต","I found it on the internet","a","internet มีหนึ่งเดียว ใช้คำนำหน้านาม the"],
["fi","I speak __.","ฉันพูดภาษาอังกฤษได้","English","the English|an English|a English","ชื่อภาษาไม่ใช้คำนำหน้านาม"],
["fi","The sun rises in __ east.","ดวงอาทิตย์ขึ้นทางทิศตะวันออก","the","a|an|some","หน้าทิศใช้ the"],
["fi","I love __.","ฉันชอบดนตรีมาก","music","the musics|a music|musics","ดนตรีโดยรวมไม่ใช้คำนำหน้านาม และเป็นคำนามนับไม่ได้จึงไม่เติม -s"],
["ty","ฉันมาจากสหรัฐอเมริกา","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — คำนำหน้านาม the","a","หน้า United States ใช้คำนำหน้านาม the"],
["ty","ฉันเล่นกีตาร์","I play the guitar|I play guitar","play · guitar — คำนำหน้านาม the","a","หน้าเครื่องดนตรีใช้คำนำหน้านาม the"],
["ty","แมวน่ารัก (แมวทั้งประเภท)","Cats are cute","cat — รูปพหูพจน์ ไม่มีคำนำหน้านาม","The cat","พูดถึงทั้งประเภท ใช้รูปพหูพจน์ cats และไม่ใช้คำนำหน้านาม"]]},
{ id:"first-conditional", title:"ประโยคเงื่อนไข (If) แบบที่ 1: If + Present Simple, will", blurb:"“ถ้า… ก็จะ…” หลัง if ไม่ใส่ will", deck:"ที่ทำงานและอีเมล", body:`
<p>ใช้พูดถึงเรื่องที่เกิดขึ้นได้จริง รูปคือ <b>If + Present Simple Tense, will + กริยาช่อง 1</b> แม้ความหมายจะเป็นอนาคต แต่ฝั่ง if ยังใช้ <b>Present Simple Tense</b></p>
<p>ภาษาไทยมักพูดว่า “ถ้า… ก็จะ…” แต่ภาษาอังกฤษไม่ใส่ will หลัง if และไม่มีคำที่ตรงกับ ก็ เวลาเขียนให้ใช้จุลภาค (,) คั่นระหว่างสองส่วนเมื่อ if อยู่ข้างหน้า</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|ถ้าฝนตก ฉันจะอยู่บ้าน}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|ถ้าไม่รีบ คุณจะตกรถเมล์}}
<h3>สลับลำดับได้</h3>
<p>ถ้าย้าย if ไปไว้ข้างหลัง ไม่ต้องมีจุลภาค</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|ถ้ามีเวลา ฉันจะช่วยคุณ}}
<h3>ใช้กับประโยคคำสั่ง</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|ถ้ามาสายให้โทรหาฉัน}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|ถ้าต้องการความช่วยเหลือ บอกฉันได้เลย}}
<h3>when: เมื่อ… (เรื่องที่เกิดขึ้นแน่นอน)</h3>
<p>ถ้าแน่ใจว่าจะเกิดขึ้นแน่ ใช้ when แทน if และหลัง when ก็ไม่ใส่ will เช่นกัน</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|พอถึงบ้านแล้วฉันจะโทรหาคุณ}}
<div class="tip">ผิดบ่อยที่สุด: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. ช่องว่างควรเติมคำใด",["will rain","rains","rained","raining"],1,"หลัง if ใช้ Present Simple Tense"],["If you study, you ___ pass. ช่องว่างควรเติมคำใด",["pass will","passing","will pass","passed"],2,"ฝั่งผลลัพธ์ใช้ will + กริยาช่อง 1"],["เลือกประโยคที่ถูกต้อง",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"ฝั่ง if ใช้ Present Simple Tense ฝั่งผลลัพธ์ใช้ will"]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","หลัง if ใช้ Present Simple Tense ไม่ใส่ will"],
["mc","If you're late, ___ me.","call","will calling","calls","to call","ประโยคคำสั่งขึ้นต้นด้วยกริยาช่อง 1"],
["mc","“ถ้ามีเวลา ฉันจะช่วยคุณ” ภาษาอังกฤษพูดว่าอย่างไร","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","หลัง if ไม่ใส่ will"],
["mc","“ถ้าไม่รีบ คุณจะตกรถเมล์” ภาษาอังกฤษพูดว่าอย่างไร","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","ฝั่ง if ใช้รูปปฏิเสธ don't ของ Present Simple Tense"],
["mc","“พอถึงบ้านแล้วฉันจะโทรหาคุณ” ภาษาอังกฤษพูดว่าอย่างไร","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","หลัง when ก็ใช้ Present Simple Tense"],
["or","ถ้าฝนตก ฉันจะอยู่บ้าน","If it rains I'll stay home","will the","หลัง if ใช้ Present Simple Tense และหน้า home ไม่ใช้คำนำหน้านาม"],
["or","ถ้าคุณมีเวลา โทรหาฉันด้วย","If you have time call me","will","หลัง if ไม่ใส่ will"],
["or","คุณจะตกรถเมล์","You'll miss the bus","a buses","รถเมล์คันที่ตั้งใจจะขึ้น ใช้คำนำหน้านาม the"],
["fi","If it __ tomorrow, we'll cancel.","ถ้าพรุ่งนี้ฝนตก เราจะยกเลิก","rains","will rain|rained|raining","หลัง if ใช้ Present Simple Tense"],
["fi","If you study, you __ pass.","ถ้าตั้งใจเรียน คุณจะสอบผ่าน","will|can|might","are|did|passing","ฝั่งผลลัพธ์ใช้ will + กริยาช่อง 1"],
["fi","__ you need help, call me.","ถ้าต้องการความช่วยเหลือ โทรหาฉัน","If|When","So|But|Because","“ถ้า” ใช้ if"],
["ty","ถ้ามีเวลา ฉันจะช่วย","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","หลัง if ไม่ใส่ will"],
["ty","ถ้าฝนตก ฉันจะนั่งแท็กซี่","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — คำนำหน้านาม a","the","แท็กซี่คันไหนก็ได้หนึ่งคัน ใช้คำนำหน้านาม a"],
["ty","คุณจะตกรถเมล์","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — คำนำหน้านาม the","a","รถเมล์คันที่ตั้งใจจะขึ้น ใช้คำนำหน้านาม the"]]},
{ id:"relative", title:"who / that: ขยายคนและสิ่งของ", blurb:"ภาษาไทยขยายคำนามจากข้างหลังด้วย ที่ ภาษาอังกฤษก็เช่นกัน", deck:"ช้อปปิ้งและจ่ายเงิน", body:`
<p>ข่าวดี: ภาษาไทยขยายคำนามจากข้างหลังเหมือนภาษาอังกฤษ “หนังสือ<b>ที่ฉันซื้อ</b>” → the book <b>that I bought</b> คำว่า ที่ หรือ ซึ่ง ตรงกับ who / that ลำดับคำจึงเหมือนกันเกือบทั้งหมด สิ่งที่ต้องจำคือเลือกคำให้ถูก</p>
<h3>คนใช้ who</h3>
{{ex:I have a friend who speaks English.|/aɪ ˈhæv ə ˈfrend hu ˈspiːks ˈɪŋglɪʃ/|ฉันมีเพื่อนคนหนึ่งที่พูดภาษาอังกฤษได้}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|ผู้ชายที่อยู่บ้านข้าง ๆ}}
<h3>สิ่งของใช้ that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|หนังสือที่ฉันซื้อ}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|นี่คือโทรศัพท์ที่ฉันอยากได้}}
<h3>that มักละได้</h3>
<p>ถ้าหลัง that เป็นประธาน + กริยาเลย จะละ that ก็ได้ และเวลาพูดมักละ ต่างจากภาษาไทยที่ละ ที่ ไม่ได้</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|หนังที่เราดูสนุกมาก}}
<h3>สถานที่ใช้ where</h3>
<p>ระวัง: ที่ ในภาษาไทยแปลว่า at ได้ด้วย คนไทยจึงอาจพูดว่า <b>the place at I live</b> ✗ ถ้าขยายสถานที่ให้ใช้ <b>where</b>: <b>the place where I live</b> ✓</p>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|ร้านกาแฟที่เราเจอกัน}}
<div class="tip">จำแค่ลำดับ: <b>คำนามมาก่อน ส่วนขยายตามหลัง</b> เหมือนภาษาไทย “หนังสือที่ฉันซื้อ” → the book (that) I bought และห้ามใช้ what: <b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Busan. ช่องว่างควรเติมคำใด",["which","who","what","he"],1,"ขยายคนใช้ who"],["“หนังสือที่ฉันซื้อ” ภาษาอังกฤษพูดว่าอย่างไร",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"พูดคำนามก่อน แล้วขยายด้วย that"],["เลือกประโยคที่ถูกต้อง",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"ส่วนขยายอยู่หลังคำนาม เหมือน ที่ ในภาษาไทย"]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","ขยายคนใช้ who"],
["mc","“หนังสือที่ฉันซื้อ” ภาษาอังกฤษพูดว่าอย่างไร","the book that I bought","the I bought book","the book what I bought","the bought I book","คำนามมาก่อน ส่วนขยายตามหลัง"],
["mc","“ผู้ชายที่อยู่บ้านข้าง ๆ” ภาษาอังกฤษพูดว่าอย่างไร","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","ขยายคนใช้ who"],
["mc","This is the phone ___ I want.","that","who","what","it","ขยายสิ่งของใช้ that"],
["mc","“หนังที่เราดู” ภาษาอังกฤษพูดว่าอย่างไร","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","ละ that ได้"],
["or","นี่คือหนังสือที่ฉันซื้อ","This is the book I bought","a what","หนังสือเล่มที่ฉันซื้อเจาะจงแล้ว ใช้คำนำหน้านาม the"],
["or","ฉันมีเพื่อนคนหนึ่งที่ทำอาหาร","I have a friend who cooks","the which","เพื่อนที่พูดถึงครั้งแรกหนึ่งคน ใช้คำนำหน้านาม a"],
["or","หนังที่เราดูสนุกมาก","The movie we saw was great","A movies","หนังเรื่องที่เราดูเจาะจงแล้ว ใช้คำนำหน้านาม the"],
["fi","the man __ lives here","ผู้ชายที่อาศัยอยู่ที่นี่","who|that","what|he|which","ขยายคนใช้ who"],
["fi","the book __ I read","หนังสือที่ฉันอ่าน","that|which","who|what|it","ขยายสิ่งของใช้ that"],
["fi","the cafe __ we met","ร้านกาแฟที่เราเจอกัน","where","who|what|it","ขยายสถานที่ใช้ where"],
["ty","นี่คือหนังสือที่ฉันซื้อ","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — คำนำหน้านาม the","a","หนังสือเล่มที่ฉันซื้อเจาะจงแล้ว ใช้คำนำหน้านาม the"],
["ty","ฉันมีเพื่อนคนหนึ่งที่พูดภาษาเกาหลีได้","I have a friend who speaks Korean|I have a friend that speaks Korean","a friend · who · speaks Korean — คำนำหน้านาม a","the","เพื่อนที่พูดถึงครั้งแรกหนึ่งคน ใช้คำนำหน้านาม a"],
["ty","หนังที่เราดูสนุกมาก","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great","what","คำนามมาก่อน ส่วนขยายตามหลัง และไม่ใช้ what"]]},
];
