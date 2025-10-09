import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  // Login form states
  const [email, setEmail] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  // Password generator states
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // Password generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*!{}[]~`";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // Update background color
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  // Handle login form submit
  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${passwordLogin}`);
  };

  // Color options
  const colors = [
    ["purple", "from-purple-500 to-indigo-500", "ring-purple-300"],
    ["pink", "from-pink-500 to-purple-500", "ring-pink-300"],
    ["teal", "from-teal-500 to-emerald-500", "ring-teal-300"],
    ["red", "from-red-500 to-pink-600", "ring-red-300"],
    ["blue", "from-blue-500 to-indigo-600", "ring-blue-300"],
    ["green", "from-green-400 to-lime-500", "ring-green-300"],
    ["yellow", "from-yellow-400 to-amber-500", "ring-yellow-300"],
    ["gray", "from-gray-500 to-gray-800", "ring-gray-500"],
  ];

  return (
    <>
      {/* Login Form with Transparent Flower Background */}
      <div className="w-full h-screen flex justify-center items-center bg-cover bg-center">
        <div className="w-full max-w-md mx-auto p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/30 shadow-lg">
          <h1 className="text-3xl font-semibold text-white text-center mb-6">Login</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-black border borderwhite/40 hover:bg-white/30 shadow-lg transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Password Generator + Card Section */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 mt-8 px-6">
        {/* Password Generator */}
        <div className="w-full max-w-md shadow-md rounded-lg px-4 py-6 text-orange-500 bg-black/30 backdrop-blur-md border border-white/20">
          <h1 className="text-white text-center text-2xl font-semibold mb-4">Password Generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              className="outline-none w-full py-1 px-3 bg-transparent text-white placeholder-white"
              placeholder="password"
            />
            <button
              onClick={() => navigator.clipboard.writeText(password)}
              className="outline-none bg-transparent text-black px-5 py-0.5 shrink-0 border border-white/40 rounded-lg hover:bg-white/10 transition"
            >
              Copy
            </button>
          </div>

          <div className="flex flex-wrap justify-between items-center text-sm gap-4">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label className="text-white">Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" className="text-white">
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput" className="text-white">
                Characters
              </label>
            </div>
          </div>
        </div>

        {/* Card Section with Image */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-7 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 shadow-lg w-fit">
          <div className="w-48 h-48">
            <img
              src="https://images.pexels.com/photos/2041631/pexels-photo-2041631.jpeg"
              alt="React Card"
              className="w-full h-full object-cover rounded-md shadow-xl"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-medium text-white">React.js + Vite</span>
            <span className="font-medium text-sky-500">Tailwind CSS</span>
            <span className="flex gap-2 font-medium text-gray-400">
              <span>No. 4</span> · <span>2025</span>
            </span>
          </div>
        </div>
      </div>

      {/* Fixed Color Buttons (Vertical Column Bottom-Right) */}
      <div className="fixed bottom-12 right-4 flex flex-col gap-3 px-2">
        <div className="flex flex-col gap-3 shadow-lg bg-white/80 backdrop-blur-md p-4 rounded-2xl">
          {colors.map(([c, gradient, ring]) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`px-4 py-2 rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 bg-gradient-to-r ${gradient} ${
                color === c ? `ring-4 ${ring}` : ""
              }`}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
