export const GET_LIST_CURSOS = "GET_LIST_CURSOS"

export const getListaCursos = ({listaCursos}) => {
    return async (dispatch) => {
      let url = "http://127.0.0.1:8000/proyectfinal/api/Cursos?";
      url+= new URLSearchParams({listaCursos});
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
        type: GET_LIST_CURSOS,
        payload: respuesta,
      });
    };
  };
  