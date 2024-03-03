import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stockexp.css";

import StockEdetails from "./StockEdetails";
const Stockexp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
  };

  return (
    <div className="tips-section">
      <div className="travel-card-tips">
        <Slider {...settings} className="trending-card-list">
          <StockEdetails />
          <StockEdetails />
          <StockEdetails />
        </Slider>
      </div>
      <div className="tips_main">
        <img
          className="tips_imgone"
          src="https://static.euronews.com/articles/stories/08/14/07/36/1920x1080_cmsv2_1def708b-adb8-5bf2-8b7f-68a2dd76f90f-8140736.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Stockexp;
