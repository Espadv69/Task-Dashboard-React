// todo: continue
// import { generateId } from '../utils/generateId.js'

// // Function to add a task
// export const addTask = (taskName, setTasks) => {
//   const newTask = {
//     id: generateId(),
//     name: taskName,
//     completed: false,
//   }
//   setTasks((prevTasks) => [...prevTasks, newTask])
// }

// // Function to toggle task completion
// export const toggleTaskCompletion = (taskId, setTasks) => {
//   setTasks((prevTasks) =>
//     prevTasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     )
//   )
// }

// // Function to delete a task
// export const deleteTask = (taskId, setTasks) => {
//   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
// }

// // Filter tasks based on filter state
// export const filteredTasks = tasks.filter((task) => {
//   if (filter === 'completed') return task.completed
//   if (filter === 'pending') return !task.completed
//   return true
// })