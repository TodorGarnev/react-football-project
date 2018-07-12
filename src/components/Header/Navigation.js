import React from 'react'
import { NavLink } from 'react-router-dom'
import LogOut from './LogOut'
import logo from '../../ball.png'

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
    <nav className='navbar navbar-dark bg-dark justify-content-between d-flex'>
      <div className='nav nav-pills align-self-start'>
        <NavLink activeClassName='active' className='nav-link' to='/' exact>Home</NavLink>
        {props.user._kmd && localStorage.getItem('token') ?
          <NavLink activeClassName='active' className='nav-link' to='/profile'>Profile</NavLink>
          : ''}
        {props.user._kmd && localStorage.getItem('token') ?
          (props.user._kmd.roles !== undefined && props.user._kmd.roles.length > 0) && <NavLink activeClassName='active' className='nav-link' to='/dashboard'>Dashboard</NavLink>
          : ''}
        <NavLink activeClassName='active' className='nav-link' to='/rules'>Rules</NavLink>
      </div>
      <img src={logo} width='50' alt='logo' />
      {showLogOut()}
    </nav>
  )
}

export default Navigation