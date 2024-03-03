import React from "react";
import "./StockEdetails.css";

function StockEdetails(props) {
  const handleButtonClick = () => {
    alert("Joining Expert Team...");
  };

  return (
    <div className="stck_d">
      <h2>Our Stock Market Expertise</h2>
      <p>
        Empower your teams to build better processes, for a better workplace.
      </p>

      <button onClick={handleButtonClick}>Join Expert Team</button>
    </div>
  );
}

export default StockEdetails;
