import React, { useState } from "react";
import ProductDetail from "./ProductDetail";

function ProductCard({ product, onQuantityChange }) {
  const [showDetail, setShowDetail] = useState(false);
  const subtotal = product.price * product.quantity;

  return (
    <div
      className={`product-card ${
        product.quantity < 5 ? "low-stock" : ""
      }`}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₱{product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Subtotal: ₱{subtotal}</p>

      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "Hide Details" : "View Details"}
      </button>

      <div className="quantity-buttons">
        <button onClick={() => onQuantityChange(product.id, 1)}>+</button>
        <button onClick={() => onQuantityChange(product.id, -1)}>-</button>
      </div>

      {showDetail && <ProductDetail product={product} />}
    </div>
  );
}

export default ProductCard;