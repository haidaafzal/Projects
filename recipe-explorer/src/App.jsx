import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";
import Favorites from "./components/Favorites";
import recipes from "./data/recipe";

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });
  const [filterCuisine, setFilterCuisine] = useState("All");
  const [timeFilter, setTimeFilter] = useState("All");
  const [ingredientsFilter, setIngredientsFilter] = useState("");
  const [page, setPage] = useState("home");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const cuisines = ["All", ...new Set(recipes.map((r) => r.cuisine))];

  const filteredRecipes = recipes.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());

    const matchesCuisine =
      filterCuisine === "All" || r.cuisine === filterCuisine;

    const matchesTime =
      timeFilter === "All" ||
      (timeFilter === "<15" && r.time <= 15) ||
      (timeFilter === "<30" && r.time <= 30) ||
      (timeFilter === "<60" && r.time <= 60);

    const ingredientList = ingredientsFilter
      .split(",")
      .map((i) => i.trim().toLowerCase())
      .filter(Boolean);

    const matchesIngredients = ingredientList.every((ing) =>
      r.ingredients.some((ri) => ri.toLowerCase().includes(ing))
    );

    return matchesSearch && matchesCuisine && matchesTime && matchesIngredients;
  });

  return (
    <div
      className="min-h-screen relative bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Frosted glass container */}
      <div className="relative z-10 min-h-screen p-6 bg-white/10 backdrop-blur-md rounded-2xl">
        <Navbar onPageChange={setPage} />

        {page === "home" && (
          <div className="flex flex-col gap-6">
            {/* Search + Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <input
                type="text"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 rounded w-full md:w-1/4 text-white
                 placeholder-white/60 bg-white/10 backdrop-blur-sm border border-white/20"
              />

              <select
                value={filterCuisine}
                onChange={(e) => setFilterCuisine(e.target.value)}
                className="p-2 rounded text-white bg-black/10 backdrop-blur-sm border border-white/20"
              >
                {cuisines.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="p-2 rounded text-white bg-black/10 backdrop-blur-sm border border-white/20"
              >
                <option value="All">All Times</option>
                <option value="<15">⏱ Under 15 min</option>
                <option value="<30">⏱ Under 30 min</option>
                <option value="<60">⏱ Under 60 min</option>
              </select>

              <input
                type="text"
                placeholder="Ingredients (comma separated)"
                value={ingredientsFilter}
                onChange={(e) => setIngredientsFilter(e.target.value)}
                className="p-2 rounded w-full md:w-1/3 text-white placeholder-white/60 bg-white/10 backdrop-blur-sm border border-white/20"
              />
            </div>

            {/* Recipe Grid */}
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => setSelectedRecipe(recipe)}
                    isFavorite={favorites.includes(recipe.id)}
                    onToggleFavorite={() => toggleFavorite(recipe.id)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-white/80 mt-6">
                No recipes found. Try different filters.
              </p>
            )}
          </div>
        )}

        {page === "favorites" && (
          <Favorites
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            setSelectedRecipe={setSelectedRecipe}
          />
        )}

        {selectedRecipe && (
          <RecipeModal
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </div>
    </div>
  );
} 
