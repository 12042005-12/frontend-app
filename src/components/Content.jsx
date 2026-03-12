import React, { useEffect, useState } from "react";

export default function Content() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-app-x0jm.onrender.com/store")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>

          <img
            src={`https://backend-app-x0jm.onrender.com${product.imageUrl}`}
            width="200"
            alt={product.name}
          />

          <p>{product.desc}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}