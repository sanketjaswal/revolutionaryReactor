import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header id="head_container">
      <div id="header_Box">
        <div className="head_data">
          <h1>Grab Up 50% Off On Men Wear</h1>
          <div>
            <p>Buy Now</p>
          </div>
        </div>
        <div className="head_data" id="header_pic">
          {/* <h2>Photo</h2> */}
        </div>
      </div>
    </header>
  );
};
