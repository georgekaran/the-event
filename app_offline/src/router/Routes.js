import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from '../App'
import CheckIn from "../pages/CheckIn";

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" comp >
            <App />
          </Route>
          <Route path="/event/:id">
            <CheckIn />
          </Route>
        </Switch>
    </Router>
  );
}