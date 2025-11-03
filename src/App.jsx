import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "images/mouse.jpg",
      name: "Wireless Mouse",
      category: "Electronics",
      description: "Ergonomic wireless mouse",
      specs: "2.4GHz, USB receiver",
      rating: 4.5,
      price: 450,
      quantity: 3,
    },
    {
      id: 2,
      image: "images/earpods.jpg",
      name: "Earpods",
      category: "Audio",
      description: "Portable waterproof speaker",
      specs: "Bluetooth 5.0, 10h playtime",
      rating: 4.7,
      price: 1200,
      quantity: 8,
    },
    {
      id: 3,
      image: "images/stand.jpg",
      name: "Laptop Stand",
      category: "Accessories",
      description: "Adjustable aluminum laptop stand",
      specs: "Foldable, heat dissipation design",
      rating: 4.3,
      price: 800,
      quantity: 2,
    },
  ]);

 
  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
  };

  
  const overallTotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="app-container">
      <h1> Product Management App</h1>
      <AddProductForm onAdd={handleAddProduct} />
      <ProductList products={products} setProducts={setProducts} />
      <h3>Total Value: ₱{overallTotal.toLocaleString()}</h3>
    </div>
  );
}

export default App;