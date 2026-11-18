/* Practice sets for the th-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Thai; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile th.md §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "ชื่อตัวอักษรไหนออกเสียงเหมือนคำว่า see", o: ["C", "S", "Z", "K"], why: "C ออกเสียงเหมือน see ทุกอย่าง ชื่อของ S ขึ้นต้นด้วยเสียงสระ Z ในอเมริกาเรียกว่า zee ที่ต้องสั่นเส้นเสียง และ K ออกเสียงเหมือนพยางค์ท้ายของ OK" },
    { t: "mc", q: "ตัวอักษรที่อยู่ถัดจาก Q คือตัวไหน", o: ["R", "P", "S", "O"], why: "ลำดับตัวอักษรคือ … O P Q R S … ถัดจาก Q จึงเป็น R" },
    { t: "mc", q: "ข้อไหนถูกต้อง", o: ["an M", "a M", "an B", "an U"], why: "ชื่อของ M ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an: an M ส่วน B ขึ้นต้นด้วยเสียงพยัญชนะ จึงเป็น a B และ U ออกเสียงเหมือน you จึงเป็น a U" },
    { t: "mc", q: "ข้อไหนเป็นตัวอักษรสระ", o: ["U", "R", "S", "W"], why: "สระในภาษาอังกฤษมีห้าตัว คือ A E I O U ส่วน R S W เป็นพยัญชนะ" },
    { t: "mc", q: "ตัวอักษร W มีชื่อเรียกว่าอะไร", o: ["double u", "double v", "u u", "v v"], why: "W หน้าตาเหมือน V สองตัว แต่ชื่อคือ double u แปลว่า ยูสองตัว" },

    { t: "order", p: "คำนั้นสะกดอย่างไร", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell เป็นกริยาทั่วไป คำถามจึงต้องมีกริยาช่วย do ประธาน you ใช้ do ไม่ใช่ does และหลัง do ใช้กริยาช่อง 1 spell ไม่ใช่ spelling" },
    { t: "order", p: "ชื่อของฉันขึ้นต้นด้วยตัว S", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "ชื่อของ S ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an ไม่ใช่ a และ my name เป็นประธานเอกพจน์บุรุษที่ 3 กริยาจึงเติม -s: starts" },
    { t: "order", p: "hello มี L สองตัว", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "สองตัวต้องเป็นรูปพหูพจน์ Ls และเมื่อสิ่งที่มีเป็นพหูพจน์ ใช้ There are ไม่ใช่ There is" },

    { t: "fill", q: "How do you __ your name?", p: "ชื่อคุณสะกดอย่างไร", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "หลังกริยาช่วย do ใช้กริยาช่อง 1: How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "ขึ้นต้นด้วยตัว B", a: ["with"], o: ["by", "for", "in"], why: "“ขึ้นต้นด้วย” ภาษาอังกฤษใช้ start with" },
    { t: "fill", q: "That's M __ in Mary.", p: "M แบบใน Mary", a: ["as"], o: ["so", "than", "of"], why: "เวลายืนยันตัวอักษรด้วยคำ ใช้รูป M as in Mary แปลว่า M ตัวเดียวกับใน Mary" },

    { t: "type", p: "มันขึ้นต้นด้วยตัว A (ใส่คำนำหน้านามด้วย)", a: ["It starts with an A", "It begins with an A"], hint: "it · start · A — ชื่อของ A ขึ้นต้นด้วยเสียงสระ", x: ["the", "start"], why: "ชื่อของ A ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an: an A และ it เป็นประธานเอกพจน์บุรุษที่ 3 กริยาจึงเติม -s: starts" },
    { t: "type", p: "ชื่อของคุณสะกดอย่างไร", a: ["How do you spell your name"], hint: "spell · your name — ถามด้วยกริยาช่วย do", x: ["spelling", "does"], why: "spell เป็นกริยาทั่วไป คำถามจึงต้องมีกริยาช่วย do ประธาน you ใช้ do ไม่ใช่ does แล้วตามด้วยกริยาช่อง 1 spell" },
    { t: "type", p: "มันมีตัว T สองตัว (พูดถึงคำคำหนึ่ง)", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "it · two · T — สองตัวต้องเป็นรูปพหูพจน์", x: ["T", "have"], why: "สองตัวต้องเป็นรูปพหูพจน์ Ts (เขียน T's ก็ได้) และ it เป็นประธานเอกพจน์บุรุษที่ 3 จึงใช้ has ไม่ใช่ have" }
  ],
  pron: [
    { t: "mc", q: "คำไหนแปลว่า “ข้าว”", o: ["rice", "lice", "rise", "nice"], why: "rice ขึ้นต้นด้วย R ที่ปลายลิ้นไม่แตะตรงไหน ถ้าพูดเป็นเสียง ล จะกลายเป็น lice (เหา)" },
    { t: "mc", q: "คำไหนแปลว่า “พัดลม”", o: ["fan", "pan", "van", "ban"], why: "F คือฟันบนแตะริมฝีปากล่างแล้วปล่อยลม ถ้าริมฝีปากบนและล่างประกบกันจะกลายเป็น pan (กระทะ) คู่นี้คนไทยไม่ค่อยสับสน แต่ท่าปากเดียวกันนี้ใช้กับ V ด้วย" },
    { t: "mc", q: "คำไหนแปลว่า “คิด”", o: ["think", "sink", "thing", "pink"], why: "TH ยื่นปลายลิ้นออกมาระหว่างฟัน ถ้าใช้เสียง ซ จะกลายเป็น sink (อ่างล้างจาน)" },
    { t: "mc", q: "คำไหนแปลว่า “ลงคะแนนเสียง”", o: ["vote", "boat", "goat", "bought"], why: "V คือท่าเดียวกับ F แต่สั่นเส้นเสียง ถ้าปิดริมฝีปากจะกลายเป็น boat (เรือ) และถ้าห่อปากเป็นเสียง ว ก็ผิดเหมือนกัน" },
    { t: "mc", q: "คำไหนแปลว่า “ด้านขวา”", o: ["right", "light", "fight", "bright"], why: "right ขึ้นต้นด้วย R ส่วน light ที่ขึ้นต้นด้วย L แปลว่าแสง" },

    { t: "order", p: "นี่คือกล้วย", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana ขึ้นต้นด้วยเสียงพยัญชนะ จึงใช้คำนำหน้านาม a และ this สะกดด้วย th" },
    { t: "order", p: "ต้นไม้สามต้น", a: ["three", "trees"], x: ["tree", "free"], why: "มีสามต้นจึงต้องเป็นรูปพหูพจน์ trees ส่วน three ขึ้นต้นด้วย TH และ tree ขึ้นต้นด้วย TR" },
    { t: "order", p: "ฉันชอบกาแฟ", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee ใช้เสียง F ที่ฟันบนแตะริมฝีปากล่าง ถ้าเป็น P จะกลายเป็น copy (สำเนา)" },

    { t: "fill", q: "I eat __ice every day.", p: "ฉันกินข้าวทุกวัน", a: ["r"], o: ["l", "n", "w"], why: "ข้าวคือ rice ที่ขึ้นต้นด้วย R ถ้าเป็น L จะกลายเป็น lice (เหา)" },
    { t: "fill", q: "I __ink so.", p: "ฉันคิดว่าอย่างนั้น", a: ["th"], o: ["s", "t", "p"], why: "think ขึ้นต้นด้วย TH ถ้าเป็น s จะกลายเป็น sink (อ่างล้างจาน)" },
    { t: "fill", q: "This is my __.", p: "นี่คือกระเป๋าของฉัน", a: ["bag"], o: ["back", "bug", "beg"], why: "กระเป๋าคือ bag ที่ลงท้ายด้วยเสียง g ก้อง ถ้าลงท้ายด้วยเสียง k จะกลายเป็น back (หลัง)" },

    { t: "type", p: "ต้นไม้สามต้น", a: ["three trees"], hint: "three · tree — สามต้นต้องเป็นรูปพหูพจน์", x: ["tree"], why: "three ขึ้นต้นด้วย TH tree ขึ้นต้นด้วย TR และสามต้นต้องเป็นรูปพหูพจน์: trees" },
    { t: "type", p: "เรือสองลำ", a: ["two boats"], hint: "two · boat — สองลำต้องเป็นรูปพหูพจน์", x: ["boat", "votes"], why: "เรือคือ boat ที่ขึ้นต้นด้วย B และสองลำต้องเป็นรูปพหูพจน์ boats ถ้าเป็น V จะกลายเป็น vote (การลงคะแนน)" },
    { t: "type", p: "เบามาก", a: ["very light"], hint: "very · light — ขึ้นต้นด้วย V และ L", x: ["berry"], why: "very ขึ้นต้นด้วย V ที่ฟันบนแตะริมฝีปากล่าง ไม่ใช่ ว ส่วน light ขึ้นต้นด้วย L ที่ปลายลิ้นแตะปุ่มเหงือก" }
  ],

  articles: [
    { t: "mc", q: "“ฉันเป็นนักเรียน” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "หน้าอาชีพหรือสถานะต้องมีคำนำหน้านาม a เสมอ แม้ภาษาไทยจะไม่มีคำว่า หนึ่ง" },
    { t: "mc", q: "“ฉันมีไอเดียอย่างหนึ่ง” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an" },
    { t: "mc", q: "“หนึ่งชั่วโมง” ภาษาอังกฤษคือ", o: ["an hour", "a hour", "one hours", "hour"], why: "h ใน hour ไม่ออกเสียง คำนี้จึงขึ้นต้นด้วยเสียงสระและใช้คำนำหน้านาม an" },
    { t: "mc", q: "“ฉันชอบหมามาก” (หมายถึงหมาทั้งประเภท)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "พูดถึงทั้งประเภทใช้รูปพหูพจน์และไม่ใช้คำนำหน้านาม" },
    { t: "mc", q: "“ฉันเลี้ยงหมาตัวหนึ่ง หมาตัวนั้นน่ารักมาก” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "พูดถึงครั้งแรกใช้คำนำหน้านาม a พูดถึงซ้ำตัวเดิมใช้ the" },

    { t: "order", p: "ฉันเป็นครู", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "หน้าอาชีพต้องมีคำนำหน้านาม a และ teacher ขึ้นต้นด้วยเสียงพยัญชนะ จึงไม่ใช้ an" },
    { t: "order", p: "ช่วยปิดประตู (ห้องนี้) หน่อยได้ไหม", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "เป็นประตูบานที่ทั้งสองฝ่ายรู้ว่าบานไหน จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "ฉันไม่ดื่มกาแฟ", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "พูดถึงกาแฟแบบทั่วไป coffee เป็นคำนามนับไม่ได้ จึงไม่ใช้คำนำหน้านาม" },

    { t: "fill", q: "I'm __ university student.", p: "ฉันเป็นนักศึกษามหาวิทยาลัย", a: ["a"], o: ["an", "the", "two"], why: "university ขึ้นต้นด้วยเสียง /j/ ซึ่งเป็นเสียงพยัญชนะ จึงใช้คำนำหน้านาม a ดูที่เสียง ไม่ได้ดูที่ตัวสะกด" },
    { t: "fill", q: "I have __ older sister.", p: "ฉันมีพี่สาวหนึ่งคน", a: ["an"], o: ["a", "the", "two"], why: "older ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an" },
    { t: "fill", q: "I don't like __.", p: "ฉันไม่ชอบแมว (หมายถึงแมวทั้งประเภท)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "พูดถึงทั้งประเภทใช้รูปพหูพจน์ cats และไม่ใช้คำนำหน้านาม" },

    { t: "type", p: "ฉันมีไอเดียอย่างหนึ่ง", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — คำนำหน้านามก่อนเสียงสระ", x: ["a"], why: "idea ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an" },
    { t: "type", p: "ฉันชอบหมา (หมายถึงหมาทั้งประเภท)", a: ["I like dogs", "I love dogs"], hint: "like · dog — พูดถึงทั้งประเภทใช้รูปพหูพจน์", x: ["dog", "a"], why: "พูดถึงทั้งประเภทใช้รูปพหูพจน์ dogs และไม่ใช้คำนำหน้านาม" },
    { t: "type", p: "กินข้าวกลางวันกันเถอะ", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — ชื่อมื้ออาหาร", x: ["a", "the"], why: "หน้าชื่อมื้ออาหารไม่ใช้คำนำหน้านาม" }
  ],

  be: [
    { t: "mc", q: "“ฉันเหนื่อย” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "คำคุณศัพท์ต้องมี Verb to be นำหน้า แม้ภาษาไทยจะพูดแค่ “ฉันเหนื่อย”" },
    { t: "mc", q: "“เขาพูดภาษาอังกฤษได้ไหม” ภาษาอังกฤษพูดว่าอย่างไร", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "ประธาน he ใช้ does และกริยาหลัง does ไม่เติม -s" },
    { t: "mc", q: "“เธออยู่ที่ทำงาน” ภาษาอังกฤษพูดว่าอย่างไร", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "บอกว่าอยู่ที่ไหนใช้ Verb to be และประธาน she ใช้ is" },
    { t: "mc", q: "ถ้าจะตอบ Do you like coffee? ว่า “ชอบ” ตอบอย่างไร", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "ถามด้วย do ก็ตอบด้วย do" },
    { t: "mc", q: "“เธอไม่กินเนื้อสัตว์” ภาษาอังกฤษพูดว่าอย่างไร", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "ประธาน she ปฏิเสธด้วย doesn't แล้วตามด้วยกริยาช่อง 1 ที่ไม่เติม -s" },

    { t: "order", p: "พี่ชายฉันทำงานที่โซล", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "ประธานเอกพจน์บุรุษที่ 3 (he) กริยาต้องเติม -s: works และไม่ใช้ Verb to be หน้ากริยาทั่วไป" },
    { t: "order", p: "ฉันไม่ได้เป็นนักเรียน", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "ปฏิเสธ Verb to be ด้วย not และหน้าสถานะต้องมีคำนำหน้านาม a" },
    { t: "order", p: "เธอเลี้ยงหมาสองตัว", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "ประธาน she ใช้ has และมีสองตัวจึงต้องเป็นรูปพหูพจน์ dogs" },

    { t: "fill", q: "My brother __ in Seoul.", p: "พี่ชายฉันอยู่ที่โซล", a: ["lives"], o: ["live", "is live", "living"], why: "ประธานเอกพจน์บุรุษที่ 3 (he) กริยาต้องเติม -s: lives" },
    { t: "fill", q: "__ you tired?", p: "เหนื่อยไหม", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired เป็นคำคุณศัพท์ จึงถามด้วย Verb to be และประธาน you ใช้ are" },
    { t: "fill", q: "We __ hungry.", p: "พวกเราหิว", a: ["are"], o: ["is", "am", "do"], why: "hungry เป็นคำคุณศัพท์ จึงต้องมี Verb to be และประธาน we ใช้ are" },

    { t: "type", p: "เขา (ผู้ชาย) เป็นครู", a: ["He's a teacher", "He is a teacher"], hint: "teacher — Verb to be และคำนำหน้านามหน้าอาชีพ", x: ["the"], why: "บอกว่าเป็นใครใช้ Verb to be และหน้าอาชีพต้องมีคำนำหน้านาม a" },
    { t: "type", p: "ฉันไม่ชอบกาแฟ", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — ปฏิเสธกริยาทั่วไป", x: ["am"], why: "like เป็นกริยาทั่วไป จึงปฏิเสธด้วย don't (I'm not like ✗)" },
    { t: "type", p: "เธอ (ผู้หญิง) เลี้ยงแมวหนึ่งตัวไหม", a: ["Does she have a cat"], hint: "does · have · cat — แมวหนึ่งตัวต้องมีคำนำหน้านาม", x: ["has"], why: "หลัง does ใช้กริยาช่อง 1 have และแมวหนึ่งตัวเป็นคำนามนับได้เอกพจน์ ต้องมีคำนำหน้านาม a" }
  ],

  polite: [
    { t: "mc", q: "สั่งลาเต้หนึ่งแก้วที่คาเฟ่ ประโยคไหนเป็นธรรมชาติที่สุด", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "ที่ร้านค้าใช้ Can I get ~? และลาเต้หนึ่งแก้วต้องมีคำนำหน้านาม a" },
    { t: "mc", q: "ขอความช่วยเหลือจากคนแปลกหน้า ประโยคไหนสุภาพที่สุด", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you ~? เป็นการขอร้องอย่างสุภาพที่ใช้กับคนที่ไม่รู้จักได้" },
    { t: "mc", q: "ฟังไม่ทันแล้วอยากให้อีกฝ่ายพูดซ้ำอย่างสุภาพ พูดว่าอย่างไร", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? เป็นการขอให้พูดซ้ำอย่างสุภาพ" },
    { t: "mc", q: "“รบกวนช่วยถ่ายรูปให้พวกเราหน่อยได้ไหม” (สุภาพมาก)", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "หลัง mind ใช้รูป -ing: taking" },
    { t: "mc", q: "บนเครื่องบิน: “ขอที่นั่งริมหน้าต่าง”", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like ~ เป็นการขออย่างสุภาพ และที่นั่งหนึ่งที่ต้องมีคำนำหน้านาม a" },

    { t: "order", p: "ขอลาเต้หนึ่งแก้วได้ไหม", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "สั่งลาเต้หนึ่งแก้วเป็นครั้งแรก จึงใช้คำนำหน้านาม a" },
    { t: "order", p: "รบกวนเปิดหน้าต่าง (บานนี้) หน่อยได้ไหม", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "หลัง mind ใช้รูป -ing และเป็นหน้าต่างที่ทั้งสองฝ่ายรู้ว่าบานไหน จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "ช่วยพูดช้าลงอีกหน่อยได้ไหม", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "ขอร้องอย่างสุภาพด้วย Could you ~? และใช้คำกริยาวิเศษณ์ slowly" },

    { t: "fill", q: "Would you mind __ the door?", p: "รบกวนปิดประตูหน่อยได้ไหม", a: ["closing"], o: ["close", "to close", "closed"], why: "หลัง mind ใช้รูป -ing" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "ขอกาแฟเย็นหนึ่งแก้วได้ไหม", a: ["an"], o: ["a", "two", "many"], why: "iced ขึ้นต้นด้วยเสียงสระ จึงใช้คำนำหน้านาม an" },
    { t: "fill", q: "No, not at __.", p: "(ตอบ Would you mind ~?) ได้เลย ไม่ขัดข้อง", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all แปลว่าไม่รังเกียจเลย คือยินดีทำให้" },

    { t: "type", p: "ช่วยฉันหน่อยได้ไหม (อย่างสุภาพ)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — ขอร้องอย่างสุภาพ", x: ["can"], why: "กับคนแปลกหน้าให้ขอร้องด้วย Could you ~?" },
    { t: "type", p: "ขอที่นั่งริมหน้าต่าง", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — ที่นั่งหนึ่งที่ต้องมีคำนำหน้านาม", x: ["the"], why: "พูดถึงที่นั่งหนึ่งที่เป็นครั้งแรก จึงใช้คำนำหน้านาม a: a window seat" },
    { t: "type", p: "ขอกาแฟสองแก้ว (ใช้ coffee ไม่ใช้ cup)", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — สองแก้วต้องเป็นรูปพหูพจน์", x: ["coffee"], why: "เวลาสั่งเป็นแก้ว coffee นับได้ สองแก้วจึงเป็นรูปพหูพจน์ two coffees โดยไม่ต้องมีลักษณนาม" }
  ],

  tense: [
    { t: "mc", q: "“ตอนนี้ฉันกำลังดื่มกาแฟ” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "สิ่งที่กำลังทำอยู่ใช้ be + -ing และตัด be ทิ้งไม่ได้" },
    { t: "mc", q: "“สุดสัปดาห์ที่แล้วฉันไปทะเล” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "มี last weekend ก็ต้องใช้กริยาช่อง 2: went และ beach ต้องมีคำนำหน้านาม the" },
    { t: "mc", q: "เล่าแผนเดือนหน้า: “ฉันจะไปเกาะเชจู”", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "แผนที่วางไว้ก่อนใช้ be going to + กริยาช่อง 1" },
    { t: "mc", q: "กริ่งประตูดัง แล้วพูดทันทีว่า “เดี๋ยวฉันไปเปิดเอง!”", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "ตัดสินใจตอนพูดใช้ will" },
    { t: "mc", q: "กริยาช่อง 2 ของ see", o: ["saw", "seed", "seen", "sawed"], why: "see เป็นกริยาไม่ปกติ: see - saw - seen" },

    { t: "order", p: "ฉันทำงานที่ธนาคาร (เป็นประจำ)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "งานประจำใช้ Present Simple Tense และพูดถึงธนาคารแห่งหนึ่งเป็นครั้งแรก จึงใช้คำนำหน้านาม a" },
    { t: "order", p: "เดี๋ยวโทรหาทีหลัง", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "สัญญาที่ตัดสินใจตอนพูดใช้ will" },
    { t: "order", p: "ฉันดูหนังไปสองเรื่อง", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "กริยาช่อง 2 ของ see คือ saw และสองเรื่องต้องเป็นรูปพหูพจน์ movies" },

    { t: "fill", q: "I __ pizza last night.", p: "เมื่อคืนฉันกินพิซซ่า", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "มี last night ก็ต้องใช้กริยาช่อง 2: ate (หรือ had ถ้าใช้ have)" },
    { t: "fill", q: "__ you have fun?", p: "สนุกไหม", a: ["Did"], o: ["Does", "Are", "Were"], why: "ถามเรื่องที่ผ่านไปแล้วใช้ Did + กริยาช่อง 1" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "ฉันจะไปเยี่ยมพ่อแม่", a: ["to"], o: ["for", "at", "on"], why: "แผนใช้ be going to + กริยาช่อง 1" },

    { t: "type", p: "วันนี้ฉันทำงานที่บ้าน (กำลังทำอยู่)", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — กำลังทำอยู่", x: ["work"], why: "สิ่งที่กำลังทำอยู่ในวันนี้ใช้ be + -ing" },
    { t: "type", p: "สุดสัปดาห์ที่แล้วฉันไปทะเล (ใช้ beach)", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — กริยาช่อง 2 และคำนำหน้านาม", x: ["a"], why: "กริยาช่อง 2 ของ go คือ went และทะเลในความหมายนี้ใช้คำนำหน้านาม the: the beach" },
    { t: "type", p: "ฉันจะไปเรียนคอร์สทำอาหาร (แผนที่วางไว้)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — คอร์สหนึ่งคอร์ส", x: ["the"], why: "แผนที่วางไว้ใช้ going to และพูดถึงคอร์สหนึ่งคอร์สเป็นครั้งแรก จึงใช้คำนำหน้านาม a" }
  ],

  prep: [
    { t: "mc", q: "“ในเดือนพฤษภาคม” ภาษาอังกฤษคือ", o: ["in May", "on May", "at May", "to May"], why: "หน้าชื่อเดือนใช้ in" },
    { t: "mc", q: "“วันที่ 3 พฤษภาคม” (เช่น นัดกันวันที่ 3 พฤษภาคม) ภาษาอังกฤษคือ", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "หน้าวันที่ใช้ on" },
    { t: "mc", q: "“(ตอนนี้) ฉันอยู่บนรถบัส” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "รถสาธารณะอย่างรถบัสใช้ on และเป็นคันที่นั่งอยู่ตอนนี้ จึงต้องมีคำนำหน้านาม the" },
    { t: "mc", q: "“ตอนกลางคืน” ภาษาอังกฤษคือ", o: ["at night", "on night", "in night", "at the night"], why: "night เป็นข้อยกเว้น ใช้ at night โดยไม่มีคำนำหน้านาม" },
    { t: "mc", q: "เลือกประโยคที่ถูกต้อง", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "หน้าชื่อเมืองใช้ in และชื่อเมืองไม่มีคำนำหน้านาม the" },

    { t: "order", p: "เจอกันที่สถานี (ที่เรารู้กัน)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "จุดนัดพบใช้ at และเป็นสถานีที่ทั้งสองฝ่ายรู้ว่าที่ไหน จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "มือถือของฉันอยู่บนโต๊ะ (ตัวนั้น)", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "อยู่บนพื้นผิวใช้ on และเป็นโต๊ะตัวที่เห็นอยู่ จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "เจอกันสัปดาห์หน้า", a: ["See", "you", "next", "week"], x: ["on"], why: "หน้า next ไม่ใช้คำบุพบท" },

    { t: "fill", q: "The meeting is __ three.", p: "ประชุมตอนบ่ายสามโมง", a: ["at"], o: ["on", "to", "of"], why: "หน้าเวลาที่แน่นอนใช้ at" },
    { t: "fill", q: "I was born __ 1998.", p: "ฉันเกิดปี 1998", a: ["in"], o: ["on", "at", "to"], why: "หน้าปีใช้ in" },
    { t: "fill", q: "See you __ Friday.", p: "เจอกันวันศุกร์", a: ["on"], o: ["in", "at", "to"], why: "หน้าวันในสัปดาห์ใช้ on" },

    { t: "type", p: "ฉันดื่มกาแฟตอนเช้า", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in และคำนำหน้านาม", x: ["at"], why: "ช่วงเวลาของวันใช้ in และต้องมีคำนำหน้านาม the: in the morning" },
    { t: "type", p: "ตอนนี้ฉันอยู่บ้าน", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — ไม่มีคำนำหน้านาม", x: ["the"], why: "at home ไม่ใช้คำนำหน้านาม the" },
    { t: "type", p: "เจอกันสุดสัปดาห์หน้า", a: ["See you next weekend"], hint: "see · next weekend — หน้า next ใช้คำบุพบทไหม", x: ["on"], why: "หน้า next ไม่ใช้คำบุพบท" }
  ],

  smalltalk: [
    { t: "mc", q: "เพื่อนร่วมงานถามว่า How was your weekend? ตอบแบบไหนดีที่สุด", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "ถามเรื่องที่ผ่านไปแล้ว จึงตอบด้วยกริยาช่อง 2 และเล่าเพิ่มอีกหนึ่งเรื่อง" },
    { t: "mc", q: "อีกฝ่ายพูดว่า I don't drink coffee. ถ้าจะตอบว่า “ฉันก็ไม่ดื่มเหมือนกัน” พูดว่าอย่างไร", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "เห็นด้วยกับประโยคปฏิเสธใช้ Me neither" },
    { t: "mc", q: "จะจบบทสนทนาอย่างเป็นธรรมชาติ พูดว่าอย่างไร", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going เป็นการขอตัวอย่างนุ่มนวล" },
    { t: "mc", q: "ประโยคไหนเหมาะจะใช้เปิดบทสนทนากับคนที่เพิ่งเจอ", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "อากาศเป็นเรื่องคุยเล่นที่ปลอดภัยที่สุด ส่วนเงินเดือน การแต่งงาน และน้ำหนักควรเลี่ยง" },
    { t: "mc", q: "อีกฝ่ายพูดว่า I went to Busan last weekend. ตอบรับแบบไหนแสดงว่าสนใจ", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? และ That sounds fun! แสดงว่าเราสนใจเรื่องที่เขาเล่า" },

    { t: "order", p: "สุดสัปดาห์นี้มีแผนอะไรไหม", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "สำนวนนี้ใช้รูปพหูพจน์ plans และเป็นสุดสัปดาห์ที่จะถึงนี้ จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "ดีใจที่ได้คุยกัน", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "เป็นประโยคปิดท้ายบทสนทนา หลัง nice ใช้รูป -ing: talking" },
    { t: "order", p: "ฉันไม่ชอบหนังผี", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "พูดถึงหนังผีแบบทั่วไป จึงใช้รูปพหูพจน์ movies และไม่ใช้คำนำหน้านาม" },

    { t: "fill", q: "Pretty good! How __ you?", p: "สบายดี แล้วคุณล่ะ", a: ["about"], o: ["for", "with", "of"], why: "ตอบสั้น ๆ แล้วถามกลับด้วย How about you? เป็นมารยาทที่ดี" },
    { t: "fill", q: "I know, __?", p: "นั่นสิ ใช่เลย", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? ใช้ตอบรับเมื่อเห็นด้วยมาก ๆ และขึ้นต้นด้วย R ไม่ใช่ L" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "ช่วงนี้ได้ดูอะไรสนุก ๆ บ้างไหม", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "ถามถึงคำนามนับได้หลัง any แบบนี้ ใช้รูปพหูพจน์" },

    { t: "type", p: "สุดสัปดาห์เป็นอย่างไรบ้าง (ที่ผ่านมา)", a: ["How was your weekend"], hint: "how · weekend — สุดสัปดาห์ที่ผ่านไปแล้ว", x: ["is"], why: "สุดสัปดาห์ที่ผ่านไปแล้ว จึงถามด้วย was" },
    { t: "type", p: "วันนี้อากาศดีนะ", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — ใส่คำนำหน้านามไหม", x: ["a"], why: "weather เป็นคำนามนับไม่ได้ จึงไม่ใช้ a (a nice weather ✗)" },
    { t: "type", p: "ฉันชอบดูหนัง (แบบทั่วไป)", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — พูดแบบทั่วไปใช้รูปพหูพจน์", x: ["movie"], why: "พูดถึงหนังแบบทั่วไป จึงใช้รูปพหูพจน์ movies" }
  ],

  phrasal: [
    { t: "mc", q: "“เปิดมันหน่อย” ภาษาอังกฤษพูดว่าอย่างไร", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "คำสรรพนาม it ต้องอยู่ตรงกลางกริยาวลี: turn it on" },
    { t: "mc", q: "“นมหมดแล้ว” ภาษาอังกฤษพูดว่าอย่างไร", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = (ของ) หมด อย่าลืม of" },
    { t: "mc", q: "“ฉันโตที่แทกู” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up = เติบโต กริยาช่อง 2 คือ grew up" },
    { t: "mc", q: "“ช่วยดูแลแมวของฉันหน่อยได้ไหม” ภาษาอังกฤษพูดว่าอย่างไร", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = ดูแล เป็นกริยาวลีที่แยกไม่ได้ (look for แปลว่าหา)" },
    { t: "mc", q: "“เดี๋ยวฉันไปรับตอนหนึ่งทุ่ม” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "คำสรรพนาม you ต้องอยู่ระหว่าง pick กับ up" },

    { t: "order", p: "ฉันกำลังหาแว่นตาของฉันอยู่", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "แว่นตาใช้รูปพหูพจน์ glasses เสมอ (glass แปลว่าแก้ว) และ หา คือ look for" },
    { t: "order", p: "มาคิดแผนกันสักแผนเถอะ", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = คิดออก และเป็นแผนหนึ่งที่ยังไม่มี จึงใช้คำนำหน้านาม a" },
    { t: "order", p: "เดี๋ยวฉันไปรับ", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "คำสรรพนาม you ต้องอยู่ระหว่าง pick กับ up" },

    { t: "fill", q: "Can you turn it __?", p: "ช่วยปิดมันหน่อยได้ไหม", a: ["off"], o: ["of", "on", "out"], why: "ปิด (เครื่องใช้ไฟฟ้า) คือ turn off อย่าสับสนกับ of" },
    { t: "fill", q: "I work __ every morning.", p: "ฉันออกกำลังกายทุกเช้า", a: ["out"], o: ["up", "off", "on"], why: "work out = ออกกำลังกาย" },
    { t: "fill", q: "We ran out of __.", p: "ไข่หมดแล้ว", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "ไข่เป็นคำนามนับได้ เมื่อพูดว่าหมดจึงใช้รูปพหูพจน์ eggs" },

    { t: "type", p: "ช่วยปิดมันหน่อย (ใช้ turn off)", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — คำสรรพนามอยู่ตรงกลาง", x: ["on"], why: "คำสรรพนาม it ต้องอยู่ระหว่าง turn กับ off" },
    { t: "type", p: "ฉันดูแลแมวสองตัว", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — สองตัวต้องเป็นรูปพหูพจน์", x: ["cat"], why: "look after = ดูแล และแมวสองตัวต้องเป็นรูปพหูพจน์ cats" },
    { t: "type", p: "นมหมดแล้ว (ใช้ run out of)", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — ใส่คำนำหน้านามไหม", x: ["a"], why: "milk เป็นคำนามนับไม่ได้ จึงไม่ใช้คำนำหน้านาม a" }
  ],

  numbers: [
    { t: "mc", q: "10,000 (หนึ่งหมื่น) ภาษาอังกฤษคือ", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "แบ่งทีละสามหลัก: 10 + thousand และ thousand หลังตัวเลขไม่เป็นรูปพหูพจน์" },
    { t: "mc", q: "1,000,000 (หนึ่งล้าน) ภาษาอังกฤษคือ", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "จุลภาคสองตัวคือ million และ million หลังตัวเลขไม่เป็นรูปพหูพจน์" },
    { t: "mc", q: "9:05 อ่านว่าอย่างไร", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "นาทีที่เป็น 1 ถึง 9 ให้ใส่ oh ข้างหน้า" },
    { t: "mc", q: "$4.99 อ่านแบบไหนเป็นธรรมชาติ", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "ราคาอ่านเป็นตัวเลขสองก้อน: four ninety-nine" },
    { t: "mc", q: "ปี 2026 (พ.ศ. 2569) อ่านเป็นภาษาอังกฤษว่าอย่างไร", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "ปีอ่านทีละสองหลัก และภาษาอังกฤษใช้ ค.ศ. เสมอ" },

    { t: "order", p: "ตอนนี้เจ็ดโมงสิบห้านาที", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 คือ fifteen (เน้นพยางค์หลัง) ส่วน 50 คือ fifty (เน้นพยางค์หน้า)" },
    { t: "order", p: "ราคา 15 ดอลลาร์", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "มากกว่า 1 ดอลลาร์ต้องเป็นรูปพหูพจน์ dollars" },
    { t: "order", p: "สัปดาห์ละสองครั้ง", a: ["twice", "a", "week"], x: ["the", "one"], why: "“ละ” ในความหมายนี้ใช้คำนำหน้านาม a: twice a week" },

    { t: "fill", q: "It's __ quarter past ten.", p: "ตอนนี้สิบโมงสิบห้านาที", a: ["a"], o: ["the", "one", "an"], why: "หน้า quarter (สิบห้านาที) ต้องมีคำนำหน้านาม a" },
    { t: "fill", q: "That's fifty __ won.", p: "ห้าหมื่นวอน", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 คือ fifty thousand และ thousand หลังตัวเลขไม่เป็นรูปพหูพจน์" },
    { t: "fill", q: "I'll be there in ten __.", p: "อีก 10 นาทีฉันจะไปถึง", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "สิบนาทีต้องเป็นรูปพหูพจน์ minutes ภาษาอังกฤษไม่มีลักษณนาม แต่เติม -s แทน" },

    { t: "type", p: "ตอนนี้สามโมงครึ่ง", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — อ่านชั่วโมงแล้วตามด้วยนาที", x: ["thirteen"], why: "อ่านชั่วโมงแล้วตามด้วยนาที: three thirty อย่าสับสนกับ 13 (thirteen)" },
    { t: "type", p: "ราคา 20 ดอลลาร์", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — ตั้งแต่ 2 ขึ้นไปใช้รูปพหูพจน์", x: ["dollar"], why: "ตั้งแต่ 2 ดอลลาร์ขึ้นไปต้องเป็นรูปพหูพจน์ dollars" },
    { t: "type", p: "ฉันออกกำลังกายสัปดาห์ละสองครั้ง", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — “ละ” ใช้คำนำหน้านามตัวไหน", x: ["the"], why: "“สัปดาห์ละ” ใช้คำนำหน้านาม a: a week (the week ✗)" }
  ],

  email: [
    { t: "mc", q: "ถ้าขึ้นต้นด้วย Dear แบบไหนเป็นธรรมชาติที่สุด", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "หลัง Dear ให้ใส่ชื่อ อย่าใส่แค่ตำแหน่ง" },
    { t: "mc", q: "จะบอกว่าแนบรายงานมาแล้ว เขียนว่าอย่างไร", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "เป็นรายงานฉบับที่อีกฝ่ายจะได้รับ จึงใช้คำนำหน้านาม the" },
    { t: "mc", q: "“กำหนดส่งคือเมื่อไร” ภาษาอังกฤษพูดว่าอย่างไร", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "เป็นกำหนดส่งของงานนี้ที่ทั้งสองฝ่ายรู้ จึงใช้คำนำหน้านาม the" },
    { t: "mc", q: "ตอบอีเมลช้า ประโยคไหนใช้แทนคำขอโทษได้และฟังเป็นบวก", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience ฟังสุภาพโดยไม่ต้องขอโทษ ระวังสะกดผิดเป็น patients (คนไข้)" },
    { t: "mc", q: "ประโยคไหนเหมาะใช้ปิดท้ายอีเมลวันศุกร์", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "สุดสัปดาห์หนึ่งครั้งใช้คำนำหน้านาม a และ weekend เป็นเอกพจน์" },

    { t: "order", p: "แนบรายงานมาแล้ว", a: ["I've", "attached", "the", "report"], x: ["a"], why: "เป็นรายงานฉบับที่อีกฝ่ายจะได้รับ จึงใช้คำนำหน้านาม the" },
    { t: "order", p: "มานัดประชุมกันเถอะ", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "เป็นการประชุมครั้งหนึ่งที่ยังไม่ได้นัด จึงใช้คำนำหน้านาม a" },
    { t: "order", p: "เดี๋ยวตรวจสอบแล้วจะติดต่อกลับ", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = ติดต่อกลับ ใช้ to" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "ช่วยส่งไฟล์ให้ภายในวันศุกร์ได้ไหม", a: ["by"], o: ["until", "in", "at"], why: "กำหนดส่ง (ภายใน) ใช้ by + วันที่" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "เขียนมาเพื่อสอบถามเรื่องกำหนดการ", a: ["to"], o: ["for", "about", "at"], why: "บอกจุดประสงค์ใช้ I'm writing to + กริยาช่อง 1" },
    { t: "fill", q: "Thanks for all your hard __!", p: "ขอบคุณสำหรับความทุ่มเททั้งหมด", a: ["work"], o: ["works", "working", "job"], why: "work ในความหมายว่างานเป็นคำนามนับไม่ได้ จึงไม่เติม -s" },

    { t: "type", p: "พรุ่งนี้ฉันหยุดงาน", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — ใช้ Verb to be + off", x: ["do"], why: "วันหยุดงานพูดว่า be off" },
    { t: "type", p: "แนบไฟล์มาแล้ว", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — ไฟล์ฉบับนั้น", x: ["a"], why: "เป็นไฟล์ที่อีกฝ่ายจะได้รับ จึงใช้คำนำหน้านาม the" },
    { t: "type", p: "ขอให้มีความสุขในวันหยุดสุดสัปดาห์", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — สุดสัปดาห์หนึ่งครั้ง", x: ["the"], why: "พูดถึงสุดสัปดาห์หนึ่งครั้ง จึงใช้คำนำหน้านาม a: a great weekend" }
  ],

  idioms: [
    { t: "mc", q: "“ง่ายเหมือนปอกกล้วยเข้าปาก” ภาษาอังกฤษพูดว่าอย่างไร", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "จำสำนวนทั้งก้อน: มีคำนำหน้านาม a และ cake ไม่เป็นรูปพหูพจน์" },
    { t: "mc", q: "“แพงหูฉี่” ภาษาอังกฤษพูดว่าอย่างไร", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm ขึ้นต้นด้วยเสียงสระจึงใช้คำนำหน้านาม an ส่วน leg ขึ้นต้นด้วยเสียงพยัญชนะจึงใช้ a" },
    { t: "mc", q: "“วันนี้พอแค่นี้ก่อน” (ใช้ในที่ประชุมได้)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day เป็นสำนวนที่ต้องจำทั้งก้อนรวมคำนำหน้านาม a ด้วย" },
    { t: "mc", q: "“ดีใจจนตัวลอย” ภาษาอังกฤษพูดว่าอย่างไร", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine ไม่มีทั้งคำนำหน้านามและรูปพหูพจน์" },
    { t: "mc", q: "ข้อไหนเป็นสแลงที่ใช้กับเพื่อนเท่านั้น", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap เป็นสแลงของคนรุ่นใหม่ แปลว่า ไม่โม้ พูดจริง ส่วนข้ออื่นเป็นสำนวนที่ใช้ในที่ทำงานได้" },

    { t: "order", p: "ตั้งใจฟังอยู่", a: ["I'm", "all", "ears"], x: ["ear"], why: "สำนวนนี้แปลว่าทั้งตัวเป็นหู จึงใช้รูปพหูพจน์ ears" },
    { t: "order", p: "ฉันต้องตั้งใจอ่านหนังสือหน่อยแล้ว", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books ใช้คำนำหน้านาม the และรูปพหูพจน์ books ตามสำนวน" },
    { t: "order", p: "ไม่ใช่แนวของฉัน", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "จำ not my cup of tea ทั้งก้อน ตรง my ไม่ต้องใส่คำนำหน้านามเพิ่ม" },

    { t: "fill", q: "Kill two __ with one stone.", p: "ยิงปืนนัดเดียวได้นกสองตัว", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "นกสองตัวต้องเป็นรูปพหูพจน์ birds" },
    { t: "fill", q: "Speak of the __!", p: "ตายยาก พูดถึงปุ๊บมาปั๊บเลย", a: ["devil"], o: ["tiger", "angel", "bird"], why: "ภาษาไทยพูดว่า ตายยาก ส่วนสำนวนอังกฤษใช้ devil (ปีศาจ)" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "ฉันรู้สึกไม่ค่อยสบาย", a: ["the"], o: ["a", "an", "my"], why: "under the weather ใช้คำนำหน้านาม the ตามสำนวน" },

    { t: "type", p: "ง่ายเหมือนปอกกล้วยเข้าปาก (ใช้ cake)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — อย่าลืมคำนำหน้านาม", x: ["the"], why: "a piece of cake ต้องมีคำนำหน้านาม a" },
    { t: "type", p: "ขอให้โชคดีนะ ฉันจะเอาใจช่วย (ใช้ fingers crossed)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — นิ้วกี่นิ้ว", x: ["finger"], why: "ไขว้นิ้วสองนิ้ว จึงใช้รูปพหูพจน์ fingers" },
    { t: "type", p: "วันนี้พอแค่นี้ก่อน", a: ["Let's call it a day"], hint: "call it · day — ไม่ใช่ the", x: ["the"], why: "call it a day ใช้คำนำหน้านาม a ไม่ใช่ the" }
  ]
};
