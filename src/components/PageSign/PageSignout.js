import React from 'react';
import { Redirect } from 'react-router-dom';
import * as firebase from 'firebase';

class PageSignout extends React.Component {
    state = {
        redirect: false
    }

    componentDidMount() {
        const signoutPromise = firebase.auth().signOut();
        signoutPromise.then(() => {
            this.setState({redirect: true});
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return (
            this.state.redirect
            ?<Redirect to="/signin" />
            :<div></div>
        )
    }
}

export  { PageSignout };
