if(!global.db) require('./mongo')();
const debug = require('debug')('server:init');
const {v4} = require('uuid');
const faker = require('faker');
const db = global.db.collection('products');



function InitWithSampleData(){
  const products = [];
  for(let index = 0; index < 100; index++){
    products.push({
      id: v4(),
      name: faker.commerce.productName(),
      description: faker.lorem.sentences(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl() + `?id=${v4()}`,
      category: faker.name.jobType(),
      reviews: faker.random.number(),
      quantityInStock: faker.random.number(),
      images: new Array(10).fill(0).map(im => ({
        url: faker.image.imageUrl() + `?id=${v4()}`
      }))
    });
  };

  debug("Inserting products [%d]", products.length);
  db.insertMany(products, (err, result) => {
    if(err) return debug("InitWithSampleData: ", err);
    debug("Done inserting sample data in DB");
    process.exit(0);
  });
};

InitWithSampleData();

module.exports = InitWithSampleData;
