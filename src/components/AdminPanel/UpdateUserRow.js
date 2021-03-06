import React from 'react'

const UpdateUserRow = props => (
  <div className='w-75 ml-auto mr-auto'>
    <div className='input-group input-group-sm mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text span-width'>Username</span>
      </div>
      <input
        name='username'
        type='text'
        className='form-control'
        value={props.selectedUser.data.username}
        onChange={props.handleChange}
      />
    </div>
    <div className='input-group input-group-sm mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text span-width'>Email</span>
      </div>
      <input
        name='email'
        type='email'
        className='form-control'
        value={props.selectedUser.data.email}
        onChange={props.handleChange}
      />
    </div>
    <button
      className='btn btn-info w-100 mt-4'
      onClick={props.handleUpdate}
    >Update Profile Info</button>
    <button
      className='btn btn-info w-100 mt-4'
      onClick={props.handleToggleAdmin}
    >Toggle Admin</button>
    <button
      className='btn btn-info w-100 mt-4'
      onClick={props.handleDelete}
    >Delete</button>
    <button
      className='btn btn-info w-100 mt-4 mb-4'
      onClick={props.handleClose}
    >Close</button>
  </div>
)

export default UpdateUserRow