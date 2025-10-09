import { useState } from "react";
import "./App.css"; // CSS import

function Chai() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">🍵 Welcome to Chai World 🌿</h2>
        <p className="text">Sign in and enjoy your perfect cup of Chai</p>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Apna naam likho..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email likho..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Apna number likho..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        {/* Output */}
        {(name || email || number) && (
          <div className="output">
            <p>Welcome, {name || "Guest"}!</p>
            <p>Email: {email || "Not provided"}</p>
            <p>Number: {number || "Not provided"}</p>
            <p>Chai ready hai ☕</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chai;
