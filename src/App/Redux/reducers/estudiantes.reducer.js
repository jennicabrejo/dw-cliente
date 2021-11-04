import {GET_LIST_ESTUDIANTES_ID_CURSO} from "../actions/estudiantes.actions";

const estadoInicial = {
  estudiantesCurso: {}
};

const reducerEstudiantes = (state = estadoInicial, action) => {
  switch (action.type) {
    case GET_LIST_ESTUDIANTES_ID_CURSO:
      return {
        estudiantesCurso: action.payload
      };
    default:
      return state;
  }
};

export default reducerEstudiantes;
