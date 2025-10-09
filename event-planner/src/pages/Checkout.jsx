import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address)
      return alert("Fill all fields");
    const order = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((a, b) => a + b.price * (b.qty || 1), 0),
      customer: form,
      date: new Date().toLocaleString(),
    };
    addOrder(order);
    setCart([]);
    navigate("/orders");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-lg bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">
          Checkout
        </h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 rounded-xl border border-white/40 bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none transition"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-xl border border-white/40 bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none transition"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="p-3 rounded-xl border border-white/40 bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none transition"
            value={form.address}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
