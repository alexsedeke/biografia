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
import { PageAdmin } from '../PageAdmin';
import { NoRouteMatch } from '../NoRouteMatch';
import { SecuredRoute } from './SecuredRoute';
import { UnsecuredRoute } from './UnsecuredRoute';

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
                        <UnsecuredRoute path="/login" component={PageLogin}/>
                        <SecuredRoute path="/admin" component={PageAdmin}/>
                        <Route component={NoRouteMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export { PageRouter };
