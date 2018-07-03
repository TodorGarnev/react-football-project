import React from 'react'

const LogIn = props => (
  <form className='form'>
    <div className='form-group'>
      <label htmlFor='login-email'>Email address</label>
      <input
        type='email'
        className='form-control'
        id='login-email'
        placeholder='Enter email'
      />
    </div>
    <div className='form-group'>
      <label htmlFor='login-password'>Password</label>
      <input
        type='password'
        className='form-control'
        id='login-password'
        placeholder='Password'
      />
    </div>
    <button type='submit' className='btn btn-primary'>Log in</button>
  </form>
)

export default LogIn
