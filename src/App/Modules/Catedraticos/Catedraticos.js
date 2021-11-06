import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Main from "../General/Main";
import Alumnos from "./components/Alumnos";
import Notas from "./components/Notas";
import Cursos from "./components/Cursos";
import { useHistory } from "react-router-dom"; //redirige a otras paginas
import { getRolByCod } from "../../Utils/catalogos";
import { setSessionStorage } from "../../Redux/actions/login.actions";
import { getCatedratico } from "../../Redux/actions/catedraticos.actions";

//

export const Catedraticos = () => {
  const mainBar = [
    { text: "Alumnos", type: "text" },
    { text: "Cursos", type: "text" },
    { text: "Cargar Notas", type: "text" },
  ];
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
  const cursosCLog = useSelector(
    ({ reducerCatedraticos }) => reducerCatedraticos.catedraticoLog?.cursos
  );

  const [item, setItem] = useState({ text: "", type: "" });

  useEffect(() => {
    if (valido) {
      const rol = getRolByCod(codigo_rol);
      if (rol.rol === "ESTUDIANTE") history.replace("/estudiantes");
      if (rol.rol === "CATEDRATICO") {
        dispatch(getCatedratico({ usuario }));
      }
    } else {
      history.replace("/");
    }
    // eslint-disable-next-line
  }, [valido]);

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
          <Alumnos cursos={cursosCLog || []} />
        ) : mainBar[1].text === item.text ? (
          <Cursos data={cursosCLog || []} />
        ) : mainBar[2].text === item.text ? (
          <Notas cursos={cursosCLog || []}/>
        ) : null
      }
    />
  );
};
