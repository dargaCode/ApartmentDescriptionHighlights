
'use strict'; // enable 'let' declarations

// DEPENDENCIES

const CONSTANTS = require('./constants');

// CONSTANTS

const ENDING_CHARS = CONSTANTS.phraseEndingChars;
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

function splitStringIntoPhrases(str) {
  // data-driven for ease of tuning
  const endingChars = ENDING_CHARS.join('');
  // match substrings ending in one of the phrase ending chars
  const phraseRegex = new RegExp(`.+?[${endingChars}]`,'g');
  const phrases = [];

  let matchInfo = [];
  // find all regex matches, and save them
  while ((matchInfo = phraseRegex.exec(str)) !== null) {
    const match = matchInfo[0].trim();
    phrases.push(match);
  }

  return phrases;
}

function filterPhrases(phrases, query) {
  return phrases.filter(function(phrase) {
    phrase = phrase.toLowerCase();
    query = query.toLowerCase();
    return phrase.indexOf(query) > -1;
  });
}

// convert the query into a list of search terms
function getSearchTerms(query) {
  const queryWords = getQueryWords(query);
  console.log('Query words: \n\n', queryWords, '\n');

  const keywords = getRelevantKeywordNames(queryWords);
  console.log('Relevant keywords: \n\n', keywords, '\n');

  // include the query words as well as relevant keywords, for more generous matching
  const allSearchTerms = queryWords.concat(keywords);

  return allSearchTerms;
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
function getRelevantKeywordNames(searchTerms) {
  const relevantKeywords = KEYWORDS.filter(function(keyword) {
    return isKeywordRelevant(keyword, searchTerms);
  });

  const keywordNames = relevantKeywords.map(function(keyword) {
    return keyword.name;
  });

  return keywordNames;
}

function isKeywordRelevant(keyword, searchTerms) {
  const keywordName = keyword.name;
  const keywordCategories = keyword.categories;

  // direct match between search term and keyword
  if (doesSearchContainKeyword(searchTerms, keywordName)) {
    return true;
  }

  // indirect match between search term and keyword categories
  if (doesSearchMatchKeywordCategories(searchTerms, keywordCategories)) {
    return true;
  }

  return false;
}

function doesSearchContainKeyword(searchTerms, keyword) {
  const matchFound = searchTerms.includes(keyword);
  // console.log('found keyword "%s" in [%s]? %s', keyword, searchTerms, matchFound);

  return matchFound;
}

function doesSearchMatchKeywordCategories(searchTerms, categories) {
  return searchTerms.some(function(searchTerm) {
    const matchFound = categories.includes(searchTerm);
    // console.log('found searchTerm "%s" in [%s]? %s \n', searchTerm, categories, matchFound);

    return matchFound;
  });
}

// only surface one function
module.exports = {
 generateSnippet: generateSnippet,
};
