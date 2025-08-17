import React, { useEffect, useState } from "react";

function Apipagination() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(res);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-2xl font-Manrope font-normal">Loading...</p>;
  if (error) return <p className="text-2xl text-red-500 font-Manrope font-normal">Error: {error}</p>;

  // Pagination logic
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = users.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="pt-10 overflow-x-scroll">
      <h2 className="text-2xl font-Manrope text-[#213F7D] mb-4">Dashboard - Users</h2>

      {/* Table */}
      <table className="border-collapse bg-[#ffffff] overflow-x-scroll w-full">
        <thead>
          <tr className="bg-gray-200 font-normal">
            <th className="border text-start p-2">ID</th>
            <th className="border text-start p-2">Name</th>
            <th className="border text-start p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="text-base font-Manrope p-2">{user.id}</td>
              <td className="text-base font-Manrope p-2">{user.name}</td>
              <td className="text-base font-Manrope p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Apipagination;
