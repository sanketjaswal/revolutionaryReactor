import React from "react";
import "./Region.css";

export const Region = ({ countryChange }) => {
  return (
    <div id="country_dropdown">
      <select>
        <option style={{ display: "none" }} value="0">
          Region
        </option>
        <option
          value="1"
          onClick={() => {
            countryChange("us");
          }}
        >
          US
        </option>
        <option
          value="2"
          onClick={() => {
            countryChange("in");
          }}
        >
          India
        </option>
        <option
          value="3"
          onClick={() => {
            countryChange("asia2");
          }}
        >
          Singapore
        </option>
        <option
          value="4"
          onClick={() => {
            countryChange("asia1");
          }}
        >
          Hong Kong
        </option>
        <option
          value="5"
          onClick={() => {
            countryChange("jp");
          }}
        >
          Japan
        </option>
        <option
          value="6"
          onClick={() => {
            countryChange("gb");
          }}
        >
          UK
        </option>
        <option
          value="7"
          onClick={() => {
            countryChange("pt");
          }}
        >
          Portugal
        </option>
        <option
          value="8"
          onClick={() => {
            countryChange("fr");
          }}
        >
          France
        </option>
        <option
          value="9"
          onClick={() => {
            countryChange("it");
          }}
        >
          Italy
        </option>
        <option
          value="10"
          onClick={() => {
            countryChange("ca");
          }}
        >
          Canada
        </option>
      </select>
    </div>
  );
};
