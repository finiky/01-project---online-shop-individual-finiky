import React from "react";
import ReactDOM from "react-dom";
import { checkout } from "./services/checkout";

const BuyNow = () => {
  const onClick = () => {
    checkout(); // Need to add a price ID
  };

  return (
    <button className="BuyNow" onClick={onClick}>
      Buy Now
    </button>
  );
};

export default BuyNow;
