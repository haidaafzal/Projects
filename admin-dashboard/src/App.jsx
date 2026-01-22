import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-200 dark:bg-black text-black dark:text-white">
        <Sidebar />

        <div className="flex-1 flex flex-col">
           <Navbar className="border-b border-black dark:border-white" />

          <main className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
