import React from "react";
import "./Services.css";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";

function Services() {
  return (
    <div className="cardlist">
      <div className="container">
        <div className="tcard_tr">
          <div className="tcard_sub">
            <FaRegUser
              style={{ color: "white", fontSize: "24px", marginRight: "5px" }}
            />
            <h2>Users</h2>
            <p>
              Stay on top of your growing company by making it easy to search,
              and get to know, your teammates.
            </p>
          </div>
          <div className="tcard_sub">
            <FaSearch
              style={{ color: "white", fontSize: "24px", marginRight: "5px" }}
            />
            <h2>Research Analysis</h2>
            <p>
              Keep your visuals consistently on-brand with easily accessible
              colors, icons, screenshots and more, for the whole team.
            </p>
          </div>
          <div className="tcard_sub">
            <FaDribbbleSquare
              style={{ color: "white", fontSize: "24px", marginRight: "5px" }}
            />
            <h2>A.P</h2>
            <p>
              Set up template bug report forms to give timely and actionable
              feedback on features and projects in development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
