import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../helper/auth';

export const SecuredRoute = ({ component: Component, ...rest }) => (
    isAuthenticated()
    ?<Route {...rest} render={ props => <Component {...props} /> } />
    :<Redirect to="/signin" />
);
