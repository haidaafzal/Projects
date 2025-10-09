import React, { useState } from "react";

const projects = [
  { id: 1, category: "Web", title: "Portfolio Website", img: "https://images.pexels.com/photos/33514898/pexels-photo-33514898.jpeg" },
  { id: 2, category: "Mobile", title: "Mobile App UI", img: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" },
  { id: 3, category: "Design", title: "UI Mockup", img: "https://media.istockphoto.com/id/1268172253/photo/website-designer-creative-planning-phone-app-development-template-layout-framework-wireframe.jpg?s=1024x1024&w=is&k=20&c=KuV1kq0px626-LZmprJ_u-cQehhNqFI7l5VMv4pzxrA=" },
];

function Portfolio() {
  const [active, setActive] = useState("All");
  const [modal, setModal] = useState(null);

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="relative w-full min-h-screen py-16 text-center text-white flex flex-col items-center justify-start">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg')" }}
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <h2 className="text-4xl font-bold mb-10">Our Projects</h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap z-10">
        {["All", "Web", "Mobile", "Design"].map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              active === cat ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20 z-10">
        {filtered.map(project => (
          <div
            key={project.id}
            onClick={() => setModal(project)}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setModal(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-xl p-6 max-w-lg w-full text-center transform transition-transform duration-300 scale-95 animate-fadeIn"
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500 text-xl font-bold"
              aria-label="Close modal"
            >
              ✖
            </button>
            <img src={modal.img} alt={modal.title} className="w-full rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{modal.title}</h3>
            <p className="text-gray-600">Detailed info about {modal.title} project...</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
