import React, {useState, useEffect, Fragment} from 'react';
import Modal from "../modal/";
import {createOrder} from "../../apis/order";
import {
  removeItem, updateItem, listItems, clearCart, subscribeToCart
} from "./CartStorage";




const Cart = ({}) => {
  console.log("Cart: ");
  const[items, setItems] = useState([]);
  const[open, setOpen] = useState(false);
  const[finalize, setFinalize] = useState(false);

  const onRemove = (item) => {
    return () => {
      removeItem(item);
    };
  };

  const updateQuantity = (item, qty) => {
    return (evt) => {
      console.log("updateQuantity#item ", item, qty);
      updateItem(item, qty);
    };
  };

  const computeTotal = (itms) => {
    let total = 0;
    itms.forEach((itm) => {
      total += parseInt(itm.price, 10) * itm.quantity;
    });
    return total.toFixed(2);
  };

  useEffect(()=>{
    setItems(listItems());
    subscribeToCart((evt) => {
      setItems(listItems());
    });
  },[]);


  return (
    <div className="cart">
      <button className="button is-light"
        onClick={()=>{
          setOpen(true);
        }}>
        Cart &nbsp;
        <span className="tag is-warning">
          {items && items.length}
        </span>
      </button>

      <Modal
        open={open}
        title={(
           <span>Cart ({items.length})</span>
        )}
        subtitle={(
          <h1 className="title">
            <br/>
            <span className="title is-4">Totals: </span>
            <span>
              <span className="subtitle">$</span>
              {computeTotal(items)}
            </span>
          </h1>
        )}
        onClose={()=>{
          setOpen(false);
        }}
        footer={(
          <div className="cart-footer">
            {items && items.length > 0 && (
              <button className="button is-danger is-large is-uppercase"
                onClick={() => {
                  //const cartItems = listItems().map(({id, quantity}) => ({product: id, quantity}));
                  const cartItems = listItems().map(p => {
                    console.log("p========", p);
                    return {
                      product: p.id,
                      quantity: p.quantity,
                      name: p.name,
                      price: p.price
                    };
                  });
                  console.log("cartItems: ", cartItems);
                  createOrder({items: cartItems})
                  .then((r) => {
                    clearCart();
                    setFinalize(true);
                    setOpen(false);
                  })
                  .catch((err) => {});
                }}>
                Order
              </button>
            )}
          </div>
        )}>
        <div>
          {items && (
            <div className="list-">
              {items.map((item, index) => (
                <div key={index} className="list-item">
                  <button className="button is-small is-pulled-right is-danger"
                    onClick={onRemove(item)}>
                    <i className="fas fa-trash-alt"/>
                  </button>
                  <div className="title is-capitalized">{item.name}</div>
                  <div className="subtitle">{item.price}</div>
                  <div className="subtitle">{item.name}</div>
                    <div className="field has-addons is-grouped-right">
                      <p className="control">
                        <button className="button is-light"
                          onClick={updateQuantity(item, -1)}>
                          <span className="icon">
                            <i className="fas fa-angle-left"/>
                          </span>
                        </button>
                      </p>
                      <p className="control">
                        <a className="button">
                          {item.quantity}
                        </a>
                      </p>
                      <p className="control">
                        <button className="button is-light"
                          onClick={updateQuantity(item, 1)}>
                          <span className="icon">
                            <i className="fas fa-angle-right"/>
                          </span>
                        </button>
                      </p>
                    </div>
                </div>
              ))}
            </div>
          )}
          {(!items || !items.length) && (
            <p className="subtitle">
              No items in cart yet, browse to add items.
            </p>
          )}
        </div>
      </Modal>

    </div>
  );
};

export default Cart;
