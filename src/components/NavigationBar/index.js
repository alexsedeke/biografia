import React from 'react'
import {
  Link
} from 'react-router-dom';
import './navigation-bar.css';

const NavigationBar = () => (
    <div className="navigation-bar__wrapper">
        <div className="navigation-bar__placeholder"></div>
        <nav className="navigation-bar">
            <Link className="navigation-bar__item--flex" to="/">Home</Link>
            <Link className="navigation-bar__item" to="/login">login</Link>
        </nav>
    </div>    
)

export { NavigationBar }
