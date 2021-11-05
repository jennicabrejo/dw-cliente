import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Table from "../../General/TableComponent";

const columns = [
  { id: "codigo_curso", label: "Codigo Curso", minWidth: 150 },
  { id: "curso", label: "Carnet Alumno", minWidth: 150 },
  { id: "nota", label: "Nota", minWidth: 150 },
];

const Notas = (props) => {

  const propsTable = {
    rows: props?.rows,
    columns,
    title: "Notas",
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{ marginTop: 24, marginLeft: 24 }}>
        <Typography variant="h3" gutterBottom component="div">
          Mis Notas
        </Typography>
      </Grid>
      <Table {...propsTable}/>
    </Grid>
  );
};

export default Notas;
