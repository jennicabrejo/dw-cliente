import * as React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconSelector from "./IconSelector";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { CardMedia } from "@mui/material";
import Modal from "./Modal";
import Sesion from "./Sesion";
import logo from "../../Static/logo.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Main(props) {
  // Styles
  const classes = useStyles();
  // States
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    left: false,
  });
  //Effects

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const listaDrawer = (anchor) => (
    <Box
      xs={250}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={"sesion-ic"} onClick={() => setOpen(true)}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Sesion"} />
        </ListItem>
        <Divider />
        {props.menuDrawer?.map((text, index) => (
          <ListItem button key={text} onClick={() => props.setItem(text)}>
            <ListItemIcon>
              <IconSelector icono={text} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const controlersModal = {
    open,
    setOpen,
  };

  return (
    <Grid container style={{ display: "flow-root"}}>
      <Grid item xs={12}>
        <AppBar
          position="static"
          style={{
            background: "brown",
            color: "whitesmoke",
            height: 64,
          }}
        >
          <Toolbar>
            {props.menuDrawer ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(true)}
              >
                <AccountCircleIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {listaDrawer("left")}
        </Drawer>
        <Modal
          {...controlersModal}
          content={<Sesion {...controlersModal} />}
          boxProps={{
            className: classes.center,
          }}
        />
      </Grid>
      {props?.item && !props.content ? (
        <Grid item xs={12} className={classes.center}>
          <CardMedia
            style={{ height: 720, width: "auto" }}
            component="img"
            image={logo}
          />
        </Grid>
      ) : (
        <Grid item xs={12}>
          {props.content}
        </Grid>
      )}
    </Grid>
  );
}
