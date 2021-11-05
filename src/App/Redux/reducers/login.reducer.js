import { LOGIN, ON_LOAD } from "../actions/login.actions";
import { REBOOT } from "../actions/general.actions";

const estadoInicial = {
    usuario: 
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
            if(usuario){
                Object.keys(usuario).forEach((key) => {                    
                    sessionStorage.setItem(key, usuario[key]);
                });
            }
            return {
                usuario: usuario || estadoInicial.usuario,
                valido: Boolean(usuario?._id)
            };  
        case ON_LOAD: 
            const ssusuario = action.payload
            return {
                usuario: ssusuario || estadoInicial.usuario,
                valido: Boolean(ssusuario?._id)
            };  
        case REBOOT: return estadoInicial;
        default:
            return state;
    }
}

export default reducerLogin;