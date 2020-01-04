import React, {Fragment} from 'react';
import Product from './Product';


function ProductList({items, onItemClick}) {

  const onClick = (item) => {
    return(evt) => {
      onItemClick && onItemClick(item);
    }
  };

  return (
    <div className="product-list">
      {items && (
        <div className="columns is-multiline is-mobile- is-variable is-6" style={{flexWrap: "wrap"}}>
          {items.map((item) => (
            <div key={item.id} className="column is-4">
              <Product {...item}
                onClick={onClick(item)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
