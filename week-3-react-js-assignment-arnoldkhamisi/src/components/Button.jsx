import React from "react";

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

function Button({ children, variant = "primary", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded transition-colors duration-200 shadow-sm ${variantClasses[variant]} focus:outline-none focus:ring-2 focus:ring-blue-400`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;