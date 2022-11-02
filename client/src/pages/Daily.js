import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

import { useParams } from 'react-router-dom';

function Daily() {
  const { username: userParam } = useParams();
  
  return (
    <div>
      <h2 className="title header-block">Daily</h2>
    
      <div className="container">
        <Budget />
        <Todo />
      </div>

    </div>
  )
};

export default Daily;