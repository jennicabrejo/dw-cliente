import * as React from "react";
import { Grid, IconButton, InputAdornment } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@mui/icons-material/Search";
import SelectCheck from "./SelectCheck";
import BasicSelect from "./BasicSelect";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Buscador() {
  const classes = useStyles();

  return (
    <Grid container style={{ paddingBottom: 24 }} spacing={2}>
      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          label="Buscar"
          id="fullWidth"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton style={{ padding: 4 }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            className: classes.center,
          }}
        />
      </Grid>
      {false &&
        (true ? (
          <Grid item xs={12} md={4}>
            <SelectCheck />
          </Grid>
        ) : (
          <Grid item xs={12} md={4}>
            <BasicSelect />
          </Grid>
        ))}
    </Grid>
  );
}
