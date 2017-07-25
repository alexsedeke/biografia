import React from 'react';
import { Link } from 'react-router-dom';

export const Menubar = () => (
    <div className="sub-navigation">
        <div className="limit-width">
            <Link className="sub-navigation__link" to="/admin/profile"><span>Profile</span></Link>
            <Link className="sub-navigation__link" to="/admin/socials"><span>Socials</span></Link>
            <Link className="sub-navigation__link" to="/admin/sections"><span>Sections</span></Link>
        </div>
    </div>
);
