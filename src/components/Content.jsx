import React, { useEffect, useState } from "react";
import "./Content.css";

export default function Content() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-app-x0jm.onrender.com/store")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img
            src={`https://backend-app-x0jm.onrender.com${product.imageUrl}`}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}