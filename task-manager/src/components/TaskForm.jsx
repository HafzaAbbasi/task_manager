export default function TaskForm({ users, taskForm, setTaskForm, addTask }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add Task</h2>

      {users.length === 0 ? (
        <p className="text-red-500">Add at least one user first</p>
      ) : (
        <>
          <select className="border p-2 mb-2 w-full"
            value={taskForm.user}
            onChange={e => setTaskForm({ ...taskForm, user: e.target.value })}>
            <option value="">Select User</option>
            {users.map(u => (
              <option key={u.id} value={u.name}>{u.name}</option>
            ))}
          </select>

          <input className="border p-2 mb-2 w-full"
            placeholder="Task Title"
            value={taskForm.title}
            onChange={e => setTaskForm({ ...taskForm, title: e.target.value })}
          />

          <textarea className="border p-2 mb-2 w-full"
            placeholder="Details"
            value={taskForm.details}
            onChange={e => setTaskForm({ ...taskForm, details: e.target.value })}
          />

          <input type="date" className="border p-2 mb-2 w-full"
            value={taskForm.deadline}
            onChange={e => setTaskForm({ ...taskForm, deadline: e.target.value })}
          />

          <select className="border p-2 mb-2 w-full"
            value={taskForm.priority}
            onChange={e => setTaskForm({ ...taskForm, priority: e.target.value })}>
            <option value="">Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <button className="bg-blue-500 text-white p-2 rounded w-full"
            onClick={addTask}>
            Add Task
          </button>
        </>
      )}
    </div>
  );
}
