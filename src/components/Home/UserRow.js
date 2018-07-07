import React from 'react'

const UserRow = props => (
  <tr>
    <td>{props.username}</td>
    <td>{props.email}</td>
    <td>0</td>
    <td>
      <input
        type='checkbox'
        checked={props.checked}
        disabled
      />
    </td>
    <td>
      <button
        className='btn btn-info'
        onClick={props.showUser}
      >Edit</button>
      <button className='btn btn-info ml-1'>Delete</button>
    </td>
  </tr>
)

export default UserRow