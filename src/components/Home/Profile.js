import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: this.props.user.email,
      username: this.props.user.username,
    }
  }

  // componentDidMount = () => {
  //   if (localStorage.getItem('token')) {
  //     fetch('https://baas.kinvey.com/user/kid_rJZtL7CMQ/_me', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Kinvey ' + localStorage.getItem('token'),
  //         'X-Kinvey-API-Version': '3',
  //       }
  //     })
  //       .then(data => data.json())
  //       .then(response => {
  //         console.log(response)
  //         if (response.error === undefined) {
  //           this.setState({
  //             email: response.email,
  //             username: response.username
  //           })
  //         }
  //       })
  //       .catch(err => console.log(err))
  //   }
  // }

  render = () => (
    <div className='jumbotron bg-secondary d-flex text-white justify-content-around p-4'>
      <div className='text-center'>
        <h5 className='mb-4 bg-info p-2 rounded'>Profile picture</h5>
        <img src='https://i0.wp.com/ebus.ca/wp-content/uploads/2017/08/profile-placeholder.jpg' alt='' className='image' />
      </div>
      <div className='text-center'>
        <h5 className='mb-4 bg-info p-2 rounded'>Personal information</h5>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text span-width">Username</span>
          </div>
          <input type="text" className="form-control" placeholder={this.state.username} disabled />
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text span-width">Email</span>
          </div>
          <input type="text" className="form-control" placeholder={this.state.email} disabled />
        </div>
      </div>
    </div>
  )
}