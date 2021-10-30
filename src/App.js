import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./App/Modules/Login/Login";
import { Catedraticos } from "./App/Modules/Catedraticos/Catedraticos";
function App() {
  return (
       <Router >
        <div className="App">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/catedraticos' component={Catedraticos} />
            </Switch>
        </div>
      </Router>
  );
}
export default App;
