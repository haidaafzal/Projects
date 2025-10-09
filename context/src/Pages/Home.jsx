import React from "react";
import { Typewriter } from "react-simple-typewriter"; // install: npm i react-simple-typewriter

function Home() {
  const handleScroll = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-screen h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg')", // ✅ Replace with your own image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Animated Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to{" "}
          <span className="text-blue-400">
            <Typewriter
              words={["MyWebsite", "Your Future", "Next Big Idea"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        {/* Sub Text */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fadeIn">
          Explore our modern React + Tailwind website, designed to provide a
          fast, responsive, and beautiful experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleScroll}
            className="px-8 py-4 bg-blue-500 text-black rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </button>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );s
}

export default Home;
