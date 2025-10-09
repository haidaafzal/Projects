import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ProductCard from "../components/ProductCard";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  if(favorites.length === 0) return <div className="p-8 text-center">No favorites yet.</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favorites.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
