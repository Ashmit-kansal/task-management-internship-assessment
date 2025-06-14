import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = async (task) => {
    if (taskToEdit) {
      await updateTask(taskToEdit.id, task);
      setTaskToEdit(null);
    } else {
      await createTask(task);
    }
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleEdit = (task) => setTaskToEdit(task);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">📝 Task Manager</h1>
        <TaskForm onSubmit={handleSubmit} taskToEdit={taskToEdit} />
        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
