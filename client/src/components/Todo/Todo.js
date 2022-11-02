import React from "react";

const Todo = (tName) => {
  // console.log('PROPS', tName);
  // console.log('PROPS . todoName:', tName.todoNames);

  let names = [];

  if (tName) {
    const newList = Object.getOwnPropertyNames(tName).forEach((val) => {
      names.push(tName[val]);
    });
  }

  console.log('NAMES ONLY, todo Params filter', names)

  return (
    <div className="card">
      <div>
        <h3 className="title">To Do List</h3>
        <ul className="todo-list-container">
          {tName && names.map((todo, i) => 
          <li key={i} className="todo-list">
            <input type="checkbox" className="checkbox" />
            <label for={i} name={todo} value={todo}>{todo}</label>
          </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
