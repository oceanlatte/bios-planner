import { Link } from 'react-router-dom';
import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

function Daily() {
  return (
    <div>
      <h2>Daily</h2>
      <Budget />
      <Todo />
    </div>
  )
};

export default Daily;