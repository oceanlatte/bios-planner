import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header/Header';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todo from './components/Todo/Todo';
import Budget from './components/Budget/Budget';
import Monthly from './components/Monthly/Monthly';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
        <div className="flex-column justify-flex-start min-100-vh">
        <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/Home" 
                element={<Home />} 
              />
              <Route 
                path="/Profile" 
                element={<Profile />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
                  <Route 
                path="/Todo" 
                element={<Todo />} 
              />   
              <Route 
              path="/Monthly" 
              element={<Monthly />} 
            />    
            <Route 
            path="/Budget" 
            element={<Signup />} 
          />

            </Routes>
          </div>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;