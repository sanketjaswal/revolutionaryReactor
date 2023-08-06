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

  const params = useParams();

  const detailsUrl = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=${params.country}&lang=en&currentpage=0&pagesize=30&categor6ies=men_all&concepts=H%26M%20MAN`;
  const detailsOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c60d88c0aamsh2048021bc4a5a13p10d979jsn2adcf449bfe5",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  const startFunctions = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("Detail_Container").style.cursor = "default";
    document.getElementById("Detail_divide1").style.display = "flex";
    document.getElementById("Detail_divide2").style.display = "flex";
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

  useEffect(() => {
    CallDetailsApi(detailsUrl, detailsOptions);
    // startFunctions();
  }, [params.id]);

  let mainpic = itemSelect.articles[0].logoPicture[0].baseUrl;

  useEffect(() => {
    setmainPhoto(mainpic);
  }, [itemSelect]);

  const changePhoto = (photoUrl) => {
    mainpic = photoUrl;
    setmainPhoto(photoUrl);
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
                onClick={() => {
                  changePhoto(data.baseUrl);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div id="Detail_divide2">
        <div id="detail_mainTexts">
          <h1>{itemSelect.name}</h1>
          <Star />
          <hr></hr>
          <h2>{itemSelect.whitePrice.formattedValue} or 99.99/month</h2>
          <p>Suggested payments with 6 months special financing</p>
          <hr></hr>
          <h3>Choose a color</h3>
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
