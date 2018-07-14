import React from 'react'
import { withRouter } from 'react-router-dom'

const Clarification = props => {
  const toggleSignUp = (e, path) => {
    e.preventDefault()
    props.hideError()
    props.history.push(path)
  }

  return (
    <div className='text-center alert alert-warning'>
      {props.location.pathname === '/login' &&
        <div>If you don't have an account you can sign up
          <a href='' onClick={(e) => toggleSignUp(e, '/signup')}> here!</a>
        </div>}

      {props.location.pathname === '/signup' &&
        <div>If you already have an account you can log in
        <a href='' onClick={e => toggleSignUp(e, 'login')}> here!</a>
        </div>}
    </div>
  )
}

export default withRouter(Clarification)