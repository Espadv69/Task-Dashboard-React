export const TaskList = ({
  filteredTasks,
  toggleTaskCompletion,
  deleteTask
}) => {
  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <input
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
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
