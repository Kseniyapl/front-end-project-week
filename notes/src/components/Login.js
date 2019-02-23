import React from "react";
import "./Login.css";

 const Login = props => {
  return (
    <div className="loginContainer">
      <div className="loginSection">
        <h2>Login</h2>
        <form onSubmit={props.updateUser}>
          <div className="input">
            <input
              className="loginInput"
              type="text"
              placeholder="Username"
              name="username"
              value={props.usernameInput}
              onChange={props.usernameChange}
            />
            <input
              className="loginInput"
              type="text"
              placeholder="Password"
              name="password"
              value={props.passwordInput}
              onChange={props.passwordChange}
            />
          </div>
          <div className="button">
            <button className="loginButton" onClick={props.updateUser}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

 export default Login;