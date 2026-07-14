import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import TaskForm from "./components/TaskForm";
import UserTable from "./components/UserTable";
import TaskTable from "./components/TaskTable";
import "./index.css";

export default function App() {
  // Load initial state directly from localStorage (lazy initializer)
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist to localStorage whenever users/tasks change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addUser = (newUser) => {
    setUsers(prev => [...prev, { ...newUser, id: Date.now() }]);
  };

  const addTask = (newTask) => {
    setTasks(prev => [...prev, { ...newTask, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager App</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <UserForm addUser={addUser} />
        <TaskForm users={users} addTask={addTask} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <UserTable users={users} />
        <TaskTable tasks={tasks} users={users} />
      </div>
    </div>
  );
}