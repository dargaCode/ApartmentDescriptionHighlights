# Apartment Description Highlights
<strong>Language: JS+Node</strong>

## Overview

Take a detailed description of an apartment, and a search query. Use them to generate a shorter description made of only relevant highlights. 

## Usage

Run `Node app.js` from the base directory to run the example in that file. 

The `settings/settings.js` file includes some example apartment descriptions to query against. 

## Customization

The file `constants/constants.js` contains settings to tune the outcome. 
 * Which characters constitute valid breaks between phrases. 
 * Rules to include additional search terms when the query matches certain categories. 

## Testing

I've written some very simple tests and a test runner until I can get a real framework installed. 

Run `Node test/test.js` to run the test cases and check that their outputs match the expected values. 

## To Do:

* Use real tests
* Use an API to filter out prepositions (so that queries can include more natural-sounding English)
* Use an API to generate additional search terms based on synonyms
