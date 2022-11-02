import React from 'react';
import { Link } from 'react-router-dom';
import { ADD_TODOS } from '../../utils/mutations';

const DailyTodoList = ({ todos, todoName }) => {
  if (!ADD_TODOS.length) {
    return <h3>Nothing ToDo today 😺</h3>;
  }

  return (
    <div>
      <h3>{todos}</h3>
      {todos &&
        todos.map(todos => (
          <div key={todos._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${todos.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {todos.username}
              </Link>{' '}
              todo entered on {todos.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/todos/${todos._id}`}>
                <p>{todos.todoName}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DailyTodoList;