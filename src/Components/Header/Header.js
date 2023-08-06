import React from "react";
import "./Header.css";

export const Header = () => {
  let number = Math.floor(Math.random() * 1);
  let e = 0;
  return (
    <header id="head_container">
      <div id="header_Box">
        <div className="head_data">
          <h1>Grab Up 50% Off On Men Wear</h1>
          <div>
            <p>Buy Now</p>
          </div>
        </div>
        <div
          className="head_data"
          style={{ backgroundImage: `url('../Assets/man${e}.png')` }}
          id="header_pic"
        >
          {/* <h2>Photo</h2> */}
        </div>
      </div>
    </header>
  );
};
