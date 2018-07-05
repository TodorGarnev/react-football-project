import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = props => (
  <nav className='navbar navbar-dark bg-dark justify-content-start'>
    <div className='nav nav-pills'>
      <NavLink activeClassName='active-link' className='nav-item nav-link active' to='/'>Home</NavLink>
      <NavLink activeClassName='active-link' className='nav-item nav-link' to='/profile'>Profile</NavLink>
      <NavLink activeClassName='active-link' className='nav-item nav-link' to='/rules'>Rules</NavLink>
      <NavLink activeClassName='active-link' className='nav-item nav-link' to='/dashboard'>Dashboard</NavLink>
    </div>
  </nav>
)

export default Navigation 