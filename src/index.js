import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./App/Redux/store";

ReactDOM.render(
  <Provider store = {store}> {/*ES EL PROVEDOR DE REDUX*/}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);