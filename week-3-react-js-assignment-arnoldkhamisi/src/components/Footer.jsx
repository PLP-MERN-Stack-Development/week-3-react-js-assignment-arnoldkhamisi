import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 text-center py-4 mt-8 transition-colors duration-300">
      <div>
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
      <div className="mt-2">
        <a href="https://github.com/" className="underline mx-2 hover:text-blue-600 transition">GitHub</a>
        <a href="https://vercel.com/" className="underline mx-2 hover:text-blue-600 transition">Vercel</a>
      </div>
    </footer>
  );
}

export default Footer;