import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import { Profile } from './Profile';
import { Timeline } from './Timeline';

class AdminRouter extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Link to="/admin/profile">Profile</Link>
                    <Link to="/admin/timeline">Timeline</Link>

                    <Route path="/admin" render={() => (
                        <Redirect to="/admin/profile" />
                    )} />
                    <Route path="/admin/profile" component={Profile} />
                    <Route path="/admin/timeline" component={Timeline} />
                </div>
            </Router>
        )
    }
}

export { AdminRouter };
