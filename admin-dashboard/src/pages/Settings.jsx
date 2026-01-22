import { useState } from "react";
import { FaUser, FaBell, FaLock, FaPalette } from "react-icons/fa";

export default function Settings() {
  const [activeCard, setActiveCard] = useState(null);

  const settings = [
    {
      title: "Profile",
      desc: "Update your name, email, and profile picture.",
      icon: <FaUser />,
      gradient: "from-purple-500 to-pink-500",
      details:
        "Change your profile picture, update your email and personal info here.",
    },
    {
      title: "Notifications",
      desc: "Manage notification preferences and alerts.",
      icon: <FaBell />,
      gradient: "from-yellow-400 to-orange-400",
      badge: "New",
      details:
        "Enable or disable notifications for email, SMS, and app alerts.",
    },
    {
      title: "Security",
      desc: "Change password and enable two-factor authentication.",
      icon: <FaLock />,
      gradient: "from-red-500 to-pink-600",
      details: "Set a strong password, manage 2FA, and review active sessions.",
    },
    {
      title: "Appearance",
      desc: "Customize theme colors and layout.",
      icon: <FaPalette />,
      gradient: "from-blue-400 to-indigo-500",
      details: "Adjust theme colors and layout preferences.",
    },
  ];

  return (
    <div className="relative p-10 min-h rounded-xl bg-gray-50 text-gray-900 overflow-hidden">
      {/* Floating Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 opacity-20 animate-float-slow top-10 left-10"></div>
        <div className="absolute w-60 h-60 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 opacity-20 animate-float-slow top-64 right-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 opacity-15 animate-float-slow top-40 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Settings
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Personalize your dashboard experience with style.
        </p>
      </div>

      {/* Settings Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {settings.map((item) => (
          <div
            key={item.title}
            onClick={() => setActiveCard(item.title)}
            className="relative p-6 rounded-2xl shadow-lg bg-white cursor-pointer overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl group perspective"
          >
            {/* Gradient Circle */}
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-50 animate-pulse-slow`}
            ></div>

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md text-2xl text-gray-800 mb-5 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
              {item.icon}
            </div>

            {/* Badge */}
            {item.badge && (
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}

            {/* Title */}
            <h2
              className={`text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:scale-105`}
            >
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm">{item.desc}</p>

            {/* Hover underline effect */}
            <span
              className={`absolute bottom-0 left-0 w-0 h-1 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-full`}
            ></span>
          </div>
        ))}
      </div>

      {/* Active Card Detail Panel */}
      {activeCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-30"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="bg-white w-96 p-8 shadow-2xl h-full overflow-auto transform transition-transform duration-500"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-2xl font-bold mb-4">{activeCard}</h2>
            <p className="text-gray-600">
              {settings.find((s) => s.title === activeCard)?.details}
            </p>
            <button
              onClick={() => setActiveCard(null)}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

        .perspective { perspective: 1000px; }
      `}</style>
    </div>
  );
}
