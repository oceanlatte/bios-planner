import React, { useEffect } from "react";
import { Link } from "react-router-dom";


//initialize the section state
function Navigation(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
          <h1 className='name nav-brand'>
              BIOS
          </h1>
      
        <ul >
        <li class="tab">
            <Link to="/Login">
              Login
            </Link>
          </li>
          <li class="tab">
            <Link to="/Todo">
              Todo
            </Link>
          </li>
          <li class="tab">
            <Link to="/Monthly">
              Monthly
            </Link>
          </li>  
          <li class="tab">
            <Link to="/Budget">
              Budget
            </Link>
          </li>         
        </ul>

      </div>
      </nav>
  );
};

export default Navigation;