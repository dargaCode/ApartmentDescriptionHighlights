
'use strict'; // enable 'let' declarations

// DEPENDENCIES

const CONSTANTS = require('./constants');

// CONSTANTS



// FUNCTIONS

function filterPhrases(phrases, query) {
  return phrases.filter(function(phrase) {
    phrase = phrase.toLowerCase();
    query = query.toLowerCase();
    return phrase.indexOf(query) > -1;
  });
}

function splitStringIntoPhrases(str) {
  // data-driven for ease of tuning
  const endingChars = CONSTANTS.phraseEndingChars.join('');
  // match substrings ending in one of the phrase ending chars
  const phraseRegex = new RegExp(`.+?[${endingChars}]`,'g');
  const results = [];

  let matchInfo = [];
  // find all regex matches, and save them
  while ((matchInfo = phraseRegex.exec(str)) !== null) {
    const match = matchInfo[0].trim();
    results.push(match);
  }

  return results;
}

// MAIN

const str = "To be, or not to be, that is the question: Whether 'tis Nobler in the mind to suffer The Slings and Arrows of outrageous Fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep No more; and by a sleep, to say we end The Heart-ache, and the thousand Natural shocks That Flesh is heir to? 'Tis a consummation Devoutly to be wished. To die, to sleep, To sleep, perchance to Dream; aye, there's the rub, For in that sleep of death, what dreams may come, When we have shuffled off this mortal coil, Must give us pause.";

const phrases = splitStringIntoPhrases(str);

console.log(`string: '${str}' \n`);
console.log('All phrases: ', phrases, '\n');

const filteredPhrases = filterPhrases(phrases, 'to');

console.log('All matching phrases:', filteredPhrases, '\n');

const snippet = filteredPhrases.join(' ');

console.log('Final snippet:', snippet);
