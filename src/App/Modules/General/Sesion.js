import * as React from "react";
import logo from "../../Static/logo2.png";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Grid, Box } from "@material-ui/core";
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

export default function Sesion(props) {
  const classes = useStyles();

  const cerrarSesion = () => {
    props.setOpen(false);
  };

  const cancelar = () => {
    props.setOpen(false);
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
          CERRAR SESIÓN
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Está apunto de cerrar sesion, ¿Desea continuar?
        </Typography>
      </CardContent>
      <Box component="div" className={classes.box}>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={cerrarSesion}
            className={classes.cerrarbt}
          >
            Cerrar sesion
          </Button>
          <Button
            size="small"
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
