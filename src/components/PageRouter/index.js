import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { NavigationBar } from '../NavigationBar';
import { PageHome } from '../PageHome';
import { PageLogin } from '../PageLogin';
import { NoRouteMatch } from '../NoRouteMatch';

const PageRouter = () => (
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
)

export { PageRouter };
