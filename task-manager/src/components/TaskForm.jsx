import { useState } from "react";

const emptyTask = { user: "", title: "", details: "", deadline: "", priority: "" };

export default function TaskForm({ users, addTask }) {
  const [taskForm, setTaskForm] = useState(emptyTask);

  const handleAdd = () => {
    if (Object.values(taskForm).some(v => !v)) return alert("Fill all fields");
    addTask(taskForm);
    setTaskForm(emptyTask);
  };

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Add Task</h2>

      {users.length === 0 ? (
        <p className="text-red-500 text-sm sm:text-base">Add at least one user first</p>
      ) : (
        <>
          <select
            className="border p-2 mb-2 w-full rounded text-sm sm:text-base"
            value={taskForm.user}
            onChange={e => setTaskForm({ ...taskForm, user: e.target.value })}
          >
            <option value="">Select User</option>
            {users.map(u => (
              <option key={u.id} value={u.name}>{u.name}</option>
            ))}
          </select>

          <input
            className="border p-2 mb-2 w-full rounded text-sm sm:text-base"
            placeholder="Task Title"
            value={taskForm.title}
            onChange={e => setTaskForm({ ...taskForm, title: e.target.value })}
          />

          <textarea
            className="border p-2 mb-2 w-full rounded resize-none h-20 sm:h-24 lg:h-28 text-sm sm:text-base"
            placeholder="Details"
            value={taskForm.details}
            onChange={e => setTaskForm({ ...taskForm, details: e.target.value })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
            <input
              type="date"
              className="border p-2 w-full rounded text-sm sm:text-base"
              value={taskForm.deadline}
              onChange={e => setTaskForm({ ...taskForm, deadline: e.target.value })}
            />
            <select
              className="border p-2 w-full rounded text-sm sm:text-base"
              value={taskForm.priority}
              onChange={e => setTaskForm({ ...taskForm, priority: e.target.value })}
            >
              <option value="">Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 sm:p-3 rounded w-full text-sm sm:text-base font-medium transition-colors"
            onClick={handleAdd}
          >
            Add Task
          </button>
        </>
      )}
    </div>
  );
}