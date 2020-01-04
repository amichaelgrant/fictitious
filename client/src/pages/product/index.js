import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router-dom";
import ProductList from "../../components/product/ProductList";
import {listProducts} from "../../apis/product";



function Index(props) {
  //console.log("Product: ", props);

  const[products, setProducts] = useState([]);
  const[size, setSize] = useState(0);

  useEffect(() => {
    listProducts({}).then((ps)=>{
      setProducts(ps.items);
      setSize(ps.size);
    });
  }, []);

  return (
    <div className="products">
      <h1 className="title">Products</h1>
      <div className="subtitle">[{size}] items available</div>

      <div>
        <ProductList
          items={products}
          onItemClick={(item)=>{
            props.history.push(`/product/${item.id}`);
          }}
        />
      </div>
    </div>
  );
}

export default withRouter(Index);
