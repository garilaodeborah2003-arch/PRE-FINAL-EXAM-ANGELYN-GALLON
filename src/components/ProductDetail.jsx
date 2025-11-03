import React from "react";

function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <p><b>Category:</b> {product.category}</p>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Specs:</b> {product.specs}</p>
      <p><b>Rating:</b> ⭐ {product.rating}</p>
    </div>
  );
}

export default ProductDetail;