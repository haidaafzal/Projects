import React, { useState } from "react";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

function Services() {
  const [filter, setFilter] = useState("All");

  const services = [
    { id: 1, title: "Web Development", category: "Web", icon: <FaCode />, desc: "Modern and responsive websites with React & Tailwind." },
    { id: 2, title: "Mobile Apps", category: "Mobile", icon: <FaMobileAlt />, desc: "Cross-platform mobile applications with smooth UI." },
    { id: 3, title: "UI/UX Design", category: "Design", icon: <FaPaintBrush />, desc: "Creative designs for intuitive and engaging experiences." },
  ];

  const filteredServices =
    filter === "All" ? services : services.filter(s => s.category === filter);

  return (
    <section
      id="services"
      className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white max-w-6xl w-full">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Our Services</h2>
        <p className="text-lg text-gray-200 mb-8" data-aos="fade-up" data-aos-delay="100">
          From UI/UX design to full-stack development, we offer a wide range of services tailored to your needs.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-4 mb-10" data-aos="fade-up" data-aos-delay="200">
          {["All", "Web", "Mobile", "Design"].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg transition ${
                filter === tab ? "bg-blue-500 text-black" : "bg-gray-700 hover:bg-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="text-4xl text-blue-400 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
