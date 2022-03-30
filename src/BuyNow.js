import React from "react";
import { checkout } from "./services/checkout";
const BuyNow = ({ id }) => {
  const onClick = () => {
    checkout(id);
  };
  return (
    <button className="buyNow" onClick={onClick}>
      Buy Now
    </button>
  );
};
export default BuyNow;
