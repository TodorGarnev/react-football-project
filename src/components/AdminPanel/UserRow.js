import React from 'react'

const UserRow = props => (
  <tr>
    <td>{props.userData.username}</td>
    <td>{props.userData.email}</td>
    <td>
      <input
        type='checkbox'
        checked={props.checked}
        disabled
      />
    </td>
    <td>
      <button
        data-id={props.userData._id}
        className='btn btn-info'
        onClick={props.getUser}
      >Edit</button>
    </td>
  </tr>
)

export default UserRow