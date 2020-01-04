import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Products from "./pages/product";
import Orders from "./pages/order";
import ProductView from "./pages/product/ProductView";
import Navbar from "./components/nav";
import Cart from "./components/product/Cart";
import {subscribeToCart} from "./components/product/Cart";




function App(props) {

  useEffect(() => {
  
  }, []);

  return (
    <section className="section">
      <div className="container">
        <Router>
          <Navbar>
            <Cart/>
          </Navbar>
          <Switch>
            <Route exact={true} path="/"
              render={()=>(
                <div className="has-text-centered">
                  <Link to="/products" className="button is-danger is-large
                    is-uppercase is-family-monospace">
                    Enter
                  </Link>
                </div>
              )}
            />
            <Route exact={true} path="/products" component={Products}/>
            <Route exact={true} path="/product/:id" component={ProductView}/>
            <Route exact={true} path="/orders" component={Orders}/>
          </Switch>
        </Router>
      </div>
    </section>
  );
}

export default App;
