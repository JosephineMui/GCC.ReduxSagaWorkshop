const products = [
  {
    id: 100,
    name: 'Andersen 3000 Series Full View Retractable Aluminum Storm Door',
    colorChoices: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 200,
    name: 'Andersen 2000 Seriees Full View Interchangeable Aluminum Storm Door',
    colorChoices: [1, 2, 3, 5, 6, 7],
  },
];

const colors = [
  {
    id: 1,
    name: 'White',
    imageUrl: 'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/25aa87bc-a970-e811-946d-0a986990730e.jpg',
  },
  {
    id: 2,
    name: 'Almond',
    imageUrl: 'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/9d7382cd-a970-e811-946d-0a986990730e.jpg',
  },
  {
    id: 3,
    name: 'Sandtone',
    imageUrl: 'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/dfeea33f-aa70-e811-946d-0a986990730e.jpg',
  },
  {
    id: 4,
    name: 'Terratone',
    imageUrl: 'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/803e7eca-aa70-e811-946d-0a986990730e.jpg',
  },
  {
    id: 5,
    name: 'Cinnamon Toast',
    imageUrl: 'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/1be4d6e5-aa70-e811-946d-0a986990730e.jpg',
  },
  {
    id: 6,
    name: 'Forest Green',
    imageUrl: 'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/8d5ceb6b-aa70-e811-946d-0a986990730e.jpg',
  },
  {
    id: 7,
    name: 'Bronze',
    imageUrl: 'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/5fd99a51-aa70-e811-946d-0a986990730e.jpg',
  },
  {
    id: 8,
    name: 'Black',
    imageUrl: 'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/ed075cd2-aa70-e811-946d-0a986990730e.jpg',
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  products,
  colors,
};
