import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false }
  ]);

  const handleComplete = (id) => {
    const updated = todos.map((item) =>
      item.id === id ? { ...item, completed: true } : item
    );
    setTodos(updated);
  };

  return (
    <div id="main">
      <h1>Todo List</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
