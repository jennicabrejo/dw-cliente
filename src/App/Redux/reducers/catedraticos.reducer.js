import {GET_CATEDRATICO} from "../actions/catedraticos.actions";

const estadoInicial = {
  catedraticoLog: {
    _id: "",
    catedratico_nombres: "",
    catedratico_apellidos: "",
    cursos: [],
    usuario: {}
  }
};

const reducerCatedraticos = (state = estadoInicial, action) => {
  switch (action.type) {
    case GET_CATEDRATICO:
      return {
        catedraticoLog: action.payload.catedratico
      };
    default:
      return state;
  }
};

export default reducerCatedraticos;
