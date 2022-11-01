import React, { useState } from "react";
// import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";
import AddTodos from "./AddTodo";
import AddBudgetTotal from "./AddBudget"

const Profile = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
    {showComponent ? <AddTodo /> : ""}
      <button onClick={() => setShowComponent(!showComponent)}>
        AddTodo
      </button>
      {showComponent ? <AddBudget /> : ""}
      <button onClick={() => setShowComponent(!showComponent)}>
        AddBudget
      </button>

      {/* {showComponent ? <AddTodos /> : ""}
      <button onClick={() => setShowComponent(!showComponent)}>
        AddTodo
      </button>
      {showComponent ? <AddBudgetTotal /> : ""}
      <button onClick={() => setShowComponent(!showComponent)}>
        AddBudget
      </button> */}

      <Budget />
      <Todo />
    </div>
  );
};

export default Profile;