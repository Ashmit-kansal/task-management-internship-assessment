const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      {tasks.length === 0 && <p className="text-gray-500">No tasks available.</p>}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 bg-gray-50 rounded shadow flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{task.name}</h3>
              <p className="text-gray-600">{task.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => onEdit(task)}
                className="px-3 py-1 text-sm bg-yellow-400 hover:bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
