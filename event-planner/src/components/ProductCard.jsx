import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // ✅ important
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFav = favorites.some(item => item.id === product.id);

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="h-48 object-cover mb-4 rounded"/>
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">${product.price}</p>
      <div className="flex gap-2">
        <button onClick={() => addToCart(product)} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition flex-1">Add to Cart</button>
        <Link to={`/product/${product.id}`} className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition flex-1 text-center">Details</Link>
      </div>
      <button
        onClick={() => isFav ? removeFavorite(product.id) : addFavorite(product)}
        className={`mt-2 w-full py-2 rounded ${isFav ? "bg-red-500 hover:bg-red-600 text-white" : "bg-yellow-400 hover:bg-yellow-500 text-black"} transition`}
      >
        {isFav ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </motion.div>
  );
}
