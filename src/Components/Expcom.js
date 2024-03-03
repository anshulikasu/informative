import React from "react";
import "./Expcom.css";

function Expcom({
  image,
  name,
  rating,
  experience,
  followers,
  description,
  price,
  subscribe,
}) {
  // Define a function to handle the button click
  const handleClick = () => {
    // You can add your subscription logic here
    alert("You have subscribed!");
  };

  return (
    <div className="expcom">
      <div className="img_exp">
        <img src={image} alt="Profile" className="expcom__image" />
      </div>

      {/* Name and Rating */}
      <div className="expcom__info">
        <h2 className="expcom__name">{name}</h2>
        <p className="expcom__rating">{rating}</p>
      </div>

      {/* Stock Market */}
      <div className="expcom__stock">
        <p>Stock Market</p>
      </div>

      {/* Experience and Followers */}
      <div className="expcom__experience">
        <p className="expcom__experience1">{experience}</p>
        <p className="expcom__followers">{followers}</p>
      </div>

      {/* Description */}
      <div className="expcom__description">
        <p>{description}</p>
      </div>

      {/* Price and Subscription Button */}
      <div className="expcom__subscription">
        <p>{price}</p>
        {/* Use handleClick function in the onClick attribute */}
        <button onClick={handleClick}>{subscribe}</button>
      </div>
    </div>
  );
}

export default Expcom;
