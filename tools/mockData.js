const products = [
  {
    id: 100,
    name: 'Andersen 3000 Series Full View Retractable Aluminum Storm Door',
    colorChoices: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 200,
    name: 'Andersen 2000 Seriees Full View Interchangeable Aluminum Storm Door',
    colorChoices: [1, 2, 3, 6, 7, 8],
  },
];

const color = [
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

const stores = [
  {
    storeId: 584,
    name: 'Beltway 8 - Houston, TX',
  },
  {
    id: 6860,
    name: 'Kingsbridge - Sugar Land, TX',
  },
];

const prices = [
  {
    storeId: 584,
    colorId: 1,
    price: 101.99,
  },
  {
    storeId: 584,
    colorId: 2,
    price: 160.95,
  },
  {
    storeId: 584,
    colorId: 3,
    price: 200.00,
  },
  {
    storeId: 584,
    colorId: 4,
    price: 199.95,
  },
  {
    storeId: 584,
    colorId: 5,
    price: 250.00,
  },
  {
    storeId: 584,
    colorId: 6,
    price: 290.99,
  },
  {
    storeId: 584,
    colorId: 7,
    price: 300.00,
  },
  {
    storeId: 584,
    colorId: 8,
    price: 280.88,
  },
  {
    storeId: 6860,
    colorId: 1,
    price: 151.99,
  },
  {
    storeId: 6860,
    colorId: 2,
    price: 190.95,
  },
  {
    storeId: 6860,
    colorId: 3,
    price: 230.00,
  },
  {
    storeId: 6860,
    colorId: 4,
    price: 110.99,
  },
  {
    storeId: 6860,
    colorId: 5,
    price: 310.00,
  },
  {
    storeId: 6860,
    colorId: 6,
    price: 250.95,
  },
  {
    storeId: 6860,
    colorId: 7,
    price: 290.90,
  },
  {
    storeId: 6860,
    colorId: 8,
    price: 295.80,
  },
];

const skus = [
  {
    productId: 100,
    colorId: 1,
    sku: '204281265_202985059',
  },
  {
    productId: 100,
    colorId: 2,
    sku: '90726-H03-G01',
  },
  {
    productId: 100,
    colorId: 3,
    sku: '90734-H03-G01',
  },
  {
    productId: 100,
    colorId: 4,
    sku: '90766-H03-G01',
  },
  {
    productId: 100,
    colorId: 5,
    sku: '90758-H03-G01',
  },
  {
    productId: 100,
    colorId: 6,
    sku: '90742-H03-G01',
  },
  {
    productId: 100,
    colorId: 7,
    sku: '90774-H03-G01',
  },
  {
    productId: 100,
    colorId: 8,
    sku: '90750-H03-G01',
  },
  {
    productId: 200,
    colorId: 1,
    sku: '21484',
  },
  {
    productId: 200,
    colorId: 2,
    sku: '21485',
  },
  {
    productId: 200,
    colorId: 3,
    sku: '21486',
  },
  {
    productId: 200,
    colorId: 6,
    sku: '21487',
  },
  {
    productId: 200,
    colorId: 7,
    sku: '21232',
  },
  {
    productId: 200,
    colorId: 8,
    sku: '20314',
  },
];


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  products,
  colors,
  stores,
  prices,
  skus,
};
