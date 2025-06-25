import { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import Button from "./Button";

const FILTERS = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter(FILTERS[filter]);

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded shadow p-4">
      <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Task Manager</h2>
      <div className="flex mb-4">
        <input
          className="border rounded px-2 py-1 flex-1 mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex space-x-2 mb-4">
        {Object.keys(FILTERS).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between py-1 border-b"
          >
            <span
              className={`flex-1 cursor-pointer ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;