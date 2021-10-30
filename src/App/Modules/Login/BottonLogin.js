import React, { useState, useEffect } from "react";
import { loginServices } from "../../Redux/actions/login.actions";
import { useDispatch /*ejecuta las acciones/actions*/, useSelector } from "react-redux"; //<--- 
import {Button} from "@material-ui/core";

const BottonLogin = () => {
    //Redux
    const dispatch = useDispatch();
    // 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [jsonResult, setResult] = useState({});

  //Selectors
  const valido = useSelector(({reducerLogin}) => reducerLogin.valido)
  
  const loginClick = () => {
    setPass(document.getElementById("pss")?.value);
    setEmail(document.getElementById("email")?.value);
    dispatch(loginServices());
  }

/**Este reacciona ante cualquier cambio en sus variables */
  useEffect(() =>{
    console.log(valido);
  },[valido]);

  return (
    <Button variant="contained" onClick= {() => loginClick()}>Login</Button>
  );
};

export default BottonLogin;