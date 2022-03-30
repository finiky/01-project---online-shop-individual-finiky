import React from "react";
import ReactDOM from "react-dom";
import { checkout } from "./services/checkout";
//import { getProducts } from "./services/getProducts";
const BuyNow = () => {
  const onClick = (event) => {
    checkout();
  };
  return (
    <button className="BuyNow" onClick={onClick}>
      Buy Now
    </button>
  );
};

export default BuyNow;