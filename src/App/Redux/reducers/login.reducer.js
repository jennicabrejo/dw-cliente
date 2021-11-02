import { LOGIN } from "../actions/login.actions";

const estadoInicial = {
    Usuario: 
        {
            _id: "",
            codigo_rol: "",
            usuario_correo: "",
            usuario_nombre: "",
            usuario_password: "",
        }
    ,
    valido: false
};

const reducerLogin = (state = estadoInicial, action) => {
    switch (action.type) {
        case LOGIN:
            const usuario = action.payload.Usuario;
            return {
                Usuario: usuario,
                valido: Boolean(usuario?._id)
            };    
        default:
            return estadoInicial;
    }
}

export default reducerLogin;