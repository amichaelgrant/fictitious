import axios from "axios";
import {stringify} from "query-string";


function createOrder(params){
	console.log("createOrder# ", params);
	return axios.post(`/order`, params);
};
function listOrders(params){
	return axios.get(`/orders?${stringify(params)}`);
};


export {
	createOrder,
	listOrders,
};
