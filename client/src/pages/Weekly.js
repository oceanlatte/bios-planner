import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

function Weekly() {
  return (
    <div>
      <h2 className="header-block title">Weekly</h2>
      <div className="container">
        <Budget />
        <Todo />

      </div>
    </div>
  )
};

export default Weekly;