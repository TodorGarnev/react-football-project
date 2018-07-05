import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        username: 'Your username',
        password: 'Your password',
        email: 'Your email'
      }
    }
  }

  render = () => (
    <div className='container bg-secondary d-flex text-white justify-content-around p-4'>
      <div className='text-center'>
        <h5 className='mb-4'>Profile picture</h5>
        <img src='https://i0.wp.com/ebus.ca/wp-content/uploads/2017/08/profile-placeholder.jpg' alt='' className='image' />
      </div>
      <div className='text-center'>
        <h5 className='mb-4'>Personal information</h5>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text span-width">Username</span>
          </div>
          <input type="text" className="form-control" value={this.state.user.username} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text span-width">Password</span>
          </div>
          <input type="text" className="form-control" value={this.state.user.password} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text span-width">Email</span>
          </div>
          <input type="text" className="form-control" value={this.state.user.email} />
        </div>
      </div>
    </div>
  )
}