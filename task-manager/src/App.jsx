import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import TaskForm from "./components/TaskForm";
import UserTable from "./components/UserTable";
import TaskTable from "./components/TaskTable";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [userForm, setUserForm] = useState({
    name:"", email:"", designation:"", description:"", profession:""
  });

  const [taskForm, setTaskForm] = useState({
    user:"", title:"", details:"", deadline:"", priority:""
  });

  const [searchUser, setSearchUser] = useState("");
  const [searchTask, setSearchTask] = useState("");
  const [filterUser, setFilterUser] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const addUser = () => {
    if (Object.values(userForm).some(v => !v)) return alert("Fill all fields");
    setUsers([...users, { ...userForm, id: Date.now() }]);
    setUserForm({ name:"", email:"", designation:"", description:"", profession:"" });
  };
useEffect(() => {
  console.log("rerendering");
});
  const addTask = () => {
    if (Object.values(taskForm).some(v => !v)) return alert("Fill all fields");
    setTasks([...tasks, { ...taskForm, id: Date.now() }]);
    setTaskForm({ user:"", title:"", details:"", deadline:"", priority:"" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager App</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <UserForm userForm={userForm} setUserForm={setUserForm} addUser={addUser}/>
        <TaskForm users={users} taskForm={taskForm} setTaskForm={setTaskForm} addTask={addTask}/>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <UserTable users={users} searchUser={searchUser} setSearchUser={setSearchUser}/>
        <TaskTable
          tasks={tasks}
          users={users}
          searchTask={searchTask}
          setSearchTask={setSearchTask}
          filterUser={filterUser}
          setFilterUser={setFilterUser}
          filterPriority={filterPriority}
          setFilterPriority={setFilterPriority}
        />
      </div>
    </div>
  );
}
