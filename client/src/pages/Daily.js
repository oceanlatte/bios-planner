import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_TODOS, QUERY_BUDGETS, QUERY_USERS } from '../utils/queries';

function Daily() {
  const { data: userData } = useQuery(QUERY_USER);
  const { data: userTodos } = useQuery(QUERY_TODOS);
  const { data: users } = useQuery(QUERY_USERS);

  console.log('from Daily user:', userData);
  console.log('from Daily todos:', userTodos);
  console.log('from Daily ALLusers:', users);

  const usernameTry = users.users[0].username;
  console.log('USERNAME TRY:', usernameTry);

  return (
    <div>
      <h2>Daily</h2>
      <Budget />
      <Todo />
    </div>
  )
};

export default Daily;