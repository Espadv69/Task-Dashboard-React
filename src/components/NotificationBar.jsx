import { useState, useEffect } from 'react'

export const NotificationBar = () => {
  const [notifications, setNotifications] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const messages = [
    'Welcome to the app!',
    'You have 5 pending tasks',
    'You have 1 completed task',
    'You have 10 pending tasks',
    'You have 2 completed tasks',
    'You have 15 pending tasks',
  ]
}
