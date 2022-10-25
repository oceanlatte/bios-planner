import React from "react";

const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];

const TodoList = () => (
  <ul>
    {todos.map(task => (
      <li key={task}>{task}</li>
    ))}
  </ul>
);

export default TodoList;