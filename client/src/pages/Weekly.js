import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

function Weekly() {
  return (
    <div>
      <h2 className="title">Weekly</h2>
      <Budget />
      <Todo />
    </div>
  )
};

export default Weekly;