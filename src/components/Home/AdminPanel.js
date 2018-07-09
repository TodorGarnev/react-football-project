import React, { Component } from 'react'
import UserRow from './UserRow'
import UpdateUserRow from './UpdateUserRow'

export default class AdminPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      selectedUser: {
        data: {},
        showMe: false,
        id: ''
      }
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

  getUser = e => {
    const pickedUser = this.state.users.find(user => user._id === e.target.dataset.id)

    this.setState({
      selectedUser: {
        data: {
          username: pickedUser.username,
          email: pickedUser.email,
          isAdmin: (pickedUser._kmd.roles !== undefined && pickedUser._kmd.roles.length > 0) ? true : false
        },
        showMe: true,
        id: pickedUser._id
      }
    })
  }

  handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    const newState = {}
    newState[name] = value

    this.setState({
      selectedUser: {
        data: Object.assign(this.state.selectedUser.data, newState),
        showMe: this.state.selectedUser.showMe,
        id: this.state.selectedUser.id
      }
    })
  }

  handleUpdate = () => {
    console.log(this.state.selectedUser);
    // const users = this.state.users;
    // const userId = users.findIndex(x => x._id === this.state.selectedUser._id);
    // const userToUpdate = users[userId];
    // const test = Object.keys(userToUpdate.data).filter(el => userToUpdate.data[el] !== this.state.selectedUser[el]);
    // console.log(test);

    fetch(`https://baas.kinvey.com/user/kid_rJZtL7CMQ/${this.state.selectedUser.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        username: this.state.selectedUser.data.username,
        email: this.state.selectedUser.data.email,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Kinvey ' + localStorage.getItem('token'),
        'X-Kinvey-API-Version': '3',
      }
    })
      .then(data => data.json())
      .then(response => {
        if (response.error === undefined) {
          const users = this.state.users;
          const userId = users.findIndex(x => x._id === response._id);
          if (userId > -1) {
            const userToUpdate = users[userId];
            userToUpdate.username = response.username;
            userToUpdate.email = response.email;

            users[userId] = userToUpdate;
          }

          this.setState({
            users: users.slice(0),
            selectedUser: {
              showMe: false
            }
          })
        }
      })
      .catch(err => console.log(err))
  }

  handleToggleAdmin = () => {
    this.setState({
      selectedUser: {
        data: Object.assign(this.state.selectedUser.data, {
          isAdmin: !this.state.selectedUser.data.isAdmin
        }),
        showMe: this.state.selectedUser.showMe,
        id: this.state.selectedUser.id
      }
    })

    if (this.state.selectedUser.data.isAdmin === true) {
      fetch('https://baas.kinvey.com/user/kid_rJZtL7CMQ/' + this.state.selectedUser.id + '/roles/c3d31cd1-28b3-436d-b7f9-9611e6d4dcfe', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic a2lkX3JKWnRMN0NNUTo3Mjg4NTAyMjc0YzI0YmRmOWE5YmE5ZWE3ZTM3ZGFlZg==',
          'X-Kinvey-API-Version': '3',
        }
      })
        .then(data => data.json())
        .then(response => {
          console.log(response)
          if (response.error === undefined) {
            this.setState({
              selectedUser: {
                showMe: false
              }
            })
          }
        })
        .catch(err => console.log(err))
    } else if (this.state.selectedUser.data.isAdmin === false) {
      fetch('https://baas.kinvey.com/user/kid_rJZtL7CMQ/' + this.state.selectedUser.id + '/roles/c3d31cd1-28b3-436d-b7f9-9611e6d4dcfe', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic a2lkX3JKWnRMN0NNUTo3Mjg4NTAyMjc0YzI0YmRmOWE5YmE5ZWE3ZTM3ZGFlZg==',
          'X-Kinvey-API-Version': '3',
        }
      })
        .then(response => {
          console.log(response)
          if (response.error === undefined) {
            this.setState({
              selectedUser: {
                showMe: false
              }
            })
          }
        })
        .catch(err => console.log(err))
    }
  }

  handleDelete = () => {
    fetch('https://baas.kinvey.com/user/kid_rJZtL7CMQ/' + this.state.selectedUser.id + '?hard=true', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Kinvey ' + localStorage.getItem('token'),
        'X-Kinvey-API-Version': '3',
      }
    })
      .then(response => {
        console.log(response)
        if (response.error === undefined) {
          this.setState({
            selectedUser: {
              showMe: false
            }
          })
        }
      })
      .catch(err => console.log(err))
  }

  render = () => {
    const allUsers = this.state.users.map(user =>
      <UserRow
        key={user._id}
        userId={user._id}
        username={user.username}
        email={user.email}
        checked={(user._kmd.roles !== undefined && user._kmd.roles.length > 0) ? true : false}
        getUser={this.getUser}
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
        {this.state.selectedUser.showMe &&
          <UpdateUserRow
            username={this.state.selectedUser.data.username}
            email={this.state.selectedUser.data.email}
            checked={this.state.selectedUser.data.isAdmin}
            handleChange={this.handleChange}
            handleUpdate={this.handleUpdate}
            handleToggleAdmin={this.handleToggleAdmin}
            handleDelete={this.handleDelete}
          />
        }
      </div>
    )
  }
}