import React, { useEffect, useState } from "react";
import "./Content.css";
import { AppContext } from "../App";
export default function Content() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = React.useContext(AppContext);

  useEffect(() => {
    fetch("https://backend-app-x0jm.onrender.com/store")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      product.quantity=1;
      setCart([...cart, product]);
    }
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img
            src={`https://backend-app-d5df.onrender.com${product.imageUrl}`}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </p>
        </div>
      ))}
    </div>
  );
}