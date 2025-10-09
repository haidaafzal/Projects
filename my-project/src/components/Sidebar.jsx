import React from "react";
import { FaImage, FaLink, FaVideo, FaComments, FaCalendarAlt } from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    { name: "Promoted Photo Ads", icon: <FaImage /> },
    { name: "Promoted Link Ads", icon: <FaLink /> },
    { name: "Promoted Video Ads", icon: <FaVideo /> },
    { name: "Promoted Discussion Ads", icon: <FaComments /> },
    { name: "Promoted Event Ads", icon: <FaCalendarAlt /> },
  ];

  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <h1 className="text-xl font-bold text-black-600 mb-5">SOILHEALTH</h1>
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center w-full text-left gap-3 px-3 py-2 rounded-lg 
              ${index === 0 ? "bg-black text-white font-medium" : "hover:bg-gray-100"}
            `}
            type="button"
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
