import React from "react";
import "./Itemslot.css";
import { NormalButton } from "../Button/Button.styled";
import { Star } from "../Star/Star";
export const ItemSlot = ({ data, index, country }) => {
  let priceSymbol = "$";
  if (country === "in") {
    priceSymbol = "₹";
  } else if (country === "jp") {
    priceSymbol = "¥";
  }

  return (
    <div className="slot_container">
      <div className="slot_heart">
        <span className="material-icons">favorite_border</span>
      </div>
      <img
        src={data.articles[0].logoPicture[0].baseUrl}
        className="apiPhoto"
        alt=""
      />
      <div className="slot_dataContainer">
        <p>{data.name}</p>
        <div className="slot_priceRate">
          <Star Rate />
          <div className="slot_priceholder">
            <p>
              <sup>{priceSymbol}</sup>
            </p>
            <p>
              {data.price.value}
              <sup>.oo</sup>
            </p>
          </div>
        </div>
        <NormalButton>Add to cart</NormalButton>
      </div>
    </div>
  );
};
