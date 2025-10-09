import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      once: true,     // run animation only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
