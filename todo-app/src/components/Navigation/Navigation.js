import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import "./Navigation.css";

import Container from "react-bootstrap/Container";

//initialize the section state
function Navigation(props) {
  return (
 <header>
  	<div class="left">
			<a class= "left" href="#">BIOS</a>
		</div>
  <div class="mid">
		<ul class="navbar">
          <li class= "right" >
            <Link class="nav-link active tab1" to="/Login">
              Login
            </Link>
          </li>
          <li class= "right">
            <Link class="nav-link active tab2" to="/Todo">
              Todo
            </Link>
          </li>
          <li class= "right">
            <Link class="nav-link active tab3" to="/Monthly">
              Monthly
            </Link>
          </li>
          <li class= "right">
            <Link class="nav-link active tab4" to="/Budget">
              Budget
            </Link>
          </li>
          <li class= "right">
            <Link class="nav-link active tab4" to="/AddTask">
              Add Task
            </Link>
          </li>
          <li class= "right">
            <Link class="nav-link active tab4" to="/AddBudget">
              Add Budget
            </Link>
          </li>
            
          
        </ul>
        </div>
      </header>
  );
};

        
        

export default Navigation;