import React from "react";
import "./Star.css";

export const Star = ({ Rate }) => {
  return (
    <div className="StarHolder">
      <div>
        <span className="material-icons star">star</span>
        <span className="material-icons star">star</span>
        <span className="material-icons star">star</span>
        <span className="material-icons star">star</span>
        <span className="material-icons star">star_half</span>
      </div>
      {/* <p>(121)</p> */}
    </div>
  );
};
