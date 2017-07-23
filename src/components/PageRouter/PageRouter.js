import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { NavigationBar } from '../NavigationBar';
import { PageHome } from '../PageHome';
import { PageSignin } from '../PageSign';
import { AdminRouter } from '../PageAdmin';
import { NoRouteMatch } from '../NoRouteMatch';
import { SecuredRoute } from './SecuredRoute';
import { UnsecuredRoute } from './UnsecuredRoute';

class PageRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavigationBar />

                    <Switch>
                        <Route exact path="/" component={PageHome}/>
                        <UnsecuredRoute path="/signin" component={PageSignin}/>
                        <SecuredRoute path="/admin" component={AdminRouter}/>
                        <Route component={NoRouteMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export { PageRouter };
