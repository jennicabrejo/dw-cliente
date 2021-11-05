import {GET_LIST_CURSOS} from "../actions/cursos.actions";
import { REBOOT } from "../actions/general.actions";

const estadoInicial = {
  cursos: {
  }
};

const reducerCursos = (state = estadoInicial, action) => {
  switch (action.type) {
    case GET_LIST_CURSOS:
      return {
        cursos: action.payload
      };
    case REBOOT: return estadoInicial;
    default:
      return state;
  }
};

export default reducerCursos;
