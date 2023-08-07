import React, { useEffect, useState, useeffect } from "react";
import "./ItemDetails.css";
import { useParams } from "react-router-dom";
import { Star } from "../Star/Star";
import { BigNormalBtn, BigFancyBtn } from "../Button/Button.styled";
import dataFApi from "../Assets/api.json";
// import detailApi from "..";

export const ItemDetails = ({ getClothsType }) => {
  const [itemSelect, setItemSelect] = useState(dataFApi[0]);
  const [mainPhoto, setmainPhoto] = useState();
  const [photoClick, setClick] = useState(false);

  const params = useParams();

  // API loading function

  const detailsUrl = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=${params.country}&lang=en&currentpage=0&pagesize=30&categor6ies=men_all&concepts=H%26M%20MAN`;
  const detailsOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5e19675e87msh8a415e1e7b248c3p1cb390jsn2c852cdc1299",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  const CallDetailsApi = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      var found = result.results.find(
        (e) => e.defaultArticle.code === params.id
      );
      setItemSelect(found);
      startFunctions();
    } catch (error) {
      console.error(error);
    }
  };

  const startFunctions = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("Detail_Container").style.cursor = "default";
    document.getElementById("Detail_divide1").style.display = "flex";
    document.getElementById("Detail_divide2").style.display = "flex";
  };

  useEffect(() => {
    CallDetailsApi(detailsUrl, detailsOptions);
    // startFunctions();
  }, [params.id]);

  // photo clicking functions -
  let mainpic = itemSelect.articles[0].logoPicture[0].baseUrl;

  useEffect(() => {
    setmainPhoto(mainpic);
  }, [itemSelect]);

  const mouseOverPhoto = (photoUrl) => {
    // mainpic = photoUrl;
    setmainPhoto(photoUrl);
  };

  const leavePhoto = (photoUrl) => {
    if (photoClick) {
      mainpic = photoUrl;
    } else {
      mainpic = itemSelect.articles[0].logoPicture[0].baseUrl;
    }
    setmainPhoto(mainpic);
    setClick(false);
  };

  return (
    <div id="Detail_Container">
      <h1 id="loader">Loading...</h1>
      <div id="Detail_divide1">
        <div
          style={{
            backgroundImage: `url(${mainPhoto})`,
          }}
          id="detail_mainPhoto"
        ></div>
        <div id="detail_photosHolder">
          {itemSelect.galleryImages.map(function (data, index) {
            return (
              <div
                style={{
                  backgroundImage: `url(${data.baseUrl})`,
                }}
                key={index}
                className="detail_otherPhotos"
                onMouseOver={() => {
                  mouseOverPhoto(data.baseUrl);
                }}
                onClick={() => {
                  setClick(true);
                }}
                onMouseLeave={() => {
                  leavePhoto(data.baseUrl);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div id="Detail_divide2">
        <div id="detail_mainTexts">
          <div id="detailName">
            <h1>{itemSelect.name}</h1>
          </div>

          <Star />
          <hr id="smallHide"></hr>
          <h2>{itemSelect.whitePrice.formattedValue} or 99.99 / month</h2>
          <p id="smallHide">
            Suggested payments with 6 months special financing
          </p>
          <hr id="smallHide"></hr>
          <h3 id="smallHide">Choose a color</h3>
          <div id="detail_colorsHolder">
            {itemSelect.rgbColors.map(function (data, index) {
              return (
                <div
                  style={{
                    background: data,
                  }}
                  key={index}
                  className="detail_colors"
                  onClick={() => {}}
                ></div>
              );
            })}
          </div>
          <hr></hr>
          <div id="detail_adder">
            <div id="adder">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <div id="detail_smalltext">
              <p>Only {itemSelect.stock.stockLevel} items Left!</p>
              <p>Don't miss it</p>
            </div>
          </div>
          <div id="detail_buttonsHolder">
            <BigFancyBtn>Buy Now</BigFancyBtn>
            <BigNormalBtn>Add to Cart</BigNormalBtn>
          </div>
          <div id="details_extraText">
            <h3>Free Delivery</h3>
            <p>Enter your Postal code for Delivery Availability</p>
          </div>
          <div id="details_extraText">
            <h3>Return Delivery</h3>
            <p>Free 30days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};
