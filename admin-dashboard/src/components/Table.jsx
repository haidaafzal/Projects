export default function Table({ users }) {
  const firstLetterColors = [
    "text-red-500",
    "text-blue-500",
    "text-yellow-500",
    
    "text-pink-500",
  ];

  const roleStyles = {
    Admin: "bg-purple-100 text-purple-700 hover:bg-purple-200",
    User: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    Manager: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  };

  const formatName = (name) => {
    const randomColor =
      firstLetterColors[Math.floor(Math.random() * firstLetterColors.length)];
    return (
      <>
        <span className={`font-bold ${randomColor}`}>{name.charAt(0)}</span>
        <span className="text-gray-700">{name.slice(1)}</span>
      </>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-x-auto p-4">
      <table className="w-full text-sm min-w-[600px]">
        {/* HEADER */}
        <thead className="bg-gray-100 text-left shadow-sm">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" className="p-3 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-t transition-transform duration-300 cursor-pointer"
                style={{ perspective: "1000px" }}
                onMouseMove={(e) => {
                  const target = e.currentTarget;
                  const rect = target.getBoundingClientRect();
                  const x = e.clientX - rect.left; // mouse x relative to row
                  const y = e.clientY - rect.top; // mouse y relative to row
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateX = ((y - centerY) / centerY) * 5; // max 5deg
                  const rotateY = ((x - centerX) / centerX) * 5; // max 5deg

                  // Apply 3D tilt + scale to row
                  target.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

                  // Make email gradient "move" subtly with tilt
                  const emailSpan = target.querySelector(".animate-gradient");
                  if (emailSpan) {
                    const shiftX = (x - centerX) / centerX * 20; // max 20px
                    const shiftY = (y - centerY) / centerY * 20; // max 20px
                    emailSpan.style.backgroundPosition = `${50 + shiftX}% ${50 + shiftY}%`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg) scale(1)";
                  const emailSpan = e.currentTarget.querySelector(".animate-gradient");
                  if (emailSpan) {
                    emailSpan.style.backgroundPosition = "50% 50%";
                  }
                }}
              >
                {/* NAME */}
                <td className="p-3 font-medium">{formatName(user.name)}</td>

                {/* EMAIL */}
                <td className="p-3">
                  <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient cursor-pointer">
                    {user.email}
                  </span>
                </td>

                {/* ROLE */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition transform hover:scale-110 ${
                      roleStyles[user.role] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* GRADIENT ANIMATION */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 4s ease infinite;
            background-position: 50% 50%;
          }
        `}
      </style>
    </div>
  );
} 