import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

//initialize the section state
function Navigation(props) {
  return (
 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
          <h1 className='nav-brand'>
              BIOS
          </h1>
       
          <div >
        <ul class="navbar ml-auto">
          <li class="tab">
            <Link class="nav-link active" to="/Login">
              Login
            </Link>
          </li>
          <li class="tab">
            <Link class="nav-link active" to="/Todo">
              Todo
            </Link>
          </li>
          <li class="tab">
            <Link class="nav-link active" to="/Monthly">
              Monthly
            </Link>
          </li>
          <li class="tab">
            <Link class="nav-link active" to="/Budget">
              Budget
            </Link>
          </li>
          
          
        </ul>
      </div>
      </div>
      </nav>
  );
};

        
        

export default Navigation;