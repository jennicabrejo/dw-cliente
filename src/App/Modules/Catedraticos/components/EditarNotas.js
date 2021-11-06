import React, { useState } from "react";
import logo from "../../../Static/logo2.png";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Grid, Box, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  center: {
    width: 375,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "right",
    padding: "16px 0px 0px 0px",
  },
  cerrarbt: {
    backgroundColor: "brown",
    color: "white",
  },
  cancelarbt: {
    backgroundColor: "white",
    color: "black",
  },
}));

export default function EditarNotas(props) {
  const {row} = props.current;
  const classes = useStyles();


  const [nota, setValues] = useState({
    estudiante_carnet: props.current.row?.estudiante_carnet || "",
    estudiante_nota: props.current.row?.estudiante_nota || "",
    codigo_curso: props.current.row?.codigo_curso || "",
  });

  const editarNotas = () => {
    props.setOpen(false);
    props.confirmClick(nota);
  };

  const handlerBlur = (target) => {
    setValues({
      ...nota,
      [target.name]: target.value,
    });
  };

  const cancelar = () => {
    props.setOpen(false);
  };

  const inputProps = {
    style: {
      background: "white",
    },
  };

  return (
    <Card style={{ padding: 16 }}>
      <Grid container>
        <Grid item xs={12} className={classes.center}>
          <CardMedia
            component="img"
            style={{ height: 128, width: "auto" }}
            image={logo}
          />
        </Grid>
      </Grid>
      <CardContent style={{ padding: 32 }}>
        <Typography gutterBottom variant="body1" component="div">
          EDITAR NOTA
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Está apunto de cambiar los datos de la nota, ¿Desea continuar?
        </Typography>
        <Grid container>
          <Grid item sx={12} md={5}>
            <TextField
              name = "estudiante_carnet"
              variant="filled"
              id="outlined-required"
              label="Carnet"
              defaultValue={row.estudiante_carnet}
              autoComplete="off"
              style={{ width: "100%" }}
              inputProps={inputProps}
              onBlur={(e) => {handlerBlur(e.target)}}
            />
          </Grid>
          <Grid item sx={12} md={2}>
            <TextField
              name = "estudiante_nota"
              variant="filled"
              id="outlined-required"
              label="Nota"
              defaultValue={row.estudiante_nota}
              autoComplete="off"
              style={{ width: "100%" }}
              inputProps={inputProps}
              onBlur={(e) => {handlerBlur(e.target)}}
            />
          </Grid>
          <Grid item sx={12} md={5}>
            <TextField
              name = "codigo_curso"
              variant="filled"
              id="outlined-required"
              label="Codigo Curso"
              defaultValue={row.codigo_curso}
              autoComplete="off"
              style={{ width: "100%" }}
              inputProps={inputProps}
              onBlur={(e) => {handlerBlur(e.target)}}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Box component="div" className={classes.box}>
        <CardActions>
          <Button
            variant="contained"
            onClick={editarNotas}
            className={classes.cerrarbt}
          >
            Editar Nota
          </Button>
          <Button
            variant="contained"
            onClick={cancelar}
            className={classes.cancelarbt}
          >
            Cancelar
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
