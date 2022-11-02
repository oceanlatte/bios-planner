import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

import { useQuery } from "@apollo/client";
import { QUERY_TODOS } from "../utils/queries";

function Daily() {
  const { data: todoData } = useQuery(QUERY_TODOS);

  const todoList = todoData ? todoData.todos : [];

  let daily = [];
  let names = [];

  if (todoList.length) {
    Object.getOwnPropertyNames(todoList).forEach((val) => {
      if (todoList[val].recurrence === "daily") {
        daily.push(todoList[val].todoName);
      }
    });
    console.log("DAILY todos ONLY", daily);

    // const newList = Object.getOwnPropertyNames(todoList).forEach((val) => {
    //   names.push(todoList[val].todoName);
    // });
  }
  // console.log(names);
  
  return (
    <div>
      <h2 className="header-block title">Daily</h2>
    
      <div className="container">
        <Budget />
        <Todo 
        todoNames={daily}/>
      </div>

    </div>
  )
};

export default Daily;