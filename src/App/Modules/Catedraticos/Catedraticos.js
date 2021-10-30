import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cambiarMensaje, traerHolaMundo } from "../../Redux/actions/catedraticos.actions";

export const Catedraticos = () =>{
    const dispatch = useDispatch();
    const mensaje = useSelector(({reducerCatedraticos}) => reducerCatedraticos.mensaje);

    const cambiar = () => {
        const texto = document.getElementById("in").value;
        if((texto+"").length > 0){
            dispatch(cambiarMensaje(texto));
        }else{
            dispatch(traerHolaMundo());
        }
    }
    return (
        <div>
            <label>{mensaje}</label>
            <input id="in"></input>
            <button onClick= { () =>{cambiar()}}>Cabiar</button>
        </div>
    )
}