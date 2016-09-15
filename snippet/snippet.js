
'use strict'; // enable 'let' declarations

// DEPENDENCIES

const CONSTANTS = require('./constants');

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

// only surface one function
module.exports = {
 generateSnippet: generateSnippet,
};
