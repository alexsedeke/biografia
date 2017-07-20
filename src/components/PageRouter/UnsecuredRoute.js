import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as firebase from 'firebase';

class UnsecuredRoute extends React.Component{
    render() {
        const { component: Component, ...rest } = this.props;
        const auth = firebase.auth().currentUser;

        return (
            auth
            ?<Redirect to="/" />
            :<Route {...rest} render={ props => <Component {...props} /> } />
        )
    }
}

export { UnsecuredRoute };
