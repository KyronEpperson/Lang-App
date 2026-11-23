/* Contraction / full-form variants of typed answers (more/_dsl.js variants): every generated accepted answer must be real English.
   usage: node tools/content/contractions_test.js   (exit 1 on any failure) */
const { variants } = require('./more/_dsl.js');
const DSL = require('./more/_dsl.js')({ nativeScript: null, labels: {} });

/* [input, exact expected set of accepted forms] */
const CASES = [
  /* (a) 's before got / gotten / been / had is "has", not "is"; before any other past participle is/has is ambiguous, so it stays as written */
  ["He's got a car", ["He's got a car", 'He has got a car']],
  ["She's been to Japan", ["She's been to Japan", 'She has been to Japan']],
  ["It's been a long day", ["It's been a long day", 'It has been a long day']],
  ["He's never been there", ["He's never been there", 'He has never been there']],
  ["She's already had lunch", ["She's already had lunch", 'She has already had lunch']],
  ["He's finished his homework", ["He's finished his homework"]],
  ["She's worked here for years", ["She's worked here for years"]],
  ["He's eaten already", ["He's eaten already"]],
  ['He has got a car', ['He has got a car']],
  ["She's married to a doctor", ["She's married to a doctor", 'She is married to a doctor']],
  ["He's tired", ["He's tired", 'He is tired']],
  ["She's reading a book", ["She's reading a book", 'She is reading a book']],
  ["It's red", ["It's red", 'It is red']],
  ["He's died", ["He's died"]],
  ["It's become clear", ["It's become clear"]],
  ["He's come home", ["He's come home"]],
  ["He's hurt", ["He's hurt", 'He is hurt']],
  ["It's Monday", ["It's Monday", 'It is Monday']],
  ["What's he got in his bag", ["What's he got in his bag", 'What has he got in his bag']],
  ["What's it called", ["What's it called", 'What is it called']],
  ["What's she doing", ["What's she doing", 'What is she doing']],
  ['It is broken', ['It is broken', "It's broken"]],
  ['She is married', ['She is married', "She's married"]],
  ["She's not here", ["She's not here", 'She is not here', "She isn't here"]],
  /* (b) inverted negative contractions (tags, questions) are never expanded */
  ["You have two brothers, don't you", ["You have two brothers, don't you"]],
  ["You've got two brothers, haven't you", ["You've got two brothers, haven't you", "You have got two brothers, haven't you"]],
  ["She's a doctor, isn't she", ["She's a doctor, isn't she", "She is a doctor, isn't she"]],
  ["It's cold, isn't it", ["It's cold, isn't it", "It is cold, isn't it"]],
  ["They can swim, can't they", ["They can swim, can't they"]],
  ["He didn't come, did he", ["He didn't come, did he", 'He did not come, did he']],
  ["Don't you like it", ["Don't you like it"]],
  ["Why don't we go", ["Why don't we go"]],
  ["Why isn't the bus here", ["Why isn't the bus here"]],
  ["Isn't the weather nice", ["Isn't the weather nice"]],
  ["Doesn't she work here", ["Doesn't she work here"]],
  ["Can't you swim", ["Can't you swim"]],
  ["Don't worry", ["Don't worry", 'Do not worry']],
  ["Who doesn't like pizza", ["Who doesn't like pizza", 'Who does not like pizza']],
  ["It isn't that bad", ["It isn't that bad", 'It is not that bad', "It's not that bad"]],
  ["I don't like coffee", ["I don't like coffee", 'I do not like coffee']],
  /* (c) no contraction when the auxiliary ends the clause */
  ['Do you know what time it is', ['Do you know what time it is']],
  ['Yes, I am', ['Yes, I am']],
  ['I think it is', ['I think it is']],
  ['Yes, I will', ['Yes, I will']],
  ['I know where she is.', ['I know where she is.']],
  ['Yes, it is, really', ['Yes, it is, really']],
  ['What is it', ['What is it']],
  ['It is late', ['It is late', "It's late"]],
  ['What is your name', ['What is your name', "What's your name"]],
  ['No, I do not', ['No, I do not', "No, I don't"]],
  ['No, it is not', ['No, it is not', "No, it isn't", "No, it's not"]],
  ["I'm tired but I'm happy", ["I'm tired but I'm happy", "I am tired but I'm happy", "I'm tired but I am happy", 'I am tired but I am happy']],
  /* (d) 'd: had before better / a participle, would before a base verb */
  ["I'd better go", ["I'd better go", 'I had better go']],
  ["I'd like a tea", ["I'd like a tea", 'I would like a tea']],
  ["I'd rather stay", ["I'd rather stay", 'I would rather stay']],
  ["I'd seen it before", ["I'd seen it before", 'I had seen it before']],
  ["I'd already left", ["I'd already left", 'I had already left']],
  ["I'd never been there", ["I'd never been there", 'I had never been there']],
  ["I'd read it", ["I'd read it"]],
  ["I'd used it before", ["I'd used it before", 'I had used it before']],
  ["I'd sat down", ["I'd sat down", 'I had sat down']],
  ["I'd overslept", ["I'd overslept", 'I had overslept']],
  ["I'd go if I were you", ["I'd go if I were you", 'I would go if I were you']],
  ["I'd hurt my leg", ["I'd hurt my leg"]],
  ['I would come', ['I would come', "I'd come"]],
  ['I would like a tea', ['I would like a tea', "I'd like a tea"]],
  ['Yes, I would', ['Yes, I would']],
  /* (d) let's, o'clock, possessive 's, other 's words are never touched */
  ["Let's go", ["Let's go"]],
  ["Let's have lunch", ["Let's have lunch"]],
  ["It's eleven o'clock", ["It's eleven o'clock", "It is eleven o'clock"]],
  ["My brother's car is red", ["My brother's car is red"]],
  ["My brother's an engineer", ["My brother's an engineer"]],
  ["Who's got the key", ["Who's got the key"]],
  ["Here's been a problem", ["Here's been a problem"]],
  ["What's happened", ["What's happened"]],
  ["What's been going on", ["What's been going on", 'What has been going on']],
  ["What's the time", ["What's the time", 'What is the time']],
  ["That's been fixed", ["That's been fixed", 'That has been fixed']],
  ["There's been an accident", ["There's been an accident", 'There has been an accident']],
  ["There's a bank here", ["There's a bank here", 'There is a bank here']],
  /* others */
  ["I've got an idea", ["I've got an idea", 'I have got an idea']],
  ['I have an idea', ['I have an idea']],
  ["We'll miss the bus", ["We'll miss the bus", 'We will miss the bus']],
  ['I can not swim', ['I can not swim']],
  ['I cannot swim', ['I cannot swim', "I can't swim"]],
  ['It’s hot today', ['It’s hot today', 'It is hot today', "It's hot today"]] /* item() drops the duplicate after normalising */,
];

