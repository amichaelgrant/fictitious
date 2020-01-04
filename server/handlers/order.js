const debug = require('debug')('server:order');
const {v4} = require('uuid');
const db = global.db.collection('products');
const dbOrder = global.db.collection('orders');
const {orderSchema} = require('../schemas/order');
const validateSchema = require('../schemas/validateSchema');


function listOrders (req, res, next){
	const query = {};
	dbOrder.estimatedDocumentCount(query, (err, size) => {
		if(err){
			return res.json({error: err});
		};
		dbOrder.find(query)
		.sort([['_id', -1]])
		.skip(0)
		.limit(12)
		.toArray((err0, orders) => {
			if(err0) return res.json({error: err0});
			return res.json({items: orders, size});
		});
	});
};


function createOrder(req, res, next){
	console.log(req.body);
	const orders = req.body;
	const errors = validateSchema(orderSchema, orders);
	if(errors){
		debug("order: ", errors, orders);
		return res.json({error: errors});
	};
	orders.id = v4();
	orders.created = new Date();
	dbOrder.insert(orders, (err, result) => {
		if(err) {
			debug("order:err ", err, result);
			return res.json({error: err});
		};
		return res.json({items: orders});
	});
};

module.exports = {
	listOrders,
	createOrder
};
