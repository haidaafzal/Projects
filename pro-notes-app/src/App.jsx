import React, { useState, useEffect } from "react";
import {
  FaPlus,
  FaTrash,
  FaEdit,
  FaMoon,
  FaSun,
  FaDownload,
  FaUpload,
  FaThumbtack,
} from "react-icons/fa";
import jsPDF from "jspdf";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Add / Update
  const handleSave = () => {
    if (!text.trim()) return;
    if (editingIndex !== null) {
      const updated = [...notes];
      updated[editingIndex].text = text;
      setNotes(updated);
      setEditingIndex(null);
    } else {
      setNotes([{ text, pinned: false }, ...notes]);
    }
    setText("");
  };

  // Delete
  const handleDelete = (i) => {
    setNotes(notes.filter((_, idx) => idx !== i));
  };

  // Edit
  const handleEdit = (i) => {
    setText(notes[i].text);
    setEditingIndex(i);
  };

  // Pin / Unpin
  const handlePin = (i) => {
    const updated = [...notes];
    updated[i].pinned = !updated[i].pinned;
    // Reorder so pinned stay on top
    updated.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
    setNotes(updated);
  };

  // Export JSON
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(notes, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "notes.json";
    a.click();
  };

  // Import JSON
  const importJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (Array.isArray(data)) setNotes(data);
      } catch {
        alert("Invalid JSON");
      }
    };
    reader.readAsText(file);
  };

  // Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("My Notes", 10, 10);
    notes.forEach((n, i) => {
      doc.text(`${i + 1}. ${n.text}${n.pinned ? " 📌" : ""}`, 10, 20 + i * 10);
    });
    doc.save("notes.pdf");
  };

  return (
    <div className="min-h-screen p-8 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl rounded-3xl p-8 shadow-2xl 
          bg-white/20 dark:bg-black/30 backdrop-blur-2xl 
          border border-white/30 dark:border-gray-700/50"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl font-extrabold text-white drop-shadow-lg"
          >
            ✨ Glass Notes
          </motion.h1>
          <motion.button
            whileTap={{ rotate: 180, scale: 0.8 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-white/30 dark:bg-gray-800/60 shadow-lg hover:scale-110 transition"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-indigo-500 text-xl" />
            )}
          </motion.button>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your note..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/40 dark:bg-gray-700/50 backdrop-blur-lg border border-white/30 outline-none text-gray-900 dark:text-white shadow-inner"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:from-indigo-700 hover:to-purple-700"
          >
            {editingIndex !== null ? "Update" : "Add"}
          </motion.button>
        </div>

        {/* Notes List */}
        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence>
            {notes.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white/70 text-center col-span-2"
              >
                No notes yet ✍️
              </motion.p>
            ) : (
              notes.map((n, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-4 rounded-2xl backdrop-blur-xl border shadow-lg hover:shadow-2xl transition
                    ${n.pinned ? "bg-yellow-200/70 dark:bg-yellow-600/50 border-yellow-400" : "bg-white/30 dark:bg-gray-800/60 border-white/20 dark:border-gray-700/40"}
                  `}
                >
                  <p className="text-gray-900 dark:text-gray-100">{n.text}</p>
                  <div className="flex gap-3 mt-3">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handlePin(i)}
                      className={`p-2 rounded-lg shadow ${n.pinned ? "bg-yellow-500 text-white hover:bg-yellow-600" : "bg-gray-400/80 text-white hover:bg-gray-500/90"}`}
                    >
                      <FaThumbtack />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEdit(i)}
                      className="p-2 rounded-lg bg-yellow-400/80 text-white shadow hover:bg-yellow-500/90"
                    >
                      <FaEdit />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(i)}
                      className="p-2 rounded-lg bg-red-500/80 text-white shadow hover:bg-red-600/90"
                    >
                      <FaTrash />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Actions */}
        {notes.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <button
              onClick={exportJSON}
              className="px-4 py-2 rounded-xl bg-green-500/80 hover:bg-green-600 text-white flex items-center gap-2 shadow-lg"
            >
              <FaDownload /> Export JSON
            </button>
            <label className="px-4 py-2 rounded-xl bg-blue-500/80 hover:bg-blue-600 text-white flex items-center gap-2 shadow-lg cursor-pointer">
              <FaUpload /> Import JSON
              <input
                type="file"
                accept="application/json"
                onChange={importJSON}
                className="hidden"
              />
            </label>
            <button
              onClick={exportPDF}
              className="px-4 py-2 rounded-xl bg-pink-500/80 hover:bg-pink-600 text-white flex items-center gap-2 shadow-lg"
            >
              <FaDownload /> Export PDF
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
