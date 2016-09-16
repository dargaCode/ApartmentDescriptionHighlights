
const CONSTANTS = {
  phraseEndingChars: [
    '.',
    '!',
    '?',
    ';',
  ],
  keywords: [
    {
      name: 'appliance',
      categories: ['kitchen', 'modern', 'chef',],
    },
    {
      // to include plurals
      name: 'balcon',
      categories: ['light', 'nature', 'view',],
    },
    {
      name: 'city',
      categories: ['centrally', 'downtown', 'urban',],
    },
    {
      name: 'courtyard',
      categories: ['amenities', 'light', 'nature', 'privacy',],
    },
    {
      name: 'downtown',
      categories: ['centrally', 'city', 'urban',],
    },
    {
      name: 'flooring',
      categories: ['kitchen', 'room', 'tile',],
    },
    {
      name: 'gym',
      categories: ['amenities', 'fitness', 'health',],
    },
    {
      name: 'stove',
      categories: ['appliance', 'kitchen', 'modern',],
    },
    {
      name: 'trail',
      categories: ['amenities', 'health', 'nature',],
    },
    {
      name: 'window',
      categories: ['light', 'view',],
    },
  ],
}

module.exports = CONSTANTS;
