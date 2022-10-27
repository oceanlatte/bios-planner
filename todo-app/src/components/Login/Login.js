import React, { Component } from "react";
import LoginModal from "react-login-modal";


 
class Login extends Component {
  handleSignup = (username, email, password) => {};
  handleLogin = (username, password) => {}
 
  render() {
    return (
      <LoginModal
        handleSignup={this.handleSignup}
        handleLogin={this.handleLogin}
      />
    );
  }
}

export default Login;