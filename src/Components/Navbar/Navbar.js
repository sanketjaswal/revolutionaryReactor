import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="Nav_container">
      <div id="nav_bar">
        <div id="nav_logoHolder">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/pastel-glyph/64/003d2a/fast-cart.png"
            alt="NA"
          />
          <h2>Shopcart</h2>
        </div>
        <div id="nav_navButtons">
          <div className="nav_nav">
            <b>Catagory</b>
          </div>
          <div className="nav_nav">
            <b>Deals</b>
          </div>
          <div className="nav_nav">
            <b>What's New</b>
          </div>
          <div className="nav_nav">
            <b>Delivery</b>
          </div>
        </div>
        <div id="nav_searchHolder">
          <input id="nav_search" placeholder="Search Product"></input>
          <div id="nav_searchNav">
            <span className="material-icons">person</span>
            <b>Account</b>
          </div>
          <div id="nav_searchNav">
            <span className="material-icons">shopping_cart</span>

            <b>Cart</b>
          </div>
        </div>
      </div>
    </div>
  );
};
