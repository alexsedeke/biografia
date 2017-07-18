import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavigationBar = () => (
  <nav className="navigation-bar">
    <Link className="navigation-bar__item" to="/">Home</Link>
    <Link className="navigation-bar__item" to="/login">login</Link>
  </nav>
)

export { NavigationBar }
