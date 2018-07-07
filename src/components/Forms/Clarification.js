import React from 'react'

const Clarification = props => {
  const login = props.route === 'login' ? <div>If you don't have an account you can sign up <a href='' onClick={props.setSignUp}>here!</a></div > : null
  const signup = props.route === '' ? <div>If you already have an account you can log in <a href='' onClick={props.setLogin}>here!</a></div> : null

  return (
    <div className='clarification alert alert-warning'>
      {login}
      {signup}
    </div>
  )
}



export default Clarification