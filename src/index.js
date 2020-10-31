import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './index.css';
// import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Join from "views/join.js";
import Home from "views/home.js";
import HowJoin from "views/how-to-join.js";
import Guide from "views/guide.js";
import { toast, ToastContainer} from "react-toastify";


ReactDOM.render(
  <BrowserRouter basename="/ui-templates/StrictlyMine">
  <ToastContainer/>
    <Switch>
      <Route path="/guide" component={Guide} />
      <Route path="/how-to-join" component={HowJoin} />
      <Route path="/join" component={Join} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
