import axios from "axios";
import {stringify} from "query-string";


function getProduct(id){
  return axios.get(`/product/${id}`);
};
function listProducts(params){
  return axios.get(`/products?${stringify(params)}`);
};



export {
  getProduct,
  listProducts
};
