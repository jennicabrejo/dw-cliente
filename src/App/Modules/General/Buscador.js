import React, {useState} from "react";
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

export default function Buscador(props) {
  const classes = useStyles();
  const [argumento, setArg] = useState("");

  return (
    <Grid container style={{ paddingBottom: 24 }} spacing={2}>
      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          label="Buscar"
          id="fullWidth"
          onBlur={(e) => setArg(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton style={{ padding: 4 }} onClick = { () => {
                  props.onClick(argumento);
                }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            className: classes.center,
          }}
        />
      </Grid>
      {(props.propsBasicSelect) &&
        (!props.propsBasicSelect ? (
          <Grid item xs={12} md={4}>
            <SelectCheck />
          </Grid>
        ) : (
          <Grid item xs={12} md={4}>
            <BasicSelect {...props.propsBasicSelect}/>
          </Grid>
        ))}
    </Grid>
  );
}
