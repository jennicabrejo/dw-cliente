export const LOGIN = "LOGIN";
export const ON_LOAD = "ON_LOAD";

export const loginServices = ({ usuario_nombre, usuario_password }) => {
  return async (dispatch) => {
    let url = "http://127.0.0.1:8000/proyectfinal/api/Usuario?";
    url += new URLSearchParams({ usuario_nombre, usuario_password });
    const respuesta = await fetch(url, {
      method: "GET",
    })
      .then((req) => {
        return req.json();
      })
      .catch((err) => {
        console.log(err);
        return "Hubo un error";
      });
    dispatch({
      type: LOGIN,
      payload: respuesta,
    });
  };
};

export const setSessionStorage = () => {
  return async (dispatch) => {
    const _id = sessionStorage.getItem("_id");
    const codigo_rol = sessionStorage.getItem("codigo_rol");
    const usuario_correo = sessionStorage.getItem("usuario_correo");
    const usuario_nombre = sessionStorage.getItem("usuario_nombre");
    const usuario_password = sessionStorage.getItem("usuario_password");

    dispatch({
      type: ON_LOAD,
      payload: codigo_rol ? {
        _id,
        codigo_rol,
        usuario_correo,
        usuario_nombre,
        usuario_password,
      } : null,
    });
  };
};
