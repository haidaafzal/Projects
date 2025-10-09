import React from "react";
import NewsCard from "./NewsCard";

export default function Favorites({ favorites, onToggleFavorite, dark }) {
  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold mb-6">❤️ Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
              dark={dark}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">You haven’t added any favorite articles yet.</p>
      )}
    </div>
  );
}
