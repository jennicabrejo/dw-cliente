import React from "react";
import BottonLogin from "./BottonLogin"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h1>Log In</h1>
      </div>
      <div className="card-body">
        <input type="text" placeholder="Usuario" id="us"/>
        <input type="password" placeholder="Password" id="pss"/>
        <BottonLogin/>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;