import React from "react";

import Card from "react-bootstrap/Card";

const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];

const Budget = () => (
    <div class = "card">
        <div><h3>Budget</h3></div>
  <ul>
    {todos.map(task => (
      <li key={task}>{task}</li>
    ))}
  </ul>
  </div>
);

export default Budget;