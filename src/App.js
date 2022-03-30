import { React, useEffect, useState } from "react";
import "./App.css";
import BuyNow from "./BuyNow";
// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  const Product = ({ name, description, image, price, priceId }) => {
    return (
      <li className="product">
        <div className="imageContainer">
          <img className="productImage" src={image} alt={name}></img>
        </div>
        <div>
          <h2 className="productName">{name}</h2>
          <p className="productDescription">{description}</p>
        </div>
        <p className="productPrice">{price}</p>
        <BuyNow id={priceId} />
      </li>
    );
  };
  const AllProducts = ({ products }) => {
    return (
      <ul className="productList">
        {products.map((product) => {
          for (let i = 0; i < products.length; i++) {
            product.price = parseFloat(product.prices[0].unit_amount / 100);
            product.price = `${product.price}.00 NZD`;
          }
          return (
            <Product
              key={product.id}
              priceId={product.prices[0].id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.images[0]}
            />
          );
        })}
      </ul>
    );
  };
  return (
    <div className="container">
      <h1>Screen Time</h1>
      <p>An Online Place To Buy Monitors</p>
      <AllProducts products={products} />
    </div>
  );
}
export default App;
