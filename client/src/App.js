import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Daily from "./pages/Daily";
import Weekly from "./pages/Weekly";
import Monthly from "./pages/Monthly";
import Yearly from "./pages/Yearly";
import AddBudget from "./pages/AddBudget";
import AddTodo from "./pages/AddTodo";
import AddIncome from "./pages/AddIncome";
import AddExpense from "./pages/AddExpense";

import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/" element={<Profile />} />
            
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/weekly" element={<Weekly />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/yearly" element={<Yearly />} />
              <Route path="/add-budget" element={<AddBudget />} />
              <Route path="/add-todos" element={<AddTodo />} />
              <Route path="/add-expense" element={<AddExpense />} />
              <Route path="/add-income" element={<AddIncome />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
