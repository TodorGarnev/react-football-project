import React, { Component } from 'react'
import UserRow from './UserRow'
import UpdateUserRow from './UpdateUserRow'

export default class AdminPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  render = () => (
    <div>
      <table className='table text-center'>
        <thead className='bg-secondary text-white'>
          <tr>
            <th scope='col'>Username</th>
            <th scope='col'>Email</th>
            <th scope='col'>Points</th>
            <th scope='col'>Admin</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <UserRow />
          <UserRow />
        </tbody>
      </table>
      <UpdateUserRow />
    </div>
  )
}