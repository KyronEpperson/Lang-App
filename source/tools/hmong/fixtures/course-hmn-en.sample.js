/* TEST FIXTURE for tools/hmong/rpa_check.js and coverage.js (not course content; never copy into packs/). hmn-en shape, Hmong = learner language.
   Planted on purpose: kung (illegal, not English) in a note; English words inside Hmong prose (am, is, Hi) must pass. */
LANGAPP_PACKS.course['hmn-en'] = {
  id: "hmn-en", native: "hmn", target: "en", ttsLang: "en-US", name: {en: "English", hmn: "Lus Askiv"}, brand: "English",
  features: {script: false, pron: false, conj: false, register: false, numbers: false, sound: false, strokes: false},
  DECKS: {"Kev tos txais": [["Hello.","hev lou","Nyob zoo","Siv tau txhua lub sijhawm. Hi yog lus phooj ywg."],["Hi!","hais","Nyob zoo (phooj ywg)","Tsis txhob hais kung."]]},
  GROUPS: [["Thawj kauj ruam",["Kev tos txais"]]], TAGS: {"basics":["Kev tos txais"]}, DESC: {"Kev tos txais": "Cov lus tos txais thiab sib ncaim"},
  DIALOG: {"Hello.": ["Hello, Mai!","Hi, Tou!","Nyob zoo, Maiv! / Nyob zoo, Tub!"]},
  EXAMPLES: {"Hello.": ["Hello, how are you?","Nyob zoo, koj nyob li cas?"]},
  LESSONS: [{"id":"be","title":"1 · be (am, is, are)","blurb":"Lus Askiv yuav tsum muaj am, is, are.","deck":"Kev tos txais","body":"<p>Lus Hmoob tsis siv be. Lus Askiv siv <b>am</b>.</p>{{ex:I am a student.|ais aem a xtu-dees|Kuv yog tub kawm ntawv.}}<div class=\"tbl\"><table><tr><td class=\"k\">I am</td><td>kuv yog</td></tr></table></div>"}],
  CHECKS: {"be": [["Yam twg yog?",["I am a student.","I a student."],0,"Yuav tsum muaj am."]]},
  PRACTICE: {"be": [{"t":"mc","q":"Kuv yog xib fwb ua lus Askiv?","o":["I am a teacher.","I teacher."],"why":"Siv am."},{"t":"order","p":"Kuv yog tub kawm ntawv.","a":["I","am","a","student"],"x":["is"],"why":"I nrog am."},{"t":"fill","q":"She __ a doctor.","p":"Nws yog kws kho mob.","a":["is"],"o":["am","are"],"why":"She nrog is."},{"t":"type","p":"Kuv nkees","a":["I'm tired"],"hint":"tired","x":[],"why":"Siv I am."}]},
  PATTERNS: [["I am ~.","Kuv yog ~.","I am a nurse."]], PAIRS: [], GOALS: {"work":{"label":"Hauj lwm","decks":["Kev tos txais"]}}, PLAN_PRESETS: {}, TITLES: [[1,"Beginner","Pib kawm"]],
  PAUSE: {"sets":{"polite":["Polite · Hais lus zoo",[["Please","Thov"]]]},"idioms":[["Break a leg","Kom muaj hmoo"]]}
};
