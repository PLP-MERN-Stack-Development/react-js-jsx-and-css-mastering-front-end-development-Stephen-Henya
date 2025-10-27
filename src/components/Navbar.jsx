import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

export default function Navbar() {
  const { theme, toggleTheme, page, setPage } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">PLP Task Manager</h1>
        <div className="flex items-center gap-3">
          <Button
            variant={page === "home" ? "primary" : "secondary"}
            size="sm"
            onClick={() => setPage("home")}
          >
            Home
          </Button>
    
          <Button
            variant={page === "api" ? "primary" : "secondary"}
            size="sm"
            onClick={() => setPage("api")}
          >
            API Data
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
            >
            <span
              className={`absolute transition-transform duration-500 ${
              theme === "dark" ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              ☀️
            </span>
            <span
              className={`absolute transition-transform duration-500 ${
              theme === "dark" ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
              }`}
            >
              🌙
            </span>
          </Button>

        </div>
      </div>
    </nav>
  );
}
