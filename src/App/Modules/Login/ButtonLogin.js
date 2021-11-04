import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; //redirige a otras paginas
import { loginServices } from "../../Redux/actions/login.actions";
import {
  useDispatch /*ejecuta las acciones/actions*/,
  useSelector,
} from "react-redux"; //<---
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { getRolByCod } from "../../Utils/catalogos";

const useStyles = makeStyles((theme) => ({
  btnl: {
    backgroundColor: "black",
    color: "white",
  },
}));

const ButtonLogin = (props) => {
  const classes = useStyles();
  //Redux
  const dispatch = useDispatch();
  const history = useHistory();
  //

  //Selectors

  const valido = useSelector(({ reducerLogin }) => reducerLogin.valido);
  const codigo_rol = useSelector(
    ({ reducerLogin }) => reducerLogin.usuario?.codigo_rol
  );

  const loginClick = () => {
    const credenciales = {
      usuario_nombre: props.cred.us,
      usuario_password: props.cred.pass,
    };
    if(props.cred.us && props.cred.pass)
      dispatch(loginServices(credenciales));
  };

  /**Este reacciona ante cualquier cambio en sus variables */

  useEffect(() => {
    if (valido) {
      const rol = getRolByCod(codigo_rol);
      if (rol.rol === "ESTUDIANTE") history.replace("/estudiantes");
      if (rol.rol === "CATEDRATICO") history.replace("/catedraticos");
    } 
    // eslint-disable-next-line
  }, [valido]);

  return (
    <Button
      variant="contained"
      className={classes.btnl}
      onClick={() => loginClick()}
    >
      Login
    </Button>
  );
};

export default ButtonLogin;
