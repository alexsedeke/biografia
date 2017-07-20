import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import firebase from 'firebase';
import { NavigationBar } from '../NavigationBar';
import { PageHome } from '../PageHome';
import { PageLogin } from '../PageLogin';
import { NoRouteMatch } from '../NoRouteMatch';

class PageRouter extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged( user => {
            if ( user ) {
                //
            } else {
                //
            }
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <NavigationBar />

                    <Switch>
                        <Route exact path="/" component={PageHome}/>
                        <Route path="/login" component={PageLogin}/>
                        <Route component={NoRouteMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export { PageRouter };
