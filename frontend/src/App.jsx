import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

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
      socket.emit('create task', jsonData.content);
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
      socket.emit('update task', jsonData.content);
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
      socket.emit('delete task', id);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {

    getTasks();

    socket.on('task created', (newTask) => {
      setTasks((prevTasks) => {
        // Verificar si la tarea ya existe
        if (!prevTasks.find((task) => task.id === newTask.id)) {
          return [...prevTasks, newTask];
        } else {
          return prevTasks;
        }
      });
      
    });

    socket.on('task updated', (updatedTask) => {
      setTasks((prevTasks) => prevTasks.map((task) => task.id === updatedTask.id ? updatedTask : task));
    });

    socket.on('task deleted', (id) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    });

  
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <TodoForm addTask={addTask} socket = {socket}/>
      <TodoList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
