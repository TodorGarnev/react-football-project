import React from 'react'

const SignUp = props => (
  <form className='form'>
    <div className='form-group'>
      <label htmlFor='signup-email'>Email address</label>
      <input
        name='email'
        type='email'
        className='form-control'
        id='signup-email'
        placeholder='Enter email'
        onChange={props.handleChange}
      />
    </div>
    <div className='form-group'>
      <label htmlFor='signup-password'>Password</label>
      <input
        name='password'
        type='password'
        className='form-control'
        id='signup-password'
        placeholder='Password'
        onChange={props.handleChange}
      />
    </div>
    <div className='form-group'>
      <label htmlFor='signup-username'>Username</label>
      <input
        name='username'
        type='text'
        className='form-control'
        id='signup-username'
        placeholder='Username'
        onChange={props.handleChange}
      />
    </div>
    <button
      type='submit'
      className='btn btn-primary'
      onClick={props.onSignUp}
    >Sign up</button>
  </form>
)

export default SignUp