import React from 'react'

const SignUp = props => (
  <form className='form'>
    <div className='form-group'>
      <label htmlFor='signup-email'>Email address</label>
      <input
        type='email'
        className='form-control'
        id='signup-email'
        placeholder='Enter email'
      />
    </div>
    <div className='form-group'>
      <label htmlFor='signup-password'>Password</label>
      <input
        type='password'
        className='form-control'
        id='signup-password'
        placeholder='Password'
      />
    </div>
    <div className='form-group'>
      <label htmlFor='signup-username'>Username</label>
      <input
        type='password'
        className='form-control'
        id='signup-username'
        placeholder='Username'
      />
    </div>
    <button type='submit' className='btn btn-primary'>Register</button>
  </form>
)

export default SignUp