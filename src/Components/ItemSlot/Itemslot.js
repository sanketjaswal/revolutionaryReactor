import React from "react";
import "./Itemslot.css";
import { NormalButton } from "../Button/Button.styled";
import { Star } from "../Star/Star";
import { Link } from "react-router-dom";

export const ItemSlot = ({ data, index }) => {
  // let priceSymbol = "$";
  // if (country === "in") {
  //   priceSymbol = "₹";
  // } else if (country === "jp") {
  //   priceSymbol = "¥";
  // }

  const country = data.linkPdp.slice(4, 6);
  // console.log(data.linkPdp.slice(4, 6));

  const changeFav = (evt) => {
    let state = evt.target.innerText;
    let parent = evt.target.parentNode;
    if (state === "favorite_border") {
      evt.target.innerText = "favorite";
      parent.style.color = "rgb(255, 50, 98)";
    } else if (state === "favorite") {
      evt.target.innerText = "favorite_border";
      parent.style.color = "var(--Site_smallTextColor)";
    }
  };

  return (
    <div className="slot_container">
      <div className="slot_heart" onClick={(e) => changeFav(e)}>
        <span className="material-icons">favorite_border</span>
      </div>
      <Link
        className="routeLink"
        style={{
          textDecoration: "none",
        }}
        to={`/product/${country}/${data.defaultArticle.code}/`}
      >
        <img
          src={data.articles[0].logoPicture[0].baseUrl}
          className="apiPhoto"
          alt=""
        />
      </Link>
      <div className="slot_dataContainer">
        <p>{data.name}</p>
        <div className="slot_priceRate">
          <Star Rate />
          <div className="slot_priceholder">
            <p>{/* <sup>{priceSymbol}</sup> */}</p>
            <p>
              {data.price.formattedValue}
              {/* <sup>.oo</sup> */}
            </p>
          </div>
        </div>
        <NormalButton>Add to cart</NormalButton>
      </div>
    </div>
  );
};
