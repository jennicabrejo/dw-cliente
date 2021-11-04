import {GET_LIST_CURSOS} from "../actions/cursos.actions";

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
    default:
      return state;
  }
};

export default reducerCursos;
