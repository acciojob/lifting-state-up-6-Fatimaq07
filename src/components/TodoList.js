import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}{" "}
          {todo.completed ? (
            <span style={{ color: "green" }}>(Completed)</span>
          ) : (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
