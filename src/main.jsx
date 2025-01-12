import React from 'react'
import ReactDOM from 'react-dom/client'

import { TaskDashboard } from './components/TaskDashboard.jsx'
import './components/css/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <TaskDashboard />
  </React.StrictMode>
)
