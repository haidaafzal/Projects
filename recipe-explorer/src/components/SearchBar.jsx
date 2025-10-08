import React from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center w-full max-w-md bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2">
      {/* Search Icon */}
      <MagnifyingGlassIcon className="h-5 w-5 text-white/80 mr-2" />

      {/* Input */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search recipes..."
        className="flex-1 outline-none p-2 bg-transparent text-white placeholder-white/70"
        aria-label="Search recipes"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="ml-2 text-white/80 hover:text-white"
          aria-label="Clear search"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
