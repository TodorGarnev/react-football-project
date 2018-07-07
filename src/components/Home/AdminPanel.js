import React, { Component } from 'react'
import UserRow from './UserRow'
import UpdateUserRow from './UpdateUserRow'

export default class AdminPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      showUser: false
    }
  }

  componentDidMount = () => {
    fetch('https://baas.kinvey.com/user/kid_rJZtL7CMQ', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Kinvey ' + localStorage.getItem('token'),
        'X-Kinvey-API-Version': '3',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response)
        this.setState({
          users: response
        })
      })
      .catch(err => console.log(err))
  }

  chooseUser = (e, id) => {
    console.log(this.e.target.value)
  }

  showUser = () => this.setState({
    showUser: true
  })

  render = () => {
    const allUsers = this.state.users.map(user =>
      <UserRow
        key={user._id}
        username={user.username}
        email={user.email}
        checked={(user._kmd.roles !== undefined && user._kmd.roles.length > 0) ? true : false}
        showUser={this.showUser}
      />
    )

    return (
      <div>
        <table className='table text-center'>
          <thead className='bg-info text-white'>
            <tr>
              <th scope='col'>Username</th>
              <th scope='col'>Email</th>
              <th scope='col'>Points</th>
              <th scope='col'>Admin</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {allUsers}
          </tbody>
        </table>
        {this.state.showUser && <UpdateUserRow />}
      </div>
    )
  }
}