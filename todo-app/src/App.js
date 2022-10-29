import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer.js";

import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Todo from "./components/Todo/Todo.js";
import Monthly from "./components/Monthly/Monthly.js";
import Navigation from "./components/Navigation/Navigation.js";
import Budget from "./components/Budget/Budget.js";
import AddTask from "./components/AddTask/AddTask.js"
import AddBudget from "./components/AddBudget/AddBudget.js";



function App() {
  return (
    <Router>
    <div>
      <row>
      <Navigation />
      <main>
        <body>
      <Switch>
        <Route path ="/Login" component= {Login}/>
        <Route path ="/Home" component= {Home}/>
        <Route path ="/Todo" component= {Todo}/>
        <Route path ="/Monthly" component= {Monthly}/>
        <Route path ="/Budget" component={Budget}/>
        <Route path ="/AddTask" component={AddTask}/>
        <Route path ="/AddBudget" component ={AddBudget}/>
      </Switch>
        </body>
      </main>
    </row>

    </div>
    
    </Router>
   

  );
}
export default App;