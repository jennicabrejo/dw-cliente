import {
  GET_LIST_ESTUDIANTES_ID_CURSO,
  GET_ESTUDIANTE_US,
} from "../actions/estudiantes.actions";
import { REBOOT } from "../actions/general.actions";

const estadoInicial = {
  estudiantesCurso: {},
  estudianteLog: {
    _id: "",
    carnet: "",
    estudiante_nombre: "",
    estudiante_apellido: "",
    cursos: [],
    usuario: {},
    disponibilidad: "",
  },
};

const reducerEstudiantes = (state = estadoInicial, action) => {
  switch (action.type) {
    case GET_LIST_ESTUDIANTES_ID_CURSO:
      return {
        ...state,
        estudiantesCurso: action.payload,
      };
    case GET_ESTUDIANTE_US:
      return {
        ...state,
        estudianteLog: action.payload.estudiante,
      };
    case REBOOT: return estadoInicial;
    default:
      return state;
  }
};

export default reducerEstudiantes;
