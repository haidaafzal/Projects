import React, { useState } from "react";

export default function Navbar({ onPageChange }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex justify-between items-center p-4   shadow-none">
      {/* Title */}
      <h1
        className="text-xl font-bold text-white cursor-pointer"
        onClick={() => onPageChange("home")}
      >
        🍲 Recipe Explorer
      </h1>

      <div className="flex gap-4 items-center">
        {/* Favorites Button */}
        <button
          onClick={() => onPageChange("favorites")}
          className="text-black/90 bg-transparent border-none hover:underline"
        >
           Favorites
        </button>

      </div>
    </nav>
  );
}
