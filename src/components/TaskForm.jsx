import { useState } from 'react'

export const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskName.trim() === '') return
    onAddTask(taskName)
    setTaskName('') // Limpia el input
  }

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input
        className='task-input'
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a task..."
      />
      <button className='task-button' type="submit">Add Task</button>
    </form>
  )
}
