import { useState } from 'react'

import { NotificationBar } from './NotificationBar.jsx'
import { TaskForm } from './TaskForm.jsx'
import { TaskList } from './TaskList.jsx'

import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { generateId } from '../utils/generateId.js'

import './css/TaskDashboard.css'

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
      <h1 className="h1-title">Task Dashboard</h1>

      <div className="filters-container">
        <button className="btn-filters all" onClick={() => setFilter('all')}>
          All
        </button>
        <button
          className="btn-filters completed"
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          className="btn-filters pending"
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
      </div>

      <TaskList
        filteredTasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />

      <TaskForm onAddTask={addTask} />

      <NotificationBar tasks={tasks} />
    </main>
  )
}
