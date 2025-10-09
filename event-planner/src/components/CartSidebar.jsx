import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CartSidebar() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  return (
    <>
      <button className="fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full z-50" onClick={() => setOpen(!open)}>
        Cart ({cart.length})
      </button>

      {open && (
        <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} transition={{ duration: 0.3 }} className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-lg p-4 z-50 flex flex-col">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? <p className="text-gray-500 dark:text-gray-300">Cart is empty.</p> : cart.map(item => (
              <div key={item.id} className="flex justify-between mb-4 items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button className="px-2 bg-gray-200 rounded" onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty || 1}</span>
                    <button className="px-2 bg-gray-200 rounded" onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
                <button className="text-red-500 font-bold" onClick={() => removeFromCart(item.id)}>X</button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="font-bold">Total: ${total}</p>
            <Link to="/checkout" className="w-full bg-indigo-600 text-white py-2 mt-2 rounded hover:bg-indigo-700 transition text-center block">Checkout</Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
