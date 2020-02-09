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

const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  products,
  colors,
};
