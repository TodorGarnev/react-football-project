import React, { Component } from 'react'
import Form from './../Forms/Form'
import Match from './Match'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render = () => (
    <div>
      <Match />
    </div>
  )
}