import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Todo from "./components/Todo/Todo.js";
import Monthly from "./components/Monthly/Monthly.js";
import Navigation from "./components/Navigation/Navigation.js";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <main>
      <Switch>
        <Route path ="/Todo" component= {Todo}/>
        <Route path ="/Monthly" component= {Monthly}/>
      </Switch>
      </main>
    </div>
    </Router>
  );
}
export default App;