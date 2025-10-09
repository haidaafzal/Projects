import React, { useState } from "react";
import { FaSearch, FaCaretDown } from "react-icons/fa"; // ✅ Added FaCaretDown

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log("Searching for:", e.target.value); // You can connect this to real search logic
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      {/* 🔹 Left Section (Search Bar) */}
      <div className="relative w-64">
        <FaSearch className="absolute left-3 top-3 text-gray-700" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="w-130 pl-10 pr-4 py-2 border bg-gray-200 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* 🔹 Right Section */}
      <div className="flex items-center gap-4">
        <button className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition">
          Cards & Billings
        </button>

        {/* ✅ Profile Section with Caret */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition">
          <img
            src="https://images.pexels.com/photos/3586761/pexels-photo-3586761.jpeg"
            alt="User"
            className="w-10 h-10 rounded-full border"
          />
          <p className="font-medium flex items-center gap-1">
            Stefen Salvatore
            <FaCaretDown className="text-gray-500 text-sm mt-[2px]" />
          </p>
        </div>
      </div>
    </header>
  );
}
