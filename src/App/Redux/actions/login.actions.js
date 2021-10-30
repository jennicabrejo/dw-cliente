export const LOGIN = "LOGIN";

export const loginServices = (email, pss) => {
  return async (dispatch) => {
    const url = "http://127.0.0.1:8000/proyectfinal/api/Usuario";
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
