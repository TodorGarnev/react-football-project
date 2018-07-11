import React from 'react'

const Validation = props => (
  <div className='text-center alert alert-danger'>
    {props.error}
  </div>
)

export default Validation