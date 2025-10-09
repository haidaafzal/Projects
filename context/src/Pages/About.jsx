import React from "react";

// Skill data
const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "Tailwind CSS", level: 85, color: "bg-teal-400" },
  { name: "JavaScript", level: 80, color: "bg-yellow-400" },
];

// Timeline data
const timeline = [
  {
    year: "2023",
    description:
      "Started our journey by learning basics of web development and experimenting with small projects.",
  },
  {
    year: "2024",
    description:
      "Worked on client projects, improved React skills, and mastered Tailwind CSS for rapid UI building.",
  },
  {
    year: "2025",
    description:
      "Launched full-scale applications with modern UI/UX, integrating APIs and advanced JavaScript features.",
  },
];

function About() {
  return (
    <section id="about" className="w-full py-16 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center animate-fadeIn">
          <img
            src="https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg"
            alt="Team collaborating on web development"
            className="rounded-2xl shadow-lg w-full md:w-4/5"
          />
        </div>

        {/* Right Content */}
        <div className="animate-fadeIn">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">About Us</h2>
          <p className="mb-6">
            We are passionate about building modern, responsive, and engaging web
            experiences using <span className="text-blue-400">React</span> and{" "}
            <span className="text-blue-400">Tailwind CSS</span>.
          </p>

          {/* Skill Progress Bars */}
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <p className="text-sm mb-1">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`${skill.color} h-3 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-6 mt-16">
        <h3 className="text-3xl font-semibold text-center text-white mb-10 animate-fadeIn">
          Our Journey
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition animate-fadeIn"
            >
              <h4 className="text-xl font-bold text-blue-400 mb-2">{item.year}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
