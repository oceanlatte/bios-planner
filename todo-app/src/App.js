import React from "react";
import "./App.css";
import TodoList from "./components/todo/todoList.js";
import MonthlyCalendar from "./components/MonthlyCalendar/MonthlyCalendar.js";


function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList />
      <MonthlyCalendar />
    </div>
  );
}
export default App;