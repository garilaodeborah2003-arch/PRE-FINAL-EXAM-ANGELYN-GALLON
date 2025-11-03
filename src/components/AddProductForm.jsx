import React, { useState } from "react";

function AddProductForm({ onAdd }) {
  const [form, setForm] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    specs: "",
    rating: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => v === "")) {
      alert("Please fill in all fields!");
      return;
    }
    onAdd({ ...form, price: +form.price, quantity: +form.quantity });
    setForm({
      image: "",
      name: "",
      category: "",
      description: "",
      specs: "",
      rating: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={form[key]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;