import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response) => {
      setProducts(response.data);
      
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
