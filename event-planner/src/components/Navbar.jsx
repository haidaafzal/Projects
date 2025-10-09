import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-500 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">
        <Link to="/"> 🛍️ Clickcart Store </Link>
      </h1>

      <ul className={`flex space-x-6 ${menuOpen ? "block" : "hidden md:flex"}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li>Cart ({cart.length})</li>
      </ul>

      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
}
