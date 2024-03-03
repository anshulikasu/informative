import React from "react";
import "./AboutProduct.css";
import AboutImage from "../images/About1.png";
const AboutProduct = () => {
  return (
    <div className="about_one">
      <h2 className="about_hd1">About Our Product and Features</h2>
      <h3 className="about_hd2">
        Empower your teams to build better processes, for a better workplace
      </h3>
      <div className="about_sub">
        <img src={AboutImage} alt="My Image" />
        <div className="about_subon">
          <ul>
            <p>Lorem Ipsum Dolor</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              With great teams come great processes. Using our developer API,
              create and publish extensions to your organization’s Private
              Extension Store for your team to install.
            </p>
            <p>
              Build extensions to quickly access company brand assets, log
              feedback, book time off, or search your employee index.
            </p>
            <p>Explore More</p>
          </ul>
        </div>
      </div>
      <div className="about_low">
        <video controls width={5000}>
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutProduct;
