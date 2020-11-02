import firebase from 'firebase/app';
import React from 'react';

import { Redirect, Route } from 'react-router-dom';

export const ProtectRouter = ({ component: Component, ...rest }: any) => {
    const isLogged = firebase.auth().currentUser;
    const routerComponent = (props: any) => (
        isLogged
            ? React.createElement(Component, props)
            : <Redirect to={ { pathname: '/login' } } />
    );
    return <Route { ...rest } render={ routerComponent } />
}