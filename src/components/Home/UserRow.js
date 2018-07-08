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
        data-id={props.userId}
        className='btn btn-info'
        onClick={props.getUser}
      >Edit</button>
    </td>
  </tr>
)

export default UserRow