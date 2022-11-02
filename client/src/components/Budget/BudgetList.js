import React from 'react';
import { Link } from 'react-router-dom';
import { ADD_BUDGET_TOTAL } from '../../utils/mutations';

const Budget = ({ budget, total }) => {
  if (!ADD_BUDGET_TOTAL.length) {
    return <h3> No budget to report 💸💸  </h3>;
  }

  return (
    <div>
      <h3>{budget}</h3>
      {budget &&
        budget.map(budget => (
          <div key={budget._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${budget.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {budget.username}
              </Link>{' '}
              todo entered on {budget.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/todos/${budget._id}`}>
                <p>{budget.total}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Budget;