import { use, useEffect } from "react";

export default function UserTable({ users, searchUser, setSearchUser }) {
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(searchUser.toLowerCase())
  );
  // useEffect(() => {
  //   console.log(searchUser);
  // });
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User List</h2>

      <input className="border p-2 mb-4 w-full"
        placeholder="Search Users"
        value={searchUser}
        onChange={e => setSearchUser(e.target.value)}
      />

      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(u => (
            <tr key={u.id} className="border-b">
              <td className="p-2">{u.name}</td>
              <td>{u.email}</td>
              <td>{u.designation}</td>
              <td>{u.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
