# Apartment Description Highlights
<strong>Language: JS+Node</strong>

## Overview

Take a detailed description of an apartment, and a search query. Use them to generate a shorter highlight snippet made of only relevant phrases. 

## Usage

Run `Node app.js` from the base directory to run the example in that file. 

The file `constants/example-descriptions.js` includes some more example apartment descriptions to query against. 

## Example

**Full description:** 'The Marc Palo Alto is a professionally managed apartment community offering high-rise living with an urban signature feel. Location, location, location! Our prestigious downtown community is located in the heart of Palo Alto, California. Palo Alto boasts a gold mine of tree-lined streets with a wealth of activities for you to enjoy. The community is near popular University Avenue, with a wide variety of shops and chic restaurants. To name only a few, you can dine at Evvia, Tamarine, Reposado, and Lure+ Till, or choose from many other fabulous eating establishments. If that is not enough, the Stanford Shopping Center is only a short drive, with additional dining and upscale shopping choices. The awe-inspiring, open concept apartment homes are perfect for every lifestyle and feature gorgeous city views, breathtaking mountain scenery overlooking Portola Valley, or a picture perfect Bay setting. Apartment units feature: Sky-high ceilings, Stainless steel appliances, Granite countertops, Private balconies, and a Garden Terrace. Residents can also take advantage of the heated sparkling pool, BBQ area, community lounge with free Wi-Fi, cardio center, dry sauna, and Pilates/Yoga classes held in the lifestyle studio. The community allows everyone to “Breathe Easy” as The Marc Palo Alto is 100% smoke-free. Need extra storage? We have that too. Plus dry cleaning and package delivery services. Our professional management team offers extraordinary customer service with a smile. The team organizes many fun resident events throughout the year for a fun way to meet your neighbors.'

**Query string:** 'urban view'

**Generated highlight snippet:** 'The Marc Palo Alto is a professionally managed apartment community offering high-rise living with an urban signature feel. Our prestigious downtown community is located in the heart of Palo Alto, California. The awe-inspiring, open concept apartment homes are perfect for every lifestyle and feature gorgeous city views, breathtaking mountain scenery overlooking Portola Valley, or a picture perfect Bay setting. Apartment units feature: Sky-high ceilings, Stainless steel appliances, Granite countertops, Private balconies, and a Garden Terrace.' 

## Customization

The file `constants/constants.js` contains settings to tune the outcome. 
 * Which characters constitute valid breaks between phrases. 
 * Rules to include additional search terms when the query matches certain categories. 

## Testing

I've written some very simple tests and a test runner until I can get a real framework installed. 

Run `Node test/test.js` to run the test cases and check that their outputs match the expected values. 

## To Do:

* Incorporate a real testing framework
* Use an API to filter out prepositions (so that queries can include more natural-sounding English)
* Use an API to generate additional search terms based on synonyms
