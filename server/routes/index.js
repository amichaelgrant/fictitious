const express = require('express');
const router = express.Router();
const {listProducts, getProduct} = require('../handlers/product');
const {listOrders, createOrder} = require('../handlers/order');

router.get('/', function(req, res, next) {
  return res.json({date: new Date(), server: "api-server"});
});
router.get('/products', listProducts);
router.get('/product/:id', getProduct);
router.get('/orders', listOrders);
router.post('/order', createOrder);

module.exports = router;
