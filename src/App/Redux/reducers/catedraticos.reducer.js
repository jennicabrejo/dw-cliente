import { CAMBIARMENSAJE, HOLAMUNDO } from "../actions/catedraticos.actions";

const estadoInicial = {
  mensaje: "pato",
};

const reducerCatedraticos = (state = estadoInicial, action) => {
  switch (action.type) {
    case HOLAMUNDO:
      return {
        mensaje: action.payload
      };
    case CAMBIARMENSAJE:
      return {
        mensaje: action.payload
      };
    default:
      return estadoInicial;
  }
};

export default reducerCatedraticos;
