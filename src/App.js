import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import Login from "./App/Modules/Login/Login";
import { Catedraticos } from "./App/Modules/Catedraticos/Catedraticos";
import { Estudiantes } from "./App/Modules/Estudiantes/Estudiantes";
function App() {
  return (
    <Router>
      <Grid container style={{ width: "100%", height: window.innerHeight}}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/catedraticos" component={Catedraticos} />
          <Route exact path="/estudiantes" component={Estudiantes} />
        </Switch>
      </Grid>
    </Router>
  );
}
export default App;
