export const GET_ESTUDIANTES = "GET_ESTUDIANTES";
export const GET_CATEDRATICO = "GET_CATEDRATICO";

export const getCatedratico = ({usuario}) => {
  return async (dispatch) => {
    let url = "http://127.0.0.1:8000/proyectfinal/api/CatedraticoByIdUs?";
    url+= new URLSearchParams({usuario});
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
      type: GET_CATEDRATICO,
      payload: respuesta,
    });
  };
};
