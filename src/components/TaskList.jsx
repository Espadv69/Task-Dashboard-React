export const TaskList = ({
  filteredTasks,
  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            className="task-checkbox"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.name}
          </span>
          <button
            className="task-button-checkbox"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
