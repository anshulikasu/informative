import React from "react";
import backgroundImage from "../images/banner.svg";

import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="banner_ph">
        <img src={backgroundImage} alt="Banner" />
        <div className="banner_cnt"></div>
      </div>
      <div className="nav_links_sub">
        <div className="banner_search"></div>
      </div>
    </div>
  );
}

export default Banner;
