# 📝 React Task Manager & Posts App

A modern, responsive React application built with Vite, React Router, and Tailwind CSS.  
This project demonstrates reusable component architecture, state management with hooks, theme switching (light/dark), API integration, and advanced styling.

---

## 🚀 Features

- **Reusable Components:** Button, Card, Navbar, Footer, Layout
- **Task Manager:** Add, complete, delete, and filter tasks (with localStorage persistence)
- **Theme Switcher:** Light/Dark mode using Tailwind's dark mode and React Context
- **API Integration:** Fetch and display posts from JSONPlaceholder with search and pagination
- **Responsive Design:** Works on mobile, tablet, and desktop
- **Custom Animations:** Smooth transitions and hover effects using Tailwind

---

## 📂 Project Structure

```
src/
  components/
    Button.jsx
    Card.jsx
    Footer.jsx
    Layout.jsx
    Navbar.jsx
    PostList.jsx
    TaskManager.jsx
  pages/
    About.jsx
    Home.jsx
    Posts.jsx
  utils/
    ThemeContext.js
    useLocalStorage.js
  App.jsx
  index.css
  main.jsx
tailwind.config.js
postcss.config.js
index.html
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```sh
git clone <https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-arnoldkhamisi.git>
cd my-task-app/my-react-app
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start the development server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 Main Components

- **TaskManager:** Manage your tasks with add, complete, delete, and filter features.
- **PostList:** Fetches and displays posts from JSONPlaceholder with search and pagination.
- **Theme Switcher:** Toggle between light and dark mode from the Navbar.
- **Reusable UI:** Button, Card, Navbar, Footer, Layout.

---

## 🌗 Theme Switching

- Click the "Light Mode"/"Dark Mode" button in the Navbar to toggle themes.
- Tailwind's dark mode is enabled via the `dark` class.

---

## 📦 Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)

---

## 📜 License

MIT

---

## ✨ Credits

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the public API.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.

---

Enjoy building and customizing your own React + Tailwind projects!