const products = [
  {
    id: 100,
    name: 'Andersen 3000 Series Full View Retractable Aluminum Storm Door',
    colorChoices: [4, 5, 6, 7, 8],
    defaultColorId: 4,
  },
  {
    id: 200,
    name: 'Andersen 2000 Seriees Full View Interchangeable Aluminum Storm Door',
    colorChoices: [1, 3, 6, 7, 8],
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
    sku: '204281265_202985059',
    price: 101.99,
  },
  {
    sku: '90726-H03-G01',
    price: 160.95,
  },
  {
    sku: '90734-H03-G01',
    price: 200.00,
  },
  {
    sku: '90766-H03-G01',
    price: 199.95,
  },
  {
    sku: '90758-H03-G01',
    price: 250.00,
  },
  {
    sku: '90742-H03-G01',
    price: 290.99,
  },
  {
    sku: '90774-H03-G01',
    price: 300.00,
  },
  {
    sku: '90750-H03-G01',
    price: 280.88,
  },
  {
    sku: '21484',
    price: 151.99,
  },
  {
    sku: '21485',
    price: 190.95,
  },
  {
    sku: '21486',
    price: 230.00,
  },
  {
    sku: '21487',
    price: 110.99,
  },
  {
    sku: '21232',
    price: 310.00,
  },
  {
    sku: '20314',
    price: 250.95,
  },
];

const skus = [
  {
    gradeId: 'S',
    colorId: 1,
    sku: '204281265_202985059',
  },
  {
    gradeId: 'S',
    colorId: 2,
    sku: '90726-H03-G01',
  },
  {
    gradeId: 'S',
    colorId: 3,
    sku: '90734-H03-G01',
  },
  {
    gradeId: 'S',
    colorId: 4,
    sku: '90766-H03-G01',
  },
  {
    gradeId: 'S',
    colorId: 5,
    sku: '90758-H03-G01',
  },
  {
    gradeId: 'S',
    colorId: 6,
    sku: '90742-H03-G01',
  },
  {
    gradeId: 'S',
    colorId: 7,
    sku: '90774-H03-G01',
  },
  {
    gradeId: 'S',
    colorId: 8,
    sku: '90750-H03-G01',
  },
  {
    gradeId: 'P',
    colorId: 1,
    sku: '21484',
  },
  {
    gradeId: 'P',
    colorId: 2,
    sku: '21485',
  },
  {
    gradeId: 'P',
    colorId: 3,
    sku: '21486',
  },
  {
    gradeId: 'P',
    colorId: 6,
    sku: '21487',
  },
  {
    gradeId: 'P',
    colorId: 7,
    sku: '21232',
  },
  {
    gradeId: 'P',
    colorId: 8,
    sku: '20314',
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
