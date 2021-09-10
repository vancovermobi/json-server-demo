const faker = require('faker');

// Set local to use Vietnamese
faker.local = 'vi';

// Random data
console.log(faker.commerce.department());
console.log(faker.commerce.productName());
console.log(faker.commerce.productDescription());

console.log(faker.random.uuid());
console.log(faker.image.imageUrl());
console.log(faker.name.findName());