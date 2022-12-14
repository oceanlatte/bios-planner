import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./Header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <Link to="/">
        <h1 className="logo">BIOS</h1>
      </Link>

      <nav className="text-center">
        {Auth.loggedIn() ? (
          <>
            <Link className="tab1 right" to="/profile">
              Profile
            </Link>
            <Link className="tab2 right" to="/Daily">
              Daily
            </Link>
            <Link className="tab3 right" to="/Weekly">
              Weekly
            </Link>
            <Link className="tab4 right" to="/Monthly">
              Monthly
            </Link>
            <Link className="tab5 right" to="/Yearly">
              Yearly
            </Link>
            <a className="logout right" href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link className="tab1 right" to="/login">
              Login
            </Link>
            <Link className="tab2 right" to="/signup">
              Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
