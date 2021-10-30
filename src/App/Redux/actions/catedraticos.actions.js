export const HOLAMUNDO = "HOLAMUNDO";
export const CAMBIARMENSAJE = "CAMBIARMENSAJE";

export const traerHolaMundo = () => {
  return (dispatch) => {
    dispatch({
      type: HOLAMUNDO,
      payload: "hola mundo",
    });
  };
};

export const cambiarMensaje = (mensaje) => {
    return (dispatch) => {
      dispatch({
        type: CAMBIARMENSAJE, // tipo con el que se identifica en el switch del reducer
        payload: mensaje, //valores de la accion
      });
    };
  };
