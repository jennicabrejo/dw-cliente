import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import Main from "../General/Main";
import Companieros from "./components/Companieros"
//
const mainBar = ["Compañeros", "Cursos", "Notas"];

export const Estudiantes = () => {
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
          <Companieros />
        ) : null
      }
    />
  );
};
