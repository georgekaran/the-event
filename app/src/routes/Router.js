import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../pages/Login'

export default () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            </Switch>
        </Router>
    )
}