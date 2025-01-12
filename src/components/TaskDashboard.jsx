import { useState, useEffect } from 'react'

export const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]) // State for tasks
  const [filter, setFilter] = useState('all') // State for filter

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (savedTasks) {
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
      prevTasks.map((task) => {
        task.id === taskId ? { ...task, completed: !task.completed } : task
      })
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
    <div>
      <h1>hello</h1>
    </div>
  )
}
