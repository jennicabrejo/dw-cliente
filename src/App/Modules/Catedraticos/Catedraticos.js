import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Main from "../General/Main";
import Alumnos from "./components/Alumnos";
import Cursos from "./components/Cursos";
import { useHistory } from "react-router-dom"; //redirige a otras paginas
import { getRolByCod } from "../../Utils/catalogos";

//
const mainBar = ["Alumnos", "Cursos", "Cargar Notas", "Cargar Alumnos"];

export const Catedraticos = () => {
  const history = useHistory();  
  //Selectors

  const valido = useSelector(({ reducerLogin }) => reducerLogin.valido);
  const codigo_rol = useSelector(
    ({ reducerLogin }) => reducerLogin.usuario.codigo_rol
  );
  //   const dispatch = useDispatch();
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log(item);
  }, [item]);
  
  useEffect(() => {
    if (valido) {
      const rol = getRolByCod(codigo_rol);
      if (rol.rol === "ESTUDIANTE") history.replace("/estudiantes");
      if (rol.rol === "CATEDRATICO") history.replace("/catedraticos");
    }else{      
        history.replace("/");
    }
    // eslint-disable-next-line
  }, [valido]);

  return (
    <Main
      menuDrawer={mainBar}
      item={item}
      setItem={setItem}
      content={
        mainBar[0] === item ? (
          <Alumnos />
        ) : mainBar[1] === item ? (
          <Cursos />
        ) : null
      }
    />
  );
};
