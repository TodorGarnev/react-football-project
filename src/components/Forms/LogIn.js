import React from 'react'

const LogIn = props => (
  <form className='form'>
    <div className='form-group'>
      <label htmlFor='login-username'>Username</label>
      <input
        name='username'
        type='text'
        className='form-control'
        id='login-email'
        placeholder='Username'
        onChange={props.handleChange}
      />
    </div>
    <div className='form-group'>
      <label htmlFor='login-password'>Password</label>
      <input
        name='password'
        type='password'
        className='form-control'
        id='login-password'
        placeholder='Password'
        onChange={props.handleChange}
      />
    </div>
    <button
      type='submit'
      className='btn btn-primary'
      onClick={props.handleLogin}
    >Log in</button>
  </form>
)

export default LogIn
