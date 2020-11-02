import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Historico from './components/Historico';
import Login from './components/Login';
import { ProtectRouter } from './protectRouter';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <ProtectRouter path="/" exact component={ App } />
            <Route path="/login" component={ Login } />
            <Route path="/historico" component={ Historico } />
        </Switch>
    </BrowserRouter>
)


export default Routes;