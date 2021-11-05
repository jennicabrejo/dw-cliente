import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../General/TableComponent";
import { getListaEstudiantesByIC } from "../../../Redux/actions/estudiantes.actions";

const columns = [
  { id: "carnet", label: "Carnet", minWidth: 150 },
  { id: "nombreCompleto", label: "Nombre", minWidth: 150 },
  { id: "cursos", label: "Cursos del Estudiante", minWidth: 150 },
  { id: "correo", label: "Correo", minWidth: 150 },
  { id: "usuario", label: "Usuario", minWidth: 150 },
  { id: "disponibilidad", label: "Disponibilidad", minWidth: 50 },
];

const Alumnos = (props) => {
  const dispatch = useDispatch();
  // Reducer de catedraticos  
  const alumnosList = useSelector(({ reducerEstudiantes }) => reducerEstudiantes.estudiantesCurso?.estudiantesCurso);
  
  const propsTable = {
    rows: alumnosList || [],
    columns,
    title: "Lista de Compañeros",
    propsBasicSelect: {
      items: props.cursos.map((curso) => { return {
        text: curso.Curso_nombre,
        value: curso._id,
      }}),
      currentSelect: (current) => {
        dispatch(getListaEstudiantesByIC({_id: current.value}))
      }
    },
  };

  return (
    <Grid container>
      <Grid item xs = {12} style = {{marginTop: 24, marginLeft: 24}}>
        <Typography variant="h3" gutterBottom component="div">
          Compañeros
        </Typography>
      </Grid>
      <Table {...propsTable} />
    </Grid>
  );
};

export default Alumnos;
