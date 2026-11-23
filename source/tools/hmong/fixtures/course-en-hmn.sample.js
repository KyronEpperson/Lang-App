/* TEST FIXTURE for tools/hmong/rpa_check.js and coverage.js (not course content; never copy into packs/). en-hmn shape, Hmong = target.
   Planted on purpose: kun (illegal) in EXAMPLES, dlej (Green) in PATTERNS; distractors kun, dlej, nyop, tsau are wrong on purpose. */
LANGAPP_PACKS.course['en-hmn'] = {
  id: "en-hmn", native: "en", target: "hmn", ttsLang: "hmn", name: {en: "Hmong", hmn: "Hmoob"}, brand: "Hmoob", accents: false, keys: "", noAudio: true, voiceMatch: "^(hmn|mww)(-|_|$)",
  GREET: [["Nyob zoo","Hello"]],
  features: {script: false, pron: false, conj: false, register: false, numbers: false, sound: false, strokes: false},
  DECKS: {"Greetings": [["Nyob zoo","nyaw zhong","Hello","Literally: live well. Like the English word zoo, the z is soft; say it in measure."],["Ua tsaug","wa chow","Thank you",""],["Koj nyob li cas?","kaw nyaw lee cha","How are you?","Said to one person."]]},
  GROUPS: [["First steps",["Greetings"]]], TAGS: {"first":["Greetings"]}, DESC: {"Greetings": "Hello, thank you and how are you"},
  DIALOG: {"Nyob zoo": ["Nyob zoo, Vang!","Nyob zoo, Paj Ntaub!","Hello, Vang! / Hello, Paj Ntaub!"]},
  EXAMPLES: {"Ua tsaug": ["Ua tsaug ntau ntau.","Thank you very much."], "Nyob zoo": ["Kuv cov me nyuam nyob zoo.","My children are well."], "Koj nyob li cas?": ["Kuv nyiam noj kun.","I like to eat (planted error)."]},
  LESSONS: [{"id":"tones","title":"1 · The tone letters","blurb":"The last letter of a syllable is its tone.","deck":"Greetings","body":"<p>Tone is the last letter: b, j, v, s, g, m, d.</p><div class=\"tbl\"><table><tr><th>Letter</th><th>Example</th></tr><tr><td>b</td><td class=\"k\">pob (ball)</td></tr><tr><td class=\"k\">ntxh</td><td class=\"k\">-v</td></tr></table></div>{{ex:kuv|koo|I, me}}"}],
  CHECKS: {"tones": [["Which word means I?",["kun","kuv"],1,"kuv ends in the tone letter v."],["How does z sound in zoo?",["Like the s in measure","Like the z in zoo"],0,"z is a retroflex sound."],["Which onset is aspirated?",["ph","p"],0,"h marks aspiration."]]},
  PRACTICE: {"tones": [{"t":"mc","q":"Which word means water?","o":["dej","dlej"],"why":"White Hmong dej; dlej is Green."},{"t":"order","p":"I live in St. Paul","a":["Kuv","nyob","St.","Paul"],"x":["nyop"],"why":"nyob ends in b."},{"t":"fill","q":"Kuv n__ob tsev.","p":"I am at home.","a":["y"],"o":["g"],"why":"nyob"},{"t":"type","p":"thank you","a":["ua tsaug"],"hint":"ua · tsaug","x":["ua tsau"],"why":"tsaug ends in g.","strict":true}]},
  PATTERNS: [["Kuv xav haus ___.","I want to drink ___.","Kuv xav haus dlej."]], PAIRS: [], GOALS: {}, PLAN_PRESETS: {}, TITLES: [[1,"Beginner",""]], PAUSE: {"sets":{},"idioms":[]}
};
