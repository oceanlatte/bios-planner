import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

function Monthly() {
  return (
    <div>
      <h2 className="title">Monthly</h2>
      <Budget />
      <Todo />
    </div>
  )
};

export default Monthly;