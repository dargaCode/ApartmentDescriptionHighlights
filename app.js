
'use strict'; // enable 'let' declarations

// DEPENDENCIES

const DESCRIPTIONS = require('./test/example-descriptions');
const SNIPPET = require('./snippet/snippet');

// MAIN

console.log('\n\n\nRUNNING APP.JS "MAIN" \n')

const description = DESCRIPTIONS.matt;
const query = '#@$%^AMenitiES#&* $%#^&*NATURE!!@#$ ?kitcHEN?%{}';

const snippet = SNIPPET.generateSnippet(description, query);

console.log(`Final snippet: \n\n '${snippet}' \n\n`);
