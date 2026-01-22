import { useState, useRef, useEffect } from "react";
import { FiGlobe, FiMenu, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("homes");
  const [guests, setGuests] = useState(1);
  const [showGuests, setShowGuests] = useState(false);
  const ref = useRef(null);

  // Close guest dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowGuests(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky  top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/512px-Airbnb_Logo_Bélo.svg.png"
            alt="Airbnb"
            className="h-8 cursor-pointer"
          />

          {/* CENTER MENU */}
          <div className="hidden md:flex gap-12 items-center">

            {/* HOMES */}
            <div
              onClick={() => setActive("homes")}
              className={`relative cursor-pointer ${
                active === "homes" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
            >
              <div className="flex flex-row items-center gap-1">
                <span className="text-2xl">🏠</span>
                <span className="font-medium">Homes</span>
              </div>

              {active === "homes" && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-[2px] w-24 bg-black rounded transition-all" />
              )}
            </div>

            {/* EXPERIENCES */}
            <div
              onClick={() => setActive("experiences")}
              className={`relative cursor-pointer ${
                active === "experiences"
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <div className="flex flex-row items-center gap-1 relative">
                <span className="text-2xl">🎈</span>
                <span className="absolute -top-2 right-15 text-[10px] bg-gray-700 text-white px-1 rounded">
                  NEW
                </span>
                <span className="font-medium">Experiences</span>
              </div>

              {active === "experiences" && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-[2px] w-24 bg-black rounded transition-all" />
              )}
            </div>

            {/* SERVICES */}
            <div
              onClick={() => setActive("services")}
              className={`relative cursor-pointer ${
                active === "services"
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <div className="flex flex-row items-center gap-1 relative">
                <span className="text-2xl">🛎️ </span>
                <span className="absolute right-9 -top-2 -right-5 text-[10px] bg-gray-700 text-white px-1 rounded">
                  NEW
                 
                </span>
              <span className="font-medium">Services</span>
                    
              </div>
               {active === "services" && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2  h-[2px] w-28 bg-black rounded transition-all" />
              )}
         
            </div>
          </div>

          {/* RIGHT MENU */}
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-sm font-medium cursor-pointer">
              Become a host
            </span>

            {/* Globe */}
            <div className="flex items-center p-3 rounded-full  h-10 w-10 bg-gray-100 cursor-pointer">
              <FiGlobe size={18} />
            </div>

            {/* Menu + Avatar */}
            <div className="flex items-center gap-2 p-3 bg-gray-100 h-10 w-10 rounded-full  cursor-pointer">
              <FiMenu size={18} />
              
            </div>
          </div>
        </div>

        {/* ================= SEARCH BAR ================= */}
        <div className="flex justify-center mt-6">
          <div
            ref={ref}
            className="relative flex items-center bg-white rounded-full w-[95%] md:w-[750px] px-2 border border-gray-200 shadow-sm hover:shadow-md transition"
            onClick={() => setShowGuests(false)}
          >
            {/* WHERE */}
            <div className="flex-1 px-6 py-4 rounded-full hover:bg-gray-100 cursor-pointer">
              <p className="text-xs font-semibold">Where</p>
              <p className="text-sm text-gray-500">Search destinations</p>
            </div>

            <div className="h-8 w-px bg-gray-300" />

            {/* WHEN */}
            <div className="flex-1 px-6 py-4 rounded-full hover:bg-gray-100 cursor-pointer">
              <p className="text-xs font-semibold">When</p>
              <p className="text-sm text-gray-400">Add dates</p>
            </div>

            <div className="h-8 w-px bg-gray-300" />

            {/* WHO */}
            <div
              className="flex-1 px-6 py-4 rounded-full hover:bg-gray-100 cursor-pointer relative"
              onClick={(e) => {
                e.stopPropagation();
                setShowGuests(!showGuests);
              }}
            >
              <p className="text-xs font-semibold">Who</p>
              <p className="text-sm text-gray-400">
                {guests > 1 ? `${guests} guests` : "Add guests"}
              </p>

              {/* GUEST DROPDOWN */}
              <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute top-20 right-0 w-72 bg-white rounded-2xl p-4 shadow-xl transition-all duration-200 ${
                  showGuests
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Guests</p>
                    <p className="text-sm text-gray-500">Ages 13+</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 border rounded-full"
                    >
                      −
                    </button>

                    <span>{guests}</span>

                    <button
                      onClick={() => setGuests(guests + 1)}
                      className="w-8 h-8 border rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH */}
            <button className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center ml-2 hover:bg-red-600 transition">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
