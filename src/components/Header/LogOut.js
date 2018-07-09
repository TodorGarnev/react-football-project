import React from 'react'
import { withRouter } from 'react-router-dom'

const LogOut = props => {
  const logOut = e => {
    e.preventDefault()

    fetch('https://baas.kinvey.com/user/kid_rJZtL7CMQ/_logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Kinvey ' + localStorage.getItem('token'),
        'X-Kinvey-API-Version': '3',
      }
    })

    localStorage.removeItem('token')
    props.history.push('/')
  }

  return (
    <div>
      <span
        className='text-white ml-2'
      >Hello, {props.user.username}! | </span>
      <a
        href=''
        className='text-white'
        onClick={logOut}
      >Log out</a>
    </div>
  )
}

export default withRouter(LogOut)