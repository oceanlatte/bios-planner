import React from "react";

const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];

const Todo = () => (
  <ul>
    {todos.map(task => (
      <li key={task}>{task}</li>
    ))}
  </ul>
);

export default Todo;