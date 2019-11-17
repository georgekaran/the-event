import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import { store } from '../store/createStore'
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const testComponent = () => (<div>HOME</div>);

const Router = () => {
    const isAuth = sessionStorage.getItem('user') != null;
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute path="/dashboard" component={Home} isAuth={isAuth} />
                        <PublicRoute path="/" component={Login} exact isAuth={isAuth} />
                        <PublicRoute path="/signup" component={SignUp} isAuth={isAuth} />
                        <Route component={<div>Not Found</div>} />
                    </Switch>
                </BrowserRouter>
        </Provider>
    )
}

export default Router