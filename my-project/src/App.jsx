import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AdsTable from "./components/AdsTable";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <AdsTable />
        </main>
      </div>
    </div>
  );
}
