import React from "react";
import "./Subnav.css";
import { SiFramer } from "react-icons/si";
import { CgAtlasian } from "react-icons/cg";
import { SiShopify } from "react-icons/si";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";

function Subnav() {
  return (
    <div className="subnav">
      <div>
        <h1>Trusted by teams at</h1>
      </div>
      <div className="subnav_one">
        <div className="icon-container">
          <SiFramer
            style={{ color: "#333", fontSize: "22px", marginRight: "5px" }}
          />
          <a href="#">Framer</a>
        </div>
        <div>
          <CgAtlasian
            style={{ color: "#333", fontSize: "22px", marginRight: "5px" }}
          />
          <a href="#">Atlassian</a>
        </div>
        <div>
          <SiShopify
            style={{ color: "#333", fontSize: "22px", marginRight: "5px" }}
          />
          <a href="#">Shopify</a>
        </div>
        <div>
          <a href="#">Github</a>
        </div>
        <div>
          <MdOutlineRocketLaunch
            style={{ color: "#333", fontSize: "22px", marginRight: "5px" }}
          />
          <a href="#">Launchdarkly</a>
        </div>
        <div>
          <BsCalendar3
            style={{ color: "#333", fontSize: "22px", marginRight: "5px" }}
          />
          <a href="#">Tailscale</a>
        </div>
      </div>
    </div>
  );
}

export default Subnav;
