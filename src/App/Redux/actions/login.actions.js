export const LOGIN = "LOGIN";

export const loginServices = ({usuario_nombre, usuario_password}) => {
  return async (dispatch) => {
    let url = "http://127.0.0.1:8000/proyectfinal/api/Usuario?";
    url+= new URLSearchParams({usuario_nombre,usuario_password});
    console.log(url)
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
