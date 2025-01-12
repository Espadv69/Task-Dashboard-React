# Task Dashboard with React and Vite

This project is a medium-sized application built with React and Vite. The dashboard allows users to manage tasks (add, edit, delete, complete) and provides simulated notifications using React hooks like `useState`, `useEffect`, and optionally `useContext`.

---

## Features
- Add, edit, delete, and mark tasks as completed.
- Filter tasks by their status (completed or pending).
- Persistent task storage using `localStorage`.
- Simulated notifications that appear at intervals.
- Responsive design with basic CSS or TailwindCSS.

---

```plaintext
src/
  components/
    TaskDashboard.jsx
    TaskList.jsx
    TaskItem.jsx
    TaskForm.jsx
    NotificationBar.jsx
  context/
    NotificationContext.jsx
  utils/
    mockNotifications.js
```