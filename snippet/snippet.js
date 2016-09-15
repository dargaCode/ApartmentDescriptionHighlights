
'use strict'; // enable 'let' declarations

// DEPENDENCIES

const CONSTANTS = require('./constants');

// CONSTANTS



// FUNCTIONS

function generateSnippet(document, query) {
  const phrases = splitStringIntoPhrases(document);
  const filteredPhrases = filterPhrases(phrases, query);

  console.log(`Original string: \n\n'${document}' \n`);
  console.log('Search string:', query, '\n');
  console.log('All phrases: \n\n', phrases, '\n');
  console.log('Matching phrases: \n\n', filteredPhrases, '\n');

  return filteredPhrases.join(' ');
}

// HELPERS

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

  const snippet = generateSnippet(str, 'to');

  console.log(`Final snippet: \n\n '${snippet}'`);
