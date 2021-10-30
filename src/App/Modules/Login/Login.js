import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";//redirige a otras paginas
import BottonLogin from "./BottonLogin"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const history = useHistory();

  const valido = useSelector(({reducerLogin}) => reducerLogin.valido);
  useEffect(() =>{
    console.log(valido)
    if(valido){
      history.replace("/catedraticos");
    }
  },[valido]);

  return (
    <div className="card">
      <div className="card-header">
        <h1>Log In</h1>
      </div>
      <div className="card-body">
        <input type="email" placeholder="Email" id="email"/>
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