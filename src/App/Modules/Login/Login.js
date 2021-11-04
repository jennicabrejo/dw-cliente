import * as React from "react";
import logo from "../../Static/logo2.png";
import Formsy from "formsy-react";
import {
  Card,
  CardContent,
  Box,
  Grid,
  TextField,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ButtonLogin from "./ButtonLogin";

const useStyles = makeStyles((theme) => ({
  contain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "brown",
  },
  card: {
    width: 400,
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "right",
    padding: "16px 0px 0px 0px",
  },
}));

export function Login() {
  const classes = useStyles();

  const inputProps = {
    style: {
      background: "white" 
    }
  }
  return (
    <Grid container className={classes.contain}>
      <Card className={`${classes.card}`}>
        <Grid container>
          <Grid item xs={12} className={classes.center}>
            <CardMedia
              style={{ height: 192, width: "auto"}}
              component="img"
              image={logo}
            />
          </Grid>
          <Grid item xs={12}>
            <CardContent>
              <Formsy>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="filled"
                      id="outlined-required"
                      label="Usuario"
                      defaultValue=""
                      autoComplete="off"
                      style={{ width: "100%"}}
                      inputProps={inputProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="filled"
                      id="outlined-password-input"
                      label="Contraseña"
                      type="password"
                      autoComplete="off"
                      style={{ width: "100%"}}
                      inputProps={inputProps}
                    />
                  </Grid>
                </Grid>
              </Formsy>
              <Box component="div" className={classes.box}>
                <ButtonLogin />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Login;
