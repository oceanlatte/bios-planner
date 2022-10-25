import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


 //initialize the section state
 function Navigation(props) {
 

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
            <h1 className='name nav-brand'>
                BIOS
            </h1>
        
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/Todo">
                Todo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/Monthly">
                Monthly
              </Link>
            </li>           
          </ul>

        </div>
        </nav>
    );
};

export default Navigation;