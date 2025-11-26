import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: "10px"
            }}
          >
            {todo.text}
          </span>

          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
