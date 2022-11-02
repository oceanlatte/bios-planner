import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_TODOS, QUERY_USERS } from '../utils/queries';

function Daily() {
  const { username: userParam } = useParams();

  const { data: userData } = useQuery(QUERY_USER);
  const { data: userTodos } = useQuery(QUERY_TODOS);
  const { data: users } = useQuery(QUERY_USERS);

  console.log('from Daily, CURRENT USER:', userData);
  console.log('from Daily ALLusers:', users);
  console.log('from Daily todos:', userTodos);

  // narrowed down random username from get all users
  const usernameTry = users.users[0].username;
  console.log('USERNAME TRY:', usernameTry);

  // currentUser username
  const currentUser = userData? userData.currentUser.username : {};
  console.log('Current User loggg:', currentUser);


  return (
    <div>
      <h2>Daily</h2>
      <Budget />
      <Todo 
      username={currentUser} />
    </div>
  )
};

export default Daily;