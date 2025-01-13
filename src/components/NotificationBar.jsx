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

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)]

      setNotifications((prevNotifications) => [
        ...prevNotifications,
        randomMessage,
      ])

      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])
}
