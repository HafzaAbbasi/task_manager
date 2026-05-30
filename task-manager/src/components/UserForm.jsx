export default function UserForm({ userForm, setUserForm, addUser }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add User</h2>

      <input className="border p-2 mb-2 w-full"
        placeholder="Name"
        value={userForm.name}
        onChange={e => setUserForm({ ...userForm, name: e.target.value })}
      />

      <input className="border p-2 mb-2 w-full"
        placeholder="Email"
        value={userForm.email}
        onChange={e => setUserForm({ ...userForm, email: e.target.value })}
      />

      <input className="border p-2 mb-2 w-full"
        placeholder="Designation"
        value={userForm.designation}
        onChange={e => setUserForm({ ...userForm, designation: e.target.value })}
      />

      <textarea className="border p-2 mb-2 w-full"
        placeholder="Description"
        value={userForm.description}
        onChange={e => setUserForm({ ...userForm, description: e.target.value })}
      />

      <input className="border p-2 mb-2 w-full"
        placeholder="Profession"
        value={userForm.profession}
        onChange={e => setUserForm({ ...userForm, profession: e.target.value })}
      />

      <button className="bg-blue-500 text-white p-2 rounded w-full"
        onClick={addUser}>
        Add User
      </button>
    </div>
  );
}
