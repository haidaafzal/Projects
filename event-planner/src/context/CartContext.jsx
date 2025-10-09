import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) increaseQty(product.id);
    else setCart([...cart, { ...product, qty: 1 }]);
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const increaseQty = (id) =>
    setCart(cart.map((item) => item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item));

  const decreaseQty = (id) =>
    setCart(cart.map((item) => item.id === id ? { ...item, qty: Math.max(1, (item.qty || 1) - 1) } : item));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
