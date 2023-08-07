import React from "react";
import "./Header.css";
import man0 from "../Assets/man0.png";
import man1 from "../Assets/man1.png";

export const Header = () => {
  let chosenId;
  (function () {
    let number = Math.floor(Math.random() * 3);
    chosenId = "pic" + number;
  })();
  console.log(chosenId);

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
          id="header_pic"
          // style={{ background: `url(${pic})` }}
          className={`head_data ${chosenId}`}
        ></div>
      </div>
    </header>
  );
};
