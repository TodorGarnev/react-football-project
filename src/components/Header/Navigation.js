import React from 'react'
import { NavLink } from 'react-router-dom'
import LogOut from './LogOut'

const Navigation = props => {

  const showLogOut = () => {
    if (localStorage.getItem('token')) {
      return (
        <LogOut />
      )
    }

    return null
  }

  return (
    <nav className='navbar navbar-dark bg-dark justify-content-start d-flex justify-content-between'>
      <div className='nav nav-pills'>
        <NavLink activeClassName='active' className='nav-link' to='/' exact>Home</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/profile'>Profile</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/rules'>Rules</NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/dashboard'>Dashboard</NavLink>
      </div>
      {showLogOut()}
    </nav>
  )
}

export default Navigation