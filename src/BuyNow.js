import React from "react";
import ReactDOM from "react-dom";
import { checkout } from "../../services/checkout";

const BuyNow = () => {
  const onClick = () => {
    const button = document.querySelector(".BuyNow");
  };

  return <button className="BuyNow">Buy Now</button>;
};

export default BuyNow;
