export const GET_LIST_ESTUDIANTES_ID_CURSO = "GET_LIST_ESTUDIANTES_ID_CURSO"
export const GET_ESTUDIANTE_US = "GET_ESTUDIANTE_US"

const unirNombresCursos = (cursos) => {
  let texto = "";
  cursos.forEach((curso, index) => {
    if(index === 1){
      texto = curso.Curso_nombre
    }else{
      texto += `, ${curso.Curso_nombre}`
    }
  })
  return texto;
}

const formatTableEstudiantes = (listaEstudiantes) => {
  return listaEstudiantes.map((est) => {
    return {
      carnet: est.carnet,
      nombreCompleto: `${est.estudiante_nombre} ${est.estudiante_apellido}`,
      cursos: unirNombresCursos(est.cursos),
      correo: est.usuario.usuario_correo,
      usuario: est.usuario.usuario_nombre,
      disponibilidad: est.disponibilidad
    }
  })
}

export const getListaEstudiantesByIC = ({_id}) => {
    return async (dispatch) => {
      let url = "http://127.0.0.1:8000/proyectfinal/api/EstudianteByIdCurso?";
      url+= new URLSearchParams({_id});
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
        type: GET_LIST_ESTUDIANTES_ID_CURSO,
        payload: {idCurso: respuesta?.idCurso, estudiantesCurso: formatTableEstudiantes(respuesta?.estudiantesCurso || [])},
      });
    };
  };

export const getEstudianteUs = ({usuario}) => {
  return async (dispatch) => {
    let url = "http://127.0.0.1:8000/proyectfinal/api/EstudianteByIdUs?";
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
      type: GET_ESTUDIANTE_US,
      payload: respuesta,
    });
  };
};

  