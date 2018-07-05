import React from 'react'

const UserRow = props => (
  <tr>
    <td>test2</td>
    <td>test2@abv.bg</td>
    <td>0</td>
    <td>
      <input type='checkbox' disabled />
    </td>
    <td>
      <button className='btn btn-secondary'>Edit</button>
      <button className='btn btn-secondary ml-1'>Delete</button>
    </td>
  </tr>
)

export default UserRow