/* th-en stage B1: new lessons. English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present Perfect Tense 2: for และ since ทำมาจนถึงตอนนี้", blurb:"เรื่องที่เริ่มในอดีตและยังทำอยู่ for + ช่วงเวลา since + จุดเริ่มต้น", deck:"แนะนำตัว", body:`
<p>การใช้ Present Perfect Tense แบบที่สอง: <b>เรื่องที่เริ่มในอดีตและยังต่อเนื่องมาถึงตอนนี้</b> ตรงกับภาษาไทยว่า “…มา…แล้ว” หรือ “…มาตั้งแต่…”</p>
{{ex:I've lived in Bangkok for five years.|/aɪv ˈlɪvd ɪn ˈbæŋkɑːk fər ˈfaɪv ˈjɪrz/|ฉันอยู่กรุงเทพฯ มา 5 ปีแล้ว}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|ฉันทำงานที่นี่มาตั้งแต่ปี 2020}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|ฉันรู้จักเธอมานานแล้ว}}
<p>คนไทยมักพูดตามโครงสร้างภาษาไทยว่า <b>I live here 5 years already.</b> ✗ แต่ภาษาอังกฤษต้องใช้ have + กริยาช่อง 3 กับ for: <b>I've lived here for five years.</b> ✓</p>
<h3>for และ since</h3>
<div class="tbl"><table><tr><th>for + ช่วงเวลา (มา…แล้ว)</th><th>since + จุดเริ่มต้น (มาตั้งแต่…)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long…?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|คุณอยู่ที่นี่มานานเท่าไรแล้ว}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|คุณเรียนภาษาอังกฤษมานานเท่าไรแล้ว}}
<h3>just already yet</h3>
<p>เพิ่ง ตรงกับ <b>just</b> แล้ว ตรงกับ <b>already</b> และ หรือยัง ในคำถามตรงกับ <b>yet</b></p>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|ฉันเพิ่งทำเสร็จ}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|ฉันดูแล้ว}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|กินข้าวหรือยัง}}
<div class="tip">ผิดบ่อยที่สุดคือใช้ Present Simple Tense: <b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. ช่องว่างควรเติมคำใด",["since","for","during","from"],1,"หน้าช่วงเวลาใช้ for"],["I've worked here ___ 2020. ช่องว่างควรเติมคำใด",["for","in","since","at"],2,"หน้าจุดเริ่มต้นใช้ since"],["“คุณอยู่ที่นี่มานานเท่าไรแล้ว” ภาษาอังกฤษพูดว่าอย่างไร",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + กริยาช่อง 3"]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","หน้าช่วงเวลาใช้ for"],
["mc","She's lived here ___ 2019.","since","for","in","at","หน้าจุดเริ่มต้นใช้ since"],
["mc","“คุณอยู่ที่นี่มานานเท่าไรแล้ว” ภาษาอังกฤษพูดว่าอย่างไร","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + กริยาช่อง 3"],
["mc","“ฉันเพิ่งทำเสร็จ” ภาษาอังกฤษพูดว่าอย่างไร","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","เพิ่ง ใช้ have + just + กริยาช่อง 3"],
["mc","“กินข้าวหรือยัง” ภาษาอังกฤษพูดว่าอย่างไร","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","ในคำถาม “…หรือยัง” ใช้ yet"],
["or","ฉันอยู่ที่นี่มา 5 ปีแล้ว","I've lived here for five years","year since","5 ปีจึงเป็นรูปพหูพจน์ years และหน้าช่วงเวลาใช้ for"],
["or","ฉันดูหนังเรื่องนั้นแล้ว","I've already seen the movie","a saw","หนังเรื่องที่ทั้งสองฝ่ายรู้ว่าเรื่องไหน ใช้คำนำหน้านาม the"],
["or","คุณรอมานานเท่าไรแล้ว","How long have you waited","did","How long have you + กริยาช่อง 3"],
["fi","I've worked here __ two years.","ฉันทำงานที่นี่มา 2 ปีแล้ว","for","since|from|during","หน้าช่วงเวลาใช้ for"],
["fi","I've been here __ Monday.","ฉันอยู่ที่นี่มาตั้งแต่วันจันทร์","since","for|at|during","หน้าจุดเริ่มต้นใช้ since"],
["fi","Have you finished __?","คุณทำเสร็จหรือยัง","yet|already","ever|never|since","ในคำถาม “…หรือยัง” ใช้ yet"],
["ty","ฉันอยู่ที่นี่มา 3 ปีแล้ว","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — รูปพหูพจน์","year","3 ปีจึงเป็นรูปพหูพจน์ years"],
["ty","คุณอยู่ที่นี่มานานเท่าไรแล้ว","How long have you been here","how long · have you · been here","are","How long have you + กริยาช่อง 3"],
["ty","ฉันอ่านหนังสือเล่มนั้นแล้ว","I've already read the book|I've read the book already|I already read the book","already · read · book — คำนำหน้านาม the","a","หนังสือเล่มที่ทั้งสองฝ่ายรู้ว่าเล่มไหน ใช้คำนำหน้านาม the"]]},
{ id:"narrative", title:"Tense ในการเล่าเรื่อง: Past Simple, Past Continuous, Past Perfect", blurb:"ฉากหลังใช้ Past Continuous เหตุการณ์ใช้ Past Simple เรื่องที่เกิดก่อนหน้านั้นใช้ had + กริยาช่อง 3", deck:"ภาพยนตร์ ซีรีส์ และสแลง", body:`
<p>เวลาเล่าเรื่องที่เกิดขึ้นแล้ว ภาษาอังกฤษใช้สาม Tense ผสมกัน แต่ละแบบมีหน้าที่ต่างกัน ภาษาไทยบอกลำดับด้วยคำอย่าง กำลัง แล้ว หรือ ก่อนหน้านั้น แต่ภาษาอังกฤษบอกด้วยรูปกริยา</p>
<div class="tbl"><table><tr><th>Tense</th><th>หน้าที่</th><th>ตัวอย่าง</th></tr><tr><td class="k">Past Continuous</td><td>ฉากหลัง สิ่งที่กำลังทำอยู่</td><td>I was walking home.</td></tr><tr><td class="k">Past Simple</td><td>เหตุการณ์ที่เกิดขึ้น</td><td>I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>เรื่องที่เกิดก่อนหน้านั้นอีก</td><td>He had moved to Chiang Mai.</td></tr></table></div>
<h3>ฉากหลัง + เหตุการณ์</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|ฉันกำลังเดินกลับบ้านแล้วก็เจอเพื่อนเก่า}}
<h3>Past Perfect Tense: had + กริยาช่อง 3</h3>
<p>ใช้กับเรื่องที่เกิด<b>ก่อน</b>อีกเหตุการณ์หนึ่งในอดีต ในเรื่องเล่าภาษาไทยมักพูดว่า “…ไปแล้ว”</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|ตอนที่ฉันไปถึง หนังเริ่มไปแล้ว}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|ก่อนหน้านั้นฉันไม่เคยเห็นหิมะเลย}}
<h3>คำบอกลำดับ</h3>
<p>เล่าเรื่องต่อด้วย first (ก่อนอื่น) then (จากนั้น) after that (หลังจากนั้น) และ finally (ในที่สุด)</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|ก่อนอื่นเรากินข้าวเย็น จากนั้นก็ดูหนัง}}
<div class="tip">then (จากนั้น) กับ than (กว่า) ออกเสียงคล้ายกันแต่เป็นคนละคำ ในเรื่องเล่าใช้ <b>then</b></div>`,
check:[["When I arrived, the train ___ already left. ช่องว่างควรเติมคำใด",["has","was","had","did"],2,"เรื่องที่เกิดก่อนหน้านั้นใช้ had + กริยาช่อง 3"],["I ___ walking home when it started to rain. ช่องว่างควรเติมคำใด",["was","had","did","have"],0,"ฉากหลังหรือสิ่งที่กำลังทำอยู่ใช้ Past Continuous Tense"],["ประโยคไหนบอกเรื่องที่เกิดก่อนอีกเหตุการณ์หนึ่ง",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + กริยาช่อง 3 คือ Past Perfect Tense"]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","เรื่องที่เกิดก่อนหน้านั้นใช้ had + กริยาช่อง 3"],
["mc","I ___ cooking when the phone rang.","was","had","did","have","สิ่งที่กำลังทำอยู่ใช้ Past Continuous Tense"],
["mc","“ตอนที่ฉันไปถึง รถไฟออกไปแล้ว” ภาษาอังกฤษพูดว่าอย่างไร","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","เรื่องที่เกิดก่อนใช้ had + กริยาช่อง 3"],
["mc","คำว่า “จากนั้น” ที่ใช้เล่าเรื่องต่อ","then","than","that","them","then แปลว่า จากนั้น ส่วน than แปลว่า กว่า"],
["mc","“ก่อนหน้านั้นฉันไม่เคยเห็นหิมะเลย” ภาษาอังกฤษพูดว่าอย่างไร","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","ใช้ had + never + กริยาช่อง 3"],
["or","รถไฟออกไปแล้ว (ก่อนที่ฉันจะไปถึง)","The train had already left","a has","รถไฟขบวนที่ตั้งใจจะขึ้น ใช้คำนำหน้านาม the"],
["or","ฉันเจอเพื่อนเก่าคนหนึ่ง","I met an old friend","a friends","old ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an"],
["or","ตอนนั้นฉันกำลังเดินกลับบ้าน","I was walking home","had","ฉากหลังใช้ Past Continuous Tense"],
["fi","I was sleeping __ you called.","ตอนที่คุณโทรมา ฉันกำลังนอนหลับ","when","than|so|had","“ตอนที่…” ใช้ when"],
["fi","The bus had already __.","รถเมล์ออกไปแล้ว","left|gone","leave|leaving|leaves","หลัง had ใช้กริยาช่อง 3"],
["fi","First we ate. __ we watched a movie.","ก่อนอื่นเรากินข้าว จากนั้นก็ดูหนัง","Then|After that|Next","Than|Because|When","“จากนั้น” ใช้ then"],
["ty","หนังเริ่มไปแล้ว (ก่อนที่เราจะไปถึง)","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — คำนำหน้านาม the","a","หนังเรื่องที่ตั้งใจจะดู ใช้คำนำหน้านาม the"],
["ty","ฉันเจอเพื่อนเก่าคนหนึ่ง","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — คำนำหน้านาม an","a","old ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an"],
["ty","ตอนนั้นฉันกำลังเดินกลับบ้าน","I was walking home","was · walking · home","had","ฉากหลังใช้ Past Continuous Tense"]]},
{ id:"conditionals", title:"ประโยคเงื่อนไข (If) แบบที่ 2 และ 3: สมมติและเสียดาย", blurb:"ตรงข้ามกับความจริงตอนนี้ใช้ would ถ้าเสียดายเรื่องที่ผ่านไปแล้วใช้ would have", deck:"ความรู้สึกและปฏิกิริยา", body:`
<p>ใช้เมื่อจินตนาการถึงเรื่องที่ไม่จริง ตรงกับภาษาไทยว่า “ถ้า… ก็คง…” หรือ “ถ้าตอนนั้น… ก็คงจะ…” ภาษาไทยใช้คำเดิมทุกกรณี แต่ภาษาอังกฤษ<b>ถอยรูปกริยาไปหนึ่งช่อง</b>เพื่อบอกว่าเป็นเรื่องสมมติ</p>
<h3>ประโยคเงื่อนไขแบบที่ 2: ตรงข้ามกับความจริงตอนนี้</h3>
<p>รูปคือ <b>If + กริยาช่อง 2, would + กริยาช่อง 1</b> ใช้รูปอดีตแต่ความหมายคือตอนนี้</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|ถ้ามีเวลา ฉันคงไปเที่ยวแล้ว}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|ถ้าฉันเป็นคุณ ฉันจะรับไว้}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|ถ้าเป็นคุณจะทำอย่างไร}}
<h3>ประโยคเงื่อนไขแบบที่ 3: ตรงข้ามกับเรื่องในอดีต</h3>
<p>รูปคือ <b>If + had + กริยาช่อง 3, would have + กริยาช่อง 3</b></p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|ถ้าตอนนั้นตั้งใจเรียน ฉันคงสอบผ่านไปแล้ว}}
<h3>ความเสียดาย: should have และ I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|ฉันน่าจะโทรไป}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|ฉันอยากมีเวลามากกว่านี้}}
<div class="tbl"><table><tr><th>แบบ</th><th>ฝั่ง if</th><th>ฝั่งผลลัพธ์</th></tr><tr><td>1 (เป็นไปได้)</td><td class="k">Present Simple</td><td class="k">will</td></tr><tr><td>2 (ตรงข้ามกับตอนนี้)</td><td class="k">กริยาช่อง 2</td><td class="k">would</td></tr><tr><td>3 (ตรงข้ามกับอดีต)</td><td class="k">had + กริยาช่อง 3</td><td class="k">would have + กริยาช่อง 3</td></tr></table></div>
<div class="tip">If I were you เป็นสำนวนตายตัว หลัง I ก็ใช้ <b>were</b> ไม่ใช่ was</div>`,
check:[["If I ___ rich, I would travel. ช่องว่างควรเติมคำใด",["am","were","will be","would be"],1,"ตรงข้ามกับความจริงตอนนี้ ฝั่ง if ใช้รูปอดีต (were)"],["If I had studied, I ___ passed. ช่องว่างควรเติมคำใด",["would","will have","would have","had"],2,"ตรงข้ามกับอดีตใช้ would have + กริยาช่อง 3"],["“ฉันน่าจะโทรไป” (เสียดายที่ไม่ได้โทร) ภาษาอังกฤษพูดว่าอย่างไร",["I should have called.","I should called.","I should had call.","I would call should."],0,"ความเสียดายใช้ should have + กริยาช่อง 3"]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","ตรงข้ามกับความจริงตอนนี้ ฝั่ง if ใช้รูปอดีต"],
["mc","“ถ้าฉันเป็นคุณ ฉันจะซื้อมัน” ภาษาอังกฤษพูดว่าอย่างไร","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd… เป็นสำนวนตายตัว"],
["mc","If I had known, I ___ come.","would have","would","will have","had","ตรงข้ามกับอดีตใช้ would have + กริยาช่อง 3"],
["mc","“ฉันน่าจะโทรไป” (เสียดายที่ไม่ได้โทร) ภาษาอังกฤษพูดว่าอย่างไร","I should have called.","I should called.","I should had call.","I must called.","ความเสียดายใช้ should have + กริยาช่อง 3"],
["mc","“ถ้าเป็นคุณจะทำอย่างไร” ภาษาอังกฤษพูดว่าอย่างไร","What would you do?","What will you did?","What would you did?","What you would do?","การสมมติใช้ would + กริยาช่อง 1"],
["or","ถ้ามีเวลา ฉันคงไปเที่ยวแล้ว","If I had time I'd travel","have will","ตรงข้ามกับความจริงตอนนี้ ใช้รูปอดีต had และ would"],
["or","ถ้าเป็นฉัน ฉันจะนั่งแท็กซี่","I'd take a taxi","the taxis","แท็กซี่คันไหนก็ได้หนึ่งคัน ใช้คำนำหน้านาม a"],
["or","ฉันน่าจะซื้อตั๋วไว้","I should have bought a ticket","the buy","ตั๋วหนึ่งใบ ใช้คำนำหน้านาม a"],
["fi","If I __ you, I'd go.","ถ้าฉันเป็นคุณ ฉันจะไป","were|was","am|be|would be","If I were you เป็นสำนวนตายตัว"],
["fi","I would __ helped.","ฉันคงช่วยไปแล้ว","have","had|has|having","ใช้ would have + กริยาช่อง 3"],
["fi","I wish I __ more time.","ฉันอยากมีเวลามากกว่านี้","had","have|would have|will have","หลัง I wish ใช้รูปอดีต"],
["ty","ถ้าฉันเป็นคุณ ฉันจะไป","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","ใช้สำนวน If I were you, I'd…"],
["ty","ฉันอยากมีรถสักคัน (แต่ไม่มี)","I wish I had a car","I wish · had · car — คำนำหน้านาม a","the","รถคันไหนก็ได้หนึ่งคัน ใช้คำนำหน้านาม a"],
["ty","ฉันน่าจะนั่งแท็กซี่ไป","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — คำนำหน้านาม a","the","แท็กซี่คันไหนก็ได้หนึ่งคัน ใช้คำนำหน้านาม a"]]},
{ id:"passive", title:"ประโยค Passive: Verb to be + กริยาช่อง 3", blurb:"ใช้เมื่อสิ่งที่เกิดขึ้นสำคัญกว่าว่าใครเป็นคนทำ", deck:"ที่ทำงานและอีเมล", body:`
<p>ประโยค Passive (ประธานเป็นผู้ถูกกระทำ) ใช้บอกว่าสิ่งใด<b>ถูกทำ</b> โครงสร้างคือ <b>Verb to be + กริยาช่อง 3</b> ใช้เมื่อไม่รู้ว่าใครทำ หรือไม่สำคัญว่าใครทำ</p>
<p>ภาษาไทยใช้ ถูก ส่วนใหญ่กับเรื่องไม่ดี (ถูกขโมย ถูกดุ) และมักพูดแบบ Active มากกว่า เช่น “ห้องทำความสะอาดทุกวัน” แต่ภาษาอังกฤษใช้ Passive ได้กับทุกเรื่อง และต้องมี Verb to be ที่บอก Tense เสมอ</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|โทรศัพท์ของฉันถูกขโมย}}{{ex:This was made in Thailand.|/ˈðɪs wəz ˈmeɪd ɪn ˈtaɪlænd/|ของชิ้นนี้ผลิตในประเทศไทย}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|การประชุมถูกยกเลิก}}
<h3>Present Simple: สิ่งที่เป็นประจำ</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|ที่นี่ใช้ภาษาอังกฤษ}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|อาหารเช้าเสิร์ฟตอน 7 โมง}}
<h3>บอกว่าใครทำด้วย by</h3>
{{ex:It was written by a Thai writer.|/ɪt wəz ˈrɪtn baɪ ə ˈtaɪ ˈraɪtər/|นักเขียนชาวไทยเป็นคนเขียน}}
<h3>ประโยค Active และประโยค Passive</h3>
<div class="tbl"><table><tr><th>ประโยค Active</th><th>ประโยค Passive</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">ผิดบ่อยที่สุดคือลืม Verb to be: <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓ และ <b>The house built in 1990.</b> ✗ → <b>The house was built in 1990.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. ช่องว่างควรเติมคำใด",["is","was","did","has"],1,"เป็นเรื่องเมื่อวาน จึงใช้ was + กริยาช่อง 3"],["This phone ___ made in Korea. ช่องว่างควรเติมคำใด",["was","did","has","does"],0,"ประโยค Passive ใช้ Verb to be + กริยาช่อง 3"],["“การประชุมถูกยกเลิก” ภาษาอังกฤษพูดว่าอย่างไร",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"Verb to be + กริยาช่อง 3 คือ was canceled"]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","ประโยค Passive ใช้ Verb to be + กริยาช่อง 3"],
["mc","“ของชิ้นนี้ผลิตที่เกาหลี” ภาษาอังกฤษพูดว่าอย่างไร","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","Verb to be + กริยาช่อง 3 คือ was made"],
["mc","“ที่นี่ใช้ภาษาอังกฤษ” (ประโยค Passive) ภาษาอังกฤษพูดว่าอย่างไร","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","สิ่งที่เป็นประจำใช้ is + กริยาช่อง 3"],
["mc","“การประชุมถูกยกเลิก” ภาษาอังกฤษพูดว่าอย่างไร","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","ใช้ Verb to be + กริยาช่อง 3"],
["mc","“อาหารเช้าเสิร์ฟตอน 7 โมง” ภาษาอังกฤษพูดว่าอย่างไร","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","ชื่อมื้ออาหารไม่ใช้คำนำหน้านาม และใช้ is + กริยาช่อง 3"],
["or","กระเป๋าของฉันถูกขโมย","My bag was stolen","stole","หลัง Verb to be ใช้กริยาช่อง 3 คือ stolen"],
["or","การประชุมถูกยกเลิก","The meeting was canceled","A meetings","การประชุมที่ทั้งสองฝ่ายรู้ว่าครั้งไหน ใช้คำนำหน้านาม the"],
["or","หน้าต่างแตก","The window was broken","a windows","หน้าต่างบานที่อยู่ตรงนี้ ใช้คำนำหน้านาม the"],
["fi","This was __ in Korea.","ของชิ้นนี้ผลิตที่เกาหลี","made","make|making|makes","หลัง Verb to be ใช้กริยาช่อง 3"],
["fi","The room __ cleaned every day.","ห้องนี้ทำความสะอาดทุกวัน","is|gets","does|has|did","สิ่งที่เป็นประจำใช้ is + กริยาช่อง 3"],
["fi","It was written __ Han Kang.","ฮัน คัง เป็นคนเขียน","by","from|of|with","บอกว่าใครทำใช้ by"],
["ty","โทรศัพท์ของฉันถูกขโมย","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","Verb to be + กริยาช่อง 3 คือ was stolen"],
["ty","การประชุมครั้งนั้นถูกยกเลิก","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — คำนำหน้านาม the","a","การประชุมที่ทั้งสองฝ่ายรู้ว่าครั้งไหน ใช้คำนำหน้านาม the"],
["ty","ประตูถูกล็อกไว้","The door was locked","the door · was · locked — คำนำหน้านาม the","a","ประตูบานที่อยู่ตรงนี้ ใช้คำนำหน้านาม the"]]},
{ id:"reported", title:"คำพูดทางอ้อม (Reported speech): เล่าต่อว่าคนอื่นพูดอะไร", blurb:"She said she was tired. ถอย Tense ไปหนึ่งขั้น และหลัง tell ต้องมีผู้ฟัง", deck:"โทรศัพท์และคำย่อในแชต", body:`
<p>ใช้เล่าต่อว่าคนอื่นพูดอะไร ตรงกับภาษาไทยว่า “…บอกว่า…” ภาษาไทยยกคำพูดมาได้เลยโดยไม่เปลี่ยนอะไร แต่ภาษาอังกฤษต้อง<b>ถอย Tense ของคำพูดไปเป็นอดีตหนึ่งขั้น</b></p>
<div class="tbl"><table><tr><th>คำพูดเดิม</th><th>เมื่อเล่าต่อ</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|เธอบอกว่าเธอเหนื่อย}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|เขา (ผู้ชาย) บอกว่าจะมา}}
<h3>say และ tell</h3>
<p>หลัง <b>tell</b> ต้องมีผู้ฟังเสมอ แต่หลัง <b>say</b> ไม่มี ภาษาไทยใช้คำว่า บอก คำเดียว จึงพลาดได้ง่าย</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|เขาบอกฉันว่าเขายุ่ง}}
<h3>เล่าต่อคำถาม</h3>
<p>คำถาม Yes/No ใช้ <b>if</b> ส่วนคำถามที่มีคำแสดงคำถาม (Wh-) ใช้คำนั้นตามเดิม และส่วนที่ตามมาใช้<b>ลำดับคำแบบประโยคบอกเล่า</b> (ประธาน + กริยา)</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|เธอถามว่าฉันโอเคไหม}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|เขาถามว่าฉันอยู่ที่ไหน}}
<div class="tip">ผิดบ่อยที่สุด: <b>He said me …</b> ✗ → <b>He told me …</b> ✓ และ <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. ช่องว่างควรเติมคำใด",["is being","was","be","will"],1,"คำพูดที่เล่าต่อต้องถอย Tense เป็นอดีต"],["He ___ me he would come. ช่องว่างควรเติมคำใด",["said","say","told","tell to"],2,"มีผู้ฟัง (me) จึงใช้ told"],["“เขาถามว่าฉันอยู่ที่ไหน” ภาษาอังกฤษพูดว่าอย่างไร",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"คำถามที่เล่าต่อใช้ลำดับคำแบบประโยคบอกเล่า"]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","คำพูดที่เล่าต่อต้องถอย Tense เป็นอดีต"],
["mc","He ___ me he was late.","told","said","say","tells to","มีผู้ฟังจึงใช้ told"],
["mc","“เขา (ผู้ชาย) บอกว่าจะมา” ภาษาอังกฤษพูดว่าอย่างไร","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will เปลี่ยนเป็น would"],
["mc","“เธอถามว่าฉันโอเคไหม” ภาษาอังกฤษพูดว่าอย่างไร","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","คำถาม Yes/No เล่าต่อด้วย if"],
["mc","“เขาถามว่าฉันอยู่ที่ไหน” ภาษาอังกฤษพูดว่าอย่างไร","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","คำถามที่เล่าต่อใช้ลำดับคำแบบประโยคบอกเล่า"],
["or","เธอบอกว่าเธอเหนื่อย","She said she was tired","told","ไม่มีผู้ฟังจึงใช้ said"],
["or","เขา (ผู้ชาย) บอกว่าซื้อรถมาคันหนึ่ง","He said he bought a car","the cars","รถที่พูดถึงครั้งแรกหนึ่งคัน ใช้คำนำหน้านาม a"],
["or","เธอบอกว่าชอบหนังสือเล่มนั้น","She said she liked the book","a books","หนังสือเล่มที่ทั้งสองฝ่ายรู้ว่าเล่มไหน ใช้คำนำหน้านาม the"],
["fi","She __ she was tired.","เธอบอกว่าเธอเหนื่อย","said","told|asked|say","ไม่มีผู้ฟังจึงใช้ said"],
["fi","He told __ he was busy.","เขาบอกฉันว่าเขายุ่ง","me","I|my|to","หลัง told ต้องมีผู้ฟัง"],
["fi","She asked __ I was okay.","เธอถามว่าฉันโอเคไหม","if|whether","that|what|did","คำถาม Yes/No เล่าต่อด้วย if"],
["ty","เขา (ผู้ชาย) บอกว่าเขายุ่ง","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","คำพูดที่เล่าต่อต้องถอย Tense เป็นอดีต"],
["ty","เธอบอกว่าเธอมีรถคันหนึ่ง","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — คำนำหน้านาม a","the","รถที่พูดถึงครั้งแรกหนึ่งคัน ใช้คำนำหน้านาม a"],
["ty","เขา (ผู้ชาย) บอกว่าเขาดูหนังเรื่องนั้นแล้ว","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — คำนำหน้านาม the","a","หนังเรื่องที่ทั้งสองฝ่ายรู้ว่าเรื่องไหน ใช้คำนำหน้านาม the"]]},
];
