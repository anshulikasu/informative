import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
// import { phoneNum } from "../../utils/globalVars";

function Navbar() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`navbar ${show && "navbar__blue"}`}>
      <div className="navbar_section">
        <Link to="/">
          <div className="flight_logo">
            <span className="nav_text">StockPLogo</span>
          </div>
        </Link>

        <div className="nav">
          <div className="nav_links">
            <Link className="nav_sublinks" to="/">
              <div className="nav_icons">
                <span className="nav_text">Home</span>
              </div>
            </Link>
            <Link className="nav_sublinks" to="features">
              <div className="nav_icons">
                <span className="nav_text">Features</span>
              </div>
            </Link>
            <Link className="nav_sublinks" to="experties">
              <div className="nav_icons">
                <span className="nav_text">Experties</span>
              </div>
            </Link>
            <Link className="nav_sublinks " to="blog">
              <div className="nav_icons">
                <span className="nav_text">Blog</span>
              </div>
            </Link>
            <Link className="nav_sublinks " to="contacts">
              <div className="nav_icons">
                <span className="nav_text">Contact Us</span>
              </div>
            </Link>
            <Link className="nav_sublinks " to="refer&earn">
              <div className="nav_icons">
                <span className="nav_text">Refer&Earn</span>
              </div>
            </Link>
            <Link className="nav_sublinks " to="contacts">
              <button className="login-button">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
