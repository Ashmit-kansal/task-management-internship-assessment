import tasks from "../data/tasks.js";

export const getTasks = (req, res) => {
  res.json(tasks);
};

export const createTask = (req, res) => {
  const { name, description } = req.body;
  const newTask = { id: Date.now(), name, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  task.name = name;
  task.description = description;
  res.json(task);
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });
  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });
};
