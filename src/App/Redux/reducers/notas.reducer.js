import {POST_NOTAS_XLSX, POST_NOTAS_XLSX_INIT, GET_MIS_NOTAS} from "../actions/notas.actions";
import { REBOOT } from "../actions/general.actions";

const estadoInicial = {
  notas: {},
  done: false
};

const reducerNotas = (state = estadoInicial, action) => {
  switch (action.type) {
    case GET_MIS_NOTAS:
      return {
        ...state,
        notas: action.payload.notas
      };
    case POST_NOTAS_XLSX_INIT:
      return {
        ...state,
        done: false
      };
    case POST_NOTAS_XLSX:
      return {
        ...state,
        done: true
      };
    case REBOOT: return estadoInicial;
    default:
      return state;
  }
};

export default reducerNotas;
