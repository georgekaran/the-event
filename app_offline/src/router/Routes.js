import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import App from '../App'
import CheckIn from "../pages/CheckIn";

export default function Routes() {
  return (
    <Router>
      <Button variant="contained" color="primary">
        Atualizar dados
      </Button>
      <Button variant="contained" color="primary">
        Enviar dados
      </Button>
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