import React from 'react'

const LogIn = props => (
  <form className='form'>
    <div className='form-group'>
      <label htmlFor='login-username'>Username</label>
      <input
        type='text'
        className='form-control'
        id='login-email'
        placeholder='Username'
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
