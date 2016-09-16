
'use strict'; // enable 'let' declarations

// DEPENDENCIES

const DESCRIPTIONS = require('./constants/example-descriptions');
const SNIPPET = require('./snippet/snippet');

// CONSTANTS

const description = DESCRIPTIONS.marc;
const query = 'urban view';

// MAIN

console.log('\n\n\nRUNNING APP.JS \n')

const snippet = SNIPPET.generateSnippet(description, query);

console.log(`Final snippet: \n\n '${snippet}' \n\n`);
