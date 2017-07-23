import React from 'react'
import {
  Link
} from 'react-router-dom';
import './navigation-bar.css';
import { isAuthenticated } from '../../helper/auth';
import * as firebase from 'firebase';

class NavigationBar extends React.Component {

    signout() {
        firebase.auth().signOut();
    }

    authenticated() {
        return (
            <div className="navigation-bar__wrapper">
               <div className="navigation-bar__placeholder"></div>
               <nav className="navigation-bar">
                    <div className="navigation-bar__item--flex">
                        <Link className="navigation-bar__link" to="/">Home</Link>
                    </div>
                    <div className="navigation-bar__item">
                        <Link className="navigation-bar__link" to="/admin">Admin</Link>
                        <a className="navigation-bar__link" onClick={this.signout} >Sign Out</a>
                    </div>
               </nav>
           </div>
        )
    }

    unauthenticated() {
        return (
            <div className="navigation-bar__wrapper">
               <div className="navigation-bar__placeholder"></div>
               <nav className="navigation-bar">
                    <div className="navigation-bar__item--flex">
                        <Link className="navigation-bar__link" to="/">Home</Link>
                    </div>
                    <div className="navigation-bar__item">
                        <Link className="navigation-bar__link" to="/signin">Sign In</Link>
                    </div>
               </nav>
           </div>
        )
    }

    render() {
        if (isAuthenticated()) {
            return this.authenticated();
        } else {
            return this.unauthenticated();
        }

    }
}

export { NavigationBar }
