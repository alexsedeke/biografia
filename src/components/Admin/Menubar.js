import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menubar = () => (
    <div className="sub-navigation">
        <div className="limit-width">
            <NavLink activeClassName="active" className="sub-navigation__link" to="/admin/profile"><span>Profile</span></NavLink>
            <NavLink activeClassName="active" className="sub-navigation__link" to="/admin/socials"><span>Socials</span></NavLink>
            <NavLink activeClassName="active" className="sub-navigation__link" to="/admin/sections"><span>Sections</span></NavLink>
        </div>
    </div>
);
