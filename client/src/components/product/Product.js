import React, {Fragment} from 'react';
import Card from "../card";

function Product({
  id, name, description, price, image, category, reviews,
  quantityInStock, extended, onClick, onAddToCart
}) {

  return (
    <div className="product">

      <div className="columns is-multiple is-variable">
        <div className="column">
          <Card
            title={name}
            image={image}
            onClick={onClick}>
            {extended && (
              <div className="has-text-grey">{description}</div>
            )}
            <h1 className="subtitle is-family-monospace">${price}</h1>

            <div className="field is-grouped">
              <p className="control is-expanded">
                <span className="has-text-grey is-size-7 is-capitalized">
                  reviews <span className="tag is-warning">{reviews}</span>
                </span>
              </p>
              <p className="control">
                <span className="has-text-grey is-size-7 is-capitalized">
                  Instock <span className="tag">{quantityInStock}</span>
                </span>
              </p>
            </div>

            {/* {extended && (
              <Fragment>
                <hr/>
                <div className="btngroup">
                  <button className="button is-danger is-large is-fullwidth"
                    onClick={()=>{
                      onAddToCart && onAddToCart();
                    }}>
                    Add to cart
                  </button>
                </div>
              </Fragment>
            )} */}
          </Card>
        </div>
        {extended && (
          <div className="column is-7">
            <Card>
              {description}
              <div className="btngroup">
                <br/>
                <button className="button is-danger is-large is-fullwidth is-uppercase"
                  onClick={()=>{
                    onAddToCart && onAddToCart();
                  }}>
                  Add to cart
                </button>
              </div>
            </Card>
          </div>
        )}
      </div>

    </div>
  );

};

export default Product;
