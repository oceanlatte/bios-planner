import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TODOS } from "../../utils/queries";

const Todo = () => {
  const { data: todoData } = useQuery(QUERY_TODOS);

  const todoList = todoData ? todoData.todos : [];

  let daily = [];
  let names = [];

  if (todoList.length) {
    const dailyList = Object.getOwnPropertyNames(todoList).forEach((val) => {
      if (todoList[val].recurrence === "daily") {
        daily.push(todoList[val].todoName);
      }
    });
    console.log("DAILY todos ONLY", daily);

    const newList = Object.getOwnPropertyNames(todoList).forEach((val) => {
      names.push(todoList[val].todoName);
    });
  }
  console.log(names);

  return (
    <div className="card">
      <div>
        <h3 className="title">To Do List</h3>
        <ul className="todo-list-container">
          {todoList.length && names.map((todo, i) => 
          <li key={i} className="todo-list">
            <input type="checkbox" key={i} className="checkbox" />
            <label for={todo} name={todo} value={todo} > {todo}</label>
          </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
