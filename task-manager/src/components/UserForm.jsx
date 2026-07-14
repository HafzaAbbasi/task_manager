import { useState } from "react";

const emptyUser = { name: "", email: "", designation: "", description: "", profession: "" };

export default function UserForm({ addUser }) {
  const [userForm, setUserForm] = useState(emptyUser);

  const handleAdd = () => {
    if (Object.values(userForm).some(v => !v)) return alert("Fill all fields");
    addUser(userForm);
    setUserForm(emptyUser);
  };

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Add User</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
        <input
          className="border p-2 rounded w-full text-sm sm:text-base"
          placeholder="Name"
          value={userForm.name}
          onChange={e => setUserForm({ ...userForm, name: e.target.value })}
        />
        <input
          className="border p-2 rounded w-full text-sm sm:text-base"
          placeholder="Email"
          value={userForm.email}
          onChange={e => setUserForm({ ...userForm, email: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
        <input
          className="border p-2 rounded w-full text-sm sm:text-base"
          placeholder="Designation"
          value={userForm.designation}
          onChange={e => setUserForm({ ...userForm, designation: e.target.value })}
        />
        <input
          className="border p-2 rounded w-full text-sm sm:text-base"
          placeholder="Profession"
          value={userForm.profession}
          onChange={e => setUserForm({ ...userForm, profession: e.target.value })}
        />
      </div>

      <textarea
        className="border p-2 mb-3 w-full text-sm sm:text-base rounded resize-none h-20 sm:h-24 lg:h-28"
        placeholder="Description"
        value={userForm.description}
        onChange={e => setUserForm({ ...userForm, description: e.target.value })}
      />

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 sm:p-3 rounded w-full text-sm sm:text-base font-medium transition-colors"
        onClick={handleAdd}
      >
        Add User
      </button>
    </div>
  );
}