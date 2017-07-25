import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { Menubar } from './Menubar';
import { Profile } from './Profile';
import { Socials } from './Socials';
import { Sections } from './Sections';

class AdminRouter extends React.Component {

    render() {
        return (
            <Router>
                <div className="admin-view">
                    <Menubar />
                    <Route path="/admin" render={() => (
                        <Redirect to="/admin/profile" />
                    )} />
                    <Route path="/admin/profile" component={Profile} />
                    <Route path="/admin/socials" component={Socials} />
                    <Route path="/admin/sections" component={Sections} />
                </div>
            </Router>
        )
    }
}

export { AdminRouter };
