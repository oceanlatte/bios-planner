import React from "react";

const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];

const Todo = () => (
  <div className="card">
    <div>
      <h3>To Do List:</h3>
    </div>
    <ul>

      {todos.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  </div>
);

export default Todo;
