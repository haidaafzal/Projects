import React from "react";

export default function RecipeCard({ recipe, onClick, isFavorite, onToggleFavorite }) {
  return (
    <article
      onClick={onClick}
      className="bg-white/10 backdrop-blur-md dark:bg-gray-800/20 rounded-lg shadow hover:shadow-lg 
      transition cursor-pointer overflow-hidden"
    >
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-2 right-2 bg-transparent p-2 rounded-full shadow hover:text-white transition"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{recipe.title}</h3>
        <p className="text-sm text-white/70">
          {recipe.cuisine} • ⏱ {recipe.time} mins
        </p>
        <p className="mt-2 text-sm text-white/80">
          {recipe.description}
        </p>
      </div>
    </article>
  );
}
