import React from 'react'

const Profile = props => (
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
        <input type="text" className="form-control" placeholder={props.username} disabled />
      </div>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text span-width">Email</span>
        </div>
        <input type="text" className="form-control" placeholder={props.email} disabled />
      </div>
    </div>
  </div>
)


export default Profile