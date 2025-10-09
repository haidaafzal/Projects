import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="p-2 border rounded mb-4 w-full"
    />
  );
}
