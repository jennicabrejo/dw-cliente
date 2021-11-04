import React from "react";
import { Grid, Typography } from "@mui/material";
import Table from "../../General/TableComponent";
const rows = [
  {
    nombre: "Desarrollo Web",
    codigo: "0509-1",
    catedratico: "Ruldin"
  },
];

const columns = [
  { id: "codigo", label: "Codigo", minWidth: 150 },
  { id: "nombre", label: "Curso", minWidth: 150 },
  { id: "catedratico", label: "Catedratico", minWidth: 150 },
];

const Cursos = () => {
  //   const dispatch = useDispatch();
  const propsTable = {
    rows,
    columns,
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
