const products = [
  {
    id: 100,
    name: 'Andersen 3000 Series Full View Retractable Aluminum Storm Door',
    colorChoices: [5, 6, 7, 8],
    defaultColorId: 5,
  },
  {
    id: 200,
    name: 'Andersen 2000 Seriees Full View Interchangeable Aluminum Storm Door',
    colorChoices: [2, 4, 7, 8],
    defaultColorId: 1,
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

const grades = [
  {
    id: 'S',
    name: 'Standard',
    sequence: 1,
  },
  {
    id: 'P',
    name: 'Premium',
    sequence: 2,
  },
];

const handles = [
  {
    id: 100,
    name: 'Traditional Nickel',
    imageUrl: 'https://blinds.homedepot.com/SqlImages/fc7b8f90-f894-e811-9470-0a986990730e.png',
  },
  {
    id: 200,
    name: 'Traditional Brass',
    imageUrl: 'https://blinds.homedepot.com/SqlImages/fde364ad-f894-e811-9470-0a986990730e.png',
  },
];

const prices = [
  {
    gradeId: 'S',
    colorId: 2,
    price: 101.99,
  },
  {
    gradeId: 'S',
    colorId: 4,
    price: 130.95,
  },
  {
    gradeId: 'S',
    colorId: 5,
    price: 119.50,
  },
  {
    gradeId: 'S',
    colorId: 6,
    price: 189.95,
  },
  {
    gradeId: 'S',
    colorId: 7,
    price: 170.00,
  },
  {
    gradeId: 'S',
    colorId: 8,
    price: 199.99,
  },
  {
    gradeId: 'P',
    colorId: 2,
    price: 201.99,
  },
  {
    gradeId: 'P',
    colorId: 4,
    price: 230.95,
  },
  {
    gradeId: 'P',
    colorId: 5,
    price: 249.50,
  },
  {
    gradeId: 'P',
    colorId: 6,
    price: 269.95,
  },
  {
    gradeId: 'P',
    colorId: 7,
    price: 260.00,
  },
  {
    gradeId: 'P',
    colorId: 8,
    price: 279.99,
  },
];

const skus = [
  {
    colorId: 2,
    sku: '90725-H07-G01',
  },
  {
    colorId: 4,
    sku: '90765-H07-G01',
  },
  {
    colorId: 5,
    sku: '90757-H07-G01',
  },
  {
    colorId: 6,
    sku: '90741-H07-G01',
  },
  {
    colorId: 7,
    sku: '90773-H07-G01',
  },
  {
    colorId: 8,
    sku: '90749-H07-G01',
  },
];


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  products,
  colors,
  handles,
  prices,
  skus,
  grades,
};
