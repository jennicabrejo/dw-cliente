import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Main from "../General/Main";
import Companieros from "./components/Companieros";
import { useHistory } from "react-router-dom"; //redirige a otras paginas
import { getRolByCod } from "../../Utils/catalogos";
import { getEstudianteUs } from "../../Redux/actions/estudiantes.actions";
import { getMisNotas } from "../../Redux/actions/notas.actions";
import { setSessionStorage } from "../../Redux/actions/login.actions";
import Cursos from "./components/Cursos";
import Notas from "./components/Notas";

//

export const Estudiantes = () => {
  const mainBar = [
    { text: "Compañeros", type: "text" },
    { text: "Cursos", type: "text" },
    { text: "Notas", type: "text" },
  ];
  const history = useHistory();
  const dispatch = useDispatch();
  //Selectors

  //Login
  const valido = useSelector(({ reducerLogin }) => reducerLogin.valido);
  const usuario = useSelector(({ reducerLogin }) => reducerLogin.usuario._id);
  const codigo_rol = useSelector(
    ({ reducerLogin }) => reducerLogin.usuario.codigo_rol
  );
  const [item, setItem] = useState({ text: "", type: "" });

  // Reducer de estudiantes
  const cursosCLog = useSelector(
    ({ reducerEstudiantes }) => reducerEstudiantes.estudianteLog?.cursos
  );
  const id_estudiante = useSelector(
    ({ reducerEstudiantes }) => reducerEstudiantes.estudianteLog?._id
  );
  // Reducer de notas
  const notas = useSelector(
    ({ reducerNotas }) => reducerNotas.notas
  );

  useEffect(() => {
    if(mainBar[2].text === item.text){
      dispatch(getMisNotas({id_estudiante}));
    }
    // eslint-disable-next-line
  }, [item]);

  useEffect(() => {
    if (valido) {
      const rol = getRolByCod(codigo_rol);
      if (rol.rol === "ESTUDIANTE") {
        dispatch(getEstudianteUs({ usuario }));
      }
      if (rol.rol === "CATEDRATICO") history.replace("/catedraticos");
    } else {
      history.replace("/");
    }
    // eslint-disable-next-line
  }, [valido]);

  useEffect(() => {
    if (id_estudiante) {
      dispatch(getMisNotas({id_estudiante}));
    } 
    // eslint-disable-next-line
  }, [id_estudiante]);

  useEffect(() => {
    dispatch(setSessionStorage());
  }, [dispatch]);
  return (
    <Main
      menuDrawer={mainBar}
      item={item}
      setItem={setItem}
      content={
        mainBar[0].text === item.text ? (
          <Companieros cursos={cursosCLog || []} />
        ) : mainBar[1].text === item.text ? (
          <Cursos data={cursosCLog || []} />
        ) : mainBar[2].text === item.text ?
          <Notas rows = {notas || []}/>
          : null
      }
    />
  );
};
