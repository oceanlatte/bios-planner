import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_USERS } from '../utils/queries';

import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER);

  console.log('from Profile user PARAMS:', userParam);
  // console.log('from Profile todos:', userTodos);
  console.log('from Profile CURRENT user:', data);

  const user = data?.users || data?.user || {};

  return (
    <div>
      <Link to={'/add-todos'}>
          <button>Add Todo</button>
      </Link>
      <Link to={'/add-budget'}>
        <button>Add Budget Total</button>
      </Link>
      <Link to={'/add-budget'}>
        <button>Add Budget Expense</button>
      </Link>
      <Link to={'/add-budget'}>
        <button>Add Budget Income</button>
      </Link>

      <Budget />
      <Todo />
    </div>
  );
};

export default Profile;