import { useState, useEffect } from 'react'

import { TaskForm } from './TaskForm.jsx'
import { TaskList } from './TaskList.jsx'

export const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]) // State for tasks
  const [filter, setFilter] = useState('all') // State for filter

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (savedTasks.length > 0) {
      setTasks(savedTasks)
    }
  }, [])

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Function to add a task
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
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
      {/* Filtro de tareas */}
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      {/* Lista de tareas */}
      <TaskList
        filteredTasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />

      {/* Agregar tarea */}
      <TaskForm onAddTask={addTask} />
    </main>
  )
}
