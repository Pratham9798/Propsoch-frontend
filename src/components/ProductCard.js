import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [inWishlist, setInWishlist] = useState(false);

  const handleWishlistClick = () => {
    setInWishlist(!inWishlist);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
        <button onClick={handleWishlistClick} className="wishlist-icon">
          <FaHeart color={inWishlist ? "red" : "gray"} />
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
