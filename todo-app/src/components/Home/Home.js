import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddTask from "../AddTask/AddTask";
import AddBudget from "../AddBudget/AddBudget.js";


function Home(props) {
  return (
    <body>
      <h2>BIOS Planner</h2>
      <Switch>
        <main>
          <button class="right">
            <Link class="nav-link active tab4" to="/AddTask">
              <Route path="/AddTask" component={AddTask} />
              Add Task
            </Link>
          </button>
          <button class="right">
            <Link class="nav-link active tab4" to="/AddBudget">
              <Route path="/AddBudget" component={AddBudget} />
              Add Budget
            </Link>
          </button>
        </main>
      </Switch>
      
      <div class="card" style={{ backgroundColor: "#846a91", width: "75%vw", minHeight: "75%vw", padding: "12px 20px",
    margin: "8px 0"}}>
        <div>
          <h3>Budget</h3>
        </div>
        <ul>
          Enter the Array of Budget Items
        </ul>
      </div>
      <div class="card">
        <div>
          <h3>Todo</h3>
        </div>
        <ul>
          Enter the Array of todos
        </ul>
      </div>
    </body>
  );
}

export default Home;
