import React from "react";
import { Grid, Typography } from "@mui/material";
import Table from "../../General/TableComponent";

const columns = [
  { id: "codigo_curso", label: "Codigo", minWidth: 150 },
  { id: "Curso_nombre", label: "Curso", minWidth: 150 },
];


const Cursos = (props) => {
  const propsTable = {
    rows: props.data,
    columns,
    title: "Mis Cursos",
  };

  return (
    <Grid container>
      <Grid item xs = {12} style = {{marginTop: 24, marginLeft: 24}}>
        <Typography variant="h3" gutterBottom component="div">
          Cursos
        </Typography>
      </Grid>
      <Table {...propsTable} />
    </Grid>
  );
};

export default Cursos;
