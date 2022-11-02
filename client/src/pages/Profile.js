import React from "react";
import { Link } from 'react-router-dom';

import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

const Profile = () => {
  return (
    <div className="add-btn-list">
      <Link to={'/add-todos'}>
          <button className="add-btn todoBtn">Add Todo</button>
      </Link>
      <Link to={'/add-budget'}>
        <button className="add-btn budgetTotalBtn">Add Budget Total</button>
      </Link>
      <Link to={'/add-expense'}>
        <button className="add-btn budgetExpenseBtn">Add Budget Expense</button>
      </Link>
      <Link to={'/add-income'}>
        <button className="add-btn budgetIncomeBtn">Add Budget Income</button>
      </Link>

      <Budget />
      <Todo />
    </div>
  );
};

export default Profile;