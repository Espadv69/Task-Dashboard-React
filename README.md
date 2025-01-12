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

## Prerequisites
- [ ] Install [Node.js](https://nodejs.org/).
- [ ] Basic knowledge of React, JavaScript, and Vite.

---

## Steps to Complete the Project

### **Setup and Initialization**

- [ ] **Step 1**: Create a new Vite project.
  ```bash
  npm create vite@latest task-dashboard --template react
  cd task-dashboard
  npm install
  ```

- [ ] **Step 2**: Set up the project structure by creating the following files and folders:
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

### **Core Functionalities**

#### Task Management

- [ ] **Step 3**: Use `useState` in `TaskDashboard.jsx` to manage tasks.
  ```jsx
  const [tasks, setTasks] = useState([]);
  ```

- [ ] **Step 4**: Implement a `TaskForm` component for adding and editing tasks.

- [ ] **Step 5**: Build a `TaskList` component to display tasks, using `TaskItem` for each task.

- [ ] **Step 6**: Add filters (completed/pending) and counters for tasks in `TaskDashboard.jsx`.

#### Persistent Storage

- [ ] **Step 7**: Use `useEffect` to load tasks from `localStorage` on the first render.
  ```jsx
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);
  ```

- [ ] **Step 8**: Save tasks to `localStorage` whenever tasks are updated.
  ```jsx
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  ```

### **Notifications**

- [ ] **Step 9**: Simulate notifications in `mockNotifications.js`.
  ```javascript
  export const getMockNotification = () => ({
    id: Date.now(),
    message: "Don't forget to complete your tasks!",
  });
  ```

- [ ] **Step 10**: Use `useEffect` in `TaskDashboard.jsx` to simulate notifications at intervals.
  ```jsx
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) => [
        ...prev,
        { id: Date.now(), message: "New notification!" },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  ```

- [ ] **Step 11**: Create a `NotificationBar` component to display active notifications.

- [ ] **Step 12** (Optional): Use `useContext` to manage notification state globally.

### **Styling**

- [ ] **Step 13**: Add responsive design using CSS or TailwindCSS.

### **Final Steps**

- [ ] **Step 14**: Test the application to ensure all functionalities work correctly.
- [ ] **Step 15**: Refactor code for better modularity and readability.
- [ ] **Step 16**: Add comments and documentation for all components.
- [ ] **Step 17**: Deploy the project using a platform like Netlify or Vercel.

---
