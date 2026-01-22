import { useState } from "react";
import { users as usersData } from "../data/users";
import Table from "../components/Table";

export default function Users() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 4;

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(start, start + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6 p-6">
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search users by name, email, or role..."
        className="border border-gray-500 px-4 py-2 rounded-xl w-full max-w-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* TABLE */}
      {paginatedUsers.length > 0 ? (
        <Table users={paginatedUsers} />
      ) : (
        <p className="text-gray-500">No matching users found.</p>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex gap-2 flex-wrap">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-xl transition ${
                page === i + 1
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
