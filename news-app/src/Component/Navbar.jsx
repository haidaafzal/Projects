import React from "react";
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";

export default function Navbar({
  category,
  setCategory,
  search,
  setSearch,
  onSearch,
  dark,
  setDark,
  favoritesCount,
  setView,
}) {
  const categories = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <nav className={`${dark ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-md sticky top-0 z-50`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => setView("home")}>📰 Newsify</h1>
          <button
            onClick={() => setView("favorites")}
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-100 hover:bg-yellow-200"
            title="Favorites"
          >
            <FaHeart /> Favorites <span className="text-sm ml-1">({favoritesCount})</span>
          </button>
        </div>

        <form onSubmit={onSearch} className="flex gap-2 w-full sm:w-auto justify-center">
          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`border px-3 py-1 rounded-lg focus:outline-none w-60 sm:w-64 ${dark ? "bg-gray-700 border-gray-600" : "bg-white"}`}
          />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700">Search</button>
        </form>

        <div className="flex items-center gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`p-2 rounded ${dark ? "bg-gray-700" : "bg-gray-100"}`}
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <button onClick={() => setDark(!dark)} className="p-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600" title="Toggle dark mode">
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button onClick={() => setView("home")} className={`px-3 py-1 rounded-md ${dark ? "bg-gray-700" : "bg-gray-100"}`}>Home</button>
        </div>
      </div>
    </nav>
  );
}
