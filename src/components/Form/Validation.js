import React from 'react'

const Validation = props => (
  <div className='text-center alert alert-danger mt-2'>
    {props.error}
  </div>
)

export default Validation