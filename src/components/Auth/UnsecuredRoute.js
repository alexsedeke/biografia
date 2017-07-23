import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../helper/auth';

export const UnsecuredRoute = ({ component: Component, ...rest }) => (
    isAuthenticated()
    ?<Redirect to="/" />
    :<Route {...rest} render={ props => <Component {...props} /> } />
);