let fail = 0;
const same = (a, b) => a.length === b.length && a.every(x => b.includes(x));
for (const [inp, exp] of CASES) {
  const got = variants(inp);
  if (!same(got, exp)) { fail++; console.log('FAIL ' + JSON.stringify(inp) + '\n   got      ' + JSON.stringify(got) + '\n   expected ' + JSON.stringify(exp)); }
}
/* nc: 1 switches all of it off, in both directions */
const nc = DSL.item(['ty', 'p', "I'm home|It is late", 'h', '', 'w', { nc: 1 }]);
if (!same(nc.a, ["I'm home", 'It is late']) || nc.nc !== 1) { fail++; console.log('FAIL nc item: ' + JSON.stringify(nc)); }
const nonc = DSL.item(['ty', 'p', "I'm home", 'h', '', 'w']);
if (!same(nonc.a, ["I'm home", 'I am home']) || 'nc' in nonc) { fail++; console.log('FAIL plain item: ' + JSON.stringify(nonc)); }
let threw = false; try { DSL.item(['ty', 'p', 'a b', 'h', '', 'w', { nc: 2 }]); } catch (e) { threw = true; }
if (!threw) { fail++; console.log('FAIL nc: 2 accepted'); }
console.log((fail ? 'FAIL ' : 'PASS ') + (CASES.length + 3 - fail) + '/' + (CASES.length + 3) + ' contraction cases');
process.exit(fail ? 1 : 0);
