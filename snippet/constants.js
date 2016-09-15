
const CONSTANTS = {
  phraseEndingChars: [
    '.',
    '!',
    '?',
    ';',
    ':',
  ],
  keywords: [
    {
      name: 'balcony',
      categories: ['light', 'nature', 'view'],
    },
    {
      name: 'courtyard',
      categories: ['amenities', 'light', 'nature', 'privacy'],
    },
    {
      name: 'gym',
      categories: ['amenities', 'fitness', 'health'],
    },
    {
      name: 'stove',
      categories: ['appliance', 'kitchen', 'modern'],
    },
    {
      name: 'trails',
      categories: ['amenities', 'health', 'nature'],
    },
    {
      name: 'windows',
      categories: ['light', 'nature', 'view'],
    },
  ],
}

module.exports = CONSTANTS;
