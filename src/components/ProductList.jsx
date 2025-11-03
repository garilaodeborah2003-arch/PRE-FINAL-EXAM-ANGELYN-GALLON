import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, setProducts }) {
  const [filter, setFilter] = useState("");

  const handleQuantityChange = (id, delta) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(p.quantity + delta, 0) } : p
      )
    );
  };

  const filtered = filter
    ? products.filter((p) => p.category === filter)
    : products;

  return (
    <div>
      <h2>Product List</h2>
      <label>Filter by Category: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Audio">Audio</option>
        <option value="Accessories">Accessories</option>
      </select>

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
