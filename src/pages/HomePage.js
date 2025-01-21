import React from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Propsoch</h1>
      <div className="product-list">
        {/* Example products */}
        <ProductCard product={{ id: 1, image: 'path/to/image', name: 'Product 1', description: 'Description 1' }} />
        <ProductCard product={{ id: 2, image: 'path/to/image', name: 'Product 2', description: 'Description 2' }} />
      </div>
    </div>
  );
};

export default HomePage;
