import React from 'react'

const UpdateUserRow = props => (
  <div className='w-75 ml-auto mr-auto'>
    <div className='input-group input-group-sm mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text span-width'>Username</span>
      </div>
      <input type='text' className='form-control' />
    </div>
    <div className='input-group input-group-sm mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text span-width'>Email</span>
      </div>
      <input type='text' className='form-control' />
    </div>
    <div className='input-group input-group-sm mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text span-width'>Points</span>
      </div>
      <input type='number' className='form-control' />
    </div>
    <div className='input-group input-group-sm d-flex align-items-center'>
      <div className='input-group-prepend'>
        <span className='input-group-text span-width'>Admin</span>
      </div>
      <input type='checkbox' className='form-control align-self-center' />
    </div>
  </div>
)

export default UpdateUserRow