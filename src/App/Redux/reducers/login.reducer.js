import { LOGIN } from "../actions/login.actions";


/**
  {
      valido: falso;
 }
 */

const estadoInicial = {
    Usuarios: [
        {
            _id: "",
            usuario_nombre: "",
            usuario_password: "",
        }
    ],
    valido: false
};

const reducerLogin = (state = estadoInicial, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                Usuarios: action.payload,
                // valido: action.payload.valido
                valido: true
            };    
        default:
            return estadoInicial;
    }
}

export default reducerLogin;