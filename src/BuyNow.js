import React from "react";
import { checkout } from "./services/checkout";
const BuyNow = ({ id }) => {
  const onClick = () => {
    checkout(id);
  };
  return (
    <button className="BuyNow" onClick={onClick}>
      Buy Now
    </button>
  );
};
export default BuyNow;
