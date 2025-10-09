import React from "react";

export default function HeroSection() {
  return (
    <a
      href="#store" // <-- yahan apni store page ka link dalna
      className="relative h-96 w-full flex flex-col justify-center items-center text-center px-4 
                 bg-cover bg-center bg-no-repeat cursor-pointer"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6214450/pexels-photo-6214450.jpeg?')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to  Clickcart Store 
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          Discover forbidden treasures and rare collectibles curated for the daring souls.
        </p>
        <button className="mt-6 bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Shop Now
        </button>
      </div>
    </a>
  );
}
