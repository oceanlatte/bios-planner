import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

function Monthly() {
  return (
    <div>
      <h2 className="title header-block">Monthly</h2>
      <div className="container">
        <Budget />
        <Todo />
      </div>
    </div>
  )
};

export default Monthly;