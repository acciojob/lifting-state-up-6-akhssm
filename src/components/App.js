import React, { useState } from "react";
import "./../styles/App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedList);
  };

  return (
    <div id="main">
      <h1>Todo List</h1>
      <ToDoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
