import Todo from "../components/Todo/Todo";
import Budget from "../components/Budget/Budget";

function Yearly() {
  return (
    <div>
      <h2 className="title">Yearly</h2>
      <Budget />
      <Todo />
    </div>
  )
};

export default Yearly;