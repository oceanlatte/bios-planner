import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer.js";

import Header from "./components/Header/Header.js";
import Login from "./components/Login/Login.js";
import Todo from "./components/Todo/Todo.js";
import Monthly from "./components/Monthly/Monthly.js";
import Navigation from "./components/Navigation/Navigation.js";
import Budget from "./components/Budget/Budget.js";



function App() {
  return (
    <Router>
    <div>
      <row>
      <Header />
      <Navigation />
      <main>
      <Switch>
        <Route path ="/Login" component= {Login}/>
        <Route path ="/Todo" component= {Todo}/>
        <Route path ="/Monthly" component= {Monthly}/>
        <Route path ="/Budget" component={Budget}/>
      </Switch>
      </main>
    </row>
    </div>
    </Router>
   

  );
}
export default App;