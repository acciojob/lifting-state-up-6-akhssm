import React from "react";

const ToDoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} data-testid={`todo-${todo.id}`}>
          <span>{todo.text}</span>
          {!todo.completed && (
            <button
              data-testid={`complete-btn-${todo.id}`}
              onClick={() => handleComplete(todo.id)}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
