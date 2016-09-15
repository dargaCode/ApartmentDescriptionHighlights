
'use strict'; // enable 'let' declarations

// DEPENDENCIES

const DESCRIPTIONS = require('./test/example-descriptions');
const SNIPPET = require('./snippet/snippet');

// MAIN

const description = DESCRIPTIONS.matt;
const query = 'in';

const snippet = SNIPPET.generateSnippet(description, query);

console.log(`Final snippet: \n\n '${snippet}'`);
