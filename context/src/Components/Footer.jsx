import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-black/80 text-gray-300 py-10 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Socials */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">WebVista</h2>
          <p className="text-sm mb-4">
            Building modern and responsive web applications.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-400 transition transform hover:scale-110">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-600 transition transform hover:scale-110">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to get the latest updates.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg text-blue focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-black transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        © 2025 <span className="text-blue-400 font-semibold">MyWebsite</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
