import React, { useState, useMemo } from "react";
import { FaEllipsisV } from "react-icons/fa";

export default function AdsTable() {
  const [ads, setAds] = useState([
    { id: 1, name: "Lorem Ipsum Sit Omet", status: "Pending", engagement: 1400 },
    { id: 2, name: "Lorem", status: "Live", engagement: 12500 },
    { id: 3, name: "Lorem Ipsum", status: "Pending", engagement: 37500 },
    { id: 4, name: "Lorem Ipsum Sit Omet", status: "Ended", engagement: 1100000 },
    { id: 5, name: "Lorem Ipsum Sit Omet", status: "Pending", engagement: 2400 },
    { id: 6, name: "Lorem Ipsum Sit Omet", status: "Live", engagement: 1100000 },
    { id: 7, name: "Lorem Ipsum Sit Omet", status: "Pending", engagement: 1100000 },
    { id: 8, name: "Lorem", status: "Live", engagement: 2400 },
    { id: 9, name: "Lorem", status: "Live", engagement: 2400 },
    { id: 10, name: "Lorem Ipsum Sit Omet", status: "Live", engagement: 1300000 },
    { id: 11, name: "Dolor Sit", status: "Pending", engagement: 800 },
    { id: 12, name: "Ad Campaign X", status: "Ended", engagement: 21000 },
  ]);

  const [search] = useState("");
  const [filterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  const [page, setPage] = useState(1);
  const [showMenu, setShowMenu] = useState(null);

  const itemsPerPage = 5;

  // ✅ Filter, Search & Sort
  const filteredAds = useMemo(() => {
    let result = [...ads];
    if (search.trim()) {
      result = result.filter((ad) =>
        ad.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filterStatus !== "All") {
      result = result.filter((ad) => ad.status === filterStatus);
    }
    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "engagement") {
      result.sort((a, b) => b.engagement - a.engagement);
    }
    return result;
  }, [ads, search, filterStatus, sortBy]);

  // ✅ Pagination
  const totalPages = Math.ceil(filteredAds.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentAds = filteredAds.slice(startIndex, startIndex + itemsPerPage);

  // ✅ Actions
  const deleteAd = (id) => {
    setAds((prev) => prev.filter((ad) => ad.id !== id));
    setShowMenu(null);
  };

  const editAd = (id) => {
    const newName = prompt("Enter new campaign name:");
    if (newName) {
      setAds((prev) =>
        prev.map((ad) => (ad.id === id ? { ...ad, name: newName } : ad))
      );
    }
    setShowMenu(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Live":
        return "bg-green-100 text-green-700";
      case "Ended":
        return "bg-red-100 text-red-700";
      default:
        return "";
    }
  };

  return (
    <div>
      {/* 🔹 Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-3">
        <h2 className="text-lg font-semibold">Photo Ads</h2>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Create an Ad
        </button>
      </div>

      {/* 🔹 Table Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-t border-gray-200">
            {/* ✅ Proper Table Header */}
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-semibold text-gray-700">Campaign Name</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Engagement</th>
                <th className="py-3 px-4 font-semibold text-right text-gray-700">
                  Action
                </th>
              </tr>
            </thead>

            {/* ✅ Table Body */}
            <tbody>
              {currentAds.length > 0 ? (
                currentAds.map((ad) => (
                  <tr
                    key={ad.id}
                    className="border-b hover:bg-gray-50 transition text-gray-700"
                  >
                    <td className="py-3 px-4">{ad.name}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
                          ad.status
                        )}`}
                      >
                        {ad.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {ad.engagement >= 1000
                        ? `${(ad.engagement / 1000).toFixed(1)}k`
                        : ad.engagement}
                    </td>

                    {/* ✅ Inline 3-dot menu */}
                    <td className="py-3 px-4 text-right relative">
                      <div className="flex justify-end items-center">
                        <button
                          className="text-gray-500 hover:text-gray-700 text-lg"
                          onClick={() =>
                            setShowMenu(showMenu === ad.id ? null : ad.id)
                          }
                        >
                          <FaEllipsisV />
                        </button>

                        {showMenu === ad.id && (
                          <div className="absolute right-0 top-full mt-2 bg-white border shadow-md rounded-md w-32 z-10">
                            <button
                              onClick={() => editAd(ad.id)}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              ✏️ Edit
                            </button>
                            <button
                              onClick={() => deleteAd(ad.id)}
                              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50"
                            >
                              🗑 Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No ads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 🔹 Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className={`px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>

          <span className="text-gray-500 text-sm">
            Page {page} of {totalPages || 1}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className={`px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 ${
              page === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
