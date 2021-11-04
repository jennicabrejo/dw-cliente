import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Main from "../General/Main";
import Alumnos from "./components/Alumnos";
import Cursos from "./components/Cursos";
import { useHistory } from "react-router-dom"; //redirige a otras paginas
import { getRolByCod } from "../../Utils/catalogos";
import { getCatedratico } from "../../Redux/actions/catedraticos.actions";

//
const mainBar = ["Alumnos", "Cursos", "Cargar Notas", "Cargar Alumnos"];

export const Catedraticos = () => {
  const history = useHistory();  
  const dispatch = useDispatch();
  //Selectors

    // Reducer de Login
  const valido = useSelector(({ reducerLogin }) => reducerLogin.valido);
  const usuario = useSelector(({ reducerLogin }) => reducerLogin.usuario._id);
  const codigo_rol = useSelector(
    ({ reducerLogin }) => reducerLogin.usuario.codigo_rol
  );
  // Reducer de catedraticos  
  const cursosCLog = useSelector(({ reducerCatedraticos }) => reducerCatedraticos.catedraticoLog?.cursos);
  
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log(item);
  }, [item]);
  
  useEffect(() => {
    if (valido) {
      const rol = getRolByCod(codigo_rol);
      if (rol.rol === "ESTUDIANTE") history.replace("/estudiantes");
      if (rol.rol === "CATEDRATICO") {
        console.log(usuario)
        dispatch(getCatedratico({usuario}))
      }
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
          <Alumnos cursos = {cursosCLog || []}/>
        ) : mainBar[1] === item ? (
          <Cursos data = {cursosCLog || []}/>
        ) : null
      }
    />
  );
};
