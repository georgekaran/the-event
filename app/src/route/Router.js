import React, { useMemo } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import { store } from '../store/createStore'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Event from '../pages/Events';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const testComponent = () => (<div>HOME</div>);
const notFoundComponent = () => (<div>Página não encontrada</div>);

const Router = () => {
    const isAuth = sessionStorage.getItem('user') != null
    console.log(isAuth)
    return isAuth ? (
        <Provider store={store}>
                <BrowserRouter>
                    <Home>
                        <Switch>
                            <PrivateRoute path="/" exact component={Event} isAuth={isAuth} />
                            <Route component={notFoundComponent} />
                        </Switch>
                    </Home>
                </BrowserRouter>
        </Provider>
    ) : (
        <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <PublicRoute path="/" component={Login} exact isAuth={isAuth} />
                        <PublicRoute path="/signup" component={SignUp} isAuth={isAuth} />
                        <Route component={notFoundComponent} />
                    </Switch>
                </BrowserRouter>
        </Provider>
    );
}

export default Router