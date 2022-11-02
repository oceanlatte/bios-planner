import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

function Yearly() {
  return (
    <div>
      <h2 className="header-block title">Yearly</h2>
      <div className="container">
      <Budget />
      <Todo />
      </div>
    </div>
  )
};

export default Yearly;