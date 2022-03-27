import { checkout } from "../../services/checkout";

const Product = ({ name, image, description, price, priceId }) => {
  return (
    <li className="product-grid-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button
        onClick={() => {
          checkout(priceId);
        }}
      >
        Buy now for {price}
      </button>
    </li>
  );
};

export default Product;
