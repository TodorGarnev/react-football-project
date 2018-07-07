import React, { Component } from 'react'

export default class Match extends Component {
  constructor(props) {
    super(props)

    this.state = {
      smth: ''
    }
  }

  render = () => (
    <div className='d-sm-flex w-100 ml-auto mr-auto mb-5 text-white'>
      <div className='bg-info p-2 w-100 d-flex justify-content-between display-4'>
        <span>Team</span>
        <span>?</span>
      </div>
      <div className='bg-info p-2 w-100 d-flex justify-content-between display-4 flex-sm-row-reverse'>
        <span>Team</span>
        <span >?</span>
      </div>
    </div>
  )
}