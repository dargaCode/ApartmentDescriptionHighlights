
'use strict'; // enable 'let' declarations

// DEPENDENCIES

const CONSTANTS = require('./constants');

// CONSTANTS

const KEYWORDS = CONSTANTS.keywords;


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

function getQueryWords(query) {
  const simpleQuery = getSimpleText(query);
  const queryWords = simpleQuery.toLowerCase().split(' ');

  return queryWords;
}

// return lowercase letters, numbers, and spaces only
function getSimpleText(str) {
  // match letters, numbers, and spaces only
  const regex = new RegExp('([^\\w\\s]|_)', 'g');
  const cleanedText = str.replace(regex, '');

  return cleanedText.trim();
}

// return an array of keywords with relevant categories
function getRelevantKeywordNames(queryWords) {
  const relevantKeywords = KEYWORDS.filter(function(keyword) {
    return isKeywordRelevant(keyword, queryWords);
  });

  const keywordNames = relevantKeywords.map(function(keyword) {
    return keyword.name;
  });

  return keywordNames;
}

function isKeywordRelevant(keyword, queryWords) {
  const keywordName = keyword.name;
  const keywordCategories = keyword.categories;

  // direct match between query and keyword
  if (doesQueryContainKeyword(queryWords, keywordName)) {
    return true;
  }

  // indirect match between query and keyword categories
  if (doesQueryMatchKeywordCategories(queryWords, keywordCategories)) {
    return true;
  }

  return false;
}

function doesQueryContainKeyword(queryWords, keyword) {
  const matchFound = queryWords.includes(keyword);
  console.log('found keyword "%s" in [%s]? %s', keyword, queryWords, matchFound);

  return matchFound;
}

function doesQueryMatchKeywordCategories(queryWords, categories) {
  return queryWords.some(function(queryWord) {
    const matchFound = categories.includes(queryWord);
    console.log('found queryWord "%s" in [%s]? %s \n', queryWord, categories, matchFound);

    return matchFound;
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
