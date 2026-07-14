import { useState } from "react";

export default function TaskTable({ tasks, users }) {
  const [searchTask, setSearchTask] = useState("");
  const [filterUser, setFilterUser] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const filtered = tasks
    .filter(t => t.title.toLowerCase().includes(searchTask.toLowerCase()))
    .filter(t => filterUser ? t.user === filterUser : true)
    .filter(t => filterPriority ? t.priority === filterPriority : true);

  const priorityColor = (priority) =>
    priority === "High" ? "text-red-600" :
    priority === "Medium" ? "text-yellow-600" : "text-green-600";

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Task List</h2>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <select
          className="border p-2 w-full rounded text-sm sm:text-base"
          value={filterUser}
          onChange={e => setFilterUser(e.target.value)}
        >
          <option value="">User</option>
          {users.map(u => <option key={u.id}>{u.name}</option>)}
        </select>

        <select
          className="border p-2 w-full rounded text-sm sm:text-base"
          value={filterPriority}
          onChange={e => setFilterPriority(e.target.value)}
        >
          <option value="">Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          className="border p-2 w-full rounded text-sm sm:text-base"
          placeholder="Search Task"
          value={searchTask}
          onChange={e => setSearchTask(e.target.value)}
        />
      </div>

      {/* Mobile: stacked cards (no horizontal scroll) */}
      <div className="sm:hidden space-y-3">
        {filtered.map(t => (
          <div key={t.id} className="border rounded-lg p-3 text-sm">
            <p className="font-semibold text-base mb-1">{t.title}</p>
            <p><span className="text-gray-500">User:</span> {t.user}</p>
            <p><span className="text-gray-500">Deadline:</span> {t.deadline}</p>
            <p>
              <span className="text-gray-500">Priority:</span>{" "}
              <span className={`font-bold ${priorityColor(t.priority)}`}>{t.priority}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Tablet & desktop: full table */}
      <table className="w-full text-sm sm:text-base hidden sm:table">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">User</th>
            <th className="p-2 text-left">Deadline</th>
            <th className="p-2 text-left">Priority</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="border-b">
              <td className="p-2">{t.title}</td>
              <td className="p-2">{t.user}</td>
              <td className="p-2">{t.deadline}</td>
              <td className={`p-2 font-bold ${priorityColor(t.priority)}`}>
                {t.priority}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && (
        <p className="text-gray-500 text-sm sm:text-base text-center mt-4">No tasks found</p>
      )}
    </div>
  );
}