import React from "react";
import "./Header.css";
import { BigFancyBtn, FancyButton } from "../Button/Button.styled";

export const Header = () => {
  let chosenId;
  (function () {
    let number = Math.floor(Math.random() * 5);
    chosenId = "pic" + number;
  })();

  return (
    <header id="head_container">
      <div id="header_Box">
        <div className="head_data">
          <h1>Grab Up 50% Off On Men Wear</h1>
          <div>
            <p>Buy Now</p>
          </div>
          {/* <BigFancyBtn>Buy Now</BigFancyBtn> */}
        </div>
        <div
          id="header_pic"
          // style={{ background: `url(${pic})` }}
          className={`head_data ${chosenId}`}
        ></div>
      </div>
    </header>
  );
};
