import React from "react";

function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-4 transition-transform duration-300 hover:scale-105">
      {title && <h2 className="text-lg font-semibold mb-2 dark:text-gray-100">{title}</h2>}
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </div>
  );
}

export default Card;