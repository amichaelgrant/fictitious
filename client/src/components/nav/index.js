import React from 'react';
import {Link} from 'react-router-dom';
import Cart from '../product/Cart';


function Navbar({children}) {
  console.log("Navbar#");

  return (
    <nav className="navbar is-transparent is-fixed-top is-default is-spaced">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" alt="fictitious" width="112" height="28"/>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample"
            onClick={(evt) => {
              evt.currentTarget.classList.toggle("is-active");
              document.getElementById("navbarExampleTransparentExample").classList.toggle("is-active");
            }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/products">
            Products
          </Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/orders">
            Orders
          </Link>
          <div className="navbar-item">
            <div className="field is-grouped">
              <div className="control">
                {children}
              </div>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/">
              User@gmail.com
            </Link>
            <div className="navbar-dropdown is-boxed">
              <Link className="navbar-item" to="/">
                Profile
              </Link>
              <a className="navbar-item" to="/">
                Setting
              </a>
              <hr className="navbar-divider"/>
              <Link className="navbar-item is-active" to="/">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
