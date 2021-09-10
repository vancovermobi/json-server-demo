const faker = require("faker");
const fs = require("fs");

// Set local to use Vietnamese
faker.local = "vi";

// Random data
// console.log(faker.commerce.department());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.productDescription());

// console.log(faker.random.uuid());
// console.log(faker.image.imageUrl());
// console.log(faker.name.findName());

const randomCategoryList = (n) => {
  if (n <= 0) return;

  const categoryList = [];

  // loop and push category
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.random.uuid(),
      name: faker.commerce.department(),
      createAt: Date.now(),
      updateAt: Date.now(),
    };

    categoryList.push(category);
  });

  return categoryList;
};
const randomProductList = (categoryList, numberProduct) => {
  if (numberProduct <= 0) return;

  const ProductList = [];

  // // loop and push Product
  for (const category of categoryList) {
    Array.from(new Array(numberProduct)).forEach(() => {
      const Product = {
        categoryId: category.id,
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        thumbnailUrl: faker.image.imageUrl(400, 400),
        createAt: Date.now(),
        updateAt: Date.now(),
      };
      ProductList.push(Product);
    });
  }
  return ProductList;
};

// IFFE
(() => {
  // random data
  const categoryList = randomCategoryList(4);
  const productList = randomProductList(categoryList, 5);

  // prepare db object

    // const db = {
    //   categories: [],
    //   products: [],
    //   profile: {
    //     name: "Po",
    //   },
    // };

  const db = {
    categories: categoryList,
    products: productList,
    profile: {
      name: "Po",
    },
  };

  //   write db object to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
