import React from "react";
// import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";
import AddTodos from "../components/AddTodo/AddTodo";
import AddBudgetTotal from "../components/AddBudget/AddBudget"

const Profile = () => {
  return (
    <div>
      <Link to={'/add-todos'}>
        <button>Add Todo</button>
      </Link>
      <Link to={'/add-budget'}>
        <button>Add Budget</button>
      </Link>

      <Budget />
      <Todo />
    </div>
  );
};

export default Profile;