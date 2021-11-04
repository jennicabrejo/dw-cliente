import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Table from "../../General/TableComponent";

const actions = [
  {
    id: "editar",
    type: "IconButton",
    icon: "ModeEditIcon",
    tip: "Editar",
    onClick: (current) => {console.log(current)},
    propsIButton: {
      style: { padding: 4 },
    },
    propsIcon: {
      style: { color: "orange" },
    },
  },
  {
    id: "eliminar",
    type: "IconButton",
    icon: "DeleteIcon",
    tip: "Eliminar",onClick: (current) => {console.log(current)},
    propsIButton: {
      style: { padding: 4 },
    },
    propsIcon: {
      style: { color: "brown" },
    },
  },
];

const rows = [
  {
    nombres: "Wilson Rubén",
    apellidos: "Cruz Enriquez",
    correo: "wcruze@miumg.edu.gt",
    carnet: "1993-16-1488",
    ultimo_acceso: "04/09/2021",
    disponibilidad: "SI",
    actions,
  },
  {
    nombres: "Wilson Rubén",
    apellidos: "Cruz Enriquez",
    correo: "wcruze@miumg.edu.gt",
    carnet: "1993-16-1488",
    ultimo_acceso: "04/09/2021",
    disponibilidad: "SI",
    actions,
  },
  {
    nombres: "Wilson Rubén",
    apellidos: "Cruz Enriquez",
    correo: "wcruze@miumg.edu.gt",
    carnet: "1993-16-1488",
    ultimo_acceso: "04/09/2021",
    disponibilidad: "SI",
    actions,
  },
  {
    nombres: "Wilson Rubén",
    apellidos: "Cruz Enriquez",
    correo: "wcruze@miumg.edu.gt",
    carnet: "1993-16-1488",
    ultimo_acceso: "04/09/2021",
    disponibilidad: "SI",
    actions,
  },
];

const columns = [
  { id: "nombres", label: "Nombres", minWidth: 150 },
  { id: "apellidos", label: "Apellidos", minWidth: 150 },
  { id: "correo", label: "Correo", minWidth: 150 },
  { id: "carnet", label: "Carnet", minWidth: 150 },
  { id: "ultimo_acceso", label: "Ultimo Acceso", minWidth: 150 },
  { id: "disponibilidad", label: "Disponibilidad", minWidth: 50 },
  { id: "actions", label: "Acciones", minWidth: 150 },
];

const Alumnos = () => {
  //   const dispatch = useDispatch();
  const propsTable = {
    rows,
    columns,
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{ marginTop: 24, marginLeft: 24 }}>
        <Typography variant="h3" gutterBottom component="div">
          Alumnos
        </Typography>
      </Grid>
      <Table {...propsTable} />
    </Grid>
  );
};

export default Alumnos;
