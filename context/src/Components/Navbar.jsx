import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
   
  ];

  const handleScrollTo = (path) => {
    if (path === "/portfolio") {
  
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <header
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">WebVista</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => link.scroll && handleScrollTo(link.path)}
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-black hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black/80 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center space-y-6 py-6">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => handleScrollTo(link.path)}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-blue-400 border-b border-blue-400 pb-1"
                        : "text-white hover:text-blue-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
