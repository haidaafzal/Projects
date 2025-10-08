import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import recipes from "../data/recipe";

export default function Favorites({
  favorites,
  toggleFavorite,
  setSelectedRecipe,
  onBack, // ← App.js se pass karein
}) {
  const favRecipes = recipes.filter((r) => favorites.includes(r.id));
  const [filterCuisine, setFilterCuisine] = useState("All");

  const cuisines = ["All", ...new Set(favRecipes.map((r) => r.cuisine))];

  // Filtered favorites (show all if "All" is selected)
  const filteredFavorites = favRecipes.filter((r) =>
    filterCuisine === "All" ? true : r.cuisine === filterCuisine
  );

  return (
    <div className="min-h-screen">
      <div className="relative z-10 p-6">
        {/* Page Title */}
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          ⭐ Favorite Recipes
        </h2>

        {/* Filters */}
        {favRecipes.length > 0 && (
          <div className="flex justify-center mb-6">
            <select
              value={filterCuisine}
              onChange={(e) => setFilterCuisine(e.target.value)}
              className="p-2 rounded text-white bg-white/10 backdrop-blur-sm border border-white/20"
            >
              {cuisines.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Favorites Grid / Empty State */}
        {favRecipes.length === 0 ? (
          <div className="text-center text-white/80 mt-20 flex flex-col items-center gap-4">
            <p >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur ut rerum iusto possimus. Nisi aliquid placeat, obcaecati quam odio facere ipsa illo optio velit eius earum reprehenderit aspernatur explicabo.
            </p>

           
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredFavorites.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => setSelectedRecipe(recipe)}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={() => toggleFavorite(recipe.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
