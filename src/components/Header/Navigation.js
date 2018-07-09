import React from 'react'
import { NavLink } from 'react-router-dom'
import LogOut from './LogOut'

const Navigation = props => {

  const showLogOut = () => {
    if (localStorage.getItem('token')) {
      return (
        <LogOut user={props.user} />
      )
    }

    return null
  }

  return (
    <nav className='navbar navbar-dark bg-dark justify-content-start d-flex justify-content-between'>
      <div className='nav nav-pills'>
        <NavLink activeClassName='active' className='nav-link' to='/' exact>Home</NavLink>
        {props.user._kmd ?
          (props.user._kmd.roles !== undefined && props.user._kmd.roles.length > 0) && <NavLink activeClassName='active' className='nav-link' to='/profile'>Profile</NavLink>
          : ''}
        <NavLink activeClassName='active' className='nav-link' to='/rules'>Rules</NavLink>
        {props.user._kmd ?
          (props.user._kmd.roles !== undefined && props.user._kmd.roles.length > 0) && <NavLink activeClassName='active' className='nav-link' to='/dashboard'>Dashboard</NavLink>
          : ''}
      </div>
      {showLogOut()}
    </nav>
  )
}

export default Navigation