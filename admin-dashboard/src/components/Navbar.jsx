import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "react-router-dom";
import {
  FiSun,
  FiMoon,
  FiBell,
  FiSearch,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

export default function Navbar({ onMenuClick }) {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(false);
  const [focus, setFocus] = useState(false);

  const dropdownRef = useRef();
  const notifyRef = useRef();
  const location = useLocation();

  const titles = { "/": "Dashboard", "/users": "Users", "/settings": "Settings" };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
      if (notifyRef.current && !notifyRef.current.contains(e.target)) setNotify(false);
    };
    const handleKey = (e) => {
      if (e.key === "Escape") { setOpen(false); setNotify(false); }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <header className="relative sticky top-0 z-50">
      {/* Floating Gradient Orbs */}
      <div className={`absolute top-0 left-1/4 w-32 h-32 rounded-full filter blur-3xl animate-blob pointer-events-none ${dark ? 'bg-purple-800/40' : 'bg-purple-500/40'} mix-blend-multiply`} />
      <div className={`absolute top-10 right-1/4 w-40 h-40 rounded-full filter blur-3xl animate-blob animation-delay-2000 pointer-events-none ${dark ? 'bg-pink-800/30' : 'bg-pink-400/30'} mix-blend-multiply`} />
      <div className={`absolute top-1/3 left-1/2 w-28 h-28 rounded-full filter blur-3xl animate-blob animation-delay-4000 pointer-events-none ${dark ? 'bg-orange-800/30' : 'bg-orange-300/30'} mix-blend-multiply`} />

      {/* Floating Particles */}
      <Particles dark={dark} />

      {/* Navbar */}
      <div className="
        relative
        backdrop-blur-xl
        border border-white/20 dark:border-black/20
        shadow-lg
        px-6 py-3
        flex items-center justify-between
        rounded-b-3xl
        bg-gradient-to-r from-purple-500 via-pink-400 to-orange-300
        dark:from-purple-900 dark:via-pink-800 dark:to-orange-900
        animate-gradient
      ">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-transform hover:scale-105"
          >
            <FiMenu size={22} />
          </button>
          <h1 className="text-lg font-semibold tracking-wide text-gray-900 dark:text-white">
            {titles[location.pathname] || "Dashboard"}
          </h1>
        </div>

        {/* Search */}
        <div className="flex-1 md:flex md:items-center md:justify-center">
          <div className={`hidden md:flex items-center transition-[width] duration-300 ${focus ? "w-96" : "w-64"}`}>
            <div className="relative w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder="Search anything..."
                className="
                  w-full pl-11 pr-4 py-2.5
                  rounded-2xl
                  bg-white/80 dark:bg-[#111]/80
                  border border-black/10 dark:border-white/10
                  text-sm text-gray-800 dark:text-gray-200
                  focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                  focus:shadow-md
                  transition
                "
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="
              p-2.5 rounded-full
              bg-gradient-to-tr from-black to-gray-700
              dark:from-white dark:to-gray-200
              text-white dark:text-black
              shadow-lg
              hover:scale-110 hover:rotate-12
              transition-transform duration-300 ease-out
            "
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Notifications */}
          <div className="relative" ref={notifyRef}>
            <button
              onClick={() => setNotify(!notify)}
              className="relative p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-transform hover:scale-105"
            >
              <FiBell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>
            {notify && <NotificationPanel dark={dark} />}
          </div>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 p-1.5 pr-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-transform hover:scale-105"
            >
              <img
                src="https://i.pravatar.cc/40"
                className="w-9 h-9 rounded-full ring-2 ring-black/10 dark:ring-white/10"
                alt="user"
              />
              <FiChevronDown className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
            </button>

            {open && (
              <div className="
                absolute right-0 mt-3 w-48
                bg-white/90 dark:bg-[#111]/90
                rounded-2xl shadow-2xl
                border border-black/10 dark:border-white/10
                overflow-hidden
                animate-slideDownFade
                backdrop-blur-md
              ">
                <MenuItem text="Profile" />
                <MenuItem text="Settings" />
                <div className="h-px bg-black/10 dark:bg-white/10" />
                <MenuItem text="Logout" danger />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(30px,-15px) scale(1.1); }
          66% { transform: translate(-25px,10px) scale(0.9); }
          100% { transform: translate(0px,0px) scale(1); }
        }
        .animate-blob { animation: blob 12s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes slideDownFade {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDownFade { animation: slideDownFade 0.3s ease forwards; }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradientShift 15s ease infinite; }

        @keyframes particleMove {
          0% { transform: translateY(0) translateX(0); opacity: 0.8; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
          100% { transform: translateY(0) translateX(0); opacity: 0.8; }
        }
        .animate-particle { animation: particleMove 6s infinite ease-in-out; }
      `}</style>
    </header>
  );
}

// Menu Item
function MenuItem({ text, danger }) {
  return (
    <button
      className={`w-full px-4 py-3 text-sm text-left hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-400 transition-transform duration-200 ${danger ? "text-red-500" : "text-gray-700 dark:text-gray-200"}`}
    >
      {text}
    </button>
  );
}

// Notifications
function NotificationPanel({ dark }) {
  return (
    <div className={`absolute right-0 mt-3 w-80 max-h-64 overflow-y-auto rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 p-4 animate-slideDownFade backdrop-blur-md bg-gradient-to-b from-white/60 to-white/30 dark:from-black/60 dark:to-black/30`}>
      <h3 className={`font-semibold mb-3 ${dark ? "text-gray-200" : "text-gray-800"}`}>Notifications</h3>
      <div className="space-y-2 text-sm">
        <div className="p-3 rounded-xl hover:scale-105 transition-transform bg-green-200 text-white dark:bg-green-700">
          New user registered
        </div>
        <div className="p-3 rounded-xl hover:scale-105 transition-transform bg-green-200 dark:bg-white/10 text-gray-800 dark:text-gray-200">
          Server updated successfully
        </div>
        <div className="p-3 rounded-xl hover:scale-105 transition-transform bg-green-200 dark:bg-white/10 text-gray-800 dark:text-gray-200">
          Weekly report generated
        </div>
      </div>
    </div>
  );
}

// Particles
function Particles({ dark }) {
  const particles = Array.from({ length: 15 });
  return (
    <>
      {particles.map((_, idx) => (
        <div
          key={idx}
          className={`absolute w-1.5 h-1.5 rounded-full ${dark ? 'bg-white/70' : 'bg-black/70'} animate-particle`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            boxShadow: `0 0 ${3 + Math.random() * 4}px ${dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'}`
          }}
        />
      ))}
    </>
  );
}
