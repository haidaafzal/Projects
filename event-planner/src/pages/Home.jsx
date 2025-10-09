import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import FeaturedCarousel from "../components/FeaturedCarousel";
import SearchBar from "../components/SearchBar";

const products = [
  { id:1,name:"2PC Embroidered Dress ",price:299,image:"https://silayipret.com/cdn/shop/files/1C0A0596.jpg?v=1750765341&width=1100"},
  { id:2,name:"2PC Embroidered Dress",price:149,image:"https://silayipret.com/cdn/shop/files/WhatsAppImage2024-06-02at11.14.37PM_6.jpg?v=1717352134&width=1100"},
  { id:3,name:"2PC Embroidered Dress",price:199,image:"https://silayipret.com/cdn/shop/files/WhatsAppImage2024-06-02at11.05.47PM_1.jpg?v=1717351582&width=1780"},
  { id:4,name:"2PC Summer Dress",price:79,image:"https://silayipret.com/cdn/shop/files/1C0A9908.jpg?v=1750767447&width=1780"},
  { id:5,name:"MAHNOOR | SHADMANI | RJ’S PRET",price:79,image:"https://rjspret.com/cdn/shop/products/1G7A7378-copy.jpg?v=1682964962&width=990",description:"Sublimation Printed Shirt Sublimation Printed Trouser Fabric: Silk Lawn. Soft and Comfortable for Summers. Fabric Composition: 20% Silk, 20% Polyester, 60% Cotton" },
];

export default function Home() {
  const [search,setSearch] = useState("");
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <HeroSection />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <FeaturedCarousel products={products.slice(0,3)} />
        <h2 className="text-2xl font-bold mt-8 mb-4">All Products</h2>
        <SearchBar search={search} setSearch={setSearch}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p}/>)}
        </div>
      </div>
    </div>
  );
}
