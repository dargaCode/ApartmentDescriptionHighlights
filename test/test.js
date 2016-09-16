'use strict'; // enable 'let' declarations

// DEPENDENCIES

const DESCRIPTIONS = require('../constants/example-descriptions');
const SNIPPET = require('../snippet/snippet');

// CONSTANTS

const TEST_CASES = [
  {
    name: 'Should match basic words',
    document: DESCRIPTIONS.matt,
    query: 'premium',
    expectedResult: 'Premium stainless steel designer appliances;',
  },
  {
    name: 'Should match keywords based on relevant categories',
    document: DESCRIPTIONS.matt,
    query: 'kitchen',
    expectedResult: 'Premium stainless steel designer appliances; Distinctive accent walls and hardwood flooring; A kitchen that most chefs would drool over with easy to clean gas stove and countertops;',
  },
  {
    name: 'Should ignore redundant keywords',
    document: DESCRIPTIONS.matt,
    query: 'beautiful designer kitchen stainless steel appliances gas stove flooring',
    expectedResult: 'Premium stainless steel designer appliances; Distinctive accent walls and hardwood flooring; A kitchen that most chefs would drool over with easy to clean gas stove and countertops;',
  },
  {
    name: 'Should ignore capitalization, numbers, and punctuation',
    document: DESCRIPTIONS.matt,
    query: '@$#%b^eaU$&TIFUL% *DESi/!gNer}{ {}":_)(kiTChen!#$%^&*^(',
    expectedResult: 'Premium stainless steel designer appliances; Distinctive accent walls and hardwood flooring; A kitchen that most chefs would drool over with easy to clean gas stove and countertops;',
  },
  {
    name: 'Should not ignore numbers',
    document: 'Lovingly-restored 1920s architecture. Antique fixtures.',
    query: '1920',
    expectedResult: 'Lovingly-restored 1920s architecture.',
  },
]

// FUNCTIONS

function runTests() {
  const testResults = getTestResults();
  showTestResults(testResults);
}

// HELPERS

function getTestResults() {
  const testResults = [];

  console.log('\n\n=================================');
  console.log('   GENERATING TEST SNIPPETS...');
  console.log('=================================\n\n');

  for (const testCase of TEST_CASES) {
    const name = testCase.name;
    const document = testCase.document;
    const query = testCase.query;
    const snippet = SNIPPET.generateSnippet(document, query);
    const expectedResult = testCase.expectedResult;

    const result = {
      name: name,
      document: document,
      query: query,
      snippet: snippet,
      successful: snippet === expectedResult,
      expectedResult: expectedResult,
    }

    testResults.push(result);
  }

  return testResults;
}

function showTestResults(testResults) {
  const totalTests = testResults.length;
  let passedTests = 0;


  console.log('\n\n================================');
  console.log('    DISPLAYING TEST RESULTS:');
  console.log('================================\n\n');

  for (const testResult of testResults) {
    const name = testResult.name;
    const document = testResult.document;
    const query = testResult.query;
    const snippet = testResult.snippet;
    const successful = testResult.successful;
    const expectedResult = testResult.expectedResult;
    let result;

    if (successful) {
      passedTests++;
      result = 'SUCCESS';
    } else {
      result = 'FAILURE';
    }

    console.log('\n------------------------------\n');
    console.log('Test Case: %s', name);
    console.log('RESULT: %s \n', result);
    console.log('Document: \n"%s" \n', document);
    console.log('Query: \n"%s" \n', query);
    console.log('Snippet: \n"%s"', snippet);

    if (!successful) {
      console.log('\nEXPECTED SNIPPET: \n"%s"', expectedResult);
    }
  }

  console.log('\n\n---------------------------------');
  console.log('\n RESULTS: %s of %s tests passed', passedTests, totalTests);

  if (passedTests === totalTests) {
    console.log('\n Test Suite Successful!\n\n');
  } else {
    console.log('\n TEST SUITE FAILS! \n\n');
  }
}

// MAIN

console.log('\n\n\nRUNNING TEST.JS \n')

runTests();
