import React, { Component } from 'react'
import Navigation from './Navigation'
import LogOut from './LogOut'

export default class Header extends Component {


  showLogOut = () => {
    if (localStorage.getItem('token')) {
      return (
        <LogOut user={props.user} />
      )
    }
    return null
  }



  render = () => (
    <Navigation
      user={this.props.user}
      showLogOut={this.showLogOut}
    />
  )
}