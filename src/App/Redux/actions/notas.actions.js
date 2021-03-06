export const POST_NOTAS_XLSX = "POST_NOTAS_XLSX";
export const POST_NOTAS_XLSX_INIT = "POST_NOTAS_XLSX_INIT";
export const GET_MIS_NOTAS = "GET_MIS_NOTAS";
export const GET_NOTAS_CURSO = "GET_NOTAS_CURSO";
export const DELETE_NOTA_CURSO = "DELETE_NOTA_CURSO";

export const postNotasXLSX = (notas) => {
  return async (dispatch) => {
    dispatch({type: POST_NOTAS_XLSX_INIT});
    let url = "http://127.0.0.1:8000/proyectfinal/api/Nota/registroXLSX";
    const respuesta = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notas: notas }),
    })
      .then((req) => {
        return req.json();
      })
      .catch((err) => {
        console.log(err);
        return "Hubo un error";
      });
    dispatch({
      type: POST_NOTAS_XLSX,
      payload: respuesta,
    });
  };
};
//
const dataTableNotas = (notas) => {
  return notas?.map((nt) => {
    return {
      _id: nt._id,
      codigo_curso: nt.id_curso.codigo_curso,
      curso: nt.id_curso.Curso_nombre,
      nota: nt.nota,
    };
  });
};
const dataTableNotasCurso = (notas) => {
  return notas?.map((nt) => {
    return {
      _id: nt._id,
      estudiante_carnet: nt.id_estudiante.carnet,
      estudiante_nota: nt.nota,
      codigo_curso: nt.id_curso.codigo_curso,
    };
  });
};

export const getMisNotas = ({ id_estudiante }) => {
  return async (dispatch) => {
    let url = "http://127.0.0.1:8000/proyectfinal/api/MisNotas?";
    url += new URLSearchParams({ id_estudiante });
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
      type: GET_MIS_NOTAS,
      payload: { notas: dataTableNotas(respuesta.notas) },
    });
  };
};

export const getNotasCurso = ({ id_curso }) => {
  return async (dispatch) => {
    let url = "http://127.0.0.1:8000/proyectfinal/api/notasCurso?";
    url += new URLSearchParams({ id_curso });
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
      type: GET_NOTAS_CURSO,
      payload: { notas: dataTableNotasCurso(respuesta.notas) },
    });
  };
};


export const deleteNotasCurso = ({ id }) => {
  return async (dispatch) => {
    let url = "http://127.0.0.1:8000/proyectfinal/api/Nota/eliminar?";
    url += new URLSearchParams({ id });
    const respuesta = await fetch(url, {
      method: "DELETE",
    })
      .then((req) => {
        return req.json();
      })
      .catch((err) => {
        console.log(err);
        return "Hubo un error";
      });
    dispatch({
      type: DELETE_NOTA_CURSO,
      payload: respuesta,
    });
  };
};

export const reDon = () => {
  return async (dispatch) => {
    dispatch({type: POST_NOTAS_XLSX_INIT});
  }
}