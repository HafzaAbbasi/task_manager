import { useState } from "react";

export default function UserTable({ users }) {
  const [searchUser, setSearchUser] = useState("");

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">User List</h2>

      <input
        className="border p-2 mb-4 w-full rounded text-sm sm:text-base"
        placeholder="Search Users"
        value={searchUser}
        onChange={e => setSearchUser(e.target.value)}
      />

      {/* Mobile: stacked cards (no horizontal scroll) */}
      <div className="sm:hidden space-y-3">
        {filtered.map(u => (
          <div key={u.id} className="border rounded-lg p-3 text-sm">
            <p className="font-semibold text-base mb-1">{u.name}</p>
            <p><span className="text-gray-500">Email:</span> {u.email}</p>
            <p><span className="text-gray-500">Designation:</span> {u.designation}</p>
            <p><span className="text-gray-500">Profession:</span> {u.profession}</p>
          </div>
        ))}
      </div>

      {/* Tablet & desktop: full table */}
      <table className="w-full text-sm sm:text-base hidden sm:table">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Designation</th>
            <th className="p-2 text-left">Profession</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(u => (
            <tr key={u.id} className="border-b">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.designation}</td>
              <td className="p-2">{u.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && (
        <p className="text-gray-500 text-sm sm:text-base text-center mt-4">No users found</p>
      )}
    </div>
  );
}