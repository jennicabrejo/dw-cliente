import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; //redirige a otras paginas
import { loginServices } from "../../Redux/actions/login.actions";
import {
  useDispatch /*ejecuta las acciones/actions*/,
  useSelector,
} from "react-redux"; //<---
import { Button } from "@material-ui/core";

const BottonLogin = () => {
  //Redux
  const dispatch = useDispatch();
  const history = useHistory();
  //

  //Selectors

  const valido = useSelector(({ reducerLogin }) => reducerLogin.valido);

  const loginClick = () => {
    const usuario_password = document.getElementById("pss")?.value;
    const usuario_nombre = document.getElementById("us")?.value;
    dispatch(loginServices({ usuario_nombre, usuario_password }));
  };

  /**Este reacciona ante cualquier cambio en sus variables */

  useEffect(() => {
    console.log(valido);
    if (valido) {
      history.replace("/catedraticos");
    }
    // eslint-disable-next-line
  }, [valido]);
  return (
    <Button variant="contained" onClick={() => loginClick()}>
      Login
    </Button>
  );
};

export default BottonLogin;
