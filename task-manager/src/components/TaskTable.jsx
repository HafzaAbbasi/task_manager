export default function TaskTable({
  tasks, users,
  searchTask, setSearchTask,
  filterUser, setFilterUser,
  filterPriority, setFilterPriority
}) {
  const filtered = tasks
    .filter(t => t.title.toLowerCase().includes(searchTask.toLowerCase()))
    .filter(t => filterUser ? t.user === filterUser : true)
    .filter(t => filterPriority ? t.priority === filterPriority : true);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>

      <div className="flex gap-2 mb-4">
        <select className="border p-2 w-full" onChange={e => setFilterUser(e.target.value)}>
          <option value="">User</option>
          {users.map(u => <option key={u.id}>{u.name}</option>)}
        </select>

        <select className="border p-2 w-full" onChange={e => setFilterPriority(e.target.value)}>
          <option value="">Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input className="border p-2 w-full"
          placeholder="Search Task"
          value={searchTask}
          onChange={e => setSearchTask(e.target.value)}
        />
      </div>

      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Title</th>
            <th>User</th>
            <th>Deadline</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="border-b">
              <td className="p-2">{t.title}</td>
              <td>{t.user}</td>
              <td>{t.deadline}</td>
              <td className={`font-bold ${
                t.priority === "High" ? "text-red-600" :
                t.priority === "Medium" ? "text-yellow-600" : "text-green-600"
              }`}>
                {t.priority}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
