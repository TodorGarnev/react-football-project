import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import LogOut from './LogOut'
import logo from '../../ball.png'

const Navigation = props => {
  const { _kmd } = props.user
  const isLoggedIn = localStorage.getItem('token')
  const isAdmin = _kmd && (_kmd.roles !== undefined && _kmd.roles.length > 0)

  return (
    <nav className='navbar navbar-dark bg-dark justify-content-between d-flex'>
      <div className='nav nav-pills align-self-start'>
        {isLoggedIn && <NavLink activeClassName='active' className='nav-link' to='/home' exact>Home</NavLink>}
        {!isLoggedIn && props.location.pathname === '/login' ?
          <NavLink activeClassName='active' className='nav-link' to='/login' exact>Home</NavLink> :
          !isLoggedIn && <NavLink activeClassName='active' className='nav-link' to='/signup' exact>Home</NavLink>
        }
        {isLoggedIn && <NavLink activeClassName='active' className='nav-link' to='/profile'>Profile</NavLink>}
        {isAdmin && <NavLink activeClassName='active' className='nav-link' to='/dashboard'>Dashboard</NavLink>}
        <NavLink activeClassName='active' className='nav-link' to='/rules'>Rules</NavLink>
      </div>
      <img src={logo} width='50' alt='logo' />
      {isLoggedIn && <LogOut user={props.user} />}
    </nav>
  )
}

export default withRouter(Navigation)