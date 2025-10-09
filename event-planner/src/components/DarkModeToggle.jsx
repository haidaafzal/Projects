import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("dark") === "true");

  useEffect(() => {
    if(dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("dark", dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded">
      {dark ? "Light" : "Dark"}
    </button>
  );
}
