import React, { Component } from 'react'
import UserRow from './UserRow'
import UpdateUserRow from './UpdateUserRow'
import Validation from '../Validation/Validation'

export default class AdminPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      selectedUser: {
        data: {},
        showMe: false,
        id: ''
      },
      error: ''
    }
  }

  componentDidMount = () => {
    fetch(`https://baas.kinvey.com/user/kid_rJZtL7CMQ`, {
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
        this.setState({ users: response })
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

  hideError = () => {
    this.setState({ error: '' })
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
    const email = this.state.selectedUser.data.email
    const emailRegEx = /(\w+)\@(\w+)\.[a-zA-Z]/g
    const testEmail = emailRegEx.test(email)

    if (!testEmail) {
      this.setState({ error: 'Please enter a valid email!' })
    } else {
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
            const users = this.state.users
            const userId = users.findIndex(x => x._id === response._id)
            if (userId > -1) {
              const userToUpdate = users[userId]
              userToUpdate.username = response.username
              userToUpdate.email = response.email

              users[userId] = userToUpdate
            }

            this.setState({ users: users.slice(0) })
            this.hideError()
          } else {
            this.setState({ error: 'The username is already taken!' })
          }
        })
        .catch(err => console.log(err))
    }
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

    fetch(`https://baas.kinvey.com/user/kid_rJZtL7CMQ/${this.state.selectedUser.id}/roles/c3d31cd1-28b3-436d-b7f9-9611e6d4dcfe`, {
      method: (this.state.selectedUser.data.isAdmin ? 'PUT' : 'DELETE'),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic a2lkX3JKWnRMN0NNUTo3Mjg4NTAyMjc0YzI0YmRmOWE5YmE5ZWE3ZTM3ZGFlZg==',
        'X-Kinvey-API-Version': '3',
      }
    })
      .then(response => {
        console.log(response)
        const updatedUserIndex = this.state.users.findIndex(x => x._id === this.state.selectedUser.id)
        const users = this.state.users.slice(0)

        if (updatedUserIndex > -1) {
          users[updatedUserIndex]._kmd.roles = (this.state.selectedUser.data.isAdmin ? [response] : [])
          users[updatedUserIndex]._kmd = Object.assign({}, users[updatedUserIndex]._kmd)
        }

        this.setState({ users: users })
        this.hideError()
      })
      .catch(err => console.log(err))
  }

  handleDelete = () => {
    fetch(`https://baas.kinvey.com/user/kid_rJZtL7CMQ/${this.state.selectedUser.id}?hard=true`, {
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
          const filteredUsers = this.state.users.filter(item => item._id !== this.state.selectedUser.id)
          console.log(filteredUsers)
          this.setState({
            users: filteredUsers,
            selectedUser: {
              showMe: false
            }
          })
          this.hideError()
        }
      })
      .catch(err => console.log(err))
  }

  handleClose = () => {
    this.setState({
      selectedUser: {
        showMe: false
      }
    })
    this.hideError()
  }

  render = () => {
    const allUsers = this.state.users.map(user =>
      <UserRow
        key={user._id}
        userId={user._id}
        userData={user}
        checked={(user._kmd.roles !== undefined && user._kmd.roles.length > 0) ? true : false}
        getUser={this.getUser}
      />
    )

    return (
      <div>
        {this.state.users.length > 0 ?
          <div>
            <table className='table text-center'>
              <thead className='bg-info text-white'>
                <tr>
                  <th scope='col'>Username</th>
                  <th scope='col'>Email</th>
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
                selectedUser={this.state.selectedUser}
                handleChange={this.handleChange}
                handleUpdate={this.handleUpdate}
                handleToggleAdmin={this.handleToggleAdmin}
                handleDelete={this.handleDelete}
                handleClose={this.handleClose}
              />
            }
            {this.state.error &&
              < Validation
                error={this.state.error}
              />
            }
          </div> :
          <div className='d-flex justify-content-center'>
            <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span>
          </div>
        }

      </div>
    )
  }
}