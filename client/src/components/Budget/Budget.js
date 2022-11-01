import React from "react";

const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];

const Budget = () => (
    <div className = "card">
        <h3 class="title">Budget</h3>
  <ul>
    {todos.map(task => (
      <li key={task}>{task}</li>
    ))}
  </ul>
  </div>
);

export default Budget;