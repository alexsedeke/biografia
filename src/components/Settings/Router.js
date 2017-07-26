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
import './settings.css';

class SettingsRouter extends React.Component {

    render() {
        return (
            <Router>
                <div className="settings app__view">
                    <Menubar />
                    <Route path="/settings" render={() => (
                        <Redirect to="/settings/profile" />
                    )} />
                    <Route path="/settings/profile" component={Profile} />
                    <Route path="/settings/socials" component={Socials} />
                    <Route path="/settings/sections" component={Sections} />
                </div>
            </Router>
        )
    }
}

export { SettingsRouter };
