import { LOGIN } from "../actions/login.actions";

const estadoInicial = {
    Usuarios: [
        {
            _id: "",
            usuario_nombre: "",
            usuario_password: "",
        }
    ]
};

const reducerLogin = (state = estadoInicial, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload)
            return estadoInicial;    
        default:
            return estadoInicial;
    }
}

export default reducerLogin;