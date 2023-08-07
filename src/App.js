import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { ItemSlot } from "./Components/ItemSlot/Itemslot";
import { Region } from "./Components/Region/Region";
// import { ItemDetails } from "./Components/ItemDetails/itemDetails";
import dataFApi from "./Components/Assets/api.json";
// import { Link } from "react-router-dom";

function App() {
  const [country, setCountry] = useState("us");
  const [ApiRes, setApiRes] = useState(dataFApi);

  // let country;

  const countryChange = (data) => {
    document.body.style.cursor = "progress";
    document.getElementById("data_area").style.display = "none";
    document.getElementById("loading_screen").style.display = "block";
    setCountry(data);
    // country = data;
  };

  const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=${country}&lang=en&currentpage=0&pagesize=30&categor6ies=men_all&concepts=H%26M%20MAN`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5e19675e87msh8a415e1e7b248c3p1cb390jsn2c852cdc1299",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  const callApi = async (url, options) => {
    try {
      console.log("callApi");
      const response = await fetch(url, options);
      const result = await response.json();
      setApiRes(result.results);
      document.body.style.cursor = "default";
      document.getElementById("data_area").style.display = "flex";
      document.getElementById("loading_screen").style.display = "none";
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // callApi(url, options);
    // document.body.style.cursor = "default";
    // document.getElementById("data_area").style.display = "flex";
    // document.getElementById("loading_screen").style.display = "none";
  }, [country]);

  return (
    <div className="App">
      <Header />
      <div className="area_container">
        <Region countryChange={countryChange} />
        <h1 id="area_heading">Clothes For You!</h1>
        <div id="loading_screen">
          <p>Please wait...</p>
        </div>
        <div id="data_area">
          {ApiRes.map(function (data, index) {
            return (
              // <Link
              //   key={index}
              //   className="routeLink"
              //   style={{
              //     textDecoration: "none",
              //   }}
              //   to={`/product/${country}/${data.defaultArticle.code}/`}
              // >
              <ItemSlot data={data} key={index} />
              // </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
