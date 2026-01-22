import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaCog,
  FaChevronLeft,
} from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { name: "Dashboard", to: "/", icon: <FaTachometerAlt /> },
    { name: "Users", to: "/users", icon: <FaUsers /> },
    { name: "Settings", to: "/settings", icon: <FaCog /> },
  ];

  return (
    <aside
      className={`hidden md:flex flex-col
      ${collapsed ? "w-20" : "w-64"}
      transition-all duration-300
      bg-gradient-to-b from-purple-600 via-pink-500 to-orange-400
      text-white shadow-2xl rounded-r-2xl overflow-hidden`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        {!collapsed && (
          <h1 className="text-xl font-extrabold tracking-wide">
            Admin
          </h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-white/20 transition"
        >
          <FaChevronLeft
            className={`transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-3 space-y-2 flex-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `group relative flex items-center
              ${collapsed ? "justify-center" : "gap-3"}
              p-3 rounded-xl
              transition-all duration-300
              hover:bg-white/20 hover:scale-105
              ${
                isActive
                  ? "bg-white/30 shadow-lg font-semibold"
                  : "text-white/80"
              }`
            }
          >
            {/* Icon */}
            <span className="text-lg">{link.icon}</span>

            {/* Text */}
            {!collapsed && (
              <span className="text-sm tracking-wide">
                {link.name}
              </span>
            )}

            {/* Tooltip (only when collapsed) */}
            {collapsed && (
              <span
                className="absolute left-full ml-3 px-3 py-1
                text-xs bg-black/80 text-white rounded-md
                opacity-0 group-hover:opacity-100
                pointer-events-none whitespace-nowrap
                transition"
              >
                {link.name}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="px-6 py-4 text-xs text-white/70">
          © 2026 Dashboard
        </div>
      )}
    </aside>
  );
}
