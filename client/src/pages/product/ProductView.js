import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router-dom";
import Product from "../../components/product/Product";
import {getProduct} from "../../apis/product";
import {addItem} from "../../components/product/CartStorage";

function ProductView(props) {

  const id = props.match.params.id;
  const[product, setProduct] = useState(null);

  const onAddToCart = (product) => {
    return (evt) => {
      addItem(product);
      props.history.push(`/products`);
    };
  };

  useEffect(() => {
    getProduct(id).then((result) => {
      setProduct(result);
    })
  }, [0]);


  return (
    <div className="product-view">
      <h1 className="title"></h1>
      <div className="subtitle"></div>

      <div>
        <Product
          {...product}
          extended={true}
          onAddToCart={onAddToCart(product)}
        />
      </div>
    </div>
  );
}

export default withRouter(ProductView);
