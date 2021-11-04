import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import Main from "../General/Main";
import Alumnos from "./components/Alumnos";
import Cursos from "./components/Cursos";
//
const mainBar = ["Alumnos", "Cursos", "Cargar Notas", "Cargar Alumnos"];

export const Catedraticos = () => {
  //   const dispatch = useDispatch();
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log(item);
  }, [item]);

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
