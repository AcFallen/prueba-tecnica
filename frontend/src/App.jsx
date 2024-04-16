import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (task) => {
    try {
      const response = await fetch("http://localhost:3000/create-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: task }),
      });

      const jsonData = await response.json();
      setTasks([...tasks, jsonData.content]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/task-list");
      const jsonData = await response.json();
      setTasks(jsonData.content);
    } catch (err) {
      console.error(err.message);
    }
  };

  const checkTask = async (id) => {

    try {
      const response = await fetch(`http://localhost:3000/update-task/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: !tasks.find((task) => task.id === id).status,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      setTasks(tasks.map((task) => (task.id === id ? jsonData.content : task)));
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/delete-task/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
