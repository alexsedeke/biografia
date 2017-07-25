import React from 'react';
import { Link } from 'react-router-dom';

export const Menubar = () => (
    <div className="menu-bar">
        <Link to="/admin/profile">Profile</Link>
        <Link to="/admin/socials">Socials</Link>
        <Link to="/admin/sections">Sections</Link>
    </div>
);
