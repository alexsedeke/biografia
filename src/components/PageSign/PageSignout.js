import React from 'react';
import { Redirect } from 'react-router-dom';
import * as firebase from 'firebase';

class Logout extends React.Component {
    componentDidMount() {
        ;
    }

    render() {
        const signout = firebase.auth().signOut();
        return signout.then(() => {
            return (
                <Redirect to="/login" />
            )
        });
    }
}

export  { Logout };
