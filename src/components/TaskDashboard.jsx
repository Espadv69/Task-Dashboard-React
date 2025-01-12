import { useState, useEffect } from 'react'

export const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]) // State for tasks
  const [filter, setFilter] = useState('all') // State for filter

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

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}
