import React from "react";

const ToDoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li 
          key={todo.id} 
          data-testid={`todo-item-${todo.id}`} 
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
          {!todo.completed && (
            <button 
              onClick={() => handleComplete(todo.id)}
              data-testid={`complete-button-${todo.id}`}
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