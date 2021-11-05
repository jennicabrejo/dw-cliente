import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import Main from "../General/Main";
const mainBar = ["Cargar Catedraticos", "Crear Administrador"];

export const Catedraticos = () => {
  //   const dispatch = useDispatch();
  const [item, setItem] = useState(null);

  return (
    <Main
      menuDrawer={mainBar}
      item={item}
      setItem={setItem}
    //   content={
    //     mainBar[0] === item ? (
    //       <Alumnos />
    //     ) : mainBar[1] === item ? (
    //       <Cursos />
    //     ) : null
    //   }
    />
  );
};
