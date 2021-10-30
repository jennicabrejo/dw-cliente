import React, { useState, useEffect } from "react";
import { loginServices } from "../../Redux/actions/login.actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
    //Redux
    const dispatch = useDispatch();
    // 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [jsonResult, setResult] = useState({});
  
  const loginClick = () => {
    setPass(document.getElementById("pss")?.value);
    setEmail(document.getElementById("email")?.value);
    dispatch(loginServices());
  }

  useEffect(() =>{
    console.log(jsonResult);
  },[jsonResult]);

  return (
    <div className="card">
      <div className="card-header">
        <h1>Log In</h1>
      </div>
      <div className="card-body">
        <input type="email" placeholder="Email" id="email"/>
        <input type="password" placeholder="Password" id="pss"/>
        <button onClick= {() => loginClick()}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;