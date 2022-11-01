import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";
import AddTodo from "../components/AddTodo/AddTodo";
import AddBudget from "../components/AddBudget/AddBudget"

const Profile = () => {
  return (
    <div className="container">


      <Budget />
      <Todo />
    </div>
  );
};

export default Profile;