const debug = require('debug')('server:product');
const {v4} = require('uuid');
const db = global.db.collection('products');



function listProducts (req, res, next){
  const query = {};
  db.estimatedDocumentCount(query, (err, size) => {
    if(err){
      return res.json({error: err});
    };
    db.find(query)
    .sort([['_id', -1]])
    .skip(0)
    .limit(12)
    .toArray((err0, products) => {
      if(err0) return res.json({error: err0});
      return res.json({items: products, size});
    });
  });
};

function getProduct(req, res, next){
  const id = req.params.id;
  db.findOne({id}, {}, (err, product) => {
    if(err) return res.json({error: err});
    return res.json(product);
  });
};


module.exports = {
  listProducts,
  getProduct
};
