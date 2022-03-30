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
  let usefulInfo = products.map((product) => {
    const data = {
      name: product.name,
      description: product.description,
      image: product.images[0],
      category: product.metadata.category,
      price: product.prices[0].unit_amount
    };
    return data;
  });
  for ( let i = 0; i < usefulInfo.length; i++) {
    usefulInfo[i].price = parseFloat(usefulInfo[i].price/100); 
  }
  return (
    <div className="container">
      <h1>Screen Time</h1>
      <p>An Online Place To Buy Monitors</p>
    </div>
  );
}

export default App;
