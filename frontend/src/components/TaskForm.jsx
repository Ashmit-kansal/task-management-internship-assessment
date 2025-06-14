import { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, taskToEdit }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {taskToEdit ? "Update" : "Add"} Task
      </button>
    </form>
  );
};

export default TaskForm;
