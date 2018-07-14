import React from 'react'
import { withRouter } from 'react-router-dom'

const LogOut = props => {
  const logOut = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    props.history.push('/')
  }

  return (
    <div>
      <span
        className='text-white ml-2'
      >Hello, <strong>{props.user.username}</strong>! | </span>
      <a
        href=''
        className='text-white'
        onClick={logOut}
      >Log out</a>
    </div>
  )
}

export default withRouter(LogOut)