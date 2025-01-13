import { useState } from 'react'

import { TaskForm } from './TaskForm.jsx'
import { TaskList } from './TaskList.jsx'

import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { generateId } from '../utils/generateId.js'

export const TaskDashboard = () => {
  const [tasks, setTasks] = useLocalStorage('tasks') // State for tasks
  const [filter, setFilter] = useState('all') // State for filter

  // Function to add a task
  const addTask = (taskName) => {
    const newTask = {
      id: generateId(),
      name: taskName,
      completed: false,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  // Function to toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  // Filter tasks based on filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })

  return (
    <main>
      <div className='filters-container'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      <TaskList
        filteredTasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />

      <TaskForm onAddTask={addTask} />
    </main>
  )
}
