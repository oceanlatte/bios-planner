import React from "react";
import { Link } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_USERS } from '../utils/queries';

import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";
import Auth from '../utils/auth'

const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data} = useQuery(QUERY_USER);

  console.log('from Profile user PARAMS:', userParam);
 
  console.log('from Profile CURRENT user:', data);

  const currentUser = data? data.currentUser.username : {};
  console.log('Current User log:', currentUser);
  
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
  
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      
      <Link to={'/add-todos'}>
        <button className="add-btn todoBtn">Add Todo</button>
      </Link>
      <Link to={'/add-budget'}>
        <button className="add-btn budgetTotalBtn">Add Budget Total</button>
      </Link>
      <Link to={'/add-budget'}>
        <button className="add-btn budgetExpenseBtn">Add Budget Expense</button>
      </Link>
      <Link to={'/add-budget'}>
        <button className="add-btn budgetIncomeBtn">Add Budget Income</button>
      </Link>

      <Budget />
      <Todo />
    </div>
  );
};

export default Profile;