
'use strict'; // enable 'let' declarations

const str = 'To be, or not to be, that is the question. Whether tis nobler! in the mind, to suffer; the slings and arrows! of outrageous fortune? or to take arms - against a sea of troubles, and by opposing? end them:';
console.log(`string: '${str}' \n`);

// match phrases ending in commas or periods
const phraseRegex = new RegExp('.+?[-,.:;!?]','g');
const phrases = [];
let matchInfo = [];

// find all regex matches, and save them
while ((matchInfo = phraseRegex.exec(str)) !== null) {
  const match = matchInfo[0].trim();
  console.log(`match: '${match}'`);
  phrases.push(match);
}

console.log('');
console.log("All matching phrases: ", phrases);
