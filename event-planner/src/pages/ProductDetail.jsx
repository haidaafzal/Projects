import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const products = [
  { id:1,name:"2PC Embroidered Dress",price:299,image:"https://silayipret.com/cdn/shop/files/1C0A0596.jpg?v=1750765341&width=1100",description:"Sublimation Printed Shirt  Sublimation Printed Trouser Fabric: Silk Lawn. Soft and Comfortable for Summers. Fabric Composition: 20% Silk, 20% Polyester, 60% Cotton" },
  { id:2,name:"2PC Embroidered Dress",price:149,image:"https://silayipret.com/cdn/shop/files/WhatsAppImage2024-06-02at11.14.37PM_6.jpg?v=1717352134&width=1100",description:"FABRIC: Cotton Soft and comfortable. Description: Embroidered Shirt and Trouser Fit:  Easy Fit" },
  { id:3,name:"2PC Embroidered Dress",price:199,image:"https://silayipret.com/cdn/shop/files/WhatsAppImage2024-06-02at11.05.47PM_1.jpg?v=1717351582&width=1780",description:"FABRIC: Cotton Lawn Soft and comfortable. Description: Embroidered Shirt and Trouser for Summers. Fit: Easy Fit" },
  { id:4,name:"2PC Summer Dress",price:79,image:"https://silayipret.com/cdn/shop/files/1C0A9908.jpg?v=1750767447&width=1780",description:"Sublimation Printed Shirt Sublimation Printed Trouser Fabric: Silk Lawn. Soft and Comfortable for Summers. Fabric Composition: 20% Silk, 20% Polyester, 60% Cotton" },
  { id:5,name:"MAHNOOR | SHADMANI | RJ’S PRET",price:79,image:"https://rjspret.com/cdn/shop/products/1G7A7378-copy.jpg?v=1682964962&width=990", description:"Color:  Off White and Gold, SKU:RJS-MH-01, No. of Pieces: 3 Pc (Frock + Pants + Dupatta), Dispatch Time: 3 to 4 weeks " },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));
  if(!product) return <p className="p-8">Product not found.</p>;

  return (
    <div className="p-8 flex flex-col lg:flex-row gap-8">
      <img src={product.image} alt={product.name} className="w-full lg:w-1/2 object-cover rounded"/>
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <button onClick={() => addToCart(product)} className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition w-48">Add to Cart</button>
      </div>
    </div>
  );
}
