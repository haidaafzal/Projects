import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import FavoritesPage from "./pages/FavoritesPage"; // ✅ make sure this exists

export default function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <FavoritesProvider>
          <Router>
            <Navbar />
            <CartSidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Router>
        </FavoritesProvider>
      </OrderProvider>
    </CartProvider>
  );
}
