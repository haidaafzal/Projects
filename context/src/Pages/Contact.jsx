import React from "react";
import Footer from "../Components/Footer"; // ✅ Correct path

function ContactUs() {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white px-6">
      {/* Glassmorphism Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
          Contact Us / Login
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

    
    </section>
  );
}

export default ContactUs;
