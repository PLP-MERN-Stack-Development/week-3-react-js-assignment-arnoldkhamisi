import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../utils/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex flex-col sm:flex-row justify-between items-center transition-colors duration-300">
      <span className="font-bold text-xl mb-2 sm:mb-0">MyApp</span>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline transition">Home</Link>
        <Link to="/about" className="hover:underline transition">About</Link>
        <Link to="/posts" className="hover:underline transition">Posts</Link>
        <button
          onClick={toggleTheme}
          className="ml-4 px-2 py-1 rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;